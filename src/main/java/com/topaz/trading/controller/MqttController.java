package com.topaz.trading.controller;

import java.net.URLDecoder;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.hivemq.client.mqtt.MqttClientState;
import com.hivemq.client.mqtt.datatypes.MqttQos;
import com.hivemq.client.mqtt.exceptions.MqttClientStateException;
import com.hivemq.client.mqtt.mqtt5.Mqtt5BlockingClient;
import com.hivemq.client.mqtt.mqtt5.Mqtt5Client;
import com.hivemq.client.mqtt.mqtt5.message.publish.Mqtt5Publish;
import com.hivemq.client.mqtt.mqtt5.message.publish.Mqtt5PublishResult;

@RestController
public class MqttController {

	
//	@Autowired
//	MQTTClient MQTTclient;
	@RequestMapping(value = "/hivemqpublish", method = RequestMethod.POST)
    public void sendMessageToHivemqMqtt(HttpServletRequest request, HttpServletResponse response,@RequestBody String message) {
		 
		try {

			//System.out.println("message::::"+message);
			
	//		if (MQTTclient != null) {
				
				//client = MQTTclient.getClient();
			//	if(client == null) {
			Mqtt5BlockingClient client = connectToMQTT();
			//}
			if(client.getState().compareTo(MqttClientState.CONNECTED) == 0) {
				//connectToMQTT();
			//}
			
			//Mqtt5Connect connectMessage = Mqtt5Connect.builder().keepAlive(10).build();
			///client.connect(connectMessage);
			String decodedString;
			decodedString = URLDecoder.decode( message, "UTF-8" );
			
			message = decodedString.substring(0, decodedString.length()-1);
			//System.out.println("decodedString :" +message);
			String[] messageSplit = message.split("\\|");
			//System.out.println("topic = "+messageSplit[0]);
			Mqtt5Publish publishMessage = Mqtt5Publish.builder()
			        .topic(messageSplit[0])
			        .qos(MqttQos.AT_LEAST_ONCE)
			        .retain(true)
			        .payload(message.getBytes())
			        .build();
			 Mqtt5PublishResult result = client.publish(publishMessage);
			 //System.out.println("Publish Result Error = "+result.getError().toString());
			client.disconnect();
			}
		} catch(MqttClientStateException ex) {
			ex.printStackTrace();
		}catch (Exception e) {
			
			e.printStackTrace();
		}
		finally {
			//client = null;
		}
    }
	private Mqtt5BlockingClient connectToMQTT() throws Exception{
		//System.out.println("Establishing Connection ....");
		
		Mqtt5BlockingClient client = Mqtt5Client.builder()
		.identifier(UUID.randomUUID().toString())
		.serverHost("192.168.1.179").serverPort(1883)

		.buildBlocking();
 
		client.connect();
		return client;
//MQTTclient.setClient(client);
	}
}
