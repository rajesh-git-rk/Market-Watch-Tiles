package com.topaz.trading.controller;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.text.ParseException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Random;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.JSONValue;
import org.json.simple.parser.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.google.gson.Gson;
import com.topaz.trading.model.Alerts;
import com.topaz.trading.model.MarketWacthScript;
import com.topaz.trading.model.OrderbookResponse;
import com.topaz.trading.model.OrderhistoryResponse;
import com.topaz.trading.repository.ScriptImp2;



@RestController
public class Orderbookcontroller {

	@Autowired
	MarketwatchProvider marketwatchProvider;
	
	@Autowired
	ScriptImp2 scriptImp;
	
	private static Logger logger = LoggerFactory.getLogger(Orderbookcontroller.class);
	
		
//		@RequestMapping(value = "/DefaultLogin", method = RequestMethod.POST)
//		public String DefaultLoginPage(HttpServletRequest request, HttpServletResponse response) {
//			
//			 
//			HttpSession session = null;
//			session = request.getSession();
//			String userId = (String) session.getAttribute("userId"); 
//			String PublicKey4=(String) session.getAttribute("publicKey4");
////			String tomcatCount=(String) session.getAttribute("TomcatCount");
//			
//			HashMap<String, String>DefaultLoginInput = new HashMap();
//			
//			DefaultLoginInput.put("uid", "100002");
//			
//			try {
//				String tomcatCount="tomcat1";
////				String jKey = hashData(PublicKey4);
//				String jKey ="de1747835dee3d5e7e329fdcdeb8c0edf5edace6191ea19867877d7c0f4bebf7";
//				StringBuffer DefaultLogin = new StringBuffer(marketwatchProvider.getDefaultLoginurl());
//				DefaultLogin.append("jsessionid=" + "." + tomcatCount + "&jData=" + DefaultLoginInput + "&jKey=" + jKey + "");
//
//				
//				
//				URL DefaultLoginURL = new URL(DefaultLogin.toString());
//
//				HttpURLConnection DefaultLoginconn = (HttpURLConnection) DefaultLoginURL.openConnection();
//
//				
//				DefaultLoginconn.setRequestMethod("POST");
//				DefaultLoginconn.setRequestProperty("Accept", "application/json");
//				if (DefaultLoginconn.getResponseCode() != 200) {
//					throw new RuntimeException("Failed : HTTP error code : " + DefaultLoginconn.getResponseCode());
//				}
//
//				BufferedReader br2 = new BufferedReader(new InputStreamReader((DefaultLoginconn.getInputStream())));
//				String output;
//				while ((output = br2.readLine()) != null) {
//					
//					Object obj = JSONValue.parse(output);
//					JSONObject DefaultLoginJson = (JSONObject) obj;
//					
//				}
//
//			} catch (Exception e) {
////				logger.error("Unexpected ValidPwd error", e.getMessage());
//
//			}
//
//
//			
//			
//			
//			return null;
//		}
				
//  Implementation of API 12.01 PlaceOrder
	@RequestMapping(value = "/PlaceOrder22", method = RequestMethod.POST)
	public String PlaceOrderPage(
			@RequestParam String s_prdt_ali, @RequestParam String uid, @RequestParam String actid,
			@RequestParam String Tsym, @RequestParam String exch, @RequestParam String Ttranstype,
			@RequestParam String Ret, @RequestParam String prctyp, @RequestParam String qty,
			@RequestParam String discqty, @RequestParam String MktPro, @RequestParam String Price,
			@RequestParam String TrigPrice, @RequestParam String Pcode, @RequestParam String DateDays,
			@RequestParam String AMO, @RequestParam String PosSquareFlg, @RequestParam String MinQty,
			@RequestParam String naicCode, @RequestParam String orderSource,@RequestParam String TokenNo,
			HttpServletRequest request, HttpServletResponse response) {
		
		
		// API 12.01 PlaceOrder
		String outputValue="";
		HttpSession session = null;
		session = request.getSession();
		String userId = (String) session.getAttribute("userId");
		String PublicKey4=(String) session.getAttribute("publicKey4");
		String tomcatCount=(String) session.getAttribute("TomcatCount");
		
		JSONObject PlaceOrderInput = new JSONObject();
			/*Random random=new Random();
			
			int RandomTag=random.nextInt(4-1)+1;
		 
			switch (RandomTag) {
			case 1:
				PlaceOrderInput.put("TokenNo","228530");
				PlaceOrderInput.put("Tsym", "GOLDM21JUNFUT");
				break;
			case 2:
				PlaceOrderInput.put("TokenNo","220823");
				PlaceOrderInput.put("Tsym", "GOLD21MAY46100CE");
				break;
			case 3:
				PlaceOrderInput.put("TokenNo","221598");
				PlaceOrderInput.put("Tsym", "SILVER21JULFUT");
				break;

			default:
				PlaceOrderInput.put("TokenNo","221598");
			    PlaceOrderInput.put("Tsym", "SILVER21JULFUT");
				break;
			}*/
			
			
			
			
		PlaceOrderInput.put("s_prdt_ali", s_prdt_ali);
		PlaceOrderInput.put("qty", qty);
		PlaceOrderInput.put("uid", uid);
		PlaceOrderInput.put("prctyp",prctyp);		
		PlaceOrderInput.put("orderSource", orderSource);
		PlaceOrderInput.put("naicCode", naicCode);
		PlaceOrderInput.put("exch", exch);	
		PlaceOrderInput.put("TokenNo",TokenNo);
		PlaceOrderInput.put("Tsym", Tsym);
			
		PlaceOrderInput.put("discqty", discqty);
		PlaceOrderInput.put("actid", actid);
		PlaceOrderInput.put("Ttranstype", Ttranstype);
		PlaceOrderInput.put("TrigPrice", TrigPrice);
		
		PlaceOrderInput.put("Ret", Ret);
		PlaceOrderInput.put("Price", Price);
		PlaceOrderInput.put("PosSquareFlg", PosSquareFlg);
		PlaceOrderInput.put("Pcode", Pcode);
		
		PlaceOrderInput.put("MktPro", MktPro);
		PlaceOrderInput.put("MinQty", MinQty);
		PlaceOrderInput.put("DateDays", DateDays);
		PlaceOrderInput.put("AMO", AMO);
		
		try {
			String eJdata =  PlaceOrderInput.toJSONString();
			String jKey = CommonFunction.hashData(PublicKey4);
			
			StringBuffer PlaceOrder = new StringBuffer(marketwatchProvider.getPlaceOrderurl());
			PlaceOrder.append("jsessionid=" + "." + tomcatCount + "&jData=" + eJdata + "&jKey=" + jKey + "");

			URL PlaceOrderurl = new URL(PlaceOrder.toString());
			logger.info("PlaceOrder URL : "+PlaceOrderurl.toString()); 
			HttpURLConnection PlaceOrderconn = (HttpURLConnection) PlaceOrderurl.openConnection();

			
			PlaceOrderconn.setRequestMethod("POST");
			PlaceOrderconn.setRequestProperty("Accept", "application/json");
			logger.info("PlaceOrder Response Code : "+PlaceOrderconn.getResponseCode());
			
			if (PlaceOrderconn.getResponseCode() != 200) {
				throw new RuntimeException("Failed : HTTP error code : " + PlaceOrderconn.getResponseCode());
			}

			BufferedReader br2 = new BufferedReader(new InputStreamReader((PlaceOrderconn.getInputStream())));
			String output;
			JSONObject PlaceOrderJson=null;
			while ((output = br2.readLine()) != null) {
				
				Object obj = JSONValue.parse(output);
				PlaceOrderJson = (JSONObject) obj;
				
			}
			
			
			outputValue=PlaceOrderJson.toJSONString();
			
			logger.info("PlaceOrder Response Value : "+outputValue);

		} catch (Exception e) {
			logger.error("Unexpected PlaceOrder error", e.getMessage());

		}

		return outputValue;

	}
	
