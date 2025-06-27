package com.topaz.trading.controller.kambala;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.text.ParseException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Random;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.bouncycastle.asn1.ocsp.ResponderID;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.JSONValue;
import org.json.simple.parser.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.servlet.ModelAndView;

import com.google.gson.Gson;
import com.topaz.trading.controller.CommonFunction;
import com.topaz.trading.controller.MarketwatchProvider;
import com.topaz.trading.model.Alerts;
import com.topaz.trading.model.MarketWacthScript;
import com.topaz.trading.model.OrderNotification;
import com.topaz.trading.model.OrderbookResponse;
import com.topaz.trading.model.OrderhistoryResponse;
import com.topaz.trading.pojo.UserInfo;
import com.topaz.trading.pojo.Orderbookpojo;
import com.topaz.trading.repository.ScriptImp2;



@RestController
//@RequestMapping("/c")
public class OrderbookControllerKambala {

	@Autowired
	MarketwatchProvider marketwatchProvider;
	
	@Autowired
	ScriptImp2 scriptImp;
	
	@Autowired
	Logincontroller logincontrollerKambala;
	
	private static Logger logger = LoggerFactory.getLogger(OrderbookControllerKambala.class);
	
	private static String jKey="";
	
	
	@RequestMapping(value = "/PlaceOrder", method = RequestMethod.POST)
	public String PlaceOrderPage(
			@RequestParam String s_prdt_ali, @RequestParam String uid, @RequestParam String actid,
			@RequestParam String Tsym, @RequestParam String exch, @RequestParam String Ttranstype,
			@RequestParam String Ret, @RequestParam String prctyp, @RequestParam String qty,
			@RequestParam String discqty, @RequestParam String MktPro, @RequestParam String Price,
			@RequestParam String TrigPrice, @RequestParam String Pcode, @RequestParam String DateDays,
			@RequestParam String AMO, @RequestParam String PosSquareFlg, @RequestParam String MinQty,
			@RequestParam String naicCode, @RequestParam String orderSource,
			@RequestParam String trailingSL,@RequestParam String ltpOratp,@RequestParam String SqrOffAbsOrticks,
			@RequestParam String tSLticks,@RequestParam String SLvalue,@RequestParam String SqrOffvalue,@RequestParam String userTag,
			@RequestParam String prd,@RequestParam String scriptName,@RequestParam String displayName,			
			HttpServletRequest request, HttpServletResponse response) {
		
		
		/*System.out.println("s_prdt_ali :"+s_prdt_ali+" uid : "+uid+" actid : "+actid);
		
		System.out.println("Tsym : "+Tsym+" exch : "+exch+" Ttranstype : "+Ttranstype+" Ret : "+Ret);
		System.out.println("prctyp : "+prctyp+" qty : "+qty+" discqty : "+discqty+" MktPro : "+MktPro);
		System.out.println("Price : "+Price+" TrigPrice : "+TrigPrice+" Pcode : "+Pcode+" DateDays : "+DateDays);
		
		System.out.println("AMO : "+AMO+" PosSquareFlg : "+PosSquareFlg+" MinQty : "+MinQty+" naicCode : "+naicCode);
		System.out.println("orderSource : "+orderSource+"   ");
		
		System.out.println("scriptName:::"+scriptName+"displayName:::"+displayName);*/
		
		// API 12.01 PlaceOrder
		String outputValue="";
		HttpSession session = null;
		session = request.getSession();
		String userId = (String) session.getAttribute("userId");
		String jKey=(String) session.getAttribute("susertoken");
		
		JSONObject PlaceorderInputJson = new JSONObject();	
		JSONObject PlaceorderResponseJson = new JSONObject();
		JSONObject PlaceOrderInput = new JSONObject();
	
		
		
		if(prd.equals("B")) {  // BO Order only
			
			
			PlaceorderInputJson.put("uid", actid);
			PlaceorderInputJson.put("actid", actid);
			PlaceorderInputJson.put("exch",exch);
			PlaceorderInputJson.put("tsym",Tsym);
			PlaceorderInputJson.put("qty",qty);
			PlaceorderInputJson.put("prc",Price);
			PlaceorderInputJson.put("prd",prd);
			PlaceorderInputJson.put("trantype",Ttranstype);
			PlaceorderInputJson.put("prctyp",prctyp);
			PlaceorderInputJson.put("ret",Ret);
			
			PlaceorderInputJson.put("bpprc",SqrOffvalue);
			PlaceorderInputJson.put("blprc",SLvalue);
			//PlaceorderInputJson.put("amo",AMO);
			
			PlaceorderInputJson.put("remarks","WC TEST Order");
			PlaceorderInputJson.put("ordersource",orderSource);
			
		}
		
		else if(AMO.equals("YES")) { // AMO Order only
			
			
			PlaceorderInputJson.put("uid", actid);
			PlaceorderInputJson.put("actid", actid);
			PlaceorderInputJson.put("exch",exch);
			PlaceorderInputJson.put("tsym",Tsym);
			PlaceorderInputJson.put("qty",qty);
			PlaceorderInputJson.put("prc",Price);
			PlaceorderInputJson.put("prd",prd);
			PlaceorderInputJson.put("trantype",Ttranstype);
			PlaceorderInputJson.put("prctyp",prctyp);
			PlaceorderInputJson.put("ret",Ret);
			PlaceorderInputJson.put("amo",AMO);
			PlaceorderInputJson.put("remarks","WC TEST Order");
			PlaceorderInputJson.put("ordersource",orderSource);
		}
		else {							
			
			PlaceorderInputJson.put("uid", actid);
			PlaceorderInputJson.put("actid", actid);
			PlaceorderInputJson.put("exch",exch);
			PlaceorderInputJson.put("tsym",Tsym);
			PlaceorderInputJson.put("qty",qty);
			PlaceorderInputJson.put("prc",Price);
			PlaceorderInputJson.put("prd",prd);
			PlaceorderInputJson.put("trantype",Ttranstype);
			PlaceorderInputJson.put("prctyp",prctyp);
			PlaceorderInputJson.put("ret",Ret);
			PlaceorderInputJson.put("remarks","WC TEST Order");
			PlaceorderInputJson.put("ordersource",orderSource);
			
		}
		
		
		 ResponseEntity<String>PlaceorderkambalaOutput=null;
		
		 try {		
				
				StringBuffer PlaceorderkambalaBuff = new StringBuffer(marketwatchProvider.getPlaceorderkambalaUrl());
			
				URL PlaceorderkambalaUrl = new URL(PlaceorderkambalaBuff.toString());
				
				RestTemplate restTemplate = new RestTemplate();			
					      
			      Map<String,Object> map = new HashMap<String,Object>();
			      map.put("jData",PlaceorderInputJson.toJSONString());      
			      map.put("jKey",jKey);
	      
			      String bodyproperties= CommonFunction.urlEncodeUTF8(map);
	     
	      
		       HttpEntity<String> requestparam = new HttpEntity<>(bodyproperties);
		       
		      // System.out.println("Request URL : "+PlaceorderkambalaUrl.toString());       
		       System.out.println("requestparam : "+requestparam.toString());
	       
		       // build the request
		       PlaceorderkambalaOutput = restTemplate.postForEntity(PlaceorderkambalaUrl.toString(), requestparam, String.class);
		       
		       
		       
		       String Responsebody=PlaceorderkambalaOutput.getBody();
		       
		       
			   	Object obj = JSONValue.parse(Responsebody);
			   	PlaceorderResponseJson = (JSONObject) obj;
			   	
			   	PlaceorderResponseJson.put("StatusCode", PlaceorderkambalaOutput.getStatusCode()); 

			   	
			   	String stat=PlaceorderResponseJson.get("stat").toString();
			   	
			   	
			   	if(PlaceorderResponseJson.get("stat").toString().equalsIgnoreCase("Ok")) {
			   		
			   		PlaceorderResponseJson.put("price", Price);
				   	PlaceorderResponseJson.put("qty",qty);
				   	PlaceorderResponseJson.put("userid",uid);
				   	PlaceorderResponseJson.put("exchange",exch);
				   	PlaceorderResponseJson.put("scriptName",scriptName);
				   	PlaceorderResponseJson.put("displayName",displayName);
				   	PlaceorderResponseJson.put("transtype",Ttranstype);
				   	
				    DateTimeFormatter dtf1 = DateTimeFormatter.ofPattern("dd/MM/yyyy");
					   LocalDateTime now1 = LocalDateTime.now();
					   
					   String notificationdate=dtf1.format(now1);
					 

					   DateTimeFormatter dtf2 = DateTimeFormatter.ofPattern("HH:mm:ss");
					   LocalDateTime now2 = LocalDateTime.now();
					   String notificationtime=dtf2.format(now2);
					   
					  // System.out.println("notificationdate::::"+notificationdate+"notificationtime::"+notificationtime);
					   
					   
					   OrderNotification ordernotification= new OrderNotification();
				        
				        ordernotification.setUserId(PlaceorderResponseJson.get("userid").toString());
				        ordernotification.setScriptname(PlaceorderResponseJson.get("scriptName").toString());
				        ordernotification.setExchange(PlaceorderResponseJson.get("exchange").toString());
				        ordernotification.setPrice(PlaceorderResponseJson.get("price").toString());
				        ordernotification.setDisplayname(PlaceorderResponseJson.get("displayName").toString());
				        ordernotification.setQty(PlaceorderResponseJson.get("qty").toString());
				        ordernotification.setProduct(PlaceorderResponseJson.get("transtype").toString());
				        
				        ordernotification.setNotificationdate(notificationdate);
				        ordernotification.setNotificationtime(notificationtime);
				        
				        scriptImp.orderNotificationInsert(ordernotification);
				   	
			   	}
			   
			   		//System.out.println("PlaceorderResponseJson : "+ PlaceorderResponseJson);
			   	
	       	      /*  System.out.println("status code : "+ PlaceorderkambalaOutput.getStatusCode());
			        System.out.println("headers : "+ PlaceorderkambalaOutput.getHeaders());*/
			        System.out.println("body : "+ PlaceorderkambalaOutput.getBody());
			
				} catch (Exception e) {
					logger.error("Unexpected Placeorder error", e.getMessage());
					e.printStackTrace();
				}
		 
		 		return PlaceorderResponseJson.toJSONString();
	}
	
