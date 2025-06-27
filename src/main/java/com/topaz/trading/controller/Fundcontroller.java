package com.topaz.trading.controller;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.JSONValue;
import org.json.simple.parser.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.Gson;

@RestController
public class Fundcontroller {
	
	
	@Autowired
	MarketwatchProvider marketwatchProvider;
	
	//private static Logger logger = LogManager.getLogger(Fundcontroller.class);

    private static Logger logger = LoggerFactory.getLogger(Fundcontroller.class);
	
	
	@RequestMapping(value = "/Funds22", method = RequestMethod.POST)
	public ResponseEntity<String> LimitsPage(HttpServletRequest request, HttpServletResponse response,@RequestParam String Segmentall,@RequestParam String Segmentcom ) {
		
		//API.18.01 LIMITS
		
		String LimitsPageoutput="";
		HttpSession session = null;
		session = request.getSession();
		String userId = (String) session.getAttribute("userId");
		String PublicKey4=(String) session.getAttribute("publicKey4");
		String tomcatCount=(String) session.getAttribute("TomcatCount");
		
		List<JSONObject> fundsArrayResponse = new ArrayList<JSONObject>();
		

		JSONObject FundsResponsebyCOM = new JSONObject();
		JSONObject FundsResponsebyALL = new JSONObject();
		
		JSONArray array = new JSONArray();
		
	//	String segment="COM|ALL";
		
		JSONObject LimitsPageInput = new JSONObject();	
	
		

		if (Segmentall.equals("ALL")) {

			LimitsPageInput.put("segment", "ALL");
			LimitsPageInput.put("actid", userId);
			LimitsPageInput.put("uid", userId);

			try {
				String eJdata = LimitsPageInput.toJSONString();
				String jKey = CommonFunction.hashData(PublicKey4);

				StringBuffer Limits = new StringBuffer(marketwatchProvider.getLimitsurl());
				Limits.append("jsessionid=" + "." + tomcatCount + "&jData=" + eJdata + "&jKey=" + jKey + "");

				URL LimitsPageurl = new URL(Limits.toString());
				logger.info("Fund All Segment  Request URL : " + LimitsPageurl.toString());

				HttpURLConnection LimitsPageurlconn = (HttpURLConnection) LimitsPageurl.openConnection();

				LimitsPageurlconn.setRequestMethod("POST");
				LimitsPageurlconn.setRequestProperty("Accept", "application/json");

				logger.info("Fund All Segment Response Code : " + LimitsPageurlconn.getResponseCode());
				
				if (LimitsPageurlconn.getResponseCode() != 200) {
					throw new RuntimeException("Failed : HTTP error code : " + LimitsPageurlconn.getResponseCode());
				}

				BufferedReader br2 = new BufferedReader(new InputStreamReader((LimitsPageurlconn.getInputStream())));
				String output;

				while ((output = br2.readLine()) != null) {
					Object obj = JSONValue.parse(output);
					FundsResponsebyALL = (JSONObject) obj;
				}
				
				// Logging purpose				
				logger.info("Fund All Segment Response Value :"+FundsResponsebyALL); 
				
				LimitsPageurlconn.disconnect();				
			} catch (Exception e) {
				logger.error("Unexpected Funds All Segment error", e.getMessage());

			}
		}
		
		
		if(Segmentcom.equals("COM")) {
			
			LimitsPageInput.put("segment",  "COM");
			LimitsPageInput.put("actid", userId);
			LimitsPageInput.put("uid", userId);			
			
			try {
				String eJdata =  LimitsPageInput.toJSONString();
				String jKey = CommonFunction.hashData(PublicKey4);
				
				StringBuffer Limits = new StringBuffer(marketwatchProvider.getLimitsurl());
				Limits.append("jsessionid=" + "." + tomcatCount + "&jData=" + eJdata + "&jKey=" + jKey + "");

				URL LimitsPageurl = new URL(Limits.toString());
				logger.info("Fund COM Segment Request URL : "+LimitsPageurl.toString()); 
				
				HttpURLConnection LimitsPageurlconn = (HttpURLConnection) LimitsPageurl.openConnection();
				
				LimitsPageurlconn.setRequestMethod("POST");
				LimitsPageurlconn.setRequestProperty("Accept", "application/json");
				
				logger.info("Fund COM Segment Response Code : "+LimitsPageurlconn.getResponseCode()); 
				if (LimitsPageurlconn.getResponseCode() != 200) {
					throw new RuntimeException("Failed : HTTP error code : " + LimitsPageurlconn.getResponseCode());
				}

				BufferedReader br2 = new BufferedReader(new InputStreamReader((LimitsPageurlconn.getInputStream())));
				String output;
				JSONObject LimitsPageJson=new JSONObject();
				
				while ((output = br2.readLine()) != null) {
					Object obj = JSONValue.parse(output);
					FundsResponsebyCOM = (JSONObject) obj;
				}
				// Logging purpose 	
				String	LimitsPageoutputTAG=FundsResponsebyCOM.toJSONString();
				logger.info("Fund COM Segment Response Value :"+FundsResponsebyCOM); 
				
				LimitsPageurlconn.disconnect();
				
			} catch (Exception e) {
				logger.error("Unexpected Funds COM Segment error", e.getMessage());
			}
			
			}
		
		fundsArrayResponse.add(FundsResponsebyALL);
		fundsArrayResponse.add(FundsResponsebyCOM);
		
		LimitsPageoutput= new Gson().toJson(fundsArrayResponse.toString());
		
		logger.info("Fund COM|ALL Segment Response Value :"+LimitsPageoutput); 
		
		return ResponseEntity.ok().body(LimitsPageoutput);
	}
	
	 
	/*@RequestMapping(value = "/Funds", method = RequestMethod.POST)
	public ResponseEntity<String> LimitsPage(HttpServletRequest request, HttpServletResponse response) {
		
		//API.18.01 LIMITS
		
		String LimitsPageoutput="";
		HttpSession session = null;
		session = request.getSession();
		String userId = (String) session.getAttribute("userId");
		String PublicKey4=(String) session.getAttribute("publicKey4");
		String tomcatCount=(String) session.getAttribute("TomcatCount");
		
		String segment="COM|ALL";
	
		JSONObject LimitsPageInput = new JSONObject();		
		LimitsPageInput.put("segment", segment);
		LimitsPageInput.put("actid", userId);
		LimitsPageInput.put("uid", userId); 
		
		
		try {
			String eJdata =  LimitsPageInput.toJSONString();
			String jKey = CommonFunction.hashData(PublicKey4);
			
			StringBuffer Limits = new StringBuffer(marketwatchProvider.getLimitsurl());
			Limits.append("jsessionid=" + "." + tomcatCount + "&jData=" + eJdata + "&jKey=" + jKey + "");

			URL LimitsPageurl = new URL(Limits.toString());
			logger.info("Fund URL : "+LimitsPageurl.toString()); 
			
			HttpURLConnection LimitsPageurlconn = (HttpURLConnection) LimitsPageurl.openConnection();
			
			LimitsPageurlconn.setRequestMethod("POST");
			LimitsPageurlconn.setRequestProperty("Accept", "application/json");
			
			logger.info("Fund Response Code : "+LimitsPageurlconn.getResponseCode()); 
			if (LimitsPageurlconn.getResponseCode() != 200) {
				throw new RuntimeException("Failed : HTTP error code : " + LimitsPageurlconn.getResponseCode());
			}

			BufferedReader br2 = new BufferedReader(new InputStreamReader((LimitsPageurlconn.getInputStream())));
			String output;
			JSONObject LimitsPageJson=new JSONObject();
			
			while ((output = br2.readLine()) != null) {
				Object obj = JSONValue.parse(output);
				LimitsPageJson = (JSONObject) obj;
				
				// Display purpose for the Front End
				LimitsPageoutput = new Gson().toJson(output);
			}
			// Logging purpose 	
			String	LimitsPageoutputTAG=LimitsPageJson.toJSONString();
			logger.info("Fund Response Value :"+LimitsPageoutputTAG); 
			
		} catch (Exception e) {
			logger.error("Unexpected Funds error", e.getMessage());

		}
		return ResponseEntity.ok().body(LimitsPageoutput);
	}*/
	
	
	
