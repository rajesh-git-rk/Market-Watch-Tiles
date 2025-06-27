package com.topaz.trading.controller;



import java.net.URLDecoder;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.topaz.trading.model.Producer;

@RestController
public class KafkaController {

    private final Producer producer;

    @Autowired
    KafkaController(Producer producer) {
        this.producer = producer;
    }

    @RequestMapping(value = "/kafkapublish", method = RequestMethod.POST)
    public void sendMessageToKafkaTopic(HttpServletRequest request, HttpServletResponse response,@RequestBody String message) {
    	
    	String decodedString;
		try {
			System.out.println("Incoming Message :"+message);
			System.err.println("Incoming Message :"+message);
			decodedString = URLDecoder.decode( message, "UTF-8" );
			System.out.println("decodedString :" +decodedString.substring(0, decodedString.length()-1));
			this.producer.sendMessage(decodedString.substring(0, decodedString.length()-1));
			
			//this.producer.sendMessage(message);
			
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
    }
}
