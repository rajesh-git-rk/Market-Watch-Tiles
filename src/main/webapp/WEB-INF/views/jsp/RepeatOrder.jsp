
<div class="main_content">

<div class="modal fade buySellModalRepeat"  id="buySellModalRepeat" data-bs-backdrop="false" data-bs-keyboard="false" tabindex="-1" aria-labelledby="buySellModalLabelRepeat" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
            <h5 class="modal-title" id="buySellModalLabelRepeat">
                <span class="left">
<!--                     CRUDEOIL -->
					<label   for="stocklabelIdRepeat" id="stocklabelIdRepeat"></label>
					 <label id="exchangelabelIdRepeat" ></label> 
<!--                     <label>MCX FUT 26SEPT2021</label> -->
                    <label id="mcxexpirylabelIdRepeat" ></label> 
                    <label id="nseexpirydatelabelIdRepeat" ></label>
					<label id="nfoexpirydatelabelIdRepeat" ></label>
					<input type="hidden" id="stocklabelhiddenIdRepeat"  name="stocklabelhiddenIdRepeat" />
					<input type="hidden" id="mcxticksizehiddvalRepeat"  name="mcxticksizehiddvalRepeat" />	
					<input type="hidden" id="mcxOptionTypehiddvalRepeat"  name="mcxOptionTypehiddvalRepeat" />				
				    <input type="hidden" id="nseticksizehiddvalRepeat"  name="nseticksizehiddvalRepeat" /> 
					<input type="hidden" id="nseexpirydatehiddvalRepeat"  name="nseexpirydatehiddvalRepeat" /> 
					<input type="hidden" id="nfoexpirydatehiddvalRepeat"  name="nfoexpirydatehiddvalRepeat" />
					<input type="hidden" id="stockhiddvalRepeat"  name="stockhiddvalRepeat" />
					<input type="hidden" id="UserIDRepeat"  name="UserIDRepeat" />
					<input type="hidden" id="tokenRepeat"  name="tokenRepeat" />
                </span>
                <span class="right" >
                    <label id="buysell_priceidRepeat" >5,030.00</label>
                    <label><i class="bi bi-chevron-up"></i> (+0,52%)</label>
                </span>
            </h5>
            <input type="hidden" id="mcxStrikepricehiddvalRepeat" name="mcxStrikepricehiddvalRepeat" /> 
            <input type="hidden" id="mcxInstrumentNamehiddvalRepeat" name="mcxInstrumentNamehiddvalRepeat" />
          <input type="hidden" id="mcxexpirydatehiddvalRepeat" name="mcxexpirydatehiddvalRepeat"/>
            <input type="hidden" id="nseSerieshiddvalRepeat" name="nseSerieshiddvalRepeat"/>
           <input type="hidden" id="NfoInstrumentNamehiddvalRepeat" name="NfoInstrumentNamehiddvalRepeat" />
           <input type="hidden" id="nfooption_typehiddvalRepeat" name="nfooption_typehiddvalRepeat" />
           <input type="hidden" id="nfoTicksizehiddvalRepeat" name="nfoTicksizehiddvalRepeat" />
            <input type="hidden" id="scripthiddvalRepeat" name="scripthiddvalRepeat" /> 
            <input type="hidden" id="scriptNamehiddvalRepeat" name="scriptNamehiddvalRepeat" />
             <input type="hidden" id="displaynamehiddvalRepeat" name="displaynamehiddvalRepeat" />
             <input type="hidden" id="decimalhiddvalRepeat" name="decimalhiddvalRepeat" />
             
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col">
                        <div class="buySellSwitcherRepeat">
                            <div class="form-check form-switch">
                                <label class="form-check-label" for="switchBuySell">Buy</label>
                                <input class="form-check-input" type="checkbox" role="switch" id="switchBuySellRepeat">
                                <label class="form-check-label" for="switchBuySell">Sell</label>
                            </div>
                        </div>
                        <ul class="buysellcatgryRepeat">
                        <li class="active RegularOrdclsRepeat" id="RegularOrdIdRepeat" name="RegularOrdIdRepeat">REG</li>
                        
                            <li id="BracketOrdIdRepeat" class="BracketOrdclsRepeat" name="BracketOrdIdRepeat">BO</li>
                            <li id="CoverOrdIdRepeat" class="CoverOrdclsRepeat" name="CoverOrdIdRepeat" >CO</li>
                            <li id="AfterMarketOrdIdRepeat" class="AfterMarketOrdclsRepeat">AMO</li>
                        </ul>
                        <div class="form-field">
                            <div class="row priceclsRepeat" id="priceDivIdRepeat" >
                                <div class="col-6 priceclsRepeat">Buy Price</div>
                                <div class="col-6">
                                    <div class="form-group">
                                        <input type="number" class="form-control priceclsRepeat" onkeypress="return validateFloatKeyPressRepeat(this,event);" onkeyup="SpanCalculationFunctionRepeat();"  onclick="checkClickRepeat();"  disabled="disabled" id="priceIdRepeat"  step="" value="" />
                                    </div>
                                </div>
                            </div>
                            <div class="row TriggerpriceclsRepeat" style="display:none;">
                                <div class="col-6 TriggerpriceclsRepeat" style="display:none;">Trigger Price</div>
                                <div class="col-6">
                                    <div class="form-group">
                                        <input type="text" class="form-control TriggerpriceclsRepeat" style="display:none;" id="TriggerpriceIdRepeat" value="" />
                                    </div>
                                    
                                    <div class="form-group TriggerPriceErrorclsRepeat" style="display:none;">
                                        <span id="TriggerPriceErrorIdRepeat" style="color: red;text-align=center;display: none;">
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
                                            <input type="text" class="pl-ns-value form-control" id="QtyIdRepeat" onkeypress="SpanCalculationFunctionRepeat();" onchange="SpanCalculationFunctionRepeat()" value="1" min="1" maxlength="10000000000000">
                                            <span class="ns-btn">
                                                <a data-dir="up"><i class="bi bi-plus QtyEventClassRepeat" onchange="SpanCalculationFunctionRepeat()" ></i></a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>                                
                            <div class="row ">
                                <div class="col-6 DisclosedQtyclsRepeat" style="display:none;">Disclosed Qty</div>
                                <div class="col-6">
                                    <div class="form-group">
                                        <input type="text" id="DiscquantityIdRepeat" style="display:none;" disabled="disabled" class="form-control DisclosedQtyclsRepeat" value="0" />
                                    </div>
                                     <div class="form-group DiscQuanErrorclsRepeat" style="display:none;">
                                     <span id="DiscQuanErrorIdRepeat" style="color: red; text-align:center; display: none;">
			 							*Disclosed quantity cannot be less than 25% of your order. </span> 
									 </div>
                                </div>
                            </div>                         
                            <div class="row NonCoverOrderDivclsRepeat" style="display:none">
                                <div class="col-12 NonCoverOrderDivclsRepeat" style="display:none">Order Type</div>
                                <div class="col-12">        
                                    <ul class="buysellcatgryRepeat">
                                        <li class="active lmtclsRepeat" style="display:none;"  id="lmtIdRepeat">LIMIT</li>
                                        <li  id="mktIdRepeat" style="display:none;" class="mktclsRepeat" >MARKET</li>
                                        <li id="slIdRepeat"   style="display:none;" class="slclsRepeat">SL</li>
                                        <li id="sl-mIdRepeat" style="display:none;" class="slmclsRepeat">SLM</li>
                                    </ul>
                                </div>
                            </div>
                        </div>  
                    </div>
                    
                    
                    <div class="col">
                        <div class="modal-btn-content">
                            <div class="form-field">                            
                             <div class="row CoverOrderrightsideDivclsRepeat" style="display:none;">
                                <div class="col-12 CoverOrderrightsideDivclsRepeat"  style="display:none;">Order Type</div>
                                <div class="col-12">        
                                    <ul class="buysellcatgryRepeat">
                                        <li class="active lmtclsRepeat" style="display:none;"  id="CoverOrderlmtIdRepeat">LIMIT</li>
                                        <li  id="CoverOrdermktIdRepeat" style="display:none;" class="mktclsRepeat" >MARKET</li>
                                        <li id="CoverOrderslIdRepeat"   style="display:none;" class="slclsRepeat">SL</li>
                                        <li id="CoverOrdersl-mIdRepeat" style="display:none;" class="slmclsRepeat">SLM</li>
                                    </ul>
                                </div>
                            </div>
                            
                                <div class="row ProductsclsRepeat" style="display:none;">

                                    <div class="col-12" >Products</div>
                                    <div class="col-12">        
                                        <ul class="buysellcatgryRepeat">
                                         <li  id="NrmlIdRepeat" class="active nrmlclsRepeat" onchange="SpanCalculationFunctionRepeat()">NRML</li>
                                         <li  id="cncIdRepeat" class="cncclsRepeat" onchange="SpanCalculationFunctionRepeat()">CNC</li>
                                            <li class="misclsRepeat" id="MisIdRepeat"  onchange="SpanCalculationFunctionRepeat()">MIS</li>                                           
                                            
                                        </ul>
                                    </div>
                                </div>
                                
                                
                                
                                 <div class="row BracketordertextboxclsRepeat" style="display:none">
								<div class="row">
                                <div class="col-6">Target (LTP,abs)</div>
                                <div class="col-6">
                                    <div class="form-group">
                                        <input type="text" class="form-control" id="TargetAbsolutequanIdRepeat" value="0" />
                                    </div>
                                </div>
                            	</div>
                            	<div class="row">
                                <div class="col-6">Stop loss (LTP,abs)</div>
                                <div class="col-6">
                                    <div class="form-group">
                                        <input type="text" class="form-control" id="stoplossAbsolutequanIdRepeat" value="0" />
                                    </div>
                                </div>
                            	</div>
                            	<div class="row">
                                <div class="col-6">Trailing Stop loss (LTP,abs) Optional</div>
                                <div class="col-6">
                                    <div class="form-group">
                                        <input type="text" class="form-control" id="TargetstoplossquanIdRepeat" value="0" />
                                    </div>
                                </div>
                            	</div>
                            	
                            	
                                </div>
                                <div class="row ValidityclsRepeat" style="display:none">
                                    <div class="col-12">Validity</div>
                                    <div class="col-12">        
                                        <ul class="buysellcatgryRepeat">
                                            <li class="active dayclsRepeat" id="dayIdRepeat">DAY</li>
                                            <li id="iocIdRepeat" class="iocclsRepeat">IOC</li>
                                            <li id="gtcIdRepeat" class="gtcclsRepeat">GTC</li>
                                            <li id="gtdIdRepeat" class="gtdclsRepeat">GTD</li>
                                            <li id="gttIdRepeat" class="gttclsRepeat">GTT</li>
                                        </ul>
                                    </div>
                                </div>
                                
                                 
                                     <div class="row DTDValidityclsRepeat" style="display:none;">										
                                    <div class="col-7">        
                                      <div class="date_item">
                       				 <label for="datepicker">Till Date</label> 
                       				 <input type="text" id="datepickerbuysellRepeat" readonly="" disabled="">
                    				</div>
                                    </div>
                                </div>
                            </div>
                            <div class="margin_info">
                                <p>Req. Margin <span id="ReqMarginspanIdRepeat">0.00</span></p>
                                <p>Avail. Margin <span id="AvailableMarginspanIdRepeat">0.00</span></p>
                            </div>
                            <div class="form-field">
                                <button type="button"  id="buyIdRepeat" class="btn btn-default btn-block">BUY</button>
                                <button type="button"  id="sellIdRepeat" class="btn btn-default btn-block">SELL</button>
                            </div>
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
	
	document.getElementsByClassName('buysellcatgryRepeat').addEventListener("click",function(e) {
		  if (e.target && e.target.matches("li")) {
		    li.classList.add('active')
    		} else {
		      li.classList.remove('active')
		    }
		});
});

</script>
