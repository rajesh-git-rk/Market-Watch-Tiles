<html xmlns="http://www.w3.org/1999/xhtml" lang="en">

<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>

<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<title>Crypto</title>


    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
	<link href="./resourcefiles/css/Orderbook-style.css" rel="stylesheet"	type="text/css">
	<link href="http://netdna.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" rel="stylesheet" type="text/css">
	

<script src="./resourcefiles/AccessJs/PortfolioJS.js"></script>
<script src="./resourcefiles/AccessJs/RepeatOrder.js"></script>
<script src="./resourcefiles/AccessJs/OrderbookJS.js"></script>
<script src="./resourcefiles/AccessJs/PintickerJS.js"></script>
<script src="./resourcefiles/AccessJs/OptionChainJS.js"></script>
<script src="./resourcefiles/AccessJs/ScriptSortSettingJS.js"></script>

		<!-- Bootstrap Modal -->
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
	
    
    
		
		<!-- DatePicker -->

		<link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css">
		<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>


<style>

/* .table-striped {
background-color: #F5F8FD;
} */

/*table-bordered th, .table-bordered td {
     border: 1px solid #F5F8FD; 
    background-color: #F5F8FD !important;
}*/
/* Style the tabmessage */
.tabmessage{
 overflow: hidden;
  border: 1px solid #ccc;
  background-color: #f1f1f1;
   width:95%;
}

/* Style the buttons inside the tabmessage */
.tabmessage button {
  background-color: inherit;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  transition: 0.3s;
  font-size: 17px;
}


/* Change background color of buttons on hover */
.tabmessage button:hover {
  background-color: #ddd;
}

/* Create an active/current tablink class */
.tabmessage button.active {
  background-color: #ccc;
}

/* Style the tabmessage content */
.tabmessagecontent {
  display: none;
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-top: none;
  width:95%;
}

.tab {
  /* overflow: hidden;
  border: 1px solid #ccc; 
  background-color: #f1f1f1;*/
  background-color: #f5f8fd;
   width:430px;
   margin-left:-37px;
}

.tab button:hover {
 /*  background-color: #ddd; */
   background-color: #a7e4d9 !important;
}

.tab button.active {
  /* background-color: #ccc; */
  background-color:#a7e4d9;
  
} 


/*  


.tab button {
  background-color: inherit;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  transition: 0.3s;
  font-size: 17px;
}


.tab button:hover {
  background-color: #ddd;
}

.tab button.active {
  background-color: #ccc;
} */


/* .tabcontent {
  display: none;
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-top: none;
  width:164%;
} */

div.ex3 {
  background-color: lightblue;
  height: 500px;
  width: 500px;  
  overflow-y: auto;
}

body {
   font-family: arial,monospace,regular;
}


.tooltip1 {
  position: relative;
  display: inline-block;
}

.tooltip1 .tooltiptext1 {
  visibility: hidden;
  width: 100px;
  background-color: #555;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px;
  position: absolute;
  z-index: 1;
  bottom: 150%;
  left: 50%;
  margin-left: -75px;
  opacity: 0;
  transition: opacity 0.3s;
}

.tooltip1 .tooltiptext1::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
}

.tooltip1:hover .tooltiptext1 {
  visibility: visible;
  opacity: 1;
}


</style>
</head>

<script>

<!-- To close all Child windows when Parent window is closed -->

 window.addEventListener('beforeunload',function(e){
	  destroyPopUps();
	});
 
 </script>
 
 <script type="text/javascript">
	//var tokenArray = new Array();
	//var tokenId;
	
	var client;

	// var mqttHost = '127.0.0.1';
	var mqttHost = '192.168.1.179';

	var symbolArray = new Array();
	
	var allSymbolArray =new Array();
	
	var continueToCDSLArray = new Array();
	
	
	
</script>

<body>

	<div class="container-fluid">

		<div id="FundshideId" style="display: none;margin-top:18px;">
		<div style="clear:both; height:18px;"></div>
					
<!-- 			<div id="FundsDivId" style="display: none;width: 908px;" class="tabcontent"> -->

<!-- 				<table id="FundstableId" class="table table-striped table-bordered display sortable" class="table table-striped  display sortable" style="height:700px;width: 890px;margin-left:-15px;padding-top: 15px;padding-bottom: 15px;padding-right:15px;padding-left: 15px;"> -->
<!-- 					<thead style="background-color: #4e73df;color: #fff;text-align:center;font-size: 12px;font-family: Helvetica, Sans-Serif;padding-top: 15px;padding-bottom: 15px;padding-right:15px;padding-left: 15px;"> -->
					
					<div style="clear:both; height:8px;"></div>
					<div id="FundsDivId" class="tabcontent" style="display: none;width:908px;">
						<table id="FundstableId" class="table table-striped table-bordered display sortable"
							style="width: 908px;text-align: center; margin-left:-38px;">
							<thead style="background-color: #4e73df;color: #fff; font-size:13px;font-family: Helvetica, Sans-Serif;">
<tr>

							<th>Description</th>
							<th>All Level (ALL)</th>
							<th>ANR 010 (COM)</th>
						</tr>
					</thead>
					<tbody id="FundsbodyId" style="display:none;width:100%;text-align:center;font-size:12px;font-family:Helvetica,Sans-Serif;">

					</tbody>

					<tfoot class="footer-fix table table-striped table-bordered display sortable" id="PositionsfooterId">
					<div style="clear:both; height:8px;"></div>
						<tr>
							<button type="button" id="PayinId" onclick="PayinFundfun()" style="margin-left: 63.5%; width: 15%;text-align:center;font-size:12px;font-family:Helvetica,Sans-Serif;color:white;background-color: green;" class="btn btn-default">PayIn</button>
							<button type="button" id="PayoutId" onclick="PayoutFundfun()" style="margin-left: 2%;width: 15%;text-align:center;font-size:12px;font-family:Helvetica,Sans-Serif;color:white;background-color: Red;" class="btn btn-default">PayOut</button>
							<input type="hidden" id="fundcomId"  name="fundcomId" value="COM">
							<input type="hidden" id="fundallId" name="fundallId" value="ALL">
						</tr>
						
					</tfoot>

				</table>
				<div id="FundsinnerbodyId" style="display: none;">

					<label style="margin-left: 318px;">No Funds Available</label>
				</div>
			</div>


		</div>


<!-- ---------------------------ScriptCount Toast Alert--------------------------- -->
<div class="toast noopcaity" id="scriptCountToast" style="position:absolute;background-color: aliceblue;top:1rem; right:0;" >
    
    <div class="toast-body">
      <label style="margin-top: 8px;">You cannot add more than 50 records.</label>
       <button style="margin-top: 8px;" type="button" class="ml-2 mb-1 close" data-dismiss="toast">&times;</button>
    </div>
  </div>
<div class="slide-in-content wrapper" >
<div class="toast slide-in from-right noopcaity " id="alertupdateshowId" style="position:absolute;background-color: aliceblue;top:23rem; right:0; transition: opacity 1s linear !important;" data-autohide="true"  data-delay="2500">
    
    <div class="toast-body">
    <i  style="margin-right:5px;color: #4e73df;" class="bi bi-check-circle-fill"></i>
      <label style="margin-top: 12px;width: 225px;height: 25px;">Alert Updated Successfully</label>
       <button style="margin-top: 8px;" type="button" class="ml-2 mb-1 close" data-dismiss="toast">&times;</button>
    </div>
  </div>   
  </div>
  
  <div class="slide-in-content wrapper" >
<div class="toast slide-in from-right noopcaity " id="deleteshowId" style="position:absolute;background-color: aliceblue;top:23rem; right:0; transition: opacity 1s linear !important;" data-autohide="true"  data-delay="2500">
    
    <div class="toast-body">
    <i  style="margin-right:5px;color: #4e73df;" class="bi bi-check-circle-fill"></i>
      <label style="margin-top: 12px;width: 225px;height: 25px;">Deleted Successfully</label>
       <button style="margin-top: 8px;" type="button" class="ml-2 mb-1 close" data-dismiss="toast">&times;</button>
    </div>
  </div>   
  </div>
  
   <div class="slide-in-content wrapper" >
<div class="toast slide-in from-right noopcaity " id="setalertshowId" style="position:absolute;background-color: aliceblue;top:23rem; right:0; transition: opacity 1s linear !important;" data-autohide="true"  data-delay="2500">
   
   <div class="toast-body">
    <i  style="margin-right:5px;color: #4e73df;" class="bi bi-check-circle-fill"></i>
      <label style="margin-top: 12px;width: 225px;height: 25px;">Alert Created Successfully</label>
       <button style="margin-top: 8px;" type="button" class="ml-2 mb-1 close" data-dismiss="toast">&times;</button>
    </div>
  </div>   
  </div>
<!-- ----------------------------------------------------------------------------- -->





	<!-- Buy/Sell  Order Modal --> 

			<div class="modal fade background-clickable" id="myModal" role="dialog" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" data-keyboard="false" data-backdrop="false">

				<div class="modal-dialog modal-lg ">
					<div class="modal-content">
						<div class="modal-header" id="modelheaderId">
							<h4 class="modal-title"></h4>
							<div class="form-group col-sm-4" style="height:20px;margin-left:-29%;">
								<label class="stockhead fonts_13" id="stocklabelId"></label><br>							
								<label class="fonts_13 stockExpiryhead" id="mcxexpirylabelId" ></label> 
								<label class="fonts_13 stockExpiryhead" id="nseexpirydatelabelId" ></label>
							    <label class="fonts_13 stockExpiryhead" id="nfoexpirydatelabelId" ></label>
							    
							    <input type="hidden" id="mcxticksizehiddval" style="color: white;" name="mcxticksizehiddval" />
							    <input type="hidden" id="mcxexpirydatehiddval" style="color: white;" name="mcxexpirydatehiddval" /> 
							    <input type="hidden" id="nseticksizehiddval" style="color: white;" name="nseticksizehiddval" /> 
							    <input type="hidden" id="nseexpirydatehiddval" style="color: white;" name="nseexpirydatehiddval" /> 
							    <input type="hidden" id="nfoexpirydatehiddval" style="color: white;" name="nfoexpirydatehiddval" />
								<input type="hidden" id="stockhiddval" style="color: white;" name="stockhiddval" />
							</div>
							<label class="stockhead fonts" id="stockhiddval" name="stockhiddval"></label>
							<div class="toggle-btn" id="toggle-btnId" data-toggle="tooltip"	title="Switch Buy/Sell" onclick="this.classList.toggle('active'); buysellShow();">
							<div class="inner-circle"></div>
							</div>

						</div>
						
<!-- 						buy-sell-Body START -->
						<div class="modal-body" style="overflow: auto;">

							<div class="row ">
								<div class="form-group col-sm-5">
									<label class="radio-inline fonts " data-toggle="tooltip" data-placement="bottom" title="Cash and Carry" style="padding-left: 0px;"> 
										<input type="radio"	id="cncId" name="cncId" disabled="disabled" style="padding-left: 15px; text-align: center;">
										<span id="cncspanId" class="tooltiptext" style="text-align: center;">CNC</span>
									</label> 
									<label class="radio-inline fonts" data-toggle="tooltip" data-placement="bottom" title="Normal" style="padding-left: 5px;">
										 <input type="radio" id="NrmlId" name="NrmlId" disabled="disabled" style="padding-left: 10px; text-align: center;">
										 <span id="NrmlspanId" disabled="disabled" style="">NRML</span>
									</label> 
									<label class="radio-inline fonts" data-toggle="tooltip"	data-placement="bottom" title="Intraday Square off" style="padding-left: 5px;"> 
									<input type="radio" id="MisId" name="MisId" style="padding-left: 10px; text-align: center;">
									<span style="">MIS</span>
									</label>
								</div>
								<div class="form-group col-sm-7" align="right">
									<label class="radio-inline fonts" data-toggle="tooltip" data-placement="bottom" title="Limit" style="padding-left: 5px;">
									 <input type="radio" id="lmtId" style="text-align: center;" name="lmtId" onclick="Lmtcheck()" class="Lmtcheckclass"><span  style="padding-left:3px;">LMT</span>
									</label>
									 <label class="radio-inline fonts" data-toggle="tooltip" data-placement="bottom" title="Market" style="padding-left: 5px;"> 
									 <input type="radio" id="mktId" style="text-align: center;" name="mktId" class="Mktcheckclass"><span  style="padding-left:3px;">MKT</span>
									</label> 
									<label class="radio-inline fonts" data-toggle="tooltip" data-placement="bottom" title="Stop Loss" style="padding-left: 5px;"> 
									<input type="radio" id="slId" name="slId" style="text-align: center;" class="Slcheckclass"><span  style="padding-left:3px;">SL</span>
									</label> 
									<label class="radio-inline fonts" data-toggle="tooltip" data-placement="bottom" title="Stop Loss Market" style="padding-left: 5px;">	
									 <input type="radio" id="sl-mId" name="sl-mId" style="text-align: center;" class="Sl-Mcheckclass"><span class="tooltiptext"  style="padding-left:3px;">SL-M</span>
									</label>
								</div>
							</div>

							<div class="row">

								<div class="form-group col-sm-3 fonts">
									<label for="QtyId">QTY (Lotsize:1)</label>
									 <input type="number" style="width: 170px;" id="QtyId" onkeydown="if(event.key==='.'){event.preventDefault();}" onchange="myqtyFunction()" name="Qtyname" min="1" max="">
								</div>
								<div class="form-group col-sm-3 fonts">
									<label for="priceId">PRICE (Ticksize:0.5):</label> 
									<input type="number" style="width: 170px;" disabled="disabled" step="0.5" onkeyup="myPriceonkeyupFunction()" onchange="myPriceFunction()" value="" id="priceId" name="priceId" min="0" max="">
								</div>
								<div class="form-group col-sm-3 fonts" id="TriggerPriceDivId"
									style="display: none;">
									<label for="TriggerpriceId">TRIGGER PRICE</label> 
									<input type="number" style="width: 170px;"	onkeyup="TriggerPricekeyupFunction()"	onchange="TriggerPriceFunction()" disabled="disabled" id="TriggerpriceId" name="TriggerpriceId" min="0" max="">
								</div>
<!-- 								   			  onchange="TriggerPriceFunction()changeFunction()"  onkeydown="keydownFunction()" onkeyup="keyupFunction()" -->
								
								<div class="form-group col-sm-3 fonts" id="CoStoplossDivId"	style="display: none;">
									<label for="quantity" id="CoStoplosslabellineId">STOPLOSS</label>
									<input type="number" style="width: 170px;" id="CoStoplossId"	name="CoStoplossId" min="0" max="">
								</div>

								<div class="form-group col-sm-3 fonts">
									<label for="quantity" id="DiscquantityLabelId">DISC.QTY</label>
									<input type="number" style="width: 170px;" disabled="disabled" id="DiscquantityId" onchange="mydiscqtyFunction()" name="Discquantityname" min="0" max="">
								</div>

								<div class="form-group col-sm-3 fonts" id="stoplessId" style="display: none;">
									<label for="quantity">STOPLOSS (ABSOLUTE)</label>
									 <input	type="number" style="width: 155px; padding-left: 15px;" id="stoplossAbsolutequanId" name="stoplossAbsolutequanId" min="0" max="">
								</div>
			<div class="form-group col-sm-3 fonts" id="tarketDivId" style="display: none;">
			<label for="quantity" id="labellineId">TARGET (ABSOLUTE)</label>
			<input type="number" style="width: 170px;" id="TargetAbsolutequanId" name="TargetAbsolutequanId" min="0" max="">
			</div>
			<div class="form-group col-sm-3 " id="TrailingstopId" style="display: none;">
			<label for="quantity" class="fonts_1" id="labellineId">TRAILING STOPLOSS (ABSOLUTE)</label> 
			<input type="number" style="width: 170px;height:23px;margin-top:4px;" id="TargetstoplossquanId" name="TargetstoplossquanId" min="0" max="">
			</div>
			</div>
			<div class="row">

					<div class=" form-check col-sm-6" style="padding-left:10px;">
					<br> 
					<label class="radio-inline fonts" style="padding-left: 0px;"> 
					<span id="TriggerPriceErrorId" style="color: red;text-align=center;display: none;">
					*Trigger price shouldn't be greater than price </span>
					<input type="hidden" id="TriggerPricehiddenErrorId" />
					</label> 
					<label class="radio-inline fonts" style="padding-left: 0px;">
					<span id="DiscQuanErrorId"	style="color: red; text-align:center; display: none;">
					*Disclosed quantity cannot be grater than order Quantity </span>
					 <input type="hidden" id="DiscQuanhiddenErrorId" />
				  </label> 
				  <label class="radio-inline fonts" style="padding-left: 0px;">
				<span id="DiscQuanNSEErrorId" 	style="color: red; text-align:center; display: none;">
				*Disclosed quantity cannot be less than 10% of your order. </span> 
				<input type="hidden" id="DiscQuanNSEhiddenErrorId" />
				</label>
			 <label class="radio-inline fonts" style="padding-left: 0px;">	
			 <span id="DiscQuanMCXErrorId" style="color: red; text-align:center; display: none;">
			 *Disclosed quantity cannot be less than 25% of your order. </span> 
			 <input type="hidden" id="DiscQuanMCXhiddenErrorId" />
			</label> <br>
			 <label class="radio-inline fonts" data-toggle="tooltip" data-placement="top" title="Regular" style="padding-left: 0px;"> 
			 <input type="radio" id="RegularOrdId" name="RegularOrdId"><span style="padding-left:3px;">Regular</span>
			 </label>
			  <label class="radio-inline fonts" data-toggle="tooltip" data-placement="top" title="Bracket Order" id="BracketOrdlabelId" style="padding-left: 5px;"> 
			  <input type="radio" id="BracketOrdId" name="BracketOrdId"><span id="BracketOrdspanId" style="padding-left:3px;">BO</span>
			  </label> 
			  <label class="radio-inline fonts" data-toggle="tooltip" data-placement="top" title="Cover Order" style="padding-left: 5px;"> 
			  <input type="radio" id="CoverOrdId" name="CoverOrdId"><span id="CoverOrdspanId" style="padding-left:3px;">CO</span>
			 </label>
			  <label class="radio-inline fonts" data-toggle="tooltip" data-placement="top" title="After Market Order" style="padding-left: 5px;"> 
			  <input type="radio" id="AfterMarketOrdId" name="AfterMarketOrdId"><span style="padding-left:3px;">AMO</span>
			  </label>
			  </div>
			  	<div class="form-group col-sm-2 fonts" style="margin-left:10%;margin-top:4%;">
				<input type="hidden" id="UserID" value="${userId}" /> 
				<input type="hidden" id="scripthiddval" name="scripthiddval" /> 
				<input type="hidden" id="tokenhiddval" name="tokenhiddval" />
				<button type="button" id="buyId" onclick="PlaceOrderbuyfun()" class="btn btn-default buysubmitgreen fonts">BUY</button>
				<button type="button" id="sellId" onclick="PlaceOrdersellfun()" class="btn btn-default sellsumbmitred fonts">SELL</button>
				</div>
<!-- 				<button type="button" class="btn btn-default cancelbtn fonts"  style="margin-left:-10%;margin-top:4%;" data-dismiss="modal">CANCEL</button> -->
				<button type="button" class="btn btn-default cancelbtn fonts"  style="margin-left:10px;margin-top:32px;"  data-dismiss="modal">CANCEL</button>
				
				</div>

						</div>
			<!-- buy-sell-Body END -->

						<div class="modal-footer">

							<div class="form-group col-md-12" align="left" 	style="padding-left: 7px;">
								<label class="radio-inline fonts" id="DaylabelId" data-toggle="tooltip" data-placement="top" title="Full Day Validity" style="padding-left: 0px;"> 
								<input type="radio" id="dayId" name="dayId" style="padding-left: 5px;">
								<span style="padding-left:3px;">DAY</span>
								</label>
								<label class="radio-inline fonts" id="IoclabelId" data-toggle="tooltip" data-placement="top" title="Immediate or Cancel" style="padding-left: 5px;">
								<input type="radio" id="iocId" name="iocId" style="padding-left: 5px;"><span style="padding-left:3px;">IOC</span>
								</label> 
								<label class="radio-inline fonts" id="GTClabelId" data-toggle="tooltip" data-placement="top" title="GTC" style="padding-left: 5px;">
								 <input type="radio"
									id="gtcId" name="gtcId" style="padding-left: 5px;">
									<span tyle="padding-left:3px;">GTC</span>
								</label> <label class="radio-inline fonts" id="GTDlabelId"
									data-toggle="tooltip" data-placement="top"
									title="Good Till Date" style="padding-left: 5px;"> <input
									type="radio" id="gtdId" name="gtdId" style="padding-left: 5px;">
									<span style="padding-left:3px;">GTD</span>
								</label> <label class="radio-inline fonts" id="GTTlabelId"
									data-toggle="tooltip" data-placement="top"
									title=" Good Till Target" style="padding-left: 5px;"> <input
									type="radio" id="gttId" name="gttId" style="padding-left: 5px;"><span
									id="GTTspanId" style="padding-left:3px;">GTT</span>
								</label> <label class="datepicker" id="datepickerId"
									style="padding-left: 5px; display: none;"> Validity: <input
									type="text" class="datepicker" id="datepicker">
								</label> <label class="radio-inline col-sm-3 fonts " id="GTTstoplossId"
									style="padding-left: 5px; display: none;"> <input
									type="checkbox" id="GTTstoplosscheckId"
									name="GTTstoplosscheckId"> Stoploss: <input
									type="number" style="width: 140px;" disabled="disabled"
									id="GTTstoplossValueId"><span class="transparent">%</span>
								</label> <label class="radio-inline col-sm-3 fonts " id="GttTargetId"
									style="padding-left: 5px; display: none;"> <input
									type="checkbox" id="GttTargetcheckId" name="GttTargetcheckId">
									Target: <input type="number" style="width: 140px;"
									disabled="disabled" id="GttTargetvalueId"><span
									class="transparent">%</span>
								</label>
							</div>
						</div>

					</div>


				</div>
	
	</div>
       <!-- 	Buy/Sell Modal...END	  -->  
       
       
       
        <!-- 	Order Cancel  Modal...START	  -->  
			<div class="modal fade" id="ajax_response" tabindex="-1"
				role="dialog" aria-labelledby="myModalLabel">
				<div class="modal-dialog ajax_response" role="document">
					<div class="modal-content">

						<div class="modal-body inner-circle">
							<h5 style="text-align: center">Order Cancelled Successfully.</h5>
							<label style="margin-left: 200px;" id="cancelordernumber"></label>

						</div>
						<div class="modal-footer" style="text-align: center;">
							<!-- <button type="button" class="btn btn-default" data-dismiss="modal">Close</button> -->
							<button type="button" class="btn btn-primary  mx-auto"
								id="sdata_pop" data-dismiss="modal">Ok</button>
						</div>
					</div>
				</div>
			</div>
			
			<div class="modal fade" id="ajax_responseModify" tabindex="-1"
				role="dialog" aria-labelledby="myModalLabel">
				<div class="modal-dialog ajax_response" role="document">
					<div class="modal-content">

						<div class="modal-body inner-circle">
							<h5 style="text-align: center">Order Updated Successfully.</h5>
							<label style="margin-left: 200px;" id="modifyordernumber"></label>

						</div>
						<div class="modal-footer" style="text-align: center;">
							<!-- <button type="button" class="btn btn-default" data-dismiss="modal">Close</button> -->
							<button type="button" class="btn btn-primary  mx-auto"
								id="sdata_pop" data-dismiss="modal">Ok</button>
						</div>
					</div>
				</div>
			</div>
<!-- 	Order Cancel  Modal...END	  -->  
		

	<!-- 	BuyOrderNumber  Modal...START	  -->  
	<div class="modal fade " id="BuyOrderNumberModelId" role="dialog">
		<div class="modal-dialog">

			<!-- Modal content-->
			<div class="modal-content">
				<div class="modal-header">
					<h4 class="modal-title">Buy Order</h4>
					<button type="button" class="close" data-dismiss="modal">&times;</button>

				</div>
				<div class="modal-body">
					<p>
						You Place the Buy Order Number: <b> <label
							style="margin-left: 200px;" id="buyOrderNumbers"></label></b>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
				</div>
			</div>

		</div>
	</div>
	<!-- 	BuyOrderNumber  Modal...END	  --> 
	
	
	<!-- 	SellOrderNumber  Modal...START	  --> 
	<div class="modal fade " id="SellOrderNumberModelId" role="dialog">
		<div class="modal-dialog">

			<!-- Modal content-->
			<div class="modal-content">
				<div class="modal-header">
					<h4 class="modal-title">Sell Order</h4>
					<button type="button" class="close" data-dismiss="modal">&times;</button>
				</div>
				<div class="modal-body">
					<p>
						You Place the Sell Order Number: <label
							style="margin-left: 200px;" id="sellOrderNumbers"></label>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
				</div>
			</div>

		</div>
	</div>
	
		<!-- 	SellOrderNumber  Modal...START	  --> 
	   
	
	
             <!--         Option Chain Start   -->

        <div id="OptionChainDivhideId"  style="display:none;margin-top:10px;">
 
     <div id="OptionChainDivcallId" style="display:none;">
<!-- table table-bordered table-striped mb-0 -->
	<table id="OptionChaintablecallId" class="table table-striped  display sortable" style="display: block; overflow-x: auto; white-space: nowrap;height:700px;width: 920px;margin-left:-50px;padding-top: 15px;padding-bottom: 15px;padding-right:15px;padding-left: 15px;">
        <thead style="background-color: #4e73df;color: #fff;text-align:center;font-size: 12px;font-family: Helvetica, Sans-Serif;padding-top: 15px;padding-bottom: 15px;padding-right:15px;padding-left: 15px;">
            <tr>
          
                <th>OI&Changes</th>
                <th>OI Percent</th>
                <th>Volume</th>
                <th>IV</th>
                <th>Bid Price</th>
                <th> & Qty.Ask Price & Qty</th>
                <th>LTP & Changes</th>
                <th>Strike Price</th>
                <th>OI&Changes</th>
                <th>OI Percent</th>
                <th>Volume</th>
                <th>IV</th>
                <th>Bid Price</th>
                <th>& Qty.Ask Price & Qty</th>
                <th>LTP & Changes</th>
                 
            </tr>
        </thead>
        <tbody id="OptionChainbodycallId"  class="" style="display:none;height:650px;overflow:scroll;vertical-align: top;table-layout: fixed;width:100%;overflow:auto;padding-top:10px;padding-bottom:10px;padding-right:10px;padding-left:10px;text-align:center;font-size:12px;font-family:Helvetica,Sans-Serif;">
          		 <caption id="captionId" class="captionclass">
          		<label id="OptionChaininnerbodycallId" style="margin-left:418px;margin-top:10px;display:none;">No OptionChain Available</label>
   				</caption>
        </tbody>
        
        <tfoot class="footer-fix table table-striped table-bordered display sortable" id="OptionChainfootercallId">
           
<!--         footer-fixed  -->
		<tr>

    	</tr>
    	</tfoot>
  	
    </table>
					<div id="OptionChaininnerbodycallId" style="display:none;">       
       			<label style="margin-left:418px;">No OptionChain Available</label>
       			</div>						
		</div>
  </div>

<!-- Option Chain End -->



<!--    START Profile web Design   -->
    
    
    
<!--     <div class="container"> -->
<div id="AccountProfile" style="display: none;margin-top:50px;">
<!-- 		<div class="main-body"> -->
<div id="AccountProfileDivId">
			<div class="row" id="AccountProfiledesignId" style="display:none;">
				<div class="col-lg-4">
					<div class="card">
						<div class="card-body">
							<div class="d-flex flex-column align-items-center text-center">
								<img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="Admin" class="rounded-circle p-1 bg-primary" width="110">
								<div class="mt-3">
<!-- 									<h4> <label  id="ProfileNamelabelId"> </label></h4> -->
							<input type="text" style="border: 0px none;text-align:center;"   id="ProfileNamelabelId">
									<!-- <p class="text-secondary mb-1">Full Stack Developer</p>
									<p class="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
									<button class="btn btn-primary">Follow</button>
									<button class="btn btn-outline-primary">Message</button> -->
								</div>
							</div>
							<hr class="my-4">
							<ul class="list-group list-group-flush">
								<li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
									<h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-globe me-2 icon-inline"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>Website</h6>
									<span class="text-secondary">https://Enrichbroking.com</span>
								</li>
								<li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
									<h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github me-2 icon-inline"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>Github</h6>
									<span class="text-secondary">Enrich.com</span>
								</li>
								<li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
									<h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter me-2 icon-inline text-info"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>Twitter</h6>
									<span class="text-secondary">@Enrich.com</span>
								</li>
								<li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
									<h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram me-2 icon-inline text-danger"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>Instagram</h6>
									<span class="text-secondary">Enrich.com</span>
								</li>
								<li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
									<h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-facebook me-2 icon-inline text-primary"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>Facebook</h6>
									<span class="text-secondary">Enrich.com</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="col-lg-8" >
					<div class="card">
						<div class="card-body">
						<h5 class="d-flex align-items-center mb-3">Account Details</h5>
							<div class="row mb-3">							
								<div class="col-sm-3">
									<h6 class="mb-0">Name</h6>
								</div>
								<div class="col-sm-9 text-secondary">
<!-- 								<label style="color:black;" id="AccountNamelabelId"> </label> -->
								
									<input type="text" style="border: 0px none;"   id="AccountNamelabelId">
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0">Email address</h6>
								</div>
								<div class="col-sm-9 text-secondary">
<!-- 								<label style="color:black;" id="emailAddresslabelId"> </label> -->
									<input type="text"  style="border: 0px none;"  id="emailAddresslabelId" name="emailAddresslabelId">
							     <i class='fa fa-edit' data-toggle='modal'  style='color:blue;cursor: pointer;font-size:24px;'  onclick='EditEmailFun("+emailIdTag+","+cellAddrTag+")'  data-target='#ProfileEmailPhoneEditId'  title='Edit'></i>
								
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0">PAN</h6>
								</div>
								<div class="col-sm-9 text-secondary">
<!-- 								<label  style="color:black;" id="PanNumberlabelId"> </label> -->
									<input type="text"  style="border: 0px none;" id="PanNumberlabelId" name="PanNumberlabelId">
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0">Mobile number</h6>
								</div>
								<div class="col-sm-9 text-secondary">
<!-- 								<label  style="color:black;" id="MobileNumberlabelId"> </label> -->
									<input type="text" style="border: 0px none;" id="MobileNumberlabelId" name="MobileNumberlabelId"> 
								   <i class='fa fa-edit' data-toggle='modal'  style='color:blue;cursor: pointer;font-size:24px;'  onclick='EditEmailFun("+emailIdTag+","+cellAddrTag+")'  data-target='#ProfileEmailPhoneEditId'  title='Edit'></i>
								
								</div>
							</div>
<!-- 							<div class="row mb-3"> -->
<!-- 								<div class="col-sm-3"> -->
<!-- 									<h6 class="mb-0">Address</h6> -->
<!-- 								</div> -->
<!-- 								<div class="col-sm-9 text-secondary"> -->
<!-- 									<input type="text" class="form-control" value="Bay Area, San Francisco, CA"> -->
<!-- 								</div> -->
<!-- 							</div> -->
						<!-- 	<div class="row">
								<div class="col-sm-3"></div>
								<div class="col-sm-9 text-secondary">
									<input type="button" class="btn btn-primary px-4" value="Save Changes">
								</div>
							</div> -->
						</div>
					</div>
						<!-- 	START Bank Detail -->
					<div class="row">
						<div class="col-sm-12">
							<div class="card">
								<div class="card-body">
							 <h5 class="d-flex align-items-center mb-3">Bank Details</h5>
								
								
											<div class="row mb-3">							
								<div class="col-sm-3">
									<h6 class="mb-0">Bank Name</h6>
								</div>
								<div class="col-sm-9 text-secondary">
<!-- 								<label  style="color:black;" id="AccountNamelabelId"> </label> -->
								
									<input type="text" style="border: 0px none;"  id="AccountNamelabelId">
								</div>
							</div>
								<div class="row mb-3">							
								<div class="col-sm-3">
									<h6 class="mb-0">Bank Account Number</h6>
								</div>
								<div class="col-sm-9 text-secondary">
<!-- 								<label style="color:black;"  id="bankAccountlabelId"> </label> -->
								
									<input type="text"  style="border: 0px none;" id="bankAccountlabelId">
								</div>
							</div>
								
			
								
								<!-- 	<h5 class="d-flex align-items-center mb-3">Bank Details</h5>
									<p>Web Design</p>
									<div class="progress mb-3" style="height: 5px">
										<div class="progress-bar bg-primary" role="progressbar" style="width: 80%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
									</div>
									<p>Website Markup</p>
									<div class="progress mb-3" style="height: 5px">
										<div class="progress-bar bg-danger" role="progressbar" style="width: 72%" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
									</div>
									<p>One Page</p>
									<div class="progress mb-3" style="height: 5px">
										<div class="progress-bar bg-success" role="progressbar" style="width: 89%" aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"></div>
									</div>
									<p>Mobile Template</p>
									<div class="progress mb-3" style="height: 5px">
										<div class="progress-bar bg-warning" role="progressbar" style="width: 55%" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
									</div>
									<p>Backend API</p>
									<div class="progress" style="height: 5px">
										<div class="progress-bar bg-info" role="progressbar" style="width: 66%" aria-valuenow="66" aria-valuemin="0" aria-valuemax="100"></div>
									</div> -->
								</div>
							</div>
						</div>
					</div>
					<!-- 	END Bank Detail -->
					
					
								<!-- 	START Account Detail -->
					<div class="row">
						<div class="col-sm-12">
							<div class="card">
								<div class="card-body">
								
								
						<div class="row mb-3">							
								<div class="col-sm-3">
									<h6 class="mb-0">DPIDs</h6>
								</div>
								<div class="col-sm-9 text-secondary">
<!-- 								<label  style="color:black;" id="DPIDslabelId"> </label> -->								
									<input type="text"  style="border: 0px none;"   id="DPIDslabelId">
								</div>
							</div>
								<div class="row mb-3">							
								<div class="col-sm-3">
									<h6 class="mb-0">Segments</h6>
								</div>
								<div class="col-sm-9 text-secondary">
<!-- 								<label style="color:black;" id="SegmentslabelId"> </label> -->								
									<input type="text"   style="border: 0px none;" id="SegmentslabelId"> 
									<i class='fa fa-edit' data-toggle='modal'  style='color:blue;cursor: pointer;font-size:24px;'  onclick='EditSegmentFun()'  data-target='#SegmentEditId'  title='Edit'></i> 
									
<!-- 									<a href="http://yahoo.com">  http://yahoo.com </a> -->
								</div>
							</div>
							<div class="row mb-3">							
								<div class="col-sm-3">
									<h6 class="mb-0">Products</h6>
								</div>
								<div class="col-sm-9 text-secondary">
