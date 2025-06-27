
            
<!--             START FUNDS -->

            <div class="main_content" id="FundsDivId" style="display:none;">
              <div class="row">
                  <div class="col-md-6 ">
                      <div class="funds">
                          <div class="fund-type">
                              <p>ALL LEVEL (ALL)</p>
                          </div>
                          <div class="fund_info">
                              <ul class="fund_top">
                                  <li><i class="bi bi-wallet2"></i> Available Balance <i class="bi bi-question-circle-fill" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-original-title="Cash Margin - Margin Used = Available Balance"></i></li>
                                  <li class="ledger_modal" data-bs-toggle="modal" data-bs-target="#ViewLedgerModal"><i class="bi bi-journal-text"></i>View Ledger </li>
                              </ul>
                              <div class="fund_price">
                                  <h1 id="fund_price"> 45,500.00</h1>
                              </div>
                              <ul class="fund_margin">
                                  <li><p>Cash Margin</p><h3 id="cash_Margin_A"> 61,020.00</h3> <i class="bi bi-question-circle-fill" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Total Margin of the day"></i></li> </li>
                                  <li class="margin_used" data-bs-toggle="modal" data-bs-target="#MarginUsedModal"><p>Margin Used</p><h3 id="margin_Used_A">₹ 15,520.00</h3> <i class="bi bi-bookmark-fill"></i></li>
                                  <li class="payment_his" data-bs-toggle="modal" data-bs-target="#PaymentHisModal"><p>View Payment
                                    History</p>
                                    </li>
                              </ul>
                              <div>

                             <div class="row">
                                 <div class="col-6">
                                    <ul class="info_list info_list1 clearfix">
                                        <li>Total Margin <span id="total_Margin_A">₹ 61,020.00</span></li>
                                        <li>Adhoc Margin <span id="adhoc_Margin_A">₹ 45,500.00</span></li>
                                        <li>SPAN <span id="SPAN_A">₹ 0.00</span></li>
                                        <li>Pay In <span id="pay_In_A">₹ 15,000.00</span></li>
                                        <li>Pay Out <span id="pay_Out_A">₹ 2,000.00</span></li>
                                       
                                       
                                      
                                       
                                        
                                    </ul>
                                 </div>
                                 <div class="col-6">
                                     <ul class="info_list clearfix">
                                        <li>Collateral <span id="collateral_A">₹ 0.00</span></li>
                                        
                                        <li>Exposure Margin <span id="exposure_Margin_A">₹ 0.00</span></li>
                                       
                                        <li>Var Margin <span id="var_Margin_A">₹ 0.00</span></li>
                                        
                                        <li>Premium present <span id="premium_Present_A">₹ 100.00</span></li>
                                     </ul>
                                 </div>
                             </div>

                             <div class="row justify-content-center button-pay">
                                <div class="col-md-4 col-sm-4">
                                    <button type="button" class="btn btn-green btn-default btn-block" onclick="payinLinkKambala();"><i class="bi bi-cash-coin"></i> PayIn</button>
                                  
                                </div>
                                <div class="col-md-4 col-sm-4">
                                    <button type="button" class="btn btn-green btn-default btn-block" onclick="payoutLinkKambala();"><i class="bi bi-trash"></i> Payout</button>
                                  
                                </div>
                            </div>
                             
                        </div>
                          </div>
                      </div>
                  </div>
                  <div class="col-md-6 ">
                    <div class="funds">
                        <div class="fund-type">
                            <p>ALL LEVEL (COM)</p>
                        </div>
                        <div class="fund_info">
                            <ul class="fund_top">
                                <li><i class="bi bi-wallet2"></i> Available Balance <i class="bi bi-question-circle-fill" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-original-title="Cash Margin - Margin Used = Available Balance"></i></li>
                                <li class="ledger_modal" data-bs-toggle="modal" data-bs-target="#ViewLedgerModal"><i class="bi bi-journal-text"></i>View Ledger </li>
                            </ul>
                            <div class="fund_price">
                                <h1 id="fund_price_C">₹ 0.00</h1>
                            </div>
                            <ul class="fund_margin">
                                <li><p>Cash Margin</p><h3 id="cash_Margin_C">₹ 0.00</h3> <i class="bi bi-question-circle-fill" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Total Margin of the day"></i></li> </li>
                                <li class="margin_used" data-bs-toggle="modal" data-bs-target="#MarginUsedModal"><p>Margin Used</p><h3 id="margin_Used_C">₹ 0.00</h3> <i class="bi bi-bookmark-fill"></i></li>
                                <li class="payment_his" data-bs-toggle="modal" data-bs-target="#PaymentHisModal"><p>View Payment
                                  History</p>
                                  </li>
                            </ul>
                            <div>

                           <div class="row">
                               <div class="col-6">
                                  <ul class="info_list info_list1 clearfix">
                                      <li>Total Margin <span id="total_Margin_C">₹ 0.00</span></li>
                                      <li>Adhoc Margin <span id="adhoc_Margin_C">₹ 0.00</span></li>
                                      <li>SPAN <span id="SPAN_C">₹ 0.00</span></li>
                                      <li>Pay In <span id="pay_In_C">₹ 0.00</span></li>
                                      <li>Pay Out <span id="pay_Out_C">₹ 0.00</span></li>
                                  </ul>
                               </div>
                               <div class="col-6">
                                   <ul class="info_list clearfix">
                                      <li>Collateral <span id="collateral_C">₹ 0.00</span></li>
                                      
                                      <li>Exposure Margin <span id="exposure_Margin_C">₹ 0.00</span></li>
                                     
                                      <li>Var Margin <span id="var_Margin_C">₹ 0.00</span></li>
                                      
                                      <li>Premium present <span id="premium_Present_C">₹ 0.00</span></li>
                                   </ul>
                               </div>
                           </div>

                           <div class="row justify-content-center button-pay">
                              <div class="col-md-4 col-sm-4">
                                  <button type="button" class="btn btn-green btn-default btn-block" onclick="payinLinkKambala();"><i class="bi bi-cash-coin"></i> PayIn</button>
                                
                              </div>
                              <div class="col-md-4 col-sm-4">
                                  <button type="button" class="btn btn-green btn-default btn-block" onclick="payoutLinkKambala();"><i class="bi bi-trash"></i> Payout</button>
                                
                              </div>
                          </div>
                           
                      </div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
            
            
   <!-- Margin Used Modal -->
   <div class="modal fade MarginUsedModal" id="MarginUsedModal" data-bs-backdrop="false" data-bs-keyboard="true"
   tabindex="-1" aria-labelledby="MarginUsedModalLabel" aria-hidden="true">
   <div class="modal-dialog">
       <div class="modal-content">
           <div class="modal-header">
               <div class="modal-title">
                   <h6>Margin Used</h6>
               </div>
               <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"><i
                       class="bi bi-x-lg"></i></button>
           </div>
           <div class="modal-body">
               <div class="margin_used_content">
                <ul class="pro-info">
                    <li><h2>ITC <span>NSE</span><span>EQ</span><span>MARKET</span></h2></li>
                    <li><h2 class="price_bold">535.76</h2></li>
                </ul>
                <ul class="pro-info">
                    <li><h6>Margin Used <span>535.76</span></h6></li>
                    <li><p class="quantity">QTY: 1</p>
                </ul>
                <ul class="pro-info pro_ifo_btm">
                    <li><label class="buy-label">BUY</label> <span class="time">16:04:22</span></li>
                    <li><p>Open</p>
                </ul>
               </div>
               <div class="margin_used_content">
                <ul class="pro-info">
                    <li><h2>BANKNIFTY 21MAYFUT <span>NFO</span></h2></li>
                    <li><h2 class="price_bold">535.76</h2></li>
                </ul>
                <ul class="pro-info">
                    <li><h6>Margin Used <span>535.76</span></h6></li>
                    <li><p class="quantity">QTY: 1</p>
                </ul>
                <ul class="pro-info pro_ifo_btm">
                    <li><label class="sell-label">Sell</label> <span class="time">16:04:22</span></li>
                    <li><p>Closed</p>
                </ul>
               </div>
           </div>
       </div>
   </div>
