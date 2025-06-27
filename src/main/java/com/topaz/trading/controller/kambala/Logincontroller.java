package com.topaz.trading.controller.kambala;


import java.io.UnsupportedEncodingException;
import java.net.URL;
import java.security.NoSuchAlgorithmException;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.HashMap;
import java.util.List;
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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import org.springframework.web.servlet.view.RedirectView;

import com.topaz.trading.Util.RestUtil;
import com.topaz.trading.controller.CommonFunction;
import com.topaz.trading.controller.Constants;
import com.topaz.trading.controller.MarketwatchProvider;
import com.topaz.trading.model.Client;
import com.topaz.trading.model.FirstTimeLogin;
import com.topaz.trading.pojo.UserInfo;
import com.topaz.trading.repository.ClientImpl;
import com.topaz.trading.repository.LoginImpl;
import com.topaz.trading.repository.ScriptImp2;




@RestController
public class Logincontroller {

	
	@Autowired
	MarketwatchProvider marketwatchProvider;
	
	@Autowired
	ClientImpl clientImpl;
	
	@Autowired
	LoginImpl loginImpl;
	
	@Autowired
	RestUtil restUtil;
	
	@Autowired
	ScriptImp2 scriptImp;
	
	
	
	HashMap<String,UserInfo> kambalaLoginmap=new HashMap<String,UserInfo>();//Creating HashMap	
	
	private static Logger logger = LoggerFactory.getLogger(Logincontroller.class);
	
	
	
	
	
	@RequestMapping(value = "/authenticate", method = RequestMethod.POST)
	public ModelAndView CreateloginPage(HttpServletRequest request, HttpServletResponse response,
			@RequestParam String userId, @RequestParam String password) throws UnsupportedEncodingException, NoSuchAlgorithmException { 
		
				
		HttpSession session = request.getSession();
		ModelAndView mv = new ModelAndView("");		
		
		Integer saveFirstTimeLoginbyUser=null;
			
		JSONObject LoginkambalaPageResponse = new JSONObject();
		try {	
					
				Object LoginkambalaPage =restUtil.loginverify(userId,password);
				
				LoginkambalaPageResponse=(JSONObject) LoginkambalaPage;
				
		  	    Constants.STAT=LoginkambalaPageResponse.get("stat").toString();
		  	    	
		  	    	System.out.println("stat : "+ Constants.STAT);
		  	    	
		  	    	System.out.println("LoginkambalaPageResponse : "+ LoginkambalaPageResponse);
					
		  	    	if(Constants.STAT.equals(Constants.OK)) {  	  		
		  	  		
		  	  		saveFirstTimeLoginbyUser=restUtil.saveFirstTimeLogin(userId.toUpperCase());
		  	  		
		  	  		session.setAttribute("userId", userId.toUpperCase());
		  	  		session.setAttribute("susertoken", LoginkambalaPageResponse.get("susertoken").toString());
		  	  		
		  	  		if(saveFirstTimeLoginbyUser==0) {  
		  	  		session.setAttribute("password", CommonFunction.KambalaUserPasswordData(password));	
		  	  	    	scriptImp.createMarketWatch(userId);
		  	  	    	  mv.setViewName("NewTpin"); 
		  	  			//mv.setViewName("NewPasswordTpin");   	  			
		  	  		}
		  	  		else if(saveFirstTimeLoginbyUser==1) {
		  	  		session.setAttribute("password", CommonFunction.KambalaUserPasswordData(password));	
		  	  			mv.setViewName("tpin");   	  			  	  		
		  	  		}
		  	  		else if(saveFirstTimeLoginbyUser==3) { 
		  	  		mv.addObject("message", "System Error Occurred");
	  	  			mv.setViewName("login");   	  			  	  		
		  	  		}
		  	    }
		  	    	else if(Constants.STAT.equals(Constants.NOT_OK)) {
		  	    		
		  	    		if(LoginkambalaPageResponse.get("emsg").toString().equals(Constants.CHANGEPASSWORD)) {
		  	    			
		  	    			
		  	    			List<Client> ClientList= clientImpl.verifyClientId(userId.toUpperCase());
		  	    	
		  	    			
		  	    			Boolean isTpinVerify =restUtil.VerifyTpinListByclientId(userId.toUpperCase(),ClientList.get(0).getTpin());		
		  	    			
		  	    			if (isTpinVerify==true) {
		  			  	  		session.setAttribute("userId", userId.toUpperCase());
			  	    			session.setAttribute("password", CommonFunction.KambalaUserPasswordData(password));				  	  		
			  	    			mv.setViewName("ChangePassword");
			  	    			
		  	    			} else if (isTpinVerify==false) {
		  	    				session.setAttribute("userId", userId.toUpperCase());
			  	    			session.setAttribute("password", CommonFunction.KambalaUserPasswordData(password));				  	  		
			  	    			mv.setViewName("NewPasswordTpin");
		  	    			}
		  	    					
		  	    		}
		  	    		else if(LoginkambalaPageResponse.get("emsg").toString().equals(Constants.PASSWORDEXPIRED)) {
		  	    			session.setAttribute("userId", userId.toUpperCase());
		  	    			session.setAttribute("password", CommonFunction.KambalaUserPasswordData(password));				  	  		
		  	    			mv.setViewName("ChangePassword");		  	    			
		  	    		}
		  	    		
		  	    		
		  	    		else if(!LoginkambalaPageResponse.get("emsg").toString().equals(Constants.CHANGEPASSWORD) 
		  	    			   || LoginkambalaPageResponse.get("emsg").toString().equals(Constants.PASSWORDEXPIRED)){	
		  	    			
		  	    		mv.setViewName("login");
		  	    		mv.addObject("message",LoginkambalaPageResponse.get("emsg").toString());
		  	    		}
		  	    		
		  	    		
		  	    		/*if(LoginkambalaPageResponse.get("emsg").toString()=="") {
		  	    			session.setAttribute("userId", userId.toUpperCase());
		  	    			mv.setViewName("ResetPassword");
		  	    			
		  	    		}*/
  	    	}
  	    	
       
			} catch (Exception e) {
				mv.addObject("message", "System Error Occurred");
				mv.setViewName("login");  
			}
			return mv;
		
		}


