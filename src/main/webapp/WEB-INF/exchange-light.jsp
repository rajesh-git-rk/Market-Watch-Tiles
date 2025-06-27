<html xmlns="http://www.w3.org/1999/xhtml" lang="en">

<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>


<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Crypto</title>
		
		<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
		<%@ taglib uri="http://www.springframework.org/tags" prefix="spring" %>
		<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form" %>
		<%-- <%@ include file="repeatOrder.html" %> --%>
		<script  src="<c:url value="/resourcefiles/AccessJs/OrderbookJS.js" />"></script>
		<script  src="<c:url value="/resourcefiles/AccessJs/PortfolioJS.js" />"></script> 
		<script  src="<c:url value="/resourcefiles/AccessJs/RepeatOrder.js" />"></script>
		
		<script  src="<c:url value="/resourcefiles/AccessJs/FundJS.js" />"></script>
		<script  src="<c:url value="/resourcefiles/AccessJs/ProfileJS.js" />"></script>
		<script  src="<c:url value="/resourcefiles/AccessJs/marketDepth.js" />"></script>
	

		<link href="<c:url value="/resourcefiles/css/Orderbook-style.css"/>" rel="stylesheet" type="text/css">
		
		<script rel="javascript" type="text/javascript" href="js/jquery-1.11.3.min.js"></script>
	  
		 <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script> <!-- Optional-->
		<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.blockUI/2.70/jquery.blockUI.min.js"></script>
		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
		<script type="text/javascript" src="jquery.blockUI.js"></script>
    
    
		<link rel="stylesheet" 	href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-beta/css/bootstrap.min.css" />
		<link rel="stylesheet" 	href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.4.1/css/mdb.min.css" />
		
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>	
		<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
		  
		<!-- DatePicker -->

		<link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css">
		<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>



		<!-- Thangadurai -->
		
		<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
		<link rel="stylesheet" href="http://fortawesome.github.io/Font-Awesome/assets/font-awesome/css/font-awesome.css"> 
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
		
		<!--  Buttons Design  Proper-->
		<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.css">
		
		<script src="https://github.com/dumbmatter/IndexedDB-getAll-shim"></script> 
		
		 <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
		<script src="https://cdn.datatables.net/1.10.20/js/jquery.dataTables.min.js"></script>
		<script src="https://cdn.datatables.net/1.10.20/js/dataTables.bootstrap4.min.js"></script>
		<script src="js/jquery.steps.js"></script>
		
<script>
var tokenArray = new Array();

var tokenId;

var client;
var topic;

// var mqttHost = '127.0.0.1';
var mqttHost = '192.168.1.179';

topic = 'scripts';
</script>


<style>

/*Profile Pic Start*/
.picture-container{
    position: relative;
    cursor: pointer;
    text-align: center;
}
.picture{
    width: 106px;
    height: 106px;
    background-color: #999999;
    border: 2px solid #CCCCCC;
    color: #FFFFFF;
    border-radius: 50%;
    margin: 0px auto;
    overflow: hidden;
    transition: all 0.2s;
    -webkit-transition: all 0.2s;
}
.picture:hover{
    border-color: #2ca8ff;
}
.content.ct-wizard-green .picture:hover{
    border-color: #05ae0e;
}
.content.ct-wizard-blue .picture:hover{
    border-color: #3472f7;
}
.content.ct-wizard-orange .picture:hover{
    border-color: #ff9500;
}
.content.ct-wizard-red .picture:hover{
    border-color: #ff3b30;
}
.picture input[type="file"] {
    cursor: pointer;
    display: block;
    height: 100%;
    left: 0;
    opacity: 0 !important;
    position: absolute;
    top: 0;
    width: 100%;
}

.picture-src{
    width: 100%;
    
}


/*Profile Pic End*/


.profile-column {
    margin-left: 14rem;
    margin-top: 10rem;
}

/* buy-sell order window bg clickable  START */

.background-clickable{
    pointer-events:none;
}


/* buy-sell order window bg clickable  START */


  

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

/* Style the tab */
.tab {
  overflow: hidden;
  border: 1px solid #ccc;
  background-color: #f1f1f1;
   width:164%;
}



/* Style the buttons inside the tab */
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


/* Change background color of buttons on hover */
.tab button:hover {
  background-color: #ddd;
}

/* Create an active/current tablink class */
.tab button.active {
  background-color: #ccc;
}

/* Style the tab content */
.tabcontent {
  display: none;
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-top: none;
  width:164%;
}


body {
   font-family: arial,monospace,regular;
}




.fonts{
font-size: 13px;
font-algin: center;
font-style:#8492A6;
font-weight: normal;
}

.fonts_1{
font-size: 10px;
font-style:#8492A6;
font-weight: normal;
}

label span{
  display:inline-block;
  margin-left: 5px;
  font-align:center;
}

 
    
  .modal-header { 
  background:#007BFF;
}

.toggle-btn{
width:50px;
height:20px;
margin-left:50px;
background:gray;
border-radius:10px;
padding:5px;
transistion:all 300ms ease-in-out;
}

.toggle-btn >.inner-circle{
width:10px;
height:10px;
background:white;
border-radius:50%;
transistion:all 300ms ease-in-out;
}



.toggle-btn.active{
background:gray;
}

.toggle-btn.active >.inner-circle{
margin-left:30px;
}

.stockhead {
margin-left: -270px;
margin-top: -70px; 
padding-left:15px;
text-align:center;
color: white;
font-size: 15px;
font-family: 15px Roboto, "Helvetica Neue",sans-serif;
}

.stockExpiryhead {
margin-left: -270px;
margin-top: -70px; 
padding-left:15px;
text-align:center;
color: white;
font-size: 15px;
font-family: 15px Roboto, "Helvetica Neue",sans-serif;
}

.stockdeletebtn{
width:18%;
height:25%;
margin:3px;
font-size: 10px;
font-family: 15px Roboto, "Helvetica Neue",sans-serif;
border:thin solid red;
background-color: white;
border-radius: 2px;
}

.stockbuybtn{
width:18%;
height:25%;
margin:3px;
font-size: 10px;
font-family: 15px Roboto, "Helvetica Neue",sans-serif;
border:thin solid green;
background-color: white;
border-radius: 2px;
}
.stocksellbtn{
width:18%;
height:25%;
margin:3px;
font-size: 10px;
font-family: 15px Roboto, "Helvetica Neue",sans-serif;
border:thin solid red;
background-color: white;
border-radius: 2px;
}  
.stockbuybtn:hover {
  background-color: #3FBC8A;
  color: white;
  font-family: 15px Roboto, "Helvetica Neue",sans-serif;
}
.stocksellbtn:hover {
  background-color: #E55C5C;
  color: white;
  font-family: 15px Roboto, "Helvetica Neue",sans-serif;
} 


 .buysubmitgreen{
height:43px;
width:118px;
color: #FFFFFFF;
background-color: #3FBC8A;
font-family: 13px Roboto, "Helvetica Neue",sans-serif;
}
.sellsumbmitred{
height:43px;
width:118px;
color: #FFFFFFF;
background-color: #E55C5C;
font-family: 13px Roboto, "Helvetica Neue",sans-serif;
}

 

.cancelbtn{
height:43px;
width:120px;
 color: #8492A6;  
/*  background-color: white;  */
/* border:thin solid black; */
font-family: 13px Roboto, Helvetica Neue,sans-serif; 
} 

/* portfolio squareOff button */ 
 .squareOffButton{
/* height:38px; */
 width:100px; 
color: #FFFFFFF;
background-color:dodgerblue;
font-family: 10px Roboto, "Helvetica Neue",sans-serif;
}

div #SquareoffmyModal {
  
    overflow-y: auto;
}


input[type=number] {
  padding: 0;
  height: 30px;
  position: relative;
  left: 0;
  outline: none;
  border: 1px solid #cdcdcd;
  border-color: rgba(0, 0, 0, .15);
  background-color: white;
  font-size: 16px;
}



#Grid {
        
}

 .Field { 
      float:left; 
      position:relative; 
     z-index:0;  
  } 

.FieldOverview {        
     display:none;
}
 .Field:hover { 
    z-index: 70; 
 } 
.swd-button {
    float:left;
}
.Field :hover .FieldOverview {
     display:block;
     position:absolute;
     top:13px;
     left:60%;
     width:100px;
     height:100px;
     display: inline-block;
    z-index:1; 
}



/* Tooltip container */
.tooltip {
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black; /* If you want dots under the hoverable text */
}

/* Tooltip text */
.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;
 
  /* Position the tooltip text - see examples below! */
  position: absolute;
  z-index: 1;
}

/* Show the tooltip text when you mouse over the tooltip container */
.tooltip:hover .tooltiptext {
  visibility: visible;
}


body {
   font-family: arial,monospace,regular;
}

.addbtn {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 5px 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 11px;
  margin: 4px 2px;
  cursor: pointer;
}