</div>
 <!-- Payment History Modal -->
 <div class="modal fade PaymentHisModal" id="PaymentHisModal" data-bs-backdrop="false" data-bs-keyboard="true"
 tabindex="-1" aria-labelledby="PaymentHisModalLabel" aria-hidden="true">
 <div class="modal-dialog">
     <div class="modal-content">
         <div class="modal-header">
             <div class="modal-title">
                 <h6>Payment History</h6>
             </div>
             <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"><i
                     class="bi bi-x-lg"></i></button>
         </div>
         <div class="modal-body">
            <ul class="nav nav-tabs paymenthistory" id="paymenthistory-tab" role="tablist">
                <li class="nav-item" role="presentation">
                    <a class="nav-link active" id="payin-tab" data-bs-toggle="tab" href="#payin" role="tab" aria-controls="payin" aria-selected="true">PAYIN</a>
                </li>
                <li class="nav-item" role="presentation">
                    <a class="nav-link" id="payout-tab" data-bs-toggle="tab" href="#payout" role="tab" aria-controls="payout" aria-selected="false">PAYOUT</a>
                </li>

            </ul>
            <div class="tab-content">
                <div class="tab-pane fade active show" id="payin" role="tabpanel" aria-labelledby="payin-tab">
                    <div class="y_scroll payment_inner">
                        <div class="payment_content">
                            <ul class="pay_history">
                                <li>
                                    <h6>21 AUG 2021 <span class="float-end">₹535.76</span></h6>
                                   
                                </li>
                               
                            </ul>
                            <ul class="pro-info pro_ifo_btm">
                                <li><span class="time">16:04:22</span> <label class="success-label">Success</label> </li>
                                <li><p>Atom</p>
                            </li></ul>
                        </div>
                        <div class="payment_content">
                            <ul class="pay_history">
                                <li>
                                    <h6>21 AUG 2021 <span class="float-end">₹535.76</span></h6>
                                   
                                </li>
                               
                            </ul>
                            <ul class="pro-info pro_ifo_btm">
                                <li><span class="time">16:04:22</span> <label class="fail-label">Failed</label> </li>
                                <li><p>IMPS/NEFT</p>
                            </li></ul>
                        </div>
                        <div class="payment_content">
                            <ul class="pay_history">
                                <li>
                                    <h6>21 AUG 2021 <span class="float-end">₹535.76</span></h6>
                                   
                                </li>
                               
                            </ul>
                            <ul class="pro-info pro_ifo_btm">
                                <li><span class="time">16:04:22</span> <label class="success-label">Success</label> </li>
                                <li><p>Atom</p>
                            </li></ul>
                        </div>
                        <div class="payment_content">
                            <ul class="pay_history">
                                <li>
                                    <h6>21 AUG 2021 <span class="float-end">₹535.76</span></h6>
                                   
                                </li>
                               
                            </ul>
                            <ul class="pro-info pro_ifo_btm">
                                <li><span class="time">16:04:22</span> <label class="success-label">Success</label> </li>
                                <li><p>Atom</p>
                            </li></ul>
                        </div>
                        <div class="payment_content">
                            <ul class="pay_history">
                                <li>
                                    <h6>21 AUG 2021 <span class="float-end">₹535.76</span></h6>
                                   
                                </li>
                               
                            </ul>
                            <ul class="pro-info pro_ifo_btm">
                                <li><span class="time">16:04:22</span> <label class="success-label">Success</label> </li>
                                <li><p>Atom</p>
                            </li></ul>
                        </div>
                    </div>
                    <!-- No Data PayIn-->
                    <!-- <div class="row justify-content-center">
                        <div class="pay_no_data">
                            <img src="images/nodata-main.png" class="img-fluid" />
                            <p>No Pay-In has been received yet today. Click below<br/>
                                button to Add fund to invest/trade.
                                </p>
                        </div>
                    </div> -->
                    <div class="row justify-content-center button-pay">
                        <div class="col-md-5 col-sm-6">
                            <button type="button" class="btn btn-green btn-blue btn-default btn-block"><i class="bi bi-cash-coin"></i> PayIn</button>
                          
                        </div>
                       
                    </div>
                  

                </div>
                <div class="tab-pane fade" id="payout" role="tabpanel" aria-labelledby="payout-tab">
                    <div class="y_scroll payment_inner">
                        <div class="payment_content">
                            <ul class="pay_history">
                                <li>
                                    <h6>21 AUG 2021 <span class="float-end">₹535.76</span></h6>
                                   
                                </li>
                               
                            </ul>
                            <ul class="pro-info pro_ifo_btm">
                                <li><span class="time">16:04:22</span> <label class="success-label">Success</label> </li>
                                <li><p>Atom</p>
                            </li></ul>
                        </div>
                        <div class="payment_content">
                            <ul class="pay_history">
                                <li>
                                    <h6>21 AUG 2021 <span class="float-end">₹535.76</span></h6>
                                   
                                </li>
                               
                            </ul>
                            <ul class="pro-info pro_ifo_btm">
                                <li><span class="time">16:04:22</span> <label class="fail-label">Failed</label> </li>
                                <li><p>IMPS/NEFT</p>
                            </li></ul>
                        </div>
                        <div class="payment_content">
                            <ul class="pay_history">
                                <li>
                                    <h6>21 AUG 2021 <span class="float-end">₹535.76</span></h6>
                                   
                                </li>
                               
                            </ul>
                            <ul class="pro-info pro_ifo_btm">
                                <li><span class="time">16:04:22</span> <label class="success-label">Success</label> </li>
                                <li><p>Atom</p>
                            </li></ul>
                        </div>
                        <div class="payment_content">
                            <ul class="pay_history">
                                <li>
                                    <h6>21 AUG 2021 <span class="float-end">₹535.76</span></h6>
                                   
                                </li>
                               
                            </ul>
                            <ul class="pro-info pro_ifo_btm">
                                <li><span class="time">16:04:22</span> <label class="success-label">Success</label> </li>
                                <li><p>Atom</p>
                            </li></ul>
                        </div>
                        <div class="payment_content">
                            <ul class="pay_history">
                                <li>
                                    <h6>21 AUG 2021 <span class="float-end">₹535.76</span></h6>
                                   
                                </li>
                               
                            </ul>
                            <ul class="pro-info pro_ifo_btm">
                                <li><span class="time">16:04:22</span> <label class="success-label">Success</label> </li>
                                <li><p>Atom</p>
                            </li></ul>
                        </div>
                    </div>
                    <!-- No Data PayOut-->
                     <!-- <div class="row justify-content-center">
                        <div class="pay_no_data">
                            <img src="images/nodata-main.png" class="img-fluid" />
                            <p>No Pay-Out has been received yet today. Click below<br/>
                                button to Add fund to invest/trade.
                                </p>
                        </div>
                    </div> -->
                    <div class="row justify-content-center button-pay">
                    
                        <div class="col-md-5 col-sm-6">
                            <button type="button" class="btn btn-green btn-blue btn-default btn-block"><i class="bi bi-trash"></i> Payout</button>
                          
                        </div>
                    </div>

                </div>

            </div>
         </div>
     </div>
 </div>
