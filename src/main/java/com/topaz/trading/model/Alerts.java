package com.topaz.trading.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="alerts_tbl")
public class Alerts implements Serializable{
	
	@javax.persistence.Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

	@Column(name="id")
	private Integer id;
	
	@Column(name="alertcondition")
	private String alertcondition;
	
	@Column(name="price")
	private String price;
	
	@Column(name="scriptname")
	private String scriptname;
	
	@Column(name="frequency")
	private String frequency;
	
	@Column(name="notificationintervalmin")
	private String notificationintervalmin;
	
	@Column(name="expirydate")
	private String expirydate;
	
	@Column(name="timer")
	private String timer;
	
	@Column(name="comments")
	private String comments;
	
	@Column(name="userid")
	private String userId;
	
	@Column(name="status")
	private String status;
	
	@Column(name="exchange")
	private String exchange;
	
	@Column(name="token")
	private String token;
	
	@Column(name="alertdeleteid")
	private String alertdeleteid;
	
	@Column(name="stockdisplayname")
	private String stockdisplayname;
	
	@Column(name="mcxticksize")
	private String mcxticksize;
	
	@Column(name="mcxexpirydate")
	private String mcxexpirydate;
	
	@Column(name="nseticksize")
	private String nseticksize;
	
	@Column(name="nseexpirydate")
	private String nseexpirydate;
	
	@Column(name="nfoexpirydate")
	private String nfoexpirydate;
	
	@Column(name="mcxinstrumentcode")
	private String mcxInstrumentCode;
	
	@Column(name="mcxstrikeprice")
	private String mcxStrikePrice;
	
	@Column(name="mcxoptiontype")
	private String mcxOptionType;
	
	@Column(name="mcxinstrumentname")
	private String mcxInstrumentName;
	
	@Column(name="mcxinstrumentseries")
	private String mcxInstrumentSeries;
	
	@Column(name="nsesymbol")
	private String nseSymbol;
	
	@Column(name="nseseries")
	private String nseSeries;
	
	@Column(name="nfosymbol")
	private String nfosymbol;
	
	@Column(name="nfostrike_price")
	private String nfostrike_price;
	
	@Column(name="nfooption_type")
	private String nfooption_type;
	
	@Column(name="nfoinstrument_name")
	private String nfoinstrument_name;
	
	
	

	// getter setter

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getAlertcondition() {
		return alertcondition;
	}
	

	public void setAlertcondition(String alertcondition) {
		this.alertcondition = alertcondition;
	}

	public String getPrice() {
		return price;
	}

	public void setPrice(String price) {
		this.price = price;
	}

	public String getScriptname() {
		return scriptname;
	}

	public void setScriptname(String scriptname) {
		this.scriptname = scriptname;
	}

	public String getFrequency() {
		return frequency;
	}

	public void setFrequency(String frequency) {
		this.frequency = frequency;
	}

	public String getNotificationintervalmin() {
		return notificationintervalmin;
	}

	public void setNotificationintervalmin(String notificationintervalmin) {
		this.notificationintervalmin = notificationintervalmin;
	}

	public String getExpirydate() {
		return expirydate;
	}

	public void setExpirydate(String expirydate) {
		this.expirydate = expirydate;
	}

	public String getTimer() {
		return timer;
	}

	public void setTimer(String timer) {
		this.timer = timer;
	}
	

	public String getComments() {
		return comments;
	}

	public void setComments(String comments) {
		this.comments = comments;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getExchange() {
		return exchange;
	}

	public void setExchange(String exchange) {
		this.exchange = exchange;
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

	public String getAlertdeleteid() {
		return alertdeleteid;
	}

	public void setAlertdeleteid(String alertdeleteid) {
		this.alertdeleteid = alertdeleteid;
	}

	public String getStockdisplayname() {
		return stockdisplayname;
	}

	public void setStockdisplayname(String stockdisplayname) {
		this.stockdisplayname = stockdisplayname;
	}

	public String getMcxticksize() {
		return mcxticksize;
	}

	public void setMcxticksize(String mcxticksize) {
		this.mcxticksize = mcxticksize;
	}

	public String getMcxexpirydate() {
		return mcxexpirydate;
	}

	public void setMcxexpirydate(String mcxexpirydate) {
		this.mcxexpirydate = mcxexpirydate;
	}

	public String getNseticksize() {
		return nseticksize;
	}

	public void setNseticksize(String nseticksize) {
		this.nseticksize = nseticksize;
	}

	public String getNseexpirydate() {
		return nseexpirydate;
	}

	public void setNseexpirydate(String nseexpirydate) {
		this.nseexpirydate = nseexpirydate;
	}

	public String getNfoexpirydate() {
		return nfoexpirydate;
	}

	public void setNfoexpirydate(String nfoexpirydate) {
		this.nfoexpirydate = nfoexpirydate;
	}

	public String getMcxInstrumentCode() {
		return mcxInstrumentCode;
	}

	public void setMcxInstrumentCode(String mcxInstrumentCode) {
		this.mcxInstrumentCode = mcxInstrumentCode;
	}

	public String getMcxStrikePrice() {
		return mcxStrikePrice;
	}

	public void setMcxStrikePrice(String mcxStrikePrice) {
		this.mcxStrikePrice = mcxStrikePrice;
	}

	public String getMcxOptionType() {
		return mcxOptionType;
	}

	public void setMcxOptionType(String mcxOptionType) {
		this.mcxOptionType = mcxOptionType;
	}

	public String getMcxInstrumentName() {
		return mcxInstrumentName;
	}

	public void setMcxInstrumentName(String mcxInstrumentName) {
		this.mcxInstrumentName = mcxInstrumentName;
	}

	public String getMcxInstrumentSeries() {
		return mcxInstrumentSeries;
	}

	public void setMcxInstrumentSeries(String mcxInstrumentSeries) {
		this.mcxInstrumentSeries = mcxInstrumentSeries;
	}

	public String getNseSymbol() {
		return nseSymbol;
	}

	public void setNseSymbol(String nseSymbol) {
		this.nseSymbol = nseSymbol;
	}

	public String getNseSeries() {
		return nseSeries;
	}

	public void setNseSeries(String nseSeries) {
		this.nseSeries = nseSeries;
	}

	public String getNfosymbol() {
		return nfosymbol;
	}

	public void setNfosymbol(String nfosymbol) {
		this.nfosymbol = nfosymbol;
	}

	public String getNfostrike_price() {
		return nfostrike_price;
	}

	public void setNfostrike_price(String nfostrike_price) {
		this.nfostrike_price = nfostrike_price;
	}

	public String getNfooption_type() {
		return nfooption_type;
	}

	public void setNfooption_type(String nfooption_type) {
		this.nfooption_type = nfooption_type;
	}

	public String getNfoinstrument_name() {
		return nfoinstrument_name;
	}

	public void setNfoinstrument_name(String nfoinstrument_name) {
		this.nfoinstrument_name = nfoinstrument_name;
	}

   
	
	
}
