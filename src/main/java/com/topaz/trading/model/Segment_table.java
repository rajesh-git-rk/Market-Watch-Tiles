package com.topaz.trading.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="segment_tbl")
public class Segment_table implements Serializable{
	
	
	
	@javax.persistence.Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)	
	@Column(name="id")
	private Integer id;
	
	@Column(name="name")
	private String name;
	
	@Column(name="accountnumber")
	private String accountnumber;
	
	@Column(name="segmenttype")
	private String segmenttype;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAccountnumber() {
		return accountnumber;
	}

	public void setAccountnumber(String accountnumber) {
		this.accountnumber = accountnumber;
	}

	public String getSegmenttype() {
		return segmenttype;
	}

	public void setSegmenttype(String segmenttype) {
		this.segmenttype = segmenttype;
	}
	
	
	
	
	
	
	

}