	@RequestMapping(value = "/passwordTpin", method = RequestMethod.POST)
	public ModelAndView SetTpinAndPasswordPage(HttpServletRequest request, HttpServletResponse response,
			@RequestParam String setpassword,@RequestParam String conpassword,
			@RequestParam String number1,@RequestParam String number2,@RequestParam String number3,@RequestParam String number4,
			@RequestParam String number5,@RequestParam String number6, @RequestParam String number7,@RequestParam String number8,
			@RequestParam String number9,@RequestParam String number10,@RequestParam String number11,@RequestParam String number12) 
			throws UnsupportedEncodingException, NoSuchAlgorithmException { 

		HttpSession session = request.getSession();
		
		ModelAndView mv = new ModelAndView("NewPasswordTpin");
		JSONObject ChangePasswordPageResponse=new JSONObject();
		
		String clientId=(String) session.getAttribute("userId"); 
		
		String oldpassword=(String) session.getAttribute("password");
		
		System.out.println("clientId : "+clientId+" oldpassword : "+oldpassword+"");
		
		String confirmpassword = null,confirmtpin=null;
		
		StringBuffer confirmtpin1 = new StringBuffer();
		confirmtpin1.append(number1).append(number2).append(number3).append(number4).append(number5).append(number6);
		
		StringBuffer confirmtpin2 = new StringBuffer();
		confirmtpin2.append(number7).append(number8).append(number9).append(number10).append(number11).append(number12);
		
		
		
		System.out.println(" setpassword "+setpassword+" conpassword "+ conpassword);
		
		System.out.println(" confirmtpin1 "+confirmtpin1.toString()+" confirmtpin2 "+ confirmtpin2.toString());
		
		if(setpassword.equals(conpassword) && confirmtpin1.toString().equals(confirmtpin2.toString())) {
		
		confirmpassword=setpassword;
		confirmtpin=confirmtpin2.toString();
		
		try {
			
			
			System.out.println("set new passsword : "+clientId.toUpperCase()+" oldpassword : "+oldpassword+" confirmpassword : "+confirmpassword); 
		//String OldPassword=CommonFunction.KambalaUserPasswordData(oldpassword);
		
		Object changepassword=restUtil.ChangePasswordbyUserId(clientId.toUpperCase(),oldpassword,confirmpassword);
		
		
		ChangePasswordPageResponse=(JSONObject) changepassword;			

		
		Constants.STAT=ChangePasswordPageResponse.get("stat").toString();
    
    	System.out.println("clinet id : "+clientId.toUpperCase()+" confirmtpin : "+confirmtpin); 
			
			Boolean isTpinVerify =restUtil.VerifyTpinListByclientId(clientId.toUpperCase(),confirmtpin);		
		
			
			if(Constants.STAT.equals(Constants.OK) || isTpinVerify==true) {   		
	    		
	    		mv.addObject("message", ChangePasswordPageResponse.get("dmsg").toString());    		
				mv.setViewName("login");  	  		
	    	}
	    	else if(Constants.STAT.equals(Constants.NOT_OK) || isTpinVerify==false) {  
	    		mv.addObject("message", ChangePasswordPageResponse.get("emsg").toString());
				//mv.setViewName("NewPasswordTpin");
	    		mv.setViewName("login");
	    	} 
	    	
			
		
		/*if (isTpinVerify==true) {
			mv.addObject("message", "Saved Successfully");
			mv.setViewName("login");
		} else if (isTpinVerify==false) {
			mv.addObject("message", "Not Saved");
			mv.setViewName("NewPasswordTpin");
		}*/
		
		
		}
		catch (Exception e){	
			
			System.out.println("Error from SetNewPassword and Tpin : "+e.getStackTrace()); 
			mv.addObject("message", "System Error Occurred");
			mv.setViewName("login"); 
		}	
		
		
		}
		else if(setpassword!=conpassword || confirmtpin1!=confirmtpin2){
			mv.addObject("message", "Your Password Or Tpin is Mismatch");
			mv.setViewName("NewPasswordTpin");
			
		}	
		return mv;
	}
	
	
	@RequestMapping(value = "/changePasswordpage", method = RequestMethod.POST)
	public ModelAndView SetPasswordPage(HttpServletRequest request, HttpServletResponse response,
			@RequestParam String setpassword,@RequestParam String conpassword) 
			throws UnsupportedEncodingException, NoSuchAlgorithmException { 

		HttpSession session = request.getSession();
		
		ModelAndView mv = new ModelAndView("NewPassword");
		JSONObject ChangePasswordPageResponse=new JSONObject();
		
		String clientId=(String) session.getAttribute("userId"); 
		
		String oldpassword=(String) session.getAttribute("password");
		
		System.out.println("clientId : "+clientId+" oldpassword : "+oldpassword+"");
		
		String confirmpassword = null,confirmtpin=null;
		
		System.out.println(" setpassword "+setpassword+" conpassword "+ conpassword);
		
		
		if(setpassword.equals(conpassword)) {
		
		confirmpassword=setpassword;
		
		
		try {
			
			
			System.out.println("set new pasdsword : "+clientId.toUpperCase()+" oldpassword : "+oldpassword+" confirmpassword : "+confirmpassword); 
		
			Object changepassword=restUtil.ChangePasswordbyUserId(clientId.toUpperCase(),oldpassword,confirmpassword);
		
		
			ChangePasswordPageResponse=(JSONObject) changepassword;			

		
			Constants.STAT=ChangePasswordPageResponse.get("stat").toString();
    
			System.out.println("clinet id : "+clientId.toUpperCase()+" confirmtpin : "+confirmtpin); 
		
			if(Constants.STAT.equals(Constants.OK)) {   		
	    		
	    		mv.addObject("message", ChangePasswordPageResponse.get("dmsg").toString());    		
				mv.setViewName("login");  	  		
		    	}
		    	else if(Constants.STAT.equals(Constants.NOT_OK)) {  
		    		mv.addObject("message", ChangePasswordPageResponse.get("emsg").toString());
		    		mv.setViewName("login");
		    	} 
	    	
		
				}
				catch (Exception e){	
					
					System.out.println("Error from SetNewPassword and Tpin : "+e.getStackTrace()); 
					mv.addObject("message", "System Error Occurred");
					mv.setViewName("login"); 
				}	
		
		
					}
					else if(setpassword!=conpassword){
						mv.addObject("message", "Your Password is Mismatch");
						mv.setViewName("ChangePassword");
						
					}	
					return mv;
			}
	
	
	@RequestMapping(value = "/newTpin", method = RequestMethod.POST)
	public ModelAndView SetTpinPage(HttpServletRequest request, HttpServletResponse response,
			@RequestParam String number1,@RequestParam String number2,@RequestParam String number3,@RequestParam String number4,
			@RequestParam String number5,@RequestParam String number6, @RequestParam String number7,@RequestParam String number8,
			@RequestParam String number9,@RequestParam String number10,@RequestParam String number11,@RequestParam String number12) 
			throws UnsupportedEncodingException, NoSuchAlgorithmException { 

		HttpSession session = request.getSession();
		
		ModelAndView mv = new ModelAndView("");
		JSONObject ChangePasswordPageResponse=new JSONObject();
		
		String clientId=(String) session.getAttribute("userId"); 
		
		//String oldpassword=(String) session.getAttribute("password");
		
		System.out.println("clientId : "+clientId);
		
		String confirmtpin=null;
		
		StringBuffer confirmtpin1 = new StringBuffer();
		confirmtpin1.append(number1).append(number2).append(number3).append(number4).append(number5).append(number6);
		
		StringBuffer confirmtpin2 = new StringBuffer();
		confirmtpin2.append(number7).append(number8).append(number9).append(number10).append(number11).append(number12);
		
		System.out.println(" confirmtpin1 "+confirmtpin1.toString()+" confirmtpin2 "+ confirmtpin2.toString());
		
		if(confirmtpin1.toString().equals(confirmtpin2.toString())) {
		
		confirmtpin=confirmtpin2.toString();
		
		try {
			
		//String OldPassword=CommonFunction.KambalaUserPasswordData(oldpassword);
	
			Boolean isTpinVerify =restUtil.VerifyTpinListByclientId(clientId.toUpperCase(),confirmtpin);		
		
		if (isTpinVerify==true) {
			mv.addObject("message", "Tpin Updated Successfully");
			mv.setViewName("login");
		} else if (isTpinVerify==false) {
			mv.addObject("message", "Tpin Saved Successfully");
			mv.setViewName("login");
		}
		
		}
		catch (Exception e){	
			
			System.out.println("Error from SetNewPassword and Tpin : "+e.getStackTrace()); 
			mv.addObject("message", "System Error Occurred");
			mv.setViewName("login"); 
		}	
		
		
		}
		else if(confirmtpin1!=confirmtpin2){
			mv.addObject("message", "Your Tpin is Mismatch");
			mv.setViewName("NewTpin");			
		}	
		return mv;
	}
	
	
	
	
	@RequestMapping(value = "/changeTpinApi", method = RequestMethod.POST)
	public ResponseEntity<JSONObject> ChangetpinValidationPage(HttpServletRequest request, HttpServletResponse response,
			@RequestParam String clientId,@RequestParam String oldTpin,@RequestParam String newTpin,@RequestParam String confirmtpin) throws UnsupportedEncodingException, NoSuchAlgorithmException { 
		JSONObject ChangeTpinPageResponse = new JSONObject();
	
		if(newTpin.equals(confirmtpin)) {
		Boolean isVerifychangeTpin = clientImpl.changeTpinByUserId(clientId.toUpperCase(),confirmtpin,oldTpin); 
		
		//System.out.println("TpinList  is true or false : "+isVerifychangeTpin);
		
		
		if (isVerifychangeTpin==Constants.FALSE) {
			ChangeTpinPageResponse.put("Tpinmessage", "Your TPIN Not Updated");	
			} 
		else if (isVerifychangeTpin==Constants.TRUE){			
			ChangeTpinPageResponse.put("Tpinmessage", "Your TPIN Updated Successfully");	
		} 
		}
		else if(newTpin!=confirmtpin){
			ChangeTpinPageResponse.put("Tpinmessage", "Your TPIN and Confirm TPIN is Mismatach");			
		} 
		
		 return ResponseEntity.ok().body(ChangeTpinPageResponse);
	}
	
	
	
