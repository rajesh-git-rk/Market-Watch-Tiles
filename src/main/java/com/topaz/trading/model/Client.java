package com.topaz.trading.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Table;

@Entity
@Table(name="client_tbl")
public class Client implements Serializable{

	
	@javax.persistence.Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

	@Column(name="id")
	private Integer id;
	
	@Column(name="clientid")
	private String clientid;
	
	@Column(name="password")
	private String password;
	
	@Column(name="tpin")
	private String tpin;
	

	@Column(name="fingerprintid")
	private Integer fingerprintid;
	
	

	

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getClientid() {
		return clientid;
	}

	public void setClientid(String clientid) {
		this.clientid = clientid;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getTpin() {
		return tpin;
	}

	public void setTpin(String tpin) {
		this.tpin = tpin;
	}

	public Integer getFingerprintid() {
		return fingerprintid;
	}

	public void setFingerprintid(Integer fingerprintid) {
		this.fingerprintid = fingerprintid;
	}

	
	
	
	
}
