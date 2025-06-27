package com.topaz.trading.model;

import java.io.Serializable;


public class Script implements Serializable {
	

	private String scriptval;
	
	private double price;
	
	private double change;
	
	

	

	public String getScriptval() {
		return scriptval;
	}

	public void setScriptval(String scriptval) {
		this.scriptval = scriptval;
	}


	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public double getChange() {
		return change;
	}

	public void setChange(double change) {
		this.change = change;
	}
	
	
	
	
	
	

}
