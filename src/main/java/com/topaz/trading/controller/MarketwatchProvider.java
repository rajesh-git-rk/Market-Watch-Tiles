package com.topaz.trading.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Component;

@Component
@PropertySource("classpath:application.properties")
public class MarketwatchProvider {
	
	    @Value("${Intialkey.url}")
	    String InitialKeyurl;

	    @Value("${preauthenticationkey.url}")
	    String PreAuthenticationKey;

	    @Value("${ValidPwd.url}")
	    String ValidPwdurl;
	    
	    @Value("${login.url}")
	    String loginurl;
	    

		@Value("${CheckPANDOB.url}")
	    String CheckPANDOBurl;
		
		@Value("${ForgotPassword.url}")
	    String ForgotPasswordurl;
		
		@Value("${Reset2FA.url}")
	    String Reset2FAurl;
		
		
		@Value("${UnblockUser.url}")
	    String UnblockUserurl;

	    
	    @Value("${SaveAns.url}")
	    String SaveAnsurl;
	    
	    @Value("${ValidAns.url}")
	    String ValidAnsurl;
	    
	    
	    @Value("${Changepwd.url}")
	    String Changepwdurl;
	    
	   @Value("${SetPassword.url}")
	   String SetPasswordurl;
	    
	   @Value("${Register.Question}")
	   String RegisterQuestion;
	   
	   @Value("${AnswertheQuestion}")
	   String AnswertheQuestion;
	   
	   @Value("${Logout.url}")
	   String Logouturl;
	   
	   @Value("${PlaceOrder.url}")
	   String PlaceOrderurl;
	   
	   
	   @Value("${PlaceGTDOrder.url}")
	   String PlaceGTDOrderurl;
	   
	   @Value("${DefaultLogin.url}")
	   String DefaultLoginurl;
	   
	   @Value("${Bracketorder.url}")
	   String Bracketorderurl;
	   
	   
	   @Value("${OrderBook.url}")
		String OrderBookurl;
		
		@Value("${TradeBook.url}")
		String TradeBookurl;
		
		@Value("${ModifyOrder.url}")
		String ModifyOrderurl;
		
		@Value("${CancelOrder.url}")
		String CancelOrderurl;
		
		@Value("${ExecuteExitOrder.url}")
		String ExecuteExitOrderurl;
		
		@Value("${OrderHistory.url}")
		String OrderHistoryurl;
		
		@Value("${PositionConvertion.url}")
		String PositionConvertionurl;
	   
		@Value("${PositionBook.url}")
		String PositionBookurl;
		
		
		@Value("${SquareOffPosition.url}")
		String SquareOffPositionurl;
		
		
		@Value("${Holding.url}")
		String Holdingurl;
		
		
		@Value("${Limits.url}")
		String Limitsurl;
		
		@Value("${Payout.url}") 
		String Payouturl;
		
		@Value("${Payin.url}")
		String Payinurl;
		
		
		@Value("${Accountdetails.url}")
		String Accountdetailsurl;
		
		
		@Value("${Sender.EmailID}")
		String SenderEmailID;
		
		@Value("${sms.Apikey}")
		String smsApikey;
		
		
		@Value("${ExchangeMessage.url}")
		String ExchangeMessageurl;
		
		
		@Value("${MarketStatus.url}")
		String MarketStatusurl;
		
		   
			@Value("${ShowQuote.url}")
		String showQuoteUrl;
			

			@Value("${ShowMarketPicture.url}")
			String showMarketPictureUrl;
			
//			CDSL
			@Value("${cdsl.SecretKey}")
			String cdslSecretKey;
			
			@Value("${edis.verifyurl}")
			String edisverifyurl;
			
			
			@Value("${edis.responseurl}")
			String edisresponseurl;
			
			@Value("${edis.returnurl}")
			String edisreturnurl;
			
			
			//Holing BO_TPIN_Generation
			
			@Value("${BoTpinGeneration}")
			String  BoTpinGenerationUrl;
			
			
			//Kamabala_API URL's
			
			@Value("${imei}")
			String imei;
			
			@Value("${kambala.source}")
			String kambalaSource;
			
			
			
			@Value("${kambala.apkversion}")
			String kambalaApkversion;
			