	//  Implementation of API 31.01 place bracket order
	@RequestMapping(value = "/placebracketorder", method = RequestMethod.POST)
	public String PlaceBracketOrderPage(
			@RequestParam String exch, @RequestParam String TokenNo, @RequestParam String Ttranstype,
			@RequestParam String qty, @RequestParam String actid, @RequestParam String uid,
			@RequestParam String Ret, @RequestParam String discqty, @RequestParam String Price,
			@RequestParam String ltpOratp, @RequestParam String SqrOffAbsOrticks, @RequestParam String SqrOffvalue,
			@RequestParam String SLAbsOrticks, @RequestParam String SLvalue, @RequestParam String trailingSL,
			@RequestParam String tSLticks, @RequestParam String naicCode,@RequestParam String orderSource,
			@RequestParam String userTag,@RequestParam String prctyp,@RequestParam String TrigPrice,
			HttpServletRequest request, HttpServletResponse response) {
		
		
		
		// API 31.01 place bracket order
		
		String outputValue="";
		HttpSession session = null;
		session = request.getSession();
		String userId = (String) session.getAttribute("userId");
		String PublicKey4=(String) session.getAttribute("publicKey4");
		String tomcatCount=(String) session.getAttribute("TomcatCount");
		
		JSONObject bracketOrderInput = new JSONObject();
		
		bracketOrderInput.put("exch", exch);
		bracketOrderInput.put("TokenNo", TokenNo);
		bracketOrderInput.put("Ttranstype", Ttranstype);
		bracketOrderInput.put("qty", qty);
		bracketOrderInput.put("actid", actid);
		bracketOrderInput.put("uid", uid);
		bracketOrderInput.put("Ret", Ret);
		bracketOrderInput.put("discqty", discqty);
		bracketOrderInput.put("Price", Price);
		bracketOrderInput.put("ltpOratp", ltpOratp);
		bracketOrderInput.put("SqrOffAbsOrticks", SqrOffAbsOrticks);
		bracketOrderInput.put("SqrOffvalue", SqrOffvalue);
		bracketOrderInput.put("SLAbsOrticks", SLAbsOrticks);
		bracketOrderInput.put("SLvalue", SLvalue);
		bracketOrderInput.put("trailingSL", trailingSL);
		bracketOrderInput.put("tSLticks", tSLticks);
		bracketOrderInput.put("naicCode", naicCode);
		bracketOrderInput.put("orderSource", orderSource);
		bracketOrderInput.put("userTag", userTag);
		bracketOrderInput.put("prctyp", prctyp);
		bracketOrderInput.put("TrigPrice", TrigPrice);
		
		
		
		try {
			String eJdata =  bracketOrderInput.toJSONString();
			String jKey =  CommonFunction.hashData(PublicKey4);
			
			StringBuffer bracketOrder = new StringBuffer(marketwatchProvider.getBracketorderurl());
			bracketOrder.append("jsessionid=" + "." + tomcatCount + "&jData=" + eJdata + "&jKey=" + jKey + "");

			URL bracketOrderurl = new URL(bracketOrder.toString());
			HttpURLConnection bracketOrderconn = (HttpURLConnection) bracketOrderurl.openConnection();
			
			logger.info("bracketOrder URL : "+bracketOrderurl);
			
			bracketOrderconn.setRequestMethod("POST");
			bracketOrderconn.setRequestProperty("Accept", "application/json");
			
			logger.info("bracketOrder Response Code : "+bracketOrderconn.getResponseCode());
			
			if (bracketOrderconn.getResponseCode() != 200) {
				throw new RuntimeException("Failed : HTTP error code : " + bracketOrderconn.getResponseCode());
			}

			BufferedReader br2 = new BufferedReader(new InputStreamReader((bracketOrderconn.getInputStream())));
			String output;
			JSONObject bracketOrderJson=null;
			while ((output = br2.readLine()) != null) {
				
				Object obj = JSONValue.parse(output);
				bracketOrderJson = (JSONObject) obj;
				
			}
			
			
			outputValue=bracketOrderJson.toJSONString(); 
			
			logger.info("bracketOrder Response Value : "+outputValue); 
			
		} catch (Exception e) {
			logger.error("Unexpected bracketOrder error", e.getMessage());

		}

		return outputValue;
		
	}
	
//  Implementation of API 34.01 PlaceGTDOrder
	@RequestMapping(value = "/PlaceGTDOrder", method = RequestMethod.POST)
	public String PlaceGTDOrderPage(@RequestParam String s_prdt_ali, @RequestParam String uid,
			@RequestParam String actid, @RequestParam String Tsym, @RequestParam String exch,
			@RequestParam String Ttranstype, @RequestParam String Ret, @RequestParam String prctyp,
			@RequestParam String qty, @RequestParam String Price, @RequestParam String Pcode,
			@RequestParam String DateDays, @RequestParam String Branch, @RequestParam String Broker,
			@RequestParam String naicCode, @RequestParam String orderSource, @RequestParam String userTag,
			HttpServletRequest request, HttpServletResponse response) throws ParseException {

		// API 34.01 PlaceGTDOrder
		String outputValue = "";
		HttpSession session = null;
		session = request.getSession();
		String userId = (String) session.getAttribute("userId");
		String PublicKey4 = (String) session.getAttribute("publicKey4");
		String tomcatCount = (String) session.getAttribute("TomcatCount");

		JSONObject PlaceGTDOrderInput = new JSONObject();

		PlaceGTDOrderInput.put("s_prdt_ali", s_prdt_ali);
		PlaceGTDOrderInput.put("uid", uid);
		PlaceGTDOrderInput.put("actid", actid);
		PlaceGTDOrderInput.put("Tsym", Tsym);
		PlaceGTDOrderInput.put("exch", exch);
		PlaceGTDOrderInput.put("Ttranstype", Ttranstype);
		PlaceGTDOrderInput.put("Ret", Ret);
		PlaceGTDOrderInput.put("prctyp", prctyp);
		PlaceGTDOrderInput.put("qty", qty);
		PlaceGTDOrderInput.put("Price", Price);
		PlaceGTDOrderInput.put("Pcode", Pcode);
		PlaceGTDOrderInput.put("DateDays", DateDays);
		PlaceGTDOrderInput.put("Branch", Branch);
		PlaceGTDOrderInput.put("Broker", Broker);
		PlaceGTDOrderInput.put("naicCode", naicCode);
		PlaceGTDOrderInput.put("orderSource", orderSource);
		PlaceGTDOrderInput.put("userTag", userTag);

		try {
			String eJdata = PlaceGTDOrderInput.toJSONString();
			String jKey = CommonFunction.hashData(PublicKey4);

			StringBuffer PlaceGTDOrder = new StringBuffer(marketwatchProvider.getPlaceGTDOrderurl());
			PlaceGTDOrder.append("jsessionid=" + "." + tomcatCount + "&jData=" + eJdata + "&jKey=" + jKey + "");

			URL PlaceGTDOrderurl = new URL(PlaceGTDOrder.toString());
			logger.info("PlaceOrder URL : " + PlaceGTDOrderurl.toString());
			HttpURLConnection PlaceGTDOrderconn = (HttpURLConnection) PlaceGTDOrderurl.openConnection();

			PlaceGTDOrderconn.setRequestMethod("POST");
			PlaceGTDOrderconn.setRequestProperty("Accept", "application/json");
			logger.info("PlaceOrder Response Code : " + PlaceGTDOrderconn.getResponseCode());

			if (PlaceGTDOrderconn.getResponseCode() != 200) {
				throw new RuntimeException("Failed : HTTP error code : " + PlaceGTDOrderconn.getResponseCode());
			}

			BufferedReader br2 = new BufferedReader(new InputStreamReader((PlaceGTDOrderconn.getInputStream())));
			String output;
			JSONObject PlaceGTDOrderJson = new JSONObject();
			while ((output = br2.readLine()) != null) {

				Object obj = JSONValue.parse(output);
				PlaceGTDOrderJson = (JSONObject) obj;

			}

			outputValue = PlaceGTDOrderJson.toJSONString();

			logger.info("PlaceOrder Response Value : " + outputValue);

		} catch (Exception e) {
			logger.error("Unexpected PlaceOrder error", e.getMessage());

		}

		return outputValue;

	}

	
	
	// =============== End of BUY/ SELL Order----Rajesh ================
	
//=================Thangadurai Repeat order====================
	
	
//  Implementation of API 12.01 PlaceOrder
	@RequestMapping(value = "/RepeatPlaceOrder", method = RequestMethod.POST)
	public String RepeatPlaceOrderPage(
			@RequestParam String s_prdt_ali, @RequestParam String uid, @RequestParam String actid,
			@RequestParam String Tsym, @RequestParam String exch, @RequestParam String Ttranstype,
			@RequestParam String Ret, @RequestParam String prctyp, @RequestParam String qty,
			@RequestParam String discqty, @RequestParam String MktPro, @RequestParam String Price,
			@RequestParam String TrigPrice, @RequestParam String Pcode, @RequestParam String DateDays,
			@RequestParam String AMO, @RequestParam String PosSquareFlg, @RequestParam String MinQty,
			@RequestParam String naicCode, @RequestParam String orderSource,@RequestParam String TokenNo,
			HttpServletRequest request, HttpServletResponse response) {
		
		
		// API 12.01 PlaceOrder
		String outputValue="";
		HttpSession session = null;
		session = request.getSession();
		String userId = (String) session.getAttribute("userId");
		String PublicKey4=(String) session.getAttribute("publicKey4");
		String tomcatCount=(String) session.getAttribute("TomcatCount");
		
		JSONObject PlaceOrderInput = new JSONObject();
			/*Random random=new Random();
			
			int RandomTag=random.nextInt(4-1)+1;
		 
			switch (RandomTag) {
			case 1:
				PlaceOrderInput.put("TokenNo","228530");
				PlaceOrderInput.put("Tsym", "GOLDM21JUNFUT");
				break;
			case 2:
				PlaceOrderInput.put("TokenNo","220823");
				PlaceOrderInput.put("Tsym", "GOLD21MAY46100CE");
				break;
			case 3:
				PlaceOrderInput.put("TokenNo","221598");
				PlaceOrderInput.put("Tsym", "SILVER21JULFUT");
				break;

			default:
				PlaceOrderInput.put("TokenNo","221598");
			    PlaceOrderInput.put("Tsym", "SILVER21JULFUT");
				break;
			}*/
			
			
			
			
		PlaceOrderInput.put("s_prdt_ali", s_prdt_ali);
		PlaceOrderInput.put("qty", qty);
		PlaceOrderInput.put("uid", uid);
		PlaceOrderInput.put("prctyp",prctyp);		
		PlaceOrderInput.put("orderSource", orderSource);
		PlaceOrderInput.put("naicCode", naicCode);
		PlaceOrderInput.put("exch", exch);	
		PlaceOrderInput.put("TokenNo",TokenNo);
		PlaceOrderInput.put("Tsym", Tsym);
			
		PlaceOrderInput.put("discqty", discqty);
		PlaceOrderInput.put("actid", actid);
		PlaceOrderInput.put("Ttranstype", Ttranstype);
		PlaceOrderInput.put("TrigPrice", TrigPrice);
		
		PlaceOrderInput.put("Ret", Ret);
		PlaceOrderInput.put("Price", Price);
		PlaceOrderInput.put("PosSquareFlg", PosSquareFlg);
		PlaceOrderInput.put("Pcode", Pcode);
		
		PlaceOrderInput.put("MktPro", MktPro);
		PlaceOrderInput.put("MinQty", MinQty);
		PlaceOrderInput.put("DateDays", DateDays);
		PlaceOrderInput.put("AMO", AMO);
		
		try {
			String eJdata =  PlaceOrderInput.toJSONString();
			String jKey = CommonFunction.hashData(PublicKey4);
			
			StringBuffer PlaceOrder = new StringBuffer(marketwatchProvider.getPlaceOrderurl());
			PlaceOrder.append("jsessionid=" + "." + tomcatCount + "&jData=" + eJdata + "&jKey=" + jKey + "");

			URL PlaceOrderurl = new URL(PlaceOrder.toString());
			logger.info("PlaceOrder URL : "+PlaceOrderurl.toString()); 
			HttpURLConnection PlaceOrderconn = (HttpURLConnection) PlaceOrderurl.openConnection();

			
			PlaceOrderconn.setRequestMethod("POST");
			PlaceOrderconn.setRequestProperty("Accept", "application/json");
			logger.info("PlaceOrder Response Code : "+PlaceOrderconn.getResponseCode());
			
			if (PlaceOrderconn.getResponseCode() != 200) {
				throw new RuntimeException("Failed : HTTP error code : " + PlaceOrderconn.getResponseCode());
			}

			BufferedReader br2 = new BufferedReader(new InputStreamReader((PlaceOrderconn.getInputStream())));
			String output;
			JSONObject PlaceOrderJson=null;
			while ((output = br2.readLine()) != null) {
				
				Object obj = JSONValue.parse(output);
				PlaceOrderJson = (JSONObject) obj;
				
			}
			
			
			outputValue=PlaceOrderJson.toJSONString();
			
			logger.info("PlaceOrder Response Value : "+outputValue);

		} catch (Exception e) {
			logger.error("Unexpected PlaceOrder error", e.getMessage());

		}

		return outputValue;

	}
	
