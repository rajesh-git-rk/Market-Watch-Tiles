package com.topaz.trading.mobile;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.security.NoSuchAlgorithmException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.JSONValue;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.Gson;
import com.topaz.trading.controller.CommonFunction;
import com.topaz.trading.controller.MarketwatchProvider;
import com.topaz.trading.model.Client;
import com.topaz.trading.model.Funds;
import com.topaz.trading.pojo.UserInfo;

@RestController
public class MobileFundcontroller {

	@Autowired
	MarketwatchProvider marketwatchProvider;
	
	@Autowired
	MobileLogincontrollerOmensys  mobileLogincontroller;
	

	private static Logger logger = LoggerFactory.getLogger(MobileFundcontroller.class);

	@RequestMapping(value = "/mobileFunds", method = RequestMethod.POST)
	public ResponseEntity<String> getmobileFunds(HttpServletRequest request, HttpServletResponse response,
			@RequestBody Funds funds) throws UnsupportedEncodingException, NoSuchAlgorithmException {

		// API.18.01 LIMITS

		List<JSONObject> fundsArrayResponse = new ArrayList<JSONObject>();

		JSONObject FundsResponsebyCOM = new JSONObject();
		JSONObject FundsResponsebyALL = new JSONObject();

		String LimitsPageoutput = "";
		
		
		String PublicKey4=null,TomcatCount=null;
		
		for ( Map.Entry<String, UserInfo> entry : mobileLogincontroller.Loginmap.entrySet()) {
			
			String key = entry.getKey();
		    UserInfo tab = entry.getValue();
		    // do something with key and/or tab
		    
		   // System.out.println("LimitsPage : "+key + ": " + tab.getTomcatCount());
		    
		    PublicKey4=tab.getPublicKey4();
		    TomcatCount=tab.getTomcatCount();
		}
		
		System.out.println(" LimitsPage PublicKey4 : " +PublicKey4+"  TomcatCount : "+TomcatCount);

		// String segment="COM|ALL";

		JSONObject LimitsPageInput = new JSONObject();

		String Segmentcom = funds.getSegmentCom();

		if (Segmentcom.equals("COM")) {

			LimitsPageInput.put("segment", "COM");
			LimitsPageInput.put("actid", funds.getActid());
			LimitsPageInput.put("uid", funds.getUid());
			try {
				String eJdata = LimitsPageInput.toJSONString();
				String jKey = CommonFunction.hashData(PublicKey4);

				StringBuffer Limits = new StringBuffer(marketwatchProvider.getLimitsurl());
				Limits.append("jsessionid=" + "." + TomcatCount + "&jData=" + eJdata + "&jKey=" + jKey + "");

				URL LimitsPageurl = new URL(Limits.toString());
				logger.info("Fund  Request URL : " + LimitsPageurl.toString());

				HttpURLConnection LimitsPageurlconn = (HttpURLConnection) LimitsPageurl.openConnection();

				LimitsPageurlconn.setRequestMethod("POST");
				LimitsPageurlconn.setRequestProperty("Accept", "application/json");

				logger.info("Fund Response Code : " + LimitsPageurlconn.getResponseCode());
				
				if (LimitsPageurlconn.getResponseCode() != 200) {
					throw new RuntimeException("Failed : HTTP error code : " + LimitsPageurlconn.getResponseCode());
				}

				BufferedReader br2 = new BufferedReader(new InputStreamReader((LimitsPageurlconn.getInputStream())));
				String output;

				while ((output = br2.readLine()) != null) {
					Object obj = JSONValue.parse(output);
					FundsResponsebyCOM = (JSONObject) obj;
				}

				// Logging purpose
				logger.info("Fund Response Value :" + FundsResponsebyCOM);
				LimitsPageurlconn.disconnect();
			} catch (Exception e) {
				logger.error("Unexpected Funds error", e.getMessage());

			}

		}

		String Segmentall = funds.getSegmentAll();

		if (Segmentall.equals("ALL")) {

			LimitsPageInput.put("segment", "ALL");

			LimitsPageInput.put("actid", funds.getActid());
			LimitsPageInput.put("uid", funds.getUid());

			try {
				String eJdata = LimitsPageInput.toJSONString();
				String jKey = CommonFunction.hashData(PublicKey4);

				StringBuffer Limits = new StringBuffer(marketwatchProvider.getLimitsurl());
				Limits.append("jsessionid=" + "." + TomcatCount + "&jData=" + eJdata + "&jKey=" + jKey + "");

				URL LimitsPageurl = new URL(Limits.toString());
				logger.info("Fund URL : " + LimitsPageurl.toString());

				HttpURLConnection LimitsPageurlconn = (HttpURLConnection) LimitsPageurl.openConnection();

				LimitsPageurlconn.setRequestMethod("POST");
				LimitsPageurlconn.setRequestProperty("Accept", "application/json");

				logger.info("Fund Response Code : " + LimitsPageurlconn.getResponseCode());
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
				logger.info("Fund Response Value :" + FundsResponsebyALL);
				LimitsPageurlconn.disconnect();
			} catch (Exception e) {
				logger.error("Unexpected Funds error", e.getMessage());

			}
		}

		fundsArrayResponse.add(FundsResponsebyCOM);
		fundsArrayResponse.add(FundsResponsebyALL);

		return ResponseEntity.ok().body(fundsArrayResponse.toString());
	}

	// ===================== PAYIN END ========================================

