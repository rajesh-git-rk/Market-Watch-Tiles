package com.topaz.trading.controller;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.security.PrivateKey;
import java.security.PublicKey;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.regex.Pattern;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.json.simple.JSONObject;
import org.json.simple.JSONValue;
import org.keycloak.representations.AccessTokenResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.resource.PathResourceResolver;
import org.springframework.web.servlet.view.RedirectView;

import com.topaz.trading.Util.Publickey3Util;
import com.topaz.trading.keycloak.KeycloakLogincontroller;
import com.topaz.trading.model.GlobalSettings;
import com.topaz.trading.model.MarketWacthScript;
import com.topaz.trading.model.MarketWatch;
import com.topaz.trading.pojo.Questions;
import com.topaz.trading.repository.GlobalSettingsImpl;
import com.topaz.trading.repository.SaveAnswerImpl;
import com.topaz.trading.repository.ScriptImp;
import com.topaz.trading.repository.ScriptImp2;
import com.tr.nest.crypto.CryptoRSA;

@Controller
@RestController
public class LogincontrollerOmensys {

	@Autowired
	Publickey3Util publickey3Util;

	@Autowired
	MarketwatchProvider marketwatchProvider;
	
	@Autowired
	ScriptImp scriptImp;
	
	

	@Autowired
	SaveAnswerImpl saveAnswerImpl;
	
	@Autowired
	GlobalSettingsImpl globalSettingsImpl;
	
	@Autowired
	KeycloakLogincontroller keycloakLogincontroller;
	

	//private static Logger logger = LogManager.getLogger(Logincontroller.class);
	
	private static Logger logger = LoggerFactory.getLogger(LogincontrollerOmensys.class);



	@RequestMapping(value = "/Authenticate33", method = RequestMethod.POST)
	public ModelAndView CreateloginPage(HttpServletRequest request, HttpServletResponse response,
			@RequestParam String userId, @RequestParam String password) {
		String stat=null,tdata=null,message=null,ResetFlag=null,scount=null,sQuestions=null,sIndex=null,sPasswordReset=null;
		HttpSession session = request.getSession();
		session.setAttribute("userId", userId.toUpperCase());

		logger.info("User Login Authenticate clientId:" + userId.toUpperCase());

		ModelAndView mv = new ModelAndView("home");

		String sessionValue = (String) session.getAttribute("userId");

		String  Publickey3 = null, pubKey3 = null, eJdata = null, jKey = null, tomcatCount = null;

		try {

			/*
			 * The API document book-mark 03.01(getIntialKey), 03.01(getIntialKey),
			 * 03.02(GetPreAuthenticationKey)
			 */
			List<Object> publicKey3 = publickey3Util.authenticate(userId.toUpperCase());

			Publickey3 = publicKey3.get(0).toString();
			jKey = publicKey3.get(1).toString();
			tomcatCount = publicKey3.get(2).toString();
			session.setAttribute("publicKey3", Publickey3);
			session.setAttribute("tomcatCount", tomcatCount);

			
			// The API document book-mark 03.03(LoginMode)
			String loginMode = getLoginMode(Publickey3);
			
			

			// The API document book-mark ValidAnswers 04.01(ValidPwd)
			List<Object> authenticatePassword = getauthenticatePassword(userId.toUpperCase(),password, jKey, tomcatCount,request, response);

			stat = authenticatePassword.get(0).toString();			
			tdata = authenticatePassword.get(1).toString();
			
			if (stat.equals("Not_Ok") || tdata == null) {
				String Emsg=authenticatePassword.get(1).toString();
				mv.addObject("clientid", userId);
				mv.setViewName("login");
				mv.addObject("message", Emsg);
				return mv;
			}

			scount = authenticatePassword.get(2).toString();
			ResetFlag = authenticatePassword.get(3).toString();
			sQuestions = authenticatePassword.get(4).toString();
			sIndex = authenticatePassword.get(5).toString();

			session.setAttribute("sIndex", sIndex);
			session.setAttribute("scount", scount);
			
			logger.info("User Login ValidAnswers Response tdata is : " + tdata + " ResetFlag " + ResetFlag);

			if (tdata.equals(marketwatchProvider.getRegisterQuestion())) {

				mv.setViewName("displayquestions");

				// The API document book-mark Display questions 04.08 (Displayquestions)
				List<Object> displayQuestions = getQuestionList(sQuestions);

				mv.addObject("displayQuestions", displayQuestions.get(0));
				
				// delete the question-Answers -Index based on ClientId--Delete2FAQuestionAnwers
				saveAnswerImpl.deleteQuestionAnswerByClientId(userId.toUpperCase());

			}

			else if (tdata.equals(marketwatchProvider.getAnswertheQuestion())) {

				mv.setViewName("2FAQuestion");

				List<Object> questtionList = new ArrayList<Object>();
				questtionList.add(sQuestions);

				List<Object> displayQuestions = getQuestionList(sQuestions);

				mv.addObject("sQuestions", displayQuestions.get(0));

				return mv;
			}

			if (ResetFlag.equals(CommonFunction.YES)) {

				mv.setViewName("displayquestions");

				// The API document book-mark Display questions 04.08 (Displayquestions)
				List<Object> displayQuestions = getQuestionList(sQuestions);

				mv.addObject("sQuestions", displayQuestions.get(0));

				return mv;
			}

			else if (ResetFlag.equals(CommonFunction.NO)) {

				mv.setViewName("2FAQuestion");

				List<Object> questtionList = new ArrayList<Object>();
				questtionList.add(sQuestions);

				List<Object> displayQuestions = getQuestionList(sQuestions);

				mv.addObject("sQuestions", displayQuestions.get(0));

				return mv;
			}

			if (sPasswordReset.equals(CommonFunction.Y)) {

				logger.info("sPasswordReset : " + sPasswordReset);

				message = "Please Change Your Password!.";
				mv.addObject("clientid", userId);
				mv.setViewName("login");
				mv.addObject("message", message);
				return mv;

				// String Changepwd = getChangePasswordByUserId(tomcatCount, jKey, request,
				// response);

			}

			/*
			 * Reset Password ::Api Doc 4.25 (Confirmation Pending from PO) 
			 * String setPassword=setPasswordforUser(password,tomcatCount,jKey,request,response);
			 * 
			 */
		} catch (Exception e) {

			message = "we could not connect our server";
			mv.addObject("clientid", userId);
			mv.setViewName("login");
			mv.addObject("message", message);

			logger.error("Unexpected User Login Authenticate error", e.getCause());

		}
		return mv;
	}