<!-- 								<label style="color:black;" id="ProductslabelId">  -->								
<!-- 								</label> -->
									<input type="text"  style="color:black;border: 0px none;" id="ProductslabelId">
								</div>
							</div>
								
			
								
								<!-- 	<h5 class="d-flex align-items-center mb-3">Bank Details</h5>
									<p>Web Design</p>
									<div class="progress mb-3" style="height: 5px">
										<div class="progress-bar bg-primary" role="progressbar" style="width: 80%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
									</div>
									<p>Website Markup</p>
									<div class="progress mb-3" style="height: 5px">
										<div class="progress-bar bg-danger" role="progressbar" style="width: 72%" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
									</div>
									<p>One Page</p>
									<div class="progress mb-3" style="height: 5px">
										<div class="progress-bar bg-success" role="progressbar" style="width: 89%" aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"></div>
									</div>
									<p>Mobile Template</p>
									<div class="progress mb-3" style="height: 5px">
										<div class="progress-bar bg-warning" role="progressbar" style="width: 55%" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
									</div>
									<p>Backend API</p>
									<div class="progress" style="height: 5px">
										<div class="progress-bar bg-info" role="progressbar" style="width: 66%" aria-valuenow="66" aria-valuemin="0" aria-valuemax="100"></div>
									</div> -->
								</div>
							</div>
						</div>
					</div>
					<!-- 	END Account Detail -->						
				</div>
			</div>
		</div>
	</div>
    
    
    
<!--     END Profile web Design  -->
    

    

<!--     START Old_Profile web Design  -->

		<%-- <div id="AccountProfile11" style="display: none">


			<div id="AccountProfileDivId" style="display: none;margin-top:18px;" class="tabcontent">

				<div class="page-header">
					<h5>Profile</h5>
				</div>

				<div class="picture-container col-sm-3">


					<form method="POST" action="/uploadFile"
						enctype="multipart/form-data">
						<div class="picture">
							<img src="${pageContext.request.contextPath}/assets/img/avatar.svg" class="picture-src" id="wizardPicturePreview" title="">
							 <input type="file" name="file" id="wizard-picture" class="">
						</div>
						<h6 class="form-label">Choose Picture</h6>
						<!--          <input type="submit" value="submit"/>   -->
					</form>
					<b> <label class="stockhead fonts"	style="text-align: right; color: black; margin-left: 100%;" id="ProfileNamelabelId"> </label>
					</b>
				</div>



				<div class="row">
					<div class="col-sm-6 page-header" id="AccounthideId">

						<h5>
							<label class="page-header" style="margin-left: 10%; width: 40%;">Account</label>
						</h5>
						<!-- 	<h5><label class="page-header" style="margin-left: 100%;width: 40%;">Bank accounts</label></h5> -->


						<table id="AccountProfiletableId"
							class="table table-striped table-bordered display sortable"
							style="width: 100%;">
							<thead style="background-color: #e3e5e7;">
							</thead>
							<tbody id="AccountProfilebodyId" style="display: none">

							</tbody>

						</table>
						<label style="margin-left: 150px;"></label>
						 <label	style="color: red" id="ProfileErrormsgId">
							<div id="AccountProfileinnerbodyId" style="display: none;">

							</div>
					</div>

					<div class="col-sm-6  class=" page-header="" id="BankhideId">
						<h5>Bank accounts</h5>

						<!-- 		<input type="text" style="color: red" id="ProfileErrormsgId" name="ProfileErrormsgId"> -->

						<table id="BanktableId"
							class="table table-striped table-bordered display sortable"
							style="width: 100%; margin-top: 2%">
							<thead style="background-color: #e3e5e7;">
								<div class="row">
									<th><label style="margin-top: 5%"
										id="bankAccountNolabelId"></label></th>
									<th><label style="margin-top: 5%;"
										id="bankAccountNamelabelId"></label></th>
								</div>

							</thead>
							<!--         <tbody id="BankbodyId" style="display:none"> -->

							<!--         </tbody> -->
						</table>
						<!-- 			<div id="BankinnerbodyId" style="display:none;"> -->
						<!--        <label style="margin-left:418px;">No Funds Available</label> -->
						<!--        </div>	 -->
						<!--        </div> -->
					</div>

				</div>

				<div class="row">

					<!--  START   Settings   	  Setting Part Hidden-Not need Now -->
					<!--  <div class="col-sm-6  page-header ">
      <h5>Settings</h5>
      <div class="row">
      
       <div class="form-group col-md-4" align="left" style="padding-left:20px;">
      	<lable>Chart</lable>
      </div>
      
      <div class="form-group col-md-6" align="left" >
				
				<label class="radio-inline fonts" id="ChartIqlabelId" style="padding-left:0px;">
      			<input type="radio" id="ChartIqId" name="ChartIqId"   style="padding-left:5px;"><span style="align=center">ChartIQ</span>
      			</label>
     
				<label class="radio-inline fonts" id="TradingViewlabelId" style="padding-left:0px;">
      			<input type="radio" id="TradingViewId" name="TradingViewId"   style="padding-left:5px;"><span style="align=center">TradingView</span>
      			</label>
      </div> 
      </div>
       <div class="row">
       <div class="form-group col-md-4" align="left" style="padding-left:20px;">
      <lable>Theme</lable>
      </div>
      <div class="form-group col-md-6" align="left"   >
				<label class="radio-inline fonts" id="DefaultlabelId"  style="padding-left:0px;">
      			<input type="radio" id="DefaultId" name="DefaultId"   style="padding-left:5px;"><span style="align=center">Default</span>
      			</label>
     
				<label class="radio-inline fonts" id="DarklabelId" data-toggle="tooltip"  data-placement="top" title="Full Day Validity" style="padding-left:0px;">
      			<input type="radio" id="DarkId" name="DarkId"  style="padding-left:5px;"><span style="align=center">Dark</span>
      			</label>
      </div> 
      
      </div>      	

      </div> -->
					<!--  END Settings      	  Setting Part Hidden-Not need Now -->

					<div class="col-sm-6  page-header ">
						<!--       <h5>Sessions</h5> -->

						<!--       <br><br> -->

						<!--        <div class="form-group col-md-4" align="left" style="padding-left:20px;"> -->
						<!--        &#9679;Console<br> -->
						<!--        &#9679; Kite Web -->
						<!--        </div> -->
					</div>
			</div>
			</div>
		</div> --%>
		<!--     START Old_Profile web Design  -->
		
		
		
		
		
		<!-- <div class="row sm-gutters">

			<div class="col-md-5"> -->


				<!-- Profile Confirm update Modal START -->

	
				<div class="modal fade ProfileModel" id="ProfileEmailPhoneEditId"
					style="display: none;" role="dialog" tabindex="-1" role="dialog"
					aria-labelledby="myModalLabel" data-keyboard="false"
					data-backdrop="false">
					<div class="modal-dialog  modal-lg disable-drag">

						<!-- Modal content-->
						<div class="modal-content profile-column">
							<div class="modal-header">
								<h4 class="modal-title" style="color:white;">Confirm update</h4>
								<button type="button" class="close" data-dismiss="modal">&times;</button>
							</div>
							<div class="modal-body">
								<input type="hidden" id="EmailhiddenId">
								 <input type="hidden" id="mobilehiddenId"> 
								 <input type="hidden" id="otphiddenId">
								 <input type="hidden" id="UserID" value="${userId}" />
								<div class="checkbox">
									<label style="color:black;">
									<input type="checkbox" id="otpConfirmId" name="otpConfirmId" value="">
									 I/We hereby declare that the email ID being updated here belongs to me/us. Further, I
										authorize Enrich Financial to use this to send me any
										information/alert/email. This change will affect the Trading
										and Demat account that I hold with Enrich Financial. </label>
									 <label style="color:black;">
										Updating e-mail and phone number will only take up to 1 Hour
										to reflect (based on the updation on exchanges and
										depositories) </label>
								</div>

								<div class="" style="color:black;">
									Receive OTP on
									 <label style="color:black;" class="checkbox-inline">
									<input 	type="checkbox" style="color:black;" checked value="" disabled="disabled">E-mail</label>
									<label style="color:black;" class="checkbox-inline">
									<input type="checkbox" style="color:black;" checked value="" disabled="disabled">Mobile</label>
								</div>
								<div class="modal-footer">
									<button type="button" id="sendOtpId" style="color:white;" onclick="SendOTPProfileEmailPhone()" data-toggle='modal'
										data-target='#OtpModelId' disabled="disabled" class="btn btn-default buysubmitgreen fonts">Send OTP</button>
									<button type="button" class="btn btn-default cancelbtn" data-dismiss="modal">Close</button>
								</div>
							</div>

						</div>
					</div>
				</div>
		<!-- Profile Confirm update Modal END -->		



				<!-- Profile SMS Verification Modal START -->	
				<div class="modal fade ProfileModel" id="OtpModelId"
					style="display: none;" role="dialog" tabindex="-1" role="dialog"
					aria-labelledby="myModalLabel" data-keyboard="false"
					data-backdrop="false">
					<div class="modal-dialog  modal-lg">

						<!-- Modal content-->
						<div class="modal-content">
							<div class="modal-header">
								<h4 class="modal-title" style="color:white;">Enrich Broking</h4>
								<button type="button" class="close" data-dismiss="modal">&times;</button>
							</div>
							<div class="modal-body">
								<h5 class="modal-title" style="color:black;">SMS Verification</h5>
								<input type="hidden" style="text-align: right; color: black; margin-left: 10%; width: 40%;" id="verifyOTPhiddenId">
								<!--                 <b> <label class="stockhead fonts" style="text-align: right;color:black;margin-left: 100%;" id="otphiddenlabelId" ></label></b> -->

								<div class="row form-group">
									<div class="col-sm-6">
										<input type="text" id="otpinputId" style="width: 80%;" class="form-control" />
									</div>
									<div class="col-sm-6">
										<button type="button" id="SendOTPVerifyId"
											onclick="SendOTPVerification()"
											class="btn btn-default buysubmitgreen fonts" style="color:white;">Verify</button>
									</div>
								</div>

								<div class="modal-footer">
									<!--           <button type="button" class="btn btn-default " data-dismiss="modal">Close</button> -->
								</div>
							</div>

						</div>
					</div>
				</div>
				<!-- Profile SMS Verification Modal END -->


				<!-- Profile Segments Modal START -->
				<div class="modal fade ProfileModel" id="SegmentEditId"
					style="display: none;" role="dialog" tabindex="-1" role="dialog"
					aria-labelledby="myModalLabel" data-keyboard="false"
					data-backdrop="false">
					<div class="modal-dialog modal-lg disable-drag">
						<!-- Modal content-->
						<div class="modal-content profile-column">
							<div class="modal-header" id="modelheaderId">
								<h4 class="modal-title" style="color:white;">Segments</h4>

								<button type="button" class="close" data-dismiss="modal">&times;</button>
							</div>
							<div class="modal-body">

								<div class="row">
									<div class="form-group col-sm-6">
										<label><b>Equity derivatives</b></label>
										 <label	class="checkbox-inline"><input type="checkbox" value="">NSE - Futures & Options</label><br> <br> <br>
										<label class="checkbox-inline"><input type="checkbox" value="">BSE - Futures & Options</label>
									</div>
									<div class="form-group col-sm-5">
										<div class="form-group">
											<label for="sel1">Select list (select one):</label> <select
												class="form-control" id="sel1">
												<option>1</option>
												<option>2</option>
												<option>3</option>
												<option>4</option>
											</select> <label class="form-label" for="customFile"></label> 
											<input	type="file" class="form-control" id="customFile" accept=".pdf" />

										</div>
									</div>
								</div>


								<div class="row">
									<div class="form-group col-sm-6">
										<label><b>Currency derivatives</b></label><br> <br>
										<label class="checkbox-inline"><input type="checkbox"
											value="">NSE - Currency Exchange</label> <label
											class="checkbox-inline"><input type="checkbox"
											value="">BSE - Currency Exchange</label>
									</div>

									<div class="form-group col-sm-5">

										<input type="text" id="segmentfilepasswordId"
											class="form-control" />
									</div>
								</div>

								<div class="row">
									<div class="form-group col-sm-6">
										<label><b>Commodity</b></label><br> <label
											class="checkbox-inline"><input type="checkbox"
											value="">Commodity account</label>

									</div>
								</div>

								<div class="modal-footer">
									<button type="button" id="SendsegmentId" style="color:white;"
										onclick="SendSegments()"
										class="btn btn-default buysubmitgreen fonts">Submit</button>
									<button type="button" class="btn btn-default cancelbtn"
										data-dismiss="modal">Close</button>
								</div>
							</div>

						</div>
					</div>
				</div>
				<!-- Profile Segments Modal END -->

<!-- Profile End -->


		<!--   Portfolio START -->


		<div id="portfoliohideId" style="display:none;">
					<!-- <div class="tab" >
					<button class="btn swd-button" style="margin-left: 24px;width:40%;background-color: #4e73df;color: #fff;text-align:center;font-size: 12px;font-family: Helvetica, Sans-Serif;" 	id="PositionstabId" onclick="Positionstabfunc()" value="Positions">Positions</button>
						<button class="btn swd-button" style="margin-left: 15px;width:40%;background-color: #4e73df;color: #fff;text-align:center;font-size: 12px;font-family: Helvetica, Sans-Serif;"  id="HoldingstabId" onclick="Holdingstabfunc()" value="Holdings">Holdings</button>

					</div> -->
					
					<div style="clear:both; height:18px;"></div>
					<div class="tab" style="width:290px;">
						<button class="w3-bar-item w3-button active" style="width:136px;font-size:13px"
							id="PositionstabId" onclick="Positionstabfunc()" value="Positions">Positions</button>
						<button class="w3-bar-item w3-button" style="margin-left: 10px; width:136px;font-size:13px"
							 id="HoldingstabId" onclick="HoldingsOnClickFunc()" value="Holdings">Holdings</button>
						
					</div>
					
									
					
					
					<div id="PositionsDivId" class="tabcontent" style="width: 908px">

<!-- 						<table id="PositionstableId" class="table table-striped table-bordered display sortable" class="table table-striped table-bordered display sortable" class="table table-striped  display sortable" style="width: 890px;margin-left:-15px;padding-top: 15px;padding-bottom: 15px;padding-right:15px;padding-left: 15px;"> -->
<!-- 							<thead style="background-color: #4e73df;color: #fff;text-align:center;font-size: 12px;font-family: Helvetica, Sans-Serif;padding-top: 15px;padding-bottom: 15px;padding-right:15px;padding-left: 15px;"> -->
					  
					   <table id="PositionstableId" class="table table-striped table-bordered display sortable" 	style="width: 908px;text-align: center; margin-left:-38px;">
							<thead style="background-color: #4e73df;color: #fff; font-size:13px;font-family: Helvetica, Sans-Serif;">			
								
								<tr>
									<th>Symbol</th>
									<th>Qty</th>
									<th>Prev. Close</th>
									<th>LTP</th>
									<th>MTM</th>
									<th>%Change</th>
								</tr>
							</thead>
							<tbody id="PositionsbodyId" style="display:none;width:100%;text-align:center;font-size:12px;font-family:Helvetica,Sans-Serif;">


							</tbody>
							<tfoot class="global-footer" id="PositionsfooterId" style="width: 100%;">
								<tr class="global-footer" style="width: 100%; background-color: #e3e5e7;">
									<select class="form-control btn swd-button" id="dayNetId" onchange="DayNetOnchangeFun()" style="margin-left:-38px;margin-top:10px;width:15%;background-color: #4e73df;color: #fff;text-align:center;font-size: 12px;font-family: Helvetica, Sans-Serif;">
										<option value="NET" selected="selected" style="width:15%;background-color: #4e73df;color: #fff;text-align:center;font-size: 12px;font-family: Helvetica, Sans-Serif;">Netwise</option>
										<option value="DAY" style="width:15%;background-color: #4e73df;color: #fff;text-align:center;font-size: 12px;font-family: Helvetica, Sans-Serif;">Daywise</option>
									</select>
									
									<button class="btn swd-button " style="width: 16%; margin-top:10px;margin-left: 68.7%;background-color: #4e73df;color: #fff;text-align:center;font-size: 12px;font-family: Helvetica, Sans-Serif;">
									<i class="fa fa-download" style=""></i> Download
									</button>

								</tr>
								<tr id="SquareoffrowId">

									<!--     	 <button class="btn swd-button " style="width:25%; margin-right: 0%;" data-toggle="modal  data-target="#SquareoffmyModal"  >Squareofforder</button> -->

								</tr>
							</tfoot>

						</table>
						<div id="PositionsinnerbodyId" style="display: none;">

							<label style="margin-left: 318px;">No Positions Available</label>
						</div>
					</div>

					<div id="HoldingsDivId" class="tabcontent" style="display: none;width: 908px">

<!-- 						<table id="HoldingstableId"	class="table table-striped table-bordered display sortable"  class="table table-striped  display sortable" style="width: 890px;margin-left:-15px;padding-top: 15px;padding-bottom: 15px;padding-right:15px;padding-left: 15px;"> -->
<!-- 							<thead style="background-color: #4e73df;color: #fff;text-align:center;font-size: 12px;font-family: Helvetica, Sans-Serif;padding-top: 15px;padding-bottom: 15px;padding-right:15px;padding-left: 15px;"> -->
							
							<table id="HoldingstableId" class="table table-striped table-bordered display sortable" 	style="width: 908px;text-align: center; margin-left:-38px;">
							<thead style="background-color: #4e73df;color: #fff; font-size:13px;font-family: Helvetica, Sans-Serif;">			
								
							
								<tr>
									<th>Symbol</th>
									<th>Qty</th>
									<th>Prev. Close</th>
									<th>LTP</th>
									<th>MTM</th>
									<th>%Change</th>
								</tr>
							</thead>
							<tbody id="HoldingsbodyId">

							</tbody>
							<tfoot class="global-footer" id="PositionsfooterId" style="width: 250%;">
								<tr class="global-footer" style="width: 100%; background-color: #e3e5e7;">
                                  <button class="btn swd-button " data-toggle='modal'  data-target='#authoriseModalId' onclick="settleIdFun();nonPOAFun();"  style="width: 16%; margin-top:10px;margin-left: 0%;background-color: #4e73df;color: #fff;text-align:center;font-size: 12px;font-family: Helvetica, Sans-Serif;">
									Authorize
									</button>
									<button class="btn swd-button " style="width: 16%; margin-top:10px;margin-left: 79.5%;background-color: #4e73df;color: #fff;text-align:center;font-size: 12px;font-family: Helvetica, Sans-Serif;">
									<i class="fa fa-download" style=""></i> Download
									</button>
								</tr>
							</tfoot>

						</table>

						<div id="HoldingsinnerbodyId" style="display: show;">

							<label style="margin-left: 318px;">No Holdings Available</label>
						</div>
					</div>
				</div>
				
	<!--   Portfolio END -->


	<!--Portfolio Squareoff Modal START-->
				<div class="modal fade " id="SquareoffmyModal" role="dialog"
					tabindex="-1" data-keyboard="false" data-backdrop="false">
					<div class="modal-dialog  modal-lg disable-drag">

						<!-- Modal content-->
						<div class="modal-content profile-column" style="height: 24em;">

							<div class="modal-header">
								<label class="fonts" style="color: white;" id="SquareofflabelId">
								</label> 
								<input type="hidden" id="SquareoffHiddenId" />
								 <input type="hidden" id="SquareoffHiddenId" /> 
								 <input type="hidden" id="TokenhiddenId" /> 
								 <input type="hidden" id="SquareoffExchangeId" />
								<button type="button" class="close" data-dismiss="modal">&times;</button>

							</div>

							<div class="modal-body" style="height: 400px;"">

								<div class="row ">
									<div class="form-group col-sm-5">
										<label class="radio-inline fonts" data-toggle="tooltip" data-placement="bottom" title="Normal" style="padding-left: 5px;"> <input type="radio"
											id="SqroffNrmlId" name="SqroffNrmlId" checked="checked"
											style="padding-left: 10px; text-align: center;"><span
											id="SqroffNrmlspanId" style="padding-left: 3px;">NRML</span>
										</label>

									</div>

									<div class="form-group col-sm-7" align="right">
										<label class="radio-inline fonts" data-toggle="tooltip" data-placement="bottom" title="Limit" style="padding-left: 5px;"> 
											<input type="radio" id="SqrofflmtId" style="text-align: center;" checked="checked" name="SqrofflmtId" class="SqroffLmtcheckclass">
											<span style="padding-left: 3px;">LMT</span>
										</label> 
										<label class="radio-inline fonts" data-toggle="tooltip" data-placement="bottom" title="Market" style="padding-left: 5px;"> 
										<input type="radio"	id="SqroffmktId" style="text-align: center;"name="SqroffmktId" class="Mktcheckclass">
										<span style="padding-left: 3px;">MKT</span>
										</label>

									</div>
								</div>

								<div class="row">

									<div class="form-group col-sm-3 fonts">
										<label for="QtyId">QTY (Lotsize:1)</label>
										 <input	type="number" style="width: 170px;" id="SquareoffNetqtyId" onkeydown="if(event.key==='.'){event.preventDefault();}" onchange="mySquareoffNetqtyFunction()"
											name="SquareoffNetqtyId" min="1" max="">
									</div>

									<div class="form-group col-sm-3 fonts">
										<label for="priceId">PRICE(Ticksize:0.5):</label>
										<input type="number" style="width: 170px;" onchange="mySqroffPriceFunction()" id="SqroffpriceId" name="SqroffpriceId" min="0" max="">
									</div>

									<div class="form-group col-sm-3 fonts" id="SqroffTriggerPriceDivId">
										<label for="TriggerpriceId">TRIGGER PRICE</label>										
										<input type="number" style="width: 170px;" onchange="SqroffTriggerPriceFunction()" disabled="disabled" id="SqroffTriggerpriceId" name="SqroffTriggerpriceId" min="0" max="">
									</div>
									<div class="form-group col-sm-3 fonts">
										<label for="quantity" id="SqroffDiscquantityLabelId">DISC.QTY</label>
										<input type="number" style="width: 170px;" id="SqroffDiscquantityId" onchange="mySqroffdiscqtyFunction()" name="SqroffDiscquantityname" min="0" max="">
									</div>
								</div>

								<div class="row">

									<div class=" form-check col-md-10">
										<br> <label class="radio-inline fonts"
											style="padding-left: 20px;"> 
											<span id="SqroffTriggerPriceErrorId" style="color: red; text-align =center; display: none;">
											*Trigger price shouldn't be greater than price </span>
											 <input type="hidden" id="SqroffTriggerPricehiddenErrorId" />
										</label> 
										<label class="radio-inline fonts" style="padding-left: 0px;">
											<span id="SqroffDiscQuanErrorId" style="color: red; text-align =center; display: none;">
											*Disclosed quantity cannot be grater than order Quantity </span>
											 <input	type="hidden" id="SqroffDiscQuanhiddenErrorId" />
										</label> 
										<label class="radio-inline fonts" style="padding-left: 0px;">
											<span id="SqroffDiscQuanNSEErrorId" style="color: red; text-align =center; display: none;">
											*Disclosed quantity cannot be less than 10% of your order. </span>											
									 <input	type="hidden" id="SqroffDiscQuanNSEhiddenErrorId" />
										</label>
										 <label class="radio-inline fonts" style="padding-left: 0px;">
											<span id="SqroffDiscQuanMCXErrorId" style="color: red; text-align =center; display: none;">
											*Disclosed quantity cannot be less than 25% of your order. </span> 
											<input type="hidden" id="SqroffDiscQuanMCXhiddenErrorId" />
										</label> <br>
									</div>
								</div>
								<div class="row">
									<div class="form-group col-md-12" align="left" 
										style="padding-left: 20px;">
										<label class="radio-inline fonts" id="SqroffDaylabelId"
											data-toggle="tooltip" data-placement="top"
											title="Full Day Validity" style="padding-left: 0px;">
											<input type="radio" id="SqroffdayId" name="SqroffdayId"
											checked="checked" style="padding-left: 5px;"><span
											style="padding-left: 3px;">DAY</span>
										</label> <label class="radio-inline fonts" id="SqroffIoclabelId"
											data-toggle="tooltip" data-placement="top"
											title="Immediate or Cancel" style="padding-left: 5px;">
											<input type="radio" id="SqroffiocId" name="SqroffiocId"
											style="padding-left: 5px;"><span style="padding-left: 3px;">IOC</span>
										</label> <label class="radio-inline fonts" data-toggle="tooltip"
											data-placement="top" title="Regular"
											style="padding-left: 180px;"> <input type="radio"
											id="SqroffRegularOrdId" checked="checked"
											name="SqroffRegularOrdId"><span style="padding-left: 3px;">Regular</span>
										</label>
									</div>



								</div>

								<div class="modal-footer">
									<div class="form-group col-md-10 fonts" align="right">
										<input type="hidden" id="UserID" value="${userId}" /> 
										<input
											type="hidden" id="NetQtyHiddenvalueforBtn" />

										<button type="button" id="SqroffbuyId"
											onclick="SqroffPlaceOrderbuyfun()"
											class="btn btn-default buysubmitgreen fonts">BUY</button>

										<button type="button" id="SqroffsellId"
											onclick="SqroffPlaceOrderbuyfun()"
											class="btn btn-default sellsumbmitred fonts">SELL</button>
										<button type="button" class="btn btn-default cancelbtn fonts"
											data-dismiss="modal">CANCEL</button>
									</div>

								</div>
							</div>


						</div>

					</div>
				</div>
<!-- Portfolio Squareoff Modal END-->

				


				
 <div id="AlertDivId"  style="display: none;">
				 <div style="clear:both; height:21px;"></div>
					<table id="alerttableId"
						class="table table-striped table-bordered display sortable "
						style="width: 908px;text-align: center; margin-left:-38px; ">
						<thead style="background-color: #4e73df;color: #fff; font-size:13px;font-family: Helvetica, Sans-Serif; ">
							<tr>
								<th>Script Name</th>
								<th>Alert</th>
								<th>Frequency</th>
								<th>Expiry Date</th>
								<th>Status</th>
								<th>Symbol</th>
							</tr>
						</thead>
						<tbody id="alertbodyId" style="font-family: Helvetica, Sans-Serif;">

						</tbody>
					</table>
					<div id="alertinnerbodyId" style="display: none;">

						<label style="margin-left: 418px;font-size:12px">No data</label>
					</div>
				</div> 

				<!-- Alert end -->

			 <div id="orderhideId" style="display: none">
					<div style="clear:both; height:18px;"></div>
					<div class="tab">
						<button class="w3-bar-item w3-button active" style="width:136px;font-size:13px"
							id="pendingorderId" onclick="pendingordfunc()" value="Pending">Pending</button>
						<button class="w3-bar-item w3-button" style="margin-left: 10px; width:136px;font-size:13px"
							id="completedorderId" onclick="completeordfunc()"
							value="Completed">Completed</button>
						<button class="w3-bar-item w3-button" id="tradebookorderId" value="TradeBook" style="width:136px; font-size:13px"
							onclick="tradeordfunc()">Trade Book</button>
					</div>
					<div style="clear:both; height:8px;"></div>
					<div id="PendingDivId" class="tabcontent">
						<table id="pendingordertableId" class="table table-striped table-bordered display sortable"
							style="width: 908px;text-align: center; margin-left:-38px;">
							<thead style="background-color: #4e73df;color: #fff; font-size:13px;font-family: Helvetica, Sans-Serif;">
								<tr>
									<th>Exchange</th>
									<th>Product</th>
									<th>Qty</th>
									<th>Avg Price</th>
									<th>Status</th>
									<th>Exchange Order Time</th>
									<th>Action</th>
								</tr>
							</thead>
							<tbody id="pendingorderbodyId" style="font-family: Helvetica, Sans-Serif;" onclick="orderrefresh();">

							</tbody>
						</table>
						<div id="pendinginnerbodyId" style="display: none;">

							<label style="margin-left: 275px;font-size:12px">No data</label>
						</div>
					</div>

					<div id="CompletedDivId" class="tabcontent" style="display: none">
						<table id="completedorderId"
							class="table table-striped table-bordered display sortable"
							style="width: 908px;text-align: center; margin-left:-38px;">
							<thead style="background-color: #4e73df;color: #fff; font-size:13px;font-family: Helvetica, Sans-Serif;">
								<tr>

									<th>Exchange</th>
									<th>Product</th>
									<th>Qty</th>
									<th>Avg Price</th>
									<th>Status</th>
									<th>Exchange Order Time</th>
									<th>Action</th>


								</tr>
							</thead>
							<tbody id="CompletedorderbodyId" style="font-family: Helvetica, Sans-Serif;">

							</tbody>
						</table>

						<div id="CompletedinnerbodyId" style="display: none;">

							<label style="margin-left: 275px;font-size:12px">No data</label>
						</div>
					</div>

					<div id="TradeBookDivId" class="tabcontent" style="display: none">
						<table id="tradebookorderId"
							class="table table-striped table-bordered display sortable"
							style="width: 908px;text-align: center; margin-left:-38px;">
							<thead style="background-color: #4e73df;color: #fff; font-size:13px;font-family: Helvetica, Sans-Serif;">
								<tr>
									<th>Exchange</th>
									<th>Product</th>
									<th>Qty</th>
									<th>Avg Price</th>
									<th>Exch_Order Id</th>
									<th>Exchange Order Time</th>
									<th>Action</th>
								</tr>
							</thead>
							<tbody id="tradebookorderbodyId" style="font-family: Helvetica, Sans-Serif;">

							</tbody>

						</table>

						<div id="tradebookinnerbodyId" style="display: none;">

							<label style="margin-left: 275px;font-size:12px">No data</label>
						</div>
					</div>

				</div> 

			</div>

	
	


			<!--     Alert Modal  START-->

			<div class="modal fade" id="myModalMessageAlert" role="dialog"
				tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
				data-keyboard="false" data-backdrop="false">

				<div class="modal-dialog modal-lg ">

					<div class="modal-content">
						<div class="modal-header">
							ALERT NOTIFICATION
							<h4 class="modal-title"></h4>

						</div>
						<div class="modal-body">

							<div id="messageAlertBodyId"></div>

							<button type="button" style="float: right"
								class="btn btn-default" data-dismiss="modal">Close</button>
						</div>


					</div>
				</div>
			</div>
			<!--     Alert Modal END -->
			
			
			




	
	<script>
	
    $('tbody, .market-news ul').mCustomScrollbar({
      theme: 'minimal',
    });
  </script>

	<script
		src="https://cdnjs.cloudflare.com/ajax/libs/paho-mqtt/1.0.1/mqttws31.min.js"
		type="text/javascript"></script>
	<script
		src="https://cdnjs.cloudflare.com/ajax/libs/paho-mqtt/1.0.1/mqttws31.js"
		type="text/javascript"></script>



	<script>

<!-- To close all Child windows when Parent window is closed -->

 window.addEventListener('beforeunload',function(e){
	  destroyPopUps();
	});  


//========= Square-Off Portfolio Function START ===========

	$('#SqrofflmtId').click(function() {
	 if($("input:radio[name='SqrofflmtId']").is(":checked")) {
			$('#SqroffmktId').prop('checked', false);			
			$('#SqroffpriceId').prop('disabled', false);
			$('#SqroffTriggerpriceId').prop('disabled', true);
	 }	 
 });

	$('#SqroffmktId').click(function() {
	 if($("input:radio[name='SqroffmktId']").is(":checked")) {
			$('#SqrofflmtId').prop('checked', false);
			
			$('#SqroffpriceId').prop('disabled', true);
			$('#SqroffTriggerpriceId').prop('disabled', true);
			
	 }
	 
});
$('#SqroffdayId').click(function() {
	 
	 if($("input:radio[name='SqroffdayId']").is(":checked")) {			
		$('#SqroffiocId').prop('checked', false);
	 }	 
	 });

$('#SqroffiocId').click(function() {
	 
	 if($("input:radio[name='SqroffiocId']").is(":checked")) {			
		$('#SqroffdayId').prop('checked', false);
	 }	 
	 });

//========= Square-Off Portfolio Function END ===========


	

	
	
//   <=========  Profile functions START ===============>



