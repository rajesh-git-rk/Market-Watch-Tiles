package com.topaz.trading.controller.kambala;


import java.net.URL;
import java.util.Base64;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.json.simple.JSONObject;
import org.json.simple.JSONValue;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.google.gson.Gson;
import com.topaz.trading.controller.CommonFunction;
import com.topaz.trading.controller.MarketwatchProvider;
import com.topaz.trading.pojo.UserInfo;


@RestController
//@RequestMapping("/c")
public class FundscontrollerKambala {
	
	
	@Autowired
	MarketwatchProvider marketwatchProvider;
	
	@Autowired
	Logincontroller logincontrollerKambala;
	
	
	private static Logger logger = LoggerFactory.getLogger(FundscontrollerKambala.class);
	

@RequestMapping(value="/fundsLimitsCOM", method = RequestMethod.POST, produces="application/json")
	public ResponseEntity<JSONObject> FundsLimitsPageCOM(HttpServletRequest request, HttpServletResponse response) {
		
		    HttpSession session = request.getSession();
		    
			String userId = (String) session.getAttribute("userId");
			String jKey = (String) session.getAttribute("susertoken");
					
			//System.out.println("inside HoldingsKambala in PositionController ");
			//System.out.println("userId:::"+userId);
			

			JSONObject FundsLimitsCOMInputJson = new JSONObject();
			JSONObject FundsLimitsCOMResoponseJson = new JSONObject();
	
			
			JSONObject FundsLimitsCOMkambalaResponseJson = new JSONObject();
			
			 ResponseEntity<String> FundsLimitsCOMkambalaOutput=null;
			
			 FundsLimitsCOMInputJson.put("uid", userId);
			 FundsLimitsCOMInputJson.put("actid",userId);
			 FundsLimitsCOMInputJson.put("seg","COM");
			
			 System.out.println(" FundsLimitsCOMInput jKey:::"+jKey);
			try {
	
					StringBuffer  FundsLimitsCOMkambalaBuff = new StringBuffer(marketwatchProvider.getFundslimitkambalaUrl());
					
					URL  FundsLimitsCOMkambalaUrl = new URL( FundsLimitsCOMkambalaBuff.toString());
					
					RestTemplate restTemplate = new RestTemplate();			
					//HttpHeaders headers = new HttpHeaders();

			        Map<String,Object> map = new HashMap<String,Object>();
			        map.put("jData", FundsLimitsCOMInputJson.toJSONString());
			        map.put("jKey",jKey);
			        
			  	    String bodyproperties= CommonFunction.urlEncodeUTF8(map);
			  							
					HttpEntity<String> requestparam = new HttpEntity<>(bodyproperties);
			       
					 System.out.println(" FundsLimits COM URL : "+ FundsLimitsCOMkambalaUrl.toString());       
					System.out.println(" FundsLimits COM requestparam : "+requestparam.toString()); 

					// build the request
					FundsLimitsCOMkambalaOutput = restTemplate.postForEntity(FundsLimitsCOMkambalaUrl.toString(), requestparam, String.class);


				     System.out.println(" FundsLimitsstatus COM code : "+  FundsLimitsCOMkambalaOutput.getStatusCode());
					//System.out.println(" FundsLimits headers : "+  FundsLimitskambalaOutput.getHeaders());
					 System.out.println(" FundsLimits COM body : "+  FundsLimitsCOMkambalaOutput.getBody());

			        //System.out.println(" FundsLimits restTemplate : "+restTemplate.toString()); 
			        FundsLimitsCOMResoponseJson=(JSONObject) JSONValue.parse(FundsLimitsCOMkambalaOutput.getBody());		       

			} catch (Exception e) {
				logger.error("Unexpected  FundsLimits error", e.getMessage());
				e.printStackTrace();
				//return ResponseEntity.ok().body("{}");
				//return new ResponseEntity<String>(HttpStatus.CREATED);
			}

			  return ResponseEntity.ok().body( FundsLimitsCOMResoponseJson);
		}
	
