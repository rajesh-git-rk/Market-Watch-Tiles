package com.topaz.trading.controller.kambala;

import java.net.URL;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONObject;
import org.json.simple.JSONValue;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.topaz.trading.controller.CommonFunction;
import com.topaz.trading.controller.MarketwatchProvider;
import com.topaz.trading.pojo.UserInfo;

@RestController
//@RequestMapping("/c")
public class AlertControllerKambala {

	
	@Autowired
	MarketwatchProvider marketwatchProvider;
	
	@Autowired
	Logincontroller logincontrollerKambala;
	
	
	private static Logger logger = LoggerFactory.getLogger(AlertControllerKambala.class);	
	
	
	@RequestMapping(value="/SetAlertKambala", method = RequestMethod.POST, produces="application/json")
	public ResponseEntity<String> SetAlertKambala(HttpServletRequest request, HttpServletResponse response) { 
		
	

	JSONObject SetAlertkambalaInputJson = new JSONObject();
	JSONObject SetAlertResponseJson = new JSONObject();
	
	String actid="",susertoken="",jKey="";
	
	for (Map.Entry<String, UserInfo> entry : logincontrollerKambala.kambalaLoginmap.entrySet()) {	
		//String key = entry.getKey();
		UserInfo tab = entry.getValue();
	    
	    actid=tab.getActid();
	    susertoken=tab.getSusertoken(); 		
	}

    
	SetAlertkambalaInputJson.put("uid", actid);
	SetAlertkambalaInputJson.put("tsym","ACC28OCT21F");
	SetAlertkambalaInputJson.put("exch","NFO");
	SetAlertkambalaInputJson.put("ai_t","");
	SetAlertkambalaInputJson.put("validity","");
	SetAlertkambalaInputJson.put("d","");
	SetAlertkambalaInputJson.put("remarks","");
	
	jKey =susertoken;
	 //System.out.println("SetAlertKambala actid : " +actid+"  susertoken : "+susertoken+" jKey : "+jKey); 
	
	
	
	 ResponseEntity<String> SetAlertOutput=null;
	 
	
	try {		
		//String jKey ="f20048c7e8ae72e7ff8b5491dc90b707d54b68edbf8faa2ca27e588b26703e6a";
		
		StringBuffer SetAlertkambalaBuff = new StringBuffer(marketwatchProvider.getKambalaSetAlertUrl());
		
		URL SetAlertkambalaUrl = new URL(SetAlertkambalaBuff.toString());
		
		RestTemplate restTemplate = new RestTemplate();			
		HttpHeaders headers = new HttpHeaders();
      //  headers.setContentType(MediaType.APPLICATION_JSON);
     
      
      Map<String,Object> map = new HashMap<String,Object>();
      map.put("jData",SetAlertkambalaInputJson.toJSONString());      
      map.put("jKey",jKey);
      
     String bodyproperties= CommonFunction.urlEncodeUTF8(map);
      
     //System.out.println("bodyproperties : "+bodyproperties.toString());  
          
       HttpEntity<String> requestparam = new HttpEntity<>(bodyproperties.toString(), headers);
       
      /* System.out.println("URL : "+SetAlertkambalaUrl.toString());       
       System.out.println("requestparam : "+requestparam.toString()); 
       */
     // build the request
       SetAlertOutput = restTemplate.postForEntity(SetAlertkambalaUrl.toString(), requestparam, String.class);
        
         
       /* System.out.println("status code : "+ SetAlertOutput.getStatusCode());
        System.out.println("headers : "+ SetAlertOutput.getHeaders());
        System.out.println("body : "+ SetAlertOutput.getBody());

        System.out.println("restTemplate : "+restTemplate.toString()); */
        
        String Responsebody=SetAlertOutput.getBody();
	       
	       
	   	Object obj = JSONValue.parse(Responsebody);
	   	SetAlertResponseJson = (JSONObject) obj;
	   	//System.out.println("SetAlertResponseJson : "+ SetAlertResponseJson);

	} catch (Exception e) {
		logger.error("Unexpected ValidAns error", e.getMessage());
		e.printStackTrace();
	}

	  return ResponseEntity.ok().body(SetAlertOutput.getBody());

}
	