$(document).ready(function(){
	
	
	//Account_ProfileName
	 RefreshProfilefunction();
	
	
	// Prepare the preview for profile picture
	    $("#wizard-picture").change(function(){
	        readURL(this);
	    });
	});
	function readURL(input) {
	    if (input.files && input.files[0]) {
	        var reader = new FileReader();

	        reader.onload = function (e) {
	            $('#wizardPicturePreview').attr('src', e.target.result).fadeIn('slow');
	        }
	        reader.readAsDataURL(input.files[0]);
	    }
	}
	
	
    
    
    $('#otpConfirmId').click(function() { 
	if($("input:checkbox[name='otpConfirmId']").is(":checked")) {
		 document.getElementById("sendOtpId").disabled = false;
	}
	else{
		 document.getElementById("sendOtpId").disabled = true;

	}
	
    });
    
    $('#ChartIqId').click(function() { 
    if($("input:radio[name='ChartIqId']").is(":checked")) {    	   
    	$('#TradingViewId').prop('checked', false);
    }    
    });
    
   
    
    $('#TradingViewId').click(function() { 
    if($("input:radio[name='TradingViewId']").is(":checked")) { 	   
    	$('#ChartIqId').prop('checked', false);
    }
    });
    //DefaultId
    //DarkId
    $('#DefaultId').click(function() { 
    if($("input:radio[name='DefaultId']").is(":checked")) { 	   
    	$('#DarkId').prop('checked', false);
    }
    });
    
    $('#DarkId').click(function() { 
    if($("input:radio[name='DarkId']").is(":checked")) { 	   
    	$('#DefaultId').prop('checked', false);
    }
    });
    
    
    
    
    function Profilefunction(){
    	//order Div Details
      	 $("#otherId").hide();
      	 $("#orderdashboardbookhiddenId").hide();
      	 $("#markethiddenId").hide();
      	
      //portfolio Div Details
      	 $("#portfoliohideId").hide();
      	 $("#PositionsDivId").hide();
      	 $("PositionsbodyId").hide();
      	//Orderbook Div Details
   	 $("#orderhideId").hide();
   	 //Fun Div Details
   	 $("#FundshideId").hide();
   	 $("#FundsDivId").hide();
   	 $("#FundsbodyId").hide();
      	
   	//Alert Div Details
   	 $("#AlertDivId").hide();
   	
   //OptionChain
	 	$("#OptionChainDivhideId").hide();
		$("#OptionChainDivcallId").hide();
		$("#OptionChainbodycallId").hide();
		$("#OptionChaininnerbodycallId").hide();
   	
   	//Profile Div Details
   	$("#AccountProfile").show();
   	$("#AccountProfileDivId").show();
   	 $("#AccountProfiledesignId").show();
   	 
   	 $('#ChartIqId').prop('checked', true);
     $('#DefaultId').prop('checked', true);
     
 	$.ajax({
   		type :'POST',
   		url :'Accountdetails',
   		dataType: 'json',
   		success:function(jsonObject){
   			
   			// var jsonObject =JSON.parse(response);
   			 var body;	
   			 var body;	
		        var stat= jsonObject.stat;   			        
		        var bankdetailsTag=jsonObject.bankdetails;   			        
		        var banknameTag="";
		        var bankAcntNoTag="";
		        
		        var ProfileErrormsg=jsonObject.emsg;
		     
		        if(stat==='Ok'){
		        	
		        	//Account Details
		        	$("#ProfileNamelabelId").val(jsonObject.accountName);
		        	
		        	var AcctTag="AccountName";
			        	var emailTag=jsonObject.emailAddr;
			        	var PanNoTag=jsonObject.panNo;
			        	var cellAddrTag=jsonObject.cellAddr;
			        	var dpTag=jsonObject.dpAccountNumber;
			        	
			        	$("#AccountNamelabelId").val(jsonObject.accountName);
  			        	$("#emailAddresslabelId").val(jsonObject.emailAddr);
  			        	$("#PanNumberlabelId").val(jsonObject.PanNoTag);
  			        	$("#MobileNumberlabelId").val(jsonObject.cellAddr);
			        	
			        	//Bank Details
			        	var BankName=jsonObject.bankName;
			       	    var BankAcctNo=jsonObject.bankAccountNo; 
			        	
			       	 
			        	$("#BankNamelabelId").val(jsonObject.bankName);
			        	$("#bankAccountlabelId").val(jsonObject.bankAccountNo);
  			        	
  			        	
  			        	
			        
			        	var SegmentTag=jsonObject.exchEnabled.split('|');	
			        	
					if(SegmentTag="nse_fo,nse_cm,mcx_fo,"){
						SegmentTag="NFO,NSE,MCX";
					}
					else if( SegmentTag="nse_fo,nse_cm,mcx_fo,bse_fo,bse_cm"){
						SegmentTag="NFO,NSE,MCX,BFO,BSE";
					}
					else{
						SegmentTag=SegmentTag;
					}
			        	 
			       	
		        }
		        
		        else if(stat==='Not_Ok'){
   			    	
  			     	 $('#AccountProfileDivId').show();
  			         $('#AccountProfilebodyId').show();
  				     $('#AccountProfileinnerbodyId').show();     
  		    	  	 $('#AccountinnerbodyId').show();
  		    	  	 $('#AccountbodyId').show();
  		    	 	 $('#BanktableId').hide();
  		    		 document.getElementById("ProfileErrormsgId").innerHTML=ProfileErrormsg;
  		    	
  		         } 
  		  },
  			error:function(){
  				//alert("Accountdetails Error");
  			}	
  			
  		});
    }
    
   /*  function Profilefunction22(){
    	
   	 $("#AccountProfile").show();
   	 
   	 $('#ChartIqId').prop('checked', true);
     $('#DefaultId').prop('checked', true);
     
   	 //order Div Details
   	 $("#otherId").hide();
   	 $("#orderdashboardbookhiddenId").hide();
   	 $("#markethiddenId").hide();
   	
   //portfolio Div Details
   	 $("#portfoliohideId").hide();
   	 $("#PositionsDivId").hide();
   	 $("PositionsbodyId").hide();
   	//Orderbook Div Details
	 $("#orderhideId").hide();
	 //Fun Div Details
	 $("#FundshideId").hide();
	 $("#FundsDivId").hide();
	 $("#FundsbodyId").hide();
   	
	//Alert Div Details
	 $("#AlertDivId").hide();
	 
   	$.ajax({
   		type :'POST',
   		url :'Accountdetails',
   		dataType: 'json',
   		success:function(response){
   			
   			 var jsonObject =JSON.parse(response);

   			 var body;	
   			        var stat= jsonObject.stat;   			        
   			        var bankdetailsTag=jsonObject.bankdetails;   			        
   			        var banknameTag="";
   			        var bankAcntNoTag="";
   			        
   			        var ProfileErrormsg=jsonObject.emsg;
   			     alert("stat : "+stat)
   			        if(stat==='Ok'){
   			        	
   			        	var AcctTag="AccountName";
   			        	var emailTag=jsonObject.emailAddr;
   			        	var PanNoTag=jsonObject.panNo;
   			        	var cellAddrTag=jsonObject.cellAddr;
   			        	var dpTag=jsonObject.dpAccountNumber;
   			        	
   			        	
   			        	
   			        
   			        	var SegmentTag=jsonObject.exchEnabled.split('|');	
   			        	
						if(SegmentTag="nse_fo,nse_cm,mcx_fo,"){
							SegmentTag="NFO,NSE,MCX";
						}
						else if( SegmentTag="nse_fo,nse_cm,mcx_fo,bse_fo,bse_cm"){
							SegmentTag="NFO,NSE,MCX,BFO,BSE";
						}
						else{
							SegmentTag=SegmentTag;
						}
   			        	var ProductTag=jsonObject.product;
   			        	var SupportCode="Support Code";
   			        	var Email ="E-mail";
   			        	var PAN="PAN";
   			        	var Phone="Phone";
   			        	var DPIDs="DP IDs";
   			        	var Segments="Segments";
   			        	var BankName="";
   			        	var BankAcctNo="";
   			        	var View="View";
   			        	var Proucts="Products";
   			        	var nestordernum="";   			        	
   			        	var emailIdTag=JSON.stringify(jsonObject.emailAddr);
   			        	var BankdetailTag="";
   			         	var BankName=jsonObject.bankName;
				       	var BankAcctNo=jsonObject.bankAccountNo; 			        	
				       	
				       	$("#bankAccountNolabelId").html(jsonObject.bankAccountNo);
				       	$("#bankAccountNamelabelId").html(jsonObject.bankName);
				       	
   			        	 body=body+"<tr>";				        	
   			        	 body=body+"<td>" +SupportCode  + "</td>"+"<td>" + View + "</td>";	
   			        	 body=body+"</tr>";
   			        	 
  			        	body=body+"<tr>";
  			        	 body=body+"<td>" +Email + "</td>"+"<td>" +emailTag+"<i class='fa fa-edit' data-toggle='modal'  style='cursor: pointer;font-size:24px;'  onclick='EditEmailFun("+emailIdTag+","+cellAddrTag+")' data-target='#ProfileEmailPhoneEditId'  title='Edit'></i></td>";
  			            body=body+"</tr>";
  			            
   			        	  body=body+"<tr>";				        	
   			        	 body=body+"<td>" +PAN  + "</td>"+"<td>" +PanNoTag  + "</td>"; 	
   			        	 body=body+"</tr>";
   			        	 
   			        	 body=body+"<tr>";				        	
   			        	 body=body+"<td>" +Phone  + "</td>"+"<td>" +cellAddrTag  +"<i class='fa fa-edit' data-toggle='modal'  style='cursor: pointer;font-size:24px;'  onclick='EditEmailFun("+emailIdTag+","+cellAddrTag+")'  data-target='#ProfileEmailPhoneEditId'  title='Edit'></i></td>";	
   			        	 body=body+"</tr>";
   			        	 
   			        	 body=body+"<tr>";				        	
   			        	 body=body+"<td>" +DPIDs  + "</td>"+"<td>" +dpTag  + "</td>";
   			        	 body=body+"</tr>";
   			        	 
   			        	 body=body+"<tr>";				        	
   			        	 body=body+"<td>" +Segments  + "</td>"+"<td>" +SegmentTag  +"<i class='fa fa-edit' data-toggle='modal'  style='cursor: pointer;font-size:24px;'  onclick='EditSegmentFun()'  data-target='#SegmentEditId'  title='Edit'></i></td>";	
   			        	 body=body+"</tr>";
   			        	 
   			        	 
   			        	 body=body+"<tr>";				        	
   			        	 body=body+"<td>" +Proucts  + "</td>"+"<td>" +ProductTag  + "</td>" ;	
   			        	 body=body+"</tr>";
   			        	 
   			        	 $('#AccountProfileDivId').show();
   			        	 $('#AccountProfilebodyId').show();
   				         $('#AccountProfilebodyId').html(body);
   				         $('#AccountProfileinnerbodyId').hide();
   			        }
   			        
   			    else if(stat==='Not_Ok'){
   			    	
   			     	 $('#AccountProfileDivId').show();
   			         $('#AccountProfilebodyId').show();
   				     $('#AccountProfileinnerbodyId').show();     
   		    	  	$('#AccountinnerbodyId').show();
   		    	  	$('#AccountbodyId').show();
   		    	 $('#BanktableId').hide();
   		    	document.getElementById("ProfileErrormsgId").innerHTML=ProfileErrormsg;
   		    	
   		         } 
   		  },
   			error:function(){
   				alert("Accountdetails Error");
   			}	
   			
   		});
   } */
    
    
//  <=========  Profile functions END ===============>




	
//=========== Thangadurai ======================	
	
	
	
	
</script>





<!-- Modal -->
  <div   class="modal fade" id="myModalPosition" role="dialog"   data-keyboard="true" data-backdrop="non static">
    <div class="modal-dialog modal-lg " >
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title"></h4>
          <div style="float:left; margin-right:732px;">
			<label  id="cancelStocklabelId" >
      		</label></div>
          <!-- <div class="inner-circle" style="float:left; margin-right:668px;">MCX-ORDER</div> -->
        </div>
        <div class="modal-body" style="overflow:auto;">
            
          
   			 
   			  <div class="row">
          <label style="margin-left:300px">Are You Sure Position Conversion?</label>
   			 </div><br>
            <div class="fonts row" style="margin-left:280px" align="right">           
   			 <button type="button" id="cancelId"  onclick="PositionOrderfun()"  class="btn btn-default buysubmitgreen fonts" >Yes</button> 
         	 
               <input type="hidden" id="positionhiddnstordId" name="positionhiddnstordId" />
               <input type="hidden" id="positionhiddpcode" name="positionhiddpcode" />
               <input type="hidden" id="positionhiddfillshare" name="positionhiddfillshare" />
               <input type="hidden" id="positionhiddpchange" name="positionhiddpchange" />
         <button type="button"  class="btn btn-default cancelbtn fonts" data-dismiss="modal">No</button>
        
         </div> 
        </div>
        
      </div> 
      
    </div></div>

  <!-- Modal -->
       <!-- Modal -->
  <div   class="modal fade" id="myModalModify" role="dialog" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"  data-keyboard="false" data-backdrop="false">
    <div class="modal-dialog modal-lg " > 
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header" id="modelheaderId">
          <h4 class="modal-title"></h4>
          	<div class="form-group col-sm-3">
			<label class="stockheadModify fonts"  id="modifyStocklabelId" >
      		</label> 
      		     <input type="hidden" id="modifystockhiddval" name="modifystockhiddval"  /> 
      		     
      		      <input type="hidden" id="nestordernumberhiddId" name="nestordernumberhiddId"  /> 
      		      <input type="hidden" id="pcodeModifyhiddId" name="pcodeModifyhiddId"  /> 
      		      <input type="hidden" id="dayModifyhiddId" name="dayModifyhiddId"  /> 
      		      <input type="hidden" id="mktModifyhiddId" name="mktModifyhiddId"  /> 
      		      <input type="hidden" id="priceIdModifyhiddId" name="priceIdModifyhiddId"  /> 
      		      <input type="hidden" id="QtyIdModifyhiddId" name="QtyIdModifyhiddId"  /> 
      		      <input type="hidden" id="TriggerModifyhiddId" name="TriggerModifyhiddId"  /> 
      		      <input type="hidden" id="DiscModifyhiddId" name="DiscModifyhiddId"  /> 
      		      
      		      <input type="hidden" id="accountIdModifyhiddId" name="accountIdModifyhiddId"  /> 
      		      <input type="hidden" id="ExsegModifyhiddId" name="ExsegModifyhiddId"  /> 
      		      <input type="hidden" id="TrsymModifyhiddId" name="TrsymModifyhiddId"  /> 
      		      <input type="hidden" id="TrantypeModifyhiddId" name="TrantypeModifyhiddId"  /> 
      		      <input type="hidden" id="PrctypeModifyhiddId" name="PrctypeModifyhiddId"  /> 
      		      <input type="hidden" id="FillsharesModifyhiddId" name="FillsharesModifyhiddId"  /> 
      		      <input type="hidden" id="ExchangeModifyhiddId" name="ExchangeModifyhiddId"  /> 
 
      		
      		</div>	     
          <div  class="" id="toggle-btnId" data-toggle="tooltip" title="Switch Buy/Sell" onclick="this.classList.toggle('active'); buysellShow();">
          <!-- <div class="inner-circle"></div> -->
          </div> 
          
        </div>
        <div class="modal-body" style="overflow:auto;">
            
           <div  class="row ">
				<div class="form-group col-sm-5">
				<label class="radio-inline fonts "     data-toggle="tooltip"  data-placement="bottom" title="Cash and Carry" style="padding-left:0px;">
      			<input type="radio" id="cncIdModify" name="cncIdModify1" disabled="disabled"  style="padding-left:15px;text-align:center;"><span id="cncspanId"  class="tooltiptext" style="text-align:center;" >CNC</span>
      			</label>  
     		 
     		 
     		 
     		 <label class="radio-inline fonts"   data-toggle="tooltip"  data-placement="bottom" title="Normal" style="padding-left:5px;">
      			<input type="radio" id="NrmlIdModify" name="NrmlIdModify1"  disabled="disabled" style="padding-left:10px;text-align:center;"><span id="NrmlspanId" disabled="disabled" style="align=center">NRML</span>
      			</label>
      			<label class="radio-inline fonts"  data-toggle="tooltip"  data-placement="bottom" title="Intraday Square off" style="padding-left:5px;">
      			<input type="radio" id="MisIdModify" name="MisIdModify1" disabled="disabled" style="padding-left:10px;text-align:center;"><span  style="align=center">MIS</span>
      			</label>
    
     		</div>
     		 <div class="form-group col-sm-7" align="right"> 
     		 <label class="radio-inline fonts" data-toggle="tooltip"  data-placement="bottom" title="Limit"  style="padding-left:5px;">
      			<input type="radio" id="lmtIdModify" style="text-align:center;" name="lmtIdModify"  onclick="LmtcheckModify()" class="Lmtcheckclass"><span >LMT</span>
      			</label>
      			<label class="radio-inline fonts" data-toggle="tooltip"  data-placement="bottom" title="Market"  style="padding-left:5px;">
      			<input type="radio" id="mktIdModify" style="text-align:center;" name="mktIdModify"  class="Mktcheckclass" ><span style="align=center">MKT</span>
      			</label>
      			<label class="radio-inline fonts"  data-toggle="tooltip"  data-placement="bottom" title="Stop Loss" style="padding-left:5px;">
      			<input type="radio" id="slIdModify" name="slIdModify" style="text-align:center;" class="Slcheckclass"><span style="align=center">SL</span>
      			</label>
      			
      			<label class="radio-inline fonts" data-toggle="tooltip"  data-placement="bottom" title="Stop Loss Market"  style="padding-left:5px;">
      			<input type="radio" id="sl-mIdModify" name="sl-mIdModify" style="text-align:center;" class="Sl-Mcheckclass"><span class="tooltiptext" style="align=center">SL-M</span>
      			</label>
      			
     		 
   			</div>
   			</div>
   			 
   			  <div  class="row">
   			  
				<div class="form-group col-sm-3 fonts">
   			  <label  for="QtyIdModify">QTY (Lotsize:1)</label>
   			  <input type="number" style="width: 170px;" id="QtyIdModify" onkeydown="if(event.key==='.'){event.preventDefault();}" onchange="myqtyFunctionModify()" name="Qtyname" min="1" max="">
   			  </div>
   			  
   			  
   			  <div  class="form-group col-sm-3 fonts">
   			   <label  for="priceIdModify">PRICE (Ticksize:0.5):</label>
   			  <input type="number"  style="width: 170px;" disabled="disabled"  onchange="myPriceFunctionModify()" value="" id="priceIdModify" name="priceId" min="0" max="">
   			  
   			  </div>
   			  
   			  <div  class="form-group col-sm-3 fonts" id="TriggerPriceDivId">
   			   <label  for="TriggerpriceId">TRIGGER PRICE</label>
   			  <input type="number"  style="width: 170px;"   onchange="TriggerPriceFunctionModify()" disabled="disabled" id="TriggerpriceIdModify" name="TriggerpriceId" min="0" max="">
   			  </div>
<!--    			  onchange="TriggerPriceFunction()changeFunction()"  onkeydown="keydownFunction()" onkeyup="keyupFunction()" -->
   			  <div  class="form-group col-sm-3 fonts" id="CoStoplossDivId" style="display:none;">
   			   <label for="quantity" id="CoStoplosslabellineId">STOPLOSS</label>
   			  <input type="number" style="width: 170px;"   id="CoStoplossId" name="CoStoplossId" min="0" max="">
   			  </div> 
   			  
   			  <div  class="form-group col-sm-3 fonts">
   			   <label for="quantity" id="DiscquantityLabelId"  >DISC.QTY</label>
   			  <input type="number" style="width: 170px;"  disabled="disabled"  id="DiscquantityIdModify" onchange="mydiscqtyFunctionModify()" name="Discquantityname" min="0" max="">
   			  </div>
   			  
   			  <div  class="form-group col-sm-3 fonts" id="stoplessId" style="display:none;">
   			   <label for="quantity"  >STOPLOSS (ABSOLUTE)</label>
   			  <input type="number" style="width: 155px;padding-left:15px;"   id="stoplossAbsolutequanIdModify" name="stoplossAbsolutequanIdModify" min="0" max="">
   			  </div>
   			  <div  class="form-group col-sm-3 fonts" id="tarketDivId" style="display:none;">
   			   <label for="quantity" id="labellineId">TARGET (ABSOLUTE)</label>
   			  <input type="number" style="width: 170px;"   id="TargetAbsolutequanIdModify" name="TargetAbsolutequanIdModify" min="0" max="">
   			  </div> 			 
   			 
   			  
   			  <div  class="form-group col-sm-3 fonts_1" id="TrailingstopId" style="display:none;">
   			   <label for="quantity" id="labellineId">TRAILING STOPLOSS (ABSOLUTE)</label>
   			  <input type="number" style="width: 170px;"   id="TargetstoplossquanIdModify" name="TargetstoplossquanIdModify" min="0" max="">
   			  </div>
   			  
   			  </div>
   			  
   			  
   			  
   			  <div class="row">
             <div class="form-group col-md-6">
				<label class="radio-inline fonts" id="DaylabelIdModify" data-toggle="tooltip"  data-placement="top" title="Full Day Validity" style="padding-left:0px;">
      			<input type="radio" id="dayIdModify" name="dayIdModify"  style="padding-left:5px;"><span style="align=center">DAY</span>
      			</label>
      			<label class="radio-inline fonts" id="IoclabelIdModify" data-toggle="tooltip"  data-placement="top" title="Immediate or Cancel" style="padding-left:5px;">
      			<input type="radio" id="iocIdModify" name="iocIdModify"  style="padding-left:5px;"><span style="align=center">IOC</span>
      			</label>
     			<label class="radio-inline fonts" id="GTClabelIdModify" data-toggle="tooltip"  data-placement="top" title="GTC" style="padding-left:5px;">
      			<input type="radio" id="gtcIdModify" name="gtcIdModify"  style="padding-left:5px;"><span style="align=center">GTC</span>
      			</label>
      			<label class="radio-inline fonts" id="GTDlabelIdModify" data-toggle="tooltip"  data-placement="top" title="Good Till Date" style="padding-left:5px;">
      			<input type="radio" id="gtdIdModify" name="gtdIdModify"   style="padding-left:5px;"><span style="align=center">GTD</span>
      			</label>
      			<label class="radio-inline fonts" id="GTTlabelIdModify" data-toggle="tooltip"  data-placement="top" title=" Good Till Target"  style="padding-left:5px;">
      			<input type="radio" id="gttIdModify" name="gttIdModify"  style="padding-left:5px;"><span id="GTTspanId" style="align=center">GTT</span>
      			</label> 
      			
      			<label class="datepicker" id="datepickerIdModify" style="padding-left:5px;display:none;">
      			Validity: <input type="text"  class="datepicker" id="datepickerModify" >
      			</label>
      		
      			<label class="radio-inline col-sm-3 fonts "  id="GTTstoplossId" style="padding-left:5px;display:none;">
      			<input type="checkbox" id="GTTstoplosscheckIdModify" name="GTTstoplosscheckIdModify" >
      			Stoploss: <input type="number" style="width:140px;"  disabled="disabled" id="GTTstoplossValueIdModify" min="0" max="100"><span class="transparent">%</span>
      			</label>
      			<label class="radio-inline col-sm-3 fonts "  id="GttTargetId" style="padding-left:5px;display:none;">
      			<input type="checkbox" id="GttTargetcheckIdModify" name="GttTargetcheckId" >
      			Target: <input type="number" style="width:140px;" disabled="disabled" id="GttTargetvalueIdModify"><span class="transparent">%</span>
      			</label>
      			</div>
      			
            <div class=" form-check col-md-6">
            <br>
             <label class="radio-inline fonts"  style="padding-left:0px;">
                         <span id="TriggerPriceErrorId" style="color:red;text-align=center;display:none;">*Trigger price shouldn't be greater than price </span>
                         <input type="hidden" id="TriggerPricehiddenErrorIdModify" />
            </label>
            
            <label class="radio-inline fonts"  style="padding-left:0px;">
                         <span id="DiscQuanErrorId" style="color:red;text-align=center;display:none;">*Disclosed quantity cannot be grater than order Quantity </span>
                         <input type="hidden" id="DiscQuanhiddenErrorIdModify" />
            </label>
            
             <label class="radio-inline fonts"  style="padding-left:0px;">
                         <span id="DiscQuanNSEErrorId" style="color:red;text-align=center;display:none;">*Disclosed quantity cannot be less than 10% of your order. </span>
                         <input type="hidden" id="DiscQuanNSEhiddenErrorIdModify" />
            </label>
          <label class="radio-inline fonts"  style="padding-left:0px;">
                         <span id="DiscQuanMCXErrorId" style="color:red;text-align=center;display:none;">*Disclosed quantity cannot be less than 25% of your order. </span>
                         <input type="hidden" id="DiscQuanMCXhiddenErrorIdModify" />
            </label> 
            <br>
            <label class="radio-inline fonts"  data-toggle="tooltip"  data-placement="top" title="Regular" style="padding-left:0px;">
      			<input type="radio"id="RegularOrdIdModify" name="RegularOrdIdModify1" disabled="disabled"><span style="align=center">Regular</span>
      			</label>
      			<label class="radio-inline fonts" data-toggle="tooltip"  data-placement="top" title="Bracket Order"  id="BracketOrdlabelId" style="padding-left:5px;">
      			<input type="radio" id="BracketOrdIdModify" name="BracketOrdIdModify1" disabled="disabled" ><span id="BracketOrdspanId" style="align=center">BO</span>
      			</label>
      			<label class="radio-inline fonts" data-toggle="tooltip"  data-placement="top" title="Cover Order"  style="padding-left:5px;">
      			<input type="radio" id="CoverOrdIdModify" name="CoverOrdIdModify1" disabled="disabled"><span id="CoverOrdspanId" style="align=center">CO</span>
      			</label>
      			<label class="radio-inline fonts" data-toggle="tooltip"  data-placement="top" title="After Market Order"  style="padding-left:5px;">
      			<input type="radio" id="AfterMarketOrdIdModify" name="AfterMarketOrdIdModify1" disabled="disabled"><span  style="align=center">AMO</span>
      			</label>
     		
   			</div> 
   			
            <div class="form-group col-md-4 fonts" align="right"> 
                 <input type="hidden" id="UserID" value="${userId}" />
                <input type="hidden" id="scripthiddval" name="scripthiddval"  /> 
      		  <input type="hidden" id="tokenhiddval" name="tokenhiddval"  /> 
      		
<%--                  <% String userId=(String)request.getAttribute("userId"); --%>
<!-- //                  		System.out.println("userId "+userId);  -->
<%--                  %> --%>
                  
                  
   			
         	</div>  
            
         </div>
         
        </div>
        
        
         <div class="modal-footer"> 
      
		<button type="button" id="modifyId"  onclick="ModifyOrderfun();"   class="btn btn-default buysubmitgreen fonts" >MODIFY</button> 
         <button type="button"  class="btn btn-default cancelbtn fonts" data-dismiss="modal">CANCEL</button>
     		 </div>

        </div>
        
        
      </div> 
      
    </div>
    
    
    
    
    <!-- Modal -->
  <div   class="modal fade" id="myModalCancel" role="dialog"   data-keyboard="true" data-backdrop="non static">
    <div class="modal-dialog modal-lg " >
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title"></h4>
          <div style="float:left; margin-right:732px;">
			<label  id="cancelStocklabelId" >
      		</label></div>
          <!-- <div class="inner-circle" style="float:left; margin-right:668px;">MCX-ORDER</div> -->
        </div>
        <div class="modal-body" style="overflow:auto;">
            
          
   			 
   			  <div class="row">
          <label style="margin-left:300px">Are You Sure Cancel Order?</label>
   			 </div><br>
            <div class="fonts row" style="margin-left:280px" align="right">           
   			 <button type="button" id="cancelId"  onclick="CancelOrderfun()"  class="btn btn-default buysubmitgreen fonts" >Yes</button> 
         	 
               <input type="hidden" id="cancelhiddnstordId" name="cancelhiddnstordId" />
         <button type="button"  class="btn btn-default cancelbtn fonts" data-dismiss="modal">No</button>
        
         </div> 
        </div>
        
      </div> 
      
    </div></div>
    
    <div   class="modal fade" id="myModalOrderHistory" role="dialog"   data-keyboard="false" data-backdrop="static">
    <div class="modal-dialog modal-lg " >
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title"></h4>
         <div style="float:left; margin-right:732px;">
			<label  id="orderHistoryStocklabelId" >
      		</label></div>
          <!-- <div class="inner-circle" style="float:left; margin-right:732px;">MCX-ORDER</div> -->
        </div>
        <div class="modal-body" style="overflow:auto;">
            
<div class="row">
<div class="col-sm-6">
<label style="font-weight: bold;">Price</label> :<span style="margin-left:15px;" id="orderprice"></span></div>

<div class="col-sm-6">
<label  style="font-weight: bold;">Qty</label>: <span style="margin-left:15px;" id="orderQty"></span></div>

</div>

<div class="row">
<div class="col-sm-6">
<label  style="font-weight: bold;">Status</label> :<span style="margin-left:15px;" id="orderStatus"></span></div>

<div class="col-sm-6">
<label  style="font-weight: bold;">Order Type</label>: <span style="margin-left:15px;" id="orderOrdtype"></span></div>

</div>


<div class="row">
<div class="col-sm-6">
<label  style="font-weight: bold;">Nest Order Number</label> :<span style="margin-left:15px;" id="ordernestordernumber"></span></div>

<div class="col-sm-6">
<label  style="font-weight: bold;">Average Price</label>: <span style="margin-left:15px;" id="orderaverageprice"></span></div>

</div>

<div class="row">
<div class="col-sm-6">
<label  style="font-weight: bold;">Exchange Timestamp</label> :<span style="margin-left:15px;" id="orderexchangetimestamp"></span></div>

<div class="col-sm-6">
<label  style="font-weight: bold;">Script Name</label>: <span style="margin-left:15px;" id="orderscripname"></span></div>

</div>
        <button type="button" style="float:right"  class="btn btn-default" data-dismiss="modal">Close</button>  
        </div>
  
        
      </div> 
    </div></div>
    
    
    <div   class="modal fade" id="completeOrderHistory" role="dialog"   data-keyboard="false" data-backdrop="static">
    <div class="modal-dialog modal-lg " >
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title"></h4>
         <div class="inner-circle" style="float:left; margin-right:732px;">
			<label  id="completeHistoryStocklabelId" >
      		</label></div>
         <!--  <div class="inner-circle" style="float:left; margin-right:669px;">MCX-ORDER</div> -->
        </div>
        <div class="modal-body" style="overflow:auto;">
            
<div class="row">
<div class="col-sm-6">
<label style="font-weight: bold;">Price</label> :<span style="margin-left:15px;" id="completeorderprice"></span></div>

<div class="col-sm-6">
<label  style="font-weight: bold;">Qty</label>: <span style="margin-left:15px;" id="completeorderQty"></span></div>

</div>

<div class="row">
<div class="col-sm-6">
<label  style="font-weight: bold;">Status</label> :<span style="margin-left:15px;" id="completeorderStatus"></span></div>

<div class="col-sm-6">
<label  style="font-weight: bold;">Order Type</label>: <span style="margin-left:15px;" id="completeorderOrdtype"></span></div>

</div>


<div class="row">
<div class="col-sm-6">
<label  style="font-weight: bold;">Nest Order Number</label> :<span style="margin-left:15px;" id="completeordernestordernumber"></span></div>

<input type="hidden" id="viewhiddnstordId" name="viewhiddnstordId" />
<div class="col-sm-6">
<label  style="font-weight: bold;">Average Price</label>: <span style="margin-left:15px;" id="completeorderaverageprice"></span></div>

</div>

<div class="row">
<div class="col-sm-6">
<label  style="font-weight: bold;">Exchange Timestamp</label> :<span style="margin-left:15px;" id="completeorderexchangetimestamp"></span></div>

<div class="col-sm-6">
<label  style="font-weight: bold;">Script Name</label>: <span style="margin-left:15px;" id="completeorderscripname"></span></div>

</div>
<div class="row">
<div class="col-sm-12">
<label  style="font-weight: bold;">Reason</label> :<span style="margin-left:15px;" id="completeorderreason"></span></div>
</div>
<button style="float: right;" type="button" id="myModalOrderHistoryView" onclick="viewHistoryFun();" class="btn btn-default buysubmitgreen fonts" >ViewHistory</button>
        <button type="button" style="float:right"  class="btn btn-default" data-dismiss="modal">Close</button>  
        </div>
  
        
      </div> 
    </div></div>
    
    
    <div   class="modal fade" id="viewHistoryOrderModalId" role="dialog"   data-keyboard="false" data-backdrop="static">
    <div class="modal-dialog modal-lg " >
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title"></h4>
          <div style="float:left; margin-right:732px;">
			<label  id="viewHistoryStocklabelId" >
      		</label></div>
          <!-- <div class="inner-circle" style="float:left; margin-right:669px;">MCX-ORDER</div> -->
        </div>
        <div class="modal-body" style="overflow:auto;">
            
  <h3>Order History List</h3>
 									
	<table id="viewhistoryordertableId" class="table table-striped table-bordered display sortable"  style="width:100%">
        <thead>
            <tr>
                <th>Updated By</th>
                <th>Status</th>
                <th>Order Type</th>
                <th>Price</th>
                <th>Avg.Price</th>
                <th>Trig.Price</th>
                <th>Qty</th>
                <th>B.Qty</th>
                <th>Ent.Time</th>
            </tr>
        </thead>
        <tbody class="viewhistoryclass" id="viewhistoryorderbodyId">
        
        </tbody>
    </table>
			<div class="viewhistoryinnerbodyclass" id="viewhistoryinnerbodyId" style="display:none;">
       
       <label style="margin-left:450px;">No Data</label>
       </div>						

        <button type="button" style="float:right"  class="btn btn-default" data-dismiss="modal">Close</button>  
        </div>
  
        
      </div> 
    </div></div>
    
    
    <div   class="modal fade" id="myModalTradebookHistory" role="dialog"   data-keyboard="false" data-backdrop="static">
    <div class="modal-dialog modal-lg " >
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title"></h4>
          <div style="float:left; margin-right:732px;">
			<label   id="tradeHistoryStocklabelId" >
      		</label></div>
          <!-- <div class="inner-circle" style="float:left; margin-right:669px;">MCX-ORDER</div> -->
        </div>
        <div class="modal-body" style="overflow:auto;">
            
<div class="row">
<div class="col-sm-6">
<label style="font-weight: bold;">Order Id</label> :<span style="margin-left:15px;" id="orderId"></span></div>

</div>

<div class="row">
<div class="col-sm-6">
<label  style="font-weight: bold;">Trade Price</label> :<span style="margin-left:15px;" id="tradeprice"></span></div>

<div class="col-sm-6">
<label  style="font-weight: bold;">Product Id</label>: <span style="margin-left:15px;" id="tradeproductId"></span></div>

</div>


<div class="row">
<div class="col-sm-6">
<label  style="font-weight: bold;">Trade Id</label> :<span style="margin-left:15px;" id="tradeId"></span></div>

<div class="col-sm-6">
<label  style="font-weight: bold;">Exchange Order Id</label>: <span style="margin-left:15px;" id="tradeExchangeOrderId"></span></div>

</div>

<div class="row">
<div class="col-sm-6">
<label  style="font-weight: bold;">Order Update Time</label> :<span style="margin-left:15px;" id="tradeupdatetimeId"></span></div>

<div class="col-sm-6">
<label  style="font-weight: bold;">Exchange Time</label>: <span style="margin-left:15px;" id="tradeexchangetime"></span></div>

</div>
        <button type="button" style="float:right"  class="btn btn-default" data-dismiss="modal">Close</button>  
        </div>
  
        
      </div> 
    </div></div>
    
   
   
   <div class="modal fade" id="ajax_response" tabindex="-1" role="dialog"
	aria-labelledby="myModalLabel">
	<div class="modal-dialog ajax_response" role="document">
		<div class="modal-content">

			<div class="modal-body inner-circle">
				<h5 style="text-align: center">Order Cancelled Successfully.</h5>
                    <label style="margin-left:102px;" id="cancelordernumber"></label>

			</div>
			<div class="modal-footer" style="text-align: center;">
				<!-- <button type="button" class="btn btn-default" data-dismiss="modal">Close</button> -->
				<button type="button" class="btn btn-primary  mx-auto"
					id="sdata_pop" data-dismiss="modal">Ok</button>
			</div>
		</div>
	</div>
</div>

   <div class="modal fade" id="ajax_responsePosition" tabindex="-1" role="dialog"
	aria-labelledby="myModalLabel">
	<div class="modal-dialog ajax_response" role="document">
		<div class="modal-content">

			<div class="modal-body inner-circle">
				<!-- <h5 style="text-align: center">Position Conversion Successfully.</h5> -->
                    <label style="margin-left:102px;" id="positionordernumber"></label>

			</div>
			<div class="modal-footer" style="text-align: center;">
				<!-- <button type="button" class="btn btn-default" data-dismiss="modal">Close</button> -->
				<button type="button" class="btn btn-primary  mx-auto"
					id="sdata_pop" data-dismiss="modal">Ok</button>
			</div>
		</div>
	</div>