	// Implementation of the Display Questions API document book-mark 04.08 [Displayquestions]
	public List<Object> getQuestionList(String sQuestions) {

		List<Object> questionsObjList = new ArrayList<Object>();
		ArrayList<Questions> questionsArrList = new ArrayList<Questions>();

		String[] sQuestionsArr = sQuestions.split(Pattern.quote("|"));

		for (int i = 0; i < sQuestionsArr.length; i++) {
			questionsArrList.add(new Questions("" + i + 1, sQuestionsArr[i].toString()));
		}

		questionsObjList.add(questionsArrList);

		return questionsObjList;
	}

//	 Implementation of the Login Mode API  document book-mark 03.03 [login]
	public String getLoginMode(String Publickey3) {

		StringBuffer loginmodestatus = new StringBuffer();
		String Loginurl = marketwatchProvider.getLoginurl();
		String output = null;

		try {

			URL loginurl = new URL(Loginurl);
			logger.info("User Login Mode Request URL :" + loginurl.toString());

			HttpURLConnection loginconn = (HttpURLConnection) loginurl.openConnection();
			loginconn.setRequestMethod("POST");
			loginconn.setRequestProperty("Accept", "application/json");

			logger.info("User Login Mode Response Code :" + loginconn.getResponseCode());

			if (loginconn.getResponseCode() != 200) {
				throw new RuntimeException("Failed : HTTP error code : " + loginconn.getResponseCode());
			}

			BufferedReader br = new BufferedReader(new InputStreamReader((loginconn.getInputStream())));

			while ((output = br.readLine()) != null) {
				loginmodestatus.append(output);
			}
			logger.info("User Login Mode Response Value :" + loginmodestatus);

			loginconn.disconnect();

		} catch (Exception e) {
					
			logger.error("Unexpected User Login Mode error", e.getMessage());
		}

		return loginmodestatus.toString();
	}

	// Implementation of the Password Validation API document book-mark 4.02[ValidPwd]
	public List<Object> getauthenticatePassword(String userId,String password, String jKey,String  tomcatCount, 
			 HttpServletRequest request, HttpServletResponse response) throws NoSuchAlgorithmException, UnsupportedEncodingException { 

		HttpSession session = request.getSession();
		//String UserId = (String) session.getAttribute("userId");

		JSONObject ValidPwdJson = new JSONObject();

		logger.info("User Login ValidPwd User: " + userId);
		String pwd = CommonFunction.hashDataPasswordIteration(password);
		
		JSONObject ValidPwdInputsJson = new JSONObject();
		
		ValidPwdInputsJson.put("uid", userId);		
		ValidPwdInputsJson.put("pwd", pwd);
		ValidPwdInputsJson.put("ftl", "N");
		ValidPwdInputsJson.put("apk", "1.6.1.12");
		ValidPwdInputsJson.put("Imei", "0000");
		ValidPwdInputsJson.put("loginDevice", "windows");
		ValidPwdInputsJson.put("Source", "WEB");			
		String eJdata =ValidPwdInputsJson.toJSONString();
		String output=null,stat=null,tdata=null,ResetFlag=null,scount=null,sQuestions=null,sIndex=null,Emsg=null;
		

		List<Object> authenticatePasswordList = null;
		try {
			StringBuffer ValidPwd = new StringBuffer(marketwatchProvider.getValidPwdurl());
			ValidPwd.append("jsessionid=" + "." + tomcatCount + "&jData=" + eJdata + "&jKey=" + jKey + "");

			URL ValidPwdurl = new URL(ValidPwd.toString());

			logger.info("User Login ValidPwd Request URL : " + ValidPwdurl.toString());

			HttpURLConnection ValidPwdconn = (HttpURLConnection) ValidPwdurl.openConnection();

			ValidPwdconn.setRequestMethod("POST");
			ValidPwdconn.setRequestProperty("Accept", "application/json");

			logger.info("User Login ValidPwd Response Code : " + ValidPwdconn.getResponseCode());

			if (ValidPwdconn.getResponseCode() != 200) {
				throw new RuntimeException("Failed : HTTP error code : " + ValidPwdconn.getResponseCode());
			}

			BufferedReader br2 = new BufferedReader(new InputStreamReader((ValidPwdconn.getInputStream())));
			

			while ((output = br2.readLine()) != null) {

				Object obj = JSONValue.parse(output);
				ValidPwdJson = (JSONObject) obj;
				stat = (String) ValidPwdJson.get("stat");
				tdata = (String) ValidPwdJson.get("tdata");
				scount = (String) ValidPwdJson.get("scount");
				ResetFlag = (String) ValidPwdJson.get("2faResetFlag");
				sQuestions = (String) ValidPwdJson.get("sQuestions");
				sIndex = (String) ValidPwdJson.get("sIndex");
				Emsg = (String) ValidPwdJson.get("Emsg");
				
			}
			
			session.setAttribute("sIndex", sIndex); 
			session.setAttribute("scount", scount); 
			
			ValidPwdconn.disconnect();
			logger.info("User Login ValidPwd Response Value : " + ValidPwdJson);
			
			authenticatePasswordList = new ArrayList<Object>();
			
			
			if(stat.equals("Not_Ok")) {
				authenticatePasswordList.add(stat);
				authenticatePasswordList.add(Emsg);
			}else {
				authenticatePasswordList.add(stat);
				authenticatePasswordList.add(tdata);
				authenticatePasswordList.add(scount);
				authenticatePasswordList.add(ResetFlag);
				authenticatePasswordList.add(sQuestions);
				authenticatePasswordList.add(sIndex);
			}		

			
		} catch (Exception e) {
			stat="Not_Ok";
			Emsg = "we could not connect our server";		
			authenticatePasswordList.add(stat);
			authenticatePasswordList.add(Emsg);
			logger.error("Unexpected User Login ValidPwd  error", e.getMessage());

		}

		return authenticatePasswordList;
	}

	


