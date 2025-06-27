<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>

 <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
	<link href="./resourcefiles/css/Orderbook-style.css" rel="stylesheet"	type="text/css">
	<link href="http://netdna.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" rel="stylesheet" type="text/css">
	
<script src="./resourcefiles/AccessJs/OrderbookJS.js"></script>


		<!-- Bootstrap Modal -->
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
	
    
    
		
		<!-- DatePicker -->

		<link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css">
		<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
</head>
<body>


<div style="clear:both; height:20px;"></div>


<div id="dashboardalertbodyId">
</div>
<!--    START Profile web Design   -->
    
<!--     <div class="container"> -->
<div id="dashboardDivId" style="display: none;margin-top:50px;">

<!-- 		<div class="main-body"> -->
<div id="SubdashboardDivId">
			<div class="row" id="SubdashboarddesignId" style="display:none;">
			
				<div class="col-lg-4">
					<div class="card">
						<div class="card-body">
						
						
							 <div class="d-flex flex-column align-items-center text-center">
								<img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="Admin" class="rounded-circle p-1 bg-primary" width="110">
								<div class="mt-3">
							<input type="text" style="border: 0px none;text-align:center;"   id="ProfileNamelabelId">
									<p class="text-secondary mb-1">Full Stack Developer</p>
									<p class="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
									<button class="btn btn-primary">Follow</button>
									<button class="btn btn-outline-primary">Message</button>
								</div>
							</div>
							
							
						</div>
					</div>
				</div>
				
				<div class="col-lg-4">
					<div class="card">
						<div class="card-body">
						
						
							 <div class="d-flex flex-column align-items-center text-center">
								<img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="Admin" class="rounded-circle p-1 bg-primary" width="110">
								<div class="mt-3">
							<input type="text" style="border: 0px none;text-align:center;"   id="ProfileNamelabelId">
									<p class="text-secondary mb-1">Full Stack Developer</p>
									<p class="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
									<button class="btn btn-primary">Follow</button>
									<button class="btn btn-outline-primary">Message</button>
								</div>
							</div>
							
							
						</div>
					</div>
				</div>
				
				<div class="col-lg-4">
					<div class="card">
						<div class="card-body">
						
						
							 <div class="d-flex flex-column align-items-center text-center">
								<img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="Admin" class="rounded-circle p-1 bg-primary" width="110">
								<div class="mt-3">
							<input type="text" style="border: 0px none;text-align:center;"   id="ProfileNamelabelId">
									<p class="text-secondary mb-1">Full Stack Developer</p>
									<p class="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
									<button class="btn btn-primary">Follow</button>
									<button class="btn btn-outline-primary">Message</button>
								</div>
							</div>
							
							
						</div>
					</div>
				</div>
				
				
				
				<div class="col-lg-4">
					<div class="card">
						<div class="card-body">
						<form action="uploadSegment" method="post" enctype="multipart/form-data">		
							 <div class="d-flex flex-column align-items-center text-center">
								
								<div class="mt-3">
								<label style="margin-left:-70%;" >PDF Upload</label><br>
						
				    	<input type="file" name="file" class="form-control-file " id="file" accept=".pdf">
					    <input type="submit" class="btn btn-primary " style="margin-left: auto;" value="Upload PDF">	
					    <div class="errorMsg"><label style="color:red;text-align:center" for="errormessage">${message}</label></div>				
		
		    	       </div>
                      </div>
		             </form>
			        </div>
			       </div>
		         </div>
		         
				
				<div class="col-lg-4">
					<div class="card">
						<div class="card-body">
						
						
							 <div class="d-flex flex-column align-items-center text-center">
								<label style="margin-left:-70%;" >Holdings</label>
								
								<div class="mt-3">
								<label style="margin-left:-10%;" >P&L </label>
								   <h4>1,004.90</h4>
								 <label class="radio-inline fonts" data-toggle="tooltip" data-placement="top" title="Current Value"   style="padding-left: 5px;" > 
								  <input type="radio" id="CurrentValId" onclick="currentValHoldingsDashboard();" name="HoldingsVal" checked><span id="CurrentspanId"  style="padding-left:3px;">Current Value</span>
								 </label><br>
								  <label class="radio-inline fonts" data-toggle="tooltip" data-placement="top" title="P&L"   style="padding-left: 5px;"> 
								  <input type="radio" id="plId"  onclick="plHoldingsDashboard()" name="HoldingsVal"><span id="plspanId" style="padding-left:3px;">P&L</span>
								 </label><br>
								  <label class="radio-inline fonts" data-toggle="tooltip" data-placement="top" title="Invesment"   style="padding-left: 5px;"> 
								  <input type="radio" id="InvestId" onclick="investmentHoldingsDashboard()"  name="HoldingsVal"><span id="InvestspanId"  style="padding-left:3px;">Investment</span>
								 </label><br>
								 
								  <label style="display:none;" id="investmentLabelId">Investment <span>30000.00</span></label><br>
                                   <label style="display:none;" id="currentValueLabelId">Current Value  <span>12000.00</span> </label>                                    
                                    <label style="display:none;"" id="plLabelId">P&L <span>12000.00</span></label>
								</div>
							</div>
							
							
						</div>
					</div>
				</div>

			<div class="col-lg-4">
					<div class="card">
						<div class="card-body">						
						
							 <div class="d-flex flex-column align-items-center text-center">
							 	<label style="margin-left:-60%;" >Running Positions</label>
								<div class="mt-3">
							      <label style="margin-left:-10%;" >P&L </label>
								   <span>1,004.90</span><br>
                                  <label style="margin-left:-10%;" >MTM </label>
								   <span>1,004.90</span><br>
								   <button class="btn btn-primary">chart</button>
								   <div id="runningPositionsbodyId">
								   
								   <a href="${pageContext.request.contextPath}/views/jsp/chartIQ.jsp" >click</a>
								   </div>
								   
								   
								   
								   <div id="runningPositionsDivId"  style="display:none;">
 
									     
									<!-- table table-bordered table-striped mb-0 -->
										<table id="runningPositionstableId" class="table table-striped  display sortable" style="display: block; overflow-x: auto; white-space: nowrap;height:150px;width: 260px;margin-left:-50px;padding-top: 15px;padding-bottom: 15px;padding-right:15px;padding-left: 15px;">
									        <thead style="background-color: #4e73df;color: #fff;text-align:center;font-size: 12px;font-family: Helvetica, Sans-Serif;padding-top: 15px;padding-bottom: 15px;padding-right:15px;padding-left: 15px;">
