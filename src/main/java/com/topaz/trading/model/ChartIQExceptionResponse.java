package com.topaz.trading.model;

public class ChartIQExceptionResponse {
	public ChartIQExceptionResponse(String message) {
        super();
        this.setMessage(message);
    }
 
    public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}


	private String message;
 
}
