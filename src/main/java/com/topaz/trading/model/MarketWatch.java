package com.topaz.trading.model;


import java.io.Serializable;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="market_watch_name")
public class MarketWatch implements Serializable{

	
	@javax.persistence.Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	
	@Column(name="id")
	private Integer marketwatchid;
	
	
	@Column(name="userid")
	private String userId;
	
	
	@Column(name="marketwatch_name")
	private String marketwatch_name;
	

	public Integer getMarketwatchid() {
		return marketwatchid;
	}


	public void setMarketwatchid(Integer marketwatchid) {
		this.marketwatchid = marketwatchid;
	}


	public String getUserId() {
		return userId;
	}


	public void setUserId(String userId) {
		this.userId = userId;
	}


	public String getMarketwatch_name() {
		return marketwatch_name;
	}


	public void setMarketwatch_name(String marketwatch_name) {
		this.marketwatch_name = marketwatch_name;
	}

	
	
	
}
