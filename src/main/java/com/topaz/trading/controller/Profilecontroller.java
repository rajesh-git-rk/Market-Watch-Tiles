package com.topaz.trading.controller;

import java.awt.image.BufferedImage;
import java.io.BufferedOutputStream;
import java.io.BufferedReader;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.sql.Timestamp;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

import javax.imageio.ImageIO;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.bouncycastle.util.encoders.Base64;
import org.json.simple.JSONObject;
import org.json.simple.JSONValue;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.commons.CommonsMultipartFile;
import org.springframework.web.servlet.ModelAndView;

import com.google.gson.Gson;
import com.topaz.trading.Util.OTPUtil;
import com.topaz.trading.model.Client;
import com.topaz.trading.repository.ScriptImp2;

@Controller
@RestController
public class Profilecontroller {

	@Autowired
	MarketwatchProvider marketwatchProvider;

	@Autowired
	OTPUtil oTPUtil;
	
	@Autowired
	ScriptImp2 scriptImp;


    private static Logger logger = LoggerFactory.getLogger(Profilecontroller.class);

	String newline = CommonFunction.newline;

	@RequestMapping(value = "SendOtpMailAndMobile", method = RequestMethod.POST)
	public ResponseEntity<JSONObject> SendOtpMailAndMobilePage(@RequestParam String EmailIdTag,
			@RequestParam String mobileTag,@RequestParam String userId,HttpServletRequest request, HttpServletResponse response) {

		
		System.out.println("EmailIdTag : "+EmailIdTag+" mobileTag : "+mobileTag+" userId : "+userId); 
		HttpSession session = null;
		String Outputval = "";
		JSONObject Outputjson = new JSONObject();

		String clientid =userId;
		
		// OTP generater...

				String OTP = CommonFunction.otpGenerator();			

		/* Email Creation */

		JSONObject OTPNumberfromEmail = oTPUtil.SendOtpEmailPage(clientid, EmailIdTag);

		/* Sms OTP send here.. */

		oTPUtil.SMSotpResponse(mobileTag, OTP);

		Outputjson.put("outputmessage", OTPNumberfromEmail.get("outputmessage"));
		Outputjson.put("OTP", OTP);
		
		logger.info("Response SendOtpMailAndMobilePage OTP : "+OTP);
		String outputJsontoStringTag = Outputjson.toString();

		Outputval = new Gson().toJson(outputJsontoStringTag);

		return ResponseEntity.ok().body(Outputjson);
	}

	@RequestMapping(value = "Accountdetails", method = RequestMethod.POST)
	public ResponseEntity<JSONObject> AccountdetailsPage(HttpServletRequest request, HttpServletResponse response) {

		String Accountdetailsoutput = null;
		JSONObject Accountdetailsjson=new JSONObject();
		HttpSession session = null;
		session = request.getSession();
		String userId = (String) session.getAttribute("userId");
		String PublicKey4 = (String) session.getAttribute("publicKey4");
		String tomcatCount = (String) session.getAttribute("TomcatCount");
		JSONObject AccountdetailsInput = new JSONObject();
		String s_prdt_ali = "BO:BO||CNC:CNC||CO:CO||MIS:MIS||MTF:MTF||NRML:NRML";
		AccountdetailsInput.put("acctId", userId);
		AccountdetailsInput.put("uid", userId);
		AccountdetailsInput.put("s_prdt_ali", s_prdt_ali);
		try {
			String eJdata = AccountdetailsInput.toJSONString();
			String jKey = CommonFunction.hashData(PublicKey4);

			StringBuffer AccountdetailsLink = new StringBuffer(marketwatchProvider.getAccountdetailsurl());

			AccountdetailsLink.append("jsessionid=" + "." + tomcatCount + "&jData=" + eJdata + "&jKey=" + jKey + "");

			URL AccountdetailsPageurl = new URL(AccountdetailsLink.toString());
			logger.info("Profile Pageurl : " + AccountdetailsPageurl.toString());
			HttpURLConnection Accountdetailsconn = (HttpURLConnection) AccountdetailsPageurl.openConnection();

			Accountdetailsconn.setRequestMethod("POST");
			Accountdetailsconn.setRequestProperty("Accept", "application/json");
			if (Accountdetailsconn.getResponseCode() != 200) {
				throw new RuntimeException("Failed : HTTP error code : " + Accountdetailsconn.getResponseCode());
			}

			BufferedReader br2 = new BufferedReader(new InputStreamReader((Accountdetailsconn.getInputStream())));
			String output;

			while ((output = br2.readLine()) != null) {
				Object obj = JSONValue.parse(output);
				Accountdetailsjson = (JSONObject) obj;
				//Accountdetailsoutput = new Gson().toJson(output);
			}

			logger.info("outputValue :" + Accountdetailsjson);

		} catch (Exception e) {

			logger.error("Unexpected Accountprofile error", e.getMessage());

		}

		return ResponseEntity.ok().body(Accountdetailsjson);

	}
	
