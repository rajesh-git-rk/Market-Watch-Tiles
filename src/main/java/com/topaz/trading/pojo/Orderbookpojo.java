package com.topaz.trading.pojo;

import java.io.Serializable;

public class Orderbookpojo implements Serializable {
	
	private String uid;
	private String actid;
	private String exchange;
	private String tsym;
	private String norenordno;
	private String qty;
	private String prc;
	private String prctyp;
	private String ret;
	private String prd;
	private String prevprd;
	private String trantype;
	private String postype;
	
	
	public String getUid() {
		return uid;
	}
	public void setUid(String uid) {
		this.uid = uid;
	}
	public String getActid() {
		return actid;
	}
	public void setActid(String actid) {
		this.actid = actid;
	}
	public String getExchange() {
		return exchange;
	}
	public void setExchange(String exchange) {
		this.exchange = exchange;
	}
	public String getTsym() {
		return tsym;
	}
	public void setTsym(String tsym) {
		this.tsym = tsym;
	}
	public String getNorenordno() {
		return norenordno;
	}
	public void setNorenordno(String norenordno) {
		this.norenordno = norenordno;
	}
	public String getQty() {
		return qty;
	}
	public void setQty(String qty) {
		this.qty = qty;
	}
	public String getPrc() {
		return prc;
	}
	public void setPrc(String prc) {
		this.prc = prc;
	}
	public String getPrctyp() {
		return prctyp;
	}
	public void setPrctyp(String prctyp) {
		this.prctyp = prctyp;
	}
	public String getRet() {
		return ret;
	}
	public void setRet(String ret) {
		this.ret = ret;
	}
	public String getPrd() {
		return prd;
	}
	public void setPrd(String prd) {
		this.prd = prd;
	}
	public String getPrevprd() {
		return prevprd;
	}
	public void setPrevprd(String prevprd) {
		this.prevprd = prevprd;
	}
	public String getTrantype() {
		return trantype;
	}
	public void setTrantype(String trantype) {
		this.trantype = trantype;
	}
	public String getPostype() {
		return postype;
	}
	public void setPostype(String postype) {
		this.postype = postype;
	}
	
	
	
	
	

}
