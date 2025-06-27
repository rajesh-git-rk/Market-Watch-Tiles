

function getAlert(){
	

	$.ajax({
	type :'POST',
	url :'getAlert22',
	dataType: 'json',
	success:function(jsonObject){
		
		// var jsonObject =JSON.parse(response);
	
		//alert("response" +jsonObject);
    		
		var htmlContent='';
       //alert(jsonObject.length);
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
	    	 var alertval=jsonObject[i].alertcondition+" &#x20B9;"+jsonObject[i].price
	    		    	
	    	 	           	 
	    	 if(jsonObject[i].scriptname !=null){
	    		 	  
	    		 htmlContent+="<li>";
	    		 htmlContent+="<div class='alerts_lft'>";
	    		 htmlContent+="<label class='mb-1'>" +jsonObject[i].scriptname+ "</label>";
	    		 htmlContent+="<p>"+jsonObject[i].scriptname+" "+alertval+"</p>";
	    		 htmlContent+="</div>";
	    		 htmlContent+="<div class='alerts_rgt running-widget'>";
	    		 //htmlContent+="<label class='btn mb-1 running-label'>Running</label>";
	    		 //htmlContent+="<label class='value'>LTP "+jsonObject[i].price+"<span data-status='active' class='running-control'><i class='bi bi-pause-circle-fill ms-2' ></i></span></label>";

	    		
	    		 if(jsonObject[i].status=="1"){
	    			 htmlContent+="<label class='btn mb-1 running-label'>Running</label>";
	    		 htmlContent+="<label class='value'>LTP &#x20B9;"+jsonObject[i].price+"<span data-status='active' class='running-control'><i class='bi bi-pause-circle-fill ms-2' onclick='AlertPauseFun("+alertId+","+statusTag+")'  ></i></span></label>";
	    		 }
	    		 else{
	    			 htmlContent+="<label class='btn mb-1 running-label'>Pause</label>";
	    			 htmlContent+="<label class='value'>LTP &#x20B9;"+jsonObject[i].price+"<span data-status='pause' class='running-control'><i class='bi bi-play-circle-fill ms-2' onclick='AlertPauseFun("+alertId+","+statusTag+")' ></i></span></label>";
	    		 }
	  
	    		 htmlContent+="</div>";
	    		 htmlContent+="</li>";
	    		 
	    	 }
	    		 
	      
	   }
	    	
	    //alert(htmlContent);
	    //ul.innerHTML=htmlContent;
	    //alert(document.getElementById('alerts_holder'));
	    document.getElementById('alerts_holder').innerHTML=htmlContent;
	    
	    $('.running-widget .running-control').click(function() {
	        var getstatus = $(this).attr('data-status');
	        var getElmn = $(this).parent().parent().find('.running-label');
	        if (getstatus === 'active') {
	          getElmn.text('Pause');
	          getElmn.attr('data-status', 'pause')
	          $(this).attr('data-status', 'pause');
	          $(this).find('i').removeClass('bi-pause-circle-fill').addClass('bi-play-circle-fill');
	        } else if (getstatus === 'pause') {
	          getElmn.text('Running');
	          getElmn.attr('data-status', 'active')
	          $(this).attr('data-status', 'active');
	          $(this).find('i').removeClass('bi-play-circle-fill').addClass('bi-pause-circle-fill');
	        }
	      });
	    
	    	    
	    
    }
       
      else{
  	// $('#dashboardalertbodyId').html('');

    }
	      

         
	},
	error:function(){
		//alert("getAlert Error");
	
	}	
});


}



function AlertPauseFun(id,status){
	
	$.ajax({
		type :'POST',
		url :'getAlertPause22',
		data :"Id="+id+"&status="+status,
		dataType: 'json',
		success:function(jsonObject){
			 //alert("response::"+response);
			 //alert("inside alertpausefunc ");
				
			 // var jsonObject =JSON.parse(response);
	         
		},
		error:function(){
		//	alert("getPausedAlert Error");
		
		}	
	});
	
	
}




