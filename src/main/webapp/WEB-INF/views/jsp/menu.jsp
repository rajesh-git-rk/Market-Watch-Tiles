
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
		<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
		
		
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
  width:44.556%;
  height:10%;
  padding: 5px 5px 5px 5px;
  cursor: pointer;
  font-size: 12px;
font-family: "Helvetica Neue",sans-serif;	
font-weight: normal;


}

.watchlistbutton{
   
    margin-right:2px;
     width: 33px;
    border-radius: 25%;
    background-color: #36b9cc;
    border-color: #36b9cc;
    box-shadow: none;
    border-style: solid;
    height: 31px;
    color: white;
}
.pagination button {
  

  text-decoration: none;
  transition: background-color .3s;

}

.pagination a.active {
  background-color: blue;
  color: white;
  border: 1px solid  dodgerblue;
}

.pagination button:hover:not(.active) {background-color: #ddd;
  border:#ddd}

#editIcon{
    margin-top: 8px;
    font-size: 13px;
    margin-left: 5px;
}

.watchlistNameLabel {
    margin-top: 3px;
    margin-left: 9px;
    /* padding-left: 60px; */
}
 .edit-input {
    display:none;
}


  
</style>

<style type="text/css">

.searchtab {
  background-color: #f5f8fd !important;
  /*  width:430px; */
   margin-left:0px;
}

.searchtab tr:hover {
 /*  background-color: #ddd; */
   background-color: #c1efef !important;
}

.searchtab tr.active {
  /* background-color: #ccc; */
  background-color:#c1efef;
  
} 

.coltd {
    flex: 0 0 66.66667%;
    /* max-width: 66.66667%; */
}

.alltab button.active {
  /* background-color: #ccc; */
  background-color:#4e73df !important;
  color: #fff;
  
}
.alltab button:hover {
 /*  background-color: #ddd; */
   background-color: #4e73df !important;
   color: #fff !important;
}


</style>
		
		
<script type="text/javascript">
	var tokenArray = new Array();
	var tokenId;
	
	var client;

	// var mqttHost = '127.0.0.1';
	var mqttHost = '192.168.1.179';

	var searchTokenArray = new Array();
	var searchTokenId;
	var searchBodyArray = new Array();
	var marketwatchListCountArray = new Array();
</script>

<script src="./resourcefiles/AccessJs/OrderbookJS.js"></script>
<script src="./resourcefiles/AccessJs/PintickerJS.js"></script>
<script src="./resourcefiles/AccessJs/OptionChainJS.js"></script>
<script src="./resourcefiles/AccessJs/ScriptSortSettingJS.js"></script>
</head>
<body>

	<div id="left-bar" style="border-right-style: ridge; border-left-style: ridge; margin-left: 1px; margin-top: -25px; border-color: #e3e6f0; border-width: thin"
		class="row sidebar sidebar-dark accordion">
		
		<div class="col-md-13" style="margin-top: 14px; margin-left: -9px;"> 

			<div class="input-group">
				<input type="text" id="search" autocomplete="off"
					style="position:relative;width: 290px; margin-left:0px; border-style: outset; text-transform: uppercase; font-size: 11px; font-weight: bold; background-color: #F5F8FD !important"
					class="form-control bg-light border-0 small"
					placeholder="Search..." aria-label="Search"
					aria-describedby="basic-addon2">
					<label id="scriptCount" style="margin-top: 4px;position: absolute;margin-left: 318px;"></label>
					<span style="cursor: pointer; margin-top: 0px; display: none;"
						id="searchcloseId" onclick="closefun()" ><i class="fa fa-times-circle" style="font-size:30px;margin-right:0px;margin-left:0px;"></i></span>
						<span id="searchiconId" class="btn btn-primary" ><i class="fas fa-search fa-sm"></i></span>
				<!-- <div class="input-group-append">
				
					 <button id="searchiconId" class="btn btn-primary" type="button">
						<i class="fas fa-search fa-sm"></i>
					 </button> 
					</div> -->
					
		<div class="alltab" id="alltabId">
              <button class="w3-bar-item w3-button active"  id="allId" onclick="allfun(event, 'All')" data-interest = "All" >All</button>
              <button class="w3-bar-item w3-button" id="eqtyId" onclick="eqtyfun(event, 'EQ')" data-interest = "EQ">EQ</button>
              <button class="w3-bar-item w3-button"  id="nfoId" onclick="nfofun(event, 'F&O')" data-interest = "F&O">F&O</button>
              <button class="w3-bar-item w3-button"  id="commodityId" onclick="commodityfun(event, 'Commodity')" data-interest = "Commodity">Commodity</button>             
              <!-- <button class="w3-bar-item w3-button"  id="currencyId" onclick="currencyfun(event, 'Currency')" data-interest = "Currency" >Currency</button> -->             
        
          </div>
          

					
		  <div class="pagination"  id="paginationId" style="margin-left:10px;margin-top: 4px;">
				
		    	 <button href="#"  role="button" onclick="watchlistOne();" id="watchlistbtnId" name="watchlistbtnId1" class="btn  btn-info watchlistbutton buttonOne ">1</button>
			     <button href="#" id="watchlistbtnId" onclick="watchlistTwo();" class="btn btn-info    watchlistbutton " >2</button>
		     	 <button href="#" id="watchlistbtnId" onclick="watchlistThree();" class="btn  btn-info watchlistbutton" >3</button>
			     <button href="#" id="watchlistbtnId"  onclick="watchlistFour();" class="btn  btn-info  watchlistbutton" >4</button>
			     <button href="#" id="watchlistbtnId" onclick="watchlistFive();"  class="btn   btn-info  watchlistbutton">5</button>
			
 			 <label id="nameLabel" class="text-info watchlistNameLabel"></label>
 			<!--    <i class="fa fa-plus-circle controls" href="#" onclick="addContent()" style="font-size: 20px; color: lightslategrey;" type="button" id="addName"  ></i> -->
			 <i id="editIcon" href="#" class="fas fa-pen"  onclick="EditContent(); "  type="button" aria-hidden="true"></i>
			
				<div>
<!-- 			 <i class="fas fa-sort-amount-down-alt"></i> -->
			 	<input type="hidden" id="SortingbyfieldhiddenvalueId" name="SortingbyfieldhiddenvalueId">
                <input type="hidden" id="SortingbyOrderhiddenvalueId" name="SortingbyOrderhiddenvalueId">	
			 <i class=" fas fa-sort-amount-down-alt"  id="SortSettingId" style="margin-left:40px;margin-top:10px;font-size:20px;color:blue;" onclick="ShowModalScritSetting(SortingbyfieldhiddenvalueId,SortingbyOrderhiddenvalueId);" style="" data-toggle="modal"  data-target="#myModalScriptSetting" ></i>             
			 
				<input type="image" src="${pageContext.request.contextPath}/resourcefiles/image/Sort_Setting.png" style=" width:5%;margin-left: 90%;" id="SortSettingId" onclick="ShowModalScritSetting(SortingbyfieldhiddenvalueId,SortingbyOrderhiddenvalueId);" data-toggle="modal"  data-target="#myModalScriptSetting"  alt="Button A">
			</div>
			
			
			</div> 
			

					
         
				</div>
				
				
			
			<div style="clear:both; height:5px;"></div>
			
          
			
			<div id="SearchdivbodyId" style="padding-left: -27px; margin-top: 0px; cursor: pointer; font-size: 11px; font-weight: bold;"></div>
		<div id="EqtySearchdivbodyId" style="display: none;"></div>
		<div id="NfoSearchdivbodyId" style="display: none;"></div>
		<div id="CommoditySearchdivbodyId" style="display: none;"></div>
		<div id="CurrenySearchdivbodyId" style="display: none;"></div> 
			
			<div id="scriptlisthiddId" style="width:397px;">
			<div class="tab-pane fade show active" id="scriptbodylistId"
				role="tabpanel">
				<table class="table-responsive" id="Grid"> 
					<tbody id="refreshscriptId" style="background-color:#F5F8FD" onclick="getscriptrefresh()">
<!-- 					<tbody id="refreshscriptId" style="background-color:#F5F8FD" onclick="getMarketwatchListById()"> -->
						

						<tr id="addscriptId"></tr>

					</tbody>
				</table>
			</div>
		</div>
        
		</div>
		 

    
    
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
   		
   		<input type="hidden" id="setScriptNamehiddenId" name="setScriptNamehiddenId" >
   		<input type="hidden" id="setpricehiddenId" name="setpricehiddenId" >
   		<input type="hidden" id="setexchangehiddenId" name="setexchangehiddenId" >
   		<input type="hidden" id="settokenhiddenId" name="settokenhiddenId" >
   		<input type="hidden" id="setmcxOriginalExpiryDatehiddenId" name="setmcxOriginalExpiryDatehiddenId" >
   		<input type="hidden" id="setnseExDatehiddenId" name="setnseExDatehiddenId" >
   		<input type="hidden" id="setnfoexpiry_datehiddenId" name="setnfoexpiry_datehiddenId" >
   		
   		<input type="hidden" id="setstockdisplaynameId" name="setstockdisplaynameId" >
   		<input type="hidden" id="setmcxticksizeId" name="setmcxticksizeId" >
   		<input type="hidden" id="setmcxexpirydateId" name="setmcxexpirydateId" >
   		<input type="hidden" id="setnseticksizeId" name="setnseticksizeId" >
   		<input type="hidden" id="setnseexpirydateId" name="setnseexpirydateId" >
   		<input type="hidden" id="setnfoexpirydateId" name="setnfoexpirydateId" >
   		<input type="hidden" id="setmcxInstrumentCodeId" name="setmcxInstrumentCodeId" >
   		<input type="hidden" id="setmcxStrikePriceId" name="setmcxStrikePriceId" >
   		<input type="hidden" id="setmcxOptionTypeId" name="setmcxOptionTypeId" >
   		<input type="hidden" id="setmcxInstrumentNameId" name="setmcxInstrumentNameId" >
   		<input type="hidden" id="setmcxInstrumentSeriesId" name="setmcxInstrumentSeriesId" >
   		<input type="hidden" id="setnseSymbolId" name="setnseSymbolId" >
   		<input type="hidden" id="setnseSeriesId" name="setnseSeriesId" >
   		<input type="hidden" id="setnfosymbolId" name="setnfosymbolId" >
   		<input type="hidden" id="setnfostrike_priceId" name="setnfostrike_priceId" >
   		<input type="hidden" id="setnfooption_typeId" name="setnfooption_typeId" >
   		<input type="hidden" id="setnfoinstrument_nameId" name="setnfoinstrument_nameId" >
   		