	//  Implementation of API 31.01 place bracket order
	@RequestMapping(value = "/Repeatplacebracketorder", method = RequestMethod.POST)
	public String RepeatPlaceBracketOrderPage(
			@RequestParam String exch, @RequestParam String TokenNo, @RequestParam String Ttranstype,
			@RequestParam String qty, @RequestParam String actid, @RequestParam String uid,
			@RequestParam String Ret, @RequestParam String discqty, @RequestParam String Price,
			@RequestParam String ltpOratp, @RequestParam String SqrOffAbsOrticks, @RequestParam String SqrOffvalue,
			@RequestParam String SLAbsOrticks, @RequestParam String SLvalue, @RequestParam String trailingSL,
			@RequestParam String tSLticks, @RequestParam String naicCode,@RequestParam String orderSource,
			@RequestParam String userTag,@RequestParam String prctyp,@RequestParam String TrigPrice,
			HttpServletRequest request, HttpServletResponse response) {
		
		
		
		// API 31.01 place bracket order
		
		String outputValue="";
		HttpSession session = null;
		session = request.getSession();
		String userId = (String) session.getAttribute("userId");
		String PublicKey4=(String) session.getAttribute("publicKey4");
		String tomcatCount=(String) session.getAttribute("TomcatCount");
		
		JSONObject bracketOrderInput = new JSONObject();
		
		bracketOrderInput.put("exch", exch);
		bracketOrderInput.put("TokenNo", TokenNo);
		bracketOrderInput.put("Ttranstype", Ttranstype);
		bracketOrderInput.put("qty", qty);
		bracketOrderInput.put("actid", actid);
		bracketOrderInput.put("uid", uid);
		bracketOrderInput.put("Ret", Ret);
		bracketOrderInput.put("discqty", discqty);
		bracketOrderInput.put("Price", Price);
		bracketOrderInput.put("ltpOratp", ltpOratp);
		bracketOrderInput.put("SqrOffAbsOrticks", SqrOffAbsOrticks);
		bracketOrderInput.put("SqrOffvalue", SqrOffvalue);
		bracketOrderInput.put("SLAbsOrticks", SLAbsOrticks);
		bracketOrderInput.put("SLvalue", SLvalue);
		bracketOrderInput.put("trailingSL", trailingSL);
		bracketOrderInput.put("tSLticks", tSLticks);
		bracketOrderInput.put("naicCode", naicCode);
		bracketOrderInput.put("orderSource", orderSource);
		bracketOrderInput.put("userTag", userTag);
		bracketOrderInput.put("prctyp", prctyp);
		bracketOrderInput.put("TrigPrice", TrigPrice);
		
		
		
		try {
			String eJdata =  bracketOrderInput.toJSONString();
			String jKey =  CommonFunction.hashData(PublicKey4);
			
			StringBuffer bracketOrder = new StringBuffer(marketwatchProvider.getBracketorderurl());
			bracketOrder.append("jsessionid=" + "." + tomcatCount + "&jData=" + eJdata + "&jKey=" + jKey + "");

			URL bracketOrderurl = new URL(bracketOrder.toString());
			HttpURLConnection bracketOrderconn = (HttpURLConnection) bracketOrderurl.openConnection();
			
			logger.info("bracketOrder URL : "+bracketOrderurl);
			
			bracketOrderconn.setRequestMethod("POST");
			bracketOrderconn.setRequestProperty("Accept", "application/json");
			
			logger.info("bracketOrder Response Code : "+bracketOrderconn.getResponseCode());
			
			if (bracketOrderconn.getResponseCode() != 200) {
				throw new RuntimeException("Failed : HTTP error code : " + bracketOrderconn.getResponseCode());
			}

			BufferedReader br2 = new BufferedReader(new InputStreamReader((bracketOrderconn.getInputStream())));
			String output;
			JSONObject bracketOrderJson=null;
			while ((output = br2.readLine()) != null) {
				
				Object obj = JSONValue.parse(output);
				bracketOrderJson = (JSONObject) obj;
				
			}
			
			
			outputValue=bracketOrderJson.toJSONString(); 
			
			logger.info("bracketOrder Response Value : "+outputValue); 
			
		} catch (Exception e) {
			logger.error("Unexpected bracketOrder error", e.getMessage());

		}

		return outputValue;
		
	}
	
//  Implementation of API 34.01 PlaceGTDOrder
	@RequestMapping(value = "/RepeatPlaceGTDOrder", method = RequestMethod.POST)
	public String RepeatPlaceGTDOrderPage(@RequestParam String s_prdt_ali, @RequestParam String uid,
			@RequestParam String actid, @RequestParam String Tsym, @RequestParam String exch,
			@RequestParam String Ttranstype, @RequestParam String Ret, @RequestParam String prctyp,
			@RequestParam String qty, @RequestParam String Price, @RequestParam String Pcode,
			@RequestParam String DateDays, @RequestParam String Branch, @RequestParam String Broker,
			@RequestParam String naicCode, @RequestParam String orderSource, @RequestParam String userTag,
			HttpServletRequest request, HttpServletResponse response) throws ParseException {

		// API 34.01 PlaceGTDOrder
		String outputValue = "";
		HttpSession session = null;
		session = request.getSession();
		String userId = (String) session.getAttribute("userId");
		String PublicKey4 = (String) session.getAttribute("publicKey4");
		String tomcatCount = (String) session.getAttribute("TomcatCount");

		JSONObject PlaceGTDOrderInput = new JSONObject();

		PlaceGTDOrderInput.put("s_prdt_ali", s_prdt_ali);
		PlaceGTDOrderInput.put("uid", uid);
		PlaceGTDOrderInput.put("actid", actid);
		PlaceGTDOrderInput.put("Tsym", Tsym);
		PlaceGTDOrderInput.put("exch", exch);
		PlaceGTDOrderInput.put("Ttranstype", Ttranstype);
		PlaceGTDOrderInput.put("Ret", Ret);
		PlaceGTDOrderInput.put("prctyp", prctyp);
		PlaceGTDOrderInput.put("qty", qty);
		PlaceGTDOrderInput.put("Price", Price);
		PlaceGTDOrderInput.put("Pcode", Pcode);
		PlaceGTDOrderInput.put("DateDays", DateDays);
		PlaceGTDOrderInput.put("Branch", Branch);
		PlaceGTDOrderInput.put("Broker", Broker);
		PlaceGTDOrderInput.put("naicCode", naicCode);
		PlaceGTDOrderInput.put("orderSource", orderSource);
		PlaceGTDOrderInput.put("userTag", userTag);

		try {
			String eJdata = PlaceGTDOrderInput.toJSONString();
			String jKey = CommonFunction.hashData(PublicKey4);

			StringBuffer PlaceGTDOrder = new StringBuffer(marketwatchProvider.getPlaceGTDOrderurl());
			PlaceGTDOrder.append("jsessionid=" + "." + tomcatCount + "&jData=" + eJdata + "&jKey=" + jKey + "");

			URL PlaceGTDOrderurl = new URL(PlaceGTDOrder.toString());
			logger.info("PlaceOrder URL : " + PlaceGTDOrderurl.toString());
			HttpURLConnection PlaceGTDOrderconn = (HttpURLConnection) PlaceGTDOrderurl.openConnection();

			PlaceGTDOrderconn.setRequestMethod("POST");
			PlaceGTDOrderconn.setRequestProperty("Accept", "application/json");
			logger.info("PlaceOrder Response Code : " + PlaceGTDOrderconn.getResponseCode());

			if (PlaceGTDOrderconn.getResponseCode() != 200) {
				throw new RuntimeException("Failed : HTTP error code : " + PlaceGTDOrderconn.getResponseCode());
			}

			BufferedReader br2 = new BufferedReader(new InputStreamReader((PlaceGTDOrderconn.getInputStream())));
			String output;
			JSONObject PlaceGTDOrderJson = new JSONObject();
			while ((output = br2.readLine()) != null) {

				Object obj = JSONValue.parse(output);
				PlaceGTDOrderJson = (JSONObject) obj;

			}

			outputValue = PlaceGTDOrderJson.toJSONString();

			logger.info("PlaceOrder Response Value : " + outputValue);

		} catch (Exception e) {
			logger.error("Unexpected PlaceOrder error", e.getMessage());

		}

		return outputValue;

	}
	
	

	
	@RequestMapping(value="/OrderBook22", method = RequestMethod.POST, produces="application/json")
	public ResponseEntity<String> pendingOrder(HttpServletRequest request, HttpServletResponse response) {
		
		
		 ModelAndView mav=new ModelAndView("exchange-light");
		 
		 HttpSession session = null;
			session = request.getSession();
			String userId = (String) session.getAttribute("userId");
			
			
			String publicKey4 = (String) session.getAttribute("publicKey4");
			
			String TomcatCount = (String) session.getAttribute("TomcatCount");
			

			JSONObject OrderBookInputJson = new JSONObject();

			OrderBookInputJson.put("uid", userId);
			OrderBookInputJson.put("s_prdt_ali", "CNC:CNC||MIS:MIS||NRML:NRML"); 

			String OrderBookInputJsonInputJdata = OrderBookInputJson.toJSONString();

			List<String> OrderBookValidationList = null;
			OrderbookResponse orderRes= new OrderbookResponse();
			
			 List<OrderbookResponse> orderResList = null;
			 
			 List<String> list=null;
			 
			 String json="";
			 String outputval="";

			try {
				
				String jKey =  CommonFunction.hashData(publicKey4);
				
				StringBuffer OrderbookAns = new StringBuffer(marketwatchProvider.getOrderBookurl());
				OrderbookAns.append("jsessionid=" + "." + TomcatCount + "&jData=" + OrderBookInputJsonInputJdata + "&jKey=" + jKey + "");

				URL Orderbookurl = new URL(OrderbookAns.toString());
				
				System.out.println("Orderbookurl:::"+Orderbookurl);
				HttpURLConnection Orderbookconn = (HttpURLConnection) Orderbookurl.openConnection();
				Orderbookconn.setRequestMethod("POST");
				Orderbookconn.setRequestProperty("Accept", "application/json");
				
				System.out.println("Orderbookconn:::"+Orderbookconn);

				if (Orderbookconn.getResponseCode() != 200) {
					throw new RuntimeException("Failed : HTTP error code : " + Orderbookconn.getResponseCode());
				}

				BufferedReader br3 = new BufferedReader(new InputStreamReader((Orderbookconn.getInputStream())));
				
				String output="";
				JSONArray array = new JSONArray();
				JSONObject OrderBookValidationJson =null;
				while ((output = br3.readLine()) != null) {
					
					System.out.println("output:orderbook:::"+output);
					Gson gson = new Gson();
					
					  json = new Gson().toJson(output);
					  
						

				}
				
				
				Orderbookconn.disconnect();

			} catch (Exception e) {
				logger.error("Unexpected ValidAns error", e.getMessage());
				e.printStackTrace();

			}

			  return ResponseEntity.ok().body(json);
		
	}
	
