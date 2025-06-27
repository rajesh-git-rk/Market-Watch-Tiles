package com.topaz.trading.controller.kambala;

import java.net.URL;
import java.util.HashMap;
import java.util.Map;
import java.util.Map.Entry;

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
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.servlet.ModelAndView;

import com.topaz.trading.Util.RestUtil;
import com.topaz.trading.controller.CommonFunction;
import com.topaz.trading.controller.Constants;
import com.topaz.trading.controller.MarketwatchProvider;

import com.topaz.trading.pojo.UserInfo;

@RestController
public class OptionChainKambala {

	
	@Autowired
	MarketwatchProvider marketwatchProvider;
	
	@Autowired
	Logincontroller logincontrollerKambala;
	
	@Autowired
	RestUtil restUtil;
	
	
	private static Logger logger = LoggerFactory.getLogger(OptionChainKambala.class);
	
	
	@RequestMapping(value = "/OptionChain", method = RequestMethod.POST)
	public ResponseEntity<JSONObject> OptionChainWebPage(HttpServletRequest request, HttpServletResponse response,
			@RequestParam String nfoSymbol,@RequestParam String exchange,  @RequestParam String price, @RequestParam String nfoinstrument_name) {
	
		
		HttpSession session = request.getSession();
		ModelAndView mv = new ModelAndView("");	
		
		
		
		
		//System.out.println(" tsym : "+nfoSymbol+" exchange : "+exchange+" strprc : "+price+" nfoinstrument_name : "+nfoinstrument_name); 
		
		JSONObject OptionChainResponseJson=new JSONObject();
		String userId = (String) session.getAttribute("userId");
		String susertoken=(String) session.getAttribute("susertoken");
		
		//System.out.println("susertoken : "+susertoken); 
		//tsym:nfoSymbol,exchange:exchange,strprc:price,cnt:nfoinstrument_name
		try {
			Object OptionChainResponsePage =restUtil.OptionChainPage(userId,nfoSymbol,exchange,price,nfoinstrument_name,susertoken);
			
			OptionChainResponseJson = (JSONObject) OptionChainResponsePage;
			
			 Constants.STAT=OptionChainResponseJson.get("stat").toString();
	  	    	
	  	    	/*System.out.println("stat : "+ Constants.STAT);
	  	    	
	  	    	System.out.println("LoginkambalaPageResponse : "+ OptionChainResponseJson);*/
				
	  	    	if(Constants.STAT.equals(Constants.OK)) {
	  	    		
	  	    		//System.out.println("values : "+OptionChainResponseJson.get("values").toString()); 
	  	    		/*mv.addObject("stat",OptionChainResponseJson.get("stat").toString());
	  	    		mv.addObject("values",OptionChainResponseJson.get("values").toString());*/
	  	    		return ResponseEntity.ok().body(OptionChainResponseJson);
	  	    		
	  	  		}
	  	    	else if(Constants.STAT.equals(Constants.NOT_OK)) {
	  	    		mv.addObject("message",OptionChainResponseJson.get("emsg").toString());	
	  	    		return ResponseEntity.ok().body(OptionChainResponseJson);
	  	    		}
   	
			
		}catch (Exception e) {
			
			mv.addObject("message", "System Error Occurred");
			mv.setViewName("login");  
		}
		
		return ResponseEntity.ok().body(OptionChainResponseJson);
		//return mv;
		
	}
	
	
	
	@RequestMapping(value="/GetOptionChainKambala", method = RequestMethod.POST, produces="application/json")
	public ResponseEntity<String> OptionChainPageKambala(HttpServletRequest request, HttpServletResponse response) { 
		
	HttpSession session = null;	

	JSONObject  OptionChainkambalaInputJson = new JSONObject();
	JSONObject   OptionChainkambalaResponseJson = new JSONObject();
	
	
	
	String actid="",susertoken="",jKey="";
	
	for (Entry<String, UserInfo> entry : logincontrollerKambala.kambalaLoginmap.entrySet()) {
		
		//System.out.println("fund map entry.......");  
		String key = entry.getKey();
		UserInfo tab = entry.getValue();
	    
	    actid=tab.getActid();
	    susertoken=tab.getSusertoken();
		
	}
	
	
	OptionChainkambalaInputJson.put("uid", actid);
	OptionChainkambalaInputJson.put("exch","NFO");
	OptionChainkambalaInputJson.put("tsym","ACC28OCT21F");
	OptionChainkambalaInputJson.put("strprc","2500");
	OptionChainkambalaInputJson.put("cnt","10");
	
	jKey =susertoken;
	
	 //System.out.println("OptionChainkambala actid : " +actid+"  susertoken : "+susertoken+" jKey : "+jKey); 
	
	
	
	 ResponseEntity<String>OptionChainkambalaOutput=null;
	 
	
	try {		
		//String jKey ="f20048c7e8ae72e7ff8b5491dc90b707d54b68edbf8faa2ca27e588b26703e6a";
		
		StringBuffer OptionChainkambalaBuff = new StringBuffer(marketwatchProvider.getOptionChainkambalaUrl());
		
		URL OptionChainkambalaUrl = new URL(OptionChainkambalaBuff.toString());
		
		RestTemplate restTemplate = new RestTemplate();			
		HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
     
      
      Map<String,Object> map = new HashMap<String,Object>();
      map.put("jData",OptionChainkambalaInputJson.toJSONString());      
      map.put("jKey",jKey);
      
     String bodyproperties= CommonFunction.urlEncodeUTF8(map);
      
     //System.out.println("bodyproperties : "+bodyproperties.toString());  
          
       HttpEntity<String> requestparam = new HttpEntity<>(bodyproperties.toString(), headers);
       
       /*System.out.println("URL : "+OptionChainkambalaUrl.toString());       
       System.out.println("requestparam : "+requestparam.toString());*/ 
       
     // build the request
       OptionChainkambalaOutput = restTemplate.postForEntity(OptionChainkambalaUrl.toString(), requestparam, String.class);
        
       String Responsebody=OptionChainkambalaOutput.getBody();
       
       
		   	Object obj = JSONValue.parse(Responsebody);
		   	OptionChainkambalaResponseJson = (JSONObject) obj;
		   	/*System.out.println("OptionChainResponseJson : "+ OptionChainkambalaResponseJson);
		   	
        System.out.println("status code : "+ OptionChainkambalaOutput.getStatusCode());
        System.out.println("headers : "+ OptionChainkambalaOutput.getHeaders());
        System.out.println("body : "+ OptionChainkambalaOutput.getBody());*/

        //System.out.println("restTemplate : "+restTemplate.toString()); 

	} catch (Exception e) {
		logger.error("Unexpected OptionChainkambala error", e.getMessage());
		e.printStackTrace();
	}

	  return ResponseEntity.ok().body(OptionChainkambalaOutput.getBody());

}
}
