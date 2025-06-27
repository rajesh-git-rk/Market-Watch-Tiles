package com.topaz.trading.controller.kambala;

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
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Properties;
import java.util.Vector;
import java.util.regex.Pattern;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.JSONValue;
import org.json.simple.parser.JSONParser;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.servlet.ModelAndView;

import com.google.gson.Gson;
import com.topaz.trading.controller.CommonFunction;
import com.topaz.trading.controller.EncryptDecryptFunction;
import com.topaz.trading.controller.MarketwatchProvider;
import com.topaz.trading.model.Segment;
import com.topaz.trading.model.T1UploadHolding;
import com.topaz.trading.model.UploadHolding;
import com.topaz.trading.pojo.EncryptPojo;
import com.topaz.trading.pojo.UserInfo;
import com.topaz.trading.repository.ScriptImp2;
import com.topaz.trading.repository.UploadHoldingImpl;

@RestController
//@RequestMapping("/c")
public class PositioncontrollerKambala {
	@Autowired
	MarketwatchProvider marketwatchProvider;
	
	@Autowired
	UploadHoldingImpl uploadHoldingImpl;
	
	
	@Autowired
	ScriptImp2 scriptImp;
	
	@Autowired
	Logincontroller logincontrollerKambala;
	
	private static Logger logger = LoggerFactory.getLogger(PositioncontrollerKambala.class);
	
	
	
	@RequestMapping(value="/Positions", method = RequestMethod.POST, produces="application/json")
	public ResponseEntity<JSONObject> PositionsbookWebPage(HttpServletRequest request, HttpServletResponse response) {
		

		HttpSession session = null;
		session = request.getSession();
		String userId = (String) session.getAttribute("userId");
		String susertoken=(String) session.getAttribute("susertoken");
	
		JSONObject PositionsbookkambalaInputJson = new JSONObject();
		JSONObject PositionsbookResponseJson = new JSONObject();
	

			PositionsbookkambalaInputJson.put("uid", userId);
			PositionsbookkambalaInputJson.put("actid",userId);
				
		
	 
	
			try {		
				//String jKey ="f20048c7e8ae72e7ff8b5491dc90b707d54b68edbf8faa2ca27e588b26703e6a";
				StringBuffer PositionsbookkambalaBuff = new StringBuffer(marketwatchProvider.getPositionsbookkambalaUrl());
				
				URL PositionsbookkambalaUrl = new URL(PositionsbookkambalaBuff.toString());
				
				RestTemplate restTemplate = new RestTemplate();
				
		       Map<String,Object> map = new HashMap<String,Object>();
			      map.put("jData",PositionsbookkambalaInputJson);      
			      map.put("jKey",susertoken);
		
			      String bodyproperties= CommonFunction.urlEncodeUTF8(map);
		
		
					 ResponseEntity<String>PositionsbookOutput=null;
					
		    HttpEntity<String> requestparam = new HttpEntity<>(bodyproperties);
		    
		       System.out.println("URL : "+PositionsbookkambalaUrl.toString());       
		       System.out.println("requestparam : "+requestparam.toString()); 
		       
		     // build the request
		       PositionsbookOutput = restTemplate.postForEntity(PositionsbookkambalaUrl.toString(), requestparam, String.class);
		        
		     
			    	
	    	 System.out.println("status code : "+ PositionsbookOutput.getStatusCode());
	         System.out.println("headers : "+ PositionsbookOutput.getHeaders());
	         System.out.println("body : "+ PositionsbookOutput.getBody());
	         
	         PositionsbookResponseJson.put("data",PositionsbookOutput.getBody());
	  	    	

	         //System.out.println("restTemplate : "+restTemplate.toString()); 

			} catch (Exception e) {
				logger.error("Unexpected ValidAns error", e.getMessage());
				e.printStackTrace();
			}

	  return ResponseEntity.ok().body(PositionsbookResponseJson);

}
	
	
    @RequestMapping(value="/holdings", method = RequestMethod.POST, produces="application/json")
	public ResponseEntity<JSONObject> holdingsPage(HttpServletRequest request, HttpServletResponse response) {
		
		
		  
		    HttpSession session = request.getSession();
		    
			String userId = (String) session.getAttribute("userId");
            String jKey = (String) session.getAttribute("susertoken");
					
			
			JSONObject HoldingskambalaInputJson = new JSONObject();
	
			
			JSONObject HoldingskambalaResponseJson = new JSONObject();
			
			 ResponseEntity<String> HoldingskambalaOutput=null;
			
			 HoldingskambalaInputJson.put("uid", userId);
			 HoldingskambalaInputJson.put("actid",userId);
			 HoldingskambalaInputJson.put("prd","C");
			
			
			
			// System.out.println(" Holdings jKey:::"+jKey);
			try {
	
					StringBuffer HoldingskambalaBuff = new StringBuffer(marketwatchProvider.getHoldingskambalaUrl());
					
					URL HoldingskambalaUrl = new URL(HoldingskambalaBuff.toString());
					
					RestTemplate restTemplate = new RestTemplate();			
					//HttpHeaders headers = new HttpHeaders();

			        Map<String,Object> map = new HashMap<String,Object>();
			        map.put("jData",HoldingskambalaInputJson.toJSONString());
			        map.put("jKey",jKey);
			        
			  	    String bodyproperties= CommonFunction.urlEncodeUTF8(map);
			  							
					HttpEntity<String> requestparam = new HttpEntity<>(bodyproperties);
			       
			       System.out.println("Holdings URL : "+HoldingskambalaUrl.toString());       
			       System.out.println("Holdings requestparam : "+requestparam.toString());
			       
			     // build the request
			       HoldingskambalaOutput = restTemplate.postForEntity(HoldingskambalaUrl.toString(), requestparam, String.class);
			      
			       
			       System.out.println("Holdings status code : "+ HoldingskambalaOutput.getStatusCode());
			        System.out.println("Holdings headers : "+ HoldingskambalaOutput.getHeaders());
			        System.out.println("Holding body : "+ HoldingskambalaOutput.getBody());

			        System.out.println("Holdings restTemplate : "+restTemplate.toString());
			        HoldingskambalaResponseJson.put("data", HoldingskambalaOutput.getBody());
			        
			        
			} catch (Exception e) {
				logger.error("Unexpected Holdings error", e.getMessage());
				e.printStackTrace();
			//	return ResponseEntity.ok().body("{}");
			
			}

			  return ResponseEntity.ok().body(HoldingskambalaResponseJson);
		
	}

	
	