	@RequestMapping(value="/fundsLimitsAll", method = RequestMethod.POST, produces="application/json")
	public ResponseEntity<JSONObject> FundsLimitsAllPage(HttpServletRequest request, HttpServletResponse response) {
				  
		    HttpSession session = request.getSession();
		    
			String userId = (String) session.getAttribute("userId");
			String jKey = (String) session.getAttribute("susertoken");
					
			//System.out.println("inside HoldingsKambala in PositionController ");
			//System.out.println("userId:::"+userId);
			

			JSONObject FundsLimitsInputJson = new JSONObject();
			JSONObject FundsLimitsResoponseJson = new JSONObject();
	
			
			JSONObject FundsLimitskambalaResponseJson = new JSONObject();
			
			 ResponseEntity<String> FundsLimitskambalaOutput=null;
			
			 FundsLimitsInputJson.put("uid", userId);
			 FundsLimitsInputJson.put("actid",userId);
			
			
			 System.out.println(" FundsLimitsInput jKey:::"+jKey);
			try {
	
					StringBuffer  FundsLimitskambalaBuff = new StringBuffer(marketwatchProvider.getFundslimitkambalaUrl());
					
					URL  FundsLimitskambalaUrl = new URL( FundsLimitskambalaBuff.toString());
					
					RestTemplate restTemplate = new RestTemplate();			
					//HttpHeaders headers = new HttpHeaders();

			        Map<String,Object> map = new HashMap<String,Object>();
			        map.put("jData", FundsLimitsInputJson.toJSONString());
			        map.put("jKey",jKey);
			        
			  	    String bodyproperties= CommonFunction.urlEncodeUTF8(map);
			  							
					HttpEntity<String> requestparam = new HttpEntity<>(bodyproperties);
			       
					// System.out.println(" FundsLimits URL : "+ FundsLimitskambalaUrl.toString());       
					//System.out.println(" FundsLimits requestparam : "+requestparam.toString()); 

					// build the request
					FundsLimitskambalaOutput = restTemplate.postForEntity(FundsLimitskambalaUrl.toString(), requestparam, String.class);


					//  System.out.println(" FundsLimitsstatus code : "+  FundsLimitskambalaOutput.getStatusCode());
					//System.out.println(" FundsLimits headers : "+  FundsLimitskambalaOutput.getHeaders());
					 System.out.println(" FundsLimits ALL body : "+  FundsLimitskambalaOutput.getBody());

			        //System.out.println(" FundsLimits restTemplate : "+restTemplate.toString()); 
			        FundsLimitsResoponseJson=(JSONObject) JSONValue.parse(FundsLimitskambalaOutput.getBody());		       

			} catch (Exception e) {
				logger.error("Unexpected  FundsLimits error", e.getMessage());
				e.printStackTrace();
				//return ResponseEntity.ok().body("{}");
				//return new ResponseEntity<String>(HttpStatus.CREATED);
			}

			  return ResponseEntity.ok().body( FundsLimitsResoponseJson);
		}


	

