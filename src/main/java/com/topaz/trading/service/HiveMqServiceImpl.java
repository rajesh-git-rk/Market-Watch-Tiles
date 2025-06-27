package com.topaz.trading.service;

import java.net.URLDecoder;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.hivemq.client.mqtt.MqttClientState;
import com.hivemq.client.mqtt.MqttGlobalPublishFilter;
import com.hivemq.client.mqtt.datatypes.MqttQos;
import com.hivemq.client.mqtt.exceptions.MqttClientStateException;
import com.hivemq.client.mqtt.mqtt5.Mqtt5BlockingClient;
import com.hivemq.client.mqtt.mqtt5.Mqtt5Client;
import com.hivemq.client.mqtt.mqtt5.Mqtt5BlockingClient.Mqtt5Publishes;
import com.hivemq.client.mqtt.mqtt5.message.publish.Mqtt5Publish;
import com.hivemq.client.mqtt.mqtt5.message.publish.Mqtt5PublishResult;
import com.hivemq.client.mqtt.mqtt5.message.subscribe.Mqtt5Subscribe;

@Service
public class HiveMqServiceImpl implements HiveMqService {

	@Override
	public void sendMessage(HttpServletRequest request, HttpServletResponse response, String message) {

		try {
			Mqtt5BlockingClient client = connectToMQTT();
			if (client.getState().compareTo(MqttClientState.CONNECTED) == 0) {
				String decodedString;
				decodedString = URLDecoder.decode(message, "UTF-8");
				message = decodedString.substring(0, decodedString.length() - 1);
				String[] messageSplit = message.split("\\|");
				Mqtt5Publish publishMessage = Mqtt5Publish.builder().topic(messageSplit[0]).qos(MqttQos.EXACTLY_ONCE)
						.retain(true).payload(message.getBytes()).build();
				Mqtt5PublishResult result = client.publish(publishMessage);
				client.disconnect();
			}
		} catch (MqttClientStateException ex) {
			ex.printStackTrace();
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			// client = null;
		}
	}

	@Override
	public String getMessagefromMQ(HttpServletRequest request, HttpServletResponse response,
			@RequestBody String topic) {
		byte[] tempdata;
		Mqtt5Publishes publishes;
		Mqtt5Subscribe sub;
		Mqtt5Publish receivedMessage;
		String message = "";
		try {
			Mqtt5BlockingClient client = connectToMQTT();

			if (client.getState().compareTo(MqttClientState.CONNECTED) == 0) {
				sub = Mqtt5Subscribe.builder().addSubscription().topicFilter(topic).qos(MqttQos.EXACTLY_ONCE)
						.applySubscription().build();
				client.subscribe(sub);
				publishes = client.publishes(MqttGlobalPublishFilter.ALL);
				receivedMessage = publishes.receive(); // receives the message using the "publishes" instance waiting up
														// to 5 seconds // .get() returns the object if available or
														// throws a NoSuchElementException
				tempdata = receivedMessage.getPayloadAsBytes(); // converts the "Optional" type message to a byte array
				System.out.println();
				message = new String(tempdata); // converts the byte array to a String
				System.out.println(message);
				client.disconnect();
			}
		} catch (MqttClientStateException ex) {
			ex.printStackTrace();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			// client = null;
		}
		return message;
	}

	@Override
	public Mqtt5BlockingClient connectToMQTT() throws Exception {
		System.out.println("Establishing Connection ....");
		Mqtt5BlockingClient client = Mqtt5Client.builder().identifier(UUID.randomUUID().toString())
				.serverHost("192.168.1.179").serverPort(1883).buildBlocking();
		client.connect();
		System.out.println("Establishing Connection End ....");
		return client;
	}

}