	@RequestMapping(value = "/mobilePayinLink", method = RequestMethod.POST)
	public ResponseEntity<JSONObject> getmobilePayinLink(HttpServletRequest request, HttpServletResponse response,
			@RequestBody Funds funds) throws UnsupportedEncodingException, NoSuchAlgorithmException {

		JSONObject PayINLinkPageJson = new JSONObject();

		String PayinLinkoutput = null;


		String PublicKey4=null,TomcatCount=null,userId=null;
		
		for ( Map.Entry<String, UserInfo> entry : mobileLogincontroller.Loginmap.entrySet()) {
			
			String key = entry.getKey();
		    UserInfo tab = entry.getValue();
		    // do something with key and/or tab
		    
		   // System.out.println(" PayinLink : "+key + ": " + tab.getTomcatCount());
		    
		    PublicKey4=tab.getPublicKey4();
		    TomcatCount=tab.getTomcatCount();
		    userId=tab.getClientid();
		}
		
		System.out.println("  PayinLink PublicKey4 : " +PublicKey4+"  TomcatCount : "+TomcatCount);
		
		String sAccountId = userId;
		String sLoginId = userId;

		try {

			String jKey = CommonFunction.hashData(PublicKey4);

			StringBuffer PayinLink = new StringBuffer(marketwatchProvider.getPayinurl());
			PayinLink.append("sAccountId=" + sAccountId + "&sLoginId=" + sLoginId + "&Key=" + funds.getKey() + "&token="
					+ jKey + "");

			URL PayinLinkPageurl = new URL(PayinLink.toString());
			logger.info("PayIn URL : " + PayinLinkPageurl.toString());

			HttpURLConnection PayinLinkPageurlconn = (HttpURLConnection) PayinLinkPageurl.openConnection();

			PayinLinkPageurlconn.setRequestMethod("POST");
			PayinLinkPageurlconn.setRequestProperty("Accept", "application/json");

			logger.info("PayIn Response Code : " + PayinLinkPageurlconn.getResponseCode());

			if (PayinLinkPageurlconn.getResponseCode() != 200) {
				throw new RuntimeException("Failed : HTTP error code : " + PayinLinkPageurlconn.getResponseCode());
			}

			BufferedReader br2 = new BufferedReader(new InputStreamReader((PayinLinkPageurlconn.getInputStream())));
			String output;

			while ((output = br2.readLine()) != null) {
				Object obj = JSONValue.parse(output);
				PayINLinkPageJson = (JSONObject) obj;

			}

			logger.info("PayIn Response Value  :" + PayINLinkPageJson);
			PayinLinkPageurlconn.disconnect();
		} catch (Exception e) {

			logger.error("Unexpected PayinLinkPage(Funds) error", e.getMessage());

		}

		return ResponseEntity.ok().body(PayINLinkPageJson);
	}

	// ===================== PAYIN END ========================================

	// ===================== PAYOUT START ===================

	@RequestMapping(value = "/mobilePayoutLink", method = RequestMethod.POST)
	public ResponseEntity<JSONObject> getmobilePayoutLinkPage(HttpServletRequest request, HttpServletResponse response,
			@RequestBody Funds funds) throws UnsupportedEncodingException, NoSuchAlgorithmException {

		JSONObject PayoutLinkPageJson = new JSONObject();

		String PayoutLinkoutput = null;

		String PublicKey4=null,TomcatCount=null,userId=null;
		
		for ( Map.Entry<String, UserInfo> entry : mobileLogincontroller.Loginmap.entrySet()) {
			
			String key = entry.getKey();
		    UserInfo tab = entry.getValue();
		    // do something with key and/or tab
		    
		    //System.out.println("PayoutLink : "+key + ": " + tab.getTomcatCount());
		    
		    PublicKey4=tab.getPublicKey4();
		    TomcatCount=tab.getTomcatCount();
		    userId=tab.getClientid();
		}
		
		System.out.println(" PayoutLink PublicKey4 : " +PublicKey4+"  TomcatCount : "+TomcatCount);
		

		String sAccountId = userId;
		String sLoginId = userId;

//		http://trade.enrichbroking.com/PaymentGateway/Main/PayOut.jsp?sAccountId=100002&sLoginId=100002&Key=PAYOUT&token=2edcbbf6-a05b-4010-9596-c529fae8984d

		try {
			String jKey = CommonFunction.hashData(PublicKey4);

			StringBuffer PayoutLink = new StringBuffer(marketwatchProvider.getPayouturl());
			PayoutLink.append("sAccountId=" + sAccountId + "&sLoginId=" + sLoginId + "&Key=" + funds.getKey()
					+ "&token=" + jKey + "");

			URL PayoutLinkPageurl = new URL(PayoutLink.toString());
			logger.info("PayOut URL : " + PayoutLinkPageurl.toString());

			HttpURLConnection PayoutLinkPageurlconn = (HttpURLConnection) PayoutLinkPageurl.openConnection();
			PayoutLinkPageurlconn.setRequestMethod("POST");
			PayoutLinkPageurlconn.setRequestProperty("Accept", "application/json");

			logger.info("PayOut Response Code : " + PayoutLinkPageurlconn.getResponseCode());

			if (PayoutLinkPageurlconn.getResponseCode() != 200) {
				throw new RuntimeException("Failed : HTTP error code : " + PayoutLinkPageurlconn.getResponseCode());
			}

			BufferedReader br2 = new BufferedReader(new InputStreamReader((PayoutLinkPageurlconn.getInputStream())));
			String output;

			while ((output = br2.readLine()) != null) {
				Object obj = JSONValue.parse(output);
				PayoutLinkPageJson = (JSONObject) obj;
			}

			logger.info("PayOut Response Value:" + PayoutLinkPageJson);
			PayoutLinkPageurlconn.disconnect();
		} catch (Exception e) {
			logger.error("Unexpected PayoutLinkPage(Funds) error", e.getMessage());
		}

		return ResponseEntity.ok().body(PayoutLinkPageJson);

	}

	// ===================== PAYOUT END ========================================

}
