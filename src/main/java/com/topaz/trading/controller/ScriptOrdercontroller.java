package com.topaz.trading.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.topaz.trading.model.Alerts;
import com.topaz.trading.model.ClientSetting;
import com.topaz.trading.model.MarketWacthScript;
import com.topaz.trading.repository.ClientSettingImpl;
import com.topaz.trading.repository.ScriptImp2;



@RestController
public class ScriptOrdercontroller {

	
	@Autowired
	ScriptImp2 scriptImp;
	
	@Autowired
	ClientSettingImpl clientSettingImpl;
	
	@Autowired
	MarketwatchProvider marketwatchProvider;
	
    private static Logger logger = LoggerFactory.getLogger(ScriptOrdercontroller.class);
	
	@RequestMapping(value = "/ReadySortingOrderPrevioueLoad", method = RequestMethod.GET)
	public ResponseEntity<JSONObject> ReadySortingOrderPrevioueLoadPage(@RequestParam String marketwatchid, HttpServletRequest request, HttpServletResponse response){
		
		
		JSONObject SortingJson = new JSONObject();
		List<MarketWacthScript> SortingOrderListfromMarketwatch=null;
		HttpSession session = request.getSession();
		String UserId = (String) session.getAttribute("userId");
		 String Sortingbyfield = null,SortingbyOrder=null ;
		 ModelAndView mv = new ModelAndView("exchange-light-layout-layout");
		 
		 //String marketwatchid="11";
		 
		 
		 List<ClientSetting> CheckSortingOrderDefault=clientSettingImpl.CheckScriptListSortingOrderDefault(UserId);	
		 
		 logger.info("CheckSortingOrderDefault Size :"+CheckSortingOrderDefault.size()); 

		 if(CheckSortingOrderDefault.size()>0) {
			 Sortingbyfield=CheckSortingOrderDefault.get(0).getSortingbyfield();
			 SortingbyOrder=CheckSortingOrderDefault.get(0).getSortingbyorder();
			 
			// List<ClientSetting> SortingOrderfromPrevioueLoad=clientSettingImpl.ScriptListSortingOrderbyExchange(Sortingbyfield);
			
			 SortingOrderListfromMarketwatch=scriptImp.ScriptListSortingOrderDefaultbyexchangeByUser(UserId,Sortingbyfield,SortingbyOrder,marketwatchid);
			 
			 logger.info("SortingOrderAscendingOrder Size :"+SortingOrderListfromMarketwatch.size()+" Sortvalue : "+CheckSortingOrderDefault.get(0).getSortingbyorder()); 
			 
			 if(SortingOrderListfromMarketwatch.size()>0) {
			 SortingJson.put("scriptList", SortingOrderListfromMarketwatch);
			 SortingJson.put("Sortingbyfield", CheckSortingOrderDefault.get(0).getSortingbyfield()); 
			 SortingJson.put("SortingbyOrder", CheckSortingOrderDefault.get(0).getSortingbyorder()); 
			 }
			else {
					
				 SortingOrderListfromMarketwatch=scriptImp.ScriptListSortingOrderDefaultbyexchangefromProperties(Sortingbyfield,SortingbyOrder,marketwatchid);

				 SortingJson.put("scriptList", SortingOrderListfromMarketwatch);
				 SortingJson.put("Sortingbyfield", "exchange"); 
				 SortingJson.put("SortingbyOrder", "desc");
			}
		 }
		 
		 else if(CheckSortingOrderDefault.size()==0){
			 logger.info("SortingOrderDecendingOrder Default ByExchange"); 
 
			String SortingField=marketwatchProvider.getSortingbydefaultfield();
			String SortingOrder=marketwatchProvider.getSortingbydefaultOrder();
			
		//	List<ClientSetting> SortingOrderList=clientSettingImpl.ScriptListSortingOrderDefault(UserId,SortingField,SortingOrder);
			
			/* String ClientId=UserId;
			if(SortingOrderList.size()>0) {
				 Sortingbyfield=SortingOrderList.get(0).getSortingbyfield();
				 SortingbyOrder=SortingOrderList.get(0).getSortingbyorder();
				 ClientId=SortingOrderList.get(0).getClientid().toUpperCase();	
				 
				 SortingOrderListfromMarketwatch=scriptImp.ScriptListSortingOrderDefaultbyexchangeByUser(ClientId,Sortingbyfield,SortingbyOrder,marketwatchid);
				 
				 logger.info("SortingOrderDecendingOrder Size :"+SortingOrderListfromMarketwatch.size()+" Sortingbyfield : "+Sortingbyfield+" SortingbyOrder : "+SortingbyOrder+"");
				 
				 SortingJson.put("scriptList", SortingOrderListfromMarketwatch);
				 SortingJson.put("Sortingbyfield", "exchange"); 
				 SortingJson.put("SortingbyOrder", "desc");
				 
			}
			else
			{*/
				
				 SortingOrderListfromMarketwatch=scriptImp.ScriptListSortingOrderDefaultbyexchangefromProperties(SortingField,SortingOrder,marketwatchid);

				 SortingJson.put("scriptList", SortingOrderListfromMarketwatch);
				 SortingJson.put("Sortingbyfield", "exchange"); 
				 SortingJson.put("SortingbyOrder", "desc");
			}
			  
			 
			/* SortingJson.put("scriptList", SortingOrderListfromMarketwatch);
			 SortingJson.put("Sortingbyfield", SortingOrderList.get(0).getSortingbyfield()); 
			 SortingJson.put("SortingbyOrder", SortingOrderList.get(0).getSortingbyorder()); 
		 }*/
		
		 return ResponseEntity.ok().body(SortingJson);

	}
	