	//===================== PAYIN END  ========================================
	
	@RequestMapping(value = "/PayinLink", method = RequestMethod.POST)
	public ResponseEntity<String> PayinLinkPage(@RequestParam String Key,HttpServletRequest request, HttpServletResponse response) {
		
		String PayinLinkoutput = null; 
	
		HttpSession session = null;
		session = request.getSession();
		String userId = (String) session.getAttribute("userId");
		String PublicKey4=(String) session.getAttribute("publicKey4");
			
		String sAccountId=userId;
		String sLoginId=userId;
			
		
			try {
				
				String jKey = CommonFunction.hashData(PublicKey4);
				
				StringBuffer PayinLink = new StringBuffer(marketwatchProvider.getPayinurl());
				PayinLink.append("sAccountId=" + sAccountId + "&sLoginId=" + sLoginId + "&Key="+Key +"&token=" + jKey + "");
				
				
				URL PayinLinkPageurl = new URL(PayinLink.toString());
				logger.info("PayIn URL : "+PayinLinkPageurl.toString());						

				/*HttpURLConnection PayinLinkPageurlconn = (HttpURLConnection) PayinLinkPageurl.openConnection();

				
				PayinLinkPageurlconn.setRequestMethod("POST");
				PayinLinkPageurlconn.setRequestProperty("Accept", "application/json");
				
				logger.info("PayIn Response Code : "+PayinLinkPageurlconn.getResponseCode());
				
				if (PayinLinkPageurlconn.getResponseCode() != 200) {
					throw new RuntimeException("Failed : HTTP error code : " + PayinLinkPageurlconn.getResponseCode());
				}*/

				/*BufferedReader br2 = new BufferedReader(new InputStreamReader((PayinLinkPageurlconn.getInputStream())));
				String output;
				JSONObject PayoutLinkPageJson=new JSONObject();
				
				while ((output = br2.readLine()) != null) {
					Object obj = JSONValue.parse(output);
					PayoutLinkPageJson = (JSONObject) obj;
					
					// Display purpose for the Front End
					//PayinLinkoutput = new Gson().toJson(PayinLinkPageurl);
				}
				
				PayinLinkoutput=PayoutLinkPageJson.toJSONString();
				logger.info("PayIn Response Value :"+PayinLinkoutput);*/

					
				PayinLinkoutput = new Gson().toJson(PayinLinkPageurl);
				logger.info("PayIn Response Value  :"+PayinLinkoutput);
				
			} catch (Exception e) {
				
				logger.error("Unexpected PayinLinkPage(Funds) error", e.getMessage());

			}
		
		return ResponseEntity.ok().body(PayinLinkoutput);		
	}
	