	@RequestMapping(value="/PositionsbookKambala", method = RequestMethod.POST, produces="application/json")
	public ResponseEntity<String> PositionsbookPageKambala(HttpServletRequest request, HttpServletResponse response) {
		
	HttpSession session = null;	

	JSONObject PositionsbookkambalaInputJson = new JSONObject();
	JSONObject HoldingskambalaResponseJson = new JSONObject();
	
		String actid="",susertoken="",jKey="";
		ResponseEntity<String> PositionsbookOutput=null;
		
		for (Map.Entry<String, UserInfo> entry : logincontrollerKambala.kambalaLoginmap.entrySet()) {
			
			String key = entry.getKey();
			UserInfo tab = entry.getValue();	    
		    actid=tab.getActid();
		    susertoken=tab.getSusertoken(); 		
		}	

			PositionsbookkambalaInputJson.put("uid", actid);
			PositionsbookkambalaInputJson.put("actid",actid);
				
		jKey=susertoken;
	 
	 
	
	try {		
		//String jKey ="f20048c7e8ae72e7ff8b5491dc90b707d54b68edbf8faa2ca27e588b26703e6a";
		StringBuffer PositionsbookkambalaBuff = new StringBuffer(marketwatchProvider.getPositionsbookkambalaUrl());
		
		URL PositionsbookkambalaUrl = new URL(PositionsbookkambalaBuff.toString());
		
		RestTemplate restTemplate = new RestTemplate();			
		//HttpHeaders headers = new HttpHeaders();
       // headers.setContentType(MediaType.APPLICATION_JSON);
     
      
      JSONObject bodyproperties = new JSONObject();
      bodyproperties.put("jData",PositionsbookkambalaInputJson);      
      bodyproperties.put("jKey",jKey);
      
       HttpEntity<String> requestparam = new HttpEntity<>(bodyproperties.toJSONString());
       
       /*System.out.println("URL : "+PositionsbookkambalaUrl.toString());       
       System.out.println("requestparam : "+requestparam.toString());*/ 
       
     // build the request
       PositionsbookOutput = restTemplate.postForEntity(PositionsbookkambalaUrl.toString(), requestparam, String.class);
        
       String Responsebody=PositionsbookOutput.getBody();
       
      
	    	Object obj = JSONValue.parse(Responsebody);
	    	HoldingskambalaResponseJson = (JSONObject) obj;
	    	/*System.out.println("HoldingskambalaResponseJson : "+ HoldingskambalaResponseJson);
	    	
	    	 System.out.println("status code : "+ PositionsbookOutput.getStatusCode());
	         System.out.println("headers : "+ PositionsbookOutput.getHeaders());
	         System.out.println("body : "+ PositionsbookOutput.getBody())*/;
	  	    	

        //System.out.println("restTemplate : "+restTemplate.toString()); 

	} catch (Exception e) {
		logger.error("Unexpected ValidAns error", e.getMessage());
		e.printStackTrace();
	}

	  return ResponseEntity.ok().body(PositionsbookOutput.getBody());

}
	




