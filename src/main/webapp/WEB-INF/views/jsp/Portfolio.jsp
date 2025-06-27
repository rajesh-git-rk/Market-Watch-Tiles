           
<!--             <div class="main_content" > -->
               <div class="main_content" id="PortfolioDivId" >  
                <div class="row">
                    <div class="col-md-12">
                        <!-- Nav tabs -->
                        <ul class="nav nav-tabs" id="tradeStatusTab" role="tablist">
                            <li class="nav-item" role="presentation">
                              <button class="nav-link active" onclick="PosistionBookfunction();" id="position-tab" data-bs-toggle="tab" data-bs-target="#positionPane" type="button" role="tab" aria-controls="positionPane" aria-selected="true">
                                Positions
                                <span>6</span>
                              </button>
                            </li>
                            <li class="nav-item" role="presentation">
                              <button class="nav-link" onclick="Holdingfunction();" id="holdings-tab" data-bs-toggle="tab" data-bs-target="#holdingsPane" type="button" role="tab" aria-controls="holdingsPane" aria-selected="false">
                                Holdings
                                <span>6</span>
                              </button>
                            </li>                            
                            <li class="extraBtn">
                                <div class="position-tab-btn">
                                    <button class="btn btn-primary active DayclsPosition" type="button" id="DayIdPosition" value="Day">DAY</button>
                                    <button class="btn btn-primary NetclsPosition" type="button" id="NetIdPosition" value="CF">NET</button>
                                </div>
<!--                                 <div class="holdings-tab-btn d-none"> -->
									<div class="holdings-tab-btn" >
                                    <button class="btn btn-primary active" type="button"  data-bs-toggle="modal" data-bs-target="#holdAnalysisModal">Analysis</button>
                                    <button class="btn btn-primary active" type="button" onclick="holdingnonPOAfunction();" data-bs-toggle="modal" data-bs-target="#authorizeModal"><i class="bi bi-unlock"></i> Authorize</button>
                                </div>
                            </li>
                        </ul>
                        <!-- Tab panes -->
                        <div class="tab-content holding_tab">
                            <div class="tab-pane active" id="positionPane" role="tabpanel" aria-labelledby="position-tab">
                                <div class="data-table-main clearfix">
                                    <div class="download">
                                        <a href="#"><i class="bi bi-file-earmark-arrow-down"></i></a>
                                    </div>
                                    <div class="table-responsive table-custom" style="width:100%">
                                        <table class="display table table-borderless" id="tablePosition" style="width:100%">
                                            <thead>
                                                <tr>
                                                    <th data-priority="1">Symbol</th>
                                                    <th data-priority="5">Buy/Sell</th>
                                                    <th data-priority="9">QTY</th>
                                                    <th data-priority="10">Product</th>
                                                    <th data-priority="15">Price</th>
                                                    <!-- <th data-priority="20">Trigger Price</th>
                                                    <th data-priority="21">Status</th> -->
                                                    <th data-priority="22">LTP</th>
                                                    <th data-priority="25">MTM</th>
                                                    <th data-priority="1"></th>
                                                </tr>
                                            </thead>
                                        </table>
                                    </div>                            
                                </div>
                            </div>
                            <div class="tab-pane" id="holdingsPane" role="tabpanel" aria-labelledby="holdings-tab">
                                <div class="data-table-main clearfix">
                                    <div class="download">
                                        <a href="#"><i class="bi bi-file-earmark-arrow-down"></i></a>
                                    </div>
                                    <div class="table-responsive table-custom">
                                        <table class="display table table-borderless" id="tableHoldings" style="width:100%">
                                            <thead>
                                                <tr>
                                                    <th data-priority="1">Symbol</th>
                                                    <th data-priority="2">Net QTY</th>
                                                    <th data-priority="3">Avg. Price</th>
                                                    <th data-priority="4">LTP</th>
                                                    <th data-priority="5">Current Value</th>
                                                    <th data-priority="6">P&L</th>
                                                    <th data-priority="7">P&L %</th>
                                                    <th data-priority="1"></th>
                                                </tr>
                                            </thead>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
    <!-- Buy Sell Modal -->
