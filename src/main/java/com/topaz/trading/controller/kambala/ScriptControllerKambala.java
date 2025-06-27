package com.topaz.trading.controller.kambala;

import java.net.URL;
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
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.topaz.trading.controller.CommonFunction;
import com.topaz.trading.controller.MarketwatchProvider;
import com.topaz.trading.pojo.UserInfo;
import com.topaz.trading.pojo.Scriptpojo;

@RestController
//@RequestMapping("/c")
public class ScriptControllerKambala {

	
	@Autowired
	MarketwatchProvider marketwatchProvider;
	
	@Autowired
	Logincontroller logincontrollerKambala;
	
	private static String jKey="";
	
	
	private static Logger logger = LoggerFactory.getLogger(ScriptControllerKambala.class);	
	
	
	@RequestMapping(value="/SearchScrip", method = RequestMethod.POST, produces="application/json")
	public ResponseEntity<String> SearchScrip(HttpServletRequest request, HttpServletResponse response, @RequestBody Scriptpojo search) { 
		
		HttpSession session = request.getSession();
		
		String userId = (String) session.getAttribute("userId");
		
		System.out.println("userId:::"+userId);

	JSONObject SearchScripkambalaInputJson = new JSONObject();

    
	SearchScripkambalaInputJson.put("uid", userId);
	SearchScripkambalaInputJson.put("stext", search.getStext());
	
	jKey = (String) session.getAttribute("susertoken");

	 System.out.println("jKey : "+jKey); 
	

	 ResponseEntity<String> SearchScripOutput=null;
	 
	
	try {		
		//String jKey ="f20048c7e8ae72e7ff8b5491dc90b707d54b68edbf8faa2ca27e588b26703e6a";
		
		StringBuffer SearchScripkambalaBuff = new StringBuffer(marketwatchProvider.getKambalaSearchScripUrl());
		
		URL SearchScripkambalaUrl = new URL(SearchScripkambalaBuff.toString());
		
		RestTemplate restTemplate = new RestTemplate();			
	
      
      Map<String,Object> map = new HashMap<String,Object>();
      map.put("jData",SearchScripkambalaInputJson.toJSONString());      
      map.put("jKey",jKey);
      
     String bodyproperties= CommonFunction.urlEncodeUTF8(map);
      
     System.out.println("bodyproperties : "+bodyproperties.toString());  
          
       HttpEntity<String> requestparam = new HttpEntity<>(bodyproperties.toString());
       
       System.out.println("URL : "+SearchScripkambalaUrl.toString());       
       System.out.println("requestparam : "+requestparam.toString()); 
       
     // build the request
       SearchScripOutput = restTemplate.postForEntity(SearchScripkambalaUrl.toString(), requestparam, String.class);
        
         
        System.out.println("status code : "+ SearchScripOutput.getStatusCode());
        System.out.println("headers : "+ SearchScripOutput.getHeaders());
        System.out.println("body : "+ SearchScripOutput.getBody());
        
        
        
        
        String serachResult=marketwatchProvider.getKambalaSearchResult();
        
        int maxSize=Integer.parseInt(serachResult);
        
        int searchResultSize=0;
        if(searchResultSize>maxSize) {
        	
        	JSONObject SearchScripInputJson = new JSONObject();
            
        	SearchScripInputJson.put("uid", userId);
        	SearchScripInputJson.put("exch", "");
        	SearchScripInputJson.put("token", "");
        	
        	StringBuffer SearchScripkambalaBuff1 = new StringBuffer(marketwatchProvider.getKambalaGetSecurityInfoUrl());
    		
    		URL SearchScripkambalaUrl1 = new URL(SearchScripkambalaBuff1.toString());
        	
        	Map<String,Object> map1 = new HashMap<String,Object>();
            map1.put("jData",SearchScripInputJson.toJSONString());      
            map1.put("jKey",jKey);
        
        for(int i=0; i<maxSize;i++) {
        	
        	String bodyproperties1= CommonFunction.urlEncodeUTF8(map1);
            
            System.out.println("bodyproperties : "+bodyproperties1.toString());  
                 
              HttpEntity<String> requestparam1 = new HttpEntity<>(bodyproperties1.toString());
              
              System.out.println("URL : "+SearchScripkambalaUrl1.toString());       
              System.out.println("requestparam : "+requestparam1.toString()); 
              
            // build the request
              SearchScripOutput = restTemplate.postForEntity(SearchScripkambalaUrl1.toString(), requestparam, String.class);
        	
        }
        	
        }


	} catch (Exception e) {
		logger.error("Unexpected ValidAns error", e.getMessage());
		e.printStackTrace();
		
		return new ResponseEntity<String>(HttpStatus.CREATED);
	}

	  return ResponseEntity.ok().body(SearchScripOutput.getBody());

}
	