	@RequestMapping(value = "/SortingOrderfunctionAZ", method = RequestMethod.POST)
	public ResponseEntity<JSONObject> SortingOrderfunctionAZPage(HttpServletRequest request, HttpServletResponse response,@RequestParam String SortingbyfieldId,@RequestParam String  SortingbyOrderId){
		
		
		JSONObject SortingJson = new JSONObject();
		List<MarketWacthScript> SortingOrderListfromMarketwatch=null;
		    String outputValue="";
		    
		    String marketwatchid="11";
		    
			HttpSession session = request.getSession();
			String UserId = (String) session.getAttribute("userId");
			String  Sortingbyfield=null,SortingbyOrder=null,ClientId=null;
			List<MarketWacthScript> SortingOrderDecendingOrder =null;
			
		 logger.info("SortingOrderfunctionAZ  Request SortingbyfieldId : "+SortingbyfieldId+ " SortingbyOrderId : "+SortingbyOrderId); 
		
		 List<ClientSetting> CheckSortingOrderDefault=clientSettingImpl.CheckScriptListSortingOrderDefault(UserId);
		 
		 
		 if(CheckSortingOrderDefault.size()>0) {
			 
		 if(SortingbyOrderId.equals("desc")){
			
			 List<ClientSetting> SortingOrderList=clientSettingImpl.UpdatebySortingOrder(UserId,SortingbyOrderId);
			 
			
			 if(SortingOrderList.size()>0) {
				
				 Sortingbyfield=SortingOrderList.get(0).getSortingbyfield();
				 SortingbyOrder=SortingOrderList.get(0).getSortingbyorder();
				 ClientId=SortingOrderList.get(0).getClientid().toUpperCase();	
				 
				 	SortingOrderDecendingOrder = scriptImp.ScriptListbySortingOrder(ClientId,SortingbyOrder,marketwatchid);
				 	
					if(SortingOrderDecendingOrder.size()>0) {
						SortingJson.put("scriptList", SortingOrderDecendingOrder);
						SortingJson.put("Sortingbyfield", Sortingbyfield); 
						SortingJson.put("SortingbyOrder",SortingbyOrder); 	
						}
						else {
							 SortingOrderListfromMarketwatch=scriptImp.ScriptListSortingOrderDefaultbyscriptname(SortingbyfieldId,SortingbyOrderId,marketwatchid);

							 SortingJson.put("scriptList", SortingOrderListfromMarketwatch);
							 SortingJson.put("Sortingbyfield", "exchange"); 
							 SortingJson.put("SortingbyOrder", "asc");
						}
				}
			else {

				 SortingOrderListfromMarketwatch=scriptImp.ScriptListSortingOrderDefaultbyscriptname(SortingbyfieldId,SortingbyOrderId,marketwatchid);

				 SortingJson.put("scriptList", SortingOrderListfromMarketwatch);
				 SortingJson.put("Sortingbyfield", "exchange"); 
				 SortingJson.put("SortingbyOrder", "asc");
			}
		 }
		 else if(SortingbyOrderId.equals("asc")){	
			 
			 List<ClientSetting> SortingOrderList=clientSettingImpl.UpdatebySortingOrder(UserId,SortingbyOrderId);
		
			 
			 if(SortingOrderList.size()>0) {
				 Sortingbyfield=SortingOrderList.get(0).getSortingbyfield();
				 SortingbyOrder=SortingOrderList.get(0).getSortingbyorder();
				 ClientId=SortingOrderList.get(0).getClientid().toUpperCase();	
				 
				 
				 	SortingOrderDecendingOrder = scriptImp.ScriptListbySortingOrder(ClientId,SortingbyOrder,marketwatchid);
					if(SortingOrderDecendingOrder.size()>0) {
						SortingJson.put("scriptList", SortingOrderDecendingOrder);
						SortingJson.put("Sortingbyfield", Sortingbyfield); 
						SortingJson.put("SortingbyOrder",SortingbyOrder); 	
						}
						else {
							 SortingOrderListfromMarketwatch=scriptImp.ScriptListSortingOrderDefaultbyscriptname(SortingbyfieldId,SortingbyOrderId,marketwatchid);

							 SortingJson.put("scriptList", SortingOrderListfromMarketwatch);
							 SortingJson.put("Sortingbyfield", "exchange"); 
							 SortingJson.put("SortingbyOrder", "desc");
						}
			}
			 else {
			 
				 SortingOrderListfromMarketwatch=scriptImp.ScriptListSortingOrderDefaultbyscriptname(SortingbyfieldId,SortingbyOrderId,marketwatchid);

				 SortingJson.put("scriptList", SortingOrderListfromMarketwatch);
				 SortingJson.put("Sortingbyfield", "exchange"); 
				 SortingJson.put("SortingbyOrder", "desc");
				
			}
		 }
		 
		 
	}
	else if(CheckSortingOrderDefault.size()==0){

		String SortingField=marketwatchProvider.getSortingbydefaultfield();
		String SortingOrder=marketwatchProvider.getSortingbydefaultOrder();
		
		List<ClientSetting> SortingOrderList=clientSettingImpl.ScriptListSortingOrderDefault(UserId,SortingField,SortingOrder);
		
		 		
		 if(SortingOrderList.size()>0) {
			 Sortingbyfield=SortingOrderList.get(0).getSortingbyfield();
			 SortingbyOrder=SortingOrderList.get(0).getSortingbyorder();
			 ClientId=SortingOrderList.get(0).getClientid().toUpperCase();	
			 
			 
			 	SortingOrderDecendingOrder = scriptImp.ScriptListbySortingOrder(ClientId,SortingbyOrder,marketwatchid);
				if(SortingOrderDecendingOrder.size()>0) {
					
					SortingJson.put("scriptList", SortingOrderDecendingOrder);
					SortingJson.put("Sortingbyfield", Sortingbyfield); 
					SortingJson.put("SortingbyOrder",SortingbyOrder); 	
					}
					else {
						 SortingOrderListfromMarketwatch=scriptImp.ScriptListSortingOrderDefaultbyscriptname(SortingbyfieldId,SortingbyOrderId,marketwatchid);

						 SortingJson.put("scriptList", SortingOrderListfromMarketwatch);
						 SortingJson.put("Sortingbyfield", Sortingbyfield); 
						 SortingJson.put("SortingbyOrder", SortingbyOrder);
					}
		}
		 else {
		 
			 SortingOrderListfromMarketwatch=scriptImp.ScriptListSortingOrderDefaultbyscriptname(SortingbyfieldId,SortingbyOrderId,marketwatchid);

			 SortingJson.put("scriptList", SortingOrderListfromMarketwatch);
			 SortingJson.put("Sortingbyfield", "exchange"); 
			 SortingJson.put("SortingbyOrder", "desc");
			
		}
		
		
		
		
	}
		
		
		
		
		
		 logger.info("SortingOrderfunctionAZ  Response SortingbyfieldId : "+Sortingbyfield+ " SortingbyOrderId : "+SortingbyOrder); 

		 return ResponseEntity.ok().body(SortingJson);
	
	}
	
