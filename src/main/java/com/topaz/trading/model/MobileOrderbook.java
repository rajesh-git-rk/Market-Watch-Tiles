package com.topaz.trading.model;

import java.io.Serializable;

public class MobileOrderbook implements Serializable {

	//orderbook
	private String s_prdt_ali;
	private String uid;
	
	//modifyorder
	private String actid;
	private String exchangeseg;
	private String tsym;
	private String nstordno;
	private String transtype;
	private String prctype;
	private String price;
	private String qty;
	private String dscqty;
	private String trgprc;
	private String validity;
	private String filledqty;
	private String pcode;
	private String mktpro;
	private String dateDays;
	private String criteriaAttribute;
	private String orderSource;
	private String cnt;   //Number of strike to return on Option chain put and call  
	
	// ordercancel
	
	private String sTradeSymbol;
	private String sExch;
	
	// position convert
	
   private String positionfillid;
   private String positionpcode;
   private String positionpchange;
   private String positionnstord;
	
	public String getS_prdt_ali() {
		return s_prdt_ali;
	}
	public void setS_prdt_ali(String s_prdt_ali) {
		this.s_prdt_ali = s_prdt_ali;
	}
	public String getUid() {
		return uid;
	}
	public void setUid(String uid) {
		this.uid = uid;
	}
	public String getActid() {
		return actid;
	}
	public void setActid(String actid) {
		this.actid = actid;
	}
	public String getExchangeseg() {
		return exchangeseg;
	}
	public void setExchangeseg(String exchangeseg) {
		this.exchangeseg = exchangeseg;
	}
	public String getTsym() {
		return tsym;
	}
	public void setTsym(String tsym) {
		this.tsym = tsym;
	}
	public String getNstordno() {
		return nstordno;
	}
	public void setNstordno(String nstordno) {
		this.nstordno = nstordno;
	}
	public String getTranstype() {
		return transtype;
	}
	public void setTranstype(String transtype) {
		this.transtype = transtype;
	}
	public String getPrctype() {
		return prctype;
	}
	public void setPrctype(String prctype) {
		this.prctype = prctype;
	}
	public String getPrice() {
		return price;
	}
	public void setPrice(String price) {
		this.price = price;
	}
	public String getQty() {
		return qty;
	}
	public void setQty(String qty) {
		this.qty = qty;
	}
	public String getDscqty() {
		return dscqty;
	}
	public void setDscqty(String dscqty) {
		this.dscqty = dscqty;
	}
	public String getTrgprc() {
		return trgprc;
	}
	public void setTrgprc(String trgprc) {
		this.trgprc = trgprc;
	}
	public String getValidity() {
		return validity;
	}
	public void setValidity(String validity) {
		this.validity = validity;
	}
	public String getFilledqty() {
		return filledqty;
	}
	public void setFilledqty(String filledqty) {
		this.filledqty = filledqty;
	}
	public String getPcode() {
		return pcode;
	}
	public void setPcode(String pcode) {
		this.pcode = pcode;
	}
	public String getMktpro() {
		return mktpro;
	}
	public void setMktpro(String mktpro) {
		this.mktpro = mktpro;
	}
	public String getDateDays() {
		return dateDays;
	}
	public void setDateDays(String dateDays) {
		this.dateDays = dateDays;
	}
	public String getCriteriaAttribute() {
		return criteriaAttribute;
	}
	public void setCriteriaAttribute(String criteriaAttribute) {
		this.criteriaAttribute = criteriaAttribute;
	}
	public String getOrderSource() {
		return orderSource;
	}
	public void setOrderSource(String orderSource) {
		this.orderSource = orderSource;
	}
	public String getsTradeSymbol() {
		return sTradeSymbol;
	}
	public void setsTradeSymbol(String sTradeSymbol) {
		this.sTradeSymbol = sTradeSymbol;
	}
	public String getsExch() {
		return sExch;
	}
	public void setsExch(String sExch) {
		this.sExch = sExch;
	}
	public String getPositionfillid() {
		return positionfillid;
	}
	public void setPositionfillid(String positionfillid) {
		this.positionfillid = positionfillid;
	}
	public String getPositionpcode() {
		return positionpcode;
	}
	public void setPositionpcode(String positionpcode) {
		this.positionpcode = positionpcode;
	}
	public String getPositionpchange() {
		return positionpchange;
	}
	public void setPositionpchange(String positionpchange) {
		this.positionpchange = positionpchange;
	}
	public String getPositionnstord() {
		return positionnstord;
	}
	public void setPositionnstord(String positionnstord) {
		this.positionnstord = positionnstord;
	}
	public String getCnt() {
		return cnt;
	}
	public void setCnt(String cnt) {
		this.cnt = cnt;
	}
	
	
	
	
	
	
}
