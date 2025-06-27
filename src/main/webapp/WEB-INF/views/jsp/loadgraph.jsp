<div class="main_content" id="loadGraphDivId">
    <div class="row mt-3 mb-2">
        <div class="col-md-12">
            <div class="main_info">
                <h5 class="pro_title"><label id="displaylabelId"></label> <span class="pro_sub"><label id="exchlabelId"></label></span> <span
                        class="tp_lgreen price_sub">16,650.50 <i class="bi bi-chevron-up"></i></span> <span
                        class="percent">+ 4.20 (0.12%)</span> <span class="clock_icon"><i
                            class="bi bi-alarm"></i></span> </h5>
                <div class="btn_buysell">
                    <button class="btn buy_button btn-showbuysell" type="button"
                        data-modal-type="buy">Buy</button>
                    <button class="btn sell_button btn-showbuysell" type="button"
                        data-modal-type="sell">Sell</button>
                </div>
            </div>

        </div>

    </div>
    <div class="row">
        <div class="col-md-12">
            <div class="oc-table-main mt-1 load_graph">
                <iframe style="display:block;width:103%;height:100%;" src="/market-watch/chartIQ.jsp"></iframe>
            </div>

        </div>
    </div>
    <div class="row mt-4 mb-1">
        <div class="col-md-4">

            <div class="ava_bal_bg bottom-sec scrollBotBox">

                <label class="lbl_blue_txt ms-2" data-bs-toggle="collapse" href="#collapse1" role="button"
                    aria-expanded="false" aria-controls="collapseExample"><i
                        class="bi bi-building me-2"></i> Performance <i
                        class="bi bi-chevron-expand icon-right"></i></label>

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
                                <ul class="recent_order recentdataorders">
                                
                                    <!-- <li>
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
                                    </li> -->
                                </ul>

                            </div>



                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>
    <div class="row">
        <div class="col"><div class="scrollbotTarget" style="height: 1px;"></div></div>
    </div>
</div>