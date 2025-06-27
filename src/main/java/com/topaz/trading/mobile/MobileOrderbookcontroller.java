package com.topaz.trading.mobile;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.JSONValue;
import org.json.simple.parser.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.google.gson.Gson;
import com.topaz.trading.controller.CommonFunction;
import com.topaz.trading.controller.MarketwatchProvider;
import com.topaz.trading.controller.Orderbookcontroller;
import com.topaz.trading.model.Alerts;
import com.topaz.trading.model.BracketOrder;
import com.topaz.trading.model.MobileOrderbook;
import com.topaz.trading.model.OrderbookResponse;
import com.topaz.trading.model.OrderhistoryResponse;
import com.topaz.trading.model.PlaceOrder;
import com.topaz.trading.pojo.UserInfo;
import com.topaz.trading.repository.ScriptImp2;

@RestController
public class MobileOrderbookcontroller {

	@Autowired
	MarketwatchProvider marketwatchProvider;
	
	@Autowired
	ScriptImp2 scriptImp;
	
	@Autowired
	MobileLogincontrollerOmensys  mobileLogincontroller;
	
	private static Logger logger = LoggerFactory.getLogger(MobileOrderbookcontroller.class);
	
	
	
	@RequestMapping(value="/OrderBookForMobile", method = RequestMethod.POST, produces="application/json")
	public ResponseEntity<String> pendingOrder(@RequestBody MobileOrderbook Orderbook, HttpServletRequest request, HttpServletResponse response) {
		

		 
		HttpSession session = null;
		session = request.getSession();
		
		
		UserInfo clientId=mobileLogincontroller.Loginmap.get(Orderbook.getUid());
	
		String PublicKey4=null,TomcatCount=null;
		
		for ( Map.Entry<String, UserInfo> entry : mobileLogincontroller.Loginmap.entrySet()) {
			
			String key = entry.getKey();
		    UserInfo tab = entry.getValue();
		    
		    PublicKey4=tab.getPublicKey4();
		    TomcatCount=tab.getTomcatCount();
		}
		
		System.out.println(" Orderbook PublicKey4 : " +PublicKey4+"  TomcatCount : "+TomcatCount);
			
		
		String outputValue = "";
		
			JSONObject OrderBookInputJson = new JSONObject();

			OrderBookInputJson.put("uid", Orderbook.getUid());
			OrderBookInputJson.put("s_prdt_ali", Orderbook.getS_prdt_ali()); 

			String OrderBookInputJsonInputJdata = OrderBookInputJson.toJSONString();

			 String output="";
			 String userVal="";
			 StringBuffer sb = new StringBuffer();

			try {
				
				String jKey =  CommonFunction.hashData(PublicKey4);
				
				StringBuffer OrderbookAns = new StringBuffer(marketwatchProvider.getOrderBookurl());
				OrderbookAns.append("jsessionid=" + "." + TomcatCount + "&jData=" + OrderBookInputJsonInputJdata + "&jKey=" + jKey + "");

				URL Orderbookurl = new URL(OrderbookAns.toString());
				
				System.out.println("Orderbookurl:::"+Orderbookurl);

				HttpURLConnection Orderbookconn = (HttpURLConnection) Orderbookurl.openConnection();
				Orderbookconn.setRequestMethod("POST");
				Orderbookconn.setRequestProperty("Accept", "application/json");

				if (Orderbookconn.getResponseCode() != 200) {
					throw new RuntimeException("Failed : HTTP error code : " + Orderbookconn.getResponseCode());
				}

				BufferedReader br3 = new BufferedReader(new InputStreamReader((Orderbookconn.getInputStream())));
				
				
				while ((output = br3.readLine()) != null) {
					
					sb.append(output);

				}
				
				userVal=sb.toString();

				logger.info("Mobile-OrderBook Response Value : " + userVal);
				
				Orderbookconn.disconnect();

			} catch (Exception e) {
				logger.error("Unexpected ValidAns error", e.getMessage());
				e.printStackTrace();

			}

			  return ResponseEntity.ok().body(userVal);
		
	}
	
	
	@RequestMapping(value="/TradeBookForMobile", method = RequestMethod.POST)
	public ResponseEntity<String> tradeBookOrder(@RequestBody MobileOrderbook Orderbook,HttpServletRequest request, HttpServletResponse response) {
		
		
		 
		HttpSession session = null;
		session = request.getSession();
		
		
		UserInfo clientId=mobileLogincontroller.Loginmap.get(Orderbook.getUid());
	
		String PublicKey4=null,TomcatCount=null;
		
		for ( Map.Entry<String, UserInfo> entry : mobileLogincontroller.Loginmap.entrySet()) {
			
			String key = entry.getKey();
		    UserInfo tab = entry.getValue();
		    // do something with key and/or tab
		    
		  //  System.out.println("Placeorder : "+key + ": " + tab.getTomcatCount());
		    
		    PublicKey4=tab.getPublicKey4();
		    TomcatCount=tab.getTomcatCount();
		}
		
		System.out.println(" Tradebook PublicKey4 : " +PublicKey4+"  TomcatCount : "+TomcatCount);	
		
		String outputValue = "";

			JSONObject TradeBookInputJson = new JSONObject();


			TradeBookInputJson.put("uid", Orderbook.getUid());
			TradeBookInputJson.put("s_prdt_ali", Orderbook.getS_prdt_ali()); 

			String TradeBookInputJsonInputJdata = TradeBookInputJson.toJSONString();

			 String output="";
			 
			 String userVal="";
			 StringBuffer sb = new StringBuffer();

			try {
				
				String jKey =  CommonFunction.hashData(PublicKey4);
				StringBuffer TradebookAns = new StringBuffer(marketwatchProvider.getTradeBookurl());
				TradebookAns.append("jsessionid=" + "." + TomcatCount + "&jData=" + TradeBookInputJsonInputJdata + "&jKey=" + jKey + "");
				
				URL Tradebookurl = new URL(TradebookAns.toString());

				HttpURLConnection Tradebookconn = (HttpURLConnection) Tradebookurl.openConnection();
				Tradebookconn.setRequestMethod("POST");
				Tradebookconn.setRequestProperty("Accept", "application/json");

				if (Tradebookconn.getResponseCode() != 200) {
					throw new RuntimeException("Failed : HTTP error code : " + Tradebookconn.getResponseCode());
				}

				BufferedReader br3 = new BufferedReader(new InputStreamReader((Tradebookconn.getInputStream())));
				
				
				while ((output = br3.readLine()) != null) {
					
					sb.append(output);

				}
				
				userVal=sb.toString();

				logger.info("Mobile-tradeBookJson Response Value : " + userVal);
				
				Tradebookconn.disconnect();
				

			} catch (Exception e) {
				logger.error("Unexpected ValidAns error", e.getMessage());

			}

			  return ResponseEntity.ok().body(userVal);
		
	}
	
