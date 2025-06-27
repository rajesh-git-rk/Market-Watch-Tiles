<div class="main_content">

<div id="dashboardId">
    <div class="row mb-2">
        <div class="col-md-12 col-xs-12">
            <div class="user_info">
                <h5>AB100200</h5>
                <input type="hidden" id="UserIdhiddenId" value="${userId}" /> 
                <input type="hidden" id="passwordhiddenId" value="${password}" /> 
                 <input type="hidden" id="tpinhiddenId" value="${tpin}" /> 
                <span>Chandran Rajesh</span>
            </div>
        </div>
        <div class="col-xl-7 col-lg-12 col-md-7  mb-1 pb-md-0">

            <div class="ava_bal_bg d-flex">
                <a href="#" class="ext_link"><i class="bi bi-arrow-up-right"></i></a>
                <div class="ava_bal">
                    <label class="lbl_blue_txt"><i class="bi bi-wallet2 me-2"></i> Available Balance</label>
                    <span class="ava_bal_num" id="availableBalance"></span>
                    <div class="d-flex justify-content-between">
                        <a href="#"><i class="bi bi-clipboard-data"></i></a>
                        <div class="pay_btns">
                            <button class="btn" onclick="payinLinkKambala();">Payin</button>
                            <button class="btn" onclick="payoutLinkKambala();">Payout</button>
                        </div>
                    </div>
                </div>
                <div class="bal_left">
                    <div class="">
                        <label>Opening Balance</label>
                        <p id="openingBalance"></p>
                    </div>
                    <div class="">
                        <label>Margin used</label>
                        <p id="marginUsed"></p>
                         <label id="marginUsedhiddenId"></label>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-5 col-lg-12 col-md-5  mb-1 mt-sm-4 mt-md-0">
            <!-- <div class="ava_bal_bg nifty">
            <a href="#" class="ext_link"><i class="bi bi-arrow-up-right"></i></a>
            <div class="nifty_txt_list"><i class="bi bi-search"></i><h4>NIFTY</h4><span>NSE</span><label>16,650.50</label></div>
            <img src="images/nifty_img.jpg" class="img-fluid nifty_img" alt="" />
        </div> -->
            <div class="ava_bal_bg mb-3">
                <a href="#" class="ext_link"><i class="bi bi-arrow-up-right"></i></a>
                <label class="lbl_blue_txt ms-2"><i class="bi bi-folder me-2"></i> Orders</label>
                <div class="count_box d-flex justify-content-between">
                    <div class="box_large_txt">
                        <span class="title">Pending</span>
                        <label id="pendingOrdersCount"></label>
                    </div>
                    <div class="box_large_txt">
                        <span class="title">Trades</span>
                        <label id="tradesCount"></label>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-xl-4 col-lg-6 col-md-6 pb-3 pb-md-0">
            <!-- <div class="ava_bal_bg mb-3">
            <a href="#" class="ext_link"><i class="bi bi-arrow-up-right"></i></a>
            <label class="lbl_blue_txt ms-2"><i class="bi bi-folder me-2"></i> Orders</label>
            <div class="count_box d-flex justify-content-between">
                <div class="box_large_txt">
                    <span class="title">Pending</span>
                    <label>10</label>
                </div>
                <div class="box_large_txt">
                    <span class="title">Trades</span>
                    <label>12</label>
                </div> 
            </div>
        </div> -->
            <div class="ava_bal_bg">
                <a href="#" class="ext_link"><i class="bi bi-arrow-up-right"></i></a>
                <label class="lbl_blue_txt ms-2"><i class="bi bi-stopwatch me-2"></i> Alerts</label>
                <ul id="alerts_holder" class="alerts_data_lists">
                    <li>
                        <div class="alerts_lft">
                            <label class="mb-1">CRUDEOIL21JUNFUT</label>
                            <p>CRUDEOIL JUN FUT Lesser than â¹4801</p>
                        </div>
                        <div class="alerts_rgt running-widget">
                            <label class="btn mb-1 running-label">Running</label>
                            <label class="value">LTP â¹4810 <span data-status="active"
                                    class="running-control"><i
                                        class="bi bi-pause-circle-fill ms-2"></i></span></label>
                        </div>
                    </li>
                    <li>
                        <div class="alerts_lft">
                            <label class="mb-1">CRUDEOIL21JUNFUT</label>
                            <p>CRUDEOIL JUN FUT Lesser than â¹4801</p>
                        </div>
                        <div class="alerts_rgt running-widget">
                            <label class="btn mb-1 running-label">Running</label>
                            <label class="value">LTP â¹4810 <span data-status="active"
                                    class="running-control"><i
                                        class="bi bi-pause-circle-fill ms-2"></i></span></label>
                        </div>
                    </li>
                    <li>
                        <div class="alerts_lft">
                            <label class="mb-1">CRUDEOIL21JUNFUT</label>
                            <p>CRUDEOIL JUN FUT Lesser than â¹4801</p>
                        </div>
                        <div class="alerts_rgt running-widget">
                            <label class="btn mb-1 running-label">Running</label>
                            <label class="value">LTP â¹4810 <span data-status="active"
                                    class="running-control"><i
                                        class="bi bi-pause-circle-fill ms-2"></i></span></label>
                        </div>
                    </li>
                    <li>
                        <div class="alerts_lft">
                            <label class="mb-1">CRUDEOIL21JUNFUT</label>
                            <p>CRUDEOIL JUN FUT Lesser than â¹4801</p>
                        </div>
                        <div class="alerts_rgt running-widget">
                            <label class="btn mb-1 running-label">Running</label>
                            <label class="value">LTP â¹4810 <span data-status="active"
                                    class="running-control"><i
                                        class="bi bi-pause-circle-fill ms-2"></i></span></label>
                        </div>
                    </li>
                    <li>
                        <div class="alerts_lft">
                            <label class="mb-1">CRUDEOIL21JUNFUT</label>
                            <p>CRUDEOIL JUN FUT Lesser than â¹4801</p>
                        </div>
                        <div class="alerts_rgt running-widget">
                            <label class="btn mb-1 running-label">Running</label>
                            <label class="value">LTP â¹4810 <span data-status="active"
                                    class="running-control"><i
                                        class="bi bi-pause-circle-fill ms-2"></i></span></label>
                        </div>
                    </li>
                    <li>
                        <div class="alerts_lft">
                            <label class="mb-1">CRUDEOIL21JUNFUT</label>
                            <p>CRUDEOIL JUN FUT Lesser than â¹4801</p>
                        </div>
                        <div class="alerts_rgt running-widget">
                            <label class="btn mb-1 running-label">Running</label>
                            <label class="value">LTP â¹4810 <span data-status="active"
                                    class="running-control"><i
                                        class="bi bi-pause-circle-fill ms-2"></i></span></label>
                        </div>
                    </li>
                    <li>
                        <div class="alerts_lft">
                            <label class="mb-1">CRUDEOIL21JUNFUT</label>
                            <p>CRUDEOIL JUN FUT Lesser than â¹4801</p>
                        </div>
                        <div class="alerts_rgt running-widget">
                            <label class="btn mb-1 running-label">Running</label>
                            <label class="value">LTP â¹4810 <span data-status="active"
                                    class="running-control"><i
                                        class="bi bi-pause-circle-fill ms-2"></i></span></label>
                        </div>
                    </li>
                    <li>
                        <div class="alerts_lft">
                            <label class="mb-1">CRUDEOIL21JUNFUT</label>
                            <p>CRUDEOIL JUN FUT Lesser than â¹4801</p>
                        </div>
                        <div class="alerts_rgt running-widget">
                            <label class="btn mb-1 running-label">Running</label>
                            <label class="value">LTP â¹4810 <span data-status="active"
                                    class="running-control"><i
                                        class="bi bi-pause-circle-fill ms-2"></i></span></label>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="col-xl-4 col-lg-12 order-md-3 order-lg-3 order-xl-2 mt-md-3 mt-xl-0 pb-3 pb-md-0">
            <div class="ava_bal_bg">
                <a href="#" class="ext_link"><i class="bi bi-arrow-up-right"></i></a>
                <label class="lbl_blue_txt ms-2"><i class="bi bi-briefcase me-2"></i> Holdings <i class="bi bi-info-circle info_icn ms-2" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Holdings show Equity
                    Shares bought by you" aria-label="Holdings show Equity
                    Shares bought by you"></i></label>
                <div class="pie_charts">
                    <div class="price_with_txt mt-3">
                        <label>P&amp;L <i class="bi bi-info-circle info_icn ms-2" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Holdings Profit &amp; Loss" aria-label="Holdings Profit &amp; Loss"></i></label>
                        <p id="price_txt" class="price_txt">1,004.90 <sub>+ 42.10 %</sub></p>
                    </div>
                    <div class="pie_chart_bg mb-3">
                        <div class="pie_chart">
                            <div id="donutchart" style="width: 190px; height: 190px;"><div style="position: relative;"><div dir="ltr" style="position: relative; width: 190px; height: 190px;"><div aria-label="A chart." style="position: absolute; left: 0px; top: 0px; width: 100%; height: 100%;"><svg width="190" height="190" aria-label="A chart." style="overflow: hidden;"><defs id="_ABSTRACT_RENDERER_ID_0"></defs><rect x="0" y="0" width="190" height="190" stroke="none" stroke-width="0" fill="#ffffff"></rect><g><text text-anchor="start" x="37" y="21.65" font-family="Arial" font-size="9" font-weight="bold" stroke="none" stroke-width="0" fill="#000000">Holdings</text><rect x="37" y="14" width="117" height="9" stroke="none" stroke-width="0" fill-opacity="0" fill="#ffffff"></rect></g><g><path d="M96,72.8L96,38A58,58,0,0,1,111.01150461594621,152.02369792476597L102.00460184637848,118.40947916990639A23.200000000000003,23.200000000000003,0,0,0,96,72.8" stroke="#ffffff" stroke-width="1" fill="#3366cc"></path><text text-anchor="start" x="122.0931562631414" y="94.26659333455788" font-family="Arial" font-size="9" stroke="none" stroke-width="0" fill="#ffffff">item1</text></g><g><path d="M73.59052083009362,102.00460184637849L39.976302075234045,111.01150461594622A58,58,0,0,1,96,38L96,72.8A23.200000000000003,23.200000000000003,0,0,0,73.59052083009362,102.00460184637849" stroke="#ffffff" stroke-width="1" fill="#990099"></path><text text-anchor="start" x="55.30172698502243" y="76.36171361924043" font-family="Arial" font-size="9" stroke="none" stroke-width="0" fill="#ffffff">item5</text></g><g><path d="M79.5951226764721,112.4048773235279L54.987806691180246,137.01219330881975A58,58,0,0,1,39.976302075234045,111.01150461594622L73.59052083009362,102.00460184637849A23.200000000000003,23.200000000000003,0,0,0,79.5951226764721,112.4048773235279" stroke="#ffffff" stroke-width="1" fill="#109618"></path></g><g><path d="M87.09539815362152,123.43242651185614L78.08849538405379,157.0466452667157A58,58,0,0,1,52.08780669118024,142.0351406507695L76.6951226764721,117.42782466547764A23.200000000000003,23.200000000000003,0,0,0,87.09539815362152,123.43242651185614" stroke="#ffffff" stroke-width="1" fill="#ff9900"></path></g><g><path d="M102.00460184637848,118.40947916990639L111.01150461594621,152.02369792476597A58,58,0,0,1,80.98849538405379,152.02369792476597L89.99539815362152,118.40947916990639A23.200000000000003,23.200000000000003,0,0,0,102.00460184637848,118.40947916990639" stroke="#ffffff" stroke-width="1" fill="#dc3912"></path></g><g></g></svg><div aria-label="A tabular representation of the data in the chart." style="position: absolute; left: -10000px; top: auto; width: 1px; height: 1px; overflow: hidden;"><table><thead><tr><th>items</th><th>value</th></tr></thead><tbody><tr><td>item1</td><td>11</td></tr><tr><td>item2</td><td>2</td></tr><tr><td>item3</td><td>2</td></tr><tr><td>item4</td><td>2</td></tr><tr><td>item5</td><td>7</td></tr></tbody></table></div></div></div><div aria-hidden="true" style="display: none; position: absolute; top: 200px; left: 200px; white-space: nowrap; font-family: Arial; font-size: 9px; font-weight: bold;">Holdings</div><div></div></div></div>
                        </div>
                        <div  id="pie_chart_checkboxs" class="pie_chart_checkboxs" onchange="piechartCheckboxOnChange();">
                            <div class="form-grp">
                                <input type="radio" name="piechart" id="id1" value="CV" checked>
                                <label for="id1">Current Value </label>
                            </div>
                            <div class="form-grp">
                                <input type="radio" name="piechart" value="PandL" id="id2">
                                <label for="id2">P&amp;L</label>
                            </div>
                            <div class="form-grp">
                                <input type="radio" name="piechart" value="Investment" id="id3">
                                <label for="id3">Investment</label>
                            </div>
                        </div>
                    </div>
                </div>
                <ul class="invest_current_lists">
                    <li>Investment <span  id="investmentLabel">30,000.00</span></li>
                    <li>Current Value <span id="currentValue">12,000.00</span></li>
                </ul>
            </div>
        </div>
        <div class="col-xl-4 col-lg-6 col-md-6 order-md-2 order-lg-2 order-xl-3">
            <div class="ava_bal_bg">
                <a href="#" class="ext_link"><i class="bi bi-arrow-up-right"></i></a>
                <label class="lbl_blue_txt ms-2"><i class="bi bi-telegram me-2"></i> Running Positions <i class="bi bi-info-circle info_icn ms-2" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Shows Currently
                    Open Positions" aria-label="Shows Currently
                    Open Positions"></i></label>
                <div class="d-flex price_with_txt_2 mt-3">
                    <div class="price_with_txt">
                        <label>P&amp;L <i class="bi bi-info-circle info_icn ms-2" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Positions Profit &amp; Loss" aria-label="Positions Profit &amp; Loss"></i></label>
                        <p class="price_txt">1,004.90 <sub>+ 42.10 %</sub></p>
                    </div>
                    <div class="price_with_txt">
                        <label>P&amp;L <i class="bi bi-info-circle info_icn ms-2" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Positions MTM" aria-label="Positions MTM"></i></label>
                        <p class="price_txt">1,004.90 <sub>+ 42.10 %</sub></p>
                    </div>
                </div>
                <ul class="alerts_data_lists running_lists mt-4 openOrderList">
                   <!--  <li>
                        <div class="alerts_lft">
                            <label class="mb-1">TVSMOTORS</label>
                            <ul>
                                <li>NSE</li>
                                <li>SE 28 JULY 2021</li>
                                <li>650 CE</li>
                                <li>NRML</li>
                            </ul>
                        </div>
                        <div class="alerts_rgt">
                            <label class="mb-1">MTM <span>+1,200.40</span></label>
                            <label class="value">QTY <span>5</span></label>
                        </div>
                    </li> -->
                    
                   <!--  <div id="openorderbodyId"></div> -->
                    
                   
                </ul>
            </div>
        </div>
    </div>
    
    </div>
    
   </div>


    <div  id="OrderId" style="display:hidden;">
        
        <%@ include file="Orders.jsp" %>            
    </div>
                
  
                
    <div id="loadGraphId" style="display:hidden;">
      <%@ include file="loadgraph.jsp" %>
  </div>  


 <div  id="AccountId" style="display:hidden;">        
