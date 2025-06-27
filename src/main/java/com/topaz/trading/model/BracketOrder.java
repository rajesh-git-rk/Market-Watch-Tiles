package com.topaz.trading.model;

import java.io.Serializable;

import org.springframework.web.bind.annotation.RequestParam;

public class BracketOrder implements Serializable {
	
	
	private String exch;
	private String tokenno;
	private String ttranstype;
	private String qty;
	private String actid;
	private String uid;
	private String ret;
	private String discqty;
	private String price;
	private String ltporatp;
	private String sqroffabsorticks;
	private String sqroffvalue;
	private String slabsorticks;
	private String slvalue;
	private String trailingsl;
	private String tslticks;
	private String naiccode;
	private String ordersource;
	private String usertag;
	private String prctyp;
	private String trigprice;
	public String getExch() {
		return exch;
	}
	public void setExch(String exch) {
		this.exch = exch;
	}
	public String getTokenno() {
		return tokenno;
	}
	public void setTokenno(String tokenno) {
		this.tokenno = tokenno;
	}
	public String getTtranstype() {
		return ttranstype;
	}
	public void setTtranstype(String ttranstype) {
		this.ttranstype = ttranstype;
	}
	public String getQty() {
		return qty;
	}
	public void setQty(String qty) {
		this.qty = qty;
	}
	public String getActid() {
		return actid;
	}
	public void setActid(String actid) {
		this.actid = actid;
	}
	public String getUid() {
		return uid;
	}
	public void setUid(String uid) {
		this.uid = uid;
	}
	public String getRet() {
		return ret;
	}
	public void setRet(String ret) {
		this.ret = ret;
	}
	public String getDiscqty() {
		return discqty;
	}
	public void setDiscqty(String discqty) {
		this.discqty = discqty;
	}
	public String getPrice() {
		return price;
	}
	public void setPrice(String price) {
		this.price = price;
	}
	public String getLtporatp() {
		return ltporatp;
	}
	public void setLtporatp(String ltporatp) {
		this.ltporatp = ltporatp;
	}
	public String getSqroffabsorticks() {
		return sqroffabsorticks;
	}
	public void setSqroffabsorticks(String sqroffabsorticks) {
		this.sqroffabsorticks = sqroffabsorticks;
	}
	public String getSqroffvalue() {
		return sqroffvalue;
	}
	public void setSqroffvalue(String sqroffvalue) {
		this.sqroffvalue = sqroffvalue;
	}
	public String getSlabsorticks() {
		return slabsorticks;
	}
	public void setSlabsorticks(String slabsorticks) {
		this.slabsorticks = slabsorticks;
	}
	public String getSlvalue() {
		return slvalue;
	}
	public void setSlvalue(String slvalue) {
		this.slvalue = slvalue;
	}
	public String getTrailingsl() {
		return trailingsl;
	}
	public void setTrailingsl(String trailingsl) {
		this.trailingsl = trailingsl;
	}
	public String getTslticks() {
		return tslticks;
	}
	public void setTslticks(String tslticks) {
		this.tslticks = tslticks;
	}
	public String getNaiccode() {
		return naiccode;
	}
	public void setNaiccode(String naiccode) {
		this.naiccode = naiccode;
	}
	public String getOrdersource() {
		return ordersource;
	}
	public void setOrdersource(String ordersource) {
		this.ordersource = ordersource;
	}
	public String getUsertag() {
		return usertag;
	}
	public void setUsertag(String usertag) {
		this.usertag = usertag;
	}
	public String getPrctyp() {
		return prctyp;
	}
	public void setPrctyp(String prctyp) {
		this.prctyp = prctyp;
	}
	public String getTrigprice() {
		return trigprice;
	}
	public void setTrigprice(String trigprice) {
		this.trigprice = trigprice;
	}
	
	
	
}