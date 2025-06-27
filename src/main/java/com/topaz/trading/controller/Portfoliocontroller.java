package com.topaz.trading.controller;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Properties;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.ws.rs.core.Request;

import org.springframework.http.MediaType;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.apache.pdfbox.pdmodel.interactive.annotation.layout.PlainText;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.JSONValue;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.topaz.trading.model.Alerts;
import com.topaz.trading.model.EncryptionTable;
import com.topaz.trading.model.Segment;
import com.topaz.trading.model.T1UploadHolding;
import com.topaz.trading.model.UploadHolding;
import com.topaz.trading.pojo.EncrypBodyInput;
import com.topaz.trading.pojo.EncryptPojo;
import com.topaz.trading.repository.ScriptImp2;
import com.topaz.trading.repository.UploadHoldingImpl;
import com.topaz.trading.service.Encryptionservice;


@RestController
public class Portfoliocontroller {
	
	@Autowired
	MarketwatchProvider marketwatchProvider;
	
	@Autowired
	UploadHoldingImpl uploadHoldingImpl;
	
	@Autowired
	ScriptImp2 scriptImp;
	
	
	@Autowired
	Encryptionservice encryptionservice;
	
    private static Logger logger = LoggerFactory.getLogger(Portfoliocontroller.class);

	@RequestMapping(value = "/PositionBook", method = RequestMethod.POST)
	public ResponseEntity<String> PositionBookPage(@RequestParam String uid, @RequestParam String actid,@RequestParam String type,
			@RequestParam String s_prdt_ali,HttpServletRequest request, HttpServletResponse response) {
	
		String PositionBookoutput="";
		HttpSession session = null;
		session = request.getSession();
		String userId = (String) session.getAttribute("userId");
		String PublicKey4=(String) session.getAttribute("publicKey4");
		String tomcatCount=(String) session.getAttribute("TomcatCount");
		JSONObject PositionBookInput = new JSONObject();
		
		PositionBookInput.put("uid", userId);
		PositionBookInput.put("actid", userId);
		PositionBookInput.put("type", type);
		PositionBookInput.put("s_prdt_ali",s_prdt_ali); 
		
		JSONObject PositionBookJson = new JSONObject();
		try {
			String PositionBookJdata =  PositionBookInput.toJSONString();
			String jKey = CommonFunction.hashData(PublicKey4);
			
			StringBuffer PositionBook = new StringBuffer(marketwatchProvider.getPositionBookurl());
			PositionBook.append("jsessionid=" + "." + tomcatCount + "&jData=" + PositionBookJdata + "&jKey=" + jKey + "");

			URL PositionBookurl = new URL(PositionBook.toString());
			logger.info("PositionBook  Request URL :"+PositionBookurl.toString());
			HttpURLConnection PositionBookconn = (HttpURLConnection) PositionBookurl.openConnection();			
			PositionBookconn.setRequestMethod("POST");
			PositionBookconn.setRequestProperty("Accept", "application/json");
			
			logger.info("PositionBook Response Code :"+PositionBookconn.getResponseCode());
			if (PositionBookconn.getResponseCode() != 200) {
				throw new RuntimeException("Failed : HTTP error code : " + PositionBookconn.getResponseCode());
			}

			BufferedReader br2 = new BufferedReader(new InputStreamReader((PositionBookconn.getInputStream())));
			String output;
			while ((output = br2.readLine()) != null) {	
				/*Object obj = JSONValue.parse(output);
				PositionBookJson = (JSONObject) obj;*/
				
				
				Gson gson = new Gson();	
				PositionBookoutput = gson.toJson(output);
			}
			logger.info("PositionBook Response Value :"+PositionBookoutput);
			PositionBookconn.disconnect();
		} catch (Exception e) {
			logger.error("Unexpected PositionBook error", e.getMessage());

		}

		 return ResponseEntity.ok().body(PositionBookoutput);
	}
	
	
	
	
	