</div>
   
  
   
   
   
   <script type="text/javascript">
   
	// called when the client connects

					  
	/* function onConnect() {	  
		console.log("Connected");
	
		var subscribeToken;

	  for(var i =0; i<tokenArray.length; i++){

	  client.subscribe(tokenArray[i].toString(), {qos:1},{

	        onSuccess : function(){
	            console.log('Acknowldgement recieved by sender');
	        },
	        onFailure : function(){
	            console.log('Subscribe request has failed or timed out');
	        }
			
	    }); 
	  }

	}
	

	
	function clientConnect(){
		client.connect({ 
			  onSuccess: onConnect,
			 // useSSL:true,
			 // userName : 'admin',
			 // password : 'hivemq', 
			  cleanSession : true
			  });
	}
		

		// called when a message arrives
		function onMessageArrived(message) {
			
		  console.log("onMessageArrived:" + message.payloadString);
		  
		  //var x;
		  //var y;
		 // var obj = JSON.parse(message.payloadString.trim());
		 // x = obj.topic;
		 // var message = obj.message;

		 // alert("onMessageArrived(): Message:"+message);
		 // console.log("Topicss:     " + x);
		  
		  //console.log("Message:     " + message);
		  
		 // var message = JSON.parse(y);	  
		  
		  //var script = message.message;
		  
		  var scripsplit= message.payloadString.split("|");
		  
		  var token=scripsplit[0].toString();
		  var ltp=scripsplit[1];
		  
		
		  var priceTag;
	      var scriptTag = document.getElementById(token);
	      
	      if(scriptTag != null) {
	    	  
	      
	      var allToken;
	      
	      for(var i =0; i<tokenArray.length; i++){
	    	  allToken=tokenArray[i].toString();
	     
	    	  
	     if(token===allToken){
	    	 if(document.getElementById(token+"_priceid") != null)
	    	 document.getElementById(token+"_priceid").innerHTML = ltp+"";
	    	 
	    	 if(document.getElementById("buy_priceid") != null && document.getElementById("tokenhiddval").value == token)
	    	 document.getElementById("buy_priceid").innerHTML = ltp+"";
	    	 
	    	 if(document.getElementById("alert_price") != null  && document.getElementById("tokenhiddId").value == token)
	    	 document.getElementById("alert_price").innerHTML = ltp+"";
	    	 
	    	 if(document.getElementById("positin_price") != null  && document.getElementById("TokenTaghiddenId").value == token)
		    	 document.getElementById("positin_price").innerHTML = ltp+"";

	      }
	      	
	      } 
		  //console.log("Topic:     " + message.destinationName);
		  //console.log("QoS:       " + message.qos);
		  //console.log("Retained:  " + message.retained);
		  // Read Only, set if message might be a duplicate sent from broker
		  //console.log("Duplicate: " + message.duplicate);
		}
	      
		}
		
		function onConnectionLost(responseObject) {
			  if (responseObject.errorCode !== 0) {
				  clientConnect();
			    console.log("ConnectionLost:" + responseObject.errorMessage);
			  }
			}	
 */
   $(document).ready(function(){
	   
	  // getscriptrefresh();
	   
		  /* client = new Paho.MQTT.Client(mqttHost, 8000, "topazclient");
		  client.onConnectionLost = onConnectionLost;
		  
		  client.onMessageArrived = onMessageArrived;

		  clientConnect(); */
		  
		  $("#alertPriceId").keyup(function(){

			    var script = document.getElementById("scriptNamehiddId").value;
			    var alertcondition = document.getElementById("alertconditionId").value;
				var alertprice = document.getElementById("alertPriceId").value;
				document.getElementById("description").value=script+" "+alertcondition+" "+alertprice;
			  });
			  
			  
			$("#alertconditionId").on('change',function(){
			  
				var script = document.getElementById("scriptNamehiddId").value;
			    var alertcondition = document.getElementById("alertconditionId").value;
				var alertprice = document.getElementById("alertPriceId").value;
				
				document.getElementById("description").value=script+" "+alertcondition+" "+alertprice;
			});
			
			$("#modifyalertPriceId").keyup(function(){

			    var script = document.getElementById("modifyscriptNamehiddId").value;
			    var alertcondition = document.getElementById("modifyalertconditionId").value;
				var alertprice = document.getElementById("modifyalertPriceId").value;
				document.getElementById("modifydescription").value=script+" "+alertcondition+" "+alertprice;
			  });
			  
			  
			$("#modifyalertconditionId").on('change',function(){
			  
				var script = document.getElementById("modifyscriptNamehiddId").value;
			    var alertcondition = document.getElementById("modifyalertconditionId").value;
				var alertprice = document.getElementById("modifyalertPriceId").value;
				
				document.getElementById("modifydescription").value=script+" "+alertcondition+" "+alertprice;
			});
			
			$("#OnceId").on('click',function(){
				
				$("#recurringhideIdTime").hide();
				$("#recurringhideIdExpiry").hide();
				$("#recurringhideIdInterval").hide();
				
			});

			$("#RecurringId").on('click',function(){
				
				$("#recurringhideIdTime").show();
				$("#recurringhideIdExpiry").show();
				$("#recurringhideIdInterval").show();

			});

			$("#modifyOnceId").on('click',function(){
				
				$("#modifyrecurringIdTime").hide();
				$("#modifyrecurringIdExpiry").hide();
				$("#modifyrecurringIdInterval").hide();
				
			});

			$("#modifyRecurringId").on('click',function(){
				
				$("#modifyrecurringIdTime").show();
				$("#modifyrecurringIdExpiry").show();
				$("#modifyrecurringIdInterval").show();

			});
			
			//rajesh code
			
			  $("#wizard-picture").change(function(){
			        readURL(this);
			    });
			
			  $('[data-toggle="tooltip"]').tooltip();  
			  hideMarketDepth();
			
			
   });	
		

function deleteScript(){
			
	 var symbol=$("#settokenhiddenId").val();
 //alert("symbol:::"+symbol);
  var topic = symbol;
  //   var qos = 0;

     client.unsubscribe(topic);
     
     tokenArray.pop(symbol);
   
		  $.ajax({
				type :'POST',
				url :'deleteScript',
			    data :"Token=" +symbol,
				dataType: 'html',
				success:function(response){
					//alert("response::"+response);
					
					$('#myModalMoreOption').modal('hide');
					getscriptrefresh();

				},
				error:function(){
				alert("DeleteScript Error");
					
				
				}	
			});
		 
		 
	
		
	}
	

function mcxdeleteScript(symbol){
	
	 
	 //alert("symbol:::"+symbol);
	 // var topic = symbol;
	  //   var qos = 0;

	     //client.unsubscribe(topic);
	     
	     tokenArray.pop(symbol);
	   
			  $.ajax({
					type :'POST',
					url :'deleteScript',
				    data :"Token=" +symbol,
					dataType: 'html',
					success:function(response){
						//alert("response::"+response);
						//getscriptrefresh();
					    document.getElementById(symbol+'_mcxscriptplusid').style.display='block';
						document.getElementById(symbol+'_mcxscriptminusid').style.display='none';
						
						 $('#SearchdivbodyId').show();
						 $("#scriptlisthiddId").hide();
					},
					error:function(){
					alert("DeleteScript Error");
						
					
					}	
				});
			 
			 
		
			
		}
		
	function nsedeleteScript(symbol){
		
		 
		 //alert("symbol:::"+symbol);
		 // var topic = symbol;
		  //   var qos = 0;

		     //client.unsubscribe(topic);
		     
		     tokenArray.pop(symbol);
		   
				  $.ajax({
						type :'POST',
						url :'deleteScript',
					    data :"Token=" +symbol,
						dataType: 'html',
						success:function(response){
							//alert("response::"+response);
							//getscriptrefresh();
							document.getElementById(symbol+'_nsescriptplusid').style.display='block';
							document.getElementById(symbol+'_nsescriptminusid').style.display='none';
							
							 $('#SearchdivbodyId').show();
							 $("#scriptlisthiddId").hide();
						},
						error:function(){
						alert("DeleteScript Error");
							
						
						}	
					});
				 
				 
			
				
			}
			
	function nfodeleteScript(symbol){
		
		 
		// alert("symbol:::"+symbol);
		 // var topic = symbol;
		  //   var qos = 0;

		     //client.unsubscribe(topic);
		     
		     tokenArray.pop(symbol);
		   
				  $.ajax({
						type :'POST',
						url :'deleteScript',
					    data :"Token=" +symbol,
						dataType: 'html',
						success:function(response){
						//	alert("response::"+response);
							//getscriptrefresh();
						//	alert("symbol:::"+symbol+"_nfoscriptplusid");
							
							//$(symbol+'_nfoscriptplusid').show();
							
							//$(symbol+'_nfoscriptminusid').hide();
							
							
						//var plusval=document.getElementById(symbol+'_nfoscriptplusid');
						
						//alert("plusval::"+plusval);
						
						//plusval=style.display='block';
						
						//plusval=style.visibility='visible';
						
						document.getElementById(symbol+'_nfoscriptplusid').style.display='block';
		
							document.getElementById(symbol+'_nfoscriptminusid').style.display='none';
							
							 $('#SearchdivbodyId').show();
							 
							 
						},
						error:function(){
						alert("DeleteScript Error");
							
						
						}	
					});
				 
				 
			
				
			}
			

		

	function mcxcomdtydeleteScript(symbol){
		
		 
		 //alert("symbol:::"+symbol);
		 // var topic = symbol;
		  //   var qos = 0;

		     //client.unsubscribe(topic);
		     
		     tokenArray.pop(symbol);
		   
				  $.ajax({
						type :'POST',
						url :'deleteScript',
					    data :"Token=" +symbol,
						dataType: 'html',
						success:function(response){
							//alert("response::"+response);
							//getscriptrefresh();
						    document.getElementById(symbol+'_mcxcomdtyscriptplusid').style.display='block';
							document.getElementById(symbol+'_mcxcomdtyscriptplusid').style.display='none';
							
							$('#CommoditySearchdivbodyId').show();
							 $("#scriptlisthiddId").hide();
							 
						},
						error:function(){
						alert("DeleteScript Error");
							
						
						}	
					});
				 
				 
			
				
			}
			

			
		function nseeqtydeleteScript(symbol){
			
			 
			 //alert("symbol:::"+symbol);
			 // var topic = symbol;
			  //   var qos = 0;

			     //client.unsubscribe(topic);
			     
			     tokenArray.pop(symbol);
			   
					  $.ajax({
							type :'POST',
							url :'deleteScript',
						    data :"Token=" +symbol,
							dataType: 'html',
							success:function(response){
								//alert("response::"+response);
								//getscriptrefresh();
								document.getElementById(symbol+'_nseeqtyscriptplusid').style.display='block';
								document.getElementById(symbol+'_nseeqtyscriptminusid').style.display='none';
								
								$('#EqtySearchdivbodyId').show();
								 $("#scriptlisthiddId").hide();
								 
							},
							error:function(){
							alert("DeleteScript Error");
								
							
							}	
						});
					 
					 
				
					
				}
				
		function nfofodeleteScript(symbol){
			
			 
			 //alert("symbol:::"+symbol);
			 // var topic = symbol;
			  //   var qos = 0;

			     //client.unsubscribe(topic);
			     
			     tokenArray.pop(symbol);
			   
					  $.ajax({
							type :'POST',
							url :'deleteScript',
						    data :"Token=" +symbol,
							dataType: 'html',
							success:function(response){
								//alert("response::"+response);
								//getscriptrefresh();
								
								document.getElementById(symbol+'_nfof&oscriptplusid').style.display='block';
								document.getElementById(symbol+'_nfof&oscriptminusid').style.display='none';
								 $('#NfoSearchdivbodyId').show();
								 $("#scriptlisthiddId").hide();
							},
							error:function(){
							alert("DeleteScript Error");
								
							
							}	
						});
					 
					 
				
					
				}
	
	
   
   </script>

    
    <div   class="modal fade" id="myModalMessageNotification" role="dialog"  aria-labelledby="myModalLabel"  data-keyboard="false" data-backdrop="false">
    <div class="modal-dialog modal-lg " >
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title"></h4>

        </div>
        <div class="modal-body" style="overflow:auto;">
            
<div id="orderhideId" >
    <div class="tabmessage">
  <button class="tablinks" style="margin-left:15px;" id="adminfocusId" value="Admin">ADMIN</button>
  <button class="tablinks" style="margin-left:15px;" id="exchangefocusId" value="Exchange">EXCHANGE</button>
  <button class="tablinks" id="marketfocusId" value="Market">MARKET</button>
</div>
     <div id="AdminDivId" class="tabmessagecontent">
 									
	<table id="adminordertableId" class="table table-striped table-bordered display sortable"  style="width:100%;">

        <tbody id="adminbodyId">
        
        </tbody>
    </table>
			<div id="admininnerbodyId" style="display:none;">
       
       <label style="margin-left:418px;">No Data</label>
       </div>						
</div>

<div id="ExchangeDivId" class="tabmessagecontent"  style="display:none">
  <table id="exchangeId" class="table table-striped table-bordered display sortable" style="width:100%;">

        <tbody id="ExchangebodyId">
        
        </tbody>
    </table>
 
        <div id="ExchangeinnerbodyId" style="display:none;">
       
       <label style="margin-left:418px;">No Data</label>
       </div>
</div>

<div id="MarketDivId" class="tabmessagecontent"  style="display:none">
   <table id="marketId" class="table table-striped table-bordered display sortable" style="width:100%;">

        <tbody id="marketbodyId">
 
        </tbody>
        
    </table>
 
        <div id="marketinnerbodyId" style="display:none;">
       
       <label style="margin-left:418px;">No Data</label>
       </div>
</div>
        
        </div>
        <button type="button" style="float:right"  class="btn btn-default" data-dismiss="modal">Close</button>  
        </div>
  
        
      </div> 
    </div></div>
    
    
    <div   class="modal fade" id="authoriseModalId" role="dialog"   data-keyboard="false" data-backdrop="static">
    <div class="modal-dialog modal-lg " >
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title"></h4>
          <!-- <div style="float:left; margin-right:732px;">
			<label  id="viewHistoryStocklabelId" >
      		</label></div> -->
          <div class="inner-circle" style="float:left; margin-right:97%;"><label style="color:#ffff;">CDSL</label></div>
        </div>
        <div class="modal-body" style="overflow:auto;">

 			<div src="${pageContext.request.contextPath}/resourcefiles/image/cdsl.png" ></div>	
 			<div style="margin-right:30px;">e-DIS Transaction Verification<br>
             Convenient. Dependable. Secure</div>	
              <div style="clear:both;height:10px;"></div>				
			<div>Disclaimer: This is electronic trade slip, which allows us to debit your Demat Holding with stocks approved by you. Through this authorization, you will be able to sell the stocks for delivery. 
			The authorization is valid for one day only. At any point of time you can generate or reset your TPIN using the CDSL link https://edis.cdslindia.com/home/generatepin where it will ask for your BOID and PAN. 
			The user can always regenerate the TPIN using the above CDSL link. To change TPIN use the link https://edis.cdslindia.com/home/changepin</div>
			 <div style="clear:both;height:10px;"></div>
    <!--     <div>BOID <input   value="121323424354667" />&nbsp;<i style="width:10px;" class="fa fa-copy"></i></div> -->
    
    <div>
        BOID <input id="myInput1"  value="121323424354667" type="text"  />
           <div class="tooltip1">
            <i class="fa fa-copy" style="width:10px;" onclick="myFunction()" >
	      <span class="tooltiptext1" id="myTooltip1">Copy</span>
           </i>
          </div>
     </div>
    
        
        <div style="clear:both;height:10px;"></div>
        <div>
        <label>Select Instruments</label><label style="margin-left:32px;">QTY</label>
        
        <div  class="ex3" id="nonPOAbodyId"></div>
        
        </div>
      
       <button type='button' id='finalSelectId' style='float:right' onclick='finalSelectedCheckbox()' data-toggle='modal'  data-target='#confirmauthoriseModalId'  class='btn btn-primary' >AUTHORISE</button>
	    <button type='button' id='cancelSelectId' style='float:right'  class='btn btn-default' data-dismiss='modal'>CLOSE</button>
        </div>
  
           
					         
      </div> 
    </div></div>
         
<div   class="modal fade" id="confirmauthoriseModalId" role="dialog"   data-keyboard="false" data-backdrop="static">
    <div class="modal-dialog modal-lg " >
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title"></h4>
          <!-- <div style="float:left; margin-right:732px;">
			<label  id="viewHistoryStocklabelId" >
      		</label></div> -->
          <div class="inner-circle" style="float:left; margin-right:97%;"><label style="color:#ffff;">CDSL</label></div>
        </div>
        <div class="modal-body" style="overflow:auto;">

 			<div src="${pageContext.request.contextPath}/resourcefiles/image/cdsl.png" ></div>	
 			<div style="margin-right:30px;">e-DIS Transaction Verification<br>
             Convenient. Dependable. Secure</div>	
              <div style="clear:both;height:10px;"></div>				
			<div>Disclaimer: This is electronic trade slip, which allows us to debit your Demat Holding with stocks approved by you. Through this authorization, you will be able to sell the stocks for delivery. 
			The authorization is valid for one day only. At any point of time you can generate or reset your TPIN using the CDSL link https://edis.cdslindia.com/home/generatepin where it will ask for your BOID and PAN. 
			The user can always regenerate the TPIN using the above CDSL link. To change TPIN use the link https://edis.cdslindia.com/home/changepin</div>
			 <div style="clear:both;height:10px;"></div>
        <div>BOID <input   value="121323424354667" id="boidhiddenId" name="boidhiddenId"  /></div>
        
        <div style="clear:both;height:10px;"></div>
  
        <input  type="hidden" value="12132" id="settlehiddenId" name="settlehiddenId" />
        <button type="button" style="float:right" onclick="continuetocdsl()" class="btn btn-primary" >CONTINUE TO CDSL</button>  
        <button type="button" style="float:right"  class="btn btn-default" data-dismiss="modal">CLOSE</button>  
        </div>
  
        
      </div> 
    </div></div>

<script type="text/javascript">

function myFunction(){
	var copyText = document.getElementById("myInput1");
	copyText.select();
	copyText.setSelectionRange(0,99999);
	 navigator.clipboard.writeText(copyText.value);
	 
	 var tooltip = document.getElementById("myTooltip1");
	 tooltip.innerHTML = "Copied";
}

$( "#adminfocusId").click(function() {

	
	  $.ajax({
			type :'POST',
			url :'OrderBook',
			dataType: 'json',
			contentType:'application/json; charset=utf-8',
			success:function(response){
				
				var jsonObject =JSON.parse(response);
 
			        var PendingTag = document.getElementById("adminfocusId").value;
				
			       
			        if(PendingTag==="Admin"){
			        	
			        	  $("#AdminDivId").show();
					       $("#ExchangeDivId").hide();
					       $("#MarketDivId").hide(); 
					      

					       var body;

					    
     for (var i = 0; i < jsonObject.length; i++) {
     	
     	
     var status= jsonObject[i].Status;
     var stat= jsonObject[i].stat;
     
     if(stat==='Ok'){
     	

     	   
     }else{
          $('#admininnerbodyId').show();
         } 
     	   
     	   
     
		                    		                   

		$('#adminbodyId').html(body); 
		                    
     }
			       
	}
			},
			error:function(){
				//alert("Admin Error");
				$('#adminbodyId').html('No Record Found');
			
			}	
		});
		
	});
	
	
$( "#exchangefocusId").click(function() {

	
	  $.ajax({
			type :'POST',
			url :'ExchangeMessage',
			dataType: 'json',
			contentType:'application/json; charset=utf-8',
			success:function(response){
				
				
			//alert("response:::"+response);
				
				var jsonObject =JSON.parse(response);
 
			        var PendingTag = document.getElementById("exchangefocusId").value;
				
			       
			        if(PendingTag==="Exchange"){
			        	
			        	  $("#AdminDivId").hide();
					       $("#ExchangeDivId").show();
					       $("#MarketDivId").hide(); 
					      

					       var body;

					    
     for (var i = 0; i < jsonObject.length; i++) {
     	
     	
     var status= jsonObject[i].Status;
     var stat= jsonObject[i].stat;
     
     if(stat==='Ok'){

     	   
     }else{
          $('#exchangeinnerbodyId').show();
         } 
     	   
     	   
     
		                    		                   

		$('#exchangebodyId').html(body); 
		                    
     }
			       
	}
			},
			error:function(){
				//alert("Exchange Error");
				$('#exchangebodyId').html('No Record Found');
			
			}	
		});
		
	});
	
	
$( "#marketfocusId").click(function() {

	
	  $.ajax({
			type :'POST',
			url :'MarketStatus',
			dataType: 'json',
			contentType:'application/json; charset=utf-8',
			success:function(response){
				
			        var PendingTag = document.getElementById("marketfocusId").value;
				
			       
			        if(PendingTag==="Market"){
			        	
			        	  $("#AdminDivId").hide();
					       $("#ExchangeDivId").hide();
					       $("#MarketDivId").show(); 
					      

					       var body;
					       
					       
					       var valueInput = JSON.parse(response);
					       

					        var data = valueInput.Marketstaus;
					        var stat= valueInput.stat;
					       
			      if(stat==='Ok'){

					       for (var i = 0; i < data.length; i++){
					    	   
					    	   
					       var exchange=data[i].Exchange
					       
					       
					       if(exchange==="mcx_fo"){
					    	   
					    	   body=body+"<tr>";
					           body=body+"<td><label>MCX :</label>" + data[i].MktStatus + "</td>";
					           
					           body=body+"</tr>";	
					           
					           
					           
					       }else if(exchange==="nse_cm"){
					    	   
					    	   body=body+"<tr>";
					           body=body+"<td><label>NSE :</label>" + data[i].MktStatus + "</td>";
					           
					           body=body+"</tr>";	
					           
					           
					           
					       }else if(exchange==="nse_fo"){
					    	   
					    	   body=body+"<tr>";
					           body=body+"<td><label>NFO :</label>" + data[i].MktStatus + "</td>";
					           
					           body=body+"</tr>";	
					           
					           
					           
					       }
					      
					       
					           
					       } 
					       
     	   
                     }else{
                         $('#marketinnerbodyId').show();
                       }   
     	   

		                $('#marketbodyId').html(body); 
		                    
			       
	     }
			},
			error:function(){
				//alert("Market Error");
				$('#marketbodyId').html('No Record Found');
			
			}	
		});
		
	});


</script>

<script type="text/javascript">

var stompClient = null;
var ws = null;

  function connect() {
	
	console.log("test:::");
//	alert("sssss")
  //  var socket = new SockJS('http://localhost:9092/market-watch/clientchat');
  
 var socket=new WebSocket('ws://localhost:9092/market-watch/clientchat');
  
 
     stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame) {
        setConnected(true);
        console.log('Connected: ' + frame);

        stompClient.subscribe('/topic/greetings', function (message) {
            console.log("message"+message);
             console.log("message"+(JSON.parse(message.body)));

             showMessageOutput(JSON.parse(message.body));
        });
    }); 
} 



function disconnect() {

    if(stompClient != null) {
        stompClient.disconnect();
    }

    setConnected(false);
    console.log("Disconnected");
} 

 function showMessageOutput(messageOutput) {


console.log("messageOutput::::"+messageOutput);

}  




</script>

<script type="text/javascript">

$(function(){
	var today = new Date();
	var Endday="30-01-2021";
	$('#modifyexpiryDate').datepicker({ 
		dateFormat: 'dd-mm-yy',
	    minDate: today,
	//	maxDate:Endday,
	    showOtherMonths: true,
	    selectOtherMonths: true,
	    changeMonth: true,
	    changeYear: true
 	  //  showButtonPanel: true
	});

});

</script>


<div   class="modal fade" id="myModalAlertSet" role="dialog"   data-keyboard="false" data-backdrop="false">
    <div class="modal-dialog modal-lg " >
      <!-- Modal content-->
      <div class="modal-content">
        <!-- <div class="modal-header"> -->
          <div class="modal-header" id="modelheaderId" style="display:block;">
          <h4 class="modal-title"></h4>
        
         <!--  <div class="inner-circle" style="float:left; margin-right:669px;"><label id="scriptnamelabelId"></label></div> -->
           <div style="color:white" ><label id="scriptnamelabelId"></label></div>
           <label  id="alert_price"></label>
        </div>
        <div class="modal-body" style="overflow:auto;">
            

              <input type="hidden" id="scriptNamehiddId" name="scriptNamehiddId"  /> 
      		      <input type="hidden" id="pricehiddId" name="pricehiddId"  /> 
      		      <input type="hidden" id="exchangehiddId" name="exchangehiddId"  /> 
      		      <input type="hidden" id="tokenhiddId" name="tokenhiddId"  /> 
      		      


<div  class="row">
   			  
				<div class="form-group col-sm-3 fonts">
   			  <label  for="QtyId">ALERT CONDITION</label>
   			  <select style="width: 170px;" id="alertconditionId"  onchange="alertFunction()" name="alertconditionId" >
   			  <option value="Lesser than">Lesser than</option>
              <option value="Greater than">Greater than</option>
              <option value="Lesser than or Equal to">Lesser than or Equal to</option>
              <option value="Greater than or Equal to">Greater than or Equal to</option>
   			  </select>
   			  </div>
   			  
   			  
   			  <div  class="form-group col-sm-3 fonts">
   			   <label  for="alertPriceId">PRICE (%)</label>
   			  <input type="number"  style="width: 170px;"   value="" id="alertPriceId" name="alertPriceId">
   			  </div>
   			    </div>
   	<div  class="row">
   	<div  class="form-group col-sm-3 fonts">		
<div>
<label >FREQUENCY</label>
</div>
<label class="radio-inline fonts"  data-toggle="tooltip"  data-placement="top"  style="padding-left:0px;">
      			<input type="radio"id="OnceId" name="FrequencyId" value="Once" checked ><span style="align=center">Once</span>
      			</label>
      			<label class="radio-inline fonts" data-toggle="tooltip"  data-placement="top"   id="ReccuringlabelId" style="padding-left:5px;">
      			<input type="radio" id="RecurringId" name="FrequencyId" value="Recurring" ><span id="BracketOrdspanId" style="align=center">Recurring</span>
      			</label></div>
      			
      			<div  id="recurringhideIdInterval" style="display:none;" class="form-group col-sm-3 fonts">
   			   <label  for="notificationid">NOTIFICATION INTERVAL(min)</label>
   			  <input type="number"  style="width: 170px;"   value="1" id="notificationid" name="notificationid">
   			  
   			  </div>
   			  
   			  <div id="recurringhideIdExpiry" style="display:none;" class="form-group col-sm-3 fonts">
   			   <label  for="expiryDate">EXPIRY DATE</label>
   			  <input type="text"  style="width: 170px;"   value="" class="datepicker"  id="expiryDate" name="expiryDate" onkeypress="return Validate(event);">
   			  
   			  </div>
   			  
   			  <div id="recurringhideIdTime" style="display:none;" class="form-group col-sm-2 fonts">
   			   <label  for="timeId">TIME</label>
   			  <input type="text"  style="width: 170px;"   value="" id="timeId" name="timeId" onkeypress="return Validate(event);">
   			  
   			  </div>

</div>

<div  class="row">
   	<div  class="form-group col-sm-7 fonts">
   	<textarea id="description" name="description" rows="3" cols="50"> </textarea>
   	</div>
<div  class="form-group col-sm-5 fonts">
 <button type="button" onclick="createAlert()" class="btn btn-default" >CREATE</button> 
        <button type="button"   class="btn btn-default" data-dismiss="modal">CANCEL</button> 
        </div> 
        </div>
  
        
       
    </div></div></div></div>
    
    
    
    <div   class="modal fade" id="myModalAlertModify" role="dialog"   data-keyboard="false" data-backdrop="false">
    
    <div class="modal-dialog modal-lg " >
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title"></h4>
        
          <div class="inner-circle" style="float:left; margin-right:669px;"><label id="modifyscriptnamelabelId"></label></div>
        </div>
        <div class="modal-body" style="overflow:auto;">
            

              <input type="hidden" id="modifyscriptNamehiddId" name="modifyscriptNamehiddId"  /> 
      		      <input type="hidden" id="modifypricehiddId" name="modifypricehiddId"  /> 
      		      <input type="hidden" id="alertModifyhiddId" name="alertModifyhiddId"  />
      		      
      		      <input type="hidden" id="modifyexchangehiddId" name="modifyexchangehiddId"  /> 
      		      <input type="hidden" id="modifytokenhiddId" name="modifytokenhiddId"  />


<div  class="row">
   			  
				<div class="form-group col-sm-3 fonts">
   			  <label  for="QtyId">ALERT CONDITION</label>
   			  <select style="width: 170px;" id="modifyalertconditionId"  onchange="alertFunction()" name="modifyalertconditionId" >
   			  <option value="Lesser than">Lesser than</option>
              <option value="Greater than">Greater than</option>
              <option value="Lesser than or Equal to">Lesser than or Equal to</option>
              <option value="Greater than or Equal to">Greater than or Equal to</option>
   			  </select>
   			  </div>
   			  
   			  
   			  <div  class="form-group col-sm-3 fonts">
   			   <label  for="alertPriceId">PRICE (%)</label>
   			  <input type="number"  style="width: 170px;"   value="" id="modifyalertPriceId" name="modifyalertPriceId">
   			  </div>
   			    </div>
   	<div  class="row">
   	<div  class="form-group col-sm-3 fonts">		
<div>
<label >FREQUENCY</label>
</div>
<label class="radio-inline fonts"  data-toggle="tooltip"  data-placement="top"  style="padding-left:0px;">
      			<input type="radio"id="modifyOnceId" name="modifyFrequencyId" value="Once" checked ><span style="align=center">Once</span>
      			</label>
      			<label class="radio-inline fonts" data-toggle="tooltip"  data-placement="top"   id="ReccuringlabelId" style="padding-left:5px;">
      			<input type="radio" id="modifyRecurringId" name="modifyFrequencyId" value="Recurring" ><span id="BracketOrdspanId" style="align=center">Recurring</span>
      			</label></div>
      			
      			<div id="modifyrecurringIdInterval" style="display:none;" class="form-group col-sm-3 fonts">
   			   <label  for="notificationid">NOTIFICATION INTERVAL(min)</label>
   			  <input type="number"  style="width: 170px;"   value="1" id="modifynotificationid" name="modifynotificationid">
   			  
   			  </div>
   			  
   			  <div id="modifyrecurringIdExpiry" style="display:none;" class="form-group col-sm-3 fonts">
   			   <label  for="expiryDate">EXPIRY DATE</label>
   			  <input type="text"  style="width: 170px;"   value="" class="datepicker"  id="modifyexpiryDate" name="modifyexpiryDate">
   			  
   			  </div>
   			  
   			  <div id="modifyrecurringIdTime" style="display:none;" class="form-group col-sm-2 fonts">
   			   <label  for="timeId">TIME</label>
   			  <input type="text"  style="width: 170px;"   value="" id="modifytimeId" name="modifytimeId">
   			  
   			  </div>
</div>

<div  class="row">
   	<div  class="form-group col-sm-7 fonts">
   	<textarea id="modifydescription" name="modifydescription" rows="3" cols="50"> </textarea>
   	</div>
<div  class="form-group col-sm-5 fonts">
 <button type="button" onclick="updateAlert()" class="btn btn-default" >UPDATE</button> 
        <button type="button"   class="btn btn-default" data-dismiss="modal">CANCEL</button> 
        </div> 
        </div>
  
        
       
    </div></div></div></div>


	<div class="modal fade" id="modalMarketDepth" role="dialog"
		data-keyboard="false" data-backdrop="false">

		<div class="modal-dialog modal-lg ">
			<!-- Modal content-->
			<div class="modal-content">
				<div class="modal-header">
					<h4 class="modal-title">Market Depth</h4>

				</div>
				<div class="modal-body">

<div style="max-height:350px; overflow-y:scroll; ">

<div id="divMarketDepthTopScript"  class="row"  onmouseover="displayMarketDepth();">
								<div class="col-md-6">
									<table class="table" style="width: 50%; color: green;">
										<thead>
											<tr>
												<th>Bprice</th>
												<th>ORDERS</th>
												<th>QTY</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td><span id="bid1"></span></td>
												<td><span id="border1"></span></td>
												<td><span id="bQty1"></span></td>
											</tr>
											<tr>
												<td><span id="bid2"></span></td>
												<td><span id="border2"></span></td>
												<td><span id="bQty2"></span></td>
											</tr>
											<tr>
												<td><span id="bid3"></span></td>
												<td><span id="border3"></span></td>
												<td><span id="bQty3"></span></td>
											</tr>
											<tr>
												<td><span id="bid4"></span></td>
												<td><span id="border4"></span></td>
												<td><span id="bQty4"></span></td>
											</tr>
											<tr>
												<td><span id="bid5"></span></td>
												<td><span id="border5"></span></td>
												<td><span id="bQty5"></span></td>
											</tr>

										</tbody>
									</table>

								</div>

								<div class="col-md-6">
									<table class="table" style="width: 50%;color: red;">
										<thead>
											<tr>
												<th>Sprice</th>
												<th>ORDERS</th>
												<th>QTY</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td><span id="sid1"></span></td>
												<td><span id="sorder1"></span></td>
												<td><span id="sQty1"></span></td>
											</tr>
											<tr>
												<td><span id="sid2"></span></td>
												<td><span id="sorder2"></span></td>
												<td><span id="sQty2"></span></td>
											</tr>
											<tr>
												<td><span id="sid3"></span></td>
												<td><span id="sorder3"></span></td>
												<td><span id="sQty3"></span></td>
											</tr>
											<tr>
												<td><span id="sid4"></span></td>
												<td><span id="sorder4"></span></td>
												<td><span id="sQty4"></span></td>
											</tr>
											<tr>
												<td><span id="sid5"></span></td>
												<td><span id="sorder5"></span></td>
												<td><span id="sQty5"></span></td>
											</tr>

										</tbody>
									</table>

								</div>



							</div>
						


					<div id="marketDepthViewMore" class="row">
							<div class="col-md-6" style="text-align: center;"><a href="#">View 20
								Depths</a></div>
						</div>
						
						
						<div id="marketDepthBottom" class="row">
							<div class="col-md-6">
								<table class="table" style="width: 100%;">

									<tbody>
										<tr>
											<td>Open</td>
											<td><span id="mdOpen"></span></td>
										</tr>
										<tr>
											<td>Low</td>
											<td><span id="mdLow"></span></td>
										</tr>
										<tr>
											<td>Volume</td>
											<td><span id="mdVolume"></span></td>
										</tr>
										<tr>
											<td>LTQ</td>
											<td><span id="mdLTQ"></span></td>
										</tr>
										<tr>
											<td>Lower Circuit</td>
											<td><span id="mdLowerCircuit"></span></td>
										</tr>
										<tr>
											<td>Total Buy</td>
											<td><span id="mdTotalBuy"></span></td>
										</tr>
									</tbody>
								</table>
							</div>
							<div class="col-md-6">
								<table class="table" style="width: 100%;">

									<tbody>
										<tr>
											<td>High</td>
											<td><span id="mdHigh"></span></td>
										</tr>
										<tr>
											<td>Prev.Close</td>
											<td><span id="mdPrevCLose"></span></td>
										</tr>
										<tr>
											<td>Avg.Price</td>
											<td><span id="mdAvgPrice"></span></td>
										</tr>
										<tr>
											<td>LTT</td>
											<td><span id="mdLTT"></span></td>
										</tr>
										<tr>
											<td>Upper Circuit</td>
											<td><span id="mdUpperCircuit"></span></td>
										</tr>

										<tr>
											<td>Total Sell</td>
											<td><span id="mdTotalSell"></span></td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>


						<div id="marketDepthExp" class="row">
							<div class="col-md-6" style="text-align: center;">
								Expiry :<span id="mdExpiry"></span>
							</div>
						</div>
						
						</div>
					</div>	
					<div class="form-group col-sm-5 fonts">
						<button type="button" class="btn btn-default" data-dismiss="modal">CANCEL</button>
					</div>



				</div>
			</div>
		</div>