			@Value("${kambala.VendorCode}")
			String kambalaVendorCode;
			
			
			@Value("${kambala.factor2}")
			String kambalafactor2;
			
			
			@Value("${kambala.Apiuser}")
			String kambalaApiuser;
			
			
			@Value("${loginkambala.url}")
			String loginkambalaUrl;
			
			@Value("${logoutkambala.url}")
			String logoutkambalaUrl;
			
			@Value("${hstokenkambala.url}")
			String hstokenkambalaUrl;
			
			@Value("${userdetailskambala.url}")
			String userdetailskambalaUrl;
			
			@Value("${clientdetailskambala.url}")
			String clientdetailskambalaUrl;
			
			@Value("${forgotpasswordkambala.url}")
			String forgotpasswordkambalaUrl;
			


			@Value("${changepasswordkambala.url}")
			String changepasswordkambalaUrl;

			@Value("${mwlistnameskambala.url}")
			String mwlistnameskambalaUrl;

			@Value("${marketwatchlistkambala.url}")
			String marketwatchlistkambalaUrl;


			@Value("${placeorderkambala.url}")
			String placeorderkambalaUrl;
			
			@Value("${SpanCalckambala.url}")
			String SpanCalckambalaUrl;
			
			@Value("${positionsbookkambala.url}")
			String positionsbookkambalaUrl;
			
			@Value("${holdingskambala.url}")
			String holdingskambalaUrl;
			
			@Value("${fundslimitkambala.url}")
			String  fundslimitkambalaUrl;
			
			@Value("${payinLinkkambala.url}")
			String  payinLinkkambalaUrl;

			@Value("${payoutLinkkambala.url}")
			String  payoutLinkkambalaUrl;
			
			@Value("${OptionChainkambala.url}")
			String OptionChainkambalaUrl;
			
			@Value("${GetPayinReport.url}")
			String GetPayinReportUrl;
			
			@Value("${GetPayoutReport.url}")
			String GetPayoutReportUrl;
			
			
			@Value("${kambala.OrderBook.url}")
			String kambalaOrderBookUrl;
			
			@Value("${kambala.CancelOrder.url}")
			String kambalaCancelOrderUrl;
			
			@Value("${kambala.SingleOrdHist.url}")
			String kambalaSingleOrdHistUrl;
			
			
			@Value("${kambala.TradeBook.url}")
			String kambalaTradeBookUrl;
			
			@Value("${kambala.ProductConversion.url}")
			String kambalaProductConversionUrl;
			
			@Value("${kambala.ModifyOrder.url}")
			String kambalaModifyOrderUrl;
			
			@Value("${kambala.SearchScrip.url}")
			String kambalaSearchScripUrl;
			
			@Value("${kambala.AddMultiScripsToMW.url}")
			String kambalaAddMultiScripsToMWUrl;
			
			@Value("${kambala.DeleteMultiMWScrips.url}")
			String kambalaDeleteMultiMWScripsUrl;

			@Value("${kambala.SetAlert.url}")
			String kambalaSetAlertUrl;
			
			@Value("${kambala.CancelAlert.url}")
			String kambalaCancelAlertUrl;
			
			@Value("${kambala.ModifyAlert.url}")
			String kambalaModifyAlertUrl;
			
			@Value("${kambala.GetPendingAlert.url}")
			String kambalaGetPendingAlertUrl;
			
			@Value("${kambala.ExchMsg.url}")
			String kambalaExchMsgUrl;
			
			
			
			
			
			
			
			
			
			
			
			
			
//			Mobile API
			@Value("${mobilelogin.url}")
			String  mobileloginUrl;
	
			
			@Value("${mobilesmsotp.url}")
			String  mobilesmsotpUrl;
			
			@Value("${mobileemailotp.url}")
			String  mobileemailotpUrl;
			
			@Value("${mobileotpverify.url}")
			String  mobileotpverifyUrl;
			
			@Value("${mobileloginmechanismtwo.url}")
			String  mobileloginmechanismtwoUrl;
			
			
			@Value("${OptionChain.url}")
			String  OptionChainUrl;
		
			
			@Value("${Sortingbydefaultfield}")
			String  Sortingbydefaultfield;
					
					
			@Value("${SortingbydefaultOrder}")
			String  SortingbydefaultOrder;	
			