	@RequestMapping(value="/fundsLimits", method = RequestMethod.POST, produces="application/json")
	public ResponseEntity<JSONObject> FundsLimitsPage(HttpServletRequest request, HttpServletResponse response) {
		
		
		  
		    HttpSession session = request.getSession();
		    
			String userId = (String) session.getAttribute("userId");
			String jKey = (String) session.getAttribute("susertoken");
					
			//System.out.println("inside HoldingsKambala in PositionController ");
			//System.out.println("userId:::"+userId);
			

			JSONObject FundsLimitsInputJson = new JSONObject();
			JSONObject FundsLimitsResoponseJson = new JSONObject();
	
			
			JSONObject FundsLimitskambalaResponseJson = new JSONObject();
			
			 ResponseEntity<String> FundsLimitskambalaOutput=null;
			
			 FundsLimitsInputJson.put("uid", userId);
			 FundsLimitsInputJson.put("actid",userId);
			
			 //System.out.println(" FundsLimitsInput jKey:::"+jKey);
			try {
	
					StringBuffer  FundsLimitskambalaBuff = new StringBuffer(marketwatchProvider.getFundslimitkambalaUrl());
					
					URL  FundsLimitskambalaUrl = new URL( FundsLimitskambalaBuff.toString());
					
					RestTemplate restTemplate = new RestTemplate();			
					//HttpHeaders headers = new HttpHeaders();

			        Map<String,Object> map = new HashMap<String,Object>();
			        map.put("jData", FundsLimitsInputJson.toJSONString());
			        map.put("jKey",jKey);
			        
			  	    String bodyproperties= CommonFunction.urlEncodeUTF8(map);
			  							
					HttpEntity<String> requestparam = new HttpEntity<>(bodyproperties);
			       
					// System.out.println(" FundsLimits URL : "+ FundsLimitskambalaUrl.toString());       
					//System.out.println(" FundsLimits requestparam : "+requestparam.toString()); 

					// build the request
					FundsLimitskambalaOutput = restTemplate.postForEntity(FundsLimitskambalaUrl.toString(), requestparam, String.class);


					//  System.out.println(" FundsLimitsstatus code : "+  FundsLimitskambalaOutput.getStatusCode());
					//System.out.println(" FundsLimits headers : "+  FundsLimitskambalaOutput.getHeaders());
					// System.out.println(" FundsLimits body : "+  FundsLimitskambalaOutput.getBody());

			        //System.out.println(" FundsLimits restTemplate : "+restTemplate.toString()); 
			        FundsLimitsResoponseJson=(JSONObject) JSONValue.parse(FundsLimitskambalaOutput.getBody());		       

			} catch (Exception e) {
				logger.error("Unexpected  FundsLimits error", e.getMessage());
				e.printStackTrace();
				//return ResponseEntity.ok().body("{}");
				//return new ResponseEntity<String>(HttpStatus.CREATED);
			}

			  return ResponseEntity.ok().body( FundsLimitsResoponseJson);
		
	}
	
	@RequestMapping(value = "/Funds", method = RequestMethod.GET)
	public ResponseEntity<String> LimitsPage(HttpServletRequest request, HttpServletResponse response,@RequestParam String Segmentall,@RequestParam String Segmentcom ) {
		
	JSONObject PayinReportKambalaInputJson = new JSONObject();
	JSONObject FundsLimitkambalaResponseJson = new JSONObject();
	
	
	 HttpSession session = request.getSession();
	    
		String userId = (String) session.getAttribute("userId");
		String jKey = (String) session.getAttribute("susertoken");
				 				

			PayinReportKambalaInputJson.put("uid", userId);
			PayinReportKambalaInputJson.put("actid",userId);
		
		
	 ResponseEntity<String> FundsLimitOutput=null;
	 
	
	try {		
		StringBuffer FundslimitkambalaBuff = new StringBuffer(marketwatchProvider.getFundslimitkambalaUrl());		
		URL FundslimitkambalaUrl = new URL(FundslimitkambalaBuff.toString());		
		RestTemplate restTemplate = new RestTemplate();			
		HttpHeaders headers = new HttpHeaders();
        //headers.setContentType(MediaType.APPLICATION_JSON);   
      
	      Map<String,Object> map = new HashMap<String,Object>();
	      map.put("jData",PayinReportKambalaInputJson.toJSONString());      
	      map.put("jKey",jKey);
      
	      String bodyproperties= CommonFunction.urlEncodeUTF8(map);
      
	     // System.out.println("bodyproperties : "+bodyproperties.toString());  
          
	      HttpEntity<String> requestparam = new HttpEntity<>(bodyproperties.toString(), headers);
       
	      //System.out.println("Funds URL : "+FundslimitkambalaUrl.toString());       
	     // System.out.println("Funds requestparam : "+requestparam.toString()); 
       
	      // build the request
	      FundsLimitOutput = restTemplate.postForEntity(FundslimitkambalaUrl.toString(), requestparam, String.class);
        
	      String Responsebody=FundsLimitOutput.getBody();
       
       
		   	Object obj = JSONValue.parse(Responsebody);
		   	FundsLimitkambalaResponseJson = (JSONObject) obj;
		   	/*System.out.println("OptionChainResponseJson : "+ FundsLimitkambalaResponseJson);
		   	
	        System.out.println("Funds status code : "+ FundsLimitOutput.getStatusCode());
	        System.out.println("Funds headers : "+ FundsLimitOutput.getHeaders());
	        System.out.println("Funds body : "+ FundsLimitOutput.getBody());
	
	        System.out.println("restTemplate : "+restTemplate.toString()); 
*/
			} catch (Exception e) {
				logger.error("Unexpected PayinReportKambalaResponse error", e.getMessage());
				e.printStackTrace();
			}
		
			  return ResponseEntity.ok().body(FundsLimitOutput.getBody());

	}
	