<script type="text/javascript">

			    document.getElementById("myButton").onclick = function() {
			    location.href = "dashboard";
			       };
			
			
		</script>
		
		<script type="text/javascript">
		
		//============ Buy/Sell Order Window START==========
		

		
		

		//=====buy/Sell Price TickSize =============				   
		var value;
		var mcxTicksize;
		var nseTicksize;
		$('#priceIdModify').on('change',function(){	
			  
			var priceVal=$('#priceIdModify').val();
			var segmentTag=$('#stockhiddval').val();
			
			//===== MCX Segment ======
			if(segmentTag=="MCX"){				    	
			value = document.getElementById("priceIdModify").step =priceVal;				    
		  	mcxTicksize=$("#mcxticksizehiddval").val();
		  	/*  if(mcxTicksize=="0.05"){
				 mcxTicksize=mcxTicksize*10;
			 	} */
		 	document.getElementById("priceIdModify").step =mcxTicksize;
		 	
		  if($(this).val() > value){
			  var upTagvalue=parseInt(value)+parseInt(mcxTicksize);
			  document.getElementById("priceIdModify").value =upTagvalue;	
			  
		  }else if($(this).val() < value){
			  var downTagvalue=parseInt(value)-parseInt(mcxTicksize);
			  document.getElementById("priceIdModify").value =downTagvalue;
		  }
		  
			}				    	
			//===== NSE Segment ======
			else if(segmentTag=="NSE"){	
			    	value = document.getElementById("priceIdModify").step =priceVal;				    
			      	 nseTicksize=$("#nseticksizehiddval").val();
			      	 
			      	/*  if(nseTicksize=="0.05"){
			      		nseTicksize=nseTicksize*10;
			    	 } */
			     document.getElementById("priceIdModify").step =nseTicksize;	
			     
			     if($(this).val() > value){
			    	  var upTagvalue=parseInt(value)+parseInt(nseTicksize);
			    	  document.getElementById("priceIdModify").value =upTagvalue;	
			    	  
			      }else if($(this).val() < value){
			    	  var downTagvalue=parseInt(value)-parseInt(nseTicksize);
			    	  document.getElementById("priceIdModify").value =downTagvalue;
			      }
			     }				    	
		  value = $(this).val();
		});			    
		//==============================





		$('#lmtIdModify').click(function() { 
			
			
			if($("input:radio[name='lmtIdModify']").is(":checked")) {
			$('#mktIdModify').prop('checked', false);
			$('#slIdModify').prop('checked', false);
			$('#sl-mIdModify').prop('checked', false);
			
			
			$('#stoplessIdModify').hide();
		 	$('#tarketDivIdModify').hide();
		 	$('#TrailingstopIdModify').hide();
		 	
		 	//LMT
		      $("#TriggerpriceIdModify").prop("disabled",true);
		      $("#TriggerpriceIdModify").val("0");
		      $("#priceIdModify").prop("disabled",false);
		      $("#DiscquantityIdModify").prop("disabled",true);
		}	
	
});



		$('#mktIdModify').click(function() { 

		if($("input:radio[name='mktIdModify']").is(":checked")) {
		  
			$('#lmtIdModify').prop('checked', false);
			$('#slIdModify').prop('checked', false);
			$('#sl-mIdModify').prop('checked', false);
			 $("#DiscquantityIdModify").prop("disabled",false);
			 
			$('#stoplessIdModify').hide();
		 	$('#tarketDivIdModify').hide();
		 	$('#TrailingstopIdModify').hide();

		 	  $("#TriggerpriceIdModify").prop("disabled",true);
		      $("#TriggerpriceIdModify").val("0");
		      $("#priceIdModify").prop("disabled",false);
		      $("#DiscquantityIdModify").prop("disabled",true);
		}	
		});
		
		
		
		$('#slIdModify').click(function() { 
		if($("input:radio[name='slIdModify']").is(":checked")) {
		   
			$('#lmtIdModify').prop('checked', false);
			$('#mktIdModify').prop('checked', false);
			$('#sl-mIdModify').prop('checked', false);
			
			$('#stoplessIdModify').hide();
		 	$('#tarketDivIdModify').hide();
		 	$('#TrailingstopIdModify').hide();
			
		 	
		 	  $("#TriggerpriceIdModify").prop("disabled",true);
		      $("#TriggerpriceIdModify").val("0");
		      $("#priceIdModify").prop("disabled",false);
		      $("#DiscquantityIdModify").prop("disabled",true);
		}
		
		});
		
		$('#sl-mIdModify').click(function() { 

		if($("input:radio[name='sl-mIdModify']").is(":checked")) {
		   
			$('#lmtIdModify').prop('checked', false);
			$('#mktIdModify').prop('checked', false);
			$('#slIdModify').prop('checked', false);
			
			
			$('#stoplessIdModify').hide();
		 	$('#tarketDivIdModify').hide();
		 	$('#TrailingstopIdModify').hide();
			
		 	
		 	  $("#TriggerpriceIdModify").prop("disabled",true);
		      $("#TriggerpriceIdModify").val("0");
		      $("#priceIdModify").prop("disabled",false);
		      $("#DiscquantityIdModify").prop("disabled",true);
		}		
		

		});			


		$('#dayIdModify').click(function() {
			 
			 if($("input:radio[name='dayIdModify']").is(":checked")) {	
				
				$('#iocIdModify').prop('checked', false);
				$('#gtcIdModify').prop('checked', false);
				$('#gtdIdModify').prop('checked', false);
				$('#gttIdModify').prop('checked', false);
				
				$("#datepickerIdModify").hide();
				$("#GTTstoplossIdModify").hide();
				$("#GttTargetIdModify").hide();
				$('#stoplessIdModify').hide();		
			 	$('#tarketDivIdModify').hide();
			 	$('#TrailingstopIdModify').hide();
			 	
			 
			 }
			
		});


		$('#iocIdModify').click(function() {
			 
			 if($("input:radio[name='iocIdModify']").is(":checked")) {	
					
				$('#dayIdModify').prop('checked', false);
				$('#gtcIdModify').prop('checked', false);
				$('#gtdIdModify').prop('checked', false);
				$('#gttIdModify').prop('checked', false);
				
				$("#datepickerIdModify").hide();
				$("#GTTstoplossIdModify").hide();
				$("#GttTargetIdModify").hide();
				$('#stoplessIdModify').hide();
			 	$('#tarketDivIdModify').hide();
			 	$('#TrailingstopIdModify').hide();
			 }
			
		});



		$('#gtcIdModify').click(function() {
			 
			 if($("input:radio[name='gtcIdModify']").is(":checked")) {	
					
				$('#dayIdModify').prop('checked', false);
				$('#iocIdModify').prop('checked', false);
				$('#gtdIdModify').prop('checked', false);
				$('#gttIdModify').prop('checked', false);
				
				$("#datepickerIdModify").hide();
				$("#GTTstoplossIdModify").hide();
				$("#GttTargetIdModify").hide();
				$('#stoplessIdModify').hide();
			 	$('#tarketDivIdModify').hide();
			 	$('#TrailingstopIdModify').hide();
			 }
			
		});




		$('#gtdIdModify').click(function() {
			 
			 if($("input:radio[name='gtdIdModify']").is(":checked")) {	
					
				$('#iocIdModify').prop('checked', false);
				$('#dayIdModify').prop('checked', false);
				$('#gtcIdModify').prop('checked', false);
				$('#gttIdModify').prop('checked', false);
				
				
				$("#datepickerIdModify").show();	 //Good till date datpicker enable here...,
						
				$("#GTTstoplossIdModify").hide();
				$("#GttTargetIdModify").hide();
				$('#stoplessIdModify').hide();
			 	$('#tarketDivIdModify').hide();
			 	$('#TrailingstopIdModify').hide();
			 }

		});




		$('#gttIdModify').click(function() {
			 
			 if($("input:radio[name='gttIdModify']").is(":checked")) {	
				
				$('#iocIdModify').prop('checked', false);
				$('#dayIdModify').prop('checked', false);
				$('#gtdIdModify').prop('checked', false);
				$('#gtcIdModify').prop('checked', false);
				
				$("#GTTstoplossIdModify").show();
				$("#GttTargetIdModify").show();
				$("#GTTstoplossValueIdModify").prop("disabled",true);
				$("#GTTstoplossValueIdModify").prop("disabled",true);
				 $("#GTTstoplossValueIdModify").val("0");
				 $("#GttTargetvalueIdModify").val("0");
				
				$("#datepickerIdModify").hide();		
				$('#stoplessIdModify').hide();
			 	$('#tarketDivIdModify').hide();
			 	$('#TrailingstopIdModify').hide();
			 }
		});


			$('#GTTstoplosscheckIdModify').click(function() {
			 if (document.getElementById('GTTstoplosscheckIdModify').checked) {
				$("#GTTstoplossValueIdModify").prop("disabled",false);
				
				}
			 else{
				 $("#GTTstoplossValueIdModify").prop("disabled",true);
				 $("#GTTstoplossValueIdModify").val("0");
			 }
			});
			
			
			
			
			$('#GttTargetcheckIdModify').click(function() {
				 if (document.getElementById('GttTargetcheckIdModify').checked) {
					$("#GttTargetvalueIdModify").prop("disabled",false);
					
					}
				 else{
					 $("#GttTargetvalueIdModify").prop("disabled",true);
					 $("#GttTargetvalueIdModify").val("0");
				 }
				});
			
			
			//============ Buy/Sell Order Window END==========	
			
		
		</script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/sockjs-client/1.5.0/sockjs.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/sockjs-client/1.5.0/sockjs.js"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/stomp.js/2.3.3/stomp.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/stomp.js/2.3.3/stomp.js"></script>
   
       
  
     <!-- Buy/Sell Repeat Order Modal -->
       
  <div   class="modal fade background-clickable" id="myModalRepeat" role="dialog" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"  data-keyboard="false" data-backdrop="false">
<!--    <div   class="modal fade" id="myModal" role="dialog"> -->
    
    <div class="modal-dialog modal-lg " > 
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header" id="modelheaderId">
          <h4 class="modal-title"></h4>
          	<div class="form-group col-sm-3">
      		 <label class="stockhead fonts"  id="stocklabelIdRepeat" ></label>
			<label class="stockhead fonts"  id="stockhiddvalRepeat" name="stockhiddvalRepeat" ></label>


			<input type="hidden" id="stockhiddvalRepeat" style= "color: white;" name="stockhiddvalRepeat"  /> 
			<label class="fonts"  id="mcxexpirylabelIdRepeat"  style= "color: white;text;margin-left: 300px; "></label> 
			<label class="fonts"  id="nseexpirydatelabelIdRepeat" style= "color: white;text;margin-left: 10px;" ></label> 
			<label class="fonts"  id="nfoexpirydatelabelIdRepeat" style= "color: white;text;margin-left: 100px; " ></label> 
			
      	
      		     <input type="hidden" id="mcxticksizehiddvalRepeat" style= "color: white;text" name="mcxticksizehiddvalRepeat"  /> 
      		     <input type="hidden" id="mcxexpirydatehiddvalRepeat" style= "color: white;text" name="mcxexpirydatehiddvalRepeat"  /> 
      		     <input type="hidden" id="nseticksizehiddvalRepeat" style= "color: white;text" name="nseticksizehiddvalRepeat"  /> 
      		     <input type="hidden" id="nseexpirydatehiddvalRepeat" style= "color: white;text" name="nseexpirydatehiddvalRepeat"  /> 
      		     <input type="hidden" id="nfoexpirydatehiddvalRepeat" style= "color: white;text" name="nfoexpirydatehiddvalRepeat"  /> 
      		
      		</div>	     
           <div  class="toggle-btn" id="toggle-btnIdRepeat" data-toggle="tooltip" title="Switch Buy/Sell" onclick="this.classList.toggle('active'); buysellShow();">
          <div class="inner-circle"></div>
          </div> 
          
        </div>
        <div class="modal-body" style="overflow:auto;">
            
           <div  class="row ">
				<div class="form-group col-sm-5">
				<label class="radio-inline fonts "     data-toggle="tooltip"  data-placement="bottom" title="Cash and Carry" style="padding-left:0px;">
      			<input type="radio" id="cncIdRepeat" name="cncIdRepeat" disabled="disabled"  style="padding-left:15px;text-align:center;"><span id="cncspanIdRepeat"  class="tooltiptext" style="text-align:center;" >CNC</span>
      			</label>  
     		 
     		 
     		 
     		 <label class="radio-inline fonts"   data-toggle="tooltip"  data-placement="bottom" title="Normal" style="padding-left:5px;">
      			<input type="radio" id="NrmlIdRepeat" name="NrmlIdRepeat" disabled="disabled" style="padding-left:10px;text-align:center;"><span id="NrmlspanIdRepeat" disabled="disabled" style="align=center">NRML</span>
      			</label>
      			<label class="radio-inline fonts"  data-toggle="tooltip"  data-placement="bottom" title="Intraday Square off" style="padding-left:5px;">
      			<input type="radio" id="MisIdRepeat" name="MisIdRepeat"  style="padding-left:10px;text-align:center;"><span  style="align=center">MIS</span>
      			</label>
    
     		</div>
     		 <div class="form-group col-sm-7" align="right"> 
     		 <label class="radio-inline fonts" data-toggle="tooltip"  data-placement="bottom" title="Limit"  style="padding-left:5px;">
      			<input type="radio" id="lmtIdRepeat" style="text-align:center;" name="lmtIdRepeat"  onclick="LmtcheckRepeat()" class="Lmtcheckclass"><span >LMT</span>
      			</label>
      			<label class="radio-inline fonts" data-toggle="tooltip"  data-placement="bottom" title="Market"  style="padding-left:5px;">
      			<input type="radio" id="mktIdRepeat" style="text-align:center;" name="mktIdRepeat"  class="Mktcheckclass" ><span style="align=center">MKT</span>
      			</label>
      			<label class="radio-inline fonts"  data-toggle="tooltip"  data-placement="bottom" title="Stop Loss" style="padding-left:5px;">
      			<input type="radio" id="slIdRepeat" name="slIdRepeat" style="text-align:center;" class="Slcheckclass"><span style="align=center">SL</span>
      			</label>
      			
      			<label class="radio-inline fonts" data-toggle="tooltip"  data-placement="bottom" title="Stop Loss Market"  style="padding-left:5px;">
      			<input type="radio" id="sl-mIdRepeat" name="sl-mIdRepeat" style="text-align:center;" class="Sl-Mcheckclass"><span class="tooltiptext" style="align=center">SL-M</span>
      			</label>
      			
     		 
   			</div>
   			</div>
   			 
   			  <div  class="row">
   			  
				<div class="form-group col-sm-3 fonts">
   			  <label  for="QtyIdRepeat">QTY (Lotsize:1)</label>
   			  <input type="number" style="width: 170px;" id="QtyIdRepeat" onkeydown="if(event.key==='.'){event.preventDefault();}" onchange="myqtyFunctionRepeat()" name="Qtyname" min="1" max="">
   			  </div>
   			  
   			  
   			  <div  class="form-group col-sm-3 fonts">
   			   <label  for="priceIdRepeat">PRICE (Ticksize:0.5):</label>
   			  <input type="number"  style="width: 170px;" disabled="disabled" step="0.5" onkeyup="myPriceonkeyupFunctionRepeat()" onchange="myPriceFunctionRepeat()" value="" id="priceIdRepeat" name="priceIdRepeat" min="0" max="">
   			  
   			  </div>
   			  
   			  <div  class="form-group col-sm-3 fonts" id="TriggerPriceDivIdRepeat" style="display:none;">
   			   <label  for="TriggerpriceIdRepeat">TRIGGER PRICE</label>
   			  <input type="number"  style="width: 170px;"  onkeyup="TriggerPricekeyupFunctionRepeat()"   onchange="TriggerPriceFunctionRepeat()" disabled="disabled" id="TriggerpriceIdRepeat" name="TriggerpriceIdRepeat" min="0" max="">
   			  </div>
<!--    			  onchange="TriggerPriceFunction()changeFunction()"  onkeydown="keydownFunction()" onkeyup="keyupFunction()" -->
   			  <div  class="form-group col-sm-3 fonts" id="CoStoplossDivIdRepeat" style="display:none;">
   			   <label for="quantity" id="CoStoplosslabellineIdRepeat">STOPLOSS</label>
   			  <input type="number" style="width: 170px;"   id="CoStoplossIdRepeat" name="CoStoplossIdRepeat" min="0" max="">
   			  </div> 
   			  
   			  <div  class="form-group col-sm-3 fonts">
   			   <label for="quantity" id="DiscquantityLabelIdRepeat"  >DISC.QTY</label>
   			  <input type="number" style="width: 170px;"  disabled="disabled"  id="DiscquantityIdRepeat" onchange="mydiscqtyFunctionRepeat()" name="Discquantityname" min="0" max="">
   			  </div>
   			  
   			  <div  class="form-group col-sm-3 fonts" id="stoplessIdRepeat" style="display:none;">
   			   <label for="quantity"  >STOPLOSS (ABSOLUTE)</label>
   			  <input type="number" style="width: 155px;padding-left:15px;"   id="stoplossAbsolutequanIdRepeat" name="stoplossAbsolutequanIdRepeat" min="0" max="">
   			  </div>
   			  <div  class="form-group col-sm-3 fonts" id="tarketDivIdRepeat" style="display:none;">
   			   <label for="quantity" id="labellineIdRepeat">TARGET (ABSOLUTE)</label>
   			  <input type="number" style="width: 170px;"   id="TargetAbsolutequanIdRepeat" name="TargetAbsolutequanIdRepeat" min="0" max="">
   			  </div> 			 
   			 
   			  
   			  <div  class="form-group col-sm-3 fonts_1" id="TrailingstopIdRepeat" style="display:none;">
   			   <label for="quantity" id="labellineIdRepeat">TRAILING STOPLOSS (ABSOLUTE)</label>
   			  <input type="number" style="width: 170px;"   id="TargetstoplossquanIdRepeat" name="TargetstoplossquanIdRepeat" min="0" max="">
   			  </div>
   			  
   			  </div>
   			    	
   			  
   			  <div class="row">
             
            <div class=" form-check col-md-6">
            <br>
             <label class="radio-inline fonts"  style="padding-left:0px;">
                         <span id="TriggerPriceErrorIdRepeat" style="color:red;text-align=center;display:none;">*Trigger price shouldn't be greater than price </span>
                         <input type="hidden" id="TriggerPricehiddenErrorIdRepeat" />
            </label>
            
            <label class="radio-inline fonts"  style="padding-left:0px;">
                         <span id="DiscQuanErrorIdRepeat" style="color:red;text-align=center;display:none;">*Disclosed quantity cannot be grater than order Quantity </span>
                         <input type="hidden" id="DiscQuanhiddenErrorIdRepeat" />
            </label>
            
             <label class="radio-inline fonts"  style="padding-left:0px;">
                         <span id="DiscQuanNSEErrorIdRepeat" style="color:red;text-align=center;display:none;">*Disclosed quantity cannot be less than 10% of your order. </span>
                         <input type="hidden" id="DiscQuanNSEhiddenErrorIdRepeat" />
            </label>
          <label class="radio-inline fonts"  style="padding-left:0px;">
                         <span id="DiscQuanMCXErrorIdRepeat" style="color:red;text-align=center;display:none;">*Disclosed quantity cannot be less than 25% of your order. </span>
                         <input type="hidden" id="DiscQuanMCXhiddenErrorIdRepeat" />
            </label> 
            <br>
            <label class="radio-inline fonts"  data-toggle="tooltip"  data-placement="top" title="Regular" style="padding-left:0px;">
      			<input type="radio"id="RegularOrdIdRepeat" name="RegularOrdIdRepeat" ><span style="align=center">Regular</span>
      			</label>
      			<label class="radio-inline fonts" data-toggle="tooltip"  data-placement="top" title="Bracket Order"  id="BracketOrdlabelIdRepeat" style="padding-left:5px;">
      			<input type="radio" id="BracketOrdIdRepeat" name="BracketOrdIdRepeat"  ><span id="BracketOrdspanIdRepeat" style="align=center">BO</span>
      			</label>
      			<label class="radio-inline fonts" data-toggle="tooltip"  data-placement="top" title="Cover Order"  style="padding-left:5px;">
      			<input type="radio" id="CoverOrdIdRepeat" name="CoverOrdIdRepeat"><span id="CoverOrdspanIdRepeat" style="align=center">CO</span>
      			</label>
      			<label class="radio-inline fonts" data-toggle="tooltip"  data-placement="top" title="After Market Order"  style="padding-left:5px;">
      			<input type="radio" id="AfterMarketOrdIdRepeat" name="AfterMarketOrdIdRepeat"><span  style="align=center">AMO</span>
      			</label>
     		
   			</div> 
   			
            <div class="form-group col-md-4 fonts" align="right"> 
                 <input type="hidden" id="UserID" value="${userId}" />
                <input type="hidden" id="scripthiddvalRepeat" name="scripthiddvalRepeat"  /> 
      		  <input type="hidden" id="tokenhiddvalRepeat" name="tokenhiddvalRepeat"  /> 
      		

                  
   			 <button type="button" id="buyIdRepeat"  onclick="PlaceOrderbuyfunRepeat()"  class="btn btn-default buysubmitgreen fonts" >BUY</button>
         	<button type="button" id="sellIdRepeat"  onclick="PlaceOrdersellfunRepeat()" class="btn btn-default sellsumbmitred fonts" >SELL</button> 
         	</div>  
              
         <button type="button"  class="btn btn-default cancelbtn fonts"  data-dismiss="modal">CANCEL</button>
         </div>
         
        </div>
        
        
         <div class="modal-footer"> 
      
				<div class="form-group col-md-12" align="left" style="padding-left:0px;">
				<label class="radio-inline fonts" id="DaylabelIdRepeat" data-toggle="tooltip"  data-placement="top" title="Full Day Validity" style="padding-left:0px;">
      			<input type="radio" id="dayIdRepeat" name="dayIdRepeat"  style="padding-left:5px;"><span style="align=center">DAY</span>
      			</label>
      			<label class="radio-inline fonts" id="IoclabelIdRepeat" data-toggle="tooltip"  data-placement="top" title="Immediate or Cancel" style="padding-left:5px;">
      			<input type="radio" id="iocIdRepeat" name="iocIdRepeat"  style="padding-left:5px;"><span style="align=center">IOC</span>
      			</label>
     			<label class="radio-inline fonts" id="GTClabelIdRepeat" data-toggle="tooltip"  data-placement="top" title="GTC" style="padding-left:5px;">
      			<input type="radio" id="gtcIdRepeat" name="gtcIdRepeat"  style="padding-left:5px;"><span style="align=center">GTC</span>
      			</label>
      			<label class="radio-inline fonts" id="GTDlabelIdRepeat" data-toggle="tooltip"  data-placement="top" title="Good Till Date" style="padding-left:5px;">
      			<input type="radio" id="gtdIdRepeat" name="gtdIdRepeat"   style="padding-left:5px;"><span style="align=center">GTD</span>
      			</label>
      			<label class="radio-inline fonts" id="GTTlabelIdRepeat" data-toggle="tooltip"  data-placement="top" title=" Good Till Target"  style="padding-left:5px;">
      			<input type="radio" id="gttIdRepeat" name="gttIdRepeat"  style="padding-left:5px;"><span id="GTTspanIdRepeat" style="align=center">GTT</span>
      			</label>
      			
      			<label class="datepicker" id="datepickerIdRepeat" style="padding-left:5px;display:none;">
      			Validity: <input type="text"  class="datepicker" id="datepickerRepeat" >
      			</label>
      		
      			<label class="radio-inline col-sm-3 fonts "  id="GTTstoplossIdRepeat" style="padding-left:5px;display:none;">
      			<input type="checkbox" id="GTTstoplosscheckIdRepeat" name="GTTstoplosscheckIdRepeat" >
      			Stoploss: <input type="number" style="width:140px;"  disabled="disabled" id="GTTstoplossValueIdRepeat"><span class="transparent">%</span>
      			</label>
      			<label class="radio-inline col-sm-3 fonts "  id="GttTargetIdRepeat" style="padding-left:5px;display:none;">
      			<input type="checkbox" id="GttTargetcheckIdRepeat" name="GttTargetcheckIdRepeat" >
      			Target: <input type="number" style="width:140px;" disabled="disabled" id="GttTargetvalueIdRepeat"><span class="transparent">%</span>
      			</label>
      			</div>
     		 </div>

        </div>
        
        
      </div> 
      
    </div> 

  


<!-- Buy/Sell Repeat Order End -->






<script type="text/javascript">



//============ Buy/Sell Order Window START==========


//modal draggable
$('.modal').modal({ keyboard: false,
 show: false
});

//Jquery draggable
$('.modal-dialog').draggable({
handle: ".modal-header"
});

//disable draggable (Profile-Segments,ConfirmUpdate)
$(".disable-drag").draggable({ disabled: true });


function changeModalContentRepeat(event) {
	 event.stopPropagation();
// event.preventDefault();
}


function Validate(event) {
			    	   
			           var regex = new RegExp("^[0-9-:]");
			           var key = String.fromCharCode(event.charCode ? event.which : event.charCode);
			           if (!regex.test(key)) {
			               event.preventDefault();
			               return false;
			           }
			       } 


$( "#toggle-btnIdRepeat" ).click(function() {	
	  var act = $('.toggle-btn').hasClass("active");
	  var buyId = document.getElementById("buyIdRepeat");
	  var sellId = document.getElementById("sellIdRepeat");	  
	  if(act){		  
		  buyId.style.display = "none";
		  sellId.style.display = "block";
		  $('.inner-circle').css('marginLeft','30px');
	  }
	  else {
		  buyId.style.display = "block";
		  sellId.style.display = "none";
		  $('.inner-circle').css('marginLeft','0px');
	  }	  
	});
	
	 function onclickstocksellbtnToggleRepeat(){		
		 var act = $('.toggle-btn').hasClass("active");			
			if(act==true){
				act= true;
				$('.inner-circle').css('marginLeft','30px');
			}else if(act==false){	
				act= true;
				$('.inner-circle').css('marginLeft','30px');				
			}			 
		} 
	 function onclickstockbuybtnToggleRepeat(){		
		 var act = $('.toggle-btn').hasClass("active");			
		if(act==true){	
			act= false;
				$('.inner-circle').css('marginLeft','0px');				
			} 
		else if(act==false){	
			act= false;
			$('.inner-circle').css('marginLeft','0px');				
		} 
		 
		} 
		

//=====buy/Sell Price TickSize =============				   
var value;
var mcxTicksize;
var nseTicksize;
$('#priceIdRepeat').on('change',function(){	
	  
	var priceVal=$('#priceIdRepeat').val();
	var segmentTag=$('#stockhiddvalRepeat').val();
	
	//===== MCX Segment ======
	if(segmentTag=="MCX"){				    	
	value = document.getElementById("priceIdRepeat").step =priceVal;				    
	mcxTicksize=$("#mcxticksizehiddvalRepeat").val();
	/*  if(mcxTicksize=="0.05"){
		 mcxTicksize=mcxTicksize*10;
	 	} */
	document.getElementById("priceIdRepeat").step =mcxTicksize;
	
if($(this).val() > value){
	  var upTagvalue=parseInt(value)+parseInt(mcxTicksize);
	  document.getElementById("priceIdRepeat").value =upTagvalue;	
	  
}else if($(this).val() < value){
	  var downTagvalue=parseInt(value)-parseInt(mcxTicksize);
	  document.getElementById("priceIdRepeat").value =downTagvalue;
}

	}				    	
	//===== NSE Segment ======
	else if(segmentTag=="NSE"){	
	    	value = document.getElementById("priceIdRepeat").step =priceVal;				    
	      	 nseTicksize=$("#nseticksizehiddvalRepeat").val();
	      	 
	      	/*  if(nseTicksize=="0.05"){
	      		nseTicksize=nseTicksize*10;
	    	 } */
	     document.getElementById("priceIdRepeat").step =nseTicksize;	
	     
	     if($(this).val() > value){
	    	  var upTagvalue=parseInt(value)+parseInt(nseTicksize);
	    	  document.getElementById("priceIdRepeat").value =upTagvalue;	
	    	  
	      }else if($(this).val() < value){
	    	  var downTagvalue=parseInt(value)-parseInt(nseTicksize);
	    	  document.getElementById("priceIdRepeat").value =downTagvalue;
	      }
	     }				    	
value = $(this).val();
});			    
//==============================




$('#cncIdRepeat').click(function() { 
	 if($("input:radio[name='cncIdRepeat']").is(":checked")) {
			$('#NrmlIdRepeat').prop('checked', false);
			$('#MisIdRepeat').prop('checked', false);			
			$('#stoplessIdRepeat').hide();
		 	$('#tarketDivIdRepeat').hide();
		 	$('#TrailingstopIdRepeat').hide();
	 }
});

$('#NrmlIdRepeat').click(function() { 

	 if($("input:radio[name='NrmlIdRepeat']").is(":checked")) {
			$('#cncIdRepeat').prop('checked', false);
			$('#MisIdRepeat').prop('checked', false);
		
			$('#stoplessIdRepeat').hide();
		 	$('#tarketDivIdRepeat').hide();
		 	$('#TrailingstopIdRepeat').hide();
	 }
	 
});
$('#MisIdRepeat').click(function() { 
	
	 if($("input:radio[name='MisIdRepeat']").is(":checked")) {
			$('#cncIdRepeat').prop('checked', false);
			$('#NrmlIdRepeat').prop('checked', false);
			
			$('#stoplessIdRepeat').hide();
		 	$('#tarketDivIdRepeat').hide();
		 	$('#TrailingstopIdRepeat').hide();
			
			
	 }		
	 
	
});



$('#lmtIdRepeat').click(function() { 
	
	
	if($("input:radio[name='lmtIdRepeat']").is(":checked")) {
	$('#mktIdRepeat').prop('checked', false);
	$('#slIdRepeat').prop('checked', false);
	$('#sl-mIdRepeat').prop('checked', false);
	
	
	$('#stoplessIdRepeat').hide();
	$('#tarketDivIdRepeat').hide();
	$('#TrailingstopIdRepeat').hide();

}	

		
if($("input:radio[name='RegularOrdIdRepeat']").is(":checked")) {
	$('#stoplessIdRepeat').hide();
	$('#tarketDivIdRepeat').hide();
	$('#TrailingstopIdRepeat').hide();
	$("#DiscquantityIdRepeat").prop("disabled",false);
	 
		//LMT
   $("#TriggerpriceIdRepeat").prop("disabled",true);
   $("#TriggerpriceIdRepeat").val("0");
   $("#priceIdRepeat").prop("disabled",false);


}

if($("input:radio[name='BracketOrdIdRepeat']").is(":checked")) {

		
	$('#stoplessIdRepeat').show();
	$('#tarketDivIdRepeat').show();
	$('#TrailingstopIdRepeat').show();
	$("#DiscquantityIdRepeat").prop("disabled",true);
	$("#DiscquantityIdRepeat").val("0");
	//LMT
  $("#TriggerpriceIdRepeat").prop("disabled",true);
  $("#TriggerpriceIdRepeat").val("0");
  $("#priceIdRepeat").prop("disabled",false);
  
	
}

if($("input:radio[name='CoverOrdIdRepeat']").is(":checked")) {	

$("#DiscquantityIdRepeat").prop("disabled",true);
$("#DiscquantityIdRepeat").val("0");
$("#priceIdRepeat").prop("disabled",false);
$("#priceIdRepeat").val("0");

}

if($("input:radio[name='AfterMarketOrdIdRepeat']").is(":checked")) {	

$('#stoplessIdRepeat').hide();
	$('#tarketDivIdRepeat').hide();
	$('#TrailingstopIdRepeat').hide();
	 $("#DiscquantityIdRepeat").prop("disabled",false);
	 
	//LMT
$("#TriggerpriceIdRepeat").prop("disabled",true);
$("#TriggerpriceIdRepeat").val("0");
$("#priceIdRepeat").prop("disabled",false);

}

});



$('#mktIdRepeat').click(function() { 

if($("input:radio[name='mktIdRepeat']").is(":checked")) {

	$('#lmtIdRepeat').prop('checked', false);
	$('#slIdRepeat').prop('checked', false);
	$('#sl-mIdRepeat').prop('checked', false);
	 $("#DiscquantityIdRepeat").prop("disabled",false);
	 
	$('#stoplessIdRepeat').hide();
	$('#tarketDivIdRepeat').hide();
	$('#TrailingstopIdRepeat').hide();

}	

if($("input:radio[name='RegularOrdIdRepeat']").is(":checked")) {
//MKT
$("#TriggerpriceIdRepeat").prop("disabled",true);
$("#TriggerpriceIdRepeat").val("0");
$("#priceIdRepeat").prop("disabled",true);
$("#priceIdRepeat").val("0");	  

$('#stoplessIdRepeat').hide();
	$('#tarketDivIdRepeat').hide();
	$('#TrailingstopIdRepeat').hide();
}
if($("input:radio[name='CoverOrdIdRepeat']").is(":checked")) {	

$("#DiscquantityIdRepeat").prop("disabled",true);
$("#DiscquantityIdRepeat").val("0");
$("#priceIdRepeat").prop("disabled",true);
$("#priceIdRepeat").val("0");
}

if($("input:radio[name='AfterMarketOrdIdRepeat']").is(":checked")) {
//MKT
$("#TriggerpriceIdRepeat").prop("disabled",true);
$("#TriggerpriceIdRepeat").val("0");
$("#priceIdRepeat").prop("disabled",true);
$("#priceIdRepeat").val("0");	  

$('#stoplessIdRepeat').hide();
	$('#tarketDivIdRepeat').hide();
	$('#TrailingstopIdRepeat').hide();
	
}

});
$('#slIdRepeat').click(function() { 
if($("input:radio[name='slIdRepeat']").is(":checked")) {

	$('#lmtIdRepeat').prop('checked', false);
	$('#mktIdRepeat').prop('checked', false);
	$('#sl-mIdRepeat').prop('checked', false);
	
	$('#stoplessIdRepeat').hide();
	$('#tarketDivIdRepeat').hide();
	$('#TrailingstopIdRepeat').hide();

	if($("input:radio[name='RegularOrdIdRepeat']").is(":checked")) {
		//SL
		  $("#TriggerpriceIdRepeat").prop("disabled",false);
	      $("#priceIdRepeat").prop("disabled",false);
//		      $("#priceId").val("0");
	      $("#DiscquantityIdRepeat").prop("disabled",false);
	      		      
		$('#stoplessIdRepeat').hide();
	 	$('#tarketDivIdRepeat').hide();
	 	$('#TrailingstopIdRepeat').hide();
		
	}
	if($("input:radio[name='BracketOrdIdRepeat']").is(":checked")) {    //Bracket Order
		 
			 	$('#stoplessIdRepeat').show();
			 	$('#tarketDivIdRepeat').show();
			 	$('#TrailingstopIdRepeat').show();
			 	$('#TargetstoplossquanIdRepeat').val('0');
			 	$("#DiscquantityIdRepeat").prop("disabled",true);
			 	$("#DiscquantityIdRepeat").val("0");
			 //SL
			     $("#TriggerpriceIdRepeat").prop("disabled",false);
			     $("#TriggerpriceIdRepeat").val("0");
			     $("#priceIdRepeat").prop("disabled",false);
			     
		 }
	if($("input:radio[name='AfterMarketOrdIdRepeat']").is(":checked")) {
		
		//SL
		  $("#TriggerpriceIdRepeat").prop("disabled",false);
	      $("#priceIdRepeat").prop("disabled",false);
//		      $("#priceId").val("0");
	      $("#DiscquantityIdRepeat").prop("disabled",false);
	      
		$('#stoplessIdRepeat').hide();
	 	$('#tarketDivIdRepeat').hide();
	 	$('#TrailingstopIdRepeat').hide();
	}

}		

});
$('#sl-mIdRepeat').click(function() { 

if($("input:radio[name='sl-mIdRepeat']").is(":checked")) {

	$('#lmtIdRepeat').prop('checked', false);
	$('#mktIdRepeat').prop('checked', false);
	$('#slIdRepeat').prop('checked', false);
	
	
	$('#stoplessIdRepeat').hide();
	$('#tarketDivIdRepeat').hide();
	$('#TrailingstopIdRepeat').hide();

}		
if($("input:radio[name='RegularOrdIdRepeat']").is(":checked")) {
	//SL-M
	  $("#TriggerpriceIdRepeat").prop("disabled",false);
	  $("#TriggerpriceIdRepeat").val("0");
$("#priceIdRepeat").prop("disabled",true);
$("#priceIdRepeat").val("0");
$("#DiscquantityIdRepeat").prop("disabled",false);
	 $('#stoplessIdRepeat').hide();
	$('#tarketDivIdRepeat').hide();
	$('#TrailingstopIdRepeat').hide();
}

if($("input:radio[name='AfterMarketOrdIdRepeat']").is(":checked")) {
		 
//SL-M
	  $("#TriggerpriceIdRepeat").prop("disabled",false);
	  $("#TriggerpriceIdRepeat").val("0");
$("#priceIdRepeat").prop("disabled",true);
$("#DiscquantityIdRepeat").prop("disabled",false);
	 $('#stoplessIdRepeat').hide();
	$('#tarketDivIdRepeat').hide();
	$('#TrailingstopIdRepeat').hide();
}

});