			@Value("${kambala.search.result}")
			String kambalaSearchResult;
			
			@Value("${kambala.GetSecurityInfo.url}")
			String kambalaGetSecurityInfoUrl;
			
			
		public String getInitialKeyurl() {
		return InitialKeyurl;
	}
		

	public void setInitialKeyurl(String initialKeyurl) {
		InitialKeyurl = initialKeyurl;
	}

	public String getPreAuthenticationKey() {
		return PreAuthenticationKey;
	}

	public void setPreAuthenticationKey(String preAuthenticationKey) {
		PreAuthenticationKey = preAuthenticationKey;
	}

		public String getValidPwdurl() {
			return ValidPwdurl;
		}

		public void setValidPwdurl(String validPwdurl) {
			ValidPwdurl = validPwdurl;
		}

		public String getLoginurl() {
			return loginurl;
		}

		public void setLoginurl(String loginurl) {
			this.loginurl = loginurl;
		}
		
		public String getCheckPANDOBurl() {
			return CheckPANDOBurl;
		}


		public void setCheckPANDOBurl(String checkPANDOBurl) {
			CheckPANDOBurl = checkPANDOBurl;
		}

		public String getForgotPasswordurl() {
			return ForgotPasswordurl;
		}


		public void setForgotPasswordurl(String forgotPasswordurl) {
			ForgotPasswordurl = forgotPasswordurl;
		}

		public String getReset2FAurl() {
			return Reset2FAurl;
		}


		public void setReset2FAurl(String reset2fAurl) {
			Reset2FAurl = reset2fAurl;
		}


		public String getUnblockUserurl() {
			return UnblockUserurl;
		}


		public void setUnblockUserurl(String unblockUserurl) {
			UnblockUserurl = unblockUserurl;
		}


		public String getSaveAnsurl() {
			return SaveAnsurl;
		}

		public void setSaveAnsurl(String saveAnsurl) {
			SaveAnsurl = saveAnsurl;
		}

		public String getValidAnsurl() {
			return ValidAnsurl;
		}

		public void setValidAnsurl(String validAnsurl) {
			ValidAnsurl = validAnsurl;
		}

		public String getChangepwdurl() {
			return Changepwdurl;
		}

		public void setChangepwdurl(String changepwdurl) {
			Changepwdurl = changepwdurl;
		}

		public String getSetPasswordurl() {
			return SetPasswordurl;
		}

		public void setSetPasswordurl(String setPasswordurl) {
			SetPasswordurl = setPasswordurl;
		}

		public String getRegisterQuestion() {
			return RegisterQuestion;
		}

		public void setRegisterQuestion(String registerQuestion) {
			RegisterQuestion = registerQuestion;
		}

		public String getAnswertheQuestion() {
			return AnswertheQuestion;
		}

		public void setAnswertheQuestion(String answertheQuestion) {
			AnswertheQuestion = answertheQuestion;
		}

		public String getPlaceOrderurl() {
			return PlaceOrderurl;
		}

		public void setPlaceOrderurl(String placeOrderurl) {
			PlaceOrderurl = placeOrderurl;
		}


		public String getDefaultLoginurl() {
			return DefaultLoginurl;
		}


		public void setDefaultLoginurl(String defaultLoginurl) {
			DefaultLoginurl = defaultLoginurl;
		}


		public String getBracketorderurl() {
			return Bracketorderurl;
		}


		public void setBracketorderurl(String bracketorderurl) {
			Bracketorderurl = bracketorderurl;
		}


		public String getOrderBookurl() {
			return OrderBookurl;
		}


		public void setOrderBookurl(String orderBookurl) {
			OrderBookurl = orderBookurl;
		}


		public String getTradeBookurl() {
			return TradeBookurl;
		}


		public void setTradeBookurl(String tradeBookurl) {
			TradeBookurl = tradeBookurl;
		}


		public String getModifyOrderurl() {
			return ModifyOrderurl;
		}


		public void setModifyOrderurl(String modifyOrderurl) {
			ModifyOrderurl = modifyOrderurl;
		}


		public String getCancelOrderurl() {
			return CancelOrderurl;
		}


		public void setCancelOrderurl(String cancelOrderurl) {
			CancelOrderurl = cancelOrderurl;
		}