	//==================  "/Save2FA-Answer" ============================
	
	// Implementation of the Answer Validation API document book-mark
		// 04.03[ValidAns]
		@RequestMapping(value = "/Save2FA-Answer", method = RequestMethod.POST)
		public ModelAndView Save2FAQuestionAnswers(@RequestParam("answerId") String answerId,HttpServletRequest request,
				HttpServletResponse response) throws UnsupportedEncodingException, NoSuchAlgorithmException {

			ModelAndView mv = new ModelAndView("home");
			String output=null,stat=null,tdata=null,Message=null,sLastAccessInSec=null,sPasswordReset=null;
			String sUserToken=null,UserSessionID=null,loginid=null,loginMessage=null;
			
			
			/*
			 * Here Count as defined from ValidPwd response value scount as is defined
			 * format ex:1-1 Ex:UserId,Count=scount,as=1-1,is=sIndex.replace('|', '-')
			 * 
			 */
			

			String as = answerId.replace(',', '-');

			List<String> AnswerValidationList = null;
			HttpSession session = null;
			session = request.getSession();

			String UserId = (String) session.getAttribute("userId");
			String publickey3 = (String) session.getAttribute("publicKey3");
			String tomcatCount = (String) session.getAttribute("tomcatCount");
			String jKey = CommonFunction.hashData(publickey3);
			String sIndex =(String) session.getAttribute("sIndex"); 
			String scount =(String) session.getAttribute("scount"); 

			/* sIndex=(String)session.getAttribute(sIndex);	 */

			JSONObject ValidAnsInputJson = new JSONObject();
			JSONObject AnswerValidationJson = new JSONObject();

			ValidAnsInputJson.put("uid", UserId);
			ValidAnsInputJson.put("Count", scount); // Count as defined from ValidPwd response value scount
			ValidAnsInputJson.put("as", as);
			ValidAnsInputJson.put("is", sIndex.replace('|', '-'));

			String ValidAnsInputJdata = ValidAnsInputJson.toJSONString();

			try {
				StringBuffer ValidAns = new StringBuffer(marketwatchProvider.getValidAnsurl());
				ValidAns.append("jsessionid=" + "." + tomcatCount + "&jData=" + ValidAnsInputJdata + "&jKey=" + jKey + "");

				URL ValidAnsurl = new URL(ValidAns.toString());

				logger.info("User Login  ValidAns Request URL : " + ValidAnsurl);

				HttpURLConnection ValidAnsconn = (HttpURLConnection) ValidAnsurl.openConnection();
				ValidAnsconn.setRequestMethod("POST");
				ValidAnsconn.setRequestProperty("Accept", "application/json");

				logger.info("User Login  ValidAns Response Code  : " + ValidAnsconn.getResponseCode());

				if (ValidAnsconn.getResponseCode() != 200) {
					throw new RuntimeException("Failed : HTTP error code : " + ValidAnsconn.getResponseCode());
				}

				BufferedReader br3 = new BufferedReader(new InputStreamReader((ValidAnsconn.getInputStream())));
				
			
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
				logger.info("User Login  ValidAns 2FA Response   stat : " + AnswerValidationJson);

				 logger.info("User Login ValidAns Response 2FA stat : "+stat+" Message :"+Message+
						 " loginid : "+loginid+" loginMessage : "+loginMessage+
						 "sPasswordReset : "+sPasswordReset);

				ValidAnsconn.disconnect();
			} catch (Exception e) {
				logger.error("Unexpected User Login  ValidAns error", e.getMessage());

			}
				String message=null;
				String PublicKey4 = sUserToken;
				session.setAttribute("publicKey4", PublicKey4);
				session.setAttribute("TomcatCount", tomcatCount);
				session.setAttribute("userId", UserId);
				session.setAttribute("jKey", jKey);
				session.setAttribute("scount", scount);
		
		 
		 if(stat.equals("Ok") && loginMessage==null || Message==null) {
			
				message="Invalid Answers";
				mv.addObject("message",message);
				//mv.setViewName("2FAQuestion");
				//mv.re("home");
				mv.setViewName("2FAQuestion");
			}
		 else if(stat.equals("Ok")) {
			 
			 String AccessToken = "AccessToken";
			 String RefreshToken = "RefreshToken";			 
			 
			/* 
			 * AccessTokenResponse accessToken = keycloakLogincontroller.loginKeycloak();
			 * String AccessTokenval=accessToken.getToken();
			 * String RefreshTokenval=accessToken.getRefreshToken();
			 
			 //Cookie cookie = new Cookie(AccessToken, Accessvalue);
			 // response.addCookie(cookie);
			 
			 response.addCookie(new Cookie(AccessToken,AccessTokenval));
			 response.addCookie(new Cookie(RefreshToken,RefreshTokenval));	
			 
			 */		
			 
			 
			 mv.setViewName("redirect:/home");
			 
			}
		 
			else if(stat.equals("Not_Ok")) {
				mv.setViewName("redirect:/login");
			}else {
				mv.setViewName("redirect:/home");
			}
		 
		 
			return mv;
			
	}	

	
	// ================== "/SaveAns for the 5/20 questions"
		// ============================