	@RequestMapping(value="/TradeBook22", method = RequestMethod.POST)
	public ResponseEntity<String> tradeBookOrder(HttpServletRequest request, HttpServletResponse response) {
		
		
		 ModelAndView mav=new ModelAndView("exchange-light");
		 
		 HttpSession session = null;
			session = request.getSession();
			String userId = (String) session.getAttribute("userId");
			
			
			String publicKey4 = (String) session.getAttribute("publicKey4");
			
			String TomcatCount = (String) session.getAttribute("TomcatCount");		

			JSONObject TradeBookInputJson = new JSONObject();


			TradeBookInputJson.put("uid", userId);
			TradeBookInputJson.put("s_prdt_ali", "CNC:CNC||MIS:MIS||NRML:NRML"); 

			String TradeBookInputJsonInputJdata = TradeBookInputJson.toJSONString();
			List<String> OrderBookValidationList = null;

			 
			 String json="";
			 String outputval="";

			try {
				
				String jKey =  CommonFunction.hashData(publicKey4);
				StringBuffer TradebookAns = new StringBuffer(marketwatchProvider.getTradeBookurl());
				TradebookAns.append("jsessionid=" + "." + TomcatCount + "&jData=" + TradeBookInputJsonInputJdata + "&jKey=" + jKey + "");
				
				URL Tradebookurl = new URL(TradebookAns.toString());

				HttpURLConnection Tradebookconn = (HttpURLConnection) Tradebookurl.openConnection();
				Tradebookconn.setRequestMethod("POST");
				Tradebookconn.setRequestProperty("Accept", "application/json");

				if (Tradebookconn.getResponseCode() != 200) {
					throw new RuntimeException("Failed : HTTP error code : " + Tradebookconn.getResponseCode());
				}

				BufferedReader br3 = new BufferedReader(new InputStreamReader((Tradebookconn.getInputStream())));
				
				String output="";
				JSONObject TradeBookValidationJson =null;
				JSONArray array = new JSONArray();
				while ((output = br3.readLine()) != null) {
					
					
					Gson gson = new Gson();
					
					  json = new Gson().toJson(output);
						

				}
				
				
				Tradebookconn.disconnect();
				

			} catch (Exception e) {
				logger.error("Unexpected ValidAns error", e.getMessage());

			}

			  return ResponseEntity.ok().body(json);
		
	}
	
	
	@RequestMapping(value="/ModifyOrder22", method = RequestMethod.POST)
	public ResponseEntity<JSONObject> modifyOrder(HttpServletRequest request, HttpServletResponse response,@RequestParam String nestOrd,@RequestParam String pcodeModify,@RequestParam String dayModify
			,@RequestParam String mktModify,@RequestParam String priceIdModify,@RequestParam String QtyIdModify,@RequestParam String TriggerModify,@RequestParam String DiscModify
			,@RequestParam String accountIdModify,@RequestParam String ExsegModify,@RequestParam String TrsymModify,@RequestParam String TrantypeModify,@RequestParam String PrctypeModify
			,@RequestParam String FillshareModify) {
		
		
		 ModelAndView mav=new ModelAndView("exchange-light");
		 
		 HttpSession session = null;
			session = request.getSession();
			String userId = (String) session.getAttribute("userId");
			
			String outputValue=null;
			String publicKey4 = (String) session.getAttribute("publicKey4");
			
			String TomcatCount = (String) session.getAttribute("TomcatCount");

			JSONObject ModifyOrderInputJson = new JSONObject();
			
			System.out.println("userId:::"+userId);
			System.out.println("accountIdModify:::"+accountIdModify);
			System.out.println("ExsegModify:::"+ExsegModify);
			System.out.println("TrsymModify:::"+TrsymModify);
			System.out.println("nestOrd::::"+nestOrd);
			System.out.println("TrantypeModify:::"+TrantypeModify);
			System.out.println("PrctypeModify:::"+PrctypeModify);
			System.out.println("priceIdModify:::"+priceIdModify);
			System.out.println("QtyIdModify::::"+QtyIdModify);
			System.out.println("DiscModify:::"+DiscModify);
			System.out.println("TriggerModify:::"+TriggerModify);
			System.out.println("dayModify:::"+dayModify);
			System.out.println("FillshareModify:::"+FillshareModify);
			System.out.println("pcodeModify:::"+pcodeModify);

			ModifyOrderInputJson.put("uid", userId);
			ModifyOrderInputJson.put("Actid", accountIdModify);
			ModifyOrderInputJson.put("Exchangeseg", ExsegModify);
			ModifyOrderInputJson.put("Tsym", TrsymModify);
			ModifyOrderInputJson.put("Nstordno", nestOrd);
			ModifyOrderInputJson.put("Transtype", TrantypeModify);
			ModifyOrderInputJson.put("Prctype", PrctypeModify);
			ModifyOrderInputJson.put("Price", priceIdModify);
			ModifyOrderInputJson.put("Qty", QtyIdModify);
			ModifyOrderInputJson.put("Dscqty", DiscModify);
			ModifyOrderInputJson.put("Trgprc", TriggerModify);
			ModifyOrderInputJson.put("Validity", dayModify);
			ModifyOrderInputJson.put("Filledqty", FillshareModify);
			ModifyOrderInputJson.put("Pcode", pcodeModify);
			ModifyOrderInputJson.put("Mktpro", "NA");
			ModifyOrderInputJson.put("DateDays", "NA");
			ModifyOrderInputJson.put("s_prdt_ali", "CNC:CNC||MIS:MIS||NRML:NRML");
			ModifyOrderInputJson.put("criteriaAttribute", "");
			ModifyOrderInputJson.put("orderSource", "");


			String ModifyOrderInputJsonInputJdata = ModifyOrderInputJson.toJSONString();
			JSONObject OrderBookValidationJson = new JSONObject();
			List<String> OrderBookValidationList = null;
			 String outputval="";
			 String json="";
			 JSONObject ModifyOrderJson=null;

			try {
				String jKey =  CommonFunction.hashData(publicKey4);
				StringBuffer modifyOrderbookAns = new StringBuffer(marketwatchProvider.getModifyOrderurl());
				modifyOrderbookAns.append("jsessionid=" + "." + TomcatCount + "&jData=" + ModifyOrderInputJsonInputJdata + "&jKey=" + jKey + "");

				URL ModifyOrderurl = new URL(modifyOrderbookAns.toString());
				
				logger.info("ModifyOrder Request URL : "+ModifyOrderurl.toString());
				
				HttpURLConnection modifyOrderbookconn = (HttpURLConnection) ModifyOrderurl.openConnection();
				modifyOrderbookconn.setRequestMethod("POST");
				modifyOrderbookconn.setRequestProperty("Accept", "application/json");
				
				
				logger.info("ModifyOrder Response Code : "+modifyOrderbookconn.getResponseCode());
				
				if (modifyOrderbookconn.getResponseCode() != 200) {
					throw new RuntimeException("Failed : HTTP error code : " + modifyOrderbookconn.getResponseCode());
				}

				BufferedReader br3 = new BufferedReader(new InputStreamReader((modifyOrderbookconn.getInputStream())));
				
				
				/*while ((output = br3.readLine()) != null) {
					
					System.out.println("Modify Order::"+output);
					Gson gson = new Gson();
					
					  json = new Gson().toJson(output);
				}*/
				
				String output;
				
				while ((output = br3.readLine()) != null) {
					
					Object obj = JSONValue.parse(output);
					ModifyOrderJson = (JSONObject) obj;
					
				}
				
				
				outputValue=ModifyOrderJson.toJSONString();
				
				logger.info("PlaceOrder Response Value : "+outputValue);
				
				logger.info("ModifyOrder Response Value : "+json.toString()); 
                
				modifyOrderbookconn.disconnect();

			} catch (Exception e) {
				
				e.printStackTrace();
				logger.error("Unexpected ValidAns error", e.getMessage());

			}
		 
			return ResponseEntity.ok().body(ModifyOrderJson);
		
	}
	
	
	@RequestMapping(value="/CancelOrder22", method = RequestMethod.POST)
	public ResponseEntity<String> cancelOrder(HttpServletRequest request, HttpServletResponse response,@RequestParam String nestOrd) {
	
		
		ModelAndView mav=new ModelAndView("exchange-light");
		 
		 HttpSession session = null;
			session = request.getSession();
			String userId = (String) session.getAttribute("userId");
			
			
			String publicKey4 = (String) session.getAttribute("publicKey4");
			
			String TomcatCount = (String) session.getAttribute("TomcatCount");
			

			JSONObject OrderBookInputJson = new JSONObject();

			OrderBookInputJson.put("uid", userId);
			OrderBookInputJson.put("NestOrd", nestOrd);
			OrderBookInputJson.put("sTradeSymbol", "");
			OrderBookInputJson.put("sExch", "");
			OrderBookInputJson.put("s_prdt_ali", "CNC:CNC||MIS:MIS||NRML:NRML");
			OrderBookInputJson.put("criteriaAttribute", "");
			OrderBookInputJson.put("orderSource", "");

			String OrderBookInputJsonInputJdata = OrderBookInputJson.toJSONString();
			JSONObject OrderBookValidationJson = new JSONObject();
			List<String> OrderBookValidationList = null;
			
			String json="";
			 String outputval="";

			try {
				String jKey =  CommonFunction.hashData(publicKey4);
				StringBuffer OrderbookAns = new StringBuffer(marketwatchProvider.getCancelOrderurl());
				OrderbookAns.append("jsessionid=" + "." + TomcatCount + "&jData=" + OrderBookInputJsonInputJdata + "&jKey=" + jKey + "");

				URL CancelOrderurl = new URL(OrderbookAns.toString());
				

				HttpURLConnection Orderbookconn = (HttpURLConnection) CancelOrderurl.openConnection();
				Orderbookconn.setRequestMethod("POST");
				Orderbookconn.setRequestProperty("Accept", "application/json");
				if (Orderbookconn.getResponseCode() != 200) {
					throw new RuntimeException("Failed : HTTP error code : " + Orderbookconn.getResponseCode());
				}

				BufferedReader br3 = new BufferedReader(new InputStreamReader((Orderbookconn.getInputStream())));
				
				String output="";

				while ((output = br3.readLine()) != null) {

					
					System.out.println("Cancel ordeer:::"+output);
					json = new Gson().toJson(output);
					

				}

				
				Orderbookconn.disconnect();

			} catch (Exception e) {
				logger.error("Unexpected ValidAns error", e.getMessage());

			}
		 
			 return ResponseEntity.ok().body(json);
		
	}
	