	@RequestMapping(value="/nonPOAHoldingDatafromDB", method = RequestMethod.POST)
	   public ResponseEntity<JSONObject> nonPOAHoldingDatafromDB(HttpServletRequest request, HttpServletResponse response) {
		 
	        System.out.println("inside nonPOAHoldingDatafromDB function");
	     
	        
	        JSONObject UploadHoldingJson=new JSONObject();
	        
	      //  List<UploadHolding> list=uploadHoldingImpl.getUploadHoldingData();
	        
	    //    List<T1UploadHolding> list1=uploadHoldingImpl.getT1UploadHoldingData();
	        
	        List<UploadHolding> list=uploadHoldingImpl.getNONPOAList1();
	        
	        System.out.println("list upload hold size : "+list);
	        
	        
	        List<T1UploadHolding> list1=uploadHoldingImpl.getNONPOAList2();
	       
	        System.out.println("list1 size t1 upload : "+list1);
	        
	        if(list1.size()==0|| list.size()==0 ||list1==null || list==null) {
	        	 System.out.println("list some data null");
	        }
	        else if(list1.size()>0|| list.size()>0){
	        	
	       
	        List<Object> li=new ArrayList<Object>();
	     
	        li.addAll(list);
	        li.addAll(list1);
	     
	               
	        UploadHoldingJson.put("list", li); 
	        
	        }
	        
		    return ResponseEntity.ok().body(UploadHoldingJson);
		    
	 
	  }
	
	
	
	
	
