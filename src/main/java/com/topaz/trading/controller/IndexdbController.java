package com.topaz.trading.controller;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Properties;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
//import org.springframework.data.redis.connection.jedis.JedisConnectionFactory;
//import org.springframework.data.redis.core.HashOperations;
//import org.springframework.data.redis.core.RedisTemplate;
//import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.Gson;
import com.topaz.trading.model.BatchScript;
import com.topaz.trading.model.CacheServerList;
import com.topaz.trading.model.MCXSegment;
import com.topaz.trading.model.Segment;
import com.topaz.trading.repository.IndexDBImp;
import com.topaz.trading.repository.RepeatSearchImp;

import io.redisearch.Document;
import io.redisearch.SearchResult;

@RestController
@RequestMapping("/api/v1")
public class IndexdbController {

	
    @Autowired
    IndexDBImp _mcxRepository;
    
    @Autowired
    RepeatSearchImp _searchRepository;
   
   
    @RequestMapping(value="/getRediSearch", method = RequestMethod.GET, produces="application/json")
    public ResponseEntity<String>getRedisSearch(HttpServletRequest request, HttpServletResponse response,@RequestParam String searchTerm) {
    	
    	List<BatchScript> result=null;
    	
    	try { 
    		
    		 InputStream propertiesInputStream = null;
    		    Properties props = new Properties();
    		    propertiesInputStream = this.getClass().getClassLoader().getResourceAsStream("application.properties");
    		    props.load(propertiesInputStream);
    		    
    		    String server= props.getProperty("spring.redis.host");
    			String porter= props.getProperty("spring.redis.port");
    			String indexname= props.getProperty("spring.redis.indexname");
		
    			
    			result=_mcxRepository.getSerachFilterAll(searchTerm,server,porter,indexname);
    	 
    	}
    	
    	catch(Exception ex) {
    		ex.printStackTrace();
    	}
    	
    	 return ResponseEntity.ok().body(result.toString());
            
    }
    
    
    @RequestMapping(value="/getRediSearchRepeat", method = RequestMethod.GET, produces="application/json")
    public ResponseEntity<String>getRediSearchRepeat(HttpServletRequest request, HttpServletResponse response,@RequestParam String searchTerm) {
    	
    	List<Document> result=null;
    	
    	try {
    		
    		System.out.println("test:::call::");
    		
    		 InputStream propertiesInputStream = null;
    		    Properties props = new Properties();
    		    propertiesInputStream = this.getClass().getClassLoader().getResourceAsStream("application.properties");
    		    props.load(propertiesInputStream);
    		    
    		    String server= props.getProperty("spring.redis.host");
    			String porter= props.getProperty("spring.redis.port");
    			String indexname= props.getProperty("spring.redis.indexname");
		
    			
    			result=_searchRepository.getSerachFilterAll(searchTerm,server,porter,indexname);
    	 
    	}
    	
    	catch(Exception ex) {
    		ex.printStackTrace();
    	}
    	
    	 return ResponseEntity.ok().body(result.toString());
            
    }
    
	

	
}