	@RequestMapping(value = "/Holding", method = RequestMethod.POST)
	public ResponseEntity<String> HoldingPage(@RequestParam String uid, @RequestParam String actid,
			@RequestParam String brkname,@RequestParam String symbol,@RequestParam String exch,
			@RequestParam String s_prdt_ali,
//			@RequestParam String type,
			HttpServletRequest request, HttpServletResponse response) {
		
		String Holdingoutput="";
		HttpSession session = null;
		session = request.getSession();
		String PublicKey4=(String) session.getAttribute("publicKey4");
		String tomcatCount=(String) session.getAttribute("TomcatCount");
		
		JSONObject HoldingInput = new JSONObject();
		
		HoldingInput.put("uid", uid);
		HoldingInput.put("actid", actid);
		HoldingInput.put("brkname", brkname);
		HoldingInput.put("s_prdt_ali",s_prdt_ali);
		HoldingInput.put("symbol","");
		HoldingInput.put("exch",exch);
//		HoldingInput.put("Pcode",Pcode);
		
		
		try {
			String  HoldingJdata =  HoldingInput.toJSONString();
			String jKey = CommonFunction.hashData(PublicKey4);
			
			StringBuffer Holding = new StringBuffer(marketwatchProvider.getHoldingurl());
			Holding.append("jsessionid=" + "." + tomcatCount + "&jData=" + HoldingJdata + "&jKey=" + jKey + "");

			URL  HoldingInputnurl = new URL(Holding.toString());
			HttpURLConnection Holdingconn = (HttpURLConnection) HoldingInputnurl.openConnection();

			
			Holdingconn.setRequestMethod("POST");
			Holdingconn.setRequestProperty("Accept", "application/json");
			if (Holdingconn.getResponseCode() != 200) {
				throw new RuntimeException("Failed : HTTP error code : " + Holdingconn.getResponseCode());
			}

			BufferedReader br2 = new BufferedReader(new InputStreamReader((Holdingconn.getInputStream())));
			String output;
			while ((output = br2.readLine()) != null) {
				
				
				
				Gson gson = new Gson();
				Holdingoutput = gson.toJson(output);
			} 
			
		} catch (Exception e) {
			logger.error("Unexpected Holding error", e.getMessage());
		}

		return ResponseEntity.ok().body(Holdingoutput);
	}
	
/*	@RequestMapping(value = "/BOTPINgeneration22", method = RequestMethod.POST)
//	public ResponseEntity<ResponseEntity<String>> BOTPINgenerationPage(@RequestHeader String DPId, @RequestHeader String ReqId,@RequestHeader String Version,
//			@RequestParam String BOID,@RequestParam String PAN,@RequestParam String  ReqFlag,			
//			HttpServletRequest request, HttpServletResponse response) {
		
	public ResponseEntity<ResponseEntity<String>> BOTPINgenerationPage(
			@RequestHeader String DPId, @RequestHeader String ReqId,@RequestHeader String Version,
			@RequestBody EncrypBodyInput encryptpojo,			
			HttpServletRequest request, HttpServletResponse response) {
		
		//@RequestParam String DPId, @RequestParam String ReqId,@RequestParam String Version,
		//@RequestParam String BOID,@RequestParam String PAN,@RequestParam String  ReqFlag,
		
		JSONObject BOTPINgenerationoutput = new JSONObject();
		
		System.out.println("DPId : "+DPId+" ReqId : "+ReqId+" Version : "+Version+" BOID : "+encryptpojo.getBoid()+" PAN :  "+encryptpojo.getPan()+" ReqFlag : "+encryptpojo.getReqflag());  
		
		String BoTpinOutput="";
		
		long timestamp = System.currentTimeMillis(); 
		SimpleDateFormat dateFormat = new SimpleDateFormat("ddmmyyyyhhmmss");    
		Date date = new Date(timestamp);
		System.out.println(dateFormat.format(date));
		
		String ReqTime=dateFormat.format(date);
		
		ResponseEntity<String>reponseEntity=null;
		
		HttpSession session = null;
		session = request.getSession();
		JSONObject BoTpinEncryptbodyJson = new JSONObject();
		JSONObject BoTpinbodyInput = new JSONObject();
		
		BoTpinbodyInput.put("BOID",encryptpojo.getBoid());
		BoTpinbodyInput.put("PAN",encryptpojo.getPan());
		BoTpinbodyInput.put("ReqFlag",encryptpojo.getReqflag());
		BoTpinbodyInput.put("ReqTime",ReqTime);
		
		
		try {
			
			System.out.println("BoInputBody : "+BoTpinbodyInput.toJSONString()); 
			String  BoTpinbodyEncryptdata =EncryptDecryptFunction.encrypt(BoTpinbodyInput.toJSONString());
			
			System.out.println("BoTpinbodyEncryptdata : "+BoTpinbodyEncryptdata);
			
			StringBuffer  BoTpinEncryptbodyInputbuf = new StringBuffer(marketwatchProvider.getBoTpinGenerationUrl());
			
			System.out.println("BoTpinInputbuf : "+ BoTpinEncryptbodyInputbuf.toString());
			
			URL  BoTpinEncryptbodyInputurl = new URL(BoTpinEncryptbodyInputbuf.toString());
			
			System.out.println("BoTpinInputnurl : "+BoTpinEncryptbodyInputurl.toString());		
					
			RestTemplate restTemplate = new RestTemplate();			
			HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_JSON);
            headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
            headers.add("DPId", DPId);
            headers.add("ReqId", ReqId);
            headers.add("Version", Version);
            headers.set("DPId", DPId);
            headers.set("ReqId", ReqId);
            headers.set("Version", Version);  
            
           // JsonObject properties = new JsonObject();
            
            MultiValueMap<String, String> properties = new LinkedMultiValueMap<>();
            
            //properties.addProperty("EncryptDtls",BoTpinbodyEncryptdata); 
            properties.add("EncryptDtls",BoTpinbodyEncryptdata);
            System.out.println("properties : "+properties.toString());    
            
            System.out.println("headers : "+headers.toString());
             Map<String, String> properties = new HashMap<>();
            properties.put("EncryptDtls",BoTpinbodyEncryptdata);
            EncryptPojo ecryptpojoList=new EncryptPojo();
            ecryptpojoList.setEncryptDtls(BoTpinbodyEncryptdata);
            
           // HttpEntity<EncryptPojo> requestEntity = new HttpEntity<>(ecryptpojoList, headers);
           // HttpEntity<Object> requestEntity = new HttpEntity<>(BoTpinbodyEncryptdata, headers);
            HttpEntity<MultiValueMap<String, String>> requestData = new HttpEntity<>(properties, headers);
            System.out.println("requestEntity : "+requestData.toString());
            
            System.out.println("BoTpinEncryptbodyInputurl : "+BoTpinEncryptbodyInputurl.toString());
        BoTpinOutput = restTemplate.postForObject(BoTpinEncryptbodyInputurl.toString(), requestData, String.class);
         //BoTpinOutput =restTemplate.getForObject(BoTpinEncryptbodyInputurl.toString(), HttpMethod.POST, requestEntity, String.class);
            
            BoTpinEncryptbodyInputbuf.append(requestEntity.toString());
            System.out.println("BoTpinEncryptbodyInputbuf : "+BoTpinEncryptbodyInputbuf.toString()); 
            
            
         // reponseEntity=restTemplate.exchange(BoTpinEncryptbodyInputurl.toString(), HttpMethod.POST, requestEntity, String.class);
          
           System.out.println("restTemplate : "+BoTpinOutput.toString()); 
            
			
           
           HttpStatus statuscode=reponseEntity.getStatusCode();
           System.out.println("statuscode : "+statuscode);
           
           String Bodydata=reponseEntity.getBody();
           System.out.println("Bodydata : "+Bodydata);
           
           HttpHeaders headersdata=reponseEntity.getHeaders();
           System.out.println("headersdata : "+headersdata);
           
			
		} catch (Exception e) {
			logger.error("Unexpected Holding error", e.getMessage());
		}
		
		//return ResponseEntity.ok().body(BoTpinOutput);
		return ResponseEntity.ok().body(reponseEntity);
		
	}*/
	
	
	
