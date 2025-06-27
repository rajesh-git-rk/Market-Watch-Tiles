package com.topaz.trading.Util;

import java.io.UnsupportedEncodingException;
import java.net.MalformedURLException;
import java.net.URL;
import java.security.NoSuchAlgorithmException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.json.simple.JSONObject;
import org.json.simple.JSONValue;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.RedirectView;

import com.topaz.trading.controller.CommonFunction;
import com.topaz.trading.controller.Constants;
import com.topaz.trading.controller.MarketwatchProvider;
import com.topaz.trading.model.Client;
import com.topaz.trading.model.FirstTimeLogin;
import com.topaz.trading.repository.ClientImpl;
import com.topaz.trading.repository.LoginImpl;


@Component
@Controller
public  class RestUtil {
	
	@Autowired
	MarketwatchProvider marketwatchProvider;
	
	@Autowired
	LoginImpl loginImpl;
	
	@Autowired
	ClientImpl clientImpl;

	public Object loginverify(String userId, String password) throws MalformedURLException, UnsupportedEncodingException, NoSuchAlgorithmException {
		
		  
		RestTemplate restTemplate = new RestTemplate();	
		String bodyproperties="";
		

		ResponseEntity<String> LoginOutput=null;
		JSONObject LoginkambalaInputJson = new JSONObject();
		
		
		//System.out.println("Authenticate userId : "+userId+" password : "+password);
		
		String pswd=CommonFunction.KambalaUserPasswordData(password);
		String VendorCode=marketwatchProvider.getKambalaVendorCode();
		
		String appkey=CommonFunction.KambalaUserPasswordData(userId.toUpperCase()+"|"+VendorCode);
	
		//System.out.println("pswd : "+pswd+" appkey : "+appkey);	
		
		LoginkambalaInputJson.put("uid",userId.toUpperCase());	
		LoginkambalaInputJson.put("pwd",pswd);
		LoginkambalaInputJson.put("factor2",marketwatchProvider.getKambalafactor2());	
		LoginkambalaInputJson.put("apkversion",marketwatchProvider.getKambalaApkversion());
		LoginkambalaInputJson.put("imei",marketwatchProvider.getImei());
		LoginkambalaInputJson.put("source",marketwatchProvider.getKambalaSource());
		LoginkambalaInputJson.put("vc",marketwatchProvider.getKambalaApiuser());
		LoginkambalaInputJson.put("appkey",appkey);	
		 
				
				
				 
				StringBuffer LoginkambalaBuff = new StringBuffer(marketwatchProvider.getLoginkambalaUrl());
				
				URL LoginkambalaUrl = new URL(LoginkambalaBuff.toString());
							    
		      
		        Map<String,Object> map = new HashMap<String,Object>();
		        map.put("jData",LoginkambalaInputJson.toJSONString());
		        
		  	    bodyproperties= CommonFunction.urlEncodeUTF8(map);
		        
		  	    HttpEntity<String> requestparam = new HttpEntity<>(bodyproperties);
		       
		  	   
		  	    // build the request
		  	    	LoginOutput = restTemplate.postForEntity(LoginkambalaUrl.toString(), requestparam, String.class);
		        
		  	    	//LoginkambalaPageResponse= (JSONObject) JSONValue.parse(LoginOutput.getBody());
		  	    	
		  	    	Object LoginResponseObject = JSONValue.parse(LoginOutput.getBody());
		  	    	
		  	    	
					return LoginResponseObject;
	}

	
	
	
	
	
	
	
	
	
	public Integer saveFirstTimeLogin(String userId) {
		
		List<FirstTimeLogin> LoginTable=loginImpl.getLoginDetailbyUserId(userId.toUpperCase());
		
		if(LoginTable.size()==0) {			
			String currentTime=CommonFunction.SystemCurrentDate();
			FirstTimeLogin saveLogin=new FirstTimeLogin();
			saveLogin.setClientid(userId.toUpperCase());
			saveLogin.setCreationtime(currentTime);
			loginImpl.saveLoginTableDetails(saveLogin);				
			return 0;
		}	
		else if(LoginTable.contains(Constants.NULL)) {
			return 3;
		}
			return 1;		
	}










	public Boolean VerifyTpinListByclientId(String clientId,String confirmtpin) {
		
		List<Client> clientidlist = clientImpl.verifyClientId(clientId.toUpperCase());
		
		List<Client> list =null;
		System.out.println("clientidlist size : "+clientidlist.size()); 
		if (clientidlist.size() > 0) {				
			list =	clientImpl.UpdateTpinByClientId(clientId.toUpperCase(),confirmtpin);
			return true;
		}
		 else if (clientidlist.size() == 0) {
			list = clientImpl.SaveTpinByClientId(clientId.toUpperCase(),confirmtpin);
			return false;
		}
		return true;
		 
		 
	}










