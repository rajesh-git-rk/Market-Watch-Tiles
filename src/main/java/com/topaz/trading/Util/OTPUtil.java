package com.topaz.trading.Util;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import javax.swing.JOptionPane;

import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;


import com.topaz.trading.controller.CommonFunction;
import com.topaz.trading.controller.MarketwatchProvider;

@Component
@Controller
public class OTPUtil {
	
	@Autowired
	MarketwatchProvider marketwatchProvider;

	@Autowired
	private JavaMailSender mailSender;
	
	String newline=CommonFunction.newline;

	
	public JSONObject SendOtpMobilePage(String cellAddr) {
		
	
		// OTP generater...
		
	 	String OTP=CommonFunction.otpGenerator();
	 	
	 	
	 // Sms OTP send here..
	      SMSotpResponse(cellAddr,OTP);
	 	
	      String outputmessage="OTP Send Succesfully";
	      String Outputval="";
	      
	      JSONObject Outputjson = new JSONObject();
	      Outputjson.put("outputmessage",outputmessage);
	      Outputjson.put("OTP",OTP);
	      
	       Outputval=Outputjson.toString();	
		
		return Outputjson;
	}
	
	
	public void SMSotpResponse(String cellAddr,String OTP) {
		
		String OtpResponse="";
		//System.out.println("cellAddr numbers "+cellAddr);
		try {
	        String apiKey = "A0756436e832dcc3013f4a9df7f21b2c6";
	        String message = "Your OTP for online A/c modification with Enrich is "+OTP+"."+"Do not share this with anyone as it's confidential.";
	        String sender = "ENRICH"; 
	        String  numbers = cellAddr;
	        String username="enrichds";
	        String password="Ensms@18$";
	        String ProviderLink="http://hpsms.dial4sms.com/api/web2sms.php?"+"username="+username+"&password="+password+"&sender="+sender+"&message="+message+"&to="+numbers+"";
	       
	        
	       // System.out.println("ProviderLink "+ProviderLink.toString()); 
	        // Send data
	        HttpURLConnection conn = (HttpURLConnection) new URL(ProviderLink).openConnection();
	        
	        String data = apiKey + numbers + message + sender;
	        conn.setDoOutput(true);
	        conn.setRequestMethod("POST");
	        conn.setRequestProperty("Content-Length", Integer.toString(data.length()));
	        conn.getOutputStream().write(data.getBytes("UTF-8"));
	        final BufferedReader br2 = new BufferedReader(new InputStreamReader(conn.getInputStream()));
	       
	        JSONObject mobileOTPJSON = new JSONObject();
	        
	        String output;
			while ((output = br2.readLine()) != null) {				
				System.out.println("OTP SENT !");
				/*Object objec = JSONValue.parse(output);
				mobileOTPJSON = (JSONObject) objec;				
				OtpResponse = mobileOTPJSON.toJSONString();		*/	
				
			}
	      
	        br2.close();

	        //return stringBuffer.toString();
	    } catch (Exception e) {
	                JOptionPane.showMessageDialog(null,e);

	    }	
		
	}


	public JSONObject SendOtpEmailPage(String clientid, String emailIdTag) {
		
		System.out.println("clientid "+clientid+" emailIdTag "+emailIdTag); 
		// OTP generater...
		
			 	String OTP=CommonFunction.otpGenerator();
			 	
		/*	Email Creation  */
	 	
	 	String senderEmailID=marketwatchProvider.getSenderEmailID(); 		 	
	 	String receiverEmailID=emailIdTag.trim();
	 	String outputmessage="";
	 	 String Outputval="";
			      try{ 
						MimeMessage Mimemessage = mailSender.createMimeMessage();
						MimeMessageHelper message  = new MimeMessageHelper(Mimemessage,true); 
						
			          message.setFrom(senderEmailID);
			          message.setTo(receiverEmailID);
			          
			          message.setSubject("Account Modification OTP - Enrich!..");  
			          message.setText("Dear Sir/Madam,"
			        		  	+ newline	
			        		  	+ newline
			        		  	+ "Greetings from Enrich!"
			        		  	+ newline
			        		  	+ newline
			        		  	+ newline
			          		  	+ "Your OTP for online Account modification with Enrich is "+OTP+"."	          		
			          		  	+ ""+" Please do not share your OTP with anyone as it's confidential."
			          		  	+ newline
				          		+ newline
				          		+ newline
				          		+ "Thanks & Regards,"
				          		+newline
				          		+"Enrich");
			          
			          // Send message 
			          mailSender.send(Mimemessage);
			          outputmessage ="OTP Send Succesfully";
			          OTP=OTP;
			       }
			      	catch (MessagingException mex) 
				      {
			      		  outputmessage ="Not Ok";
				          OTP="0";
				    	   mex.printStackTrace();
				    	   
				      }
			      
			      
			      
			      JSONObject Outputjson = new JSONObject();
			      Outputjson.put("outputmessage",outputmessage);
			      Outputjson.put("OTP",OTP);
			      
			       Outputval=Outputjson.toString();	
			       
				return Outputjson;  
	}
	
	
	
	
	
	}