	/*@RequestMapping(value = "/BOTPINgeneration", method = RequestMethod.POST)
	public ResponseEntity<String> BOTPINgenerationPage(@RequestHeader String DPId, @RequestHeader String ReqId,@RequestHeader String Version,
			@RequestParam String BOID,@RequestParam String PAN,@RequestParam String  ReqFlag,			
			HttpServletRequest request, HttpServletResponse response) {
		
		//@RequestParam String DPId, @RequestParam String ReqId,@RequestParam String Version,
		//@RequestParam String BOID,@RequestParam String PAN,@RequestParam String  ReqFlag,
		
		JSONObject BOTPINgenerationoutput = new JSONObject();
		
		System.out.println("DPId : "+DPId+" ReqId : "+ReqId+" Version : "+Version+" BOID : "+BOID+" PAN :  "+PAN+" ReqFlag : "+ReqFlag);  
		
		String BoTpinOutput="";
		
		long timestamp = System.currentTimeMillis(); 
		SimpleDateFormat dateFormat = new SimpleDateFormat("ddmmyyyyhhmmss");    
		Date date = new Date(timestamp);
		System.out.println(dateFormat.format(date));
		
		String ReqTime=dateFormat.format(date);
		
		
		
		HttpSession session = null;
		session = request.getSession();
		JSONObject BoTpinEncryptbodyJson = new JSONObject();
		JSONObject BoTpinbodyInput = new JSONObject();
		
		BoTpinbodyInput.put("BOID",BOID);
		BoTpinbodyInput.put("PAN",PAN);
		BoTpinbodyInput.put("ReqFlag",ReqFlag);
		BoTpinbodyInput.put("ReqTime",ReqTime);
		
		
		try {
			
			System.out.println("BoInputBody : "+BoTpinbodyInput.toJSONString()); 
			String  BoTpinbodyEncryptdata =EncryptDecryptFunction.encrypt(BoTpinbodyInput.toJSONString());
		

	        	System.out.println("BoTpinbodyEncryptdata : "+BoTpinbodyEncryptdata);
			
			StringBuffer  BoTpinEncryptbodyInputbuf = new StringBuffer(marketwatchProvider.getBoTpinGenerationUrl());
				System.out.println("BoTpinInputbuf : "+ BoTpinEncryptbodyInputbuf.toString());
			
			URL  BoTpinEncryptbodyInputurl = new URL(BoTpinEncryptbodyInputbuf.toString());*/
			
			
			
        //  HttpResponse responsevalue = client.execute(request);

			
			
			
			
			
			
			
			 /* 	
			System.out.println("BoTpinInputnurl : "+BoTpinEncryptbodyInputurl.toString());
			
			
			HttpURLConnection BoTpinEncryptbodyInputconn = (HttpURLConnection) BoTpinEncryptbodyInputurl.openConnection();

			
			BoTpinEncryptbodyInputconn.setRequestMethod("POST");
			BoTpinEncryptbodyInputconn.setRequestProperty("Content-Type", "application/json");
			BoTpinEncryptbodyInputconn.setRequestProperty("Accept", "application/json");
			
			
			logger.info("BoTpinEncryptbodyInput URL  : "+BoTpinEncryptbodyInputconn.toString());
			
			logger.info("OptionChain Response Code : "+BoTpinEncryptbodyInputconn.getResponseCode());
			
			if (BoTpinEncryptbodyInputconn.getResponseCode() != 200) {
				throw new RuntimeException("Failed : HTTP error code : " + BoTpinEncryptbodyInputconn.getResponseCode());
			}

			BufferedReader br2 = new BufferedReader(new InputStreamReader((BoTpinEncryptbodyInputconn.getInputStream())));
			String output;
			
			while ((output = br2.readLine()) != null) {
				
				Object obj = JSONValue.parse(output);
				BoTpinEncryptbodyJson = (JSONObject) obj;
				
				Gson gson = new Gson();	
				outputValue = gson.toJson(output);
			}
			
			//output="Not_Ok";
			outputValue=OptionChainJson.toJSONString();*/
			//logger.info("OptionChain outputValue Value : "+outputValue);
			
