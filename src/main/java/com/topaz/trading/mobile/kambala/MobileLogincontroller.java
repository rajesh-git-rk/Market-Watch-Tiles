package com.topaz.trading.mobile.kambala;

import java.io.UnsupportedEncodingException;
import java.net.URL;
import java.security.NoSuchAlgorithmException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.json.simple.JSONObject;
import org.json.simple.JSONValue;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.servlet.ModelAndView;

import com.topaz.trading.Util.OTPUtil;
import com.topaz.trading.Util.Publickey3Util;
import com.topaz.trading.Util.RestUtil;
import com.topaz.trading.controller.CommonFunction;
import com.topaz.trading.controller.Constants;
import com.topaz.trading.controller.LogincontrollerOmensys;
import com.topaz.trading.controller.MarketwatchProvider;
import com.topaz.trading.model.ChangePassword;
import com.topaz.trading.model.Client;
import com.topaz.trading.pojo.UserInfo;
import com.topaz.trading.repository.ClientImpl;
import com.topaz.trading.repository.OtpImpl;
import com.topaz.trading.repository.SaveAnswerImpl;
import com.topaz.trading.repository.ScriptImp2;

@RestController
@RequestMapping("/mobile")
public class MobileLogincontroller {
	
	
	@Autowired
	RestUtil restUtil;
	
	
	@Autowired
	MarketwatchProvider marketwatchProvider;

	@Autowired
	ScriptImp2 scriptImp;

	@Autowired
	OtpImpl otpImpl;

	@Autowired
	OTPUtil oTPUtil;

	@Autowired
	ClientImpl clientImpl;

	@Autowired
	LogincontrollerOmensys logincontroller;

	@Autowired
	Publickey3Util publickey3Util;

	@Autowired
	SaveAnswerImpl saveAnswerImpl;
	
	

	
		
	HashMap<String,UserInfo> Loginmap=new HashMap<String,UserInfo>();//Creating HashMap	
	
	String loginMode = null;

	// Save2FA-Answers
	
	String Delete2FAQuestionAnwers = null;
	List<Object> Save2FAQuestionAnswers = null;
	
	List<Object> authenticatePassword =null;
	
	
	