	@RequestMapping(value="/HoldingsKambala", method = RequestMethod.POST, produces="application/json")
	public ResponseEntity<String> holdingsPageKambala(HttpServletRequest request, HttpServletResponse response) {
		
	HttpSession session = null;	

	JSONObject HoldingsbookkambalaInputJson = new JSONObject();
	
	JSONObject HoldingskambalaResponseJson = new JSONObject();

	String actid="",susertoken="",jKey="";
	ResponseEntity<String> HoldingsbookOutput=null;
	
	for (Map.Entry<String, UserInfo> entry : logincontrollerKambala.kambalaLoginmap.entrySet()) {
		
		String key = entry.getKey();
		UserInfo tab = entry.getValue();	    
	    actid=tab.getActid();
	    susertoken=tab.getSusertoken(); 		
	}	
	
	HoldingsbookkambalaInputJson.put("uid", actid);
	HoldingsbookkambalaInputJson.put("actid",actid);
	
	 
	jKey=susertoken;
	
	try {		
		//String jKey ="f20048c7e8ae72e7ff8b5491dc90b707d54b68edbf8faa2ca27e588b26703e6a";
		StringBuffer HoldingsbookkambalaBuff = new StringBuffer(marketwatchProvider.getHoldingskambalaUrl());
		
		URL HoldingsbookkambalaUrl = new URL(HoldingsbookkambalaBuff.toString());
		
		RestTemplate restTemplate = new RestTemplate();			
		HttpHeaders headers = new HttpHeaders();
       // headers.setContentType(MediaType.APPLICATION_JSON);
     
      
      JSONObject bodyproperties = new JSONObject();
      bodyproperties.put("jData",HoldingsbookkambalaInputJson);      
      bodyproperties.put("jKey",jKey);
      
       HttpEntity<String> requestparam = new HttpEntity<>(bodyproperties.toJSONString(), headers);
       
       /*System.out.println("URL : "+HoldingsbookkambalaUrl.toString());       
       System.out.println("requestparam : "+requestparam.toString()); */
       
     // build the request
       HoldingsbookOutput = restTemplate.postForEntity(HoldingsbookkambalaUrl.toString(), requestparam, String.class);
        
       String Responsebody=HoldingsbookOutput.getBody();
       
       
		   	Object obj = JSONValue.parse(Responsebody);
		   	HoldingskambalaResponseJson = (JSONObject) obj;
		   	/*System.out.println("HoldingskambalaResponseJson : "+ HoldingskambalaResponseJson);
        System.out.println("status code : "+ HoldingsbookOutput.getStatusCode());
        System.out.println("headers : "+ HoldingsbookOutput.getHeaders());
        System.out.println("body : "+ HoldingsbookOutput.getBody());

        System.out.println("restTemplate : "+restTemplate.toString());*/ 

	} catch (Exception e) {
		logger.error("Unexpected ValidAns error", e.getMessage());
		e.printStackTrace();
	}

	  return ResponseEntity.ok().body(HoldingsbookOutput.getBody());

}
	
	
	
	private static String indexurl;
	 
	 @RequestMapping(value="/getISINNumber", method = RequestMethod.POST)
	   public ResponseEntity<JSONObject> getISINNumber(HttpServletRequest request, HttpServletResponse response,@RequestParam String Symbol,@RequestParam String Qty) {
  
		 
		 
		 System.out.println("Symbol : "+Symbol+" qty : "+Qty);
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
		    
		    System.out.println("indexAddurl : "+indexAddurl.toString());
		    HttpURLConnection Indexedconn = (HttpURLConnection) indexAddurl.openConnection();
			
		    
		    System.out.println("Indexedconn Response code : "+Indexedconn.getResponseCode());
			if (Indexedconn.getResponseCode() != 200) {
				throw new RuntimeException("Failed : HTTP error code : " + Indexedconn.getResponseCode());
			}

			BufferedReader br3 = new BufferedReader(new InputStreamReader((Indexedconn.getInputStream())));

			while ((inputLine = br3.readLine()) != null) {
				sb.append(inputLine);
				System.out.println("sb....."+sb.toString());
			}
			
		    username=sb.toString();
		    
		    System.out.println("username:::"+username); 

		  Gson gson = new Gson();
			
		  json = new Gson().toJson(username);
		  
		 String generateTransactionid=scriptImp.generateTransactionId();
		  
		  isnNumberJson.put("isin", username);
		  isnNumberJson.put("qty", Qty);
		  isnNumberJson.put("transactionid", generateTransactionid);
		    
		  
		  br3.close();
		  } catch (Exception e) {

				logger.error("Exception while parsing Redisearch  " + e.getMessage());
			}
		  