		// Implementation of the SaveAnswer API document book-mark 04.09 [SaveAns]
		@RequestMapping(value = "/SaveAns", method = RequestMethod.POST)
		public ModelAndView SaveQuestionAnswers(@RequestParam("IndexAns") String IndexAns, HttpServletRequest request,
				HttpServletResponse response) throws UnsupportedEncodingException, NoSuchAlgorithmException {

			StringBuilder sb = new StringBuilder(IndexAns);

			String[] strArray = sb.toString().trim().split("\\s*,\\s*");

			StringBuilder stringBuilder = new StringBuilder();

			for (int i = 0; i < strArray.length; i++) {
				stringBuilder.append(strArray[i] + '|');
			}

			String joinedString = stringBuilder.toString();

			String IndexWithAnswer = joinedString.substring(0, joinedString.lastIndexOf("|"));

			ModelAndView mv = new ModelAndView("");
			String output=null,stat=null,Result=null,Emsg=null,message=null;
			HttpSession session = null;
			session = request.getSession();

			String UserId = (String) session.getAttribute("userId");
			String publickey3 = (String) session.getAttribute("publicKey3");
			String tomcatCount = (String) session.getAttribute("tomcatCount");

			String jKey = CommonFunction.hashData(publickey3);

			StringBuffer SaveAnsResponse = new StringBuffer();

			JSONObject SaveAnswerJson = new JSONObject();

			SaveAnswerJson.put("uid", UserId);
			SaveAnswerJson.put("qa", IndexWithAnswer);
//				SaveAnswerJson.put("qa", indexId|answerId);
//				SaveAnswerJson.put("qa", "1|1|2|1|3|1|4|1|5|1");

			String SaveJdata = SaveAnswerJson.toJSONString();
			JSONObject SaveAnsResponseJson = new JSONObject();
			try {
				StringBuffer SaveAns = new StringBuffer(marketwatchProvider.getSaveAnsurl());
				SaveAns.append("jsessionid=" + "." + tomcatCount + "&jData=" + SaveJdata + "&jKey=" + jKey);

				URL SaveAnsurL = new URL(SaveAns.toString());

				logger.info("User Login  SaveAns  Request URL :" + SaveAnsurL.toString());

				HttpURLConnection SaveAnsconn = (HttpURLConnection) SaveAnsurL.openConnection();
				SaveAnsconn.setRequestMethod("POST");
				SaveAnsconn.setRequestProperty("Accept", "application/json");

				logger.info("User Login SaveAns Response Code :" + SaveAnsconn.getResponseCode());

				if (SaveAnsconn.getResponseCode() != 200) {
					throw new RuntimeException("Failed : HTTP error code : " + SaveAnsconn.getResponseCode());
				}

				BufferedReader SaveAnsbr = new BufferedReader(new InputStreamReader((SaveAnsconn.getInputStream())));
				
				
				
				while ((output = SaveAnsbr.readLine()) != null) {

					Object objec = JSONValue.parse(output);
					SaveAnsResponseJson = (JSONObject) objec;

					String SaveAnsSendData = SaveAnsResponseJson.toJSONString();
					objec = JSONValue.parse(SaveAnsSendData);
					SaveAnsResponseJson = (JSONObject) objec;
					stat = (String) SaveAnsResponseJson.get("stat");
					Result = (String) SaveAnsResponseJson.get("Result");
					Emsg = (String) SaveAnsResponseJson.get("Emsg");
				}

				logger.info("User Login SaveAnswer Response Value :" + SaveAnsResponseJson);

				SaveAnsconn.disconnect();

			} catch (Exception e) {
				logger.error("Unexpected User Login SaveAnswer error", e.getMessage());

			}

			if (stat.equals("Ok")) {
				message = Result;
				mv.addObject("message", message);
				mv.setViewName("login");
			} else if (stat.equals("Not_Ok")) {
				message = Emsg;
				mv.addObject("message", message);
				mv.setViewName("displayquestions");

			}

			return mv;

		}

		// Implementation of the Reset Password API document book-mark 4.25 [SetPassword]
		
