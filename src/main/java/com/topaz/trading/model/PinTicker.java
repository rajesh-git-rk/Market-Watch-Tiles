package com.topaz.trading.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="pinticker_tbl")
public class PinTicker implements Serializable{
	
	
	
	@Id	
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;
	

	
	@Column(name="tokenid")
	private String tokenId;
	
	@Column(name="scriptname")
	private String scriptname;
	
	@Column(name="position")
	private String position;
	
	@Column(name="exchseries")
	private String exchseries;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getTokenId() {
		return tokenId;
	}

	public void setTokenId(String tokenId) {
		this.tokenId = tokenId;
	}

	public String getScriptname() {
		return scriptname;
	}

	public void setScriptname(String scriptname) {
		this.scriptname = scriptname;
	}

	public String getPosition() {
		return position;
	}

	public void setPosition(String position) {
		this.position = position;
	}

	public String getExchseries() {
		return exchseries;
	}

	public void setExchseries(String exchseries) {
		this.exchseries = exchseries;
	}

	
	
	
	
	
}
