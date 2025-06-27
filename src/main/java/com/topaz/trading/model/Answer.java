package com.topaz.trading.model;

public class Answer {

	
	
	private String id;
	
	private String ansdescription;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getAnsdescription() {
		return ansdescription;
	}

	public void setAnsdescription(String ansdescription) {
		this.ansdescription = ansdescription;
	}

	public Answer(String id, String ansdescription) {
		super();
		this.id = id;
		this.ansdescription = ansdescription;
	}

	

	
	
	
	
}