	//===================== PAYIN END  ========================================
	
	
	
	
	
	
	
	//===================== PAYOUT START ===================
	
	@RequestMapping(value = "/PayoutLink", method = RequestMethod.POST)
	public ResponseEntity<String> PayoutLinkPage(@RequestParam String Key,HttpServletRequest request, HttpServletResponse response) {
		
		String PayoutLinkoutput = null; 
	
		HttpSession session = null;
		session = request.getSession();
		String userId = (String) session.getAttribute("userId");
		String PublicKey4=(String) session.getAttribute("publicKey4");
			
		String sAccountId=userId;
		String sLoginId=userId;
			
//		http://trade.enrichbroking.com/PaymentGateway/Main/PayOut.jsp?sAccountId=100002&sLoginId=100002&Key=PAYOUT&token=2edcbbf6-a05b-4010-9596-c529fae8984d
		
			try {				
				String jKey = CommonFunction.hashData(PublicKey4);
				
				StringBuffer PayoutLink = new StringBuffer(marketwatchProvider.getPayouturl());
				PayoutLink.append("sAccountId=" + sAccountId + "&sLoginId=" + sLoginId + "&Key="+Key +"&token=" + jKey + "");
				
				URL PayoutLinkPageurl = new URL(PayoutLink.toString());				
				logger.info("PayOut URL : "+PayoutLinkPageurl.toString());
				
				/*HttpURLConnection PayoutLinkPageurlconn = (HttpURLConnection) PayoutLinkPageurl.openConnection();				
				PayoutLinkPageurlconn.setRequestMethod("POST");
				PayoutLinkPageurlconn.setRequestProperty("Accept", "application/json");	
				
				logger.info("PayOut Response Code : "+PayoutLinkPageurlconn.getResponseCode());
				
				if (PayoutLinkPageurlconn.getResponseCode() != 200) {
					throw new RuntimeException("Failed : HTTP error code : " + PayoutLinkPageurlconn.getResponseCode());
				}*/

				/*BufferedReader br2 = new BufferedReader(new InputStreamReader((PayoutLinkPageurlconn.getInputStream())));
				String output;
				JSONObject PayoutLinkPageJson=new JSONObject();
				
				while ((output = br2.readLine()) != null) {
					Object obj = JSONValue.parse(output);
					PayoutLinkPageJson = (JSONObject) obj;
					
					// Display purpose for the Front End
					//PayoutLinkoutput = new Gson().toJson(PayoutLinkPageurl);
				}
				
				 PayoutLinkoutput=PayoutLinkPageJson.toJSONString();
				 
				logger.info("PayOut Response Value :"+PayoutLinkoutput);*/

				PayoutLinkoutput = new Gson().toJson(PayoutLinkPageurl);
				
				logger.info("PayOut Response Value:"+PayoutLinkoutput);
				
			} catch (Exception e) {
				logger.error("Unexpected PayoutLinkPage(Funds) error", e.getMessage());
			}
		
		return ResponseEntity.ok().body(PayoutLinkoutput);
		
	}
	
	//===================== PAYOUT END  ========================================
	
}