	@RequestMapping(value="/ExecuteExitOrder", method = RequestMethod.POST)
	public ResponseEntity<String> executeExitOrder(HttpServletRequest request, HttpServletResponse response) {
		
		
		 ModelAndView mav=new ModelAndView("exchange-light");
		 
		 HttpSession session = null;
			session = request.getSession();
			String userId = (String) session.getAttribute("userId");
			
			
			String publicKey4 = (String) session.getAttribute("publicKey4");
			
			String TomcatCount = (String) session.getAttribute("TomcatCount");

			JSONObject ExecuteExitOrderInputJson = new JSONObject();

			ExecuteExitOrderInputJson.put("uid", userId);

			String ExecuteExitInputJsonInputJdata = ExecuteExitOrderInputJson.toJSONString();
			JSONObject ExecuteExitValidationJson = new JSONObject();
			List<String> OrderBookValidationList = null;
			
			String outputval="";

			try {
				
				String jKey =  CommonFunction.hashData(publicKey4);
				StringBuffer  ExecuteExitAns = new StringBuffer(marketwatchProvider.getExecuteExitOrderurl());
				ExecuteExitAns.append("jsessionid=" + "." + TomcatCount + "&jData=" + ExecuteExitInputJsonInputJdata + "&jKey=" + jKey + "");

				URL ExecuteExitOrderurl = new URL(ExecuteExitAns.toString());

				HttpURLConnection ExecuteExitconn = (HttpURLConnection) ExecuteExitOrderurl.openConnection();
				ExecuteExitconn.setRequestMethod("POST");
				ExecuteExitconn.setRequestProperty("Accept", "application/json");

				if (ExecuteExitconn.getResponseCode() != 200) {
					throw new RuntimeException("Failed : HTTP error code : " + ExecuteExitconn.getResponseCode());
				}

				BufferedReader br3 = new BufferedReader(new InputStreamReader((ExecuteExitconn.getInputStream())));
				
				String output="";

				JSONArray array = new JSONArray();
				while ((output = br3.readLine()) != null) {

					JSONParser parser = new JSONParser();
					Object obj  = parser.parse(output);
					
				    array.add(obj);
					

				}
				
				 outputval= array.toJSONString();
				
				ExecuteExitconn.disconnect();

			} catch (Exception e) {
				logger.error("Unexpected ValidAns error", e.getMessage());

			}
		 
			return ResponseEntity.ok().body(outputval);
		
	}
	
	@RequestMapping(value="/OrderHistory22", method = RequestMethod.POST)
	public ResponseEntity<String> orderHistory(HttpServletRequest request, HttpServletResponse response,@RequestParam String nestOrd) {
		

		 
		 HttpSession session = null;
			session = request.getSession();
			String userId = (String) session.getAttribute("userId");
			
			
			String publicKey4 = (String) session.getAttribute("publicKey4");
			
			String TomcatCount = (String) session.getAttribute("TomcatCount");
				
			

			JSONObject OrderBookInputJson = new JSONObject();

			OrderBookInputJson.put("uid", userId);
			OrderBookInputJson.put("s_prdt_ali", "CNC:CNC||MIS:MIS||NRML:NRML");
			OrderBookInputJson.put("NOrdNo", nestOrd);

			String OrderBookInputJsonInputJdata = OrderBookInputJson.toJSONString();
			JSONObject OrderBookValidationJson = new JSONObject();
			List<String> OrderBookValidationList = null;
			
			OrderhistoryResponse orderRes= new OrderhistoryResponse();
			OrderhistoryResponse orderRes1= new OrderhistoryResponse();
			
			 List<OrderhistoryResponse> orderResList = null;
			 
			 List<String> list=null;
			 
			 String json="";
			 String outputval="";

			try {
				
				String jKey =  CommonFunction.hashData(publicKey4);
				StringBuffer OrderbookAns = new StringBuffer(marketwatchProvider.getOrderHistoryurl());
				OrderbookAns.append("jsessionid=" + "." + TomcatCount + "&jData=" + OrderBookInputJsonInputJdata + "&jKey=" + jKey + "");

				URL OrderHistoryurl = new URL(OrderbookAns.toString());
				HttpURLConnection Orderbookconn = (HttpURLConnection) OrderHistoryurl.openConnection();
				Orderbookconn.setRequestMethod("POST");
				Orderbookconn.setRequestProperty("Accept", "application/json");
				if (Orderbookconn.getResponseCode() != 200) {
					throw new RuntimeException("Failed : HTTP error code : " + Orderbookconn.getResponseCode());
				}

				BufferedReader br3 = new BufferedReader(new InputStreamReader((Orderbookconn.getInputStream())));
				
				String output="";
				
				JSONArray array = new JSONArray();
				while ((output = br3.readLine()) != null) {

					System.out.println("Order history::"+output);
					  json = new Gson().toJson(output);
	

				}
				
				
				Orderbookconn.disconnect();

			} catch (Exception e) {
				logger.error("Unexpected ValidAns error", e.getMessage());

			}

			  return ResponseEntity.ok().body(json);
		
	}
	