	@RequestMapping(value="/ModifyOrderForMobile", method = RequestMethod.POST)
	public ResponseEntity<JSONObject> modifyOrder(HttpServletRequest request, HttpServletResponse response,@RequestBody MobileOrderbook Orderbook) {
		
		 
		HttpSession session = null;
		session = request.getSession();
		
		
		UserInfo clientId=mobileLogincontroller.Loginmap.get(Orderbook.getUid());
	
		String PublicKey4=null,TomcatCount=null;
		
		for ( Map.Entry<String, UserInfo> entry : mobileLogincontroller.Loginmap.entrySet()) {
			
			String key = entry.getKey();
		    UserInfo tab = entry.getValue();
		    
		    PublicKey4=tab.getPublicKey4();
		    TomcatCount=tab.getTomcatCount();
		}
		
		System.out.println(" Modifyorder PublicKey4 : " +PublicKey4+"  TomcatCount : "+TomcatCount);
		
		String outputValue = "";

			JSONObject ModifyOrderInputJson = new JSONObject();
			


			ModifyOrderInputJson.put("uid", Orderbook.getUid());
			ModifyOrderInputJson.put("Actid", Orderbook.getActid());
			ModifyOrderInputJson.put("Exchangeseg", Orderbook.getExchangeseg());
			ModifyOrderInputJson.put("Tsym", Orderbook.getTsym());
			ModifyOrderInputJson.put("Nstordno", Orderbook.getNstordno());
			ModifyOrderInputJson.put("Transtype", Orderbook.getTranstype());
			ModifyOrderInputJson.put("Prctype", Orderbook.getPrctype());
			ModifyOrderInputJson.put("Price", Orderbook.getPrice());
			ModifyOrderInputJson.put("Qty", Orderbook.getQty());
			ModifyOrderInputJson.put("Dscqty", Orderbook.getDscqty());
			ModifyOrderInputJson.put("Trgprc", Orderbook.getTrgprc());
			ModifyOrderInputJson.put("Validity", Orderbook.getValidity());
			ModifyOrderInputJson.put("Filledqty", Orderbook.getFilledqty());
			ModifyOrderInputJson.put("Pcode", Orderbook.getPcode());
			ModifyOrderInputJson.put("Mktpro", "NA");
			ModifyOrderInputJson.put("DateDays", "NA");
			ModifyOrderInputJson.put("s_prdt_ali", Orderbook.getS_prdt_ali());
			ModifyOrderInputJson.put("criteriaAttribute", "");
			ModifyOrderInputJson.put("orderSource", "");


			String ModifyOrderInputJsonInputJdata = ModifyOrderInputJson.toJSONString();
			 String outputval="";
			 JSONObject modifyOrderJson = new JSONObject();

			try {
				String jKey =  CommonFunction.hashData(PublicKey4);
				StringBuffer modifyOrderbookAns = new StringBuffer(marketwatchProvider.getModifyOrderurl());
				modifyOrderbookAns.append("jsessionid=" + "." + TomcatCount + "&jData=" + ModifyOrderInputJsonInputJdata + "&jKey=" + jKey + "");

				URL ModifyOrderurl = new URL(modifyOrderbookAns.toString());

				HttpURLConnection modifyOrderbookconn = (HttpURLConnection) ModifyOrderurl.openConnection();
				modifyOrderbookconn.setRequestMethod("POST");
				modifyOrderbookconn.setRequestProperty("Accept", "application/json");

				if (modifyOrderbookconn.getResponseCode() != 200) {
					throw new RuntimeException("Failed : HTTP error code : " + modifyOrderbookconn.getResponseCode());
				}

				BufferedReader br3 = new BufferedReader(new InputStreamReader((modifyOrderbookconn.getInputStream())));
				
				String output="";

				while ((output = br3.readLine()) != null) {
					
					Object obj = JSONValue.parse(output);
					modifyOrderJson = (JSONObject) obj;

				}
				outputValue = modifyOrderJson.toJSONString();

				logger.info("Mobile-ModifyOrder Response Value : " + outputValue);
                
				modifyOrderbookconn.disconnect();

			} catch (Exception e) {
				
				e.printStackTrace();
				logger.error("Unexpected ValidAns error", e.getMessage());

			}
		 
			return ResponseEntity.ok().body(modifyOrderJson);
		
	}
	
	
	@RequestMapping(value="/CancelOrderForMobile", method = RequestMethod.POST)
	public ResponseEntity<String> cancelOrder(HttpServletRequest request, HttpServletResponse response,@RequestBody MobileOrderbook Orderbook) {
	
		 
		HttpSession session = null;
		session = request.getSession();
		
		
		UserInfo clientId=mobileLogincontroller.Loginmap.get(Orderbook.getUid());
	
		String PublicKey4=null,TomcatCount=null;
		
		for ( Map.Entry<String, UserInfo> entry : mobileLogincontroller.Loginmap.entrySet()) {
			
			String key = entry.getKey();
		    UserInfo tab = entry.getValue();
		    
		    PublicKey4=tab.getPublicKey4();
		    TomcatCount=tab.getTomcatCount();
		}
		
		System.out.println(" CancelOrder PublicKey4 : " +PublicKey4+"  TomcatCount : "+TomcatCount);
		
		String outputValue = "";
			

			JSONObject OrderBookInputJson = new JSONObject();

			OrderBookInputJson.put("uid", Orderbook.getUid());
			OrderBookInputJson.put("NestOrd", Orderbook.getNstordno());
			OrderBookInputJson.put("sTradeSymbol", "");
			OrderBookInputJson.put("sExch", "");
			OrderBookInputJson.put("s_prdt_ali", Orderbook.getS_prdt_ali());
			OrderBookInputJson.put("criteriaAttribute", "");
			OrderBookInputJson.put("orderSource", "");

			String OrderBookInputJsonInputJdata = OrderBookInputJson.toJSONString();

			 String output="";
			 
			 String userVal="";
			 StringBuffer sb = new StringBuffer();

			try {
				String jKey =  CommonFunction.hashData(PublicKey4);
				StringBuffer OrderbookAns = new StringBuffer(marketwatchProvider.getCancelOrderurl());
				OrderbookAns.append("jsessionid=" + "." + TomcatCount + "&jData=" + OrderBookInputJsonInputJdata + "&jKey=" + jKey + "");

				URL CancelOrderurl = new URL(OrderbookAns.toString());
				

				HttpURLConnection Orderbookconn = (HttpURLConnection) CancelOrderurl.openConnection();
				Orderbookconn.setRequestMethod("POST");
				Orderbookconn.setRequestProperty("Accept", "application/json");
				if (Orderbookconn.getResponseCode() != 200) {
					throw new RuntimeException("Failed : HTTP error code : " + Orderbookconn.getResponseCode());
				}

				BufferedReader br3 = new BufferedReader(new InputStreamReader((Orderbookconn.getInputStream())));


				while ((output = br3.readLine()) != null) {

					sb.append(output);

				}
				
				userVal=sb.toString();

				logger.info("Mobile-CancelOrderJson Response Value : " + userVal);
				
				Orderbookconn.disconnect();

			} catch (Exception e) {
				logger.error("Unexpected ValidAns error", e.getMessage());

			}
		 
			 return ResponseEntity.ok().body(userVal);
		
	}
	
