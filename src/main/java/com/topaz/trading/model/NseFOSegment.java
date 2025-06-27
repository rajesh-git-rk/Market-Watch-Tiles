package com.topaz.trading.model;

import java.io.Serializable;

public class NseFOSegment implements Serializable {
	
	private String Token;
	
	private String asset_token;
	
	private String instrument_name;
	
	private String Symbol;
	
	private String Series;
	
	private String Filler1;
	
	private String expiry_date;
	
	private String strike_price;
	
	private String option_type;
	
	private String Segment_type;
	
	private String ca_level;
	
	private String Reserved_Identifier;
	
	private String Admission_type;
	
	private String issue_info_rate;
	
	private String Trading_status1;
	
	private String Eligibility1;
	
	private String Filler2;
	
	private String Trading_status2;
	
	private String Eligibility2;
	
	private String Filler3;
	
	private String Trading_status3;
	
	private String Eligibility3;
	
	private String Filler4;
	
	private String Trading_status4;
	
	private String Eligibility4;
	
	private String Filler5;
	
	private String issue_info_start_date;
	
	private String issue_info_ipd;
	
	private String issue_info_maturity_date;
	
	private String margin_percent;
	
	private String minimum_lot_size;
	
	private String board_lot_quantity;
	
	private String min_spread;
	
	private String issued_capital;
	
	private String volume_freeze_qty;
	
	private String warning_qty_of_outst_volm;
	
	private String date_time_admission;
	
	private String date_time_expulsion;
	
	private String date_time_re_admission;
	
	private String date_time_record_date;
	
	private String date_time_no_delivery_dates_start;
	
	private String date_time_no_delivery_dates_end;
	
	private String operating_ranges_low_price_range;
	
	private String operating_ranges_high_price_range;
	
	private String date_time_ex_date;
	
	private String book_closure_date_start;
	
	private String stock_book_closure_date_end;
	
	private String stock_record_date;
	
	private String exercise_start_date;
	
	private String exercise_end_date;
	
	private String ticker_selection;
	
	private String ca_old_token;
	
	private String Credit_rating;
	
	private String Stock_name;	
	
	private String Egm_agm;
	
	private String Interest_dividend;
	
	private String Rights_bonus;
	
	private String Mf_aon;
	
	private String Remarks;
	
	private String ex_style;
	
	private String ex_allowed;
	
	private String ex_rej_allowed;
	
	private String pl_allowed;
	
	private String Settlement_indicator;
	
	private String is_this_corp_adj;
	
	private String asset_symbol;
	
	private String Filler6;
	
	private String base_price;
	
	private String delete_flag;
	
	private String NseFOTimestamp;
	
	
	
	

	public String getToken() {
		return Token;
	}

	public void setToken(String token) {
		Token = token;
	}

	public String getAsset_token() {
		return asset_token;
	}

	public void setAsset_token(String asset_token) {
		this.asset_token = asset_token;
	}

	public String getInstrument_name() {
		return instrument_name;
	}

	public void setInstrument_name(String instrument_name) {
		this.instrument_name = instrument_name;
	}

	public String getSymbol() {
		return Symbol;
	}

	public void setSymbol(String symbol) {
		Symbol = symbol;
	}

	public String getSeries() {
		return Series;
	}

	public void setSeries(String series) {
		Series = series;
	}

	public String getFiller1() {
		return Filler1;
	}

	public void setFiller1(String filler1) {
		Filler1 = filler1;
	}

	public String getExpiry_date() {
		return expiry_date;
	}

	public void setExpiry_date(String expiry_date) {
		this.expiry_date = expiry_date;
	}

	public String getStrike_price() {
		return strike_price;
	}

	public void setStrike_price(String strike_price) {
		this.strike_price = strike_price;
	}

	public String getOption_type() {
		return option_type;
	}

	public void setOption_type(String option_type) {
		this.option_type = option_type;
	}

	public String getSegment_type() {
		return Segment_type;
	}

	public void setSegment_type(String segment_type) {
		Segment_type = segment_type;
	}

	public String getCa_level() {
		return ca_level;
	}

	public void setCa_level(String ca_level) {
		this.ca_level = ca_level;
	}

	public String getReserved_Identifier() {
		return Reserved_Identifier;
	}

	public void setReserved_Identifier(String reserved_Identifier) {
		Reserved_Identifier = reserved_Identifier;
	}

	public String getAdmission_type() {
		return Admission_type;
	}

	public void setAdmission_type(String admission_type) {
		Admission_type = admission_type;
	}

	public String getIssue_info_rate() {
		return issue_info_rate;
	}

	public void setIssue_info_rate(String issue_info_rate) {
		this.issue_info_rate = issue_info_rate;
	}

	public String getTrading_status1() {
		return Trading_status1;
	}

	public void setTrading_status1(String trading_status1) {
		Trading_status1 = trading_status1;
	}

	public String getEligibility1() {
		return Eligibility1;
	}

	public void setEligibility1(String eligibility1) {
		Eligibility1 = eligibility1;
	}