		public String setPasswordforUser(String password, String tomcatCount, String jKey, HttpServletRequest request,
				HttpServletResponse response) {

			HttpSession session = request.getSession();
			String UserId = (String) session.getAttribute("userId");
			
			String output=null,stat=null,message=null;

			logger.info("setPasswordforUser : " + UserId);

			JSONObject SetPasswordInputJson = new JSONObject();
			JSONObject SetPasswordJson = new JSONObject();

			try {
				String pwd = password;
				pwd = CommonFunction.hashDataPasswordIteration(pwd);

				SetPasswordInputJson.put("uid", UserId);
				SetPasswordInputJson.put("password", pwd);

				String SetPasswordInputJdata = SetPasswordInputJson.toJSONString();

				StringBuffer SetPasswordsb = new StringBuffer(marketwatchProvider.getSetPasswordurl());
				SetPasswordsb.append(
						"jsessionid=" + "." + tomcatCount + "&jData=" + SetPasswordInputJdata + "&jKey=" + jKey + "");

				URL SetPasswordURL = new URL(SetPasswordsb.toString());

				HttpURLConnection SetPasswordconn = (HttpURLConnection) SetPasswordURL.openConnection();
				SetPasswordconn.setRequestMethod("POST");
				SetPasswordconn.setRequestProperty("Accept", "application/json");

				if (SetPasswordconn.getResponseCode() != 200) {
					throw new RuntimeException("Failed : HTTP error code : " + SetPasswordconn.getResponseCode());
				}
				BufferedReader br3 = new BufferedReader(new InputStreamReader((SetPasswordconn.getInputStream())));
					
				while ((output = br3.readLine()) != null) {

					Object objec = JSONValue.parse(output);
					SetPasswordJson = (JSONObject) objec;

					String SendData = SetPasswordJson.toJSONString();
					objec = JSONValue.parse(SendData);
					SetPasswordJson = (JSONObject) objec;

					stat = (String) SetPasswordJson.get("stat");
					message = (String) SetPasswordJson.get("message");
				}

				logger.info("==== Response for SetPassword ======");
				logger.info("stat " + stat + "\n message " + message + "");

				SetPasswordconn.disconnect();

			} catch (Exception e) {
				logger.error("Unexpected SetPassword error : " + e.getMessage());

			}

			return SetPasswordJson.toJSONString();
		}

		// Implementation of the Change Password API document book-mark 4.12 [Changepwd]
		public String getChangePasswordByUserId(String tomcatCount, String jKey, HttpServletRequest request,
				HttpServletResponse response) {

			JSONObject ChangepwdInputJson = new JSONObject();
			HttpSession session = request.getSession();
			String UserId = (String) session.getAttribute("userId");

			logger.info("Changepwd By UserId" + UserId);

			ChangepwdInputJson.put("uid", UserId);
			ChangepwdInputJson.put("sOldPwd", "abc123");
			ChangepwdInputJson.put("sNewPwd", "abc@123");
//			ChangepwdInputJson.put("sOldTPwd", "");
//			ChangepwdInputJson.put("sNewTPwd", "");
			ChangepwdInputJson.put("sTxFlag", "NO");
			String output=null,stat=null,message=null,Pstatus=null,Result=null;
			String ChangepwdInputJdata = ChangepwdInputJson.toJSONString();
			JSONObject ChangepwdJson = new JSONObject();
			try {
				StringBuffer Changepwd = new StringBuffer(marketwatchProvider.getChangepwdurl());
				Changepwd
						.append("jsessionid=" + "." + tomcatCount + "&jData=" + ChangepwdInputJdata + "&jKey=" + jKey + "");

				URL ChangepwdURL = new URL(Changepwd.toString());
				HttpURLConnection Changepwdconn = (HttpURLConnection) ChangepwdURL.openConnection();
				Changepwdconn.setRequestMethod("POST");
				Changepwdconn.setRequestProperty("Accept", "application/json");

				if (Changepwdconn.getResponseCode() != 200) {
					throw new RuntimeException("Failed : HTTP error code : " + Changepwdconn.getResponseCode());
				}
				BufferedReader br3 = new BufferedReader(new InputStreamReader((Changepwdconn.getInputStream())));
				
				while ((output = br3.readLine()) != null) {

					Object objec = JSONValue.parse(output);
					ChangepwdJson = (JSONObject) objec;

					String SendData = ChangepwdJson.toJSONString();
					objec = JSONValue.parse(SendData);
					ChangepwdJson = (JSONObject) objec;

					stat = (String) ChangepwdJson.get("stat");
					Pstatus = (String) ChangepwdJson.get("stat");
					Result = (String) ChangepwdJson.get("stat");

				}

				logger.info("====== Response for Changepwd ======");
				logger.info("stat " + stat + "\nPstatus " + Pstatus + "\nResult " + Result + "");

				Changepwdconn.disconnect();

			} catch (Exception e) {
				logger.error("Unexpected ChangePassword error", e.getMessage());

			}
			return ChangepwdJson.toJSONString();
		}

		
		@RequestMapping(value="/LogoutOmensys", method = RequestMethod.GET)
	public RedirectView Logout(HttpServletRequest request, HttpServletResponse response) {
		
		
		ModelAndView mav=null;
		 
		 RedirectView rv=null;
		 
		 HttpSession session = null;
			session = request.getSession();
			String userId = (String) session.getAttribute("userId");
			
			String outputValue=null;
			String publicKey4 = (String) session.getAttribute("publicKey4");
			
			String TomcatCount = (String) session.getAttribute("TomcatCount");

			JSONObject LogoutInputJson = new JSONObject();
			
			System.out.println("userId:::"+userId);


			LogoutInputJson.put("uid", userId);


			String LogoutJsonInputJdata = LogoutInputJson.toJSONString();
			JSONObject OrderBookValidationJson = new JSONObject();
			List<String> OrderBookValidationList = null;
			 String outputval="";
			 String json="";
			 JSONObject LogoutJson=null;

			try {
				String jKey =  CommonFunction.hashData(publicKey4);
				StringBuffer LogoutAns = new StringBuffer(marketwatchProvider.getLogouturl());
				LogoutAns.append("jsessionid=" + "." + TomcatCount + "&jData=" + LogoutJsonInputJdata + "&jKey=" + jKey + "");

				URL Logouturl = new URL(LogoutAns.toString());
				
				logger.info("Logout Request URL : "+Logouturl.toString());
				
				HttpURLConnection Logoutconn = (HttpURLConnection) Logouturl.openConnection();
				Logoutconn.setRequestMethod("POST");
				Logoutconn.setRequestProperty("Accept", "application/json");
				
				
				logger.info("Logout Response Code : "+Logoutconn.getResponseCode());
				
				if (Logoutconn.getResponseCode() != 200) {
					throw new RuntimeException("Failed : HTTP error code : " + Logoutconn.getResponseCode());
				}

				BufferedReader br3 = new BufferedReader(new InputStreamReader((Logoutconn.getInputStream())));
				
				
				String output;
				
				while ((output = br3.readLine()) != null) {
					
					Object obj = JSONValue.parse(output);
					LogoutJson = (JSONObject) obj;
					
				}
				
				
				outputValue=LogoutJson.toJSONString();

			    String stat = (String) LogoutJson.get("stat");
				
				logger.info("Logout Response Value : "+outputValue);
				
				logger.info("stat: "+stat);
				
                if(stat.equalsIgnoreCase("Ok")) {
                	
                	session.removeAttribute("userId");
                	
                	rv=new RedirectView("login");
                }else {
                	//rv= new RedirectView("dashboard");
                	rv= new RedirectView("home");
                	
                }
                
				Logoutconn.disconnect();

			} catch (Exception e) {
				
				e.printStackTrace();
				logger.error("Unexpected ValidAns error", e.getMessage());

			}
		 
			return rv;
		
	}
		
		
		