	@RequestMapping(value = "/tpinValidation", method = RequestMethod.POST)	
	public RedirectView tpinValidationPage(HttpServletRequest request, HttpServletResponse response,RedirectAttributes redir,
	//public ModelAndView tpinValidationPage(HttpServletRequest request, HttpServletResponse response,
			@RequestParam String number1,@RequestParam String number2,@RequestParam String number3,@RequestParam String number4,
			@RequestParam String number5,@RequestParam String number6) throws UnsupportedEncodingException, NoSuchAlgorithmException { 
		
		HttpSession session = request.getSession();
		//RedirectView mv =null;
		RedirectView mv = new RedirectView("home");
		
		//ModelAndView mv = new ModelAndView("home");
		
		String clientId=(String) session.getAttribute("userId");		
		String susertoken=(String) session.getAttribute("susertoken");
		String password=(String)session.getAttribute("password");
		
		StringBuffer confirmtpin = new StringBuffer();
		confirmtpin.append(number1).append(number2).append(number3).append(number4).append(number5).append(number6);
	
		// Secondtime Login checking		
		
		Boolean isVerifyTpin = clientImpl.verifyTpinByUserId(clientId.toUpperCase(),confirmtpin.toString()); 
		
		//System.out.println("TpinList  is true or false : "+isVerifyTpin);
		
		if (isVerifyTpin==Constants.FALSE) {
			
			return new RedirectView("tpinInvalid");
			} 
		else if (isVerifyTpin==Constants.TRUE){			
			
			session.setAttribute("susertoken",susertoken);
			//session.setAttribute("password",password); 
			redir.addFlashAttribute("userId",clientId);
			redir.addFlashAttribute("password", password);
			redir.addFlashAttribute("tpin", confirmtpin.toString());
			mv = new RedirectView("home",true);
			
		} 
		
		return mv;
		}
		
	
	@RequestMapping(value = "/forgotPassword", method = RequestMethod.POST)
	public ModelAndView ForgotPasswordswebPageKambala(HttpServletRequest request, HttpServletResponse response,
			@RequestParam String username,@RequestParam String pannumber,@RequestParam String dob)
			throws UnsupportedEncodingException, NoSuchAlgorithmException { 
		
		
		RestTemplate restTemplate = new RestTemplate();	
		HttpSession session=request.getSession();
		
		
		String bodyproperties=null;
		JSONObject ForgotPasswordInputJson = new JSONObject();
		JSONObject ForgotPasswordPageResponse= new JSONObject();
		ResponseEntity<String> ForgotPasswordOutput=null;
		ModelAndView mv = new ModelAndView("");
		
		 
		String finalDob = dob.replaceAll("/", "");

		//username=clientId;
		//INV1|ABCDE1234A|10/11/1991	
		//TEST100|AAAAA1111A|01/01/2000
		//System.out.println("username : "+username+" pannumber : "+pannumber+" finalDob "+finalDob);
		
		ForgotPasswordInputJson.put("uid", username);	
		ForgotPasswordInputJson.put("pan", pannumber);
		ForgotPasswordInputJson.put("dob", finalDob);
		
	
	try {	
		StringBuffer ForgotPasswordkambalaBuff = new StringBuffer(marketwatchProvider.getForgotpasswordkambalaUrl());
		
		URL ForgotPasswordkambalaUrl = new URL(ForgotPasswordkambalaBuff.toString());	
				
		
		Map<String,Object> map = new HashMap<String,Object>();
		map.put("jData",ForgotPasswordInputJson.toJSONString());
		
	    bodyproperties= CommonFunction.urlEncodeUTF8(map);
      
      
       HttpEntity<String> requestparam = new HttpEntity<>(bodyproperties);
       
       //System.out.println("URL : "+ForgotPasswordkambalaUrl.toString());       
       
     // build the request
      ForgotPasswordOutput = restTemplate.postForEntity(ForgotPasswordkambalaUrl.toString(), requestparam, String.class);
        
         
        //System.out.println("status code : "+ ForgotPasswordOutput.getStatusCode());       
        //System.out.println("body : "+ ForgotPasswordOutput.getBody());
	    
	    ForgotPasswordPageResponse = (JSONObject) JSONValue.parse(ForgotPasswordOutput.getBody());
	    	
	    	
	    	Constants.STAT=ForgotPasswordPageResponse.get("stat").toString();
	    	if(Constants.STAT.equals(Constants.OK)) {  	  
	    		session.setAttribute("userId", username.toUpperCase());	    		
				mv.setViewName("ResetPassword");
	  	  		
	    	}
	    	else if(Constants.STAT.equals(Constants.NOT_OK)) {  
	    		mv.addObject("message", ForgotPasswordPageResponse.get("stat").toString());
				mv.setViewName("forgotpassword");
	    	}
	    	

	} catch (Exception e) {
		logger.error("Unexpected FprgotPassword  error", e.getMessage());
		
		mv.addObject("message", "System Error Occurred");
		mv.setViewName("forgotpassword"); 
		
		e.printStackTrace();
	}

	return mv;
	
}

		
	@RequestMapping(value = "/changePassword", method = RequestMethod.POST)
	public ModelAndView changepasswordswebPageKambala(HttpServletRequest request, HttpServletResponse response,
			@RequestParam String oldpassword,@RequestParam String newpassword,@RequestParam String conpassword) throws UnsupportedEncodingException, NoSuchAlgorithmException { 
		
		
		System.out.println("oldpassword : "+oldpassword+"newpassword : "+newpassword+" conpassword : "+conpassword);
		HttpSession session=request.getSession();
		ModelAndView mv = new ModelAndView("");
	
		JSONObject ChangePasswordPageResponse  = new JSONObject();
		
		String userId=(String) session.getAttribute("userId");
		//System.out.println("username : "+userId+" oldpassword : "+oldpassword+" conpassword : "+conpassword+" newpassword : "+newpassword);
		
			if(newpassword.equals(conpassword)) {			
			
			//String OldPassword=CommonFunction.KambalaUserPasswordData(oldpassword);
			
			//System.out.println("OldPassword Encrypted256 : "+OldPassword);	        
			
			Object changepassword=restUtil.ChangePasswordbyUserId(userId.toUpperCase(),oldpassword,conpassword);

			ChangePasswordPageResponse=(JSONObject) changepassword;			
			
			Constants.STAT=ChangePasswordPageResponse.get("stat").toString();
        
	    	if(Constants.STAT.equals(Constants.OK)) {   		
	    		
	    		mv.addObject("message", ChangePasswordPageResponse.get("stat").toString());    		
				mv.setViewName("login");  	  		
	    	}
	    	else if(Constants.STAT.equals(Constants.NOT_OK)) {  
	    		mv.addObject("message", ChangePasswordPageResponse.get("emsg").toString());
				mv.setViewName("ResetPassword");
	    	} 
	
			}
			else if(newpassword!=conpassword){
				mv.addObject("message", "Your NewPassword and Confirm Passowrd is Mismatach");
				mv.setViewName("resetpassword");
			} 
		       
	return mv;
	
}
		
	
	@RequestMapping(value = "/changePasswordApi", method = RequestMethod.POST)
	public ResponseEntity<JSONObject> PositionsbookPageKambala(HttpServletRequest request, HttpServletResponse response,
	@RequestParam String oldpassword,@RequestParam String newpassword,@RequestParam String conpassword) throws UnsupportedEncodingException, NoSuchAlgorithmException { 
		
		
		//System.out.println("oldpassword : "+oldpassword+"newpassword : "+newpassword+" conpassword : "+conpassword);
		HttpSession session=request.getSession();
		ModelAndView mv = new ModelAndView("");
	
		JSONObject ChangePasswordPageResponse  = new JSONObject();
		JSONObject ChangePasswordPageJSonResponse  = new JSONObject();
		
		String userId=(String) session.getAttribute("userId");
		//System.out.println("username : "+userId+" oldpassword : "+oldpassword+" conpassword : "+conpassword+" newpassword : "+newpassword);
		
			if(newpassword.equals(conpassword)) {			
			
			//String OldPassword=CommonFunction.KambalaUserPasswordData(oldpassword);
			
			//System.out.println("OldPassword Encrypted256 : "+OldPassword);	        
			
			Object changepassword=restUtil.ChangePasswordbyUserId(userId.toUpperCase(),oldpassword,conpassword);

			ChangePasswordPageResponse=(JSONObject) changepassword;			
			
			Constants.STAT=ChangePasswordPageResponse.get("stat").toString();
        
	    	if(Constants.STAT.equals(Constants.OK)) {  	    		
	    		ChangePasswordPageJSonResponse.put("stat", ChangePasswordPageResponse.get("stat").toString());
	    		ChangePasswordPageJSonResponse.put("dmsg", ChangePasswordPageResponse.get("dmsg").toString());
	    		
	    	}
	    	else if(Constants.STAT.equals(Constants.NOT_OK)) {	    		
	    		ChangePasswordPageJSonResponse.put("stat", ChangePasswordPageResponse.get("stat").toString());
	    		ChangePasswordPageResponse.put("emsg", ChangePasswordPageResponse.get("emsg").toString());	    		
	    	} 
	
			}
			else if(newpassword!=conpassword){
				ChangePasswordPageJSonResponse.put("stat", ChangePasswordPageResponse.get("stat").toString());
				ChangePasswordPageResponse.put("emsg", "Your NewPassword and Confirm Passowrd is Mismatach");
			} 
		       
			 return ResponseEntity.ok().body(ChangePasswordPageJSonResponse);
	
}
	
	 
		@RequestMapping(value="/logout", method = RequestMethod.GET)
		public RedirectView LogoutPage(HttpServletRequest request, HttpServletResponse response) {		
		
		HttpSession session = request.getSession();
		    
	
			RedirectView rv=null;
			
			String userId = (String) session.getAttribute("userId");
					
			
			
			JSONObject LogoutInputJson = new JSONObject();
			
			JSONObject LogoutPageResponse= new JSONObject();
			
			ResponseEntity<String> LogoutOutput=null;	 
			
			String jKey = (String) session.getAttribute("susertoken");
		
			
			 
			 try {
			 
			 Object LogoutResponseeObject=restUtil.Logoutpage(userId,jKey);
				 
		
		    	
			 	LogoutPageResponse =  (JSONObject) LogoutResponseeObject;
		    	
		    	
		    	
		    	 Constants.STAT=LogoutPageResponse.get("stat").toString();
		         
		     	if(Constants.STAT.equals(Constants.OK)) {   		
		     		
		     		/*mv.addObject("message", LogoutPageResponse.get("stat").toString());    		
		 			mv.setViewName("login"); */
		 			
		 			session.removeAttribute("userId");
		        	
		        	rv=new RedirectView("login");
		     	}
		     	else if(Constants.STAT.equals(Constants.NOT_OK)) {  
		     		/*mv.addObject("message", LogoutPageResponse.get("emsg").toString());
		 			mv.setViewName("home");*/
		 			rv= new RedirectView("home");
		     	}
     	
        
	
	} catch (Exception e) {
			logger.error("Unexpected logoutOutput  error", e.getMessage());	
			e.printStackTrace();
			//mv.addObject("message", "System Error Occurred");
			//rv.setViewName("login"); 
			rv= new RedirectView("login");
	}
	
	return rv;
	
	}
	
		

@RequestMapping(value="/userDetails", method = RequestMethod.POST, produces="application/json")
	public ResponseEntity<JSONObject> UserdetailsPage(HttpServletRequest request, HttpServletResponse response) {
		
		    HttpSession session = request.getSession();
		    
			String userId = (String) session.getAttribute("userId");
			String jKey = (String) session.getAttribute("susertoken");
					
			
			//System.out.println("userId:::"+userId);
			

			JSONObject UserdetailsInputJson = new JSONObject();
			JSONObject UserdetailsResoponseJson = new JSONObject();
	
			
			JSONObject UserdetailskambalaResponseJson = new JSONObject();
			
			 ResponseEntity<String> UserdetailskambalaOutput=null;
			

			 UserdetailsInputJson.put("uid", userId);	
			 UserdetailsInputJson.put("actid", userId);
			 UserdetailsInputJson.put("brkname", "ENRICH");
			
			 System.out.println(" UserdetailsInput jKey:::"+jKey);
			try {
	
					StringBuffer UserdetailskambalaBuff = new StringBuffer(marketwatchProvider.getUserdetailskambalaUrl());
					
					URL  UserdetailskambalaUrl = new URL( UserdetailskambalaBuff.toString());
					
					RestTemplate restTemplate = new RestTemplate();			
					//HttpHeaders headers = new HttpHeaders();

			        Map<String,Object> map = new HashMap<String,Object>();
			        map.put("jData", UserdetailsInputJson.toJSONString());
			        map.put("jKey",jKey);
			        
			  	    String bodyproperties= CommonFunction.urlEncodeUTF8(map);
			  							
					HttpEntity<String> requestparam = new HttpEntity<>(bodyproperties);
			       
					 System.out.println(" Userdetails URL : "+ UserdetailskambalaUrl.toString());       
					System.out.println(" Userdetails requestparam : "+requestparam.toString()); 

					// build the request
					UserdetailskambalaOutput = restTemplate.postForEntity(UserdetailskambalaUrl.toString(), requestparam, String.class);


				     System.out.println(" Userdetails code : "+  UserdetailskambalaOutput.getStatusCode());
					//System.out.println("Userdetails headers : "+  FundsLimitskambalaOutput.getHeaders());
					 System.out.println(" Userdetails body : "+  UserdetailskambalaOutput.getBody());

			        //System.out.println(" FundsLimits restTemplate : "+restTemplate.toString()); 
					 UserdetailsResoponseJson=(JSONObject) JSONValue.parse(UserdetailskambalaOutput.getBody());		       

			} catch (Exception e) {
				logger.error("Unexpected  Userdetails error", e.getMessage());
				e.printStackTrace();
				//return ResponseEntity.ok().body("{}");
				//return new ResponseEntity<String>(HttpStatus.CREATED);
			}

			  return ResponseEntity.ok().body( UserdetailsResoponseJson);
		}
	

@RequestMapping(value="/clientDetails", method = RequestMethod.POST, produces="application/json")
	public ResponseEntity<JSONObject> clientdetailsPage(HttpServletRequest request, HttpServletResponse response) {
		
		    HttpSession session = request.getSession();
		    
			String userId = (String) session.getAttribute("userId");
			String jKey = (String) session.getAttribute("susertoken");
					
			
			//System.out.println("userId:::"+userId);
			

			JSONObject clientdetailsInputJson = new JSONObject();
			JSONObject clientdetailsResoponseJson = new JSONObject();
	
			
			JSONObject clientdetailskambalaResponseJson = new JSONObject();
			
			 ResponseEntity<String> clientdetailskambalaOutput=null;
			

			 clientdetailsInputJson.put("uid", userId);	
			 clientdetailsInputJson.put("actid", userId);
			 clientdetailsInputJson.put("brkname", "ENRICH");
			
			 System.out.println(" clientdetailsInput jKey:::"+jKey);
			try {
	
					StringBuffer clientdetailskambalaBuff = new StringBuffer(marketwatchProvider.getClientdetailskambalaUrl());
					
					URL  clientdetailskambalaUrl = new URL( clientdetailskambalaBuff.toString());
					
					RestTemplate restTemplate = new RestTemplate();			
					//HttpHeaders headers = new HttpHeaders();

			        Map<String,Object> map = new HashMap<String,Object>();
			        map.put("jData", clientdetailsInputJson.toJSONString());
			        map.put("jKey",jKey);
			        
			  	    String bodyproperties= CommonFunction.urlEncodeUTF8(map);
			  							
					HttpEntity<String> requestparam = new HttpEntity<>(bodyproperties);
			       
					 System.out.println(" clientdetails URL : "+ clientdetailskambalaUrl.toString());       
					System.out.println(" clientdetails requestparam : "+requestparam.toString()); 

					// build the request
					clientdetailskambalaOutput = restTemplate.postForEntity(clientdetailskambalaUrl.toString(), requestparam, String.class);


				     System.out.println(" clientdetails code : "+  clientdetailskambalaOutput.getStatusCode());
					//System.out.println("clientdetails headers : "+   clientdetailskambalaOutput.getHeaders());
					 System.out.println("clientdetails body : "+  clientdetailskambalaOutput.getBody());

			        //System.out.println(" client restTemplate : "+restTemplate.toString()); 
					 clientdetailsResoponseJson=(JSONObject) JSONValue.parse(clientdetailskambalaOutput.getBody());		       

			} catch (Exception e) {
				logger.error("Unexpected  Userdetails error", e.getMessage());
				e.printStackTrace();
				//return ResponseEntity.ok().body("{}");
				//return new ResponseEntity<String>(HttpStatus.CREATED);
			}

			  return ResponseEntity.ok().body( clientdetailsResoponseJson);
		}
		
	
	@RequestMapping(value="/QuickAuthKambala", method = RequestMethod.POST, produces="application/json")
	public ResponseEntity<String> LoginPageKambala(HttpServletRequest request, HttpServletResponse response) throws UnsupportedEncodingException, NoSuchAlgorithmException {
		 

	JSONObject LoginkambalaInputJson = new JSONObject();
	
	JSONObject LoginkambalaPageResponse= new JSONObject();

	String password="Test@1234";
	String pswd=CommonFunction.KambalaUserPasswordData(password);
	 
	
	//LoginkambalaInputJson.put("uid", "INV1");
	LoginkambalaInputJson.put("uid", "TEST100"); 
	LoginkambalaInputJson.put("apkversion","1.0.0");
	LoginkambalaInputJson.put("pwd",pswd);
	//LoginkambalaInputJson.put("pwd","25524ded182fb9fea9b43ac1a7f52d005f534c5b8cb8b399e19094972eea7ac8");
	//LoginkambalaInputJson.put("factor2","AAAAA1111A");
	LoginkambalaInputJson.put("factor2","aaaaa1111a");
	LoginkambalaInputJson.put("imei","123456789");
	//LoginkambalaInputJson.put("imei","mac");
	LoginkambalaInputJson.put("source","API");
	LoginkambalaInputJson.put("vc","API_USER");
	LoginkambalaInputJson.put("appkey","bb210c16065447ef4bf6cbeaf7e2153e881c3b6506e1bc107c588609dd2c6d82");
	
	 ResponseEntity<String> LoginOutput=null;
	 
	 String LoginResponse="";
	
	try {		
		
		 
		StringBuffer LoginkambalaBuff = new StringBuffer(marketwatchProvider.getLoginkambalaUrl());
		
		URL LoginkambalaUrl = new URL(LoginkambalaBuff.toString());
		
		RestTemplate restTemplate = new RestTemplate();			
		HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);     
      
        Map<String,Object> map = new HashMap<String,Object>();
        map.put("jData",LoginkambalaInputJson.toJSONString());
  	    String bodyproperties= CommonFunction.urlEncodeUTF8(map);
        
  	    HttpEntity<String> requestparam = new HttpEntity<>(bodyproperties, headers);
       
  	    
       
  	     
       
  	    // build the request
  	    LoginOutput = restTemplate.postForEntity(LoginkambalaUrl.toString(), requestparam, String.class);
        
  	    	String Responsebody=LoginOutput.getBody();
  	    	
  	    	
  	    	Object obj = JSONValue.parse(Responsebody);
  	    	LoginkambalaPageResponse = (JSONObject) obj;
  	    	//System.out.println("LoginkambalaPageResponse : "+ LoginkambalaPageResponse);
  	    	
  	    	
  	    	
  	    	String susertoken=LoginkambalaPageResponse.get("susertoken").toString();
  	    	String actid=LoginkambalaPageResponse.get("actid").toString();
  	    	
			//System.out.println("status code : "+ LoginOutput.getStatusCode());
	        //System.out.println("headers : "+ LoginOutput.getHeaders());
	        //System.out.println("body : "+ LoginOutput.getBody());     
        
	        UserInfo userinfo=new UserInfo();		
			
			userinfo.setSusertoken(susertoken); 
			userinfo.setActid(actid);
			
			kambalaLoginmap.put(userinfo.getActid().toUpperCase(),userinfo); 
			
			
        
       
		} catch (Exception e) {
			logger.error("Unexpected ValidAns error", e.getMessage());
			e.printStackTrace();
		}
			return ResponseEntity.ok().body(LoginOutput.getBody());
		
		}
	
		@RequestMapping(value="/UserdetailsKambala", method = RequestMethod.POST, produces="application/json")
		public ResponseEntity<String> UserdetailsPageKambala(HttpServletRequest request, HttpServletResponse response) {
			
			HttpSession session = null;	
		
			JSONObject UserdetailsInputJson = new JSONObject();
			JSONObject UserdetailsResponseJson = new JSONObject();
			
				String actid="",susertoken="",jKey="";
				ResponseEntity<String> UserdetailsOutput=null;
			
				for (Map.Entry<String, UserInfo> entry : kambalaLoginmap.entrySet()) {
					String key = entry.getKey();
					UserInfo tab = entry.getValue();	    
				    actid=tab.getActid();
				    susertoken=tab.getSusertoken(); 	
				}
			
				jKey =susertoken;
				UserdetailsInputJson.put("uid", actid);	
	
	
	
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
	       
	      // System.out.println("URL : "+UserdetailskambalaUrl.toString());       
	      // System.out.println("requestparam : "+requestparam.toString()); 
	       
	     // build the request
	       UserdetailsOutput = restTemplate.postForEntity(UserdetailskambalaUrl.toString(), requestparam, String.class);
	        
	       
	       String Responsebody=UserdetailsOutput.getBody();
	       
       
		   	Object obj = JSONValue.parse(Responsebody);
		   	UserdetailsResponseJson = (JSONObject) obj;
		   	//System.out.println("UserdetailsResponseJson : "+ UserdetailsResponseJson);
		   	
	         
	       // System.out.println("status code : "+ UserdetailsOutput.getStatusCode());
	        //System.out.println("headers : "+ UserdetailsOutput.getHeaders());
	      //  System.out.println("body : "+ UserdetailsOutput.getBody());
	
	        //System.out.println("restTemplate : "+restTemplate.toString()); 
	
		} catch (Exception e) {
			logger.error("Unexpected ValidAns error", e.getMessage());
			e.printStackTrace();
		}
	
		  return ResponseEntity.ok().body(UserdetailsOutput.getBody());

	}
	
			
			@RequestMapping(value="/ForgotPasswordKambala", method = RequestMethod.POST, produces="application/json")
			public ResponseEntity<String> ForgotPasswordsPageKambala(HttpServletRequest request, HttpServletResponse response) {
				
			HttpSession session = null;	
		
			JSONObject ForgotPasswordInputJson = new JSONObject();
			
				String actid="",susertoken="",jKey="";
				ResponseEntity<String> ForgotPasswordOutput=null;
			
				for (Map.Entry<String, UserInfo> entry : kambalaLoginmap.entrySet()) {
					String key = entry.getKey();
					UserInfo tab = entry.getValue();	    
				    actid=tab.getActid();
				    susertoken=tab.getSusertoken(); 	
				}
				/*String dobdate="16/12/1990";
				String dob=CommonFunction.SimpleDateFormat(dobdate);
				System.out.println("dob : "+dob);*/
				
				jKey =susertoken;
				ForgotPasswordInputJson.put("uid", actid);	
				ForgotPasswordInputJson.put("pan","ABCDE1234A");
				ForgotPasswordInputJson.put("dob", "10/11/1991");
			
			
			
			try {		
				//String jKey ="f20048c7e8ae72e7ff8b5491dc90b707d54b68edbf8faa2ca27e588b26703e6a";
				StringBuffer ForgotPasswordkambalaBuff = new StringBuffer(marketwatchProvider.getForgotpasswordkambalaUrl());
				
				URL ForgotPasswordkambalaUrl = new URL(ForgotPasswordkambalaBuff.toString());
				
				RestTemplate restTemplate = new RestTemplate();			
				HttpHeaders headers = new HttpHeaders();
		        //headers.setContentType(MediaType.APPLICATION_JSON);
		     
		   
		      
				Map<String,Object> map = new HashMap<String,Object>();
				map.put("jData",ForgotPasswordInputJson.toJSONString());
				map.put("jKey",jKey);
			    String bodyproperties= CommonFunction.urlEncodeUTF8(map);
		      
		      
		       HttpEntity<String> requestparam = new HttpEntity<>(bodyproperties, headers);
		       
		       //System.out.println("URL : "+ForgotPasswordkambalaUrl.toString());       
		       //System.out.println("requestparam : "+requestparam.toString()); 
		       
		     // build the request
		       ForgotPasswordOutput = restTemplate.postForEntity(ForgotPasswordkambalaUrl.toString(), requestparam, String.class);
		        
		       /*  
		        System.out.println("status code : "+ ForgotPasswordOutput.getStatusCode());
		        System.out.println("headers : "+ ForgotPasswordOutput.getHeaders());
		        System.out.println("body : "+ ForgotPasswordOutput.getBody());
		
		        System.out.println("restTemplate : "+restTemplate.toString()); */
		
			} catch (Exception e) {
				logger.error("Unexpected FprgotPassword  error", e.getMessage());
				e.printStackTrace();
			}
		
			  return ResponseEntity.ok().body(ForgotPasswordOutput.getBody());
		
		}
			
			
			
	
	

			@RequestMapping(value="/ChangepwdKambala", method = RequestMethod.POST, produces="application/json")
			public ResponseEntity<String> ChangePasswordPageKambala(HttpServletRequest request, HttpServletResponse response) {
			
			HttpSession session = null;	
			
			JSONObject ChangepasswordInputJson = new JSONObject();
			
			String actid="",susertoken="",jKey="";
			ResponseEntity<String> ChangepasswordOutput=null;
			
			for (Map.Entry<String, UserInfo> entry : kambalaLoginmap.entrySet()) {
				String key = entry.getKey();
				UserInfo tab = entry.getValue();	    
			    actid=tab.getActid();
			    susertoken=tab.getSusertoken(); 	
			}			
			
			//jKey =susertoken;
			ChangepasswordInputJson.put("uid", actid);	
			ChangepasswordInputJson.put("oldpwd","topaz123");
			ChangepasswordInputJson.put("pwd", "abc123");
			
			
			
			try {		
			//String jKey ="f20048c7e8ae72e7ff8b5491dc90b707d54b68edbf8faa2ca27e588b26703e6a";
			StringBuffer ChangepasswordkambalaBuff = new StringBuffer(marketwatchProvider.getChangepasswordkambalaUrl() );
			
			URL ChangepasswordkambalaUrl = new URL(ChangepasswordkambalaBuff.toString());
			
			RestTemplate restTemplate = new RestTemplate();			
			HttpHeaders headers = new HttpHeaders();
			//headers.setContentType(MediaType.APPLICATION_JSON);
			
			
			
			Map<String,Object> map = new HashMap<String,Object>();
			map.put("jData",ChangepasswordInputJson.toJSONString());
			map.put("jKey",jKey);
			String bodyproperties= CommonFunction.urlEncodeUTF8(map);
			
			
			HttpEntity<String> requestparam = new HttpEntity<>(bodyproperties, headers);
			
			// build the request
			ChangepasswordOutput = restTemplate.postForEntity(ChangepasswordkambalaUrl.toString(), requestparam, String.class);
			
			/* 
			System.out.println("status code : "+ ChangepasswordOutput.getStatusCode());
			System.out.println("headers : "+ ChangepasswordOutput.getHeaders());
			System.out.println("body : "+ ChangepasswordOutput.getBody());
			
			System.out.println("restTemplate : "+restTemplate.toString()); */
			
			} catch (Exception e) {
			logger.error("Unexpected Changepassword  error", e.getMessage());
			e.printStackTrace();
			}
			
			return ResponseEntity.ok().body(ChangepasswordOutput.getBody());
			
			}
			
			
			@RequestMapping(value="/MWListKambala", method = RequestMethod.POST, produces="application/json")
			public ResponseEntity<String> MarketwatchlistNameskambala(HttpServletRequest request, HttpServletResponse response) {
			
			HttpSession session = null;	
			
			JSONObject MarketwatchlistNamesInputJson = new JSONObject();
			
			String actid="",susertoken="",jKey="";
			ResponseEntity<String> MarketwatchlistNamesOutput=null;
			
			for (Map.Entry<String, UserInfo> entry : kambalaLoginmap.entrySet()) {
				String key = entry.getKey();
				UserInfo tab = entry.getValue();	    
			    actid=tab.getActid();
			    susertoken=tab.getSusertoken(); 	
			}
			
			
			jKey =susertoken;
			MarketwatchlistNamesInputJson.put("uid", actid);	
				
			
			try {		
			//String jKey ="f20048c7e8ae72e7ff8b5491dc90b707d54b68edbf8faa2ca27e588b26703e6a";
			StringBuffer MarketwatchlistNameskambalaBuff = new StringBuffer(marketwatchProvider.getMwlistnameskambalaUrl() );
			
			URL MarketwatchlistNameskambalaUrl = new URL(MarketwatchlistNameskambalaBuff.toString());
			
			RestTemplate restTemplate = new RestTemplate();			
			HttpHeaders headers = new HttpHeaders();
			//headers.setContentType(MediaType.APPLICATION_JSON);
			
			
			
			Map<String,Object> map = new HashMap<String,Object>();
			map.put("jData",MarketwatchlistNamesInputJson.toJSONString());
			map.put("jKey",jKey);
			String bodyproperties= CommonFunction.urlEncodeUTF8(map);
			
			
			HttpEntity<String> requestparam = new HttpEntity<>(bodyproperties, headers);
			
			//System.out.println("URL : "+MarketwatchlistNameskambalaUrl.toString());       
			//System.out.println("requestparam : "+requestparam.toString()); 
			
			// build the request
			MarketwatchlistNamesOutput = restTemplate.postForEntity(MarketwatchlistNameskambalaUrl.toString(), requestparam, String.class);
			
			 
			/*System.out.println("status code : "+ MarketwatchlistNamesOutput.getStatusCode());
			System.out.println("headers : "+ MarketwatchlistNamesOutput.getHeaders());
			System.out.println("body : "+ MarketwatchlistNamesOutput.getBody());
			
			System.out.println("restTemplate : "+restTemplate.toString()); */
			
			} catch (Exception e) {
			logger.error("Unexpected MarketwatchlistNames  error", e.getMessage());
			e.printStackTrace();
			}
			
			return ResponseEntity.ok().body(MarketwatchlistNamesOutput.getBody());
			
			}

		@RequestMapping(value="/MarketWatchKambala", method = RequestMethod.POST, produces="application/json")
		public ResponseEntity<String> Marketwatchlistkambala(HttpServletRequest request, HttpServletResponse response) {
			
					HttpSession session = null;	
					
					JSONObject MarketwatchlistInputJson = new JSONObject();
					
					String actid="",susertoken="",jKey="";
					ResponseEntity<String> MarketwatchlistOutput=null;
					
					for (Map.Entry<String, UserInfo> entry : kambalaLoginmap.entrySet()) {
						String key = entry.getKey();
						UserInfo tab = entry.getValue();	    
					    actid=tab.getActid();
					    susertoken=tab.getSusertoken(); 	
					}
					
					
					jKey =susertoken;
					MarketwatchlistInputJson.put("uid", actid);	
						
					
					try {		
					//String jKey ="f20048c7e8ae72e7ff8b5491dc90b707d54b68edbf8faa2ca27e588b26703e6a";
					StringBuffer MarketwatchlistkambalaBuff = new StringBuffer(marketwatchProvider.getMarketwatchlistkambalaUrl() );
					
					URL MarketwatchlistkambalaUrl = new URL(MarketwatchlistkambalaBuff.toString());
					
					RestTemplate restTemplate = new RestTemplate();			
					HttpHeaders headers = new HttpHeaders();
					//headers.setContentType(MediaType.APPLICATION_JSON);
					
					
					
					Map<String,Object> map = new HashMap<String,Object>();
					map.put("jData",MarketwatchlistInputJson.toJSONString());
					map.put("jKey",jKey);
					String bodyproperties= CommonFunction.urlEncodeUTF8(map);
					
					
					HttpEntity<String> requestparam = new HttpEntity<>(bodyproperties, headers);
					
					/*System.out.println("URL : "+MarketwatchlistkambalaUrl.toString());       
					System.out.println("requestparam : "+requestparam.toString()); */
					
					// build the request
					MarketwatchlistOutput = restTemplate.postForEntity(MarketwatchlistkambalaUrl.toString(), requestparam, String.class);
					
					 
					/*System.out.println("status code : "+ MarketwatchlistOutput.getStatusCode());
					System.out.println("headers : "+ MarketwatchlistOutput.getHeaders());
					System.out.println("body : "+ MarketwatchlistOutput.getBody());
					
					System.out.println("restTemplate : "+restTemplate.toString()); */
					
					} catch (Exception e) {
					logger.error("Unexpected Marketwatchlist error", e.getMessage());
					e.printStackTrace();
					}
					
					return ResponseEntity.ok().body(MarketwatchlistOutput.getBody());
					
					}
				


		@RequestMapping(value="/Logout", method = RequestMethod.POST, produces="application/json")
		public ResponseEntity<String> LogoutPagekambala(HttpServletRequest request, HttpServletResponse response) {
		
		HttpSession session = request.getSession();
			    
		String userId = (String) session.getAttribute("userId");
		
		
		JSONObject LogoutInputJson = new JSONObject();
		
		JSONObject LogoutPageResponse= new JSONObject();
		
		ResponseEntity<String> LogoutOutput=null;
		 
		

		String 	jKey = (String) session.getAttribute("susertoken");

		LogoutInputJson.put("uid", userId);	
			
		
		try {		

		StringBuffer LogoutkambalaBuff = new StringBuffer(marketwatchProvider.getLogoutkambalaUrl() );
		
		URL LogoutkambalaUrl = new URL(LogoutkambalaBuff.toString());
		
		RestTemplate restTemplate = new RestTemplate();			
		HttpHeaders headers = new HttpHeaders();
		//headers.setContentType(MediaType.APPLICATION_JSON);

		Map<String,Object> map = new HashMap<String,Object>();
		map.put("jData",LogoutInputJson.toJSONString());
		map.put("jKey",jKey);
		String bodyproperties= CommonFunction.urlEncodeUTF8(map);
		
		
		HttpEntity<String> requestparam = new HttpEntity<>(bodyproperties, headers);
		
		
		// build the request
		 LogoutOutput = restTemplate.postForEntity(LogoutkambalaUrl.toString(), requestparam, String.class);
		
		String Responsebody= LogoutOutput.getBody();
	    	
	    	
	    	Object obj = JSONValue.parse(Responsebody);
	    	LogoutPageResponse = (JSONObject) obj;
	    	/*System.out.println("LogoutkambalaPageResponse : "+ LogoutPageResponse);
	    	System.out.println("status code : "+ LogoutOutput .getStatusCode());
	        System.out.println("headers : "+ LogoutOutput .getHeaders());
	        System.out.println("body : "+ LogoutOutput .getBody());   */
		
		} catch (Exception e) {
		logger.error("Unexpected logoutOutput  error", e.getMessage());
		e.printStackTrace();
		}
		
		return ResponseEntity.ok().body( LogoutOutput.getBody());
		
		}


		
		
		}