	public String getFiller2() {
		return Filler2;
	}

	public void setFiller2(String filler2) {
		Filler2 = filler2;
	}

	public String getTrading_status2() {
		return Trading_status2;
	}

	public void setTrading_status2(String trading_status2) {
		Trading_status2 = trading_status2;
	}

	public String getEligibility2() {
		return Eligibility2;
	}

	public void setEligibility2(String eligibility2) {
		Eligibility2 = eligibility2;
	}

	public String getFiller3() {
		return Filler3;
	}

	public void setFiller3(String filler3) {
		Filler3 = filler3;
	}

	public String getTrading_status3() {
		return Trading_status3;
	}

	public void setTrading_status3(String trading_status3) {
		Trading_status3 = trading_status3;
	}

	public String getEligibility3() {
		return Eligibility3;
	}

	public void setEligibility3(String eligibility3) {
		Eligibility3 = eligibility3;
	}

	public String getFiller4() {
		return Filler4;
	}

	public void setFiller4(String filler4) {
		Filler4 = filler4;
	}

	public String getTrading_status4() {
		return Trading_status4;
	}

	public void setTrading_status4(String trading_status4) {
		Trading_status4 = trading_status4;
	}

	public String getEligibility4() {
		return Eligibility4;
	}

	public void setEligibility4(String eligibility4) {
		Eligibility4 = eligibility4;
	}

	public String getFiller5() {
		return Filler5;
	}

	public void setFiller5(String filler5) {
		Filler5 = filler5;
	}

	public String getIssue_info_start_date() {
		return issue_info_start_date;
	}

	public void setIssue_info_start_date(String issue_info_start_date) {
		this.issue_info_start_date = issue_info_start_date;
	}

	public String getIssue_info_ipd() {
		return issue_info_ipd;
	}

	public void setIssue_info_ipd(String issue_info_ipd) {
		this.issue_info_ipd = issue_info_ipd;
	}

	public String getIssue_info_maturity_date() {
		return issue_info_maturity_date;
	}

	public void setIssue_info_maturity_date(String issue_info_maturity_date) {
		this.issue_info_maturity_date = issue_info_maturity_date;
	}

	public String getMargin_percent() {
		return margin_percent;
	}

	public void setMargin_percent(String margin_percent) {
		this.margin_percent = margin_percent;
	}

	public String getMinimum_lot_size() {
		return minimum_lot_size;
	}

	public void setMinimum_lot_size(String minimum_lot_size) {
		this.minimum_lot_size = minimum_lot_size;
	}

	public String getBoard_lot_quantity() {
		return board_lot_quantity;
	}

	public void setBoard_lot_quantity(String board_lot_quantity) {
		this.board_lot_quantity = board_lot_quantity;
	}

	public String getMin_spread() {
		return min_spread;
	}

	public void setMin_spread(String min_spread) {
		this.min_spread = min_spread;
	}

	public String getIssued_capital() {
		return issued_capital;
	}

	public void setIssued_capital(String issued_capital) {
		this.issued_capital = issued_capital;
	}

	public String getVolume_freeze_qty() {
		return volume_freeze_qty;
	}

	public void setVolume_freeze_qty(String volume_freeze_qty) {
		this.volume_freeze_qty = volume_freeze_qty;
	}

	public String getWarning_qty_of_outst_volm() {
		return warning_qty_of_outst_volm;
	}

	public void setWarning_qty_of_outst_volm(String warning_qty_of_outst_volm) {
		this.warning_qty_of_outst_volm = warning_qty_of_outst_volm;
	}

	public String getDate_time_admission() {
		return date_time_admission;
	}

	public void setDate_time_admission(String date_time_admission) {
		this.date_time_admission = date_time_admission;
	}

	public String getDate_time_expulsion() {
		return date_time_expulsion;
	}

	public void setDate_time_expulsion(String date_time_expulsion) {
		this.date_time_expulsion = date_time_expulsion;
	}

	public String getDate_time_re_admission() {
		return date_time_re_admission;
	}

	public void setDate_time_re_admission(String date_time_re_admission) {
		this.date_time_re_admission = date_time_re_admission;
	}

	public String getDate_time_record_date() {
		return date_time_record_date;
	}

	public void setDate_time_record_date(String date_time_record_date) {
		this.date_time_record_date = date_time_record_date;
	}

	public String getDate_time_no_delivery_dates_start() {
		return date_time_no_delivery_dates_start;
	}

	public void setDate_time_no_delivery_dates_start(String date_time_no_delivery_dates_start) {
		this.date_time_no_delivery_dates_start = date_time_no_delivery_dates_start;
	}

	public String getDate_time_no_delivery_dates_end() {
		return date_time_no_delivery_dates_end;
	}

	public void setDate_time_no_delivery_dates_end(String date_time_no_delivery_dates_end) {
		this.date_time_no_delivery_dates_end = date_time_no_delivery_dates_end;
	}

	public String getOperating_ranges_low_price_range() {
		return operating_ranges_low_price_range;
	}