</div>

 <!-- View Ledger Modal -->
 <div class="modal fade ViewLedgerModal"  id="ViewLedgerModal" data-bs-backdrop="false" data-bs-keyboard="true"
 tabindex="-1" aria-labelledby="ViewLedgerModalLabel" aria-hidden="true">
 <div class="modal-dialog">
     <div class="modal-content">
         <div class="modal-header">
             <div class="modal-title">
                 <h6>LEDGER</h6>
                 
             </div>
             <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"><i
                     class="bi bi-x-lg"></i></button>
         </div>
         <div class="modal-body">
            <h5>Recent Transactions</h5>
            <div class="view_ledger_inner y_scroll">
                <div class="view_ledger">
                    <div class="row">
                        <div class="col-6">
                            <ul class="ledger_left">
                                <li>18 Jun 2021 <span>MCX COM</span></li>
                                <li class="ledger_product">MCX - COM Segment</li>
                            </ul>
                        </div>
                        <div class="col-6">
                            <ul class="ledger_right credit">
                                <li class="ledger_price"><small>Credit</small> ₹14,400.00</li>
                                <li class="balance">Balance: ₹44,600.00</li>
                            </ul>
                        </div>
                    </div>
                   
                    
                </div>
                <div class="view_ledger">
                    <div class="row">
                        <div class="col-6">
                            <ul class="ledger_left">
                                <li>18 Jun 2021 <span>MCX COM</span></li>
                                <li class="ledger_product">MCX - COM Segment<small>Statutory Charges</small></li>
                            </ul>
                        </div>
                        <div class="col-6">
                            <ul class="ledger_right debit">
                                <li class="ledger_price"><small>Debit</small> -₹ 2,200.00</li>
                                <li class="balance">Balance: ₹42,400.00</li>
                            </ul>
                        </div>
                    </div>
                   
                    
                </div>
                <div class="view_ledger">
                    <div class="row">
                        <div class="col-6">
                            <ul class="ledger_left">
                                <li>18 Jun 2021 <span>MCX COM</span></li>
                                <li class="ledger_product">Pay-In Deposited <small>Mode of Payment: <strong>UPI</strong> 
                                </small></li>
                            </ul>
                        </div>
                        <div class="col-6">
                            <ul class="ledger_right credit">
                                <li class="ledger_price"><small>Credit</small> ₹5,000.00</li>
                                <li class="balance">Balance: ₹47,400.00</li>
                            </ul>
                        </div>
                    </div>
                   
                    
                </div>
                <div class="view_ledger">
                    <div class="row">
                        <div class="col-6">
                            <ul class="ledger_left">
                                <li>18 Jun 2021 <span>MCX COM</span></li>
                                <li class="ledger_product">Pay-In Deposited <small>Mode of Payment: <strong>UPI</strong> 
                                </small></li>
                            </ul>
                        </div>
                        <div class="col-6">
                            <ul class="ledger_right credit">
                                <li class="ledger_price"><small>Credit</small> ₹5,000.00</li>
                                <li class="balance">Balance: ₹47,400.00</li>
                            </ul>
                        </div>
                    </div>
                   
                    
                </div>
                <div class="view_ledger">
                    <div class="row">
                        <div class="col-6">
                            <ul class="ledger_left">
                                <li>18 Jun 2021 <span>MCX COM</span></li>
                                <li class="ledger_product">Pay-In Deposited <small>Mode of Payment: <strong>UPI</strong> 
                                </small></li>
                            </ul>
                        </div>
                        <div class="col-6">
                            <ul class="ledger_right credit">
                                <li class="ledger_price"><small>Credit</small> ₹5,000.00</li>
                                <li class="balance">Balance: ₹47,400.00</li>
                            </ul>
                        </div>
                    </div>
                   
                    
                </div>
            </div>
            <div class="row justify-content-center button-ledger">
                <div class="col-md-5">
                    <button type="button" class="btn  btn-blue btn-default btn-block"> View Detailed Ledger</button>
                  
                </div>
               
            </div>
         </div>
     </div>
 </div>
</div>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ"
        crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
    <script src="js/autocomplete.js"></script>
    <script src="js/rangeslider.min.js"></script>
    <script src="js/main.js"></script>
    <script src="js/custom.js"></script>
   
</body>

</html>