<%--         <%@ include file="Accounts.jsp" %>             --%>
		<%@ include file="profile.jsp" %> 

    </div>
    
    <div id="RepeatconfirmPopup" style="display:hidden;">
      <%@ include file="RepeatOrder.jsp" %>
</div> 

 <div id="ModifyconfirmPopup" style="display:hidden;">
      <%@ include file="ModifyOrder.jsp" %>
</div> 


<div id="portfolioPage" style="display:hidden;">
      <%@ include file="Portfolio.jsp" %>

	</div> 
<div id="FundsRenderingPage" style="display:hidden;">
      <%@ include file="Funds.jsp" %>
	</div> 
	
	<div id="CdslResponsePage" style="display:hidden;">
      <%@ include file="sample.jsp" %>
	</div> 

<div id="FundsRenderingPage" style="display: hidden;">
	<%@ include file="Funds.jsp"%>
     </div>
<div id="alertsPage" style="display: hidden;">
	<%@ include file="alerts.jsp"%>
   </div>
   
  <div id="profilePage" style="display: hidden;">
	<%@ include file="profile.jsp"%>
   </div> 
<script type="text/javascript">



	 
	 $('.btn-showorders').click(function(event) {
		   document.getElementById("OrderId").style.display="block";
		  });
	 
	  $('.showchart').click(function(event) {
		   document.getElementById("loadGraphId").style.display="block";
		  });
	  $('.btn-showAccount').click(function(event) {
		   document.getElementById("AccountId").style.display="block";
		  });
	   $('.repeatOrder-showbuysell').click(function(event) {
			   document.getElementById("RepeatconfirmPopup").style.display="block";
		 }); 
	  	$('.btn-showPortfolio').click(function(event) {
		   document.getElementById("portfolioPage").style.display="block";

	 	});  
	  		$('.btn-showFunds').click(function(event) {

			   document.getElementById("FundsRenderingPage").style.display="block";
		 });  
   		$('.btn-showAlerts').click(function(event) {
	  			 document.getElementById("alertsPage").style.display="block";
	  	 });
   		
   		$('.btn-showProfile').click(function(event) {   			
			 document.getElementById("profilePage").style.display="block";
	 });


	  
</script>          