<div style="padding-top:-10px;">
           <i class="fas fa-paperclip swd-button"  style="margin-top:4%;" aria-hidden="true"></i>
       <label class="swd-button fonts_14" style="margin-left:5px;padding-left: 10%;" >Pin</label> 
       <button type="button"  style="margin-left:25px;width:15%;height:35%;" class= "Sortingbtn btn swd-button fonts_1"   id='PintickerPagebuttonIdOne' name='PintickerPagebuttonIdOne'  onclick='pinTickerfunOne(scripthiddenId,tokenhiddenId)' value="1" >1</button>
      <button type="button" style="width:15%;height:35%;"  class= "Sortingbtn btn swd-button fonts_1"   id='PintickerPagebuttonIdTwo' name='PintickerPagebuttonIdTwo'  onclick='pinTickerfunTwo(scripthiddenId,tokenhiddenId)'  value="2"  >2</button>
        <br>  <br>   <i class="fa fa-bell "></i> <label style="padding-left: 10%;cursor:pointer;" id="setalertId"  onclick="setAlert()" data-toggle="modal"  data-target="#myModalAlertSet" class="fonts_14">Set alert</label>
        <br>  <br>  <i class="fa fa-remove "></i>  <label onclick="deleteScript()" style="padding-left: 10%;cursor:pointer;">Remove</label>
       
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
        <i class=" Sortingbtn swd-button  fa fa-sort-alpha-desc "  style="margin-left: 3%;display:none;" onclick="SortingOrderfunctionAZ();"  id="AZSortdescId" >&nbsp; Symbol</i>             
         <i class=" Sortingbtn swd-button  fa fa-sort-alpha-asc "  style="margin-left: 3%;display:none;" onclick="SortingOrderfunctionAZ();"  id="AZSortascId" >&nbsp;Symbol</i>             
          <i class=" Sortingbtn swd-button  fa fa-sort-alpha-desc"  style="margin-left: 3%;display:none;" onclick="SortingOrderfunctionExchange();"  id="EXCSortdescId" >&nbsp;Exchange</i>             
          <i class=" Sortingbtn swd-button  fa fa-sort-alpha-asc "  style="margin-left: 3%;display:none;" onclick="SortingOrderfunctionExchange();"  id="EXCSortascId" >&nbsp;Exchange</i>             
                
<!--                   <button type="button"  style= "margin-left: 4%;display:none;"  class= "fonts_1 Sortingbtn swd-button  fa fa-sort-alpha-desc "  onclick="SortingOrderfunctionAZ();"  id="AZSortdescId" >Symbol</button> -->

<!--                   <button type="button"  style= "margin-left: 4%;display:none;"  class= "fonts_12 Sortingbtn swd-button  fa fa-sort-alpha-asc "  onclick="SortingOrderfunctionAZ();"  id="AZSortascId" >Symbol</button> -->
<!--                   <button type="button"  style= "margin-left: 0%;" class= "fonts_12 Sortingbtn  swd-button fa fa-sort-alpha-desc" onclick="SortingOrderfunctionExchange()"  id="EXCSortdescId" >Exchange</button> -->
<!--                  <button type="button"  style= "margin-left: 0%;" class= "fonts_12 Sortingbtn  swd-button fa fa-sort-alpha-asc" onclick="SortingOrderfunctionExchange()"  id="EXCSortascId" >Exchange</button> -->
                  
     </div>
      <div>
               <br>   
                <button type="button"  style= "margin-left: 3%;" class= "Sortingbtn  swd-button" onclick="SortingOrderfunctionLTP()" id="LTPSortId"> LTP</button>
                <button type="button" style= "margin-left: 3%;" class= "Sortingbtn   swd-button" onclick="SortingOrderfunctionPercentage()" id="PercentageSortId" >% </button>
              </div>   
      </div>
    </div>
  </div>
</div>
<!--    ScriptSort_Setting Modal END-->















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
		//headers: {'Authorization' : 'Authorization'},
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
	             searchBodyArray.push(tokenId);
	           //  marketwatchListCountArray.push(response.length);
	           
	           //alert("response.length"+response.length);
						var marketwatch_name=response[i].marketwatchid.marketwatch_name;
						document.getElementById("nameLabel").innerHTML=marketwatch_name;
						
						var scriptCount=response.length;
						//alert("scriptCount::"+scriptCount);
					    document.getElementById("scriptCount").innerHTML=scriptCount+"/50";
				
	     		body=body+"<tr  id='"+response[i].token+"_mydivId'  onmouseover='stockbuybtnmouseover("+token+")' onmouseout='stockbuybtnmouseout("+token+")' style='height:40px;border-bottom: 1px solid lightcyan;'>";
	             
				body=body+"<td  class='Field' id='"+response[i].token+"'  style='height:40px;width:350px;padding-left:15px; padding-top:20px;padding-bottom: 10px;'>"
				body=body+" <span style='display:block;'><i class='icon ion-md-star'></i>"+response[i].scriptName+"&nbsp;<label class='addbtn'>"+response[i].exchange+"</label>";
             	  "<input type='hidden' id='mydivhiddenId' name='mydivhiddenId' value='"+response[i].token+"_mydivId' />";
             	body=body+" </span> ";
				body=body+"<div   id='"+response[i].token+"_stockbuysell' style='display:none'>";
				body=body+"<i class='icon ion-md-star'></i>"+response[i].scriptName+"&nbsp;"
				 
				//body=body+"<a id='"+response[i].token+"_stockbuysell'    name='stockbuyName' href='#' onclick='onclickstockbuybtnToggle(); changeModalContent(event);  onclickstockbuybtn("+scriptName+","+price+","+exchange+","+token+","+displayname+","+mcxTickSize+","+mcxOriginalExpiryDate+","+nseTickSize+","+nseExDate+","+nfoexpiry_date+","+mcxInstrumentCode+","+mcxStrikePrice+","+mcxOptionType+","+mcxInstrumentName+","+mcxInstrumentSeries+","+nseSymbol+","+nseSeries+","+nfoSymbol+","+nfostrike_price+","+nfooption_type+","+nfoinstrument_name+")' data-toggle='modal'  data-target='#myModal' >buy</a>";
			
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
	        body=body+"<div class='icon facebook' onclick='onclickstockbuybtnToggle(); changeModalContent(event); onclickstockbuybtn("+scriptName+","+price+","+exchange+","+token+","+displayname+","+mcxTickSize+","+mcxOriginalExpiryDate+","+nseTickSize+","+nseExDate+","+nfoexpiry_date+","+mcxInstrumentCode+","+mcxStrikePrice+","+mcxOptionType+","+mcxInstrumentName+","+mcxInstrumentSeries+","+nseSymbol+","+nseSeries+","+nfoSymbol+","+nfostrike_price+","+nfooption_type+","+nfoinstrument_name+")' data-toggle='modal'  data-target='#myModal'><div class='tooltip'>Buy</div><span><i class='fab b-buy-b'></i></span></div>";
	        body=body+"<div class='icon twitter'  onclick='onclickstocksellbtnToggle(); changeModalContent(event);  onclickstocksellbtn("+scriptName+","+price+","+exchange+","+token+","+displayname+","+mcxTickSize+","+mcxOriginalExpiryDate+","+nseTickSize+","+nseExDate+","+nfoexpiry_date+","+mcxInstrumentCode+","+mcxStrikePrice+","+mcxOptionType+","+mcxInstrumentName+","+mcxInstrumentSeries+","+nseSymbol+","+nseSeries+","+nfoSymbol+","+nfostrike_price+","+nfooption_type+","+nfoinstrument_name+")'  data-toggle='modal'  data-target='#myModal'><div class='tooltip'>Sell</div><span><i class='fab s-sell-s'></i></span></div>"
	        
	        body=body+"<div class='icon instagram' onclick='loadChart();'><div class='tooltip'>Chart</div><span><i class='fab c-chart-c'></i></span></div>";
	        if(response[i].exchange=='NFO' && response[i].nfoinstrument_name!='XX'){
	        body=body+"<div class='icon instagram' onclick='OptionChainfun("+displayname+","+exchange+","+nfoexpiry_date+","+nfoinstrument_name+")'><div class='tooltip'>Option</div><span><i class='fab o-chart-o'>O</i></span></div>";
	        }
	        else{
		        body=body+"<div style='display:none;' class='icon instagram'><div class='tooltip' style='display:none;'>OptionChain</div><span><i class='fab o-chart-o'></i></span></div>";

	        }
 	        body=body+"<div class='icon instagram ' onclick='ShowModalMoreOption("+displayname+","+token+","+scriptName+","+price+","+exchange+","+token+","+mcxOriginalExpiryDate+","+nseExDate+","+nfoexpiry_date+","+displayname+","+mcxTickSize+","+mcxOriginalExpiryDate+","+nseTickSize+","+nseExDate+","+nfoexpiry_date+","+mcxInstrumentCode+","+mcxStrikePrice+","+mcxOptionType+","+mcxInstrumentName+","+mcxInstrumentSeries+","+nseSymbol+","+nseSeries+","+nfoSymbol+","+nfostrike_price+","+nfooption_type+","+nfoinstrument_name+")' data-toggle='modal'  data-target='#myModalMoreOption'><div class='tooltip'>More</div><span><i class='fa fa-bars'></i></span></div>";
	        body=body+"</div></div>"
	             	
					body=body+"<div   id='"+response[i].token+"_stockbuysell' style='display:none'>";
					body=body+"<i class='icon ion-md-star'></i>"+response[i].scriptName+"&nbsp;"
					 
				//	body=body+"<a id='"+response[i].token+"_stockbuysell'    name='stockbuyName' href='#' onclick='onclickstockbuybtnToggle(); changeModalContent(event);  onclickstockbuybtn("+scriptName+","+price+","+exchange+","+token+","+displayname+","+mcxTickSize+","+mcxOriginalExpiryDate+","+nseTickSize+","+nseExDate+","+nfoexpiry_date+","+mcxInstrumentCode+","+mcxStrikePrice+","+mcxOptionType+","+mcxInstrumentName+","+mcxInstrumentSeries+","+nseSymbol+","+nseSeries+","+nfoSymbol+","+nfostrike_price+","+nfooption_type+","+nfoinstrument_name+")' data-toggle='modal'  data-target='#myModal' >buy</a>";
				
					//body=body+"<button type='button'    id='"+response[i].token+"_stockbuysell'    name='stockbuyName'  onclick='onclickstockbuybtnToggle(); changeModalContent(event);  onclickstockbuybtn("+scriptName+","+price+","+exchange+","+token+","+displayname+","+mcxTickSize+","+mcxOriginalExpiryDate+","+nseTickSize+","+nseExDate+","+nfoexpiry_date+","+mcxInstrumentCode+","+mcxStrikePrice+","+mcxOptionType+","+mcxInstrumentName+","+mcxInstrumentSeries+","+nseSymbol+","+nseSeries+","+nfoSymbol+","+nfostrike_price+","+nfooption_type+","+nfoinstrument_name+")' data-toggle='modal'  data-target='#myModal' >BUY</button>";
					//body=body+"<button type='button'    id=''    								   name='stocksellName'  onclick='onclickstocksellbtnToggle(); changeModalContent(event);  onclickstocksellbtn("+scriptName+","+price+","+exchange+","+token+","+displayname+","+mcxTickSize+","+mcxOriginalExpiryDate+","+nseTickSize+","+nseExDate+","+nfoexpiry_date+","+mcxInstrumentCode+","+mcxStrikePrice+","+mcxOptionType+","+mcxInstrumentName+","+mcxInstrumentSeries+","+nseSymbol+","+nseSeries+","+nfoSymbol+","+nfostrike_price+","+nfooption_type+","+nfoinstrument_name+")'  data-toggle='modal'  data-target='#myModal'>SELL</button>";
					
					//body=body+"<button type='button'    class=' stocksellbtn swd-button' id=''    name='marketDepthName'  onclick='getMarketDepth("+scriptName+","+price+","+exchange+","+token+")' data-target='#modalMarketDepth' data-toggle='modal'>MD</button>"
					    
					    

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
			 $('#alltabId').hide();
			 $('#paginationId').show();
			 
			   
	         
		},
		error:function(){
			//alert("getMarketScript Error");
			
		
		}	
	});
}