		public String getExecuteExitOrderurl() {
			return ExecuteExitOrderurl;
		}


		public void setExecuteExitOrderurl(String executeExitOrderurl) {
			ExecuteExitOrderurl = executeExitOrderurl;
		}


		public String getOrderHistoryurl() {
			return OrderHistoryurl;
		}


		public void setOrderHistoryurl(String orderHistoryurl) {
			OrderHistoryurl = orderHistoryurl;
		}


		


		public String getPlaceGTDOrderurl() {
			return PlaceGTDOrderurl;
		}


		public void setPlaceGTDOrderurl(String placeGTDOrderurl) {
			PlaceGTDOrderurl = placeGTDOrderurl;
		}


		public String getPositionBookurl() {
			return PositionBookurl;
		}


		public void setPositionBookurl(String positionBookurl) {
			PositionBookurl = positionBookurl;
		}


		public String getSquareOffPositionurl() {
			return SquareOffPositionurl;
		}


		public void setSquareOffPositionurl(String squareOffPositionurl) {
			SquareOffPositionurl = squareOffPositionurl;
		}


		public String getHoldingurl() {
			return Holdingurl;
		}


		public void setHoldingurl(String holdingurl) {
			Holdingurl = holdingurl;
		}


		public String getLimitsurl() {
			return Limitsurl;
		}


		public void setLimitsurl(String limitsurl) {
			Limitsurl = limitsurl;
		}


		public String getPayouturl() {
			return Payouturl;
		}


		public void setPayouturl(String payouturl) {
			Payouturl = payouturl;
		}


		public String getPayinurl() {
			return Payinurl;
		}


		public void setPayinurl(String payinurl) {
			Payinurl = payinurl;
		}


		public String getAccountdetailsurl() {
			return Accountdetailsurl;
		}


		public void setAccountdetailsurl(String accountdetailsurl) {
			Accountdetailsurl = accountdetailsurl;
		}


		public String getSenderEmailID() {
			return SenderEmailID;
		}


		public void setSenderEmailID(String senderEmailID) {
			SenderEmailID = senderEmailID;
		}


		public String getExchangeMessageurl() {
			return ExchangeMessageurl;
		}


		public void setExchangeMessageurl(String exchangeMessageurl) {
			ExchangeMessageurl = exchangeMessageurl;
		}


		public String getMarketStatusurl() {
			return MarketStatusurl;
		}


		public void setMarketStatusurl(String marketStatusurl) {
			MarketStatusurl = marketStatusurl;
		}


		public String getShowQuoteUrl() {
			return showQuoteUrl;
		}


		public void setShowQuoteUrl(String showQuoteUrl) {
			this.showQuoteUrl = showQuoteUrl;
		}


		public String getShowMarketPictureUrl() {
			return showMarketPictureUrl;
		}


		public void setShowMarketPictureUrl(String showMarketPictureUrl) {
			this.showMarketPictureUrl = showMarketPictureUrl;
		}


		public String getMobileloginUrl() {
			return mobileloginUrl;
		}


		public void setMobileloginUrl(String mobileloginUrl) {
			this.mobileloginUrl = mobileloginUrl;
		}


		public String getMobilesmsotpUrl() {
			return mobilesmsotpUrl;
		}


		public void setMobilesmsotpUrl(String mobilesmsotpUrl) {
			this.mobilesmsotpUrl = mobilesmsotpUrl;
		}


		public String getMobileemailotpUrl() {
			return mobileemailotpUrl;
		}


		public void setMobileemailotpUrl(String mobileemailotpUrl) {
			this.mobileemailotpUrl = mobileemailotpUrl;
		}


		public String getMobileotpverifyUrl() {
			return mobileotpverifyUrl;
		}


		public void setMobileotpverifyUrl(String mobileotpverifyUrl) {
			this.mobileotpverifyUrl = mobileotpverifyUrl;
		}


		public String getMobileloginmechanismtwoUrl() {
			return mobileloginmechanismtwoUrl;
		}


		public void setMobileloginmechanismtwoUrl(String mobileloginmechanismtwoUrl) {
			this.mobileloginmechanismtwoUrl = mobileloginmechanismtwoUrl;
		}


		public String getSmsApikey() {
			return smsApikey;
		}


