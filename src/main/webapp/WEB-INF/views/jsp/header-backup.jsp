<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

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
<!--           <li class="nav-item header-custom-icon"> -->
<!--             <a class="nav-link" href="#" id="clickFullscreen"> -->
<!--               <i class="icon ion-md-expand"></i> -->
<!--             </a> -->
<!--           </li> -->
<!--           <li class="nav-item dropdown header-custom-icon"> -->
<!--             <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" -->
<!--               aria-expanded="false"> -->
<!--               <i class="icon ion-md-notifications"></i> -->
<!--               <span class="circle-pulse"></span> -->
<!--             </a> -->
<!--             <div class="dropdown-menu"> -->
<!--               <div class="dropdown-header d-flex align-items-center justify-content-between"> -->
<!--                 <p class="mb-0 font-weight-medium">6 New Notifications</p> -->
<!--                 <a href="#!" class="text-muted">Clear all</a> -->
<!--               </div> -->
<!--               <div class="dropdown-body"> -->
<!--                 <a href="#!" class="dropdown-item"> -->
<!--                   <div class="icon"> -->
<!--                     <i class="icon ion-md-lock"></i> -->
<!--                   </div> -->
<!--                   <div class="content"> -->
<!--                     <p>Account password change</p> -->
<!--                     <p class="sub-text text-muted">5 sec ago</p> -->
<!--                   </div> -->
<!--                 </a> -->
<!--                 <a href="#!" class="dropdown-item"> -->
<!--                   <div class="icon"> -->
<!--                     <i class="icon ion-md-alert"></i> -->
<!--                   </div> -->
<!--                   <div class="content"> -->
<!--                     <p>Solve the security issue</p> -->
<!--                     <p class="sub-text text-muted">10 min ago</p> -->
<!--                   </div> -->
<!--                 </a> -->
<!--                 <a href="#!" class="dropdown-item"> -->
<!--                   <div class="icon"> -->
<!--                     <i class="icon ion-logo-android"></i> -->
<!--                   </div> -->
<!--                   <div class="content"> -->
<!--                     <p>Download android app</p> -->
<!--                     <p class="sub-text text-muted">1 hrs ago</p> -->
<!--                   </div> -->
<!--                 </a> -->
<!--                 <a href="#!" class="dropdown-item"> -->
<!--                   <div class="icon"> -->
<!--                     <i class="icon ion-logo-bitcoin"></i> -->
<!--                   </div> -->
<!--                   <div class="content"> -->
<!--                     <p>Bitcoin price is high now</p> -->
<!--                     <p class="sub-text text-muted">2 hrs ago</p> -->
<!--                   </div> -->
<!--                 </a> -->
<!--                 <a href="#!" class="dropdown-item"> -->
<!--                   <div class="icon"> -->
<!--                     <i class="icon ion-logo-usd"></i> -->
<!--                   </div> -->
<!--                   <div class="content"> -->
<!--                     <p>Payment completed</p> -->
<!--                     <p class="sub-text text-muted">4 hrs ago</p> -->
<!--                   </div> -->
<!--                 </a> -->
<!--               </div> -->
<!--               <div class="dropdown-footer d-flex align-items-center justify-content-center"> -->
<!--                 <a href="#!">View all</a> -->
<!--               </div> -->
<!--             </div> -->
<!--           </li> -->
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
                    <a href="exchange-light.html" class="nav-link red">
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
  <hr/>    
</body>
</html>