$(document).ready(function(){
	
	getscriptrefresh();
	
	//getMarketwatchListById();
	
	//PinTicker
	PinTickerPrevioueLoadFunction();
	//Sort_Setting
	 ReadySortingOrderPrevioueLoadFunction();
	
	  client = new Paho.MQTT.Client(mqttHost, 8000, "topazclient");
	  client.onConnectionLost = onConnectionLost;
	  
	  client.onMessageArrived = onMessageArrived;

	  clientConnect(); 
	
	
$('.buttonOne').addClass("active");
    
	//getMarketwatchListById();
	
	
$("#search").keyup(function (e) {
	
	//	$("#heederlisthiddId").hide();
		
		
		var searchTerm = document.getElementById("search").value;
		
		  if(searchTerm.length >0){
			$("#scriptlisthiddId").hide();
			$("#searchcloseId").show();
			$("#searchiconId").hide();
			$('#alltabId').show();
			$('#paginationId').hide();
			
			
   
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
	    
	    var tabval = $('body').find('button.active').attr('data-interest');
	  		    
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
	        		var mcxExchange=jsonObject[i].properties.mcxExchange;
	        		
	        		searchTokenId=jsonObject[i].properties.mcxInstrumentIdentifier;
	            	searchTokenArray.push(searchTokenId);
	        		
	        		
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
		            
//	if(tabval==="All"){           
		            var found  =false;
		    		
		    		for(var j=0;j<searchBodyArray.length;j++){
		           		found = false;	 
		              
		            		if(searchBodyArray[j].toString()==jsonObject[i].properties.mcxInstrumentIdentifier.toString()){
		            			
		    					found = true;
		    				    break; 
		            		 	
		            		}else{
		            	}
		    		}
						  
				    
				 	
				 	body=body+"<tr class='dropdown searchtab w3-bar-item w3-button' id='"+jsonObject[i].properties.mcxInstrumentIdentifier+"_mcxscriptminusid' style='display:none;font-size:12px;font-family: Helvetica, Sans-Serif;border-bottom: 1px solid #c4f1f1;'>";
					body=body+"<td class='dropdown-content' style='height:40px;width:350px;text-align:left;padding-top:15px;padding-bottom: 10px;' > "+mcxInstrumentCode+"&nbsp;&nbsp;"+mcxexpiryDATEmyDate+"&nbsp;&nbsp;"+mcxbody+"&nbsp;&nbsp;"+mcxExchange+"&nbsp;&nbsp;"+"</td>";
					body=body+"<td style='font-size:25px; cursor:pointer;' onclick='mcxdeleteScript("+jsonObject[i].properties.mcxInstrumentIdentifier+")'><i class='fa fa-minus-circle'></i></td>";	       
				 	body=body+"</tr>";
				 	
				 	if(found == true){
				 		body=body+"<tr class='dropdown searchtab w3-bar-item w3-button' id='"+jsonObject[i].properties.mcxInstrumentIdentifier+"_mcxscriptminusid' style='display:block;font-size:12px;font-family: Helvetica, Sans-Serif;border-bottom: 1px solid #c4f1f1;'>";
						body=body+"<td class='dropdown-content' style='height:40px;width:350px;text-align:left;padding-top:15px;padding-bottom: 10px;' > "+mcxInstrumentCode+"&nbsp;&nbsp;"+mcxexpiryDATEmyDate+"&nbsp;&nbsp;"+mcxbody+"&nbsp;&nbsp;"+mcxExchange+"&nbsp;&nbsp;"+"</td>";
						body=body+"<td style='font-size:25px; cursor:pointer;' onclick='mcxdeleteScript("+jsonObject[i].properties.mcxInstrumentIdentifier+")'><i class='fa fa-minus-circle'></i></td>";	       
					 	body=body+"</tr>";	
				 		
				 	}else{
				 		body=body+"<tr class='dropdown searchtab w3-bar-item w3-button' id='"+jsonObject[i].properties.mcxInstrumentIdentifier+"_mcxscriptplusid' style='display:block;font-size:12px;font-family: Helvetica, Sans-Serif;border-bottom: 1px solid #c4f1f1;'>";
						body=body+"<td class='dropdown-content' style='height:40px;width:350px;text-align:left;padding-top:15px;padding-bottom: 10px;' > "+mcxInstrumentCode+"&nbsp;&nbsp;"+mcxexpiryDATEmyDate+"&nbsp;&nbsp;"+mcxbody+"&nbsp;&nbsp;"+mcxExchange+"&nbsp;&nbsp;"+"</td>";
						body=body+"<td style='font-size:20px; cursor:pointer;' onclick='addScriptMcx("+displayName+","+token+","+'"MCX"'+","+mcxInstrumentCodes+","+mcxInstrumentSeriess+","
						+mcxProductStartDates+","+mcxLastTradingDates+","+mcxLotSizes+","+mcxTickSizes+","+mcxDeliveryStartDates+","+mcxDeliveryEndDates+","+mcxLastModifiedDates+","
						+mcxInstrumentInfos+","+mcxTenderPeriodStartDates+","+mcxTenderPeriodEndDates+","+mcxInstrumentNames+","+mcxOriginalExpiryDates+","+mcxStrikePrices+","
						+mcxOptionTypes+","+scriptname+")'><i style='font-size: 25px;' class='fa fa-plus-circle'></i></td>";	       
					 	body=body+"</tr>";
				 	}
				 	

//	}	 	
				 	if(mcxInstrumentSeries=="XX"){
				 		
				 		var found  =false;
			    		
			    		for(var j=0;j<searchBodyArray.length;j++){
			           		found = false;	 
			              
			            		if(searchBodyArray[j].toString()==jsonObject[i].properties.mcxInstrumentIdentifier.toString()){
			            			
			    					found = true;
			    				    break; 
			            		 	
			            		}else{
			            	}
			    		}
				 		
				 		commoditybody=commoditybody+"<tr class='dropdown searchtab w3-bar-item w3-button' id='"+jsonObject[i].properties.mcxInstrumentIdentifier+"_mcxcomdtyscriptminusid' style='display:none;font-size:12px;font-family: Helvetica, Sans-Serif;border-bottom: 1px solid #c4f1f1;'>";
						commoditybody=commoditybody+"<td class='dropdown-content' style='height:40px;width:350px;text-align:left;padding-top:15px;padding-bottom: 10px;' > "+mcxInstrumentCode+"&nbsp;&nbsp;"+mcxexpiryDATEmyDate+"&nbsp;&nbsp;"+mcxbody+"&nbsp;&nbsp;"+mcxExchange+"&nbsp;&nbsp;"+"</td>";
						commoditybody=commoditybody+"<td style='font-size:25px; cursor:pointer;' onclick='mcxcomdtydeleteScript("+jsonObject[i].properties.mcxInstrumentIdentifier+")'><i class='fa fa-minus-circle'></i></td>";	       
						commoditybody=commoditybody+"</tr>";
						if(found == true){
							commoditybody=commoditybody+"<tr class='dropdown searchtab w3-bar-item w3-button' id='"+jsonObject[i].properties.mcxInstrumentIdentifier+"_mcxcomdtyscriptminusid' style='display:block;font-size:12px;font-family: Helvetica, Sans-Serif;border-bottom: 1px solid #c4f1f1;'>";
		        			commoditybody=commoditybody+"<td class='dropdown-content' style='height:40px;width:350px;text-align:left;padding-top:15px;padding-bottom: 10px;' > "+mcxInstrumentCode+"&nbsp;&nbsp;"+mcxexpiryDATEmyDate+"&nbsp;&nbsp;"+mcxbody+"&nbsp;&nbsp;"+mcxExchange+"&nbsp;&nbsp;"+"</td>";
		        			commoditybody=commoditybody+"<td style='font-size:25px; cursor:pointer;' onclick='mcxcomdtydeleteScript("+jsonObject[i].properties.mcxInstrumentIdentifier+")'><i class='fa fa-minus-circle'></i></td>";	       
		        			commoditybody=commoditybody+"</tr>";
						
						}else{
							commoditybody=commoditybody+"<tr class='dropdown searchtab w3-bar-item w3-button' id='"+jsonObject[i].properties.mcxInstrumentIdentifier+"_mcxcomdtyscriptplusid' style='display:block;font-size:12px;font-family: Helvetica, Sans-Serif;border-bottom: 1px solid #c4f1f1;'>";
					 		commoditybody=commoditybody+"<td class='dropdown-content' style='height:40px;width:350px;text-align:left;padding-top:15px;padding-bottom: 10px;'> "+mcxInstrumentCode+"&nbsp;&nbsp;"+mcxexpiryDATEmyDate+"&nbsp;&nbsp;"+mcxbody+"&nbsp;&nbsp;"+mcxExchange+"&nbsp;&nbsp;"+"</td>";
							commoditybody=commoditybody+"<td style='font-size:20px; cursor:pointer;' onclick='addScriptMcxCommodity("+displayName+","+token+","+'"MCX"'+","+mcxInstrumentCodes+","+mcxInstrumentSeriess+","
									+mcxProductStartDates+","+mcxLastTradingDates+","+mcxLotSizes+","+mcxTickSizes+","+mcxDeliveryStartDates+","+mcxDeliveryEndDates+","+mcxLastModifiedDates+","
									+mcxInstrumentInfos+","+mcxTenderPeriodStartDates+","+mcxTenderPeriodEndDates+","+mcxInstrumentNames+","+mcxOriginalExpiryDates+","+mcxStrikePrices+","
									+mcxOptionTypes+","+scriptname+")'><i class='fa fa-plus-circle' style='font-size: 25px;' ></i></td>";
							commoditybody=commoditybody+"</tr>";
						}

					 	

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
            var nseExchange=jsonObject[i].properties.nseExchange;
            
            
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
            
            searchTokenId=jsonObject[i].properties.nseToken;
        	searchTokenArray.push(searchTokenId);
        	
        	//searchBodyArray
        	
// if(tabval==="All"){ 
        	//alert("nsetoken:::"+searchBodyArray.length);
		var found  =false;
		
		for(var k=0;k<searchBodyArray.length;k++){
       		found = false;	 
          
        		if(searchBodyArray[k].toString()==jsonObject[i].properties.nseToken.toString()){
        			
					found = true;
				    break; 
        		 	
        		}else{
        	}
		}
		    body=body+"<tr class='dropdown  searchtab w3-bar-item w3-button' id='"+jsonObject[i].properties.nseToken+"_nsescriptminusid' style='display:none;font-size:12px;font-family: Helvetica, Sans-Serif;border-bottom: 1px solid #c4f1f1;'>";
		 	body=body+"<td  class='dropdown-content'  style='height:40px;width:350px; text-align:left;padding-top:15px;padding-bottom: 10px;'> "+nseName+"&nbsp;&nbsp;"+nseSeries+"&nbsp;&nbsp;"+nseSymbol+"&nbsp;&nbsp;"+nseExchange+"&nbsp;&nbsp;"+"</td>";			
			body=body+"<td style='font-size:25px; cursor:pointer;' onclick='nsedeleteScript("+jsonObject[i].properties.nseToken+")' ><i class='fa fa-minus-circle'></i></td>";
		 	body=body+"</tr>"; 
		 	

        		if(found == true){
            			body=body+"<tr class='dropdown  searchtab w3-bar-item w3-button' id='"+jsonObject[i].properties.nseToken+"_nsescriptminusid' style='display:block;font-size:12px;font-family: Helvetica, Sans-Serif;border-bottom: 1px solid #c4f1f1;'>";
            		 	body=body+"<td  class='dropdown-content'  style='height:40px;width:350px; text-align:left;padding-top:15px;padding-bottom: 10px;'> "+nseName+"&nbsp;&nbsp;"+nseSeries+"&nbsp;&nbsp;"+nseSymbol+"&nbsp;&nbsp;"+nseExchange+"&nbsp;&nbsp;"+"</td>";			
            			body=body+"<td style='font-size:25px; cursor:pointer;' onclick='nsedeleteScript("+jsonObject[i].properties.nseToken+")' ><i class='fa fa-minus-circle'></i></td>";
            		 	body=body+"</tr>";
            		 	
            		}else{
            		
            		//	alert("searchBodyArray[k]"+searchBodyArray[k]);
            		
            	    body=body+"<tr class='dropdown  searchtab w3-bar-item w3-button' id='"+jsonObject[i].properties.nseToken+"_nsescriptplusid' style='display:block;font-size:12px;font-family: Helvetica, Sans-Serif;border-bottom: 1px solid #c4f1f1;'>";
                    body=body+"<td  class='dropdown-content'  style='height:40px;width:350px; text-align:left;padding-top:15px;padding-bottom: 10px;'> "+nseName+"&nbsp;&nbsp;"+nseSeries+"&nbsp;&nbsp;"+nseSymbol+"&nbsp;&nbsp;"+nseExchange+"&nbsp;&nbsp;"+"</td>";
                	body=body+"<td style='font-size:20px; cursor:pointer;' onclick='addScriptNse("+displayName+","+token+","+'"NSE"'+","+nseSymbols+","
                	+nseSeriess+","+nseInstrumentTypes+","+nseIssuedCapitals+","+nseCreditRatings+","+nseBoardLotQuantitys+","
                	+nseTickSizes+","+nseIssueStartDates+","+nseIssueIPDates+","+nseIssueMaturityDates+","+nseFreezePercents+","
                	+nseListingDates+","+nseExpulsionDates+","+nseReAdmissionDates+","+nseExDates+","+nseRecordDates+","+nseFaceValues+","
                	+nseISINNos+","+scriptname+")'><i class='fa fa-plus-circle' style='font-size: 25px;' ></i></td>";
                	body=body+"</tr>"; 

	        } 
        		
  // } 
	   
	   
	   
	   if(nseSeries=="EQ"){
		 		
		 		var found  =false;
				
				for(var k=0;k<searchBodyArray.length;k++){
		       		found = false;	 
		          
		        		if(searchBodyArray[k].toString()==jsonObject[i].properties.nseToken.toString()){
		        			
							found = true;
						    break; 
		        		 	
		        		}else{
		        	}
				}
				
				eqtybody=eqtybody+"<tr class='dropdown  searchtab w3-bar-item w3-button' id='"+jsonObject[i].properties.nseToken+"_nseeqtyscriptminusid' style='display:none;font-size:12px;font-family: Helvetica, Sans-Serif;border-bottom: 1px solid #c4f1f1;'>";
				eqtybody=eqtybody+"<td  class='dropdown-content'  style='height:40px;width:350px; text-align:left;padding-top:15px;padding-bottom: 10px;'> "+nseName+"&nbsp;&nbsp;"+nseSeries+"&nbsp;&nbsp;"+nseSymbol+"&nbsp;&nbsp;"+nseExchange+"&nbsp;&nbsp;"+"</td>";			
				eqtybody=eqtybody+"<td style='font-size:25px; cursor:pointer;' onclick='nseeqtydeleteScript("+jsonObject[i].properties.nseToken+")' ><i class='fa fa-minus-circle'></i></td>";
				eqtybody=eqtybody+"</tr>"; 
				
				if(found == true){
					
					eqtybody=eqtybody+"<tr class='dropdown  searchtab w3-bar-item w3-button' id='"+jsonObject[i].properties.nseToken+"_nseeqtyscriptminusid' style='display:block;font-size:12px;font-family: Helvetica, Sans-Serif;border-bottom: 1px solid #c4f1f1;'>";
        			eqtybody=eqtybody+"<td  class='dropdown-content'  style='height:40px;width:350px; text-align:left;padding-top:15px;padding-bottom: 10px;'> "+nseName+"&nbsp;&nbsp;"+nseSeries+"&nbsp;&nbsp;"+nseSymbol+"&nbsp;&nbsp;"+nseExchange+"&nbsp;&nbsp;"+"</td>";			
        			eqtybody=eqtybody+"<td style='font-size:25px; cursor:pointer;' onclick='nseeqtydeleteScript("+jsonObject[i].properties.nseToken+")' ><i class='fa fa-minus-circle'></i></td>";
        			eqtybody=eqtybody+"</tr>";	
		 		
				}else{
					eqtybody=eqtybody+"<tr class='dropdown searchtab w3-bar-item w3-button' id='"+jsonObject[i].properties.nseToken+"_nseeqtyscriptplusid' style='display:block;font-size:12px;font-family: Helvetica, Sans-Serif;border-bottom: 1px solid #c4f1f1;'>";
			 		eqtybody=eqtybody+"<td class='dropdown-content' style='height:40px;width:350px;text-align:left;padding-top:15px;padding-bottom: 10px;' > "+nseName+"&nbsp;&nbsp;"+nseSeries+"&nbsp;&nbsp;"+nseSymbol+"&nbsp;&nbsp;"+nseExchange+"&nbsp;&nbsp;"+"</td>";
					eqtybody=eqtybody+"<td style='font-size:20px; cursor:pointer;' onclick='addScriptNseEqty("+displayName+","+token+","+'"NSE"'+","+nseSymbols+","
								+nseSeriess+","+nseInstrumentTypes+","+nseIssuedCapitals+","+nseCreditRatings+","+nseBoardLotQuantitys+","
								+nseTickSizes+","+nseIssueStartDates+","+nseIssueIPDates+","+nseIssueMaturityDates+","+nseFreezePercents+","
								+nseListingDates+","+nseExpulsionDates+","+nseReAdmissionDates+","+nseExDates+","+nseRecordDates+","+nseFaceValues+","
								+nseISINNos+","+scriptname+")'><i class='fa fa-plus-circle' style='font-size: 25px;' ></i></td>";	       
					eqtybody=eqtybody+"</tr>";
				}
				 
			 	

	       	 

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
	            var nfoExchange=jsonObject[i].properties.nfoExchange;
	            
	            searchTokenId=jsonObject[i].properties.nfoToken;
            	searchTokenArray.push(searchTokenId);
	            
	            
	            const monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
        		var nfoexpiryDATE=nfoexpiry_date;
				
				 var myDate = new Date(nfoexpiryDATE);
				
				 var nfoexpiryDATEmyDate = +myDate.getDate() +monthNames[myDate.getMonth()];
				 
				 var nfobody;
				 var displayName;
	            var nfooption;
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
	            
	// if(tabval==="All"){ 
		 
	            var found  =false;
	    		
	    		for(var l=0;l<searchBodyArray.length;l++){
	           		found = false;	 
	              
	            		if(searchBodyArray[l].toString()==jsonObject[i].properties.nfoToken.toString()){
	            			
	    					found = true;
	    				    break; 
	            		 	
	            		}else{
	            	}
	    		}

	    		
	    		body=body+"<tr class='dropdown searchtab w3-bar-item w3-button' id='"+jsonObject[i].properties.nfoToken+"_nfoscriptminusid' style='display:none;font-size:12px;font-family: Helvetica, Sans-Serif;border-bottom: 1px solid #c4f1f1;'>";
				body=body+"<td class='dropdown-content' style='height:40px;width:350px;text-align:left;padding-top:15px;padding-bottom: 10px;'> "+nfoSymbol+"&nbsp;&nbsp;"+nfoexpiryDATEmyDate+"&nbsp;&nbsp;"+nfobody+"&nbsp;&nbsp;"+nfoExchange+"&nbsp;&nbsp;"+"</td>";
				body=body+"<td style='font-size:25px; cursor:pointer;' onclick='nfodeleteScript("+jsonObject[i].properties.nfoToken+")'><i class='fa fa-minus-circle'></i></td>";

			 	body=body+"</tr>";
			 	
			 	
			 	if(found==true){
			 	//	alert("test if:::"+jsonObject[i].properties.nfoToken);
			 		body=body+"<tr class='dropdown searchtab w3-bar-item w3-button' id='"+jsonObject[i].properties.nfoToken+"_nfoscriptminusid' style='display:block;font-size:12px;font-family: Helvetica, Sans-Serif;border-bottom: 1px solid #c4f1f1;'>";
    				body=body+"<td class='dropdown-content' style='height:40px;width:350px;text-align:left;padding-top:15px;padding-bottom: 10px;'> "+nfoSymbol+"&nbsp;&nbsp;"+nfoexpiryDATEmyDate+"&nbsp;&nbsp;"+nfobody+"&nbsp;&nbsp;"+nfoExchange+"&nbsp;&nbsp;"+"</td>";
    				body=body+"<td style='font-size:25px; cursor:pointer;' onclick='nfodeleteScript("+jsonObject[i].properties.nfoToken+")'><i class='fa fa-minus-circle'></i></td>";
    			 	body=body+"</tr>";
			 	}else{
			 	//	alert("test else:::"+jsonObject[i].properties.nfoToken);
			 		
			 		body=body+"<tr class='dropdown searchtab w3-bar-item w3-button' id='"+jsonObject[i].properties.nfoToken+"_nfoscriptplusid' style='display:block;font-size:12px;font-family: Helvetica, Sans-Serif;border-bottom: 1px solid #c4f1f1;'>";
					body=body+"<td class='dropdown-content' style='height:40px;width:350px;text-align:left;padding-top:15px;padding-bottom: 10px;'> "+nfoSymbol+"&nbsp;&nbsp;"+nfoexpiryDATEmyDate+"&nbsp;&nbsp;"+nfobody+"&nbsp;&nbsp;"+nfoExchange+"&nbsp;&nbsp;"+"</td>";
					body=body+"<td style='font-size:20px; cursor:pointer;' onclick='addScriptNfo("+displayName+","+token+","+'"NFO"'+","
					+nfoinstrument_names+","+nfoSeriess+","+nfoexpiry_dates+","+nfostrike_prices+","+nfooption_types+","
					+nfoissue_infostart_dates+","+nfoissue_infomaturity_dates+","+nfoboard_lot_quantitys+","
					+nfoStocknames+","+scriptname+")'><i class='fa fa-plus-circle' style='font-size: 25px;' ></i></td>";

				 	body=body+"</tr>";
			 	}
			 	

			 	
			 	
	 // }	
			
			 	if(nfoinstrument_name=="FUTIDX" || nfoinstrument_name=="FUTSTK" || nfoinstrument_name=="OPTIDX" || nfoinstrument_name=="OPTSTK" ){
			 		
			 		for(var l=0;l<searchBodyArray.length;l++){
		           		found = false;	 
		              
		            		if(searchBodyArray[l].toString()==jsonObject[i].properties.nfoToken.toString()){
		            			
		    					found = true;
		    				    break; 
		            		 	
		            		}else{
		            	}
		    		}
			 		
			 		nfoSearchbody=nfoSearchbody+"<tr class='dropdown searchtab w3-bar-item w3-button' id='"+jsonObject[i].properties.nfoToken+"_nfof&oscriptminusid' style='display:none;font-size:12px;font-family: Helvetica, Sans-Serif;border-bottom: 1px solid #c4f1f1;'>";
					nfoSearchbody=nfoSearchbody+"<td class='dropdown-content' style='height:40px;width:350px;text-align:left;padding-top:15px;padding-bottom: 10px;'> "+nfoSymbol+"&nbsp;&nbsp;"+nfoexpiryDATEmyDate+"&nbsp;&nbsp;"+nfobody+"&nbsp;&nbsp;"+nfoExchange+"&nbsp;&nbsp;"+"</td>";
					nfoSearchbody=nfoSearchbody+"<td style='font-size:25px; cursor:pointer;' onclick='nfofodeleteScript("+jsonObject[i].properties.nfoToken+")'><i class='fa fa-minus-circle'></i></td>";

					nfoSearchbody=nfoSearchbody+"</tr>";
					
					if(found==true){
						
						nfoSearchbody=nfoSearchbody+"<tr class='dropdown searchtab w3-bar-item w3-button' id='"+jsonObject[i].properties.nfoToken+"_nfof&oscriptminusid' style='display:block;font-size:12px;font-family: Helvetica, Sans-Serif;border-bottom: 1px solid #c4f1f1;'>";
	        			nfoSearchbody=nfoSearchbody+"<td class='dropdown-content' style='height:40px;width:350px;text-align:left;padding-top:15px;padding-bottom: 10px;'> "+nfoSymbol+"&nbsp;&nbsp;"+nfoexpiryDATEmyDate+"&nbsp;&nbsp;"+nfobody+"&nbsp;&nbsp;"+nfoExchange+"&nbsp;&nbsp;"+"</td>";
	        			nfoSearchbody=nfoSearchbody+"<td style='font-size:25px; cursor:pointer;' onclick='nfofodeleteScript("+jsonObject[i].properties.nfoToken+")'><i class='fa fa-minus-circle'></i></td>";
	        			nfoSearchbody=nfoSearchbody+"</tr>";
					}else{
			 		
			 		nfoSearchbody=nfoSearchbody+"<tr class='dropdown searchtab w3-bar-item w3-button' id='"+jsonObject[i].properties.nfoToken+"_nfof&oscriptplusid' style='display:block;font-size:12px;font-family: Helvetica, Sans-Serif;border-bottom: 1px solid #c4f1f1;'>";
			 		nfoSearchbody=nfoSearchbody+"<td class='dropdown-content' style='height:40px;width:350px;text-align:left;padding-top:15px;padding-bottom: 10px;'> "+nfoSymbol+"&nbsp;&nbsp;"+nfoexpiryDATEmyDate+"&nbsp;&nbsp;"+nfobody+"&nbsp;&nbsp;"+nfoExchange+"&nbsp;&nbsp;"+"</td>";
					nfoSearchbody=nfoSearchbody+"<td style='font-size:20px;cursor:pointer;' onclick='addScriptNfoFO("+displayName+","+token+","+'"NFO"'+","
							+nfoinstrument_names+","+nfoSeriess+","+nfoexpiry_dates+","+nfostrike_prices+","+nfooption_types+","
							+nfoissue_infostart_dates+","+nfoissue_infomaturity_dates+","+nfoboard_lot_quantitys+","
							+nfoStocknames+","+scriptname+")'><i class='fa fa-plus-circle' style='font-size: 25px;' ></i></td>";	
					nfoSearchbody=nfoSearchbody+"</tr>";
					
					}
					
							
			
							

			 	}else{
			 		$('#NfoSearchdivbodyId').html('');
			 	}
			 	
			 	
	  
			 	
		        }//nfo condition closed

     
		        
		  if(tabval==="All"){
	        $('#SearchdivbodyId').html(body);
		        
	       $('#SearchdivbodyId').show();
	      
		   }else if(tabval==="Commodity"){
			   
	        $('#CommoditySearchdivbodyId').html(commoditybody);
	        $('#CommoditySearchdivbodyId').show();
		   }else if(tabval==="EQ"){

	        $('#EqtySearchdivbodyId').html(eqtybody); 
	        $('#EqtySearchdivbodyId').show();
	        
		   }else if(tabval==="F&O"){
	        $('#NfoSearchdivbodyId').html(nfoSearchbody);	
	        $('#NfoSearchdivbodyId').show();
		   }


	      } //for loop closed
	         
	        $('#SearchdivbodyId').html(body);
	        $('#CommoditySearchdivbodyId').html(commoditybody);
	        $('#EqtySearchdivbodyId').html(eqtybody); 
	        $('#NfoSearchdivbodyId').html(nfoSearchbody);
			   
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
    	
    	$('#alltabId').hide();
    	$('#paginationId').show();
    	$("#scriptlisthiddId").show();
    	searchBodyArray = [];
		getscriptrefresh();
		// getMarketwatchListById();
	}	

});



});
	