.dropbtn {
  background-color: #3498DB;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

.dropbtn:hover, .dropbtn:focus {
  background-color: #2980B9;
}

.dropdown {
  position: relative;
 /*  display: inline-block; */
}

.dropdown-content {
 /*  position: absolute; */
  background-color: #f1f1f1;
  min-width: 160px;
  overflow: auto;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  width:500px;
  
   min-height:190px; 
    overflow-y :auto; 
    overflow-x:hidden; 
}

.dropdown-content td {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
}

.dropdown td:hover {background-color: #ddd;}

.dropdown-body a:hover{
background-color:#999999;
}

.show {display: block;}

.stockheadModify {
margin-left: -319px;
margin-top: -4px; 
padding-left:13px;
text-align:center;
color: white;
font-size: 15px;
font-family: 15px Roboto, "Helvetica Neue",sans-serif;
}


/* table th {
    font-size: 14px;
    font-weight: bold;
}

table td {
    font-size: 14px;
    font-weight: 300;
} */

.positionsubmitgreen {
    height: auto;
    width: 63px;
    color: #FFFFFFF;
    background-color: #3FBC8A;
    font-family: 13px Roboto, "Helvetica Neue",sans-serif;
    font-size: 8px;
}
</style>
  
</head>

<script>


 window.addEventListener('beforeunload',function(e){
	  destroyPopUps();
	});
 
 </script>
 
<body>
  <header class="light-bb">
    <nav class="navbar navbar-expand-lg">
     <a class="navbar-brand" href="exchange-light.html"><img src="${pageContext.request.contextPath}/assets/img/logo-dark.png" style="width: 100px;" alt="logo"></a>
<%--       <a class="navbar-brand" href="exchange-light.html"><img src="${pageContext.request.contextPath}/assets/img/logo-dark.png" alt="logo"></a> --%>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#headerMenu"
        aria-controls="headerMenu" aria-expanded="false" aria-label="Toggle navigation">
        <i class="icon ion-md-menu"></i>
      </button>

      <div class="collapse navbar-collapse" id="headerMenu">
        <ul class="navbar-nav mr-auto">
        
        <li class="nav-item dropdown" id="orderbookId">
           <a class="nav-link" href="#" role="button" type="button"   id="myButton" data-toggle="dropdown" aria-haspopup="true"
              aria-expanded="false"> Home</a>
               </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true"
              aria-expanded="false">
              Exchange
            </a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="exchange-light.html">Exchange</a>
              <a class="dropdown-item" href="exchange-light-live-price.html">Exchange Live Price</a>
              <a class="dropdown-item" href="exchange-light-ticker.html">Exchange Ticker</a>
              <a class="dropdown-item" href="exchange-light-fluid.html">Exchange Fluid</a>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true"
              aria-expanded="false">
              Markets
            </a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="markets-light.html">Markets</a>
              <a class="dropdown-item" href="market-capital-light.html">Markets Line</a>
              <a class="dropdown-item" href="market-capital-bar-light.html">Markets Bar</a>
              <a class="dropdown-item" href="market-overview-light.html">Market Overview</a>
              <a class="dropdown-item" href="market-screener-light.html">Market Screener</a>
              <a class="dropdown-item" href="market-crypto-light.html">Market Crypto</a>
            </div>
          </li>
           
            
            
             <li class="nav-item dropdown" id="orderbookId">
            <a class="nav-link" href="#" role="button" onclick="functionOrder()" data-toggle="dropdown" aria-haspopup="true"
              aria-expanded="false">   Orders
            </a></li>
            
            <li class="nav-item dropdown" id="portfolioId">
            <a class="nav-link" href="#" role="button" onclick="Portfoliofunction()" data-toggle="dropdown" aria-haspopup="true"
              aria-expanded="false"> Portfolio
            </a></li>
            
            
            <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true"
              aria-expanded="false">Dashboard
            </a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="settings-profile-light.html">Profile</a>
              <a class="dropdown-item" href="settings-wallet-light.html">Wallet</a>
              <a class="dropdown-item" href="settings-light.html">Settings</a>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true"
              aria-expanded="false">
              Others
            </a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="technical-analysis-light.html">Technical Analysis</a>
              <a class="dropdown-item" href="cross-rates-light.html">Cross Rates</a>
              <a class="dropdown-item" href="symbol-info-light.html">Symbol Info</a>
              <a class="dropdown-item" href="heat-map-light.html">Heat Map</a>
              <a class="dropdown-item" href="signin-light.html">Sign in</a>
              <a class="dropdown-item" href="signup-light.html">Sign up</a>
              <a class="dropdown-item" href="404-light.html">404</a>
            </div>
          </li>
          
           <li class="nav-item dropdown" id="FundTabId">
            <a class="nav-link" href="#" role="button" onclick="Fundsfunction()" data-toggle="dropdown" aria-haspopup="true"
              aria-expanded="false">Funds 
<!--                 //Line number 1427 -->
            </a></li>
            
             <li class="nav-item dropdown" id="AlertTabId">
            <a class="nav-link" href="#" role="button" onclick="AlertFunction()" data-toggle="dropdown" aria-haspopup="true"
              aria-expanded="false">Alerts 
<!--                 //Line number  -->
            </a></li>
            
           
            
        </ul>
        <div style="margin-left:35%; cursor:pointer;" ><i class="fa fa-envelope" onclick="connect();" id="messageNotificationId" data-toggle="modal" data-target="#myModalMessageNotification"></i>&nbsp;&nbsp;
        </div>   
        <div   data-toggle="modal"  data-target="#myModalMessageAlert" style="cursor:pointer;"> <i class="fa fa-bell" onclick="alertConnect();"  ></i><span id="alertmessageId"></span> </div> 
        <ul class="navbar-nav ml-auto">

                   <li class="nav-item dropdown header-img-icon">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true"
              aria-expanded="false" >
              <img src="${pageContext.request.contextPath}/assets/img/avatar.svg"  style="width: 30px;" alt="avatar">
            </a>
            <div class="dropdown-menu" style="margin-left: -170%;">
              <div class="dropdown-header d-flex flex-column align-items-center">
                <div class="figure mb-3">
                  <img src="${pageContext.request.contextPath}/assets/img/avatar.svg" alt="">
                </div>
                <div class="info text-center">
                  <p class="name font-weight-bold mb-0">Tony Stark</p>
                  <p class="email text-muted mb-3">tonystark@gmail.com</p>
                </div>
              </div>
              <div class="dropdown-body">
                <ul class="profile-nav">

            <li class="nav-item dropdown" id="ProfileTabId">
            <a class="nav-link" href="#" role="button" onclick="Profilefunction()" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Profile 
            </a>
            </li>
                  
                  <li class="nav-item">
                    <a href="settings-wallet-light.html" class="nav-link">
                      <i class="icon ion-md-wallet"></i>
                      <span>My Wallet</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="settings-light.html" class="nav-link">
                      <i class="icon ion-md-settings"></i>
                      <span>Settings</span>
                    </a>
                  </li>
                  <li class="nav-item" id="changeThemeLight">
                    <a href="#!" class="nav-link">
                      <i class="icon ion-md-sunny"></i>
                      <span>Theme</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="Logout" class="nav-link red">
                      <i class="icon ion-md-power"></i>
                      <span>Log Out</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          
          
        </ul>
      </div>
    </nav>
  </header>
  <div class="container-fluid mtb15 no-fluid">
    <div class="row sm-gutters">
      <div class="col-md-4">
        <div class="market-pairs">
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroup-sizing-sm"><i class="fa fa-search" aria-hidden="true"></i></span>
            </div>
            <input type="text" id="search" style="text-transform: uppercase" autocomplete="off" class="form-control" placeholder="Search" aria-describedby="inputGroup-sizing-sm">
            
            <span style="cursor:pointer; margin-top:15px; display:none;" id="searchcloseId" onclick="closefun()"><i class="fa fa-remove"></i></span>
          </div>
          
          <!-- <ul class="nav nav-pills" id="heederlisthiddId" role="tablist"> -->
          <ul class="nav nav-pills" id="" role="tablist">
            <li class="nav-item">
              <a class="nav-link active" data-toggle="pill" href="#BTC" id="allId" onclick="allfun()" role="tab" aria-selected="true">All</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="pill" href="#ETH" role="tab" id="eqtyId" onclick="eqtyfun()" aria-selected="false">EQ</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="pill" href="#NEO" role="tab" id="nfoId" onclick="nfofun()" aria-selected="false">F&O</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="pill" href="#USDT" role="tab" id="commodityId" onclick="commodityfun()" aria-selected="false">Commodity</a>             
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="pill" href="#USDT" role="tab" id="currencyId" onclick="currencyfun()" aria-selected="false">Currency</a>             
            </li>
          </ul>
          <div id="SearchdivbodyId"></div>
          <div id="EqtySearchdivbodyId" style="display:none;"></div>
          <div id="NfoSearchdivbodyId" style="display:none;"></div>
          <div id="CommoditySearchdivbodyId" style="display:none;"></div>
          <div id="CurrenySearchdivbodyId" style="display:none;"></div>
          <div class="tab-content">
            <div class="tab-pane fade show" id="STAR" role="tabpanel">
              <table class="table">
                <thead>
                  <tr>
                    <th>Pairs</th>
                    <th>Last Price</th>
                    <th>Change</th>
                  </tr>
                </thead>
                <tbody>
                  <tr >
                    <td><i class="icon ion-md-star"></i> ETH/BTC</td>
                    <td>0.00020255</td>
                    <td class="red">-2.58%</td>
                  </tr>
                  <tr>
                    <td><i class="icon ion-md-star"></i> KCS/BTC</td>
                    <td>0.00013192</td>
                    <td class="green">+5.6%</td>
                  </tr>
                  <tr>
                    <td><i class="icon ion-md-star"></i> XRP/BTC</td>
                    <td>0.00002996</td>
                    <td class="red">-1.55%</td>
                  </tr>
                  <tr>
                    <td><i class="icon ion-md-star"></i> VET/BTC</td>
                    <td>0.00000103</td>
                    <td class="green">+1.8%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!--             Start Script -->
		
            <div id="scriptlisthiddId">
            <div class="tab-pane fade show active" id="scriptbodylistId" role="tabpanel">
              <table class="table" id="Grid">
                <thead>
                  <tr>
                    <th>Pairs</th>
                    <th>Last Price</th>
                    <th>Change</th>
                  </tr>
                </thead> 
                <tbody id="refreshscriptId" onclick="getscriptrefresh()">
        	<%-- <c:forEach items="${scriptList}" var="scptList">
     				
     		<script>
             tokenId = "${scptList.token}";
             tokenArray.push(tokenId);
           </script>
     				
                      <tr  id="${scptList.token}_mydivId"  onmouseover="stockbuybtnmouseover('${scptList.token}')" onmouseout="stockbuybtnmouseout('${scptList.token}')" >
             
					   <td  class="Field" id="${scptList.token}"  style="width:90%;"><i class="icon ion-md-star "></i>${scptList.scriptName} <label class="addbtn">${scptList.exchange}</label>
                    	<input type="hidden" id="mydivhiddenId" name="mydivhiddenId" value="${scptList.token}_mydivId" />  
					   <div   id="${scptList.token}_stockbuysell" class="FieldOverview " style="float: right;">
					    <button type="button"    class=" stockbuybtn swd-button" id="${scptList.token}_stockbuysell"    name="stockbuyName"  onclick="onclickstockbuybtnToggle(); changeModalContent(event);  onclickstockbuybtn('${scptList.scriptName}','${scptList.price}','${scptList.exchange}','${scptList.token}','${scptList.displayname}','${scptList.mcxTickSize}','${scptList.mcxOriginalExpiryDate}','${scptList.nseTickSize}','${scptList.nseExDate}','${scptList.nfoexpiry_date}','${scptList.mcxInstrumentCode}','${scptList.mcxStrikePrice}','${scptList.mcxOptionType}','${scptList.mcxInstrumentName}','${scptList.mcxInstrumentSeries}','${scptList.nseSymbol}','${scptList.nseSeries}','${scptList.nfoSymbol}','${scptList.nfostrike_price}','${scptList.nfooption_type}','${scptList.nfoinstrument_name}')" data-toggle="modal"  data-target="#myModal" >BUY</button> 
					    <button type="button"    class=" stocksellbtn swd-button" id=""    name="stocksellName"  onclick="onclickstocksellbtnToggle(); changeModalContent(event);  onclickstocksellbtn('${scptList.scriptName}','${scptList.price}','${scptList.exchange}','${scptList.token}','${scptList.displayname}','${scptList.mcxTickSize}','${scptList.mcxOriginalExpiryDate}','${scptList.nseTickSize}','${scptList.nseExDate}','${scptList.nfoexpiry_date}','${scptList.mcxInstrumentCode}','${scptList.mcxStrikePrice}','${scptList.mcxOptionType}','${scptList.mcxInstrumentName}','${scptList.mcxInstrumentSeries}','${scptList.nseSymbol}','${scptList.nseSeries}','${scptList.nfoSymbol}','${scptList.nfostrike_price}','${scptList.nfooption_type}','${scptList.nfoinstrument_name}')"  data-toggle="modal"  data-target="#myModal">SELL</button>
					    <button type="button"    class=" stocksellbtn swd-button" id=""    name="marketDepthName"  onclick="getMarketDepth('${scptList.scriptName}','${scptList.price}','${scptList.exchange}','${scptList.token}')" data-target="#modalMarketDepth" data-toggle="modal">MD</button>
					    
					    

                       <button type="button" style="cursor:pointer" class="stocksellbtn swd-button" id="deletescriptId" name="deletescriptId"  onclick="deleteScript('${scptList.token}')" >Delete</button>&nbsp;&nbsp;&nbsp;&nbsp;	
                       <icon  style="cursor:pointer" class="fa fa-clock-o" id="setalertId" name="setalertId"  onclick="setAlert('${scptList.scriptName}','${scptList.price}','${scptList.exchange}','${scptList.token}','${scptList.mcxOriginalExpiryDate}','${scptList.nseExDate}','${scptList.nfoexpiry_date}')" data-toggle="modal"  data-target="#myModalAlertSet" >SetAlert</icon>

                  		 </div>
					    </td>          
                    <td id="${scptList.token}_priceid">${scptList.price}</td>
                    <td id="${scptList.token}_changeid" class="red">${scptList.exchange}</td>
                   
                  </tr>
                 
                  </c:forEach> --%>
                  
                  <tr id="addscriptId"></tr>
                
                </tbody>
              </table>
            </div>
            </div>
            
<!--             End Scripts -->

            <!-- </div></div> -->
            <div class="tab-pane fade show" id="ETH" role="tabpanel">
              <table class="table">
               
                <tbody>
                  
                </tbody>
              </table>
            </div>
            <div class="tab-pane fade show" id="NEO" role="tabpanel">
              <table class="table">
                <tbody>
                  
                </tbody>
              </table>
            </div>
            <div class="tab-pane fade show" id="USDT" role="tabpanel">
              <table class="table">
                <tbody>
                  
                </tbody>
              </table>
            </div>
            <div class="tab-pane fade show" id="DAI" role="tabpanel">
              <table class="table">
                <tbody>
                  
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </div>
      <div class="col-md-5">
        <div class="main-chart mb15">
          <!-- TradingView Widget BEGIN -->
          <div class="tradingview-widget-container">
            <div id="tradingview_e8053"></div>
            <script src="../s3.tradingview.com/tv.js"></script>
            <script>
             /* new TradingView.widget(
                {
                  "width": "100%",
                  "height": 550,
                  "symbol": "BITSTAMP:BTCUSD",
                  "interval": "D",
                  "timezone": "Etc/UTC",
                  "theme": "Light",
                  "style": "1",
                  "locale": "en",
                  "toolbar_bg": "#f1f3f6",
                  "enable_publishing": false,
                  "withdateranges": true,
                  "hide_side_toolbar": false,
                  "allow_symbol_change": true,
                  "show_popup_button": true,
                  "popup_width": "1000",
                  "popup_height": "650",
                  "container_id": "tradingview_e8053"
                }
              );*/
            </script>
          </div>
          <!-- TradingView Widget END -->
        </div>
        
        <!--         Funds Start   -->


        <div id="FundshideId"  style="display:none">
 
     <div id="FundsDivId" style="display:none" class="tabcontent">

	<table id="FundstableId" class="table table-striped table-bordered display sortable"  style="width:100%;">
        <thead style="background-color: #e3e5e7;">
            <tr>
          
                <th>Description</th>
                <th>ALLLEVEL(ALL)</th>
                <th>ANR010(COM)</th>
            </tr>
        </thead>
        <tbody id="FundsbodyId" style="display:none">
   
        </tbody>
        
        <tfoot class="footer-fix table table-striped table-bordered display sortable" id="PositionsfooterId">
           
<!--         footer-fixed  -->
		<tr>
<!--     	<a href="http://trade.enrichbroking.com/PaymentGateway/Payin/index.jsp" target="_blank"  onclick="payinfunction()" style="margin-left:75%; width: 10%;" class="btn btn-info swd-button" role="button">PAY IN</a> -->
<!--     	<a href="http://trade.enrichbroking.com/PaymentGateway/Payout/index.jsp" target="_blank" onclick="payoutfunction()" class="btn btn-info swd-button" role="button">PAY OUT</a> -->
   			 <button type="button" id="PayinId"  onclick="PayinFundfun()"   style="margin-left:75%; width: 10%;" class="btn btn-default buysubmitgreen fonts" >PayIn</button>

   			 <button type="button" id="PayoutId"  onclick="PayoutFundfun()" style="width: 10%;" class="btn btn-default sellsumbmitred fonts" >PayOut</button>

    	</tr>
    	</tfoot>
  	
    </table>
			<div id="FundsinnerbodyId" style="display:none;">
       
       <label style="margin-left:418px;">No Funds Available</label>
       </div>						
</div>


  </div>


<!-- Funds End -->
        
        
         
 <!-- Profile Start -->


<div id="AccountProfile"  style="display:none">
 
 
     <div id="AccountProfileDivId" style="display:none" class="tabcontent">
	
	 <div class="page-header">
	 <h5> Profile</h5>
	 </div>
	 
<!-- 	 <div class="picture-container col-sm-3"> -->
<!--     <div class="picture-container"> -->
<%-- 	<form method="POST" action="uploadFile" enctype="multipart/form-data"> --%>
<!-- 		<input type="file" name="file"><br />  -->
<!-- 		<input type="submit" value="Upload">  -->
<%-- 	</form> --%>
<%-- 	<c:forEach items="${createImagePath}" var="createImagePathList"> --%>
<%-- 	 <span id="aadharback"><img id="aadharfrontimg" style="width: 300px; height: 200px;" src="${createImagePathList.image}" alt="Aadhar Front"></span> --%>
<%-- 	</c:forEach> --%>
<!-- 	</div> -->
<!-- 	</div> -->
	   
	   
	   
	      <div class="picture-container col-sm-3">
	 
	 
	     <form method="POST"   action="/uploadFile"   enctype="multipart/form-data">
      <div class="picture">
            <img src="${pageContext.request.contextPath}/assets/img/avatar.svg" class="picture-src" id="wizardPicturePreview" title="">
            <input type="file" name="file" id="wizard-picture" class="">
        </div>
         <h6 class="form-label">Choose Picture</h6>
<!--          <input type="submit" value="submit"/>   -->
		</form>  
        <b> <label class="stockhead fonts" style="text-align: right;color:black;margin-left: 100%;" id="ProfileNamelabelId" >
      		</label> </b>
	    </div>  
	    
	    
	    
    <div class="row">
	<div class="col-sm-6 page-header" id="AccounthideId" >
	
	<h5><label class="page-header" style="margin-left: 10%;width: 40%;">Account</label></h5>
<!-- 	<h5><label class="page-header" style="margin-left: 100%;width: 40%;">Bank accounts</label></h5> -->
		
	
	<table id="AccountProfiletableId" class="table table-striped table-bordered display sortable"  style="width:100%;">
        <thead style="background-color: #e3e5e7;">           
        </thead>
        <tbody id="AccountProfilebodyId" style="display:none">
   
        </tbody>
        
    </table>
    <label  style="margin-left: 150px;"></label>
       <label style="color: red" id="ProfileErrormsgId" >
			<div id="AccountProfileinnerbodyId" style="display:none;">
       
       </div>	
       </div>
       	
       <div class="col-sm-6  class="page-header"" id="BankhideId" >
       <h5>Bank accounts</h5>
       
<!-- 		<input type="text" style="color: red" id="ProfileErrormsgId" name="ProfileErrormsgId"> -->
	
	<table id="BanktableId" class="table table-striped table-bordered display sortable"  style="width:100%;margin-top: 2%">
        <thead style="background-color: #e3e5e7;"> 
        <div class="row"> 
        <th><label   style="margin-top: 5%" id="bankAccountNolabelId"></label></th>  
        <th> <label  style="margin-top: 5%;" id="bankAccountNamelabelId"></label> </th>
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


  </div>




 <!-- Modal -->
  <div class="modal fade ProfileModel" id="ProfileEmailPhoneEditId"  style="display: none;" role="dialog" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"  data-keyboard="false" data-backdrop="false">
    <div class="modal-dialog  modal-lg disable-drag">
    
      <!-- Modal content-->
      <div class="modal-content profile-column">
        <div class="modal-header">
        <h4 class="modal-title">Confirm update</h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>          
        </div>
        <div class="modal-body">
        <input type="hidden" id="EmailhiddenId">
        <input type="hidden" id="mobilehiddenId">
        <input type="hidden" id="otphiddenId">
         <input type="hidden" id="UserID" value="${userId}" />
        <div class="checkbox">
  		<label><input type="checkbox" id="otpConfirmId" name="otpConfirmId" value="">   		
			     I/We hereby declare that the email ID being updated here belongs to me/us. Further, 
			     I authorize Enrich Financial to use this to send me any information/alert/email.
			      This change will affect the Trading and Demat account that I hold with Enrich Financial.
		</label>
		<label>
		Updating e-mail and phone number will only take up to 1 Hour to reflect (based on the updation on exchanges and depositories)
		 </label>
		</div> 
        
        <div class="">
        Receive OTP on
        <label class="checkbox-inline"><input type="checkbox" checked value=""  disabled="disabled">E-mail</label>
		<label class="checkbox-inline"><input type="checkbox" checked value=""  disabled="disabled">Mobile</label>
        </div>
        <div class="modal-footer">
        <button type="button" id="sendOtpId"  onclick="SendOTPProfileEmailPhone()" data-toggle='modal'  data-target='#OtpModelId' disabled="disabled" class="btn btn-default buysubmitgreen fonts" >Send OTP</button>
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
      
    </div>
  </div>
</div>
	
	
	
	<!-- Modal -->
  <div class="modal fade ProfileModel" id="OtpModelId" style="display: none;" role="dialog" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"  data-keyboard="false" data-backdrop="false">
    <div class="modal-dialog  modal-lg">
    
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
        <h4 class="modal-title">Enrich Broking</h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>          
        </div>
        <div class="modal-body">
        <h5 class="modal-title">SMS Verification</h5>
        <input type="hidden" style="text-align: right;color:black;margin-left: 10%; width:40%;" id="verifyOTPhiddenId">
<!--                 <b> <label class="stockhead fonts" style="text-align: right;color:black;margin-left: 100%;" id="otphiddenlabelId" ></label></b> -->
        
        <div class="row form-group">
        <div class="col-sm-6">
  		<input type="text" id="otpinputId"  style="width:80%;" class="form-control"/>
  		</div>
  		<div class="col-sm-6">
  		<button type="button" id="SendOTPVerifyId"  onclick="SendOTPVerification()"  class="btn btn-default buysubmitgreen fonts" >Verify</button>
  		</div>
		</div> 
       
        <div class="modal-footer">
<!--           <button type="button" class="btn btn-default" data-dismiss="modal">Close</button> -->
        </div>
      </div>
      
    </div>
  </div>
</div>
	





	<!-- Modal -->
	 <div   class="modal fade ProfileModel" id="SegmentEditId" style="display: none;" role="dialog" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"  data-keyboard="false" data-backdrop="false">
    <div class="modal-dialog modal-lg disable-drag" > 
      <!-- Modal content-->
      <div class="modal-content profile-column">
        <div class="modal-header" id="modelheaderId">
          <h4 class="modal-title">Segments</h4>
          
          <button type="button" class="close" data-dismiss="modal">&times;</button>          
        </div>
        <div class="modal-body">
       
         <div class="row">
        <div class="form-group col-sm-6">        
  		<label><b>Equity derivatives</b></label>
  		<label class="checkbox-inline"><input type="checkbox" value="">NSE - Futures & Options</label><br><br><br>
		<label class="checkbox-inline"><input type="checkbox" value="">BSE - Futures & Options</label>
		</div>
		<div class="form-group col-sm-5">
		<div class="form-group">
      <label for="sel1">Select list (select one):</label>
      <select class="form-control" id="sel1">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
      </select>
		<label class="form-label" for="customFile"></label>
		<input type="file" class="form-control" id="customFile" accept=".pdf"/>
		
		</div>
		</div>
		</div>
		
		
		<div class="row">
        <div class="form-group col-sm-6">
  		<label><b>Currency derivatives</b></label><br><br>
  		<label class="checkbox-inline"><input type="checkbox" value="">NSE - Currency Exchange</label>
		<label class="checkbox-inline"><input type="checkbox" value="">BSE - Currency Exchange</label>
		</div>
		
		<div class="form-group col-sm-5">
		
		<input type="text" id="segmentfilepasswordId" class="form-control"/>
		</div>
		</div>
		
		<div class="row">
        <div class="form-group col-sm-6">
		<label><b>Commodity</b></label><br>
		<label class="checkbox-inline"><input type="checkbox" value="">Commodity account</label>
        
      </div>
      </div>
     
        <div class="modal-footer">
        <button type="button" id="SendsegmentId"  onclick="SendSegments()"  class="btn btn-default buysubmitgreen fonts" >Submit</button>
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
      
    </div>
  </div>
</div>



<!-- Profile End -->
 
         
        
        <!--        Portfolio START -->
        
        
        <div id="portfoliohideId"  style="display:none">
    <div class="tab">
  <button class="tablinks" style="margin-left:15px;" id="PositionstabId" onclick="Positionstabfunc()"  value="Positions">Positions</button>
  <button class="tablinks" style="margin-left:15px;" id="HoldingstabId" onclick="Holdingstabfunc()" value="Holdings">Holdings</button>
 
 
</div>
     <div id="PositionsDivId" class="tabcontent">
      									
	<table id="PositionstableId" class="table table-striped table-bordered display sortable"  style="width:100%;">
        <thead style="background-color: #e3e5e7;">
            <tr>
                <th>Symbol</th>
                <th>Qty</th>
                <th>Prev. Close</th>
                <th>LTP</th>
                <th>MTM</th>
                <th>%Change</th>
            </tr>
        </thead>
        <tbody id="PositionsbodyId">
        
        
        </tbody>
        <tfoot class="global-footer" id="PositionsfooterId" style="width:100%;">
    	<tr class="global-footer" style="width:100%;background-color: #e3e5e7;">
      		<select class="form-control swd-button" id="dayNetId" onchange="DayNetOnchangeFun()" style="width:15%;background-color: #e3e5e7;">
        		<option value="NET" selected="selected">Netwise</option>
        		<option value="DAY" >Daywise</option>
      		</select>
      		<button class="btn swd-button downloadbtn" style="width:18%; margin-left: 25%;"><i class="fa fa-download"></i> Download</button>
      		
    	</tr>
    	<tr id="SquareoffrowId" >
    	 
<!--     	 <button class="btn swd-button " style="width:25%; margin-right: 0%;" data-toggle="modal  data-target="#SquareoffmyModal"  >Squareofforder</button> -->
    	
    	</tr>
  	</tfoot>
  	
    </table>
			<div id="PositionsinnerbodyId" style="display:none;">
       
       <label style="margin-left:418px;">No Positions</label>
       </div>						
</div>

<div id="HoldingsDivId" class="tabcontent"  style="display:none">

  <table id="HoldingstableId" class="table table-striped table-bordered display sortable" style="width:100%;">
        <thead style="background-color: #e3e5e7;">
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
        <tfoot class="global-footer" id="PositionsfooterId" style="width:100%;">
    	<tr class="global-footer" style="width:100%;background-color: #e3e5e7;">
      		
      		<button class="btn swd-button downloadbtn" style="width:18%; margin-left: 25%;"><i class="fa fa-download"></i> Download</button>
    	</tr>
  	</tfoot>
        
    </table>
 
        <div id="HoldingsinnerbodyId" style="display:none;">
       
       <label style="margin-left:418px;">No Holdings Available</label>
       </div>
	</div>
  </div>
  
 

<!-- Squareoff Modal -->
  <div class="modal fade " id="SquareoffmyModal"  role="dialog"  tabindex="-1"  data-keyboard="false" data-backdrop="false">
    <div class="modal-dialog  modal-lg disable-drag" >
 
      <!-- Modal content-->
      <div class="modal-content profile-column" style="height:24em;">
      
        <div class="modal-header">
			<label class="fonts" style="color: white;" id="SquareofflabelId" >
      		</label>
      			<input type="hidden" id="SquareoffHiddenId"   />	
      		<input type="hidden" id="SquareoffHiddenId"   />
      		<input type="hidden" id="TokenhiddenId"  />	
      		<input type="hidden" id="SquareoffExchangeId"  />
          <button type="button" class="close" data-dismiss="modal">&times;</button>
                    
        </div>    
        
        <div class="modal-body" style="height:400px;"">
            
           <div  class="row ">
				<div class="form-group col-sm-5">
     		 	<label class="radio-inline fonts"   data-toggle="tooltip"  data-placement="bottom" title="Normal" style="padding-left:5px;">
      			<input type="radio" id="SqroffNrmlId" name="SqroffNrmlId"    checked="checked" style="padding-left:10px;text-align:center;"><span id="SqroffNrmlspanId"  style="align=center">NRML</span>
      			</label>
      			
     			</div>
     			
     		 	<div class="form-group col-sm-7" align="right"> 
     		 	<label class="radio-inline fonts" data-toggle="tooltip"  data-placement="bottom" title="Limit"  style="padding-left:5px;">
      			<input type="radio" id="SqrofflmtId" style="text-align:center;" checked="checked" name="SqrofflmtId"   class="SqroffLmtcheckclass"><span >LMT</span>
      			</label>
      			<label class="radio-inline fonts" data-toggle="tooltip"  data-placement="bottom" title="Market"  style="padding-left:5px;">
      			<input type="radio" id="SqroffmktId" style="text-align:center;" name="SqroffmktId" class="Mktcheckclass" ><span style="align=center">MKT</span>
      			</label>
     		 
   				</div>
   			</div>
   			 
   			  <div  class="row">
   			  
				<div class="form-group col-sm-3 fonts">
   			  	<label  for="QtyId">QTY (Lotsize:1)</label>
   			  	<input type="number" style="width: 170px;" id="SquareoffNetqtyId" onkeydown="if(event.key==='.'){event.preventDefault();}" onchange="mySquareoffNetqtyFunction()" name="SquareoffNetqtyId" min="1" max="">
   			  	</div> 
   			  	 
   			  	<div  class="form-group col-sm-3 fonts">
   			  	 <label  for="priceId">PRICE(Ticksize:0.5):</label>
   			  		<input type="number"  style="width: 170px;"   onchange="mySqroffPriceFunction()"   id="SqroffpriceId" name="SqroffpriceId" min="0" max="">
   			  	</div>
   			  	
   			   		<div  class="form-group col-sm-3 fonts" id="SqroffTriggerPriceDivId">
   			   		<label  for="TriggerpriceId">TRIGGER PRICE</label>
   			  		<input type="number"  style="width: 170px;"   onchange="SqroffTriggerPriceFunction()"  disabled="disabled" id="SqroffTriggerpriceId" name="SqroffTriggerpriceId" min="0" max="">
   			 		 </div>		  
   			  		<div  class="form-group col-sm-3 fonts">
   			  		 <label for="quantity" id="SqroffDiscquantityLabelId"  >DISC.QTY</label>
   			  		 <input type="number" style="width: 170px;"   id="SqroffDiscquantityId"  onchange="mySqroffdiscqtyFunction()" name="SqroffDiscquantityname" min="0" max="">
   			  		</div>
   					</div>	
   					  
   			<div class="row">
             
            <div class=" form-check col-md-10">
            <br>
             <label class="radio-inline fonts"  style="padding-left:20px;">
                         <span id="SqroffTriggerPriceErrorId" style="color:red;text-align=center;display:none;">*Trigger price shouldn't be greater than price </span>
                         <input type="hidden" id="SqroffTriggerPricehiddenErrorId" />
            </label>
            
            <label class="radio-inline fonts"  style="padding-left:0px;">
                         <span id="SqroffDiscQuanErrorId" style="color:red;text-align=center;display:none;">*Disclosed quantity cannot be grater than order Quantity </span>
                         <input type="hidden" id="SqroffDiscQuanhiddenErrorId" />
            </label>
            
             <label class="radio-inline fonts"  style="padding-left:0px;">
                         <span id="SqroffDiscQuanNSEErrorId" style="color:red;text-align=center;display:none;">*Disclosed quantity cannot be less than 10% of your order. </span>
                         <input type="hidden" id="SqroffDiscQuanNSEhiddenErrorId" />
            </label>
          <label class="radio-inline fonts"  style="padding-left:0px;">
                         <span id="SqroffDiscQuanMCXErrorId" style="color:red;text-align=center;display:none;">*Disclosed quantity cannot be less than 25% of your order. </span>
                         <input type="hidden" id="SqroffDiscQuanMCXhiddenErrorId" />
            </label> 
            <br>
            </div>
            </div>
            <div class="row">
            <div class="form-group col-md-12" align="left" style="padding-left:20px;">
				<label class="radio-inline fonts" id="SqroffDaylabelId" data-toggle="tooltip"  data-placement="top" title="Full Day Validity" style="padding-left:0px;">
      			<input type="radio" id="SqroffdayId" name="SqroffdayId"  checked="checked" style="padding-left:5px;"><span style="align=center">DAY</span>
      			</label>
      			<label class="radio-inline fonts" id="SqroffIoclabelId" data-toggle="tooltip"  data-placement="top" title="Immediate or Cancel" style="padding-left:5px;">
      			<input type="radio" id="SqroffiocId" name="SqroffiocId"  style="padding-left:5px;"><span style="align=center">IOC</span>
      			</label>      		
            	<label class="radio-inline fonts"  data-toggle="tooltip"  data-placement="top" title="Regular" style="padding-left:180px;">
      			<input type="radio"id="SqroffRegularOrdId" checked="checked" name="SqroffRegularOrdId" ><span style="align=center">Regular</span>
      			</label>
   			</div>        

         
         
        </div>
        
           <div class="modal-footer"> 
            <div class="form-group col-md-10 fonts" align="right"> 
                 <input type="hidden" id="UserID" value="${userId}" />
                 <input type="hidden" id="NetQtyHiddenvalueforBtn"  />
			
   			 <button type="button" id="SqroffbuyId"  onclick="SqroffPlaceOrderbuyfun()"  class="btn btn-default buysubmitgreen fonts" >BUY</button>
   			
         	<button type="button" id="SqroffsellId"  onclick="SqroffPlaceOrderbuyfun()" class="btn btn-default sellsumbmitred fonts" >SELL</button> 
         	<button type="button"  class="btn btn-default cancelbtn fonts" data-dismiss="modal">CANCEL</button>
         	</div> 
         	
      	 </div>
     		 </div>
       
       
      </div>
      
    </div>
  </div>
  

<!--        Portfolio END -->


<div id="AlertDivId" class="tabcontent" style="display:none;">
  <h3>Alerts Manager</h3>
 									
	<table id="alerttableId" class="table table-striped table-bordered display sortable"  style="width:100%;">
        <thead style="background-color: #e3e5e7;">
            <tr>
                <th>Script Name</th>
                <th>Alert</th>
                <th>Frequency</th>
                <th>Expiry Date</th>
                <th>Status</th>
                <th>Symbol</th>
            </tr>
        </thead>
        <tbody id="alertbodyId">
        
        </tbody>
    </table>
			<div id="alertinnerbodyId" style="display:none;">
       
       <label style="margin-left:418px;">No Data</label>
       </div>						
</div>

<!-- Alert end -->

        
        <div id="orderhideId"  style="display:none">
    <div class="tab">
  <button class="tablinks" style="margin-left:15px;" id="pendingorderId" onclick="pendingordfunc()" value="Pending">Pending</button>
  <button class="tablinks" style="margin-left:15px;" id="completedorderId" onclick="completeordfunc()" value="Completed">Completed</button>
  <button class="tablinks" id="tradebookorderId" value="TradeBook" onclick="tradeordfunc()">Trade Book</button>
</div>
     <div id="PendingDivId" class="tabcontent">
  <h3>Pending Order Book</h3>
 									
	<table id="pendingordertableId" class="table table-striped table-bordered display sortable"  style="width:100%;">
        <thead style="background-color: #e3e5e7;">
            <tr>
                <th>Exchange</th>
                <th>Product</th>
                <th>Qty</th>
                <th>Avg Price</th>
                <th>Status</th>
                <th>Exchange Order Time</th>
                <th>Exchange Order Number</th>
                <th>Nest Order Time</th>
                <th>Nest Order Number</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody id="pendingorderbodyId" onclick="orderrefresh();">
        
        </tbody>
    </table>
			<div id="pendinginnerbodyId" style="display:none;">
       
       <label style="margin-left:418px;">No Data</label>
       </div>						
</div>

<div id="CompletedDivId" class="tabcontent"  style="display:none">
  <h3>Completed Order Book</h3>
  <table id="completedorderId" class="table table-striped table-bordered display sortable" style="width:100%; table-layout:fixed;word-wrap:break-word">
        <thead style="background-color: #e3e5e7;">
            <tr>
              
              <th>Exchange</th>
              <th>Product</th>
              <th>Qty</th>
              <th>Avg Price</th>
              <th>Status</th>
              <th>Exchange Order Time</th>
              <th>Exchange Order Number</th>
              <th>Nest Order Time</th>
              <th>Nest Order Number</th>
              <th>Action</th>
              
              
             </tr>
        </thead>
        <tbody id="CompletedorderbodyId">
        
        </tbody>
    </table>
 
        <div id="CompletedinnerbodyId" style="display:none;">
       
       <label style="margin-left:418px;">No Data</label>
       </div>
</div>

<div id="TradeBookDivId" class="tabcontent"  style="display:none">
  <h3>Trade Book</h3>
   <table id="tradebookorderId" class="table table-striped table-bordered display sortable" style="width:100%;">
        <thead style="background-color: #e3e5e7;">
            <tr>
                <th>Exchange</th>
                <th>Product</th>
                <th>Qty</th>
                <th>Avg Price</th>
                <th>PCode</th>
                <th>Exchange Order Time</th>
                <th>Exchange Order Number</th>
                <th>Nest Order Time</th>
                <th>Nest Order Number</th>
                 <th>Action</th>
            </tr>
        </thead>
        <tbody id="tradebookorderbodyId">
 
        </tbody>
        
    </table>
 
        <div id="tradebookinnerbodyId" style="display:none;">
       
       <label style="margin-left:418px;">No Data</label>
       </div>
</div>
        
        </div>
        <div class="market-trade" id="otherId">
          <ul class="nav nav-pills" role="tablist">
            <li class="nav-item">
              <a class="nav-link active" data-toggle="pill" href="#pills-trade-limit" role="tab"
                aria-selected="true">Limit</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="pill" href="#pills-market" role="tab" aria-selected="false">Market</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="pill" href="#pills-stop-limit" role="tab" aria-selected="false">Stop
                Limit</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="pill" href="#pills-stop-market" role="tab" aria-selected="false">Stop
                Market</a>
            </li>
          </ul>
          <div class="tab-content">
            <div class="tab-pane fade show active" id="pills-trade-limit" role="tabpanel">
              <div class="d-flex justify-content-between">
                <div class="market-trade-buy">
                  <div class="input-group">
                    <input type="number" class="form-control" placeholder="Price">
                    <div class="input-group-append">
                      <span class="input-group-text">BTC</span>
                    </div>
                  </div>
                  <div class="input-group">
                    <input type="number" class="form-control" placeholder="Amount">
                    <div class="input-group-append">
                      <span class="input-group-text">ETH</span>
                    </div>
                  </div>
                  <ul class="market-trade-list">
                    <li><a href="#!">25%</a></li>
                    <li><a href="#!">50%</a></li>
                    <li><a href="#!">75%</a></li>
                    <li><a href="#!">100%</a></li>
                  </ul>
                  <p>Available: <span>0 BTC = 0 USD</span></p>
                  <p>Volume: <span>0 BTC = 0 USD</span></p>
                  <p>Margin: <span>0 BTC = 0 USD</span></p>
                  <p>Fee: <span>0 BTC = 0 USD</span></p>
                  <button class="btn buy">Buy</button>
                </div>
                <div class="market-trade-sell">
                  <div class="input-group">
                    <input type="number" class="form-control" placeholder="Price">
                    <div class="input-group-append">
                      <span class="input-group-text">BTC</span>
                    </div>
                  </div>
                  <div class="input-group">
                    <input type="number" class="form-control" placeholder="Amount">
                    <div class="input-group-append">
                      <span class="input-group-text">ETH</span>
                    </div>
                  </div>
                  <ul class="market-trade-list">
                    <li><a href="#!">25%</a></li>
                    <li><a href="#!">50%</a></li>
                    <li><a href="#!">75%</a></li>
                    <li><a href="#!">100%</a></li>
                  </ul>
                  <p>Available: <span>0 BTC = 0 USD</span></p>
                  <p>Volume: <span>0 BTC = 0 USD</span></p>
                  <p>Margin: <span>0 BTC = 0 USD</span></p>
                  <p>Fee: <span>0 BTC = 0 USD</span></p>
                  <button class="btn sell">Sell</button>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="pills-market" role="tabpanel">
              <div class="d-flex justify-content-between">
                <div class="market-trade-buy">
                  <div class="input-group">
                    <input type="number" class="form-control" placeholder="Price">
                    <div class="input-group-append">
                      <span class="input-group-text">BTC</span>
                    </div>
                  </div>
                  <div class="input-group">
                    <input type="number" class="form-control" placeholder="Amount">
                    <div class="input-group-append">
                      <span class="input-group-text">ETH</span>
                    </div>
                  </div>
                  <ul class="market-trade-list">
                    <li><a href="#!">25%</a></li>
                    <li><a href="#!">50%</a></li>
                    <li><a href="#!">75%</a></li>
                    <li><a href="#!">100%</a></li>
                  </ul>
                  <p>Available: <span>0 BTC = 0 USD</span></p>
                  <p>Volume: <span>0 BTC = 0 USD</span></p>
                  <p>Margin: <span>0 BTC = 0 USD</span></p>
                  <p>Fee: <span>0 BTC = 0 USD</span></p>
                  <button class="btn buy">Buy</button>
                </div>
                <div class="market-trade-sell">
                  <div class="input-group">
                    <input type="number" class="form-control" placeholder="Price">
                    <div class="input-group-append">
                      <span class="input-group-text">BTC</span>
                    </div>
                  </div>
                  <div class="input-group">
                    <input type="number" class="form-control" placeholder="Amount">
                    <div class="input-group-append">
                      <span class="input-group-text">ETH</span>
                    </div>
                  </div>
                  <ul class="market-trade-list">
                    <li><a href="#!">25%</a></li>
                    <li><a href="#!">50%</a></li>
                    <li><a href="#!">75%</a></li>
                    <li><a href="#!">100%</a></li>
                  </ul>
                  <p>Available: <span>0 BTC = 0 USD</span></p>
                  <p>Volume: <span>0 BTC = 0 USD</span></p>
                  <p>Margin: <span>0 BTC = 0 USD</span></p>
                  <p>Fee: <span>0 BTC = 0 USD</span></p>
                  <button class="btn sell">Sell</button>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="pills-stop-limit" role="tabpanel">
              <div class="d-flex justify-content-between">
                <div class="market-trade-buy">
                  <div class="input-group">
                    <input type="number" class="form-control" placeholder="Price">
                    <div class="input-group-append">
                      <span class="input-group-text">BTC</span>
                    </div>
                  </div>
                  <div class="input-group">
                    <input type="number" class="form-control" placeholder="Amount">
                    <div class="input-group-append">
                      <span class="input-group-text">ETH</span>
                    </div>
                  </div>
                  <ul class="market-trade-list">
                    <li><a href="#!">25%</a></li>
                    <li><a href="#!">50%</a></li>
                    <li><a href="#!">75%</a></li>
                    <li><a href="#!">100%</a></li>
                  </ul>
                  <p>Available: <span>0 BTC = 0 USD</span></p>
                  <p>Volume: <span>0 BTC = 0 USD</span></p>
                  <p>Margin: <span>0 BTC = 0 USD</span></p>
                  <p>Fee: <span>0 BTC = 0 USD</span></p>
                  <button class="btn buy">Buy</button>
                </div>
                <div class="market-trade-sell">
                  <div class="input-group">
                    <input type="number" class="form-control" placeholder="Price">
                    <div class="input-group-append">
                      <span class="input-group-text">BTC</span>
                    </div>
                  </div>
                  <div class="input-group">
                    <input type="number" class="form-control" placeholder="Amount">
                    <div class="input-group-append">
                      <span class="input-group-text">ETH</span>
                    </div>
                  </div>
                  <ul class="market-trade-list">
                    <li><a href="#!">25%</a></li>
                    <li><a href="#!">50%</a></li>
                    <li><a href="#!">75%</a></li>
                    <li><a href="#!">100%</a></li>
                  </ul>
                  <p>Available: <span>0 BTC = 0 USD</span></p>
                  <p>Volume: <span>0 BTC = 0 USD</span></p>
                  <p>Margin: <span>0 BTC = 0 USD</span></p>
                  <p>Fee: <span>0 BTC = 0 USD</span></p>
                  <button class="btn sell">Sell</button>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="pills-stop-market" role="tabpanel">
              <div class="d-flex justify-content-between">
                <div class="market-trade-buy">
                  <div class="input-group">
                    <input type="number" class="form-control" placeholder="Price">
                    <div class="input-group-append">
                      <span class="input-group-text">BTC</span>
                    </div>
                  </div>
                  <div class="input-group">
                    <input type="number" class="form-control" placeholder="Amount">
                    <div class="input-group-append">
                      <span class="input-group-text">ETH</span>
                    </div>
                  </div>
                  <ul class="market-trade-list">
                    <li><a href="#!">25%</a></li>
                    <li><a href="#!">50%</a></li>
                    <li><a href="#!">75%</a></li>
                    <li><a href="#!">100%</a></li>
                  </ul>
                  <p>Available: <span>0 BTC = 0 USD</span></p>
                  <p>Volume: <span>0 BTC = 0 USD</span></p>
                  <p>Margin: <span>0 BTC = 0 USD</span></p>
                  <p>Fee: <span>0 BTC = 0 USD</span></p>
                  <button class="btn buy">Buy</button>
                </div>
                <div class="market-trade-sell">
                  <div class="input-group">
                    <input type="number" class="form-control" placeholder="Price">
                    <div class="input-group-append">
                      <span class="input-group-text">BTC</span>
                    </div>
                  </div>
                  <div class="input-group">
                    <input type="number" class="form-control" placeholder="Amount">
                    <div class="input-group-append">
                      <span class="input-group-text">ETH</span>
                    </div>
                  </div>
                  <ul class="market-trade-list">
                    <li><a href="#!">25%</a></li>
                    <li><a href="#!">50%</a></li>
                    <li><a href="#!">75%</a></li>
                    <li><a href="#!">100%</a></li>
                  </ul>
                  <p>Available: <span>0 BTC = 0 USD</span></p>
                  <p>Volume: <span>0 BTC = 0 USD</span></p>
                  <p>Margin: <span>0 BTC = 0 USD</span></p>
                  <p>Fee: <span>0 BTC = 0 USD</span></p>
                  <button class="btn sell">Sell</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-3" id="orderdashboardbookhiddenId">
        <div class="order-book mb15">
          <h2 class="heading">Order Book</h2>
          <table class="table">
            <thead>
              <tr>
                <th>Price(BTC)</th>
                <th>Amount(ETH)</th>
                <th>Total(ETH)</th>
              </tr>
            </thead>
            <tbody>
              <tr class="red-bg-80">
                <td class="red">0.022572</td>
                <td>1.253415</td>
                <td>15.27648</td>
              </tr>
              <tr class="red-bg-60">
                <td class="red">0.020371</td>
                <td>1.205415</td>
                <td>15.25648</td>
              </tr>
              <tr class="red-bg-40">
                <td class="red">0.023572</td>
                <td>1.645415</td>
                <td>15.23648</td>
              </tr>
              <tr class="red-bg-20">
                <td class="red">0.032378</td>
                <td>1.206715</td>
                <td>15.25348</td>
              </tr>
              <tr class="red-bg-10">
                <td class="red">0.022573</td>
                <td>1.262415</td>
                <td>15.19648</td>
              </tr>
              <tr class="red-bg-8">
                <td class="red">0.154377</td>
                <td>1.225415</td>
                <td>15.35648</td>
              </tr>
              <tr class="red-bg-5">
                <td class="red">0.120373</td>
                <td>1.285415</td>
                <td>15.25648</td>
              </tr>
              <tr class="red-bg">
                <td class="red">0.028576</td>
                <td>1.291415</td>
                <td>15.26448</td>
              </tr>
            </tbody>
            <tbody class="ob-heading">
              <tr>
                <td>
                  <span>Last Price</span>
                  0.020367
                </td>
                <td>
                  <span>USD</span>
                  148.65
                </td>
                <td class="red">
                  <span>Change</span>
                  -0.51%
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr class="green-bg">
                <td class="green">0.158373</td>
                <td>1.209515</td>
                <td>15.23248</td>
              </tr>
              <tr class="green-bg-5">
                <td class="green">0.020851</td>
                <td>1.206245</td>
                <td>15.25458</td>
              </tr>
              <tr class="green-bg-8">
                <td class="green">0.025375</td>
                <td>1.205715</td>
                <td>15.65648</td>
              </tr>
              <tr class="green-bg-10">
                <td class="green">0.020252</td>
                <td>1.205495</td>
                <td>15.24548</td>
              </tr>
              <tr class="green-bg-20">
                <td class="green">0.020373</td>
                <td>1.205415</td>
                <td>15.25648</td>
              </tr>
              <tr class="green-bg-40">
                <td class="green">0.020156</td>
                <td>1.207515</td>
                <td>15.28948</td>
              </tr>
              <tr class="green-bg-60">
                <td class="green">0.540375</td>
                <td>1.205915</td>
                <td>15.25748</td>
              </tr>
              <tr class="green-bg-80">
                <td class="green">0.020372</td>
                <td>1.205415</td>
                <td>15.25648</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="market-history">
          <ul class="nav nav-pills" role="tablist">
            <li class="nav-item">
              <a class="nav-link active" data-toggle="pill" href="#recent-trades" role="tab" aria-selected="true">Recent
                Trades</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="pill" href="#market-depth" role="tab" aria-selected="false">Market
                Depth</a>
            </li>
          </ul>
          <div class="tab-content">
            <div class="tab-pane fade show active" id="recent-trades" role="tabpanel">
              <table class="table">
                <thead>
                  <tr>
                    <th>Time</th>
                    <th>Price(BTC)</th>
                    <th>Amount(ETH)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>13:03:53</td>
                    <td class="red">0.020191</td>
                    <td>0.2155045</td>
                  </tr>
                  <tr>
                    <td>13:03:53</td>
                    <td class="green">0.020191</td>
                    <td>0.2155045</td>
                  </tr>
                  <tr>
                    <td>13:03:53</td>
                    <td class="green">0.020191</td>
                    <td>0.2155045</td>
                  </tr>
                  <tr>
                    <td>13:03:53</td>
                    <td class="red">0.020191</td>
                    <td>0.2155045</td>
                  </tr>
                  <tr>
                    <td>13:03:53</td>
                    <td class="green">0.020191</td>
                    <td>0.2155045</td>
                  </tr>
                  <tr>
                    <td>13:03:53</td>
                    <td class="green">0.020191</td>
                    <td>0.2155045</td>
                  </tr>
                  <tr>
                    <td>13:03:53</td>
                    <td class="green">0.020191</td>
                    <td>0.2155045</td>
                  </tr>
                  <tr>
                    <td>13:03:53</td>
                    <td class="red">0.020191</td>
                    <td>0.2155045</td>
                  </tr>
                  <tr>
                    <td>13:03:53</td>
                    <td class="red">0.020191</td>
                    <td>0.2155045</td>
                  </tr>
                  <tr>
                    <td>13:03:53</td>
                    <td class="green">0.020191</td>
                    <td>0.2155045</td>
                  </tr>
                  <tr>
                    <td>13:03:53</td>
                    <td class="green">0.020191</td>
                    <td>0.2155045</td>
                  </tr>
                  <tr>
                    <td>13:03:53</td>
                    <td class="red">0.020191</td>
                    <td>0.2155045</td>
                  </tr>
                  <tr>
                    <td>13:03:53</td>
                    <td class="green">0.020191</td>
                    <td>0.2155045</td>
                  </tr>
                  <tr>
                    <td>13:03:53</td>
                    <td class="red">0.020191</td>
                    <td>0.2155045</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="tab-pane fade" id="market-depth" role="tabpanel">
              <div class="depth-chart-container">
                <div class="depth-chart-inner">
                  <div id="lightDepthChart"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    
    <!--     Alert Modal  START-->
    
    <div   class="modal fade" id="myModalMessageAlert" role="dialog" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"  data-keyboard="false" data-backdrop="false">
    
    <div class="modal-dialog modal-lg " >
     
      <div class="modal-content">
        <div class="modal-header">
        ALERT NOTIFICATION
          <h4 class="modal-title"></h4>

        </div>
        <div class="modal-body" >
            
   <div id="messageAlertBodyId"></div>
        
        <button type="button" style="float:right"  class="btn btn-default" data-dismiss="modal">Close</button>  
        </div>
  
        
      </div> 
    </div>
    </div>    
<!--     Alert Modal END -->
    
    
    
       <!-- Buy/Sell  Order Modal -->
       
  <div   class="modal fade background-clickable" id="myModal" role="dialog" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"  data-keyboard="false" data-backdrop="false">
<!--    <div   class="modal fade" id="myModal" role="dialog"> -->
    
    <div class="modal-dialog modal-lg " > 
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header" id="modelheaderId">
          <h4 class="modal-title"></h4>
          	<div class="form-group col-sm-3">
      		 <label class="stockhead fonts"  id="stocklabelId" ></label><label id="buy_priceid"></label>
			<label class="stockhead fonts"  id="stockhiddval" name="stockhiddval" ></label>


			<input type="hidden" id="stockhiddval" style= "color: white;" name="stockhiddval"  /> 
			<label class="fonts"  id="mcxexpirylabelId"  style= "color: white;text;margin-left: 300px; "></label> 
			<label class="fonts"  id="nseexpirydatelabelId" style= "color: white;text;margin-left: 10px;" ></label> 
			<label class="fonts"  id="nfoexpirydatelabelId" style= "color: white;text;margin-left: 100px; " ></label> 
			
      	
      		     <input type="hidden" id="mcxticksizehiddval" style= "color: white;text" name="mcxticksizehiddval"  /> 
      		     <input type="hidden" id="mcxexpirydatehiddval" style= "color: white;text" name="mcxexpirydatehiddval"  /> 
      		     <input type="hidden" id="nseticksizehiddval" style= "color: white;text" name="nseticksizehiddval"  /> 
      		     <input type="hidden" id="nseexpirydatehiddval" style= "color: white;text" name="nseexpirydatehiddval"  /> 
      		     <input type="hidden" id="nfoexpirydatehiddval" style= "color: white;text" name="nfoexpirydatehiddval"  /> 
      		
      		</div>	     
      		
          <div  class="toggle-btn" id="toggle-btnId" data-toggle="tooltip" title="Switch Buy/Sell" onclick="this.classList.toggle('active'); buysellShow();">
          <div class="inner-circle"></div>
          </div>
          
        </div>
        <div class="modal-body" style="overflow:auto;">
            
           <div  class="row ">
				<div class="form-group col-sm-5">
				<label class="radio-inline fonts "     data-toggle="tooltip"  data-placement="bottom" title="Cash and Carry" style="padding-left:0px;">
      			<input type="radio" id="cncId" name="cncId" disabled="disabled"  style="padding-left:15px;text-align:center;"><span id="cncspanId"  class="tooltiptext" style="text-align:center;" >CNC</span>
      			</label>  
     		 
     		 
     		 
     		 <label class="radio-inline fonts"   data-toggle="tooltip"  data-placement="bottom" title="Normal" style="padding-left:5px;">
      			<input type="radio" id="NrmlId" name="NrmlId" disabled="disabled" style="padding-left:10px;text-align:center;"><span id="NrmlspanId" disabled="disabled" style="align=center">NRML</span>
      			</label>
      			<label class="radio-inline fonts"  data-toggle="tooltip"  data-placement="bottom" title="Intraday Square off" style="padding-left:5px;">
      			<input type="radio" id="MisId" name="MisId"  style="padding-left:10px;text-align:center;"><span  style="align=center">MIS</span>
      			</label>
    
     		</div>
     		 <div class="form-group col-sm-7" align="right"> 
     		 <label class="radio-inline fonts" data-toggle="tooltip"  data-placement="bottom" title="Limit"  style="padding-left:5px;">
      			<input type="radio" id="lmtId" style="text-align:center;" name="lmtId"  onclick="Lmtcheck()" class="Lmtcheckclass"><span >LMT</span>
      			</label>
      			<label class="radio-inline fonts" data-toggle="tooltip"  data-placement="bottom" title="Market"  style="padding-left:5px;">
      			<input type="radio" id="mktId" style="text-align:center;" name="mktId"  class="Mktcheckclass" ><span style="align=center">MKT</span>
      			</label>
      			<label class="radio-inline fonts"  data-toggle="tooltip"  data-placement="bottom" title="Stop Loss" style="padding-left:5px;">
      			<input type="radio" id="slId" name="slId" style="text-align:center;" class="Slcheckclass"><span style="align=center">SL</span>
      			</label>
      			
      			<label class="radio-inline fonts" data-toggle="tooltip"  data-placement="bottom" title="Stop Loss Market"  style="padding-left:5px;">
      			<input type="radio" id="sl-mId" name="sl-mId" style="text-align:center;" class="Sl-Mcheckclass"><span class="tooltiptext" style="align=center">SL-M</span>
      			</label>
      			
     		 
   			</div>
   			</div>
   			 
   			  <div  class="row">
   			  
				<div class="form-group col-sm-3 fonts">
   			  <label  for="QtyId">QTY (Lotsize:1)</label>
   			  <input type="number" style="width: 170px;" id="QtyId" onkeydown="if(event.key==='.'){event.preventDefault();}" onchange="myqtyFunction()" name="Qtyname" min="1" max="">
   			  </div>
   			  
   			  
   			  <div  class="form-group col-sm-3 fonts">
   			   <label  for="priceId">PRICE (Ticksize:0.5):</label>
   			  <input type="number"  style="width: 170px;" disabled="disabled" step="0.5" onkeyup="myPriceonkeyupFunction()" onchange="myPriceFunction()" value="" id="priceId" name="priceId" min="0" max="">
   			  
   			  </div>
   			  
   			  <div  class="form-group col-sm-3 fonts" id="TriggerPriceDivId" style="display:none;">
   			   <label  for="TriggerpriceId">TRIGGER PRICE</label>
   			  <input type="number"  style="width: 170px;"  onkeyup="TriggerPricekeyupFunction()"   onchange="TriggerPriceFunction()" disabled="disabled" id="TriggerpriceId" name="TriggerpriceId" min="0" max="">
   			  </div>
<!--    			  onchange="TriggerPriceFunction()changeFunction()"  onkeydown="keydownFunction()" onkeyup="keyupFunction()" -->
   			  <div  class="form-group col-sm-3 fonts" id="CoStoplossDivId" style="display:none;">
   			   <label for="quantity" id="CoStoplosslabellineId">STOPLOSS</label>
   			  <input type="number" style="width: 170px;"   id="CoStoplossId" name="CoStoplossId" min="0" max="">
   			  </div> 
   			  
   			  <div  class="form-group col-sm-3 fonts">
   			   <label for="quantity" id="DiscquantityLabelId"  >DISC.QTY</label>
   			  <input type="number" style="width: 170px;"  disabled="disabled"  id="DiscquantityId" onchange="mydiscqtyFunction()" name="Discquantityname" min="0" max="">
   			  </div>
   			  
   			  <div  class="form-group col-sm-3 fonts" id="stoplessId" style="display:none;">
   			   <label for="quantity"  >STOPLOSS (ABSOLUTE)</label>
   			  <input type="number" style="width: 155px;padding-left:15px;"   id="stoplossAbsolutequanId" name="stoplossAbsolutequanId" min="0" max="">
   			  </div>
   			  <div  class="form-group col-sm-3 fonts" id="tarketDivId" style="display:none;">
   			   <label for="quantity" id="labellineId">TARGET (ABSOLUTE)</label>
   			  <input type="number" style="width: 170px;"   id="TargetAbsolutequanId" name="TargetAbsolutequanId" min="0" max="">
   			  </div> 			 
   			 
   			  
   			  <div  class="form-group col-sm-3 fonts_1" id="TrailingstopId" style="display:none;">
   			   <label for="quantity" id="labellineId">TRAILING STOPLOSS (ABSOLUTE)</label>
   			  <input type="number" style="width: 170px;"   id="TargetstoplossquanId" name="TargetstoplossquanId" min="0" max="">
   			  </div>
   			  
   			  </div>
   			    	
   			  
   			  <div class="row">
             
            <div class=" form-check col-md-6">
            <br>
             <label class="radio-inline fonts"  style="padding-left:0px;">
                         <span id="TriggerPriceErrorId" style="color:red;text-align=center;display:none;">*Trigger price shouldn't be greater than price </span>
                         <input type="hidden" id="TriggerPricehiddenErrorId" />
            </label>
            
            <label class="radio-inline fonts"  style="padding-left:0px;">
                         <span id="DiscQuanErrorId" style="color:red;text-align=center;display:none;">*Disclosed quantity cannot be grater than order Quantity </span>
                         <input type="hidden" id="DiscQuanhiddenErrorId" />
            </label>
            
             <label class="radio-inline fonts"  style="padding-left:0px;">
                         <span id="DiscQuanNSEErrorId" style="color:red;text-align=center;display:none;">*Disclosed quantity cannot be less than 10% of your order. </span>
                         <input type="hidden" id="DiscQuanNSEhiddenErrorId" />
            </label>
          <label class="radio-inline fonts"  style="padding-left:0px;">
                         <span id="DiscQuanMCXErrorId" style="color:red;text-align=center;display:none;">*Disclosed quantity cannot be less than 25% of your order. </span>
                         <input type="hidden" id="DiscQuanMCXhiddenErrorId" />
            </label> 
            <br>
            <label class="radio-inline fonts"  data-toggle="tooltip"  data-placement="top" title="Regular" style="padding-left:0px;">
      			<input type="radio"id="RegularOrdId" name="RegularOrdId" ><span style="align=center">Regular</span>
      			</label>
      			<label class="radio-inline fonts" data-toggle="tooltip"  data-placement="top" title="Bracket Order"  id="BracketOrdlabelId" style="padding-left:5px;">
      			<input type="radio" id="BracketOrdId" name="BracketOrdId"  ><span id="BracketOrdspanId" style="align=center">BO</span>
      			</label>
      			<label class="radio-inline fonts" data-toggle="tooltip"  data-placement="top" title="Cover Order"  style="padding-left:5px;">
      			<input type="radio" id="CoverOrdId" name="CoverOrdId"><span id="CoverOrdspanId" style="align=center">CO</span>
      			</label>
      			<label class="radio-inline fonts" data-toggle="tooltip"  data-placement="top" title="After Market Order"  style="padding-left:5px;">
      			<input type="radio" id="AfterMarketOrdId" name="AfterMarketOrdId"><span  style="align=center">AMO</span>
      			</label>
     		
   			</div> 
   			
            <div class="form-group col-md-4 fonts" align="right"> 
                 <input type="hidden" id="UserID" value="${userId}" />
                <input type="hidden" id="scripthiddval" name="scripthiddval"  /> 
      		  <input type="hidden" id="tokenhiddval" name="tokenhiddval"  /> 
      		

                  
   			 <button type="button" id="buyId"  onclick="PlaceOrderbuyfun()"  class="btn btn-default buysubmitgreen fonts" >BUY</button>
         	<button type="button" id="sellId"  onclick="PlaceOrdersellfun()" class="btn btn-default sellsumbmitred fonts" >SELL</button> 
         	</div>  
              
         <button type="button"  class="btn btn-default cancelbtn fonts" data-dismiss="modal">CANCEL</button>
         </div>
         
        </div>
        
        
         <div class="modal-footer"> 
      
				<div class="form-group col-md-12" align="left" style="padding-left:0px;">
				<label class="radio-inline fonts" id="DaylabelId" data-toggle="tooltip"  data-placement="top" title="Full Day Validity" style="padding-left:0px;">
      			<input type="radio" id="dayId" name="dayId"  style="padding-left:5px;"><span style="align=center">DAY</span>
      			</label>
      			<label class="radio-inline fonts" id="IoclabelId" data-toggle="tooltip"  data-placement="top" title="Immediate or Cancel" style="padding-left:5px;">
      			<input type="radio" id="iocId" name="iocId"  style="padding-left:5px;"><span style="align=center">IOC</span>
      			</label>
     			<label class="radio-inline fonts" id="GTClabelId" data-toggle="tooltip"  data-placement="top" title="GTC" style="padding-left:5px;">
      			<input type="radio" id="gtcId" name="gtcId"  style="padding-left:5px;"><span style="align=center">GTC</span>
      			</label>
      			<label class="radio-inline fonts" id="GTDlabelId" data-toggle="tooltip"  data-placement="top" title="Good Till Date" style="padding-left:5px;">
      			<input type="radio" id="gtdId" name="gtdId"   style="padding-left:5px;"><span style="align=center">GTD</span>
      			</label>
      			<label class="radio-inline fonts" id="GTTlabelId" data-toggle="tooltip"  data-placement="top" title=" Good Till Target"  style="padding-left:5px;">
      			<input type="radio" id="gttId" name="gttId"  style="padding-left:5px;"><span id="GTTspanId" style="align=center">GTT</span>
      			</label>
      			
      			<label class="datepicker" id="datepickerId" style="padding-left:5px;display:none;">
      			Validity: <input type="text"  class="datepicker" id="datepicker" >
      			</label>
      		
      			<label class="radio-inline col-sm-3 fonts "  id="GTTstoplossId" style="padding-left:5px;display:none;">
      			<input type="checkbox" id="GTTstoplosscheckId" name="GTTstoplosscheckId" >
      			Stoploss: <input type="number" style="width:140px;"  disabled="disabled" id="GTTstoplossValueId"><span class="transparent">%</span>
      			</label>
      			<label class="radio-inline col-sm-3 fonts "  id="GttTargetId" style="padding-left:5px;display:none;">
      			<input type="checkbox" id="GttTargetcheckId" name="GttTargetcheckId" >
      			Target: <input type="number" style="width:140px;" disabled="disabled" id="GttTargetvalueId"><span class="transparent">%</span>
      			</label>
      			</div>
     		 </div>

        </div>
        
        
      </div> 
      
    </div>
    
    
  
  
  <div class="modal fade" id="ajax_response" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
	<div class="modal-dialog ajax_response" role="document">
		<div class="modal-content">

			<div class="modal-body inner-circle">
				<h5 style="text-align: center">Order Cancelled Successfully.</h5>
                    <label style="margin-left:200px;" id="cancelordernumber"></label>

			</div>
			<div class="modal-footer" style="text-align: center;">
				<!-- <button type="button" class="btn btn-default" data-dismiss="modal">Close</button> -->
				<button type="button" class="btn btn-primary  mx-auto"
					id="sdata_pop" data-dismiss="modal">Ok</button>
			</div>
		</div>
	</div>
</div>
  
</div>
    
    
    
    
  </div>
    
      <!-- Modal -->
      
      <div class="modal fade " id="BuyOrderNumberModelIdRepeat" role="dialog" >
    <div class="modal-dialog">
    
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
        <h4 class="modal-title">Repeat Order</h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          
        </div>
        <div class="modal-body"> 
        <p>You Place the Order Number: 
        <b> <label style="margin-left:200px;"  id="buyOrderNumbersRepeat"></label></b>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
      
    </div>
  </div>
  <div class="modal fade " id="BuyOrderNumberModelId" role="dialog" >
    <div class="modal-dialog">
    
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
        <h4 class="modal-title">Buy  Order</h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          
        </div>
        <div class="modal-body"> 
        <p>You Place the Buy Order Number: 
        <b> <label style="margin-left:200px;"  id="buyOrderNumbers"></label></b>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
      
    </div>
  </div>
  
  
   <!-- Modal -->
  <div class="modal fade " id="SellOrderNumberModelId" role="dialog" >
    <div class="modal-dialog">
    
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
        <h4 class="modal-title">Sell  Order</h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>          
        </div>
        <div class="modal-body"> 
        <p>You Place the Sell Order Number: 
         <label style="margin-left:200px;"  id="sellOrderNumbers"></label>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
      
    </div>
  </div>
  
 
  <script>
    /*$('tbody, .market-news ul').mCustomScrollbar({
      theme: 'minimal',
    });*/
  </script>
  
  <script src="https://cdnjs.cloudflare.com/ajax/libs/paho-mqtt/1.0.1/mqttws31.min.js" type="text/javascript"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/paho-mqtt/1.0.1/mqttws31.js" type="text/javascript"></script>



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


	
	
	
	//============ Buy/Sell Order Window START==========
		

// modal draggable
$('.modal').modal({ keyboard: false,
    show: false
});

// Jquery draggable
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
 	document.getElementById(id+'_stockbuysell').style.display = 'block';
 	 //document.getElementById(id+'_stockbuysell').style.visibility='visible';
}
function stockbuybtnmouseout(id){
	document.getElementById(id+'_stockbuysell').style.display = 'none';
	 //document.getElementById(id+'_stockbuysell').style.visibility='hidden';
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
	
	
//   <=========  Profile functions START ===============>



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
   			     
   			        if(stat==='Ok'){
   			        	
  			        	$("#ProfileNamelabelId").html(jsonObject.accountName);
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
   }
    
    
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

					  
	function onConnect() {	  
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
	
	/* function uuid() {
		  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
		    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
		  );
		} */
	
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

   $(document).ready(function(){
	   
	   getscriptrefresh();
	   
		  client = new Paho.MQTT.Client(mqttHost, 8000, "topazclient");
		  client.onConnectionLost = onConnectionLost;
		  
		  client.onMessageArrived = onMessageArrived;

		  clientConnect();
		  
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
			
			
		
		$("#search").keyup(function (e) {
			
		//	$("#heederlisthiddId").hide();
			
			
			var searchTerm = document.getElementById("search").value;
			
			  if(searchTerm.length >0){
				  
				$("#scriptlisthiddId").hide();
				$("#searchcloseId").show();
			
	   
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
		
		
   });
   
   function closefun(){
   	
	   $('#SearchdivbodyId').html('');
	   $('#CommoditySearchdivbodyId').html('');
	   $('#EqtySearchdivbodyId').html('');
	   $('#NfoSearchdivbodyId').html('');
	   $('#search').val('');
	   $('#searchcloseId').hide();
	   
	   getscriptrefresh();
   
   }

function addScriptMcx(scriptname,token,exchange,mcxInstrumentCode,mcxInstrumentSeries,mcxProductStartDate,mcxLastTradingDate,mcxLotSize,
		mcxTickSize,mcxDeliveryStartDate,mcxDeliveryEndDate,mcxLastModifiedDate,mcxInstrumentInfo,mcxTenderPeriodStartDate,mcxTenderPeriodEndDate,
		mcxInstrumentName,mcxOriginalExpiryDate,mcxStrikePrice,mcxOptionType,displayname){
	
	$('#SearchdivbodyId').hide(); 
	$('#CommoditySearchdivbodyId').hide();
	
	
	 var topic = token;
     var qos = 1;

     client.subscribe(topic,{qos: qos});
		
    
     tokenArray.push(token);
	
	$.ajax({
			type :'POST',
			url :'addScriptMcx',
			data :'Token='+token+"&Exchange="+exchange+"&Scriptname="+encodeURIComponent(scriptname)+"&McxInstrumentCode="+mcxInstrumentCode+
			       "&McxInstrumentSeries="+mcxInstrumentSeries+"&McxProductStartDate="+mcxProductStartDate+"&McxLastTradingDate="+mcxLastTradingDate+"&McxLotSize="+mcxLotSize+"&McxTickSize="+mcxTickSize+
			       "&McxDeliveryStartDate="+mcxDeliveryStartDate+"&McxDeliveryEndDate="+mcxDeliveryEndDate+"&McxLastModifiedDate="+mcxLastModifiedDate+"&McxInstrumentInfo="+mcxInstrumentInfo+
			       "&McxTenderPeriodStartDate="+mcxTenderPeriodStartDate+"&McxTenderPeriodEndDate="+mcxTenderPeriodEndDate+"&McxInstrumentName="+mcxInstrumentName+"&McxOriginalExpiryDate="+mcxOriginalExpiryDate+
			       "&McxStrikePrice="+mcxStrikePrice+"&McxOptionType="+mcxOptionType+"&Displayname="+displayname,
			dataType: 'html',
			success:function(response){
			     
                 var jsonObject =JSON.parse(response);
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
			success:function(response){
			     
                 var jsonObject =JSON.parse(response);
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
			dataType: 'html',
			success:function(response){
			     
                 var jsonObject =JSON.parse(response);
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

function deleteScript(symbol){
			
	 
 //alert("symbol:::"+symbol);
  var topic = symbol;
     var qos = 0;

     client.unsubscribe(topic);
     
     tokenArray.pop(symbol);
   
		  $.ajax({
				type :'POST',
				url :'deleteScript',
			    data :"Token=" +symbol,
				dataType: 'html',
				success:function(response){
					//alert("response::"+response);
					getscriptrefresh();

				},
				error:function(){
				alert("DeleteScript Error");
					
				
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
					
					
					body=body+"<tr  id='"+response[i].token+"_mydivId'  onmouseover='stockbuybtnmouseover("+token+")' onmouseout='stockbuybtnmouseout("+token+")' >";
		             
					body=body+"<td  class='Field' id='"+response[i].token+"'  style='width:90%;'><i class='icon ion-md-star'></i>"+response[i].scriptName+"<label class='addbtn'>"+response[i].exchange+"</label>";
                 	  "<input type='hidden' id='mydivhiddenId' name='mydivhiddenId' value='"+response[i].token+"_mydivId' />";  
					body=body+"<div   id='"+response[i].token+"_stockbuysell' class='FieldOverview' style='float: right;'>";
					body=body+"<button type='button'    class=' stockbuybtn swd-button' id='"+response[i].token+"_stockbuysell'    name='stockbuyName'  onclick='onclickstockbuybtnToggle(); changeModalContent(event);  onclickstockbuybtn("+scriptName+","+price+","+exchange+","+token+","+displayname+","+mcxTickSize+","+mcxOriginalExpiryDate+","+nseTickSize+","+nseExDate+","+nfoexpiry_date+","+mcxInstrumentCode+","+mcxStrikePrice+","+mcxOptionType+","+mcxInstrumentName+","+mcxInstrumentSeries+","+nseSymbol+","+nseSeries+","+nfoSymbol+","+nfostrike_price+","+nfooption_type+","+nfoinstrument_name+")' data-toggle='modal'  data-target='#myModal' >BUY</button>";
					body=body+"<button type='button'    class=' stocksellbtn swd-button' id=''    name='stocksellName'  onclick='onclickstocksellbtnToggle(); changeModalContent(event);  onclickstocksellbtn("+scriptName+","+price+","+exchange+","+token+","+displayname+","+mcxTickSize+","+mcxOriginalExpiryDate+","+nseTickSize+","+nseExDate+","+nfoexpiry_date+","+mcxInstrumentCode+","+mcxStrikePrice+","+mcxOptionType+","+mcxInstrumentName+","+mcxInstrumentSeries+","+nseSymbol+","+nseSeries+","+nfoSymbol+","+nfostrike_price+","+nfooption_type+","+nfoinstrument_name+")'  data-toggle='modal'  data-target='#myModal'>SELL</button>";
					body=body+"<button type='button'    class=' stocksellbtn swd-button' id=''    name='marketDepthName'  onclick='getMarketDepth("+scriptName+","+price+","+exchange+","+token+")' data-target='#modalMarketDepth' data-toggle='modal'>MD</button>"
					    
					    

					body=body+"<button type='button' style='cursor:pointer' class='stocksellbtn swd-button' id='deletescriptId' name='deletescriptId'  onclick='deleteScript("+token+")' >Delete</button>";	
					body=body+"<icon  style='cursor:pointer' class='fa fa-clock-o' id='setalertId' name='setalertId'  onclick='setAlert("+scriptName+","+price+","+exchange+","+token+","+mcxOriginalExpiryDate+","+nseExDate+","+nfoexpiry_date+")' data-toggle='modal'  data-target='#myModalAlertSet' >SetAlert</icon>";

					body=body+"</div>";
					body=body+"</td>";  
					if(response[i].price !=null){
					body=body+"<td id='"+response[i].token+"_priceid'>"+response[i].price+"</td>&nbsp;&nbsp;";
					}else{
						body=body+"<td id='"+response[i].token+"_priceid'></td>&nbsp;&nbsp;";
					}
					body=body+"<td id='"+response[i].token+"_changeid' class='red'>"+response[i].exchange+"</td>";
					
                
					body=body+"</tr>";
					
					  
				}
				
				 $('#addscriptId').html(body); 
				   
		         
			},
			error:function(){
				//alert("getMarketScript Error");
				
			
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
         


<script type="text/javascript">

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
   			  <input type="text"  style="width: 170px;"   value="" class="datepicker"  id="expiryDate" name="expiryDate">
   			  
   			  </div>
   			  
   			  <div id="recurringhideIdTime" style="display:none;" class="form-group col-sm-2 fonts">
   			   <label  for="timeId">TIME</label>
   			  <input type="text"  style="width: 170px;"   value="" id="timeId" name="timeId">
   			  
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
   
       
       <!-- Buy/Sell  Order Modal -->
       
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
           <div  class="toggle-btn" id="toggle-btnId" data-toggle="tooltip" title="Switch Buy/Sell" onclick="this.classList.toggle('active'); buysellShow();">
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
              
         <button type="button"  class="btn btn-default cancelbtn fonts" data-dismiss="modal">CANCEL</button>
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
	
	
	//============ Buy/Sell Order Window END==========	
	


</script>

</body>


<!-- Mirrored from crypo.netlify.app/exchange-light.html by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 08 Sep 2020 15:18:07 GMT -->
</html>