	@RequestMapping(value="/OrderHistoryForMobile", method = RequestMethod.POST)
	public ResponseEntity<String> orderHistory(HttpServletRequest request, HttpServletResponse response,@RequestBody MobileOrderbook Orderbook) {
		

		 
		HttpSession session = null;
		session = request.getSession();
		
		
		UserInfo clientId=mobileLogincontroller.Loginmap.get(Orderbook.getUid());
	
		String PublicKey4=null,TomcatCount=null;
		
		for ( Map.Entry<String, UserInfo> entry : mobileLogincontroller.Loginmap.entrySet()) {
			
			String key = entry.getKey();
		    UserInfo tab = entry.getValue();
		    
		    PublicKey4=tab.getPublicKey4();
		    TomcatCount=tab.getTomcatCount();
		}
		
		System.out.println(" Orderhistory PublicKey4 : " +PublicKey4+"  TomcatCount : "+TomcatCount);
				
		String outputValue = "";
		String output="";

			JSONObject OrderBookInputJson = new JSONObject();

			OrderBookInputJson.put("uid", Orderbook.getUid());
			OrderBookInputJson.put("s_prdt_ali", Orderbook.getS_prdt_ali());
			OrderBookInputJson.put("NOrdNo", Orderbook.getNstordno());

			String OrderBookInputJsonInputJdata = OrderBookInputJson.toJSONString();
			 
			 String userVal="";
			 StringBuffer sb = new StringBuffer();

			try {
				
				String jKey =  CommonFunction.hashData(PublicKey4);
				StringBuffer OrderbookAns = new StringBuffer(marketwatchProvider.getOrderHistoryurl());
				OrderbookAns.append("jsessionid=" + "." + TomcatCount + "&jData=" + OrderBookInputJsonInputJdata + "&jKey=" + jKey + "");

				URL OrderHistoryurl = new URL(OrderbookAns.toString());
				HttpURLConnection Orderbookconn = (HttpURLConnection) OrderHistoryurl.openConnection();
				Orderbookconn.setRequestMethod("POST");
				Orderbookconn.setRequestProperty("Accept", "application/json");
				if (Orderbookconn.getResponseCode() != 200) {
					throw new RuntimeException("Failed : HTTP error code : " + Orderbookconn.getResponseCode());
				}

				BufferedReader br3 = new BufferedReader(new InputStreamReader((Orderbookconn.getInputStream())));
				
				
				while ((output = br3.readLine()) != null) {
					sb.append(output);

				}
				
				userVal=sb.toString();

				logger.info("Mobile-orderHistoryJson Response Value : " + userVal);
				
				
				Orderbookconn.disconnect();

			} catch (Exception e) {
				logger.error("Unexpected ValidAns error", e.getMessage());

			}

			  return ResponseEntity.ok().body(userVal);
		
	}
	
