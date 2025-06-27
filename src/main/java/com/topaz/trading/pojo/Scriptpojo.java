package com.topaz.trading.pojo;

import java.io.Serializable;

public class Scriptpojo implements Serializable {

	
private String uid;

private String stext;

private String wlname;

private String scrips;

private String exchange;



public String getUid() {
	return uid;
}

public void setUid(String uid) {
	this.uid = uid;
}

public String getStext() {
	return stext;
}

public void setStext(String stext) {
	this.stext = stext;
}

public String getWlname() {
	return wlname;
}

public void setWlname(String wlname) {
	this.wlname = wlname;
}

public String getScrips() {
	return scrips;
}

public void setScrips(String scrips) {
	this.scrips = scrips;
}

public String getExchange() {
	return exchange;
}

public void setExchange(String exchange) {
	this.exchange = exchange;
}





}