$('#RegularOrdIdRepeat').click(function() {
	
	 if($("input:radio[name='RegularOrdIdRepeat']").is(":checked")) {	
		 radiolmtId = document.getElementById("lmtIdRepeat");
		 radiolmtId.checked = true;
			$("#mktIdRepeat").prop("checked",false);
			$("#slIdRepeat").prop("checked",false);
			$('#sl-mIdRepeat').prop('checked', false); 
	}
	 if($("input:radio[name='RegularOrdIdRepeat']").is(":checked")) {		
		
		$('#BracketOrdIdRepeat').prop('checked', false);
		$('#CoverOrdIdRepeat').prop('checked', false);
		$('#AfterMarketOrdIdRepeat').prop('checked', false);
		
		$("#cncIdRepeat").prop("disabled",false);			
		$('#NrmlIdRepeat').prop('disabled',false);
		$("#MisIdRepeat").prop("disabled",false);
		
		

		
		$("#CoStoplossDivIdRepeat").hide();
		$("#TriggerPriceDivIdRepeat").show();
		
		$('#DaylabelIdRepeat').show();
		$('#IoclabelIdRepeat').show();
		$('#IoclabelIdRepeat').show();
		$('#GTClabelIdRepeat').show();
		$('#GTDlabelIdRepeat').show();
		$('#GTTlabelIdRepeat').show();
		
		$('#stoplessIdRepeat').hide();
	 	$('#tarketDivIdRepeat').hide();
	 	$('#TrailingstopIdRepeat').hide();
	 	
	 }
	 var scriptName=$("#stockhiddvalRepeat").val();
	 if(scriptName==='MCX'){ //MCX
		 	$('#GTTlabelIdRepeat').hide();
		 	$("#cncIdRepeat").prop('disabled',true);
		 	$('#cncIdRepeat').prop('checked', false);
		 	$('#NrmlIdRepeat').prop('checked', true);
		 	$('#mktIdRepeat').prop('checked', false);
		 	$('#slIdRepeat').prop('checked', false);
		 	$('#sl-mIdRepeat').prop('checked', false);
		 	$('#MisIdRepeat').prop('checked', false);
		 	
		 	
	 }
	 if(scriptName==='NSE'){ //NSE
		 
		 $('#GTTlabelIdRepeat').show();
			$('#NrmlIdRepeat').prop('disabled', true);
			$('#NrmlIdRepeat').prop('checked', false);
			$('#cncIdRepeat').prop('checked', true);
			$('#MisIdRepeat').prop('checked', false);
			
			$('#iocIdRepeat').prop('checked', false);   	
			$('#gtcIdRepeat').prop('checked', false);
			$('#gtdlIdRepeat').prop('checked', false);
			$('#gttIdRepeat').prop('checked', false);
			$('#dayIdRepeat').prop("checked",true);
			
	 }
	 if(scriptName==='NFO'){ //F&O
		 	$('#GTTlabelIdRepeat').hide();
		 	$("#cncIdRepeat").prop('disabled',true);
		 	$('#cncIdRepeat').prop('checked', false);
		 	$('#NrmlIdRepeat').prop('checked', true);
		 	$('#mktIdRepeat').prop('checked', false);
		 	$('#slIdRepeat').prop('checked', false);
		 	$('#sl-mIdRepeat').prop('checked', false);
		 	$('#MisIdRepeat').prop('checked', false);
		 	
		 	
	 }
	 
	 if($("input:radio[name='lmtIdRepeat']").is(":checked")) {
		 $("#DiscquantityIdRepeat").prop("disabled",false);
		 $("#DiscquantityIdRepeat").val("0");
			//LMT
	      $("#TriggerpriceIdRepeat").prop("disabled",true);
	      $("#TriggerpriceIdRepeat").val("0");
	      $("#priceIdRepeat").prop("disabled",false); 
	      
	      $("#mktIdRepeat").prop("disabled",false);
	      $("#slIdRepeat").prop("disabled",false);
	      $("#sl-mIdRepeat").prop("disabled",false);
		 
	 }
	 if($("input:radio[name='mktIdRepeat']").is(":checked")) {
		 //MKT
		 $("#TriggerpriceIdRepeat").prop("disabled",true);
	     $("#TriggerpriceIdRepeat").val("0");
	     $("#priceIdRepeat").prop("disabled",true);
	     $("#priceIdRepeat").val("0");	
	     
	     $("#lmtIdRepeat").prop("disable",false);
	      $("#slIdRepeat").prop("disabled",false);
	      $("#sl-mIdRepeat").prop("disabled",false);
	     
	    	$('#stoplessIdRepeat').hide();
		 	$('#tarketDivIdRepeat').hide();
		 	$('#TrailingstopIdRepeat').hide();
		 }
	 
	 if($("input:radio[name='slIdRepeat']").is(":checked")) {
		 $("#DiscquantityIdRepeat").prop("disabled",false);
		 $("#DiscquantityIdRepeat").val("0");
		   //SL
			  $("#TriggerpriceIdRepeat").prop("disabled",false);
		      $("#priceIdRepeat").prop("disabled",false);
		      $("#priceIdRepeat").val("0");
		      
		      $("#lmtIdRepeat").prop("disabled",false);
		      $("#mktIdRepeat").prop("disabled",false);
		      $("#sl-mIdRepeat").prop("disabled",false);
		      
		      
		      }
	 
	 if($("input:radio[name='sl-mIdRepeat']").is(":checked")) {
	 		//SL-M
		  	  $("#TriggerpriceIdRepeat").prop("disabled",false);
		  	  $("#TriggerpriceIdRepeat").val("0");
		      $("#priceIdRepeat").prop("disabled",true);
		      $("#priceIdRepeat").val("0");
		      $("#DiscquantityIdRepeat").prop("disabled",false);
		     	 $('#stoplessIdRepeat').hide();
			 	$('#tarketDivIdRepeat').hide();
			 	$('#TrailingstopIdRepeat').hide();
			 	
			 	 $("#lmtIdRepeat").prop("disabled",false);
			      $("#mktIdRepeat").prop("disabled",false);
			      $("#slIdRepeat").prop("disabled",false);
			      
		 }
	 
	 if($("input:radio[name='dayIdRepeat']").is(":checked")) {	
			
			$('#iocIdRepeat').prop('checked', false);
			$('#gtcIdRepeat').prop('checked', false);
			$('#gtdIdRepeat').prop('checked', false);
			$('#gttIdRepeat').prop('checked', false);
	 }
	 if($("input:radio[name='iocIdRepeat']").is(":checked")) {	
			
			$('#dayIdRepeat').prop('checked', false);
			$('#gtcIdRepeat').prop('checked', false);
			$('#gtdIdRepeat').prop('checked', false);
			$('#gttIdRepeat').prop('checked', false);
	 }
	 if($("input:radio[name='gtcIdRepeat']").is(":checked")) {	
			
			$('#dayIdRepeat').prop('checked', false);
			$('#iocIdRepeat').prop('checked', false);
			$('#gtdIdRepeat').prop('checked', false);
			$('#gttIdRepeat').prop('checked', false);
	 }
	 if($("input:radio[name='gtdIdRepeat']").is(":checked")) {	
			
			$('#dayIdRepeat').prop('checked', false);
			$('#iocIdRepeat').prop('checked', false);
			$('#gtcIdRepeat').prop('checked', false);
			$('#gttIdRepeat').prop('checked', false);
	 }
	 if($("input:radio[name='gttIdRepeat']").is(":checked")) {	
			
			$('#dayIdRepeat').prop('checked', false);
			$('#iocIdRepeat').prop('checked', false);
			$('#gtcIdRepeat').prop('checked', false);
			$('#gtdIdRepeat').prop('checked', false);
	 }
	 
	
});


	 $('#BracketOrdIdRepeat').click(function() { 
		 if($("input:radio[name='BracketOrdIdRepeat']").is(":checked")) {	
			 radiolmtId = document.getElementById("lmtIdRepeat");
			 radiolmtId.checked = true;
			 $('#slIdRepeat').prop('checked', false);
				}
		 
	 if($("input:radio[name='BracketOrdIdRepeat']").is(":checked")) {
			$('#RegularOrdIdRepeat').prop('checked', false);
			$('#CoverOrdIdRepeat').prop('checked', false);
			$('#AfterMarketOrdIdRepeat').prop('checked', false);
			
			$("#cncIdRepeat").prop("disabled",true);				
			$('#NrmlIdRepeat').prop('disabled', true);
			$("#MisIdRepeat").prop("disabled",true);
			
			 
			 
			$('#lmtIdRepeat').prop('disabled', false);
			$("#mktIdRepeat").prop("disabled",true);	
			$("#mktIdRepeat").prop("checked",false);	
			$('#slIdRepeat').prop('disabled', false);
			$('#sl-mIdRepeat').prop('disabled', true);

			$("#CoStoplossDivIdRepeat").hide();
			$("#TriggerPriceDivIdRepeat").show();
			
			
			$('#IoclabelIdRepeat').hide();   // Validity Checking for BO	
			$('#GTClabelIdRepeat').hide();
			$('#GTDlabelIdRepeat').hide();
			$('#GTTlabelIdRepeat').hide();
			$('#dayIdRepeat').show();
			$('#dayIdRepeat').prop("checked",true);
			
			$('#stoplessIdRepeat').show();
		 	$('#tarketDivIdRepeat').show();
		 	$('#TrailingstopIdRepeat').show();
		 	$('#TargetstoplossquanIdRepeat').val('0');
		 	
		 	$("#datepickerIdRepeat").hide();
			$("#GTTstoplossIdRepeat").hide();
			$("#GttTargetIdRepeat").hide();
	 }
	
	 
	 if($("input:radio[name='lmtIdRepeat']").is(":checked")) {
		 
		 
		 $("#DiscquantityIdRepeat").prop("disabled",true);
		 $("#DiscquantityIdRepeat").val("0");
			//LMT
		     $("#TriggerpriceIdRepeat").prop("disabled",true);
		     $("#TriggerpriceIdRepeat").val("0");
		     $("#priceIdRepeat").prop("disabled",false);
		     
		      $("#mktIdRepeat").prop("checked",false);
		      $("#sl-mIdRepeat").prop("checked",false);
	 }
	 if($("input:radio[name='slIdRepeat']").is(":checked")) {
	 
		 $("#DiscquantityIdRepeat").prop("disabled",true);
		 	
			  //SL
			     $("#TriggerpriceIdRepeat").prop("disabled",false);
			     $("#TriggerpriceIdRepeat").val("0");
			     $("#priceIdRepeat").prop("disabled",false);
		 			
			     $("#mktIdRepeat").prop("checked",false);
			      $("#sl-mIdRepeat").prop("checked",false);
	 }
	 
	 
	 var scriptName=$("#stockhiddvalRepeat").val();
	 
	 if(scriptName==='MCX'){ 			//MCX
		 
		 $('#GTTlabelIdRepeat').hide();
		
		 if($("input:radio[name='BracketOrdIdRepeat']").is(":checked")) {
				$('#IoclabelIdRepeat').hide();   // Validity Checking for BO	
				$('#GTClabelIdRepeat').hide();
				$('#GTDlabelIdRepeat').hide();
				$('#GTTlabelIdRepeat').hide();
				$('#dayIdRepeat').show();
				$('#dayIdRepeat').prop("checked",true);
				
				
				
				
			}
	 }
	 if(scriptName==='NSE'){ 				//NSE
		
		 
		 $('#GTTlabelIdRepeat').show();
			
	 }
	 
});
	 
	 
$('#CoverOrdIdRepeat').click(function() {
		 
	 if($("input:radio[name='CoverOrdIdRepeat']").is(":checked")) {	
		 radiolmtId = document.getElementById("lmtIdRepeat");
		 radiolmtId.checked = true;
		 $("#mktIdRepeat").prop("checked",false);
			}
	 
		 if($("input:radio[name='CoverOrdIdRepeat']").is(":checked")) {
			$('#RegularOrdIdRepeat').prop('checked', false);
			$('#BracketOrdIdRepeat').prop('checked', false);
			$('#AfterMarketOrdIdRepeat').prop('checked', false);
			$("#DiscquantityIdRepeat").prop("disabled",false);
			$("#DiscquantityIdRepeat").val("0");
			
			$("#CoStoplossDivIdRepeat").show();
			$("#TriggerPriceDivIdRepeat").hide();
			$("#DiscquantityIdRepeat").prop("disabled",true);
			$('#stoplessIdRepeat').hide();
		 	$('#TrailingstopIdRepeat').hide();
		 	$('#tarketDivIdRepeat').hide();
			
			$("#cncIdRepeat").prop("disabled",true);				
			$('#NrmlIdRepeat').prop('disabled', true);
			$("#MisIdRepeat").prop("disabled",true);
			
			$("#lmtIdRepeat").prop("disabled",false);
			$("#mktIdRepeat").prop("disabled",false);
			$("#slIdRepeat").prop("disabled",true);			
			$('#sl-mIdRepeat').prop('disabled', true);
			$("#slIdRepeat").prop("checked",false);
			$('#sl-mIdRepeat').prop('checked', false);
			 			
			$('#IoclabelIdRepeat').hide();  // Validity Checking for BO
			$('#GTClabelIdRepeat').hide();
			$('#GTDlabelIdRepeat').hide();
			$('#GTTlabelIdRepeat').hide();
			$('#DaylabelIdRepeat').show();
			$('#dayIdRepeat').prop("checked",true);
			
			
			$("#datepickerIdRepeat").hide();
			$("#GTTstoplossIdRepeat").hide();
			$("#GttTargetIdRepeat").hide();
		 }
		 
		 if($("input:radio[name='lmtIdRepeat']").is(":checked")) {
			 $("#DiscquantityIdRepeat").prop("disabled",false);
			 $("#DiscquantityIdRepeat").val("0");
				//LMT
		      $("#TriggerpriceIdRepeat").prop("disabled",true);
		      $("#TriggerpriceIdRepeat").val("0");
		      $("#priceIdRepeat").prop("disabled",false); 
		      
		      $("#slIdRepeat").prop("checked",false);
		      $("#sl-mIdRepeat").prop("checked",false);
			 
		 }
		 if($("input:radio[name='mktIdRepeat']").is(":checked")) {
			 $("#DiscquantityIdRepeat").prop("disabled",false);
			 $("#DiscquantityIdRepeat").val("0");
			   //SL
				  $("#TriggerpriceIdRepeat").prop("disabled",false);
			      $("#priceIdRepeat").prop("disabled",false);
			      $("#priceIdRepeat").val("0"); 
			      $("#slIdRepeat").prop("checked",false);
			      $("#sl-mIdRepeat").prop("checked",false);
		 
	}
		 var scriptName=$("#stockhiddvalRepeat").val();
		 if(scriptName==='MCX'){ //MCX
			 
			 $('#GTTlabelIdRepeat').hide();
			 
			 if($("input:radio[name='CoverOrdIdRepeat']").is(":checked")) {
					$('#IoclabelIdRepeat').hide();   // Validity Checking for BO	
					$('#GTClabelIdRepeat').hide();
					$('#GTDlabelIdRepeat').hide();
					$('#GTTlabelIdRepeat').hide();
					$('#dayIdRepeat').show();
					$('#dayIdRepeat').prop("checked",true);
				}
		 }
		 if(scriptName==='NSE'){ //NSE
			
			 $('#GTTlabelIdRepeat').show();
				
		 }
		 
		
	});



	 
$('#AfterMarketOrdIdRepeat').click(function() {
	 
	 if($("input:radio[name='AfterMarketOrdIdRepeat']").is(":checked")) {
		 radiolmtId = document.getElementById("lmtIdRepeat");
		 radiolmtId.checked = true;
			$("#mktIdRepeat").prop("checked",false);
			$("#slIdRepeat").prop("checked",false);
			$('#sl-mIdRepeat').prop('checked', false); 
		
			}
	 
	 if($("input:radio[name='AfterMarketOrdIdRepeat']").is(":checked")) {
		 
		$('#RegularOrdIdRepeat').prop('checked', false);
		$('#BracketOrdIdRepeat').prop('checked', false);
		$('#CoverOrdIdRepeat').prop('checked', false);
		$("#DiscquantityIdRepeat").prop("disabled",false);
		
		$("#cncIdRepeat").prop("disabled",false);			
		$('#NrmlIdRepeat').prop('disabled', false);
		$("#MisIdRepeat").prop("disabled",false);
		
		
		$("#mktIdRepeat").prop("disabled",false);
		$("#slIdRepeat").prop("disabled",false);
		$('#sl-mIdRepeat').prop('disabled', false); 
		
		$("#CoStoplossDivIdRepeat").hide();
		$("#TriggerPriceDivIdRepeat").show();
		$("#DiscquantityIdRepeat").prop("disabled",false);
		$("#DiscquantityIdRepeat").val(0);
		
		$('#stoplessIdRepeat').hide();
	 	$('#tarketDivIdRepeat').hide();
	 	$('#TrailingstopIdRepeat').hide();
	 	
	 				
		$('#IoclabelIdRepeat').show();  // Validity Checking for BO
		$('#GTClabelIdRepeat').show();
		$('#GTDlabelIdRepeat').show();
		$('#GTTlabelIdRepeat').show();
	 }
	 
	 var scriptName=$("#stockhiddvalRepeat").val();
	 
	 if(scriptName==='MCX'){ //MCX
		 	$('#GTTlabelIdRepeat').hide();
		 	$("#cncIdRepeat").prop('disabled',true);
		 	$('#cncIdRepeat').prop('checked', false);
		 	radioNrmlId = document.getElementById("NrmlId");
		 	radioNrmlId.checked = true;
		 	
		 	$('#NrmlIdRepeat').prop('checked', true);
		 	$('#MisIdRepeat').prop('checked', false);

	 }
	 if(scriptName==='NSE'){ //NSE
		 
		 $('#GTTlabelIdRepeat').show();
			$('#NrmlIdRepeat').prop('disabled', true);
			$('#NrmlIdRepeat').prop('checked', false);
			$('#cncIdRepeat').prop('checked', true);
			radiocncId = document.getElementById("cncIdRepeat");
			radiocncId.checked = true;
		 	
			$('#MisIdRepeat').prop('checked', false);
			
			$('#iocIdRepeat').prop('checked', false);   	
			$('#gtcIdRepeat').prop('checked', false);
			$('#gtdlIdRepeat').prop('checked', false);
			$('#gttIdRepeat').prop('checked', false);
			$('#dayIdRepeat').prop("checked",true);
	 }

	 if(scriptName==='NFO'){ //F&O
		 	$('#GTTlabelIdRepeat').hide();
		 	$("#cncIdRepeat").prop('disabled',true);
		 	$('#cncIdRepeat').prop('checked', false);
		 	$('#NrmlIdRepeat').prop('checked', true);
		 	$('#mktIdRepeat').prop('checked', false);
		 	$('#slIdRepeat').prop('checked', false);
		 	$('#sl-mIdRepeat').prop('checked', false);
		 	$('#MisIdRepeat').prop('checked', false);
		 	
		 	
	 }
	
	 if($("input:radio[name='lmtIdRepeat']").is(":checked")) {
		 $("#DiscquantityIdRepeat").prop("disabled",false);
		 $("#DiscquantityIdRepeat").val("0");
			//LMT
	      $("#TriggerpriceIdRepeat").prop("disabled",true);
	      $("#TriggerpriceIdRepeat").val("0");
	      $("#priceIdRepeat").prop("disabled",false); 
	      
	      $("#slIdRepeat").prop("checked",false);
	      $("#mktIdRepeat").prop("disabled",false);
	      $("#sl-mIdRepeat").prop("disabled",false);
	      
		 
	 }
	 if($("input:radio[name='mktIdRepeat']").is(":checked")) {
		 //MKT
		 $("#TriggerpriceIdRepeat").prop("disabled",true);
	     $("#TriggerpriceIdRepeat").val("0");
	     $("#priceIdRepeat").prop("disabled",true);
	     $("#priceIdRepeat").val("0");	  
	     
	    	$('#stoplessIdRepeat').hide();
		 	$('#tarketDivIdRepeat').hide();
		 	$('#TrailingstopIdRepeat').hide();
		 	
		 	$("#slIdRepeat").prop("checked",false);
		      $("#lmtIdRepeat").prop("disabled",false);
		      $("#sl-mIdRepeat").prop("disabled",false);
		      
		 }
	 
	 if($("input:radio[name='slIdRepeat']").is(":checked")) {
		 $("#DiscquantityIdRepeat").prop("disabled",false);
		 $("#DiscquantityIdRepeat").val("0");
		   //SL
			  $("#TriggerpriceIdRepeat").prop("disabled",false);
		      $("#priceIdRepeat").prop("disabled",false);
		      $("#priceIdRepeat").val("0");    
	 
		      $("#lmtIdRepeat").prop("checked",false);
		      $("#mktIdRepeat").prop("disabled",false);
		      $("#sl-mIdRepeat").prop("disabled",false);
		      
			}
	 if($("input:radio[name='sl-mIdRepeat']").is(":checked")) {
	 		//SL-M
		  	  $("#TriggerpriceIdRepeat").prop("disabled",false);
		  	  $("#TriggerpriceIdRepeat").val("0");
		      $("#priceIdRepeat").prop("disabled",true);
		      $("#priceIdRepeat").val("0");
		      $("#DiscquantityIdRepeat").prop("disabled",false);
		     	 $('#stoplessIdRepeat').hide();
			 	$('#tarketDivIdRepeat').hide();
			 	$('#TrailingstopId').hide();
			 	
			 	$("#slIdRepeat").prop("checked",false);
			      $("#mktIdRepeat").prop("disabled",false);
			      $("#lmtIdRepeat").prop("disabled",false);
			      
		 }
	 if($("input:radio[name='dayIdRepeat']").is(":checked")) {	
			
			$('#iocIdRepeat').prop('checked', false);
			$('#gtcIdRepeat').prop('checked', false);
			$('#gtdIdRepeat').prop('checked', false);
			$('#gttIdRepeat').prop('checked', false);
	 }
	 if($("input:radio[name='iocIdRepeat']").is(":checked")) {	
			
			$('#dayIdRepeat').prop('checked', false);
			$('#gtcIdRepeat').prop('checked', false);
			$('#gtdIdRepeat').prop('checked', false);
			$('#gttIdRepeat').prop('checked', false);
	 }
	 if($("input:radio[name='gtcIdRepeat']").is(":checked")) {	
			
			$('#dayIdRepeat').prop('checked', false);
			$('#iocIdRepeat').prop('checked', false);
			$('#gtdIdRepeat').prop('checked', false);
			$('#gttIdRepeat').prop('checked', false);
	 }
	 if($("input:radio[name='gtdId']").is(":checked")) {	
			
			$('#dayIdRepeat').prop('checked', false);
			$('#iocIdRepeat').prop('checked', false);
			$('#gtcIdRepeat').prop('checked', false);
			$('#gttIdRepeat').prop('checked', false);
	 }
	 if($("input:radio[name='gttIdRepeat']").is(":checked")) {	
			
			$('#dayIdRepeat').prop('checked', false);
			$('#iocIdRepeat').prop('checked', false);
			$('#gtcIdRepeat').prop('checked', false);
			$('#gtdIdRepeat').prop('checked', false);
	 }
	 
});



$('#dayIdRepeat').click(function() {
	 
	 if($("input:radio[name='dayIdRepeat']").is(":checked")) {	
		
		$('#iocIdRepeat').prop('checked', false);
		$('#gtcIdRepeat').prop('checked', false);
		$('#gtdIdRepeat').prop('checked', false);
		$('#gttIdRepeat').prop('checked', false);
		
		$("#datepickerIdRepeat").hide();
		$("#GTTstoplossIdRepeat").hide();
		$("#GttTargetIdRepeat").hide();
		$('#stoplessIdRepeat').hide();		
	 	$('#tarketDivIdRepeat').hide();
	 	$('#TrailingstopIdRepeat').hide();
	 	
	 
	 }
	
});


$('#iocIdRepeat').click(function() {
	 
	 if($("input:radio[name='iocIdRepeat']").is(":checked")) {	
			
		$('#dayIdRepeat').prop('checked', false);
		$('#gtcIdRepeat').prop('checked', false);
		$('#gtdIdRepeat').prop('checked', false);
		$('#gttIdRepeat').prop('checked', false);
		
		$("#datepickerIdRepeat").hide();
		$("#GTTstoplossIdRepeat").hide();
		$("#GttTargetIdRepeat").hide();
		$('#stoplessIdRepeat').hide();
	 	$('#tarketDivIdRepeat').hide();
	 	$('#TrailingstopIdRepeat').hide();
	 }
	
});



$('#gtcIdRepeat').click(function() {
	 
	 if($("input:radio[name='gtcIdRepeat']").is(":checked")) {	
			
		$('#dayIdRepeat').prop('checked', false);
		$('#iocIdRepeat').prop('checked', false);
		$('#gtdIdRepeat').prop('checked', false);
		$('#gttIdRepeat').prop('checked', false);
		
		$("#datepickerIdRepeat").hide();
		$("#GTTstoplossIdRepeat").hide();
		$("#GttTargetIdRepeat").hide();
		$('#stoplessIdRepeat').hide();
	 	$('#tarketDivIdRepeat').hide();
	 	$('#TrailingstopIdRepeat').hide();
	 }
	
});




$('#gtdIdRepeat').click(function() {
	 
	 if($("input:radio[name='gtdIdRepeat']").is(":checked")) {	
			
		$('#iocIdRepeat').prop('checked', false);
		$('#dayIdRepeat').prop('checked', false);
		$('#gtcIdRepeat').prop('checked', false);
		$('#gttIdRepeat').prop('checked', false);
		
		
		$("#datepickerIdRepeat").show();	 //Good till date datpicker enable here...,
				
		$("#GTTstoplossIdRepeat").hide();
		$("#GttTargetIdRepeat").hide();
		$('#stoplessIdRepeat').hide();
	 	$('#tarketDivIdRepeat').hide();
	 	$('#TrailingstopIdRepeat').hide();
	 }

});