	@RequestMapping(value="/PositionConvertionForMobile", method = RequestMethod.POST)
	public ResponseEntity<JSONObject> positionConvertion(HttpServletRequest request, HttpServletResponse response,@RequestBody MobileOrderbook Orderbook) {
		
		
		HttpSession session = null;
		session = request.getSession();
		
		
		UserInfo clientId=mobileLogincontroller.Loginmap.get(Orderbook.getUid());
	
		String PublicKey4=null,TomcatCount=null;
		
		for ( Map.Entry<String, UserInfo> entry : mobileLogincontroller.Loginmap.entrySet()) {
			
			String key = entry.getKey();
		    UserInfo tab = entry.getValue();

		    
		    PublicKey4=tab.getPublicKey4();
		    TomcatCount=tab.getTomcatCount();
		}
		
		System.out.println(" Position Conversion PublicKey4 : " +PublicKey4+"  TomcatCount : "+TomcatCount);

			JSONObject PositionConvertionInputJson = new JSONObject();


			PositionConvertionInputJson.put("uid", Orderbook.getUid());
			PositionConvertionInputJson.put("s_prdt_ali", "CNC:CNC||MIS:MIS||NRML:NRML");
			PositionConvertionInputJson.put("Nstordno", Orderbook.getPositionnstord());
			PositionConvertionInputJson.put("FillID", Orderbook.getPositionfillid());
			PositionConvertionInputJson.put("Pcode", Orderbook.getPositionpcode());
			PositionConvertionInputJson.put("Pchange", Orderbook.getPositionpchange());


			String PositionConvertionInputJsonInputJdata = PositionConvertionInputJson.toJSONString();
			JSONObject OrderBookValidationJson = new JSONObject();
			List<String> OrderBookValidationList = null;
			 String outputval="";
			 String json="";
			 JSONObject PositionConvertionJson=null;
			 String outputValue="";

			try {
				String jKey =  CommonFunction.hashData(PublicKey4);
				StringBuffer positionConvertionAns = new StringBuffer(marketwatchProvider.getPositionConvertionurl());
				positionConvertionAns.append("jsessionid=" + "." + TomcatCount + "&jData=" + PositionConvertionInputJsonInputJdata + "&jKey=" + jKey + "");

				URL PositionConvertionurl = new URL(positionConvertionAns.toString());
				
				logger.info("PositionConvertionconn Request URL : "+PositionConvertionurl.toString());
				
				HttpURLConnection positionConvertionconn = (HttpURLConnection) PositionConvertionurl.openConnection();
				positionConvertionconn.setRequestMethod("POST");
				positionConvertionconn.setRequestProperty("Accept", "application/json");
				
				
				logger.info("PositionConvertionconn Response Code : "+positionConvertionconn.getResponseCode());
				
				if (positionConvertionconn.getResponseCode() != 200) {
					throw new RuntimeException("Failed : HTTP error code : " + positionConvertionconn.getResponseCode());
				}

				BufferedReader br3 = new BufferedReader(new InputStreamReader((positionConvertionconn.getInputStream())));
				
				
				String output;
				
				while ((output = br3.readLine()) != null) {
					
					Object obj = JSONValue.parse(output);
					PositionConvertionJson = (JSONObject) obj;
					
				}
				
				
				outputValue=PositionConvertionJson.toJSONString();
				
                
				positionConvertionconn.disconnect();

			} catch (Exception e) {
				
				e.printStackTrace();
				logger.error("Unexpected ValidAns error", e.getMessage());

			}
		 
			return ResponseEntity.ok().body(PositionConvertionJson);
		
	}
	
	
	@RequestMapping(value="/AlertSetForMobile", method = RequestMethod.POST)
	public ResponseEntity<JSONObject> addAlertSet(HttpServletRequest request, HttpServletResponse response,@RequestBody Alerts client) {
		
		 
		 HttpSession session = null;
			session = request.getSession();
			 JSONObject marketwatchMessage = new JSONObject();
	try {		
			String userId = (String) session.getAttribute("userId");
			
			Alerts script =new Alerts();
			
		//	script.setAlertId(1);
		 script.setAlertcondition(client.getAlertcondition());
		 script.setPrice(client.getPrice());
		 script.setFrequency(client.getFrequency());
		 
		 if(client.getFrequency().equalsIgnoreCase("Once")) {
			 DateTimeFormatter dtf1 = DateTimeFormatter.ofPattern("dd/MM/yyyy");
			   LocalDateTime now1 = LocalDateTime.now();

			   
			   String expiryd=dtf1.format(now1);
			   System.out.println("expiryd::::"+expiryd);
			  script.setExpirydate(expiryd);
			  
			  DateTimeFormatter dtf2 = DateTimeFormatter.ofPattern("HH:mm");
			   LocalDateTime now2 = LocalDateTime.now();
			   String expiryt=dtf2.format(now2);
			   System.out.println("expiryt::::"+expiryt);
			  script.setTimer(expiryt);
		  script.setNotificationintervalmin("");
		 
		 }else {
			 script.setExpirydate(client.getExpirydate());
			 script.setTimer(client.getTimer());
			 script.setNotificationintervalmin(client.getNotificationintervalmin());
		 }
		 
		 script.setScriptname(client.getScriptname());
		 script.setComments("");
		 script.setStatus("1");
		 script.setUserId(userId);
		 script.setExchange(client.getExchange());
		 script.setToken(client.getToken());
		 
		 
		 List<Alerts> list= scriptImp.AlertSave(script);
		 
		

			String message = "";
			if (list.size() > 0) {
				message = "Alert Created Succesfully ";
				marketwatchMessage.put("message", message);
				marketwatchMessage.put("stat", "Ok");

			} else {
				message = "Alert not Created";
				marketwatchMessage.put("message", message);
				marketwatchMessage.put("stat", "Not Ok");
			}
	} catch (Exception e) {

		  logger.error("Exception while parsing Alert Created  " + e.getMessage());
		  String message = "we could not connect our server";				
		    marketwatchMessage.put("message", message);
		    marketwatchMessage.put("stat", "Not_Ok");
			return new ResponseEntity<>(marketwatchMessage, HttpStatus.INTERNAL_SERVER_ERROR);
		}	
		return ResponseEntity.ok().body(marketwatchMessage);
		
		
		
	}
	