<!-- 									            <tr>  -->
<!-- 									                 	<th>Symbol</th> -->
<!-- 									            </tr> -->
									        </thead>
									        <tbody id="runningPositionstablebodyId"  class="" style="display:none;height:150px;overflow:scroll;vertical-align: top;table-layout: fixed;width:260px;overflow:auto;padding-top:10px;padding-bottom:10px;padding-right:10px;padding-left:10px;text-align:center;font-size:12px;font-family:Helvetica,Sans-Serif;">
									          		 <caption id="captionId" class="captionclass">
									          		<label id=runningpositionscallId" style="margin-left:418px;margin-top:10px;display:none;">No runningPositions Available</label>
									   				</caption>
									        </tbody>
									        
									        <tfoot class="footer-fix table table-striped table-bordered display sortable" id="OptionChainfootercallId">
									           
									<!--         footer-fixed  -->
											<tr>

								    	</tr>
								    	</tfoot>
								  	
								    </table>
													<!-- <div id="runningPositionstableinnerbodycallId" style="display:none;">       
								       			<label style="margin-left:418px;">No runningPositions Available</label>
								       			</div> -->						
										
								  </div>
						   
										   
										</div>   
									 </div>						
									</div>
								</div>	
							</div>
					
					
			
			
			
			
		</div>
	</div>
    
    
    
<!--     END Profile web Design  -->











<script type="text/javascript">

