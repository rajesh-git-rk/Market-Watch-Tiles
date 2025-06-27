package com.topaz.trading.service;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.bind.annotation.RequestBody;

import com.hivemq.client.mqtt.mqtt5.Mqtt5BlockingClient;

public interface HiveMqService {

	public void sendMessage(HttpServletRequest request, HttpServletResponse response,
			@RequestBody String message);

	public String getMessagefromMQ(HttpServletRequest request, HttpServletResponse response, @RequestBody String topic);

	public Mqtt5BlockingClient connectToMQTT() throws Exception;
}