$('#gttIdRepeat').click(function() {
	 
	 if($("input:radio[name='gttIdRepeat']").is(":checked")) {	
		
		$('#iocIdRepeat').prop('checked', false);
		$('#dayIdRepeat').prop('checked', false);
		$('#gtdIdRepeat').prop('checked', false);
		$('#gtcIdRepeat').prop('checked', false);
		
		$("#GTTstoplossIdRepeat").show();
		$("#GttTargetIdRepeat").show();
		$("#GTTstoplossValueIdRepeat").prop("disabled",true);
		$("#GTTstoplossValueIdRepeat").prop("disabled",true);
		 $("#GTTstoplossValueIdRepeat").val("0");
		 $("#GttTargetvalueIdRepeat").val("0");
		
		$("#datepickerIdRepeat").hide();		
		$('#stoplessIdRepeat').hide();
	 	$('#tarketDivIdRepeat').hide();
	 	$('#TrailingstopIdRepeat').hide();
	 }
});


	$('#GTTstoplosscheckIdRepeat').click(function() {
	 if (document.getElementById('GTTstoplosscheckIdRepeat').checked) {
		$("#GTTstoplossValueIdRepeat").prop("disabled",false);
		
		}
	 else{
		 $("#GTTstoplossValueIdRepeat").prop("disabled",true);
		 $("#GTTstoplossValueIdRepeat").val("0");
	 }
	});
	
	
	
	
	$('#GttTargetcheckIdRepeat').click(function() {
		 if (document.getElementById('GttTargetcheckIdRepeat').checked) {
			$("#GttTargetvalueIdRepeat").prop("disabled",false);
			
			}
		 else{
			 $("#GttTargetvalueIdRepeat").prop("disabled",true);
			 $("#GttTargetvalueIdRepeat").val("0");
		 }
		});
	
	
	//============ RepeatBuy/RepeatSell Order Window END==========	
	
		
		
		
		//============ Buy/Sell Order Window START==========


	//modal draggable
	$('.modal').modal({ keyboard: false,
	 show: false
	});

	//Jquery draggable
	$('.modal-dialog').draggable({
	handle: ".modal-header"
	});

	//disable draggable (Profile-Segments,ConfirmUpdate)
	$(".disable-drag").draggable({ disabled: true });


	function changeModalContent(event) {
		 event.stopPropagation();
	// event.preventDefault();
	}




	$( "#toggle-btnId" ).click(function() {	
		  var act = $('.toggle-btn').hasClass("active");
		  var buyId = document.getElementById("buyId");
		  var sellId = document.getElementById("sellId");	  
		  if(act){		  
			  buyId.style.display = "none";
			  sellId.style.display = "block";
			  $('.inner-circle').css('marginLeft','30px');
			  document. getElementById('toggle-btnId'). style. backgroundColor = 'Red';
		  }
		  else {
			  buyId.style.display = "block";
			  sellId.style.display = "none";
			  $('.inner-circle').css('marginLeft','0px');
			  document. getElementById('toggle-btnId'). style. backgroundColor = 'green';
		  }	  
		});
		
		 function onclickstocksellbtnToggle(){		
			 var act = $('.toggle-btn').hasClass("active");			
				if(act==true){
					act= true;
					document. getElementById('toggle-btnId'). style. backgroundColor = 'green';
					$('.inner-circle').css('marginLeft','30px');
				}else if(act==false){	
					act= true;
					document. getElementById('toggle-btnId'). style. backgroundColor = 'Red';
					$('.inner-circle').css('marginLeft','30px');				
				}			 
			} 
		 function onclickstockbuybtnToggle(){		
			 var act = $('.toggle-btn').hasClass("active");			
			if(act==true){	
				act= false;
				document. getElementById('toggle-btnId'). style. backgroundColor = 'Red';
					$('.inner-circle').css('marginLeft','0px');				
				} 
			else if(act==false){	
				act= false;
				document. getElementById('toggle-btnId'). style. backgroundColor = 'green';
				$('.inner-circle').css('marginLeft','0px');	
				
			} 
			 
			} 
		

	function stockbuybtnmouseover(id){	
		//alert("id:::"+id);
		//document.getElementById(id+'_mydivId').style.display = 'block';
		document.getElementById(id+'_mydivId').style.visibility='collapse';
		
		//document.getElementById(id+'_stockbuysellfirst').style.display = 'none';
		document.getElementById(id+'_stockbuysellfirst').style.visibility='visible';
	}
	function stockbuybtnmouseout(id){
		//document.getElementById(id+'_mydivId').style.display = 'none';
		document.getElementById(id+'_mydivId').style.visibility='visible';
		//document.getElementById(id+'_stockbuysellfirst').style.display = 'block';
		document.getElementById(id+'_stockbuysellfirst').style.visibility='collapse';
	}
	 
		
		

	//=====buy/Sell Price TickSize =============				   
	var value;
	var mcxTicksize;
	var nseTicksize;
	$('#priceId').on('change',function(){	
		  
		var priceVal=$('#priceId').val();
		var segmentTag=$('#stockhiddval').val();
		
		//===== MCX Segment ======
		if(segmentTag=="MCX"){				    	
		value = document.getElementById("priceId").step =priceVal;				    
		mcxTicksize=$("#mcxticksizehiddval").val();
		/*  if(mcxTicksize=="0.05"){
			 mcxTicksize=mcxTicksize*10;
		 	} */
		document.getElementById("priceId").step =mcxTicksize;
		
	if($(this).val() > value){
		  var upTagvalue=parseInt(value)+parseInt(mcxTicksize);
		  document.getElementById("priceId").value =upTagvalue;	
		  
	}else if($(this).val() < value){
		  var downTagvalue=parseInt(value)-parseInt(mcxTicksize);
		  document.getElementById("priceId").value =downTagvalue;
	}

		}				    	
		//===== NSE Segment ======
		else if(segmentTag=="NSE"){	
		    	value = document.getElementById("priceId").step =priceVal;				    
		      	 nseTicksize=$("#nseticksizehiddval").val();
		      	 
		      	/*  if(nseTicksize=="0.05"){
		      		nseTicksize=nseTicksize*10;
		    	 } */
		     document.getElementById("priceId").step =nseTicksize;	
		     
		     if($(this).val() > value){
		    	  var upTagvalue=parseInt(value)+parseInt(nseTicksize);
		    	  document.getElementById("priceId").value =upTagvalue;	
		    	  
		      }else if($(this).val() < value){
		    	  var downTagvalue=parseInt(value)-parseInt(nseTicksize);
		    	  document.getElementById("priceId").value =downTagvalue;
		      }
		     }				    	
	value = $(this).val();
	});			    
	//==============================




	$('#cncId').click(function() { 
		 if($("input:radio[name='cncId']").is(":checked")) {
				$('#NrmlId').prop('checked', false);
				$('#MisId').prop('checked', false);			
				$('#stoplessId').hide();
			 	$('#tarketDivId').hide();
			 	$('#TrailingstopId').hide();
		 }
	});

	$('#NrmlId').click(function() { 
		 if($("input:radio[name='NrmlId']").is(":checked")) {
				$('#cncId').prop('checked', false);
				$('#MisId').prop('checked', false);
			
				$('#stoplessId').hide();
			 	$('#tarketDivId').hide();
			 	$('#TrailingstopId').hide();
		 }
		 
	});
	$('#MisId').click(function() { 
		 if($("input:radio[name='MisId']").is(":checked")) {
				$('#cncId').prop('checked', false);
				$('#NrmlId').prop('checked', false);
				
				$('#stoplessId').hide();
			 	$('#tarketDivId').hide();
			 	$('#TrailingstopId').hide();
				
				
		 }		
		 
		
	});

	$('#lmtId').click(function() { 
		
		
		if($("input:radio[name='lmtId']").is(":checked")) {
		$('#mktId').prop('checked', false);
		$('#slId').prop('checked', false);
		$('#sl-mId').prop('checked', false);
		
		
		$('#stoplessId').hide();
		$('#tarketDivId').hide();
		$('#TrailingstopId').hide();

	}	


	if($("input:radio[name='RegularOrdId']").is(":checked")) {

		$('#stoplessId').hide();
		$('#tarketDivId').hide();
		$('#TrailingstopId').hide();
		$("#DiscquantityId").prop("disabled",false);
		 
			//LMT
	   $("#TriggerpriceId").prop("disabled",true);
	   $("#TriggerpriceId").val("0");
	   $("#priceId").prop("disabled",false);


	}
	if($("input:radio[name='BracketOrdId']").is(":checked")) {

			
		$('#stoplessId').show();
		$('#tarketDivId').show();
		$('#TrailingstopId').show();
		$("#DiscquantityId").prop("disabled",true);
		$("#DiscquantityId").val("0");
		//LMT
	  $("#TriggerpriceId").prop("disabled",true);
	  $("#TriggerpriceId").val("0");
	  $("#priceId").prop("disabled",false);
	  
		
	}

	if($("input:radio[name='CoverOrdId']").is(":checked")) {	

	$("#DiscquantityId").prop("disabled",true);
	$("#DiscquantityId").val("0");
	$("#priceId").prop("disabled",false);
	$("#priceId").val("0");

	}

	if($("input:radio[name='AfterMarketOrdId']").is(":checked")) {	

	$('#stoplessId').hide();
		$('#tarketDivId').hide();
		$('#TrailingstopId').hide();
		 $("#DiscquantityId").prop("disabled",false);
		 
		//LMT
	$("#TriggerpriceId").prop("disabled",true);
	$("#TriggerpriceId").val("0");
	$("#priceId").prop("disabled",false);

	}

	});



	$('#mktId').click(function() { 

	if($("input:radio[name='mktId']").is(":checked")) {

		$('#lmtId').prop('checked', false);
		$('#slId').prop('checked', false);
		$('#sl-mId').prop('checked', false);
		 $("#DiscquantityId").prop("disabled",false);
		 
		$('#stoplessId').hide();
		$('#tarketDivId').hide();
		$('#TrailingstopId').hide();

	}	

	if($("input:radio[name='RegularOrdId']").is(":checked")) {
	//MKT
	$("#TriggerpriceId").prop("disabled",true);
	$("#TriggerpriceId").val("0");
	$("#priceId").prop("disabled",true);
	$("#priceId").val("0");	  

	$('#stoplessId').hide();
		$('#tarketDivId').hide();
		$('#TrailingstopId').hide();
	}
	if($("input:radio[name='CoverOrdId']").is(":checked")) {	

	$("#DiscquantityId").prop("disabled",true);
	$("#DiscquantityId").val("0");
	$("#priceId").prop("disabled",true);
	$("#priceId").val("0");
	}

	if($("input:radio[name='AfterMarketOrdId']").is(":checked")) {
	//MKT
	$("#TriggerpriceId").prop("disabled",true);
	$("#TriggerpriceId").val("0");
	$("#priceId").prop("disabled",true);
	$("#priceId").val("0");	  

	$('#stoplessId').hide();
		$('#tarketDivId').hide();
		$('#TrailingstopId').hide();
		
	}

	});
	$('#slId').click(function() { 
	if($("input:radio[name='slId']").is(":checked")) {

		$('#lmtId').prop('checked', false);
		$('#mktId').prop('checked', false);
		$('#sl-mId').prop('checked', false);
		
		$('#stoplessId').hide();
		$('#tarketDivId').hide();
		$('#TrailingstopId').hide();

		if($("input:radio[name='RegularOrdId']").is(":checked")) {
			//SL
			  $("#TriggerpriceId").prop("disabled",false);
		      $("#priceId").prop("disabled",false);
//			      $("#priceId").val("0");
		      $("#DiscquantityId").prop("disabled",false);
		      		      
			$('#stoplessId').hide();
		 	$('#tarketDivId').hide();
		 	$('#TrailingstopId').hide();
			
		}
		if($("input:radio[name='BracketOrdId']").is(":checked")) {    //Bracket Order
			 
				 	$('#stoplessId').show();
				 	$('#tarketDivId').show();
				 	$('#TrailingstopId').show();
				 	$('#TargetstoplossquanId').val('0');
				 	$("#DiscquantityId").prop("disabled",true);
				 	$("#DiscquantityId").val("0");
				 //SL
				     $("#TriggerpriceId").prop("disabled",false);
				     $("#TriggerpriceId").val("0");
				     $("#priceId").prop("disabled",false);
				     
			 }
		if($("input:radio[name='AfterMarketOrdId']").is(":checked")) {
			
			//SL
			  $("#TriggerpriceId").prop("disabled",false);
		      $("#priceId").prop("disabled",false);
//			      $("#priceId").val("0");
		      $("#DiscquantityId").prop("disabled",false);
		      
			$('#stoplessId').hide();
		 	$('#tarketDivId').hide();
		 	$('#TrailingstopId').hide();
		}

	}		

	});
	$('#sl-mId').click(function() { 

	if($("input:radio[name='sl-mId']").is(":checked")) {

		$('#lmtId').prop('checked', false);
		$('#mktId').prop('checked', false);
		$('#slId').prop('checked', false);
		
		
		$('#stoplessId').hide();
		$('#tarketDivId').hide();
		$('#TrailingstopId').hide();

	}		
	if($("input:radio[name='RegularOrdId']").is(":checked")) {
		//SL-M
		  $("#TriggerpriceId").prop("disabled",false);
		  $("#TriggerpriceId").val("0");
	$("#priceId").prop("disabled",true);
	$("#priceId").val("0");
	$("#DiscquantityId").prop("disabled",false);
		 $('#stoplessId').hide();
		$('#tarketDivId').hide();
		$('#TrailingstopId').hide();
	}

	if($("input:radio[name='AfterMarketOrdId']").is(":checked")) {
			 
	//SL-M
		  $("#TriggerpriceId").prop("disabled",false);
		  $("#TriggerpriceId").val("0");
	$("#priceId").prop("disabled",true);
	$("#DiscquantityId").prop("disabled",false);
		 $('#stoplessId').hide();
		$('#tarketDivId').hide();
		$('#TrailingstopId').hide();
	}

	});



	$('#RegularOrdId').click(function() {
		
		 if($("input:radio[name='RegularOrdId']").is(":checked")) {	
			 radiolmtId = document.getElementById("lmtId");
			 radiolmtId.checked = true;
				$("#mktId").prop("checked",false);
				$("#slId").prop("checked",false);
				$('#sl-mId').prop('checked', false); 
		}
		 if($("input:radio[name='RegularOrdId']").is(":checked")) {		
			
			$('#BracketOrdId').prop('checked', false);
			$('#CoverOrdId').prop('checked', false);
			$('#AfterMarketOrdId').prop('checked', false);
			
			$("#cncId").prop("disabled",false);			
			$('#NrmlId').prop('disabled',false);
			$("#MisId").prop("disabled",false);
			
			

			
			$("#CoStoplossDivId").hide();
			$("#TriggerPriceDivId").show();
			
			$('#DaylabelId').show();
			$('#IoclabelId').show();
			$('#IoclabelId').show();
			$('#GTClabelId').show();
			$('#GTDlabelId').show();
			$('#GTTlabelId').show();
			
			$('#stoplessId').hide();
		 	$('#tarketDivId').hide();
		 	$('#TrailingstopId').hide();
		 	
		 }
		 var scriptName=$("#stockhiddval").val();
		 if(scriptName==='MCX'){ //MCX
			 	$('#GTTlabelId').hide();
			 	$("#cncId").prop('disabled',true);
			 	$('#cncId').prop('checked', false);
			 	$('#NrmlId').prop('checked', true);
			 	$('#mktId').prop('checked', false);
			 	$('#slId').prop('checked', false);
			 	$('#sl-mId').prop('checked', false);
			 	$('#MisId').prop('checked', false);
			 	
			 	
		 }
		 if(scriptName==='NSE'){ //NSE
			 
			 $('#GTTlabelId').show();
				$('#NrmlId').prop('disabled', true);
				$('#NrmlId').prop('checked', false);
				$('#cncId').prop('checked', true);
				$('#MisId').prop('checked', false);
				
				$('#iocId').prop('checked', false);   	
				$('#gtcId').prop('checked', false);
				$('#gtdlId').prop('checked', false);
				$('#gttId').prop('checked', false);
				$('#dayId').prop("checked",true);
				
		 }
		 if(scriptName==='NFO'){ //F&O
			 	$('#GTTlabelId').hide();
			 	$("#cncId").prop('disabled',true);
			 	$('#cncId').prop('checked', false);
			 	$('#NrmlId').prop('checked', true);
			 	$('#mktId').prop('checked', false);
			 	$('#slId').prop('checked', false);
			 	$('#sl-mId').prop('checked', false);
			 	$('#MisId').prop('checked', false);
			 	
			 	
		 }
		 
		 if($("input:radio[name='lmtId']").is(":checked")) {
			 $("#DiscquantityId").prop("disabled",false);
			 $("#DiscquantityId").val("0");
				//LMT
		      $("#TriggerpriceId").prop("disabled",true);
		      $("#TriggerpriceId").val("0");
		      $("#priceId").prop("disabled",false); 
		      
		      $("#mktId").prop("disabled",false);
		      $("#slId").prop("disabled",false);
		      $("#sl-mId").prop("disabled",false);
			 
		 }
		 if($("input:radio[name='mktId']").is(":checked")) {
			 //MKT
			 $("#TriggerpriceId").prop("disabled",true);
		     $("#TriggerpriceId").val("0");
		     $("#priceId").prop("disabled",true);
		     $("#priceId").val("0");	
		     
		     $("#lmtId").prop("disable",false);
		      $("#slId").prop("disabled",false);
		      $("#sl-mId").prop("disabled",false);
		     
		    	$('#stoplessId').hide();
			 	$('#tarketDivId').hide();
			 	$('#TrailingstopId').hide();
			 }
		 
		 if($("input:radio[name='slId']").is(":checked")) {
			 $("#DiscquantityId").prop("disabled",false);
			 $("#DiscquantityId").val("0");
			   //SL
				  $("#TriggerpriceId").prop("disabled",false);
			      $("#priceId").prop("disabled",false);
			      $("#priceId").val("0");
			      
			      $("#lmtId").prop("disabled",false);
			      $("#mktId").prop("disabled",false);
			      $("#sl-mId").prop("disabled",false);
			      
			      
			      }
		 
		 if($("input:radio[name='sl-mId']").is(":checked")) {
		 		//SL-M
			  	  $("#TriggerpriceId").prop("disabled",false);
			  	  $("#TriggerpriceId").val("0");
			      $("#priceId").prop("disabled",true);
			      $("#priceId").val("0");
			      $("#DiscquantityId").prop("disabled",false);
			     	 $('#stoplessId').hide();
				 	$('#tarketDivId').hide();
				 	$('#TrailingstopId').hide();
				 	
				 	 $("#lmtId").prop("disabled",false);
				      $("#mktId").prop("disabled",false);
				      $("#slId").prop("disabled",false);
				      
			 }
		 
		 if($("input:radio[name='dayId']").is(":checked")) {	
				
				$('#iocId').prop('checked', false);
				$('#gtcId').prop('checked', false);
				$('#gtdId').prop('checked', false);
				$('#gttId').prop('checked', false);
		 }
		 if($("input:radio[name='iocId']").is(":checked")) {	
				
				$('#dayId').prop('checked', false);
				$('#gtcId').prop('checked', false);
				$('#gtdId').prop('checked', false);
				$('#gttId').prop('checked', false);
		 }
		 if($("input:radio[name='gtcId']").is(":checked")) {	
				
				$('#dayId').prop('checked', false);
				$('#iocId').prop('checked', false);
				$('#gtdId').prop('checked', false);
				$('#gttId').prop('checked', false);
		 }
		 if($("input:radio[name='gtdId']").is(":checked")) {	
				
				$('#dayId').prop('checked', false);
				$('#iocId').prop('checked', false);
				$('#gtcId').prop('checked', false);
				$('#gttId').prop('checked', false);
		 }
		 if($("input:radio[name='gttId']").is(":checked")) {	
				
				$('#dayId').prop('checked', false);
				$('#iocId').prop('checked', false);
				$('#gtcId').prop('checked', false);
				$('#gtdId').prop('checked', false);
		 }
		 
		
	});


		 $('#BracketOrdId').click(function() { 
			 if($("input:radio[name='BracketOrdId']").is(":checked")) {	
				 radiolmtId = document.getElementById("lmtId");
				 radiolmtId.checked = true;
				 $('#slId').prop('checked', false);
					}
			 
		 if($("input:radio[name='BracketOrdId']").is(":checked")) {
				$('#RegularOrdId').prop('checked', false);
				$('#CoverOrdId').prop('checked', false);
				$('#AfterMarketOrdId').prop('checked', false);
				
				$("#cncId").prop("disabled",true);				
				$('#NrmlId').prop('disabled', true);
				$("#MisId").prop("disabled",true);
				
				 
				 
				$('#lmtId').prop('disabled', false);
				$("#mktId").prop("disabled",true);	
				$("#mktId").prop("checked",false);	
				$('#slId').prop('disabled', false);
				$('#sl-mId').prop('disabled', true);

				$("#CoStoplossDivId").hide();
				$("#TriggerPriceDivId").show();
				
				
				$('#IoclabelId').hide();   // Validity Checking for BO	
				$('#GTClabelId').hide();
				$('#GTDlabelId').hide();
				$('#GTTlabelId').hide();
				$('#dayId').show();
				$('#dayId').prop("checked",true);
				
				$('#stoplessId').show();
			 	$('#tarketDivId').show();
			 	$('#TrailingstopId').show();
			 	$('#TargetstoplossquanId').val('0');
			 	
			 	$("#datepickerId").hide();
				$("#GTTstoplossId").hide();
				$("#GttTargetId").hide();
		 }
		
		 
		 if($("input:radio[name='lmtId']").is(":checked")) {
			 
			 
			 $("#DiscquantityId").prop("disabled",true);
			 $("#DiscquantityId").val("0");
				//LMT
			     $("#TriggerpriceId").prop("disabled",true);
			     $("#TriggerpriceId").val("0");
			     $("#priceId").prop("disabled",false);
			     
			      $("#mktId").prop("checked",false);
			      $("#sl-mId").prop("checked",false);
		 }
		 if($("input:radio[name='slId']").is(":checked")) {
		 
			 $("#DiscquantityId").prop("disabled",true);
			 	
				  //SL
				     $("#TriggerpriceId").prop("disabled",false);
				     $("#TriggerpriceId").val("0");
				     $("#priceId").prop("disabled",false);
			 			
				     $("#mktId").prop("checked",false);
				      $("#sl-mId").prop("checked",false);
		 }
		 
		 
		 var scriptName=$("#stockhiddval").val();
		 
		 if(scriptName==='MCX'){ 			//MCX
			 
			 $('#GTTlabelId').hide();
			
			 if($("input:radio[name='BracketOrdId']").is(":checked")) {
					$('#IoclabelId').hide();   // Validity Checking for BO	
					$('#GTClabelId').hide();
					$('#GTDlabelId').hide();
					$('#GTTlabelId').hide();
					$('#dayId').show();
					$('#dayId').prop("checked",true);
					
					
					
					
				}
		 }
		 if(scriptName==='NSE'){ 				//NSE
			
			 
			 $('#GTTlabelId').show();
				
		 }
		 
	});
		 
		 
	$('#CoverOrdId').click(function() {
			 
		 if($("input:radio[name='CoverOrdId']").is(":checked")) {	
			 radiolmtId = document.getElementById("lmtId");
			 radiolmtId.checked = true;
			 $("#mktId").prop("checked",false);
				}
		 
			 if($("input:radio[name='CoverOrdId']").is(":checked")) {
				$('#RegularOrdId').prop('checked', false);
				$('#BracketOrdId').prop('checked', false);
				$('#AfterMarketOrdId').prop('checked', false);
				$("#DiscquantityId").prop("disabled",false);
				$("#DiscquantityId").val("0");
				
				$("#CoStoplossDivId").show();
				$("#TriggerPriceDivId").hide();
				$("#DiscquantityId").prop("disabled",true);
				$('#stoplessId').hide();
			 	$('#TrailingstopId').hide();
			 	$('#tarketDivId').hide();
				
				$("#cncId").prop("disabled",true);				
				$('#NrmlId').prop('disabled', true);
				$("#MisId").prop("disabled",true);
				
				$("#lmtId").prop("disabled",false);
				$("#mktId").prop("disabled",false);
				$("#slId").prop("disabled",true);			
				$('#sl-mId').prop('disabled', true);
				$("#slId").prop("checked",false);
				$('#sl-mId').prop('checked', false);
				 			
				$('#IoclabelId').hide();  // Validity Checking for BO
				$('#GTClabelId').hide();
				$('#GTDlabelId').hide();
				$('#GTTlabelId').hide();
				$('#DaylabelId').show();
				$('#dayId').prop("checked",true);
				
				
				$("#datepickerId").hide();
				$("#GTTstoplossId").hide();
				$("#GttTargetId").hide();
			 }
			 
			 if($("input:radio[name='lmtId']").is(":checked")) {
				 $("#DiscquantityId").prop("disabled",false);
				 $("#DiscquantityId").val("0");
					//LMT
			      $("#TriggerpriceId").prop("disabled",true);
			      $("#TriggerpriceId").val("0");
			      $("#priceId").prop("disabled",false); 
			      
			      $("#slId").prop("checked",false);
			      $("#sl-mId").prop("checked",false);
				 
			 }
			 if($("input:radio[name='mktId']").is(":checked")) {
				 $("#DiscquantityId").prop("disabled",false);
				 $("#DiscquantityId").val("0");
				   //SL
					  $("#TriggerpriceId").prop("disabled",false);
				      $("#priceId").prop("disabled",false);
				      $("#priceId").val("0"); 
				      $("#slId").prop("checked",false);
				      $("#sl-mId").prop("checked",false);
			 
		}
			 var scriptName=$("#stockhiddval").val();
			 if(scriptName==='MCX'){ //MCX
				 
				 $('#GTTlabelId').hide();
				 
				 if($("input:radio[name='CoverOrdId']").is(":checked")) {
						$('#IoclabelId').hide();   // Validity Checking for BO	
						$('#GTClabelId').hide();
						$('#GTDlabelId').hide();
						$('#GTTlabelId').hide();
						$('#dayId').show();
						$('#dayId').prop("checked",true);
					}
			 }
			 if(scriptName==='NSE'){ //NSE
				
				 $('#GTTlabelId').show();
					
			 }
			 
			
		});



		 
	$('#AfterMarketOrdId').click(function() {
		 
		 if($("input:radio[name='AfterMarketOrdId']").is(":checked")) {
			 radiolmtId = document.getElementById("lmtId");
			 radiolmtId.checked = true;
				$("#mktId").prop("checked",false);
				$("#slId").prop("checked",false);
				$('#sl-mId').prop('checked', false); 
			
				}
		 
		 if($("input:radio[name='AfterMarketOrdId']").is(":checked")) {
			 
			$('#RegularOrdId').prop('checked', false);
			$('#BracketOrdId').prop('checked', false);
			$('#CoverOrdId').prop('checked', false);
			$("#DiscquantityId").prop("disabled",false);
			
			$("#cncId").prop("disabled",false);			
			$('#NrmlId').prop('disabled', false);
			$("#MisId").prop("disabled",false);
			
			
			$("#mktId").prop("disabled",false);
			$("#slId").prop("disabled",false);
			$('#sl-mId').prop('disabled', false); 
			
			$("#CoStoplossDivId").hide();
			$("#TriggerPriceDivId").show();
			$("#DiscquantityId").prop("disabled",false);
			$("#DiscquantityId").val(0);
			
			$('#stoplessId').hide();
		 	$('#tarketDivId').hide();
		 	$('#TrailingstopId').hide();
		 	
		 				
			$('#IoclabelId').show();  // Validity Checking for BO
			$('#GTClabelId').show();
			$('#GTDlabelId').show();
			$('#GTTlabelId').show();
		 }
		 
		 var scriptName=$("#stockhiddval").val();
		 
		 if(scriptName==='MCX'){ //MCX
			 	$('#GTTlabelId').hide();
			 	$("#cncId").prop('disabled',true);
			 	$('#cncId').prop('checked', false);
			 	radioNrmlId = document.getElementById("NrmlId");
			 	radioNrmlId.checked = true;
			 	
			 	$('#NrmlId').prop('checked', true);
			 	$('#MisId').prop('checked', false);

		 }
		 if(scriptName==='NSE'){ //NSE
			 
			 $('#GTTlabelId').show();
				$('#NrmlId').prop('disabled', true);
				$('#NrmlId').prop('checked', false);
				$('#cncId').prop('checked', true);
				radiocncId = document.getElementById("cncId");
				radiocncId.checked = true;
			 	
				$('#MisId').prop('checked', false);
				
				$('#iocId').prop('checked', false);   	
				$('#gtcId').prop('checked', false);
				$('#gtdlId').prop('checked', false);
				$('#gttId').prop('checked', false);
				$('#dayId').prop("checked",true);
		 }

		 if(scriptName==='NFO'){ //F&O
			 	$('#GTTlabelId').hide();
			 	$("#cncId").prop('disabled',true);
			 	$('#cncId').prop('checked', false);
			 	$('#NrmlId').prop('checked', true);
			 	$('#mktId').prop('checked', false);
			 	$('#slId').prop('checked', false);
			 	$('#sl-mId').prop('checked', false);
			 	$('#MisId').prop('checked', false);
			 	
			 	
		 }
		
		 if($("input:radio[name='lmtId']").is(":checked")) {
			 $("#DiscquantityId").prop("disabled",false);
			 $("#DiscquantityId").val("0");
				//LMT
		      $("#TriggerpriceId").prop("disabled",true);
		      $("#TriggerpriceId").val("0");
		      $("#priceId").prop("disabled",false); 
		      
		      $("#slId").prop("checked",false);
		      $("#mktId").prop("disabled",false);
		      $("#sl-mId").prop("disabled",false);
		      
			 
		 }
		 if($("input:radio[name='mktId']").is(":checked")) {
			 //MKT
			 $("#TriggerpriceId").prop("disabled",true);
		     $("#TriggerpriceId").val("0");
		     $("#priceId").prop("disabled",true);
		     $("#priceId").val("0");	  
		     
		    	$('#stoplessId').hide();
			 	$('#tarketDivId').hide();
			 	$('#TrailingstopId').hide();
			 	
			 	$("#slId").prop("checked",false);
			      $("#lmtId").prop("disabled",false);
			      $("#sl-mId").prop("disabled",false);
			      
			 }
		 
		 if($("input:radio[name='slId']").is(":checked")) {
			 $("#DiscquantityId").prop("disabled",false);
			 $("#DiscquantityId").val("0");
			   //SL
				  $("#TriggerpriceId").prop("disabled",false);
			      $("#priceId").prop("disabled",false);
			      $("#priceId").val("0");    
		 
			      $("#lmtId").prop("checked",false);
			      $("#mktId").prop("disabled",false);
			      $("#sl-mId").prop("disabled",false);
			      
				}
		 if($("input:radio[name='sl-mId']").is(":checked")) {
		 		//SL-M
			  	  $("#TriggerpriceId").prop("disabled",false);
			  	  $("#TriggerpriceId").val("0");
			      $("#priceId").prop("disabled",true);
			      $("#priceId").val("0");
			      $("#DiscquantityId").prop("disabled",false);
			     	 $('#stoplessId').hide();
				 	$('#tarketDivId').hide();
				 	$('#TrailingstopId').hide();
				 	
				 	$("#slId").prop("checked",false);
				      $("#mktId").prop("disabled",false);
				      $("#lmtId").prop("disabled",false);
				      
			 }
		 if($("input:radio[name='dayId']").is(":checked")) {	
				
				$('#iocId').prop('checked', false);
				$('#gtcId').prop('checked', false);
				$('#gtdId').prop('checked', false);
				$('#gttId').prop('checked', false);
		 }
		 if($("input:radio[name='iocId']").is(":checked")) {	
				
				$('#dayId').prop('checked', false);
				$('#gtcId').prop('checked', false);
				$('#gtdId').prop('checked', false);
				$('#gttId').prop('checked', false);
		 }
		 if($("input:radio[name='gtcId']").is(":checked")) {	
				
				$('#dayId').prop('checked', false);
				$('#iocId').prop('checked', false);
				$('#gtdId').prop('checked', false);
				$('#gttId').prop('checked', false);
		 }
		 if($("input:radio[name='gtdId']").is(":checked")) {	
				
				$('#dayId').prop('checked', false);
				$('#iocId').prop('checked', false);
				$('#gtcId').prop('checked', false);
				$('#gttId').prop('checked', false);
		 }
		 if($("input:radio[name='gttId']").is(":checked")) {	
				
				$('#dayId').prop('checked', false);
				$('#iocId').prop('checked', false);
				$('#gtcId').prop('checked', false);
				$('#gtdId').prop('checked', false);
		 }
		 
	});



	$('#dayId').click(function() {
		 
		 if($("input:radio[name='dayId']").is(":checked")) {	
			
			$('#iocId').prop('checked', false);
			$('#gtcId').prop('checked', false);
			$('#gtdId').prop('checked', false);
			$('#gttId').prop('checked', false);
			
			$("#datepickerId").hide();
			$("#GTTstoplossId").hide();
			$("#GttTargetId").hide();
			$('#stoplessId').hide();		
		 	$('#tarketDivId').hide();
		 	$('#TrailingstopId').hide();
		 	
		 
		 }
		
	});


	$('#iocId').click(function() {
		 
		 if($("input:radio[name='iocId']").is(":checked")) {	
				
			$('#dayId').prop('checked', false);
			$('#gtcId').prop('checked', false);
			$('#gtdId').prop('checked', false);
			$('#gttId').prop('checked', false);
			
			$("#datepickerId").hide();
			$("#GTTstoplossId").hide();
			$("#GttTargetId").hide();
			$('#stoplessId').hide();
		 	$('#tarketDivId').hide();
		 	$('#TrailingstopId').hide();
		 }
		
	});



	$('#gtcId').click(function() {
		 
		 if($("input:radio[name='gtcId']").is(":checked")) {	
				
			$('#dayId').prop('checked', false);
			$('#iocId').prop('checked', false);
			$('#gtdId').prop('checked', false);
			$('#gttId').prop('checked', false);
			
			$("#datepickerId").hide();
			$("#GTTstoplossId").hide();
			$("#GttTargetId").hide();
			$('#stoplessId').hide();
		 	$('#tarketDivId').hide();
		 	$('#TrailingstopId').hide();
		 }
		
	});




	$('#gtdId').click(function() {
		 
		 if($("input:radio[name='gtdId']").is(":checked")) {	
				
			$('#iocId').prop('checked', false);
			$('#dayId').prop('checked', false);
			$('#gtcId').prop('checked', false);
			$('#gttId').prop('checked', false);
			
			
			$("#datepickerId").show();	 //Good till date datpicker enable here...,
					
			$("#GTTstoplossId").hide();
			$("#GttTargetId").hide();
			$('#stoplessId').hide();
		 	$('#tarketDivId').hide();
		 	$('#TrailingstopId').hide();
		 }

	});




	$('#gttId').click(function() {
		 
		 if($("input:radio[name='gttId']").is(":checked")) {	
			
			$('#iocId').prop('checked', false);
			$('#dayId').prop('checked', false);
			$('#gtdId').prop('checked', false);
			$('#gtcId').prop('checked', false);
			
			$("#GTTstoplossId").show();
			$("#GttTargetId").show();
			$("#GTTstoplossValueId").prop("disabled",true);
			$("#GTTstoplossValueId").prop("disabled",true);
			 $("#GTTstoplossValueId").val("0");
			 $("#GttTargetvalueId").val("0");
			
			$("#datepickerId").hide();		
			$('#stoplessId').hide();
		 	$('#tarketDivId').hide();
		 	$('#TrailingstopId').hide();
		 }
	});


		$('#GTTstoplosscheckId').click(function() {
		 if (document.getElementById('GTTstoplosscheckId').checked) {
			$("#GTTstoplossValueId").prop("disabled",false);
			
			}
		 else{
			 $("#GTTstoplossValueId").prop("disabled",true);
			 $("#GTTstoplossValueId").val("0");
		 }
		});
		
		
		
		
		$('#GttTargetcheckId').click(function() {
			 if (document.getElementById('GttTargetcheckId').checked) {
				$("#GttTargetvalueId").prop("disabled",false);
				
				}
			 else{
				 $("#GttTargetvalueId").prop("disabled",true);
				 $("#GttTargetvalueId").val("0");
			 }
			});
		
		
		//============ RepeatBuy/RepeatSell Order Window END==========	


	
	
	//============ Buy/Sell Order Window START==========


	//modal draggable
	$('.modal').modal({ keyboard: false,
	 show: false
	});

	//Jquery draggable
	$('.modal-dialog').draggable({
	handle: ".modal-header"
	});

	//disable draggable (Profile-Segments,ConfirmUpdate)
	$(".disable-drag").draggable({ disabled: true });


	function changeModalContent(event) {
		 event.stopPropagation();
	// event.preventDefault();
	}




	$( "#toggle-btnId" ).click(function() {	
		  var act = $('.toggle-btn').hasClass("active");
		  var buyId = document.getElementById("buyId");
		  var sellId = document.getElementById("sellId");	  
		  if(act){		  
			  buyId.style.display = "none";
			  sellId.style.display = "block";
			  $('.inner-circle').css('marginLeft','30px');
			  document. getElementById('toggle-btnId'). style. backgroundColor = 'Red';
		  }
		  else {
			  buyId.style.display = "block";
			  sellId.style.display = "none";
			  $('.inner-circle').css('marginLeft','0px');
			  document. getElementById('toggle-btnId'). style. backgroundColor = 'green';
		  }	  
		});
		
		 function onclickstocksellbtnToggle(){		
			 var act = $('.toggle-btn').hasClass("active");			
				if(act==true){
					act= true;
					document. getElementById('toggle-btnId'). style. backgroundColor = 'green';
					$('.inner-circle').css('marginLeft','30px');
				}else if(act==false){	
					act= true;
					document. getElementById('toggle-btnId'). style. backgroundColor = 'Red';
					$('.inner-circle').css('marginLeft','30px');				
				}			 
			} 
		 function onclickstockbuybtnToggle(){		
			 var act = $('.toggle-btn').hasClass("active");			
			if(act==true){	
				act= false;
				document. getElementById('toggle-btnId'). style. backgroundColor = 'Red';
					$('.inner-circle').css('marginLeft','0px');				
				} 
			else if(act==false){	
				act= false;
				document. getElementById('toggle-btnId'). style. backgroundColor = 'green';
				$('.inner-circle').css('marginLeft','0px');	
				
			} 
			 
			} 
		

	function stockbuybtnmouseover(id){	
		//alert("id:::"+id);
		//document.getElementById(id+'_mydivId').style.display = 'block';
		document.getElementById(id+'_mydivId').style.visibility='collapse';
		
		//document.getElementById(id+'_stockbuysellfirst').style.display = 'none';
		document.getElementById(id+'_stockbuysellfirst').style.visibility='visible';
	}
	function stockbuybtnmouseout(id){
		//document.getElementById(id+'_mydivId').style.display = 'none';
		document.getElementById(id+'_mydivId').style.visibility='visible';
		//document.getElementById(id+'_stockbuysellfirst').style.display = 'block';
		document.getElementById(id+'_stockbuysellfirst').style.visibility='collapse';
	}
	 
		
		

	//=====buy/Sell Price TickSize =============				   
	var value;
	var mcxTicksize;
	var nseTicksize;
	$('#priceId').on('change',function(){	
		  
		var priceVal=$('#priceId').val();
		var segmentTag=$('#stockhiddval').val();
		
		//===== MCX Segment ======
		if(segmentTag=="MCX"){				    	
		value = document.getElementById("priceId").step =priceVal;				    
		mcxTicksize=$("#mcxticksizehiddval").val();
		/*  if(mcxTicksize=="0.05"){
			 mcxTicksize=mcxTicksize*10;
		 	} */
		document.getElementById("priceId").step =mcxTicksize;
		
	if($(this).val() > value){
		  var upTagvalue=parseInt(value)+parseInt(mcxTicksize);
		  document.getElementById("priceId").value =upTagvalue;	
		  
	}else if($(this).val() < value){
		  var downTagvalue=parseInt(value)-parseInt(mcxTicksize);
		  document.getElementById("priceId").value =downTagvalue;
	}

		}				    	
		//===== NSE Segment ======
		else if(segmentTag=="NSE"){	
		    	value = document.getElementById("priceId").step =priceVal;				    
		      	 nseTicksize=$("#nseticksizehiddval").val();
		      	 
		      	/*  if(nseTicksize=="0.05"){
		      		nseTicksize=nseTicksize*10;
		    	 } */
		     document.getElementById("priceId").step =nseTicksize;	
		     
		     if($(this).val() > value){
		    	  var upTagvalue=parseInt(value)+parseInt(nseTicksize);
		    	  document.getElementById("priceId").value =upTagvalue;	
		    	  
		      }else if($(this).val() < value){
		    	  var downTagvalue=parseInt(value)-parseInt(nseTicksize);
		    	  document.getElementById("priceId").value =downTagvalue;
		      }
		     }				    	
	value = $(this).val();
	});			    
	//==============================




	$('#cncId').click(function() { 
		 if($("input:radio[name='cncId']").is(":checked")) {
				$('#NrmlId').prop('checked', false);
				$('#MisId').prop('checked', false);			
				$('#stoplessId').hide();
			 	$('#tarketDivId').hide();
			 	$('#TrailingstopId').hide();
		 }
	});

	$('#NrmlId').click(function() { 
		 if($("input:radio[name='NrmlId']").is(":checked")) {
				$('#cncId').prop('checked', false);
				$('#MisId').prop('checked', false);
			
				$('#stoplessId').hide();
			 	$('#tarketDivId').hide();
			 	$('#TrailingstopId').hide();
		 }
		 
	});
	$('#MisId').click(function() { 
		 if($("input:radio[name='MisId']").is(":checked")) {
				$('#cncId').prop('checked', false);
				$('#NrmlId').prop('checked', false);
				
				$('#stoplessId').hide();
			 	$('#tarketDivId').hide();
			 	$('#TrailingstopId').hide();
				
				
		 }		
		 
		
	});

	$('#lmtId').click(function() { 
		
		
		if($("input:radio[name='lmtId']").is(":checked")) {
		$('#mktId').prop('checked', false);
		$('#slId').prop('checked', false);
		$('#sl-mId').prop('checked', false);
		
		
		$('#stoplessId').hide();
		$('#tarketDivId').hide();
		$('#TrailingstopId').hide();

	}	


	if($("input:radio[name='RegularOrdId']").is(":checked")) {

		$('#stoplessId').hide();
		$('#tarketDivId').hide();
		$('#TrailingstopId').hide();
		$("#DiscquantityId").prop("disabled",false);
		 
			//LMT
	   $("#TriggerpriceId").prop("disabled",true);
	   $("#TriggerpriceId").val("0");
	   $("#priceId").prop("disabled",false);


	}
	if($("input:radio[name='BracketOrdId']").is(":checked")) {

			
		$('#stoplessId').show();
		$('#tarketDivId').show();
		$('#TrailingstopId').show();
		$("#DiscquantityId").prop("disabled",true);
		$("#DiscquantityId").val("0");
		//LMT
	  $("#TriggerpriceId").prop("disabled",true);
	  $("#TriggerpriceId").val("0");
	  $("#priceId").prop("disabled",false);
	  
		
	}

	if($("input:radio[name='CoverOrdId']").is(":checked")) {	

	$("#DiscquantityId").prop("disabled",true);
	$("#DiscquantityId").val("0");
	$("#priceId").prop("disabled",false);
	$("#priceId").val("0");

	}

	if($("input:radio[name='AfterMarketOrdId']").is(":checked")) {	

	$('#stoplessId').hide();
		$('#tarketDivId').hide();
		$('#TrailingstopId').hide();
		 $("#DiscquantityId").prop("disabled",false);
		 
		//LMT
	$("#TriggerpriceId").prop("disabled",true);
	$("#TriggerpriceId").val("0");
	$("#priceId").prop("disabled",false);

	}

	});



	$('#mktId').click(function() { 

	if($("input:radio[name='mktId']").is(":checked")) {

		$('#lmtId').prop('checked', false);
		$('#slId').prop('checked', false);
		$('#sl-mId').prop('checked', false);
		 $("#DiscquantityId").prop("disabled",false);
		 
		$('#stoplessId').hide();
		$('#tarketDivId').hide();
		$('#TrailingstopId').hide();

	}	

	if($("input:radio[name='RegularOrdId']").is(":checked")) {
	//MKT
	$("#TriggerpriceId").prop("disabled",true);
	$("#TriggerpriceId").val("0");
	$("#priceId").prop("disabled",true);
	$("#priceId").val("0");	  

	$('#stoplessId').hide();
		$('#tarketDivId').hide();
		$('#TrailingstopId').hide();
	}
	if($("input:radio[name='CoverOrdId']").is(":checked")) {	

	$("#DiscquantityId").prop("disabled",true);
	$("#DiscquantityId").val("0");
	$("#priceId").prop("disabled",true);
	$("#priceId").val("0");
	}

	if($("input:radio[name='AfterMarketOrdId']").is(":checked")) {
	//MKT
	$("#TriggerpriceId").prop("disabled",true);
	$("#TriggerpriceId").val("0");
	$("#priceId").prop("disabled",true);
	$("#priceId").val("0");	  

	$('#stoplessId').hide();
		$('#tarketDivId').hide();
		$('#TrailingstopId').hide();
		
	}

	});
	$('#slId').click(function() { 
	if($("input:radio[name='slId']").is(":checked")) {

		$('#lmtId').prop('checked', false);
		$('#mktId').prop('checked', false);
		$('#sl-mId').prop('checked', false);
		
		$('#stoplessId').hide();
		$('#tarketDivId').hide();
		$('#TrailingstopId').hide();

		if($("input:radio[name='RegularOrdId']").is(":checked")) {
			//SL
			  $("#TriggerpriceId").prop("disabled",false);
		      $("#priceId").prop("disabled",false);
//			      $("#priceId").val("0");
		      $("#DiscquantityId").prop("disabled",false);
		      		      
			$('#stoplessId').hide();
		 	$('#tarketDivId').hide();
		 	$('#TrailingstopId').hide();
			
		}
		if($("input:radio[name='BracketOrdId']").is(":checked")) {    //Bracket Order
			 
				 	$('#stoplessId').show();
				 	$('#tarketDivId').show();
				 	$('#TrailingstopId').show();
				 	$('#TargetstoplossquanId').val('0');
				 	$("#DiscquantityId").prop("disabled",true);
				 	$("#DiscquantityId").val("0");
				 //SL
				     $("#TriggerpriceId").prop("disabled",false);
				     $("#TriggerpriceId").val("0");
				     $("#priceId").prop("disabled",false);
				     
			 }
		if($("input:radio[name='AfterMarketOrdId']").is(":checked")) {
			
			//SL
			  $("#TriggerpriceId").prop("disabled",false);
		      $("#priceId").prop("disabled",false);
//			      $("#priceId").val("0");
		      $("#DiscquantityId").prop("disabled",false);
		      
			$('#stoplessId').hide();
		 	$('#tarketDivId').hide();
		 	$('#TrailingstopId').hide();
		}

	}		

	});
	$('#sl-mId').click(function() { 

	if($("input:radio[name='sl-mId']").is(":checked")) {

		$('#lmtId').prop('checked', false);
		$('#mktId').prop('checked', false);
		$('#slId').prop('checked', false);
		
		
		$('#stoplessId').hide();
		$('#tarketDivId').hide();
		$('#TrailingstopId').hide();

	}		
	if($("input:radio[name='RegularOrdId']").is(":checked")) {
		//SL-M
		  $("#TriggerpriceId").prop("disabled",false);
		  $("#TriggerpriceId").val("0");
	$("#priceId").prop("disabled",true);
	$("#priceId").val("0");
	$("#DiscquantityId").prop("disabled",false);
		 $('#stoplessId').hide();
		$('#tarketDivId').hide();
		$('#TrailingstopId').hide();
	}

	if($("input:radio[name='AfterMarketOrdId']").is(":checked")) {
			 
	//SL-M
		  $("#TriggerpriceId").prop("disabled",false);
		  $("#TriggerpriceId").val("0");
	$("#priceId").prop("disabled",true);
	$("#DiscquantityId").prop("disabled",false);
		 $('#stoplessId').hide();
		$('#tarketDivId').hide();
		$('#TrailingstopId').hide();
	}

	});



	$('#RegularOrdId').click(function() {
		
		 if($("input:radio[name='RegularOrdId']").is(":checked")) {	
			 radiolmtId = document.getElementById("lmtId");
			 radiolmtId.checked = true;
				$("#mktId").prop("checked",false);
				$("#slId").prop("checked",false);
				$('#sl-mId').prop('checked', false); 
		}
		 if($("input:radio[name='RegularOrdId']").is(":checked")) {		
			
			$('#BracketOrdId').prop('checked', false);
			$('#CoverOrdId').prop('checked', false);
			$('#AfterMarketOrdId').prop('checked', false);
			
			$("#cncId").prop("disabled",false);			
			$('#NrmlId').prop('disabled',false);
			$("#MisId").prop("disabled",false);
			
			

			
			$("#CoStoplossDivId").hide();
			$("#TriggerPriceDivId").show();
			
			$('#DaylabelId').show();
			$('#IoclabelId').show();
			$('#IoclabelId').show();
			$('#GTClabelId').show();
			$('#GTDlabelId').show();
			$('#GTTlabelId').show();
			
			$('#stoplessId').hide();
		 	$('#tarketDivId').hide();
		 	$('#TrailingstopId').hide();
		 	
		 }
		 var scriptName=$("#stockhiddval").val();
		 if(scriptName==='MCX'){ //MCX
			 	$('#GTTlabelId').hide();
			 	$("#cncId").prop('disabled',true);
			 	$('#cncId').prop('checked', false);
			 	$('#NrmlId').prop('checked', true);
			 	$('#mktId').prop('checked', false);
			 	$('#slId').prop('checked', false);
			 	$('#sl-mId').prop('checked', false);
			 	$('#MisId').prop('checked', false);
			 	
			 	
		 }
		 if(scriptName==='NSE'){ //NSE
			 
			 $('#GTTlabelId').show();
				$('#NrmlId').prop('disabled', true);
				$('#NrmlId').prop('checked', false);
				$('#cncId').prop('checked', true);
				$('#MisId').prop('checked', false);
				
				$('#iocId').prop('checked', false);   	
				$('#gtcId').prop('checked', false);
				$('#gtdlId').prop('checked', false);
				$('#gttId').prop('checked', false);
				$('#dayId').prop("checked",true);
				
		 }
		 if(scriptName==='NFO'){ //F&O
			 	$('#GTTlabelId').hide();
			 	$("#cncId").prop('disabled',true);
			 	$('#cncId').prop('checked', false);
			 	$('#NrmlId').prop('checked', true);
			 	$('#mktId').prop('checked', false);
			 	$('#slId').prop('checked', false);
			 	$('#sl-mId').prop('checked', false);
			 	$('#MisId').prop('checked', false);
			 	
			 	
		 }
		 
		 if($("input:radio[name='lmtId']").is(":checked")) {
			 $("#DiscquantityId").prop("disabled",false);
			 $("#DiscquantityId").val("0");
				//LMT
		      $("#TriggerpriceId").prop("disabled",true);
		      $("#TriggerpriceId").val("0");
		      $("#priceId").prop("disabled",false); 
		      
		      $("#mktId").prop("disabled",false);
		      $("#slId").prop("disabled",false);
		      $("#sl-mId").prop("disabled",false);
			 
		 }
		 if($("input:radio[name='mktId']").is(":checked")) {
			 //MKT
			 $("#TriggerpriceId").prop("disabled",true);
		     $("#TriggerpriceId").val("0");
		     $("#priceId").prop("disabled",true);
		     $("#priceId").val("0");	
		     
		     $("#lmtId").prop("disable",false);
		      $("#slId").prop("disabled",false);
		      $("#sl-mId").prop("disabled",false);
		     
		    	$('#stoplessId').hide();
			 	$('#tarketDivId').hide();
			 	$('#TrailingstopId').hide();
			 }
		 
		 if($("input:radio[name='slId']").is(":checked")) {
			 $("#DiscquantityId").prop("disabled",false);
			 $("#DiscquantityId").val("0");
			   //SL
				  $("#TriggerpriceId").prop("disabled",false);
			      $("#priceId").prop("disabled",false);
			      $("#priceId").val("0");
			      
			      $("#lmtId").prop("disabled",false);
			      $("#mktId").prop("disabled",false);
			      $("#sl-mId").prop("disabled",false);
			      
			      
			      }
		 
		 if($("input:radio[name='sl-mId']").is(":checked")) {
		 		//SL-M
			  	  $("#TriggerpriceId").prop("disabled",false);
			  	  $("#TriggerpriceId").val("0");
			      $("#priceId").prop("disabled",true);
			      $("#priceId").val("0");
			      $("#DiscquantityId").prop("disabled",false);
			     	 $('#stoplessId').hide();
				 	$('#tarketDivId').hide();
				 	$('#TrailingstopId').hide();
				 	
				 	 $("#lmtId").prop("disabled",false);
				      $("#mktId").prop("disabled",false);
				      $("#slId").prop("disabled",false);
				      
			 }
		 
		 if($("input:radio[name='dayId']").is(":checked")) {	
				
				$('#iocId').prop('checked', false);
				$('#gtcId').prop('checked', false);
				$('#gtdId').prop('checked', false);
				$('#gttId').prop('checked', false);
		 }
		 if($("input:radio[name='iocId']").is(":checked")) {	
				
				$('#dayId').prop('checked', false);
				$('#gtcId').prop('checked', false);
				$('#gtdId').prop('checked', false);
				$('#gttId').prop('checked', false);
		 }
		 if($("input:radio[name='gtcId']").is(":checked")) {	
				
				$('#dayId').prop('checked', false);
				$('#iocId').prop('checked', false);
				$('#gtdId').prop('checked', false);
				$('#gttId').prop('checked', false);
		 }
		 if($("input:radio[name='gtdId']").is(":checked")) {	
				
				$('#dayId').prop('checked', false);
				$('#iocId').prop('checked', false);
				$('#gtcId').prop('checked', false);
				$('#gttId').prop('checked', false);
		 }
		 if($("input:radio[name='gttId']").is(":checked")) {	
				
				$('#dayId').prop('checked', false);
				$('#iocId').prop('checked', false);
				$('#gtcId').prop('checked', false);
				$('#gtdId').prop('checked', false);
		 }
		 
		
	});


		 $('#BracketOrdId').click(function() { 
			 if($("input:radio[name='BracketOrdId']").is(":checked")) {	
				 radiolmtId = document.getElementById("lmtId");
				 radiolmtId.checked = true;
				 $('#slId').prop('checked', false);
					}
			 
		 if($("input:radio[name='BracketOrdId']").is(":checked")) {
				$('#RegularOrdId').prop('checked', false);
				$('#CoverOrdId').prop('checked', false);
				$('#AfterMarketOrdId').prop('checked', false);
				
				$("#cncId").prop("disabled",true);				
				$('#NrmlId').prop('disabled', true);
				$("#MisId").prop("disabled",true);
				
				 
				 
				$('#lmtId').prop('disabled', false);
				$("#mktId").prop("disabled",true);	
				$("#mktId").prop("checked",false);	
				$('#slId').prop('disabled', false);
				$('#sl-mId').prop('disabled', true);

				$("#CoStoplossDivId").hide();
				$("#TriggerPriceDivId").show();
				
				
				$('#IoclabelId').hide();   // Validity Checking for BO	
				$('#GTClabelId').hide();
				$('#GTDlabelId').hide();
				$('#GTTlabelId').hide();
				$('#dayId').show();
				$('#dayId').prop("checked",true);
				
				$('#stoplessId').show();
			 	$('#tarketDivId').show();
			 	$('#TrailingstopId').show();
			 	$('#TargetstoplossquanId').val('0');
			 	
			 	$("#datepickerId").hide();
				$("#GTTstoplossId").hide();
				$("#GttTargetId").hide();
		 }
		
		 
		 if($("input:radio[name='lmtId']").is(":checked")) {
			 
			 
			 $("#DiscquantityId").prop("disabled",true);
			 $("#DiscquantityId").val("0");
				//LMT
			     $("#TriggerpriceId").prop("disabled",true);
			     $("#TriggerpriceId").val("0");
			     $("#priceId").prop("disabled",false);
			     
			      $("#mktId").prop("checked",false);
			      $("#sl-mId").prop("checked",false);
		 }
		 if($("input:radio[name='slId']").is(":checked")) {
		 
			 $("#DiscquantityId").prop("disabled",true);
			 	
				  //SL
				     $("#TriggerpriceId").prop("disabled",false);
				     $("#TriggerpriceId").val("0");
				     $("#priceId").prop("disabled",false);
			 			
				     $("#mktId").prop("checked",false);
				      $("#sl-mId").prop("checked",false);
		 }
		 
		 
		 var scriptName=$("#stockhiddval").val();
		 
		 if(scriptName==='MCX'){ 			//MCX
			 
			 $('#GTTlabelId').hide();
			
			 if($("input:radio[name='BracketOrdId']").is(":checked")) {
					$('#IoclabelId').hide();   // Validity Checking for BO	
					$('#GTClabelId').hide();
					$('#GTDlabelId').hide();
					$('#GTTlabelId').hide();
					$('#dayId').show();
					$('#dayId').prop("checked",true);
					
					
					
					
				}
		 }
		 if(scriptName==='NSE'){ 				//NSE
			
			 
			 $('#GTTlabelId').show();
				
		 }
		 
	});
		 
		 
	$('#CoverOrdId').click(function() {
			 
		 if($("input:radio[name='CoverOrdId']").is(":checked")) {	
			 radiolmtId = document.getElementById("lmtId");
			 radiolmtId.checked = true;
			 $("#mktId").prop("checked",false);
				}
		 
			 if($("input:radio[name='CoverOrdId']").is(":checked")) {
				$('#RegularOrdId').prop('checked', false);
				$('#BracketOrdId').prop('checked', false);
				$('#AfterMarketOrdId').prop('checked', false);
				$("#DiscquantityId").prop("disabled",false);
				$("#DiscquantityId").val("0");
				
				$("#CoStoplossDivId").show();
				$("#TriggerPriceDivId").hide();
				$("#DiscquantityId").prop("disabled",true);
				$('#stoplessId').hide();
			 	$('#TrailingstopId').hide();
			 	$('#tarketDivId').hide();
				
				$("#cncId").prop("disabled",true);				
				$('#NrmlId').prop('disabled', true);
				$("#MisId").prop("disabled",true);
				
				$("#lmtId").prop("disabled",false);
				$("#mktId").prop("disabled",false);
				$("#slId").prop("disabled",true);			
				$('#sl-mId').prop('disabled', true);
				$("#slId").prop("checked",false);
				$('#sl-mId').prop('checked', false);
				 			
				$('#IoclabelId').hide();  // Validity Checking for BO
				$('#GTClabelId').hide();
				$('#GTDlabelId').hide();
				$('#GTTlabelId').hide();
				$('#DaylabelId').show();
				$('#dayId').prop("checked",true);
				
				
				$("#datepickerId").hide();
				$("#GTTstoplossId").hide();
				$("#GttTargetId").hide();
			 }
			 
			 if($("input:radio[name='lmtId']").is(":checked")) {
				 $("#DiscquantityId").prop("disabled",false);
				 $("#DiscquantityId").val("0");
					//LMT
			      $("#TriggerpriceId").prop("disabled",true);
			      $("#TriggerpriceId").val("0");
			      $("#priceId").prop("disabled",false); 
			      
			      $("#slId").prop("checked",false);
			      $("#sl-mId").prop("checked",false);
				 
			 }
			 if($("input:radio[name='mktId']").is(":checked")) {
				 $("#DiscquantityId").prop("disabled",false);
				 $("#DiscquantityId").val("0");
				   //SL
					  $("#TriggerpriceId").prop("disabled",false);
				      $("#priceId").prop("disabled",false);
				      $("#priceId").val("0"); 
				      $("#slId").prop("checked",false);
				      $("#sl-mId").prop("checked",false);
			 
		}
			 var scriptName=$("#stockhiddval").val();
			 if(scriptName==='MCX'){ //MCX
				 
				 $('#GTTlabelId').hide();
				 
				 if($("input:radio[name='CoverOrdId']").is(":checked")) {
						$('#IoclabelId').hide();   // Validity Checking for BO	
						$('#GTClabelId').hide();
						$('#GTDlabelId').hide();
						$('#GTTlabelId').hide();
						$('#dayId').show();
						$('#dayId').prop("checked",true);
					}
			 }
			 if(scriptName==='NSE'){ //NSE
				
				 $('#GTTlabelId').show();
					
			 }
			 
			
		});



		 
	$('#AfterMarketOrdId').click(function() {
		 
		 if($("input:radio[name='AfterMarketOrdId']").is(":checked")) {
			 radiolmtId = document.getElementById("lmtId");
			 radiolmtId.checked = true;
				$("#mktId").prop("checked",false);
				$("#slId").prop("checked",false);
				$('#sl-mId').prop('checked', false); 
			
				}
		 
		 if($("input:radio[name='AfterMarketOrdId']").is(":checked")) {
			 
			$('#RegularOrdId').prop('checked', false);
			$('#BracketOrdId').prop('checked', false);
			$('#CoverOrdId').prop('checked', false);
			$("#DiscquantityId").prop("disabled",false);
			
			$("#cncId").prop("disabled",false);			
			$('#NrmlId').prop('disabled', false);
			$("#MisId").prop("disabled",false);
			
			
			$("#mktId").prop("disabled",false);
			$("#slId").prop("disabled",false);
			$('#sl-mId').prop('disabled', false); 
			
			$("#CoStoplossDivId").hide();
			$("#TriggerPriceDivId").show();
			$("#DiscquantityId").prop("disabled",false);
			$("#DiscquantityId").val(0);
			
			$('#stoplessId').hide();
		 	$('#tarketDivId').hide();
		 	$('#TrailingstopId').hide();
		 	
		 				
			$('#IoclabelId').show();  // Validity Checking for BO
			$('#GTClabelId').show();
			$('#GTDlabelId').show();
			$('#GTTlabelId').show();
		 }
		 
		 var scriptName=$("#stockhiddval").val();
		 
		 if(scriptName==='MCX'){ //MCX
			 	$('#GTTlabelId').hide();
			 	$("#cncId").prop('disabled',true);
			 	$('#cncId').prop('checked', false);
			 	radioNrmlId = document.getElementById("NrmlId");
			 	radioNrmlId.checked = true;
			 	
			 	$('#NrmlId').prop('checked', true);
			 	$('#MisId').prop('checked', false);

		 }
		 if(scriptName==='NSE'){ //NSE
			 
			 $('#GTTlabelId').show();
				$('#NrmlId').prop('disabled', true);
				$('#NrmlId').prop('checked', false);
				$('#cncId').prop('checked', true);
				radiocncId = document.getElementById("cncId");
				radiocncId.checked = true;
			 	
				$('#MisId').prop('checked', false);
				
				$('#iocId').prop('checked', false);   	
				$('#gtcId').prop('checked', false);
				$('#gtdlId').prop('checked', false);
				$('#gttId').prop('checked', false);
				$('#dayId').prop("checked",true);
		 }

		 if(scriptName==='NFO'){ //F&O
			 	$('#GTTlabelId').hide();
			 	$("#cncId").prop('disabled',true);
			 	$('#cncId').prop('checked', false);
			 	$('#NrmlId').prop('checked', true);
			 	$('#mktId').prop('checked', false);
			 	$('#slId').prop('checked', false);
			 	$('#sl-mId').prop('checked', false);
			 	$('#MisId').prop('checked', false);
			 	
			 	
		 }
		
		 if($("input:radio[name='lmtId']").is(":checked")) {
			 $("#DiscquantityId").prop("disabled",false);
			 $("#DiscquantityId").val("0");
				//LMT
		      $("#TriggerpriceId").prop("disabled",true);
		      $("#TriggerpriceId").val("0");
		      $("#priceId").prop("disabled",false); 
		      
		      $("#slId").prop("checked",false);
		      $("#mktId").prop("disabled",false);
		      $("#sl-mId").prop("disabled",false);
		      
			 
		 }
		 if($("input:radio[name='mktId']").is(":checked")) {
			 //MKT
			 $("#TriggerpriceId").prop("disabled",true);
		     $("#TriggerpriceId").val("0");
		     $("#priceId").prop("disabled",true);
		     $("#priceId").val("0");	  
		     
		    	$('#stoplessId').hide();
			 	$('#tarketDivId').hide();
			 	$('#TrailingstopId').hide();
			 	
			 	$("#slId").prop("checked",false);
			      $("#lmtId").prop("disabled",false);
			      $("#sl-mId").prop("disabled",false);
			      
			 }
		 
		 if($("input:radio[name='slId']").is(":checked")) {
			 $("#DiscquantityId").prop("disabled",false);
			 $("#DiscquantityId").val("0");
			   //SL
				  $("#TriggerpriceId").prop("disabled",false);
			      $("#priceId").prop("disabled",false);
			      $("#priceId").val("0");    
		 
			      $("#lmtId").prop("checked",false);
			      $("#mktId").prop("disabled",false);
			      $("#sl-mId").prop("disabled",false);
			      
				}
		 if($("input:radio[name='sl-mId']").is(":checked")) {
		 		//SL-M
			  	  $("#TriggerpriceId").prop("disabled",false);
			  	  $("#TriggerpriceId").val("0");
			      $("#priceId").prop("disabled",true);
			      $("#priceId").val("0");
			      $("#DiscquantityId").prop("disabled",false);
			     	 $('#stoplessId').hide();
				 	$('#tarketDivId').hide();
				 	$('#TrailingstopId').hide();
				 	
				 	$("#slId").prop("checked",false);
				      $("#mktId").prop("disabled",false);
				      $("#lmtId").prop("disabled",false);
				      
			 }
		 if($("input:radio[name='dayId']").is(":checked")) {	
				
				$('#iocId').prop('checked', false);
				$('#gtcId').prop('checked', false);
				$('#gtdId').prop('checked', false);
				$('#gttId').prop('checked', false);
		 }
		 if($("input:radio[name='iocId']").is(":checked")) {	
				
				$('#dayId').prop('checked', false);
				$('#gtcId').prop('checked', false);
				$('#gtdId').prop('checked', false);
				$('#gttId').prop('checked', false);
		 }
		 if($("input:radio[name='gtcId']").is(":checked")) {	
				
				$('#dayId').prop('checked', false);
				$('#iocId').prop('checked', false);
				$('#gtdId').prop('checked', false);
				$('#gttId').prop('checked', false);
		 }
		 if($("input:radio[name='gtdId']").is(":checked")) {	
				
				$('#dayId').prop('checked', false);
				$('#iocId').prop('checked', false);
				$('#gtcId').prop('checked', false);
				$('#gttId').prop('checked', false);
		 }
		 if($("input:radio[name='gttId']").is(":checked")) {	
				
				$('#dayId').prop('checked', false);
				$('#iocId').prop('checked', false);
				$('#gtcId').prop('checked', false);
				$('#gtdId').prop('checked', false);
		 }
		 
	});



	$('#dayId').click(function() {
		 
		 if($("input:radio[name='dayId']").is(":checked")) {	
			
			$('#iocId').prop('checked', false);
			$('#gtcId').prop('checked', false);
			$('#gtdId').prop('checked', false);
			$('#gttId').prop('checked', false);
			
			$("#datepickerId").hide();
			$("#GTTstoplossId").hide();
			$("#GttTargetId").hide();
			$('#stoplessId').hide();		
		 	$('#tarketDivId').hide();
		 	$('#TrailingstopId').hide();
		 	
		 
		 }
		
	});


	$('#iocId').click(function() {
		 
		 if($("input:radio[name='iocId']").is(":checked")) {	
				
			$('#dayId').prop('checked', false);
			$('#gtcId').prop('checked', false);
			$('#gtdId').prop('checked', false);
			$('#gttId').prop('checked', false);
			
			$("#datepickerId").hide();
			$("#GTTstoplossId").hide();
			$("#GttTargetId").hide();
			$('#stoplessId').hide();
		 	$('#tarketDivId').hide();
		 	$('#TrailingstopId').hide();
		 }
		
	});



	$('#gtcId').click(function() {
		 
		 if($("input:radio[name='gtcId']").is(":checked")) {	
				
			$('#dayId').prop('checked', false);
			$('#iocId').prop('checked', false);
			$('#gtdId').prop('checked', false);
			$('#gttId').prop('checked', false);
			
			$("#datepickerId").hide();
			$("#GTTstoplossId").hide();
			$("#GttTargetId").hide();
			$('#stoplessId').hide();
		 	$('#tarketDivId').hide();
		 	$('#TrailingstopId').hide();
		 }
		
	});




	$('#gtdId').click(function() {
		 
		 if($("input:radio[name='gtdId']").is(":checked")) {	
				
			$('#iocId').prop('checked', false);
			$('#dayId').prop('checked', false);
			$('#gtcId').prop('checked', false);
			$('#gttId').prop('checked', false);
			
			
			$("#datepickerId").show();	 //Good till date datpicker enable here...,
					
			$("#GTTstoplossId").hide();
			$("#GttTargetId").hide();
			$('#stoplessId').hide();
		 	$('#tarketDivId').hide();
		 	$('#TrailingstopId').hide();
		 }

	});




	$('#gttId').click(function() {
		 
		 if($("input:radio[name='gttId']").is(":checked")) {	
			
			$('#iocId').prop('checked', false);
			$('#dayId').prop('checked', false);
			$('#gtdId').prop('checked', false);
			$('#gtcId').prop('checked', false);
			
			$("#GTTstoplossId").show();
			$("#GttTargetId").show();
			$("#GTTstoplossValueId").prop("disabled",true);
			$("#GTTstoplossValueId").prop("disabled",true);
			 $("#GTTstoplossValueId").val("0");
			 $("#GttTargetvalueId").val("0");
			
			$("#datepickerId").hide();		
			$('#stoplessId').hide();
		 	$('#tarketDivId').hide();
		 	$('#TrailingstopId').hide();
		 }
	});


		$('#GTTstoplosscheckId').click(function() {
		 if (document.getElementById('GTTstoplosscheckId').checked) {
			$("#GTTstoplossValueId").prop("disabled",false);
			
			}
		 else{
			 $("#GTTstoplossValueId").prop("disabled",true);
			 $("#GTTstoplossValueId").val("0");
		 }
		});
		
		
		
		
		$('#GttTargetcheckId').click(function() {
			 if (document.getElementById('GttTargetcheckId').checked) {
				$("#GttTargetvalueId").prop("disabled",false);
				
				}
			 else{
				 $("#GttTargetvalueId").prop("disabled",true);
				 $("#GttTargetvalueId").val("0");
			 }
			});
		
		
		//============ Buy/Sell Order Window END==========	


	
	
	
		
		function settleIdFun(){
		
			 $.ajax({
					type :'POST',
					url :'getsettleId',
				//    data :'',
					dataType: 'json',
					success:function(response){
						alert("response::"+response);
						//getscriptrefresh();

					},
					error:function(){
					//alert("getsettle Error");
						
					
					}	
				});
			
		}
		
		
		
		function nonPOAFun(){
			
			 $.ajax({
					type :'POST',
					url :'nonPOAHoldingDatafromDB',
				//    data :"Token=" +symbol,
					dataType: 'json',
					success:function(jsonObject){
					//	alert("response:: "+jsonObject);
						//var holdingdata =JSON.parse(response);
						
						 var body;
						 var holdingdata=jsonObject.list;
						 
						 body=body+"<tr>";
						 body=body+"<td><input type='checkbox' id='checkboxall' onclick='selectAll(this);' class='checkBoxClass' /></td>";
						 body=body+"<td><label>Select All</label></td>";
						 body=body+"</tr>";
						  for (var i = 0; i < holdingdata.length; i++) {
			    		
							 
			    			var account_code=holdingdata[i].accountid;
			    		 	var symbol=holdingdata[i].symbol;
			    			var series=holdingdata[i].series;
			    			var quantity=holdingdata[i].quantity;
			    			
			    			 var symboldata=JSON.stringify(symbol+" "+series);
			    			 var symbols=JSON.stringify(symbol);
			    			 var qty=JSON.stringify(quantity);
			    			 
						     		var checkboxval=JSON.stringify(symbol+"|"+series+"|"+quantity);
						     		
						     		 allSymbolArray.push(symbol+"|"+series+"|"+quantity);
						     		
			    		//	 id='"+holdingdata[i].symbol+"_checkbox'
			    			 body=body+"<tr>";			    			 
			    			 body=body+"<td><input  type='checkbox' class='checkBoxClass' name='"+holdingdata[i].symbol+"_checkbox' id='"+holdingdata[i].symbol+"_checkbox' onclick='selectMultipleRecord("+checkboxval+")'  /></td>";
				        	
			    			 
			    			 
			    			 body=body+"<td style='margin-left:10px;'>" + symbol + " - " +series+ "</td>";
				        	 body=body+"<td style='margin-left:400px;'>" + quantity + "</td>";
				        	
					         body=body+"</tr>";
					         
					      
					         $('#nonPOAbodyId').html(body);
					      
						 }

					},
					error:function(){
					alert("getsettle Error");
						
					
					}	
				});	
		}
		
		function selectAll(source) {
			
			 var checkboxes = document.querySelectorAll('input[type="checkbox"]');
		    for (var i = 0; i < checkboxes.length; i++) {
		        if (checkboxes[i] != source)
		            checkboxes[i].checked = source.checked;
		    } 
			
			    for (var i = 0; i < allSymbolArray.length; i++) {
			    	
			            var symbolval=allSymbolArray[i].toString().split("|");
			            
			            var symboldata=symbolval[0].toString()+"|"+symbolval[1].toString()+"|"+symbolval[2].toString();
						
			            symbolArray.push(symboldata);
			    }
		}
		
		
		
		function selectMultipleRecord(checkboxval){
			
          var checkedValue = $('.checkBoxClass:checked').val(); 
          symbolArray.push(checkboxval);
				 	
						 
		}
		
		function finalSelectedCheckbox(){
			
			  $("#confirmauthoriseModalId").modal('show');
			for(var j=0; j<symbolArray.length; j++){
				
			var symbols =	symbolArray[j].toString().split("|");
				
			//	alert("symbols 1: "+symbols[0].toString());
			//	alert("symbols 2: "+symbols[1].toString());
			//	alert("symbols 3: "+symbols[2].toString());
			var symboldata=symbols[0].toString()+" "+symbols[1].toString();
			
			var qty=symbols[2].toString();
			
			alert("symboldata::"+symboldata);
			
			 $.ajax({
				type :'POST',
				url :'getISINNumber',
			    data :"Symbol=" +symboldata+"&Qty="+qty,
				dataType: 'json',
				success:function(jsonObject){
					// var jsonObject =JSON.parse(response);
					
					var qtyval=jsonObject.qty;
					var Isinval=jsonObject.isin;
					var trancationid=jsonObject.transactionid;
					
				var count = Object.values(jsonObject);
	
				var countVal=count[1];
				
				var jsonObjectVal =JSON.parse(countVal);
					 
					 for (var i = 0; i <jsonObjectVal.length; i++) {
						 
						 if(jsonObjectVal[i].properties.nseToken !=null){
							 
							 var nseISINNo=jsonObjectVal[i].properties.nseISINNo;
							 
							 alert("nseISINNo:::"+nseISINNo+"qty::"+qtyval+"trancationid::"+trancationid);
							 
							 var cdsldata=nseISINNo+"|"+qtyval+"|"+trancationid;

							 continueToCDSLArray.push(cdsldata);

						 }
					 }
				},
				error:function(){
				alert("getsettle Error");
					
				
				}	
			}); 

	 			}
	 		
		}
		
		
		function continuetocdsl(){
			
			var boidId=document.getElementById("boidhiddenId").value;
			var settleId=document.getElementById("settlehiddenId").value;
			
			alert("boidId::"+boidId+"settleId::"+settleId);
			
			var isinNumber;
			var qtyval;
			var trancationid;
			
			var trancationdata;
			
			"<input type='hidden' id='trancationdata' name='trancationdata' />"
			for(var j=0; j<continueToCDSLArray.length; j++){
				
			var cdsldata =	continueToCDSLArray[j].toString().split("|");
				
				alert("cdsldata 1: "+cdsldata[0].toString());
				alert("cdsldata 2: "+cdsldata[1].toString());
				alert("cdsldata  3: "+cdsldata[2].toString());
				
			isinNumber=cdsldata[0].toString();
			qtyval=cdsldata[1].toString();
			trancationid=cdsldata[2].toString();
			
			trancationdata=trancationid+"|"+isinNumber+"|"+qtyval;
			
			//$("#trancationdata").html(trancationdata);
			
		//	document.getElementById('trancationdata').value += trancationdata;

			
			}
			
		//	var dataVal=document.getElementById("trancationdata").value;
		
	//	var $dataVal=$("#trancationdata").html();
			
		//	alert("dataVal:::"+dataVal);
			
			 $.ajax({
					type :'POST',
					url :'getContinueToCDSL',
				    data :"BOID=" +boidId+"&SettlementId="+settleId+"&TranactionId="+trancationid+"&IsinNumber="+isinNumber+"&Quantity="+qtyval,
					dataType: 'json',
					success:function(jsonObject){
						// var jsonObject =JSON.parse(response);
						
			alert("okk");
					
					
					},
					error:function(){
					alert("getcontinue cdsl Error");
						
					
					}	
				}); 
			 
		//	}
		}
		


</script>

</body>


<!-- Mirrored from crypo.netlify.app/exchange-light.html by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 08 Sep 2020 15:18:07 GMT -->
</html>