	@RequestMapping(value = "/SortingOrderfunctionLTP", method = RequestMethod.POST)
	public ResponseEntity<String> SortingOrderfunctionLTPPage(HttpServletRequest request, HttpServletResponse response,@RequestParam String LTPSortId){
		
		String outputValue="";
		JSONObject SortingOrderfunctionLTPJson=new JSONObject();
		JSONArray array = new JSONArray();		
		
	
		logger.info("SortingOrderfunctionLTP LTPSortId : "+LTPSortId); 
		
		
		
	
		return ResponseEntity.ok().body(outputValue);
	
	}
	
	@RequestMapping(value = "/SortingOrderfunctionPercentage", method = RequestMethod.POST)
	public ResponseEntity<String> SortingOrderfunctionPercentagePage(HttpServletRequest request, HttpServletResponse response,@RequestParam String PercentageSortId){
		
		String outputValue="";
		JSONObject SortingOrderfunctionPercentageJson=new JSONObject();
		JSONArray array = new JSONArray();		
		
	
		logger.info("SortingOrderfunctionPercentage PercentageSortId : "+PercentageSortId); 
		
		
		
	
		return ResponseEntity.ok().body(outputValue);
	
	}
	
	
	@RequestMapping(value = "/SortingOrderfunctionExchange", method = RequestMethod.POST)
	public ResponseEntity<JSONObject> SortingOrderfunctionExchangePage(HttpServletRequest request, HttpServletResponse response,
			@RequestParam String SortingbyfieldId,@RequestParam String  SortingbyOrderId){
		
	
		String outputValue="";
		 String marketwatchid="11";
		 List<MarketWacthScript> SortingOrderDecendingOrder =null;
		 
		JSONObject SortingJson = new JSONObject();
		
		List<MarketWacthScript> SortingOrderListfromMarketwatch=null;

		 List<MarketWacthScript> SortingOrderExchange =null;
		
			HttpSession session = request.getSession();
			String UserId = (String) session.getAttribute("userId");
			String  Sortingbyfield=null,SortingbyOrder=null,ClientId=null;
			
		 logger.info("SortingOrderfunctionExchange Request  SortingbyOrderId : "+SortingbyOrderId+" SortingbyfieldId : "+SortingbyfieldId); 
		
		 
		 List<ClientSetting> CheckSortingOrderDefault=clientSettingImpl.CheckScriptListSortingOrderDefault(UserId);
		 
		 
		 if(CheckSortingOrderDefault.size()>0) {
			 
		
		 if(SortingbyOrderId.equals("desc")){
			 List<ClientSetting> SortingOrderList=clientSettingImpl.UpdatebySortingbyfieldId(UserId,SortingbyfieldId,SortingbyOrderId);			 
			 
			 if(SortingOrderList.size()>0) {
				 
				 Sortingbyfield=SortingOrderList.get(0).getSortingbyfield();
				 SortingbyOrder=SortingOrderList.get(0).getSortingbyorder();
				 ClientId=SortingOrderList.get(0).getClientid().toUpperCase();		
				 
				 SortingOrderExchange = scriptImp.ScriptListbySortingbyfield(ClientId,Sortingbyfield,SortingbyOrder,marketwatchid);		 
				 if(SortingOrderExchange.size()>0) {
				 logger.info("Response for SortingOrderExchange  SortingbyOrder: "+SortingbyOrder+ " Sortingbyfield : "+Sortingbyfield); 
				 
				 SortingJson.put("scriptList", SortingOrderExchange);
				 SortingJson.put("Sortingbyfield", Sortingbyfield); 
				 SortingJson.put("SortingbyOrder",SortingbyOrder); 
				 }
				 else {
					 SortingOrderListfromMarketwatch=scriptImp.ScriptListSortingOrderDefaultbyexchange(SortingbyfieldId,SortingbyOrderId,marketwatchid);
					 SortingJson.put("scriptList", SortingOrderListfromMarketwatch);
					 SortingJson.put("Sortingbyfield", "exchange"); 
					 SortingJson.put("SortingbyOrder", "asc");
				 }
					
				}
				else {
		
					SortingOrderListfromMarketwatch=scriptImp.ScriptListSortingOrderDefaultbyexchange(SortingbyfieldId,SortingbyOrderId,marketwatchid);
					 
					 
					 SortingJson.put("scriptList", SortingOrderListfromMarketwatch);
					 SortingJson.put("Sortingbyfield", "exchange"); 
					 SortingJson.put("SortingbyOrder", "asc");
				
				}
		 }
		 
		 else if(SortingbyOrderId.equals("asc")){
			 
			 List<ClientSetting> SortingOrderList=clientSettingImpl.UpdatebySortingbyfieldId(UserId,SortingbyfieldId,SortingbyOrderId);			 
			 if(SortingOrderList.size()>0) {
				 Sortingbyfield=SortingOrderList.get(0).getSortingbyfield();
				 SortingbyOrder=SortingOrderList.get(0).getSortingbyorder();
				 ClientId=SortingOrderList.get(0).getClientid().toUpperCase();		
				 
				 SortingOrderExchange = scriptImp.ScriptListbySortingbyfield(ClientId,Sortingbyfield,SortingbyOrder,marketwatchid);		 
				 if(SortingOrderExchange.size()>0) {
				 logger.info("SortingOrderExchange Response SortingbyOrder: "+SortingbyOrder+ " Sortingbyfield : "+Sortingbyfield); 
				 
				 SortingJson.put("scriptList", SortingOrderExchange);
				 SortingJson.put("Sortingbyfield", Sortingbyfield); 
				 SortingJson.put("SortingbyOrder",SortingbyOrder); 
				 }
				 else {
					 SortingOrderListfromMarketwatch=scriptImp.ScriptListSortingOrderDefaultbyexchange(SortingbyfieldId,SortingbyOrderId,marketwatchid);
					 SortingJson.put("scriptList", SortingOrderListfromMarketwatch);
					 SortingJson.put("Sortingbyfield", "exchange"); 
					 SortingJson.put("SortingbyOrder", "desc");
				 
				 }
			
			}
			else {
				 
				 
				 SortingOrderListfromMarketwatch=scriptImp.ScriptListSortingOrderDefaultbyexchange(SortingbyfieldId,SortingbyOrderId,marketwatchid);
				 SortingJson.put("scriptList", SortingOrderListfromMarketwatch);
				 SortingJson.put("Sortingbyfield", "exchange"); 
				 SortingJson.put("SortingbyOrder", "desc");
			 
			}
		 }
		 
		 }
		 
			else if(CheckSortingOrderDefault.size()==0){
				
				String SortingField=marketwatchProvider.getSortingbydefaultfield();
				String SortingOrder=marketwatchProvider.getSortingbydefaultOrder();

				List<ClientSetting> SortingOrderList=clientSettingImpl.ScriptListSortingOrderDefault(UserId,SortingField,SortingOrder);
				
		 		
				 if(SortingOrderList.size()>0) {
					 Sortingbyfield=SortingOrderList.get(0).getSortingbyfield();
					 SortingbyOrder=SortingOrderList.get(0).getSortingbyorder();
					 ClientId=SortingOrderList.get(0).getClientid().toUpperCase();	
					 
					 
					 	SortingOrderDecendingOrder = scriptImp.ScriptListbySortingOrder(ClientId,SortingbyOrder,marketwatchid);
						if(SortingOrderDecendingOrder.size()>0) {							
							SortingJson.put("scriptList", SortingOrderDecendingOrder);
							SortingJson.put("Sortingbyfield", Sortingbyfield); 
							SortingJson.put("SortingbyOrder",SortingbyOrder); 	
							}
							else {
								SortingOrderListfromMarketwatch=scriptImp.ScriptListSortingOrderDefaultbyexchange(SortingbyfieldId,SortingbyOrderId,marketwatchid);
								 SortingJson.put("scriptList", SortingOrderListfromMarketwatch);
								 SortingJson.put("Sortingbyfield", "exchange"); 
								 SortingJson.put("SortingbyOrder", "desc");
							}
				}
				else {
					 
					 
					 SortingOrderListfromMarketwatch=scriptImp.ScriptListSortingOrderDefaultbyexchange(SortingbyfieldId,SortingbyOrderId,marketwatchid);
					 SortingJson.put("scriptList", SortingOrderListfromMarketwatch);
					 SortingJson.put("Sortingbyfield", "exchange"); 
					 SortingJson.put("SortingbyOrder", "desc");
				 
				}
				
				
			}
		 
		 
		 return ResponseEntity.ok().body(SortingJson);
	
	}
	
	
}
