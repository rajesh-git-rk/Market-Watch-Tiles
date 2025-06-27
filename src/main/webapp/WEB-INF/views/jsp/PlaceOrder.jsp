<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
  <title>Buy & Sell</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
  
   
<script data-require="jquery@*" data-semver="2.2.0" src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
  <script data-require="bootstrap@*" data-semver="3.3.6" src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
  <link data-require="bootstrap-css@3.3.6" data-semver="3.3.6" rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.css" />
  <link rel="stylesheet" href="https://code.jquery.com/ui/1.11.3/themes/smoothness/jquery-ui.css" />
 <script src="https://code.jquery.com/ui/1.11.3/jquery-ui.min.js"></script>

<link href="css/bootstrap.min.css" rel="stylesheet" media="screen">

    <style type="text/css">
    
    
    
.modal-dialog  {
  width: 750px;
  margin: auto;
}

.BUYbtn{
color: white;
background-color: green;

}
.SELLbtn{
color: white;
background-color: red;

}


.buybtn:hover {
  background-color: green;
  color: black;
}
.sellbtn:hover {
  background-color: red;
  color: black;
}


.toggle-btn{
width:50px;
height:20px;
margin-left:650px;
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

.tooltip {
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black;
   background-color: black;
   color: white;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;

  /* Position the tooltip */
  position: absolute;
  z-index: 1;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
}
 
</style>
</head>
<body>
<div class="jumbotron text-center">
  <h1>My First Bootstrap Page</h1>
  <p>Market-watch Place-OrderPage !</p> 
</div>
<div class="container">
<div class="row">
    <div class="col-sm-4">
      <h3>MARKETWATCH</h3>
      <div id="mydivId" class="myDIV">
       <ul>
      	<li>SILVER APR <button type="button" class="btn btn-default btn-xs buybtn" id="silverbuybtnId"  onclick="buybtn()" data-toggle="modal"  data-toggle="tooltip" title="Buy(B)"  data-target="#myModal">BUY</button> <button type="button" id="silversellbtnId" onclick="sellbtn()" class="btn btn-default btn-xs sellbtn" data-toggle="modal" data-toggle="tooltip" title="Sell(S)" data-target="#myModal">SELL</button></li>
    	<li>NATURAL GAS<button type="button" class="btn btn-default btn-xs buybtn" id="naturalbuybtnId" onclick="buybtn()" data-toggle="modal"  data-toggle="tooltip" title="Buy(B)"  data-target="#myModal">BUY</button> <button type="button" id="naturalsellbtnId" onclick="sellbtn()" class="btn btn-default btn-xs sellbtn" data-toggle="modal" data-toggle="tooltip" title="Sell(S)" data-target="#myModal">SELL</button></li></li>
   		 <li>SILVER DEC <button type="button" class="btn btn-default btn-xs buybtn" id="silverdecbuybtnId" onclick="buybtn()" data-toggle="modal"  data-toggle="tooltip" title="Buy(B)"  data-target="#myModal">BUY</button> <button type="button" id="silverdecsellbtnId" onclick="sellbtn()" class="btn btn-default btn-xs sellbtn" data-toggle="modal" data-toggle="tooltip" title="Sell(S)" data-target="#myModal">SELL</button></li> </li>
   		 <li>SILVER APR <button type="button" class="btn btn-default btn-xs buybtn" id="silveraprbuybtnId" onclick="buybtn()" data-toggle="modal"  data-toggle="tooltip" title="Buy(B)"  data-target="#myModal">BUY</button> <button type="button" id="silveraprsellbtnId" onclick="sellbtn()" class="btn btn-default btn-xs sellbtn" data-toggle="modal" data-toggle="tooltip" title="Sell(S)" data-target="#myModal">SELL</button></li> </li>
   		
  		</ul>
  
     
     </div>
           
    </div>
    
  
 
 
  <!-- Modal -->
  <div  class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog " >
<!--     <div class="modal-dialog modal-lg" > -->
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">SILVER APR</h4>
          <div  class="toggle-btn" id="toggle-btnId" data-toggle="tooltip" title="Switch Buy/Sell" onclick="this.classList.toggle('active'); buysellShow();">
          <div class="inner-circle"></div>
          </div>
        </div>
        <div class="modal-body" style="height:100%; width:100%">
            <div class="form-check">
            
            <div class="col-md-4">
            
     		 <label class="form-check-label" for="radio1"><input type="radio" class="form-check-input" id="radio1" name="optradio" value="option1" data-toggle="tooltip" title="Cash and Carry">CNC </label>
     		 <label class="form-check-label" for="radio1"><input type="radio" class="form-check-input" id="radio1" name="optradio" value="option1"data-toggle="tooltip" title="Normal">NRML </label>
     		 <label class="form-check-label" for="radio1"><input type="radio" class="form-check-input" id="radio1" name="optradio" value="option1" data-toggle="tooltip" title="Intrday Square off">MIS </label>
     		 </div>
     		 <div class="col-md-8" align="right">
     		 <label class="form-check-label" for="radio1"><input type="radio" class="form-check-input" id="radio1" name="optradio" value="option1" data-toggle="tooltip" title="Limit">LMT </label>
     		 <label class="form-check-label" for="radio1"><input type="radio" class="form-check-input" id="radio1" name="optradio" value="option1" data-toggle="tooltip" title="Market">MKT </label>
     		 <label class="form-check-label" for="radio1"><input type="radio" class="form-check-input" id="radio1" name="optradio" value="option1" data-toggle="tooltip" title="Stop Loss">SL </label>
     		 <label class="form-check-label" for="radio1"><input type="radio" class="form-check-input" id="radio1" name="optradio" value="option1" data-toggle="tooltip" title="Stop Loss Market">SL-M </label>
   			</div> 
   			 </div>
   			 
   			 <br><br><br><br>
   			 
   			  <div  class="row">
				<div class="form-group col-sm-3">
   			  <label for="quantity">QTY (Lotsize:1)</label>
   			  <input type="number" style="width: 70%;" id="quantity" name="quantity" min="1" max="5">
   			  </div>
   			  
   			  
   			  <div  class="form-group col-sm-3">
   			   <label for="quantity">PRICE (Ticksize:0.5):</label>
   			  <input type="number"  style="width: 70%;"  id="quantity" name="quantity" min="1" max="5">
   			  </div>
   			  
   			  <div  class="form-group col-sm-3">
   			   <label for="quantity">TRIGGER PRICE</label>
   			  <input type="number"  style="width: 70%;" id="quantity" name="quantity" min="1" max="5">
   			  </div>
   			  
   			  <div  class="form-group col-sm-3">
   			   <label for="quantity">DISC.QTY</label>
   			  <input type="number" style="width: 70%;"  id="quantity" name="quantity" min="1" max="5">
   			  </div>
   			  
   			  </div>
   			  
    			
    			<br><br>
    			<div class="form-check">
            
            <div class="col-md-6">
            
     		 <label class="form-check-label" for="radio1"><input type="radio" class="form-check-input" id="radio1" name="optradio" value="option1" data-toggle="tooltip" title="Regular Order">Regular </label>
     		 <label class="form-check-label" for="radio1"><input type="radio" class="form-check-input" id="radio1" name="optradio" value="option1" data-toggle="tooltip" title="Bracket Order">BO </label>
     		 <label class="form-check-label" for="radio1"><input type="radio" class="form-check-input" id="radio1" name="optradio" value="option1" data-toggle="tooltip" title="Cover Order">CO </label>  		 
     		 <label class="form-check-label" for="radio1"><input type="radio" class="form-check-input" id="radio1" name="optradio" value="option1" data-toggle="tooltip" title="After Market Order">AMO </label>

   			</div> 
   			
   			 </div>
   			 	
            
            
             <div  class="form-group row">
             <div class="col-md-4" align="right">
   			 <button type="button" id="buyId"  onclick="PlaceOrderfun()" class="btn btn-default BUYbtn" >BUY</button>
         	<button type="button" id="sellId"  onclick="" class="btn btn-default SELLbtn" >SELL</button>
         </div>         
         <button type="button" class="btn btn-default" data-dismiss="modal">CANCEL</button>
         </div>
         
        </div>
        
        
        <div class="modal-footer"> 
         	<div class="form-check">            
            <div class="col-md-4" align="left">            
     		 <label class="form-check-label" for="radio1"><input type="radio" class="form-check-input" id="radio1" name="optradio" value="option1" data-toggle="tooltip" title="Full Day Validity">DAY </label>
     		 <label class="form-check-label" for="radio1"><input type="radio" class="form-check-input" id="radio1" name="optradio" value="option1" data-toggle="tooltip" title="Immediate or Cancel">IOC </label>
     		 
   			</div> 
   			
   			 </div>
        </div>
      </div> 
      
    </div>
  </div>
  
  
  
  
</div>


<script type="text/javascript">





 $(document).ready(function(){
	 $("#silverbuybtnId").hide();
	 $("#silversellbtnId").hide();
      $("#naturalbuybtnId").hide();
     $("#silverdecbuybtnId").hide();
     $("#silveraprbuybtnId").hide(); 	 
     $("#naturalsellbtnId").hide();
 	 $("#silverdecsellbtnId").hide();
 	 $("#silveraprsellbtnId").hide(); 
 	
    $("#mydivId").on({
    	 mouseleave: function(){
             $("#silverbuybtnId").hide();
             $("#silversellbtnId").hide();
             $("#naturalbuybtnId").hide();
             $("#silverdecbuybtnId").hide();
             $("#silveraprbuybtnId").hide();         	
         	 $("#naturalsellbtnId").hide();
         	 $("#silverdecsellbtnId").hide();
         	 $("#silveraprsellbtnId").hide(); 
         	
        },  
         mouseover: function(){
	        	  $("#silverbuybtnId").show();
	        	  $("#silversellbtnId").show();
	              $("#naturalbuybtnId").show();
	              $("#silverdecbuybtnId").show();
	              $("#silveraprbuybtnId").show();	          	 
	          	  $("#naturalsellbtnId").show();
	          	  $("#silverdecsellbtnId").show();
	          	  $("#silveraprsellbtnId").show();       
        }
    });
}); 




function PlaceOrderfun(){
	alert("PlaceOrder")
	$.ajax({
		type :'POST',
		url :'PlaceOrder',				
		success:function(response){
		},
		error:function(){
			alert("PlaceOrder Error");
		
		}	
	});
	
	}
	


	
	
	$( "#toggle-btnId" ).click(function() {	
		
	  var act = $('.toggle-btn').hasClass("active");
	  var buy = document.getElementById("buyId");
	  var sell = document.getElementById("sellId");
	  if(act){
		  buy.style.display = "none";
		  sell.style.display = "block";
	  }
	  else{
		  buy.style.display = "block";
		  sell.style.display = "none";
	  }	  
});
	
	function buybtn(){
	
		var act = $('.toggle-btn').hasClass("active");
		  var buy = document.getElementById("buybtnId");
		  var sell = document.getElementById("sellbtnId");
		  var buy2 = document.getElementById("buyId");
		  var sell2 = document.getElementById("sellId");
		  if(act){
			  buy2.style.display = "none";
			  sell2.style.display = "block";
		  }
		  else{	
			  buy2.style.display = "block";
			  sell2.style.display = "none";
		  }	
	}
	
	 $('.sellbtn').click(function () {
	    //return if clicked button have class active
	    if($('.toggle-btn').hasClass('active'))
	       return true;
	    
	});
	 
	function sellbtn(){	
		
		
		var act = $('.toggle-btn').hasClass("active");
		  var buy = document.getElementById("buybtnId");		 
		  var sell = document.getElementById("sellbtnId");
		  var buy2 = document.getElementById("buyId");
		  var sell2 = document.getElementById("sellId");
		  if(act){
			  
			  buy2.style.display = "block";
			  sell2.style.display = "none";
		  }		  
		  else{ 
			  buy2.style.display = "none";
			  sell2.style.display = "block";
		  }	
	}
	
	
</script>
</body>
</html>