		  return ResponseEntity.ok().body(isnNumberJson);
		    
	 
	  }
	 
	 
	 @RequestMapping(value = "/getContinueToCDSL", method = RequestMethod.POST)
		public ResponseEntity<JSONObject> getContinueToCDSL(@RequestParam String BOID,@RequestParam String SettlementId,
				@RequestParam String  TranactionId,@RequestParam String  IsinNumber,@RequestParam String  Quantity,
				@RequestParam String trancationdata,	
//	    public ResponseEntity<ResponseEntity<String>> getContinueToCDSL(@RequestBody EncryptPojo encryptpojo,
				HttpServletRequest request, HttpServletResponse response) {
		 HttpSession session =request.getSession();
			String reqId="";
		// System.out.println("encryptpojo : boid "++" ");
			
			JSONObject verifyDISOutput = new JSONObject();
			
			System.out.println(" BOID : "+BOID+" SettlementId :  "+SettlementId+" TranactionId : "+TranactionId+"IsinNumber::"+IsinNumber+"Quantity::"+Quantity);  
			

			long timestamp = System.currentTimeMillis(); 
			SimpleDateFormat dateFormat = new SimpleDateFormat("ddmmyyyyhhmmss");    
			Date date = new Date(timestamp);
			System.out.println("date : "+dateFormat.format(date));
			
			String ReqTime=dateFormat.format(date);
			
			SimpleDateFormat dateFormat1 = new SimpleDateFormat("mmddyyyy");    
			Date date1 = new Date();
			String excutionDate=dateFormat1.format(date1);
			
			System.out.println("excutionDate : "+excutionDate);
			
			ResponseEntity<String> EDISVerifyOutput =null;
			//String EDISVerifyOutput ="";	
			String edisOutputValue="";
			String  TranactionEncryptdata="";
			
			try {
				 System.out.println("inside try......."+marketwatchProvider.getEdisverifyurl());
				
				 StringBuffer EdisVerifyBuff = new StringBuffer(marketwatchProvider.getEdisverifyurl());
				URL  EdisVerifyUrl = new URL(EdisVerifyBuff.toString());
				
				System.out.println("EdisVerifyUrl : "+EdisVerifyUrl.toString());
				RestTemplate restTemplate = new RestTemplate();			
				HttpHeaders headers = new HttpHeaders();
	            headers.setContentType(MediaType.APPLICATION_JSON);

	            JSONObject trancationDetailsVerifyDISInput = new JSONObject();
	            
	            
	         //   String mapurl="http://122.165.168.95:8089/market-watch/sample.jsp";
//	            String mapurl="https://www.DPdomain.com";
//	            String mapurl="https://www.DPdomain.com/returnurl.html";
	            URL ReturnURL = new URL(marketwatchProvider.getEdisresponseurl());
	            
	            StringBuffer ReturnURLbuf = new StringBuffer();
	            
	            char ch='"';
	            
	            ReturnURLbuf.append(ch).append(ReturnURL).append(ch);

	            
				
				
				
				System.out.println("ReturnURL : "+ReturnURLbuf.toString());
				
		
				trancationDetailsVerifyDISInput.put("ReqType", "D");
				trancationDetailsVerifyDISInput.put("ReqIdentifier", "S");
				trancationDetailsVerifyDISInput.put("ReqTime", ReqTime);
				trancationDetailsVerifyDISInput.put("ReturnURL", ReturnURLbuf);
				trancationDetailsVerifyDISInput.put("DPId", "92400");
				trancationDetailsVerifyDISInput.put("BOID", BOID);
				trancationDetailsVerifyDISInput.put("CMID", "50302");
				trancationDetailsVerifyDISInput.put("TMID", "90145");
				trancationDetailsVerifyDISInput.put("ExID", "12");
				trancationDetailsVerifyDISInput.put("NumOfDays", "30");
				trancationDetailsVerifyDISInput.put("SettleId", SettlementId);
				trancationDetailsVerifyDISInput.put("CtrBOID", "1209240000025008");
				trancationDetailsVerifyDISInput.put("TrRsnCode", "12");
				trancationDetailsVerifyDISInput.put("ExecDate", excutionDate);
				trancationDetailsVerifyDISInput.put("Filler1", "");
				trancationDetailsVerifyDISInput.put("Filler2", "");
				
				
				JSONArray jsonarray = new JSONArray();	
				JSONObject recorddetails = new JSONObject();
				
			System.out.println("Tranactiondata:::"+trancationdata.length()+" trancationdata : "+trancationdata); 
				
			
			  // StringBuilder transsb = new StringBuilder(trancationdata.split(("")));
			
				/*String[] trans = trancationdata.split(",");*/
				String[] transArr=null;
				EncryptPojo encryptpojo=new EncryptPojo();
				//List<EncryptPojo> encryptpojoList = new ArrayList<>();
				ArrayList<String> encryptpojoList=new ArrayList<String>();
//				
				ArrayList<String> trans = new ArrayList<>(Arrays.asList(trancationdata.split(",")));
				//ArrayList<String> trans = new ArrayList<>(Arrays.asList(trancationdata));

				
				
				System.out.println("trans : "+trans.size());
		        String k[] = trans.toArray(new String[trans.size()]);
		        String[] StrArry=null;

		        
		        
		     
		        
		      //  for (String str : k) {
		        	
		        for (int ij = 0; ij < trans.size(); ij++) {
					
				
		            // Printing the elements in above array
		           // System.out.println("str : "+str); 
		        	 System.out.println("str : "+trans.get(ij).toString());
		            
		            StrArry=trans.get(ij).toString().split(Pattern.quote("|"));
		            
		            
		            System.out.println("StrArry : "+StrArry.length+" k : "+k.length);
		            
		            int length;
			         if(StrArry.length > k.length) {
			        	 length = k.length;
			         }else {
			        	 length = StrArry.length;
			         }
			        
			         	
			      
			        for (int i = 0; i <length; i++) {
		            	
			        	 	/*recorddetails.put("TxnReqId", StrArry[0].toString());
							recorddetails.put("ISIN", StrArry[1].toString());
							recorddetails.put("Quantity",StrArry[2].toString());*/
			        	
			        		recorddetails.put("TxnReqId", StrArry[0].toString());
							recorddetails.put("ISIN", StrArry[1].toString());
							recorddetails.put("Quantity",StrArry[2].toString());
							
							System.out.println("1 : "+StrArry[0].toString());
							System.out.println("2 : "+StrArry[1].toString());
							System.out.println("3 : "+StrArry[2].toString());
						
						
						//System.out.println(" size of records : "+encryptpojoList.size());
						
						/*for (int j = 0; j < encryptpojoList.size(); j++) {
							
							recorddetails.put("TxnReqId",encryptpojoList.get(j).get);
							recorddetails.put("ISIN", 1);
							recorddetails.put("Quantity",2);
						}*/
							
						reqId=StrArry[0].toString();
						
						jsonarray.add(recorddetails);
					}  
			        
			        //jsonarray.add(recorddetails);
			        
			       /* recorddetails.put("TxnReqId", encryptpojo.getTranactionId());
					recorddetails.put("ISIN", encryptpojo.getIsinNumber());
					recorddetails.put("Quantity", encryptpojo.getQuantity());*/
					
		        }
				//System.out.println("transArr : "+transArr.length+" encryptpojo : "+encryptpojo.getTranactionId());
				
				
					
				/*	String trnasId="";String IsinNumberTrans="";String QantityTrans="";
					
					for(int d=0;d<transArr.length;d++) {
						
						System.out.println("transArr : "+transArr[d].toString());
						
						System.out.println("1 : "+transArr[0].toString());
						System.out.println("2 : "+transArr[1].toString());
						System.out.println("3 : "+transArr[2].toString());
					
					encryptpojo.setTranactionId(transArr[0].toString());
					encryptpojo.setIsinNumber(transArr[1].toString());
					encryptpojo.setQuantity(transArr[2].toString());*/
					
					
				
					
						
					/*recorddetails.put("TxnReqId", trnasId);
					recorddetails.put("ISIN", IsinNumber);
					recorddetails.put("Quantity", Quantity);*/
				
					
					
					//}
				//}
				
			
				

				
				
				System.out.println("jsonarray : "+jsonarray.toJSONString()); 
				
				trancationDetailsVerifyDISInput.put("RecordDtls", jsonarray);
				
				//Map<String, String> verifyDISInput = new HashMap<>();
				

				JSONObject verifyDISInput = new JSONObject();
				verifyDISInput.put("DPId","92400");
				verifyDISInput.put("ReqId",reqId);
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
				
				HttpEntity<String> requestparam = new HttpEntity<>(verifyDISInput.toString());
	            System.out.println("requestparam : "+requestparam);
	            System.out.println("URL : "+EdisVerifyUrl.toString()); 


	          //  HttpEntity<Map<String, String>> requestEntity = new HttpEntity<>(verifyDISInput,headers);
	          //  HttpEntity<Map<String, String>> requestEntity = new HttpEntity<>(verifyDISInput, headers);
	          
	         //   System.out.println("requestEntity : "+verifyDISInput.toString());
	            
	            //EDISVerifyOutput = restTemplate.postForObject(EdisVerifyUrl.toString(), requestEntity, String.class);
	            
	            
	            
	            EDISVerifyOutput= restTemplate.postForEntity(EdisVerifyUrl.toString(), requestparam, String.class);
	            
	            
	            System.out.println("status code : "+ EDISVerifyOutput.getStatusCode());
	            System.out.println("headers : "+ EDISVerifyOutput.getHeaders());
	            System.out.println("body : "+ EDISVerifyOutput.getBody());
	            System.out.println("EDISVerifyOutput : "+EDISVerifyOutput.toString());

	            System.out.println("restTemplate : "+restTemplate.toString()); 
	            
			//	System.out.println("EDISVerifyOutput : "+EDISVerifyOutput); 
				
				//edisOutputValue=EDISVerifyJson.toJSONString();
				
			//	logger.info("EDISVerify Response Value : "+edisOutputValue);
				
	
				
	            verifyDISOutput=(JSONObject) JSONValue.parse(EDISVerifyOutput.getBody()); 
				
	            
	            JSONObject CdslResponse= getCdslResponse(trancationdata);
	            
	            
	            
			} catch (Exception e) {
				logger.error("Unexpected EDISVerify error", e.getMessage());
			}
			
			
			return ResponseEntity.ok().body(verifyDISOutput);
			
		}
		
	 
	 
	 
	// @RequestMapping(value="/CdslReturnUrl", method = RequestMethod.GET, produces="application/json")
	//	public ModelAndView getCdslResponse(Model m,@RequestParam String trancationdata) {
		
	 public JSONObject getCdslResponse(String trancationdata) { 
		 
		 String reqId="";
		 
		 //System.out.println("inside getForgotPassword");
		 System.out.println(" trancationdata : "+trancationdata);
		 
		 ModelAndView mv=new ModelAndView("sample");
		 
		 ResponseEntity<String> EDISReturnOutput =null;
			//String EDISVerifyOutput ="";	
			String edisOutputValue="";
			String  TranactionEncryptdata="";
			
			JSONObject edisResponseJson = new JSONObject();
			
			try {
				 System.out.println("inside try......."+marketwatchProvider.getEdisreturnurl());
				
				 StringBuffer EdisVerifyBuff = new StringBuffer(marketwatchProvider.getEdisreturnurl());
				URL  EdisVerifyUrl = new URL(EdisVerifyBuff.toString());
				
				System.out.println("EdisVerifyUrl : "+EdisVerifyUrl.toString());
				
				
				RestTemplate restTemplate = new RestTemplate();			
				
	            
	            JSONObject trancationDetailsVerifyDISInput = new JSONObject();
				
				
				JSONArray jsonarray = new JSONArray();	
				JSONObject recorddetails = new JSONObject();
				
			System.out.println("Tranactiondata:::"+trancationdata.length()+" trancationdata : "+trancationdata); 
				
			
			  // StringBuilder transsb = new StringBuilder(trancationdata.split(("")));
			
				/*String[] trans = trancationdata.split(",");*/
				String[] transArr=null;
				EncryptPojo encryptpojo=new EncryptPojo();
				//List<EncryptPojo> encryptpojoList = new ArrayList<>();
				ArrayList<String> encryptpojoList=new ArrayList<String>();
//				
				ArrayList<String> trans = new ArrayList<>(Arrays.asList(trancationdata.split(",")));
				//ArrayList<String> trans = new ArrayList<>(Arrays.asList(trancationdata));

				
				
				System.out.println("trans : "+trans.size());
		        String k[] = trans.toArray(new String[trans.size()]);
		        String[] StrArry=null;

		        
		        
		     
		        
		      //  for (String str : k) {
		        	
		        for (int ij = 0; ij < trans.size(); ij++) {
					
				
		            // Printing the elements in above array
		           // System.out.println("str : "+str); 
		        	 System.out.println("str : "+trans.get(ij).toString());
		            
		            StrArry=trans.get(ij).toString().split(Pattern.quote("|"));
		            
		            
		            System.out.println("StrArry : "+StrArry.length+" k : "+k.length);
		            
		            int length;
			         if(StrArry.length > k.length) {
			        	 length = k.length;
			         }else {
			        	 length = StrArry.length;
			         }
			        
			         	
			      
			        for (int i = 0; i <length; i++) {
		            	
			        	 	/*recorddetails.put("TxnReqId", StrArry[0].toString());
							recorddetails.put("ISIN", StrArry[1].toString());
							recorddetails.put("Quantity",StrArry[2].toString());*/
			        	
			        		recorddetails.put("TxnReqId", StrArry[0].toString());
							recorddetails.put("ISIN", StrArry[1].toString());
							recorddetails.put("Quantity",StrArry[2].toString());
							
							System.out.println("1 : "+StrArry[0].toString());
							System.out.println("2 : "+StrArry[1].toString());
							System.out.println("3 : "+StrArry[2].toString());
						
						
						//System.out.println(" size of records : "+encryptpojoList.size());
						
						/*for (int j = 0; j < encryptpojoList.size(); j++) {
							
							recorddetails.put("TxnReqId",encryptpojoList.get(j).get);
							recorddetails.put("ISIN", 1);
							recorddetails.put("Quantity",2);
						}*/
							
						reqId=StrArry[0].toString();
						
						jsonarray.add(recorddetails);
					}  
			        
		        }	  
				
				
				System.out.println("jsonarray : "+jsonarray.toJSONString()); 
				
				
				HttpHeaders headers = new HttpHeaders();
	            headers.setContentType(MediaType.APPLICATION_JSON);
	            headers.add("ReqId", reqId);
	            
				trancationDetailsVerifyDISInput.put("ReqType", "D");
				trancationDetailsVerifyDISInput.put("transDtls",jsonarray);
				
				
				System.out.println("verifyDISInput:::"+trancationDetailsVerifyDISInput);
				
				
				
				HttpEntity<String> requestparam = new HttpEntity<>(trancationDetailsVerifyDISInput.toString(),headers);
	            System.out.println("requestparam : "+requestparam);
	            System.out.println("URL : "+EdisVerifyUrl.toString()); 

	            
	            EDISReturnOutput= restTemplate.postForEntity(EdisVerifyUrl.toString(), requestparam, String.class);
	            
	            
	            System.out.println("status code : "+ EDISReturnOutput.getStatusCode());
	            System.out.println("headers : "+ EDISReturnOutput.getHeaders());
	            System.out.println("body : "+ EDISReturnOutput.getBody());
	            System.out.println("EDISVerifyOutput : "+EDISReturnOutput.toString());

	            System.out.println("restTemplate : "+restTemplate.toString()); 
	            
		
	
				
	            edisResponseJson=(JSONObject) JSONValue.parse(EDISReturnOutput.getBody()); 
					
			} catch (Exception e) {
				logger.error("Unexpected EDISVerify error", e.getMessage());
			}
			
		 			
		 return edisResponseJson; 
		}
	 
	
	
}