function openOrderFuntion(){

	  $.ajax({
			type :'GET',
			url :'OpenOrderBook',
			dataType: 'json',
			success:function(jsonObject){
	             
//				{"prarr":[{"prd":"C","exch":["NSE","BSE"],"s_prdt_ali":"CNC"},{"prd":"M","exch":["MCX"],"s_prdt_ali":"NRML"},{"prd":"I","exch":["NSE","BSE","MCX"],"s_prdt_ali":"MIS"},{"prd":"F","exch":["NSE","BSE"],"s_prdt_ali":"MTF"},{"prd":"H","exch":["NSE","BSE","MCX"],"s_prdt_ali":"CO"},{"prd":"B","exch":["NSE","BSE","MCX"],"s_prdt_ali":"BO"}],"stat":"Ok","uname":"TEST","brkname":"ENRICH","lastaccesstime":"1636465784","values":["NewGroup"],"actid":"TEST100","mws":{"NewGroup":[{"pp":"2","tsym":"ZINC30NOV21","ti":"0.05","exch":"MCX","ls":"5","token":"230805"},{"pp":"2","tsym":"SILVERMIC30NOV21","ti":"1.00","exch":"MCX","ls":"1","token":"228225"},{"pp":"2","tsym":"SILVERM30NOV21","ti":"1.00","exch":"MCX","ls":"5","token":"225315"},{"pp":"2","tsym":"SILVER03DEC21","ti":"1.00","exch":"MCX","ls":"30","token":"226471"},{"pp":"2","tsym":"NICKEL30NOV21","ti":"0.10","exch":"MCX","ls":"1500","token":"230822"},{"pp":"2","tsym":"NATURALGAS24NOV21","ti":"0.10","exch":"MCX","ls":"1250","token":"232889"},{"pp":"2","tsym":"MENTHAOIL30NOV21","ti":"0.10","exch":"MCX","ls":"360","token":"230198"},{"pp":"2","tsym":"LEAD30NOV21","ti":"0.05","exch":"MCX","ls":"5","token":"230821"},{"pp":"2","tsym":"KAPAS30NOV21","ti":"0.50","exch":"MCX","ls":"4","token":"225567"},{"pp":"2","tsym":"GOLDPETAL30NOV21","ti":"1.00","exch":"MCX","ls":"1","token":"231989"},{"pp":"2","tsym":"GOLDM03DEC21","ti":"1.00","exch":"MCX","ls":"100","token":"233000"},{"pp":"2","tsym":"GOLDGUINEA30NOV21","ti":"1.00","exch":"MCX","ls":"8","token":"231988"},{"pp":"2","tsym":"GOLD03DEC21","ti":"1.00","exch":"MCX","ls":"1","token":"226469"},{"pp":"2","tsym":"CRUDEOIL18NOV21","ti":"1.00","exch":"MCX","ls":"100","token":"230024"},{"pp":"2","tsym":"CPO30NOV21","ti":"0.10","exch":"MCX","ls":"10","token":"230817"},{"pp":"2","tsym":"COPPER19NOV21C655","ti":"0.01","exch":"MCX","ls":"2500","token":"232789"},{"pp":"2","tsym":"ALUMINIUM30NOV21","ti":"0.05","exch":"MCX","ls":"5","token":"230812"},{"pp":"2","tsym":"SBIN","ti":"0.05","exch":"BSE","ls":"1","token":"500112"}]},"exarr":["MCX","BSE","NSE"],"orarr":["LMT","MKT","SL-LMT","SL-MKT","DS","2L","3L"],"request_time":"19:19:44 09-11-2021","susertoken":"fb33f13a069604bc8b8dd8ee9e7d9c9d2537d73f8e0540cd06e1d46cf55d4fb3","email":"rajeshkumar@topaztech.in"}
	var body="";	
	
	var prd="";
				    
     for (var i = 0; i < jsonObject.length; i++) {
  
     var status= jsonObject[i].status;
     var stat= jsonObject[i].stat;
     	
    if(stat==='Ok' && status==='OPEN'){
    	
    	if(jsonObject[i].prd=="C"){
    		prd="CNC";
    	}else if(jsonObject[i].prd=="M"){
    		prd="NRML";
    	}else if(jsonObject[i].prd=="I"){
    		prd="MIS";
    	}
           	   
	       body=body+"<li>";
	       body=body+"<div class='alerts_lft'>";
	       body=body+"<label class='mb-1'>"+jsonObject[i].tsym+"</label>";
	       body=body+"<ul>";
	       body=body+"<li>"+jsonObject[i].exch+"</li>";
	       body=body+"<li>"+jsonObject[i].prc+"</li>";
	       body=body+"<li>"+prd+"</li>";
	       body=body+"</ul>";
	       body=body+"</div>";
	       body=body+"<div class='alerts_rgt'>";
	       body=body+"<label class='mb-1'>MTM <span>+1,200.40</span></label>";
	       body=body+"<label class='value'>QTY <span>"+jsonObject[i].qty+"</span></label>";
	       body=body+"</div>";
	       body=body+"</li>";
	       
     	   
     }

	                    
    }

     $('.openOrderList').html(body); 
	        
		
			},
			error:function(){
			//	alert("OrderBook Error");
			
			}	
		});
		
	
	}