function closefun(){
	   $('#SearchdivbodyId').html('');
	   $('#CommoditySearchdivbodyId').html('');
	   $('#EqtySearchdivbodyId').html('');
	   $('#NfoSearchdivbodyId').html('');
	   $('#search').val('');
	   $('#searchcloseId').hide();
	   $('#alltabId').hide();
	   $('#paginationId').show();
	   $("#searchiconId").show(); 
	   $("#scriptlisthiddId").show(); 
	   searchBodyArray=[];
	 //  marketwatchListCountArray=[];
		getscriptrefresh();
		
		 //getMarketwatchListById();
	   

}



//==== PinTicker START====
	
function PinTickerPrevioueLoadFunction(){
	
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
}
//==== PinTicker END====
	
	
	
	//==== Sort Setting START====
	

function  ReadySortingOrderPrevioueLoadFunction(){
	
	
	
		 var call;
		
		var marketwatchid="11";
		call="marketwatchid="+marketwatchid;

	   $.ajax({
		type :'GET',
		data:call,
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
					 
					//body=body+"<a id='"+response[i].token+"_stockbuysell'    name='stockbuyName' href='#' onclick='onclickstockbuybtnToggle(); changeModalContent(event);  onclickstockbuybtn("+scriptName+","+price+","+exchange+","+token+","+displayname+","+mcxTickSize+","+mcxOriginalExpiryDate+","+nseTickSize+","+nseExDate+","+nfoexpiry_date+","+mcxInstrumentCode+","+mcxStrikePrice+","+mcxOptionType+","+mcxInstrumentName+","+mcxInstrumentSeries+","+nseSymbol+","+nseSeries+","+nfoSymbol+","+nfostrike_price+","+nfooption_type+","+nfoinstrument_name+")' data-toggle='modal'  data-target='#myModal' >buy</a>";
				
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
		        body=body+"<div class='icon facebook' onclick='onclickstockbuybtnToggle(); changeModalContent(event); onclickstockbuybtn("+scriptName+","+price+","+exchange+","+token+","+displayname+","+mcxTickSize+","+mcxOriginalExpiryDate+","+nseTickSize+","+nseExDate+","+nfoexpiry_date+","+mcxInstrumentCode+","+mcxStrikePrice+","+mcxOptionType+","+mcxInstrumentName+","+mcxInstrumentSeries+","+nseSymbol+","+nseSeries+","+nfoSymbol+","+nfostrike_price+","+nfooption_type+","+nfoinstrument_name+")' data-toggle='modal'  data-target='#myModal'><div class='tooltip'>Buy</div><span><i class='fab b-buy-b'></i></span></div>";
		        body=body+"<div class='icon twitter'  onclick='onclickstocksellbtnToggle(); changeModalContent(event);  onclickstocksellbtn("+scriptName+","+price+","+exchange+","+token+","+displayname+","+mcxTickSize+","+mcxOriginalExpiryDate+","+nseTickSize+","+nseExDate+","+nfoexpiry_date+","+mcxInstrumentCode+","+mcxStrikePrice+","+mcxOptionType+","+mcxInstrumentName+","+mcxInstrumentSeries+","+nseSymbol+","+nseSeries+","+nfoSymbol+","+nfostrike_price+","+nfooption_type+","+nfoinstrument_name+")'  data-toggle='modal'  data-target='#myModal'><div class='tooltip'>Sell</div><span><i class='fab s-sell-s'></i></span></div>"
		        
		        body=body+"<div class='icon instagram' onclick='loadChart();'><div class='tooltip'>Chart</div><span><i class='fab c-chart-c'></i></span></div>";
		        if(response[i].exchange=='NFO' && response[i].nfoinstrument_name!='XX'){
		        body=body+"<div class='icon instagram' onclick='OptionChainfun("+displayname+","+exchange+","+nfoexpiry_date+","+nfoinstrument_name+")'><div class='tooltip'>Option</div><span><i class='fab o-chart-o'>O</i></span></div>";
		        }
		        else{
			        body=body+"<div style='display:none;' class='icon instagram'><div class='tooltip' style='display:none;'>OptionChain</div><span><i class='fab o-chart-o'></i></span></div>";

		        }
	 	        body=body+"<div class='icon instagram ' onclick='ShowModalMoreOption("+displayname+","+token+","+scriptName+","+price+","+exchange+","+token+","+mcxOriginalExpiryDate+","+nseExDate+","+nfoexpiry_date+","+displayname+","+mcxTickSize+","+mcxOriginalExpiryDate+","+nseTickSize+","+nseExDate+","+nfoexpiry_date+","+mcxInstrumentCode+","+mcxStrikePrice+","+mcxOptionType+","+mcxInstrumentName+","+mcxInstrumentSeries+","+nseSymbol+","+nseSeries+","+nfoSymbol+","+nfostrike_price+","+nfooption_type+","+nfoinstrument_name+")' data-toggle='modal'  data-target='#myModalMoreOption'><div class='tooltip'>More</div><span><i class='fa fa-bars'></i></span></div>";
		        body=body+"</div></div>"
		             	
						body=body+"<div   id='"+response[i].token+"_stockbuysell' style='display:none'>";
						body=body+"<i class='icon ion-md-star'></i>"+response[i].scriptName+"&nbsp;"
						 
						//body=body+"<a id='"+response[i].token+"_stockbuysell'    name='stockbuyName' href='#' onclick='onclickstockbuybtnToggle(); changeModalContent(event);  onclickstockbuybtn("+scriptName+","+price+","+exchange+","+token+","+displayname+","+mcxTickSize+","+mcxOriginalExpiryDate+","+nseTickSize+","+nseExDate+","+nfoexpiry_date+","+mcxInstrumentCode+","+mcxStrikePrice+","+mcxOptionType+","+mcxInstrumentName+","+mcxInstrumentSeries+","+nseSymbol+","+nseSeries+","+nfoSymbol+","+nfostrike_price+","+nfooption_type+","+nfoinstrument_name+")' data-toggle='modal'  data-target='#myModal' >buy</a>";
					
						//body=body+"<button type='button'    id='"+response[i].token+"_stockbuysell'    name='stockbuyName'  onclick='onclickstockbuybtnToggle(); changeModalContent(event);  onclickstockbuybtn("+scriptName+","+price+","+exchange+","+token+","+displayname+","+mcxTickSize+","+mcxOriginalExpiryDate+","+nseTickSize+","+nseExDate+","+nfoexpiry_date+","+mcxInstrumentCode+","+mcxStrikePrice+","+mcxOptionType+","+mcxInstrumentName+","+mcxInstrumentSeries+","+nseSymbol+","+nseSeries+","+nfoSymbol+","+nfostrike_price+","+nfooption_type+","+nfoinstrument_name+")' data-toggle='modal'  data-target='#myModal' >BUY</button>";
						//body=body+"<button type='button'    id=''    name='stocksellName'  onclick='onclickstocksellbtnToggle(); changeModalContent(event);  onclickstocksellbtn("+scriptName+","+price+","+exchange+","+token+","+displayname+","+mcxTickSize+","+mcxOriginalExpiryDate+","+nseTickSize+","+nseExDate+","+nfoexpiry_date+","+mcxInstrumentCode+","+mcxStrikePrice+","+mcxOptionType+","+mcxInstrumentName+","+mcxInstrumentSeries+","+nseSymbol+","+nseSeries+","+nfoSymbol+","+nfostrike_price+","+nfooption_type+","+nfoinstrument_name+")'  data-toggle='modal'  data-target='#myModal'>SELL</button>";
						//body=body+"<button type='button'    class=' stocksellbtn swd-button' id=''    name='marketDepthName'  onclick='getMarketDepth("+scriptName+","+price+","+exchange+","+token+")' data-target='#modalMarketDepth' data-toggle='modal'>MD</button>"
						    
						    

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
     
     var listCount=marketwatchListCountArray;
 	//alert("listCount"+listCount);	
 			  
 	 if(listCount<50){
	
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
                 var Token;
			     for (var i = 0; i <jsonObject.length; i++) {
			    	 
			 		
			    	 var TokenTagMCX=JSON.stringify(jsonObject[i].token);
		    		 Token=jsonObject[i].token;
		    		 var ScriptTag=JSON.stringify(jsonObject[i].scriptName);
		    		 var priceTag=JSON.stringify(jsonObject[i].mcxOptionType);
		    		 var exchangeTag=JSON.stringify(jsonObject[i].exchange);
			    	 
		    		//alert("Token:::"+Token);
		    		 for(var j=0; j<searchTokenArray.length; j++){
		    			 
				 			if(searchTokenArray[j].toString()===Token.toString()){
				 		
							 document.getElementById(searchTokenArray[j]+'_mcxscriptplusid').style.display='none';
							 document.getElementById(searchTokenArray[j]+'_mcxscriptminusid').style.display='block';
							// searchBodyArray.push(body);
						    
							 $('#SearchdivbodyId').show();
				 			}
				 		}

			     } 
			     
			   //  $("#heederlisthiddId").hide();
			        	
			  //   $("#scriptlisthiddId").show();
			     			     
			  //   $('#addscriptId').html(body); 
			     
			  //   getscriptrefresh();
			     
			     
			     
		  				    
			},
			error:function(){
				//alert("AddScript Error");
				
			
			}	
		});
	
 	}else{
		 alert("You cannot add more than 50 records.");
	         $("#scriptlisthiddId").show();
	 }
		
}