		/*	logger.info("OptionChain Response Value : "+BoTpinEncryptbodyJson);
			
			//BoTpinEncryptbodyInputconn.disconnect();
			
			
		} catch (Exception e) {
			logger.error("Unexpected Holding error", e.getMessage());
		}
		
		
		return ResponseEntity.ok().body(BoTpinOutput);
		
	}*/
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	@RequestMapping(value = "/BOTPINgeneration", method = RequestMethod.POST)
	/*public ResponseEntity<ResponseEntity<String>> BOTPINgenerationPage(@RequestHeader String DPId, @RequestHeader String ReqId,@RequestHeader String Version,
			@RequestParam String BOID,@RequestParam String PAN,@RequestParam String  ReqFlag,			
			HttpServletRequest request, HttpServletResponse response) {*/
		public ResponseEntity<ResponseEntity<String>> BOTPINgenerationPage(@RequestHeader String dpid, @RequestHeader String reqid,@RequestHeader String version,
		@RequestBody EncryptPojo encryptpojo, HttpServletRequest request, HttpServletResponse response) {	
	
		JSONObject BOTPINgenerationoutput = new JSONObject();		
		
		
		System.out.println("DPId : "+dpid+" ReqId : "+reqid+" Version : "+version+" BOID : "+encryptpojo.getBoid()+" PAN :  "+encryptpojo.getPan()+" ReqFlag : "+encryptpojo.getReqflag());
		
		//System.out.println("DPId : "+dpid+" ReqId : "+reqid+" Version : "+version+" BOID : "+encryptpojo.getBoid()+" PAN :  "+encryptpojo.getPan()+" ReqFlag : "+encryptpojo.getReqflag());  
		ResponseEntity<String> BoTpinOutput = null;
		String BoTpinDecryptbodyInputdata="";
		
		long timestamp = System.currentTimeMillis(); 
		SimpleDateFormat dateFormat = new SimpleDateFormat("ddmmyyyyhhmmss");    
		Date date = new Date(timestamp);
		System.out.println(dateFormat.format(date));
		
		String ReqTime=dateFormat.format(date);
		
		
		
		HttpSession session = null;
		session = request.getSession();
		JSONObject BoTpinEncryptbodyJson = new JSONObject();
		
		/*HashMap<String, String> BoTpinbodyInput =new HashMap<>();
		BoTpinbodyInput.put("BOID",encryptpojo.getBoid());
		BoTpinbodyInput.put("PAN",encryptpojo.getPan());
		BoTpinbodyInput.put("ReqFlag",encryptpojo.getReqflag());
		BoTpinbodyInput.put("ReqTime",ReqTime);*/
		
		JSONObject BoTpinbodyInput = new JSONObject();
		BoTpinbodyInput.put("BOID",encryptpojo.getBoid());
		BoTpinbodyInput.put("PAN",encryptpojo.getPan());
		BoTpinbodyInput.put("ReqFlag",encryptpojo.getReqflag());
		BoTpinbodyInput.put("ReqTime",ReqTime);
		
		
		System.out.println("BoInputBody : "+BoTpinbodyInput.toString()); 
		try {
			//String  key="000fk15pvbbgmxgpej22364iu8nv287k";
			
			//byte[] KEY_AES = key.getBytes("UTF-8");
			
		//String  BoTpinbodyEncryptdata =EncryptDecryptFunction.encrypt(BoTpinbodyInput.toString(),KEY_AES);
		String  BoTpinbodyEncryptdata =EncryptDecryptFunction.encryptMethod(BoTpinbodyInput.toString());
		
		System.out.println("BoTpinbodyEncryptdata : "+BoTpinbodyEncryptdata);		
			
			URL  BoTpinInputnurl = new URL(marketwatchProvider.getBoTpinGenerationUrl());
			//HttpURLConnection BoTpinInputnurlconn = (HttpURLConnection) BoTpinInputnurl.openConnection();			
			RestTemplate restTemplate = new RestTemplate();			
			HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_JSON);
            headers.add("DPId", dpid.toString());
            headers.add("ReqId", reqid.toString());
            headers.add("Version", version.toString());  
            //headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));

            
           // MultiValueMap<String, Object> bodyproperties= new LinkedMultiValueMap<String, Object>();
            Map<String, String> bodyproperties = new HashMap<>();
            // map.add("xx","xx");
            bodyproperties.put("EncryptDtls",BoTpinbodyEncryptdata);
           /* JsonObject properties = new JsonObject();
            properties.addProperty("EncryptDtls",BoTpinbodyEncryptdata); */           
            System.out.println("properties : "+bodyproperties.toString());            
            System.out.println("headers : "+headers.toString());          
           //HttpEntity<String> requestparam = new HttpEntity<>(properties.toString(), headers);
          // HttpEntity<MultiValueMap<String, Object>> requestparam = new HttpEntity<>(bodyproperties, headers);
           // params.add("properties", properties.toString());
           // System.out.println("requestparam : "+requestparam.toString()); 
         // build the request
            HttpEntity<Map<String, String>> requestEntity = new HttpEntity<>(bodyproperties, headers);
            BoTpinOutput = restTemplate.postForEntity(BoTpinInputnurl.toString(), requestEntity, String.class);
            System.out.println("URL : "+BoTpinInputnurl.toString()); 
            System.out.println("status code : "+ BoTpinOutput.getStatusCode());
            System.out.println("headers : "+ BoTpinOutput.getHeaders());
            System.out.println("body : "+ BoTpinOutput.getBody());
            
          //  BoTpinOutput = restTemplate.exchange(requestEntity, responseType)(BoTpinInputnurl.toString(), requestparam, String.class);
          //  BoTpinOutput = restTemplate.postForObject(BoTpinInputnurl.toString(), requestparam, String.class);			
           // BoTpinOutput=restTemplate.exchange(BoTpinInputnurl.toString(), HttpMethod.POST, requestparam, String.class);
            System.out.println("restTemplate : "+restTemplate.toString()); 
            
			System.out.println("BoTpinOutput : "+BoTpinOutput); 
			List<EncryptionTable> encryptdata=encryptionservice.getEncrytpionData();
			
			EncryptionTable encryptionTable=new EncryptionTable();
			
			if(encryptdata.size()>0) {
				List<EncryptionTable> updateList=encryptionservice.UpdateEncryptiondetails(encryptionTable);
			}
			else {
				encryptionTable.setEncryption(BoTpinOutput.toString());				
				encryptionservice.saveEncryptiondetails(encryptionTable);
			}		
			BoTpinDecryptbodyInputdata = EncryptDecryptFunction.decrypt(BoTpinbodyEncryptdata);
		//	BoTpinDecryptbodyInputdata = EncryptDecryptFunction.decrypt(BoTpinOutput.getBody(),KEY_AES);			
			System.out.println("BoTpinbodydecryptdata : "+BoTpinDecryptbodyInputdata);
			
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("Unexpected Holding error", e.getMessage());
		}
		
		
		return ResponseEntity.ok().body(BoTpinOutput);
		
	}
	
	@RequestMapping(value = "/BoTpinDecryptgeneration", method = RequestMethod.POST)
	public ResponseEntity<String> BoTpinDecryptionPage(
			// @RequestBody EncryptPojo encryptpojo, 			
			HttpServletRequest request, HttpServletResponse response) {
		JSONObject BOTPINgenerationoutput = new JSONObject();
		//@RequestHeader String DPId, @RequestHeader String ReqId,@RequestHeader String Version,
		//System.out.println("DPId : "+DPId+" ReqId : "+ReqId+" Version : "+Version+" EncryptDtls : "+encryptpojo.getEncryptdtls());  
		
		String BoTpinOutput="";
		
		long timestamp = System.currentTimeMillis(); 
		SimpleDateFormat dateFormat = new SimpleDateFormat("ddmmyyyyhhmmss");    
		Date date = new Date(timestamp);
		System.out.println(dateFormat.format(date));
		
		String ReqTime=dateFormat.format(date);
		
		JSONObject BoTpinDecryptbodyJson = new JSONObject();
		
		HttpSession session = null;
		session = request.getSession();
		EncryptionTable encryptpojo = null; 
		
		List<EncryptionTable> encryptdata=encryptionservice.getEncrytpionData();
		
		System.out.println("EncryptDtls : "+encryptdata.get(0).getEncryption()); 
		String encrypt=encryptdata.get(0).getEncryption();
		/*JSONObject BoTpinDecryptbodyInput = new JSONObject();
		
		BoTpinDecryptbodyInput.put("EncryptDtls",encryptpojo.getEncryptdtls());*/
			/*HashMap<String, String> BoTpinDecryptbodyInput =new HashMap<>();
			BoTpinDecryptbodyInput.put("",encryptpojo.getEncryption());*/
		
		
		try {
			String  key="000fk15pvbbgmxgpej22364iu8nv287k";
			byte[] KEY_AES = key.getBytes("UTF-8");
			//String  BoTpinDecryptbodyInputdata =EncryptDecryptFunction.decrypt(encrypt,KEY_AES);
			String  BoTpinDecryptbodyInputdata =EncryptDecryptFunction.decrypt(encrypt);
			
			System.out.println("BoTpinbodydecryptdata : "+BoTpinDecryptbodyInputdata);
			
				URL  BoTpinInputnurl = new URL(marketwatchProvider.getBoTpinGenerationUrl());
				//HttpURLConnection BoTpinInputnurlconn = (HttpURLConnection) BoTpinInputnurl.openConnection();			
				RestTemplate restTemplate = new RestTemplate();			
				/*HttpHeaders headers = new HttpHeaders();
	            headers.setContentType(MediaType.APPLICATION_JSON);
	            headers.set("DPId", DPId);
	            headers.set("ReqId", ReqId);
	            headers.set("Version", Version);*/  
	            
	            MultiValueMap<String, String> bodyproperties= new LinkedMultiValueMap<String, String>();
	          
	            bodyproperties.add("EncryptDtls",BoTpinDecryptbodyInputdata);          
	            System.out.println("properties : "+bodyproperties.toString());            
	            //System.out.println("headers : "+headers.toString());    
	           HttpEntity<MultiValueMap<String, String>> requestparam = new HttpEntity<>(bodyproperties);
	        
	            System.out.println("requestparam : "+requestparam.toString()); 
	            
	            System.out.println("URL : "+BoTpinInputnurl.toString()); 
	            
	            BoTpinOutput = restTemplate.postForObject(BoTpinInputnurl.toString(), requestparam, String.class);			
	           // BoTpinOutput=restTemplate.exchange(BoTpinInputnurl.toString(), HttpMethod.POST, requestparam, String.class);
	            System.out.println("restTemplate : "+restTemplate.toString()); 
	            
				System.out.println("BoTpinOutput : "+BoTpinOutput);
				
				
			} catch (Exception e) {
				e.printStackTrace();
				logger.error("Unexpected Holding error", e.getMessage());
			}
			
		
		
		return ResponseEntity.ok().body(BoTpinOutput);
		
	}
	

	
	
