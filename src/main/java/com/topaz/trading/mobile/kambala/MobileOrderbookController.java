package com.topaz.trading.mobile.kambala;

import java.net.URL;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.json.simple.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.topaz.trading.controller.CommonFunction;
import com.topaz.trading.controller.MarketwatchProvider;
import com.topaz.trading.controller.kambala.Logincontroller;
import com.topaz.trading.controller.kambala.OrderbookControllerKambala;
import com.topaz.trading.pojo.Orderbookpojo;

@RestController
@RequestMapping("/mobile")
public class MobileOrderbookController {

	@Autowired
	MarketwatchProvider marketwatchProvider;
	
	@Autowired
	Logincontroller logincontrollerKambala;
	
    private static Logger logger = LoggerFactory.getLogger(OrderbookControllerKambala.class);
	
	private static String jKey="";
	
	@RequestMapping(value="/OrderBook", method = RequestMethod.POST, produces="application/json")
	public ResponseEntity<String> pendingOrder(HttpServletRequest request, HttpServletResponse response) {
		
		    HttpSession session = request.getSession();
		    
			String userId = (String) session.getAttribute("userId");
			
			
			System.out.println("userId:::"+userId);
			
			JSONObject OrderBookInputJson = new JSONObject();
			
			 ResponseEntity<String> orderBookOutput=null;
			 
			 
			 				

			 OrderBookInputJson.put("uid", userId);
			
			jKey = (String) session.getAttribute("Constants.SUSER_TOKEN");

			 System.out.println("jKey:::"+jKey);
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
			       
			       System.out.println("URL : "+OrderBookkambalaUrl.toString());       
			       System.out.println("requestparam : "+requestparam.toString()); 
			       
			     // build the request
			       orderBookOutput = restTemplate.postForEntity(OrderBookkambalaUrl.toString(), requestparam, String.class);
			        
			         
			        System.out.println("status code : "+ orderBookOutput.getStatusCode());
			        System.out.println("headers : "+ orderBookOutput.getHeaders());
			        System.out.println("body : "+ orderBookOutput.getBody());

			        System.out.println("restTemplate : "+restTemplate.toString()); 
				       				       

			} catch (Exception e) {
				logger.error("Unexpected ValidAns error", e.getMessage());
				e.printStackTrace();
				

			}

