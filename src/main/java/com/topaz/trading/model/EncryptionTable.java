package com.topaz.trading.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Table;

@Entity
@Table(name="encryption_tbl")
public class EncryptionTable implements Serializable{

	
	@javax.persistence.Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)	
	@Column(name="id")
	private Integer id;
	
	
	@Column(name="encryption")
	private String encryption;
	
	@Column(name="security_key")
	private String securitykey;


	public Integer getId() {
		return id;
	}


	public void setId(Integer id) {
		this.id = id;
	}


	public String getEncryption() {
		return encryption;
	}


	public void setEncryption(String encryption) {
		this.encryption = encryption;
	}


	public String getSecuritykey() {
		return securitykey;
	}


	public void setSecuritykey(String securitykey) {
		this.securitykey = securitykey;
	}
	
	
}