<!--     <div class="modal fade buySellModal" id="buySellModal" data-bs-backdrop="false" data-bs-keyboard="true" -->
<!--         tabindex="-1" aria-labelledby="buySellModalLabel" aria-hidden="true"> -->
<!--         <div class="modal-dialog modal-lg"> -->
<!--             <div class="modal-content"> -->
<!--                 <div class="modal-header"> -->
<!--                     <h5 class="modal-title" id="buySellModalLabel"> -->
<!--                         <span class="left"> -->
<!--                             CRUDEOIL -->
<!--                             <label>MCX FUT 26SEPT2021</label> -->
<!--                         </span> -->
<!--                         <span class="right"> -->
<!--                             5,030.00 -->
<!--                             <label><i class="bi bi-chevron-up"></i> (+0,52%)</label> -->
<!--                         </span> -->
<!--                     </h5> -->
<!--                     <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> -->
<!--                 </div> -->
<!--                 <div class="modal-body"> -->
<!--                     <div class="row"> -->
<!--                         <div class="col"> -->
<!--                             <div class="buySellSwitcher"> -->
<!--                                 <div class="form-check form-switch"> -->
<!--                                     <label class="form-check-label" for="switchBuySell">Buy</label> -->
<!--                                     <input class="form-check-input" type="checkbox" role="switch" id="switchBuySell"> -->
<!--                                     <label class="form-check-label" for="switchBuySell">Sell</label> -->
<!--                                 </div> -->
<!--                             </div> -->
<!--                             <ul class="buysellcatgry"> -->
<!--                                 <li class="active">REG</li> -->
<!--                                 <li>BO</li> -->
<!--                                 <li>CO</li> -->
<!--                                 <li>AMO</li> -->
<!--                             </ul> -->
<!--                             <div class="form-field"> -->
<!--                                 <div class="row"> -->
<!--                                     <div class="col-6">Buy Price</div> -->
<!--                                     <div class="col-6"> -->
<!--                                         <div class="form-group"> -->
<!--                                             <input type="text" class="form-control" value="26,231.00" /> -->
<!--                                         </div> -->
<!--                                     </div> -->
<!--                                 </div> -->
<!--                                 <div class="row"> -->
<!--                                     <div class="col-6">Quantity</div> -->
<!--                                     <div class="col-6"> -->
<!--                                         <div class="form-group"> -->
<!--                                             <div class="number-spinner"> -->
<!--                                                 <span class="ns-btn"> -->
<!--                                                     <a data-dir="dwn"><i class="bi bi-dash"></i></a> -->
<!--                                                 </span> -->
<!--                                                 <input type="text" class="pl-ns-value form-control" value="1" -->
<!--                                                     maxlength=2> -->
<!--                                                 <span class="ns-btn"> -->
<!--                                                     <a data-dir="up"><i class="bi bi-plus"></i></a> -->
<!--                                                 </span> -->
<!--                                             </div> -->
<!--                                         </div> -->
<!--                                     </div> -->
<!--                                 </div> -->
<!--                                 <div class="row"> -->
<!--                                     <div class="col-6">Disclosed Qty</div> -->
<!--                                     <div class="col-6"> -->
<!--                                         <div class="form-group"> -->
<!--                                             <input type="text" class="form-control" value="0" /> -->
<!--                                         </div> -->
<!--                                     </div> -->
<!--                                 </div> -->
<!--                                 <div class="row"> -->
<!--                                     <div class="col-12">Order Type</div> -->
<!--                                     <div class="col-12"> -->
<!--                                         <ul class="buysellcatgry"> -->
<!--                                             <li class="active">LIMIT</li> -->
<!--                                             <li>MARKET</li> -->
<!--                                             <li>SL</li> -->
<!--                                             <li>SLM</li> -->
<!--                                         </ul> -->
<!--                                     </div> -->
<!--                                 </div> -->
<!--                             </div> -->
<!--                         </div> -->
<!--                         <div class="col"> -->
<!--                             <div class="modal-btn-content"> -->
<!--                                 <div class="form-field"> -->
<!--                                     <div class="row"> -->
<!--                                         <div class="col-12">Products</div> -->
<!--                                         <div class="col-12"> -->
<!--                                             <ul class="buysellcatgry"> -->
<!--                                                 <li class="active">MIS</li> -->
<!--                                                 <li>NRML</li> -->
<!--                                             </ul> -->
<!--                                         </div> -->
<!--                                     </div> -->
<!--                                     <div class="row"> -->
<!--                                         <div class="col-12">Validity</div> -->
<!--                                         <div class="col-12"> -->
<!--                                             <ul class="buysellcatgry"> -->
<!--                                                 <li class="active">DAY</li> -->
<!--                                                 <li>IOC</li> -->
<!--                                                 <li>GTC</li> -->
<!--                                                 <li>GTD</li> -->
<!--                                                 <li>GTT</li> -->
<!--                                             </ul> -->
<!--                                         </div> -->
<!--                                     </div> -->
<!--                                 </div> -->
<!--                                 <div class="margin_info"> -->
<!--                                     <p>Req. Margin <span>12,995.50</span></p> -->
<!--                                     <p>Avail. Margin <span>15,500.00</span></p> -->
<!--                                 </div> -->
<!--                                 <div class="form-field"> -->
<!--                                     <button type="button" class="btn btn-default btn-block">BUY</button> -->
<!--                                 </div> -->
<!--                             </div> -->
<!--                         </div> -->
<!--                     </div> -->
<!--                 </div> -->
<!--             </div> -->
<!--         </div> -->
<!--     </div> -->
    
    
    <!-- View Chart Modal -->
    <div class="modal fade marketDepthModal" id="marketDepthModal" data-bs-backdrop="false" data-bs-keyboard="true"
        tabindex="-1" aria-labelledby="marketDepthModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    <div class="modal-title">
                        <h4>BankNifty</h4>
                        <label class="tp_red">Put</label>
                    </div>
                    <div class="product_info ">
                        <p class="tp_blue"><span>NSE 24 </span> <span> June 2021</span> <span> 34900CE</span></p>
                    </div>
                </div>
                <div class="modal-body y_scroll">
                    <div class="marketList">
                        <ul>
                            <li>
                                <span>LTP</span>
                                <span class="tp_red">513.65</span>
                            </li>
                            <li>
                                <span>OI <small>(Open Interest)</small></span>
                                <span>3,30,800</span>
                            </li>
                            <li>
                                <span>IV <small>(Implied Volume)</small> %</span>
                                <span>2.02%</span>
                            </li>
                            <li>
                                <span>Gamma</span>
                                <span>513.65</span>
                            </li>
                            <li>
                                <span>Vega</span>
                                <span>10.2320</span>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <span>LTP Change (%) </span>
                                <span>+47.23%</span>
                            </li>
                            <li>
                                <span>OI Change (%)</span>
                                <span>+7.20%</span>
                            </li>
                            <li>
                                <span>Delta</span>
                                <span>0.5660</span>
                            </li>
                            <li>
                                <span>Theta</span>
                                <span>-66.6370</span>
                            </li>
                            <li>
                                <span>Rho</span>
                                <span>1.0480</span>
                            </li>
                        </ul>
                    </div>
                    <h5 class="tp_blue mt-3 accordion-title">
                        <span><i class="bi bi-filter"></i> Market Depth</span>
                    </h5>
                    <div class="price-list">
                        <ul class="buy-list" aria-dropeffect="move">
                            <li class="plist-head" role="option" aria-grabbed="false">
                                <span>Price</span>
                                <span>Buyers</span>
                                <span>Qty</span>
                            </li>
                            <li class="plist-item" role="option" aria-grabbed="false">
                                <span>23233.22</span>
                                <span>10</span>
                                <span>26,235</span>
                            </li>
                            <li class="plist-item" role="option" aria-grabbed="false">
                                <span>23233.22</span>
                                <span>10</span>
                                <span>26,235</span>
                            </li>
                            <li class="plist-item" role="option" aria-grabbed="false">
                                <span>23233.22</span>
                                <span>10</span>
                                <span>26,235</span>
                            </li>
                            <li class="plist-item" role="option" aria-grabbed="false">
                                <span>23233.22</span>
                                <span>10</span>
                                <span>26,235</span>
                            </li>
                            <li class="plist-item" role="option" aria-grabbed="false">
                                <span>23233.22</span>
                                <span>10</span>
                                <span>26,235</span>
                            </li>
                            <li class="plist-botm" role="option" aria-grabbed="false">
                                <span>Bid Total</span>
                                <span>85,235,44</span>
                            </li>
                        </ul>
                        <ul class="sell-list" aria-dropeffect="move">
                            <li class="plist-head" role="option" aria-grabbed="false">
                                <span>Price</span>
                                <span>Buyers</span>
                                <span>Qty</span>
                            </li>
                            <li class="plist-item" role="option" aria-grabbed="false">
                                <span>23233.22</span>
                                <span>10</span>
                                <span>26,235</span>
                            </li>
                            <li class="plist-item" role="option" aria-grabbed="false">
                                <span>23233.22</span>
                                <span>10</span>
                                <span>26,235</span>
                            </li>
                            <li class="plist-item" role="option" aria-grabbed="false">
                                <span>23233.22</span>
                                <span>10</span>
                                <span>26,235</span>
                            </li>
                            <li class="plist-item" role="option" aria-grabbed="false">
                                <span>23233.22</span>
                                <span>10</span>
                                <span>26,235</span>
                            </li>
                            <li class="plist-item" role="option" aria-grabbed="false">
                                <span>23233.22</span>
                                <span>10</span>
                                <span>26,235</span>
                            </li>
                            <li class="plist-botm" role="option" aria-grabbed="false">
                                <span>Bid Total</span>
                                <span>85,235,44</span>
                            </li>
                        </ul>
                    </div>
                    <div class="progress-indicator">
                        <i class="bi bi-arrow-up-square-fill tp_lgreen"></i>
                        <div class="progess-item">
                            <div class="pg-block bg-lightblue" style="width:58%">58%
                            </div>
                            <div class="pg-block bg-red" style="width:42%">42%</div>
                        </div>
                        <i class="bi bi-arrow-down-square-fill clr-red"></i>
                    </div>
                    <div class="performance-area mt-4">
                        <h5 class="tp_blue mb-2 accordion-title">
                            <span><i class="bi bi-building"></i> Performance</span>
                        </h5>
                        <div class="col-md-12 mb-3">
                            <ul class="rangelist">
                                <li>
                                    <div class="low">
                                        <label class="form-label">Today's Low <span>₹ 26400.00
                                            </span></label>
                                    </div>
                                    <div class="high">
                                        <label class="form-label">Today's High <span>₹ 26800.00
                                            </span></label>
                                    </div>
                                </li>
                            </ul>
                            <input type="range" min="10" max="1000" step="10" value="300" data-orientation=""
                                disabled="disabled" />
                        </div>
                        <div class="col-md-12 mb-3">
                            <ul class="rangelist">
                                <li>
                                    <div class="low">
                                        <label class="form-label">52W Low <span>₹ 26400.00
                                            </span></label>
                                    </div>
                                    <div class="high">
                                        <label class="form-label">52W High <span>₹ 26800.00
                                            </span></label>
                                    </div>
                                </li>
                            </ul>
                            <input type="range" min="10" max="1000" step="10" value="300" data-orientation=""
                                disabled="disabled" />
                        </div>
                        <div class="col-md-12 mb-3">
                            <ul class="rangelist">
                                <li>
                                    <div class="low">
                                        <label class="form-label">Lower Circuit <span>₹ 26400.00
                                            </span></label>
                                    </div>
                                    <div class="high">
                                        <label class="form-label">Upper Circuit
                                            <span>₹ 26800.00 </span></label>
                                    </div>
                                </li>
                            </ul>
                            <input type="range" min="10" max="1000" step="10" value="300" data-orientation=""
                                disabled="disabled" />
                        </div>
                        <div class="col-md-12">
                            <ul class="rangelist_bottom">
                                <li>
                                    <label>Open <span>₹ 26555.05</span></label>
                                    <label>Prev. Close <span>₹ 26514.95</span></label>
                                    <label>Volume <span>₹ 1,16,45,555</span></label>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Symbol Info Modal -->
    <div class="modal fade symbolInfoModal" id="symbolInfoModal" data-bs-backdrop="false" data-bs-keyboard="true"
        tabindex="-1" aria-labelledby="symbolInfoModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <div class="modal-title">
                        <h6>Symbol Info</h6>
                    </div>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"><i
                            class="bi bi-x-lg"></i></button>
                </div>
                <div class="modal-body">
                    <ul class="info_list y_scroll">
                        <li>Board Lot Quantity <span>100</span></li>
                        <li>Book Cls End Time <span>---</span></li>
                        <li>Book Cls Start Time <span>NA</span></li>
                        <li>Buy Var marginstart <span>NA</span></li>
                        <li>Circuit Rating <span>NA</span></li>
                        <li>Comments <span>EX MUMBAI</span></li>
                        <li>Delivery End Date <span>20 Sept, 2021
                            </span></li>
                        <li>Delivery Start Date <span>20 Sept, 2021</span></li>
                        <li>Delivery Units <span>BBL</span></li>
                        <li>DPR <span>4922.00 - 5332.00</span></li>
                        <li>Exchange <span>MCX</span></li>
                        <li>Expulsion Date <span>NA</span></li>
                        <li>Freeze <span>10000.00</span></li>
                        <li>General Denominator <span>1.0000</span></li>
                        <li>General Numerator <span>1.0000</span></li>
                        <li>High Circuit Limit <span>5332.0</span></li>
                        <li>Im Spread Benefit <span>---</span></li>
                        <li>Instrument Type <span>FUTCOM</span></li>
                        <li>Int Pay Date <span>NA</span></li>
                        <li>Issue Capital <span>null</span></li>
                        <li>Issue Rate <span>0</span></li>
                        <li>Issue Start Date <span>22 Mar, 2021</span></li>
                        <li>Board Lot Quantity <span>100</span></li>
                        <li>Board Lot Quantity <span>100</span></li>
                        <li>Board Lot Quantity <span>100</span></li>
                        <li>Board Lot Quantity <span>100</span></li>
                        <li>Board Lot Quantity <span>100</span></li>
                        <li>Board Lot Quantity <span>100</span></li>
                        <li>Board Lot Quantity <span>100</span></li>
                        <li>Board Lot Quantity <span>100</span></li>
                        <li>Board Lot Quantity <span>100</span></li>
                        <li>Board Lot Quantity <span>100</span></li>
                        <li>Board Lot Quantity <span>100</span></li>
                        <li>Board Lot Quantity <span>100</span></li>
                        <li>Board Lot Quantity <span>100</span></li>
                        <li>Board Lot Quantity <span>100</span></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <!-- Option Chain Chart Modal -->
    <div class="modal fade optionChainModal" id="optionChainChartModal" data-bs-backdrop="false" data-bs-keyboard="true"
        tabindex="-1" aria-labelledby="optionChainChartModal" aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header bg-lightblue">
                    <div class="modal-title">
                        <h6>BANKNIFTY <span>NSE OPT 35300.00CE</span></h6>
                    </div>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <img src="./resourcefiles/images/option-chain.png" class="img-fluid" />
                </div>
            </div>
        </div>
    </div>
    <!-- Portfolio Holding Authorize Modal -->
    <div class="modal fade authorizeModal" id="authorizeModal" data-bs-backdrop="false" data-bs-keyboard="true"
        tabindex="-1" aria-labelledby="authorizeModal" aria-hidden="true">
        <div class="modal-dialog modal-xs">
            <div class="modal-content">
                <div class="modal-header">
                    <div class="modal-title">
                        <img src="./resourcefiles/images/cdsl-logo.jpg" alt="cdsl logo" />
                        <h6>e-DIS Transaction Verification<span>Convenient. Dependable. Secure</span></h6>
                    </div>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="alert alert-info">
                        <i class="bi bi-info-circle"></i>
                        <p>Disclaimer: This is electronic trade slip, which allows us to debit your Demat Holding with stocks
                            approved by you. Through this authorization, you will be able to sell the stocks for delivery. The
                            authorization is valid for one day only. At any point of time you can generate or reset your TPIN
                            using the CDSL link https://edis.cdslindia.com/home/generatepin where it will ask for your BOID
                            and PAN. The user can always regenerate the TPIN using the above CDSL link. To change TPIN
                            use the link https://edis.cdslindia.com/home/changepin</p>
                    </div>
                    <div class="bioId">
                       <label>BO ID</label>
                       <input type="text" class="form-control" id="bioIdInput" value="1209240000025008" />
                        <input type="hidden" id="settlehiddenId" value="2021248" />
                       <i class="bi bi-files copytoClip" onclick="copyToClipboard('bioIdInput')"></i>
                    </div>
                    
                    <div class="scrollContent">
                        <div class="scrollHeader">
                            <ul>
                              <!--  <li>Select Instrument</li>
                                 <li>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="boidSelectAll">
                                        <label class="form-check-label" for="boidSelectAll">
                                            Select All
                                        </label>
                                    </div>
                                </li>
                                <li>QTY</li>-->
                            </ul> 
                        </div>
                        
                        <div class="scrollBody">
                            
                           
                           <ul>
                               
                             <!-- Dynamic data -->
                           </ul>
       
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary btn-authorize" onclick='finalSelectedCheckbox()'><i class="bi bi-unlock"></i> Authorize</button>
                    <button type="button" class="btn btn-primary btn-cdsl hide" onclick="continuetocdsl()"> Continue to CDSL</button>
                  </div>
            </div>
        </div>
    </div>
     <!-- Portfolio Holding Authorize Modal -->
     <div class="modal fade holdAnalysisModal" id="holdAnalysisModal" data-bs-backdrop="false" data-bs-keyboard="true"
     tabindex="-1" aria-labelledby="holdAnalysisModal" aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <div class="modal-title">
                        <h6>Holding Analysis</h6>
                    </div>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="holding_box">
                        <div class="boxItem">
                            <div class="box-content">
                                <img src="./resourcefiles/images/analysis_1.jpg" class="img-fluid" alt="holding analysis 1" />
                            </div>
                        </div>
                        <div class="boxItem">
                            <div class="box-content">
                                <img src="./resourcefiles/images/analysis_2.jpg" class="img-fluid" alt="holding analysis 2" />
                            </div>
                        </div>
                        <div class="boxItem">
                            <div class="box-content">
                                <img src="./resourcefiles/images/analysis_3.jpg" class="img-fluid" alt="holding analysis 3" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div class="main_content">
        <div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11">
            <div id="" class="toast_success toastCopy toast hide" role="alert" aria-live="assertive" aria-atomic="true">
                <div class="toast-header">
                    <div class="toast-info">
                        <div class="toast-inner">
                            <i class="bi bi-check2-all"></i>
                            <div>
                                <p><strong class="me-auto">Copied!!</strong></p> 
                                <p class="copyContent">Success message</p>
                                <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