			  return ResponseEntity.ok().body(orderBookOutput.getBody());
		
	}
	
	
	@RequestMapping(value="/TradeBook", method = RequestMethod.POST)
	public ResponseEntity<String> tradeBookOrder(HttpServletRequest request, HttpServletResponse response) {
		
		
		 HttpSession session = request.getSession();
		 
			String userId = (String) session.getAttribute("userId");
			
			
			JSONObject TradeBookInputJson = new JSONObject();
			
			 ResponseEntity<String> TradeBookOutput=null;


			 TradeBookInputJson.put("uid", userId); 
			 TradeBookInputJson.put("actid", userId);

			
			jKey = (String) session.getAttribute("Constants.SUSER_TOKEN");
			
			 System.out.println("jKey:::"+jKey);

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
			       
			       System.out.println("URL : "+TradeBookkambalaUrl.toString());       
			       System.out.println("requestparam : "+requestparam.toString()); 
			       
			     // build the request
			       TradeBookOutput = restTemplate.postForEntity(TradeBookkambalaUrl.toString(), requestparam, String.class);
			        
			         
			        System.out.println("status code : "+ TradeBookOutput.getStatusCode());
			        System.out.println("headers : "+ TradeBookOutput.getHeaders());
			        System.out.println("body : "+ TradeBookOutput.getBody());

			        System.out.println("restTemplate : "+restTemplate.toString()); 
			        
				   	

			} catch (Exception e) {
				logger.error("Unexpected ValidAns error", e.getMessage());
				e.printStackTrace();
				return new ResponseEntity<String>(HttpStatus.CREATED);

			}

			  return ResponseEntity.ok().body(TradeBookOutput.getBody());
		
	}
	
	@RequestMapping(value="/ModifyOrder", method = RequestMethod.POST)
	public ResponseEntity<String> modifyOrder(HttpServletRequest request, HttpServletResponse response, @RequestBody Orderbookpojo orderbook) {
		
		
		 HttpSession session = request.getSession();
		 
			String userId = (String) session.getAttribute("userId");
			
			JSONObject ModifyOrderInputJson = new JSONObject();
			
			 ResponseEntity<String> ModifyOrderOutput=null;
			 System.out.println("exch::"+orderbook.getExchange()+"tsym:::"+orderbook.getTsym()+"qty:::"+orderbook.getQty()+"prc:::"+orderbook.getPrc()+"prctype:::"+orderbook.getPrctyp()); 

			 ModifyOrderInputJson.put("uid", userId);
			 ModifyOrderInputJson.put("exch", orderbook.getExchange());
			 ModifyOrderInputJson.put("tsym", orderbook.getTsym());
			 ModifyOrderInputJson.put("norenordno", orderbook.getNorenordno());
			 ModifyOrderInputJson.put("qty", orderbook.getQty());
			 ModifyOrderInputJson.put("prc", orderbook.getPrc());
			 ModifyOrderInputJson.put("prctyp", orderbook.getPrctyp());
			 ModifyOrderInputJson.put("ret", orderbook.getRet());
			 ModifyOrderInputJson.put("ordersource", marketwatchProvider.getKambalaSource());

			
			 jKey = (String) session.getAttribute("Constants.SUSER_TOKEN");
			 
			 System.out.println("jKey:::"+jKey);


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
			       
			       System.out.println("URL : "+ModifyOrderkambalaUrl.toString());       
			       System.out.println("requestparam : "+requestparam.toString()); 
			       
			     // build the request
			       ModifyOrderOutput = restTemplate.postForEntity(ModifyOrderkambalaUrl.toString(), requestparam, String.class);
			        
			         
			        System.out.println("status code : "+ ModifyOrderOutput.getStatusCode());
			        System.out.println("headers : "+ ModifyOrderOutput.getHeaders());
			        System.out.println("body : "+ ModifyOrderOutput.getBody());

			        System.out.println("restTemplate : "+restTemplate.toString()); 
			        

			} catch (Exception e) {
				logger.error("Unexpected ValidAns error", e.getMessage());
				e.printStackTrace();
				
				return new ResponseEntity<String>(HttpStatus.CREATED);

			}

			  return ResponseEntity.ok().body(ModifyOrderOutput.getBody());
		
	}
	
	
	@RequestMapping(value="/CancelOrder", method = RequestMethod.POST)
	public ResponseEntity<String> cancelOrder(HttpServletRequest request, HttpServletResponse response, @RequestBody Orderbookpojo orderbook) {
	
		
		 HttpSession session = request.getSession();
		 
			String userId = (String) session.getAttribute("userId");
			
			JSONObject CancelOrderInputJson = new JSONObject();

			
			 ResponseEntity<String> CancelOrderOutput=null;

			 CancelOrderInputJson.put("uid", userId);
			 CancelOrderInputJson.put("norenordno", orderbook.getNorenordno());

			
			 jKey = (String) session.getAttribute("Constants.SUSER_TOKEN");
			 
			 System.out.println("jKey:::"+jKey);

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
			       
			       System.out.println("URL : "+CancelOrderkambalaUrl.toString());       
			       System.out.println("requestparam : "+requestparam.toString()); 
			       
			     // build the request
			       CancelOrderOutput = restTemplate.postForEntity(CancelOrderkambalaUrl.toString(), requestparam, String.class);
			        
			         
			        System.out.println("status code : "+ CancelOrderOutput.getStatusCode());
			        System.out.println("headers : "+ CancelOrderOutput.getHeaders());
			        System.out.println("body : "+ CancelOrderOutput.getBody());

			        System.out.println("restTemplate : "+restTemplate.toString()); 
			        
			} catch (Exception e) {
				logger.error("Unexpected ValidAns error", e.getMessage());
				e.printStackTrace();
				
				return new ResponseEntity<String>(HttpStatus.CREATED);

			}

			  return ResponseEntity.ok().body(CancelOrderOutput.getBody());
		
	}
	

	@RequestMapping(value="/SingleOrdHist", method = RequestMethod.POST)
	public ResponseEntity<String> orderHistory(HttpServletRequest request, HttpServletResponse response, @RequestBody Orderbookpojo orderbook) {
		

		 HttpSession session = request.getSession();
		 
			String userId = (String) session.getAttribute("userId");
			
			JSONObject OrderHistoryInputJson = new JSONObject();
			
			 ResponseEntity<String> OrderHistoryOutput=null;

			 OrderHistoryInputJson.put("uid", userId);
			 OrderHistoryInputJson.put("norenordno", orderbook.getNorenordno());

			
			 jKey = (String) session.getAttribute("Constants.SUSER_TOKEN");
			 
			 System.out.println("jKey:::"+jKey);


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
			       
			       System.out.println("URL : "+OrderHistorykambalaUrl.toString());       
			       System.out.println("requestparam : "+requestparam.toString()); 
			       
			     // build the request
			       OrderHistoryOutput = restTemplate.postForEntity(OrderHistorykambalaUrl.toString(), requestparam, String.class);
			        
			         
			        System.out.println("status code : "+ OrderHistoryOutput.getStatusCode());
			        System.out.println("headers : "+ OrderHistoryOutput.getHeaders());
			        System.out.println("body : "+ OrderHistoryOutput.getBody());

			        System.out.println("restTemplate : "+restTemplate.toString()); 
			        

			} catch (Exception e) {
				logger.error("Unexpected ValidAns error", e.getMessage());
				e.printStackTrace();
				return new ResponseEntity<String>(HttpStatus.CREATED);

			}

			  return ResponseEntity.ok().body(OrderHistoryOutput.getBody());
		
	}
	
	@RequestMapping(value="/ProductConversionForMobile", method = RequestMethod.POST)
	public ResponseEntity<String> ProductConvertionKambala(HttpServletRequest request, HttpServletResponse response,@RequestBody Orderbookpojo orderbook) {
		
		
		 HttpSession session = request.getSession();
		 
			String userId = (String) session.getAttribute("userId");
			
			JSONObject ProductConvertionInputJson = new JSONObject();
			
			 ResponseEntity<String> ProductConvertionOutput=null;
			 
			 System.out.println("exch::"+orderbook.getExchange()+"tsym:::"+orderbook.getTsym()+"qty:::"+orderbook.getQty()+"prd:::"+orderbook.getPrd()+"prevprd:::"+orderbook.getPrevprd());

				ProductConvertionInputJson.put("uid", userId);
				ProductConvertionInputJson.put("actid", userId);
				ProductConvertionInputJson.put("exch", orderbook.getExchange());
				ProductConvertionInputJson.put("tsym", orderbook.getTsym());
				ProductConvertionInputJson.put("qty", orderbook.getQty());
				ProductConvertionInputJson.put("prd", orderbook.getPrd());
				ProductConvertionInputJson.put("prevprd", orderbook.getPrevprd());
				ProductConvertionInputJson.put("trantype", orderbook.getTrantype());
				ProductConvertionInputJson.put("postype", orderbook.getPostype());
				ProductConvertionInputJson.put("ordersource", marketwatchProvider.getKambalaSource());

			
			jKey = (String) session.getAttribute("Constants.SUSER_TOKEN");
			
			 System.out.println("jKey:::"+jKey);


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
			        
			         
			        System.out.println("status code : "+ ProductConvertionOutput.getStatusCode());
			        System.out.println("headers : "+ ProductConvertionOutput.getHeaders());
			        System.out.println("body : "+ ProductConvertionOutput.getBody());

			        System.out.println("restTemplate : "+restTemplate.toString()); 
			        

			} catch (Exception e) {
				logger.error("Unexpected ValidAns error", e.getMessage());
				e.printStackTrace();
				
				return new ResponseEntity<String>(HttpStatus.CREATED);

			}

			  return ResponseEntity.ok().body(ProductConvertionOutput.getBody());
		
	}
	
	

	@RequestMapping(value="/OpenOrderBook", method = RequestMethod.GET, produces="application/json")
	public ResponseEntity<String> OpenOrderBook(HttpServletRequest request, HttpServletResponse response) {
		
		    HttpSession session = request.getSession();
		    
			String userId = (String) session.getAttribute("userId");
			
			
			System.out.println("userId:::"+userId);
			
			JSONObject OpenOrderBookInputJson = new JSONObject();
			
			 ResponseEntity<String> OpenOrderBookOutput=null;
			 				

			 OpenOrderBookInputJson.put("uid", userId);
			
			jKey = (String) session.getAttribute("Constants.SUSER_TOKEN");

			 System.out.println("jKey:::"+jKey);
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
			       
			       System.out.println("URL : "+OpenOrderBookkambalaUrl.toString());       
			       System.out.println("requestparam : "+requestparam.toString()); 
			       
			     // build the request
			       OpenOrderBookOutput = restTemplate.postForEntity(OpenOrderBookkambalaUrl.toString(), requestparam, String.class);
			        
			         
			        System.out.println("status code : "+ OpenOrderBookOutput.getStatusCode());
			        System.out.println("headers : "+ OpenOrderBookOutput.getHeaders());
			        System.out.println("body : "+ OpenOrderBookOutput.getBody());

			        System.out.println("restTemplate : "+restTemplate.toString()); 
				       				       

			} catch (Exception e) {
				logger.error("Unexpected ValidAns error", e.getMessage());
				e.printStackTrace();

			}

			  return ResponseEntity.ok().body(OpenOrderBookOutput.getBody());
		
	}
	
}