function addScriptNse(scriptname,token,exchange,nseSymbol,nseSeries,nseInstrumentType,nseIssuedCapital,nseCreditRating,nseBoardLotQuantity,
		nseTickSize,nseIssueStartDate,nseIssueIPDate,nseIssueMaturityDate,nseFreezePercent,nseListingDate,nseExpulsionDate,nseReAdmissionDate,nseExDate,nseRecordDate,nseFaceValue,nseISINNo,displayname){

	$('#SearchdivbodyId').hide();
	$('#EqtySearchdivbodyId').hide();
	
//alert("test");
		
		 var topic = token;
	    // var topic1 = "Device/MainTopic2";
	     var qos = 0;
	     
	    
	    tokenArray.push(token);
	    
	    var listCount=marketwatchListCountArray;
		//alert("listCount"+listCount);	
				  
		 if(listCount<50){

	  $.ajax({
			type :'POST',
			url :'addScriptNse',
			data :'Token='+token+"&Exchange="+exchange+"&Scriptname="+encodeURIComponent(scriptname)+"&NseSymbol="+nseSymbol+"&NseSeries="+nseSeries+"&NseInstrumentType="+nseInstrumentType+
			"&NseIssuedCapital="+nseIssuedCapital+"&NseCreditRating="+nseCreditRating+"&NseBoardLotQuantity="+nseBoardLotQuantity+"&NseTickSize="+nseTickSize+"&NseIssueStartDate="+nseIssueStartDate+"&NseIssueIPDate="+nseIssueIPDate+"&NseIssueMaturityDate="+nseIssueMaturityDate+
			"&NseFreezePercent="+nseFreezePercent+"&NseListingDate="+nseListingDate+"&NseExpulsionDate="+nseExpulsionDate+"&NseReAdmissionDate="+nseReAdmissionDate+"&NseExDate="+nseExDate+
			"&NseRecordDate="+nseRecordDate+"&NseFaceValue="+nseFaceValue+"&NseISINNo="+nseISINNo+"&Displayname="+displayname,
			dataType: 'json',
			success:function(jsonObject){
			     
                // var jsonObject =JSON.parse(response);
                 var body;
                 var Token;
			     
			     for (var i = 0; i <jsonObject.length; i++) {
			    	 
			    	 var TokenTagNSE=JSON.stringify(jsonObject[i].token);
			    	     Token=jsonObject[i].token.toString();
			    	// alert("Token:::"+Token.toString());
			    	 
		    		 var ScriptTag=JSON.stringify(jsonObject[i].scriptName);
		    		 var priceTag=JSON.stringify(jsonObject[i].nseSymbol);
		    		 var exchangeTag=JSON.stringify(jsonObject[i].exchange);
			 		
				 		
				 		for(var j=0; j<searchTokenArray.length; j++){
				 			if(searchTokenArray[j].toString()===Token){
				 				
							 document.getElementById(searchTokenArray[j]+'_nsescriptplusid').style.display='none';
							 document.getElementById(searchTokenArray[j]+'_nsescriptminusid').style.display='block';
							 
							
						    
							 $('#SearchdivbodyId').show();
				 			}
				 		}

			     } 

           
			//     $("#heederlisthiddId").hide();
			        	
			   //  $("#scriptlisthiddId").show();
			     
			    
			   //  $('#addscriptId').html(body); 
			     
			   //  getscriptrefresh();
		
		         
			},
			error:function(){
			//	alert("AddScript Error");
				
			
			}	
		});
	  
		 }else{
			 alert("You cannot add more than 50 records.");
		         $("#scriptlisthiddId").show();
		 }
	  
	
}