		//======================================================UNBLOCK USER================================================================================

		@RequestMapping(value ="/UnblockUser", method = RequestMethod.POST)
	     public ModelAndView UnblockUserPage(HttpServletRequest request, HttpServletResponse response)
			 { 
		         	ModelAndView mv = new ModelAndView("unblockUser");
		            return mv;
			 }

				
 //Implementation of the Answer Validation API  document book-mark  04.16[CHECK AVAILABILITY OF PAN AND DOB]	
			
	public List<Object> CheckAvailabilityofPanAndDobByUserId(String userId,HttpServletRequest request, HttpServletResponse response) throws UnsupportedEncodingException, NoSuchAlgorithmException {
			
		String stat=null,dob=null,emailaddress=null,pannumber=null,output=null,Emsg=null;

		List<Object>CheckAvailabilityofPanAndDobList = new ArrayList<Object>();	

		HttpSession session = null;
		session = request.getSession();

		
		List<Object> publicKey3 = publickey3Util.authenticate(userId.toUpperCase());
		
		
		String Publickey3 = publicKey3.get(0).toString();                     
		String tomcatCount = publicKey3.get(1).toString(); 
		
		
		System.out.println("Publickey3 : "+Publickey3); 
		session.setAttribute("publicKey3", Publickey3);
		session.setAttribute("tomcatCount",tomcatCount);

	    System.out.println("publickey3"+Publickey3);

		JSONObject CheckPANDOBInputJson = new JSONObject();
		JSONObject CheckPANDOBoutputJson = new JSONObject();

		CheckPANDOBInputJson.put("uid", userId);

		String CheckPANDOBInputJdata = CheckPANDOBInputJson.toJSONString();


		try {			
			
			String jKey=CommonFunction.hashData(Publickey3);
			StringBuffer CheckPANDOB = new StringBuffer(marketwatchProvider.getCheckPANDOBurl());
			CheckPANDOB.append("jsessionid=" + "." + tomcatCount + "&jData=" +CheckPANDOBInputJdata + "&jKey=" + jKey + "");

			URL CheckPANDOBurl = new URL(CheckPANDOB.toString());

			logger.info("CheckPANDOBurl : "+CheckPANDOBurl);

			HttpURLConnection CheckPANDOBconn = (HttpURLConnection)CheckPANDOBurl.openConnection();
			CheckPANDOBconn.setRequestMethod("POST");
			CheckPANDOBconn.setRequestProperty("Accept", "application/json");

			logger.info("CheckPANDOBurl Responsecode  : "+CheckPANDOBconn.getResponseCode());

			if (CheckPANDOBconn.getResponseCode() != 200) {
				throw new RuntimeException("Failed : HTTP error code : " + CheckPANDOBconn.getResponseCode());
			}

			BufferedReader br3 = new BufferedReader(new InputStreamReader((CheckPANDOBconn.getInputStream())));

			while ((output = br3.readLine()) != null) {

				Object objec = JSONValue.parse(output);
				CheckPANDOBoutputJson = (JSONObject) objec;

				stat = (String) CheckPANDOBoutputJson.get("stat");
				dob = (String)CheckPANDOBoutputJson.get("dob");
				emailaddress=(String)CheckPANDOBoutputJson.get("emailaddress");
				pannumber=(String)CheckPANDOBoutputJson.get("pannumber");
				Emsg=(String)CheckPANDOBoutputJson.get("Emsg");

			}
			logger.info("CheckPANDOBurl Response  Value of stat : "+stat+"  dob: "+dob+" emailaddress : "+emailaddress+" pannumber : "+pannumber); 

			CheckPANDOBconn.disconnect();

		} catch (Exception e) {
			logger.error("Unexpected CheckPANDOB error", e.getMessage());

		}
			if(stat.equals("Ok"))
			{
				CheckAvailabilityofPanAndDobList .add(stat);
				CheckAvailabilityofPanAndDobList .add(dob);
				CheckAvailabilityofPanAndDobList .add(emailaddress);
				CheckAvailabilityofPanAndDobList .add(pannumber);
				
			}
			else if((stat.equals("Not_Ok")))
			{
				CheckAvailabilityofPanAndDobList .add(stat);
				CheckAvailabilityofPanAndDobList .add(Emsg);
				
			}
			

		return CheckAvailabilityofPanAndDobList;

	} 


	
		
