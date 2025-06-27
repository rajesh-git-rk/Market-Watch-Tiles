package com.topaz.trading.mobile.kambala;

import java.io.UnsupportedEncodingException;
import java.security.NoSuchAlgorithmException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.topaz.trading.Util.OTPUtil;
import com.topaz.trading.Util.Publickey3Util;
import com.topaz.trading.Util.RestUtil;
import com.topaz.trading.controller.Constants;
import com.topaz.trading.controller.LogincontrollerOmensys;
import com.topaz.trading.controller.MarketwatchProvider;
import com.topaz.trading.model.Client;
import com.topaz.trading.model.MobileOrderbook;
import com.topaz.trading.pojo.UserInfo;
import com.topaz.trading.repository.ClientImpl;
import com.topaz.trading.repository.OtpImpl;
import com.topaz.trading.repository.SaveAnswerImpl;
import com.topaz.trading.repository.ScriptImp2;

@RestController
@RequestMapping("/mobile")
public class MobileOptionchaincontroller {

	
	
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
	
	
	
	@RequestMapping(value = "/OptionChain", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
	public ResponseEntity<JSONObject> getLogin(HttpServletRequest request, HttpServletResponse response,
			@RequestBody MobileOrderbook mobileOrderbook) throws UnsupportedEncodingException, NoSuchAlgorithmException {
		
		JSONObject loginauthenticateResponse = new JSONObject();
		
			UserInfo userinfo=new UserInfo();		
		
		
			JSONObject OptionChainResponseJson=new JSONObject();
			
			String userId = null,susertoken=null;
			
			
			try {
				
				for ( Map.Entry<String, UserInfo> entry : Loginmap.entrySet()) {				
				    UserInfo tab = entry.getValue();			    
				    userId=tab.getClientid();
				   // susertoken=tab.getSusertoken();	
				    susertoken="4a6c4758b4199f54cfbcb1bf2a48c3785651306b6f68f20046dc7afed9d1b367";
				    System.out.println("userId : "+userId+" susertoken : "+susertoken); 
				}
				
				
				System.out.println("userId : "+""+" susertoken : "+susertoken+" tsym : "+mobileOrderbook.getTsym()+" exch : "+mobileOrderbook.getExchangeseg()); 
				Object OptionChainResponsePage =restUtil.OptionChainPage(mobileOrderbook.getUid(),mobileOrderbook.getExchangeseg(),mobileOrderbook.getTsym(),mobileOrderbook.getPrice(),mobileOrderbook.getCnt(),susertoken);
				
				OptionChainResponseJson = (JSONObject) OptionChainResponsePage;
				
				 Constants.STAT=OptionChainResponseJson.get("stat").toString();
		  	    	
		  	    	System.out.println("stat : "+ Constants.STAT);
		  	    	
		  	    	System.out.println("LoginkambalaPageResponse : "+ OptionChainResponseJson);
					
		  	    	if(Constants.STAT.equals(Constants.OK)) {
		  	    		OptionChainResponseJson.put("stat",OptionChainResponseJson.get("stat").toString());
		  	    		OptionChainResponseJson.put("values",OptionChainResponseJson.get("values").toString());
		  	  		}
		  	    	else if(Constants.STAT.equals(Constants.NOT_OK)) {
		  	    		OptionChainResponseJson.put("message",OptionChainResponseJson.get("emsg").toString());	  	    		
		  	    		}
	   	
				
			}catch (Exception e) {
				
				OptionChainResponseJson.put("message", "System Error Occurred");
				 
			}
			
			return ResponseEntity.ok().body(OptionChainResponseJson);
			
	
	}
	
	
}