		public void setSmsApikey(String smsApikey) {
			this.smsApikey = smsApikey;
		}


		public String getPositionConvertionurl() {
			return PositionConvertionurl;
		}


		public void setPositionConvertionurl(String positionConvertionurl) {
			PositionConvertionurl = positionConvertionurl;
		}


		public String getLogouturl() {
			return Logouturl;
		}


		public void setLogouturl(String logouturl) {
			Logouturl = logouturl;
		}


		public String getOptionChainUrl() {
			return OptionChainUrl;
		}


		public void setOptionChainUrl(String optionChainUrl) {
			OptionChainUrl = optionChainUrl;
		}


		public String getSortingbydefaultfield() {
			return Sortingbydefaultfield;
		}


		public void setSortingbydefaultfield(String sortingbydefaultfield) {
			Sortingbydefaultfield = sortingbydefaultfield;
		}


		public String getSortingbydefaultOrder() {
			return SortingbydefaultOrder;
		}


		public void setSortingbydefaultOrder(String sortingbydefaultOrder) {
			SortingbydefaultOrder = sortingbydefaultOrder;
		}


		public String getBoTpinGenerationUrl() {
			return BoTpinGenerationUrl;
		}


		public void setBoTpinGenerationUrl(String boTpinGenerationUrl) {
			BoTpinGenerationUrl = boTpinGenerationUrl;
		}


		public String getLoginkambalaUrl() {
			return loginkambalaUrl;
		}


		public void setLoginkambalaUrl(String loginkambalaUrl) {
			this.loginkambalaUrl = loginkambalaUrl;
		}


		public String getUserdetailskambalaUrl() {
			return userdetailskambalaUrl;
		}


		public void setUserdetailskambalaUrl(String userdetailskambalaUrl) {
			this.userdetailskambalaUrl = userdetailskambalaUrl;
		}
		
		

		public String getClientdetailskambalaUrl() {
			return clientdetailskambalaUrl;
		}


		public void setClientdetailskambalaUrl(String clientdetailskambalaUrl) {
			this.clientdetailskambalaUrl = clientdetailskambalaUrl;
		}


		public String getHstokenkambalaUrl() {
			return hstokenkambalaUrl;
		}


		public void setHstokenkambalaUrl(String hstokenkambalaUrl) {
			this.hstokenkambalaUrl = hstokenkambalaUrl;
		}
		

		public String getForgotpasswordkambalaUrl() {
			return forgotpasswordkambalaUrl;
		}


		public void setForgotpasswordkambalaUrl(String forgotpasswordkambalaUrl) {
			this.forgotpasswordkambalaUrl = forgotpasswordkambalaUrl;
		}

		

		public String getChangepasswordkambalaUrl() {
			return changepasswordkambalaUrl;
		}


		public void setChangepasswordkambalaUrl(String changepasswordkambalaUrl) {
			this.changepasswordkambalaUrl = changepasswordkambalaUrl;
		}


		public String getMwlistnameskambalaUrl() {
			return mwlistnameskambalaUrl;
		}


		public void setMwlistnameskambalaUrl(String mwlistnameskambalaUrl) {
			this.mwlistnameskambalaUrl = mwlistnameskambalaUrl;
		}


		public String getMarketwatchlistkambalaUrl() {
			return marketwatchlistkambalaUrl;
		}


		public void setMarketwatchlistkambalaUrl(String marketwatchlistkambalaUrl) {
			this.marketwatchlistkambalaUrl = marketwatchlistkambalaUrl;
		}


		public String getPlaceorderkambalaUrl() {
			return placeorderkambalaUrl;
		}


		public void setPlaceorderkambalaUrl(String placeorderkambalaUrl) {
			this.placeorderkambalaUrl = placeorderkambalaUrl;
		}


		public String getPositionsbookkambalaUrl() {
			return positionsbookkambalaUrl;
		}


		public void setPositionsbookkambalaUrl(String positionsbookkambalaUrl) {
			this.positionsbookkambalaUrl = positionsbookkambalaUrl;
		}


		public String getHoldingskambalaUrl() {
			return holdingskambalaUrl;
		}


		public void setHoldingskambalaUrl(String holdingskambalaUrl) {
			this.holdingskambalaUrl = holdingskambalaUrl;
		}