	@RequestMapping(value="/Limits", method = RequestMethod.POST, produces="application/json")
	public ResponseEntity<String> FundsLimitPageKambala(HttpServletRequest request, HttpServletResponse response) { 

	JSONObject PayinReportKambalaInputJson = new JSONObject();
	JSONObject FundsLimitkambalaResponseJson = new JSONObject();
	
	 HttpSession session = request.getSession();
	    
	    String userId = (String) session.getAttribute("userId");
		String jKey=(String) session.getAttribute("susertoken");
				 				

			PayinReportKambalaInputJson.put("uid", userId);
			PayinReportKambalaInputJson.put("actid",userId);
//			PayinReportKambalaInputJson.put("prd", "I");
//			PayinReportKambalaInputJson.put("seg","FO");
//			PayinReportKambalaInputJson.put("exch", "NFO");


		 //System.out.println("jKey:::"+jKey);
	
	 
	 ResponseEntity<String> FundsLimitOutput=null;
	 
	
	try {		
		StringBuffer FundslimitkambalaBuff = new StringBuffer(marketwatchProvider.getFundslimitkambalaUrl());		
		URL FundslimitkambalaUrl = new URL(FundslimitkambalaBuff.toString());		
		RestTemplate restTemplate = new RestTemplate();			
		HttpHeaders headers = new HttpHeaders();
        //headers.setContentType(MediaType.APPLICATION_JSON);   
      
	      Map<String,Object> map = new HashMap<String,Object>();
	      map.put("jData",PayinReportKambalaInputJson.toJSONString());      
	      map.put("jKey",jKey);
      
	      String bodyproperties= CommonFunction.urlEncodeUTF8(map);
      
	      //System.out.println("bodyproperties : "+bodyproperties.toString());  
          
	      HttpEntity<String> requestparam = new HttpEntity<>(bodyproperties.toString());
       
	    /*  System.out.println("URL : "+FundslimitkambalaUrl.toString());       
	      System.out.println("requestparam : "+requestparam.toString());*/ 
       
	      // build the request
	      FundsLimitOutput = restTemplate.postForEntity(FundslimitkambalaUrl.toString(), requestparam, String.class);
        
	      String Responsebody=FundsLimitOutput.getBody();
       
       
		   	Object obj = JSONValue.parse(Responsebody);
		   	FundsLimitkambalaResponseJson = (JSONObject) obj;
//		   	System.out.println("OptionChainResponseJson : "+ FundsLimitkambalaResponseJson);
//		   	
//	        System.out.println("status code : "+ FundsLimitOutput.getStatusCode());
//	        System.out.println("headers : "+ FundsLimitOutput.getHeaders());
//	        System.out.println("body : "+ FundsLimitOutput.getBody());
	
	        

			} catch (Exception e) {
				logger.error("Unexpected PayinReportKambalaResponse error", e.getMessage());
				e.printStackTrace();
			}
		
			  return ResponseEntity.ok().body(FundsLimitOutput.getBody());

	}

