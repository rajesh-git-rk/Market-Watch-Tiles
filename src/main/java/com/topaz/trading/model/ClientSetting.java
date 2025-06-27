package com.topaz.trading.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="client_setting")
public class ClientSetting implements Serializable{

	
	@javax.persistence.Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

	@Column(name="id")
	private Integer id;

	@Column(name="clientid")
	private String clientid;
	
	@Column(name="sortingbyfield")
	private String sortingbyfield;
	
	@Column(name="sortingbyorder")
	private String sortingbyorder;

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

	public String getSortingbyfield() {
		return sortingbyfield;
	}

	public void setSortingbyfield(String sortingbyfield) {
		this.sortingbyfield = sortingbyfield;
	}

	public String getSortingbyorder() {
		return sortingbyorder;
	}

	public void setSortingbyorder(String sortingbyorder) {
		this.sortingbyorder = sortingbyorder;
	}
	
	
	
	
	
	
	
	
	
	

}
