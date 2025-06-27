package com.topaz.trading.model;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ChartIQData implements Serializable{
/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

@JsonProperty(value="Volume")
private int volume;

@JsonProperty(value="Close")
private double close;

@JsonProperty(value="Low")
private double low;

@JsonProperty(value="Open")
private double open;

//@JsonProperty(value="DT")
//@DateTimeFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss")
//private Date time;
@JsonProperty(value="DT")
private String time;

@JsonProperty(value="High")
private double high;

public ChartIQData(int volume, double close, double low, double open, double high, String time) {
	super();
	this.volume = volume;
	this.close = close;
	this.low = low;
	this.open = open;
	this.time = time;
	this.high=high;
}

public int getVolume() {
	return volume;
}

public void setVolume(int volume) {
	this.volume = volume;
}

public double getClose() {
	return close;
}

public void setClose(double close) {
	this.close = close;
}

public double getLow() {
	return low;
}

public void setLow(double low) {
	this.low = low;
}

public double getOpen() {
	return open;
}

public void setOpen(double open) {
	this.open = open;
}

public String getTime() {
	return time;
}

public void setTime(String time) {
	this.time = time;
}


}
