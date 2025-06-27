


<div class="modal fade buySellModal" onclick="SpanCalculationFunction()" id="buySellModal" data-bs-backdrop="false" data-bs-keyboard="false" tabindex="-1" aria-labelledby="buySellModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
            <h5 class="modal-title" id="buySellModalLabel">
                <span class="left">
<!--                     CRUDEOIL -->
					<label   for="stocklabelId" id="stocklabelId"></label>
					 <label id="exchangelabelId" ></label> 
<!--                     <label>MCX FUT 26SEPT2021</label> -->
                    <label id="mcxexpirylabelId" ></label> 
                    <label id="nseexpirydatelabelId" ></label>
					<label id="nfoexpirydatelabelId" ></label>
					<input type="hidden" id="stocklabelhiddenId"  name="stocklabelhiddenId" />
					<input type="hidden" id="mcxticksizehiddval"  name="mcxticksizehiddval" />	
					<input type="hidden" id="mcxOptionTypehiddval"  name="mcxOptionTypehiddval" />				
				    <input type="hidden" id="nseticksizehiddval"  name="nseticksizehiddval" /> 
					<input type="hidden" id="nseexpirydatehiddval"  name="nseexpirydatehiddval" /> 
					<input type="hidden" id="nfoexpirydatehiddval"  name="nfoexpirydatehiddval" />
					<input type="hidden" id="stockhiddval"  name="stockhiddval" />
					<input type="hidden" id="UserID"  name="UserID" />
					<input type="hidden" id="token"  name="token" />
                </span>
                <span class="right" >
                    <label id="buysell_priceid" >5,030.00</label>
                    <label><i class="bi bi-chevron-up"></i> (+0,52%)</label>
                </span>
            </h5>
            <input type="hidden" id="mcxStrikepricehiddval" name="mcxStrikepricehiddval" /> 
            <input type="hidden" id="mcxInstrumentNamehiddval" name="mcxInstrumentNamehiddval" />
          <input type="hidden" id="mcxexpirydatehiddval" name="mcxexpirydatehiddval"/>
            <input type="hidden" id="nseSerieshiddval" name="nseSerieshiddval"/>
           <input type="hidden" id="NfoInstrumentNamehiddval" name="NfoInstrumentNamehiddval" />
           <input type="hidden" id="nfooption_typehiddval" name="nfooption_typehiddval" />
           <input type="hidden" id="nfoTicksizehiddval" name="nfoTicksizehiddval" />
            <input type="hidden" id="scripthiddval" name="scripthiddval" /> 
            <input type="hidden" id="scriptNamehiddval" name="scriptNamehiddval" />
             <input type="hidden" id="displaynamehiddval" name="displaynamehiddval" />
             <input type="hidden" id="decimalhiddval" name="decimalhiddval" />
             
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col">
                        <div class="buySellSwitcher">
                            <div class="form-check form-switch">
                                <label class="form-check-label" for="switchBuySell">Buy</label>
                                <input class="form-check-input" type="checkbox" role="switch" id="switchBuySell">
                                <label class="form-check-label" for="switchBuySell">Sell</label>
                            </div>
                        </div>
                        <ul class="buysellcatgry">
                        <li class="active RegularOrdcls" id="RegularOrdId" name="RegularOrdId">REG</li>
                        
                            <li id="BracketOrdId" class="BracketOrdcls" name="BracketOrdId">BO</li>
                            <li id="CoverOrdId" class="CoverOrdcls" name="CoverOrdId" >CO</li>
                            <li id="AfterMarketOrdId" class="AfterMarketOrdcls">AMO</li>
                        </ul>
                        <div class="form-field">
                            <div class="row pricecls" id="priceDivId" >
                                <div class="col-6 pricecls">Buy Price</div>
                                <div class="col-6">
                                    <div class="form-group">
                                        <input type="number" class="form-control pricecls" onkeypress="return validateFloatKeyPress(this,event);" onkeyup="SpanCalculationFunction();"  onclick="checkClick();"  disabled="disabled" id="priceId"  step="" value="" />
                                    </div>
                                </div>
                            </div>
                            <div class="row Triggerpricecls" style="display:none;">
                                <div class="col-6 Triggerpricecls" style="display:none;">Trigger Price</div>
                                <div class="col-6">
                                    <div class="form-group">
                                        <input type="text" class="form-control Triggerpricecls" style="display:none;" id="TriggerpriceId" value="" />
                                    </div>
                                    
                                    <div class="form-group TriggerPriceErrorcls" style="display:none;">
                                        <span id="TriggerPriceErrorId" style="color: red;text-align=center;display: none;">
											*Trigger price shouldn't be greater than price </span>
                                    </div>
                                    
                                   
			 
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-6">Quantity</div>
                                <div class="col-6">
                                    <div class="form-group">
                                        <div class="number-spinner">
                                            <span class="ns-btn">
                                                <a data-dir="dwn"><i class="bi bi-dash"></i></a>
                                            </span>
                                            <input type="text" class="pl-ns-value form-control" id="QtyId" onkeypress="SpanCalculationFunction();" onchange="SpanCalculationFunction()" value="1" min="1" maxlength="10000000000000">
                                            <span class="ns-btn">
                                                <a data-dir="up"><i class="bi bi-plus QtyEventClass" onchange="SpanCalculationFunction()" ></i></a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>                                
                            <div class="row ">
                                <div class="col-6 DisclosedQtycls" style="display:none;">Disclosed Qty</div>
                                <div class="col-6">
                                    <div class="form-group">
                                        <input type="text" id="DiscquantityId" style="display:none;" disabled="disabled" class="form-control DisclosedQtycls" value="0" />
                                    </div>
                                     <div class="form-group DiscQuanErrorcls" style="display:none;">
                                     <span id="DiscQuanErrorId" style="color: red; text-align:center; display: none;">
			 							*Disclosed quantity cannot be less than 25% of your order. </span> 
									 </div>
                                </div>
                            </div>                         
                            <div class="row NonCoverOrderDivcls" style="display:none">
                                <div class="col-12 NonCoverOrderDivcls" style="display:none">Order Type</div>
                                <div class="col-12">        
                                    <ul class="buysellcatgry">
                                        <li class="active lmtcls" style="display:none;"  id="lmtId">LIMIT</li>
                                        <li  id="mktId" style="display:none;" class="mktcls" >MARKET</li>
                                        <li id="slId"   style="display:none;" class="slcls">SL</li>
                                        <li id="sl-mId" style="display:none;" class="slmcls">SLM</li>
                                    </ul>
                                </div>
                            </div>
                        </div>  
                    </div>
                    
                    
                    <div class="col">
                        <div class="modal-btn-content">
                            <div class="form-field">                            
                             <div class="row CoverOrderrightsideDivcls" style="display:none;">
                                <div class="col-12 CoverOrderrightsideDivcls"  style="display:none;">Order Type</div>
                                <div class="col-12">        
                                    <ul class="buysellcatgry">
                                        <li class="active lmtcls" style="display:none;"  id="CoverOrderlmtId">LIMIT</li>
                                        <li  id="CoverOrdermktId" style="display:none;" class="mktcls" >MARKET</li>
                                        <li id="CoverOrderslId"   style="display:none;" class="slcls">SL</li>
                                        <li id="CoverOrdersl-mId" style="display:none;" class="slmcls">SLM</li>
                                    </ul>
                                </div>
                            </div>
                            
                                <div class="row Productscls" style="display:none;">

                                    <div class="col-12" >Products</div>
                                    <div class="col-12">        
                                        <ul class="buysellcatgry">
                                         <li  id="NrmlId" class="active nrmlcls" onchange="SpanCalculationFunction()">NRML</li>
                                         <li  id="cncId" class="cnccls" onchange="SpanCalculationFunction()">CNC</li>
                                            <li class="miscls" id="MisId"  onchange="SpanCalculationFunction()">MIS</li>                                           
                                            
                                        </ul>
                                    </div>
                                </div>
                                
                                
                                
                                 <div class="row Bracketordertextboxcls" style="display:none">
								<div class="row">
                                <div class="col-6">Target (LTP,abs)</div>
                                <div class="col-6">
                                    <div class="form-group">
                                        <input type="text" class="form-control" id="TargetAbsolutequanId" value="0" />
                                    </div>
                                </div>
                            	</div>
                            	<div class="row">
                                <div class="col-6">Stop loss (LTP,abs)</div>
                                <div class="col-6">
                                    <div class="form-group">
                                        <input type="text" class="form-control" id="stoplossAbsolutequanId" value="0" />
                                    </div>
                                </div>
                            	</div>
                            	<div class="row">
                                <div class="col-6">Trailing Stop loss (LTP,abs) Optional</div>
                                <div class="col-6">
                                    <div class="form-group">
                                        <input type="text" class="form-control" id="TargetstoplossquanId" value="0" />
                                    </div>
                                </div>
                            	</div>
                            	
                            	
                                </div>
                                <div class="row Validitycls" style="display:none">
                                    <div class="col-12">Validity</div>
                                    <div class="col-12">        
                                        <ul class="buysellcatgry">
                                            <li class="active daycls" id="dayId">DAY</li>
                                            <li id="iocId" class="ioccls">IOC</li>
                                            <li id="gtcId" class="gtccls">GTC</li>
                                            <li id="gtdId" class="gtdcls">GTD</li>
                                            <li id="gttId" class="gttcls">GTT</li>
                                        </ul>
                                    </div>
                                </div>
                                
                                 
                                     <div class="row DTDValiditycls" style="display:none;">										
                                    <div class="col-7">        
                                      <div class="date_item">
                       				 <label for="datepicker">Till Date</label> 
                       				 <input type="text" id="datepickerbuysell" readonly="" disabled="">
                    				</div>
                                    </div>
                                </div>
                            </div>
                            <div class="margin_info">
                                <p>Req. Margin <span id="ReqMarginspanId">0.00</span></p>
                                <p>Avail. Margin <span id="AvailableMarginspanId">0.00</span></p>
                            </div>
                            <div class="form-field">
                                <button type="button"  id="buyId" class="btn btn-default btn-block">BUY</button>
                                <button type="button"  id="sellId" class="btn btn-default btn-block">SELL</button>
                            </div>
                        </div>
                    </div>
                    
                    
                    
                    
                </div>
            </div>
        </div>
    </div>
</div>

<script type="text/javascript">  

$(document).ready(function(){
	
	document.getElementsByClassName('buysellcatgry').addEventListener("click",function(e) {
		  if (e.target && e.target.matches("li")) {
		    li.classList.add('active')
    		} else {
		      li.classList.remove('active')
		    }
		});
});

</script>