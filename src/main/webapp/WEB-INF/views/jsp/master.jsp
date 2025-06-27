<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"    
"http://www.w3.org/TR/html4/loose.dtd">
<html>

<head>
    <meta charset="utf-8">
    <title>Admin Dashboard</title>
    <!-- Mobile Specific Metas -->
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
    <link rel="stylesheet" href="./resourcefiles/css/preloader.css" />
    <!-- Font-->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap" rel="stylesheet">
    

    <link rel="stylesheet" href="https://cdn.datatables.net/1.10.11/css/jquery.dataTables.min.css" />
    <link rel="stylesheet" href="https://cdn.datatables.net/select/1.1.2/css/select.dataTables.min.css" />
    <link rel="stylesheet" href="https://cdn.datatables.net/responsive/2.0.2/css/responsive.dataTables.min.css" />
    
    <!--DataTables styles Ends-->
    <!-- <link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" rel="stylesheet" /> -->
    <link rel="stylesheet" href="./resourcefiles/css/rangeslider.css" />

    <!-- Main Style Css -->
    <link rel="stylesheet" href="./resourcefiles/css/style.css" />
</head>

<body>
    <div>
        <div id="main">
           <!--Start header.html-->
           <tiles:insertAttribute name="header" />
           <!-- End header.html -->
           <!-- Start leftside.html-->
           <tiles:insertAttribute name="search" />
           <!-- End leftside.html-->
           <!-- Start maincontent.html-->
           <tiles:insertAttribute name="body" />
           <!-- End maincontent.html-->
        </div>
    </div>
    <!-- Start buysell_popup.html -->
    <!-- Etart buysell_popup.html -->
   
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <!-- JavaScript Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>

<!-- for dropdown -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ"
        crossorigin="anonymous"></script>

    <!--used for donut chart in dashboard-->
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>    
    <!--used for side bar search items-->
    <!-- <script type="text/javascript" src="./resourcefiles/js/demo-data.js"></script> -->
    <!--used for drag and drop list-->
    <script type="text/javascript" src="./resourcefiles/js/html5sortable.min.js"></script>
    <script type="text/javascript" src="./resourcefiles/js/main.js"></script>
    <script type="text/javascript" src="./resourcefiles/js/custom.js"></script>
	<script type="text/javascript" src="./resourcefiles/AccessJs/account.js"></script>
    <script type="text/javascript" src="./resourcefiles/js/autocomplete.js"></script>
    <script type="text/javascript" src="./resourcefiles/js/rangeslider.min.js"></script>
    
    <script type="text/javascript" src="./resourcefiles/AccessJs/LeftsideJS.js"></script>
    
    <script type="text/javascript" src="./resourcefiles/AccessJs/WebsocketJS.js"></script>
    
    <script  type="text/javascript" src="./resourcefiles/AccessJs/MarketwatchJS.js"></script> 
    
    <script type="text/javascript" src="./resourcefiles/AccessJs/DashboardJS.js"></script>
    
    <script type="text/javascript" src="./resourcefiles/AccessJs/PintickerJS.js"></script>

     <script type="text/javascript" src="./resourcefiles/AccessJs/buysell.js"></script>
     <script type="text/javascript" src="./resourcefiles/AccessJs/OptionChain.js"></script>

    
    <script type="text/javascript" src="./resourcefiles/AccessJs/OrderJS.js"></script>
    
    <script type="text/javascript" src="./resourcefiles/AccessJs/AlertJS.js"></script>
    
    <script type="text/javascript" src="./resourcefiles/AccessJs/buysell.js"></script>
    
    <script type="text/javascript" src="./resourcefiles/AccessJs/FundJS.js"></script>
    
    <script type="text/javascript" src="./resourcefiles/AccessJs/portfolio.js"></script>
    
    <script type="text/javascript" src="./resourcefiles/AccessJs/holdingCdsl.js"></script>
    
    <script type="text/javascript" src="./resourcefiles/AccessJs/funds.js"></script>
    
  <script type="text/javascript" src="./resourcefiles/AccessJs/RepeatOrder.js"></script>
  
  <script type="text/javascript" src="./resourcefiles/AccessJs/ModifyOrder.js"></script>
  
  <script type="text/javascript" src="./resourcefiles/AccessJs/alerts.js"></script>
    
     
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/paho-mqtt/1.0.1/mqttws31.min.js" type="text/javascript"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/paho-mqtt/1.0.1/mqttws31.js" type="text/javascript"></script>

    <script src="https://cdn.datatables.net/1.10.11/js/jquery.dataTables.min.js"></script>
    <script src="https://cdn.datatables.net/select/1.1.2/js/dataTables.select.min.js"></script>
    <script src="https://cdn.datatables.net/responsive/2.0.2/js/dataTables.responsive.min.js"></script>

    

	<link rel="stylesheet" href="http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css">
	<!-- Bootstrap Modal -->
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
	
	
</body>

</html>