	@RequestMapping(value = "/authenticate", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
	public ResponseEntity<JSONObject> getLogin(HttpServletRequest request, HttpServletResponse response,
			@RequestBody Client client) throws UnsupportedEncodingException, NoSuchAlgorithmException {
		
		JSONObject loginauthenticateResponse = new JSONObject();
		
			UserInfo userinfo=new UserInfo();		
		
		
		JSONObject LoginkambalaPageResponse = new JSONObject();
		try {	
					
				Object LoginkambalaPage =restUtil.loginverify(client.getClientid(),client.getPassword());
				
				LoginkambalaPageResponse=(JSONObject) LoginkambalaPage;
				
		  	    Constants.STAT=LoginkambalaPageResponse.get("stat").toString();
		  	    	
		  	    	System.out.println("stat : "+ Constants.STAT);
		  	    	
		  	    	System.out.println("LoginkambalaPageResponse : "+ LoginkambalaPageResponse);
					
		  	    	if(Constants.STAT.equals(Constants.OK)) {  	  		
		  	  		
		  	  		Integer saveFirstTimeLoginbyUser=restUtil.saveFirstTimeLogin(client.getClientid().toUpperCase());
		  	  		
			  	  	userinfo.setClientid(client.getClientid().toUpperCase());
					
					userinfo.setSusertoken(LoginkambalaPageResponse.get("susertoken").toString());
		  	  		
					
					userinfo.setClientid(client.getClientid().toUpperCase());
		  	  		userinfo.setPassword(client.getPassword());
		  	  		
		  	  		if(saveFirstTimeLoginbyUser==0) { 	  	  			
		  	  		loginauthenticateResponse.put("message","Please Reset your password");
		  	  		}
		  	  		else if(saveFirstTimeLoginbyUser==1) { 	  			
		  	  		loginauthenticateResponse.put("message", "Successfully login");
		  	  		loginauthenticateResponse.put("stat",Constants.STAT);
		  	  		}
		  	  		else if(saveFirstTimeLoginbyUser==3) { 
		  	  		loginauthenticateResponse.put("message", "System Error Occurred");
		  	  		loginauthenticateResponse.put("stat",Constants.STAT);	
	  	  		}
		  	    }
		  	    	else if(Constants.STAT.equals(Constants.NOT_OK)) {
		  	    		loginauthenticateResponse.put("stat",Constants.NOT_OK);
		  	    		loginauthenticateResponse.put("message",LoginkambalaPageResponse.get("emsg").toString());
		  	    	
		  	    	}
		  	    	
		  	    	Loginmap.put(client.getClientid().toUpperCase(),userinfo);
		  	    	
			} catch (Exception e) {
				loginauthenticateResponse.put("message", "System Error Occurred");
			}
		
		return ResponseEntity.ok().body(loginauthenticateResponse);
	
	}
	
	
	
	
	@RequestMapping(value = "/passwordTpin", method = RequestMethod.POST)
	public ResponseEntity<JSONObject> NewPaawordLogin(HttpServletRequest request, HttpServletResponse response,
			@RequestBody Client client) {

		JSONObject passwordResetMessage = new JSONObject();	
		
		JSONObject ChangePasswordPageResponse=new JSONObject();
		
		String userId = null,oldpassword=null;
		try {
			
			for ( Map.Entry<String, UserInfo> entry : Loginmap.entrySet()) {				
			    UserInfo tab = entry.getValue();			    
			    userId=tab.getClientid();
			    oldpassword=tab.getPassword();			    
			}
			
			System.out.println("from login sessiion userId: "+userId+" oldpassword : "+oldpassword); 
			
			String OldPassword=CommonFunction.KambalaUserPasswordData(oldpassword);
			
			Object changepassword=restUtil.ChangePasswordbyUserId(userId.toUpperCase(),OldPassword,client.getPassword());
			
			
			ChangePasswordPageResponse=(JSONObject) changepassword;			

			
			/*Constants.STAT=ChangePasswordPageResponse.get("stat").toString();
	    
	    	if(Constants.STAT.equals(Constants.OK)) {   		
	    		
	    		mv.addObject("message", ChangePasswordPageResponse.get("stat").toString());    		
				mv.setViewName("login");  	  		
	    	}
	    	else if(Constants.STAT.equals(Constants.NOT_OK)) {  
	    		mv.addObject("message", ChangePasswordPageResponse.get("emsg").toString());
				mv.setViewName("ResetPassword");
	    	} */
	    	
			
			Boolean isTpinVerify =restUtil.VerifyTpinListByclientId(client.getClientid().toUpperCase(),client.getTpin());			
		
		if (isTpinVerify==true) {
			passwordResetMessage.put("message", " Saved Successfully");
			passwordResetMessage.put("stat", "Ok");
		} else if (isTpinVerify==false) {
			
			
			passwordResetMessage.put("message", "Not Saved");
			passwordResetMessage.put("stat", "Not_Ok");
		}		 
		}
		catch (Exception e){	
			 System.out.println("Error from SetNewPassword and Tpin : "+e.getStackTrace()); 
			passwordResetMessage.put("message", "System Error Occurred");
		}
		
		return ResponseEntity.ok().body(passwordResetMessage);			
	}
	
	
	@RequestMapping(value = "/tpinValidation", method = RequestMethod.POST)
	public ResponseEntity<JSONObject> getSecondTimeLogin(HttpServletRequest request, HttpServletResponse response,
			@RequestBody Client client) throws UnsupportedEncodingException, NoSuchAlgorithmException {
		
		JSONObject tpinverifyMessage = new JSONObject();
		
		UserInfo userinfo=new UserInfo();	
		
		String userId = null,password=null,susertoken=null;
			try {
				UserInfo userInfo = Loginmap.get(client.getClientid());
				
				
				for ( Map.Entry<String, UserInfo> entry : Loginmap.entrySet()) {				
				    UserInfo tab = entry.getValue();			    
				    userId=tab.getClientid();
				    password=tab.getPassword();
				    susertoken=tab.getSusertoken();
				}
		
		
		// Secondtime Login checking
		Boolean isVerifyTpin = clientImpl.verifyTpinByUserId(client.getClientid().toUpperCase(),client.getTpin().toString()); 
		
		System.out.println("TpinList  is true or false : "+isVerifyTpin);

		if (isVerifyTpin==Constants.FALSE) {		
			tpinverifyMessage.put("message", "Enter Valid Tpin");
			tpinverifyMessage.put("stat", "Not_Ok");
			// mv.setViewName("tpin");				
			} 
		else {
			userInfo.setSusertoken(susertoken);		
			Loginmap.put(userId.toUpperCase(),userInfo);	
			
			Object LoginkambalaPage =restUtil.loginverify(client.getClientid(),password);
			
			tpinverifyMessage=(JSONObject) LoginkambalaPage;
			
	  	    Constants.STAT=tpinverifyMessage.get("stat").toString();
	  	    
	  	    	
	  	    	System.out.println("FingerPrintloginMessage : "+ tpinverifyMessage);
				
	  	    	if(Constants.STAT.equals(Constants.OK)) {  	 	  	  		 		
	  	  		
				//Loginmap.put(client.getClientid().toUpperCase(),userinfo);						
				userinfo.setClientid(client.getClientid().toUpperCase());
	  	  		userinfo.setPassword(client.getPassword());
	  	  		userinfo.setSusertoken(tpinverifyMessage.get("susertoken").toString()); 
	  	    	Loginmap.put(client.getClientid().toUpperCase(),userinfo);
	  	    	/*tpinverifyMessage.put("message", "Secondtime login Successfully");
	  	    	tpinverifyMessage.put("stat",Constants.OK);*/
	  	  		
	  	    }
	  	    	else if(Constants.STAT.equals(Constants.NOT_OK)) {
	  	    		tpinverifyMessage.put("stat",Constants.NOT_OK);
	  	    		tpinverifyMessage.put("message",tpinverifyMessage.get("emsg").toString());
	  	    	
	  	    	}
			
			tpinverifyMessage.put("message", "Tpin validated Successfully");
			tpinverifyMessage.put("stat", "Ok");
			
		} 
			}
			
			catch (Exception e){	
				 System.out.println("Error from tpinverifyMessage : "+e.getStackTrace()); 
				 tpinverifyMessage.put("message", "System Error Occurred");
			}
	
		return ResponseEntity.ok().body(tpinverifyMessage);
		}
	
	
	@RequestMapping(value = "/changepassword", method = RequestMethod.POST)
	public ResponseEntity<JSONObject> getChangePasswordByUserId(HttpServletRequest request,
				HttpServletResponse response, @RequestBody ChangePassword changePassword) {
		
		JSONObject ChangePasswordPageResponse = new JSONObject();	
		JSONObject ChangePasswordJSONResponse = new JSONObject();
		try {			
			
			String OldPassword=CommonFunction.KambalaUserPasswordData(changePassword.getOldPassword());
			
			System.out.println("OldPassword Encrypted256 : "+OldPassword);	        
			
			Object changepassword=restUtil.ChangePasswordbyUserId(changePassword.getClientid().toUpperCase(),OldPassword,changePassword.getNewPassword());

			ChangePasswordJSONResponse=(JSONObject) changepassword;			
			
			Constants.STAT=ChangePasswordPageResponse.get("stat").toString();
        
	    	if(Constants.STAT.equals(Constants.OK)) {   		
	    		
	    		ChangePasswordJSONResponse.put("message", ChangePasswordPageResponse.get("stat").toString());    		
				//mv.setViewName("login");  	  		
	    	}
	    	else if(Constants.STAT.equals(Constants.NOT_OK)) {  
	    		ChangePasswordJSONResponse.put("message", ChangePasswordPageResponse.get("emsg").toString());
				//mv.setViewName("ResetPassword");
	    	} 
	
			
			
		}
		catch (Exception e){	
			 System.out.println("Error from SetNewPassword and Tpin : "+e.getStackTrace()); 
			 ChangePasswordPageResponse.put("message", "System Error Occurred");
		}
		
		return ResponseEntity.ok().body(ChangePasswordPageResponse);	
		

		
	}
	@RequestMapping(value = "/fingerprintlogin", method = RequestMethod.POST)
	public ResponseEntity<JSONObject> getFingerPrintlogin(HttpServletRequest request, HttpServletResponse response,
			@RequestBody Client client) throws UnsupportedEncodingException, NoSuchAlgorithmException {
		
		JSONObject FingerPrintloginMessage = new JSONObject();
		
		//UserInfo userInfo = Loginmap.get(client.getClientid());
		UserInfo userinfo=new UserInfo();	
		
		try {		
			
			List<Client> SecondList = clientImpl.FingerPrintloginverify(client.getClientid().toString(), client.getFingerprintid());
			 		
			if (SecondList.size() > 0) {

				if (SecondList.get(0).getFingerprintid().equals(client.getFingerprintid())) {	
					
					String userId=null,password=null;
					
					for ( Map.Entry<String, UserInfo> entry : Loginmap.entrySet()) {						
						
					    UserInfo tab = entry.getValue();	
					    userId=tab.getClientid();
					    password=tab.getPassword();
					}	
					System.out.println("userId : "+userId+" password : "+password); 

					
					
					
					Object LoginkambalaPage =restUtil.loginverify(client.getClientid(),password);
					
					FingerPrintloginMessage=(JSONObject) LoginkambalaPage;
					
			  	    Constants.STAT=FingerPrintloginMessage.get("stat").toString();
			  	    	System.out.println("stat : "+ Constants.STAT);
			  	    	
			  	    	System.out.println("FingerPrintloginMessage : "+ FingerPrintloginMessage);
						
			  	    	if(Constants.STAT.equals(Constants.OK)) {  	 	  	  		 		
			  	  		
						//Loginmap.put(client.getClientid().toUpperCase(),userinfo);						
						userinfo.setClientid(client.getClientid().toUpperCase());
			  	  		userinfo.setPassword(client.getPassword());
			  	  		userinfo.setSusertoken(FingerPrintloginMessage.get("susertoken").toString()); 
			  	    	Loginmap.put(client.getClientid().toUpperCase(),userinfo);
						FingerPrintloginMessage.put("message", "fingerprint validated Successfully");
			  	  		FingerPrintloginMessage.put("stat",Constants.OK);
			  	  		
			  	    }
			  	    	else if(Constants.STAT.equals(Constants.NOT_OK)) {
			  	    		FingerPrintloginMessage.put("stat",Constants.NOT_OK);
			  	    		FingerPrintloginMessage.put("message",FingerPrintloginMessage.get("emsg").toString());
			  	    	
			  	    	}
				
					
				}

			} else if (SecondList.size() == 0) {
				FingerPrintloginMessage.put("message","your fingerprint is not updated");
				FingerPrintloginMessage.put("stat",  Constants.NOT_OK);
			}
			
			
			
		}
		catch (Exception e) {		
				
			FingerPrintloginMessage.put("message", "System Error Occurred");		
			FingerPrintloginMessage.put("stat", "Not_Ok");
				return new ResponseEntity<>(FingerPrintloginMessage, HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return ResponseEntity.ok().body(FingerPrintloginMessage);

	}
	@RequestMapping(value = "/forgotpassword", method = RequestMethod.POST)
	public ResponseEntity<JSONObject> setPasswordforUser(@RequestBody Client client, HttpServletRequest request,
			HttpServletResponse response) {

		String mobileSetPasswordSendData = "";
		String stat, message, output = "";
		
		JSONObject forgotpasswordInputJson = new JSONObject();
		JSONObject forgotpasswordResponseJson = new JSONObject();

		RestTemplate restTemplate = new RestTemplate();	
		
		
		String bodyproperties=null;
		JSONObject ForgotPasswordInputJson = new JSONObject();
		JSONObject ForgotPasswordPageResponse= new JSONObject();
		ResponseEntity<String> ForgotPasswordOutput=null;

		return ResponseEntity.ok().body(ForgotPasswordPageResponse);
	}
	
	
	@RequestMapping(value = "/logout", method = RequestMethod.POST)
	public ResponseEntity<JSONObject> Mobilelogoutpage(HttpServletRequest request, HttpServletResponse response,
			@RequestBody Client client) throws UnsupportedEncodingException, NoSuchAlgorithmException {
				
		JSONObject logoutMessage = new JSONObject();
		
		
		
		JSONObject LogoutPageResponse= new JSONObject();
		
		ResponseEntity<String> LogoutOutput=null;	 
		
		String jKey = null,userId = null,oldpassword=null,susertoken=null;;
	
		
		 
		 UserInfo userinfo=new UserInfo();
		 
		 try {
			 
			 UserInfo userInfo = Loginmap.get(client.getClientid());
			
				
				for ( Map.Entry<String, UserInfo> entry : Loginmap.entrySet()) {				
				    UserInfo tab = entry.getValue();			    
				    userId=tab.getClientid();
				    oldpassword=tab.getPassword();
				    susertoken=tab.getSusertoken();
				}
		 
				 System.out.println("jKey:::"+susertoken);
				
				Object LogoutResponseeObject=restUtil.Logoutpage(userId,susertoken);
			 
	
	    	
		 	LogoutPageResponse =  (JSONObject) LogoutResponseeObject;
	    	
	    	System.out.println("LogoutkambalaPageResponse : "+ LogoutPageResponse);
	    	
	    	 Constants.STAT=LogoutPageResponse.get("stat").toString();
	         
	     	if(Constants.STAT.equals(Constants.OK)) { 
	     		
	     		return ResponseEntity.ok().body(LogoutPageResponse);
	     	}
	     	else if(Constants.STAT.equals(Constants.NOT_OK)) {  
	     		logoutMessage.put("message", LogoutPageResponse.get("emsg").toString());
	 		
	 		
	     	}
 	
    

			} catch (Exception e) {
				
					e.printStackTrace();
					logoutMessage.put("message", "System Error Occurred");
			}
	
		
		return ResponseEntity.ok().body(logoutMessage);
		
	}
	
	
	@RequestMapping(value="/UserdetailsKambala", method = RequestMethod.POST, produces="application/json")
	public ResponseEntity<String> UserdetailsPageKambala(HttpServletRequest request, HttpServletResponse response) {
		
		HttpSession session = null;	
	
		JSONObject UserdetailsInputJson = new JSONObject();
		JSONObject UserdetailsResponseJson = new JSONObject();
		
			String userId="",susertoken="",jKey="";
			ResponseEntity<String> UserdetailsOutput=null;
		
			
			
			for (Map.Entry<String, UserInfo> entry : Loginmap.entrySet()) {
				String key = entry.getKey();
				UserInfo tab = entry.getValue();	    
				userId=tab.getClientid();
			    susertoken=tab.getSusertoken(); 	
			}
		
			jKey =susertoken;
			UserdetailsInputJson.put("uid", userId);	



		try {		
			//String jKey ="f20048c7e8ae72e7ff8b5491dc90b707d54b68edbf8faa2ca27e588b26703e6a";
			StringBuffer UserdetailskambalaBuff = new StringBuffer(marketwatchProvider.getUserdetailskambalaUrl());
			
			URL UserdetailskambalaUrl = new URL(UserdetailskambalaBuff.toString());
			
			RestTemplate restTemplate = new RestTemplate();			
		HttpHeaders headers = new HttpHeaders();
        //headers.setContentType(MediaType.APPLICATION_JSON);
     
		Map<String,Object> map = new HashMap<String,Object>();
        map.put("jData",UserdetailsInputJson.toJSONString());
        map.put("jKey",jKey);
  	    String bodyproperties= CommonFunction.urlEncodeUTF8(map);
   
      
       HttpEntity<String> requestparam = new HttpEntity<>(bodyproperties, headers);
       
       System.out.println("URL : "+UserdetailskambalaUrl.toString());       
       System.out.println("requestparam : "+requestparam.toString()); 
       
     // build the request
       UserdetailsOutput = restTemplate.postForEntity(UserdetailskambalaUrl.toString(), requestparam, String.class);
        
       
       String Responsebody=UserdetailsOutput.getBody();
       
   
	   	Object obj = JSONValue.parse(Responsebody);
	   	UserdetailsResponseJson = (JSONObject) obj;
	   	System.out.println("UserdetailsResponseJson : "+ UserdetailsResponseJson);
	   	
         
        System.out.println("status code : "+ UserdetailsOutput.getStatusCode());
        System.out.println("headers : "+ UserdetailsOutput.getHeaders());
        System.out.println("body : "+ UserdetailsOutput.getBody());

        System.out.println("restTemplate : "+restTemplate.toString()); 

	} catch (Exception e) {
		
		e.printStackTrace();
	}

	  return ResponseEntity.ok().body(UserdetailsOutput.getBody());

}
	
	@RequestMapping(value="/ClientDetailsKambala", method = RequestMethod.POST, produces="application/json")
	public ResponseEntity<String> ClientDetailsPageKambala(HttpServletRequest request, HttpServletResponse response) {
		
		HttpSession session = null;	
	
		JSONObject ClientdetailsInputJson = new JSONObject();
		JSONObject ClientdetailsResponseJson = new JSONObject();
		
			String  userId="", actid="",susertoken="",brkname="",jKey="";
			ResponseEntity<String> ClientdetailsOutput=null;
		
			for (Map.Entry<String, UserInfo> entry : Loginmap.entrySet()) {
				String key = entry.getKey();
				UserInfo tab = entry.getValue();
				//actid=tab.getActid();
				userId=tab.getClientid();
			    susertoken=tab.getSusertoken(); 	
			}
		
			jKey =susertoken;
			ClientdetailsInputJson.put("uid", userId);	
			ClientdetailsInputJson.put("actid", userId);
			ClientdetailsInputJson.put("brkname", "ENRICH");



		try {		
			//String jKey ="f20048c7e8ae72e7ff8b5491dc90b707d54b68edbf8faa2ca27e588b26703e6a";
			StringBuffer UserdetailskambalaBuff = new StringBuffer(marketwatchProvider.getUserdetailskambalaUrl());
			
			URL UserdetailskambalaUrl = new URL(UserdetailskambalaBuff.toString());
			
			RestTemplate restTemplate = new RestTemplate();			
		HttpHeaders headers = new HttpHeaders();
        //headers.setContentType(MediaType.APPLICATION_JSON);
     
		Map<String,Object> map = new HashMap<String,Object>();
        map.put("jData",ClientdetailsInputJson.toJSONString());
        map.put("jKey",jKey);
  	    String bodyproperties= CommonFunction.urlEncodeUTF8(map);
   
      
       HttpEntity<String> requestparam = new HttpEntity<>(bodyproperties, headers);
       
       System.out.println("URL : "+UserdetailskambalaUrl.toString());       
       System.out.println("requestparam : "+requestparam.toString()); 
       
     // build the request
       ClientdetailsOutput = restTemplate.postForEntity(UserdetailskambalaUrl.toString(), requestparam, String.class);
        
       
       String Responsebody=ClientdetailsOutput.getBody();
       
   
	   	Object obj = JSONValue.parse(Responsebody);
	   	ClientdetailsResponseJson = (JSONObject) obj;
	   	System.out.println("UserdetailsResponseJson : "+ ClientdetailsResponseJson);
	   	
         
        System.out.println("status code : "+ ClientdetailsOutput.getStatusCode());
        System.out.println("headers : "+ ClientdetailsOutput.getHeaders());
        System.out.println("body : "+ ClientdetailsOutput.getBody());

        System.out.println("restTemplate : "+restTemplate.toString()); 

	} catch (Exception e) {
		
		e.printStackTrace();
	}

	  return ResponseEntity.ok().body(ClientdetailsOutput.getBody());

}

}