	@RequestMapping(value="/GetPayinReport", method = RequestMethod.POST, produces="application/json")
	public ResponseEntity<String> GetPayinReportPageKambala(HttpServletRequest request, HttpServletResponse response) { 

	JSONObject PayinReportKambalaInputJson = new JSONObject();
	JSONObject PayinReportKambalaResponseJson = new JSONObject();
	
	 
	 HttpSession session = request.getSession();
	    
	    String userId = (String) session.getAttribute("userId");
		String jKey=(String) session.getAttribute("susertoken");
				 				

		PayinReportKambalaInputJson.put("from_date", "01/11/2021");
		PayinReportKambalaInputJson.put("to_date","22/11/2021");
		PayinReportKambalaInputJson.put("actid",userId);
		

		// System.out.println("jKey:::"+jKey);
	 
	 ResponseEntity<String> PayinReportKambalaOutput=null;
	 
	
	try {		
		StringBuffer PayinReportKambalaBuff = new StringBuffer(marketwatchProvider.getGetPayinReportUrl());		
		URL PayinReportKambalaUrl = new URL(PayinReportKambalaBuff.toString());		
		RestTemplate restTemplate = new RestTemplate();			
		HttpHeaders headers = new HttpHeaders();
        //headers.setContentType(MediaType.APPLICATION_JSON);   
      
	      Map<String,Object> map = new HashMap<String,Object>();
	      map.put("jData",PayinReportKambalaInputJson.toJSONString());      
	      map.put("jKey",jKey);
      
	      String bodyproperties= CommonFunction.urlEncodeUTF8(map);
      
	      //System.out.println("bodyproperties : "+bodyproperties.toString());  
          
	      HttpEntity<String> requestparam = new HttpEntity<>(bodyproperties.toString(), headers);
       
	      //System.out.println("URL : "+PayinReportKambalaUrl.toString());       
	      //System.out.println("requestparam : "+requestparam.toString()); 
       
	      // build the request
	      PayinReportKambalaOutput = restTemplate.postForEntity(PayinReportKambalaUrl.toString(), requestparam, String.class);
        
	      String Responsebody=PayinReportKambalaOutput.getBody();
       
       
		   	Object obj = JSONValue.parse(Responsebody);
		   	PayinReportKambalaResponseJson = (JSONObject) obj;
		   	/*System.out.println("PayinReportKambalaResponseJson : "+ PayinReportKambalaResponseJson);
		   	
	        System.out.println("status code : "+ PayinReportKambalaOutput.getStatusCode());
	        System.out.println("headers : "+ PayinReportKambalaOutput.getHeaders());
	        System.out.println("body : "+ PayinReportKambalaOutput.getBody());
	
	        System.out.println("restTemplate : "+restTemplate.toString()); 
*/
			} catch (Exception e) {
				logger.error("Unexpected PayinReportKambalaResponse error", e.getMessage());
				e.printStackTrace();
			}
		
			  return ResponseEntity.ok().body(PayinReportKambalaOutput.getBody());

	}