function addScriptNfo(scriptname,token,exchange,nfoinstrument_name,nfoSeries,nfoexpiry_date,
		nfostrike_price,nfooption_type,nfoissue_infostart_date,nfoissue_infomaturity_date,nfoboard_lot_quantity,nfoStockname,displayname){
	$('#SearchdivbodyId').hide();
	$('#NfoSearchdivbodyId').hide();
	
	tokenArray.push(token);
	
	
	var listCount=marketwatchListCountArray;
	//alert("listCount"+listCount);	
			  
	 if(listCount<50){
	
	 
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
                 var Token;
			     
			     for (var i = 0; i <jsonObject.length; i++) {
			    	 
			 		
			    	 var TokenTagNFO=JSON.stringify(jsonObject[i].token);
			    	     Token=jsonObject[i].token;
		    		 var ScriptTag=JSON.stringify(jsonObject[i].scriptName);
					 var PriceTag =JSON.stringify(jsonObject[i].nfostrike_price);
					 var exchangeTag=JSON.stringify(jsonObject[i].exchange);
					 

					 for(var j=0; j<searchTokenArray.length; j++){
				 			if(searchTokenArray[j].toString()===Token.toString()){
				 				
				 			//alert("searchTokenArray[j]:::"+searchTokenArray[j]);
				 				
							 document.getElementById(searchTokenArray[j]+'_nfoscriptplusid').style.display='none';
							 document.getElementById(searchTokenArray[j]+'_nfoscriptminusid').style.display='block';
							 
							// searchBodyArray.push(body);
							
						    
							 $('#SearchdivbodyId').show();
							 break;
				 			}
				 			
				 		}

			     } 
			     
			//     $("#heederlisthiddId").hide();
			        	
			 //    $("#scriptlisthiddId").show();
			     
			  //   $('#addscriptId').html(body); 
			     
			   //  getscriptrefresh();

			},
			error:function(){
			//	alert("AddScript Error");
				
			
			}	
		});
	
	 }else{
		 alert("You cannot add more than 50 records.");
	         $("#scriptlisthiddId").show();
	 }
	
}










		

		

