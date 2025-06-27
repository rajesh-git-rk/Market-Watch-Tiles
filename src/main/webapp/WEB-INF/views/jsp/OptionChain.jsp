 
   <div class="main_content OptionChainDiv" style="display:none;">
                <div class="row mt-2 mb-2">
                    <div class="col-md-7 col-sm-8">
                        <div class="row">
                            <div class="col-md-5 col-sm-7">
                                <div class=" search_table d-flex">
                                    <button type="submit" class="search_btn"><i class="bi bi-search"></i></button>
                                    <input type="text" class="form-control" id="search_table" placeholder=""
                                        autocomplete="off">
                                </div>
                            </div>
                            <div class="col-md-3 col-sm-5">
                                <select class="form-select date-dropdown">
                                    <option selected>Expiry: 26 Sept 2021</option>
                                    <option value="">Expiry: 27 Sept 2021</option>
                                    <option value="">Expiry: 28 Sept 2021</option>
                                </select>
                            </div>
                            <div class="col-md-3">
                                <div class="table-price d-flex">

                                    <div class="price_with_txt">
                                        <label class="tp_blue">Spot</label>
                                        <p class="price_txt">26,535.76</p>
                                    </div>
                                    <div class="price_with_txt">
                                        <label>Future</label>
                                        <p class="price_txt">26,535.76</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="col-md-5 col-sm-4">
                        <div class="float-end mt-2"><a href="#" class="text-blue right-link"><i
                                    class="bi bi-arrow-left-circle-fill"></i> Back to Chart</a></div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="table-responsive table_head table-custom clearfix">
                            <table class="table table-borderless">
                                <thead>
                                    <tr>
                                        <th scope="col">IV%</th>
                                        <th scope="col">OI%</th>
                                        <th scope="col">CHG%</th>
                                        <th scope="col">LTP</th>
                                        <th scope="col">Strike Price</th>
                                        <th scope="col">LTP</th>
                                        <th scope="col">CHG%</th>
                                        <th scope="col">OI%</th>
                                        <th scope="col">IV%</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                        <div class="oc-table-main clearfix">
                            <div class="oc-table-holder">
                                <div class="oc-table-left">
                                    <div class="table-responsive table-custom">
                                        <table class="table table-borderless">
                                        
                                        
                                    <tbody id="OptionChainbodycallId"  class="" style="display:none;height:650px;overflow:scroll;vertical-align: top;table-layout: fixed;width:100%;overflow:auto;padding-top:10px;padding-bottom:10px;padding-right:10px;padding-left:10px;text-align:center;font-size:12px;font-family:Helvetica,Sans-Serif;">
          		 					<caption id="captionId" class="captionclass">
          							<label id="OptionChaininnerbodycallId" style="margin-left:418px;margin-top:10px;display:none;">No OptionChain Available</label>
   									</caption>
       								 </tbody>    
                                        
                                         <!--    <tbody>
                                                <tr>
                                                    <td>+2.02%</td>
                                                    <td>+7.02%</td>
                                                    <td>+47.02%</td>
                                                    <td class="td_green">76.95</td>
                                                    <td class="hover_Btns">
                                                        <ul>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Buy">
                                                                <button class="btn btn-lightBlue btn-showbuysell"
                                                                    type="button" data-modal-type="buy">
                                                                    B
                                                                </button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Sell">
                                                                <button class="btn btn-red btn-showbuysell"
                                                                    type="button" data-modal-type="sell">
                                                                    S
                                                                </button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Market Depth">
                                                                <button class="btn" type="button" data-bs-toggle="modal"
                                                                    data-bs-target="#marketDepthModal">
                                                                    <!-- <i class="bi bi-chevron-bar-expand"></i> 
                                                                    <i class="bi bi-upc-scan"></i>
                                                                </button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="View Chart">
                                                                <button class="btn" type="button" data-bs-toggle="modal"
                                                                data-bs-target="#optionChainChartModal"><i
                                                                        class="bi bi-graph-up"></i></button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="More">
                                                                <div class="dropdown">
                                                                    <button class="btn btn-secondary dropdown-toggle"
                                                                        type="button" id="hoverdropdownMenuButton1"
                                                                        data-bs-toggle="dropdown" aria-expanded="false">
                                                                        <i class="bi bi-three-dots-vertical"></i>
                                                                    </button>
                                                                    <ul class="dropdown-menu dropdown-menu-end"
                                                                        aria-labelledby="hoverdropdownMenuButton1">
                                                                        <li><a class="dropdown-item" data-bs-toggle="modal"
                                                                            data-bs-target="#setAlertModal" href=":;"><i
                                                                                    class="bi-alarm"></i> Set price
                                                                                alert</a>
                                                                        </li>
                                                                        <li><a class="dropdown-item" href="#"><i
                                                                                    class="bi bi-pin-angle"></i> Pin
                                                                                Ticker
                                                                                <span>1</span><span>2</span></a></li>
                                                                        <li><a class="dropdown-item" href=":;"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#symbolInfoModal"><i
                                                                                    class="bi bi-info-circle"></i>
                                                                                Symbol info</a>
                                                                        </li>
                                                                        <li><a class="dropdown-item" href="#"><i
                                                                                    class="bi bi-plus-circle"></i> Add
                                                                                to Watchlist</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </td>
                                                </tr> -->
                                               
                                                
                                                
                                                <!-- <tr>
                                                    <td>+2.02%</td>
                                                    <td>+7.02%</td>
                                                    <td>+47.02%</td>
                                                    <td class="td_green">76.95</td>
                                                    <td class="hover_Btns">
                                                        <ul>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Buy">
                                                                <button class="btn btn-lightBlue btn-showbuysell"
                                                                    type="button" data-modal-type="buy">
                                                                    B
                                                                </button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Sell">
                                                                <button class="btn btn-red btn-showbuysell"
                                                                    type="button" data-modal-type="sell">
                                                                    S
                                                                </button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Market Depth">
                                                                <button class="btn" type="button" data-bs-toggle="modal"
                                                                    data-bs-target="#marketDepthModal">
                                                                    <i class="bi bi-chevron-bar-expand"></i>
                                                                    <i class="bi bi-upc-scan"></i>
                                                                </button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="View Chart">
                                                                <button class="btn" type="button"><i
                                                                        class="bi bi-graph-up"></i></button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="More">
                                                                <div class="dropdown">
                                                                    <button class="btn btn-secondary dropdown-toggle"
                                                                        type="button" id="hoverdropdownMenuButton1"
                                                                        data-bs-toggle="dropdown" aria-expanded="false">
                                                                        <i class="bi bi-three-dots-vertical"></i>
                                                                    </button>
                                                                    <ul class="dropdown-menu dropdown-menu-end"
                                                                        aria-labelledby="hoverdropdownMenuButton1">
                                                                        <li><a class="dropdown-item" href="#"><i
                                                                                    class="bi-alarm"></i> Set price
                                                                                alert</a>
                                                                        </li>
                                                                        <li><a class="dropdown-item" href="#"><i
                                                                                    class="bi bi-pin-angle"></i> Pin
                                                                                Ticker
                                                                                <span>1</span><span>2</span></a></li>
                                                                        <li><a class="dropdown-item" href=":;"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#symbolInfoModal"><i
                                                                                    class="bi bi-info-circle"></i>
                                                                                Symbol info</a>
                                                                        </li>
                                                                        <li><a class="dropdown-item" href="#"><i
                                                                                    class="bi bi-plus-circle"></i> Add
                                                                                to Watchlist</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>+2.02%</td>
                                                    <td>+7.02%</td>
                                                    <td>+47.02%</td>
                                                    <td class="td_green">76.95</td>
                                                    <td class="hover_Btns">
                                                        <ul>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Buy">
                                                                <button class="btn btn-lightBlue btn-showbuysell"
                                                                    type="button" data-modal-type="buy">
                                                                    B
                                                                </button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Sell">
                                                                <button class="btn btn-red btn-showbuysell"
                                                                    type="button" data-modal-type="sell">
                                                                    S
                                                                </button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Market Depth">
                                                                <button class="btn" type="button" data-bs-toggle="modal"
                                                                    data-bs-target="#marketDepthModal">
                                                                    <i class="bi bi-chevron-bar-expand"></i>
                                                                    <i class="bi bi-upc-scan"></i>
                                                                </button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="View Chart">
                                                                <button class="btn" type="button"><i
                                                                        class="bi bi-graph-up"></i></button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="More">
                                                                <div class="dropdown">
                                                                    <button class="btn btn-secondary dropdown-toggle"
                                                                        type="button" id="hoverdropdownMenuButton1"
                                                                        data-bs-toggle="dropdown" aria-expanded="false">
                                                                        <i class="bi bi-three-dots-vertical"></i>
                                                                    </button>
                                                                    <ul class="dropdown-menu dropdown-menu-end"
                                                                        aria-labelledby="hoverdropdownMenuButton1">
                                                                        <li><a class="dropdown-item" href="#"><i
                                                                                    class="bi-alarm"></i> Set price
                                                                                alert</a>
                                                                        </li>
                                                                        <li><a class="dropdown-item" href="#"><i
                                                                                    class="bi bi-pin-angle"></i> Pin
                                                                                Ticker
                                                                                <span>1</span><span>2</span></a></li>
                                                                        <li><a class="dropdown-item" href="#"><i
                                                                                    class="bi bi-info-circle"></i>
                                                                                Symbol
                                                                                info</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>+2.02%</td>
                                                    <td>+7.02%</td>
                                                    <td>+47.02%</td>
                                                    <td class="td_green">76.95</td>
                                                    <td class="hover_Btns">
                                                        <ul>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Buy">
                                                                <button class="btn btn-lightBlue btn-showbuysell"
                                                                    type="button" data-modal-type="buy">
                                                                    B
                                                                </button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Sell">
                                                                <button class="btn btn-red btn-showbuysell"
                                                                    type="button" data-modal-type="sell">
                                                                    S
                                                                </button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Market Depth">
                                                                <button class="btn" type="button" data-bs-toggle="modal"
                                                                    data-bs-target="#marketDepthModal">
                                                                    <i class="bi bi-chevron-bar-expand"></i>
                                                                    <i class="bi bi-upc-scan"></i>
                                                                </button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="View Chart">
                                                                <button class="btn" type="button"><i
                                                                        class="bi bi-graph-up"></i></button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="More">
                                                                <div class="dropdown">
                                                                    <button class="btn btn-secondary dropdown-toggle"
                                                                        type="button" id="hoverdropdownMenuButton1"
                                                                        data-bs-toggle="dropdown" aria-expanded="false">
                                                                        <i class="bi bi-three-dots-vertical"></i>
                                                                    </button>
                                                                    <ul class="dropdown-menu dropdown-menu-end"
                                                                        aria-labelledby="hoverdropdownMenuButton1">
                                                                        <li><a class="dropdown-item" href="#"><i
                                                                                    class="bi-alarm"></i> Set price
                                                                                alert</a>
                                                                        </li>
                                                                        <li><a class="dropdown-item" href="#"><i
                                                                                    class="bi bi-pin-angle"></i> Pin
                                                                                Ticker
                                                                                <span>1</span><span>2</span></a></li>
                                                                        <li><a class="dropdown-item" href="#"><i
                                                                                    class="bi bi-info-circle"></i>
                                                                                Symbol
                                                                                info</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>+2.02%</td>
                                                    <td>+7.02%</td>
                                                    <td>+47.02%</td>
                                                    <td class="td_green">76.95</td>
                                                    <td class="hover_Btns">
                                                        <ul>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Buy">
                                                                <button class="btn btn-lightBlue btn-showbuysell"
                                                                    type="button" data-modal-type="buy">
                                                                    B
                                                                </button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Sell">
                                                                <button class="btn btn-red btn-showbuysell"
                                                                    type="button" data-modal-type="sell">
                                                                    S
                                                                </button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Market Depth">
                                                                <button class="btn" type="button" data-bs-toggle="modal"
                                                                    data-bs-target="#marketDepthModal">
                                                                    <i class="bi bi-chevron-bar-expand"></i>
                                                                    <i class="bi bi-upc-scan"></i>
                                                                </button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="View Chart">
                                                                <button class="btn" type="button"><i
                                                                        class="bi bi-graph-up"></i></button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="More">
                                                                <div class="dropdown">
                                                                    <button class="btn btn-secondary dropdown-toggle"
                                                                        type="button" id="hoverdropdownMenuButton1"
                                                                        data-bs-toggle="dropdown" aria-expanded="false">
                                                                        <i class="bi bi-three-dots-vertical"></i>
                                                                    </button>
                                                                    <ul class="dropdown-menu dropdown-menu-end"
                                                                        aria-labelledby="hoverdropdownMenuButton1">
                                                                        <li><a class="dropdown-item" href="#"><i
                                                                                    class="bi-alarm"></i> Set price
                                                                                alert</a>
                                                                        </li>
                                                                        <li><a class="dropdown-item" href="#"><i
                                                                                    class="bi bi-pin-angle"></i> Pin
                                                                                Ticker
                                                                                <span>1</span><span>2</span></a></li>
                                                                        <li><a class="dropdown-item" href="#"><i
                                                                                    class="bi bi-info-circle"></i>
                                                                                Symbol
                                                                                info</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>+2.02%</td>
                                                    <td>+7.02%</td>
                                                    <td>+47.02%</td>
                                                    <td class="td_red">76.95</td>
                                                    <td class="hover_Btns">
                                                        <ul>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Buy">
                                                                <button class="btn btn-lightBlue btn-showbuysell"
                                                                    type="button" data-modal-type="buy">
                                                                    B
                                                                </button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Sell">
                                                                <button class="btn btn-red btn-showbuysell"
                                                                    type="button" data-modal-type="sell">
                                                                    S
                                                                </button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Market Depth">
                                                                <button class="btn" type="button" data-bs-toggle="modal"
                                                                    data-bs-target="#marketDepthModal">
                                                                    <i class="bi bi-chevron-bar-expand"></i>
                                                                    <i class="bi bi-upc-scan"></i>
                                                                </button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="View Chart">
                                                                <button class="btn" type="button"><i
                                                                        class="bi bi-graph-up"></i></button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="More">
                                                                <div class="dropdown">
                                                                    <button class="btn btn-secondary dropdown-toggle"
                                                                        type="button" id="hoverdropdownMenuButton1"
                                                                        data-bs-toggle="dropdown" aria-expanded="false">
                                                                        <i class="bi bi-three-dots-vertical"></i>
                                                                    </button>
                                                                    <ul class="dropdown-menu dropdown-menu-end"
                                                                        aria-labelledby="hoverdropdownMenuButton1">
                                                                        <li><a class="dropdown-item" href="#"><i
                                                                                    class="bi-alarm"></i> Set price
                                                                                alert</a>
                                                                        </li>
                                                                        <li><a class="dropdown-item" href="#"><i
                                                                                    class="bi bi-pin-angle"></i> Pin
                                                                                Ticker
                                                                                <span>1</span><span>2</span></a></li>
                                                                        <li><a class="dropdown-item" href="#"><i
                                                                                    class="bi bi-info-circle"></i>
                                                                                Symbol
                                                                                info</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>+2.02%</td>
                                                    <td>+7.02%</td>
                                                    <td>+47.02%</td>
                                                    <td class="td_green">76.95</td>
                                                    <td class="hover_Btns">
                                                        <ul>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Buy">
                                                                <button class="btn btn-lightBlue btn-showbuysell"
                                                                    type="button" data-modal-type="buy">
                                                                    B
                                                                </button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Sell">
                                                                <button class="btn btn-red btn-showbuysell"
                                                                    type="button" data-modal-type="sell">
                                                                    S
                                                                </button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Market Depth">
                                                                <button class="btn" type="button" data-bs-toggle="modal"
                                                                    data-bs-target="#marketDepthModal">
                                                                    <i class="bi bi-chevron-bar-expand"></i>
                                                                    <i class="bi bi-upc-scan"></i>
                                                                </button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="View Chart">
                                                                <button class="btn" type="button"><i
                                                                        class="bi bi-graph-up"></i></button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="More">
                                                                <div class="dropdown">
                                                                    <button class="btn btn-secondary dropdown-toggle"
                                                                        type="button" id="hoverdropdownMenuButton1"
                                                                        data-bs-toggle="dropdown" aria-expanded="false">
                                                                        <i class="bi bi-three-dots-vertical"></i>
                                                                    </button>
                                                                    <ul class="dropdown-menu dropdown-menu-end"
                                                                        aria-labelledby="hoverdropdownMenuButton1">
                                                                        <li><a class="dropdown-item" href="#"><i
                                                                                    class="bi-alarm"></i> Set price
                                                                                alert</a>
                                                                        </li>
                                                                        <li><a class="dropdown-item" href="#"><i
                                                                                    class="bi bi-pin-angle"></i> Pin
                                                                                Ticker
                                                                                <span>1</span><span>2</span></a></li>
                                                                        <li><a class="dropdown-item" href="#"><i
                                                                                    class="bi bi-info-circle"></i>
                                                                                Symbol
                                                                                info</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colspan="4" class="table-active text-left td_green">CALL</td>
                                                </tr>
                                                <tr>
                                                    <td>+2.02%</td>
                                                    <td>+7.02%</td>
                                                    <td>+47.02%</td>
                                                    <td class="td_green">76.95</td>
                                                    <td class="hover_Btns">
                                                        <ul>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Buy">
                                                                <button class="btn btn-lightBlue btn-showbuysell"
                                                                    type="button" data-modal-type="buy">
                                                                    B
                                                                </button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Sell">
                                                                <button class="btn btn-red btn-showbuysell"
                                                                    type="button" data-modal-type="sell">
                                                                    S
                                                                </button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Market Depth">
                                                                <button class="btn" type="button" data-bs-toggle="modal"
                                                                    data-bs-target="#marketDepthModal">
                                                                    <i class="bi bi-chevron-bar-expand"></i>
                                                                    <i class="bi bi-upc-scan"></i>
                                                                </button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="View Chart">
                                                                <button class="btn" type="button"><i
                                                                        class="bi bi-graph-up"></i></button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="More">
                                                                <div class="dropdown">
                                                                    <button class="btn btn-secondary dropdown-toggle"
                                                                        type="button" id="hoverdropdownMenuButton1"
                                                                        data-bs-toggle="dropdown" aria-expanded="false">
                                                                        <i class="bi bi-three-dots-vertical"></i>
                                                                    </button>
                                                                    <ul class="dropdown-menu dropdown-menu-end"
                                                                        aria-labelledby="hoverdropdownMenuButton1">
                                                                        <li><a class="dropdown-item" href="#"><i
                                                                                    class="bi-alarm"></i> Set price
                                                                                alert</a>
                                                                        </li>
                                                                        <li><a class="dropdown-item" href="#"><i
                                                                                    class="bi bi-pin-angle"></i> Pin
                                                                                Ticker
                                                                                <span>1</span><span>2</span></a></li>
                                                                        <li><a class="dropdown-item" href="#"><i
                                                                                    class="bi bi-info-circle"></i>
                                                                                Symbol
                                                                                info</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>+2.02%</td>
                                                    <td>+7.02%</td>
                                                    <td>+47.02%</td>
                                                    <td class="td_green">76.95</td>
                                                    <td class="hover_Btns">
                                                        <ul>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Buy">
                                                                <button class="btn btn-lightBlue btn-showbuysell"
                                                                    type="button" data-modal-type="buy">
                                                                    B
                                                                </button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Sell">
                                                                <button class="btn btn-red btn-showbuysell"
                                                                    type="button" data-modal-type="sell">
                                                                    S
                                                                </button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Market Depth">
                                                                <button class="btn" type="button" data-bs-toggle="modal"
                                                                    data-bs-target="#marketDepthModal">
                                                                    <i class="bi bi-chevron-bar-expand"></i>
                                                                    <i class="bi bi-upc-scan"></i>
                                                                </button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="View Chart">
                                                                <button class="btn" type="button"><i
                                                                        class="bi bi-graph-up"></i></button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="More">
                                                                <div class="dropdown">
                                                                    <button class="btn btn-secondary dropdown-toggle"
                                                                        type="button" id="hoverdropdownMenuButton1"
                                                                        data-bs-toggle="dropdown" aria-expanded="false">
                                                                        <i class="bi bi-three-dots-vertical"></i>
                                                                    </button>
                                                                    <ul class="dropdown-menu dropdown-menu-end"
                                                                        aria-labelledby="hoverdropdownMenuButton1">
                                                                        <li><a class="dropdown-item" href="#"><i
                                                                                    class="bi-alarm"></i> Set price
                                                                                alert</a>
                                                                        </li>
                                                                        <li><a class="dropdown-item" href="#"><i
                                                                                    class="bi bi-pin-angle"></i> Pin
                                                                                Ticker
                                                                                <span>1</span><span>2</span></a></li>
                                                                        <li><a class="dropdown-item" href="#"><i
                                                                                    class="bi bi-info-circle"></i>
                                                                                Symbol
                                                                                info</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>+2.02%</td>
                                                    <td>+7.02%</td>
                                                    <td>+47.02%</td>
                                                    <td class="td_green">76.95</td>
                                                    <td class="hover_Btns">
                                                        <ul>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Buy">
                                                                <button class="btn btn-lightBlue btn-showbuysell"
                                                                    type="button" data-modal-type="buy">
                                                                    B
                                                                </button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Sell">
                                                                <button class="btn btn-red btn-showbuysell"
                                                                    type="button" data-modal-type="sell">
                                                                    S
                                                                </button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Market Depth">
                                                                <button class="btn" type="button" data-bs-toggle="modal"
                                                                    data-bs-target="#marketDepthModal">
                                                                    <i class="bi bi-chevron-bar-expand"></i>
                                                                    <i class="bi bi-upc-scan"></i>
                                                                </button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="View Chart">
                                                                <button class="btn" type="button"><i
                                                                        class="bi bi-graph-up"></i></button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="More">
                                                                <div class="dropdown">
                                                                    <button class="btn btn-secondary dropdown-toggle"
                                                                        type="button" id="hoverdropdownMenuButton1"
                                                                        data-bs-toggle="dropdown" aria-expanded="false">
                                                                        <i class="bi bi-three-dots-vertical"></i>
                                                                    </button>
                                                                    <ul class="dropdown-menu dropdown-menu-end"
                                                                        aria-labelledby="hoverdropdownMenuButton1">
                                                                        <li><a class="dropdown-item" href="#"><i
                                                                                    class="bi-alarm"></i> Set price
                                                                                alert</a>
                                                                        </li>
                                                                        <li><a class="dropdown-item" href="#"><i
                                                                                    class="bi bi-pin-angle"></i> Pin
                                                                                Ticker
                                                                                <span>1</span><span>2</span></a></li>
                                                                        <li><a class="dropdown-item" href="#"><i
                                                                                    class="bi bi-info-circle"></i>
                                                                                Symbol
                                                                                info</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>+2.02%</td>
                                                    <td>+7.02%</td>
                                                    <td>+47.02%</td>
                                                    <td class="td_green">76.95</td>
                                                    <td class="hover_Btns">
                                                        <ul>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Buy">
                                                                <button class="btn btn-lightBlue btn-showbuysell"
                                                                    type="button" data-modal-type="buy">
                                                                    B
                                                                </button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Sell">
                                                                <button class="btn btn-red btn-showbuysell"
                                                                    type="button" data-modal-type="sell">
                                                                    S
                                                                </button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Market Depth">
                                                                <button class="btn" type="button" data-bs-toggle="modal"
                                                                    data-bs-target="#marketDepthModal">
                                                                    <i class="bi bi-chevron-bar-expand"></i>
                                                                    <i class="bi bi-upc-scan"></i>
                                                                </button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="View Chart">
                                                                <button class="btn" type="button"><i
                                                                        class="bi bi-graph-up"></i></button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="More">
                                                                <div class="dropdown">
                                                                    <button class="btn btn-secondary dropdown-toggle"
                                                                        type="button" id="hoverdropdownMenuButton1"
                                                                        data-bs-toggle="dropdown" aria-expanded="false">
                                                                        <i class="bi bi-three-dots-vertical"></i>
                                                                    </button>
                                                                    <ul class="dropdown-menu dropdown-menu-end"
                                                                        aria-labelledby="hoverdropdownMenuButton1">
                                                                        <li><a class="dropdown-item" href="#"><i
                                                                                    class="bi-alarm"></i> Set price
                                                                                alert</a>
                                                                        </li>
                                                                        <li><a class="dropdown-item" href="#"><i
                                                                                    class="bi bi-pin-angle"></i> Pin
                                                                                Ticker
                                                                                <span>1</span><span>2</span></a></li>
                                                                        <li><a class="dropdown-item" href="#"><i
                                                                                    class="bi bi-info-circle"></i>
                                                                                Symbol
                                                                                info</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>+2.02%</td>
                                                    <td>+7.02%</td>
                                                    <td>+47.02%</td>
                                                    <td class="td_green">76.95</td>
                                                    <td class="hover_Btns">
                                                        <ul>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Buy">
                                                                <button class="btn btn-lightBlue btn-showbuysell"
                                                                    type="button" data-modal-type="buy">
                                                                    B
                                                                </button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Sell">
                                                                <button class="btn btn-red btn-showbuysell"
                                                                    type="button" data-modal-type="sell">
                                                                    S
                                                                </button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Market Depth">
                                                                <button class="btn" type="button" data-bs-toggle="modal"
                                                                    data-bs-target="#marketDepthModal">
                                                                    <i class="bi bi-chevron-bar-expand"></i>
                                                                    <i class="bi bi-upc-scan"></i>
                                                                </button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="View Chart">
                                                                <button class="btn" type="button"><i
                                                                        class="bi bi-graph-up"></i></button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="More">
                                                                <div class="dropdown">
                                                                    <button class="btn btn-secondary dropdown-toggle"
                                                                        type="button" id="hoverdropdownMenuButton1"
                                                                        data-bs-toggle="dropdown" aria-expanded="false">
                                                                        <i class="bi bi-three-dots-vertical"></i>
                                                                    </button>
                                                                    <ul class="dropdown-menu dropdown-menu-end"
                                                                        aria-labelledby="hoverdropdownMenuButton1">
                                                                        <li><a class="dropdown-item" href="#"><i
                                                                                    class="bi-alarm"></i> Set price
                                                                                alert</a>
                                                                        </li>
                                                                        <li><a class="dropdown-item" href="#"><i
                                                                                    class="bi bi-pin-angle"></i> Pin
                                                                                Ticker
                                                                                <span>1</span><span>2</span></a></li>
                                                                        <li><a class="dropdown-item" href="#"><i
                                                                                    class="bi bi-info-circle"></i>
                                                                                Symbol
                                                                                info</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>+2.02%</td>
                                                    <td>+7.02%</td>
                                                    <td>+47.02%</td>
                                                    <td class="td_red">76.95</td>
                                                    <td class="hover_Btns">
                                                        <ul>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Buy">
                                                                <button class="btn btn-lightBlue btn-showbuysell"
                                                                    type="button" data-modal-type="buy">
                                                                    B
                                                                </button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Sell">
                                                                <button class="btn btn-red btn-showbuysell"
                                                                    type="button" data-modal-type="sell">
                                                                    S
                                                                </button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Market Depth">
                                                                <button class="btn" type="button" data-bs-toggle="modal"
                                                                    data-bs-target="#marketDepthModal">
                                                                    <i class="bi bi-chevron-bar-expand"></i>
                                                                    <i class="bi bi-upc-scan"></i>
                                                                </button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="View Chart">
                                                                <button class="btn" type="button"><i
                                                                        class="bi bi-graph-up"></i></button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="More">
                                                                <div class="dropdown">
                                                                    <button class="btn btn-secondary dropdown-toggle"
                                                                        type="button" id="hoverdropdownMenuButton1"
                                                                        data-bs-toggle="dropdown" aria-expanded="false">
                                                                        <i class="bi bi-three-dots-vertical"></i>
                                                                    </button>
                                                                    <ul class="dropdown-menu dropdown-menu-end"
                                                                        aria-labelledby="hoverdropdownMenuButton1">
                                                                        <li><a class="dropdown-item" href="#"><i
                                                                                    class="bi-alarm"></i> Set price
                                                                                alert</a>
                                                                        </li>
                                                                        <li><a class="dropdown-item" href="#"><i
                                                                                    class="bi bi-pin-angle"></i> Pin
                                                                                Ticker
                                                                                <span>1</span><span>2</span></a></li>
                                                                        <li><a class="dropdown-item" href="#"><i
                                                                                    class="bi bi-info-circle"></i>
                                                                                Symbol
                                                                                info</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>+2.02%</td>
                                                    <td>+7.02%</td>
                                                    <td>+47.02%</td>
                                                    <td class="td_green">76.95</td>
                                                    <td class="hover_Btns">
                                                        <ul>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Buy">
                                                                <button class="btn btn-lightBlue btn-showbuysell"
                                                                    type="button" data-modal-type="buy">
                                                                    B
                                                                </button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Sell">
                                                                <button class="btn btn-red btn-showbuysell"
                                                                    type="button" data-modal-type="sell">
                                                                    S
                                                                </button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Market Depth">
                                                                <button class="btn" type="button" data-bs-toggle="modal"
                                                                    data-bs-target="#marketDepthModal">
                                                                    <i class="bi bi-chevron-bar-expand"></i>
                                                                    <i class="bi bi-upc-scan"></i>
                                                                </button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="View Chart">
                                                                <button class="btn" type="button"><i
                                                                        class="bi bi-graph-up"></i></button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="More">
                                                                <div class="dropdown">
                                                                    <button class="btn btn-secondary dropdown-toggle"
                                                                        type="button" id="hoverdropdownMenuButton1"
                                                                        data-bs-toggle="dropdown" aria-expanded="false">
                                                                        <i class="bi bi-three-dots-vertical"></i>
                                                                    </button>
                                                                    <ul class="dropdown-menu dropdown-menu-end"
                                                                        aria-labelledby="hoverdropdownMenuButton1">
                                                                        <li><a class="dropdown-item" href="#"><i
                                                                                    class="bi-alarm"></i> Set price
                                                                                alert</a>
                                                                        </li>
                                                                        <li><a class="dropdown-item" href="#"><i
                                                                                    class="bi bi-pin-angle"></i> Pin
                                                                                Ticker
                                                                                <span>1</span><span>2</span></a></li>
                                                                        <li><a class="dropdown-item" href="#"><i
                                                                                    class="bi bi-info-circle"></i>
                                                                                Symbol
                                                                                info</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </td>
                                                </tr> -->
                                                
                                                
                                                
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                
                                <div class="oc-table-middle">
                                    <div class="table-responsive table-custom">
                                        <table  class="table  table-borderless">
                                        
                                        
                                       <!--  <tbody id="strikOptinChainbodycallId"  class="" style="display:none;height:650px;overflow:scroll;vertical-align: top;table-layout: fixed;width:100%;overflow:auto;padding-top:10px;padding-bottom:10px;padding-right:10px;padding-left:10px;text-align:center;font-size:12px;font-family:Helvetica,Sans-Serif;">
          		 					
       								 </tbody>  -->
       								 
                                             <tbody>
                                                <tr>
                                                    <td class="td_price">34,500.00</td>
                                                </tr>
                                                <tr>
                                                    <td class="td_price">34,500.00</td>
                                                </tr>
                                                <tr>
                                                    <td class="td_price">34,500.00</td>
                                                </tr>
                                                <tr>
                                                    <td class="td_price">34,500.00</td>
                                                </tr>
                                                <tr>
                                                    <td class="td_price">34,500.00</td>
                                                </tr>
                                                <tr>
                                                    <td class="td_price">34,500.00</td>
                                                </tr>
                                                <tr>
                                                    <td class="td_price">34,500.00</td>
                                                </tr>
                                                <tr>
                                                    <td colspan="1" class="table-active text-center td_blue">Spot Price
                                                        <strong>35,126.85</strong>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="td_price">34,500.00</td>
                                                </tr>
                                                <tr>
                                                    <td class="td_price">34,500.00</td>
                                                </tr>
                                                <tr>
                                                    <td class="td_price">34,500.00</td>
                                                </tr>
                                                <tr>
                                                    <td class="td_price">34,500.00</td>
                                                </tr>
                                                <tr>
                                                    <td class="td_price">34,500.00</td>
                                                </tr>
                                                <tr>
                                                    <td class="td_price">34,500.00</td>
                                                </tr>
                                                <tr>
                                                    <td class="td_price">34,500.00</td>
                                                </tr>
                                            </tbody> 
                                            
                                            
                                        </table>
                                    </div>
                                </div>
                                
                                <div class="oc-table-right">
                                    <div class="table-responsive table-custom">
                                        <table class="table  table-borderless">
                                        
                                        
                                        
                                       <!--  <tbody id="OptionChainbodyputId"  class="" style="display:none;height:650px;overflow:scroll;vertical-align: top;table-layout: fixed;width:100%;overflow:auto;padding-top:10px;padding-bottom:10px;padding-right:10px;padding-left:10px;text-align:center;font-size:12px;font-family:Helvetica,Sans-Serif;">
          		 					<caption id="captionId" class="captionclass">
          							<label id="OptionChaininnerbodyputId" style="margin-left:418px;margin-top:10px;display:none;">No OptionChain Available</label>
   									</caption>
       								 </tbody>  -->
       								 
                                        
                                            <tbody>
                                                <tr>
                                                    <td class="td_green">76.95</td>
                                                    <td>+47.02%</td>
                                                    <td>+7.02%</td>
                                                    <td>+2.02%</td>
                                                    <td class="hover_Btns">
                                                        <ul>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Buy">
                                                                <button class="btn btn-lightBlue btn-showbuysell"
                                                                    type="button" data-modal-type="buy">
                                                                    B
                                                                </button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Sell">
                                                                <button class="btn btn-red btn-showbuysell"
                                                                    type="button" data-modal-type="sell">
                                                                    S
                                                                </button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Market Depth">
                                                                <button class="btn" type="button" data-bs-toggle="modal"
                                                                    data-bs-target="#marketDepthModal">
                                                                    <i class="bi bi-chevron-bar-expand"></i>
                                                                    <i class="bi bi-upc-scan"></i>
                                                                </button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="View Chart">
                                                                <button class="btn" type="button"><i
                                                                        class="bi bi-graph-up"></i></button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="More">
                                                                <div class="dropdown">
                                                                    <button class="btn btn-secondary dropdown-toggle"
                                                                        type="button" id="hoverdropdownMenuButton1"
                                                                        data-bs-toggle="dropdown" aria-expanded="false">
                                                                        <i class="bi bi-three-dots-vertical"></i>
                                                                    </button>
                                                                    <ul class="dropdown-menu dropdown-menu-end"
                                                                        aria-labelledby="hoverdropdownMenuButton1">
                                                                        <li><a class="dropdown-item" href="#"><i
                                                                                    class="bi-alarm"></i> Set price
                                                                                alert</a>
                                                                        </li>
                                                                        <li><a class="dropdown-item" href="#"><i
                                                                                    class="bi bi-pin-angle"></i> Pin
                                                                                Ticker
                                                                                <span>1</span><span>2</span></a></li>
                                                                        <li><a class="dropdown-item" href="#"><i
                                                                                    class="bi bi-info-circle"></i>
                                                                                Symbol
                                                                                info</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="td_green">76.95</td>
                                                    <td>+47.02%</td>
                                                    <td>+7.02%</td>
                                                    <td>+2.02%</td>
                                                    <td class="hover_Btns">
                                                        <ul>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Buy">
                                                                <button class="btn btn-lightBlue btn-showbuysell"
                                                                    type="button" data-modal-type="buy">
                                                                    B
                                                                </button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Sell">
                                                                <button class="btn btn-red btn-showbuysell"
                                                                    type="button" data-modal-type="sell">
                                                                    S
                                                                </button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Market Depth">
                                                                <button class="btn" type="button" data-bs-toggle="modal"
                                                                    data-bs-target="#marketDepthModal">
                                                                    <i class="bi bi-chevron-bar-expand"></i>
                                                                    <i class="bi bi-upc-scan"></i>
                                                                </button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="View Chart">
                                                                <button class="btn" type="button"><i
                                                                        class="bi bi-graph-up"></i></button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="More">
                                                                <div class="dropdown">
                                                                    <button class="btn btn-secondary dropdown-toggle"
                                                                        type="button" id="hoverdropdownMenuButton1"
                                                                        data-bs-toggle="dropdown" aria-expanded="false">
                                                                        <i class="bi bi-three-dots-vertical"></i>
                                                                    </button>
                                                                    <ul class="dropdown-menu dropdown-menu-end"
                                                                        aria-labelledby="hoverdropdownMenuButton1">
                                                                        <li><a class="dropdown-item" href="#"><i
                                                                                    class="bi-alarm"></i> Set price
                                                                                alert</a>
                                                                        </li>
                                                                        <li><a class="dropdown-item" href="#"><i
                                                                                    class="bi bi-pin-angle"></i> Pin
                                                                                Ticker
                                                                                <span>1</span><span>2</span></a></li>
                                                                        <li><a class="dropdown-item" href="#"><i
                                                                                    class="bi bi-info-circle"></i>
                                                                                Symbol
                                                                                info</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="td_green">76.95</td>
                                                    <td>+47.02%</td>
                                                    <td>+7.02%</td>
                                                    <td>+2.02%</td>
                                                    <td class="hover_Btns">
                                                        <ul>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Buy">
                                                                <button class="btn btn-lightBlue btn-showbuysell"
                                                                    type="button" data-modal-type="buy">
                                                                    B
                                                                </button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Sell">
                                                                <button class="btn btn-red btn-showbuysell"
                                                                    type="button" data-modal-type="sell">
                                                                    S
                                                                </button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Market Depth">
                                                                <button class="btn" type="button" data-bs-toggle="modal"
                                                                    data-bs-target="#marketDepthModal">
                                                                    <i class="bi bi-chevron-bar-expand"></i>
                                                                    <i class="bi bi-upc-scan"></i>
                                                                </button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="View Chart">
                                                                <button class="btn" type="button"><i
                                                                        class="bi bi-graph-up"></i></button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="More">
                                                                <div class="dropdown">
                                                                    <button class="btn btn-secondary dropdown-toggle"
                                                                        type="button" id="hoverdropdownMenuButton1"
                                                                        data-bs-toggle="dropdown" aria-expanded="false">
                                                                        <i class="bi bi-three-dots-vertical"></i>
                                                                    </button>
                                                                    <ul class="dropdown-menu dropdown-menu-end"
                                                                        aria-labelledby="hoverdropdownMenuButton1">
                                                                        <li><a class="dropdown-item" href="#"><i
                                                                                    class="bi-alarm"></i> Set price
                                                                                alert</a>
                                                                        </li>
                                                                        <li><a class="dropdown-item" href="#"><i
                                                                                    class="bi bi-pin-angle"></i> Pin
                                                                                Ticker
                                                                                <span>1</span><span>2</span></a></li>
                                                                        <li><a class="dropdown-item" href="#"><i
                                                                                    class="bi bi-info-circle"></i>
                                                                                Symbol
                                                                                info</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="td_green">76.95</td>
                                                    <td>+47.02%</td>
                                                    <td>+7.02%</td>
                                                    <td>+2.02%</td>
                                                    <td class="hover_Btns">
                                                        <ul>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Buy">
                                                                <button class="btn btn-lightBlue btn-showbuysell"
                                                                    type="button" data-modal-type="buy">
                                                                    B
                                                                </button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Sell">
                                                                <button class="btn btn-red btn-showbuysell"
                                                                    type="button" data-modal-type="sell">
                                                                    S
                                                                </button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Market Depth">
                                                                <button class="btn" type="button" data-bs-toggle="modal"
                                                                    data-bs-target="#marketDepthModal">
                                                                    <i class="bi bi-chevron-bar-expand"></i>
                                                                    <i class="bi bi-upc-scan"></i>
                                                                </button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="View Chart">
                                                                <button class="btn" type="button"><i
                                                                        class="bi bi-graph-up"></i></button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="More">
                                                                <div class="dropdown">
                                                                    <button class="btn btn-secondary dropdown-toggle"
                                                                        type="button" id="hoverdropdownMenuButton1"
                                                                        data-bs-toggle="dropdown" aria-expanded="false">
                                                                        <i class="bi bi-three-dots-vertical"></i>
                                                                    </button>
                                                                    <ul class="dropdown-menu dropdown-menu-end"
                                                                        aria-labelledby="hoverdropdownMenuButton1">
                                                                        <li><a class="dropdown-item" href="#"><i
                                                                                    class="bi-alarm"></i> Set price
                                                                                alert</a>
                                                                        </li>
                                                                        <li><a class="dropdown-item" href="#"><i
                                                                                    class="bi bi-pin-angle"></i> Pin
                                                                                Ticker
                                                                                <span>1</span><span>2</span></a></li>
                                                                        <li><a class="dropdown-item" href="#"><i
                                                                                    class="bi bi-info-circle"></i>
                                                                                Symbol
                                                                                info</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="td_green">76.95</td>
                                                    <td>+47.02%</td>
                                                    <td>+7.02%</td>
                                                    <td>+2.02%</td>
                                                    <td class="hover_Btns">
                                                        <ul>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Buy">
                                                                <button class="btn btn-lightBlue btn-showbuysell"
                                                                    type="button" data-modal-type="buy">
                                                                    B
                                                                </button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Sell">
                                                                <button class="btn btn-red btn-showbuysell"
                                                                    type="button" data-modal-type="sell">
                                                                    S
                                                                </button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Market Depth">
                                                                <button class="btn" type="button" data-bs-toggle="modal"
                                                                    data-bs-target="#marketDepthModal">
                                                                    <i class="bi bi-chevron-bar-expand"></i>
                                                                    <i class="bi bi-upc-scan"></i>
                                                                </button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="View Chart">
                                                                <button class="btn" type="button"><i
                                                                        class="bi bi-graph-up"></i></button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="More">
                                                                <div class="dropdown">
                                                                    <button class="btn btn-secondary dropdown-toggle"
                                                                        type="button" id="hoverdropdownMenuButton1"
                                                                        data-bs-toggle="dropdown" aria-expanded="false">
                                                                        <i class="bi bi-three-dots-vertical"></i>
                                                                    </button>
                                                                    <ul class="dropdown-menu dropdown-menu-end"
                                                                        aria-labelledby="hoverdropdownMenuButton1">
                                                                        <li><a class="dropdown-item" href="#"><i
                                                                                    class="bi-alarm"></i> Set price
                                                                                alert</a>
                                                                        </li>
                                                                        <li><a class="dropdown-item" href="#"><i
                                                                                    class="bi bi-pin-angle"></i> Pin
                                                                                Ticker
                                                                                <span>1</span><span>2</span></a></li>
                                                                        <li><a class="dropdown-item" href="#"><i
                                                                                    class="bi bi-info-circle"></i>
                                                                                Symbol
                                                                                info</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="td_red">76.95</td>
                                                    <td>+47.02%</td>
                                                    <td>+7.02%</td>
                                                    <td>+2.02%</td>
                                                    <td class="hover_Btns">
                                                        <ul>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Buy">
                                                                <button class="btn btn-lightBlue btn-showbuysell"
                                                                    type="button" data-modal-type="buy">
                                                                    B
                                                                </button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Sell">
                                                                <button class="btn btn-red btn-showbuysell"
                                                                    type="button" data-modal-type="sell">
                                                                    S
                                                                </button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Market Depth">
                                                                <button class="btn" type="button" data-bs-toggle="modal"
                                                                    data-bs-target="#marketDepthModal">
                                                                    <i class="bi bi-chevron-bar-expand"></i>
                                                                    <i class="bi bi-upc-scan"></i>
                                                                </button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="View Chart">
                                                                <button class="btn" type="button"><i
                                                                        class="bi bi-graph-up"></i></button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="More">
                                                                <div class="dropdown">
                                                                    <button class="btn btn-secondary dropdown-toggle"
                                                                        type="button" id="hoverdropdownMenuButton1"
                                                                        data-bs-toggle="dropdown" aria-expanded="false">
                                                                        <i class="bi bi-three-dots-vertical"></i>
                                                                    </button>
                                                                    <ul class="dropdown-menu dropdown-menu-end"
                                                                        aria-labelledby="hoverdropdownMenuButton1">
                                                                        <li><a class="dropdown-item" href="#"><i
                                                                                    class="bi-alarm"></i> Set price
                                                                                alert</a>
                                                                        </li>
                                                                        <li><a class="dropdown-item" href="#"><i
                                                                                    class="bi bi-pin-angle"></i> Pin
                                                                                Ticker
                                                                                <span>1</span><span>2</span></a></li>
                                                                        <li><a class="dropdown-item" href="#"><i
                                                                                    class="bi bi-info-circle"></i>
                                                                                Symbol
                                                                                info</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="td_green">76.95</td>
                                                    <td>+47.02%</td>
                                                    <td>+7.02%</td>
                                                    <td>+2.02%</td>
                                                    <td class="hover_Btns">
                                                        <ul>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Buy">
                                                                <button class="btn btn-lightBlue btn-showbuysell"
                                                                    type="button" data-modal-type="buy">
                                                                    B
                                                                </button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Sell">
                                                                <button class="btn btn-red btn-showbuysell"
                                                                    type="button" data-modal-type="sell">
                                                                    S
                                                                </button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Market Depth">
                                                                <button class="btn" type="button" data-bs-toggle="modal"
                                                                    data-bs-target="#marketDepthModal">
                                                                    <i class="bi bi-chevron-bar-expand"></i>
                                                                    <i class="bi bi-upc-scan"></i>
                                                                </button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="View Chart">
                                                                <button class="btn" type="button"><i
                                                                        class="bi bi-graph-up"></i></button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="More">
                                                                <div class="dropdown">
                                                                    <button class="btn btn-secondary dropdown-toggle"
                                                                        type="button" id="hoverdropdownMenuButton1"
                                                                        data-bs-toggle="dropdown" aria-expanded="false">
                                                                        <i class="bi bi-three-dots-vertical"></i>
                                                                    </button>
                                                                    <ul class="dropdown-menu dropdown-menu-end"
                                                                        aria-labelledby="hoverdropdownMenuButton1">
                                                                        <li><a class="dropdown-item" href="#"><i
                                                                                    class="bi-alarm"></i> Set price
                                                                                alert</a>
                                                                        </li>
                                                                        <li><a class="dropdown-item" href="#"><i
                                                                                    class="bi bi-pin-angle"></i> Pin
                                                                                Ticker
                                                                                <span>1</span><span>2</span></a></li>
                                                                        <li><a class="dropdown-item" href="#"><i
                                                                                    class="bi bi-info-circle"></i>
                                                                                Symbol
                                                                                info</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colspan="4" class="table-active text-right td_red">PUT</td>
                                                </tr>
                                                <tr>
                                                    <td class="td_green">76.95</td>
                                                    <td>+47.02%</td>
                                                    <td>+7.02%</td>
                                                    <td>+2.02%</td>
                                                    <td class="hover_Btns">
                                                        <ul>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Buy">
                                                                <button class="btn btn-lightBlue btn-showbuysell"
                                                                    type="button" data-modal-type="buy">
                                                                    B
                                                                </button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Sell">
                                                                <button class="btn btn-red btn-showbuysell"
                                                                    type="button" data-modal-type="sell">
                                                                    S
                                                                </button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Market Depth">
                                                                <button class="btn" type="button" data-bs-toggle="modal"
                                                                    data-bs-target="#marketDepthModal">
                                                                    <i class="bi bi-chevron-bar-expand"></i>
                                                                    <i class="bi bi-upc-scan"></i>
                                                                </button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="View Chart">
                                                                <button class="btn" type="button"><i
                                                                        class="bi bi-graph-up"></i></button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="More">
                                                                <div class="dropdown">
                                                                    <button class="btn btn-secondary dropdown-toggle"
                                                                        type="button" id="hoverdropdownMenuButton1"
                                                                        data-bs-toggle="dropdown" aria-expanded="false">
                                                                        <i class="bi bi-three-dots-vertical"></i>
                                                                    </button>
                                                                    <ul class="dropdown-menu dropdown-menu-end"
                                                                        aria-labelledby="hoverdropdownMenuButton1">
                                                                        <li><a class="dropdown-item" href="#"><i
                                                                                    class="bi-alarm"></i> Set price
                                                                                alert</a>
                                                                        </li>
                                                                        <li><a class="dropdown-item" href="#"><i
                                                                                    class="bi bi-pin-angle"></i> Pin
                                                                                Ticker
                                                                                <span>1</span><span>2</span></a></li>
                                                                        <li><a class="dropdown-item" href="#"><i
                                                                                    class="bi bi-info-circle"></i>
                                                                                Symbol
                                                                                info</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="td_green">76.95</td>
                                                    <td>+47.02%</td>
                                                    <td>+7.02%</td>
                                                    <td>+2.02%</td>
                                                    <td class="hover_Btns">
                                                        <ul>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Buy">
                                                                <button class="btn btn-lightBlue btn-showbuysell"
                                                                    type="button" data-modal-type="buy">
                                                                    B
                                                                </button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Sell">
                                                                <button class="btn btn-red btn-showbuysell"
                                                                    type="button" data-modal-type="sell">
                                                                    S
                                                                </button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Market Depth">
                                                                <button class="btn" type="button" data-bs-toggle="modal"
                                                                    data-bs-target="#marketDepthModal">
                                                                    <i class="bi bi-chevron-bar-expand"></i>
                                                                    <i class="bi bi-upc-scan"></i>
                                                                </button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="View Chart">
                                                                <button class="btn" type="button"><i
                                                                        class="bi bi-graph-up"></i></button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="More">
                                                                <div class="dropdown">
                                                                    <button class="btn btn-secondary dropdown-toggle"
                                                                        type="button" id="hoverdropdownMenuButton1"
                                                                        data-bs-toggle="dropdown" aria-expanded="false">
                                                                        <i class="bi bi-three-dots-vertical"></i>
                                                                    </button>
                                                                    <ul class="dropdown-menu dropdown-menu-end"
                                                                        aria-labelledby="hoverdropdownMenuButton1">
                                                                        <li><a class="dropdown-item" href="#"><i
                                                                                    class="bi-alarm"></i> Set price
                                                                                alert</a>
                                                                        </li>
                                                                        <li><a class="dropdown-item" href="#"><i
                                                                                    class="bi bi-pin-angle"></i> Pin
                                                                                Ticker
                                                                                <span>1</span><span>2</span></a></li>
                                                                        <li><a class="dropdown-item" href="#"><i
                                                                                    class="bi bi-info-circle"></i>
                                                                                Symbol
                                                                                info</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="td_green">76.95</td>
                                                    <td>+47.02%</td>
                                                    <td>+7.02%</td>
                                                    <td>+2.02%</td>
                                                    <td class="hover_Btns">
                                                        <ul>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Buy">
                                                                <button class="btn btn-lightBlue btn-showbuysell"
                                                                    type="button" data-modal-type="buy">
                                                                    B
                                                                </button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Sell">
                                                                <button class="btn btn-red btn-showbuysell"
                                                                    type="button" data-modal-type="sell">
                                                                    S
                                                                </button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Market Depth">
                                                                <button class="btn" type="button" data-bs-toggle="modal"
                                                                    data-bs-target="#marketDepthModal">
                                                                    <i class="bi bi-chevron-bar-expand"></i>
                                                                    <i class="bi bi-upc-scan"></i>
                                                                </button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="View Chart">
                                                                <button class="btn" type="button"><i
                                                                        class="bi bi-graph-up"></i></button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="More">
                                                                <div class="dropdown">
                                                                    <button class="btn btn-secondary dropdown-toggle"
                                                                        type="button" id="hoverdropdownMenuButton1"
                                                                        data-bs-toggle="dropdown" aria-expanded="false">
                                                                        <i class="bi bi-three-dots-vertical"></i>
                                                                    </button>
                                                                    <ul class="dropdown-menu dropdown-menu-end"
                                                                        aria-labelledby="hoverdropdownMenuButton1">
                                                                        <li><a class="dropdown-item" href="#"><i
                                                                                    class="bi-alarm"></i> Set price
                                                                                alert</a>
                                                                        </li>
                                                                        <li><a class="dropdown-item" href="#"><i
                                                                                    class="bi bi-pin-angle"></i> Pin
                                                                                Ticker
                                                                                <span>1</span><span>2</span></a></li>
                                                                        <li><a class="dropdown-item" href="#"><i
                                                                                    class="bi bi-info-circle"></i>
                                                                                Symbol
                                                                                info</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="td_green">76.95</td>
                                                    <td>+47.02%</td>
                                                    <td>+7.02%</td>
                                                    <td>+2.02%</td>
                                                    <td class="hover_Btns">
                                                        <ul>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Buy">
                                                                <button class="btn btn-lightBlue btn-showbuysell"
                                                                    type="button" data-modal-type="buy">
                                                                    B
                                                                </button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Sell">
                                                                <button class="btn btn-red btn-showbuysell"
                                                                    type="button" data-modal-type="sell">
                                                                    S
                                                                </button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Market Depth">
                                                                <button class="btn" type="button" data-bs-toggle="modal"
                                                                    data-bs-target="#marketDepthModal">
                                                                    <i class="bi bi-chevron-bar-expand"></i>
                                                                    <i class="bi bi-upc-scan"></i>
                                                                </button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="View Chart">
                                                                <button class="btn" type="button"><i
                                                                        class="bi bi-graph-up"></i></button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="More">
                                                                <div class="dropdown">
                                                                    <button class="btn btn-secondary dropdown-toggle"
                                                                        type="button" id="hoverdropdownMenuButton1"
                                                                        data-bs-toggle="dropdown" aria-expanded="false">
                                                                        <i class="bi bi-three-dots-vertical"></i>
                                                                    </button>
                                                                    <ul class="dropdown-menu dropdown-menu-end"
                                                                        aria-labelledby="hoverdropdownMenuButton1">
                                                                        <li><a class="dropdown-item" href="#"><i
                                                                                    class="bi-alarm"></i> Set price
                                                                                alert</a>
                                                                        </li>
                                                                        <li><a class="dropdown-item" href="#"><i
                                                                                    class="bi bi-pin-angle"></i> Pin
                                                                                Ticker
                                                                                <span>1</span><span>2</span></a></li>
                                                                        <li><a class="dropdown-item" href="#"><i
                                                                                    class="bi bi-info-circle"></i>
                                                                                Symbol
                                                                                info</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="td_green">76.95</td>
                                                    <td>+47.02%</td>
                                                    <td>+7.02%</td>
                                                    <td>+2.02%</td>
                                                    <td class="hover_Btns">
                                                        <ul>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Buy">
                                                                <button class="btn btn-lightBlue btn-showbuysell"
                                                                    type="button" data-modal-type="buy">
                                                                    B
                                                                </button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Sell">
                                                                <button class="btn btn-red btn-showbuysell"
                                                                    type="button" data-modal-type="sell">
                                                                    S
                                                                </button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Market Depth">
                                                                <button class="btn" type="button" data-bs-toggle="modal"
                                                                    data-bs-target="#marketDepthModal">
                                                                    <i class="bi bi-chevron-bar-expand"></i>
                                                                    <i class="bi bi-upc-scan"></i>
                                                                </button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="View Chart">
                                                                <button class="btn" type="button"><i
                                                                        class="bi bi-graph-up"></i></button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="More">
                                                                <div class="dropdown">
                                                                    <button class="btn btn-secondary dropdown-toggle"
                                                                        type="button" id="hoverdropdownMenuButton1"
                                                                        data-bs-toggle="dropdown" aria-expanded="false">
                                                                        <i class="bi bi-three-dots-vertical"></i>
                                                                    </button>
                                                                    <ul class="dropdown-menu dropdown-menu-end"
                                                                        aria-labelledby="hoverdropdownMenuButton1">
                                                                        <li><a class="dropdown-item" href="#"><i
                                                                                    class="bi-alarm"></i> Set price
                                                                                alert</a>
                                                                        </li>
                                                                        <li><a class="dropdown-item" href="#"><i
                                                                                    class="bi bi-pin-angle"></i> Pin
                                                                                Ticker
                                                                                <span>1</span><span>2</span></a></li>
                                                                        <li><a class="dropdown-item" href="#"><i
                                                                                    class="bi bi-info-circle"></i>
                                                                                Symbol
                                                                                info</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="td_red">76.95</td>
                                                    <td>+47.02%</td>
                                                    <td>+7.02%</td>
                                                    <td>+2.02%</td>
                                                    <td class="hover_Btns">
                                                        <ul>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Buy">
                                                                <button class="btn btn-lightBlue btn-showbuysell"
                                                                    type="button" data-modal-type="buy">
                                                                    B
                                                                </button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Sell">
                                                                <button class="btn btn-red btn-showbuysell"
                                                                    type="button" data-modal-type="sell">
                                                                    S
                                                                </button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Market Depth">
                                                                <button class="btn" type="button" data-bs-toggle="modal"
                                                                    data-bs-target="#marketDepthModal">
                                                                    <i class="bi bi-chevron-bar-expand"></i>
                                                                    <i class="bi bi-upc-scan"></i>
                                                                </button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="View Chart">
                                                                <button class="btn" type="button"><i
                                                                        class="bi bi-graph-up"></i></button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="More">
                                                                <div class="dropdown">
                                                                    <button class="btn btn-secondary dropdown-toggle"
                                                                        type="button" id="hoverdropdownMenuButton1"
                                                                        data-bs-toggle="dropdown" aria-expanded="false">
                                                                        <i class="bi bi-three-dots-vertical"></i>
                                                                    </button>
                                                                    <ul class="dropdown-menu dropdown-menu-end"
                                                                        aria-labelledby="hoverdropdownMenuButton1">
                                                                        <li><a class="dropdown-item" href="#"><i
                                                                                    class="bi-alarm"></i> Set price
                                                                                alert</a>
                                                                        </li>
                                                                        <li><a class="dropdown-item" href="#"><i
                                                                                    class="bi bi-pin-angle"></i> Pin
                                                                                Ticker
                                                                                <span>1</span><span>2</span></a></li>
                                                                        <li><a class="dropdown-item" href="#"><i
                                                                                    class="bi bi-info-circle"></i>
                                                                                Symbol
                                                                                info</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="td_green">76.95</td>
                                                    <td>+47.02%</td>
                                                    <td>+7.02%</td>
                                                    <td>+2.02%</td>
                                                    <td class="hover_Btns">
                                                        <ul>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Buy">
                                                                <button class="btn btn-lightBlue btn-showbuysell"
                                                                    type="button" data-modal-type="buy">
                                                                    B
                                                                </button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Sell">
                                                                <button class="btn btn-red btn-showbuysell"
                                                                    type="button" data-modal-type="sell">
                                                                    S
                                                                </button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Market Depth">
                                                                <button class="btn" type="button" data-bs-toggle="modal"
                                                                    data-bs-target="#marketDepthModal">
                                                                    <i class="bi bi-chevron-bar-expand"></i>
                                                                    <i class="bi bi-upc-scan"></i>
                                                                </button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="View Chart">
                                                                <button class="btn" type="button"><i
                                                                        class="bi bi-graph-up"></i></button>
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="More">
                                                                <div class="dropdown">
                                                                    <button class="btn btn-secondary dropdown-toggle"
                                                                        type="button" id="hoverdropdownMenuButton1"
                                                                        data-bs-toggle="dropdown" aria-expanded="false">
                                                                        <i class="bi bi-three-dots-vertical"></i>
                                                                    </button>
                                                                    <ul class="dropdown-menu dropdown-menu-end"
                                                                        aria-labelledby="hoverdropdownMenuButton1">
                                                                        <li><a class="dropdown-item" href="#"><i
                                                                                    class="bi-alarm"></i> Set price
                                                                                alert</a>
                                                                        </li>
                                                                        <li><a class="dropdown-item" href="#"><i
                                                                                    class="bi bi-pin-angle"></i> Pin
                                                                                Ticker
                                                                                <span>1</span><span>2</span></a></li>
                                                                        <li><a class="dropdown-item" href="#"><i
                                                                                    class="bi bi-info-circle"></i>
                                                                                Symbol
                                                                                info</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div class="floatingSpotPrice">
                                <div class="leftSpotPrice">
                                    CALL
                                </div>
                                <div class="midSpotPrice">
                                    Spot Price <span>35,126.85</span>
                                </div>
                                <div class="rightSpotPrice">
                                    PUT
                                </div>
                            </div>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                </div>
                <div class="row mt-4 mb-1">
                    <div class="col-md-4">
                        <div class="ava_bal_bg bottom-sec scrollBotBox">
                            <label class="lbl_blue_txt ms-2" data-bs-toggle="collapse" href="#collapse1" role="button"
                                aria-expanded="false" aria-controls="collapseExample">
                                <i class="bi bi-building me-2"></i> Performance
                                <i class="bi bi-chevron-expand icon-right"></i>
                            </label>
                            <div class="collapse" id="collapse1">
                                <div class="card card-body">
                                    <div class="row">
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
                                            <input type="range" min="10" max="1000" step="10" value="300"
                                                data-orientation="" disabled="disabled" />
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
                                            <input type="range" min="10" max="1000" step="10" value="300"
                                                data-orientation="" disabled="disabled" />
                                        </div>
                                        <div class="col-md-12 mb-2">
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
                                            <input type="range" min="10" max="1000" step="10" value="300"
                                                data-orientation="" disabled="disabled" />
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
                    <div class="col-md-8">
                        <div class="ava_bal_bg bottom-sec scrollBotBox">
                            <label class="lbl_blue_txt ms-2" data-bs-toggle="collapse" href="#collapse2" role="button"
                                aria-expanded="false" aria-controls="collapseExample"><i
                                    class="bi  bi-calendar2-event me-2"></i> Recent Orders <i
                                    class="bi bi-chevron-expand icon-right"></i></label>
                            <div class="collapse" id="collapse2">
                                <div class="card card-body">
                                    <div class="row">
                                        <div class="col-md-12 mb-3">
                                            <ul class="recent_order">
                                                <li>
                                                    <div class="recent-left">
                                                        <label class="form-label">CRUDEOIL SEP FUT
                                                        </label>
                                                        <p>Rejected due to Insufficient funds. Required margin is
                                                            107477.50 but available margin
                                                            is 0.00. Check the orderbook for open orders</p>
                                                    </div>
                                                    <div class="recent-right float-end">
                                                        <label class=" form-label">Bought @ 5030.00 Limit - NRML
                                                        </label>
                                                        <label class=" lable_info bg_red">Rejected</label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="recent-left">
                                                        <label class="form-label">CRUDEOIL SEP FUT
                                                        </label>
                                                    </div>
                                                    <div class="recent-right float-end">
                                                        <label class=" form-label">Bought @ 5030.00 Limit - NRML
                                                        </label>
                                                        <label class=" lable_info bg_grey">Pending</label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="recent-left">
                                                        <label class="form-label">GOLD OCT FUT
                                                        </label>
                                                    </div>
                                                    <div class="recent-right float-end">
                                                        <label class=" form-label">Bought @ 5030.00 Limit - NRML
                                                        </label>
                                                        <label class=" lable_info bg_green">Completed</label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="recent-left">
                                                        <label class="form-label">CRUDEOIL SEP FUT
                                                        </label>
                                                        <p>Rejected due to Insufficient funds. Required margin is
                                                            107477.50 but available margin
                                                            is 0.00. Check the orderbook for open orders</p>
                                                    </div>
                                                    <div class="recent-right float-end">
                                                        <label class=" form-label">Bought @ 5030.00 Limit - NRML
                                                        </label>
                                                        <label class=" lable_info bg_red">Rejected</label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="recent-left">
                                                        <label class="form-label">CRUDEOIL SEP FUT
                                                        </label>
                                                    </div>
                                                    <div class="recent-right float-end">
                                                        <label class=" form-label">Bought @ 5030.00 Limit - NRML
                                                        </label>
                                                        <label class=" lable_info bg_grey">Pending</label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="recent-left">
                                                        <label class="form-label">GOLD OCT FUT
                                                        </label>
                                                    </div>
                                                    <div class="recent-right float-end">
                                                        <label class=" form-label">Bought @ 5030.00 Limit - NRML
                                                        </label>
                                                        <label class=" lable_info bg_green">Completed</label>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="scrollbotTarget" style="height: 1px;"></div>
                    </div>
                </div>
            </div>