	@RequestMapping(value = "/UnblockUserAPI", method = RequestMethod.POST)
	 public ModelAndView Unblock(@RequestParam("userId")  String userId,@RequestParam("emailId")  String emailId,@RequestParam("panNo")  String panNo,
						HttpServletRequest request, HttpServletResponse response) throws UnsupportedEncodingException, NoSuchAlgorithmException { 
				
				String stat=null,stat1=null,Result=null,emailaddress=null,pannumber=null,message,Emsg=null;
				
						ModelAndView mv = new ModelAndView("login"); 
						 
				     	System.out.println("userId: "+userId);
						System.out.println("emailId: "+emailId);
						System.out.println("PanNo: "+panNo);
						
						try {
						
						List<Object> CheckAvailabilityofPanAndDob=CheckAvailabilityofPanAndDobByUserId(userId,request,response);
						
						System.out.println("CheckAvailabilityofPanAndDob" + CheckAvailabilityofPanAndDob.size());
										
						if(CheckAvailabilityofPanAndDob.size()>2)
						{
						stat1=CheckAvailabilityofPanAndDob.get(0).toString();
						//dob =CheckAvailabilityofPanAndDob.get(1).toString();
						emailaddress=CheckAvailabilityofPanAndDob.get(2).toString();
						pannumber=CheckAvailabilityofPanAndDob.get(3).toString();
						}
						
						else if(CheckAvailabilityofPanAndDob.size()==2)
						{
						stat1=CheckAvailabilityofPanAndDob.get(0).toString();
						Emsg=CheckAvailabilityofPanAndDob.get(1).toString();
						
						}
					
				     	if(stat1.equals("Ok") && emailaddress.equals(emailId) && pannumber.equals(panNo)){
				     	
	                      // 3.07 API
				     		List <Object> UnblockUserPageResponseList=UnblockUserPage(userId,request,response);

				     		stat = (String) UnblockUserPageResponseList.get(0).toString();
				     		Result = (String)UnblockUserPageResponseList.get(1).toString();

				     		if(stat.equals("Ok"))
				     		{
				     			mv.setViewName("login");
				     			mv.addObject("message",Result);
				     			return mv;

				     		}
				     		else if(stat.equals("Not_Ok")) {
				     			mv.setViewName("unblockUser");
				     			mv.addObject("message",Result);
				     			return mv;
				     		}
				     	 }

                      else {
				    		
				    		if(emailId==""&& panNo=="") { 
				    			message = "Please fill in the details";
				    			mv.setViewName("unblockUser");
				    			mv.addObject("message",message);
				    			return mv;
				    		}
				    		else {

				    			message = "Please enter the correct details";
				    			mv.setViewName("unblockUser");
				    			mv.addObject("message",message);
				    			return mv;
				    		}
				    		
                      }
				    
			   } catch (Exception e) {
					
					message = "we could not connect our server";
					mv.addObject("message", message);
					mv.setViewName("unblockUser");
					return mv;

				}
		 		  return mv;
							
		}	
					
		
	//Implementation of the UNBLOCK USER API  document book-mark  3.07[UNBLOCK USER]	

			
    public List<Object> UnblockUserPage( String userId,HttpServletRequest request, HttpServletResponse response) throws UnsupportedEncodingException, NoSuchAlgorithmException { 

				String stat=null,Result=null,output=null;
					
					List<Object>UnblockUserList = new ArrayList<Object>();	

					System.out.println(" userId : "+userId); 

					HttpSession session = null;
					session = request.getSession();
					
					List<Object> publicKey3 = publickey3Util.authenticate(userId.toUpperCase());
					
					
					String Publickey3 = publicKey3.get(0).toString();                     
					String tomcatCount = publicKey3.get(1).toString(); 
					
					
					System.out.println("Publickey3 : "+Publickey3); 
					session.setAttribute("publicKey3", Publickey3);
					session.setAttribute("tomcatCount",tomcatCount);

				    System.out.println("publickey3"+Publickey3);
					
					JSONObject UnblockUserInputJson = new JSONObject();
					JSONObject UnblockUseroutputJson = new JSONObject();

					UnblockUserInputJson.put("uid", userId);

					String 	UnblockUserInputJdata =  UnblockUserInputJson.toJSONString();


					try {	
						
						String jKey=CommonFunction.hashData(Publickey3);
						
						StringBuffer UnblockUser = new StringBuffer(marketwatchProvider.getUnblockUserurl());
						UnblockUser.append("jsessionid=" + "." + tomcatCount + "&jData=" + UnblockUserInputJdata + "&jKey=" + jKey + "");

						URL UnblockUserurl = new URL(UnblockUser.toString());

						logger.info("UnblockUserurl : "+UnblockUserurl);

						HttpURLConnection UnblockUserconn = (HttpURLConnection)UnblockUserurl.openConnection();
						UnblockUserconn.setRequestMethod("POST");
						UnblockUserconn.setRequestProperty("Accept", "application/json");

						logger.info("UnblockUserurl Responsecode  : "+UnblockUserconn.getResponseCode());

						if (UnblockUserconn.getResponseCode() != 200) {
							throw new RuntimeException("Failed : HTTP error code : " + UnblockUserconn.getResponseCode());
						}

						BufferedReader br3 = new BufferedReader(new InputStreamReader((UnblockUserconn.getInputStream())));

						while ((output = br3.readLine()) != null) {

							Object objec = JSONValue.parse(output);
							UnblockUseroutputJson = (JSONObject) objec;

							stat = (String) UnblockUseroutputJson.get("stat");
							Result = (String)UnblockUseroutputJson.get("Result");

						}
						logger.info("UnblockUserurl Response  Value:  stat : "+stat+" Result: "+Result); 
						UnblockUserconn.disconnect();
						

					} catch (Exception e) {
						logger.error("Unexpected UnblockUser error", e.getMessage());

					}
					

					UnblockUserList.add(stat);
					UnblockUserList.add(Result);
					
					return UnblockUserList;

				}	

				
			
			
		//===================================================================================================================================

