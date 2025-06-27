package com.topaz.trading.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Table;


@Entity
@Table(name="script_tbl")
public class MarketWacthScriptTest implements Serializable{

	
	@javax.persistence.Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	
	@Column(name="id")
	private Integer Id;
	
	@Column(name="Script_name")
	private String ScriptName;
	
	@Column(name="Token")
	private String Token;
	
	@Column(name="UserId")
	private String UserId;
	
	@Column(name="Exchange")
	private String Exchange;
	
	@Column(name="Price")
	private String Price;
	
	@Column(name="MW_Name")
	private String MarketWatchName;
	
	@Column(name="McxOptionType")
	private String McxOptionType;
	
	@Column(name="McxStrikePrice")
	private String McxStrikePrice;
	
	@Column(name="McxInstrumentType")
	private String McxInstrumentType;
	
	@Column(name="McxLastTradingDate")
	private String McxLastTradingDate;
	
	@Column(name="NsecmSeries")
	private String NsecmSeries;
	
	@Column(name="NsecmSymbol")
	private String NsecmSymbol;
	
	@Column(name="Nsefostrike_price")
	private String Nsefostrike_price;
	
	@Column(name="Nsefooption_type")
	private String Nsefooption_type;
	
	@Column(name="NsefoSymbol")
	private String NsefoSymbol;
	
	@Column(name="NsefoExpiry_date")
	private String NsefoExpiry_date;
	
	@Column(name="NsefoSeries")
	private String NsefoSeries;
	
	@Column(name="Status")
	private String Status;
	
	
	
	

	public Integer getId() {
		return Id;
	}

	public void setId(Integer id) {
		Id = id;
	}

	public String getScriptName() {
		return ScriptName;
	}

	public void setScriptName(String scriptName) {
		ScriptName = scriptName;
	}


	public String getToken() {
		return Token;
	}

	public void setToken(String token) {
		Token = token;
	}

	public String getUserId() {
		return UserId;
	}

	public void setUserId(String userId) {
		UserId = userId;
	}

	public String getExchange() {
		return Exchange;
	}

	public void setExchange(String exchange) {
		Exchange = exchange;
	}

	public String getMarketWatchName() {
		return MarketWatchName;
	}

	public void setMarketWatchName(String marketWatchName) {
		MarketWatchName = marketWatchName;
	}
	

	public String getMcxOptionType() {
		return McxOptionType;
	}

	public void setMcxOptionType(String mcxOptionType) {
		McxOptionType = mcxOptionType;
	}

	public String getMcxStrikePrice() {
		return McxStrikePrice;
	}

	public void setMcxStrikePrice(String mcxStrikePrice) {
		McxStrikePrice = mcxStrikePrice;
	}

	public String getMcxInstrumentType() {
		return McxInstrumentType;
	}

	public void setMcxInstrumentType(String mcxInstrumentType) {
		McxInstrumentType = mcxInstrumentType;
	}

	public String getMcxLastTradingDate() {
		return McxLastTradingDate;
	}

	public void setMcxLastTradingDate(String mcxLastTradingDate) {
		McxLastTradingDate = mcxLastTradingDate;
	}

	public String getNsecmSeries() {
		return NsecmSeries;
	}

	public void setNsecmSeries(String nsecmSeries) {
		NsecmSeries = nsecmSeries;
	}

	public String getNsecmSymbol() {
		return NsecmSymbol;
	}

	public void setNsecmSymbol(String nsecmSymbol) {
		NsecmSymbol = nsecmSymbol;
	}

	public String getNsefostrike_price() {
		return Nsefostrike_price;
	}

	public void setNsefostrike_price(String nsefostrike_price) {
		Nsefostrike_price = nsefostrike_price;
	}

	public String getNsefooption_type() {
		return Nsefooption_type;
	}

	public void setNsefooption_type(String nsefooption_type) {
		Nsefooption_type = nsefooption_type;
	}

	public String getNsefoSymbol() {
		return NsefoSymbol;
	}

	public void setNsefoSymbol(String nsefoSymbol) {
		NsefoSymbol = nsefoSymbol;
	}

	public String getNsefoExpiry_date() {
		return NsefoExpiry_date;
	}

	public void setNsefoExpiry_date(String nsefoExpiry_date) {
		NsefoExpiry_date = nsefoExpiry_date;
	}

	public String getNsefoSeries() {
		return NsefoSeries;
	}

	public void setNsefoSeries(String nsefoSeries) {
		NsefoSeries = nsefoSeries;
	}

	public String getStatus() {
		return Status;
	}

	public void setStatus(String status) {
		Status = status;
	}

	public String getPrice() {
		return Price;
	}

	public void setPrice(String price) {
		Price = price;
	}
	
	
	
	
	
}