function fundsDashboard(){

	  $.ajax({
		  
		  type :'POST',
			url :'fundsLimits',
			dataType: 'json',
			success:function(jsonObject){

				//alert("funds res:::"+jsonObject);
				    var marginused=jsonObject.marginused==undefined?0.00:jsonObject.marginused;
					var openingBalance=jsonObject.cash==undefined?0.00:jsonObject.cash;
					var payin=jsonObject.payin;
					var payout=jsonObject.payout;
					var brokerage=jsonObject.brokerage==undefined?0.00:jsonObject.brokerage;
				var availableBalance=Number(openingBalance)+Number(payin)-Number(payout)-Number(brokerage)-Number(marginused);
				
								
				document.getElementById('marginUsed').innerHTML=marginused;
				document.getElementById('marginUsedhiddenId').value=marginused;
				
				document.getElementById('openingBalance').innerHTML= openingBalance;
				document.getElementById('availableBalance').innerHTML=availableBalance;
			},
			error:function(){
				//alert("getAlert Error");
			}	
		});
}


function OrdersDashboard(){
	  $.ajax({
		  
		  type :'POST',
			url :'OrderBook',
			dataType: 'json',
			success:function(jsonObject){
				   
					//alert("res:::"+jsonObject);
					//alert("res length:::"+jsonObject.length);
									  
					var pendingOrdersCount=0;
									
					if(jsonObject.length >0){
						  for (var i = 0; i <jsonObject.length; i++) {
						    							    	 
						    	 var status=jsonObject[i].status;
						    	 if(status=="OPEN")
						    		 {
						    		      pendingOrdersCount+=1;
						    		 
						    		 }
						  }
					}
					
					//alert(" pendingOrdersCount "+ pendingOrdersCount);
					
					document.getElementById('pendingOrdersCount').innerHTML=pendingOrdersCount;
			},
			error:function(){
				//alert("Orderbook Error");
		     }	
		});
	  
	  
  $.ajax({
		  
		  type :'POST',
			url :'TradeBook',
			dataType: 'json',
		//	contentType:'application/json; charset=utf-8',
			success:function(response){
				var jsonObject =JSON.parse(response.data);
				
			       
				 var body="";

			 for (var i = 0; i < jsonObject.length; i++) {

			 var stat= jsonObject[i].stat;

				   objres = new Object();

			if(stat==='Ok'){
				
			    document.getElementById('tradesCount').innerHTML=jsonObject[i].length;
			    
				   }
				   
		    else{
					   
					  document.getElementById('tradesCount').innerHTML=0;
				   }
				   
			 }
			},
			error:function(){
				//alert("getAlert Error");
			}	
		});
	
}