	@RequestMapping(value="/getAlertForMobile", method = RequestMethod.POST)
	public ResponseEntity<JSONObject> getAlert(HttpServletRequest request, HttpServletResponse response) {
		
		 
		 HttpSession session = null;
		 JSONObject alertMessage = new JSONObject();
		 
		 try {
			session = request.getSession();
		 List<Alerts> list= scriptImp.getAlertlistAll();
		 
		 String message = "";
			if (list.size() > 0) {
				message = "Alert Fetched Succesfully ";
				alertMessage.put("message", message);
				alertMessage.put("alert", list);
				alertMessage.put("stat", "Ok");

			} else {
				message = "Alert not Fetched";
				alertMessage.put("message", message);
				alertMessage.put("stat", "Not_Ok");
			}
		 
		 } catch (Exception e) {

			  logger.error("Exception while parsing Alert Fetched  " + e.getMessage());
			  String message = "we could not connect our server";			
			  alertMessage.put("message", message);
			  alertMessage.put("stat", "Not_Ok");
				return new ResponseEntity<>(alertMessage, HttpStatus.INTERNAL_SERVER_ERROR);
			}
		 		
		 return ResponseEntity.ok().body(alertMessage);
		
		
		
	}
	@RequestMapping(value="/updateAlertForMobile", method = RequestMethod.POST)
	public ResponseEntity<JSONObject> updateAlert(HttpServletRequest request, HttpServletResponse response,@RequestBody Alerts client) {
		
		 
		 HttpSession session = null;
			session = request.getSession();
			
			 JSONObject alertMessage = new JSONObject();
			
	try {		
			String userId = (String) session.getAttribute("userId");
			
			Alerts script =new Alerts();
			
			script.setAlertcondition(client.getAlertcondition());
			 script.setPrice(client.getPrice());
			 script.setFrequency(client.getFrequency());
			 
			 if(client.getFrequency().equalsIgnoreCase("Once")) {
				  script.setExpirydate("");
				  script.setTimer("");
				  script.setNotificationintervalmin("");
				 
			}else {
					 script.setExpirydate(client.getExpirydate());
					 script.setTimer(client.getTimer());
					 script.setNotificationintervalmin(client.getNotificationintervalmin());
			}
			 
			 script.setScriptname(client.getScriptname());
			 script.setComments("");
			 script.setStatus("1");
			 script.setUserId(client.getUserId());
			String id=String.valueOf(client.getId());
		 
		 List<Alerts> list= scriptImp.getAlertupdate(id,script);
		 

			String message = "";
			if (list.size() > 0) {
				message = "Alert Updated Succesfully ";
				alertMessage.put("message", message);
				alertMessage.put("stat", "Ok");

			} else {
				message = "Alert not Updated";
				alertMessage.put("message", message);
				alertMessage.put("stat", "Not Ok");
			}
	 } catch (Exception e) {

		  logger.error("Exception while parsing Alert Updated  " + e.getMessage());
		  String message = "we could not connect our server";				
		  alertMessage.put("message", message);
		  alertMessage.put("stat", "Not_Ok");
			return new ResponseEntity<>(alertMessage, HttpStatus.INTERNAL_SERVER_ERROR);
		}
		 return ResponseEntity.ok().body(alertMessage);
		
		
		
	}
	