	// Watch List start		
	
    @RequestMapping(value="/getScriptValueOfMarketIdForWeb", method = RequestMethod.POST)
	public ResponseEntity<List<MarketWacthScript>> getScriptValueWithMarketwatchIdWeb(HttpServletRequest request, HttpServletResponse response,@RequestParam String marketwatchid) {
		
	 
	 System.out.println("marketwatchid : "+marketwatchid);
		 HttpSession session = null;
			session = request.getSession();
			List<MarketWacthScript> list=null;
	try {	
			String userId = (String) session.getAttribute("userId");
			
		 MarketWacthScript script =new MarketWacthScript();
		 
		 MarketWatch mw=new MarketWatch();
		 
		 mw.setMarketwatchid(Integer.parseInt(marketwatchid));
		 
		 script.setMarketwatchid(mw);
		 
		list= scriptImp.scripListOfMarketId(script);
		 

	} catch (Exception e) {

		  logger.error("Exception while parsing MarketWatch Script Fetched  " + e.getMessage());
		}
		 
		 return ResponseEntity.ok().body(list);
		
	}
 
@RequestMapping(value="/reNameMarketWatchForWeb", method = RequestMethod.POST)
public ResponseEntity<JSONObject> reNameMarketWatchForWeb(HttpServletRequest request, HttpServletResponse response,@RequestParam String marketwatchid, @RequestParam String marketwatch_name) {
		
		 
		 HttpSession session = null;
			session = request.getSession();
			 JSONObject marketwatchMessage = new JSONObject();
try {		 
			String userId = (String) session.getAttribute("userId");
			
		 MarketWatch script =new MarketWatch();
  System.out.println("marketwatchid"+marketwatchid);
  System.out.println("userId"+userId);
  System.out.println("marketwatch_name"+marketwatch_name);

         script.setMarketwatchid(Integer.parseInt(marketwatchid));
         
		 script.setUserId(userId);
		 script.setMarketwatch_name(marketwatch_name);
		 
		 List<MarketWatch>  list= scriptImp.reNameMarketWatchList(script);
		 	

			String message = "";
			if (list.size() > 0) {
				message = "MarketWatch Rename Updated Succesfully ";
				marketwatchMessage.put("message", message);
				marketwatchMessage.put("script", list);
				marketwatchMessage.put("stat", "Ok");

			} else {
				message = "MarketWatch Rename not Updated";
				marketwatchMessage.put("message", message);
				marketwatchMessage.put("stat", "NotOk");
			}
			
  } catch (Exception e) {

	  logger.error("Exception while parsing MarketWatch Script Fetched  " + e.getMessage());
	}	
		 
		return ResponseEntity.ok().body(marketwatchMessage);
		
		
		
	}
 
@RequestMapping(value="/getMarketwatchListCount", method = RequestMethod.POST)
public ResponseEntity<JSONObject> getMarketwatchListCount(HttpServletRequest request, HttpServletResponse response,@RequestParam String marketwatchid) {


System.out.println("marketwatchid : "+marketwatchid);
 HttpSession session = null;
	session = request.getSession();
	JSONObject marketwatchMessage = new JSONObject();
	
try {	
	String userId = (String) session.getAttribute("userId");
	
 MarketWacthScript script =new MarketWacthScript();
 
 MarketWatch mw=new MarketWatch();
 
 mw.setMarketwatchid(Integer.parseInt(marketwatchid));
 
 script.setMarketwatchid(mw);
 
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
}
 
 return ResponseEntity.ok().body(marketwatchMessage);

}			

//Watch List end		

/*------------------------------------------------------------------------------------------------------------------	*/	


@RequestMapping(value="/getFooterDetails", method = RequestMethod.POST)
public ResponseEntity<List<GlobalSettings>> getFooterDetails(HttpServletRequest request, HttpServletResponse response) {
	
 
        // System.out.println("inside getfooterdetails function");
     
        List<GlobalSettings> list=globalSettingsImpl.FooterDetails();
	    return ResponseEntity.ok().body(list);
	
}



		
}
