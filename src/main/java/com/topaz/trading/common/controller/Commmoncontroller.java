package com.topaz.trading.common.controller;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Properties;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.json.simple.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.RedirectView;

import com.google.gson.Gson;
import com.topaz.trading.controller.MarketwatchProvider;
import com.topaz.trading.controller.Orderbookcontroller;
import com.topaz.trading.model.Alerts;
import com.topaz.trading.model.MarketWacthScript;
import com.topaz.trading.model.MarketWatch;
import com.topaz.trading.model.OrderNotification;
import com.topaz.trading.model.Segment;
import com.topaz.trading.repository.ScriptImp2;

@RestController
public class Commmoncontroller {
	
	
	@Autowired
	MarketwatchProvider marketwatchProvider;
	
	@Autowired
	ScriptImp2 scriptImp;
	
	private static Logger logger = LoggerFactory.getLogger(Commmoncontroller.class);

	
	@RequestMapping(value="/addScriptMcx", method = RequestMethod.POST)
	public ResponseEntity<List<MarketWacthScript>> addScriptMcx(HttpServletRequest request, HttpServletResponse response,@RequestParam("Token") String Token,@RequestParam("Marketwatchid") String Marketwatchid,@RequestParam("Exchange") String Exchange,@RequestParam("Scriptname") String Scriptname,
			@RequestParam("McxInstrumentCode") String McxInstrumentCode,@RequestParam("McxInstrumentSeries") String McxInstrumentSeries,@RequestParam("McxProductStartDate") String McxProductStartDate,@RequestParam("McxLastTradingDate") String McxLastTradingDate,@RequestParam("McxLotSize") String McxLotSize,
			@RequestParam("McxTickSize") String McxTickSize,@RequestParam("McxDeliveryStartDate") String McxDeliveryStartDate,@RequestParam("McxDeliveryEndDate") String McxDeliveryEndDate,@RequestParam("McxLastModifiedDate") String McxLastModifiedDate,@RequestParam("McxInstrumentInfo") String McxInstrumentInfo,
			@RequestParam("McxTenderPeriodStartDate") String McxTenderPeriodStartDate,@RequestParam("McxTenderPeriodEndDate") String McxTenderPeriodEndDate,@RequestParam("McxInstrumentName") String McxInstrumentName,@RequestParam("McxOriginalExpiryDate") String McxOriginalExpiryDate,@RequestParam("McxStrikePrice") String McxStrikePrice,
			@RequestParam("McxOptionType") String McxOptionType,@RequestParam("Displayname") String displayname) {
		
		 
		 HttpSession session = null;
			session = request.getSession();
			String userId = (String) session.getAttribute("userId");

		 
		 MarketWacthScript script =new MarketWacthScript();
		 
		 MarketWatch mar= new MarketWatch();
		 mar.setMarketwatchid(Integer.parseInt(Marketwatchid));
		 
		 script.setMarketwatchid(mar);
		 script.setToken(Token);
		 script.setExchange(Exchange);
		 script.setScriptName(Scriptname);
		 script.setDisplayname(displayname);
		 script.setMarketWatchName("MW1");
		 script.setStatus("1");
		 
		 script.setMcxInstrumentIdentifier(Token);
		 script.setMcxInstrumentCode(McxInstrumentCode);
		 script.setMcxInstrumentSeries(McxInstrumentSeries);
		 script.setMcxProductStartDate(McxProductStartDate);
		 script.setMcxLastTradingDate(McxLastTradingDate);
		 script.setMcxLotSize(McxLotSize);
		 script.setMcxTickSize(McxTickSize);
		 script.setMcxDeliveryStartDate(McxDeliveryStartDate);
		 script.setMcxDeliveryEndDate(McxDeliveryEndDate);
		 script.setMcxLastModifiedDate(McxLastModifiedDate);
		 script.setMcxInstrumentInfo(McxInstrumentInfo);
		 script.setMcxTenderPeriodStartDate(McxTenderPeriodStartDate);
		 script.setMcxTenderPeriodEndDate(McxTenderPeriodEndDate);
		 script.setMcxInstrumentName(McxInstrumentName);
		 script.setMcxNameUnderlyingAsset(Scriptname);
		 script.setMcxOriginalExpiryDate(McxOriginalExpiryDate);
		 script.setMcxStrikePrice(McxStrikePrice);
		 script.setMcxOptionType(McxOptionType);
		 
		 List<MarketWacthScript> list= scriptImp.save(script);
		 
		
		return ResponseEntity.ok().body(list);
		
		
		
	}
	
	
	@RequestMapping(value="/addScriptNse", method = RequestMethod.POST)
	public ResponseEntity<List<MarketWacthScript>> addScriptNse(HttpServletRequest request, HttpServletResponse response,@RequestParam("Token") String Token,@RequestParam("Marketwatchid") String Marketwatchid,@RequestParam("Exchange") String Exchange,@RequestParam("Scriptname") String Scriptname
			,@RequestParam("NseSymbol") String NseSymbol,@RequestParam("NseSeries") String NseSeries,@RequestParam("NseInstrumentType") String NseInstrumentType,@RequestParam("NseIssuedCapital") String NseIssuedCapital,@RequestParam("NseCreditRating") String NseCreditRating
			,@RequestParam("NseBoardLotQuantity") String NseBoardLotQuantity,@RequestParam("NseTickSize") String NseTickSize,@RequestParam("NseIssueStartDate") String NseIssueStartDate,@RequestParam("NseIssueIPDate") String NseIssueIPDate
			,@RequestParam("NseIssueMaturityDate") String NseIssueMaturityDate,@RequestParam("NseFreezePercent") String NseFreezePercent,@RequestParam("NseListingDate") String NseListingDate,@RequestParam("NseExpulsionDate") String NseExpulsionDate
			,@RequestParam("NseReAdmissionDate") String NseReAdmissionDate,@RequestParam("NseExDate") String NseExDate,@RequestParam("NseRecordDate") String NseRecordDate
			,@RequestParam("NseFaceValue") String NseFaceValue,@RequestParam("NseISINNo") String NseISINNo,@RequestParam("Displayname") String displayname) {
		
		 
		 HttpSession session = null;
			session = request.getSession();
			String userId = (String) session.getAttribute("userId");
			
		 MarketWacthScript script =new MarketWacthScript();
		 
		 MarketWatch mar= new MarketWatch();
		 mar.setMarketwatchid(Integer.parseInt(Marketwatchid));
		 
		 script.setMarketwatchid(mar);
		 
		 script.setToken(Token);
		 script.setExchange(Exchange);
		 script.setScriptName(Scriptname);
		 script.setDisplayname(displayname);
		 script.setMarketWatchName("MW1");
		 script.setStatus("1");
		 
		 script.setNseToken(Token);
		 script.setNseSeries(NseSeries);
		 script.setNseSymbol(NseSymbol);
		 script.setNseInstrumentType(NseInstrumentType);
		 script.setNseIssuedCapital(NseIssuedCapital);
		 script.setNseCreditRating(NseCreditRating);
		 script.setNseBoardLotQuantity(NseBoardLotQuantity);
		 script.setNseTickSize(NseTickSize);
		 script.setNseName(displayname);
		 script.setNseIssueStartDate(NseIssueStartDate);
		 script.setNseIssueIPDate(NseIssueIPDate);
		 script.setNseIssueMaturityDate(NseIssueMaturityDate);
		 script.setNseFreezePercent(NseFreezePercent);
		 script.setNseListingDate(NseListingDate);
		 script.setNseExpulsionDate(NseExpulsionDate);
		 script.setNseReAdmissionDate(NseReAdmissionDate);
		 script.setNseExDate(NseExDate);
		 script.setNseRecordDate(NseRecordDate);
		 script.setNseFaceValue(NseFaceValue);
		 script.setNseISINNo(NseISINNo);
	
		 
		 List<MarketWacthScript> list= scriptImp.save(script);
		 
		 
		
		return ResponseEntity.ok().body(list);
		
		
		
	}
	
	
	@RequestMapping(value="/addScriptNfo", method = RequestMethod.POST)
	public ResponseEntity<List<MarketWacthScript>> addScriptNfo(HttpServletRequest request, HttpServletResponse response,@RequestParam("Token") String Token,@RequestParam("Marketwatchid") String Marketwatchid,@RequestParam("Exchange") String Exchange,@RequestParam("Scriptname") String Scriptname,@RequestParam("Nfoinstrument_name") String Nfoinstrument_name
			,@RequestParam("NfoSeries") String NfoSeries,@RequestParam("Nfoexpiry_date") String Nfoexpiry_date,@RequestParam("Nfostrike_price") String Nfostrike_price,@RequestParam("Nfooption_type") String Nfooption_type,@RequestParam("Nfoissue_infostart_date") String Nfoissue_infostart_date
			,@RequestParam("Nfoissue_infomaturity_date") String Nfoissue_infomaturity_date,@RequestParam("Nfoboard_lot_quantity") String Nfoboard_lot_quantity,@RequestParam("NfoStockname") String NfoStockname,@RequestParam("Displayname") String displayname,@RequestParam("Nfospreadmin") String Nfospreadmin) {
		
		 
		 HttpSession session = null;
			session = request.getSession();
			String userId = (String) session.getAttribute("userId");
			
		 MarketWacthScript script =new MarketWacthScript();
		 
		 MarketWatch mar= new MarketWatch();
		 mar.setMarketwatchid(Integer.parseInt(Marketwatchid));
		 
		 script.setMarketwatchid(mar);
		 
		 script.setToken(Token);
		 script.setExchange(Exchange);
		 script.setScriptName(Scriptname);
		 script.setDisplayname(displayname);
		 script.setMarketWatchName("MW1");
		 script.setStatus("1");
		 
		 script.setNfoToken(Token);
		 script.setNfoinstrument_name(Nfoinstrument_name);
		 script.setNfoSymbol(displayname);
		 script.setNfoSeries(NfoSeries);
		 script.setNfoexpiry_date(Nfoexpiry_date);
		 script.setNfostrike_price(Nfostrike_price);
		 script.setNfooption_type(Nfooption_type);
		 script.setNfoissue_infostart_date(Nfoissue_infostart_date);
		 script.setNfoissue_infomaturity_date(Nfoissue_infomaturity_date);
		 script.setNfoboard_lot_quantity(Nfoboard_lot_quantity);
		 script.setNfoStockname(NfoStockname);
		 script.setNfospreadmin(Nfospreadmin);

		 
		 List<MarketWacthScript> list= scriptImp.save(script);
		 
		
		return ResponseEntity.ok().body(list);
		
		
		
	}
	
	
	@RequestMapping(value="/getScriptValueOfMarketIdForWeb", method = RequestMethod.GET)
	public ResponseEntity<JSONObject> getScriptValueWithMarketwatchIdWeb(HttpServletRequest request, HttpServletResponse response,@RequestParam String marketwatchid) {
		
	 
	// System.out.println("marketwatchid : "+marketwatchid);
		 HttpSession session = null;
			session = request.getSession();
			List<MarketWacthScript> list=null;
			 JSONObject marketwatchMessage = new JSONObject();
	try {	
			String userId = (String) session.getAttribute("userId");
			
			
		 MarketWacthScript script =new MarketWacthScript();
		 
		 MarketWatch mw=new MarketWatch();
		 
		 mw.setMarketwatchid(Integer.parseInt(marketwatchid));
		 
		 script.setMarketwatchid(mw);
		 
		list= scriptImp.scripListOfMarketId(script);
		
		String message = "";
		if (list.size() > 0) {
			message = "MarketWatch Script Fetched Succesfully ";
			marketwatchMessage.put("message", message);
			marketwatchMessage.put("userId", userId);
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
	
	
	@RequestMapping(value="/getMarketwatchList", method = RequestMethod.GET)
	public ResponseEntity<List<MarketWatch>> getMarketwatchList(HttpServletRequest request, HttpServletResponse response) {


	 HttpSession session =  request.getSession();
	 
	 List<MarketWatch> list=null;

		
	try {	

	 list= scriptImp.getMarketWatchlist();

	} catch (Exception e) {

	logger.error("Exception while parsing MarketWatch Script Fetched  " + e.getMessage());
	}
	 
	 return ResponseEntity.ok().body(list);

	}		
	

	@RequestMapping(value="/getMarketScript", method = RequestMethod.GET)
	public  ResponseEntity<List<MarketWacthScript>> getScriptVal(HttpServletRequest request, HttpServletResponse response) {
		
	//	ModelAndView mv = new ModelAndView("exchange-light");
		 HttpSession session = null;
			session = request.getSession();
			String userId = (String) session.getAttribute("userId");
			
		 MarketWacthScript script =new MarketWacthScript();
		 
		 List<MarketWacthScript> list= scriptImp.listAll();
		
		
		 return ResponseEntity.ok().body(list);
		
	}
	
	
	@RequestMapping(value="/getMarketScriptNew", method = RequestMethod.GET)
	public ModelAndView getScriptValNew(HttpServletRequest request, HttpServletResponse response) {
		
		ModelAndView mv = new ModelAndView("menu");
		 HttpSession session = null;
			session = request.getSession();
			String userId = (String) session.getAttribute("userId");
			
		 MarketWacthScript script =new MarketWacthScript();
		 
		 List<MarketWacthScript> list= scriptImp.listAll();
		 
		
		 
		 mv.addObject("scriptList", list);
		 return mv ;
		
		
		
	}
	
	@RequestMapping(value="/deleteScript", method = RequestMethod.POST)
	public ResponseEntity<String> deleteScriptVal(HttpServletRequest request, HttpServletResponse response,@RequestParam("Token") String Token) {
		
		 
		 HttpSession session = null;
			session = request.getSession();
			//String userId = (String) session.getAttribute("userId");
		 
		 MarketWacthScript script =new MarketWacthScript();
		 
		 
		int addscriptVal= scriptImp.delete(Token);
		
		String scrival=String.valueOf(addscriptVal);
		
		
		return ResponseEntity.ok().body(scrival);
		
		
		
	}
	
	
	
	
	
	@RequestMapping(value="/AlertSet", method = RequestMethod.POST)
	public ResponseEntity<List<Alerts>> addAlertSet(HttpServletRequest request, HttpServletResponse response,@RequestParam("scriptName") String scriptName,@RequestParam("price") String price
			,@RequestParam("frequency") String frequency,@RequestParam("expiry") String expiry
			,@RequestParam("alertcondition") String alertcondition,@RequestParam("exchange") String exchange,@RequestParam("token") String token,@RequestParam("setstockdisplayname") String setstockdisplayname,@RequestParam("setmcxticksize") String setmcxticksize
			,@RequestParam("setmcxexpirydate") String setmcxexpirydate,@RequestParam("setnseticksize") String setnseticksize,@RequestParam("setnseexpirydate") String setnseexpirydate,@RequestParam("setnfoexpirydate") String setnfoexpirydate,@RequestParam("setmcxInstrumentCode") String setmcxInstrumentCode
			,@RequestParam("setmcxStrikePrice") String setmcxStrikePrice,@RequestParam("setmcxOptionType") String setmcxOptionType,@RequestParam("setmcxInstrumentName") String setmcxInstrumentName,@RequestParam("setmcxInstrumentSeries") String setmcxInstrumentSeries,@RequestParam("setnseSymbol") String setnseSymbol,@RequestParam("setnseSeries") String setnseSeries
			,@RequestParam("setnfosymbol") String setnfosymbol,@RequestParam("setnfostrike_price") String setnfostrike_price,@RequestParam("setnfooption_type") String setnfooption_type,@RequestParam("setnfoinstrument_name") String setnfoinstrument_name) {
		
		 
		 HttpSession session = null;
			session = request.getSession();
			String userId = (String) session.getAttribute("userId");
			
			Alerts script =new Alerts();
			
		//	script.setAlertId(1);
		 script.setAlertcondition(alertcondition);
		 script.setPrice(price);
		 script.setFrequency(frequency);
		 
		 if(frequency.equalsIgnoreCase("Once")) {
			 DateTimeFormatter dtf1 = DateTimeFormatter.ofPattern("dd/MM/yyyy");
			   LocalDateTime now1 = LocalDateTime.now();

			   
			   String expiryd=dtf1.format(now1);
			 //  System.out.println("expiryd::::"+expiryd);
			  script.setExpirydate(expiryd);
			  
			  DateTimeFormatter dtf2 = DateTimeFormatter.ofPattern("HH:mm:ss");
			   LocalDateTime now2 = LocalDateTime.now();
			   String expiryt=dtf2.format(now2);
			   //System.out.println("expiryt::::"+expiryt);
			  script.setTimer(expiryt);
		  script.setNotificationintervalmin("");
		 
		 }else {
			 script.setExpirydate(expiry);
			// script.setTimer(time);
			// script.setNotificationintervalmin(notification);
		 }
		 
		 script.setScriptname(scriptName);
		 script.setComments("");
		 script.setStatus("1");
		 script.setUserId(userId);
		 script.setExchange(exchange);
		 script.setToken(token);
		 
		 script.setStockdisplayname(setstockdisplayname);
		 script.setMcxticksize(setmcxticksize);
		 script.setMcxexpirydate(setmcxexpirydate);
		 script.setNseticksize(setnseticksize);
		 script.setNseexpirydate(setnseexpirydate);
		 script.setNfoexpirydate(setnfoexpirydate);
		 script.setMcxInstrumentCode(setmcxInstrumentCode);
		 script.setMcxStrikePrice(setmcxStrikePrice);
		 script.setMcxOptionType(setmcxOptionType);
		 script.setMcxInstrumentName(setmcxInstrumentName);
		 script.setMcxInstrumentSeries(setmcxInstrumentSeries);
		 script.setNseSymbol(setnseSymbol);
		 script.setNseSeries(setnseSeries);
		 script.setNfosymbol(setnfosymbol);
		 script.setNfostrike_price(setnfostrike_price);
		 script.setNfooption_type(setnfooption_type);
		 script.setNfoinstrument_name(setnfoinstrument_name);
		 
		 
		 List<Alerts> list= scriptImp.AlertSave(script);
	
		return ResponseEntity.ok().body(list);
		
		
		
	}
	
	@RequestMapping(value="/getAlert", method = RequestMethod.POST)
	public ResponseEntity<List<Alerts>> getAlert(HttpServletRequest request, HttpServletResponse response) {
		
		 
		 HttpSession session = null;
			session = request.getSession();
			String userId = (String) session.getAttribute("userId");
			
			Alerts script =new Alerts();
		 
		 List<Alerts> list= scriptImp.getAlertlistAll();
		 
		// System.out.println("getalert::::"+list);
		
		 return ResponseEntity.ok().body(list);
		
		
		
	}
	
	@RequestMapping(value="/updateAlert", method = RequestMethod.POST)
	public ResponseEntity<List<Alerts>> updateAlert(HttpServletRequest request, HttpServletResponse response,@RequestParam("Id") String Id,@RequestParam("scriptName") String scriptName,@RequestParam("price") String price
			,@RequestParam("frequency") String frequency,@RequestParam("expiry") String expiry
			,@RequestParam("alertcondition") String alertcondition) {
		
		 
		 HttpSession session = null;
			session = request.getSession();
			String userId = (String) session.getAttribute("userId");
			
			Alerts script =new Alerts();
			
			script.setAlertcondition(alertcondition);
			 script.setPrice(price);
			 script.setFrequency(frequency);
			 
			 if(frequency.equalsIgnoreCase("Once")) {
				  script.setExpirydate("");
				  script.setTimer("");
				  script.setNotificationintervalmin("");
				 
			}else {
					 script.setExpirydate(expiry);
					 //script.setTimer(time);
					 //script.setNotificationintervalmin(notification);
			}
			 
			 script.setScriptname(scriptName);
			 script.setComments("");
			 script.setStatus("1");
			 script.setUserId(userId);
			
		 
		 List<Alerts> list= scriptImp.getAlertupdate(Id,script);
		
		 return ResponseEntity.ok().body(list);
		
		
		
	}
	
	@RequestMapping(value="/getAlertPause", method = RequestMethod.POST)
	public ResponseEntity<List<Alerts>> getAlertPause(HttpServletRequest request, HttpServletResponse response,@RequestParam("Id") String Id,@RequestParam("status") String status) {
		
		 
		 HttpSession session = null;
			session = request.getSession();
			String userId = (String) session.getAttribute("userId");
			Alerts script =new Alerts();

		 
		 List<Alerts> list= scriptImp.updatePause(Id,status);
		
		 return ResponseEntity.ok().body(list);
		
		
		
	}
	
	@RequestMapping(value="/getAlertDelete", method = RequestMethod.POST)
	public int getAlertDelete(HttpServletRequest request, HttpServletResponse response,@RequestParam("Id") String Id) {
		
		 
		 HttpSession session = null;
			session = request.getSession();
			String userId = (String) session.getAttribute("userId");
			
			
			Alerts script =new Alerts();

		 
		 int val= scriptImp.getDelete(Id);
		 
		
		 return val;
		
		
		
	}
	
	@RequestMapping(value="/getTriggerAlert", method = RequestMethod.GET)
	public ResponseEntity<JSONObject> getTriggerAlert(HttpServletRequest request, HttpServletResponse response) {
		
		 
		 HttpSession session =request.getSession();
			String userId = (String) session.getAttribute("userId");
			RedirectView rv=null;
			JSONObject innerobj = new JSONObject();
       if(userId !=null) {
			 	 
			Alerts script =new Alerts();
			
			 script.setPrice("500");
			 
			 script.setUserId(userId);

		 List<Alerts> list= scriptImp.getTrigger(script);
		 
		 StringBuilder sb = new StringBuilder();
		 if(list.size() >0) {
		 for (int i = 0; i < list.size(); i++) {
		 
			 sb.append("<li>");
			 sb.append("<h6>"+list.get(i).getScriptname()+"<span class='float-end'>"+list.get(i).getTimer()+"</span></h6>");
			 sb.append("<p>"+list.get(i).getScriptname()+" "+list.get(i).getAlertcondition()+" to "+list.get(i).getPrice()+".</p>");
			 sb.append("</li>");
	            
			// CRUDEOIL JUN FUT Great than or Equal to ₹4801
	        }
		 
		 }else {
			 sb.append("<li>");
			 sb.append("<h6>NO RECORD</h6>");
			 sb.append("</li>");
		 }
		  innerobj.put("data", sb.toString());
   }else {
	
	  session.removeAttribute("userId");
	
	  rv=new RedirectView("login");
   }

		 return ResponseEntity.ok().body(innerobj);
		
		
		
	}
	
	
	
	@RequestMapping(value="/getOrderNotification", method = RequestMethod.GET)
	public ResponseEntity<JSONObject> getOrderNotification(HttpServletRequest request, HttpServletResponse response) {
		
		 
		 HttpSession session =request.getSession();
			String userId = (String) session.getAttribute("userId");
			RedirectView rv=null;
			JSONObject innerobj = new JSONObject();
       if(userId !=null) {
			 	 
    	   OrderNotification script =new OrderNotification();
			
			 
			 
			 script.setUserId(userId);
			 
			 DateTimeFormatter dtf1 = DateTimeFormatter.ofPattern("dd/MM/yyyy");
			   LocalDateTime now1 = LocalDateTime.now();

			   
			   String notificationdate=dtf1.format(now1);
			 //  System.out.println("notificationdate::::"+notificationdate);
			   
			   script.setNotificationdate(notificationdate);
			   
		 List<OrderNotification> list= scriptImp.getNotificationOrder(script);
		 
		 StringBuilder sb = new StringBuilder();
		 if(list.size() >0) {
		 for (int i = 0; i < list.size(); i++) {
	
	// sell if
			 
			 if(list.get(i).getProduct().equalsIgnoreCase("S")) {
			 sb.append("<li>");
			 sb.append("<h6>"+list.get(i).getScriptname()+"<span class='float-end'>"+list.get(i).getNotificationtime()+"</span></h6>");
			 sb.append("<p> Your Sell Order for "+list.get(i).getQty()+"QTY of "+list.get(i).getScriptname()+" was placed at "+list.get(i).getPrice()+".</p>");
			 sb.append("</li>");
			 
	// buy else	
			 
			 }else {
			 sb.append("<li>");
			 sb.append("<h6>"+list.get(i).getScriptname()+"<span class='float-end'>"+list.get(i).getNotificationtime()+"</span></h6>");
			 sb.append("<p> Your Buy Order for "+list.get(i).getQty()+"Share of "+list.get(i).getScriptname()+" was placed at "+list.get(i).getPrice()+".</p>");
			 sb.append("</li>");
			 }     
			// CRUDEOIL JUN FUT Great than or Equal to ₹4801
			 
	        }
		 
		 }else {
			 sb.append("<li>");
			 sb.append("<h6>NO RECORD</h6>");
			 sb.append("</li>");
		 }
		  innerobj.put("data", sb.toString());
   }else {
	
	  session.removeAttribute("userId");
	
	  rv=new RedirectView("login");
   }

		 return ResponseEntity.ok().body(innerobj);
		
		
		
	}
	
	
	private static String indexurl;



	
	 @RequestMapping(value = "/getScriptValueOfToken", method = RequestMethod.GET, produces="application/json")
	 public ResponseEntity<String> getScriptValueOfToken(HttpServletRequest request, HttpServletResponse response,@RequestParam String token) {
		
		 System.out.println("Token : "+token+"based fetching records!.......");
		 
		 try {	
			 InputStream propertiesInputStream = null;
			 Properties props = new Properties();
			 propertiesInputStream = this.getClass().getClassLoader().getResourceAsStream("application.properties");
			 props.load(propertiesInputStream);

			 indexurl= props.getProperty("spring.redisRepeat.indexurl");
			 }catch(Exception e) {
			 	
			 }
		 
		 Segment list= new Segment();
		 StringBuffer sb = new StringBuffer();
		 
		 String username="";
		 
		 String json="";
       	StringBuffer urlAppend = new StringBuffer(indexurl+"searchTerm="+(URLEncoder.encode(token.trim(),StandardCharsets.UTF_8)));
			
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
	    
		 

	  Gson gson = new Gson();
		
	  json = new Gson().toJson(username);
	  
	  System.out.println("json : "+json); 
	    
	  } catch (Exception e) {

			//logger.error("Exception while parsing Redisearch  " + e.getMessage());
		}
	  
	  return ResponseEntity.ok().body(json);
	 }
	
	
}