		public String getFundslimitkambalaUrl() {
			return fundslimitkambalaUrl;
		}
		

		public void setFundslimitkambalaUrl(String fundslimitkambalaUrl) {
			this.fundslimitkambalaUrl = fundslimitkambalaUrl;
		}


		public String getPayinLinkkambalaUrl() {
			return payinLinkkambalaUrl;
		}


		public void setPayinLinkkambalaUrl(String payinLinkkambalaUrl) {
			this.payinLinkkambalaUrl = payinLinkkambalaUrl;
		}
		
		public String getPayoutLinkkambalaUrl() {
			return payoutLinkkambalaUrl;
		}


		public void setPayoutLinkkambalaUrl(String payoutLinkkambalaUrl) {
			this.payoutLinkkambalaUrl = payoutLinkkambalaUrl;
		}
		public String getOptionChainkambalaUrl() {
			return OptionChainkambalaUrl;
		}


		public void setOptionChainkambalaUrl(String optionChainkambalaUrl) {
			OptionChainkambalaUrl = optionChainkambalaUrl;
		}


		public String getGetPayinReportUrl() {
			return GetPayinReportUrl;
		}


		public void setGetPayinReportUrl(String getPayinReportUrl) {
			GetPayinReportUrl = getPayinReportUrl;
		}


		public String getGetPayoutReportUrl() {
			return GetPayoutReportUrl;
		}


		public void setGetPayoutReportUrl(String getPayoutReportUrl) {
			GetPayoutReportUrl = getPayoutReportUrl;
		}


		public String getKambalaOrderBookUrl() {
			return kambalaOrderBookUrl;
		}


		public void setKambalaOrderBookUrl(String kambalaOrderBookUrl) {
			this.kambalaOrderBookUrl = kambalaOrderBookUrl;
		}


		public String getKambalaCancelOrderUrl() {
			return kambalaCancelOrderUrl;
		}


		public void setKambalaCancelOrderUrl(String kambalaCancelOrderUrl) {
			this.kambalaCancelOrderUrl = kambalaCancelOrderUrl;
		}


		public String getKambalaSingleOrdHistUrl() {
			return kambalaSingleOrdHistUrl;
		}


		public void setKambalaSingleOrdHistUrl(String kambalaSingleOrdHistUrl) {
			this.kambalaSingleOrdHistUrl = kambalaSingleOrdHistUrl;
		}


		public String getKambalaTradeBookUrl() {
			return kambalaTradeBookUrl;
		}


		public void setKambalaTradeBookUrl(String kambalaTradeBookUrl) {
			this.kambalaTradeBookUrl = kambalaTradeBookUrl;
		}


		public String getKambalaProductConversionUrl() {
			return kambalaProductConversionUrl;
		}


		public void setKambalaProductConversionUrl(String kambalaProductConversionUrl) {
			this.kambalaProductConversionUrl = kambalaProductConversionUrl;
		}


		public String getKambalaModifyOrderUrl() {
			return kambalaModifyOrderUrl;
		}


		public void setKambalaModifyOrderUrl(String kambalaModifyOrderUrl) {
			this.kambalaModifyOrderUrl = kambalaModifyOrderUrl;
		}


		public String getKambalaSearchScripUrl() {
			return kambalaSearchScripUrl;
		}


		public void setKambalaSearchScripUrl(String kambalaSearchScripUrl) {
			this.kambalaSearchScripUrl = kambalaSearchScripUrl;
		}


		public String getKambalaAddMultiScripsToMWUrl() {
			return kambalaAddMultiScripsToMWUrl;
		}


		public void setKambalaAddMultiScripsToMWUrl(String kambalaAddMultiScripsToMWUrl) {
			this.kambalaAddMultiScripsToMWUrl = kambalaAddMultiScripsToMWUrl;
		}


		public String getKambalaDeleteMultiMWScripsUrl() {
			return kambalaDeleteMultiMWScripsUrl;
		}


		public void setKambalaDeleteMultiMWScripsUrl(String kambalaDeleteMultiMWScripsUrl) {
			this.kambalaDeleteMultiMWScripsUrl = kambalaDeleteMultiMWScripsUrl;
		}


		public String getKambalaSetAlertUrl() {
			return kambalaSetAlertUrl;
		}


