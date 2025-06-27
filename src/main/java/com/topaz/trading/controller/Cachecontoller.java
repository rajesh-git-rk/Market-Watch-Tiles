package com.topaz.trading.controller;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;

import java.util.List;
import java.util.Properties;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


//import org.apache.logging.log4j.LogManager;
//import org.apache.logging.log4j.Logger;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.google.gson.Gson;
import com.topaz.trading.model.BatchScript;
import com.topaz.trading.model.CacheServerList;
import com.topaz.trading.model.OrderbookResponse;
import com.topaz.trading.model.Segment;
import com.topaz.trading.model.UserInfo;
import com.topaz.trading.repository.IndexDBImp;




@RestController
public class Cachecontoller {


//private static Logger logger = LogManager.getLogger(Cachecontoller.class);
	
	//private static Logger logger = LoggerFactory.getLogger(Cachecontoller.class);
	
	@Autowired
    IndexDBImp _mcxRepository;
	
private static String indexurl;



		
	 @RequestMapping(value = "/indexAdd", method = RequestMethod.GET, produces="application/json")
	 public ResponseEntity<List<BatchScript>> autocomplete(HttpServletRequest request, HttpServletResponse response,@RequestParam String searchTerm) {
		
		 
		 
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
		  List<BatchScript> result=null;
		 String json="";
        	StringBuffer urlAppend = new StringBuffer(indexurl+"searchTerm="+(URLEncoder.encode(searchTerm.trim(),StandardCharsets.UTF_8)));
			
		//	StringBuffer urlAppend = new StringBuffer(indexurl+"searchTerm="+ searchTerm.trim());
			
	  try {
		  
//		  String inputLine = "";
//	    
//	    URL indexAddurl = new URL(urlAppend.toString());
//	    HttpURLConnection Indexedconn = (HttpURLConnection) indexAddurl.openConnection();
//		
//		if (Indexedconn.getResponseCode() != 200) {
//			throw new RuntimeException("Failed : HTTP error code : " + Indexedconn.getResponseCode());
//		}
//
//		BufferedReader br3 = new BufferedReader(new InputStreamReader((Indexedconn.getInputStream())));
//
//		while ((inputLine = br3.readLine()) != null) {
//			sb.append(inputLine);
//		}
//		br3.close();
//	    username=sb.toString();
//	    
//		 
//
//	  Gson gson = new Gson();
//		
//	  json = new Gson().toJson(username);
		  
		
	    	System.out.println("urlAppend:::"+(URLEncoder.encode(searchTerm.trim(),StandardCharsets.UTF_8)));

	    		 InputStream propertiesInputStream = null;
	    		    Properties props = new Properties();
	    		    propertiesInputStream = this.getClass().getClassLoader().getResourceAsStream("application.properties");
	    		    props.load(propertiesInputStream);
	    		    
	    		    String server= props.getProperty("spring.redis.host");
	    			String porter= props.getProperty("spring.redis.port");
	    			String indexname= props.getProperty("spring.redis.indexname");
			
	    			
	    			result=_mcxRepository.getSerachFilterAll((URLEncoder.encode(searchTerm.trim(),StandardCharsets.UTF_8)),server,porter,indexname);
	    	 
		  
	    
	  } catch (Exception e) {

			//logger.error("Exception while parsing Redisearch  " + e.getMessage());
		}
	  
	//  return ResponseEntity.ok().body(json);
	  
	  return ResponseEntity.ok().body(result);  
	 }
	 	 
	 
	 String indextimestampurl="http://localhost:9091/market-watch/api/v1/getTimestamp";
	 
		
		
	 @RequestMapping(value = "/indexDBTimeStampRequest", method = RequestMethod.GET, produces="application/json")
	 public ResponseEntity<String> mcxTimestamp() {
		 
		 StringBuffer sb = new StringBuffer();		 
		 String username="";		 
		 String json="";
		 
		 
	  try {
		  
		  String inputLine = "";
	    
	    URL indexAddurl = new URL(indextimestampurl);
	    
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
	    
	    List<String> userNameList = new ArrayList<String>();
	    
	    userNameList.add(username);
	    
	  Gson gson = new Gson();
		
	  json = new Gson().toJson(userNameList);
	    

	  } catch (Exception e) {

			//System.out.println("Exception while parsing IndexedDB response to object " + e.getMessage());
		}
	  
	  return ResponseEntity.ok().body(json);
	 }
    


}