	@RequestMapping(value="/GetPayoutReport", method = RequestMethod.POST, produces="application/json")
	public ResponseEntity<String> GetPayoutReportPageKambala(HttpServletRequest request, HttpServletResponse response) { 

	JSONObject PayoutReportKambalaInputJson = new JSONObject();
	JSONObject PayoutReportKambalaResponseJson = new JSONObject();
	
	 HttpSession session = request.getSession();
	    
	    String userId = (String) session.getAttribute("userId");
		String jKey=(String) session.getAttribute("susertoken");
				 				

		PayoutReportKambalaInputJson.put("from_date", "01/11/2021");
		PayoutReportKambalaInputJson.put("to_date","22/11/2021");
		PayoutReportKambalaInputJson.put("actid",userId);
		

		 //System.out.println("jKey:::"+jKey);
	 
	 ResponseEntity<String> PayoutReportKambalaOutput=null;
	 
	
	try {		
		StringBuffer PayoutReportKambalaBuff = new StringBuffer(marketwatchProvider.getGetPayoutReportUrl());		
		URL PayoutReportKambalaUrl = new URL(PayoutReportKambalaBuff.toString());		
		RestTemplate restTemplate = new RestTemplate();			
		HttpHeaders headers = new HttpHeaders();
        //headers.setContentType(MediaType.APPLICATION_JSON);   
      
	      Map<String,Object> map = new HashMap<String,Object>();
	      map.put("jData",PayoutReportKambalaInputJson.toJSONString());      
	      map.put("jKey",jKey);
      
	      String bodyproperties= CommonFunction.urlEncodeUTF8(map);
      
	      //System.out.println("bodyproperties : "+bodyproperties.toString());  
          
	      HttpEntity<String> requestparam = new HttpEntity<>(bodyproperties.toString(), headers);
       
//	      System.out.println("URL : "+PayoutReportKambalaUrl.toString());       
//	      System.out.println("requestparam : "+requestparam.toString()); 
       
	      // build the request
	      PayoutReportKambalaOutput = restTemplate.postForEntity(PayoutReportKambalaUrl.toString(), requestparam, String.class);
        
	      String Responsebody=PayoutReportKambalaOutput.getBody();
       
       
		   	Object obj = JSONValue.parse(Responsebody);
		   	PayoutReportKambalaResponseJson = (JSONObject) obj;
		  /* 	System.out.println("PayoutReportKambalaResponseJson : "+ PayoutReportKambalaResponseJson);
		   	
	        System.out.println("status code : "+ PayoutReportKambalaOutput.getStatusCode());
	        System.out.println("headers : "+ PayoutReportKambalaOutput.getHeaders());
	        System.out.println("body : "+ PayoutReportKambalaOutput.getBody());
	
	        System.out.println("restTemplate : "+restTemplate.toString());*/ 

			} catch (Exception e) {
				logger.error("Unexpected PayoutReportKambalaResponse error", e.getMessage());
				e.printStackTrace();
			}
		
			  return ResponseEntity.ok().body(PayoutReportKambalaOutput.getBody());

	}


@RequestMapping(value="/getHSToken", method = RequestMethod.POST, produces="application/json")
	public Object getHSTokenPage(HttpServletRequest request, HttpServletResponse response) {
		

		String hsToken="", brokerID="",sLoginId="",AccountId="",token="",BrokerId="";
		
		HttpSession session = request.getSession();
        String userId = (String) session.getAttribute("userId");
		String jKey = (String) session.getAttribute("susertoken");

		JSONObject getHSTokenInputJson = new JSONObject();
		JSONObject getHSTokenResoponseJson = new JSONObject();

		ResponseEntity<String> getHSTokenkambalaOutput=null;
		String PayinLinkkambalaOutput=null;

		getHSTokenInputJson.put("uid", userId);
		Object getHSTokenResponseObject = null;

		//System.out.println(" getHSTokenInput jKey:::"+jKey);
		try {

			StringBuffer  getHSTokenkambalaBuff = new StringBuffer(marketwatchProvider.getHstokenkambalaUrl());
			URL  getHSTokenkambalaUrl = new URL( getHSTokenkambalaBuff.toString());
			
			RestTemplate restTemplate = new RestTemplate();	
			
			Map<String,Object> map = new HashMap<String,Object>();
			map.put("jData", getHSTokenInputJson.toJSONString());
			map.put("jKey",jKey);

			String bodyproperties= CommonFunction.urlEncodeUTF8(map);

			HttpEntity<String> requestparam = new HttpEntity<>(bodyproperties);

			//System.out.println(" getHSToken URL : "+ getHSTokenkambalaUrl.toString());       
			//System.out.println(" getHSToken requestparam : "+requestparam.toString()); 

			// build the request
			getHSTokenkambalaOutput = restTemplate.postForEntity(getHSTokenkambalaUrl.toString(), requestparam, String.class);

			//System.out.println(" getHSTokenstatus code : "+  getHSTokenkambalaOutput.getStatusCode());
			//System.out.println(" getHSToken headers : "+  getHSTokenkambalaOutput.getHeaders());
			//System.out.println(" getHSToken ALL body : "+  getHSTokenkambalaOutput.getBody());
            //System.out.println(" getHSToken restTemplate : "+restTemplate.toString()); 
			
			//getHSTokenResoponseJson=(JSONObject) JSONValue.parse(getHSTokenkambalaOutput.getBody());	

		
			 getHSTokenResponseObject =(JSONObject) JSONValue.parse(getHSTokenkambalaOutput.getBody());	
			
			 //System.out.println("getHSTokenResponseObject: "+getHSTokenResponseObject.toString());
			 return getHSTokenResponseObject ;
			

			
		} catch (Exception e) {

			logger.error("Unexpected  getHSToken error", e.getMessage());
			e.printStackTrace();
			//return ResponseEntity.ok().body("{}");
			//return new ResponseEntity<String>(HttpStatus.CREATED);
		}
		return getHSTokenResponseObject;
		
		//return ResponseEntity.ok().body(PayinLinkkambalaOutput);
		
	}