$(document).ready(function(){
	
	
	runningPositions();
	
	$("#currentValueLabelId").show();
	
	 $("#dashboardDivId").show();
     $("#SubdashboarddesignId").show();
     ajax({
	type :'POST',
	url :'getAlert',
	dataType: 'json',
	success:function(jsonObject){
		 // var jsonObject =JSON.parse(response);
       var body; 
       
       if(jsonObject.length >0){
	     
	     for (var i = 0; i <jsonObject.length; i++) {
	    	 
	    	 
	    	 var alertId=jsonObject[i].id;
	    	 
	    	 
	    	 var IdTag=JSON.stringify(jsonObject[i].id);
	    	 var alertconditionTag=JSON.stringify(jsonObject[i].alertcondition);
	    	 var priceTag=JSON.stringify(jsonObject[i].price);
	    	 var notificationTag=JSON.stringify(jsonObject[i].notificationintervalmin);
	    	 var expirydateTag=JSON.stringify(jsonObject[i].expirydate);
	    	 var timerTag=JSON.stringify(jsonObject[i].timer);
	    	 var frequencyTag=JSON.stringify(jsonObject[i].frequency);
	    	 var scriptnameTag=JSON.stringify(jsonObject[i].scriptname);
	    	 var statusTag=JSON.stringify(jsonObject[i].status);
	    	 var exchangeTag=JSON.stringify(jsonObject[i].exchange);
	    	 
	    	 var stat;
	    	 if(jsonObject[i].status==='1'){
	    		 
	    		 stat="RUNNING";
	    	 }else{
	    		 
	    		 stat="PAUSED";
	    	 }
	    	 var alertval=jsonObject[i].alertcondition+" "+jsonObject[i].price
	    	 
	    	 body=body+"<a class='dropdown-item d-flex align-items-center'>";	
    		 body=body+ " <div>";
    		 body=body+ " <div class='small text-gray-500' style='color: #a7e4d9 !important;'></div>";
    		// body=body+ "<span class='font-weight-bold'></span>";
    		 body=body+ "<div style='font-size:12px;font-family: Helvetica, Sans-Serif;'>";

	    	if(jsonObject[i].scriptname !=null){
	    	 body=body+"<tr style='font-size:12px;'>";
        	 body=body+"<td>" + jsonObject[i].scriptname + "</td>";
        	 body=body+"<td>" + alertval + "</td>";
        	 
        	 if(jsonObject[i].frequency=="Once"){
	         body=body+"<td>" + jsonObject[i].notificationintervalmin + "</td>";
        	 }else{
        		 body=body+"<td>" + jsonObject[i].notificationintervalmin +" mn(s)"+ "</td>";
        	 }
	         
	         body=body+"<td>" + jsonObject[i].expirydate +" "+jsonObject[i].timer+ "</td>";
        	 body=body+"<td>" + stat + "</td>";
        	 if(jsonObject[i].status=="1"){
        	 body=body+"<td><i class='bi bi-pencil-square' data-toggle='modal' data-target='#myModalAlertModify' style='cursor: pointer;font-size:24px;' onclick='EditAlertFun("+IdTag+","+alertconditionTag+","+priceTag+","+notificationTag+","+expirydateTag+","+timerTag+","+frequencyTag+","+scriptnameTag+","+exchangeTag+")'   title='Edit'></i>&nbsp&nbsp<i class=' bi bi-pause' style='cursor: pointer;font-size:24px;' onclick='PauseFun("+alertId+","+statusTag+")'  title='Pause'></i>&nbsp&nbsp<i class='bi bi-trash' style='cursor: pointer;font-size:24px;' onclick='deleteFun("+alertId+");' title='Delete'></i></td>";
        	 }else{
        		 body=body+"<td><i class='bi bi-pencil-square' data-toggle='modal' data-target='#myModalAlertModify' style='cursor: pointer;font-size:24px;' onclick='EditAlertFun("+IdTag+","+alertconditionTag+","+priceTag+","+notificationTag+","+expirydateTag+","+timerTag+","+frequencyTag+","+scriptnameTag+","+exchangeTag+")'   title='Edit'></i>&nbsp&nbsp<i class='bi bi-play-fill' style='cursor: pointer;font-size:24px;' onclick='PauseFun("+alertId+","+statusTag+")'  title='Play'></i>&nbsp&nbsp<i class='bi bi-trash' style='cursor: pointer;font-size:24px;' onclick='deleteFun("+alertId+");' title='Delete'></i></td>"; 
        	 }
        	 body=body+"</tr>";
        	 
        	 body=body+ "</div>";
 		 	body=body+ "</div>";
     		body=body+ "</a>";
        	 
	    	}
        	 


	      
	   }
	    
	     $('#dashboardalertbodyId').html(body);
	    
  	  
    }else{
  	 $('#dashboardalertbodyId').html('');

    }
	      

         
	},
	error:function(){
		//alert("getAlert Error");
	
	}	
});

});

