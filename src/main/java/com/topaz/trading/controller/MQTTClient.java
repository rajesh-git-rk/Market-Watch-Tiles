package com.topaz.trading.controller;

import org.springframework.stereotype.Component;

import com.hivemq.client.internal.shaded.javax.inject.Singleton;
import com.hivemq.client.mqtt.mqtt5.Mqtt5BlockingClient;

@Component
@Singleton
public class MQTTClient {

	Mqtt5BlockingClient client;

	public Mqtt5BlockingClient getClient() {
		return client;
	}

	public void setClient(Mqtt5BlockingClient client) {
		this.client = client;
	}

}
