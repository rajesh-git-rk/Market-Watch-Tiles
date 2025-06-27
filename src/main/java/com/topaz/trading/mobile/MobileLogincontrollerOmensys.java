package com.topaz.trading.mobile;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;
import java.net.CookieStore;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.security.NoSuchAlgorithmException;
import java.security.PrivateKey;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Properties;
import java.util.regex.Pattern;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.json.simple.JSONObject;
import org.json.simple.JSONValue;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.google.gson.reflect.TypeToken;
import com.topaz.trading.Util.OTPUtil;
import com.topaz.trading.Util.Publickey3Util;
import com.topaz.trading.controller.CommonFunction;
import com.topaz.trading.controller.LogincontrollerOmensys;
import com.topaz.trading.controller.MarketwatchProvider;
import com.topaz.trading.model.BracketOrder;
import com.topaz.trading.model.ChangePassword;
import com.topaz.trading.model.Client;
import com.topaz.trading.model.MarketWacthScript;
import com.topaz.trading.model.MarketWatch;
import com.topaz.trading.model.OtpMobile;
import com.topaz.trading.model.PlaceOrder;
import com.topaz.trading.model.Redisearch;
import com.topaz.trading.model.SaveAnswer;
import com.topaz.trading.model.Segment;
import com.topaz.trading.pojo.UserInfo;
import com.topaz.trading.repository.ClientImpl;
import com.topaz.trading.repository.OtpImpl;
import com.topaz.trading.repository.SaveAnswerImpl;
import com.topaz.trading.repository.ScriptImp2;




@RestController
public class MobileLogincontrollerOmensys {

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
	
	

	private static Logger logger = LoggerFactory.getLogger(MobileLogincontrollerOmensys.class);

	// ============== WEB START =============== 

	

	String ResetFlag = "2faResetFlag";
		
	HashMap<String,UserInfo> Loginmap=new HashMap<String,UserInfo>();//Creating HashMap	
	
	String loginMode = null;

	// Save2FA-Answers
	
	String Delete2FAQuestionAnwers = null;
	List<Object> Save2FAQuestionAnswers = null;
	
	List<Object> authenticatePassword =null;

	// ====================== API START ====================