	@RequestMapping(value="/getAlertPauseForMobile", method = RequestMethod.POST)
	public ResponseEntity<JSONObject> getAlertPause(HttpServletRequest request, HttpServletResponse response,@RequestBody Alerts client) {
		
		 
		 HttpSession session = null;
			session = request.getSession();
			 JSONObject alertMessage = new JSONObject();
try {
			String Id=String.valueOf(client.getId());
		 String status=client.getStatus();
		 List<Alerts> list= scriptImp.updatePause(Id,status);

			String message = "";
			if (list.size() > 0) {
				message = "Alert Updated Succesfully ";
				alertMessage.put("message", message);
				alertMessage.put("stat", "Ok");

			} else {
				message = "Alert not Updated";
				alertMessage.put("message", message);
				alertMessage.put("stat", "Not Ok");
			}
			
    } catch (Exception e) {

	  logger.error("Exception while parsing Alert Updated  " + e.getMessage());
	  String message = "we could not connect our server";			
	  alertMessage.put("message", message);
	  alertMessage.put("stat", "Not_Ok");
		return new ResponseEntity<>(alertMessage, HttpStatus.INTERNAL_SERVER_ERROR);
	}
		
		 return ResponseEntity.ok().body(alertMessage);
		
		
		
	}
	
	@RequestMapping(value="/getAlertDeleteForMobile", method = RequestMethod.POST)
	public ResponseEntity<JSONObject> getAlertDelete(HttpServletRequest request, HttpServletResponse response,@RequestBody Alerts client) {
		
		 
		 HttpSession session = null;
			session = request.getSession();
			JSONObject alertMessage = new JSONObject();
	try {		
		 int val= scriptImp.getDeleteForMobile(client.getAlertdeleteid());
		 

			String message = "";
			if (val > 0) {
				message = "Alert Deleted Succesfully ";
				alertMessage.put("message", message);
				alertMessage.put("stat", "Ok");

			} else {
				message = "Alert not Deleted";
				alertMessage.put("message", message);
				alertMessage.put("stat", "Not Ok");
			}
			
	 } catch (Exception e) {

		  logger.error("Exception while parsing Alert Deleted  " + e.getMessage());
		  String message = "we could not connect our server";				
		  alertMessage.put("message", message);
		  alertMessage.put("stat", "Not_Ok");
			return new ResponseEntity<>(alertMessage, HttpStatus.INTERNAL_SERVER_ERROR);
		}	
		
			return ResponseEntity.ok().body(alertMessage);
		
	}
	
	@RequestMapping(value="/getTriggerAlertForMobile", method = RequestMethod.POST)
	public ResponseEntity<JSONObject> getTriggerAlert(HttpServletRequest request, HttpServletResponse response,@RequestBody Alerts client) {
		
		 
		 HttpSession session = null;
			session = request.getSession();
			 JSONObject alertMessage = new JSONObject();
	try {		
			Alerts script =new Alerts();
			
			 script.setPrice(client.getPrice());
			 script.setExpirydate(client.getExpirydate());
			 script.setTimer(client.getTimer());

		 
		 List<Alerts> list= scriptImp.getTrigger(script);
		 

			String message = "";
			if (list.size() > 0) {
				message = "TriggerAlert Created Succesfully ";
				alertMessage.put("message", message);
				alertMessage.put("stat", "Ok");

			} else {
				message = "TriggerAlert not Created";
				alertMessage.put("message", message);
				alertMessage.put("stat", "Not Ok");
			}
	} catch (Exception e) {

		  logger.error("Exception while parsing TriggerAlert  " + e.getMessage());
		  String message = "we could not connect our server";			
		  alertMessage.put("message", message);
		  alertMessage.put("stat", "Not_Ok");
			return new ResponseEntity<>(alertMessage, HttpStatus.INTERNAL_SERVER_ERROR);
		}		
		
		 return ResponseEntity.ok().body(alertMessage);
		
		
		
	}
	
	

	 // ============ Rajesh START ================

	// ================= Buy/Sell Order START ========================

