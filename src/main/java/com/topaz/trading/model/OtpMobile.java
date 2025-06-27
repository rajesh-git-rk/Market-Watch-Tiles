package com.topaz.trading.model;


import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="otp_tbl")
public class OtpMobile implements Serializable{

	
//	@javax.persistence.Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
	
	@Id	
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;
	

	
	@Column(name="clientid")
	private String clientid;
	
	@Column(name="emailid")
	private String emailid;
	
	@Column(name="phonenumber")
	private String phonenumber;
	
	@Column(name="pannumber")
	private String pannumber;
	
	@Column(name="otp")
	private String otp;
	
	
	@Column(name="mode")
	private String mode;
	
	

	
	
	
	
	

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

	public String getEmailid() {
		return emailid;
	}

	public void setEmailid(String emailid) {
		this.emailid = emailid;
	}

	public String getPhonenumber() {
		return phonenumber;
	}

	public void setPhonenumber(String phonenumber) {
		this.phonenumber = phonenumber;
	}

	public String getOtp() {
		return otp;
	}

	public void setOtp(String otp) {
		this.otp = otp;
	}

	public String getPannumber() {
		return pannumber;
	}

	public void setPannumber(String pannumber) {
		this.pannumber = pannumber;
	}

	public String getMode() {
		return mode;
	}

	public void setMode(String mode) {
		this.mode = mode;
	}

	
	
	
	
	
	
	
}