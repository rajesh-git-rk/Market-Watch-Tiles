
<html>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>

<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
<link href="./resourcefiles/css/Orderbook-style.css" rel="stylesheet"
	type="text/css">

	<link href="http://netdna.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" rel="stylesheet" type="text/css">
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<script src="jquery.js" type="text/javascript"></script>
<script src="jquery.ui.draggable.js" type="text/javascript"></script>
<script src="jquery.alerts.js" type="text/javascript"></script>
<link href="jquery.alerts.css" rel="stylesheet" type="text/css" media="screen" />

		<!-- Bootstrap Modal -->
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
		
		
		<style>
		
		
		body {
    font-family:Arial, Helvetica, sans-serif;
}
 
p {
    font-size: 16px;
    line-height: 26px;
    letter-spacing: 0.5px;
    color: #484848;
}
 
/* Popup Open button */ 
.open-button{
    color:#FFF;
    background:#0066CC;
    padding:10px;
    text-decoration:none;
    border:1px solid #0157ad;
    border-radius:3px;
}
 
.open-button:hover{
    background:#01478e;
}
 
.popup {
    position:fixed;
    top:0px;
    left:0px;
    background:rgba(0,0,0,0.75);
    width:100%;
    height:100%;
    display:none;
}
		 


.Sortingbtn {
  border: 1px solid lightcyan;
  background-color: lightblue;
  color: black;
  width:43.556%;
  height:10%;
  padding: 5px 5px 5px 5px;
  cursor: pointer;
  font-size: 12px;
font-family: "Helvetica Neue",sans-serif;	
font-weight: normal;
  
</style>
		
		
<script type="text/javascript">
	var tokenArray = new Array();
	var tokenId;
	
	var client;

	// var mqttHost = '127.0.0.1';
	var mqttHost = '192.168.1.179';

	
	
	
</script>

<script src="./resourcefiles/AccessJs/OrderbookJS.js"></script>
<script src="./resourcefiles/AccessJs/PintickerJS.js"></script>
<script src="./resourcefiles/AccessJs/OptionChainJS.js"></script>
<script src="./resourcefiles/AccessJs/ScriptSortSettingJS.js"></script>
</head>
<body>

	<div style="border-right-style: ridge; border-left-style: ridge; margin-left: 1px; margin-top: -25px; border-color: #e3e6f0; border-width: thin"
		class="row sidebar sidebar-dark accordion">
		<div class="col-md-14" style="margin-top: 9px; margin-left: -10px;"> 

			<div class="input-group">
				<input type="text" id="search" autocomplete="off"
					style="width: 330px; border-style: outset; text-transform: uppercase; font-size: 11px; font-weight: bold; background-color: #F5F8FD !important"
					class="form-control bg-light border-0 small"
					placeholder="Search..." aria-label="Search"
					aria-describedby="basic-addon2">
					<span style="cursor: pointer; margin-top: 7px; display: none;"
						id="searchcloseId" onclick="closefun()"><i class="fa fa-remove" style="font-size:20px"></i></span>
				<div class="input-group-append">
				
					 <button id="searchiconId" class="btn btn-primary" type="button">
						<i class="fas fa-search fa-sm"></i>
					 </button> 
					

				</div>
			</div>
			
			<ul class="nav nav-pills" id="" role="tablist">
            <li class="nav-item">
              <a class="btn swd-button active" data-toggle="pill" href="#BTC" id="allId" onclick="allfun()" role="tab" aria-selected="true">All</a>
            </li>
            <li class="nav-item">
              <a class="btn swd-button" data-toggle="pill" href="#ETH" role="tab" id="eqtyId" onclick="eqtyfun()" aria-selected="false">EQ</a>
            </li>
            <li class="nav-item">
              <a class="btn swd-button" data-toggle="pill" href="#NEO" role="tab" id="nfoId" onclick="nfofun()" aria-selected="false">F&O</a>
            </li>
            <li class="nav-item">
              <a class="btn swd-button" data-toggle="pill" href="#USDT" role="tab" id="commodityId" onclick="commodityfun()" aria-selected="false">Commodity</a>             
            </li>
            <li class="nav-item">
              <a class="btn swd-button" data-toggle="pill" href="#USDT" role="tab" id="currencyId" onclick="currencyfun()" aria-selected="false">Currency</a>             
            </li>
         <li class="nav-item">
<!-- 			 <i class="fas fa-sort-amount-down-alt"></i> -->
			 	<input type="hidden" id="SortingbyfieldhiddenvalueId" name="SortingbyfieldhiddenvalueId">
                <input type="hidden" id="SortingbyOrderhiddenvalueId" name="SortingbyOrderhiddenvalueId">	
			 <i class=" fas fa-sort-amount-down-alt"  id="SortSettingId" style="margin-left:40px;margin-top:10px;font-size:20px;color:blue;" onclick="ShowModalScritSetting(SortingbyfieldhiddenvalueId,SortingbyOrderhiddenvalueId);" style="" data-toggle="modal"  data-target="#myModalScriptSetting" ></i>             
			 
<%-- 				<input type="image" src="${pageContext.request.contextPath}/resourcefiles/image/Sort_Setting.png" style=" width:5%;margin-left: 90%;" id="SortSettingId" onclick="ShowModalScritSetting(SortingbyfieldhiddenvalueId,SortingbyOrderhiddenvalueId);" data-toggle="modal"  data-target="#myModalScriptSetting"  alt="Button A"> --%>
			</li>	
          </ul>
			
			<div id="SearchdivbodyId"
			style="padding-left: 24px; margin-top: 0px; cursor: pointer; font-size: 11px; font-weight: bold;"></div>
		<div id="EqtySearchdivbodyId" style="display: none;"></div>
		<div id="NfoSearchdivbodyId" style="display: none;"></div>
		<div id="CommoditySearchdivbodyId" style="display: none;"></div>
		<div id="CurrenySearchdivbodyId" style="display: none;"></div> 
			
			<div id="scriptlisthiddId">
			<div class="tab-pane fade show active" id="scriptbodylistId"
				role="tabpanel">
				<table class="table-responsive" id="Grid">
					<tbody id="refreshscriptId" style="background-color:#F5F8FD" onclick="getscriptrefresh()">
						

						<tr id="addscriptId"></tr>

					</tbody>
					
				</table>
			</div>
		</div>
        
		</div>

    
    
 <script type="text/javascript">
	
	//$(document).click(function(){
		//$("#myModalScriptSetting").hide();
 		//$("#myModalMoreOption").hide();
		 
 	//	});
	
	/* $('#myModalMoreOption').click(function(event){
		  event.stopPropagation();
		  $('#myModalMoreOption').hide();
		}); */
	
	/* $(window).click(function() {
		$('#myModalMoreOption').hide();

		  //Hide the menus if visible
		}); */
		
		//$('#myModalMoreOption').modal({backdrop: 'static', keyboard: true})
	/* $('myModalMoreOption').click(function(event){
    $(event.target).modal('hide'); */
// });	
	
		
// 		$('#myModalMoreOption').modal({   show:true,    backdrop:true,    keyboard:true })
		/* $(function() {
		    $("#myModalMoreOption").mousedown(function (evt) {
		        evt.stopImmediatePropagation();
		        return false;
		    });        
		   // $("#myModalMoreOption").selectable();
		}); */
	
		
	/* 	$(window).on('load',function(){
		    $("#myModalMoreOption").modal({
		        backdrop: 'static',
		        keyboard: false,
		        show: true // added property here
		    });
		}); */
		
		
</script> 
	
	
   




<style>

/* .modal-backdrop {
   display: none !important;
} */
/* .modal{
background-color:rgba(0,0,0,0);
} */
</style>
    
<!--    MoreOption(PinTikcer,Chart  ) START-->
   <!-- Modal -->
<!--   <div   class="modal fade background-clickable " id="myModalMoreOption"> -->
<div class="modal fade" id="myModalMoreOption" role="dialog" tabindex="-1"  data-keyboard="false" data-backdrop="false">
<!--   <div   class="modal fade " id="myModalMoreOption" role="dialog" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"  data-keyboard="false" data-backdrop="false"> -->
<!-- <div class="modal fade modal-backdrop" id="myModalMoreOption" role="dialog" data-keyboard="false" data-backdrop="non-static"> -->

  <div class="modal-dialog modal-sm" style= "width:12%;height:15%;position:fixed; left:50%;top:30%;right:auto;left:12%;bottom:0;">
  
    <div class="modal-content">
      <div class="modal-header" style="background:white;padding:5px;">
 <label class="fonts_14" style="color:blue;">More Option</label>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body"  style="background:white;">
<br>  
 <input type="hidden" id="scripthiddenId" name="scripthiddenId" >
   		<input type="hidden" id="tokenhiddenId" name="tokenhiddenId" >
   		<input type="hidden" id="PintickerbtnIdOnehiddenvalueId" name="PintickerbtnIdOnehiddenvalueId" >
   		<input type="hidden" id="PintickerbtnIdtwohiddenvalueId" name="PintickerbtnIdtwohiddenvalueId" >
<div style="padding-top:-10px;">
           <i class="fas fa-paperclip swd-button"  style="margin-top:4%;" aria-hidden="true"></i>
       <label class="swd-button fonts_14" style="margin-left:5px;padding-left: 10%;" >Pin</label> 
       <button type="button"  style="margin-left:25px;width:15%;height:35%;" class= "Sortingbtn btn swd-button fonts_1"   id='PintickerPagebuttonIdOne' name='PintickerPagebuttonIdOne'  onclick='pinTickerfunOne(scripthiddenId,tokenhiddenId)' value="1" >1</button>
      <button type="button" style="width:15%;height:35%;"  class= "Sortingbtn btn swd-button fonts_1"   id='PintickerPagebuttonIdTwo' name='PintickerPagebuttonIdTwo'  onclick='pinTickerfunTwo(scripthiddenId,tokenhiddenId)'  value="2"  >2</button>
        <br>  <br>   <i class="fa fa-bell " ></i>     <label style="padding-left: 10%;" class="fonts_14">Set alert</label>
            </div>
          </div>
	  </div>
	</div>
	</div>
<!--    MoreOption(PinTikcer,SetAlert ) END-->




<!--    ScriptSort_Setting Modal START-->

<div   class="modal fade " id="myModalScriptSetting" role="dialog" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"  data-keyboard="false" data-backdrop="false">

<!-- <div class="modal" id="myModalScriptSetting"  tabindex="-1" role="dialog" aria-hidden="true"  data-keyboard="false" data-backdrop="false"> -->
  <div class="modal-dialog modal-sm" style= "width:17%;height:25%;position:fixed;top:20%;right:auto;left:12%;bottom:0;">
<!--   background:#e0ffff -->
    <div class="modal-content">
      <div class="modal-header" style="background:white;border-bottom: 1px solid lightblue;padding:5px;">
      <label class="fonts_14 " style="color:blue;"> Sort By</label>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body" style="background:white;">
    	<input type="hidden" id="SortingbyfieldModalhiddenvalueId" name="SortingbyfieldModalhiddenvalueId" >
   		    <input type="hidden" id="SortingbyOrderModalhiddenvalueId" name="SortingbyOrderModalhiddenvalueId" >
           <div>
           
<!--            <i class="fa fa-sort-alpha-asc" aria-hidden="true"></i> -->
        <i class=" Sortingbtn swd-button  fa fa-sort-alpha-desc "  style="margin-left: 4%;display:none;" onclick="SortingOrderfunctionAZ();"  id="AZSortdescId" >&nbsp; Symbol</i>             
         <i class=" Sortingbtn swd-button  fa fa-sort-alpha-asc "  style="margin-left: 4%;display:none;" onclick="SortingOrderfunctionAZ();"  id="AZSortascId" >&nbsp;Symbol</i>             
          <i class=" Sortingbtn swd-button  fa fa-sort-alpha-desc"  style="margin-left: 4%;display:none;" onclick="SortingOrderfunctionExchange();"  id="EXCSortdescId" >&nbsp;Exchange</i>             
          <i class=" Sortingbtn swd-button  fa fa-sort-alpha-asc "  style="margin-left: 4%;display:none;" onclick="SortingOrderfunctionExchange();"  id="EXCSortascId" >&nbsp;Exchange</i>             
                
<!--                   <button type="button"  style= "margin-left: 4%;display:none;"  class= "fonts_1 Sortingbtn swd-button  fa fa-sort-alpha-desc "  onclick="SortingOrderfunctionAZ();"  id="AZSortdescId" >Symbol</button> -->

<!--                   <button type="button"  style= "margin-left: 4%;display:none;"  class= "fonts_12 Sortingbtn swd-button  fa fa-sort-alpha-asc "  onclick="SortingOrderfunctionAZ();"  id="AZSortascId" >Symbol</button> -->
<!--                   <button type="button"  style= "margin-left: 0%;" class= "fonts_12 Sortingbtn  swd-button fa fa-sort-alpha-desc" onclick="SortingOrderfunctionExchange()"  id="EXCSortdescId" >Exchange</button> -->
<!--                  <button type="button"  style= "margin-left: 0%;" class= "fonts_12 Sortingbtn  swd-button fa fa-sort-alpha-asc" onclick="SortingOrderfunctionExchange()"  id="EXCSortascId" >Exchange</button> -->
                  
     </div>
      <div>
               <br>   
                <button type="button"  style= "margin-left: 4%;" class= "Sortingbtn  swd-button" onclick="SortingOrderfunctionLTP()" id="LTPSortId"> LTP</button>
                <button type="button" style= "margin-left: 4%;" class= "Sortingbtn   swd-button" onclick="SortingOrderfunctionPercentage()" id="PercentageSortId" >% </button>
              </div>   
      </div>
    </div>
  </div>
</div>
<!--    ScriptSort_Setting Modal START-->



</div>	






	
	
<script type="text/javascript">

function loadChart() {
	
	$.ajax({ 
		type :'GET',
		url :'chartIQ',
		dataType: 'html',
		success:function(response){
			// alert("response::"+response);
			 
			 //var jsonObject =JSON.parse(response);
			
			 $("#body-right").html(response);
	         
		},
		error:function(){
			//alert("NotificationAlert Error");
		
		}	
	});
}


function getscriptrefresh(){
	
	$.ajax({
		type :'GET',
		url :'getMarketScript',
		//data :"nestOrd=" +nestordernumber,
		dataType: 'json',
		success:function(response){
			
			  var body;
			for (var i = 0; i <response.length; i++) {

				var scriptName=JSON.stringify(response[i].scriptName);
				var price=JSON.stringify(response[i].price);
				var exchange=JSON.stringify(response[i].exchange);
				var token=JSON.stringify(response[i].token);
				var displayname=JSON.stringify(response[i].displayname);
				var mcxTickSize=JSON.stringify(response[i].mcxTickSize);
				var mcxOriginalExpiryDate=JSON.stringify(response[i].mcxOriginalExpiryDate);
				var nseTickSize=JSON.stringify(response[i].nseTickSize);
				var nseExDate=JSON.stringify(response[i].nseExDate);
				var nfoexpiry_date=JSON.stringify(response[i].nfoexpiry_date);
				var mcxInstrumentCode=JSON.stringify(response[i].mcxInstrumentCode);
				var mcxStrikePrice=JSON.stringify(response[i].mcxStrikePrice);
				var mcxOptionType=JSON.stringify(response[i].mcxOptionType);
				var mcxInstrumentName=JSON.stringify(response[i].mcxInstrumentName);
				var mcxInstrumentSeries=JSON.stringify(response[i].mcxInstrumentSeries);
				var nseSymbol=JSON.stringify(response[i].nseSymbol);
				var nseSeries=JSON.stringify(response[i].nseSeries);
				var nfoSymbol=JSON.stringify(response[i].nfoSymbol);
				var nfostrike_price=JSON.stringify(response[i].nfostrike_price);
				var nfooption_type=JSON.stringify(response[i].nfooption_type);
				var nfoinstrument_name=JSON.stringify(response[i].nfoinstrument_name);
				
				 tokenId = response[i].token;
	             tokenArray.push(tokenId);
				
				
	     		body=body+"<tr  id='"+response[i].token+"_mydivId'  onmouseover='stockbuybtnmouseover("+token+")' onmouseout='stockbuybtnmouseout("+token+")' style='height:40px;border-bottom: 1px solid lightcyan;'>";
	             
				body=body+"<td  class='Field' id='"+response[i].token+"'  style='height:40px;width:350px;padding-left:15px; padding-top:20px;padding-bottom: 10px;'>"
				body=body+" <span style='display:block;'><i class='icon ion-md-star'></i>"+response[i].scriptName+"&nbsp;<label class='addbtn'>"+response[i].exchange+"</label>";
             	  "<input type='hidden' id='mydivhiddenId' name='mydivhiddenId' value='"+response[i].token+"_mydivId' />";
             	body=body+" </span> ";
				body=body+"<div   id='"+response[i].token+"_stockbuysell' style='display:none'>";
				body=body+"<i class='icon ion-md-star'></i>"+response[i].scriptName+"&nbsp;"
				 
				body=body+"<a id='"+response[i].token+"_stockbuysell'    name='stockbuyName' href='#' onclick='onclickstockbuybtnToggle(); changeModalContent(event);  onclickstockbuybtn("+scriptName+","+price+","+exchange+","+token+","+displayname+","+mcxTickSize+","+mcxOriginalExpiryDate+","+nseTickSize+","+nseExDate+","+nfoexpiry_date+","+mcxInstrumentCode+","+mcxStrikePrice+","+mcxOptionType+","+mcxInstrumentName+","+mcxInstrumentSeries+","+nseSymbol+","+nseSeries+","+nfoSymbol+","+nfostrike_price+","+nfooption_type+","+nfoinstrument_name+")' data-toggle='modal'  data-target='#myModal' >buy</a>";
			
				body=body+"<button type='button'    id='"+response[i].token+"_stockbuysell'    name='stockbuyName'  onclick='onclickstockbuybtnToggle(); changeModalContent(event);  onclickstockbuybtn("+scriptName+","+price+","+exchange+","+token+","+displayname+","+mcxTickSize+","+mcxOriginalExpiryDate+","+nseTickSize+","+nseExDate+","+nfoexpiry_date+","+mcxInstrumentCode+","+mcxStrikePrice+","+mcxOptionType+","+mcxInstrumentName+","+mcxInstrumentSeries+","+nseSymbol+","+nseSeries+","+nfoSymbol+","+nfostrike_price+","+nfooption_type+","+nfoinstrument_name+")' data-toggle='modal'  data-target='#myModal' >BUY</button>";
				body=body+"<button type='button'    id=''    name='stocksellName'  onclick='onclickstocksellbtnToggle(); changeModalContent(event);  onclickstocksellbtn("+scriptName+","+price+","+exchange+","+token+","+displayname+","+mcxTickSize+","+mcxOriginalExpiryDate+","+nseTickSize+","+nseExDate+","+nfoexpiry_date+","+mcxInstrumentCode+","+mcxStrikePrice+","+mcxOptionType+","+mcxInstrumentName+","+mcxInstrumentSeries+","+nseSymbol+","+nseSeries+","+nfoSymbol+","+nfostrike_price+","+nfooption_type+","+nfoinstrument_name+")'  data-toggle='modal'  data-target='#myModal'>SELL</button>";
				body=body+"<button type='button'    class=' stocksellbtn swd-button' id=''    name='marketDepthName'  onclick='getMarketDepth("+scriptName+","+price+","+exchange+","+token+")' data-target='#modalMarketDepth' data-toggle='modal'>MD</button>"
				    
				    

				body=body+"<button type='button' style='cursor:pointer' class='stocksellbtn swd-button' id='deletescriptId' name='deletescriptId'  onclick='deleteScript("+token+")' >Delete</button>";	
				body=body+"<icon  style='cursor:pointer' class='fa fa-clock-o' id='setalertId' name='setalertId'  onclick='setAlert("+scriptName+","+price+","+exchange+","+token+","+mcxOriginalExpiryDate+","+nseExDate+","+nfoexpiry_date+")' data-toggle='modal'  data-target='#myModalAlertSet' >SetAlert</icon>";

				body=body+"</div>";
				body=body+"</td>";  
				if(response[i].price !=null){
				body=body+"<td id='"+response[i].token+"_priceid' class='Field'>"+response[i].price+"</td>&nbsp;&nbsp;";
				}else{
					body=body+"<td id='"+response[i].token+"_priceid' class='Field' style='width:40px;padding-left:0px;padding-bottom: 10px;'></td>";
				}
				body=body+"<td id='"+response[i].token+"_changeid' class='Field' style='width:40px;padding-left:0px;padding-bottom: 10px;'>+0.0</td>";
				
            
				body=body+"</tr>";
				
					body=body+"<tr  id='"+response[i].token+"_stockbuysellfirst'  onmouseover='stockbuybtnmouseover("+token+")' onmouseout='stockbuybtnmouseout("+token+")' style='background-color:lightblue;width:100%;height:40px;border-bottom: 1px solid lightcyan;visibility:collapse'>";
		             
					body=body+"<td  class='Field' id='"+response[i].token+"'  style='height:40px;padding-left:15px; padding-top:20px;padding-bottom: 10px;'>"
					body=body+" <span style='display:block;'><i class='icon ion-md-star'></i>"+response[i].scriptName+"&nbsp;<label class='addbtn'>"+response[i].exchange+"</label>";
	             	  "<input type='hidden' id='mydivhiddenId' name='mydivhiddenId' value='"+response[i].token+"_mydivId' />";
	             	body=body+" </span> ";
	             	body=body+"</td>";
	             	body=body+"<td>";
	        body=body+"<div class='wrapwrapper' id='"+response[i].token+"_buy_sell_wrapper'><div class='wrapper'>"
	        body=body+"<div class='icon facebook'><div class='tooltip'>Buy</div><span><i class='fab b-buy-b'></i></span></div>";
	        body=body+"<div class='icon twitter'><div class='tooltip'>Sell</div><span><i class='fab s-sell-s'></i></span></div>"
	        body=body+"<div class='icon instagram' onclick='loadChart();'><div class='tooltip'>Chart</div><span><i class='fab c-chart-c'></i></span></div>";
	        if(response[i].exchange=='NFO' && response[i].nfoinstrument_name!='XX'){
	        body=body+"<div class='icon instagram' onclick='OptionChainfun("+displayname+","+exchange+","+nfoexpiry_date+","+nfoinstrument_name+")'><div class='tooltip'>Option</div><span><i class='fab o-chart-o'>O</i></span></div>";
	        }
	        else{
		        body=body+"<div style='display:none;' class='icon instagram'><div class='tooltip' style='display:none;'>OptionChain</div><span><i class='fab o-chart-o'></i></span></div>";

	        }
 	        body=body+"<div class='icon instagram ' onclick='ShowModalMoreOption("+displayname+","+token+")' data-toggle='modal'  data-target='#myModalMoreOption'><div class='tooltip'>More</div><span><i class='fa fa-bars'></i></span></div>";
	        body=body+"</div></div>"
	             	
					body=body+"<div   id='"+response[i].token+"_stockbuysell' style='display:none'>";
					body=body+"<i class='icon ion-md-star'></i>"+response[i].scriptName+"&nbsp;"
					 
					body=body+"<a id='"+response[i].token+"_stockbuysell'    name='stockbuyName' href='#' onclick='onclickstockbuybtnToggle(); changeModalContent(event);  onclickstockbuybtn("+scriptName+","+price+","+exchange+","+token+","+displayname+","+mcxTickSize+","+mcxOriginalExpiryDate+","+nseTickSize+","+nseExDate+","+nfoexpiry_date+","+mcxInstrumentCode+","+mcxStrikePrice+","+mcxOptionType+","+mcxInstrumentName+","+mcxInstrumentSeries+","+nseSymbol+","+nseSeries+","+nfoSymbol+","+nfostrike_price+","+nfooption_type+","+nfoinstrument_name+")' data-toggle='modal'  data-target='#myModal' >buy</a>";
				
					body=body+"<button type='button'    id='"+response[i].token+"_stockbuysell'    name='stockbuyName'  onclick='onclickstockbuybtnToggle(); changeModalContent(event);  onclickstockbuybtn("+scriptName+","+price+","+exchange+","+token+","+displayname+","+mcxTickSize+","+mcxOriginalExpiryDate+","+nseTickSize+","+nseExDate+","+nfoexpiry_date+","+mcxInstrumentCode+","+mcxStrikePrice+","+mcxOptionType+","+mcxInstrumentName+","+mcxInstrumentSeries+","+nseSymbol+","+nseSeries+","+nfoSymbol+","+nfostrike_price+","+nfooption_type+","+nfoinstrument_name+")' data-toggle='modal'  data-target='#myModal' >BUY</button>";
					body=body+"<button type='button'    id=''    name='stocksellName'  onclick='onclickstocksellbtnToggle(); changeModalContent(event);  onclickstocksellbtn("+scriptName+","+price+","+exchange+","+token+","+displayname+","+mcxTickSize+","+mcxOriginalExpiryDate+","+nseTickSize+","+nseExDate+","+nfoexpiry_date+","+mcxInstrumentCode+","+mcxStrikePrice+","+mcxOptionType+","+mcxInstrumentName+","+mcxInstrumentSeries+","+nseSymbol+","+nseSeries+","+nfoSymbol+","+nfostrike_price+","+nfooption_type+","+nfoinstrument_name+")'  data-toggle='modal'  data-target='#myModal'>SELL</button>";
					body=body+"<button type='button'    class=' stocksellbtn swd-button' id=''    name='marketDepthName'  onclick='getMarketDepth("+scriptName+","+price+","+exchange+","+token+")' data-target='#modalMarketDepth' data-toggle='modal'>MD</button>"
					    
					    

					body=body+"<button type='button' style='cursor:pointer' class='stocksellbtn swd-button' id='deletescriptId' name='deletescriptId'  onclick='deleteScript("+token+")' >Delete</button>";	
					body=body+"<icon  style='cursor:pointer' class='fa fa-clock-o' id='setalertId' name='setalertId'  onclick='setAlert("+scriptName+","+price+","+exchange+","+token+","+mcxOriginalExpiryDate+","+nseExDate+","+nfoexpiry_date+")' data-toggle='modal'  data-target='#myModalAlertSet' >SetAlert</icon>";

					body=body+"</div>";
	
					body=body+"</td>";
					body=body+"<td id='"+response[i].token+"_changeid' class='Field' style='width:40px;padding-left:0px;padding-bottom: 10px;'>+0.0</td>";
					
					if(response[i].price !=null){
					body=body+"<td id='"+response[i].token+"_priceid' class='Field'>"+response[i].price+"</td>&nbsp;&nbsp;";
					}else{
						body=body+"<td id='"+response[i].token+"_priceid' class='Field' style='width:40px;padding-left:0px;padding-bottom: 10px;'></td>";
					}
						body=body+"<td id='"+response[i].token+"_changeid' class='Field' style='width:40px;padding-left:0px;padding-bottom: 10px;'>+0.0</td>";
					
	            		               
					body=body+"</tr>";
					
				
					 					

			}
			
			 $('#addscriptId').html(body); 
			   
	         
		},
		error:function(){
			//alert("getMarketScript Error");
			
		
		}	
	});
}



$(document).ready(function(){
	
	getscriptrefresh();

$("#search").keyup(function (e) {
	
	//	$("#heederlisthiddId").hide();
		
		
		var searchTerm = document.getElementById("search").value;
		
		  if(searchTerm.length >0){
			  
			$("#scriptlisthiddId").hide();
			$("#searchcloseId").show();
			$("#searchiconId").hide();
			
   
   $.ajax({
	type :'Get',
	url :'indexAdd',
	data :"searchTerm=" +encodeURIComponent(searchTerm),
	dataType: 'json',
	success:function(response){
		
		 var jsonObject =JSON.parse(response);
		
	    
	    var body;
	    var commoditybody;
	    var eqtybody;
	    var nfoSearchbody;
	    
	    var res = Object.values(response);
	    
	  		    
	        for (var i = 0; i <jsonObject.length; i++) {
	        	
	        	
	        	if(jsonObject[i].properties.mcxInstrumentIdentifier !=null){

	        		
	        		var mcxInstrumentIdentifier=jsonObject[i].properties.mcxInstrumentIdentifier;
	        		var mcxInstrumentCode=jsonObject[i].properties.mcxInstrumentCode;
	        		var mcxInstrumentSeries=jsonObject[i].properties.mcxInstrumentSeries;
	        		var mcxProductStartDate=jsonObject[i].properties.mcxProductStartDate;
	        		var mcxLastTradingDate=jsonObject[i].properties.mcxLastTradingDate;
	        		var mcxLotSize=jsonObject[i].properties.mcxLotSize;
	        		var mcxTickSize=jsonObject[i].properties.mcxTickSize;
	        		var mcxDeliveryStartDate=jsonObject[i].properties.mcxDeliveryStartDate;
	        		var mcxDeliveryEndDate=jsonObject[i].properties.mcxDeliveryEndDate;
	        		var mcxLastModifiedDate=jsonObject[i].properties.mcxLastModifiedDate;
	        		var mcxInstrumentInfo=jsonObject[i].properties.mcxInstrumentInfo;
	        		var mcxTenderPeriodStartDate=jsonObject[i].properties.mcxTenderPeriodStartDate;
	        		var mcxTenderPeriodEndDate=jsonObject[i].properties.mcxTenderPeriodEndDate;
	        		var mcxNameUnderlyingAsset=jsonObject[i].properties.mcxNameUnderlyingAsset;
	        		var mcxInstrumentName=jsonObject[i].properties.mcxInstrumentName;
	        		var mcxOriginalExpiryDate=jsonObject[i].properties.mcxOriginalExpiryDate;
	        		var mcxStrikePrice=jsonObject[i].properties.mcxStrikePrice;
	        		var mcxOptionType=jsonObject[i].properties.mcxOptionType;
	        		
	        		
	        		const monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
	        		var mcxexpiryDATE=mcxOriginalExpiryDate;
					
					 var myDate = new Date(mcxexpiryDATE);
					
					 var mcxexpiryDATEmyDate = +myDate.getDate() +monthNames[myDate.getMonth()];
	        		
					 var mcxbody;
	        		var mcxoption;
	        		 var displayName;
	        		var fut="FUT";
					if(mcxOptionType=="XX"){
						mcxoption=fut;
						mcxbody=mcxoption;
						displayName=JSON.stringify(mcxInstrumentCode+" "+mcxexpiryDATEmyDate+" "+mcxoption);
					}else{
						mcxoption=mcxOptionType;
						mcxbody=mcxStrikePrice+" "+mcxoption;
						displayName=JSON.stringify(mcxInstrumentCode+" "+mcxexpiryDATEmyDate+" "+mcxStrikePrice+" "+mcxoption);
					}
	        		
	        		
					
		            
		            
		            var scriptname=JSON.stringify(mcxInstrumentCode);
		            var token=JSON.stringify(mcxInstrumentIdentifier);
		            
		            var mcxInstrumentCodes=JSON.stringify(mcxInstrumentCode);
		            var mcxInstrumentSeriess=JSON.stringify(mcxInstrumentSeries);
		            var mcxProductStartDates=JSON.stringify(mcxProductStartDate);
		            var mcxLastTradingDates=JSON.stringify(mcxLastTradingDate);
		            var mcxLotSizes=JSON.stringify(mcxLotSize);
		            var mcxTickSizes=JSON.stringify(mcxTickSize);
		            var mcxDeliveryStartDates=JSON.stringify(mcxDeliveryStartDate);
		            var mcxDeliveryEndDates=JSON.stringify(mcxDeliveryEndDate);
		            var mcxLastModifiedDates=JSON.stringify(mcxLastModifiedDate);
		            var mcxInstrumentInfos=JSON.stringify(mcxInstrumentInfo);
		            var mcxTenderPeriodStartDates=JSON.stringify(mcxTenderPeriodStartDate);
		            var mcxTenderPeriodEndDates=JSON.stringify(mcxTenderPeriodEndDate);
		            var mcxInstrumentNames=JSON.stringify(mcxInstrumentName);
		            var mcxOriginalExpiryDates=JSON.stringify(mcxOriginalExpiryDate);
		            var mcxStrikePrices=JSON.stringify(mcxStrikePrice);
		            var mcxOptionTypes=JSON.stringify(mcxOptionType);
		            
		           
						  
				    body=body+"<tr class='dropdown'>";
					body=body+"<td class='dropdown-content' onclick='addScriptMcx("+displayName+","+token+","+'"MCX"'+","+mcxInstrumentCodes+","+mcxInstrumentSeriess+","
							+mcxProductStartDates+","+mcxLastTradingDates+","+mcxLotSizes+","+mcxTickSizes+","+mcxDeliveryStartDates+","+mcxDeliveryEndDates+","+mcxLastModifiedDates+","
							+mcxInstrumentInfos+","+mcxTenderPeriodStartDates+","+mcxTenderPeriodEndDates+","+mcxInstrumentNames+","+mcxOriginalExpiryDates+","+mcxStrikePrices+","
							+mcxOptionTypes+","+scriptname+")' style='cursor:pointer;'> "+mcxInstrumentCode+"&nbsp;&nbsp;"+mcxexpiryDATEmyDate+"&nbsp;&nbsp;"+mcxbody+"&nbsp;&nbsp;"+"<button type='button'  class='addbtn'>MCX</button>"+"</td>";
				    	       
				 	body=body+"</tr>";
				 	
				 	if(mcxInstrumentSeries=="XX"){
				 		
				 		commoditybody=commoditybody+"<tr class='dropdown'>";
				 		commoditybody=commoditybody+"<td class='dropdown-content' onclick='addScriptMcx("+displayName+","+token+","+'"MCX"'+","+mcxInstrumentCodes+","+mcxInstrumentSeriess+","
								+mcxProductStartDates+","+mcxLastTradingDates+","+mcxLotSizes+","+mcxTickSizes+","+mcxDeliveryStartDates+","+mcxDeliveryEndDates+","+mcxLastModifiedDates+","
								+mcxInstrumentInfos+","+mcxTenderPeriodStartDates+","+mcxTenderPeriodEndDates+","+mcxInstrumentNames+","+mcxOriginalExpiryDates+","+mcxStrikePrices+","
								+mcxOptionTypes+","+scriptname+")' style='cursor:pointer;'> "+mcxInstrumentCode+"&nbsp;&nbsp;"+mcxexpiryDATEmyDate+"&nbsp;&nbsp;"+mcxbody+"&nbsp;&nbsp;"+"<button type='button'  class='addbtn'>MCX</button>"+"</td>";
					    	       
								commoditybody=commoditybody+"</tr>";

				 	}else{
				 		$('#CommoditySearchdivbodyId').html('');
				 	}
				 	
				 	
			     } //mcx condition closed
	        	
	        if(jsonObject[i].properties.nseToken !=null){

	        var nseToken=jsonObject[i].properties.nseToken;
            var nseSymbol=jsonObject[i].properties.nseSymbol;
            var nseSeries=jsonObject[i].properties.nseSeries;
            var nseInstrumentType=jsonObject[i].properties.nseInstrumentType;
            var nseIssuedCapital=jsonObject[i].properties.nseIssuedCapital;
            var nseCreditRating=jsonObject[i].properties.nseCreditRating;
            var nseBoardLotQuantity=jsonObject[i].properties.nseBoardLotQuantity;
            var nseTickSize=jsonObject[i].properties.nseTickSize;
            var nseName=jsonObject[i].properties.nseName;
            var nseIssueStartDate=jsonObject[i].properties.nseIssueStartDate;
            var nseIssueIPDate=jsonObject[i].properties.nseIssueIPDate;
            var nseIssueMaturityDate=jsonObject[i].properties.nseIssueMaturityDate;
            var nseFreezePercent=jsonObject[i].properties.nseFreezePercent;
            var nseListingDate=jsonObject[i].properties.nseListingDate;
            var nseExpulsionDate=jsonObject[i].properties.nseExpulsionDate;
            var nseReAdmissionDate=jsonObject[i].properties.nseReAdmissionDate;
            var nseExDate=jsonObject[i].properties.nseExDate;
            var nseRecordDate=jsonObject[i].properties.nseRecordDate;
            var nseFaceValue=jsonObject[i].properties.nseFaceValue;
            var nseISINNo=jsonObject[i].properties.nseISINNo;
            
            
            var displayName=JSON.stringify(nseName+" "	+nseSymbol+" " +nseSeries);           
            var token=JSON.stringify(nseToken);
            var scriptname=JSON.stringify(nseName);
            
            var nseSymbols=JSON.stringify(nseSymbol);
            var nseSeriess=JSON.stringify(nseSeries);
            var nseInstrumentTypes=JSON.stringify(nseInstrumentType);
            var nseIssuedCapitals=JSON.stringify(nseIssuedCapital);
            var nseCreditRatings=JSON.stringify(nseCreditRating);
            var nseBoardLotQuantitys=JSON.stringify(nseBoardLotQuantity);
            var nseTickSizes=JSON.stringify(nseTickSize);
            var nseIssueStartDates=JSON.stringify(nseIssueStartDate);
            var nseIssueIPDates=JSON.stringify(nseIssueIPDate);
            var nseIssueMaturityDates=JSON.stringify(nseIssueMaturityDate);
            var nseFreezePercents=JSON.stringify(nseFreezePercent);
            var nseListingDates=JSON.stringify(nseListingDate);
            var nseExpulsionDates=JSON.stringify(nseExpulsionDate);
            var nseReAdmissionDates=JSON.stringify(nseReAdmissionDate);
            var nseExDates=JSON.stringify(nseExDate);
            var nseRecordDates=JSON.stringify(nseRecordDate);
            var nseFaceValues=JSON.stringify(nseFaceValue);
            var nseISINNos=JSON.stringify(nseISINNo);
            
		    body=body+"<tr class='dropdown'>";
			body=body+"<td class='dropdown-content' onclick='addScriptNse("+displayName+","+token+","+'"NSE"'+","+nseSymbols+","
					+nseSeriess+","+nseInstrumentTypes+","+nseIssuedCapitals+","+nseCreditRatings+","+nseBoardLotQuantitys+","
					+nseTickSizes+","+nseIssueStartDates+","+nseIssueIPDates+","+nseIssueMaturityDates+","+nseFreezePercents+","
					+nseListingDates+","+nseExpulsionDates+","+nseReAdmissionDates+","+nseExDates+","+nseRecordDates+","+nseFaceValues+","
					+nseISINNos+","+scriptname+")' style='cursor:pointer;'> "+nseName+"&nbsp;&nbsp;"+nseSeries+"&nbsp;&nbsp;"+nseSymbol+"&nbsp;&nbsp;"+"<button type='button'  class='addbtn'>NSE</button>"+"</td>";
		    	       
		 	body=body+"</tr>";
		 	
		 	if(nseSeries=="EQ"){
		 		
		 		eqtybody=eqtybody+"<tr class='dropdown'>";
		 		eqtybody=eqtybody+"<td class='dropdown-content' onclick='addScriptNse("+displayName+","+token+","+'"NSE"'+","+nseSymbols+","
							+nseSeriess+","+nseInstrumentTypes+","+nseIssuedCapitals+","+nseCreditRatings+","+nseBoardLotQuantitys+","
							+nseTickSizes+","+nseIssueStartDates+","+nseIssueIPDates+","+nseIssueMaturityDates+","+nseFreezePercents+","
							+nseListingDates+","+nseExpulsionDates+","+nseReAdmissionDates+","+nseExDates+","+nseRecordDates+","+nseFaceValues+","
							+nseISINNos+","+scriptname+")' style='cursor:pointer;'> "+nseName+"&nbsp;&nbsp;"+nseSeries+"&nbsp;&nbsp;"+nseSymbol+"&nbsp;&nbsp;"+"<button type='button'  class='addbtn'>NSE</button>"+"</td>";
				    	       
							eqtybody=eqtybody+"</tr>";

		 	}else{
		 		$('#EqtySearchdivbodyId').html('');
		 	}
		 	
		 	
	        } //nse condition closed
	        
	        
	        if(jsonObject[i].properties.nfoToken !=null){

		        var nfoToken=jsonObject[i].properties.nfoToken;
	            var nfoinstrument_name=jsonObject[i].properties.nfoinstrument_name;
	            var nfoSymbol=jsonObject[i].properties.nfoSymbol;
	            var nfoSeries=jsonObject[i].properties.nfoSeries;
	            var nfoexpiry_date=jsonObject[i].properties.nfoexpiry_date;
	            var nfostrike_price=jsonObject[i].properties.nfostrike_price;
	            var nfooption_type=jsonObject[i].properties.nfooption_type;
	            var nfoissue_infostart_date=jsonObject[i].properties.nfoissue_infostart_date;
	            var nfoissue_infomaturity_date=jsonObject[i].properties.nfoissue_infomaturity_date;
	            var nfoboard_lot_quantity=jsonObject[i].properties.nfoboard_lot_quantity;
	            var nfoStockname=jsonObject[i].properties.nfoStockname;
	            
	            
	            const monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
        		var nfoexpiryDATE=nfoexpiry_date;
				
				 var myDate = new Date(nfoexpiryDATE);
				
				 var nfoexpiryDATEmyDate = +myDate.getDate() +monthNames[myDate.getMonth()];
				 
				 var nfobody;
				 var displayName;
	            var mcxoption;
	            if(nfoinstrument_name=="FUTIDX" || nfoinstrument_name=="FUTSTK" ){
	            	nfooption="FUT";
	            	nfobody=nfooption;
	            	displayName=JSON.stringify(nfoSymbol+" "+nfoexpiryDATEmyDate+" "+nfooption);
	            }else{
	            	nfooption=nfooption_type;
	            	nfobody=nfostrike_price+" "+nfooption;
	            	displayName=JSON.stringify(nfoSymbol+" "+nfoexpiryDATEmyDate+" "+nfostrike_price+" "+nfooption);
	            }
	            

	            var scriptname=JSON.stringify(nfoSymbol);
	            var token=JSON.stringify(nfoToken);
	            
	            var nfoinstrument_names=JSON.stringify(nfoinstrument_name);
	            var nfoSeriess=JSON.stringify(nfoSeries);
	            var nfoexpiry_dates=JSON.stringify(nfoexpiry_date);
	            var nfostrike_prices=JSON.stringify(nfostrike_price);
	            var nfooption_types=JSON.stringify(nfooption_type);
	            var nfoissue_infostart_dates=JSON.stringify(nfoissue_infostart_date);
	            var nfoissue_infomaturity_dates=JSON.stringify(nfoissue_infomaturity_date);
	            var nfoboard_lot_quantitys=JSON.stringify(nfoboard_lot_quantity);
	            var nfoStocknames=JSON.stringify(nfoStockname);

			    body=body+"<tr class='dropdown'>";
				body=body+"<td class='dropdown-content' onclick='addScriptNfo("+displayName+","+token+","+'"NFO"'+","
						+nfoinstrument_names+","+nfoSeriess+","+nfoexpiry_dates+","+nfostrike_prices+","+nfooption_types+","
						+nfoissue_infostart_dates+","+nfoissue_infomaturity_dates+","+nfoboard_lot_quantitys+","
						+nfoStocknames+","+scriptname+")' style='cursor:pointer;'> "+nfoSymbol+"&nbsp;&nbsp;"+nfoexpiryDATEmyDate+"&nbsp;&nbsp;"+nfobody+"&nbsp;&nbsp;"+"<button type='button'  class='addbtn'>NFO</button>"+"</td>";

			 	body=body+"</tr>";
			 	
			 	if(nfoinstrument_name=="FUTIDX" || nfoinstrument_name=="FUTSTK" || nfoinstrument_name=="OPTIDX" || nfoinstrument_name=="OPTSTK" ){
			 		
			 		nfoSearchbody=nfoSearchbody+"<tr class='dropdown'>";
			 		nfoSearchbody=nfoSearchbody+"<td class='dropdown-content' onclick='addScriptNfo("+displayName+","+token+","+'"NFO"'+","
							+nfoinstrument_names+","+nfoSeriess+","+nfoexpiry_dates+","+nfostrike_prices+","+nfooption_types+","
							+nfoissue_infostart_dates+","+nfoissue_infomaturity_dates+","+nfoboard_lot_quantitys+","
							+nfoStocknames+","+scriptname+")' style='cursor:pointer;'> "+nfoSymbol+"&nbsp;&nbsp;"+nfoexpiryDATEmyDate+"&nbsp;&nbsp;"+nfobody+"&nbsp;&nbsp;"+"<button type='button'  class='addbtn'>NFO</button>"+"</td>";
    
							nfoSearchbody=nfoSearchbody+"</tr>";
			 	}else{
			 		$('#NfoSearchdivbodyId').html('');
			 	}
			 	
			 	
			 	
		        }//nfo condition closed
	        
	        
	        $('#SearchdivbodyId').html(body);
	        $('#SearchdivbodyId').show();
	        
	        $('#CommoditySearchdivbodyId').html(commoditybody);
	        $('#EqtySearchdivbodyId').html(eqtybody); 
	        $('#NfoSearchdivbodyId').html(nfoSearchbody);		      
	      
	      } //for loop closed
	         
	   
			   
	},
	error:function(){
		//alert("RedisSearch Error");
	
	}	
}); 
   
   
    }else{
    	
		$("#searchcloseId").hide();
		$("#searchiconId").show();
		$('#SearchdivbodyId').hide();
		$('#SearchdivbodyId').html('');
		$('#CommoditySearchdivbodyId').hide();
		$('#CommoditySearchdivbodyId').html('');
		$('#EqtySearchdivbodyId').html('');
    	$('#EqtySearchdivbodyId').hide();
    	$('#NfoSearchdivbodyId').html('');
    	$('#NfoSearchdivbodyId').hide();
		getscriptrefresh();
	}	

});






//==== PinTicker START====
$.ajax({
	type :'POST',
	url :'PinTickerPrevioueLoad',	
	dataType: 'html',
	success:function(response){
		
		var jsonObject= JSON.parse(response);
		
		var scriptTagfirst;
		var postionfirst;			
		var scriptTagsecond;
		var positionsecond;
		
		 var body;
		 var firstpintickerbody;
		 var secondprintickerbody;		
		 //alert("length : "+ jsonObject.length);
			
		for (var i = 0; i < jsonObject.length; i++) {				
			scriptTagfirst=jsonObject[1].scriptname;
			postionfirst=jsonObject[1].position;
			scriptTagsecond=jsonObject[0].scriptname;
			postionsecond=jsonObject[0].position;
		}
			
		 document.getElementById("firstpintickerbody").innerHTML=scriptTagfirst;
		 document.getElementById("secondprintickerbody").innerHTML=scriptTagsecond;
		

	},
	error:function(){
		//alert("PinTicker Error");
	
	}	
});	

//==== PinTicker END====
	
//==== Sort Setting START====

   $.ajax({
	type :'GET',
	//url :'getMarketScript',
	url:'ReadySortingOrderPrevioueLoad',
	dataType: 'json',
	success:function(jsonObject){
		  var body;
	
		  var response=jsonObject.scriptList;		
			
			
			for (var i = 0; i <response.length; i++) {

				var scriptName=JSON.stringify(response[i].scriptName);
				var price=JSON.stringify(response[i].price);
				var exchange=JSON.stringify(response[i].exchange);
				var token=JSON.stringify(response[i].token);
				var displayname=JSON.stringify(response[i].displayname);
				var mcxTickSize=JSON.stringify(response[i].mcxTickSize);
				var mcxOriginalExpiryDate=JSON.stringify(response[i].mcxOriginalExpiryDate);
				var nseTickSize=JSON.stringify(response[i].nseTickSize);
				var nseExDate=JSON.stringify(response[i].nseExDate);
				var nfoexpiry_date=JSON.stringify(response[i].nfoexpiry_date);
				var mcxInstrumentCode=JSON.stringify(response[i].mcxInstrumentCode);
				var mcxStrikePrice=JSON.stringify(response[i].mcxStrikePrice);
				var mcxOptionType=JSON.stringify(response[i].mcxOptionType);
				var mcxInstrumentName=JSON.stringify(response[i].mcxInstrumentName);
				var mcxInstrumentSeries=JSON.stringify(response[i].mcxInstrumentSeries);
				var nseSymbol=JSON.stringify(response[i].nseSymbol);
				var nseSeries=JSON.stringify(response[i].nseSeries);
				var nfoSymbol=JSON.stringify(response[i].nfoSymbol);
				var nfostrike_price=JSON.stringify(response[i].nfostrike_price);
				var nfooption_type=JSON.stringify(response[i].nfooption_type);
				var nfoinstrument_name=JSON.stringify(response[i].nfoinstrument_name);
				/* 
				 tokenId = response[i].token;
	             tokenArray.push(tokenId); */
				
				
	     		body=body+"<tr  id='"+response[i].token+"_mydivId'  onmouseover='stockbuybtnmouseover("+token+")' onmouseout='stockbuybtnmouseout("+token+")' style='height:40px;border-bottom: 1px solid lightcyan;'>";
	             
				body=body+"<td  class='Field' id='"+response[i].token+"'  style='height:40px;width:350px;padding-left:15px; padding-top:20px;padding-bottom: 10px;'>"
				body=body+" <span style='display:block;'><i class='icon ion-md-star'></i>"+response[i].scriptName+"&nbsp;<label class='addbtn'>"+response[i].exchange+"</label>";
             	  "<input type='hidden' id='mydivhiddenId' name='mydivhiddenId' value='"+response[i].token+"_mydivId' />";
             	body=body+" </span> ";
				body=body+"<div   id='"+response[i].token+"_stockbuysell' style='display:none'>";
				body=body+"<i class='icon ion-md-star'></i>"+response[i].scriptName+"&nbsp;"
				 
				body=body+"<a id='"+response[i].token+"_stockbuysell'    name='stockbuyName' href='#' onclick='onclickstockbuybtnToggle(); changeModalContent(event);  onclickstockbuybtn("+scriptName+","+price+","+exchange+","+token+","+displayname+","+mcxTickSize+","+mcxOriginalExpiryDate+","+nseTickSize+","+nseExDate+","+nfoexpiry_date+","+mcxInstrumentCode+","+mcxStrikePrice+","+mcxOptionType+","+mcxInstrumentName+","+mcxInstrumentSeries+","+nseSymbol+","+nseSeries+","+nfoSymbol+","+nfostrike_price+","+nfooption_type+","+nfoinstrument_name+")' data-toggle='modal'  data-target='#myModal' >buy</a>";
			
				body=body+"<button type='button'    id='"+response[i].token+"_stockbuysell'    name='stockbuyName'  onclick='onclickstockbuybtnToggle(); changeModalContent(event);  onclickstockbuybtn("+scriptName+","+price+","+exchange+","+token+","+displayname+","+mcxTickSize+","+mcxOriginalExpiryDate+","+nseTickSize+","+nseExDate+","+nfoexpiry_date+","+mcxInstrumentCode+","+mcxStrikePrice+","+mcxOptionType+","+mcxInstrumentName+","+mcxInstrumentSeries+","+nseSymbol+","+nseSeries+","+nfoSymbol+","+nfostrike_price+","+nfooption_type+","+nfoinstrument_name+")' data-toggle='modal'  data-target='#myModal' >BUY</button>";
				body=body+"<button type='button'    id=''    name='stocksellName'  onclick='onclickstocksellbtnToggle(); changeModalContent(event);  onclickstocksellbtn("+scriptName+","+price+","+exchange+","+token+","+displayname+","+mcxTickSize+","+mcxOriginalExpiryDate+","+nseTickSize+","+nseExDate+","+nfoexpiry_date+","+mcxInstrumentCode+","+mcxStrikePrice+","+mcxOptionType+","+mcxInstrumentName+","+mcxInstrumentSeries+","+nseSymbol+","+nseSeries+","+nfoSymbol+","+nfostrike_price+","+nfooption_type+","+nfoinstrument_name+")'  data-toggle='modal'  data-target='#myModal'>SELL</button>";
				body=body+"<button type='button'    class=' stocksellbtn swd-button' id=''    name='marketDepthName'  onclick='getMarketDepth("+scriptName+","+price+","+exchange+","+token+")' data-target='#modalMarketDepth' data-toggle='modal'>MD</button>"
				    
				    

				body=body+"<button type='button' style='cursor:pointer' class='stocksellbtn swd-button' id='deletescriptId' name='deletescriptId'  onclick='deleteScript("+token+")' >Delete</button>";	
				body=body+"<icon  style='cursor:pointer' class='fa fa-clock-o' id='setalertId' name='setalertId'  onclick='setAlert("+scriptName+","+price+","+exchange+","+token+","+mcxOriginalExpiryDate+","+nseExDate+","+nfoexpiry_date+")' data-toggle='modal'  data-target='#myModalAlertSet' >SetAlert</icon>";

				body=body+"</div>";
				body=body+"</td>";  
				if(response[i].price !=null){
				body=body+"<td id='"+response[i].token+"_priceid' class='Field'>"+response[i].price+"</td>&nbsp;&nbsp;";
				}else{
					body=body+"<td id='"+response[i].token+"_priceid' class='Field' style='width:40px;padding-left:0px;padding-bottom: 10px;'></td>";
				}
				body=body+"<td id='"+response[i].token+"_changeid' class='Field' style='width:40px;padding-left:0px;padding-bottom: 10px;'>+0.0</td>";
				
            
				body=body+"</tr>";
				
					body=body+"<tr  id='"+response[i].token+"_stockbuysellfirst'  onmouseover='stockbuybtnmouseover("+token+")' onmouseout='stockbuybtnmouseout("+token+")' style='background-color:lightblue;width:100%;height:40px;border-bottom: 1px solid lightcyan;visibility:collapse'>";
		             
					body=body+"<td  class='Field' id='"+response[i].token+"'  style='height:40px;padding-left:15px; padding-top:20px;padding-bottom: 10px;'>"
					body=body+" <span style='display:block;'><i class='icon ion-md-star'></i>"+response[i].scriptName+"&nbsp;<label class='addbtn'>"+response[i].exchange+"</label>";
	             	  "<input type='hidden' id='mydivhiddenId' name='mydivhiddenId' value='"+response[i].token+"_mydivId' />";
	             	body=body+" </span> ";
	             	body=body+"</td>";
	             	body=body+"<td>";
	        body=body+"<div class='wrapwrapper' id='"+response[i].token+"_buy_sell_wrapper'><div class='wrapper'>"
	        body=body+"<div class='icon facebook'><div class='tooltip'>Buy</div><span><i class='fab b-buy-b'></i></span></div>";
	        body=body+"<div class='icon twitter'><div class='tooltip'>Sell</div><span><i class='fab s-sell-s'></i></span></div>"
	        body=body+"<div class='icon instagram' onclick='loadChart();'><div class='tooltip'>Chart</div><span><i class='fab c-chart-c'></i></span></div>";
	        if(response[i].exchange=='NFO' && response[i].nfoinstrument_name!='XX'){
	        body=body+"<div class='icon instagram' onclick='OptionChainfun("+displayname+","+exchange+","+nfoexpiry_date+","+nfoinstrument_name+")'><div class='tooltip'>Option</div><span><i class='fab o-chart-o'>O</i></span></div>";
	        }
	        else{
		        body=body+"<div style='display:none;' class='icon instagram'><div class='tooltip' style='display:none;'>OptionChain</div><span><i class='fab o-chart-o'></i></span></div>";

	        }
 	        body=body+"<div class='icon instagram ' onclick='ShowModalMoreOption("+displayname+","+token+")' data-toggle='modal'  data-target='#myModalMoreOption'><div class='tooltip'>More</div><span><i class='fa fa-bars'></i></span></div>";
	        body=body+"</div></div>"
	             	
					body=body+"<div   id='"+response[i].token+"_stockbuysell' style='display:none'>";
					body=body+"<i class='icon ion-md-star'></i>"+response[i].scriptName+"&nbsp;"
					 
					body=body+"<a id='"+response[i].token+"_stockbuysell'    name='stockbuyName' href='#' onclick='onclickstockbuybtnToggle(); changeModalContent(event);  onclickstockbuybtn("+scriptName+","+price+","+exchange+","+token+","+displayname+","+mcxTickSize+","+mcxOriginalExpiryDate+","+nseTickSize+","+nseExDate+","+nfoexpiry_date+","+mcxInstrumentCode+","+mcxStrikePrice+","+mcxOptionType+","+mcxInstrumentName+","+mcxInstrumentSeries+","+nseSymbol+","+nseSeries+","+nfoSymbol+","+nfostrike_price+","+nfooption_type+","+nfoinstrument_name+")' data-toggle='modal'  data-target='#myModal' >buy</a>";
				
					body=body+"<button type='button'    id='"+response[i].token+"_stockbuysell'    name='stockbuyName'  onclick='onclickstockbuybtnToggle(); changeModalContent(event);  onclickstockbuybtn("+scriptName+","+price+","+exchange+","+token+","+displayname+","+mcxTickSize+","+mcxOriginalExpiryDate+","+nseTickSize+","+nseExDate+","+nfoexpiry_date+","+mcxInstrumentCode+","+mcxStrikePrice+","+mcxOptionType+","+mcxInstrumentName+","+mcxInstrumentSeries+","+nseSymbol+","+nseSeries+","+nfoSymbol+","+nfostrike_price+","+nfooption_type+","+nfoinstrument_name+")' data-toggle='modal'  data-target='#myModal' >BUY</button>";
					body=body+"<button type='button'    id=''    name='stocksellName'  onclick='onclickstocksellbtnToggle(); changeModalContent(event);  onclickstocksellbtn("+scriptName+","+price+","+exchange+","+token+","+displayname+","+mcxTickSize+","+mcxOriginalExpiryDate+","+nseTickSize+","+nseExDate+","+nfoexpiry_date+","+mcxInstrumentCode+","+mcxStrikePrice+","+mcxOptionType+","+mcxInstrumentName+","+mcxInstrumentSeries+","+nseSymbol+","+nseSeries+","+nfoSymbol+","+nfostrike_price+","+nfooption_type+","+nfoinstrument_name+")'  data-toggle='modal'  data-target='#myModal'>SELL</button>";
					body=body+"<button type='button'    class=' stocksellbtn swd-button' id=''    name='marketDepthName'  onclick='getMarketDepth("+scriptName+","+price+","+exchange+","+token+")' data-target='#modalMarketDepth' data-toggle='modal'>MD</button>"
					    
					    

					body=body+"<button type='button' style='cursor:pointer' class='stocksellbtn swd-button' id='deletescriptId' name='deletescriptId'  onclick='deleteScript("+token+")' >Delete</button>";	
					body=body+"<icon  style='cursor:pointer' class='fa fa-clock-o' id='setalertId' name='setalertId'  onclick='setAlert("+scriptName+","+price+","+exchange+","+token+","+mcxOriginalExpiryDate+","+nseExDate+","+nfoexpiry_date+")' data-toggle='modal'  data-target='#myModalAlertSet' >SetAlert</icon>";

					body=body+"</div>";
	
					body=body+"</td>";
					body=body+"<td id='"+response[i].token+"_changeid' class='Field' style='width:40px;padding-left:0px;padding-bottom: 10px;'>+0.0</td>";
					
					if(response[i].price !=null){
					body=body+"<td id='"+response[i].token+"_priceid' class='Field'>"+response[i].price+"</td>&nbsp;&nbsp;";
					}else{
						body=body+"<td id='"+response[i].token+"_priceid' class='Field' style='width:40px;padding-left:0px;padding-bottom: 10px;'></td>";
					}
						body=body+"<td id='"+response[i].token+"_changeid' class='Field' style='width:40px;padding-left:0px;padding-bottom: 10px;'>+0.0</td>";
					
	            		               
					body=body+"</tr>";
					
				
					 					

			}
			var SortingbyfieldTag=jsonObject.Sortingbyfield;
			var SortingbyOrderTag=jsonObject.SortingbyOrder;
		
			 document.getElementById("SortingbyfieldhiddenvalueId").value=SortingbyfieldTag;
			 document.getElementById("SortingbyOrderhiddenvalueId").value=SortingbyOrderTag;
			 document.getElementById("SortingbyfieldModalhiddenvalueId").value=SortingbyfieldTag;
			 document.getElementById("SortingbyOrderModalhiddenvalueId").value=SortingbyOrderTag;
			 document.getElementById("SortingbyOrderModalhiddenlabelId").innerHTML=SortingbyOrderTag;	
			 $('#addscriptId').html(body);
			
	},
	error:function(){
		//alert("getMarketScript Error");
	}	
});


//==== Sort Setting END====

});
	
	
function closefun(){
   	
	   $('#SearchdivbodyId').html('');
	   $('#CommoditySearchdivbodyId').html('');
	   $('#EqtySearchdivbodyId').html('');
	   $('#NfoSearchdivbodyId').html('');
	   $('#search').val('');
	   $('#searchcloseId').hide();
	   $("#searchiconId").show();
	   
	   getscriptrefresh();

}


</script>

<script type="text/javascript">

function addScriptMcx(scriptname,token,exchange,mcxInstrumentCode,mcxInstrumentSeries,mcxProductStartDate,mcxLastTradingDate,mcxLotSize,
		mcxTickSize,mcxDeliveryStartDate,mcxDeliveryEndDate,mcxLastModifiedDate,mcxInstrumentInfo,mcxTenderPeriodStartDate,mcxTenderPeriodEndDate,
		mcxInstrumentName,mcxOriginalExpiryDate,mcxStrikePrice,mcxOptionType,displayname){
	
	$('#SearchdivbodyId').hide(); 
	$('#CommoditySearchdivbodyId').hide();
	
	// var topic = token;
   //  var qos = 1;

    // client.subscribe(topic,{qos: qos});
		
    
     tokenArray.push(token);
	
	$.ajax({
			type :'POST',
			url :'addScriptMcx',
			data :'Token='+token+"&Exchange="+exchange+"&Scriptname="+encodeURIComponent(scriptname)+"&McxInstrumentCode="+mcxInstrumentCode+
			       "&McxInstrumentSeries="+mcxInstrumentSeries+"&McxProductStartDate="+mcxProductStartDate+"&McxLastTradingDate="+mcxLastTradingDate+"&McxLotSize="+mcxLotSize+"&McxTickSize="+mcxTickSize+
			       "&McxDeliveryStartDate="+mcxDeliveryStartDate+"&McxDeliveryEndDate="+mcxDeliveryEndDate+"&McxLastModifiedDate="+mcxLastModifiedDate+"&McxInstrumentInfo="+mcxInstrumentInfo+
			       "&McxTenderPeriodStartDate="+mcxTenderPeriodStartDate+"&McxTenderPeriodEndDate="+mcxTenderPeriodEndDate+"&McxInstrumentName="+mcxInstrumentName+"&McxOriginalExpiryDate="+mcxOriginalExpiryDate+
			       "&McxStrikePrice="+mcxStrikePrice+"&McxOptionType="+mcxOptionType+"&Displayname="+displayname,
			dataType: 'json',
			success:function(jsonObject){
			     
                // var jsonObject =JSON.parse(response);
                 var body; 
			     
			     for (var i = 0; i <jsonObject.length; i++) {
			    	 
			 		
			    	 var TokenTagMCX=JSON.stringify(jsonObject[i].Token);
		    		 
		    		 var ScriptTag=JSON.stringify(jsonObject[i].scriptName);
		    		 var priceTag=JSON.stringify(jsonObject[i].mcxOptionType);
		    		 var exchangeTag=JSON.stringify(jsonObject[i].exchange);
			    	 
		    		
body=body+"<tr id='TokenTagMCX' onmouseover='stockbuybtnmouseover("+TokenTagMCX+")' onmouseout='stockbuybtnmouseout("+TokenTagMCX+")'>"

body=body+"<td>"+jsonObject[i].scriptName+"&nbsp;&nbsp;&nbsp;"+jsonObject[i].mcxOptionType+"&nbsp;&nbsp;&nbsp;<label style='background-color:#32CD32'>"+jsonObject[i].exchange+"</label>"
		 		 		
body=body+"</td>";
		 			
		 		body=body+"</tr>";

			     } 
			     
			  //   $("#heederlisthiddId").hide();
			        	
			     $("#scriptlisthiddId").show();
			     			     
			     $('#addscriptId').html(body); 
			     
			     getscriptrefresh();
			     
			     
			     
		  				    
			},
			error:function(){
				//alert("AddScript Error");
				
			
			}	
		});
		
}


function addScriptNse(scriptname,token,exchange,nseSymbol,nseSeries,nseInstrumentType,nseIssuedCapital,nseCreditRating,nseBoardLotQuantity,
		nseTickSize,nseIssueStartDate,nseIssueIPDate,nseIssueMaturityDate,nseFreezePercent,nseListingDate,nseExpulsionDate,nseReAdmissionDate,nseExDate,nseRecordDate,nseFaceValue,nseISINNo,displayname){

	$('#SearchdivbodyId').hide();
	$('#EqtySearchdivbodyId').hide();
	

		
		 var topic = token;
	    // var topic1 = "Device/MainTopic2";
	     var qos = 0;
	     
	    
	    tokenArray.push(token);

	  $.ajax({
			type :'POST',
			url :'addScriptNse',
			data :'Token='+token+"&Exchange="+exchange+"&Scriptname="+encodeURIComponent(scriptname)+"&NseSymbol="+nseSymbol+"&NseSeries="+nseSeries+"&NseInstrumentType="+nseInstrumentType+
			"&NseIssuedCapital="+nseIssuedCapital+"&NseCreditRating="+nseCreditRating+"&NseBoardLotQuantity="+nseBoardLotQuantity+"&NseTickSize="+nseTickSize+"&NseIssueStartDate="+nseIssueStartDate+"&NseIssueIPDate="+nseIssueIPDate+"&NseIssueMaturityDate="+nseIssueMaturityDate+
			"&NseFreezePercent="+nseFreezePercent+"&NseListingDate="+nseListingDate+"&NseExpulsionDate="+nseExpulsionDate+"&NseReAdmissionDate="+nseReAdmissionDate+"&NseExDate="+nseExDate+
			"&NseRecordDate="+nseRecordDate+"&NseFaceValue="+nseFaceValue+"&NseISINNo="+nseISINNo+"&Displayname="+displayname,
			dataType: 'html',
			success:function(jsonObject){
			     
                // var jsonObject =JSON.parse(response);
                 var body; 
			     
			     for (var i = 0; i <jsonObject.length; i++) {
			    	 
			    	 var TokenTagNSE=JSON.stringify(jsonObject[i].Token);
			    	 
		    		 var ScriptTag=JSON.stringify(jsonObject[i].scriptName);
		    		 var priceTag=JSON.stringify(jsonObject[i].nseSymbol);
		    		 var exchangeTag=JSON.stringify(jsonObject[i].exchange);
			 		
			    	 body=body+"<tr class='Field' id='TokenTagNSE' onmouseover='stockbuybtnmouseover("+TokenTagNSE+")' onmouseout='stockbuybtnmouseout("+TokenTagNSE+")'>"
				 		
		    		 	body=body+"<td class='Field'>"+jsonObject[i].scriptName+"&nbsp;&nbsp;"+jsonObject[i].nseSymbol+"&nbsp;&nbsp;&nbsp;<label style='background-color:#32CD32'>"+jsonObject[i].exchange+"</label>"
				 		body=body+"</td>";
				 		body=body+"</tr>";

			     } 

           
			  //   $("#heederlisthiddId").hide();
			        	
			     $("#scriptlisthiddId").show();
			     
			     
			     $('#addscriptId').html(body); 
			     
			     getscriptrefresh();
		
		         
			},
			error:function(){
			//	alert("AddScript Error");
				
			
			}	
		});
	  
	
}


function addScriptNfo(scriptname,token,exchange,nfoinstrument_name,nfoSeries,nfoexpiry_date,
		nfostrike_price,nfooption_type,nfoissue_infostart_date,nfoissue_infomaturity_date,nfoboard_lot_quantity,nfoStockname,displayname){
	$('#SearchdivbodyId').hide();
	$('#NfoSearchdivbodyId').hide();
	
	tokenArray.push(token);
	 
	$.ajax({
			type :'POST',
			url :'addScriptNfo',
			data :'Token='+token+"&Exchange="+exchange+"&Scriptname="+encodeURIComponent(scriptname)+"&Nfoinstrument_name="+nfoinstrument_name+"&NfoSeries="+nfoSeries+
			       "&Nfoexpiry_date="+nfoexpiry_date+"&Nfostrike_price="+nfostrike_price+"&Nfooption_type="+nfooption_type+"&Nfoissue_infostart_date="+nfoissue_infostart_date+
			       "&Nfoissue_infomaturity_date="+nfoissue_infomaturity_date+"&Nfoboard_lot_quantity="+nfoboard_lot_quantity+"&NfoStockname="+nfoStockname+"&Displayname="+displayname,
			dataType: 'json',
			success:function(jsonObject){
			     
               //  var jsonObject =JSON.parse(response);
                 var body; 
			     
			     for (var i = 0; i <jsonObject.length; i++) {
			    	 
			 		
			    	 var TokenTagNFO=JSON.stringify(jsonObject[i].Token);
		    		 var ScriptTag=JSON.stringify(jsonObject[i].scriptName);
					 var PriceTag =JSON.stringify(jsonObject[i].nfostrike_price);
					 var exchangeTag=JSON.stringify(jsonObject[i].exchange);

		    		 	body=body+"<tr id='TokenTagNFO' onmouseover='stockbuybtnmouseover("+TokenTagNFO+")' onmouseout='stockbuybtnmouseout("+TokenTagNFO+")'>"								
		    		 	
				 		body=body+"<td class='Field'>"+jsonObject[i].scriptName+"&nbsp;&nbsp;"+jsonObject[i].nfoSymbol+"&nbsp;&nbsp;&nbsp;"+jsonObject[i].nfostrike_price+"&nbsp;&nbsp;&nbsp;<label style='background-color:#32CD32'>"+jsonObject[i].exchange+"</label>"
				 		
				 		body=body+"</td>";
				 		
				 		body=body+"</tr>";

			     } 
			     
			  //   $("#heederlisthiddId").hide();
			        	
			     $("#scriptlisthiddId").show();
			     
			     $('#addscriptId').html(body); 
			     
			     getscriptrefresh();

			},
			error:function(){
			//	alert("AddScript Error");
				
			
			}	
		});
	
	
	
}











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
	  }
	  else {
		  buyId.style.display = "block";
		  sellId.style.display = "none";
		  $('.inner-circle').css('marginLeft','0px');
	  }	  
	});
	
	 function onclickstocksellbtnToggle(){		
		 var act = $('.toggle-btn').hasClass("active");			
			if(act==true){
				act= true;
				$('.inner-circle').css('marginLeft','30px');
			}else if(act==false){	
				act= true;
				$('.inner-circle').css('marginLeft','30px');				
			}			 
		} 
	 function onclickstockbuybtnToggle(){		
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
//		      $("#priceId").val("0");
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
//		      $("#priceId").val("0");
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
		

		

</script>


</body>
</html>