	 private static final String FAILED_UPLOAD_MESSAGE = "You failed to upload [%s] because the file because %s";
	 private static final String SUCCESS_UPLOAD_MESSAGE = "You successfully uploaded file = [%s]";


   @RequestMapping(value = "/uploadFile", method = RequestMethod.POST)
   
   public ModelAndView uploadFileHandler(@RequestParam("file") MultipartFile file,HttpSession session) throws IOException {
	   
	   System.out.println("sssssssss");
	   
	   String path=session.getServletContext().getRealPath("/");  
       String filename=file.getOriginalFilename(); 
       String userId = (String) session.getAttribute("userId");
    	
        ModelAndView modelAndView = new ModelAndView("exchange-light"); 

        if (file.isEmpty()) {
            modelAndView.addObject("message", String.format(FAILED_UPLOAD_MESSAGE, filename, "file is empty"));
        }
        else { 
        	
        	 List<Client> CreateImagePath=createImage(userId,file,filename);
        	
            modelAndView.addObject("createImagePath", CreateImagePath);
            
        }

        return modelAndView;
    }
    
   
   public    List<Client> createImage(String userId,MultipartFile file, String filename) throws IOException {

	   String fileImage =null;
	   System.out.println("filename "+filename); 
	   Client FileDB = new Client();
       
	 //  FileDB.setImagename(filename);
	  // FileDB.setImage(file.getBytes());
       
	   List<Client> clientidlist = scriptImp.VerifyClientId(userId);
	   List <Client> profilepathlist=null;
	   if(clientidlist.size()==0) {
		   profilepathlist=scriptImp.SaveProfileImagePath(userId,FileDB);
	   }
	   else if(clientidlist.size()>0) {
		   profilepathlist=scriptImp.UpdateProfileImagePath(userId,FileDB);
	   }
	   
     //filename=profilepathlist.get(0).getImagename();
     
    
    List<Client> FetchImgebyProfile=scriptImp.FetchProfileImage(userId);
       

   /* List imageList = null; 
    Iterator itr = FetchImgebyProfile.iterator(); 
    while(itr.hasNext()) 
    { 
      String img = (String)itr.next(); 
      byte[] bytearray = Base64.decode(img); 
      BufferedImage imag=ImageIO.read(new ByteArrayInputStream(bytearray)); 
      imageList.add(imag); 
    } */
    
    
    /*byte [] data =FetchImgebyProfile.get(0).getImage();
   // byte [] data = ((ByteArrayOutputStream) FetchImgebyProfile).toByteArray();
    ByteArrayInputStream bis = new ByteArrayInputStream(data);
    BufferedImage bImage2 = ImageIO.read(bis);*/
  //  ImageIO.write(bImage2, "jpg", new File("output.jpg") );
    
	return FetchImgebyProfile;       

   }
    
   
   
   
    /*private String createImage( MultipartFile Files) {
        try {
        	
        	String fileseperate = "";
    		System.out.println("filess::;" + Files);
    		
    		//String filePathSave = "C:/uploads/";
    		//String filePathSave = "F:/SOURCE_WORKSPACE/ezeeinsurance/OnlineInsurance/src/main/webapp/images/upload/";
    		
    		
    		String filePathSave = "${project.basedir}/src/main/webapp/ProfileImage/Uploads/";

    		if (Files != null && !Files.isEmpty()) {

    			InputStream initialStream = Files.getInputStream();
    			byte[] buffer = new byte[initialStream.available()];
    			initialStream.read(buffer);
    			Date date = new Date();
    			long time = date.getTime();
    			Timestamp ts = new Timestamp(time);
    			String fileName = ts.toString().replace(":", "").replace(" ", "_") + "_" + Files.getOriginalFilename();
    			File targetFile = new File(filePathSave + fileName);
    			OutputStream outStream = new FileOutputStream(targetFile);
    			outStream.write(buffer);

    			//fileseperate = "/images/upload/" + fileName;
    	   fileseperate = "/Uploads/" + fileName;

    		}
    		return fileseperate;
            
        } catch (Exception e) {
        	
            return String.format(FAILED_UPLOAD_MESSAGE, name, e.getMessage());
        }
    }*/
}