	@RequestMapping(value="/payinLinkKambala", method = RequestMethod.POST, produces="application/json")
	public ResponseEntity<String>  payinLinkKambalaPage(HttpServletRequest request, HttpServletResponse response) {
		

		String hsToken="", brokerID="",sLoginId="",AccountId="",token="",BrokerId="";
		
		HttpSession session = request.getSession();
        String userId = (String) session.getAttribute("userId");
		String jKey = (String) session.getAttribute("susertoken");

	
		String PayinLinkkambalaOutput=null;
		
		JSONObject  PayinLinkkambalaPageResponse = new JSONObject();
		
		try {

			
			Object PayinLinkkambalaDetails =getHSTokenPage( request, response);
			
			 PayinLinkkambalaPageResponse=(JSONObject) PayinLinkkambalaDetails;
			hsToken=(String)  PayinLinkkambalaPageResponse.get("hstk");
			brokerID=(String) PayinLinkkambalaPageResponse.get("brkname");
			
			String details="sLoginId="+userId+"&sAccountId="+userId+"&token="+hsToken+"&sBrokerId="+brokerID;
			String encoded =Base64.getUrlEncoder().encodeToString(details.getBytes());
			
			//System.out.println("hstk value: "+hsToken);
           // System.out.println("encoded value: "+encoded);
			
			StringBuffer  PayinLinkkambalaBuff = new StringBuffer(marketwatchProvider.getPayinLinkkambalaUrl());
			PayinLinkkambalaBuff.append(encoded);
			URL  PayinLinkkambalaUrl = new URL(PayinLinkkambalaBuff.toString());
			
			PayinLinkkambalaOutput = new Gson().toJson(PayinLinkkambalaUrl);
			//System.out.println(" PayinLink output URL: "+  PayinLinkkambalaOutput);
			
		} catch (Exception e) {

			logger.error("Unexpected  getHSToken error", e.getMessage());
			e.printStackTrace();
			//return ResponseEntity.ok().body("{}");
			//return new ResponseEntity<String>(HttpStatus.CREATED);
		}
		return ResponseEntity.ok().body(PayinLinkkambalaOutput);
	}

	@RequestMapping(value="/payoutLinkKambala", method = RequestMethod.POST, produces="application/json")
	public ResponseEntity<String>  payoutLinkKambalaPage(HttpServletRequest request, HttpServletResponse response) {
		

		String hsToken="", brokerID="",sLoginId="",AccountId="",token="",BrokerId="";
		
		HttpSession session = request.getSession();
        String userId = (String) session.getAttribute("userId");
		String jKey = (String) session.getAttribute("susertoken");

	
		String payoutLinkkambalaOutput=null;
		
		JSONObject payoutkambalaPageResponse = new JSONObject();
			
		try {

			
			Object payoutLinkkambalaDetails =getHSTokenPage( request, response);
			
			payoutkambalaPageResponse=(JSONObject) payoutLinkkambalaDetails;
			hsToken=(String) payoutkambalaPageResponse.get("hstk");
			brokerID=(String) payoutkambalaPageResponse.get("brkname");
			
			String details="sLoginId="+userId+"&sAccountId="+userId+"&token="+hsToken+"&sBrokerId="+brokerID;
			String encoded =Base64.getUrlEncoder().encodeToString(details.getBytes());
			
			//System.out.println("User details and hstoken: "+details);
			//System.out.println("hstk value: "+hsToken);
           // System.out.println("encoded value: "+encoded);
			
			StringBuffer  payoutLinkkambalaBuff = new StringBuffer(marketwatchProvider.getPayoutLinkkambalaUrl());
			payoutLinkkambalaBuff.append(encoded);
			URL  payoutLinkkambalaUrl = new URL(payoutLinkkambalaBuff.toString());
			
			payoutLinkkambalaOutput = new Gson().toJson(payoutLinkkambalaUrl);
			//System.out.println(" payoutLink output URL: "+  payoutLinkkambalaOutput);
			
		} catch (Exception e) {

			logger.error("Unexpected  getHSToken error", e.getMessage());
			e.printStackTrace();
			//return ResponseEntity.ok().body("{}");
			//return new ResponseEntity<String>(HttpStatus.CREATED);
		}
		return ResponseEntity.ok().body(payoutLinkkambalaOutput);
	}


}