function runningPositions(){

    $.ajax({
    	type :'POST',
    	dataType: 'html',
		url :'getrunningPositionsDashboard',
		success:function(response){

		 $("#runningPositionsDivId").show();
		 
		 var body;
	
		var a="silverDEC24"
		var b="GoldNov20"
		var c="silverDEC24"
	    var d="GoldNov20"
	    var e="silverDEC24"
	    var f="copperOct14"
	    var g="silverDEC24"
	    var h="GoldNov20"
	    var i="silverDEC24"
	    var j="copperOct14"
	    var k="silverDEC24"
	    var l="GoldNov20"
        var m="copperOct14"
 	   	    		
				
	 body=body+"<tr style='font-size:12px;'>";
	 body=body+"<td>" + a+ "</td>";	 
	 body=body+"</tr>";
	 
	 body=body+"<tr style='font-size:12px;'>";
	 body=body+"<td>" + b+ "</td>";
	 body=body+"</tr>";
	 
	 body=body+"<tr style='font-size:12px;'>";
	 body=body+"<td>" + c+ "</td>";
	 body=body+"</tr>";
	 
	 body=body+"<tr style='font-size:12px;'>";
	 body=body+"<td>" + d+ "</td>";
	 body=body+"</tr>";
	 
	 
	 body=body+"<tr style='font-size:12px;'>";
	 body=body+"<td>" + e+ "</td>";
	 body=body+"</tr>";
	 
	 
	 
	 body=body+"<tr style='font-size:12px;'>";
	 body=body+"<td>" + f+ "</td>";
	 body=body+"</tr>";
	 
	 
	 body=body+"<tr style='font-size:12px;'>";
	 body=body+"<td>" + g+ "</td>";
	 body=body+"</tr>";
	 
	 
	 
	 body=body+"<tr style='font-size:12px;'>";
	 body=body+"<td>" + h+ "</td>";
	 body=body+"</tr>";
	 
	 
	 body=body+"<tr style='font-size:12px;'>";
	 body=body+"<td>" + i+ "</td>";
	 body=body+"</tr>";
	 
	 
	 body=body+"<tr style='font-size:12px;'>";
	 body=body+"<td>" + j + "</td>";
	 body=body+"</tr>";
	 
	 body=body+"<tr style='font-size:12px;'>";
	 body=body+"<td>" + k + "</td>";
	 body=body+"</tr>";
	 
	 body=body+"<tr style='font-size:12px;'>";
	 body=body+"<td>" + l + "</td>";
	 body=body+"</tr>";
	 
	 
	 body=body+"<tr style='font-size:12px;'>";
	 body=body+"<td>" + m + "</td>";
	 body=body+"</tr>";
	 
	 
	 /* body=body+"<td>" + b + "</td>";
	 body=body+"<td>" + c + "</td>";
	 body=body+"<td>" + d + "</td>";
	 body=body+"<td>" + e + "</td>";
	 body=body+"<td>" + f + "</td>";
	 body=body+"<td>" + g + "</td>";
	 body=body+"<td>" + h + "</td>";
	 body=body+"<td>" + i + "</td>";
	 body=body+"<td>" + j+ "</td>";
	 body=body+"<td>" + k + "</td>";
	 
	 body=body+"<td>" + l + "</td>"; */
	 
	 body=body+"</tr>";
	 
	 $('#runningPositionstablebodyId').show();
	 $('#runningPositionstablebodyId').html(body); 
	}
});

	
} 


function currentValHoldingsDashboard(){
	
	 $("#currentValueLabelId").show();
     $("#investmentLabelId").hide();
     $("#plLabelId").hide();
     
    
    // $('#plId').prop('checked', false);
    // $('#InvestId').prop('checked', false);
     
	ajax({
	type :'POST',
	url :'getCurrentValHoldingsDashboard',
	dataType: 'json',
	success:function(response){
		
		
	}
		
		
	});
	
}

function investmentHoldingsDashboard(){
	
	
    $("#investmentLabelId").show();
    $("#currentValueLabelId").hide();
    $("#plLabelId").hide();
    
    
   // $('CurrentValId').prop('checked', false);
   // $('#plId').prop('checked', false);
    
	ajax({
	type :'POST',
	url :'getInvestmentHoldingsDashboard',
	dataType: 'json',
	success:function(response){
		
		
	}
		
		
	});
	
}

function plHoldingsDashboard(){
	
	
    $("#plLabelId").show();
    $("#currentValueLabelId").hide();
    $("#investmentLabelId").hide();
    
   // $('CurrentValId').prop('checked', false);
   // $('#InvestId').prop('checked', false);
    
	ajax({
	type :'POST',
	url :'getplHoldingsDashboard',
	dataType: 'json',
	success:function(response){
		
		
	}
		
		
	});
	
}







</script>

</body>
</html>