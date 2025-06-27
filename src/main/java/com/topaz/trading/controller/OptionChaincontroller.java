package com.topaz.trading.controller;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

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
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.google.gson.Gson;





@RestController
public class OptionChaincontroller {
	
	@Autowired
	MarketwatchProvider marketwatchProvider;
	private static Logger logger = LoggerFactory.getLogger(OptionChaincontroller.class);
	
//	@RequestMapping(value = "/OptionChain", method = RequestMethod.POST)
//	public ModelAndView OptionChainPage(HttpServletRequest request, HttpServletResponse response,
//			@RequestParam String nfosymbol,@RequestParam String exchange,  @RequestParam String nfoexpirydate, @RequestParam String nfoinstrument_name) {
//				ModelAndView mv = new ModelAndView("dashboard");	

	@RequestMapping(value = "/OptionChain22", method = RequestMethod.POST)
	public ResponseEntity<JSONObject> OptionChainPage(HttpServletRequest request, HttpServletResponse response,
	@RequestParam String nfosymbol,@RequestParam String exchange,  
	@RequestParam String nfoexpirydate, @RequestParam String nfoinstrument_name) {
	
		//nfoexpirydate="1325341800";
	
		System.out.println(" nfosymbol : "+nfosymbol+" OptionChain : "+exchange+" nfoexpirydate : "+nfoexpirydate+" nfoinstrument_name: "+nfoinstrument_name); 
		
		//.replaceAll("\\s","")
		
		JSONObject OptionChainJson=new JSONObject();
		
		// API 10.08 OptionChain
		
				String outputValue="";
				HttpSession session = null;
				session = request.getSession();
				String userId = (String) session.getAttribute("userId");
				String PublicKey4=(String) session.getAttribute("publicKey4");
				String tomcatCount=(String) session.getAttribute("TomcatCount");
				
				JSONObject OptionChainInput = new JSONObject();	
								
				OptionChainInput.put("exch", exchange);	
				OptionChainInput.put("userid", userId);				
				OptionChainInput.put("symbol",nfosymbol);
				OptionChainInput.put("IN", nfoinstrument_name);
				OptionChainInput.put("ED", nfoexpirydate);
				
				try {
					String eJdata =  OptionChainInput.toJSONString();
					String jKey = CommonFunction.hashData(PublicKey4);
					
					StringBuffer OptionChain = new StringBuffer(marketwatchProvider.getOptionChainUrl());
					OptionChain.append("jsessionid=" + "." + tomcatCount + "&jData=" + eJdata + "&jKey=" + jKey + "");

					URL OptionChainurl = new URL(OptionChain.toString());
					logger.info("OptionChain Request URL : "+OptionChainurl.toString()); 
					
					HttpURLConnection OptionChainconn = (HttpURLConnection) OptionChainurl.openConnection();

					
					OptionChainconn.setRequestMethod("POST");
					OptionChainconn.setRequestProperty("Accept", "application/json");
					logger.info("OptionChain Response Code : "+OptionChainconn.getResponseCode());
					
					if (OptionChainconn.getResponseCode() != 200) {
						throw new RuntimeException("Failed : HTTP error code : " + OptionChainconn.getResponseCode());
					}

					BufferedReader br2 = new BufferedReader(new InputStreamReader((OptionChainconn.getInputStream())));
					String output;
					
					while ((output = br2.readLine()) != null) {
						
						Object obj = JSONValue.parse(output);
						OptionChainJson = (JSONObject) obj;
						
						Gson gson = new Gson();	
						outputValue = gson.toJson(output);
					}
					
					//output="Not_Ok";
					/*outputValue=OptionChainJson.toJSONString();*/
					logger.info("OptionChain outputValue Value : "+outputValue);
					
					logger.info("OptionChain Response Value : "+OptionChainJson);
					
					OptionChainconn.disconnect();

				} catch (Exception e) {
					logger.error("Unexpected OptionChain error", e.getMessage());
				}
			//	mv.addObject("OptionChainOutput", outputValue);
		
		
		
		//return mv;
		return ResponseEntity.ok().body(OptionChainJson);
	}
	
	
	
	

	
	

	
}
