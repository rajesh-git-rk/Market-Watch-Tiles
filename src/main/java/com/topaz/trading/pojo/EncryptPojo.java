package com.topaz.trading.pojo;

import java.io.Serializable;

import org.springframework.web.bind.annotation.RequestParam;

public class EncryptPojo implements Serializable {

	
	private Integer dpid;
	private String  reqid;
	private Integer version;
	private String boid;
	private String pan;
	private String reqflag;
	private String encryptdtls;
	
	//private String BOID,private String SettlementId,
	private String  tranactionId;
	private String  isinNumber;
	private String  quantity;
	
	
	public Integer getDpid() {
		return dpid;
	}
	public void setDpid(Integer dpid) {
		this.dpid = dpid;
	}
	public String getReqid() {
		return reqid;
	}
	public void setReqid(String reqid) {
		this.reqid = reqid;
	}
	public Integer getVersion() {
		return version;
	}
	public void setVersion(Integer version) {
		this.version = version;
	}
	public String getBoid() {
		return boid;
	}
	public void setBoid(String boid) {
		this.boid = boid;
	}
	public String getPan() {
		return pan;
	}
	public void setPan(String pan) {
		this.pan = pan;
	}
	public String getReqflag() {
		return reqflag;
	}
	public void setReqflag(String reqflag) {
		this.reqflag = reqflag;
	}
	public String getEncryptdtls() {
		return encryptdtls;
	}
	public void setEncryptdtls(String encryptdtls) {
		this.encryptdtls = encryptdtls;
	}
	public String getTranactionId() {
		return tranactionId;
	}
	public void setTranactionId(String tranactionId) {
		this.tranactionId = tranactionId;
	}
	public String getIsinNumber() {
		return isinNumber;
	}
	public void setIsinNumber(String isinNumber) {
		this.isinNumber = isinNumber;
	}
	public String getQuantity() {
		return quantity;
	}
	public void setQuantity(String quantity) {
		this.quantity = quantity;
	}
	
	
	
	
	
}
