package com.topaz.trading.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Table;

	
	@Entity
	@Table(name="batch_script_tbl")
	public class BatchScript implements Serializable{

		
		@javax.persistence.Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
		
		@Column(name="batchscriptid")
		private Integer batchscriptid;
		
		@Column(name="weight")
		private String weight;
		
		@Column(name="nsetoken")
		private String nseToken;
		
		@Column(name="nsesymbol")
		private String nseSymbol;
		
		@Column(name="nseseries")
		private String nseSeries;
		
		@Column(name="nseinstrumenttype")
		private String nseInstrumentType;
		
		@Column(name="nseissuedcapital")
		private String nseIssuedCapital;
		
		@Column(name="nsecreditrating")
		private String nseCreditRating;
		
		@Column(name="nseboardlotquantity")
		private String nseBoardLotQuantity;
		
		@Column(name="nseticksize")
		private String nseTickSize;
		
		@Column(name="nsename")
		private String nseName;
		
		@Column(name="nseissuestartdate")
		private String nseIssueStartDate;
		
		@Column(name="nseissueipdate")
		private String nseIssueIPDate;
		
		@Column(name="nseissuematuritydate")
		private String nseIssueMaturityDate;
		
		@Column(name="nsefreezepercent")
		private String nseFreezePercent;
		
		@Column(name="nselistingdate")
		private String nseListingDate;
		
		@Column(name="nseexpulsiondate")
		private String nseExpulsionDate;
		
		@Column(name="nsereadmissiondate")
		private String nseReAdmissionDate;
		
		@Column(name="nseexdate")
		private String nseExDate;
		
		@Column(name="nserecorddate")
		private String nseRecordDate;
		
		@Column(name="nsefacevalue")
		private String nseFaceValue;
		
		@Column(name="nseisinno")
		private String nseISINNo;
		
		@Column(name="nseexchange")
		private String nseExchange;
		
		@Column(name="mcxinstrumentidentifier")
		private String mcxInstrumentIdentifier;
		
		@Column(name="mcxinstrumentcode")
		private String mcxInstrumentCode;
		
		@Column(name="mcxinstrumentseries")
		private String mcxInstrumentSeries;
		
		@Column(name="mcxproductstartdate")
		private String mcxProductStartDate;
		
		@Column(name="mcxlasttradingdate")
		private String mcxLastTradingDate;
		
		@Column(name="mcxlotsize")
		private String mcxLotSize;
		
		@Column(name="mcxticksize")
		private String mcxTickSize;
		
		@Column(name="mcxdeliverystartdate")
		private String mcxDeliveryStartDate;
		
		@Column(name="mcxdeliveryenddate")
		private String mcxDeliveryEndDate;
		
		@Column(name="mcxlastmodifieddate")
		private String mcxLastModifiedDate;
		
		@Column(name="mcxinstrumentinfo")
		private String mcxInstrumentInfo;
		
		@Column(name="mcxtenderperiodstartdate")
		private String mcxTenderPeriodStartDate;
		
		@Column(name="mcxtenderperiodenddate")
		private String mcxTenderPeriodEndDate;
		
		@Column(name="mcxnameunderlyingasset")
		private String mcxNameUnderlyingAsset;
		
		@Column(name="mcxinstrumentname")
		private String mcxInstrumentName;
		
		@Column(name="mcxoriginalexpirydate")
		private String mcxOriginalExpiryDate;
		
		@Column(name="mcxstrikeprice")
		private String mcxStrikePrice;
		
		@Column(name="mcxoptiontype")
		private String mcxOptionType;
		
		@Column(name="mcxexchange")
		private String mcxExchange;
		
		@Column(name="nfotoken")
		private String nfoToken;
		
		@Column(name="nfoinstrument_name")
		private String nfoinstrument_name;
		
		@Column(name="nfosymbol")
		private String nfoSymbol;
		
		@Column(name="nfoseries")
		private String nfoSeries;
		
		@Column(name="nfoexpiry_date")
		private String nfoexpiry_date;
		
		@Column(name="nfostrike_price")
		private String nfostrike_price;
		
		@Column(name="nfooption_type")
		private String nfooption_type;
		
		@Column(name="nfoissue_infostart_date")
		private String nfoissue_infostart_date;
		
		@Column(name="nfoissue_infomaturity_date")
		private String nfoissue_infomaturity_date;
		
		@Column(name="nfoboard_lot_quantity")
		private String nfoboard_lot_quantity;
		
		@Column(name="nfostockname")
		private String nfoStockname;
		
		@Column(name="nfoexchange")
		private String nfoExchange;
		
		@Column(name="nfominspread")
		private String nfominspread;
		
		
		

		public Integer getBatchscriptid() {
			return batchscriptid;
		}

		public void setBatchscriptid(Integer batchscriptid) {
			this.batchscriptid = batchscriptid;
		}

		public String getWeight() {
			return weight;
		}

		public void setWeight(String weight) {
			this.weight = weight;
		}

		public String getNseToken() {
			return nseToken;
		}

		public void setNseToken(String nseToken) {
			this.nseToken = nseToken;
		}

		public String getNseSymbol() {
			return nseSymbol;
		}

		public void setNseSymbol(String nseSymbol) {
			this.nseSymbol = nseSymbol;
		}

		public String getNseSeries() {
			return nseSeries;
		}

		public void setNseSeries(String nseSeries) {
			this.nseSeries = nseSeries;
		}

		public String getNseInstrumentType() {
			return nseInstrumentType;
		}

		public void setNseInstrumentType(String nseInstrumentType) {
			this.nseInstrumentType = nseInstrumentType;
		}

		public String getNseIssuedCapital() {
			return nseIssuedCapital;
		}

		public void setNseIssuedCapital(String nseIssuedCapital) {
			this.nseIssuedCapital = nseIssuedCapital;
		}

		public String getNseCreditRating() {
			return nseCreditRating;
		}

		public void setNseCreditRating(String nseCreditRating) {
			this.nseCreditRating = nseCreditRating;
		}

		public String getNseBoardLotQuantity() {
			return nseBoardLotQuantity;
		}

		public void setNseBoardLotQuantity(String nseBoardLotQuantity) {
			this.nseBoardLotQuantity = nseBoardLotQuantity;
		}

		public String getNseTickSize() {
			return nseTickSize;
		}

		public void setNseTickSize(String nseTickSize) {
			this.nseTickSize = nseTickSize;
		}

		public String getNseName() {
			return nseName;
		}

		public void setNseName(String nseName) {
			this.nseName = nseName;
		}

		public String getNseIssueStartDate() {
			return nseIssueStartDate;
		}

		public void setNseIssueStartDate(String nseIssueStartDate) {
			this.nseIssueStartDate = nseIssueStartDate;
		}

		public String getNseIssueIPDate() {
			return nseIssueIPDate;
		}

		public void setNseIssueIPDate(String nseIssueIPDate) {
			this.nseIssueIPDate = nseIssueIPDate;
		}

		public String getNseIssueMaturityDate() {
			return nseIssueMaturityDate;
		}

		public void setNseIssueMaturityDate(String nseIssueMaturityDate) {
			this.nseIssueMaturityDate = nseIssueMaturityDate;
		}

		public String getNseFreezePercent() {
			return nseFreezePercent;
		}

		public void setNseFreezePercent(String nseFreezePercent) {
			this.nseFreezePercent = nseFreezePercent;
		}

		public String getNseListingDate() {
			return nseListingDate;
		}

		public void setNseListingDate(String nseListingDate) {
			this.nseListingDate = nseListingDate;
		}

		public String getNseExpulsionDate() {
			return nseExpulsionDate;
		}

		public void setNseExpulsionDate(String nseExpulsionDate) {
			this.nseExpulsionDate = nseExpulsionDate;
		}

		public String getNseReAdmissionDate() {
			return nseReAdmissionDate;
		}

		public void setNseReAdmissionDate(String nseReAdmissionDate) {
			this.nseReAdmissionDate = nseReAdmissionDate;
		}

		public String getNseExDate() {
			return nseExDate;
		}

		public void setNseExDate(String nseExDate) {
			this.nseExDate = nseExDate;
		}

		public String getNseRecordDate() {
			return nseRecordDate;
		}

		public void setNseRecordDate(String nseRecordDate) {
			this.nseRecordDate = nseRecordDate;
		}

		public String getNseFaceValue() {
			return nseFaceValue;
		}

		public void setNseFaceValue(String nseFaceValue) {
			this.nseFaceValue = nseFaceValue;
		}

		public String getNseISINNo() {
			return nseISINNo;
		}

		public void setNseISINNo(String nseISINNo) {
			this.nseISINNo = nseISINNo;
		}

		public String getNseExchange() {
			return nseExchange;
		}

		public void setNseExchange(String nseExchange) {
			this.nseExchange = nseExchange;
		}

		public String getMcxInstrumentIdentifier() {
			return mcxInstrumentIdentifier;
		}

		public void setMcxInstrumentIdentifier(String mcxInstrumentIdentifier) {
			this.mcxInstrumentIdentifier = mcxInstrumentIdentifier;
		}

		public String getMcxInstrumentCode() {
			return mcxInstrumentCode;
		}

		public void setMcxInstrumentCode(String mcxInstrumentCode) {
			this.mcxInstrumentCode = mcxInstrumentCode;
		}

		public String getMcxInstrumentSeries() {
			return mcxInstrumentSeries;
		}

		public void setMcxInstrumentSeries(String mcxInstrumentSeries) {
			this.mcxInstrumentSeries = mcxInstrumentSeries;
		}

		public String getMcxProductStartDate() {
			return mcxProductStartDate;
		}

		public void setMcxProductStartDate(String mcxProductStartDate) {
			this.mcxProductStartDate = mcxProductStartDate;
		}

		public String getMcxLastTradingDate() {
			return mcxLastTradingDate;
		}

		public void setMcxLastTradingDate(String mcxLastTradingDate) {
			this.mcxLastTradingDate = mcxLastTradingDate;
		}

		public String getMcxLotSize() {
			return mcxLotSize;
		}

		public void setMcxLotSize(String mcxLotSize) {
			this.mcxLotSize = mcxLotSize;
		}

		public String getMcxTickSize() {
			return mcxTickSize;
		}

		public void setMcxTickSize(String mcxTickSize) {
			this.mcxTickSize = mcxTickSize;
		}

		public String getMcxDeliveryStartDate() {
			return mcxDeliveryStartDate;
		}

		public void setMcxDeliveryStartDate(String mcxDeliveryStartDate) {
			this.mcxDeliveryStartDate = mcxDeliveryStartDate;
		}

		public String getMcxDeliveryEndDate() {
			return mcxDeliveryEndDate;
		}

		public void setMcxDeliveryEndDate(String mcxDeliveryEndDate) {
			this.mcxDeliveryEndDate = mcxDeliveryEndDate;
		}

		public String getMcxLastModifiedDate() {
			return mcxLastModifiedDate;
		}

		public void setMcxLastModifiedDate(String mcxLastModifiedDate) {
			this.mcxLastModifiedDate = mcxLastModifiedDate;
		}

		public String getMcxInstrumentInfo() {
			return mcxInstrumentInfo;
		}

		public void setMcxInstrumentInfo(String mcxInstrumentInfo) {
			this.mcxInstrumentInfo = mcxInstrumentInfo;
		}

		public String getMcxTenderPeriodStartDate() {
			return mcxTenderPeriodStartDate;
		}

		public void setMcxTenderPeriodStartDate(String mcxTenderPeriodStartDate) {
			this.mcxTenderPeriodStartDate = mcxTenderPeriodStartDate;
		}

		public String getMcxTenderPeriodEndDate() {
			return mcxTenderPeriodEndDate;
		}

		public void setMcxTenderPeriodEndDate(String mcxTenderPeriodEndDate) {
			this.mcxTenderPeriodEndDate = mcxTenderPeriodEndDate;
		}

		public String getMcxNameUnderlyingAsset() {
			return mcxNameUnderlyingAsset;
		}

		public void setMcxNameUnderlyingAsset(String mcxNameUnderlyingAsset) {
			this.mcxNameUnderlyingAsset = mcxNameUnderlyingAsset;
		}

		public String getMcxInstrumentName() {
			return mcxInstrumentName;
		}

		public void setMcxInstrumentName(String mcxInstrumentName) {
			this.mcxInstrumentName = mcxInstrumentName;
		}

		public String getMcxOriginalExpiryDate() {
			return mcxOriginalExpiryDate;
		}

		public void setMcxOriginalExpiryDate(String mcxOriginalExpiryDate) {
			this.mcxOriginalExpiryDate = mcxOriginalExpiryDate;
		}

		public String getMcxStrikePrice() {
			return mcxStrikePrice;
		}

		public void setMcxStrikePrice(String mcxStrikePrice) {
			this.mcxStrikePrice = mcxStrikePrice;
		}

		public String getMcxOptionType() {
			return mcxOptionType;
		}

		public void setMcxOptionType(String mcxOptionType) {
			this.mcxOptionType = mcxOptionType;
		}

		public String getMcxExchange() {
			return mcxExchange;
		}

		public void setMcxExchange(String mcxExchange) {
			this.mcxExchange = mcxExchange;
		}

		public String getNfoToken() {
			return nfoToken;
		}

		public void setNfoToken(String nfoToken) {
			this.nfoToken = nfoToken;
		}

		public String getNfoinstrument_name() {
			return nfoinstrument_name;
		}

		public void setNfoinstrument_name(String nfoinstrument_name) {
			this.nfoinstrument_name = nfoinstrument_name;
		}

		public String getNfoSymbol() {
			return nfoSymbol;
		}

		public void setNfoSymbol(String nfoSymbol) {
			this.nfoSymbol = nfoSymbol;
		}

		public String getNfoSeries() {
			return nfoSeries;
		}

		public void setNfoSeries(String nfoSeries) {
			this.nfoSeries = nfoSeries;
		}

		public String getNfoexpiry_date() {
			return nfoexpiry_date;
		}

		public void setNfoexpiry_date(String nfoexpiry_date) {
			this.nfoexpiry_date = nfoexpiry_date;
		}

		public String getNfostrike_price() {
			return nfostrike_price;
		}

		public void setNfostrike_price(String nfostrike_price) {
			this.nfostrike_price = nfostrike_price;
		}

		public String getNfooption_type() {
			return nfooption_type;
		}

		public void setNfooption_type(String nfooption_type) {
			this.nfooption_type = nfooption_type;
		}

		public String getNfoissue_infostart_date() {
			return nfoissue_infostart_date;
		}

		public void setNfoissue_infostart_date(String nfoissue_infostart_date) {
			this.nfoissue_infostart_date = nfoissue_infostart_date;
		}

		public String getNfoissue_infomaturity_date() {
			return nfoissue_infomaturity_date;
		}

		public void setNfoissue_infomaturity_date(String nfoissue_infomaturity_date) {
			this.nfoissue_infomaturity_date = nfoissue_infomaturity_date;
		}

		public String getNfoboard_lot_quantity() {
			return nfoboard_lot_quantity;
		}

		public void setNfoboard_lot_quantity(String nfoboard_lot_quantity) {
			this.nfoboard_lot_quantity = nfoboard_lot_quantity;
		}

		public String getNfoStockname() {
			return nfoStockname;
		}

		public void setNfoStockname(String nfoStockname) {
			this.nfoStockname = nfoStockname;
		}

		public String getNfoExchange() {
			return nfoExchange;
		}

		public void setNfoExchange(String nfoExchange) {
			this.nfoExchange = nfoExchange;
		}

		public String getNfominspread() {
			return nfominspread;
		}

		public void setNfominspread(String nfominspread) {
			this.nfominspread = nfominspread;
		}
		
		
		
		
		
		
		
		
		
		
		
		
		

}