		public void setKambalaSetAlertUrl(String kambalaSetAlertUrl) {
			this.kambalaSetAlertUrl = kambalaSetAlertUrl;
		}


		public String getKambalaCancelAlertUrl() {
			return kambalaCancelAlertUrl;
		}


		public void setKambalaCancelAlertUrl(String kambalaCancelAlertUrl) {
			this.kambalaCancelAlertUrl = kambalaCancelAlertUrl;
		}


		public String getKambalaModifyAlertUrl() {
			return kambalaModifyAlertUrl;
		}


		public void setKambalaModifyAlertUrl(String kambalaModifyAlertUrl) {
			this.kambalaModifyAlertUrl = kambalaModifyAlertUrl;
		}


		public String getKambalaGetPendingAlertUrl() {
			return kambalaGetPendingAlertUrl;
		}


		public void setKambalaGetPendingAlertUrl(String kambalaGetPendingAlertUrl) {
			this.kambalaGetPendingAlertUrl = kambalaGetPendingAlertUrl;
		}


		public String getKambalaExchMsgUrl() {
			return kambalaExchMsgUrl;
		}


		public void setKambalaExchMsgUrl(String kambalaExchMsgUrl) {
			this.kambalaExchMsgUrl = kambalaExchMsgUrl;
		}


		public String getImei() {
			return imei;
		}


		public void setImei(String imei) {
			this.imei = imei;
		}


		public String getKambalaSource() {
			return kambalaSource;
		}


		public void setKambalaSource(String kambalaSource) {
			this.kambalaSource = kambalaSource;
		}


		public String getKambalaApkversion() {
			return kambalaApkversion;
		}


		public void setKambalaApkversion(String kambalaApkversion) {
			this.kambalaApkversion = kambalaApkversion;
		}


		

		public String getKambalafactor2() {
			return kambalafactor2;
		}


		public void setKambalafactor2(String kambalafactor2) {
			this.kambalafactor2 = kambalafactor2;
		}


		public String getKambalaVendorCode() {
			return kambalaVendorCode;
		}


		public void setKambalaVendorCode(String kambalaVendorCode) {
			this.kambalaVendorCode = kambalaVendorCode;
		}


		public String getKambalaApiuser() {
			return kambalaApiuser;
		}


		public void setKambalaApiuser(String kambalaApiuser) {
			this.kambalaApiuser = kambalaApiuser;
		}


		public String getLogoutkambalaUrl() {
			return logoutkambalaUrl;
		}


		public void setLogoutkambalaUrl(String logoutkambalaUrl) {
			this.logoutkambalaUrl = logoutkambalaUrl;
		}


		public String getCdslSecretKey() {
			return cdslSecretKey;
		}


		public void setCdslSecretKey(String cdslSecretKey) {
			this.cdslSecretKey = cdslSecretKey;
		}


		public String getEdisverifyurl() {
			return edisverifyurl;
		}


		public void setEdisverifyurl(String edisverifyurl) {
			this.edisverifyurl = edisverifyurl;
		}


		public String getKambalaSearchResult() {
			return kambalaSearchResult;
		}


		public void setKambalaSearchResult(String kambalaSearchResult) {
			this.kambalaSearchResult = kambalaSearchResult;
		}


		public String getKambalaGetSecurityInfoUrl() {
			return kambalaGetSecurityInfoUrl;
		}


		public void setKambalaGetSecurityInfoUrl(String kambalaGetSecurityInfoUrl) {
			this.kambalaGetSecurityInfoUrl = kambalaGetSecurityInfoUrl;
		}


		public String getSpanCalckambalaUrl() {
			return SpanCalckambalaUrl;
		}


		public void setSpanCalckambalaUrl(String spanCalckambalaUrl) {
			SpanCalckambalaUrl = spanCalckambalaUrl;
		}


		public String getEdisresponseurl() {
			return edisresponseurl;
		}


		public void setEdisresponseurl(String edisresponseurl) {
			this.edisresponseurl = edisresponseurl;
		}


		public String getEdisreturnurl() {
			return edisreturnurl;
		}


		public void setEdisreturnurl(String edisreturnurl) {
			this.edisreturnurl = edisreturnurl;
		}


	
		
	    
	    
	    
}