	@RequestMapping(value="/PositionConvertion22", method = RequestMethod.POST)
	public ResponseEntity<JSONObject> positionConvertion(HttpServletRequest request, HttpServletResponse response,@RequestParam String positionnstord,
			@RequestParam String positionpcode,@RequestParam String positionfillshare,@RequestParam String positionpchange) {
		
		
		 ModelAndView mav=new ModelAndView("exchange-light");
		 
		 HttpSession session = null;
			session = request.getSession();
			String userId = (String) session.getAttribute("userId");
			
			String outputValue=null;
			String publicKey4 = (String) session.getAttribute("publicKey4");
			
			String TomcatCount = (String) session.getAttribute("TomcatCount");

			JSONObject PositionConvertionInputJson = new JSONObject();


			PositionConvertionInputJson.put("uid", userId);
			PositionConvertionInputJson.put("s_prdt_ali", "CNC:CNC||MIS:MIS||NRML:NRML");
			PositionConvertionInputJson.put("Nstordno", positionnstord);
			PositionConvertionInputJson.put("FillID", positionfillshare);
			PositionConvertionInputJson.put("Pcode", positionpcode);
			PositionConvertionInputJson.put("Pchange", positionpchange);


			String PositionConvertionInputJsonInputJdata = PositionConvertionInputJson.toJSONString();
			JSONObject OrderBookValidationJson = new JSONObject();
			List<String> OrderBookValidationList = null;
			 String outputval="";
			 String json="";
			 JSONObject PositionConvertionJson=null;

			try {
				String jKey =  CommonFunction.hashData(publicKey4);
				StringBuffer positionConvertionAns = new StringBuffer(marketwatchProvider.getPositionConvertionurl());
				positionConvertionAns.append("jsessionid=" + "." + TomcatCount + "&jData=" + PositionConvertionInputJsonInputJdata + "&jKey=" + jKey + "");

				URL PositionConvertionurl = new URL(positionConvertionAns.toString());
				
				logger.info("PositionConvertionconn Request URL : "+PositionConvertionurl.toString());
				
				HttpURLConnection positionConvertionconn = (HttpURLConnection) PositionConvertionurl.openConnection();
				positionConvertionconn.setRequestMethod("POST");
				positionConvertionconn.setRequestProperty("Accept", "application/json");
				
				
				logger.info("PositionConvertionconn Response Code : "+positionConvertionconn.getResponseCode());
				
				if (positionConvertionconn.getResponseCode() != 200) {
					throw new RuntimeException("Failed : HTTP error code : " + positionConvertionconn.getResponseCode());
				}

				BufferedReader br3 = new BufferedReader(new InputStreamReader((positionConvertionconn.getInputStream())));
				
				
				String output;
				
				while ((output = br3.readLine()) != null) {
					
					Object obj = JSONValue.parse(output);
					PositionConvertionJson = (JSONObject) obj;
					
				}
				
				
				outputValue=PositionConvertionJson.toJSONString();
				
				logger.info("PositionConvertionconn Response: "+PositionConvertionJson.toJSONString());
                
				positionConvertionconn.disconnect();

			} catch (Exception e) {
				
				e.printStackTrace();
				logger.error("Unexpected ValidAns error", e.getMessage());

			}
		 
			return ResponseEntity.ok().body(PositionConvertionJson);
		
	}
	
	
	@RequestMapping(value="/addScriptMcx22", method = RequestMethod.POST)
	public ResponseEntity<List<MarketWacthScript>> addScriptMcx(HttpServletRequest request, HttpServletResponse response,@RequestParam("Token") String Token,@RequestParam("Exchange") String Exchange,@RequestParam("Scriptname") String Scriptname,
			@RequestParam("McxInstrumentCode") String McxInstrumentCode,@RequestParam("McxInstrumentSeries") String McxInstrumentSeries,@RequestParam("McxProductStartDate") String McxProductStartDate,@RequestParam("McxLastTradingDate") String McxLastTradingDate,@RequestParam("McxLotSize") String McxLotSize,
			@RequestParam("McxTickSize") String McxTickSize,@RequestParam("McxDeliveryStartDate") String McxDeliveryStartDate,@RequestParam("McxDeliveryEndDate") String McxDeliveryEndDate,@RequestParam("McxLastModifiedDate") String McxLastModifiedDate,@RequestParam("McxInstrumentInfo") String McxInstrumentInfo,
			@RequestParam("McxTenderPeriodStartDate") String McxTenderPeriodStartDate,@RequestParam("McxTenderPeriodEndDate") String McxTenderPeriodEndDate,@RequestParam("McxInstrumentName") String McxInstrumentName,@RequestParam("McxOriginalExpiryDate") String McxOriginalExpiryDate,@RequestParam("McxStrikePrice") String McxStrikePrice,
			@RequestParam("McxOptionType") String McxOptionType,@RequestParam("Displayname") String displayname) {
		
		 
		 HttpSession session = null;
			session = request.getSession();
			String userId = (String) session.getAttribute("userId");

		 
		 MarketWacthScript script =new MarketWacthScript();
		 
		 script.setToken(Token);
		 script.setExchange(Exchange);
		 script.setScriptName(Scriptname);
		 script.setDisplayname(displayname);
		 script.setMarketWatchName("MW1");
		 script.setStatus("1");
		 
		 script.setMcxInstrumentIdentifier(Token);
		 script.setMcxInstrumentCode(McxInstrumentCode);
		 script.setMcxInstrumentSeries(McxInstrumentSeries);
		 script.setMcxProductStartDate(McxProductStartDate);
		 script.setMcxLastTradingDate(McxLastTradingDate);
		 script.setMcxLotSize(McxLotSize);
		 script.setMcxTickSize(McxTickSize);
		 script.setMcxDeliveryStartDate(McxDeliveryStartDate);
		 script.setMcxDeliveryEndDate(McxDeliveryEndDate);
		 script.setMcxLastModifiedDate(McxLastModifiedDate);
		 script.setMcxInstrumentInfo(McxInstrumentInfo);
		 script.setMcxTenderPeriodStartDate(McxTenderPeriodStartDate);
		 script.setMcxTenderPeriodEndDate(McxTenderPeriodEndDate);
		 script.setMcxInstrumentName(McxInstrumentName);
		 script.setMcxNameUnderlyingAsset(Scriptname);
		 script.setMcxOriginalExpiryDate(McxOriginalExpiryDate);
		 script.setMcxStrikePrice(McxStrikePrice);
		 script.setMcxOptionType(McxOptionType);
		 
		 List<MarketWacthScript> list= scriptImp.save(script);
		 
		
		return ResponseEntity.ok().body(list);
		
		
		
	}
	
	
	@RequestMapping(value="/addScriptNse22", method = RequestMethod.POST)
	public ResponseEntity<List<MarketWacthScript>> addScriptNse(HttpServletRequest request, HttpServletResponse response,@RequestParam("Token") String Token,@RequestParam("Exchange") String Exchange,@RequestParam("Scriptname") String Scriptname
			,@RequestParam("NseSymbol") String NseSymbol,@RequestParam("NseSeries") String NseSeries,@RequestParam("NseInstrumentType") String NseInstrumentType,@RequestParam("NseIssuedCapital") String NseIssuedCapital,@RequestParam("NseCreditRating") String NseCreditRating
			,@RequestParam("NseBoardLotQuantity") String NseBoardLotQuantity,@RequestParam("NseTickSize") String NseTickSize,@RequestParam("NseIssueStartDate") String NseIssueStartDate,@RequestParam("NseIssueIPDate") String NseIssueIPDate
			,@RequestParam("NseIssueMaturityDate") String NseIssueMaturityDate,@RequestParam("NseFreezePercent") String NseFreezePercent,@RequestParam("NseListingDate") String NseListingDate,@RequestParam("NseExpulsionDate") String NseExpulsionDate
			,@RequestParam("NseReAdmissionDate") String NseReAdmissionDate,@RequestParam("NseExDate") String NseExDate,@RequestParam("NseRecordDate") String NseRecordDate
			,@RequestParam("NseFaceValue") String NseFaceValue,@RequestParam("NseISINNo") String NseISINNo,@RequestParam("Displayname") String displayname) {
		
		 
		 HttpSession session = null;
			session = request.getSession();
			String userId = (String) session.getAttribute("userId");
			
		 MarketWacthScript script =new MarketWacthScript();
		 
		 script.setToken(Token);
		 script.setExchange(Exchange);
		 script.setScriptName(Scriptname);
		 script.setDisplayname(displayname);
		 script.setMarketWatchName("MW1");
		 script.setStatus("1");
		 
		 script.setNseToken(Token);
		 script.setNseSeries(NseSeries);
		 script.setNseSymbol(NseSymbol);
		 script.setNseInstrumentType(NseInstrumentType);
		 script.setNseIssuedCapital(NseIssuedCapital);
		 script.setNseCreditRating(NseCreditRating);
		 script.setNseBoardLotQuantity(NseBoardLotQuantity);
		 script.setNseTickSize(NseTickSize);
		 script.setNseName(displayname);
		 script.setNseIssueStartDate(NseIssueStartDate);
		 script.setNseIssueIPDate(NseIssueIPDate);
		 script.setNseIssueMaturityDate(NseIssueMaturityDate);
		 script.setNseFreezePercent(NseFreezePercent);
		 script.setNseListingDate(NseListingDate);
		 script.setNseExpulsionDate(NseExpulsionDate);
		 script.setNseReAdmissionDate(NseReAdmissionDate);
		 script.setNseExDate(NseExDate);
		 script.setNseRecordDate(NseRecordDate);
		 script.setNseFaceValue(NseFaceValue);
		 script.setNseISINNo(NseISINNo);
	
		 
		 List<MarketWacthScript> list= scriptImp.save(script);
		 
		 
		
		return ResponseEntity.ok().body(list);
		
		
		
	}
	
	
	@RequestMapping(value="/addScriptNfo22", method = RequestMethod.POST)
	public ResponseEntity<List<MarketWacthScript>> addScriptNfo(HttpServletRequest request, HttpServletResponse response,@RequestParam("Token") String Token,@RequestParam("Exchange") String Exchange,@RequestParam("Scriptname") String Scriptname,@RequestParam("Nfoinstrument_name") String Nfoinstrument_name
			,@RequestParam("NfoSeries") String NfoSeries,@RequestParam("Nfoexpiry_date") String Nfoexpiry_date,@RequestParam("Nfostrike_price") String Nfostrike_price,@RequestParam("Nfooption_type") String Nfooption_type,@RequestParam("Nfoissue_infostart_date") String Nfoissue_infostart_date
			,@RequestParam("Nfoissue_infomaturity_date") String Nfoissue_infomaturity_date,@RequestParam("Nfoboard_lot_quantity") String Nfoboard_lot_quantity,@RequestParam("NfoStockname") String NfoStockname,@RequestParam("Displayname") String displayname) {
		
		 
		 HttpSession session = null;
			session = request.getSession();
			String userId = (String) session.getAttribute("userId");
			
		 MarketWacthScript script =new MarketWacthScript();
		 
		 script.setToken(Token);
		 script.setExchange(Exchange);
		 script.setScriptName(Scriptname);
		 script.setDisplayname(displayname);
		 script.setMarketWatchName("MW1");
		 script.setStatus("1");
		 
		 script.setNfoToken(Token);
		 script.setNfoinstrument_name(Nfoinstrument_name);
		 script.setNfoSymbol(displayname);
		 script.setNfoSeries(NfoSeries);
		 script.setNfoexpiry_date(Nfoexpiry_date);
		 script.setNfostrike_price(Nfostrike_price);
		 script.setNfooption_type(Nfooption_type);
		 script.setNfoissue_infostart_date(Nfoissue_infostart_date);
		 script.setNfoissue_infomaturity_date(Nfoissue_infomaturity_date);
		 script.setNfoboard_lot_quantity(Nfoboard_lot_quantity);
		 script.setNfoStockname(NfoStockname);

		 
		 List<MarketWacthScript> list= scriptImp.save(script);
		 
		
		return ResponseEntity.ok().body(list);
		
		
		
	}
	
	
	/*@RequestMapping(value="/getMarketScript", method = RequestMethod.POST)
	public  ResponseEntity<JSONObject> getMarketScriptList(@Valid @RequestHeader String Authorization,
			@CookieValue("AccessToken") String AccessToken,
			HttpServletRequest request, HttpServletResponse response) throws IOException{
		
		 	JSONObject MarketWacthScriptJson = new JSONObject();	
		 	HttpHeaders responseHeaders = new HttpHeaders();
		 	responseHeaders.set("Authorization", "Bearer " + AccessToken);	
		 	
			HttpSession session = null;
			session = request.getSession();
			String userId = (String) session.getAttribute("userId");
			MarketWacthScript script =new MarketWacthScript();		 
			 List<MarketWacthScript> list= scriptImp.listAll();
			 MarketWacthScriptJson.put("scriptList", list);
		
			return ResponseEntity.ok().body(MarketWacthScriptJson);			
		 	
		
	}*/
	
