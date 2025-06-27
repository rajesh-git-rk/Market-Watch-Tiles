package com.topaz.trading.model;

import java.io.Serializable;

public class KafkaUser implements Serializable {

	
	private String message;

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
	
	
}
