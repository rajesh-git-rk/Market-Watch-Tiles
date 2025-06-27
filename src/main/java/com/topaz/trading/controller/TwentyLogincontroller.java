//package com.topaz.trading.controller;
//
//import java.io.BufferedReader;
//import java.io.InputStreamReader;
//import java.io.UnsupportedEncodingException;
//import java.net.HttpURLConnection;
//import java.net.URL;
//import java.security.MessageDigest;
//import java.security.NoSuchAlgorithmException;
//import java.security.PrivateKey;
//import java.security.PublicKey;
//import java.util.ArrayList;
//import java.util.List;
//import java.util.regex.Pattern;
//
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;
//import javax.servlet.http.HttpSession;
//
//import org.apache.logging.log4j.LogManager;
//import org.apache.logging.log4j.Logger;
//import org.json.simple.JSONObject;
//import org.json.simple.JSONValue;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Controller;
//
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestMethod;
//import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.bind.annotation.RestController;
//import org.springframework.web.servlet.ModelAndView;
//import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
//import org.springframework.web.servlet.resource.PathResourceResolver;
//
//import com.topaz.trading.Util.Publickey3Util;
//import com.topaz.trading.model.Questions;
//import com.tr.nest.crypto.CryptoRSA;
//
//@Controller
//@RestController
//public class TwentyLogincontroller {
//
//	
//	
//	@Autowired
//	Publickey3Util publickey3Util;
//	
//	@Autowired
//	MarketwatchProvider marketwatchProvider;
//	
//	private static Logger logger = LogManager.getLogger(TwentyLogincontroller.class);
//
//	public String sessionValue,stat, tdata, sQuestions, scount, sIndex, Emsg, Message, sLastAccessInSec, sPasswordReset, sUserToken,
//			tomcatCount, UserSessionID, ejData, output, Pstatus, Result, mode, message, pwd, Count, as, is, qa, loginid,
//			loginMessage, uid, PublicKey4;
//
//	String ResetFlag = "2faResetFlag";
//
//	
//	PrivateKey PrivateKey2;
//
//	@RequestMapping(value = "/Authenticate", method = RequestMethod.POST)
//	public ModelAndView CreateloginPage(HttpServletRequest request, HttpServletResponse response,
//			@RequestParam String userId, @RequestParam String password) {
//	
//		HttpSession session = request.getSession();
//		session.setAttribute("userId", userId);
//
//		logger.info("Your userId is:" + userId);
//
//		ModelAndView mv = new ModelAndView("dashboard"); 
//		
//		
//		sessionValue = (String) session.getAttribute("userId");
//
//		String loginMode=null,Publickey3 = null, pubKey3 = null, eJdata = null, jKey = null, tomcatCount = null;
//
//		/*
//		 * 		 The API document book-mark 03.01(getIntialKey), 03.01(getIntialKey),
//		 * 		  03.02(GetPreAuthenticationKey)
//		 * 
//		*/
//		 
//
//		List<Object> publicKey3 = publickey3Util.authenticate(userId, password);
//		
//		
//		Publickey3 = publicKey3.get(0).toString();
//		pubKey3 = publicKey3.get(1).toString();
//		eJdata = publicKey3.get(2).toString();
//		jKey = publicKey3.get(3).toString();
//		tomcatCount = publicKey3.get(4).toString();
//		PrivateKey2 = (PrivateKey) publicKey3.get(5);
//
//		// The API document book-mark 03.03(LoginMode)
//		loginMode = getLoginMode(Publickey3);
//
////		mv.addObject("loginMode", loginMode);
//
//		// The API document book-mark ValidAnswers 04.01(ValidPwd)
//		List<Object> authenticatePassword = getauthenticatePassword(Publickey3, pubKey3, eJdata, jKey, tomcatCount,
//				request, response);
//
//		logger.info("authenticatePassword Response : " + authenticatePassword.toString());
//
//		tdata = authenticatePassword.get(1).toString();
//		scount = authenticatePassword.get(2).toString();
//		ResetFlag = authenticatePassword.get(3).toString();
//		sQuestions = authenticatePassword.get(4).toString();
//
//		mv.setViewName("displayquestions");
//
//		logger.info("tdata is : " + tdata);
//		
////		System.out.println("tdata : "+marketwatchProvider.getAnswertheQuestion()); 
//		
//		if (tdata.equals(marketwatchProvider.getRegisterQuestion())) {
//
//			mv.setViewName("displayquestions");
//
//			// The API document book-mark Display questions 04.08 (Displayquestions)
//			List<Object> displayQuestions = getQuestionList(sQuestions);
//
//			mv.addObject("displayQuestions", displayQuestions.get(0));
//
//			// The API document book-mark 04.09 (SaveAns)
//			String SaveAns = SaveQuestionAnswers(jKey, tomcatCount, request, response);
//			return mv;
//
//		}
//
//		else if (tdata.equals(marketwatchProvider.getAnswertheQuestion())) {
//			mv.setViewName("dashboard");
//
//			// The API document book-mark Answer Validation 04.03(ValidAns)
//
//			List<String> AnswerValidation = getAnswerValidation(jKey, tomcatCount, request, response);
//
//			stat = AnswerValidation.get(0).toString();
//			tdata = AnswerValidation.get(1).toString();
//			Message = AnswerValidation.get(2).toString();
//			sLastAccessInSec = AnswerValidation.get(3).toString();
//			sPasswordReset = AnswerValidation.get(4).toString();
//			sUserToken = AnswerValidation.get(5).toString();
//			UserSessionID = AnswerValidation.get(6).toString();
//			
//			 PublicKey4=sUserToken;	
//			 System.out.println("PublicKey4 "+PublicKey4); 
//			 session.setAttribute("publicKey4", PublicKey4); 
//			 session.setAttribute("TomcatCount",tomcatCount);
//			 session.setAttribute("userId", userId); 
//			 session.setAttribute("jKey",jKey);
//			 mv.addObject("userId", userId);
//			return mv;
//		}
//
//		if (ResetFlag.equals(CommonFunction.YES)) {
//
//			mv.setViewName("displayquestions");
//
//			// The API document book-mark Display questions 04.08 (Displayquestions)
//			List<Object> displayQuestions = getQuestionList(sQuestions);
//
//			mv.addObject("displayQuestions", displayQuestions.get(0));
//
//			// The API document book-mark 04.09 (SaveAns)
//			String SaveAns = SaveQuestionAnswers(jKey, tomcatCount, request, response);
//			return mv;
//		} 
//		
//		else if (ResetFlag.equals(CommonFunction.NO)) {
//
//			mv.setViewName("Main");
//
//			// The API document book-mark Answer Validation 04.03(ValidAns)
//			List<String> AnswerValidation = getAnswerValidation(jKey, tomcatCount, request, response);
//
//			mv.addObject("AnswerValidation", AnswerValidation.toString());
//			return mv;
//
//		}
//
//		if (sPasswordReset.equals(CommonFunction.Y)) {
//			
//			logger.info("sPasswordReset : "+sPasswordReset);
////			String Changepwd = getChangePasswordByUserId(tomcatCount, jKey, request, response);
//
//		}
//
//		
//		
//		 /* Reset Password ::Api Doc 4.25 (Confirmation Pending from PO)
//		  * 
//		  * String setPassword=setPasswordforUser(password,tomcatCount,jKey,request,response);		
//		  *  
//		  */
//		
//		return mv;
//	}
//
//	
//
//	
//
//	private List<Object> getQuestionList(String sQuestions) {
//
//		List<Object> questionsObjList = new ArrayList<Object>();
//		ArrayList<Questions> questionsArrList = new ArrayList<Questions>();
//
//		String[] sQuestionsArr = sQuestions.split(Pattern.quote("|"));
//		
//		for (int i = 0; i < sQuestionsArr.length; i++) {
//			questionsArrList.add(new Questions("" + i + 1, sQuestionsArr[i].toString()));
//		}
//
//		questionsObjList.add(questionsArrList);
//
//		return questionsObjList;
//	}
//
//	
//	
//	private String getLoginMode(String Publickey3) {
//
//		StringBuffer loginmodestatus = new StringBuffer();
//		String Loginurl = marketwatchProvider.getLoginurl();
//		String output = null;
//
//		try {
//			URL loginurl = new URL(Loginurl);
//			HttpURLConnection loginconn = (HttpURLConnection) loginurl.openConnection();
//			loginconn.setRequestMethod("POST");
//			loginconn.setRequestProperty("Accept", "application/json");
//
//			if (loginconn.getResponseCode() != 200) {
//				throw new RuntimeException("Failed : HTTP error code : " + loginconn.getResponseCode());
//			}
//
//			BufferedReader br = new BufferedReader(new InputStreamReader((loginconn.getInputStream())));
//
//			while ((output = br.readLine()) != null) {
//				loginmodestatus.append(output);
//
//			}
//			loginconn.disconnect();
//			logger.info("loginmodestatus : " + loginmodestatus);
//
//		} catch (Exception e) {
//			logger.error("Unexpected loginmode error", e.getMessage());
//		}
//
//		return loginmodestatus.toString();
//	}
//
//	
//	
//	
//	private List<Object> getauthenticatePassword(String publicKey3, String pubKey3, String eJdata, String jKey,
//			String tomcatCount, HttpServletRequest request, HttpServletResponse response) {
//
//		HttpSession session = request.getSession();
//		String UserId = (String) session.getAttribute("userId");
//
//		logger.info("ValidPwd User: " + UserId);
//
//		List<Object> authenticatePasswordList = null;
//		try {
//			StringBuffer ValidPwd = new StringBuffer(marketwatchProvider.getValidPwdurl());
//			ValidPwd.append("jsessionid=" + "." + tomcatCount + "&jData=" + eJdata + "&jKey=" + jKey + "");
//
//			URL ValidPwdurl = new URL(ValidPwd.toString());
//			HttpURLConnection ValidPwdconn = (HttpURLConnection) ValidPwdurl.openConnection();
//
//			ValidPwdconn.setRequestMethod("POST");
//			ValidPwdconn.setRequestProperty("Accept", "application/json");
//			if (ValidPwdconn.getResponseCode() != 200) {
//				throw new RuntimeException("Failed : HTTP error code : " + ValidPwdconn.getResponseCode());
//			}
//
//			BufferedReader br2 = new BufferedReader(new InputStreamReader((ValidPwdconn.getInputStream())));
//			String output;
//			
//			while ((output = br2.readLine()) != null) {
//
//				Object obj = JSONValue.parse(output);
//				JSONObject ValidPwdJson = (JSONObject) obj;
//				stat = (String) ValidPwdJson.get("stat");
//				tdata = (String) ValidPwdJson.get("tdata");
//				scount = (String) ValidPwdJson.get("scount");
//				ResetFlag = (String) ValidPwdJson.get("2faResetFlag");
//				sQuestions = (String) ValidPwdJson.get("sQuestions");
//				sIndex = (String) ValidPwdJson.get("sIndex");
//				Emsg = (String) ValidPwdJson.get("Emsg");
//			}
//
//			logger.info("===========ValidPwd Response===========");
//			logger.info("tdata : " + tdata);
//			logger.info("scount : " + scount);
//			logger.info("2faResetFlag : " + ResetFlag);
//			logger.info("sQuestions : " + sQuestions);
//
//			ValidPwdconn.disconnect();
//
//			authenticatePasswordList = new ArrayList<Object>();
//			authenticatePasswordList.add(stat);
//			authenticatePasswordList.add(tdata);
//			authenticatePasswordList.add(scount);
//			authenticatePasswordList.add(ResetFlag);
//			authenticatePasswordList.add(sQuestions);
//			authenticatePasswordList.add(sIndex);
//
//		} catch (Exception e) {
//			logger.error("Unexpected ValidPwd error", e.getMessage());
//
//		}
//
//		return authenticatePasswordList;
//	}
//
////	@RequestMapping(value = "/ValidAns", method = RequestMethod.POST)
////	public List<String> getAnswerValidation(@RequestParam String jKey,@RequestParam String tomcatCount,@RequestParam String uid,
////			@RequestParam String Count,@RequestParam String as,@RequestParam String is) {
////		
//	
//	
//	public List<String> getAnswerValidation(String jKey, String tomcatCount, HttpServletRequest request,
//			HttpServletResponse response) {
//		/*
//		 * Here Count as defined from ValidPwd response value scount 
//		 * as is defined  format ex:1-1 
//		 * Ex:UserId,Count=scount,as=1-1,is=sIndex.replace('|', '-')
//		 * 
//		 */
//		
//		
//		HttpSession session = request.getSession();
//		String UserId = (String) session.getAttribute("userId");
//
//		logger.info("ValidAns User : " + UserId);
//
//		JSONObject ValidAnsInputJson = new JSONObject();
//
//		ValidAnsInputJson.put("uid", UserId);
//		ValidAnsInputJson.put("Count", scount); // Count as defined from ValidPwd response value scount
//		ValidAnsInputJson.put("as", "1-1");
//		ValidAnsInputJson.put("is", sIndex.replace('|', '-'));
//
//		String ValidAnsInputJdata = ValidAnsInputJson.toJSONString();
//		JSONObject AnswerValidationJson = new JSONObject();
//		List<String> AnswerValidationList = null;
//
//		try {
//			StringBuffer ValidAns = new StringBuffer(marketwatchProvider.getValidAnsurl());
//			ValidAns.append("jsessionid=" + "." + tomcatCount + "&jData=" + ValidAnsInputJdata + "&jKey=" + jKey + "");
//
//			URL ValidAnsurl = new URL(ValidAns.toString());
//
//			HttpURLConnection ValidAnsconn = (HttpURLConnection) ValidAnsurl.openConnection();
//			ValidAnsconn.setRequestMethod("POST");
//			ValidAnsconn.setRequestProperty("Accept", "application/json");
//
//			if (ValidAnsconn.getResponseCode() != 200) {
//				throw new RuntimeException("Failed : HTTP error code : " + ValidAnsconn.getResponseCode());
//			}
//
//			BufferedReader br3 = new BufferedReader(new InputStreamReader((ValidAnsconn.getInputStream())));
//
//			while ((output = br3.readLine()) != null) {
//
//				Object objec = JSONValue.parse(output);
//				AnswerValidationJson = (JSONObject) objec;
//
//				String SendData = AnswerValidationJson.toJSONString();
//				objec = JSONValue.parse(SendData);
//				AnswerValidationJson = (JSONObject) objec;
//
//				stat = (String) AnswerValidationJson.get("stat");
//				tdata = (String) AnswerValidationJson.get("tdata");
//				Message = (String) AnswerValidationJson.get("Message");
//				sLastAccessInSec = (String) AnswerValidationJson.get("sLastAccessInSec");
//				sPasswordReset = (String) AnswerValidationJson.get("sPasswordReset");
//				sUserToken = (String) AnswerValidationJson.get("sUserToken");// public key 4
//				UserSessionID = (String) AnswerValidationJson.get("UserSessionID");
//				loginid = (String) AnswerValidationJson.get("loginid");
//				loginMessage = (String) AnswerValidationJson.get("loginMessage");
//
//				AnswerValidationList = new ArrayList<String>();
//				AnswerValidationList.add(stat);
//				AnswerValidationList.add(tdata);
//				AnswerValidationList.add(Message);
//				AnswerValidationList.add(sLastAccessInSec);
//				AnswerValidationList.add(sPasswordReset);
//				AnswerValidationList.add(sUserToken);
//				AnswerValidationList.add(UserSessionID);
//				AnswerValidationList.add(loginid);
//				AnswerValidationList.add(loginMessage);
//
//			}
//
//			logger.info("============== Response for ValidAns =================");
//			logger.info("Response for ValidAns :stat :" + stat + "  tdata :" + tdata + "  message :" + Message);
//			ValidAnsconn.disconnect();
//
//		} catch (Exception e) {
//			logger.error("Unexpected ValidAns error", e.getMessage());
//
//		}
//		return AnswerValidationList;
//	}
//
////	@RequestMapping(value = "/SaveAns", method = RequestMethod.POST)
////	public String SaveQuestionAnswers(@RequestParam String jKey,@RequestParam String tomcatCount, @RequestParam String qa,@RequestParam String userId) {
//
//	public String SaveQuestionAnswers(@RequestParam String jKey, @RequestParam String tomcatCount,
//			HttpServletRequest request, HttpServletResponse response) {
//
//		HttpSession session = request.getSession();
//		String UserId = (String) session.getAttribute("userId");
//		logger.info("SaveAns  User : " + UserId);
//
//		StringBuffer SaveAnsResponse = new StringBuffer();
//		ModelAndView mv = new ModelAndView("Main");
//
//		JSONObject SaveAnswerJson = new JSONObject();
//
//		SaveAnswerJson.put("uid", UserId);
//		SaveAnswerJson.put("qa", "1|1|2|1|3|1|4|1|5|1");
//
//		String SaveJdata = SaveAnswerJson.toJSONString();
//
//		try {
//			StringBuffer SaveAns = new StringBuffer(marketwatchProvider.getSaveAnsurl());
//			SaveAns.append("jsessionid=" + "." + tomcatCount + "&jData=" + SaveJdata + "&jKey=" + jKey + "");
//
//			URL urL = new URL(SaveAns.toString());
//			HttpURLConnection conn5 = (HttpURLConnection) urL.openConnection();
//			conn5.setRequestMethod("POST");
//			conn5.setRequestProperty("Accept", "application/json");
//
//			if (conn5.getResponseCode() != 200) {
//				throw new RuntimeException("Failed : HTTP error code : " + conn5.getResponseCode());
//			}
//
//			BufferedReader br2 = new BufferedReader(new InputStreamReader((conn5.getInputStream())));
//			while ((output = br2.readLine()) != null) {
//				SaveAnsResponse.append(output);
//			}
//			logger.info("SaveAnsResponse :" + SaveAnsResponse.toString());
//			conn5.disconnect();
//
//		} catch (Exception e) {
//			logger.error("Unexpected SaveAns error", e.getMessage());
//
//		}
//
//		return SaveAnsResponse.toString();
//
//	}
//
//	// hashing password 1000 iterations
//	public static String hashData1(String data) throws NoSuchAlgorithmException, UnsupportedEncodingException {
//
//		MessageDigest md = MessageDigest.getInstance("SHA-256");
//		byte[] digest = md.digest(data.getBytes());
//		for (int i = 1; i <= 999; i++) {
//			digest = md.digest(digest);
//		}
//		return data;
//	}
//	
//	private String setPasswordforUser(String password, String tomcatCount, String jKey, HttpServletRequest request,
//			HttpServletResponse response) {
//
//		HttpSession session = request.getSession();
//		String UserId = (String) session.getAttribute("userId");
//
//		logger.info("setPasswordforUser : " + UserId);
//
//		JSONObject SetPasswordInputJson = new JSONObject();
//		JSONObject SetPasswordJson = new JSONObject();
//
//		try {
//			String pwd = password;
//			pwd = hashData1(pwd);
//
//			SetPasswordInputJson.put("uid", UserId);
//			SetPasswordInputJson.put("password", pwd);
//
//			String SetPasswordInputJdata = SetPasswordInputJson.toJSONString();
//
//			StringBuffer SetPasswordsb = new StringBuffer(marketwatchProvider.getSetPasswordurl());
//			SetPasswordsb.append(
//					"jsessionid=" + "." + tomcatCount + "&jData=" + SetPasswordInputJdata + "&jKey=" + jKey + "");
//
//			URL SetPasswordURL = new URL(SetPasswordsb.toString());
//
//			HttpURLConnection SetPasswordconn = (HttpURLConnection) SetPasswordURL.openConnection();
//			SetPasswordconn.setRequestMethod("POST");
//			SetPasswordconn.setRequestProperty("Accept", "application/json");
//
//			if (SetPasswordconn.getResponseCode() != 200) {
//				throw new RuntimeException("Failed : HTTP error code : " + SetPasswordconn.getResponseCode());
//			}
//			BufferedReader br3 = new BufferedReader(new InputStreamReader((SetPasswordconn.getInputStream())));
//
//			while ((output = br3.readLine()) != null) {
//
//				Object objec = JSONValue.parse(output);
//				SetPasswordJson = (JSONObject) objec;
//
//				String SendData = SetPasswordJson.toJSONString();
//				objec = JSONValue.parse(SendData);
//				SetPasswordJson = (JSONObject) objec;
//
//				stat = (String) SetPasswordJson.get("stat");
//				message = (String) SetPasswordJson.get("message");
//			}
//
//			logger.info("============== Response for SetPassword =================");
//			logger.info("stat " + stat + "\n message " + message + "");
//
//			SetPasswordconn.disconnect();
//
//		} catch (Exception e) {
//			logger.error("Unexpected SetPassword error : " + e.getMessage());
//
//		}
//
//		return SetPasswordJson.toJSONString();
//	}
//	
//	private String getChangePasswordByUserId(String tomcatCount, String jKey, HttpServletRequest request,
//			HttpServletResponse response) {
//
//		JSONObject ChangepwdInputJson = new JSONObject();
//		HttpSession session = request.getSession();
//		String UserId = (String) session.getAttribute("userId");
//
//		logger.info("Changepwd By UserId" + UserId);
//
//		ChangepwdInputJson.put("uid", UserId);
//		ChangepwdInputJson.put("sOldPwd", "abc123");
//		ChangepwdInputJson.put("sNewPwd", "abc@123");
////		ChangepwdInputJson.put("sOldTPwd", "");
////		ChangepwdInputJson.put("sNewTPwd", "");
//		ChangepwdInputJson.put("sTxFlag", "NO");
//
//		String ChangepwdInputJdata = ChangepwdInputJson.toJSONString();
//		JSONObject ChangepwdJson = new JSONObject();
//		try {
//			StringBuffer Changepwd = new StringBuffer(marketwatchProvider.getChangepwdurl());
//			Changepwd
//					.append("jsessionid=" + "." + tomcatCount + "&jData=" + ChangepwdInputJdata + "&jKey=" + jKey + "");
//
//			URL ChangepwdURL = new URL(Changepwd.toString());
//			HttpURLConnection Changepwdconn = (HttpURLConnection) ChangepwdURL.openConnection();
//			Changepwdconn.setRequestMethod("POST");
//			Changepwdconn.setRequestProperty("Accept", "application/json");
//
//			if (Changepwdconn.getResponseCode() != 200) {
//				throw new RuntimeException("Failed : HTTP error code : " + Changepwdconn.getResponseCode());
//			}
//			BufferedReader br3 = new BufferedReader(new InputStreamReader((Changepwdconn.getInputStream())));
//
//			while ((output = br3.readLine()) != null) {
//
//				Object objec = JSONValue.parse(output);
//				ChangepwdJson = (JSONObject) objec;
//
//				String SendData = ChangepwdJson.toJSONString();
//				objec = JSONValue.parse(SendData);
//				ChangepwdJson = (JSONObject) objec;
//
//				stat = (String) ChangepwdJson.get("stat");
//				Pstatus = (String) ChangepwdJson.get("stat");
//				Result = (String) ChangepwdJson.get("stat");
//
//			}
//
//			logger.info("============== Response for Changepwd =================");
//			logger.info("stat " + stat + "\nPstatus " + Pstatus + "\nResult " + Result + "");
//
//			Changepwdconn.disconnect();
//
//		} catch (Exception e) {
//			logger.error("Unexpected ChangePassword error", e.getMessage());
//
//		}
//		return ChangepwdJson.toJSONString();
//	}
//}
