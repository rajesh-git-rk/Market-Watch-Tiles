package com.topaz.trading.mobile;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
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
import org.json.simple.parser.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.Gson;
import com.topaz.trading.controller.CommonFunction;
import com.topaz.trading.controller.MarketwatchProvider;
import com.topaz.trading.controller.Portfoliocontroller;
import com.topaz.trading.model.MobileOrderbook;
import com.topaz.trading.model.Portfolio;
import com.topaz.trading.model.T1UploadHolding;
import com.topaz.trading.model.UploadHolding;
import com.topaz.trading.pojo.UserInfo;
import com.topaz.trading.repository.UploadHoldingImpl;

@RestController
public class MobilePortfoliocontroller {

	@Autowired
	MarketwatchProvider marketwatchProvider;
	
	@Autowired
	MobileLogincontrollerOmensys  mobileLogincontroller;
	
	@Autowired
	UploadHoldingImpl uploadHoldingImpl;


private static Logger logger = LoggerFactory.getLogger(MobilePortfoliocontroller.class);

	@RequestMapping(value = "/mobilePositionBook", method = RequestMethod.POST)
	public ResponseEntity<String> mobilePositionBookPage(@RequestBody Portfolio portfolio,
			HttpServletRequest request, HttpServletResponse response) {

		String PositionBookoutput = "";
		
		
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
		
		
		JSONObject PositionBookInput = new JSONObject();

		PositionBookInput.put("uid", portfolio.getUid());
		PositionBookInput.put("actid", portfolio.getActid());
		PositionBookInput.put("type", portfolio.getType());
		PositionBookInput.put("s_prdt_ali", portfolio.getS_prdt_ali());

		JSONObject PositionBookJson = new JSONObject();
		
		 String userVal="";
		 StringBuffer sb = new StringBuffer();
		try {
			String PositionBookJdata = PositionBookInput.toJSONString();
			String jKey = CommonFunction.hashData(PublicKey4);

			StringBuffer PositionBook = new StringBuffer(marketwatchProvider.getPositionBookurl());
			PositionBook
					.append("jsessionid=" + "." + TomcatCount + "&jData=" + PositionBookJdata + "&jKey=" + jKey + "");

			URL PositionBookurl = new URL(PositionBook.toString());

			logger.info("PositionBook Request URL :" + PositionBookurl.toString());

			HttpURLConnection PositionBookconn = (HttpURLConnection) PositionBookurl.openConnection();
			PositionBookconn.setRequestMethod("POST");
			PositionBookconn.setRequestProperty("Accept", "application/json");

			logger.info("PositionBook Response Code :" + PositionBookconn.getResponseCode());

			if (PositionBookconn.getResponseCode() != 200) {
				throw new RuntimeException("Failed : HTTP error code : " + PositionBookconn.getResponseCode());
			}

			BufferedReader br2 = new BufferedReader(new InputStreamReader((PositionBookconn.getInputStream())));
			String output;
			while ((output = br2.readLine()) != null) {

			//	JSONParser parser = new JSONParser();
			//	Object obj = parser.parse(output);
			//	JSONArray array = new JSONArray();
			//	array.add(obj);
			//	PositionBookJson.put("Positions : ", array);

				sb.append(output);

			}
			
			userVal=sb.toString();

			logger.info("Mobile-tradeBookJson Response Value : " + userVal);
			//PositionBookoutput = PositionBookJson.toJSONString();
			//logger.info("PositionBook Response Values : " + PositionBookoutput);
			PositionBookconn.disconnect();

		} catch (Exception e) {
			logger.error("Unexpected PositionBook error", e.getMessage());

		}

		return ResponseEntity.ok().body(userVal);
	}
	
	
	@RequestMapping(value="/HoldingDatafromDBForMobile", method = RequestMethod.POST)
	   public ResponseEntity<JSONObject> HoldingDatafromDB(HttpServletRequest request, HttpServletResponse response) {
		 
	        System.out.println("inside HoldingDatafromDB function");
	     
	        
	        JSONObject UploadHoldingJson=new JSONObject();
	   try {    
	        List<UploadHolding> list=uploadHoldingImpl.getUploadHoldingData();
	        
	        List<T1UploadHolding> list1=uploadHoldingImpl.getT1UploadHoldingData();
	        
	        System.out.println("list size : "+list);
	        
	        System.out.println("list1 size : "+list1);
	        
	        List<Object> li=new ArrayList<Object>();
	     
	        li.addAll(list);
	        li.addAll(list1);
	     
	        String message = "";
			if (list.size() > 0 || list1.size() > 0) {
				message = "Holding List Fetched Succesfully ";
				UploadHoldingJson.put("message", message);
				UploadHoldingJson.put("holdlist", li);
				UploadHoldingJson.put("stat", "Ok");

			} else {
				message = "Holding List not Fetched";
				UploadHoldingJson.put("message", message);
				UploadHoldingJson.put("stat", "Not_Ok");
			}

	 } catch (Exception e) {

		  logger.error("Exception while parsing MarketWatch Script Fetched  " + e.getMessage());
		    String message = "we could not connect our server";			
		    UploadHoldingJson.put("message", message);
		    UploadHoldingJson.put("stat", "Not_Ok");
			return new ResponseEntity<>(UploadHoldingJson, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	               
	        
		    return ResponseEntity.ok().body(UploadHoldingJson);
		    
	 
	  }
	 
	 @RequestMapping(value="/nonPOAHoldingDatafromDBForMobile", method = RequestMethod.POST)
	   public ResponseEntity<JSONObject> nonPOAHoldingDatafromDB(HttpServletRequest request, HttpServletResponse response) {
		 
	        System.out.println("inside nonPOAHoldingDatafromDB function");
	     
	        
	        JSONObject UploadHoldingJson=new JSONObject();
	        
	   try {     
	        
	     //   List<UploadHolding> list=uploadHoldingImpl.getUploadHoldingData();
	        
	        List<T1UploadHolding> list1=uploadHoldingImpl.getT1UploadHoldingData();
	        
//	        List<UploadHolding> list=uploadHoldingImpl.getNONPOAList1();
//	        
//	        List<T1UploadHolding> list1=uploadHoldingImpl.getNONPOAList2();
//	        
//	        System.out.println("list upload hold size : "+list);
//	        
//	        System.out.println("list1 size t1 upload : "+list1);
//	        
//	        List<Object> li=new ArrayList<Object>();
//	     
//	        li.addAll(list);
//	        li.addAll(list1);
	        
	        String message = "";
			if (list1.size() > 0) {
				message = "NON POA List Fetched Succesfully ";
				UploadHoldingJson.put("message", message);
				UploadHoldingJson.put("nonpoalist", list1);
				UploadHoldingJson.put("stat", "Ok");

			} else {
				message = "NON POA List not Fetched";
				UploadHoldingJson.put("message", message);
				UploadHoldingJson.put("stat", "Not_Ok");
			}

	 } catch (Exception e) {

		  logger.error("Exception while parsing MarketWatch Script Fetched  " + e.getMessage());
		    String message = "we could not connect our server";			
		    UploadHoldingJson.put("message", message);
		    UploadHoldingJson.put("stat", "Not_Ok");
			return new ResponseEntity<>(UploadHoldingJson, HttpStatus.INTERNAL_SERVER_ERROR);
		}	   
		    return ResponseEntity.ok().body(UploadHoldingJson);
		    
	 
	  }

}