function piechartCheckboxOnChange()
{
	
	  $.ajax({
			type :'POST',
			url :'holdings',
			dataType: 'json',
		//	contentType:'application/json; charset=utf-8',
			success:function(jsonObject){
				
			
		    // alert("res:::"+jsonObject.length);
			 if(jsonObject.length >0){


					var totalCurrentValue=0;  
					var totalInvestmentValue=0;
					var percentageCurrentValue=0;
					var totalPandLValue=0;
					var roundtoTwototalPandLValue=0;

					var totalCV = [];
					totalCV.push(['itemsCV', 'value']);
					var totalInvestment = [];
					totalInvestment.push(['itemsIN', 'value']);
					var totalPL = [];
					totalPL.push(['itemsPL', 'value']);
					
					// document.getElementById('price_txt').innerHTML=PL_Price;
							  
				for (var i = 0; i <jsonObject.length; i++) {
				  for (var j = 0; j <jsonObject[i].exch_tsym.length; j++) {
					  
					  var holdqty=jsonObject[i].holdqty;
					  var actualBuyPrice=jsonObject[i].upldprc;
					  var currentValue=1000*holdqty;
					  totalCurrentValue=totalCurrentValue+currentValue; 
					  var investmentValue=actualBuyPrice*holdqty;
					  totalInvestmentValue=totalInvestmentValue+investmentValue;
					  if(1000>actualBuyPrice) // LTP>actualBuyPrice
                      {
						  var PandLValue=(1000-actualBuyPrice)*holdqty; 
						  totalPandLValue+=PandLValue;
						  roundtoTwototalPandLValue=totalPandLValue.toFixed(2);
                   	   
                      }
                      else // LTP>actualBuyPrice
                      {
                    	  var PandLValue=(actualBuyPrice-1000)*holdqty;  
                    	  totalPandLValue-=PandLValue;
                    	  roundtoTwototalPandLValue=totalPandLValue.toFixed(2);
                      }
					  
					 // alert("totalPandLValue ::: "+totalPandLValue);
					  // alert("totalInvestmentValue ::: "+totalInvestmentValue);
				  
				  }}
			  
				 document.getElementById('currentValue').innerHTML= totalCurrentValue;
				 document.getElementById('investmentLabel').innerHTML=totalInvestmentValue;
				 document.getElementById('price_txt').innerHTML=roundtoTwototalPandLValue;
				
				 for (var i = 0; i <jsonObject.length; i++) {
					 for (var j = 0; j <jsonObject[i].exch_tsym.length; j++) {
						   var itemsCV=[];
						   var itemsIN=[];
						   var itemsPL=[];
						  // alert("exch:"+jsonObject[i].exch_tsym);
						  var scriptName=jsonObject[i].exch_tsym[j].tsym;
						   //var scriptName=jsonObject[i].exch_tsym[1].tsym;
						   //alert("scriptName:"+scriptName);
						  
	                       var holdqty=jsonObject[i].holdqty;
						   var actualBuyPrice=jsonObject[i].upldprc;
	                  	 //Current Value Calculation
						   var currentValue=1000*holdqty;  //LTP*holdqty
	                       var currentValueDisplayed =scriptName+currentValue; 
	                     //Investment Calculation
	                       var investmentValue=actualBuyPrice*holdqty;  //actualBuyPrice*holdqty
	                 	 //P&L Calculation
	                       
	                       if(1000>actualBuyPrice) // LTP>actualBuyPrice
	                       {
	                    	   var PandLValue=(1000-actualBuyPrice)*holdqty; 
	                    	   var PandLValueWithSign=scriptName+" (+)";
	                       }
	                       else // LTP>actualBuyPrice
	                       {
	                    	   var PandLValue=(actualBuyPrice-1000)*holdqty;  
	                    	   var PandLValueWithSign=scriptName+" (-)";
	                       }
	                    //   var PandLValue=(1000-actualBuyPrice)*holdqty;  //(LTP - actualBuyPrice)*holdqty
						 
	                       
	                     //percentageCurrentValue=currentValue/totalCurrentValue*100;
						 //alert("scriptName:1:"+scriptName+"  holdqty::"+holdqty+ " priceTag::"+priceTag + "  currentValue::"+currentValue+ " percentageCurrentValue ::"+ percentageCurrentValue);
						 itemsCV.push(scriptName,currentValue);
						 totalCV.push(itemsCV);
						 itemsIN.push(scriptName,investmentValue);
						 totalInvestment.push(itemsIN);
						 itemsPL.push(PandLValueWithSign,PandLValue);
						 totalPL.push(itemsPL);
					 }
					 }
								    
					   var holdingsCheckboxValue=document.querySelector('input[name="piechart"]:checked').value;
					 //  alert("holdingsCheckboxValue: "+holdingsCheckboxValue);
					 
					   if(holdingsCheckboxValue=="CV"){
						
						  
						// Dashboard Google Chart
						   if (typeof google !== 'undefined') {
						     google.charts.load("current", { packages: ["corechart"] });
						     function drawChart() {
						    	
						   /*   var data = google.visualization.arrayToDataTable([
						         ['items', 'value'],
						         ['item1', 12],
						         ['item2', 3],
						         ['item3', 5],
						         ['item4', 8],
						         ['item5', 9]
						       ]);*/
						      
						      var data = google.visualization.arrayToDataTable(totalCV);
						       
						       
						       var options = {
						         title: 'Holdings',
						         pieHole: 0.4,
						         legend: 'none',
						         pieSliceText: 'label',
						         slices: {
						           2: { offset: 0.1 },
						         },
						       };
						       var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
						       chart.draw(data, options);
						     }
						     google.charts.setOnLoadCallback(drawChart);
						   }


						   
					   }
					   else if(holdingsCheckboxValue=="PandL"){
						   
						 
							// Dashboard Google Chart
						   if (typeof google !== 'undefined') {
						     google.charts.load("current", { packages: ["corechart"] });
						     google.charts.setOnLoadCallback(drawChart);
						     function drawChart() {
						       var data = google.visualization.arrayToDataTable(totalPL);
						     
						       var options = {
						         title: 'Holdings',
						         pieHole: 0.4,
						         legend: 'none',
						         pieSliceText: 'label',
						         slices: {
						           2: { offset: 0.1 },
						         },
						       };
						       var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
						       chart.draw(data, options);
						     }
						   }


						   
						   
					   }
					   else if(holdingsCheckboxValue=="Investment"){
						   
					
							// Dashboard Google Chart
						   if (typeof google !== 'undefined') {
						     google.charts.load("current", { packages: ["corechart"] });
						     google.charts.setOnLoadCallback(drawChart);
						     function drawChart() {
						       var data = google.visualization.arrayToDataTable(totalInvestment);
						       
						       var options = {
						         title: 'Holdings',
						         pieHole: 0.4,
						         legend: 'none',
						         pieSliceText: 'label',
						         slices: {
						           2: { offset: 0.1 },
						         },
						       };
						       var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
						       chart.draw(data, options);
						     }
						   }
					    }

		      }
					 
			},
			error:function(){
				//alert("getAlert Error");
			
			}	
		});

	}

function dashboardClickFunction(){
	
	
	$("#dashboardId").show();
	$("#OrderId").hide();
	$("#loadGraphId").hide();
	$("#AccountId").hide();
	$("#FundsDivId").hide();
    $("#AlertsDivId").hide();
    $("#PortfolioDivId").hide();
    
}