	public Object ChangePasswordbyUserId(String uid, String OldPassword, String confirmpassword) {
		
		RestTemplate restTemplate = new RestTemplate();
		
		Object ChangePasswordResponseObject=null;
		ResponseEntity<String> ChangePasswordOutput=null;
		String bodyproperties=null;
		ModelAndView mv = new ModelAndView("");
	
		JSONObject ChangePasswordInputJson = new JSONObject();
		JSONObject ChangePasswordPageResponse  = new JSONObject();
		
		ChangePasswordInputJson.put("uid", uid);	
		ChangePasswordInputJson.put("oldpwd",OldPassword);
		ChangePasswordInputJson.put("pwd",confirmpassword);
		
		try {	
	
	//System.out.println("ChangePassword Json  : "+ChangePasswordInputJson.toJSONString());
		
	StringBuffer ChangePasswordkambalaBuff = new StringBuffer(marketwatchProvider.getChangepasswordkambalaUrl());
	
	URL ChangePasswordkambalaUrl = new URL(ChangePasswordkambalaBuff.toString());
	
	
	Map<String,Object> map = new HashMap<String,Object>();
	map.put("jData",ChangePasswordInputJson.toJSONString());		
    bodyproperties= CommonFunction.urlEncodeUTF8(map);      
  
   HttpEntity<String> requestparam = new HttpEntity<>(bodyproperties);
   
   System.out.println("URL : "+ChangePasswordkambalaUrl.toString());       
   System.out.println("requestparam : "+requestparam.toString()); 
   
 // build the request
   ChangePasswordOutput = restTemplate.postForEntity(ChangePasswordkambalaUrl.toString(), requestparam, String.class);
    
   
   System.out.println("status code : "+ ChangePasswordOutput.getStatusCode());
   System.out.println("headers : "+ ChangePasswordOutput.getHeaders());
   System.out.println("body : "+ ChangePasswordOutput.getBody());
   System.out.println("restTemplate : "+restTemplate.toString());
   
   ChangePasswordResponseObject = JSONValue.parse(ChangePasswordOutput.getBody());
  

	} catch (Exception e) {
		
		e.printStackTrace();
	}
		
		return ChangePasswordResponseObject;
	
	}










	public Object Logoutpage(String userId, String jKey) {	
		
		JSONObject LogoutInputJson = new JSONObject();
		
		ResponseEntity<String> LogoutOutput=null;	 
		
		Object LogoutObject=null;	 
		 
		 LogoutInputJson.put("uid", userId);			
			
			try {		

			StringBuffer LogoutkambalaBuff = new StringBuffer(marketwatchProvider.getLogoutkambalaUrl() );
			
			URL LogoutkambalaUrl = new URL(LogoutkambalaBuff.toString());
			
			RestTemplate restTemplate = new RestTemplate();	
			
			Map<String,Object> map = new HashMap<String,Object>();
			map.put("jData",LogoutInputJson.toJSONString());
			map.put("jKey",jKey);
			String bodyproperties= CommonFunction.urlEncodeUTF8(map);
			
			
			HttpEntity<String> requestparam = new HttpEntity<>(bodyproperties);
			
			/*System.out.println("URL : "+LogoutkambalaUrl.toString());       
			System.out.println("requestparam : "+requestparam.toString()); */
			
			// build the request
			 LogoutOutput = restTemplate.postForEntity(LogoutkambalaUrl.toString(), requestparam, String.class);
			 
			 LogoutObject=JSONValue.parse(LogoutOutput.getBody());
			 
			} catch (Exception e) {		
				e.printStackTrace();
			}
			 return LogoutObject;
	}










	public Object OptionChainPage(String userId, String tsym,String exchange,  String price, String nfoinstrument_name,String jKey) {
		
		
		JSONObject  OptionChainkambalaInputJson = new JSONObject();
		JSONObject   OptionChainkambalaResponseJson = new JSONObject();
		
		String cnt="10";
		
		OptionChainkambalaInputJson.put("uid", userId);
		OptionChainkambalaInputJson.put("exch",exchange); //NFO
		OptionChainkambalaInputJson.put("tsym","BANKNIFTY29SEP22C37500"); //"ACC28OCT21F" //"BANKNIFTY18NOV21C32900" //"BANKNIFTY29SEP22C37500"
		OptionChainkambalaInputJson.put("strprc","7500"); //"2500"
		OptionChainkambalaInputJson.put("cnt",cnt); //"10"
		/*cnt-->Number of strike to return on one side of the mid price for
		 * 	PUT and CALL. (example cnt is 4, total 16 contracts will be
		 * 	returned, if cnt is is 5 total 20 contract will be returned)
		 * 
		 */
		Object OptionChainObject=null;	
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
	       
	      /* System.out.println("URL : "+OptionChainkambalaUrl.toString());       
	       System.out.println("requestparam : "+requestparam.toString()); */
	       
	     // build the request
	       OptionChainkambalaOutput = restTemplate.postForEntity(OptionChainkambalaUrl.toString(), requestparam, String.class);
	       
	       OptionChainObject=JSONValue.parse(OptionChainkambalaOutput.getBody());
			   	
	        /*System.out.println("status code : "+ OptionChainkambalaOutput.getStatusCode());
	        System.out.println("headers : "+ OptionChainkambalaOutput.getHeaders());
	        System.out.println("body : "+ OptionChainkambalaOutput.getBody());

	        System.out.println("restTemplate : "+restTemplate.toString()); */

		} catch (Exception e) {
			
			e.printStackTrace();
		}

		
		return OptionChainObject;
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