	@RequestMapping(value = "/loginverify", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
	public ResponseEntity<JSONObject> getLogin(HttpServletRequest request, HttpServletResponse response,
			@RequestBody Client client) throws UnsupportedEncodingException, NoSuchAlgorithmException {

		JSONObject loginverifyMessage = new JSONObject();
		String message = "";
		logger.info("Mobile-User Login Authenticate clientId:" + client.getClientid().toUpperCase());
         String jsessionID = null;
		Cookie[] cookies = request.getCookies();
		String password=client.getPassword();
		 if(cookies != null){
             for(Cookie cookie : cookies){
                  if(cookie.getName().equals("JSESSIONID")) jsessionID = cookie.getValue();
             }    
         }	
		 
		/*
		 * The API document book-mark 03.01(getIntialKey), 03.01(getIntialKey),
		 * 03.02(GetPreAuthenticationKey)
		 */
		 try{

		List<Object> publicKey3 = publickey3Util.authenticate(client.getClientid().toUpperCase());

		 
		    String Publickey3 = publicKey3.get(0).toString();
			String 	validpasswordInputjKey = publicKey3.get(1).toString();
			String tomcatCount = publicKey3.get(2).toString();
		
		UserInfo userinfo=new UserInfo();		
		
		userinfo.setClientid(client.getClientid().toUpperCase()); 
		userinfo.setPublickey3(Publickey3); 
		userinfo.setPassword(password); 
		userinfo.setTomcatCount(tomcatCount);
		userinfo.setJsessionId(jsessionID);
		userinfo.setValidpasswordInputjKey(validpasswordInputjKey);
		// The API document book-mark 03.03(LoginMode)
		loginMode = logincontroller.getLoginMode(Publickey3);

		
		// The API document book-mark ValidAnswers 04.01(ValidPwd)
		/* authenticatePassword = logincontroller.getauthenticatePassword(Publickey3, pubKey3, eJdata, publicKey3jKey,
				tomcatCount, request, response);*/
		
		// The API document book-mark ValidAnswers 04.01(ValidPwd)
		List<Object> authenticatePassword = logincontroller.getauthenticatePassword(client.getClientid().toUpperCase(),password,validpasswordInputjKey,tomcatCount,
				request, response);
		
		String stat=null,scount=null,ResetFlag=null,sQuestions=null,sIndex=null,tdata=null;
		if(authenticatePassword.size()==2) {
			 stat=authenticatePassword.get(0).toString();
			String Emsg=authenticatePassword.get(1).toString();
			loginverifyMessage.put("message", Emsg);
			loginverifyMessage.put("stat", stat);
		}
		else {

			stat = authenticatePassword.get(0).toString();
			tdata = authenticatePassword.get(1).toString();
		 //if (stat.equals("Ok")) {
			
			message = "Succesfully Login";
			
			loginverifyMessage.put("message", message);
			loginverifyMessage.put("stat", stat);
			loginverifyMessage.put("clientid", client.getClientid());
			loginverifyMessage.put("tdata", authenticatePassword.get(1).toString());
			loginverifyMessage.put("scount", authenticatePassword.get(2).toString());
			loginverifyMessage.put("ResetFlag", authenticatePassword.get(3).toString());
			loginverifyMessage.put("sQuestions", authenticatePassword.get(4).toString());
			loginverifyMessage.put("sIndex", authenticatePassword.get(5).toString());
		//}
		 
		 scount = authenticatePassword.get(2).toString();
		 ResetFlag = authenticatePassword.get(3).toString();
		 sQuestions = authenticatePassword.get(4).toString();
		 sIndex = authenticatePassword.get(5).toString();
		userinfo.setStat(stat);
		userinfo.setTdata(tdata);
		userinfo.setScount(scount);
		userinfo.setsQuestions(sQuestions);
		userinfo.setsIndex(sIndex);		
			
		Loginmap.put(client.getClientid().toUpperCase(),userinfo);
		
		
		if (tdata.equals(marketwatchProvider.getRegisterQuestion())) {
			
			// The API document book-mark Display questions 04.08 (Displayquestions)
			List<Object> displayQuestions = logincontroller.getQuestionList(sQuestions);

			// delete the question-Answers -Index based on ClientId--Delete2FAQuestionAnwers
			saveAnswerImpl.deleteQuestionAnswerByClientId(client.getClientid().toUpperCase());
			

		} else if (tdata.equals(marketwatchProvider.getAnswertheQuestion())) {

		String	Save2faAnswers = get2FAanswerfromdbByIndexId(sIndex, client.getClientid().toUpperCase());
			
			if(stat=="Ok" || Save2faAnswers=="0") {
				message="Please Contact your Admin  2FA-Answers not Available on database!.";
				loginverifyMessage.put("message", message);
				loginverifyMessage.put("stat", "Not_Ok");
			}
		}
	}
					
		}
		catch (Exception e) {
			message = "we could not connect our server";
			loginverifyMessage.put("message", message);
			loginverifyMessage.put("stat", "Not_Ok");
			return new ResponseEntity<>(loginverifyMessage, HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
		return ResponseEntity.ok().body(loginverifyMessage);
	}

	// ============= START Save 5 Answer from 20 question  ===================
	
	// Implementation of the SaveAnswer API document book-mark 04.09 [SaveAns]
	@RequestMapping(value = "/SaveAnswerbymobile", method = RequestMethod.POST)
	public ResponseEntity<JSONObject> MobileSaveQuestionAnswers(@RequestBody List<SaveAnswer> saveAnswer,
			HttpServletRequest request, HttpServletResponse response)
			throws UnsupportedEncodingException, NoSuchAlgorithmException {

		String indexId = null;
		String questions = null;
		String answers = null;
		String clientId = null;

		String IndexWithAnswer = null;
		String joinedString = null;

		StringBuilder sb = new StringBuilder();

		JSONObject SaveAnswerResponse = new JSONObject();
		

		for (SaveAnswer saveAnswerList : saveAnswer) {

			indexId = saveAnswerList.getIndexid();
			questions = saveAnswerList.getQuestions();
			answers = saveAnswerList.getAnswers();
			clientId = saveAnswerList.getClientid();
			
			

			joinedString = sb.append(indexId + "|" + answers + "|").toString();

		}

		IndexWithAnswer = joinedString.substring(0, joinedString.lastIndexOf("|"));
		
		
		logger.info("SaveAnswerbymobile IndexWithAnswer : "+IndexWithAnswer); 
		
		UserInfo userInfo = Loginmap.get(clientId.toUpperCase());	
		
		/*userInfo.setIndexWithAnswer(IndexWithAnswer); 
		
		Loginmap.put(clientId.toUpperCase(),userInfo);*/
		

		String 	stat = null,Result=null,Emsg=null,message=null;

		String publickey3=null,TomcatCount=null,clientIdBymap=null,IndexWithAnswerByClientId=null;
		
		for ( Map.Entry<String, UserInfo> entry : Loginmap.entrySet()) {
			
			String key = entry.getKey();
		    UserInfo tab = entry.getValue();
		    // do something with key and/or tab
		    
		   // System.out.println("LimitsPage : "+key + ": " + tab.getTomcatCount());
		    
		    publickey3=tab.getPublickey3();
		    TomcatCount=tab.getTomcatCount();
		  //  IndexWithAnswerByClientId=tab.getIndexWithAnswer();
		    
		}
		
		logger.info(" SaveAnswerbymobile clientId : " +clientId+" IndexWithAnswer : "+IndexWithAnswer);

		String jKey = CommonFunction.hashData(publickey3);
		StringBuffer SaveAnsResponse = new StringBuffer();

		JSONObject SaveAnswerJson = new JSONObject();
		SaveAnswerJson.put("uid", clientId);
		SaveAnswerJson.put("qa", IndexWithAnswer);

		String SaveJdata = SaveAnswerJson.toJSONString();
		JSONObject SaveAnsResponseJson = new JSONObject();
		try {
			StringBuffer SaveAns = new StringBuffer(marketwatchProvider.getSaveAnsurl());
			SaveAns.append("jsessionid=" + "." + TomcatCount + "&jData=" + SaveJdata + "&jKey=" + jKey);

			URL SaveAnsurL = new URL(SaveAns.toString());

			logger.info("SaveAns URL :" + SaveAnsurL.toString());

			HttpURLConnection SaveAnsconn = (HttpURLConnection) SaveAnsurL.openConnection();
			SaveAnsconn.setRequestMethod("POST");
			SaveAnsconn.setRequestProperty("Accept", "application/json");

			logger.info("SaveAns Response Code :" + SaveAnsconn.getResponseCode());

			if (SaveAnsconn.getResponseCode() != 200) {
				throw new RuntimeException("Failed : HTTP error code : " + SaveAnsconn.getResponseCode());
			}

			BufferedReader SaveAnsbr = new BufferedReader(new InputStreamReader((SaveAnsconn.getInputStream())));
			String output;
			while ((output = SaveAnsbr.readLine()) != null) {

				Object objec = JSONValue.parse(output);
				SaveAnsResponseJson = (JSONObject) objec;

				String SaveAnsSendData = SaveAnsResponseJson.toJSONString();
				objec = JSONValue.parse(SaveAnsSendData);
				SaveAnsResponseJson = (JSONObject) objec;
//				 stat = (String) SaveAnsResponseJson.get(userInfo.getStat());
				 Result = (String) SaveAnsResponseJson.get("Result");
				 Emsg = (String) SaveAnsResponseJson.get("Emsg");
			}
			
			logger.info("SaveAns Response Value :" + SaveAnsResponseJson);
			SaveAnsconn.disconnect();

		} catch (Exception e) {
			message = "we could not connect our server";
			SaveAnswerResponse.put("message", message);
			SaveAnswerResponse.put("stat", "Not_Ok");		
			return new ResponseEntity<>(SaveAnswerResponse, HttpStatus.INTERNAL_SERVER_ERROR);
		}
		stat=(String) SaveAnsResponseJson.get("stat");
		
		logger.info("SaveAns Response stat : "+stat);
		
		if (stat.equals("Ok")) {
			message = Result;
			SaveAnswerResponse.put("message", message);

			SaveAnswer SaveAnsobj = new SaveAnswer();
			for (SaveAnswer saveAnswerList : saveAnswer) {

				indexId = saveAnswerList.getIndexid();
				questions = saveAnswerList.getQuestions();
				answers = saveAnswerList.getAnswers();
				clientId = saveAnswerList.getClientid().toUpperCase();

				// ==== Saving Question ANd Answer with Index On Database: START=======

				SaveAnsobj.setIndexid(indexId);
				SaveAnsobj.setQuestions(questions);
				SaveAnsobj.setAnswers(answers);
				SaveAnsobj.setClientid(clientId.toUpperCase());
				List<SaveAnswer> saveAnswerwithQuestionIndex = saveAnswerImpl.SaveAnswerwithQuestionIndex(SaveAnsobj);

				// ==== Saving Question ANd Answer with Index On Database: END=======

			}

		} else if (stat.equals("Not_Ok")) {
			message = Emsg;
			SaveAnswerResponse.put("message", message);
		}
		return ResponseEntity.ok().body(SaveAnswerResponse);

	}

	// ===START 2FA - Answers from database values ======

	public List<Object> Save2FAQuestionAnswersAPI(String scount, String sIndex, String save2faAnswers, String clientid,
			HttpServletRequest request, HttpServletResponse response)
			throws UnsupportedEncodingException, NoSuchAlgorithmException {

		List<Object> Save2FAanswerResponse = new ArrayList<Object>();
		
		
		String 	stat=null,tdata=null,Message=null,message=null,sLastAccessInSec=null,sPasswordReset=null;
		String sUserToken=null,UserSessionID=null,loginid=null,loginMessage=null;
		List<String> AnswerValidationList = null;
		
		 
		 String publickey3=null,TomcatCount=null;
			
			for ( Map.Entry<String, UserInfo> entry : Loginmap.entrySet()) {
				
				String key = entry.getKey();
			    UserInfo tab = entry.getValue();
			    // do something with key and/or tab
			    
			    //System.out.println("Save2FAQuestionAnswersAPI : "+key + ": " + tab.getTomcatCount());
			    
			    publickey3=tab.getPublickey3();
			    TomcatCount=tab.getTomcatCount();
			    scount=tab.getScount();
			    save2faAnswers=tab.getSave2faAnswers();
			    sIndex=tab.getsIndex();
			}
			
				logger.info(" Save2FAQuestionAnswersAPI  clientId :"+clientid+" scount: "+scount+" save2faAnswers : "+save2faAnswers+" sIndex : "+sIndex);
			
			
		 

		String jKey = CommonFunction.hashData(publickey3);

		JSONObject ValidAnsInputJson = new JSONObject();
		JSONObject AnswerValidationJson = new JSONObject();

		ValidAnsInputJson.put("uid", clientid);
		ValidAnsInputJson.put("Count", scount); // Count as defined from ValidPwd response value scount
		ValidAnsInputJson.put("as", save2faAnswers);
		ValidAnsInputJson.put("is", sIndex.replace('|', '-'));

		String ValidAnsInputJdata = ValidAnsInputJson.toJSONString();

		try {
			StringBuffer ValidAns = new StringBuffer(marketwatchProvider.getValidAnsurl());
			ValidAns.append("jsessionid=" + "." + TomcatCount + "&jData=" + ValidAnsInputJdata + "&jKey=" + jKey + "");

			URL ValidAnsurl = new URL(ValidAns.toString());			
			
			logger.info("mobile ValidAns URL : "+ValidAnsurl.toString());
			
			HttpURLConnection ValidAnsconn = (HttpURLConnection) ValidAnsurl.openConnection();
			ValidAnsconn.setRequestMethod("POST");
			ValidAnsconn.setRequestProperty("Accept", "application/json");
			
			logger.info("mobile ValidAns Response Code: "+ValidAnsconn.getResponseCode());
			
			if (ValidAnsconn.getResponseCode() != 200) {
				throw new RuntimeException("Failed : HTTP error code : " + ValidAnsconn.getResponseCode());
			}

			BufferedReader br3 = new BufferedReader(new InputStreamReader((ValidAnsconn.getInputStream())));
			String output=null;
			while ((output = br3.readLine()) != null) {

				Object objec = JSONValue.parse(output);
				AnswerValidationJson = (JSONObject) objec;

				String SendData = AnswerValidationJson.toJSONString();
				objec = JSONValue.parse(SendData);
				AnswerValidationJson = (JSONObject) objec;

				stat = (String) AnswerValidationJson.get("stat");
				tdata = (String) AnswerValidationJson.get("tdata");
				Message = (String) AnswerValidationJson.get("Message");
				sLastAccessInSec = (String) AnswerValidationJson.get("sLastAccessInSec");
				sPasswordReset = (String) AnswerValidationJson.get("sPasswordReset");
				sUserToken = (String) AnswerValidationJson.get("sUserToken");// public-key 4
				UserSessionID = (String) AnswerValidationJson.get("UserSessionID");
				loginid = (String) AnswerValidationJson.get("loginid");
				loginMessage = (String) AnswerValidationJson.get("loginMessage");

			}

			ValidAnsconn.disconnect();
			
			logger.info("mobile ValidAns Response Value : "+AnswerValidationJson);
			
			/*logger.info("mobile ValidAnsurl Response   stat : " + stat + " Message : " + Message + " loginid : "
					+ loginid + " loginMessage : " + loginMessage + " sPasswordReset : " + sPasswordReset);*/

		} catch (Exception e) {
			
				message = "we could not connect our server";
				stat="Not_Ok";
				Save2FAanswerResponse.add(stat);
				Save2FAanswerResponse.add( message);				
				
			}

		
		if (stat.equals("Ok") && loginMessage == null || Message == null) {

			message = "Invalid Answers";
			Save2FAanswerResponse.add(stat);
			Save2FAanswerResponse.add(Message);
		} else if (stat.equals("Ok")) {

			/* Save2FAanswerResponse.put(message, message); */

			Save2FAanswerResponse.add(stat);
			Save2FAanswerResponse.add(tdata);
			Save2FAanswerResponse.add(Message);
			Save2FAanswerResponse.add(sLastAccessInSec);
			Save2FAanswerResponse.add(sPasswordReset);
			Save2FAanswerResponse.add(sUserToken);
			Save2FAanswerResponse.add(UserSessionID);
			Save2FAanswerResponse.add(sPasswordReset);
			Save2FAanswerResponse.add(loginid);
			Save2FAanswerResponse.add(loginMessage);

		}

		else if (stat.equals("Not_Ok")) {
			Save2FAanswerResponse.add(stat);
			Save2FAanswerResponse.add(Message);
		}

		return Save2FAanswerResponse;

	}

	// ========END 2FA - Answers from database values ============================

	// ========== SATRT - get-2FA Answers based on IndexId -==================

	public String get2FAanswerfromdbByIndexId(String sIndex, String clientid) {

		String[] strArray = sIndex.split(Pattern.quote("|"));
		String AnswerbyIndex = null;
		Integer index1 = null, index2 = null;
		Object Answer1 = null, Answer2 = null;

		for (int i = 0; i < strArray.length; i++) {
			index1 = Integer.parseInt(strArray[0]);
			index2 = Integer.parseInt(strArray[1]);
		}
		
		
		List<SaveAnswer> AnswerwithIndex1 = saveAnswerImpl.getAnswerByIndex1(index1, clientid.toUpperCase());

		List<SaveAnswer> AnswerwithIndex2 = saveAnswerImpl.getAnswerByIndex2(index2, clientid.toUpperCase());
		
		if(AnswerwithIndex1.size()==0 ||AnswerwithIndex2.size()==0) {
			AnswerbyIndex="0";
		}
		else {
		Answer1 = AnswerwithIndex1.get(0);
		Answer2 = AnswerwithIndex2.get(0);
		AnswerbyIndex = Answer1 + "-" + Answer2;
		}
		
		
		return AnswerbyIndex;
	}

	// ========== END - get-2FA Answers based on IndexId -==================

	// ============= Set Password START ============================

	// Implementation of the Reset Password API document book-mark 4.25
	// [SetPassword]
	@RequestMapping(value = "/NewPassword", method = RequestMethod.POST)
	public ResponseEntity<JSONObject> NewPaawordLogin(HttpServletRequest request, HttpServletResponse response,
			@RequestBody Client client) {

		JSONObject passwordResetMessage = new JSONObject();
		
		String message = "";
		String publickey3=null,TomcatCount=null;	
		
		try {
			String clientId=client.getClientid().toUpperCase();
			
		for ( Map.Entry<String, UserInfo> entry : Loginmap.entrySet()) {
			
			String key = entry.getKey();
		    UserInfo tab = entry.getValue();
		    // do something with key and/or tab		    
		   // System.out.println("LimitsPage : "+key + ": " + tab.getTomcatCount());
		    
		    publickey3=tab.getPublickey3();
		    TomcatCount=tab.getTomcatCount();
		}
		
		logger.info(" NewPassword clientId : " +clientId.toUpperCase());
		

		List<Client> clientidlist = clientImpl.verifyClientId(client.getClientid().toUpperCase());

		if (clientidlist.size() > 0) {
			List<Client> updateTpinPasswordclientidlist = clientImpl
					.UpdatePasswordAndTpinByClientId(client.getClientid().toUpperCase(), client.getPassword(), client.getTpin());

			if (updateTpinPasswordclientidlist.size() > 0) {
				
				
				String password = updateTpinPasswordclientidlist.get(0).getPassword();

				// API call for 4.25 SetPassword
				List<Object> setPassword = setPasswordforUser(client.getClientid().toUpperCase(), password, TomcatCount, request,
						response);
						
						
				 message=setPassword.get(0).toString();
				String  stat=setPassword.get(1).toString();
				
				System.out.println("message : "+message+" stat : "+stat);
			
				 if(stat=="Ok") {
				
				message = "Your New Password and Tpin Saved Successfully";
				passwordResetMessage.put("message", message);
				passwordResetMessage.put("stat", "Ok");
				}
				else if(stat=="Not_Ok"){
					passwordResetMessage.put("message", message);
					passwordResetMessage.put("stat", "Not_Ok");
				}

			} else if (updateTpinPasswordclientidlist.size() == 0) {
				message = "Your New Password and Tpin Not Saved";
				passwordResetMessage.put("message", message);
				passwordResetMessage.put("stat", "Not_Ok");
			}
		} else if (clientidlist.size() == 0) {

			List<Client> list = clientImpl.loginVerifyUpdate(client.getClientid().toUpperCase(), client.getPassword(),
					client.getTpin());

			if (list.size() > 0) {
				message = "Your New Password and Tpin Saved Successfully";
				passwordResetMessage.put("message", message);
				passwordResetMessage.put("stat", "Ok");

				String password = list.get(0).getPassword();
				// API call for 4.25 SetPassword
				List<Object> setPassword = setPasswordforUser(client.getClientid().toUpperCase(), password, TomcatCount, request,
						response);

			} else if (list.size() == 0) {
				message = "Your New Password and Tpin Not Saved";
				passwordResetMessage.put("message", message);
				passwordResetMessage.put("stat", "Not_Ok");
			}

		}
		}
		catch (Exception e){			
			message = "we could not connect our server";
			passwordResetMessage.put("message", message);
			passwordResetMessage.put("stat", "Not_Ok");
			return new ResponseEntity<>(passwordResetMessage, HttpStatus.INTERNAL_SERVER_ERROR);
		}

		return ResponseEntity.ok().body(passwordResetMessage);

	}

	// Password Reset API Implementation 4.25
	public List<Object> setPasswordforUser(String clientid, String password, String tomcatCount,
			HttpServletRequest request, HttpServletResponse response) {

		List<Object> setPasswordforUserResponse = new ArrayList<Object>();

		HttpSession session = request.getSession();
		
		String stat=null,message=null,emsg=null;
		
		JSONObject SetPasswordInputJson = new JSONObject();
		JSONObject SetPasswordJson = new JSONObject();

		try {
			String pwd = password;
			// String pwd = "abc123";
			pwd = CommonFunction.hashDataPasswordIteration(pwd);

			SetPasswordInputJson.put("uid", clientid.toUpperCase());
			SetPasswordInputJson.put("password", pwd);

			String SetPasswordInputJdata = SetPasswordInputJson.toJSONString();

			String jKey = CommonFunction.hashData("");

			StringBuffer SetPasswordsb = new StringBuffer(marketwatchProvider.getSetPasswordurl());
			SetPasswordsb.append(
					"jsessionid=" + "." + tomcatCount + "&jData=" + SetPasswordInputJdata + "&jKey=" + jKey + "");

			URL SetPasswordURL = new URL(SetPasswordsb.toString());

			logger.info("SetPassword Request URL :  " + SetPasswordURL.toString());

			HttpURLConnection SetPasswordconn = (HttpURLConnection) SetPasswordURL.openConnection();
			SetPasswordconn.setRequestMethod("POST");
			SetPasswordconn.setRequestProperty("Accept", "application/json");

			logger.info("SetPassword Response Code :  " + SetPasswordconn.getResponseCode());

			if (SetPasswordconn.getResponseCode() != 200) {
				throw new RuntimeException("Failed : HTTP error code : " + SetPasswordconn.getResponseCode());
			}
			BufferedReader br3 = new BufferedReader(new InputStreamReader((SetPasswordconn.getInputStream())));
			String output=null;
			while ((output = br3.readLine()) != null) {

				Object objec = JSONValue.parse(output);
				SetPasswordJson = (JSONObject) objec;

				String SendData = SetPasswordJson.toJSONString();
				objec = JSONValue.parse(SendData);
				SetPasswordJson = (JSONObject) objec;
			}

			logger.info(" SetPassword Response Value  : " + SetPasswordJson);
			
			String SetPasswordstat=SetPasswordJson.get(stat).toString();
			
			logger.info("stat : " + SetPasswordstat + " emsg: " + SetPasswordJson.get(emsg));
			
			if (SetPasswordstat .equals( "Ok")){
				message = SetPasswordJson.get(message).toString();
			} else if (SetPasswordstat.equals( "Not_Ok")) {
				message = SetPasswordJson.get(emsg).toString();

			}

			setPasswordforUserResponse.add(stat);
			setPasswordforUserResponse.add(message);

			SetPasswordconn.disconnect();

		} catch (Exception e) {
			message = "we could not connect our server";
			stat="Not_Ok";
			setPasswordforUserResponse.add( message);
			setPasswordforUserResponse.add(stat);
		
		}

		return setPasswordforUserResponse;
	}

	// ============= Set Password END ============================

	// ========== Change Password START ===================

	// Implementation of the Change Password API document book-mark 4.12 [Changepwd]
	@RequestMapping(value = "/mobileChangepassword", method = RequestMethod.POST)
	public ResponseEntity<JSONObject> getChangePasswordByUserId(HttpServletRequest request,
			HttpServletResponse response, @RequestBody ChangePassword changePassword) {

		String changepassSendData = "";

		JSONObject ChangepwdInputJson = new JSONObject();
		JSONObject ChangepwdOutputJson = new JSONObject();
		
		

		String stat=null,Pstatus=null;

		String clientid = changePassword.getClientid();
		String oldpassword = changePassword.getOldPassword();
		String newpassword = changePassword.getNewPassword();
		String sTxFlag = changePassword.getsTxFlag();
		
		String PublicKey3=null,TomcatCount=null;
		
		for ( Map.Entry<String, UserInfo> entry : Loginmap.entrySet()) {
			
			String key = entry.getKey();
		    UserInfo tab = entry.getValue();
		    // do something with key and/or tab
		    
		  //  System.out.println("Placeorder : "+key + ": " + tab.getTomcatCount());
		    
		    PublicKey3=tab.getPublickey3();
		    TomcatCount=tab.getTomcatCount();
		}
		
		System.out.println(" changePassword PublicKey3 : " +PublicKey3+"  TomcatCount : "+TomcatCount);
		

		logger.info("Changepwd By UserId");

		/*
		 * YES/NO YES-> it will change both transaction and login password NO -> it will
		 * change only login password. In case if you want only login password to change
		 * send sTxFlag as "NO" and sOldTPwd and sNewTPwd as blank strings
		 * 
		 */
		ChangepwdInputJson.put("uid", clientid.toUpperCase());
		ChangepwdInputJson.put("sOldPwd", oldpassword);
		ChangepwdInputJson.put("sNewPwd", newpassword);
		ChangepwdInputJson.put("sTxFlag", sTxFlag);

		try {

			String ChangepwdInputJdata = ChangepwdInputJson.toJSONString();

			String jKey = CommonFunction.hashData(PublicKey3);

			StringBuffer Changepwd = new StringBuffer(marketwatchProvider.getChangepwdurl());
			Changepwd
					.append("jsessionid=" + "." + TomcatCount + "&jData=" + ChangepwdInputJdata + "&jKey=" + jKey + "");

			URL ChangepwdURL = new URL(Changepwd.toString());
			HttpURLConnection Changepwdconn = (HttpURLConnection) ChangepwdURL.openConnection();
			Changepwdconn.setRequestMethod("POST");
			Changepwdconn.setRequestProperty("Accept", "application/json");

			if (Changepwdconn.getResponseCode() != 200) {

				throw new RuntimeException("Failed : HTTP error code : " + Changepwdconn.getResponseCode());
			}
			BufferedReader br3 = new BufferedReader(new InputStreamReader((Changepwdconn.getInputStream())));

			String output;
			while ((output = br3.readLine()) != null) {

				Object objec = JSONValue.parse(output);
				ChangepwdOutputJson = (JSONObject) objec;
				}
			logger.info("ChangePassword Response : " + ChangepwdOutputJson);

			//System.out.println("stat : " + ChangepwdOutputJson.get(stat) + " Emsg: " + ChangepwdOutputJson.get(Emsg));

			
			if (stat == "Ok" || Pstatus == "Success") {
				// message=ChangepwdOutputJson.get(Result).toString();

				List<Client> updatePasswordclientid = clientImpl.UpdatePasswordByClientId(changePassword.getClientid(),
						changePassword.getNewPassword());

			} else if (stat == "Not_Ok") {
				// message=ChangepwdOutputJson.get(Emsg).toString();

			}

			Changepwdconn.disconnect();

		} catch (Exception e) {
			String message = "we could not connect our server";			
			ChangepwdOutputJson.put("message", message);
			ChangepwdOutputJson.put("stat", "Not_Ok");
			return new ResponseEntity<>(ChangepwdOutputJson, HttpStatus.INTERNAL_SERVER_ERROR);
		}

		return ResponseEntity.ok().body(ChangepwdOutputJson);
	}

	// ============ ChangePassword END =================

	@RequestMapping(value = "/FingerPrintloginverify", method = RequestMethod.POST)
	public ResponseEntity<JSONObject> getFingerPrintlogin(HttpServletRequest request, HttpServletResponse response,
			@RequestBody Client client) throws UnsupportedEncodingException, NoSuchAlgorithmException {
		
		

		
		String clientIdBymap=null,Publickey3=null,PubKey3=null,eJdata=null,PublicKey3jKey=null,TomcatCount=null,jsessionID=null;
		
		
		
		JSONObject FingerPrintloginMessage = new JSONObject();

		String clientid = client.getClientid().toUpperCase();

		Integer fingerprint = client.getFingerprintid();
		
		String Save2faAnswers=null,password=null,pubKey3=null,stat=null,tdata=null,scount=null,ResetFlag=null,sQuestions=null,sIndex=null,Message=null;
		
		String validpasswordInputjKey=null,sLastAccessInSec=null,sPasswordReset=null,sUserToken=null,UserSessionID=null,loginid=null,loginMessage=null;
				
		try {
			
		for ( Map.Entry<String, UserInfo> entry : Loginmap.entrySet()) {
			
			String key = entry.getKey();
		    UserInfo tab = entry.getValue();
		    // do something with key and/or tab
		    
		   // System.out.println(key + ": " + tab.getTomcatCount());
		    
		    Publickey3=tab.getPublickey3();
		    PubKey3=tab.getPubKey3();
		    eJdata=tab.geteJdata();
		    PublicKey3jKey=tab.getPublicKey3jKey();
		    TomcatCount=tab.getTomcatCount();
		    clientIdBymap=tab.getClientid();
		    jsessionID=tab.getJsessionId();
		    password=tab.getPassword();
		    validpasswordInputjKey=tab.getValidpasswordInputjKey();
		}
		
		logger.info("FingerPrintloginverify clientid : " +clientIdBymap);
		
		
		List<Client> SecondList = clientImpl.FingerPrintloginverify(clientIdBymap, fingerprint);
		 
		String message = "";
		if (SecondList.size() > 0) {

			if (SecondList.get(0).getFingerprintid().equals(client.getFingerprintid())) {
												
				// The API document book-mark ValidAnswers 04.01(ValidPwd)
				 /*authenticatePassword = logincontroller.getauthenticatePassword(Publickey3, PubKey3, eJdata, PublicKey3jKey,
						 TomcatCount, request, response);*/
				 
				 

					// The API document book-mark ValidAnswers 04.01(ValidPwd)
					List<Object> authenticatePassword = logincontroller.getauthenticatePassword(clientid,password,validpasswordInputjKey,TomcatCount,
							request, response);

				stat = authenticatePassword.get(0).toString();
				tdata = authenticatePassword.get(1).toString();
				scount = authenticatePassword.get(2).toString();
				ResetFlag = authenticatePassword.get(3).toString();
				sQuestions = authenticatePassword.get(4).toString();
				sIndex = authenticatePassword.get(5).toString();
				
				
				logger.info("After ValidAnswers /  stat : "+stat+" tdata : "+tdata+" scount : "+scount); 
				UserInfo userInfo = Loginmap.get(client.getClientid());	
				userInfo.setStat(stat);
				userInfo.setTdata(tdata);
				userInfo.setScount(scount);
				userInfo.setsQuestions(sQuestions);
				userInfo.setsIndex(sIndex);	
				
				Loginmap.put(clientIdBymap.toUpperCase(),userInfo);

				
				for ( Map.Entry<String, UserInfo> entry : Loginmap.entrySet()) {
					
					String key = entry.getKey();
				    UserInfo tab = entry.getValue();
				    // do something with key and/or tab
				    
				   // System.out.println(key + ": " + tab.getTomcatCount());
				    
				    scount=tab.getScount();
				    sIndex=tab.getsIndex();
				    Save2faAnswers=tab.getSave2faAnswers();
				    clientIdBymap=tab.getClientid();
				    stat=tab.getStat();
				}
				
				logger.info("FingerPrintloginverify clientid : " +clientid+" stat :"+stat+" scount : "+scount+" Save2faAnswers : "+Save2faAnswers+" clientIdBymap : "+clientIdBymap);
				
				
				if (stat == "Not_Ok" || tdata == null) {
					FingerPrintloginMessage.put("stat", stat);
					FingerPrintloginMessage.put("Message", Message);
				}
				
				
				
				if (tdata.equals(marketwatchProvider.getAnswertheQuestion())) {
					
					logger.info("fingerprint AnswertheQuestion  sIndex: "+sIndex+" client : "+clientIdBymap.toUpperCase());

					Save2faAnswers = get2FAanswerfromdbByIndexId(sIndex, clientIdBymap.toUpperCase());
					
					if(stat=="Ok" || Save2faAnswers=="0") {
						message="Please check your Admin your 2FA-Answers not Available!.";
						FingerPrintloginMessage.put("message", message);
						FingerPrintloginMessage.put("stat", "Not_Ok");
					}
					
				}
				
				userInfo.setSave2faAnswers(Save2faAnswers);
				
				Loginmap.put(clientIdBymap.toUpperCase(),userInfo);
				
				for ( Map.Entry<String, UserInfo> entry : Loginmap.entrySet()) {
					
					String key = entry.getKey();
				    UserInfo tab = entry.getValue();
				    // do something with key and/or tab
				    
				   // System.out.println(key + ": " + tab.getTomcatCount());
				    
				    scount=tab.getScount();
				    sIndex=tab.getsIndex();
				    Save2faAnswers=tab.getSave2faAnswers();
				    clientIdBymap=tab.getClientid();
				}
				
				System.out.println("before Save2FAQuestionAnswersAPI / scount: "+scount+" sIndex : "+sIndex+" Save2faAnswers : "+Save2faAnswers); 
				
				Save2FAQuestionAnswers = Save2FAQuestionAnswersAPI(scount, sIndex, Save2faAnswers,clientIdBymap.toUpperCase(), request,
						response);

				stat = Save2FAQuestionAnswers.get(0).toString();
				tdata = Save2FAQuestionAnswers.get(1).toString();
				Message = Save2FAQuestionAnswers.get(2).toString();
				sLastAccessInSec = Save2FAQuestionAnswers.get(3).toString();
				sPasswordReset = Save2FAQuestionAnswers.get(4).toString();
				sUserToken = Save2FAQuestionAnswers.get(5).toString();
				UserSessionID = Save2FAQuestionAnswers.get(6).toString();
				sPasswordReset = Save2FAQuestionAnswers.get(7).toString();
				loginid = Save2FAQuestionAnswers.get(8).toString();
				loginMessage = Save2FAQuestionAnswers.get(9).toString();

				if (stat == "Not_Ok" || tdata == null) {
					FingerPrintloginMessage.put("stat", stat);
					FingerPrintloginMessage.put("Message", Message);
				}

				FingerPrintloginMessage.put("stat", stat);
				FingerPrintloginMessage.put("Message", Message);
				FingerPrintloginMessage.put("sLastAccessInSec", sLastAccessInSec);
				FingerPrintloginMessage.put("sUserToken", sUserToken);
				FingerPrintloginMessage.put("UserSessionID", UserSessionID);
				FingerPrintloginMessage.put("sPasswordReset", sPasswordReset);
				FingerPrintloginMessage.put("loginid", loginid);
				FingerPrintloginMessage.put("loginMessage", loginMessage);
								
				
				
				userInfo.setStat(stat);
				userInfo.setTdata(tdata);
				userInfo.setPublicKey4(sUserToken);	
				Loginmap.put(clientIdBymap.toUpperCase(),userInfo);
				
				
				logger.info(" Finger print : clientid : "+userInfo.getClientid());
				
			}

		} else if (SecondList.size() == 0) {
			message = "Enter Valid Fingerprint";
			FingerPrintloginMessage.put("message", message);
			FingerPrintloginMessage.put("stat", "Not_Ok");
		}
		}
		catch (Exception e) {		
				
				String message = "we could not connect our server";			
				FingerPrintloginMessage.put("message", message);
				FingerPrintloginMessage.put("stat", "Not_Ok");
				return new ResponseEntity<>(FingerPrintloginMessage, HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return ResponseEntity.ok().body(FingerPrintloginMessage);

	}

	/*
	 * Second time onwards we need to collect t-pin from customer to validate and
	 * send the user id and password which we stored in our DB to Omnesys server.
	 * 
	 */

	@RequestMapping(value = "/SecondTimeloginverify", method = RequestMethod.POST)
	public ResponseEntity<JSONObject> getSecondTimeLogin(HttpServletRequest request, HttpServletResponse response,
			@RequestBody Client client) throws UnsupportedEncodingException, NoSuchAlgorithmException {
		
		
		
		
		JSONObject loginverifyMessage = new JSONObject();
		
		String clientIdBymap=null,Publickey3=null,password=null;
		String PubKey3=null,validpasswordInputjKey=null,eJdata=null,PublicKey3jKey=null,pubKey3=null,TomcatCount=null,jsessionID=null;
	
		
		try {
			UserInfo userInfo = Loginmap.get(client.getClientid());	
			userInfo.setClientid(client.getClientid()); 
			for ( Map.Entry<String, UserInfo> entry : Loginmap.entrySet()) {
			
			String key = entry.getKey();
		    UserInfo tab = entry.getValue();
		    // do something with key and/or tab
		    
		   // System.out.println(key + ": " + tab.getTomcatCount());
		    
		    Publickey3=tab.getPublickey3();
		    PubKey3=tab.getPubKey3();
		    eJdata=tab.geteJdata();
		    PublicKey3jKey=tab.getPublicKey3jKey();
		    TomcatCount=tab.getTomcatCount();
		    clientIdBymap=tab.getClientid();
		    jsessionID=tab.getJsessionId();
		    password=tab.getPassword();
		    validpasswordInputjKey=tab.getValidpasswordInputjKey();
		}
		
		
		List<Client> TpinList = null;
		String clientid = client.getClientid().toUpperCase();
		String tpin = client.getTpin();
		
		
		String stat=null,tdata=null,scount=null,ResetFlag=null,sQuestions=null,sIndex=null,Message=null;
		
		String sLastAccessInSec=null,sPasswordReset=null,sUserToken=null,UserSessionID=null,loginid=null,loginMessage=null;
		
		// Secondtime Logion checking
		TpinList = clientImpl.SecondTimeloginVerify(clientIdBymap.toUpperCase(), tpin); 
		
		
							
				
		
		String message = "";
		if (TpinList.size() > 0) {

			if (TpinList.get(0).getTpin().equals(client.getTpin())) {
				
									
				// The API document book-mark ValidAnswers 04.01(ValidPwd)
				/* authenticatePassword = logincontroller.getauthenticatePassword(Publickey3, PubKey3, eJdata, PublicKey3jKey,
						 TomcatCount, request, response);*/

				

				// The API document book-mark ValidAnswers 04.01(ValidPwd)
				List<Object> authenticatePassword = logincontroller.getauthenticatePassword(clientid,password,validpasswordInputjKey,TomcatCount,
						request, response);
				
				stat = authenticatePassword.get(0).toString();
				tdata = authenticatePassword.get(1).toString();
				scount = authenticatePassword.get(2).toString();
				ResetFlag = authenticatePassword.get(3).toString();
				sQuestions = authenticatePassword.get(4).toString();
				sIndex = authenticatePassword.get(5).toString();
				
				
				String Save2faAnswers=null;
				
				if (stat == "Not_Ok" || tdata == null) {
					loginverifyMessage.put("stat", stat);
					loginverifyMessage.put("Message", Message);
				}
				
				else if (tdata.equals(marketwatchProvider.getAnswertheQuestion())) {

					 Save2faAnswers = get2FAanswerfromdbByIndexId(sIndex, client.getClientid().toUpperCase());
					
					Save2faAnswers = get2FAanswerfromdbByIndexId(sIndex, client.getClientid().toUpperCase());
					
					if(stat=="Ok" || Save2faAnswers=="0") {
						
						message="Please check your Admin your 2FA-Answers not Available!.";
						loginverifyMessage.put("message", message);
						loginverifyMessage.put("stat", "Not_Ok");
					}

				}
				
				
				userInfo.setStat(stat);
				userInfo.setTdata(tdata);
				userInfo.setScount(scount);
				userInfo.setsQuestions(sQuestions);
				userInfo.setsIndex(sIndex);	
				
				userInfo.setSave2faAnswers(Save2faAnswers);
				
				Loginmap.put(clientIdBymap.toUpperCase(),userInfo);
				
				
				
				
				
				
				for ( Map.Entry<String, UserInfo> entry : Loginmap.entrySet()) {
					
					String key = entry.getKey();
				    UserInfo tab = entry.getValue();
				    // do something with key and/or tab
				    
				   // System.out.println(key + ": " + tab.getTomcatCount());
				    
				    scount=tab.getScount();
				    sIndex=tab.getsIndex();
				    Save2faAnswers=tab.getSave2faAnswers();
				    clientIdBymap=tab.getClientid();
				}
				
				logger.info("FingerPrintloginverify clientid : " +clientid);
				

				Save2FAQuestionAnswers = Save2FAQuestionAnswersAPI(scount, sIndex, Save2faAnswers,clientIdBymap.toUpperCase(), request,
						response);
				

				stat = Save2FAQuestionAnswers.get(0).toString();
				tdata = Save2FAQuestionAnswers.get(1).toString();
				Message = Save2FAQuestionAnswers.get(2).toString();
				sLastAccessInSec = Save2FAQuestionAnswers.get(3).toString();
				sPasswordReset = Save2FAQuestionAnswers.get(4).toString();
				sUserToken = Save2FAQuestionAnswers.get(5).toString();
				UserSessionID = Save2FAQuestionAnswers.get(6).toString();
				// sPasswordReset= Save2FAQuestionAnswers.get(7).toString();
				loginid = Save2FAQuestionAnswers.get(8).toString();
				loginMessage = Save2FAQuestionAnswers.get(9).toString();

				if (stat == "Not_Ok" || tdata == null) {
					loginverifyMessage.put("stat", stat);
					loginverifyMessage.put("Message", Message);
				}

				loginverifyMessage.put("stat", stat);
				loginverifyMessage.put("Message", Message);
				loginverifyMessage.put("sLastAccessInSec", sLastAccessInSec);
				loginverifyMessage.put("sUserToken", sUserToken);
				loginverifyMessage.put("UserSessionID", UserSessionID);
				loginverifyMessage.put("sPasswordReset", sPasswordReset);
				loginverifyMessage.put("loginid", loginid);
				loginverifyMessage.put("loginMessage", loginMessage);

				userInfo.setStat(stat);
				userInfo.setTdata(tdata);				
				userInfo.setPublicKey4(sUserToken);	
				Loginmap.put(clientIdBymap.toUpperCase(),userInfo);
				
				logger.info("SecondTimeloginverify  clientid : "+ userInfo.getClientid());
				
			
			}

		} else if (TpinList.size() == 0) {
			message = "Enter Valid Password and Tpin";
			loginverifyMessage.put("message", message);
			loginverifyMessage.put("stat", "Not_Ok");
		}
		}
		catch (Exception e) {		
			//response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
			String message = "we could not connect our server";			
			loginverifyMessage.put("message", message);
			loginverifyMessage.put("stat", "Not_Ok");
			return new ResponseEntity<>(loginverifyMessage, HttpStatus.INTERNAL_SERVER_ERROR);
		}

		return ResponseEntity.ok().body(loginverifyMessage);
	}
	
	
	
	@RequestMapping(value = "/loginMechanismTwo", method = RequestMethod.POST)
	public ResponseEntity<JSONObject> loginMechanismTwo(@RequestBody OtpMobile otpmobile, HttpServletRequest request,
			HttpServletResponse response) {

		JSONObject loginMechanismTwoouputJSON = new JSONObject();

		JSONObject loginMechanismTwoInput = new JSONObject();
		
		try {
				String userinputphn = otpmobile.getPhonenumber();
				String userinputemail = otpmobile.getEmailid();
				String clientId=null;
				String mode = otpmobile.getMode();
				
				String loginMechanismTwoSendData = "";					
				
				
				List<OtpMobile> ClientIdbyEmailorSMS=otpImpl.getClientIdbyEmailOrSMS(userinputphn,userinputemail,mode);
				
				if(ClientIdbyEmailorSMS.size()>0) {
				
					clientId=ClientIdbyEmailorSMS.get(0).getClientid();	
				if (mode.equals("SMS")) {
							
					ResponseEntity<JSONObject> LoginMechanismTwoBySMS = LoginMechanismTwoBySMSVerify(clientId, mode, userinputphn);
				} 
				else if (mode.equals("Email")) {
								
					ResponseEntity<JSONObject> LoginMechanismTwoByEmail = LoginMechanismTwoByEmailVerify(clientId, mode,userinputemail);
				}
				loginMechanismTwoInput.put("Message", "OTP Sent Successfully");
				loginMechanismTwoInput.put("ClientCode",clientId);
				loginMechanismTwoInput.put("stat", "Ok");
			
				}
			else {
				loginMechanismTwoInput.put("Message", "Your emailid Or Phonenumber is Incorrect");
				loginMechanismTwoInput.put("stat", "Not_Ok");
			}
		}
		
			catch (Exception e) {
					
					String message = "we could not connect our server";			
					loginMechanismTwoInput.put("message", message);
					loginMechanismTwoInput.put("stat", "Not_Ok");
					return new ResponseEntity<>(loginMechanismTwoInput, HttpStatus.INTERNAL_SERVER_ERROR);
				}
		
		return ResponseEntity.ok().body(loginMechanismTwoInput);
		}

		
	
	
	
	

	private ResponseEntity<JSONObject> LoginMechanismTwoBySMSVerify(String clientid, String mode, String userinput) {

		JSONObject mobileOTPResponse = new JSONObject();
		
		try {
			
			String cellAddr = userinput;
				JSONObject OTPNumberfromPhone = oTPUtil.SendOtpMobilePage(cellAddr);
		
				String otpNumber = (String) OTPNumberfromPhone.get("OTP");
				String message = (String) OTPNumberfromPhone.get("outputmessage");
		
				// update OTP for Corresponding User.
				otpImpl.OTpUpdateonMobile(clientid, otpNumber, cellAddr, mode);
				
			}
			catch (Exception e) {
				
				String message = "we could not connect our server";			
				mobileOTPResponse.put("message", message);
				mobileOTPResponse.put("stat", "Not_Ok");
				return new ResponseEntity<>(mobileOTPResponse, HttpStatus.INTERNAL_SERVER_ERROR);
			}

		return ResponseEntity.ok().body(mobileOTPResponse);
	}

	private ResponseEntity<JSONObject> LoginMechanismTwoByEmailVerify(String clientid, String mode, String email) {

				JSONObject EamilOTPResponse = new JSONObject();
				String EmailIdTag = email;
				try {
				JSONObject OTPNumberfromEmail = oTPUtil.SendOtpEmailPage(clientid, EmailIdTag);
		
				String otpNumber = (String) OTPNumberfromEmail.get("OTP");
				String message = (String) OTPNumberfromEmail.get("outputmessage");
		
				otpImpl.OTpUpdateonEmail(clientid, otpNumber, EmailIdTag, mode);
		
				}catch (Exception e) {				
					String message = "we could not connect our server";			
					EamilOTPResponse.put("message", message);
					EamilOTPResponse.put("stat", "Not_Ok");
					return new ResponseEntity<>(EamilOTPResponse, HttpStatus.INTERNAL_SERVER_ERROR);
				}
				return ResponseEntity.ok().body(EamilOTPResponse);
			}



	// Guest Login Verify
	@RequestMapping(value = "/Guestlogin", method = RequestMethod.POST)
	public ResponseEntity<JSONObject> getOtpVerify(HttpServletRequest request, HttpServletResponse response,
			@RequestBody OtpMobile otpmobile) {

		JSONObject mobileOTPResponse = new JSONObject();		

		
		try {
			String mode = "SMS";
			String cellAddr = otpmobile.getPhonenumber();
		
		JSONObject OTPNumberfromGuest = oTPUtil.SendOtpMobilePage(cellAddr);

		String otpNumber = (String) OTPNumberfromGuest.get("OTP");
		String message = (String) OTPNumberfromGuest.get("outputmessage");

		int otpval = otpImpl.otpVerifyUpdatefromUser(otpNumber, otpmobile.getPhonenumber());
		
		mobileOTPResponse.put("message", message);
		mobileOTPResponse.put("stat", "Ok");
		}			
		catch (Exception e) {
			//response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
			String message = "we could not connect our server";			
			mobileOTPResponse.put("message", message);
			mobileOTPResponse.put("stat", "Not_Ok");
			return new ResponseEntity<>(mobileOTPResponse, HttpStatus.INTERNAL_SERVER_ERROR);
		}

		return ResponseEntity.ok().body(mobileOTPResponse);

	}

	@RequestMapping(value = "/GuestOTPVerify", method = RequestMethod.POST)
	public ResponseEntity<JSONObject> otpVerifyUpdate(HttpServletRequest request, HttpServletResponse response,
			@RequestBody OtpMobile otpmobile) {

		JSONObject OTPVerifyfromGuest = new JSONObject();

		String message = "";
		String stat = "";
		
		try {
		List<OtpMobile> listval = otpImpl.otpCheckfromUser(otpmobile.getOtp(), otpmobile.getPhonenumber());

		if (listval.size() > 0) {
			message = "login Successfully";

			OTPVerifyfromGuest.put("message", message);
			OTPVerifyfromGuest.put("stat", "Ok");
		} else if (listval.size() == 0) {
			message = "Invalid Login";
			OTPVerifyfromGuest.put("message", message);
			OTPVerifyfromGuest.put("stat", "Not_Ok");
		}
		}
		catch (Exception e) {			
			message = "we could not connect our server";			
			OTPVerifyfromGuest.put("message", message);
			OTPVerifyfromGuest.put("stat", "Not_Ok");
			return new ResponseEntity<>(OTPVerifyfromGuest, HttpStatus.INTERNAL_SERVER_ERROR);
		}

		return ResponseEntity.ok().body(OTPVerifyfromGuest);
	}

	/*
	 * API for Forgot password
	 * 
	 * STEP:1 when he/she forget the old password for this we need to collect
	 * information of client id & pan number from customer.
	 * 
	 */

	@RequestMapping(value = "/mobileOTPRequest", method = RequestMethod.POST)
	public ResponseEntity<JSONObject> ForgotPasswordforUser(@RequestBody OtpMobile otpmobile,
			HttpServletRequest request, HttpServletResponse response) {

		JSONObject OTPResponse = new JSONObject();

		// we have to check Pan_Number valid or Invalid from the database.
			try {
				List<OtpMobile> PanNumberValidation = otpImpl.panNumberValidationByUser(otpmobile.getClientid(),
						otpmobile.getPannumber());
		
				if (PanNumberValidation.size() > 0) {
		
					if (otpmobile.getMode().equals("SMS")) {
		
						String cellAddr = PanNumberValidation.get(0).getPhonenumber();
						String mode = otpmobile.getMode();
		
						JSONObject OTPNumberfromPhone = oTPUtil.SendOtpMobilePage(cellAddr);

				String otpNumber = (String) OTPNumberfromPhone.get("OTP");
				String message = (String) OTPNumberfromPhone.get("outputmessage");
				// update OTP for Corresponding User.
				otpImpl.OTpUpdateonMobile(otpmobile.getClientid(), otpNumber, cellAddr, mode);

				//OTPResponse.put("OTP", otpNumber);
				OTPResponse.put("message", message);
				OTPResponse.put("stat", "Ok");

			} else if (otpmobile.getMode().equals("Email")) {

				String EmailIdTag = PanNumberValidation.get(0).getEmailid();

				JSONObject OTPNumberfromEmail = oTPUtil.SendOtpEmailPage(otpmobile.getClientid(), EmailIdTag);

				String otpNumber = (String) OTPNumberfromEmail.get("OTP");
				String message = (String) OTPNumberfromEmail.get("outputmessage");
				otpImpl.OTpUpdateonEmail(otpmobile.getClientid(), otpNumber, EmailIdTag, otpmobile.getMode());

				//OTPResponse.put("OTP", otpNumber);
				OTPResponse.put("message", message);
				OTPResponse.put("stat", "Ok");

			}
		}

		else if (PanNumberValidation.size() == 0) {

			String message = "Invalid PanNumber";
			OTPResponse.put("message", message);
			OTPResponse.put("stat", "Not_Ok");
		}
		
		}
		catch (Exception e) {
			
			String message = "we could not connect our server";			
			OTPResponse.put("message", message);
			OTPResponse.put("stat", "Not_Ok");
			return new ResponseEntity<>(OTPResponse, HttpStatus.INTERNAL_SERVER_ERROR);
		}

		return ResponseEntity.ok().body(OTPResponse);
	}

	/*
	 * The OTP validation for Forgot password from the user STEP:2 verification OTP
	 * details where it needs to send either Phone number or E-mail id and the same
	 * those details also need to validated
	 */

	@RequestMapping(value = "/mobileOTPValidate", method = RequestMethod.POST)
	public ResponseEntity<JSONObject> mobileOTPValidateforUser(@RequestBody OtpMobile otpmobile,
			// @RequestParam String clientid, @RequestParam String userOTP,
			HttpServletRequest request, HttpServletResponse response) {

		JSONObject mobileOTPValidate = new JSONObject();

		// we have to check OTP valid or Invalid from the database.

		try {
		List<OtpMobile> OtpValidate = otpImpl.OTPValidationfromUser(otpmobile.getClientid(), otpmobile.getOtp());

		if (OtpValidate.size() > 0) {
			mobileOTPValidate.put("message", "OTP Validated");
			mobileOTPValidate.put("stat", "Ok");
		} else if (OtpValidate.size() == 0) {
			mobileOTPValidate.put("message", "Invalid OTP");
			mobileOTPValidate.put("stat", "Not_Ok");
		}
		}
		catch (Exception e) {
			String message = "we could not connect our server";			
			mobileOTPValidate.put("message", message);
			mobileOTPValidate.put("stat", "Not_Ok");
			return new ResponseEntity<>(mobileOTPValidate, HttpStatus.INTERNAL_SERVER_ERROR);
		}

		return ResponseEntity.ok().body(mobileOTPValidate);
	}

	// Reset TPin
	@RequestMapping(value = "/mobileForgotTpin", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
	public ResponseEntity<JSONObject> getForgotTpin(HttpServletRequest request, HttpServletResponse response,@RequestBody Client client) {

		JSONObject mobileForgotTpinJson = new JSONObject();

		
		try {
		List<Client> list = scriptImp.TpinUpdateonMobile(client.getClientid(), client.getTpin());
		String message = "";
		if (list.size() > 0) {
			message = "Tpin Updated Succesfully";
			mobileForgotTpinJson.put("message", message);
			mobileForgotTpinJson.put("stat", "Ok");

		} else {
			message = "Tpin not updated";
			mobileForgotTpinJson.put("message", message);
			mobileForgotTpinJson.put("stat", "Not_Ok");
		}
		
		}
		catch (Exception e) {
			String message = "we could not connect our server";			
			mobileForgotTpinJson.put("message", message);
			mobileForgotTpinJson.put("stat", "Not_Ok");
			return new ResponseEntity<>(mobileForgotTpinJson, HttpStatus.INTERNAL_SERVER_ERROR);
		}

		return ResponseEntity.ok().body(mobileForgotTpinJson);
	}

// ============================= Omensys API's =================	

	/*
	 * STEP:3 once the user validated the OTP then we have to show change password
	 * Implementation of the Reset Password API document book-mark 4.25
	 * [SetPassword]
	 */

	@RequestMapping(value = "/mobileForgotpassword", method = RequestMethod.POST)
	public ResponseEntity<JSONObject> setPasswordforUser(@RequestBody Client client, HttpServletRequest request,
			HttpServletResponse response) {

		String mobileSetPasswordSendData = "";
		String stat, message, output = "";

		HttpSession session = request.getSession();

		JSONObject SetPasswordInputJson = new JSONObject();
		JSONObject SetPasswordJson = new JSONObject();

		SetPasswordInputJson.put("clientid", client.getClientid());
		SetPasswordInputJson.put("password", client.getPassword());
		SetPasswordInputJson.put("stat", "Ok");
		SetPasswordInputJson.put("message", "Pasword Reset Successfully");

		/*
		 * try { String tomcatCount= (String) session.getAttribute("tomcatCount");
		 * String publickey3=(String) session.getAttribute("publickey3"); String
		 * jKey=CommonFunction.hashData(publickey3);
		 * 
		 * 
		 * String pwd = password; pwd =CommonFunction.hashData(pwd);
		 * 
		 * SetPasswordInputJson.put("uid", UserId); SetPasswordInputJson.put("password",
		 * pwd);
		 * 
		 * String SetPasswordInputJdata = SetPasswordInputJson.toJSONString();
		 * 
		 * StringBuffer SetPasswordsb = new
		 * StringBuffer(marketwatchProvider.getSetPasswordurl()); SetPasswordsb.append(
		 * "jsessionid=" + "." + tomcatCount + "&jData=" + SetPasswordInputJdata +
		 * "&jKey=" + jKey + "");
		 * 
		 * URL SetPasswordURL = new URL(SetPasswordsb.toString());
		 * 
		 * HttpURLConnection SetPasswordconn = (HttpURLConnection)
		 * SetPasswordURL.openConnection(); SetPasswordconn.setRequestMethod("POST");
		 * SetPasswordconn.setRequestProperty("Accept", "application/json");
		 * 
		 * if (SetPasswordconn.getResponseCode() != 200) { throw new
		 * RuntimeException("Failed : HTTP error code : " +
		 * SetPasswordconn.getResponseCode()); } BufferedReader br3 = new
		 * BufferedReader(new InputStreamReader((SetPasswordconn.getInputStream())));
		 * 
		 * while ((output = br3.readLine()) != null) {
		 * 
		 * Object objec = JSONValue.parse(output); SetPasswordJson = (JSONObject) objec;
		 * 
		 * String SendData = SetPasswordJson.toJSONString(); objec =
		 * JSONValue.parse(SendData); SetPasswordJson = (JSONObject) objec;
		 * 
		 * stat = (String) SetPasswordJson.get("stat"); message = (String)
		 * SetPasswordJson.get("message"); }
		 * 
		 * SetPasswordconn.disconnect();
		 * 
		 * } catch (Exception e) {
			response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
			String message = "we could not connect our server";			
			SetPasswordInputJson.put("message", message);
			SetPasswordInputJson.put("stat", "Not_Ok");
		}
		 * 
		 * }
		 */

		return ResponseEntity.ok().body(SetPasswordInputJson);
	}

	
	

	// ======================= OTP Mobile and Email	 =====================

	// Implementation of the mobile Login API document book-mark 03.13 SMS OTP
	@RequestMapping(value = "/mobileSmsOtp", method = RequestMethod.POST)
	public ResponseEntity<String> mobileSmsOtp(@RequestParam String uid, @RequestParam String mode,
			@RequestParam String cellAddr, HttpServletRequest request, HttpServletResponse response) {

		String mobileSMSOTPSendData = "";

		String accountType = "Foreign Nationals";
		
		
		 
		 String publickey3=null,TomcatCount=null,clientId=null;
			
			for ( Map.Entry<String, UserInfo> entry : Loginmap.entrySet()) {
				
				String key = entry.getKey();
			    UserInfo tab = entry.getValue();
			    // do something with key and/or tab
			    
			    //System.out.println("Placeorder : "+key + ": " + tab.getTomcatCount());
			    
			    publickey3=tab.getPublickey3();
			    TomcatCount=tab.getTomcatCount();
			    clientId=tab.getClientid();
			}
			
				logger.info(" mobileSmsOtp  clientId :"+clientId);
			
			

		JSONObject mobileSMSOTPouputJSON = new JSONObject();

		JSONObject mobileSMSOTPInput = new JSONObject();

		mobileSMSOTPInput.put("user", uid);
		mobileSMSOTPInput.put("mode", "SMS");
		mobileSMSOTPInput.put("cellAddr", "0001112223");
		mobileSMSOTPInput.put("accountType", accountType);

		try {
			String mobileLoginJdata = mobileSMSOTPInput.toJSONString();
			String jKey = CommonFunction.hashData(publickey3);

			StringBuffer mobileloginUrlbuff = new StringBuffer(marketwatchProvider.getMobilesmsotpUrl());
			mobileloginUrlbuff
					.append("jsessionid=" + "." + TomcatCount + "&jData=" + mobileLoginJdata + "&jKey=" + jKey + "");

			URL mobileSMSOTPUrl = new URL(mobileloginUrlbuff.toString());
			HttpURLConnection mobilesmsotpconn = (HttpURLConnection) mobileSMSOTPUrl.openConnection();

			mobilesmsotpconn.setRequestMethod("POST");
			mobilesmsotpconn.setRequestProperty("Accept", "application/json");
			if (mobilesmsotpconn.getResponseCode() != 200) {
				throw new RuntimeException("Failed : HTTP error code : " + mobilesmsotpconn.getResponseCode());
			}

			BufferedReader br2 = new BufferedReader(new InputStreamReader((mobilesmsotpconn.getInputStream())));
			String output;
			while ((output = br2.readLine()) != null) {

				Object objec = JSONValue.parse(output);
				mobileSMSOTPouputJSON = (JSONObject) objec;

				mobileSMSOTPSendData = mobileSMSOTPouputJSON.toJSONString();
				objec = JSONValue.parse(mobileSMSOTPSendData);

			}

		} catch (Exception e) {
			response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
			String message = "we could not connect our server";			
			mobileSMSOTPouputJSON.put("message", message);
			mobileSMSOTPouputJSON.put("stat", "Not_Ok");
			mobileSMSOTPSendData = mobileSMSOTPouputJSON.toJSONString();
		}

		return ResponseEntity.ok().body(mobileSMSOTPSendData);
	}

	// Implementation of the mobile Login API document book-mark 04.05 Email OTP
	@RequestMapping(value = "/mobileEmailOtp", method = RequestMethod.POST)
	public ResponseEntity<String> mobileEmailOtp(@RequestParam String uid, HttpServletRequest request,
			HttpServletResponse response) {

		String mobileEmailOTPSendData = "";		
		 
		 String publickey3=null,TomcatCount=null,clientId=null;
			
			for ( Map.Entry<String, UserInfo> entry : Loginmap.entrySet()) {
				
				String key = entry.getKey();
			    UserInfo tab = entry.getValue();
			    // do something with key and/or tab
			    
			    //System.out.println("Placeorder : "+key + ": " + tab.getTomcatCount());
			    
			    publickey3=tab.getPublickey3();
			    TomcatCount=tab.getTomcatCount();
			    clientId=tab.getClientid();
			}
			
				logger.info(" mobileEmailOtp  clientId :"+clientId);
			
			
		
		
		
		
		JSONObject mobileEmailOTPouputJSON = new JSONObject();

		JSONObject mobileEmailOTPInput = new JSONObject();

		mobileEmailOTPInput.put("user", uid);

		try {
			String mobileEmailOTPJdata = mobileEmailOTPInput.toJSONString();
			String jKey = CommonFunction.hashData(publickey3);

			StringBuffer mobileemailUrlbuff = new StringBuffer(marketwatchProvider.getMobileemailotpUrl());
			mobileemailUrlbuff
					.append("jsessionid=" + "." + TomcatCount + "&jData=" + mobileEmailOTPJdata + "&jKey=" + jKey + "");

			URL mobileEmailOTPUrl = new URL(mobileemailUrlbuff.toString());
			HttpURLConnection mobileemailotpconn = (HttpURLConnection) mobileEmailOTPUrl.openConnection();

			mobileemailotpconn.setRequestMethod("POST");
			mobileemailotpconn.setRequestProperty("Accept", "application/json");
			if (mobileemailotpconn.getResponseCode() != 200) {
				throw new RuntimeException("Failed : HTTP error code : " + mobileemailotpconn.getResponseCode());
			}

			BufferedReader br2 = new BufferedReader(new InputStreamReader((mobileemailotpconn.getInputStream())));
			String output;
			while ((output = br2.readLine()) != null) {

				Object objec = JSONValue.parse(output);
				mobileEmailOTPouputJSON = (JSONObject) objec;

				mobileEmailOTPSendData = mobileEmailOTPouputJSON.toJSONString();
				objec = JSONValue.parse(mobileEmailOTPSendData);

			}

		} catch (Exception e) {


			response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
			String message = "we could not connect our server";			
			mobileEmailOTPouputJSON.put("message", message);
			mobileEmailOTPouputJSON.put("stat", "Not_Ok");
			mobileEmailOTPSendData = mobileEmailOTPouputJSON.toJSONString();
		}

		return ResponseEntity.ok().body(mobileEmailOTPSendData);
	}

	// Implementation of the mobile Login API document book-mark 03.14
	// mobileOTPVerify
	@RequestMapping(value = "/mobileOTPVerify", method = RequestMethod.POST)
	public ResponseEntity<String> mobileOTPVerify(@RequestParam String uid, @RequestParam String otp,
			HttpServletRequest request, HttpServletResponse response) {

		String mobileOTPVerifySendData = "";

		
		 
		 String publickey3=null,TomcatCount=null,clientId=null;
			
			for ( Map.Entry<String, UserInfo> entry : Loginmap.entrySet()) {
				
				String key = entry.getKey();
			    UserInfo tab = entry.getValue();
			    // do something with key and/or tab
			    
			    //System.out.println("Placeorder : "+key + ": " + tab.getTomcatCount());
			    
			    publickey3=tab.getPublickey3();
			    TomcatCount=tab.getTomcatCount();
			    clientId=tab.getClientid();
			}
			
				logger.info(" mobileOTPVerify  clientId :"+clientId);
			
			
		
		JSONObject mobileOTPVerifyouputJSON = new JSONObject();

		JSONObject mobileOTPVerifyInput = new JSONObject();

		mobileOTPVerifyInput.put("user", uid);
		mobileOTPVerifyInput.put("OTP", otp);

		try {
			String mobileLoginJdata = mobileOTPVerifyInput.toJSONString();
			String jKey = CommonFunction.hashData(publickey3);

			StringBuffer mobileOTPVerifyUrlbuff = new StringBuffer(marketwatchProvider.getMobileotpverifyUrl());
			mobileOTPVerifyUrlbuff
					.append("jsessionid=" + "." + TomcatCount + "&jData=" + mobileLoginJdata + "&jKey=" + jKey + "");

			URL mobileOTPVerifyUrl = new URL(mobileOTPVerifyUrlbuff.toString());
			HttpURLConnection mobileOTPVerifyconn = (HttpURLConnection) mobileOTPVerifyUrl.openConnection();

			mobileOTPVerifyconn.setRequestMethod("POST");
			mobileOTPVerifyconn.setRequestProperty("Accept", "application/json");
			if (mobileOTPVerifyconn.getResponseCode() != 200) {
				throw new RuntimeException("Failed : HTTP error code : " + mobileOTPVerifyconn.getResponseCode());
			}

			BufferedReader br2 = new BufferedReader(new InputStreamReader((mobileOTPVerifyconn.getInputStream())));
			String output;
			while ((output = br2.readLine()) != null) {

				Object objec = JSONValue.parse(output);
				mobileOTPVerifyouputJSON = (JSONObject) objec;

				mobileOTPVerifySendData = mobileOTPVerifyouputJSON.toJSONString();
				objec = JSONValue.parse(mobileOTPVerifySendData);

			}

		}catch (Exception e) {
			response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
			String message = "we could not connect our server";			
			mobileOTPVerifyouputJSON.put("message", message);
			mobileOTPVerifyouputJSON.put("stat", "Not_Ok");
			mobileOTPVerifySendData = mobileOTPVerifyouputJSON.toJSONString();
		}

		return ResponseEntity.ok().body(mobileOTPVerifySendData);
	}
	
	
	
	@RequestMapping(value = "/testmobile", method = RequestMethod.GET)
	 public ResponseEntity<String>  autocompletetest(@RequestBody Redisearch client,HttpServletRequest request, HttpServletResponse response) {
		
		
				
		System.out.println("client:::"+client.getSearchTerm());
		 return ResponseEntity.ok().body("");
	 }
	

	private static String indexurl;
				 
				
				
			 @RequestMapping(value = "/rediSearchForMobile", method = RequestMethod.POST)
			 public ResponseEntity<String>  autocomplete(@RequestBody Redisearch client,HttpServletRequest request, HttpServletResponse response) {
				
				 try {	
					 InputStream propertiesInputStream = null;
					 Properties props = new Properties();
					 propertiesInputStream = this.getClass().getClassLoader().getResourceAsStream("application.properties");
					 props.load(propertiesInputStream);

					 indexurl= props.getProperty("spring.redis.indexurl");
					 }catch(Exception e) {
					 	
					 }
				 
				 
				 Segment list= new Segment();
				 StringBuffer sb = new StringBuffer();
				 
				 System.out.println("indexurl "+indexurl); 
				 
				 System.out.println("SearchTerm   "+client.getSearchTerm()); 
				 
				 String username="";
				 
				 String json="";
				
				 
				StringBuffer urlAppend = new StringBuffer(indexurl+"searchTerm="+(URLEncoder.encode(client.getSearchTerm(),StandardCharsets.UTF_8)));
					
				
			  try {
				  
				  String inputLine = "";
			    
			    URL indexAddurl = new URL(urlAppend.toString());
			    HttpURLConnection Indexedconn = (HttpURLConnection) indexAddurl.openConnection();
				
				if (Indexedconn.getResponseCode() != 200) {
					throw new RuntimeException("Failed : HTTP error code : " + Indexedconn.getResponseCode());
				}

				BufferedReader br3 = new BufferedReader(new InputStreamReader((Indexedconn.getInputStream())));

				while ((inputLine = br3.readLine()) != null) {
					sb.append(inputLine);
				}
				br3.close();
			    username=sb.toString();
			    
			  Gson gson = new Gson();
				
			  json = new Gson().toJson(username);
			  
			    
		
			    
			  } catch (Exception e) {

				  logger.error("Exception while parsing Redisearch  " + e.getMessage());
				}
			  
			  return ResponseEntity.ok().body(username);
			 }
			 	 
			 
			

			 @RequestMapping(value="/addScriptMcxForMobile", method = RequestMethod.POST)
				public ResponseEntity<JSONObject> addScriptMcx(HttpServletRequest request, HttpServletResponse response,@RequestBody MarketWacthScript client) {
					
					 
					 HttpSession session = null;
						session = request.getSession();
						JSONObject marketwatchMessage = new JSONObject();
						
				try {		
						String userId = (String) session.getAttribute("userId");
						
					 MarketWacthScript script =new MarketWacthScript();
					 
					 script.setToken(client.getToken());
					 script.setExchange(client.getExchange());
					 script.setScriptName(client.getScriptName());
					 script.setDisplayname(client.getDisplayname());
					 script.setMarketWatchName("MW1");
					 script.setStatus("1");
					 
					 script.setMarketwatchid(client.getMarketwatchid());
					 script.setMcxInstrumentIdentifier(client.getToken());
					 script.setMcxInstrumentCode(client.getMcxInstrumentCode());
					 script.setMcxInstrumentSeries(client.getMcxInstrumentSeries());
					 script.setMcxProductStartDate(client.getMcxProductStartDate());
					 script.setMcxLastTradingDate(client.getMcxLastTradingDate());
					 script.setMcxLotSize(client.getMcxLotSize());
					 script.setMcxTickSize(client.getMcxTickSize());
					 script.setMcxDeliveryStartDate(client.getMcxDeliveryStartDate());
					 script.setMcxDeliveryEndDate(client.getMcxDeliveryEndDate());
					 script.setMcxLastModifiedDate(client.getMcxLastModifiedDate());
					 script.setMcxInstrumentInfo(client.getMcxInstrumentInfo());
					 script.setMcxTenderPeriodStartDate(client.getMcxTenderPeriodStartDate());
					 script.setMcxTenderPeriodEndDate(client.getMcxTenderPeriodEndDate());
					 script.setMcxInstrumentName(client.getMcxInstrumentName());
					 script.setMcxNameUnderlyingAsset(client.getDisplayname());
					 script.setMcxOriginalExpiryDate(client.getMcxOriginalExpiryDate());
					 script.setMcxStrikePrice(client.getMcxStrikePrice());
					 script.setMcxOptionType(client.getMcxOptionType());
					 
					 List<MarketWacthScript> list= scriptImp.saveMobile(script);
					 
					 

						String message = "";
						if (list.size() > 0) {
							message = "MCX Script Added Succesfully ";
							marketwatchMessage.put("message", message);
							marketwatchMessage.put("stat", "Ok");

						} else {
							message = "MCX Script not Added";
							marketwatchMessage.put("message", message);
							marketwatchMessage.put("stat", "Not_Ok");
						}
						
				 } catch (Exception e) {

					  logger.error("Exception while parsing MCX Script  " + e.getMessage());
					  String message = "we could not connect our server";				
					    marketwatchMessage.put("message", message);
					    marketwatchMessage.put("stat", "Not_Ok");
						return new ResponseEntity<>(marketwatchMessage, HttpStatus.INTERNAL_SERVER_ERROR);
					}
					return ResponseEntity.ok().body(marketwatchMessage);
					
					
					
				}
			 
			 @RequestMapping(value="/addScriptNseForMobile", method = RequestMethod.POST)
				public ResponseEntity<JSONObject> addScriptNse(HttpServletRequest request, HttpServletResponse response,@RequestBody MarketWacthScript client) {
					
					 
					 HttpSession session = null;
						session = request.getSession();
				JSONObject marketwatchMessage = new JSONObject();
						
			try {
						String userId = (String) session.getAttribute("userId");
						
					 MarketWacthScript script =new MarketWacthScript();
					 
					 script.setToken(client.getToken());
					 script.setExchange(client.getExchange());
					 script.setScriptName(client.getScriptName());
					 script.setDisplayname(client.getDisplayname());
					 script.setMarketWatchName("MW1");
					 script.setStatus("1");
					 
					 script.setMarketwatchid(client.getMarketwatchid());
					 script.setNseToken(client.getToken());
					 script.setNseSeries(client.getNseSeries());
					 script.setNseSymbol(client.getNseSymbol());
					 script.setNseInstrumentType(client.getNseInstrumentType());
					 script.setNseIssuedCapital(client.getNseIssuedCapital());
					 script.setNseCreditRating(client.getNseCreditRating());
					 script.setNseBoardLotQuantity(client.getNseBoardLotQuantity());
					 script.setNseTickSize(client.getNseTickSize());
					 script.setNseName(client.getDisplayname());
					 script.setNseIssueStartDate(client.getNseIssueStartDate());
					 script.setNseIssueIPDate(client.getNseIssueIPDate());
					 script.setNseIssueMaturityDate(client.getNseIssueMaturityDate());
					 script.setNseFreezePercent(client.getNseFreezePercent());
					 script.setNseListingDate(client.getNseListingDate());
					 script.setNseExpulsionDate(client.getNseExpulsionDate());
					 script.setNseReAdmissionDate(client.getNseReAdmissionDate());
					 script.setNseExDate(client.getNseExDate());
					 script.setNseRecordDate(client.getNseRecordDate());
					 script.setNseFaceValue(client.getNseFaceValue());
					 script.setNseISINNo(client.getNseISINNo());
					 
					 List<MarketWacthScript> list= scriptImp.saveMobile(script);
					 
					 System.out.println("list nse:::"+list);
					 
					

						String message = "";
						if (list.size() > 0) {
							message = "NSE Script Added Succesfully ";
							marketwatchMessage.put("message", message);
							marketwatchMessage.put("stat", "Ok");

						} else {
							message = "NSE Script not Added";
							marketwatchMessage.put("message", message);
							marketwatchMessage.put("stat", "Not_Ok");
						}
						
			 } catch (Exception e) {

				  logger.error("Exception while parsing NSE Script  " + e.getMessage());
				  String message = "we could not connect our server";				
				    marketwatchMessage.put("message", message);
				    marketwatchMessage.put("stat", "Not_Ok");
					return new ResponseEntity<>(marketwatchMessage, HttpStatus.INTERNAL_SERVER_ERROR);
				}		
					return ResponseEntity.ok().body(marketwatchMessage);
					
					
					
				}
			 
			 @RequestMapping(value="/addScriptNfoForMobile", method = RequestMethod.POST)
				public ResponseEntity<JSONObject> addScriptNfo(HttpServletRequest request, HttpServletResponse response,@RequestBody MarketWacthScript client) {
					
					 
					 HttpSession session = null;
						session = request.getSession();
						String userId = (String) session.getAttribute("userId");
						 JSONObject marketwatchMessage = new JSONObject();
			try {			
					 MarketWacthScript script =new MarketWacthScript();
					 
					 script.setToken(client.getToken());
					 script.setExchange(client.getExchange());
					 script.setScriptName(client.getScriptName());
					 script.setDisplayname(client.getDisplayname());
					 script.setMarketWatchName("MW1");
					 script.setStatus("1");
					 
					 script.setMarketwatchid(client.getMarketwatchid());
					 script.setNfoToken(client.getToken());
					 script.setNfoinstrument_name(client.getNfoinstrument_name());
					 script.setNfoSymbol(client.getDisplayname());
					 script.setNfoSeries(client.getNfoSeries());
					 script.setNfoexpiry_date(client.getNfoexpiry_date());
					 script.setNfostrike_price(client.getNfostrike_price());
					 script.setNfooption_type(client.getNfooption_type());
					 script.setNfoissue_infostart_date(client.getNfoissue_infostart_date());
					 script.setNfoissue_infomaturity_date(client.getNfoissue_infomaturity_date());
					 script.setNfoboard_lot_quantity(client.getNfoboard_lot_quantity());
					 script.setNfoStockname(client.getNfoStockname());
					 
					 List<MarketWacthScript> list= scriptImp.saveMobile(script);
					 
					

						String message = "";
						if (list.size() > 0) {
							message = "NFO Script Added Succesfully ";
							marketwatchMessage.put("message", message);
							marketwatchMessage.put("stat", "Ok");

						} else {
							message = "NFO Script not Added";
							marketwatchMessage.put("message", message);
							marketwatchMessage.put("stat", "Not_Ok");
						}
						
			 } catch (Exception e) {

				  logger.error("Exception while parsing NFO Script  " + e.getMessage());
				  String message = "we could not connect our server";			
				    marketwatchMessage.put("message", message);
				    marketwatchMessage.put("stat", "Not_Ok");
					return new ResponseEntity<>(marketwatchMessage, HttpStatus.INTERNAL_SERVER_ERROR);
				}		
					
					return ResponseEntity.ok().body(marketwatchMessage);
					
					
					
				}
			 
		 @RequestMapping(value="/getMarketScriptForMobile", method = RequestMethod.POST)
				public ResponseEntity<JSONObject> getScriptVal(HttpServletRequest request, HttpServletResponse response) {
						
				 
				 
				 System.out.println("getMarketScriptForMobile : ");
					 	HttpSession session = null;
						session = request.getSession();
			JSONObject marketwatchMessage = new JSONObject();
						
			try {			
						String userId = (String) session.getAttribute("userId");						
						String PublicKey4=(String) session.getAttribute("publicKey4");
						
						System.out.println("PublicKey4 :"+PublicKey4); 
						String tomcatCount=(String) session.getAttribute("TomcatCount");
						System.out.println("tomcatCount :"+tomcatCount); 					
						
					 MarketWacthScript script =new MarketWacthScript();
					 
					 List<MarketWacthScript> list= scriptImp.listAll();	
					 
					

						String message = "";
						if (list.size() > 0) {
							message = "MarketScript Fetched Succesfully ";
							marketwatchMessage.put("message", message);
							marketwatchMessage.put("script", list);
							marketwatchMessage.put("stat", "Ok");

						} else {
							message = "MarketScript not Fetched";
							marketwatchMessage.put("message", message);
							marketwatchMessage.put("stat", "Not_Ok");
						}
					
			 } catch (Exception e) {

				  logger.error("Exception while parsing MarketScript  " + e.getMessage());
				  String message = "we could not connect our server";			
				    marketwatchMessage.put("message", message);
				    marketwatchMessage.put("stat", "Not_Ok");
					return new ResponseEntity<>(marketwatchMessage, HttpStatus.INTERNAL_SERVER_ERROR);
				}	 					 
					 return ResponseEntity.ok().body(marketwatchMessage);
					
				}
			 
			 @RequestMapping(value="/deleteScriptForMobile", method = RequestMethod.POST)
				public ResponseEntity<JSONObject> deleteScriptForMobile(HttpServletRequest request, HttpServletResponse response,@RequestBody MarketWacthScript client) {
					

						
						 HttpSession session = null;
							session = request.getSession();
							
							 JSONObject marketwatchMessage = new JSONObject();
				try {			
							String userId = (String) session.getAttribute("userId");
						 
						 MarketWacthScript script =new MarketWacthScript();
						 
						 
						int addscriptVal= scriptImp.delete(client.getToken());
					 
					 
					

						String message = "";
						if (addscriptVal > 0) {
							message = "Script Deleted Succesfully ";
							marketwatchMessage.put("message", message);
							marketwatchMessage.put("stat", "Ok");

						} else {
							message = "Script not Deleted";
							marketwatchMessage.put("message", message);
							marketwatchMessage.put("stat", "NotOk");
						}
						
				 } catch (Exception e) {

					  logger.error("Exception while parsing Script Deleted  " + e.getMessage());
					  String message = "we could not connect our server";			
					    marketwatchMessage.put("message", message);
					    marketwatchMessage.put("stat", "Not_Ok");
						return new ResponseEntity<>(marketwatchMessage, HttpStatus.INTERNAL_SERVER_ERROR);
					}	
					 
					return ResponseEntity.ok().body(marketwatchMessage);
						
				}
			 
			 
			 @RequestMapping(value="/addMarketWatchForMobile", method = RequestMethod.POST)
				public ResponseEntity<JSONObject> addMarketWatch(HttpServletRequest request, HttpServletResponse response,@RequestBody MarketWatch client) {
					
					 
				 HttpSession session = null;
					session = request.getSession();
					
					JSONObject marketwatchMessage = new JSONObject();
					
			try {		
					String userId = (String) session.getAttribute("userId");
					
				 MarketWatch script =new MarketWatch();
				 

				 script.setUserId(client.getUserId());
				 script.setMarketwatch_name(client.getMarketwatch_name());

				
				boolean checkName=scriptImp.marketWatchNameCheck(script);
				 
				System.out.println("checkName::::"+checkName);
				int list=0;
				if(checkName) {
					list=0;
				}else {
					list= scriptImp.saveMarketWatch(script);
				}
				 

					String message = "";
					if (list > 0) {
						message = "MarketWatch Created Succesfully ";
						marketwatchMessage.put("message", message);
						marketwatchMessage.put("stat", "Ok");
						marketwatchMessage.put("Id", list);

					} else {
						message = "MarketWatch Already Exists";
						marketwatchMessage.put("message", message);
						marketwatchMessage.put("stat", "Not Ok");
					}
					
			 } catch (Exception e) {

				  logger.error("Exception while parsing MarketWatch Created  " + e.getMessage());
				  String message = "we could not connect our server";		
				    marketwatchMessage.put("message", message);
				    marketwatchMessage.put("stat", "Not_Ok");
					return new ResponseEntity<>(marketwatchMessage, HttpStatus.INTERNAL_SERVER_ERROR);
				}		
				 
				return ResponseEntity.ok().body(marketwatchMessage);
					
					
					
				}
			 
			 @RequestMapping(value="/reNameMarketWatchForMobile", method = RequestMethod.POST)
				public ResponseEntity<JSONObject> reNameMarketWatch(HttpServletRequest request, HttpServletResponse response,@RequestBody MarketWatch client) {
					
					 
					 HttpSession session = null;
						session = request.getSession();
					JSONObject marketwatchMessage = new JSONObject();
			try {			
						String userId = (String) session.getAttribute("userId");
						
					 MarketWatch script =new MarketWatch();
					 
					 script.setMarketwatchid(client.getMarketwatchid());
					 script.setUserId(client.getUserId());
					 script.setMarketwatch_name(client.getMarketwatch_name());
					 
					 int  list= scriptImp.reNameMarketWatch(script);
					 
						String message = "";
						if (list > 0) {
							message = "MarketWatch Rename Updated Succesfully ";
							marketwatchMessage.put("message", message);
							marketwatchMessage.put("stat", "Ok");

						} else {
							message = "MarketWatch Rename not Updated";
							marketwatchMessage.put("message", message);
							marketwatchMessage.put("stat", "NotOk");
						}
						
			 } catch (Exception e) {

				  logger.error("Exception while parsing MarketWatch Rename  " + e.getMessage());
				  String message = "we could not connect our server";			
				    marketwatchMessage.put("message", message);
				    marketwatchMessage.put("stat", "Not_Ok");
					return new ResponseEntity<>(marketwatchMessage, HttpStatus.INTERNAL_SERVER_ERROR);
				}			
					 
					return ResponseEntity.ok().body(marketwatchMessage);
					
					
					
				}
			 
			 
			 @RequestMapping(value="/deleteMarketWatchForMobile", method = RequestMethod.POST)
				public ResponseEntity<JSONObject> deleteMarketWatchForMobile(HttpServletRequest request, HttpServletResponse response,@RequestBody MarketWatch client) {
					

						
						 HttpSession session = null;
							session = request.getSession();
						JSONObject marketwatchMessage = new JSONObject();
							
			try {				
							String userId = (String) session.getAttribute("userId");
						 
						 MarketWatch script =new MarketWatch();
						 
						 System.out.println("Market id::"+client.getMarketwatchid());
						int addscriptVal= scriptImp.marketDelete(client.getMarketwatchid());
					 

						String message = "";
						if (addscriptVal > 0) {
							message = "Market Watch Deleted Succesfully ";
							marketwatchMessage.put("message", message);
							marketwatchMessage.put("stat", "Ok");

						} else {
							message = "Market Watch Not Deleted";
							marketwatchMessage.put("message", message);
							marketwatchMessage.put("stat", "NotOk");
						}
						
			 } catch (Exception e) {

				  logger.error("Exception while parsing Market Watch Deleted  " + e.getMessage());
				  String message = "we could not connect our server";			
				    marketwatchMessage.put("message", message);
				    marketwatchMessage.put("stat", "Not_Ok");
					return new ResponseEntity<>(marketwatchMessage, HttpStatus.INTERNAL_SERVER_ERROR);
				}	
					 
					return ResponseEntity.ok().body(marketwatchMessage);
						
				}
			 
			 
			 @RequestMapping(value="/multipleDeleteScriptForMobile", method = RequestMethod.POST)
				public ResponseEntity<JSONObject> multipleDeleteScriptForMobile(HttpServletRequest request, HttpServletResponse response,@RequestBody MarketWacthScript client) {
					

						
						 HttpSession session = null;
							session = request.getSession();
							 
					 JSONObject marketwatchMessage = new JSONObject();
				try {			
							String userId = (String) session.getAttribute("userId");
						 
						 MarketWacthScript script =new MarketWacthScript();
						 
						 
						 System.out.println("client::token:::"+client.getToken());
						 
						int addscriptVal= scriptImp.multipleDelete(client.getToken());
					 
						String message = "";
						if (addscriptVal > 0) {
							message = "Script Deleted Succesfully ";
							marketwatchMessage.put("message", message);
							marketwatchMessage.put("stat", "Ok");

						} else {
							message = "Script not Deleted";
							marketwatchMessage.put("message", message);
							marketwatchMessage.put("stat", "NotOk");
						}
						
				 } catch (Exception e) {

					  logger.error("Exception while parsing MultipleDelete  " + e.getMessage());
					  String message = "we could not connect our server";				
					    marketwatchMessage.put("message", message);
					    marketwatchMessage.put("stat", "Not_Ok");
						return new ResponseEntity<>(marketwatchMessage, HttpStatus.INTERNAL_SERVER_ERROR);
					}		
					 
					return ResponseEntity.ok().body(marketwatchMessage);
						
				}
			 
			 
			 @RequestMapping(value="/getMarketWatchForMobile", method = RequestMethod.POST)
				public ResponseEntity<JSONObject> getMarketWatchForMobile(HttpServletRequest request, HttpServletResponse response) {
					
					//ModelAndView mv = new ModelAndView("exchange-light");
					 HttpSession session = null;
						session = request.getSession();
				JSONObject marketwatchMessage = new JSONObject();
			try {			
						
					 MarketWacthScript script =new MarketWacthScript();
					 
					 List<MarketWacthScript> list= scriptImp.marketWatchlistAll();
					 MarketWacthScript s=null;
					 					 

						String message = "";
						if (list.size() > 0) {
							message = "MarketWatch Fetched Succesfully ";
							marketwatchMessage.put("message", message);
							marketwatchMessage.put("script", list);
							marketwatchMessage.put("stat", "Ok");

						} else {
							message = "MarketWatch not Fetched";
							marketwatchMessage.put("message", message);
							marketwatchMessage.put("stat", "Not_Ok");
						}
						
			 } catch (Exception e) {

				  logger.error("Exception while parsing MarketWatch Fetched  " + e.getMessage());
				  String message = "we could not connect our server";				
				    marketwatchMessage.put("message", message);
				    marketwatchMessage.put("stat", "Not_Ok");
					return new ResponseEntity<>(marketwatchMessage, HttpStatus.INTERNAL_SERVER_ERROR);
				}		
						
					 return ResponseEntity.ok().body(marketwatchMessage);
					
				}
			 
			 
			 @RequestMapping(value="/addDragListForMobile", method = RequestMethod.POST)
				//public ResponseEntity<JSONObject> addDragList(HttpServletRequest request, HttpServletResponse response,@RequestBody JsonObject<MarketWacthScript> clientList) {
			 public ResponseEntity<JSONObject> addDragList(HttpServletRequest request, HttpServletResponse response,@RequestBody List<MarketWacthScript> clientList){	
					 
					 HttpSession session = null;
						session = request.getSession();
					JSONObject marketwatchMessage = new JSONObject();
						
				try {		
						String userId = (String) session.getAttribute("userId");
						
					 MarketWacthScript script =new MarketWacthScript();
					 List<MarketWacthScript> list=null;
					 
					 System.out.println("client:::"+clientList); 
					 
					 for(MarketWacthScript client: clientList) {
					 
						 
						 int addscriptVal= scriptImp.multipleDelete(client.getToken());
						 
						 
					 script.setToken(client.getToken());
					 script.setExchange(client.getExchange());
					 script.setScriptName(client.getScriptName());
					 script.setDisplayname(client.getDisplayname());
					 script.setMarketWatchName("MW1");
					 script.setStatus("1");
					 
					 
					 
					 if(client.getExchange().equalsIgnoreCase("MCX")) {
					 script.setMarketwatchid(client.getMarketwatchid());
					 script.setMcxInstrumentIdentifier(client.getToken());
					 script.setMcxInstrumentCode(client.getMcxInstrumentCode());
					 script.setMcxInstrumentSeries(client.getMcxInstrumentSeries());
					 script.setMcxProductStartDate(client.getMcxProductStartDate());
					 script.setMcxLastTradingDate(client.getMcxLastTradingDate());
					 script.setMcxLotSize(client.getMcxLotSize());
					 script.setMcxTickSize(client.getMcxTickSize());
					 script.setMcxDeliveryStartDate(client.getMcxDeliveryStartDate());
					 script.setMcxDeliveryEndDate(client.getMcxDeliveryEndDate());
					 script.setMcxLastModifiedDate(client.getMcxLastModifiedDate());
					 script.setMcxInstrumentInfo(client.getMcxInstrumentInfo());
					 script.setMcxTenderPeriodStartDate(client.getMcxTenderPeriodStartDate());
					 script.setMcxTenderPeriodEndDate(client.getMcxTenderPeriodEndDate());
					 script.setMcxInstrumentName(client.getMcxInstrumentName());
					 script.setMcxNameUnderlyingAsset(client.getDisplayname());
					 script.setMcxOriginalExpiryDate(client.getMcxOriginalExpiryDate());
					 script.setMcxStrikePrice(client.getMcxStrikePrice());
					 script.setMcxOptionType(client.getMcxOptionType());
					 
					 
					 }
					 
					 if(client.getExchange().equalsIgnoreCase("NSE")) {
					 script.setMarketwatchid(client.getMarketwatchid());
					 script.setNseToken(client.getToken());
					 script.setNseSeries(client.getNseSeries());
					 script.setNseSymbol(client.getNseSymbol());
					 script.setNseInstrumentType(client.getNseInstrumentType());
					 script.setNseIssuedCapital(client.getNseIssuedCapital());
					 script.setNseCreditRating(client.getNseCreditRating());
					 script.setNseBoardLotQuantity(client.getNseBoardLotQuantity());
					 script.setNseTickSize(client.getNseTickSize());
					 script.setNseName(client.getDisplayname());
					 script.setNseIssueStartDate(client.getNseIssueStartDate());
					 script.setNseIssueIPDate(client.getNseIssueIPDate());
					 script.setNseIssueMaturityDate(client.getNseIssueMaturityDate());
					 script.setNseFreezePercent(client.getNseFreezePercent());
					 script.setNseListingDate(client.getNseListingDate());
					 script.setNseExpulsionDate(client.getNseExpulsionDate());
					 script.setNseReAdmissionDate(client.getNseReAdmissionDate());
					 script.setNseExDate(client.getNseExDate());
					 script.setNseRecordDate(client.getNseRecordDate());
					 script.setNseFaceValue(client.getNseFaceValue());
					 script.setNseISINNo(client.getNseISINNo());
					 
					 }
					 
					 if(client.getExchange().equalsIgnoreCase("NFO")) {
					 script.setMarketwatchid(client.getMarketwatchid());
					 script.setNfoToken(client.getToken());
					 script.setNfoinstrument_name(client.getNfoinstrument_name());
					 script.setNfoSymbol(client.getDisplayname());
					 script.setNfoSeries(client.getNfoSeries());
					 script.setNfoexpiry_date(client.getNfoexpiry_date());
					 script.setNfostrike_price(client.getNfostrike_price());
					 script.setNfooption_type(client.getNfooption_type());
					 script.setNfoissue_infostart_date(client.getNfoissue_infostart_date());
					 script.setNfoissue_infomaturity_date(client.getNfoissue_infomaturity_date());
					 script.setNfoboard_lot_quantity(client.getNfoboard_lot_quantity());
					 script.setNfoStockname(client.getNfoStockname());
					 
					
					 }
					 
					 list= scriptImp.saveMobile(script);
					 
					 } 
					 


						String message = "";
						if (list.size() > 0) {
							message = "Script Added Succesfully ";
							marketwatchMessage.put("message", message);
							marketwatchMessage.put("stat", "Ok");

						} else {
							message = "Script not Added";
							marketwatchMessage.put("message", message);
							marketwatchMessage.put("stat", "NotOk");
						}
						
				} catch (Exception e) {

					  logger.error("Exception while parsing AddDragList  " + e.getMessage());
					  String message = "we could not connect our server";				
					    marketwatchMessage.put("message", message);
					    marketwatchMessage.put("stat", "Not_Ok");
						return new ResponseEntity<>(marketwatchMessage, HttpStatus.INTERNAL_SERVER_ERROR);
					}			
					
					return ResponseEntity.ok().body(marketwatchMessage);
					
					
					
				}
			 
			 
			 @RequestMapping(value="/getScriptValueOfMarketIdForMobile", method = RequestMethod.POST)
				public ResponseEntity<JSONObject> getScriptValueWithMarketwatchId(HttpServletRequest request, HttpServletResponse response,@RequestBody MarketWacthScript client) {
					
					ModelAndView mv = new ModelAndView("exchange-light");
					 HttpSession session = null;
					 JSONObject marketwatchMessage = new JSONObject();
				try {	 
						session = request.getSession();
						String userId = (String) session.getAttribute("userId");
						
					 MarketWacthScript script =new MarketWacthScript();
					 
					 script.setMarketwatchid(client.getMarketwatchid());
					 
					 List<MarketWacthScript> list= scriptImp.scripListOfMarketId(script);

						String message = "";
						if (list.size() > 0) {
							message = "MarketWatch Script Fetched Succesfully ";
							marketwatchMessage.put("message", message);
							marketwatchMessage.put("script", list);
							marketwatchMessage.put("stat", "Ok");

						} else {
							message = "MarketWatch Script not Fetched";
							marketwatchMessage.put("message", message);
							marketwatchMessage.put("stat", "Not_Ok");
						}
				} catch (Exception e) {

					  logger.error("Exception while parsing MarketWatch Script Fetched  " + e.getMessage());
					    String message = "we could not connect our server";			
					    marketwatchMessage.put("message", message);
					    marketwatchMessage.put("stat", "Not_Ok");
						return new ResponseEntity<>(marketwatchMessage, HttpStatus.INTERNAL_SERVER_ERROR);
					}		
					 
					 return ResponseEntity.ok().body(marketwatchMessage);
					
				}
			 
			 
			 
			
			 
	}

	 