	// Implementation of API 12.01 PlaceOrder
	@RequestMapping(value = "/PlaceOrderByMobile", method = RequestMethod.POST)
	public ResponseEntity<JSONObject> PlaceOrderPageByMobile(HttpServletRequest request, HttpServletResponse response,@RequestBody PlaceOrder placeorder) {
	
		
			String PublicKey4=null,TomcatCount=null;
			
			for ( Map.Entry<String, UserInfo> entry : mobileLogincontroller.Loginmap.entrySet()) {
				
				String key = entry.getKey();
			    UserInfo tab = entry.getValue();
			    // do something with key and/or tab
			    
			   // System.out.println("Placeorder : "+key + ": " + tab.getTomcatCount());
			    
			    PublicKey4=tab.getPublicKey4();
			    TomcatCount=tab.getTomcatCount();
			}
			
			logger.info(" Placeorder clientid : "+placeorder.getUid());
			
		
		
		String s_prdt_ali = placeorder.getS_prdt_ali();
		String uid = placeorder.getUid();
		String actid = placeorder.getActid();
		String Tsym = placeorder.getTsym();
		String exch = placeorder.getExch();
		String Ttranstype = placeorder.getTtranstype();
		String Ret = placeorder.getRet();
		String prctyp = placeorder.getPrctyp();
		String qty = placeorder.getQty();
		String discqty = placeorder.getDiscqty();
		String MktPro = placeorder.getMktpro();
		String Price = placeorder.getPrice();
		String TrigPrice = placeorder.getTrigprice();
		String Pcode = placeorder.getPcode();
		String DateDays = placeorder.getDatedays();
		String AMO = placeorder.getAmo();
		String PosSquareFlg = placeorder.getPossquareflg();
		String MinQty = placeorder.getMinqty();
		String naicCode = placeorder.getNaiccode();
		String orderSource = placeorder.getOrdersource();
		String TokenNo = placeorder.getTokenno();

		// API 12.06 PlaceOrder
		String outputValue = "";
		
	
			
		JSONObject PlaceOrderInput = new JSONObject();

		PlaceOrderInput.put("s_prdt_ali", s_prdt_ali);
		PlaceOrderInput.put("qty", qty);
		PlaceOrderInput.put("uid", uid);
		PlaceOrderInput.put("prctyp", prctyp);
		PlaceOrderInput.put("orderSource", orderSource);
		PlaceOrderInput.put("naicCode", naicCode);
		PlaceOrderInput.put("exch", exch);
		PlaceOrderInput.put("TokenNo", TokenNo);
		PlaceOrderInput.put("Tsym", Tsym);

		PlaceOrderInput.put("discqty", discqty);
		PlaceOrderInput.put("actid", actid);
		PlaceOrderInput.put("Ttranstype", Ttranstype);
		PlaceOrderInput.put("TrigPrice", TrigPrice);

		PlaceOrderInput.put("Ret", Ret);
		PlaceOrderInput.put("Price", Price);
		PlaceOrderInput.put("PosSquareFlg", PosSquareFlg);
		PlaceOrderInput.put("Pcode", Pcode);

		PlaceOrderInput.put("MktPro", MktPro);
		PlaceOrderInput.put("MinQty", MinQty);
		PlaceOrderInput.put("DateDays", DateDays);
		PlaceOrderInput.put("AMO", AMO);

		JSONObject PlaceOrderJson = new JSONObject();

		try {
			String eJdata = PlaceOrderInput.toJSONString();
			String jKey = CommonFunction.hashData(PublicKey4);

			StringBuffer PlaceOrder = new StringBuffer(marketwatchProvider.getPlaceOrderurl());
			PlaceOrder.append("jsessionid=" + "." +TomcatCount  + "&jData=" + eJdata + "&jKey=" + jKey + "");

			URL PlaceOrderurl = new URL(PlaceOrder.toString());

			System.out.println("PlaceOrderurl " + PlaceOrderurl.toString());

			logger.info("PlaceOrder URL : " + PlaceOrderurl.toString());

			HttpURLConnection PlaceOrderconn = (HttpURLConnection) PlaceOrderurl.openConnection();

			PlaceOrderconn.setRequestMethod("POST");
			PlaceOrderconn.setRequestProperty("Accept", "application/json");
			logger.info("PlaceOrder Response Code : " + PlaceOrderconn.getResponseCode());

			if (PlaceOrderconn.getResponseCode() != 200) {
				throw new RuntimeException("Failed : HTTP error code : " + PlaceOrderconn.getResponseCode());
			}

			BufferedReader br2 = new BufferedReader(new InputStreamReader((PlaceOrderconn.getInputStream())));
			String output;

			while ((output = br2.readLine()) != null) {
				
				Object obj = JSONValue.parse(output);
				PlaceOrderJson = (JSONObject) obj;
			}
			logger.info("Mobile-PlaceOrder Response Value : " + PlaceOrderJson);

		} catch (Exception e) {
			logger.error("Unexpected Mobile-PlaceOrder error", e.getMessage());

		}

		return ResponseEntity.ok().body(PlaceOrderJson);

	}