	@RequestMapping(value = "/SpanCalc", method = RequestMethod.POST)
	public ResponseEntity<JSONObject> SpanCalcPage(HttpServletRequest request, HttpServletResponse response,
			@RequestParam String prd,@RequestParam String exch,@RequestParam String symbolname,@RequestParam String instrumentname,
			@RequestParam String expirydate,@RequestParam String buyqty,@RequestParam String strprc,@RequestParam String optt) {
		
		
		//System.out.println("prd :"+prd+" exch : "+exch+" symbolname : "+symbolname+" instrumentname : "+instrumentname+" expirydate : "+expirydate);
		
		//System.out.println("buyqty : "+buyqty);
		
		// API SpanCalc
		
		String outputValue="";
		HttpSession session = null;
		session = request.getSession();
		String userId = (String) session.getAttribute("userId");
		//String jKey=(String) session.getAttribute("susertoken");
		
		JSONObject  SpanCalcInputJson = new JSONObject();	
		JSONObject  SpanCalcResponseJson = new JSONObject();
		JSONObject  SpanJsonposInput = new JSONObject();	
		String finalexpirydate = expirydate.replaceAll("/", "-");
		
		//System.out.println("finalexpirydate : "+finalexpirydate); 
		
	
		if(optt.equals("PE")|| optt.equals("CE")){
			
			SpanJsonposInput.put("prd",prd);
			SpanJsonposInput.put("exch",exch);
			SpanJsonposInput.put("symname",symbolname);
			SpanJsonposInput.put("instname",instrumentname);
			SpanJsonposInput.put("exd",finalexpirydate);
			SpanJsonposInput.put("buyqty",buyqty);
			SpanJsonposInput.put("strprc",strprc);
			SpanJsonposInput.put("optt",optt);
			
		}
		else {
			SpanJsonposInput.put("prd",prd);
			SpanJsonposInput.put("exch",exch);
			SpanJsonposInput.put("symname",symbolname);
			SpanJsonposInput.put("instname",instrumentname);
			SpanJsonposInput.put("exd",finalexpirydate);
			SpanJsonposInput.put("buyqty",buyqty);
		}
	
		JSONArray Jsonarray = new JSONArray();
		Jsonarray.add(SpanJsonposInput);
		
		
		
		
		//System.out.println("Jsonarray  : "+Jsonarray); 
		SpanCalcInputJson.put("pos", Jsonarray);
		SpanCalcInputJson.put("actid", userId);
		
			
		
	
		
		 ResponseEntity<String>PlaceorderkambalaOutput=null;
		
		 try {		
				
				StringBuffer SpanCalckambalaBuff = new StringBuffer(marketwatchProvider.getSpanCalckambalaUrl());			
				URL SpanCalckambalaUrl = new URL(SpanCalckambalaBuff.toString());				
				RestTemplate restTemplate = new RestTemplate();								      
			      Map<String,Object> map = new HashMap<String,Object>();
			      map.put("jData",SpanCalcInputJson.toJSONString());	      
			      String bodyproperties= CommonFunction.urlEncodeUTF8(map);    
	      
		       HttpEntity<String> requestparam = new HttpEntity<>(bodyproperties);		    
	       
		       //System.out.println("requestparam : "+requestparam); 
		       // build the request
		       PlaceorderkambalaOutput = restTemplate.postForEntity(SpanCalckambalaUrl.toString(), requestparam, String.class);		       
		       
		       SpanCalcResponseJson= (JSONObject) JSONValue.parse(PlaceorderkambalaOutput.getBody());
			  
			   	//System.out.println("SpanCalcResponseJson : "+SpanCalcResponseJson); 
			   	
			   	String stat=SpanCalcResponseJson.get("stat").toString();
			  
				} catch (Exception e) {
					logger.error("Unexpected Placeorder error", e.getMessage());
					e.printStackTrace();
				}
		 	
		 return ResponseEntity.ok().body(SpanCalcResponseJson);
		 	
	}

	
	
	
	@RequestMapping(value = "/PlaceOrderRepeat", method = RequestMethod.POST)
	public String PlaceOrderPageRepeat(
			@RequestParam String s_prdt_ali,
			@RequestParam String Tsym, @RequestParam String exch, @RequestParam String Ttranstype,
			@RequestParam String Ret, @RequestParam String prctyp, @RequestParam String qty,
			@RequestParam String discqty, @RequestParam String MktPro, @RequestParam String Price,
			@RequestParam String TrigPrice, @RequestParam String Pcode, @RequestParam String DateDays,
			@RequestParam String AMO, @RequestParam String PosSquareFlg, @RequestParam String MinQty,
			@RequestParam String naicCode, @RequestParam String orderSource,
			@RequestParam String trailingSL,@RequestParam String ltpOratp,@RequestParam String SqrOffAbsOrticks,
			@RequestParam String tSLticks,@RequestParam String SLvalue,@RequestParam String SqrOffvalue,@RequestParam String userTag,
			@RequestParam String prd,@RequestParam String scriptName,@RequestParam String displayName,			
			HttpServletRequest request, HttpServletResponse response) {
		
		
		/*System.out.println("s_prdt_ali :"+s_prdt_ali+" uid : "+uid+" actid : "+actid);
		
		System.out.println("Tsym : "+Tsym+" exch : "+exch+" Ttranstype : "+Ttranstype+" Ret : "+Ret);
		System.out.println("prctyp : "+prctyp+" qty : "+qty+" discqty : "+discqty+" MktPro : "+MktPro);
		System.out.println("Price : "+Price+" TrigPrice : "+TrigPrice+" Pcode : "+Pcode+" DateDays : "+DateDays);
		
		System.out.println("AMO : "+AMO+" PosSquareFlg : "+PosSquareFlg+" MinQty : "+MinQty+" naicCode : "+naicCode);
		System.out.println("orderSource : "+orderSource+"   ");
		
		System.out.println("scriptName:::"+scriptName+"displayName:::"+displayName);*/
		
		// API 12.01 PlaceOrder
		String outputValue="";
		HttpSession session = null;
		session = request.getSession();
		String userId = (String) session.getAttribute("userId");
		String jKey=(String) session.getAttribute("susertoken");
		
		JSONObject PlaceorderInputJson = new JSONObject();	
		JSONObject PlaceorderResponseJson = new JSONObject();
		JSONObject PlaceOrderInput = new JSONObject();
	
		System.out.println("userId:123::"+userId);
		
		if(prd.equals("B")) {  // BO Order only
			
			
			PlaceorderInputJson.put("uid", userId);
			PlaceorderInputJson.put("actid", userId);
			PlaceorderInputJson.put("exch",exch);
			PlaceorderInputJson.put("tsym",Tsym);
			PlaceorderInputJson.put("qty",qty);
			PlaceorderInputJson.put("prc",Price);
			PlaceorderInputJson.put("prd",prd);
			PlaceorderInputJson.put("trantype",Ttranstype);
			PlaceorderInputJson.put("prctyp",prctyp);
			PlaceorderInputJson.put("ret",Ret);
			
			PlaceorderInputJson.put("bpprc",SqrOffvalue);
			PlaceorderInputJson.put("blprc",SLvalue);
			//PlaceorderInputJson.put("amo",AMO);
			
			PlaceorderInputJson.put("remarks","WC TEST Order");
			PlaceorderInputJson.put("ordersource",orderSource);
			
		}
		
		else if(AMO.equals("YES")) { // AMO Order only
			
			
			PlaceorderInputJson.put("uid", userId);
			PlaceorderInputJson.put("actid", userId);
			PlaceorderInputJson.put("exch",exch);
			PlaceorderInputJson.put("tsym",Tsym);
			PlaceorderInputJson.put("qty",qty);
			PlaceorderInputJson.put("prc",Price);
			PlaceorderInputJson.put("prd",prd);
			PlaceorderInputJson.put("trantype",Ttranstype);
			PlaceorderInputJson.put("prctyp",prctyp);
			PlaceorderInputJson.put("ret",Ret);
			PlaceorderInputJson.put("amo",AMO);
			PlaceorderInputJson.put("remarks","WC TEST Order");
			PlaceorderInputJson.put("ordersource",orderSource);
		}
		else {							
			
			PlaceorderInputJson.put("uid", userId);
			PlaceorderInputJson.put("actid", userId);
			PlaceorderInputJson.put("exch",exch);
			PlaceorderInputJson.put("tsym",Tsym);
			PlaceorderInputJson.put("qty",qty);
			PlaceorderInputJson.put("prc",Price);
			PlaceorderInputJson.put("prd",prd);
			PlaceorderInputJson.put("trantype",Ttranstype);
			PlaceorderInputJson.put("prctyp",prctyp);
			PlaceorderInputJson.put("ret",Ret);
			PlaceorderInputJson.put("remarks","WC TEST Order");
			PlaceorderInputJson.put("ordersource",orderSource);
			
		}
		
		
		 ResponseEntity<String>PlaceorderkambalaOutput=null;
		
		 try {		
				
				StringBuffer PlaceorderkambalaBuff = new StringBuffer(marketwatchProvider.getPlaceorderkambalaUrl());
			
				URL PlaceorderkambalaUrl = new URL(PlaceorderkambalaBuff.toString());
				
				RestTemplate restTemplate = new RestTemplate();			
					      
			      Map<String,Object> map = new HashMap<String,Object>();
			      map.put("jData",PlaceorderInputJson.toJSONString());      
			      map.put("jKey",jKey);
	      
			      String bodyproperties= CommonFunction.urlEncodeUTF8(map);
	     
	      
		       HttpEntity<String> requestparam = new HttpEntity<>(bodyproperties);
		       
		      // System.out.println("Request URL : "+PlaceorderkambalaUrl.toString());       
		       System.out.println("requestparam : "+requestparam.toString());
	       
		       // build the request
		       PlaceorderkambalaOutput = restTemplate.postForEntity(PlaceorderkambalaUrl.toString(), requestparam, String.class);
		       
		       
		       
		       String Responsebody=PlaceorderkambalaOutput.getBody();
		       
		       
			   	Object obj = JSONValue.parse(Responsebody);
			   	PlaceorderResponseJson = (JSONObject) obj;
			   	
			   	PlaceorderResponseJson.put("StatusCode", PlaceorderkambalaOutput.getStatusCode()); 

			   	
			   	String stat=PlaceorderResponseJson.get("stat").toString();
			   	
			   	
			   	if(PlaceorderResponseJson.get("stat").toString().equalsIgnoreCase("Ok")) {
			   		
			   		PlaceorderResponseJson.put("price", Price);
				   	PlaceorderResponseJson.put("qty",qty);
				   	PlaceorderResponseJson.put("userid",userId);
				   	PlaceorderResponseJson.put("exchange",exch);
				   	PlaceorderResponseJson.put("scriptName",scriptName);
				   	PlaceorderResponseJson.put("displayName",displayName);
				   	PlaceorderResponseJson.put("transtype",Ttranstype);
				   	
				    DateTimeFormatter dtf1 = DateTimeFormatter.ofPattern("dd/MM/yyyy");
					   LocalDateTime now1 = LocalDateTime.now();
					   
					   String notificationdate=dtf1.format(now1);
					 

					   DateTimeFormatter dtf2 = DateTimeFormatter.ofPattern("HH:mm:ss");
					   LocalDateTime now2 = LocalDateTime.now();
					   String notificationtime=dtf2.format(now2);
					   
					  // System.out.println("notificationdate::::"+notificationdate+"notificationtime::"+notificationtime);
					   
					   
					   OrderNotification ordernotification= new OrderNotification();
				        
				        ordernotification.setUserId(PlaceorderResponseJson.get("userid").toString());
				        ordernotification.setScriptname(PlaceorderResponseJson.get("scriptName").toString());
				        ordernotification.setExchange(PlaceorderResponseJson.get("exchange").toString());
				        ordernotification.setPrice(PlaceorderResponseJson.get("price").toString());
				        ordernotification.setDisplayname(PlaceorderResponseJson.get("displayName").toString());
				        ordernotification.setQty(PlaceorderResponseJson.get("qty").toString());
				        ordernotification.setProduct(PlaceorderResponseJson.get("transtype").toString());
				        
				        ordernotification.setNotificationdate(notificationdate);
				        ordernotification.setNotificationtime(notificationtime);
				        
				        scriptImp.orderNotificationInsert(ordernotification);
				   	
			   	}
			   
			   		//System.out.println("PlaceorderResponseJson : "+ PlaceorderResponseJson);
			   	
	       	      /*  System.out.println("status code : "+ PlaceorderkambalaOutput.getStatusCode());
			        System.out.println("headers : "+ PlaceorderkambalaOutput.getHeaders());*/
			        System.out.println("body : "+ PlaceorderkambalaOutput.getBody());
			
				} catch (Exception e) {
					logger.error("Unexpected Placeorder error", e.getMessage());
					e.printStackTrace();
				}
		 
		 		return PlaceorderResponseJson.toJSONString();
	}
	
	
	@RequestMapping(value = "/SpanCalcRepeat", method = RequestMethod.POST)
	public ResponseEntity<JSONObject> SpanCalcRepeat(HttpServletRequest request, HttpServletResponse response,
			@RequestParam String prd,@RequestParam String exch,@RequestParam String symbolname,@RequestParam String instrumentname,
			@RequestParam String expirydate,@RequestParam String buyqty,@RequestParam String strprc,@RequestParam String optt) {
		
		
		//System.out.println("prd :"+prd+" exch : "+exch+" symbolname : "+symbolname+" instrumentname : "+instrumentname+" expirydate : "+expirydate);
		
		//System.out.println("buyqty : "+buyqty);
		
		// API SpanCalc
		
		String outputValue="";
		HttpSession session = null;
		session = request.getSession();
		String userId = (String) session.getAttribute("userId");
		//String jKey=(String) session.getAttribute("susertoken");
		
		JSONObject  SpanCalcInputJson = new JSONObject();	
		JSONObject  SpanCalcResponseJson = new JSONObject();
		JSONObject  SpanJsonposInput = new JSONObject();	
		String finalexpirydate = expirydate.replaceAll("/", "-");
		
		//System.out.println("finalexpirydate : "+finalexpirydate); 
		
	
		if(optt.equals("PE")|| optt.equals("CE")){
			
			SpanJsonposInput.put("prd",prd);
			SpanJsonposInput.put("exch",exch);
			SpanJsonposInput.put("symname",symbolname);
			SpanJsonposInput.put("instname",instrumentname);
			SpanJsonposInput.put("exd",finalexpirydate);
			SpanJsonposInput.put("buyqty",buyqty);
			SpanJsonposInput.put("strprc",strprc);
			SpanJsonposInput.put("optt",optt);
			
		}
		else {
			SpanJsonposInput.put("prd",prd);
			SpanJsonposInput.put("exch",exch);
			SpanJsonposInput.put("symname",symbolname);
			SpanJsonposInput.put("instname",instrumentname);
			SpanJsonposInput.put("exd",finalexpirydate);
			SpanJsonposInput.put("buyqty",buyqty);
		}
	
		JSONArray Jsonarray = new JSONArray();
		Jsonarray.add(SpanJsonposInput);
		
		
		
		
		//System.out.println("Jsonarray  : "+Jsonarray); 
		SpanCalcInputJson.put("pos", Jsonarray);
		SpanCalcInputJson.put("actid", userId);
		
			
		
	
		
		 ResponseEntity<String>PlaceorderkambalaOutput=null;
		
		 try {		
				
				StringBuffer SpanCalckambalaBuff = new StringBuffer(marketwatchProvider.getSpanCalckambalaUrl());			
				URL SpanCalckambalaUrl = new URL(SpanCalckambalaBuff.toString());				
				RestTemplate restTemplate = new RestTemplate();								      
			      Map<String,Object> map = new HashMap<String,Object>();
			      map.put("jData",SpanCalcInputJson.toJSONString());	      
			      String bodyproperties= CommonFunction.urlEncodeUTF8(map);    
	      
		       HttpEntity<String> requestparam = new HttpEntity<>(bodyproperties);		    
	       
		       //System.out.println("requestparam : "+requestparam); 
		       // build the request
		       PlaceorderkambalaOutput = restTemplate.postForEntity(SpanCalckambalaUrl.toString(), requestparam, String.class);		       
		       
		       SpanCalcResponseJson= (JSONObject) JSONValue.parse(PlaceorderkambalaOutput.getBody());
			  
			   	//System.out.println("SpanCalcResponseJson : "+SpanCalcResponseJson); 
			   	
			   	String stat=SpanCalcResponseJson.get("stat").toString();
			  
				} catch (Exception e) {
					logger.error("Unexpected Placeorder error", e.getMessage());
					e.printStackTrace();
				}
		 	
		 return ResponseEntity.ok().body(SpanCalcResponseJson);
		 	
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	@RequestMapping(value="/OrderBook", method = RequestMethod.POST, produces="application/json")
	public ResponseEntity<JSONObject> pendingOrder(HttpServletRequest request, HttpServletResponse response) {
		
		    HttpSession session = request.getSession();
		    
		    String userId = (String) session.getAttribute("userId");
			String jKey=(String) session.getAttribute("susertoken");
			
			
			//System.out.println("userId:::"+userId);
			
			JSONObject OrderBookInputJson = new JSONObject();
			
			 ResponseEntity<String> orderBookOutput=null;
			 
			 JSONObject orderBookJson = new JSONObject();
			 				

			 OrderBookInputJson.put("uid", userId);
			

			 //System.out.println("OrderBook jKey:::"+jKey);
			try {
	
					StringBuffer OrderBookkambalaBuff = new StringBuffer(marketwatchProvider.getKambalaOrderBookUrl());
					
					URL OrderBookkambalaUrl = new URL(OrderBookkambalaBuff.toString());
					
					RestTemplate restTemplate = new RestTemplate();			
					HttpHeaders headers = new HttpHeaders();

			        Map<String,Object> map = new HashMap<String,Object>();
			        map.put("jData",OrderBookInputJson.toJSONString());
			        map.put("jKey",jKey);
			        
			  	    String bodyproperties= CommonFunction.urlEncodeUTF8(map);
			  	    
			  	    
			       HttpEntity<String> requestparam = new HttpEntity<>(bodyproperties, headers);
			       
			       /*System.out.println("OrderBook URL : "+OrderBookkambalaUrl.toString());       
			       System.out.println("OrderBook requestparam : "+requestparam.toString());*/ 
			       
			     // build the request
			       orderBookOutput = restTemplate.postForEntity(OrderBookkambalaUrl.toString(), requestparam, String.class);
			        
			       /*  
			        System.out.println("OrderBook status code : "+ orderBookOutput.getStatusCode());
			        System.out.println("OrderBookheaders : "+ orderBookOutput.getHeaders());
			        System.out.println("OrderBook body : "+ orderBookOutput.getBody());

			        System.out.println("restTemplate : "+restTemplate.toString());*/ 
			        
			        
			        orderBookJson.put("data", orderBookOutput.getBody().toString());
			        
			        
			        System.out.println("data:::"+orderBookOutput.getBody());
				       				       

			} catch (Exception e) {
				logger.error("Unexpected ValidAns error", e.getMessage());
				e.printStackTrace();


			}

			  return ResponseEntity.ok().body(orderBookJson);
		
	}
	


	@RequestMapping(value="/TradeBook", method = RequestMethod.POST)
	public ResponseEntity<JSONObject> tradeBookOrder(HttpServletRequest request, HttpServletResponse response) {
		
		
		 HttpSession session = request.getSession();
		 
		    String userId = (String) session.getAttribute("userId");
			String jKey=(String) session.getAttribute("susertoken");
			
			
			JSONObject TradeBookInputJson = new JSONObject();
			
			JSONObject tradeBookJson = new JSONObject();
			
			 ResponseEntity<String> TradeBookOutput=null;


			 TradeBookInputJson.put("uid", userId); 
			 TradeBookInputJson.put("actid", userId);

			
			 //System.out.println("TradeBook jKey:::"+jKey);

			try {
				
					StringBuffer TradeBookkambalaBuff = new StringBuffer(marketwatchProvider.getKambalaTradeBookUrl());
					
					URL TradeBookkambalaUrl = new URL(TradeBookkambalaBuff.toString());
					
					RestTemplate restTemplate = new RestTemplate();			
					HttpHeaders headers = new HttpHeaders();

			        Map<String,Object> map = new HashMap<String,Object>();
			        map.put("jData",TradeBookInputJson.toJSONString());
			        map.put("jKey",jKey);
			        
			  	    String bodyproperties= CommonFunction.urlEncodeUTF8(map);
			  	    
			  	    
			       HttpEntity<String> requestparam = new HttpEntity<>(bodyproperties, headers);
			       
			       /*System.out.println("TradeBook URL : "+TradeBookkambalaUrl.toString());       
			       System.out.println("TradeBook requestparam : "+requestparam.toString());*/ 
			       
			     // build the request
			       TradeBookOutput = restTemplate.postForEntity(TradeBookkambalaUrl.toString(), requestparam, String.class);
			        
			       /*  
			        System.out.println("TradeBook status code : "+ TradeBookOutput.getStatusCode());
			        System.out.println("TradeBook headers : "+ TradeBookOutput.getHeaders());
			        System.out.println("TradeBook body : "+ TradeBookOutput.getBody());

			        System.out.println("restTemplate : "+restTemplate.toString()); */
			       
			       System.out.println("restTemplate : "+TradeBookOutput.getBody());
			        
			        tradeBookJson.put("data", TradeBookOutput.getBody().toString());
			        
				   	

			} catch (Exception e) {
				logger.error("Unexpected ValidAns error", e.getMessage());
				e.printStackTrace();

			}

			  return ResponseEntity.ok().body(tradeBookJson);
		
	}
	


	@RequestMapping(value="/TradeBookS", method = RequestMethod.POST)
	public ResponseEntity<String> tradeBookOrderS(HttpServletRequest request, HttpServletResponse response) {
		
		 HttpSession session = request.getSession();
		 
			String userId = (String) session.getAttribute("userId");
			String jKey = (String) session.getAttribute("susertoken");
				
			
			JSONObject TradeBookInputJson = new JSONObject();
			
			 ResponseEntity<String> TradeBookOutput=null;


			 TradeBookInputJson.put("uid", userId); 
			 TradeBookInputJson.put("actid", userId);

		
			 //System.out.println("Tradebook jKey:::"+jKey);

			try {
				
					StringBuffer TradeBookkambalaBuff = new StringBuffer(marketwatchProvider.getKambalaTradeBookUrl());
					
					URL TradeBookkambalaUrl = new URL(TradeBookkambalaBuff.toString());
					
					RestTemplate restTemplate = new RestTemplate();			
					HttpHeaders headers = new HttpHeaders();

			        Map<String,Object> map = new HashMap<String,Object>();
			        map.put("jData",TradeBookInputJson.toJSONString());
			        map.put("jKey",jKey);
			        
			  	    String bodyproperties= CommonFunction.urlEncodeUTF8(map);
			  	    
			  	    
			       HttpEntity<String> requestparam = new HttpEntity<>(bodyproperties, headers);
			       
			       /*System.out.println("Tradebook URL : "+TradeBookkambalaUrl.toString());       
			       System.out.println("Tradebook requestparam : "+requestparam.toString());*/ 
			       
			     // build the request
			       TradeBookOutput = restTemplate.postForEntity(TradeBookkambalaUrl.toString(), requestparam, String.class);
			        
			         
			       /* System.out.println("Tradebook status code : "+ TradeBookOutput.getStatusCode());
			        System.out.println("Tradebook headers : "+ TradeBookOutput.getHeaders());
			        System.out.println("Tradebook body : "+ TradeBookOutput.getBody());

			        System.out.println("TradebookrestTemplate : "+restTemplate.toString());*/ 
			        
			       System.out.println("Tradebook body : "+ TradeBookOutput.getBody());

			} catch (Exception e) {
				logger.error("Unexpected Tradebook error", e.getMessage());
				e.printStackTrace();
				return new ResponseEntity<String>(HttpStatus.CREATED);

			}

			  return ResponseEntity.ok().body(TradeBookOutput.getBody());
		
	}
	
	
	@RequestMapping(value="/ModifyOrder", method = RequestMethod.POST)
	public ResponseEntity<String> modifyOrder(HttpServletRequest request, HttpServletResponse response,@RequestParam String uid,@RequestParam String norenordno,@RequestParam String exch,
			@RequestParam String tsym,@RequestParam String qty,@RequestParam String prc,@RequestParam String prctyp,@RequestParam String ret) {
		
		
		 HttpSession session = request.getSession();
		 
		    String userId = (String) session.getAttribute("userId");
			String jKey=(String) session.getAttribute("susertoken");
			
			JSONObject ModifyOrderInputJson = new JSONObject();
			
			 ResponseEntity<String> ModifyOrderOutput=null;
			 System.out.println("exch::"+exch+"tsym:::"+tsym+"qty:::"+qty+"prc:::"+prc+"prctype:::"+prctyp); 

			 ModifyOrderInputJson.put("uid", uid);
			 ModifyOrderInputJson.put("exch", exch);
			 ModifyOrderInputJson.put("tsym", tsym);
			 ModifyOrderInputJson.put("norenordno", norenordno);
			 ModifyOrderInputJson.put("qty", qty);
			 ModifyOrderInputJson.put("prc", prc);
			 ModifyOrderInputJson.put("prctyp", prctyp);
			 ModifyOrderInputJson.put("ret", ret);
			 ModifyOrderInputJson.put("ordersource", marketwatchProvider.getKambalaSource());

			 
			 //System.out.println("jKey:::"+jKey);


			try {
				
					StringBuffer ModifyOrderkambalaBuff = new StringBuffer(marketwatchProvider.getKambalaModifyOrderUrl());
					
					URL ModifyOrderkambalaUrl = new URL(ModifyOrderkambalaBuff.toString());
					
					RestTemplate restTemplate = new RestTemplate();			
					HttpHeaders headers = new HttpHeaders();

			      
			        Map<String,Object> map = new HashMap<String,Object>();
			        map.put("jData",ModifyOrderInputJson.toJSONString());
			        map.put("jKey",jKey);
			        
			  	    String bodyproperties= CommonFunction.urlEncodeUTF8(map);
			  	    
			  	    
			       HttpEntity<String> requestparam = new HttpEntity<>(bodyproperties, headers);
			       
			      /* System.out.println("URL : "+ModifyOrderkambalaUrl.toString());       
			       System.out.println("requestparam : "+requestparam.toString());*/ 
			       
			     // build the request
			       ModifyOrderOutput = restTemplate.postForEntity(ModifyOrderkambalaUrl.toString(), requestparam, String.class);
			        
			        /* 
			        System.out.println("status code : "+ ModifyOrderOutput.getStatusCode());
			        System.out.println("headers : "+ ModifyOrderOutput.getHeaders());
			        System.out.println("body : "+ ModifyOrderOutput.getBody());

			        System.out.println("restTemplate : "+restTemplate.toString());*/ 
			       
			       System.out.println(" Modify body : "+ ModifyOrderOutput.getBody());
			        

			} catch (Exception e) {
				logger.error("Unexpected ValidAns error", e.getMessage());
				e.printStackTrace();
				
				return new ResponseEntity<String>(HttpStatus.CREATED);

			}

			  return ResponseEntity.ok().body(ModifyOrderOutput.getBody());
		
	}
	
	
	@RequestMapping(value="/CancelOrder", method = RequestMethod.POST)
	public ResponseEntity<String> cancelOrder(HttpServletRequest request, HttpServletResponse response,@RequestParam String norenordno) {
	
		
		 HttpSession session = request.getSession();
		 
		    String userId = (String) session.getAttribute("userId");
			String jKey=(String) session.getAttribute("susertoken");
			
			JSONObject CancelOrderInputJson = new JSONObject();

			
			 ResponseEntity<String> CancelOrderOutput=null;

			 CancelOrderInputJson.put("uid", userId);
			 CancelOrderInputJson.put("norenordno", norenordno);

			
			 
			// System.out.println("jKey:::"+jKey);

			try {

					StringBuffer CancelOrderkambalaBuff = new StringBuffer(marketwatchProvider.getKambalaCancelOrderUrl());
					
					URL CancelOrderkambalaUrl = new URL(CancelOrderkambalaBuff.toString());
					
					RestTemplate restTemplate = new RestTemplate();			
					HttpHeaders headers = new HttpHeaders();

			      
			        Map<String,Object> map = new HashMap<String,Object>();
			        map.put("jData",CancelOrderInputJson.toJSONString());
			        map.put("jKey",jKey);
			        
			  	    String bodyproperties= CommonFunction.urlEncodeUTF8(map);
			  	    
			  	    
			       HttpEntity<String> requestparam = new HttpEntity<>(bodyproperties, headers);
			       
			       /*System.out.println("URL : "+CancelOrderkambalaUrl.toString());       
			       System.out.println("requestparam : "+requestparam.toString());*/ 
			       
			     // build the request
			       CancelOrderOutput = restTemplate.postForEntity(CancelOrderkambalaUrl.toString(), requestparam, String.class);
			        
			         
			       /* System.out.println("status code : "+ CancelOrderOutput.getStatusCode());
			        System.out.println("headers : "+ CancelOrderOutput.getHeaders());
			        System.out.println("body : "+ CancelOrderOutput.getBody());

			        System.out.println("restTemplate : "+restTemplate.toString());*/ 
			        
			} catch (Exception e) {
				logger.error("Unexpected ValidAns error", e.getMessage());
				e.printStackTrace();

			}

			  return ResponseEntity.ok().body(CancelOrderOutput.getBody());
		
	}
	

	@RequestMapping(value="/SingleOrdHist", method = RequestMethod.POST)
	public ResponseEntity<String> orderHistory(HttpServletRequest request, HttpServletResponse response,@RequestParam String norenordno) {
		

		 HttpSession session = request.getSession();
		 
		    String userId = (String) session.getAttribute("userId");
			String jKey=(String) session.getAttribute("susertoken");
			
			JSONObject OrderHistoryInputJson = new JSONObject();
			
			 ResponseEntity<String> OrderHistoryOutput=null;

			 OrderHistoryInputJson.put("uid", userId);
			 OrderHistoryInputJson.put("norenordno", norenordno);

			 
			// System.out.println("jKey:::"+jKey);


			try {
				
					StringBuffer OrderHistorykambalaBuff = new StringBuffer(marketwatchProvider.getKambalaSingleOrdHistUrl());
					
					URL OrderHistorykambalaUrl = new URL(OrderHistorykambalaBuff.toString());
					
					RestTemplate restTemplate = new RestTemplate();			
					HttpHeaders headers = new HttpHeaders();

			      
			        Map<String,Object> map = new HashMap<String,Object>();
			        map.put("jData",OrderHistoryInputJson.toJSONString());
			        map.put("jKey",jKey);
			        
			  	    String bodyproperties= CommonFunction.urlEncodeUTF8(map);
			  	    
			  	    
			       HttpEntity<String> requestparam = new HttpEntity<>(bodyproperties, headers);
			       
			       /*System.out.println("URL : "+OrderHistorykambalaUrl.toString());       
			       System.out.println("requestparam : "+requestparam.toString()); */
			       
			     // build the request
			       OrderHistoryOutput = restTemplate.postForEntity(OrderHistorykambalaUrl.toString(), requestparam, String.class);
			        
			         
			       /* System.out.println("status code : "+ OrderHistoryOutput.getStatusCode());
			        System.out.println("headers : "+ OrderHistoryOutput.getHeaders());
			        System.out.println("body : "+ OrderHistoryOutput.getBody());

			        System.out.println("restTemplate : "+restTemplate.toString());*/ 
			        

			} catch (Exception e) {
				logger.error("Unexpected ValidAns error", e.getMessage());
				e.printStackTrace();
				return new ResponseEntity<String>(HttpStatus.CREATED);

			}

			  return ResponseEntity.ok().body(OrderHistoryOutput.getBody());
		
	}
	
	@RequestMapping(value="/ProductConversion", method = RequestMethod.POST)
	public ResponseEntity<String> ProductConvertionKambala(HttpServletRequest request, HttpServletResponse response,@RequestParam String tsym,@RequestParam String exch,@RequestParam String ordertype
			,@RequestParam String prd,@RequestParam String qty,@RequestParam String trantype,@RequestParam String prevprd,@RequestParam String postype) {
		
		
		 HttpSession session = request.getSession();
		 
		    String userId = (String) session.getAttribute("userId");
			String jKey=(String) session.getAttribute("susertoken");
			
			JSONObject ProductConvertionInputJson = new JSONObject();
			
			 ResponseEntity<String> ProductConvertionOutput=null;
			 		

				ProductConvertionInputJson.put("uid", userId);
				ProductConvertionInputJson.put("actid", userId);
				ProductConvertionInputJson.put("exch", exch);
				ProductConvertionInputJson.put("tsym", tsym);
				ProductConvertionInputJson.put("qty", qty);
				ProductConvertionInputJson.put("prd", prd);
				ProductConvertionInputJson.put("prevprd", prevprd);
				ProductConvertionInputJson.put("trantype", trantype);
				ProductConvertionInputJson.put("postype", postype);
				ProductConvertionInputJson.put("ordersource", marketwatchProvider.getKambalaSource());

			
			 //System.out.println("jKey:::"+jKey);


			try {
				
					StringBuffer ProductConvertionkambalaBuff = new StringBuffer(marketwatchProvider.getKambalaProductConversionUrl());
					
					URL ProductConvertionkambalaUrl = new URL(ProductConvertionkambalaBuff.toString());
					
					RestTemplate restTemplate = new RestTemplate();			
					HttpHeaders headers = new HttpHeaders();

			        Map<String,Object> map = new HashMap<String,Object>();
			        map.put("jData",ProductConvertionInputJson.toJSONString());
			        map.put("jKey",jKey);
			        
			  	    String bodyproperties= CommonFunction.urlEncodeUTF8(map);
			  	    
			  	    
			       HttpEntity<String> requestparam = new HttpEntity<>(bodyproperties, headers);
			       
			       System.out.println("URL : "+ProductConvertionkambalaUrl.toString());       
			       System.out.println("requestparam : "+requestparam.toString()); 
			       
			     // build the request
			       ProductConvertionOutput = restTemplate.postForEntity(ProductConvertionkambalaUrl.toString(), requestparam, String.class);
			        
			       
			       System.out.println("body : "+ ProductConvertionOutput.getBody());
			       
			       
			        /* 
			        System.out.println("status code : "+ ProductConvertionOutput.getStatusCode());
			        System.out.println("headers : "+ ProductConvertionOutput.getHeaders());
			        System.out.println("body : "+ ProductConvertionOutput.getBody());

			        System.out.println("restTemplate : "+restTemplate.toString()); 
			        */

			} catch (Exception e) {
				logger.error("Unexpected ValidAns error", e.getMessage());
				e.printStackTrace();
				

			}

			  return ResponseEntity.ok().body(ProductConvertionOutput.getBody());
		
	}
	
	

	@RequestMapping(value="/OpenOrderBook", method = RequestMethod.GET, produces="application/json")
	public ResponseEntity<String> OpenOrderBook(HttpServletRequest request, HttpServletResponse response) {
		
		    HttpSession session = request.getSession();
		    
		    String userId = (String) session.getAttribute("userId");
			String jKey=(String) session.getAttribute("susertoken");
			
			
			//System.out.println("userId:::"+userId);
			
			JSONObject OpenOrderBookInputJson = new JSONObject();
			
			 ResponseEntity<String> OpenOrderBookOutput=null;
			 				

			 OpenOrderBookInputJson.put("uid", userId);
			

			// System.out.println("jKey:open::"+jKey);
			try {
	
					StringBuffer OpenOrderBookkambalaBuff = new StringBuffer(marketwatchProvider.getKambalaOrderBookUrl());
					
					URL OpenOrderBookkambalaUrl = new URL(OpenOrderBookkambalaBuff.toString());
					
					RestTemplate restTemplate = new RestTemplate();			
					HttpHeaders headers = new HttpHeaders();

			        Map<String,Object> map = new HashMap<String,Object>();
			        map.put("jData",OpenOrderBookInputJson.toJSONString());
			        map.put("jKey",jKey);
			        
			  	    String bodyproperties= CommonFunction.urlEncodeUTF8(map);
			  	    
			  	    
			       HttpEntity<String> requestparam = new HttpEntity<>(bodyproperties, headers);
			       
			       /*System.out.println("URL : "+OpenOrderBookkambalaUrl.toString());       
			       System.out.println("requestparam : "+requestparam.toString());*/ 
			       
			     // build the request
			       OpenOrderBookOutput = restTemplate.postForEntity(OpenOrderBookkambalaUrl.toString(), requestparam, String.class);
			        
			         
			      /*  System.out.println("status code : "+ OpenOrderBookOutput.getStatusCode());
			        System.out.println("headers : "+ OpenOrderBookOutput.getHeaders());
			        System.out.println("body : "+ OpenOrderBookOutput.getBody());

			        System.out.println("restTemplate : "+restTemplate.toString()); */
				       				       

			} catch (Exception e) {
				logger.error("Unexpected ValidAns error", e.getMessage());
				e.printStackTrace();

			}

			  return ResponseEntity.ok().body(OpenOrderBookOutput.getBody());
		
	}
	


	@RequestMapping(value="/getSymbolInfo", method = RequestMethod.GET, produces="application/json")
	public ResponseEntity<String> getSymbolInfo(HttpServletRequest request, HttpServletResponse response,@RequestParam String Exchange,@RequestParam String Token) {
		
		    HttpSession session = request.getSession();
		    
		    String userId = (String) session.getAttribute("userId");
			String jKey=(String) session.getAttribute("susertoken");
			
			
			//System.out.println("userId:::"+userId);
			
			JSONObject SymbolInfoInputJson = new JSONObject();
			
			 ResponseEntity<String> SymbolInfoOutput=null;
			 				

			 SymbolInfoInputJson.put("uid", userId);
			 SymbolInfoInputJson.put("exch", Exchange);
			 SymbolInfoInputJson.put("token", Token);
			

			 //System.out.println("jKey:::"+jKey);
			try {
	
					StringBuffer SymbolInfokambalaBuff = new StringBuffer(marketwatchProvider.getKambalaGetSecurityInfoUrl());
					
					URL SymbolInfokambalaUrl = new URL(SymbolInfokambalaBuff.toString());
					
					RestTemplate restTemplate = new RestTemplate();			
					HttpHeaders headers = new HttpHeaders();

			        Map<String,Object> map = new HashMap<String,Object>();
			        map.put("jData",SymbolInfoInputJson.toJSONString());
			        map.put("jKey",jKey);
			        
			  	    String bodyproperties= CommonFunction.urlEncodeUTF8(map);
			  	    
			  	    
			       HttpEntity<String> requestparam = new HttpEntity<>(bodyproperties, headers);
			       
			      /* System.out.println("URL : "+SymbolInfokambalaUrl.toString());       
			       System.out.println("requestparam : "+requestparam.toString());*/ 
			       
			     // build the request
			       SymbolInfoOutput = restTemplate.postForEntity(SymbolInfokambalaUrl.toString(), requestparam, String.class);
			        
			         
			       /* System.out.println("status code : "+ SymbolInfoOutput.getStatusCode());
			        System.out.println("headers : "+ SymbolInfoOutput.getHeaders());
			        System.out.println("body : "+ SymbolInfoOutput.getBody());

			        System.out.println("restTemplate : "+restTemplate.toString());*/ 
				       				       

			} catch (Exception e) {
				logger.error("Unexpected ValidAns error", e.getMessage());
				e.printStackTrace();

			}

			  return ResponseEntity.ok().body(SymbolInfoOutput.getBody());
		
	}

	
	}