	@RequestMapping(value="/CancelAlertKambala", method = RequestMethod.POST, produces="application/json")
	public ResponseEntity<String> CancelAlertKambala(HttpServletRequest request, HttpServletResponse response) { 
		
	

	JSONObject CancelAlertkambalaInputJson = new JSONObject();
	JSONObject CancelAlertResponseJson = new JSONObject();
	
	String actid="",susertoken="",jKey="";
	
	for (Map.Entry<String, UserInfo> entry : logincontrollerKambala.kambalaLoginmap.entrySet()) {	
		//String key = entry.getKey();
		UserInfo tab = entry.getValue();
	    
	    actid=tab.getActid();
	    susertoken=tab.getSusertoken(); 		
	}

    
	CancelAlertkambalaInputJson.put("uid", actid);
	CancelAlertkambalaInputJson.put("al_id","");
	jKey =susertoken;
	 //System.out.println("CancelAlertKambala actid : " +actid+"  susertoken : "+susertoken+" jKey : "+jKey); 
	
	
	
	 ResponseEntity<String> CancelAlertOutput=null;
	 
	
	try {		
		//String jKey ="f20048c7e8ae72e7ff8b5491dc90b707d54b68edbf8faa2ca27e588b26703e6a";
		
		StringBuffer CancelAlertkambalaBuff = new StringBuffer(marketwatchProvider.getKambalaCancelAlertUrl());
		
		URL CancelAlertkambalaUrl = new URL(CancelAlertkambalaBuff.toString());
		
		RestTemplate restTemplate = new RestTemplate();			
		HttpHeaders headers = new HttpHeaders();
      //  headers.setContentType(MediaType.APPLICATION_JSON);
     
      
      Map<String,Object> map = new HashMap<String,Object>();
      map.put("jData",CancelAlertkambalaInputJson.toJSONString());      
      map.put("jKey",jKey);
      
     String bodyproperties= CommonFunction.urlEncodeUTF8(map);
      
    // System.out.println("bodyproperties : "+bodyproperties.toString());  
          
       HttpEntity<String> requestparam = new HttpEntity<>(bodyproperties.toString(), headers);
       
       /*System.out.println("URL : "+CancelAlertkambalaUrl.toString());       
       System.out.println("requestparam : "+requestparam.toString());*/ 
       
     // build the request
       CancelAlertOutput = restTemplate.postForEntity(CancelAlertkambalaUrl.toString(), requestparam, String.class);
        
         
        /*System.out.println("status code : "+ CancelAlertOutput.getStatusCode());
        System.out.println("headers : "+ CancelAlertOutput.getHeaders());
        System.out.println("body : "+ CancelAlertOutput.getBody());

        System.out.println("restTemplate : "+restTemplate.toString()); */
        
        String Responsebody=CancelAlertOutput.getBody();
	       
	       
	   	Object obj = JSONValue.parse(Responsebody);
	   	CancelAlertResponseJson = (JSONObject) obj;
	   //System.out.println("CancelAlertResponseJson : "+ CancelAlertResponseJson);

	} catch (Exception e) {
		logger.error("Unexpected ValidAns error", e.getMessage());
		e.printStackTrace();
	}

	  return ResponseEntity.ok().body(CancelAlertOutput.getBody());

}
	
	
	@RequestMapping(value="/ModifyAlertKambala", method = RequestMethod.POST, produces="application/json")
	public ResponseEntity<String> ModifyAlertKambala(HttpServletRequest request, HttpServletResponse response) { 
		
	

	JSONObject ModifyAlertkambalaInputJson = new JSONObject();
	JSONObject ModifyAlertResponseJson = new JSONObject();
	
	String actid="",susertoken="",jKey="";
	
	for (Map.Entry<String, UserInfo> entry : logincontrollerKambala.kambalaLoginmap.entrySet()) {	
		//String key = entry.getKey();
		UserInfo tab = entry.getValue();
	    
	    actid=tab.getActid();
	    susertoken=tab.getSusertoken(); 		
	}


	
	ModifyAlertkambalaInputJson.put("uid", actid);
	ModifyAlertkambalaInputJson.put("tsym","ACC28OCT21F");
	ModifyAlertkambalaInputJson.put("exch","NFO");
	ModifyAlertkambalaInputJson.put("ai_t","");
	ModifyAlertkambalaInputJson.put("al_id","");
	ModifyAlertkambalaInputJson.put("validity","");
	ModifyAlertkambalaInputJson.put("d","");
	ModifyAlertkambalaInputJson.put("remarks","");
	
	jKey =susertoken;
	// System.out.println("ModifyAlertKambala actid : " +actid+"  susertoken : "+susertoken+" jKey : "+jKey); 
	
	
	
	 ResponseEntity<String> ModifyAlertOutput=null;
	 
	
	try {		
		//String jKey ="f20048c7e8ae72e7ff8b5491dc90b707d54b68edbf8faa2ca27e588b26703e6a";
		
		StringBuffer ModifyAlertkambalaBuff = new StringBuffer(marketwatchProvider.getKambalaModifyAlertUrl());
		
		URL ModifyAlertkambalaUrl = new URL(ModifyAlertkambalaBuff.toString());
		
		RestTemplate restTemplate = new RestTemplate();			
		HttpHeaders headers = new HttpHeaders();
        //headers.setContentType(MediaType.APPLICATION_JSON);
     
      
      Map<String,Object> map = new HashMap<String,Object>();
      map.put("jData",ModifyAlertkambalaInputJson.toJSONString());      
      map.put("jKey",jKey);
      
     String bodyproperties= CommonFunction.urlEncodeUTF8(map);
      
     //System.out.println("bodyproperties : "+bodyproperties.toString());  
          
       HttpEntity<String> requestparam = new HttpEntity<>(bodyproperties.toString(), headers);
       
      /* System.out.println("URL : "+ModifyAlertkambalaUrl.toString());       
       System.out.println("requestparam : "+requestparam.toString());*/ 
       
     // build the request
       ModifyAlertOutput = restTemplate.postForEntity(ModifyAlertkambalaUrl.toString(), requestparam, String.class);
        
         
       /* System.out.println("status code : "+ ModifyAlertOutput.getStatusCode());
        System.out.println("headers : "+ ModifyAlertOutput.getHeaders());
        System.out.println("body : "+ ModifyAlertOutput.getBody());

        System.out.println("restTemplate : "+restTemplate.toString());*/ 
        
        String Responsebody=ModifyAlertOutput.getBody();
	       
	       
	   	Object obj = JSONValue.parse(Responsebody);
	   	ModifyAlertResponseJson = (JSONObject) obj;
	   	System.out.println("ModifyAlertResponseJson : "+ ModifyAlertResponseJson);

	} catch (Exception e) {
		logger.error("Unexpected ValidAns error", e.getMessage());
		e.printStackTrace();
	}

	  return ResponseEntity.ok().body(ModifyAlertOutput.getBody());

}
	
	
	@RequestMapping(value="/GetPendingAlertKambala", method = RequestMethod.POST, produces="application/json")
	public ResponseEntity<String> GetPendingAlertKambala(HttpServletRequest request, HttpServletResponse response) { 
		
	

	JSONObject GetPendingAlertkambalaInputJson = new JSONObject();
	
	JSONObject GetPendingAlertResponseJson = new JSONObject();
	
	String actid="",susertoken="",jKey="";
	
	for (Map.Entry<String, UserInfo> entry : logincontrollerKambala.kambalaLoginmap.entrySet()) {	
		//String key = entry.getKey();
		UserInfo tab = entry.getValue();
	    
	    actid=tab.getActid();
	    susertoken=tab.getSusertoken(); 		
	}

    
	GetPendingAlertkambalaInputJson.put("uid", actid);

	jKey =susertoken;
	 //System.out.println("GetPendingAlertKambala actid : " +actid+"  susertoken : "+susertoken+" jKey : "+jKey); 
	
	
	
	 ResponseEntity<String> GetPendingAlertOutput=null;
	 
	
	try {		
		//String jKey ="f20048c7e8ae72e7ff8b5491dc90b707d54b68edbf8faa2ca27e588b26703e6a";
		
		StringBuffer GetPendingAlertkambalaBuff = new StringBuffer(marketwatchProvider.getKambalaGetPendingAlertUrl());
		
		URL GetPendingAlertkambalaUrl = new URL(GetPendingAlertkambalaBuff.toString());
		
		RestTemplate restTemplate = new RestTemplate();			
		HttpHeaders headers = new HttpHeaders();
      //  headers.setContentType(MediaType.APPLICATION_JSON);
     
      
      Map<String,Object> map = new HashMap<String,Object>();
      map.put("jData",GetPendingAlertkambalaInputJson.toJSONString());      
      map.put("jKey",jKey);
      
     String bodyproperties= CommonFunction.urlEncodeUTF8(map);
      
     //System.out.println("bodyproperties : "+bodyproperties.toString());  
          
       HttpEntity<String> requestparam = new HttpEntity<>(bodyproperties.toString(), headers);
       
       /*System.out.println("URL : "+GetPendingAlertkambalaUrl.toString());       
       System.out.println("requestparam : "+requestparam.toString()); */
       
     // build the request
       GetPendingAlertOutput = restTemplate.postForEntity(GetPendingAlertkambalaUrl.toString(), requestparam, String.class);
        
         
        /*System.out.println("status code : "+ GetPendingAlertOutput.getStatusCode());
        System.out.println("headers : "+ GetPendingAlertOutput.getHeaders());
        System.out.println("body : "+ GetPendingAlertOutput.getBody());

        System.out.println("restTemplate : "+restTemplate.toString()); */
        
        String Responsebody=GetPendingAlertOutput.getBody();
	       
	       
	   	Object obj = JSONValue.parse(Responsebody);
	   	GetPendingAlertResponseJson = (JSONObject) obj;
	   	//System.out.println("GetPendingAlertResponseJson : "+ GetPendingAlertResponseJson);

	} catch (Exception e) {
		logger.error("Unexpected ValidAns error", e.getMessage());
		e.printStackTrace();
	}

	  return ResponseEntity.ok().body(GetPendingAlertOutput.getBody());

}	
	
	
}