//	@RequestMapping(value="/getsettleId", method = RequestMethod.POST)
//	public ResponseEntity<List<SettlementDownload>> getsettleId(HttpServletRequest request, HttpServletResponse response) {
//		
//		 
//		 HttpSession session = null;
//			session = request.getSession();
//			String userId = (String) session.getAttribute("userId");
//			
//			DateFormat dfm = new SimpleDateFormat("dd-MMM-yy");
//			String datestring=dfm.format(new Date());
//
//			System.out.println("datestring:::"+datestring);
//			
//		 List<SettlementDownload> list= scriptImp.getsettleId(datestring);
//		
//
//		return ResponseEntity.ok().body(list);
//		
//		
//		
//	}
	
	
	 @RequestMapping(value="/HoldingDatafromDB", method = RequestMethod.POST)
	   public ResponseEntity<JSONObject> HoldingDatafromDB(HttpServletRequest request, HttpServletResponse response) {
		 
	        System.out.println("inside HoldingDatafromDB function");
	     
	        
	        JSONObject UploadHoldingJson=new JSONObject();
	        
	        List<UploadHolding> list=uploadHoldingImpl.getUploadHoldingData();
	        
	        List<T1UploadHolding> list1=uploadHoldingImpl.getT1UploadHoldingData();
	        
	        System.out.println("list size : "+list);
	        
	        System.out.println("list1 size : "+list1);
	        
	        List<Object> li=new ArrayList<Object>();
	     
	        li.addAll(list);
	        li.addAll(list1);
	     
	               
	        UploadHoldingJson.put("list", li); 
	        
		    return ResponseEntity.ok().body(UploadHoldingJson);
		    
	 
	  }
	 
	 @RequestMapping(value="/nonPOAHoldingDatafromDB22", method = RequestMethod.POST)
	   public ResponseEntity<JSONObject> nonPOAHoldingDatafromDB(HttpServletRequest request, HttpServletResponse response) {
		 
	        System.out.println("inside nonPOAHoldingDatafromDB function");
	     
	        
	        JSONObject UploadHoldingJson=new JSONObject();
	        
	      //  List<UploadHolding> list=uploadHoldingImpl.getUploadHoldingData();
	        
	    //    List<T1UploadHolding> list1=uploadHoldingImpl.getT1UploadHoldingData();
	        
	        List<UploadHolding> list=uploadHoldingImpl.getNONPOAList1();
	        
	        List<T1UploadHolding> list1=uploadHoldingImpl.getNONPOAList2();
	        
	        System.out.println("list upload hold size : "+list);
	        
	        System.out.println("list1 size t1 upload : "+list1);
	        
	        List<Object> li=new ArrayList<Object>();
	     
	        li.addAll(list);
	        li.addAll(list1);
	     
	               
	        UploadHoldingJson.put("list", li); 
	        
		    return ResponseEntity.ok().body(UploadHoldingJson);
		    
	 
	  }
	 
	 private static String indexurl;
	 
	 @RequestMapping(value="/getISINNumber22", method = RequestMethod.POST)
	   public ResponseEntity<JSONObject> getISINNumber(HttpServletRequest request, HttpServletResponse response,@RequestParam String Symbol,@RequestParam String Qty) {
   
	        JSONObject UploadHoldingJson=new JSONObject();
	        
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
			 
			 String username="";
			 JSONObject isnNumberJson = new JSONObject();
			 
			 String json="";
	        	StringBuffer urlAppend = new StringBuffer(indexurl+"searchTerm="+(URLEncoder.encode(Symbol.trim(),StandardCharsets.UTF_8)));
				
			//	StringBuffer urlAppend = new StringBuffer(indexurl+"searchTerm="+ searchTerm.trim());
				
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
		    
		    System.out.println("username:::"+username); 

		  Gson gson = new Gson();
			
		  json = new Gson().toJson(username);
		  
		 String generateTransactionid=scriptImp.generateTransactionId();
		  
		  isnNumberJson.put("isin", username);
		  isnNumberJson.put("qty", Qty);
		  isnNumberJson.put("transactionid", generateTransactionid);
		    
		  } catch (Exception e) {

				logger.error("Exception while parsing Redisearch  " + e.getMessage());
			}
		  
		  return ResponseEntity.ok().body(isnNumberJson);
		    
	 
	  }
	 
	 
	 @RequestMapping(value = "/getContinueToCDSL22", method = RequestMethod.POST)
	//	public ResponseEntity<String> getContinueToCDSL(@RequestParam String BOID,@RequestParam String SettlementId,@RequestParam String  TranactionId,@RequestParam String  IsinNumber,@RequestParam String  Quantity,	
	 public ResponseEntity<ResponseEntity<String>> getContinueToCDSL(@RequestBody EncryptPojo encryptpojo,
				HttpServletRequest request, HttpServletResponse response) {
			
			
			JSONObject verifyDISOutput = new JSONObject();
			
		//	System.out.println(" BOID : "+BOID+" SettlementId :  "+SettlementId+" TranactionId : "+TranactionId+"IsinNumber::"+IsinNumber+"Quantity::"+Quantity);  
			

			long timestamp = System.currentTimeMillis(); 
			SimpleDateFormat dateFormat = new SimpleDateFormat("ddmmyyyyhhmmss");    
			Date date = new Date(timestamp);
			System.out.println(dateFormat.format(date));
			
			String ReqTime=dateFormat.format(date);
			
			SimpleDateFormat dateFormat1 = new SimpleDateFormat("mmddyyyy");    
			Date date1 = new Date();
			String excutionDate=dateFormat1.format(date1);
			
			ResponseEntity<String> EDISVerifyOutput =null;
			
			HttpSession session = null;
			session = request.getSession();
			String edisOutputValue="";
			String  TranactionEncryptdata="";
			
			
			
//			JSONObject trancationDetailsVerifyDISInput = new JSONObject();
//			
//			String mapurl="https://www.dpdomain.com/return.html";
//			
//			trancationDetailsVerifyDISInput.put("ReqType", "D");
//			trancationDetailsVerifyDISInput.put("ReqIdentifier", "S");
//			trancationDetailsVerifyDISInput.put("ReqTime", ReqTime);
//			trancationDetailsVerifyDISInput.put("ReturnURL", mapurl.toString());
//			trancationDetailsVerifyDISInput.put("DPId", "92400");
//			trancationDetailsVerifyDISInput.put("BOID", "12092400008822");
//			trancationDetailsVerifyDISInput.put("CMID", "50302");
//			trancationDetailsVerifyDISInput.put("TMID", "90145");
//			trancationDetailsVerifyDISInput.put("ExID", "12");
//			trancationDetailsVerifyDISInput.put("NumOfDays", "30");
//			trancationDetailsVerifyDISInput.put("SettleId", "2021185");
//			trancationDetailsVerifyDISInput.put("CtrBOID", "12092400008822");
//			trancationDetailsVerifyDISInput.put("TrRsnCode", "12");
//			trancationDetailsVerifyDISInput.put("ExecDate", excutionDate);
//			trancationDetailsVerifyDISInput.put("Filler1", "");
//			trancationDetailsVerifyDISInput.put("Filler2", "");
//			
//			
//			JSONObject recorddetails = new JSONObject();
//			
//		//	System.out.println("Tranactiondata:::"+Tranactiondata);
//			
//		//	String trans[]=Tranactiondata.split("|");
//
//			
//		//	for(int i=0;i<trans.length;i++) {
//			
//			recorddetails.put("TxnReqId", TranactionId);
//			recorddetails.put("ISIN", IsinNumber);
//			recorddetails.put("Quantity", Quantity);
//			
//		//	}
//			
//			JSONArray jsonarray = new JSONArray();
//			jsonarray.add(recorddetails);
//
//			trancationDetailsVerifyDISInput.put("RecordDtls", jsonarray);
//			
//			verifyDISInput.put("DPId","92400");
//			verifyDISInput.put("ReqId","0406202012345678");
//			verifyDISInput.put("Version","1.1");
			
			/*try {
			TranactionEncryptdata =EncryptDecryptFunction.encrypt(trancationDetailsVerifyDISInput.toJSONString());
			
			System.out.println("TranactionEncryptdata : "+TranactionEncryptdata);
			
			System.out.println("verifyDISInput:::"+trancationDetailsVerifyDISInput);
			
			}catch(Exception e) {
				logger.error("Encrption EDISVerify error", e.getMessage());
			}*/
			
			//verifyDISInput.put("TransDtls",TranactionEncryptdata);
			
			
			
			try {
				 
				
				/*StringBuffer edisVerify = new StringBuffer(marketwatchProvider.getEdisVerifyUrl());
				
				edisVerify.append(verifyDISInput);*/

//				URL edisVerifyUrl = new URL(edisVerify.toString());
//				logger.info("edisVerify URL : "+edisVerifyUrl.toString()); 
//				HttpURLConnection EDISVerifyconn = (HttpURLConnection) edisVerifyUrl.openConnection();
//				
//				logger.info("EDISVerifyconn URL : "+EDISVerifyconn.toString());
//				
//				EDISVerifyconn.setRequestMethod("POST");
//
//				EDISVerifyconn.setRequestProperty("Accept", "application/json");
//				
//				logger.info("EDISVerifyconn Response Code : "+EDISVerifyconn.getResponseCode());
//				
//				if (EDISVerifyconn.getResponseCode() != 200) {
//					throw new RuntimeException("Failed : HTTP error code : " + EDISVerifyconn.getResponseCode());
//				}
//
//				BufferedReader br2 = new BufferedReader(new InputStreamReader((EDISVerifyconn.getInputStream())));
//				String output;
//				JSONObject EDISVerifyJson=null;
//				while ((output = br2.readLine()) != null) {
//					
//					Object obj = JSONValue.parse(output);
//					EDISVerifyJson = (JSONObject) obj;
//					
//				}
				
				
				URL  EdisVerifyUrl = new URL(marketwatchProvider.getEdisverifyurl());		
				RestTemplate restTemplate = new RestTemplate();			
				HttpHeaders headers = new HttpHeaders();
	            headers.setContentType(MediaType.APPLICATION_JSON);

	            JSONObject trancationDetailsVerifyDISInput = new JSONObject();
	            
	          //  HashMap<String, String> trancationDetailsVerifyDISInput =new HashMap<>();
				
				String mapurl="https://www.dpdomain.com/return.html";
				
				trancationDetailsVerifyDISInput.put("ReqType", "D");
				trancationDetailsVerifyDISInput.put("ReqIdentifier", "S");
				trancationDetailsVerifyDISInput.put("ReqTime", ReqTime);
				trancationDetailsVerifyDISInput.put("ReturnURL", mapurl.toString());
				trancationDetailsVerifyDISInput.put("DPId", "92400");
				trancationDetailsVerifyDISInput.put("BOID", "12092400008822");
				trancationDetailsVerifyDISInput.put("CMID", "50302");
				trancationDetailsVerifyDISInput.put("TMID", "90145");
				trancationDetailsVerifyDISInput.put("ExID", "12");
				trancationDetailsVerifyDISInput.put("NumOfDays", "30");
				trancationDetailsVerifyDISInput.put("SettleId", "2021185");
				trancationDetailsVerifyDISInput.put("CtrBOID", "12092400008822");
				trancationDetailsVerifyDISInput.put("TrRsnCode", "12");
				trancationDetailsVerifyDISInput.put("ExecDate", excutionDate);
				trancationDetailsVerifyDISInput.put("Filler1", "");
				trancationDetailsVerifyDISInput.put("Filler2", "");
				
				
				JSONObject recorddetails = new JSONObject();
				
			//	System.out.println("Tranactiondata:::"+Tranactiondata);
				
			//	String trans[]=Tranactiondata.split("|");

				
			//	for(int i=0;i<trans.length;i++) {
				
				recorddetails.put("TxnReqId", encryptpojo.getTranactionId());
				recorddetails.put("ISIN", encryptpojo.getIsinNumber());
				recorddetails.put("Quantity", encryptpojo.getQuantity());
				
			//	}
				
				JSONArray jsonarray = new JSONArray();
				jsonarray.add(recorddetails);

				trancationDetailsVerifyDISInput.put("RecordDtls", jsonarray);
				
				//Map<String, String> verifyDISInput = new HashMap<>();
				

				JSONObject verifyDISInput = new JSONObject();
				verifyDISInput.put("DPId","92400");
				verifyDISInput.put("ReqId","0406202012345678");
				verifyDISInput.put("Version","1.1");
				String  key=marketwatchProvider.getCdslSecretKey();
				
				byte[] KEY_AES = key.getBytes("UTF-8");
				
				try {
				//TranactionEncryptdata =EncryptDecryptFunction.encrypt(trancationDetailsVerifyDISInput.toJSONString(),KEY_AES);
				TranactionEncryptdata =EncryptDecryptFunction.encrypt(trancationDetailsVerifyDISInput.toJSONString());
				
				System.out.println("TranactionEncryptdata : "+TranactionEncryptdata);
				
				System.out.println("verifyDISInput:::"+trancationDetailsVerifyDISInput);
				
				}catch(Exception e) {
					logger.error("Encrption EDISVerify error", e.getMessage());
				}
				
				verifyDISInput.put("TransDtls",TranactionEncryptdata);
	            
	            System.out.println("properties : "+verifyDISInput.toString());
	            System.out.println("URL : "+EdisVerifyUrl.toString()); 


	          //  HttpEntity<Map<String, String>> requestEntity = new HttpEntity<>(verifyDISInput,headers);
	          //  HttpEntity<Map<String, String>> requestEntity = new HttpEntity<>(verifyDISInput, headers);
	          
	         //   System.out.println("requestEntity : "+verifyDISInput.toString());
	            
	            //EDISVerifyOutput = restTemplate.postForObject(EdisVerifyUrl.toString(), requestEntity, String.class);
	            
	            restTemplate.postForEntity(EdisVerifyUrl.toString(), verifyDISInput, String.class);
	            
	            
	            
	            /*System.out.println("EDISVerifyOutput : "+EDISVerifyOutput.toString()); 
	            System.out.println("status code : "+ EDISVerifyOutput.getStatusCode());
	            System.out.println("headers : "+ EDISVerifyOutput.getHeaders());
	            System.out.println("body : "+ EDISVerifyOutput.getBody());*/
	            
	            

	            System.out.println("restTemplate : "+restTemplate.toString()); 
	            
			//	System.out.println("EDISVerifyOutput : "+EDISVerifyOutput); 
				
				//edisOutputValue=EDISVerifyJson.toJSONString();
				
			//	logger.info("EDISVerify Response Value : "+edisOutputValue);
				
	
				
				
				
				
			} catch (Exception e) {
				logger.error("Unexpected EDISVerify error", e.getMessage());
			}
			
			
			return ResponseEntity.ok().body(EDISVerifyOutput);
			
		}
		
	
	
	
	
	
	

}
