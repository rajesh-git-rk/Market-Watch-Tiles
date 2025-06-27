package com.topaz.trading.controller;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;
import java.net.HttpURLConnection;
import java.net.URI;
import java.net.URL;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
import org.bouncycastle.util.encoders.Hex;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.mock.web.MockHttpServletRequest;
import org.springframework.mock.web.MockHttpServletResponse;
import org.springframework.mock.web.MockHttpSession;
import org.springframework.stereotype.Component;
import org.springframework.web.HttpRequestHandler;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import com.google.gson.Gson;
import com.topaz.trading.model.OrderbookResponse;

@Component
public class MyHandler extends TextWebSocketHandler {
	
	@Autowired
	Orderbookcontroller order;
	
	@Autowired
	MarketwatchProvider marketwatchProvider;
	
//	private static Logger logger = LoggerFactory.getLogger(MyHandler.class);
   
    protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
    	
    	MockHttpServletRequest mockRequest = new MockHttpServletRequest();
    	MockHttpServletResponse mockResponse=new MockHttpServletResponse();

    	String val=handleRequest(session,message,mockRequest,mockResponse); 
        session.sendMessage(new TextMessage("echo: "+"RAJESH"));
    }



	private String handleRequest(WebSocketSession session, TextMessage message,HttpServletRequest request, HttpServletResponse response) { 
	
				 ModelAndView mav=new ModelAndView("exchange-light");				 
				 
				 HttpSession session1 = null;
				 session1 = request.getSession();
					String userId = (String) session1.getAttribute("userId");
					String publicKey4 = (String) session1.getAttribute("publicKey4");
					String TomcatCount = (String) session1.getAttribute("TomcatCount");
					
					JSONObject MarketStatusInputJson = new JSONObject();
			
					MarketStatusInputJson.put("Exchange", "NSE");
			
					String MarketStatusInputJsonJsonInputJdata = MarketStatusInputJson.toJSONString();
			
					List<String> MarketStatusInputJsonValidationList = null;
					OrderbookResponse orderRes= new OrderbookResponse();
					
					 List<OrderbookResponse> orderResList = null;
					 
					 List<String> list=null;
					 
					 String json="";
					 String outputval="";

				try {
					
					String jKey =CommonFunction.hashData(publicKey4);
			
			StringBuffer MarketStatusAns = new StringBuffer(marketwatchProvider.getMarketStatusurl());
			MarketStatusAns.append("jsessionid=" + "." + TomcatCount + "&jData=" + MarketStatusInputJsonJsonInputJdata + "&jKey=" + jKey + "");
			

			URL MarketStatusAnsurl = new URL(MarketStatusAns.toString());
			HttpURLConnection MarketStatusconn = (HttpURLConnection) MarketStatusAnsurl.openConnection();
			MarketStatusconn.setRequestMethod("POST");
			MarketStatusconn.setRequestProperty("Accept", "application/json");
			if (MarketStatusconn.getResponseCode() != 200) {
				throw new RuntimeException("Failed : HTTP error code : " + MarketStatusconn.getResponseCode());
			}

			BufferedReader br3 = new BufferedReader(new InputStreamReader((MarketStatusconn.getInputStream())));
			
			String output="";
			JSONArray array = new JSONArray();
			JSONObject OrderBookValidationJson =null;
			while ((output = br3.readLine()) != null) {
				Gson gson = new Gson();
				
				  json = new Gson().toJson(output);
			}
			
			MarketStatusconn.disconnect();

		} catch (Exception e) {
		//	logger.error("Unexpected MarketStatusconn error", e.getMessage());
			e.printStackTrace();

		}
		return  json;
		
	}


	public String MarketStatusResult(String json) {
		
		
		return json;
	}

}