</script>

<script type="text/javascript">

function addScriptMcxCommodity(scriptname,token,exchange,mcxInstrumentCode,mcxInstrumentSeries,mcxProductStartDate,mcxLastTradingDate,mcxLotSize,
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
                 var Token;
			     for (var i = 0; i <jsonObject.length; i++) {
			    	 
			 		
			    	 var TokenTagMCX=JSON.stringify(jsonObject[i].token);
		    		 Token=jsonObject[i].token;
		    		 var ScriptTag=JSON.stringify(jsonObject[i].scriptName);
		    		 var priceTag=JSON.stringify(jsonObject[i].mcxOptionType);
		    		 var exchangeTag=JSON.stringify(jsonObject[i].exchange);
			    	 
		    		//alert("Token:::"+Token);
		    		 for(var j=0; j<searchTokenArray.length; j++){
		    			 
				 			if(searchTokenArray[j].toString()===Token.toString()){
				 		
							 document.getElementById(searchTokenArray[j]+'_mcxcomdtyscriptplusid').style.display='none';
							 document.getElementById(searchTokenArray[j]+'_mcxcomdtyscriptminusid').style.display='block';
							// searchBodyArray.push(body);
						    
							 $('#CommoditySearchdivbodyId').show();

				 			}
				 		}

			     } 
			     
			   //  $("#heederlisthiddId").hide();
			        	
			  //   $("#scriptlisthiddId").show();
			     			     
			  //   $('#addscriptId').html(body); 
			     
			  //   getscriptrefresh();
			     
			     
			     
		  				    
			},
			error:function(){
				//alert("AddScript Error");
				
			
			}	
		});
		
}


function addScriptNseEqty(scriptname,token,exchange,nseSymbol,nseSeries,nseInstrumentType,nseIssuedCapital,nseCreditRating,nseBoardLotQuantity,
		nseTickSize,nseIssueStartDate,nseIssueIPDate,nseIssueMaturityDate,nseFreezePercent,nseListingDate,nseExpulsionDate,nseReAdmissionDate,nseExDate,nseRecordDate,nseFaceValue,nseISINNo,displayname){

	$('#SearchdivbodyId').hide();
	$('#EqtySearchdivbodyId').hide();
	
//alert("test");
		
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
			dataType: 'json',
			success:function(jsonObject){
			     
                // var jsonObject =JSON.parse(response);
                 var body;
                 var Token;
			     
			     for (var i = 0; i <jsonObject.length; i++) {
			    	 
			    	 var TokenTagNSE=JSON.stringify(jsonObject[i].token);
			    	     Token=jsonObject[i].token.toString();
			    	// alert("Token:::"+Token.toString());
			    	 
		    		 var ScriptTag=JSON.stringify(jsonObject[i].scriptName);
		    		 var priceTag=JSON.stringify(jsonObject[i].nseSymbol);
		    		 var exchangeTag=JSON.stringify(jsonObject[i].exchange);
			 		
				 		
				 		for(var j=0; j<searchTokenArray.length; j++){
				 			if(searchTokenArray[j].toString()===Token){
				 				
							 document.getElementById(searchTokenArray[j]+'_nseeqtyscriptplusid').style.display='none';
							 document.getElementById(searchTokenArray[j]+'_nseeqtyscriptminusid').style.display='block';
							 
							
						    
							 $('#EqtySearchdivbodyId').show();
							 
				 			}
				 		}

			     } 

           
			//     $("#heederlisthiddId").hide();
			        	
			   //  $("#scriptlisthiddId").show();
			     
			    
			   //  $('#addscriptId').html(body); 
			     
			   //  getscriptrefresh();
		
		         
			},
			error:function(){
			//	alert("AddScript Error");
				
			
			}	
		});
	  
	
}


function addScriptNfoFO(scriptname,token,exchange,nfoinstrument_name,nfoSeries,nfoexpiry_date,
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
                 var Token;
			     
			     for (var i = 0; i <jsonObject.length; i++) {
			    	 
			 		
			    	 var TokenTagNFO=JSON.stringify(jsonObject[i].token);
			    	     Token=jsonObject[i].token;
		    		 var ScriptTag=JSON.stringify(jsonObject[i].scriptName);
					 var PriceTag =JSON.stringify(jsonObject[i].nfostrike_price);
					 var exchangeTag=JSON.stringify(jsonObject[i].exchange);
					 

					 for(var j=0; j<searchTokenArray.length; j++){
				 			if(searchTokenArray[j].toString()===Token.toString()){
				 			
				 				
							 document.getElementById(searchTokenArray[j]+'_nfof&oscriptplusid').style.display='none';
							 document.getElementById(searchTokenArray[j]+'_nfof&oscriptminusid').style.display='block';
							 
							// searchBodyArray.push(body);
						    
							 $('#NfoSearchdivbodyId').show();
				 			}
				 		}

			     } 
			     
			//     $("#heederlisthiddId").hide();
			        	
			 //    $("#scriptlisthiddId").show();
			     
			  //   $('#addscriptId').html(body); 
			     
			   //  getscriptrefresh();

			},
			error:function(){
			//	alert("AddScript Error");
				
			
			}	
		});
	
	
	
	
	
}





</script>


<script type="text/javascript">
	
