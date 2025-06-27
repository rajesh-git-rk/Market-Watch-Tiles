package com.topaz.trading.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Table;
	

@Entity
@Table(name="order_notification_tbl")
public class OrderNotification implements Serializable{
	
	@javax.persistence.Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

	@Column(name="id")
	private Integer id;
	
	@Column(name="userid")
	private String userId;
	
	@Column(name="scriptname")
	private String scriptname;
	
	@Column(name="price")
	private String price;	
	
	@Column(name="exchange")
	private String exchange;
	
	@Column(name="displayname")
	private String displayname;
	
	@Column(name="notification_date")
	private String notificationdate;
	
	@Column(name="notification_time")
	private String notificationtime;
	
	@Column(name="qty")
	private String qty;
	
	@Column(name="product")
	private String product;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getScriptname() {
		return scriptname;
	}

	public void setScriptname(String scriptname) {
		this.scriptname = scriptname;
	}

	public String getPrice() {
		return price;
	}

	public void setPrice(String price) {
		this.price = price;
	}

	public String getExchange() {
		return exchange;
	}

	public void setExchange(String exchange) {
		this.exchange = exchange;
	}

	public String getDisplayname() {
		return displayname;
	}

	public void setDisplayname(String displayname) {
		this.displayname = displayname;
	}

	public String getNotificationdate() {
		return notificationdate;
	}

	public void setNotificationdate(String notificationdate) {
		this.notificationdate = notificationdate;
	}

	public String getNotificationtime() {
		return notificationtime;
	}

	public void setNotificationtime(String notificationtime) {
		this.notificationtime = notificationtime;
	}

	public String getQty() {
		return qty;
	}

	public void setQty(String qty) {
		this.qty = qty;
	}

	public String getProduct() {
		return product;
	}

	public void setProduct(String product) {
		this.product = product;
	}
	
	
	
}
