package com.topaz.trading.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Table;

@Entity
@Table(name="settlementdownload_tbl")
public class SettlementDownload implements Serializable{

		
		@javax.persistence.Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
		
		@Column(name="id")
		private Integer id;
		
		@Column(name="settlementtype")
		private String settlementtype;
		
		@Column(name="settlementno")
		private String settlementno;
		
		@Column(name="tradestartdate")
		private String tradestartdate;
		
		@Column(name="tradeenddate")
		private String tradeenddate;
		
		@Column(name="fundspayindate")
		private String fundspayindate;
		
		@Column(name="fundspayoutdate")
		private String fundspayoutdate;
		
		@Column(name="securitypayindate")
		private String securitypayindate;
		
		@Column(name="securitypayoutdate")
		private String securitypayoutdate;
		
		@Column(name="finalobligationdate")
		private String finalobligationdate;
		
		@Column(name="settlementactive")
		private String settlementactive;
		
		

		public Integer getId() {
			return id;
		}

		public void setId(Integer id) {
			this.id = id;
		}

		public String getSettlementtype() {
			return settlementtype;
		}

		public void setSettlementtype(String settlementtype) {
			this.settlementtype = settlementtype;
		}

		public String getSettlementno() {
			return settlementno;
		}

		public void setSettlementno(String settlementno) {
			this.settlementno = settlementno;
		}

		public String getTradestartdate() {
			return tradestartdate;
		}

		public void setTradestartdate(String tradestartdate) {
			this.tradestartdate = tradestartdate;
		}

		public String getTradeenddate() {
			return tradeenddate;
		}

		public void setTradeenddate(String tradeenddate) {
			this.tradeenddate = tradeenddate;
		}

		public String getFundspayindate() {
			return fundspayindate;
		}

		public void setFundspayindate(String fundspayindate) {
			this.fundspayindate = fundspayindate;
		}

		public String getFundspayoutdate() {
			return fundspayoutdate;
		}

		public void setFundspayoutdate(String fundspayoutdate) {
			this.fundspayoutdate = fundspayoutdate;
		}

		public String getSecuritypayindate() {
			return securitypayindate;
		}

		public void setSecuritypayindate(String securitypayindate) {
			this.securitypayindate = securitypayindate;
		}

		public String getSecuritypayoutdate() {
			return securitypayoutdate;
		}

		public void setSecuritypayoutdate(String securitypayoutdate) {
			this.securitypayoutdate = securitypayoutdate;
		}

		public String getFinalobligationdate() {
			return finalobligationdate;
		}

		public void setFinalobligationdate(String finalobligationdate) {
			this.finalobligationdate = finalobligationdate;
		}

		public String getSettlementactive() {
			return settlementactive;
		}

		public void setSettlementactive(String settlementactive) {
			this.settlementactive = settlementactive;
		}
		
		

}