/* document.addEventListener("click", function(e) {
	  var element = document.getElementById('parent-node');

	  if (e.target !== element && !element.contains(e.target)) {
	    element.parentNode.removeChild(element);
	  }
	});
	
	
	
	  */
	  /* $(document).on('click', function (e) {
		 //   if ($(e.target).closest("#body-right")) {
			  
			 var searchval= document.getElementById('search').value;
			// alert("searchval::");
			//var leftbar = $("#left-bar");
			//var containsVal = leftbar.contains($(e.target));
			//alert(containsVal);
			
			var containsVal =$(e.target).closest("#left-bar");
			
		//	alert("containsVal:::"+containsVal);
			
			 if(searchval.length !=0 && containsVal){

		    	alert('not descendent');
				 $("#SearchdivbodyId").hide();
				  $('#CommoditySearchdivbodyId').hide();
				  $('#EqtySearchdivbodyId').hide();
				  $('#NfoSearchdivbodyId').hide();
				  $('#search').val('');
				  $('#searchcloseId').hide();
				  $('#searchiconId').show();
				   $("#scriptlisthiddId").show();
				  
				  getscriptrefresh(); 
		    }
		});  */
		 
	

		
	</script>
	
	<script type="text/javascript">
	
	function watchlistOne(){
		
	    $('#watchlistbtnId').removeClass('active').addClass('inactive');
		$(this).removeClass('inactive').addClass('active');
	}
	function watchlistTwo(){
		
	    $('#watchlistbtnId').removeClass('active').addClass('inactive');
		$(this).removeClass('inactive').addClass('active');
	}
	function watchlistThree(){
		
	    $('#watchlistbtnId').removeClass('active').addClass('inactive');
		$(this).removeClass('inactive').addClass('active');

	}
	function watchlistFour(){

	$('#watchlistbtnId').removeClass('active').addClass('inactive');
	$(this).removeClass('inactive').addClass('active');

	}
	function watchlistFive(){

	$('#watchlistbtnId').removeClass('active').addClass('inactive');
	$(this).removeClass('inactive').addClass('active');

	}
	
	
	function Editblur(){
	

			  var text = $('#attrCName').val();
		       
		  if(text!="" && text.length>1){
		
			    $('#attrCName').parent().text(text);
		        $('#attrCName').remove();
		         
		        var marketwatchid="11";
		    	call="marketwatchid="+marketwatchid;
		       
		    	$.ajax({
		    		type :'POST',
		    		url :'reNameMarketWatchForWeb',	
		    		dataType: 'json',
		    		data:"marketwatchid="+marketwatchid+"&marketwatch_name="+text,		
		    		success:function(response){
		 	    			for (var i = 0; i < response.length; i++) {
		 	    			  var marketwatchname=response[i].script.marketwatch_name;
		 	    		      document.getElementById("nameLabel").innerHTML=marketwatchname;
							
		 	    			}
		 	    			
		 	    				 	  
		    			},
			    error:function(){
				 alert("Rename Error");
			    	 }	
		         });	
			  }
			  else if(text.length<3) {
				  
				  alert("The name should have atleast two characters");
				  //$('#attrCName').focus();
					 /*  $('#attrCName').remove();
					  var marketwatchid="11";
					  $.ajax({
				    		type :'POST',
				    		url :'showMarketWatchForWeb',	
				    		dataType:'json',
				    		data:"marketwatchid="+marketwatchid,		
				    		success:function(response){
				    			    
				 	    			for (var i = 0; i < response.length; i++) {
				 	    			  var marketwatchname=response[i].marketwatch_name;
				 	    		      document.getElementById("nameLabel").innerHTML=marketwatchname;
									
				 	    			}
				 	    			
				 	    				 	  
				    			},
					    error:function(){
						 alert("showMarketWatchForWeb Error");
					    	 }	
				         });	
					  
					  */
				  }

	   }
	function EditContent(){

		  var Name = $('.text-info').text();
		  var input = $('<input id="attrCName" class="form-control bg-light border-0 small" onblur="Editblur();" oninput="this.value = this.value.toUpperCase()" style=" border-style: outset; text-transform: uppercase; font-size: 11px; font-weight: bold; background-color: #F5F8FD !important" value="' + Name + '" />');
		  if (Name != "") {
		    $('.text-info').text('').append(input);
		  }
		
		  
	}




	function getMarketwatchListById(){

	  var call;
		
		var marketwatchid="11";
		call="marketwatchid="+marketwatchid;
		   
		$.ajax({
			type :'POST',
			url :'getScriptValueOfMarketIdForWeb',
		    data : call,
			dataType: 'json',
			success:function(response){
	 
				 var body;
				 
	             marketwatchListCountArray.push(response.length);
					for (var i = 0; i <response.length; i++) {
						//alert("okkk");	
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
						
					    //alert("response.length"+response.length);
						var marketwatch_name=response[i].marketwatchid.marketwatch_name;
						document.getElementById("nameLabel").innerHTML=marketwatch_name;
						
						var scriptCount=response.length;
					    document.getElementById("scriptCount").innerHTML=scriptCount+"/50";
					    
						
						 tokenId = response[i].token;
			             tokenArray.push(tokenId);
			             "<input type='hidden' id='mydivhiddenId' name='mydivhiddenId' value='' />";
						
			     		body=body+"<tr  id='"+response[i].token+"_mydivId'  onmouseover='stockbuybtnmouseover("+token+")' onmouseout='stockbuybtnmouseout("+token+")' style='height:40px;border-bottom: 1px solid lightcyan;'>";
			             
						body=body+"<td  class='Field' id='"+response[i].token+"'  style='height:40px;width:350px;padding-left:15px; padding-top:20px;padding-bottom: 10px;'>"
						body=body+" <span style='display:block;'><i class='icon ion-md-star'></i>"+response[i].scriptName+"&nbsp;<label class='addbtn'>"+response[i].exchange+"</label>";
		             	  "<input type='hidden' id='mydivhiddenId' name='mydivhiddenId' value='"+response[i].token+"_mydivId' />";
		             	body=body+" </span> ";
						//body=body+"<div   id='"+response[i].token+"_stockbuysell' style='display:none'>";
						//body=body+"<i class='icon ion-md-star'></i>"+response[i].scriptName+"&nbsp;"
						 
						//body=body+"<a id='"+response[i].token+"_stockbuysell'    name='stockbuyName' href='#' onclick='onclickstockbuybtnToggle(); changeModalContent(event);  onclickstockbuybtn("+scriptName+","+price+","+exchange+","+token+","+displayname+","+mcxTickSize+","+mcxOriginalExpiryDate+","+nseTickSize+","+nseExDate+","+nfoexpiry_date+","+mcxInstrumentCode+","+mcxStrikePrice+","+mcxOptionType+","+mcxInstrumentName+","+mcxInstrumentSeries+","+nseSymbol+","+nseSeries+","+nfoSymbol+","+nfostrike_price+","+nfooption_type+","+nfoinstrument_name+")' data-toggle='modal'  data-target='#myModal' >buy</a>";
					
						body=body+"<button type='button'    id='"+response[i].token+"_stockbuysell'    name='stockbuyName'  onclick='onclickstockbuybtnToggle(); changeModalContent(event);  onclickstockbuybtn("+scriptName+","+price+","+exchange+","+token+","+displayname+","+mcxTickSize+","+mcxOriginalExpiryDate+","+nseTickSize+","+nseExDate+","+nfoexpiry_date+","+mcxInstrumentCode+","+mcxStrikePrice+","+mcxOptionType+","+mcxInstrumentName+","+mcxInstrumentSeries+","+nseSymbol+","+nseSeries+","+nfoSymbol+","+nfostrike_price+","+nfooption_type+","+nfoinstrument_name+")' data-toggle='modal'  data-target='#myModal' >BUY</button>";
						body=body+"<button type='button'    id=''    name='stocksellName'  onclick='onclickstocksellbtnToggle(); changeModalContent(event);  onclickstocksellbtn("+scriptName+","+price+","+exchange+","+token+","+displayname+","+mcxTickSize+","+mcxOriginalExpiryDate+","+nseTickSize+","+nseExDate+","+nfoexpiry_date+","+mcxInstrumentCode+","+mcxStrikePrice+","+mcxOptionType+","+mcxInstrumentName+","+mcxInstrumentSeries+","+nseSymbol+","+nseSeries+","+nfoSymbol+","+nfostrike_price+","+nfooption_type+","+nfoinstrument_name+")'  data-toggle='modal'  data-target='#myModal'>SELL</button>";
						body=body+"<button type='button'    class=' stocksellbtn swd-button' id=''    name='marketDepthName'  onclick='getMarketDepth("+scriptName+","+price+","+exchange+","+token+")' data-target='#modalMarketDepth' data-toggle='modal'>MD</button>"
						    
						    

						//body=body+"<button type='button' style='cursor:pointer' class='stocksellbtn swd-button' id='deletescriptId' name='deletescriptId'  onclick='deleteScript("+token+")' >Delete</button>";	
						//body=body+"<icon  style='cursor:pointer' class='fa fa-clock-o' id='setalertId' name='setalertId'  onclick='setAlert("+scriptName+","+price+","+exchange+","+token+","+mcxOriginalExpiryDate+","+nseExDate+","+nfoexpiry_date+")' data-toggle='modal'  data-target='#myModalAlertSet' >SetAlert</icon>";

						//body=body+"</div>";
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
			        body=body+"<div class='icon facebook' onclick='onclickstockbuybtnToggle(); changeModalContent(event); onclickstockbuybtn("+scriptName+","+price+","+exchange+","+token+","+displayname+","+mcxTickSize+","+mcxOriginalExpiryDate+","+nseTickSize+","+nseExDate+","+nfoexpiry_date+","+mcxInstrumentCode+","+mcxStrikePrice+","+mcxOptionType+","+mcxInstrumentName+","+mcxInstrumentSeries+","+nseSymbol+","+nseSeries+","+nfoSymbol+","+nfostrike_price+","+nfooption_type+","+nfoinstrument_name+")' data-toggle='modal'  data-target='#myModal'><div class='tooltip'>Buy</div><span><i class='fab b-buy-b'></i></span></div>";
			        body=body+"<div class='icon twitter'  onclick='onclickstocksellbtnToggle(); changeModalContent(event);  onclickstocksellbtn("+scriptName+","+price+","+exchange+","+token+","+displayname+","+mcxTickSize+","+mcxOriginalExpiryDate+","+nseTickSize+","+nseExDate+","+nfoexpiry_date+","+mcxInstrumentCode+","+mcxStrikePrice+","+mcxOptionType+","+mcxInstrumentName+","+mcxInstrumentSeries+","+nseSymbol+","+nseSeries+","+nfoSymbol+","+nfostrike_price+","+nfooption_type+","+nfoinstrument_name+")'  data-toggle='modal'  data-target='#myModal'><div class='tooltip'>Sell</div><span><i class='fab s-sell-s'></i></span></div>"
			        
			        body=body+"<div class='icon instagram' onclick='loadChart();'><div class='tooltip'>Chart</div><span><i class='fab c-chart-c'></i></span></div>";
			        body=body+"</div></div>"
			             	
							//body=body+"<div   id='"+response[i].token+"_stockbuysell' style='display:none'>";
							//body=body+"<i class='icon ion-md-star'></i>"+response[i].scriptName+"&nbsp;"
							 
							//body=body+"<a id='"+response[i].token+"_stockbuysell'    name='stockbuyName' href='#' onclick='onclickstockbuybtnToggle(); changeModalContent(event);  onclickstockbuybtn("+scriptName+","+price+","+exchange+","+token+","+displayname+","+mcxTickSize+","+mcxOriginalExpiryDate+","+nseTickSize+","+nseExDate+","+nfoexpiry_date+","+mcxInstrumentCode+","+mcxStrikePrice+","+mcxOptionType+","+mcxInstrumentName+","+mcxInstrumentSeries+","+nseSymbol+","+nseSeries+","+nfoSymbol+","+nfostrike_price+","+nfooption_type+","+nfoinstrument_name+")' data-toggle='modal'  data-target='#myModal' >buy</a>";						
							//body=body+"<button type='button'    id='"+response[i].token+"_stockbuysell'    name='stockbuyName'  onclick='onclickstockbuybtnToggle(); changeModalContent(event);  onclickstockbuybtn("+scriptName+","+price+","+exchange+","+token+","+displayname+","+mcxTickSize+","+mcxOriginalExpiryDate+","+nseTickSize+","+nseExDate+","+nfoexpiry_date+","+mcxInstrumentCode+","+mcxStrikePrice+","+mcxOptionType+","+mcxInstrumentName+","+mcxInstrumentSeries+","+nseSymbol+","+nseSeries+","+nfoSymbol+","+nfostrike_price+","+nfooption_type+","+nfoinstrument_name+")' data-toggle='modal'  data-target='#myModal' >BUY</button>";
							//body=body+"<button type='button'    id=''    name='stocksellName'  onclick='onclickstocksellbtnToggle(); changeModalContent(event);  onclickstocksellbtn("+scriptName+","+price+","+exchange+","+token+","+displayname+","+mcxTickSize+","+mcxOriginalExpiryDate+","+nseTickSize+","+nseExDate+","+nfoexpiry_date+","+mcxInstrumentCode+","+mcxStrikePrice+","+mcxOptionType+","+mcxInstrumentName+","+mcxInstrumentSeries+","+nseSymbol+","+nseSeries+","+nfoSymbol+","+nfostrike_price+","+nfooption_type+","+nfoinstrument_name+")'  data-toggle='modal'  data-target='#myModal'>SELL</button>";
							//body=body+"<button type='button'    class=' stocksellbtn swd-button' id=''    name='marketDepthName'  onclick='getMarketDepth("+scriptName+","+price+","+exchange+","+token+")' data-target='#modalMarketDepth' data-toggle='modal'>MD</button>"
							    
							    

							//body=body+"<button type='button' style='cursor:pointer' class='stocksellbtn swd-button' id='deletescriptId' name='deletescriptId'  onclick='deleteScript("+token+")' >Delete</button>";	
							//body=body+"<icon  style='cursor:pointer' class='fa fa-clock-o' id='setalertId' name='setalertId'  onclick='setAlert("+scriptName+","+price+","+exchange+","+token+","+mcxOriginalExpiryDate+","+nseExDate+","+nfoexpiry_date+")' data-toggle='modal'  data-target='#myModalAlertSet' >SetAlert</icon>";

							//body=body+"</div>";
							body=body+"</td>";
							body=body+"<td id='"+response[i].token+"_changeid' class='Field' style='width:40px;padding-left:0px;padding-bottom: 10px;'>+0.0</td>";
							
							if(response[i].price !=null){
							//body=body+"<td id='"+response[i].token+"_priceid' class='Field'>"+response[i].price+"</td>&nbsp;&nbsp;";
							}else{
								//body=body+"<td id='"+response[i].token+"_priceid' class='Field' style='width:40px;padding-left:0px;padding-bottom: 10px;'></td>";
							}
							//body=body+"<td id='"+response[i].token+"_changeid' class='Field' style='width:40px;padding-left:0px;padding-bottom: 10px;'>+0.0</td>";
							
			            
							body=body+"</tr>";
						
					
					}

					
						$('#addscriptId').html(body); 
					

			},
			error:function(){
				alert("getMarketwatchListById Error");
				
				}	
		});
	} 
	
	
	
	
	</script>
	
	<script type="text/javascript">
	
	function onConnect() {	  
		console.log("Connected");
	
		var subscribeToken;
		
	//	alert("tokenArray:::"+tokenArray);

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

		  var x;
		  var y;
		  var obj = JSON.parse(message.payloadString.trim());
		  x = obj.topic;
		  var message = obj.message;
		//  console.log("Topicss:     " + x);
		  
		//  console.log("Message:     " + message);
		  
		 // var message = JSON.parse(y);	  
		  
		  var script = message.message;
		  
		  var scripsplit= script.split("|");
		  
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

	
	
	</script>


</body>
</html>