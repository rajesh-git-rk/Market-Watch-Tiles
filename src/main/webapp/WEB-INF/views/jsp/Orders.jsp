<div class="main_content">
               
    <div class="row">
        <div class="col-md-12">
            <!-- Nav tabs -->
            <ul class="nav nav-tabs" id="tradeStatusTab" role="tablist">
                <li class="nav-item" role="presentation">
                  <button class="nav-link active" id="pending-tab" data-bs-toggle="tab" data-bs-target="#pendingPane" type="button" onclick="functionOrder();" role="tab" aria-controls="pendingPane" aria-selected="true">
                    Pending
                   <!--  <span>8</span> -->
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button class="nav-link" id="completed-tab" data-bs-toggle="tab" data-bs-target="#completedPane" type="button" onclick="completeordfunc();" role="tab" aria-controls="completedPane" aria-selected="false">
                    Completed
                   <!--  <span>7</span> -->
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button class="nav-link" id="trade-tab" data-bs-toggle="tab" data-bs-target="#tradePane" type="button" onclick="tradeordfunc();" role="tab" aria-controls="tradePane" aria-selected="false">
                    Trade
                    <!-- <span>7</span> -->
                  </button>
                </li>
            </ul>
            
            
           
           
            <!-- Tab panes -->
            <div class="tab-content holding_tab">
                <div class="tab-pane active" id="pendingPane" role="tabpanel" aria-labelledby="pending-tab">
                    <div class="data-table-main clearfix">
                        <div class="download">
                            <a href="#"><i class="bi bi-file-earmark-arrow-down"></i></a>
                        </div>
                        <div class="table-responsive table-custom" style="width:100%">
                            <table class="display table table-borderless" id="tabelPending3" style="width:100%">
                                <thead>
                                    <tr>
                                        <th data-priority="1">Symbol</th>
                                        <th data-priority="5">Buy/Sell</th>
                                        <th data-priority="9">QTY</th>
                                        <th data-priority="10">Product</th>
                                        <th data-priority="15">Price</th>
                                        <th data-priority="20">Trigger Price</th>
                                        <th data-priority="21">Status</th>
                                        <th data-priority="22">LTP</th>
                                        <th data-priority="25">Avg. Price</th>
                                        <th data-priority="1" class="azioni noVis"></th>
                                    </tr>
                                </thead>
                            </table>
                        </div>                            
                    </div>
                </div>
                <div class="tab-pane" id="completedPane" role="tabpanel" aria-labelledby="completed-tab">
                    <div class="data-table-main clearfix">
                        <div class="download">
                            <a href="#"><i class="bi bi-file-earmark-arrow-down"></i></a>
                        </div>
                        <div class="table-responsive table-custom">
                            <table class="display table table-borderless" id="tabelCompleted3" style="width:100%">
                                <thead>
                                    <tr>
                                        <th data-priority="1">Symbol</th>
                                        <th data-priority="5">Buy/Sell</th>
                                        <th data-priority="9">QTY</th>
                                        <th data-priority="10">Product</th>
                                        <th data-priority="15">Price</th>
                                        <th data-priority="20">Trigger Price</th>
                                        <th data-priority="21">Status</th>
                                        <th data-priority="22">LTP</th>
                                        <th data-priority="25">Avg. Price</th>
                                        <th data-priority="1" class="azioni noVis"></th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="tab-pane" id="tradePane" role="tabpanel" aria-labelledby="trade-tab">
                    <div class="data-table-main clearfix">
                        <div class="download">
                            <a href="#"><i class="bi bi-file-earmark-arrow-down"></i></a>
                        </div>
                        <div class="table-responsive table-custom">
                            <table class="display table table-borderless" id="tabelTrade3" style="width:100%">
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
                                        <th data-priority="20">Exch.Order ID</th>
                                        <th data-priority="21">Exch.DateTime</th>
                                        <th data-priority="1" class="azioni noVis"></th>
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