	public void setOperating_ranges_low_price_range(String operating_ranges_low_price_range) {
		this.operating_ranges_low_price_range = operating_ranges_low_price_range;
	}

	public String getOperating_ranges_high_price_range() {
		return operating_ranges_high_price_range;
	}

	public void setOperating_ranges_high_price_range(String operating_ranges_high_price_range) {
		this.operating_ranges_high_price_range = operating_ranges_high_price_range;
	}

	public String getDate_time_ex_date() {
		return date_time_ex_date;
	}

	public void setDate_time_ex_date(String date_time_ex_date) {
		this.date_time_ex_date = date_time_ex_date;
	}

	public String getBook_closure_date_start() {
		return book_closure_date_start;
	}

	public void setBook_closure_date_start(String book_closure_date_start) {
		this.book_closure_date_start = book_closure_date_start;
	}

	public String getStock_book_closure_date_end() {
		return stock_book_closure_date_end;
	}

	public void setStock_book_closure_date_end(String stock_book_closure_date_end) {
		this.stock_book_closure_date_end = stock_book_closure_date_end;
	}

	public String getStock_record_date() {
		return stock_record_date;
	}

	public void setStock_record_date(String stock_record_date) {
		this.stock_record_date = stock_record_date;
	}

	public String getExercise_start_date() {
		return exercise_start_date;
	}

	public void setExercise_start_date(String exercise_start_date) {
		this.exercise_start_date = exercise_start_date;
	}

	public String getExercise_end_date() {
		return exercise_end_date;
	}

	public void setExercise_end_date(String exercise_end_date) {
		this.exercise_end_date = exercise_end_date;
	}

	public String getTicker_selection() {
		return ticker_selection;
	}

	public void setTicker_selection(String ticker_selection) {
		this.ticker_selection = ticker_selection;
	}

	public String getCa_old_token() {
		return ca_old_token;
	}

	public void setCa_old_token(String ca_old_token) {
		this.ca_old_token = ca_old_token;
	}

	public String getCredit_rating() {
		return Credit_rating;
	}

	public void setCredit_rating(String credit_rating) {
		Credit_rating = credit_rating;
	}

	public String getStock_name() {
		return Stock_name;
	}

	public void setStock_name(String stock_name) {
		Stock_name = stock_name;
	}

	public String getEgm_agm() {
		return Egm_agm;
	}

	public void setEgm_agm(String egm_agm) {
		Egm_agm = egm_agm;
	}

	public String getInterest_dividend() {
		return Interest_dividend;
	}

	public void setInterest_dividend(String interest_dividend) {
		Interest_dividend = interest_dividend;
	}

	public String getRights_bonus() {
		return Rights_bonus;
	}

	public void setRights_bonus(String rights_bonus) {
		Rights_bonus = rights_bonus;
	}

	public String getMf_aon() {
		return Mf_aon;
	}

	public void setMf_aon(String mf_aon) {
		Mf_aon = mf_aon;
	}

	public String getRemarks() {
		return Remarks;
	}

	public void setRemarks(String remarks) {
		Remarks = remarks;
	}

	public String getEx_style() {
		return ex_style;
	}

	public void setEx_style(String ex_style) {
		this.ex_style = ex_style;
	}

	public String getEx_allowed() {
		return ex_allowed;
	}

	public void setEx_allowed(String ex_allowed) {
		this.ex_allowed = ex_allowed;
	}

	public String getEx_rej_allowed() {
		return ex_rej_allowed;
	}

	public void setEx_rej_allowed(String ex_rej_allowed) {
		this.ex_rej_allowed = ex_rej_allowed;
	}

	public String getPl_allowed() {
		return pl_allowed;
	}

	public void setPl_allowed(String pl_allowed) {
		this.pl_allowed = pl_allowed;
	}

	public String getSettlement_indicator() {
		return Settlement_indicator;
	}

	public void setSettlement_indicator(String settlement_indicator) {
		Settlement_indicator = settlement_indicator;
	}

	public String getIs_this_corp_adj() {
		return is_this_corp_adj;
	}

	public void setIs_this_corp_adj(String is_this_corp_adj) {
		this.is_this_corp_adj = is_this_corp_adj;
	}

	public String getAsset_symbol() {
		return asset_symbol;
	}

	public void setAsset_symbol(String asset_symbol) {
		this.asset_symbol = asset_symbol;
	}

	public String getFiller6() {
		return Filler6;
	}

	public void setFiller6(String filler6) {
		Filler6 = filler6;
	}

	public String getBase_price() {
		return base_price;
	}

	public void setBase_price(String base_price) {
		this.base_price = base_price;
	}

	public String getDelete_flag() {
		return delete_flag;
	}

	public void setDelete_flag(String delete_flag) {
		this.delete_flag = delete_flag;
	}

	public String getNseFOTimestamp() {
		return NseFOTimestamp;
	}

	public void setNseFOTimestamp(String nseFOTimestamp) {
		NseFOTimestamp = nseFOTimestamp;
	}
	




}