	@RequestMapping(value="/AddMultiScripsToMW", method = RequestMethod.POST, produces="application/json")
	public ResponseEntity<String> AddMultiScripsToMWKambala(HttpServletRequest request, HttpServletResponse response,@RequestBody Scriptpojo script) { 
		
       HttpSession session = request.getSession();
		
		String userId = (String) session.getAttribute("userId");
		
		System.out.println("userId:::"+userId);

	JSONObject AddMultiScripsToMWkambalaInputJson = new JSONObject();

	//example format NSE|22#BSE|506734
    
	AddMultiScripsToMWkambalaInputJson.put("uid", userId);
	AddMultiScripsToMWkambalaInputJson.put("wlname",script.getWlname());
	//AddMultiScripsToMWkambalaInputJson.put("scrips","ACC28OCT21F");
	AddMultiScripsToMWkambalaInputJson.put("scrips",script.getScrips());
	
	jKey = (String) session.getAttribute("susertoken");
	 System.out.println("jKey : "+jKey); 
	
	 ResponseEntity<String> AddMultiScripsToMWOutput=null;
	 
	
	try {		
		
		StringBuffer AddMultiScripsToMWkambalaBuff = new StringBuffer(marketwatchProvider.getKambalaSearchScripUrl());
		
		URL AddMultiScripsToMWkambalaUrl = new URL(AddMultiScripsToMWkambalaBuff.toString());
		
		RestTemplate restTemplate = new RestTemplate();			
		HttpHeaders headers = new HttpHeaders();
      //  headers.setContentType(MediaType.APPLICATION_JSON);
     
      
      Map<String,Object> map = new HashMap<String,Object>();
      map.put("jData",AddMultiScripsToMWkambalaInputJson.toJSONString());      
      map.put("jKey",jKey);
      
     String bodyproperties= CommonFunction.urlEncodeUTF8(map);
      
     System.out.println("bodyproperties : "+bodyproperties.toString());  
          
       HttpEntity<String> requestparam = new HttpEntity<>(bodyproperties.toString(), headers);
       
       System.out.println("URL : "+AddMultiScripsToMWkambalaUrl.toString());       
       System.out.println("requestparam : "+requestparam.toString()); 
       
     // build the request
       AddMultiScripsToMWOutput = restTemplate.postForEntity(AddMultiScripsToMWkambalaUrl.toString(), requestparam, String.class);
        
         
        System.out.println("status code : "+ AddMultiScripsToMWOutput.getStatusCode());
        System.out.println("headers : "+ AddMultiScripsToMWOutput.getHeaders());
        System.out.println("body : "+ AddMultiScripsToMWOutput.getBody());


	} catch (Exception e) {
		logger.error("Unexpected ValidAns error", e.getMessage());
		e.printStackTrace();
		
		return new ResponseEntity<String>(HttpStatus.CREATED);
	}

	  return ResponseEntity.ok().body(AddMultiScripsToMWOutput.getBody());

}
	
	
	@RequestMapping(value="/DeleteMultiMWScrips", method = RequestMethod.POST, produces="application/json")
	public ResponseEntity<String> DeleteMultiMWScripsKambala(HttpServletRequest request, HttpServletResponse response,@RequestBody Scriptpojo script) { 
		
	    HttpSession session = request.getSession();
		
		String userId = (String) session.getAttribute("userId");
			
		System.out.println("userId:::"+userId);

	JSONObject DeleteMultiMWScripskambalaInputJson = new JSONObject();

	DeleteMultiMWScripskambalaInputJson.put("uid", userId);
	DeleteMultiMWScripskambalaInputJson.put("wlname",script.getWlname());
	DeleteMultiMWScripskambalaInputJson.put("scrips",script.getScrips());
	
	jKey = (String) session.getAttribute("susertoken");

	 System.out.println("jKey : "+jKey); 

	 ResponseEntity<String> DeleteMultiMWScripsOutput=null;
	 
	
	try {		
		
		StringBuffer DeleteMultiMWScripskambalaBuff = new StringBuffer(marketwatchProvider.getKambalaDeleteMultiMWScripsUrl());
		
		URL DeleteMultiMWScripskambalaUrl = new URL(DeleteMultiMWScripskambalaBuff.toString());
		
		RestTemplate restTemplate = new RestTemplate();			
		HttpHeaders headers = new HttpHeaders();

      
      Map<String,Object> map = new HashMap<String,Object>();
      map.put("jData",DeleteMultiMWScripskambalaInputJson.toJSONString());      
      map.put("jKey",jKey);
      
     String bodyproperties= CommonFunction.urlEncodeUTF8(map);
      
     System.out.println("bodyproperties : "+bodyproperties.toString());  
          
       HttpEntity<String> requestparam = new HttpEntity<>(bodyproperties.toString(), headers);
       
       System.out.println("URL : "+DeleteMultiMWScripskambalaUrl.toString());       
       System.out.println("requestparam : "+requestparam.toString()); 
       
     // build the request
       DeleteMultiMWScripsOutput = restTemplate.postForEntity(DeleteMultiMWScripskambalaUrl.toString(), requestparam, String.class);
        
         
        System.out.println("status code : "+ DeleteMultiMWScripsOutput.getStatusCode());
        System.out.println("headers : "+ DeleteMultiMWScripsOutput.getHeaders());
        System.out.println("body : "+ DeleteMultiMWScripsOutput.getBody());


	} catch (Exception e) {
		logger.error("Unexpected ValidAns error", e.getMessage());
		e.printStackTrace();
		
		return new ResponseEntity<String>(HttpStatus.CREATED);
	}

	  return ResponseEntity.ok().body(DeleteMultiMWScripsOutput.getBody());

}	
	
	
	@RequestMapping(value="/ExchMsg", method = RequestMethod.POST, produces="application/json")
	public ResponseEntity<String> ExchMsgKambala(HttpServletRequest request, HttpServletResponse response,@RequestBody Scriptpojo script) { 
		
	HttpSession session = request.getSession();
			
	String userId = (String) session.getAttribute("userId");
				
	System.out.println("userId:::"+userId);

	JSONObject ExchMsgkambalaInputJson = new JSONObject();

	ExchMsgkambalaInputJson.put("uid", userId);
	ExchMsgkambalaInputJson.put("exch",script.getExchange());

	jKey = (String) session.getAttribute("susertoken");

	 System.out.println("jKey : "+jKey);
	
	
	 ResponseEntity<String> ExchMsgOutput=null;
	 
	
	try {		

		StringBuffer ExchMsgkambalaBuff = new StringBuffer(marketwatchProvider.getKambalaExchMsgUrl());
		
		URL ExchMsgkambalaUrl = new URL(ExchMsgkambalaBuff.toString());
		
		RestTemplate restTemplate = new RestTemplate();			
		HttpHeaders headers = new HttpHeaders();

      
      Map<String,Object> map = new HashMap<String,Object>();
      map.put("jData",ExchMsgkambalaInputJson.toJSONString());      
      map.put("jKey",jKey);
      
     String bodyproperties= CommonFunction.urlEncodeUTF8(map);
      
     //System.out.println("bodyproperties : "+bodyproperties.toString());  
          
       HttpEntity<String> requestparam = new HttpEntity<>(bodyproperties.toString(), headers);
       
       System.out.println("URL : "+ExchMsgkambalaUrl.toString());       
       System.out.println("requestparam : "+requestparam.toString()); 
       
     // build the request
       ExchMsgOutput = restTemplate.postForEntity(ExchMsgkambalaUrl.toString(), requestparam, String.class);
        
         
        System.out.println("status code : "+ ExchMsgOutput.getStatusCode());
        System.out.println("headers : "+ ExchMsgOutput.getHeaders());
        System.out.println("body : "+ ExchMsgOutput.getBody());


	} catch (Exception e) {
		logger.error("Unexpected ValidAns error", e.getMessage());
		e.printStackTrace();
		return new ResponseEntity<String>(HttpStatus.CREATED);
	}

	  return ResponseEntity.ok().body(ExchMsgOutput.getBody());

}	
}