	@RequestMapping(value="/getMarketScript22", method = RequestMethod.GET)
	public  ResponseEntity<List<MarketWacthScript>> getScriptVal(HttpServletRequest request, HttpServletResponse response) {
		
	//	ModelAndView mv = new ModelAndView("exchange-light");
		 HttpSession session = null;
			session = request.getSession();
			String userId = (String) session.getAttribute("userId");
			
		 MarketWacthScript script =new MarketWacthScript();
		 
		 List<MarketWacthScript> list= scriptImp.listAll();
		
		
		 return ResponseEntity.ok().body(list);
		
	}
	
	
	@RequestMapping(value="/getMarketScriptNew22", method = RequestMethod.GET)
	public ModelAndView getScriptValNew(HttpServletRequest request, HttpServletResponse response) {
		
		ModelAndView mv = new ModelAndView("menu");
		 HttpSession session = null;
			session = request.getSession();
			String userId = (String) session.getAttribute("userId");
			
		 MarketWacthScript script =new MarketWacthScript();
		 
		 List<MarketWacthScript> list= scriptImp.listAll();
		 
		
		 
		 mv.addObject("scriptList", list);
		 return mv ;
		
		
		
	}
	
	@RequestMapping(value="/deleteScript22", method = RequestMethod.POST)
	public ResponseEntity<String> deleteScriptVal(HttpServletRequest request, HttpServletResponse response,@RequestParam("Token") String Token) {
		
		 
		 HttpSession session = null;
			session = request.getSession();
			//String userId = (String) session.getAttribute("userId");
		 
		 MarketWacthScript script =new MarketWacthScript();
		 
		 
		int addscriptVal= scriptImp.delete(Token);
		
		String scrival=String.valueOf(addscriptVal);
		
		
		return ResponseEntity.ok().body(scrival);
		
		
		
	}
	
	
	@RequestMapping(value="/ExchangeMessage", method = RequestMethod.POST, produces="application/json")
	public ResponseEntity<String> ExchangeMessage(HttpServletRequest request, HttpServletResponse response) {
		
		
		 ModelAndView mav=new ModelAndView("exchange-light");
		 
		 HttpSession session = null;
			session = request.getSession();
			String userId = (String) session.getAttribute("userId");
			
			
			String publicKey4 = (String) session.getAttribute("publicKey4");
			
			String TomcatCount = (String) session.getAttribute("TomcatCount");


			JSONObject ExchangeMessageInputJson = new JSONObject();

			ExchangeMessageInputJson.put("Exch", "");
			ExchangeMessageInputJson.put("itemCount", "");

			String ExchangeMessageInputJsonInputJdata = ExchangeMessageInputJson.toJSONString();

			List<String> OrderBookValidationList = null;
			OrderbookResponse orderRes= new OrderbookResponse();
			
			 List<OrderbookResponse> orderResList = null;
			 
			 List<String> list=null;
			 
			 String json="";
			 String outputval="";

			try {
				
				String jKey =  CommonFunction.hashData(publicKey4);
				
				StringBuffer ExchangeMessageAns = new StringBuffer(marketwatchProvider.getExchangeMessageurl());
				ExchangeMessageAns.append("jsessionid=" + "." + TomcatCount + "&jData=" + ExchangeMessageInputJsonInputJdata + "&jKey=" + jKey + "");
				

				URL ExchangeMessageurl = new URL(ExchangeMessageAns.toString());
				

				HttpURLConnection ExchangeMessageconn = (HttpURLConnection) ExchangeMessageurl.openConnection();
				ExchangeMessageconn.setRequestMethod("POST");
				ExchangeMessageconn.setRequestProperty("Accept", "application/json");

				if (ExchangeMessageconn.getResponseCode() != 200) {
					throw new RuntimeException("Failed : HTTP error code : " + ExchangeMessageconn.getResponseCode());
				}

				BufferedReader br3 = new BufferedReader(new InputStreamReader((ExchangeMessageconn.getInputStream())));
				
				String output="";
				JSONArray array = new JSONArray();
				JSONObject OrderBookValidationJson =null;
				while ((output = br3.readLine()) != null) {

					
					Gson gson = new Gson();
					
					  json = new Gson().toJson(output);
					  
						

				}
				
				
				ExchangeMessageconn.disconnect();

			} catch (Exception e) {
				logger.error("Unexpected ExchangeMessageconn error", e.getMessage());
				e.printStackTrace();

			}

			  return ResponseEntity.ok().body(json);
		
	}
	
	
	@RequestMapping(value="/MarketStatus", method = RequestMethod.POST, produces="application/json")
	public ResponseEntity<String> MarketStatus(HttpServletRequest request, HttpServletResponse response) {
		
		
		 ModelAndView mav=new ModelAndView("exchange-light");
		 
		 HttpSession session = null;
			session = request.getSession();
			String userId = (String) session.getAttribute("userId");
			
			
			String publicKey4 = (String) session.getAttribute("publicKey4");
			
			String TomcatCount = (String) session.getAttribute("TomcatCount");
			

			JSONObject MarketStatusInputJson = new JSONObject();

			MarketStatusInputJson.put("Exchange", "NSE");

			String MarketStatusInputJsonJsonInputJdata = MarketStatusInputJson.toJSONString();

			List<String> MarketStatusInputJsonValidationList = null;
			OrderbookResponse orderRes= new OrderbookResponse();
			
			 List<OrderbookResponse> orderResList = null;
			 
			 List<String> list=null;
			 
			 String json="";
			 String outputval="";

			try {
				
				String jKey =  CommonFunction.hashData(publicKey4);
				
				StringBuffer MarketStatusAns = new StringBuffer(marketwatchProvider.getMarketStatusurl());
				MarketStatusAns.append("jsessionid=" + "." + TomcatCount + "&jData=" + MarketStatusInputJsonJsonInputJdata + "&jKey=" + jKey + "");
				

				URL MarketStatusAnsurl = new URL(MarketStatusAns.toString());


				HttpURLConnection MarketStatusconn = (HttpURLConnection) MarketStatusAnsurl.openConnection();
				MarketStatusconn.setRequestMethod("POST");
				MarketStatusconn.setRequestProperty("Accept", "application/json");

				if (MarketStatusconn.getResponseCode() != 200) {
					throw new RuntimeException("Failed : HTTP error code : " + MarketStatusconn.getResponseCode());
				}

				BufferedReader br3 = new BufferedReader(new InputStreamReader((MarketStatusconn.getInputStream())));
				
				String output="";
				JSONArray array = new JSONArray();
				JSONObject OrderBookValidationJson =null;
				while ((output = br3.readLine()) != null) {
					
					
					Gson gson = new Gson();
					
					  json = new Gson().toJson(output);


				}
				
				//myhandler.MarketStatusResult(json);
				MarketStatusconn.disconnect();

			} catch (Exception e) {
				logger.error("Unexpected MarketStatusconn error", e.getMessage());
				e.printStackTrace();

			}

			  return ResponseEntity.ok().body(json);
		
	}
	
	
	@RequestMapping(value="/AlertSet22", method = RequestMethod.POST)
	public ResponseEntity<List<Alerts>> addAlertSet(HttpServletRequest request, HttpServletResponse response,@RequestParam("scriptName") String scriptName,@RequestParam("price") String price
			,@RequestParam("frequency") String frequency,@RequestParam("notification") String notification,@RequestParam("expiry") String expiry,@RequestParam("time") String time
			,@RequestParam("alertcondition") String alertcondition,@RequestParam("exchange") String exchange,@RequestParam("token") String token,@RequestParam("setstockdisplayname") String setstockdisplayname,@RequestParam("setmcxticksize") String setmcxticksize
			,@RequestParam("setmcxexpirydate") String setmcxexpirydate,@RequestParam("setnseticksize") String setnseticksize,@RequestParam("setnseexpirydate") String setnseexpirydate,@RequestParam("setnfoexpirydate") String setnfoexpirydate,@RequestParam("setmcxInstrumentCode") String setmcxInstrumentCode
			,@RequestParam("setmcxStrikePrice") String setmcxStrikePrice,@RequestParam("setmcxOptionType") String setmcxOptionType,@RequestParam("setmcxInstrumentName") String setmcxInstrumentName,@RequestParam("setmcxInstrumentSeries") String setmcxInstrumentSeries,@RequestParam("setnseSymbol") String setnseSymbol,@RequestParam("setnseSeries") String setnseSeries
			,@RequestParam("setnfosymbol") String setnfosymbol,@RequestParam("setnfostrike_price") String setnfostrike_price,@RequestParam("setnfooption_type") String setnfooption_type,@RequestParam("setnfoinstrument_name") String setnfoinstrument_name) {
		
		 
		 HttpSession session = null;
			session = request.getSession();
			String userId = (String) session.getAttribute("userId");
			
			Alerts script =new Alerts();
			
		//	script.setAlertId(1);
		 script.setAlertcondition(alertcondition);
		 script.setPrice(price);
		 script.setFrequency(frequency);
		 
		 if(frequency.equalsIgnoreCase("Once")) {
			 DateTimeFormatter dtf1 = DateTimeFormatter.ofPattern("dd/MM/yyyy");
			   LocalDateTime now1 = LocalDateTime.now();

			   
			   String expiryd=dtf1.format(now1);
			   System.out.println("expiryd::::"+expiryd);
			  script.setExpirydate(expiryd);
			  
			  DateTimeFormatter dtf2 = DateTimeFormatter.ofPattern("HH:mm");
			   LocalDateTime now2 = LocalDateTime.now();
			   String expiryt=dtf2.format(now2);
			   System.out.println("expiryt::::"+expiryt);
			  script.setTimer(expiryt);
		  script.setNotificationintervalmin("");
		 
		 }else {
			 script.setExpirydate(expiry);
			 script.setTimer(time);
			 script.setNotificationintervalmin(notification);
		 }
		 
		 script.setScriptname(scriptName);
		 script.setComments("");
		 script.setStatus("1");
		 script.setUserId(userId);
		 script.setExchange(exchange);
		 script.setToken(token);
		 
		 script.setStockdisplayname(setstockdisplayname);
		 script.setMcxticksize(setmcxticksize);
		 script.setMcxexpirydate(setmcxexpirydate);
		 script.setNseticksize(setnseticksize);
		 script.setNseexpirydate(setnseexpirydate);
		 script.setNfoexpirydate(setnfoexpirydate);
		 script.setMcxInstrumentCode(setmcxInstrumentCode);
		 script.setMcxStrikePrice(setmcxStrikePrice);
		 script.setMcxOptionType(setmcxOptionType);
		 script.setMcxInstrumentName(setmcxInstrumentName);
		 script.setMcxInstrumentSeries(setmcxInstrumentSeries);
		 script.setNseSymbol(setnseSymbol);
		 script.setNseSeries(setnseSeries);
		 script.setNfosymbol(setnfosymbol);
		 script.setNfostrike_price(setnfostrike_price);
		 script.setNfooption_type(setnfooption_type);
		 script.setNfoinstrument_name(setnfoinstrument_name);
		 
		 
		 List<Alerts> list= scriptImp.AlertSave(script);
	
		return ResponseEntity.ok().body(list);
		
		
		
	}
	
