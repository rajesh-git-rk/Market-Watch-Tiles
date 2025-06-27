
<div class="main_content">

<div class="modal fade buySellModalModify" onclick="SpanCalculationFunctionModify()" id="buySellModalModify" data-bs-backdrop="false" data-bs-keyboard="false" tabindex="-1" aria-labelledby="buySellModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
            <h5 class="modal-title" id="buySellModalLabel">
                <span class="left">
<!--                     CRUDEOIL -->
					<label   for="stocklabelIdModify" id="stocklabelIdModify"></label>
					 <label id="exchangelabelIdModify" ></label> 
<!--                     <label>MCX FUT 26SEPT2021</label> -->
                    <label id="mcxexpirylabelIdModify" ></label> 
                    <label id="nseexpirydatelabelIdModify" ></label>
					<label id="nfoexpirydatelabelIdModify" ></label>
					
					
					
					<input type="hidden" id="UserIDModify"  name="UserIDModify" />
					<input type="hidden" id="tokenModify"  name="tokenModify" />
					<input type="hidden" id="norenordnoModify"  name="norenordnoModify" />
					<input type="hidden" id="exchModify"  name="exchModify" />
					<input type="hidden" id="tsymModify"  name="tsymModify" />
					<input type="hidden" id="qtyModify"  name="qtyModify" />
					<input type="hidden" id="prcModify"  name="prcModify" />
					<input type="hidden" id="prctypModify"  name="prctypModify" />
					<input type="hidden" id="retModify"  name="retModify" />
					
					<!-- 
					<input type="hidden" id="stocklabelhiddenIdModify"  name="stocklabelhiddenIdModify" />
					<input type="hidden" id="stockhiddvalModify"  name="stockhiddvalModify" />
					
					<input type="hidden" id="mcxticksizehiddvalModify"  name="mcxticksizehiddvalModify" />	
					<input type="hidden" id="mcxOptionTypehiddvalModify"  name="mcxOptionTypehiddvalModify" />				
				    <input type="hidden" id="nseticksizehiddvalModify"  name="nseticksizehiddvalModify" /> 
					<input type="hidden" id="nseexpirydatehiddvalModify"  name="nseexpirydatehiddvalModify" /> 
					<input type="hidden" id="nfoexpirydatehiddvalModify"  name="nfoexpirydatehiddvalModify" /> -->
                </span>
                <span class="right" >
                    <label id="buysell_priceidModify" >5,030.00</label>
                    <label><i class="bi bi-chevron-up"></i> (+0,52%)</label>
                </span>
            </h5>
            
            <!-- <input type="hidden" id="mcxStrikepricehiddvalModify" name="mcxStrikepricehiddvalModify" /> 
            <input type="hidden" id="mcxInstrumentNamehiddvalModify" name="mcxInstrumentNamehiddvalModify" />
          <input type="hidden" id="mcxexpirydatehiddvalModify" name="mcxexpirydatehiddvalModify"/>
            <input type="hidden" id="nseSerieshiddvalModify" name="nseSerieshiddvalModify"/>
           <input type="hidden" id="NfoInstrumentNamehiddvalModify" name="NfoInstrumentNamehiddvalModify" />
           <input type="hidden" id="nfooption_typehiddvalModify" name="nfooption_typehiddvalModify" />
           <input type="hidden" id="nfoTicksizehiddvalModify" name="nfoTicksizehiddvalModify" />
            <input type="hidden" id="scripthiddvalModify" name="scripthiddvalModify" /> 
            <input type="hidden" id="scriptNamehiddvalModify" name="scriptNamehiddvalModify" />
             <input type="hidden" id="displaynamehiddvalModify" name="displaynamehiddvalModify" />
             <input type="hidden" id="decimalhiddvalModify" name="decimalhiddvalModify" /> -->
             
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col">
                    
                        <!-- <div class="buySellSwitcherModify">
                            <div class="form-check form-switch">
                                <label class="form-check-label" for="switchBuySell">Buy</label>
                                <input class="form-check-input" type="checkbox" role="switch" id="switchBuySellModify">
                                <label class="form-check-label" for="switchBuySell">Sell</label>
                            </div>
                        </div>
                        <ul class="buysellcatgryModify">
                        <li class="active RegularOrdclsModify" id="RegularOrdIdModify" name="RegularOrdIdModify">REG</li>
                        
                            <li id="BracketOrdIdModify" class="BracketOrdclsModify" name="BracketOrdIdModify">BO</li>
                            <li id="CoverOrdIdModify" class="CoverOrdclsModify" name="CoverOrdIdModify" >CO</li>
                            <li id="AfterMarketOrdIdModify" class="AfterMarketOrdclsModify">AMO</li>
                        </ul> -->
                        
                        <div class="form-field">
                            <div class="row priceclsModify" id="priceDivIdModify" >
                                <div class="col-6 priceclsModify">Buy Price</div>
                                <div class="col-6">
                                    <div class="form-group">
                                        <input type="number" class="form-control priceclsModify"   id="priceIdModify"  step="" />
                                    </div>
                                </div>
                            </div>
                            <div class="row TriggerpriceclsModify" style="display:none;">
                                <div class="col-6 TriggerpriceclsModify" style="display:none;">Trigger Price</div>
                                <div class="col-6">
                                    <div class="form-group">
                                        <input type="text" class="form-control TriggerpriceclsModify" style="display:none;" id="TriggerpriceIdModify" value="" />
                                    </div>
                                    
                                    <div class="form-group TriggerPriceErrorclsModify" style="display:none;">
                                        <span id="TriggerPriceErrorIdModify" style="color: red;text-align=center;display: none;">
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
                                            <input type="text" class="pl-ns-value form-control" id="QtyIdModify"  min="1" maxlength="10000000000000">
                                            <span class="ns-btn">
                                                <a data-dir="up"><i class="bi bi-plus QtyEventClassModify" onchange="SpanCalculationFunctionModify()" ></i></a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>                                
                            <div class="row ">
                                <div class="col-6 DisclosedQtyclsModify" style="display:none;">Disclosed Qty</div>
                                <div class="col-6">
                                    <div class="form-group">
                                        <input type="text" id="DiscquantityIdModify" style="display:none;" disabled="disabled" class="form-control DisclosedQtyclsModify" value="0" />
                                    </div>
                                     <div class="form-group DiscQuanErrorclsModify" style="display:none;">
                                     <span id="DiscQuanErrorIdModify" style="color: red; text-align:center; display: none;">
			 							*Disclosed quantity cannot be less than 25% of your order. </span> 
									 </div>
                                </div>
                            </div>                         
                            <div class="row NonCoverOrderDivclsModify" >
                                <div class="col-12 NonCoverOrderDivclsModify">Order Type</div>
                                <div class="col-12">        
                                    <ul class="buysellcatgryModify">
                                        <li class="active lmtclsModify" id="lmtIdModify">LIMIT</li>
                                        <li  id="mktIdModify"  class="mktclsModify" >MARKET</li>
                                        <li id="slIdModify"  class="slclsModify">SL</li>
                                        <li id="sl-mIdModify"  class="slmclsModify">SLM</li>
                                    </ul>
                                </div>
                            </div>
                        </div>  
                    </div>
                    
                    
                    <div class="col">
                        <div class="modal-btn-content">
                            <div class="form-field">                            
                             <div class="row CoverOrderrightsideDivclsModify" style="display:none;">
                                <div class="col-12 CoverOrderrightsideDivclsModify"  style="display:none;">Order Type</div>
                                <div class="col-12">        
                                    <ul class="buysellcatgryModify">
                                        <li class="active lmtclsModify" style="display:none;"  id="CoverOrderlmtIdModify">LIMIT</li>
                                        <li  id="CoverOrdermktIdModify" style="display:none;" class="mktclsModify" >MARKET</li>
                                        <li id="CoverOrderslIdModify"   style="display:none;" class="slclsModify">SL</li>
                                        <li id="CoverOrdersl-mIdModify" style="display:none;" class="slmclsModify">SLM</li>
                                    </ul>
                                </div>
                            </div>
                            
                                <div class="row ProductsclsModify" style="display:none;">

                                    <div class="col-12" >Products</div>
                                    <div class="col-12">        
                                        <ul class="buysellcatgryModify">
                                         <li  id="NrmlIdModify" class="active nrmlclsModify" onchange="SpanCalculationFunctionModify()">NRML</li>
                                         <li  id="cncIdModify" class="cncclsModify" onchange="SpanCalculationFunctionModify()">CNC</li>
                                            <li class="misclsModify" id="MisIdModify"  onchange="SpanCalculationFunctionModify()">MIS</li>                                           
                                            
                                        </ul>
                                    </div>
                                </div>
                                
                                
                                
                                 <div class="row BracketordertextboxclsModify" style="display:none">
								<div class="row">
                                <div class="col-6">Target (LTP,abs)</div>
                                <div class="col-6">
                                    <div class="form-group">
                                        <input type="text" class="form-control" id="TargetAbsolutequanIdModify" value="0" />
                                    </div>
                                </div>
                            	</div>
                            	<div class="row">
                                <div class="col-6">Stop loss (LTP,abs)</div>
                                <div class="col-6">
                                    <div class="form-group">
                                        <input type="text" class="form-control" id="stoplossAbsolutequanIdModify" value="0" />
                                    </div>
                                </div>
                            	</div>
                            	<div class="row">
                                <div class="col-6">Trailing Stop loss (LTP,abs) Optional</div>
                                <div class="col-6">
                                    <div class="form-group">
                                        <input type="text" class="form-control" id="TargetstoplossquanIdModify" value="0" />
                                    </div>
                                </div>
                            	</div>
                            	
                            	
                                </div>
                                <div class="row ValidityclsModify">
                                    <div class="col-12">Validity</div>
                                    <div class="col-12">        
                                        <ul class="buysellcatgryModify">
                                            <li class="active dayclsModify" id="dayIdModify">DAY</li>
                                            <li id="iocIdModify" class="iocclsModify">IOC</li>
                                            <li id="gtcIdModify" class="gtcclsModify">GTC</li>
                                            <li id="gtdIdModify" class="gtdclsModify">GTD</li>
                                            <li id="gttIdModify" class="gttclsModify">GTT</li>
                                        </ul>
                                    </div>
                                </div>
                                
                                 
                                     <div class="row DTDValidityclsModify" style="display:none;">										
                                    <div class="col-7">        
                                      <div class="date_item">
                       				 <label for="datepicker">Till Date</label> 
                       				 <input type="text" id="datepickerbuysellModify" readonly="" disabled="">
                    				</div>
                                    </div>
                                </div>
                            </div>
                           <!--  <div class="margin_info">
                                <p>Req. Margin <span id="ReqMarginspanIdModify">0.00</span></p>
                                <p>Avail. Margin <span id="AvailableMarginspanIdModify">0.00</span></p>
                            </div> -->
                            <div class="form-field">
                                <button type="button"  id="buyIdModify"  onclick="ModifyOrderfun();" class="btn btn-default btn-block">MODIFY</button>
                                <!-- <button type="button"  id="sellIdModify" class="btn btn-default btn-block">SELL</button> -->
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
	
	document.getElementsByClassName('buysellcatgryModify').addEventListener("click",function(e) {
		  if (e.target && e.target.matches("li")) {
		    li.classList.add('active')
    		} else {
		      li.classList.remove('active')
		    }
		});
});

</script>