	// Implementation of API 31.01 place bracket order
	@RequestMapping(value = "/placebracketorderByMobile", method = RequestMethod.POST)
	public ResponseEntity<JSONObject> PlaceBracketOrderPageByMobile(@RequestBody BracketOrder bracketOrder,
			HttpServletRequest request, HttpServletResponse response) {

		String Ret, orderSource, TrigPrice, naicCode, actid, SqrOffvalue, ltpOratp, Ttranstype, TokenNo = "";
		String trailingSL, Price, userTag, exch, qty, tSLticks, SqrOffAbsOrticks, SLvalue, discqty, prctyp,
				SLAbsOrticks = "";

		Ret = bracketOrder.getRet();

		orderSource = bracketOrder.getOrdersource();

		TrigPrice = bracketOrder.getTrigprice();

		naicCode = bracketOrder.getNaiccode();

		actid = bracketOrder.getActid();

		SqrOffvalue = bracketOrder.getSqroffvalue();

		ltpOratp = bracketOrder.getLtporatp();

		Ttranstype = bracketOrder.getTtranstype();

		String uid = bracketOrder.getUid();

		TokenNo = bracketOrder.getTokenno();

		trailingSL = bracketOrder.getTrailingsl();

		Price = bracketOrder.getPrice();

		userTag = bracketOrder.getUsertag();

		exch = bracketOrder.getExch();

		qty = bracketOrder.getQty();

		tSLticks = bracketOrder.getTslticks();

		SqrOffAbsOrticks = bracketOrder.getSqroffabsorticks();

		SLvalue = bracketOrder.getSlvalue();

		discqty = bracketOrder.getDiscqty();

		prctyp = bracketOrder.getPrctyp();

		SLAbsOrticks = bracketOrder.getSlabsorticks();

		// API 31.01 place bracket order

		String outputValue = "";
		
		String PublicKey4=null,TomcatCount=null;
		
		for ( Map.Entry<String, UserInfo> entry : mobileLogincontroller.Loginmap.entrySet()) {
			
			String key = entry.getKey();
		    UserInfo tab = entry.getValue();
		    // do something with key and/or tab
		    
		   // System.out.println("bracketOrder : "+key + ": " + tab.getTomcatCount());
		    
		    PublicKey4=tab.getPublicKey4();
		    TomcatCount=tab.getTomcatCount();
		}
		
		logger.info(" bracketOrder clinetid :"+bracketOrder.getUid());
		
		JSONObject bracketOrderInput = new JSONObject();

		bracketOrderInput.put("exch", exch);
		bracketOrderInput.put("TokenNo", TokenNo);
		bracketOrderInput.put("Ttranstype", Ttranstype);
		bracketOrderInput.put("qty", qty);
		bracketOrderInput.put("actid", actid);
		bracketOrderInput.put("uid", uid);
		bracketOrderInput.put("Ret", Ret);
		bracketOrderInput.put("discqty", discqty);
		bracketOrderInput.put("Price", Price);
		bracketOrderInput.put("ltpOratp", ltpOratp);
		bracketOrderInput.put("SqrOffAbsOrticks", SqrOffAbsOrticks);
		bracketOrderInput.put("SqrOffvalue", SqrOffvalue);
		bracketOrderInput.put("SLAbsOrticks", SLAbsOrticks);
		bracketOrderInput.put("SLvalue", SLvalue);
		bracketOrderInput.put("trailingSL", trailingSL);
		bracketOrderInput.put("tSLticks", tSLticks);
		bracketOrderInput.put("naicCode", naicCode);
		bracketOrderInput.put("orderSource", orderSource);
		bracketOrderInput.put("userTag", userTag);
		bracketOrderInput.put("prctyp", prctyp);
		bracketOrderInput.put("TrigPrice", TrigPrice);

		JSONObject bracketOrderJson = new JSONObject();
		try {

			String eJdata = bracketOrderInput.toJSONString();
			String jKey = CommonFunction.hashData(PublicKey4);
			StringBuffer bracketOrderbuf = new StringBuffer(marketwatchProvider.getBracketorderurl());
			bracketOrderbuf.append("jsessionid=" + "." +  TomcatCount + "&jData=" + eJdata + "&jKey=" + jKey + "");

			URL bracketOrderurl = new URL(bracketOrderbuf.toString());

			logger.info("bracketOrderurl " + bracketOrderurl.toString());

			HttpURLConnection bracketOrderconn = (HttpURLConnection) bracketOrderurl.openConnection();

			logger.info("bracketOrder URL : " + bracketOrderurl);

			bracketOrderconn.setRequestMethod("POST");
			bracketOrderconn.setRequestProperty("Accept", "application/json");

			logger.info("bracketOrder Response Code : " + bracketOrderconn.getResponseCode());

			if (bracketOrderconn.getResponseCode() != 200) {
				throw new RuntimeException("Failed : HTTP error code : " + bracketOrderconn.getResponseCode());
			}

			BufferedReader br2 = new BufferedReader(new InputStreamReader((bracketOrderconn.getInputStream())));
			String output;

			while ((output = br2.readLine()) != null) {

				Object obj = JSONValue.parse(output);
				bracketOrderJson = (JSONObject) obj;

			}
			outputValue = bracketOrderJson.toJSONString();

			logger.info("Mobile-bracketOrder Response Value : " + outputValue);

		} catch (Exception e) {
			logger.error("Unexpected Mobile-bracketOrder error", e.getMessage());

		}

		// return outputValue;
		return ResponseEntity.ok().body(bracketOrderJson);

	}

	// END of BUY/ SELL Order

	
	
	// ================  END Order----Rajesh =================================


	
	
	
		
}