	@RequestMapping(value="/getAlert22", method = RequestMethod.POST)
	public ResponseEntity<List<Alerts>> getAlert(HttpServletRequest request, HttpServletResponse response) {
		
		 
		 HttpSession session = null;
			session = request.getSession();
			String userId = (String) session.getAttribute("userId");
			
			Alerts script =new Alerts();
		 
		 List<Alerts> list= scriptImp.getAlertlistAll();
		 
		// System.out.println("getalert::::"+list);
		
		 return ResponseEntity.ok().body(list);
		
		
		
	}
	
	@RequestMapping(value="/updateAlert22", method = RequestMethod.POST)
	public ResponseEntity<List<Alerts>> updateAlert(HttpServletRequest request, HttpServletResponse response,@RequestParam("Id") String Id,@RequestParam("scriptName") String scriptName,@RequestParam("price") String price
			,@RequestParam("frequency") String frequency,@RequestParam("notification") String notification,@RequestParam("expiry") String expiry,@RequestParam("time") String time
			,@RequestParam("alertcondition") String alertcondition) {
		
		 
		 HttpSession session = null;
			session = request.getSession();
			String userId = (String) session.getAttribute("userId");
			
			Alerts script =new Alerts();
			
			script.setAlertcondition(alertcondition);
			 script.setPrice(price);
			 script.setFrequency(frequency);
			 
			 if(frequency.equalsIgnoreCase("Once")) {
				  script.setExpirydate("");
				  script.setTimer("");
				  script.setNotificationintervalmin("");
				 
			}else {
					 script.setExpirydate(expiry);
					 script.setTimer(time);
					 script.setNotificationintervalmin(notification);
			}
			 
			 script.setScriptname(scriptName);
			 script.setComments("");
			 script.setStatus("1");
			 script.setUserId(userId);
			
		 
		 List<Alerts> list= scriptImp.getAlertupdate(Id,script);
		
		 return ResponseEntity.ok().body(list);
		
		
		
	}
	
	@RequestMapping(value="/getAlertPause22", method = RequestMethod.POST)
	public ResponseEntity<List<Alerts>> getAlertPause(HttpServletRequest request, HttpServletResponse response,@RequestParam("Id") String Id,@RequestParam("status") String status) {
		
		System.out.println("inside getalert");
		 HttpSession session = null;
			session = request.getSession();
			String userId = (String) session.getAttribute("userId");
			Alerts script =new Alerts();

		 
		 List<Alerts> list= scriptImp.updatePause(Id,status);
		
		 return ResponseEntity.ok().body(list);
		
		
		
	}
	
	@RequestMapping(value="/getAlertDelete22", method = RequestMethod.POST)
	public int getAlertDelete(HttpServletRequest request, HttpServletResponse response,@RequestParam("Id") String Id) {
		
		 
		 HttpSession session = null;
			session = request.getSession();
			String userId = (String) session.getAttribute("userId");
			
			
			Alerts script =new Alerts();

		 
		 int val= scriptImp.getDelete(Id);
		 
		
		 return val;
		
		
		
	}
	
	@RequestMapping(value="/getTriggerAlert22", method = RequestMethod.POST)
	public ResponseEntity<List<Alerts>> getTriggerAlert(HttpServletRequest request, HttpServletResponse response,@RequestParam("price") String price
			,@RequestParam("mydate") String mydate,@RequestParam("myhours") String myhours) {
		
		 
		 HttpSession session = null;
			session = request.getSession();
			String userId = (String) session.getAttribute("userId");
			
			
			Alerts script =new Alerts();
			
			 script.setPrice(price);
			 script.setExpirydate(mydate);
			 script.setTimer(myhours);

		 
		 List<Alerts> list= scriptImp.getTrigger(script);
		
		 return ResponseEntity.ok().body(list);
		
		
		
	}
	
	
	@RequestMapping(value="/searchToken", method = RequestMethod.POST)
	public ResponseEntity<List<MarketWacthScript>> searchToken(HttpServletRequest request, HttpServletResponse response,@RequestParam("Token") String Token) {
		
		 
		 HttpSession session = null;
			session = request.getSession();
			//String userId = (String) session.getAttribute("userId");
		 
		 MarketWacthScript script =new MarketWacthScript();
		 
		 
		 List<MarketWacthScript> list= scriptImp.searchToken(Token);
		
		return ResponseEntity.ok().body(list);
		

		
	}
	
	

	
	}



