
var finalResponse={};
	
	finalResponse.data= new Array();
	
	var jsondata=[];
	
function orderClickfunction(){

	$("#OrderId").show();
	$("#dashboardId").hide();
	$("#loadGraphId").hide();
	$("#AccountId").hide();
	$("#PortfolioDivId").hide();
	$("#FundsDivId").hide();
    $("#AlertsDivId").hide();
	
	functionOrder();
}

//$(document).ready(function() {

function functionOrder(){
	

	
	  $.ajax({
			type :'POST',
			url :'OrderBook',
			dataType: 'json',
			success:function(response){

				var jsonObject =JSON.parse(response.data);
				
				 					       
	 var body="";
	 jsondata=[];
     for (var i = 0; i < jsonObject.length; i++) {
    	 

   
     	
     var status= jsonObject[i].status;
     var stat= jsonObject[i].stat;
     

     	 if(stat==='Ok' && status==='OPEN'){
     		 var objres = new Object();
     
     		   
     		//  objres.id=i;
     		  
     		  objres.name= "<span class='watchlist'>"+jsonObject[i].tsym+"</span><small><span>"+jsonObject[i].exch+"</span></small>";
     		 objres.tsym=jsonObject[i].tsym;
     		 objres.exch=jsonObject[i].exch;
     		 objres.orderType=jsonObject[i].prctyp;
     		  if(jsonObject[i].trantype=="B"){
     		  objres.sellbuybtn="<button type='button' class='btn btn-lightBlue btn-showbuysellRepeat' data-modal-type='buy'>Buy</button>";
     		  }else{
     			 objres.sellbuybtn="<button type='button' class='btn btn btn-red btn-showbuysellRepeat' data-modal-type='sell'>Sell</button>";
     		  }
     		  
     		  objres.qty=jsonObject[i].qty;
     		  
     		 if(jsonObject[i].prd=="C"){
     		  objres.product="CNC";
     		 }else if(jsonObject[i].prd=="M"){
     		  objres.product="NRML";
     		 }else if(jsonObject[i].prd=="I"){
     		  objres.product="MIS";
     		 }else if(jsonObject[i].prd=="F"){
     	   	 objres.product="MTS";
       		 }else if(jsonObject[i].prd=="H"){
       		  objres.product="CO";
       		 }else if(jsonObject[i].prd=="B"){
       		  objres.product="BO";
       		 }
     		  objres.price=jsonObject[i].prc;
     		  objres.triggerPrice="";
     		  objres.status= "<span class='highlight'>"+jsonObject[i].status+"</span>";
     		  objres.LTP="77,839.00";
     		  objres.avgPrice=jsonObject[i].rprc;
     		  
     		 var token=JSON.stringify(jsonObject[i].token);
     		 var actid=JSON.stringify(jsonObject[i].actid);
     		 var norenordno=JSON.stringify(jsonObject[i].norenordno);
     		 var exch=JSON.stringify(jsonObject[i].exch);
     		 var tsym=JSON.stringify(jsonObject[i].tsym);
     		 var qty=JSON.stringify(jsonObject[i].qty);
     		 var prc=JSON.stringify(jsonObject[i].prc);
     		 var prctyp=JSON.stringify(jsonObject[i].prctyp);
     		 var ret=JSON.stringify(jsonObject[i].ret);
     		  objres.btncolpse="<div class='btn-group dropstart'> <button type='button' class='btn btn-secondary dropdown-toggle' data-bs-toggle='dropdown' aria-expanded='false'><i class='bi bi-three-dots-vertical'></i> </button> <ul class='dropdown-menu dd-top'> <li> <button type='button' onclick='modifyOrderWindow("+token+","+actid+","+norenordno+","+exch+","+tsym+","+qty+","+prc+","+prctyp+","+ret+");' class='modify-btn btn btn-showbuysellModify' data-modal-type='buy'>Modify</button> </li> <li> <div class='convert dropdown'><button type='button'  class='cancel-btn btn dropdown-toggle' id='dropdownMenuButton1' data-bs-toggle='dropdown'  data-bs-auto-close='false'  class='cancel-btn btn btn-primary'>Cancel</button><div class='dropdown-menu dd-cancel' aria-labelledby='dropdownMenuButton1'><h3>Cancel Order</h3><span class='btn-close2'><i class='bi bi-x-lg'></i></span><ul class='pro-info'><li><h2>"+objres.tsym+"</h2><p><span>"+objres.exch+"</span><span>"+objres.orderType+"</span></p><p class='quan'>QTY: "+objres.qty+"</p></li><li><p class='drop-price'>"+objres.price+"</p><label class='buy-label'>BUY</label></li></ul><div class='confirm'><div class='btn-part'><button onclick='CancelOrderfun("+jsonObject[i].norenordno+");' class='btn btn-primary btn-red'>Cancel</button></div></div></div></div></li></ul></div>";
     		  
     		  
         	  jsondata.push(objres);

          }

     	    
     	   }
     

     
     if ($('#tabelPending3').length > 0) {
    	    $('#tabelPending3').DataTable({
    	    	 data: jsondata,
    	      columns: [
    	        { data: "name" },
    	        { data: "sellbuybtn" },
    	        { data: "qty" },
    	        { data: "product" },
    	        { data: "price" },
    	        { data: "triggerPrice" },
    	        { data: "status" },
    	        { data: "LTP" },
    	        { data: "avgPrice" },
    	        {
    	          data: "btncolpse",
    	          orderable: false,
    	        },
    	      ],
    	      paging: false,
    	      pageLength: 100,
    	      info: false,
    	      scrollY: "74vh",
    	      scrollCollapse: true,
    	      scrollX: true,
    	    });
    	  }
    
     
		
			},
			error:function(){
			//	alert("OrderBook Error");
			
			}	
		});
		
	
	}



function completeordfunc(){
	
	var objres = new Object();
	
	  $.ajax({
			type :'POST',
			url :'OrderBook',
			dataType: 'json',
			success:function(response){

				var jsonObject =JSON.parse(response.data);
				
				 					       
	 var body="";
	 jsondata=[];
   for (var i = 0; i < jsonObject.length; i++) {
	  

   	
   var status= jsonObject[i].status;
   var stat= jsonObject[i].stat;
   
   if(stat==='Ok' && (status==='COMPLETE' ||status==='REJECTED' || status==='CANCELLED')){
	   objres = new Object();
	   
   		//  objres.id=i;
   		  
   		  objres.name= "<span class='watchlist'>"+jsonObject[i].tsym+"</span><small><span>"+jsonObject[i].exch+"</span></small>";
   		  
   		  if(jsonObject[i].trantype=="B"){
   		  objres.sellbuybtn="<button type='button' class='btn btn-lightBlue btn-showbuysellRepeat' data-modal-type='buy'>Buy</button>";
   		  }else{
   			 objres.sellbuybtn="<button type='button' class='btn btn btn-red btn-showbuysellRepeat' data-modal-type='sell'>Sell</button>";
   		  }
   		  
   		  objres.qty=jsonObject[i].qty;
   		  
   		 if(jsonObject[i].prd=="C"){
   		  objres.product="CNC";
   		 }else if(jsonObject[i].prd=="M"){
   		  objres.product="NRML";
   		 }else if(jsonObject[i].prd=="I"){
   		  objres.product="MIS";
   		 }else if(jsonObject[i].prd=="F"){
   		  objres.product="MTS";
   		 }else if(jsonObject[i].prd=="H"){
   		  objres.product="CO";
   		 }else if(jsonObject[i].prd=="B"){
   		  objres.product="BO";
   		 }
   		  objres.price=jsonObject[i].prc;
   		  objres.triggerPrice="";   		 
   		  objres.LTP="77,839.00";
   		  objres.avgPrice="0.00";
   		  objres.btncolpse="<button type='button' class='btn btn-secondary'><i class='bi bi-three-dots-vertical'></i> </button>";

   		  if(status==="COMPLETE"){
   		   objres.status= "<span class='highlight'>Completed</span>";
   		   objres.status2Text="<span class='data-completed'>Completed</span>";
   		   objres.status2Value="completed";
   		   objres.status2Msg="";
   		  }else if(status==="REJECTED"){
   			objres.status= "<span class='highlight reject'>Rejected</span>";
   			objres.status2Text="<span class='data-rejected'>Rejected</span>";
   			objres.status2Value="rejected";
   			objres.status2Msg=jsonObject[i].rejreason;
   		  }else if(status==="CANCELLED"){
   			objres.status= "<span class='highlight reject'>Cancelled</span>";
   			objres.status2Text="<span class='data-rejected'>Cancelled</span>";
   			objres.status2Value="cancelled";
   			objres.status2Msg="";
   		  }
   		if(jsonObject[i].trantype=="B"){
   		objres.busellStatus="buy";
   		}else{
   		objres.busellStatus="sell";
   		}

   		objres.placedby=jsonObject[i].actid;
   		objres.orderType=jsonObject[i].prctyp;
   		objres.exchangeTime=jsonObject[i].norentm;
   		objres.orderId=jsonObject[i].norenordno;
   		objres.exOrderId=jsonObject[i].norenordno;
   		objres.discloseQty=jsonObject[i].dscqty;
   		objres.token=jsonObject[i].token;
   		
   		 jsondata.push(objres);
        }
   	 

   	    
   	   }
   
   
   
   if ($('#tabelCompleted3').length > 0) {
	   var tabelCompleted3 = $('#tabelCompleted3').DataTable({
	     // data: tableCompletedData,
		   data: jsondata,
	     columns: [
	       { data: "name" },
	       { data: "sellbuybtn" },
	       { data: "qty" },
	       { data: "product" },
	       { data: "price" },
	       { data: "triggerPrice" },
	       { data: "status" },
	       { data: "LTP" },
	       { data: "avgPrice" },
	       { 
	         className: 'details-control',
	         orderable: false,
	         data: "btncolpse",
	         defaultContent: '+'
	       },
	     ],
	     paging: false,
	     pageLength: 100,
	     info: false,
	     orderable: false,
	     scrollY: "74vh",
	     scrollCollapse: true,
	     scrollX: true,
	     
	   });
	   var openTabelCompleted3Rows = new Array();
	   $('#tabelCompleted3 tbody').on('click', 'td.details-control', function() {
	     var tr = $(this).closest('tr');
	     var row = tabelCompleted3.row(tr);
	     // $('#tabelCompleted3 tbody tr.shown').next('tr').remove();
	     // $('#tabelCompleted3 tbody tr').removeClass('shown');
	     if(row.child.isShown()){
	         // This row is already open - close it
	         row.child.hide();
	         tr.removeClass('shown');
	     } else {
	         // Open this row
	       //  closeCompletedTableOpenRows(tabelCompleted3, tr);
	       //  row.child(formatTabelCompleted3(row.data())).show();

    		 alert("index:::");
	    	 $.each(openTabelCompleted3Rows, function (index, openRow) {
	    		 
	    	      // not the selected row!
	    	      if ($.data(tr) !== $.data(openRow)) {
	    	          var rowToCollapse = tabelCompleted3.row(openRow);
	    	          rowToCollapse.child.hide();
	    	          openRow.removeClass('shown');
	    	          // replace icon to expand
	    	          $(openRow).find('td.details-control').html('<button type="button" class="btn btn-secondary"><i class="bi bi-three-dots-vertical"></i> </button>');
	    	          // remove from list
	    	          var index = $.inArray(tr, openTabelCompleted3Rows);
	    	          openTabelCompleted3Rows.splice(index, 1);
	    	         
	    	      }
	    	  });
	    	 
	    	 
	    	 row.child(formatTabelCompleted3(row.data())).show();
	         tr.addClass('shown');
	         openTabelCompleted3Rows.push(tr);
	     }
	   });
	 }
   
		
			},
			error:function(){
			//	alert("OrderBook Error");
			
			}	
		});
   

	
	}



function tradeordfunc(){

	
	var objres = new Object();
	
	  $.ajax({
			type :'POST',
			url :'TradeBook',
			dataType: 'json',
			success:function(response){

				var jsonObject =JSON.parse(response.data);
				
				 					       
	 var body="";
	 jsondata=[];
 for (var i = 0; i < jsonObject.length; i++) {

 var stat= jsonObject[i].stat;

	   objres = new Object();

	   if(stat==='Ok'){
 		//  objres.id=i;
 		  
 		  objres.name= "<span class='watchlist'>"+jsonObject[i].tsym+"</span><small><span>"+jsonObject[i].exch+"</span></small>";
 		  
 		 objres.tsym=jsonObject[i].tsym;
 		 objres.exch=jsonObject[i].exch;
 		 
 		  if(jsonObject[i].trantype=="B"){
 		  objres.sellbuybtn="<button type='button' class='btn btn-lightBlue btn-showbuysellRepeat' data-modal-type='buy'>Buy</button>";
 		  }else{
 			 objres.sellbuybtn="<button type='button' class='btn btn btn-red btn-showbuysellRepeat' data-modal-type='sell'>Sell</button>";
 		  }
 		  objres.trantype=jsonObject[i].trantype;
 		  objres.qty=jsonObject[i].qty;
 		  
 		    if(jsonObject[i].prd=="C"){
 	   		  objres.product="CNC";
 	   		 }else if(jsonObject[i].prd=="M"){
 	   		  objres.product="NRML";
 	   		 }else if(jsonObject[i].prd=="I"){
 	   		  objres.product="MIS";
 	   		 }else if(jsonObject[i].prd=="F"){
 	   		  objres.product="MTS";
 	   		 }else if(jsonObject[i].prd=="H"){
 	   		  objres.product="CO";
 	   		 }else if(jsonObject[i].prd=="B"){
 	   		  objres.product="BO";
 	   		 }
 		 
 		objres.prd=jsonObject[i].prd;
 		  objres.price=jsonObject[i].prc;
 		//  objres.triggerPrice="";
 		//  objres.status= "<span class='highlight'>"+jsonObject[i].status+"</span>";
 		  objres.LTP="77,839.00";
 		  objres.exchordid=jsonObject[i].exchordid;
		  objres.exchtm=jsonObject[i].exch_tm;
 		  objres.btncolpse="<button type='button' class='btn btn-secondary'><i class='bi bi-three-dots-vertical'></i> </button>";
 		  objres.status2Text="<span class='data-completed'>Trade Confirmed</span>";
 		  objres.status2Value="completed";
 		  objres.placedby=jsonObject[i].actid;
 		  objres.orderType=jsonObject[i].prctyp;
 		  objres.exchangeTime=jsonObject[i].exch_tm;
 		  objres.orderId=jsonObject[i].norenordno;
 		  objres.exOrderId=jsonObject[i].exchordid;
 		  objres.discloseQty="0";
 		  objres.postype=jsonObject[i].ret;
 		  

 		
 		 jsondata.push(objres);

	   }
 	    
 	   }
 
 
	
	
	if ($('#tabelTrade3').length > 0) {
		  var tabelTrades3 = $('#tabelTrade3').DataTable({
		    // data: tableTradesData,
			  data: jsondata,
		    columns: [
		      { data: "name" },
		      { data: "sellbuybtn" },
		      { data: "qty" },
		      { data: "product" },
		      { data: "price" },
		      //  { data: "triggerPrice" },
		      //  { data: "status" },
		        { data: "LTP" },
		        { data: "exchordid" },
		        { data: "exchtm" },
		      { 
		        className: 'details-control',
		        orderable: false,
		        data: "btncolpse",
		        defaultContent: '',
		      },
		    ],
		    paging: false,
		    pageLength: 100,
		    info: false,
		    scrollY: "74vh",
		    scrollCollapse: true,
		    scrollX: true,
		  });
		  var openTabelTrade3Rows = new Array();
		  $('#tabelTrade3 tbody').on('click', 'td.details-control', function() {
		    var tr = $(this).closest('tr');
		    var row = tabelTrades3.row( tr );
		    if(row.child.isShown()){
		        // This row is already open - close it
		        row.child.hide();
		        tr.removeClass('shown');
		    } else {
		        // Open this row
		      //  closeTradeTableOpenRows(tabelTrades3, tr);
		        
		    	$.each(openTabelTrade3Rows, function (index, openRow) {
		    	      // not the selected row!
		    		  
		    		  console.log("index::"+index+"openRow::"+openRow);
		    	      if ($.data(tr) !== $.data(openRow)) {
		    	          var rowToCollapse = tabelTrades3.row(openRow);
		    	          rowToCollapse.child.hide();
		    	          openRow.removeClass('shown');
		    	          // replace icon to expand
		    	          $(openRow).find('td.details-control').html('<button type="button" class="btn btn-secondary"><i class="bi bi-three-dots-vertical"></i> </button>');
		    	          // remove from list
		    	          var index = $.inArray(tr, openTabelTrade3Rows);
		    	          openTabelTrade3Rows.splice(index, 1);
		    	      }
		    	  });
		        row.child(formatTabelTrades3(row.data())).show();
		        tr.addClass('shown');
		        openTabelTrade3Rows.push(tr);
		    }
		  });
		}	
 
		
			},
			error:function(){
			//	alert("OrderBook Error");
			
			}	
		});
 

	  

	}



//});



function CancelOrderfun(nestordernumber){
	

	 $.ajax({
		type :'POST',
		url :'CancelOrder',
		data :"norenordno="+nestordernumber,
		dataType: 'json',
		success:function(response){
			
			
			var result = Object.values(response);
			

			var stat= result[1];
			
			
			if(stat==='Ok'){
       alert("Order Cancelled Successfully")
			}


	         
		},
		error:function(){
			alert("OrderBookCancel Error");
		
		}	
	});

}

function orderHistoryFun(nestordernumber){

	 $.ajax({
		type :'POST',
		url :'SingleOrdHist',
		data :"nestOrd=" +nestordernumber,
		dataType: 'json',
		success:function(response){
					       
		      var jsonObject =JSON.parse(response);

		       var price= '';
		       var Qty= '';
		       var Status= '';
		       var Ordtype= '';
		       var nestordernumber= '';
		       var averageprice= '';
		       var exchangetimestamp= '';
		       var scripname= '';

		         
		         var body;

				    
			        for (var i = 0; i <jsonObject.length; i++) {
			        	   price= jsonObject[0].Prc;				        		          	   
			        	   Qty= jsonObject[0].Qty;
				    	   Status= jsonObject[0].Status;
				    	   Ordtype= jsonObject[0].Ordtype;
				    	   nestordernumber= jsonObject[0].nestordernumber
				    	   averageprice= jsonObject[0].averageprice;
				    	   exchangetimestamp= jsonObject[0].exchangetimestamp;
				    	   scripname= jsonObject[0].symbolname;
				    	   
				    	   
				    	   $("#orderprice").html(price);
					       $("#orderQty").html(Qty);
					       $("#orderStatus").html(Status);
					       $("#orderOrdtype").html(Ordtype);
					       $("#ordernestordernumber").html(nestordernumber);
					       $("#orderaverageprice").html(averageprice);
					       $("#orderexchangetimestamp").html(exchangetimestamp);
					       $("#orderscripname").html(scripname);
					       
					       $("#orderHistoryStocklabelId").html(jsonObject[i].exchange);

			        }
		       
		     

		       $("#myModalOrderHistory").modal('show');
	         
		},
		error:function(){
			//alert("OrderHistory Error");
			
		
		}	
	});

}





function ModifyOrderfun(){
	
	var nestordernumber = document.getElementById("nestordernumberhiddId").value;
	var pcodeModify = document.getElementById("pcodeModifyhiddId").value;
	var dayModify = document.getElementById("dayModifyhiddId").value;
	var mktModify = document.getElementById("mktModifyhiddId").value;
	// var priceIdModify = document.getElementById("priceIdModifyhiddId").value;
	// var QtyIdModify = document.getElementById("QtyIdModifyhiddId").value;
	var TriggerModify = document.getElementById("TriggerModifyhiddId").value;
	var DiscModify = document.getElementById("DiscModifyhiddId").value;

	var accountIdModify = document.getElementById("accountIdModifyhiddId").value;
	var ExsegModify = document.getElementById("ExsegModifyhiddId").value;
	var TrsymModify = document.getElementById("TrsymModifyhiddId").value;
	var TrantypeModify = document.getElementById("TrantypeModifyhiddId").value;
	var PrctypeModify = document.getElementById("PrctypeModifyhiddId").value;
	var FillshareModify = document.getElementById("FillsharesModifyhiddId").value;


	 var QtyIdModify = document.getElementById("QtyIdModify").value;
	 var priceIdModify = document.getElementById("priceIdModify").value;
	 


	var Ret;


	if($("input:radio[name='dayIdModify']").is(":checked")) {
		var Ret="DAY";
		}
		if($("input:radio[name='iocIdModify']").is(":checked")) {
			var Ret="IOC";
			}
		if($("input:radio[name='gtcIdModify']").is(":checked")) {
			var Ret="GTC";
			}
		if($("input:radio[name='gtdIdModify']").is(":checked")) {
			var Ret="GTD";
			}
		if($("input:radio[name='gttIdModify']").is(":checked")) {
			var Ret="GTT";
			}
		//var prctyp="L"; //Price type (from DefaultLogin/ NormalLogin rest api)
		
		var prctyp;
		if($("input:radio[name='lmtIdModify']").is(":checked")) { //Price Type ( L or SL )
			  prctyp="L";
		 }
		 if($("input:radio[name='mktIdModify']").is(":checked")) { //Price Type ( L or SL )
			  prctyp="MKT"; 
		 }
		 if($("input:radio[name='slIdModify']").is(":checked")) { //Price Type ( L or SL )
			  prctyp="SL"; 
		 }
		 if($("input:radio[name='sl-mIdModify']").is(":checked")) { //Price Type ( L or SL )
			  prctyp="SL-M"; 
		 }
		 
	
	var call="nestOrd="+nestordernumber+"&pcodeModify="+pcodeModify+"&dayModify="+Ret+"&mktModify="+mktModify+"&priceIdModify="+ Math.round(priceIdModify)
	+"&QtyIdModify="+QtyIdModify+"&TriggerModify="+ Math.round(TriggerModify)+"&DiscModify="+DiscModify+"&accountIdModify="+accountIdModify+"&ExsegModify="+ExsegModify
	+"&TrsymModify="+TrsymModify+"&TrantypeModify="+TrantypeModify+"&PrctypeModify="+prctyp+"&FillshareModify="+FillshareModify;

	
		 $.ajax({
			type :'POST',
			url :'ModifyOrder',
			data :call,
			dataType: 'json',
			//contentType:'application/json; charset=utf-8',
			success:function(response){
				 				
				var result = Object.values(response);
				
				var stat= result[0];
				
				//alert("stat:::"+stat);
				
				if(stat==='Ok'){
				
					 $("#myModalModify").modal('hide');
	  				
					$("#ajax_responseModify").modal('show');
					
					orderrefresh();

					
				//	$("#modifyordernumber").html(result[0]); 
				}else{
					$("#myModalModify").modal('hide');
				}
			        
			},
			error:function(){
				alert("ModifyOrder Error");
			
			}	
		});

	}


function productConvert(tsym,exch,orderType,prd,qty,trantype,prevprd,postype){
	  
//alert("tsym:::"+tsym+"exch::"+exch+"ordertype::"+orderType+"prd::"+prd+"qty::"+qty+"trantype::"+trantype+"prevprd::"+prevprd);
	  
	  var call="tsym="+tsym+"&exch="+exch+"&ordertype="+orderType+"&prd="+prd+"&qty="+qty+"&trantype="+trantype+"&prevprd="+prevprd+"&postype="+postype;

	  	 $.ajax({
				type :'POST',
				url :'ProductConversion',
				data :call,
				dataType: 'json',
				success:function(response){					

					var result = Object.values(response);
					
					var stat=result[1];				

					var msg= result[2];			
					
					if(stat==='Ok'){
						alert("PRODUCT CONVERSION SUCCESSFULLY");
					}else{
					}
				},
				error:function(){
					//alert("OrderBookPosition Error");
				
				}	
			});
}


function getOrderNotification(){
	
	  $.ajax({
			type :'GET',
			url :'getOrderNotification',
			data :'',
			dataType: 'html',
			success:function(response){

				//alert("response:::"+response);
				 var jsonObject =JSON.parse(response);
				 
				// alert("jsonObject:::"+jsonObject.data);
	             

			     $('.ordersNotificationRecords').html(jsonObject.data); 
	
		         
			},
			error:function(){
				//alert("getTriggerAlert Error");
			
			}	
		});
}


function recentOrderFuntion(){

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
 	
if(stat==='Ok'){
	
	if(jsonObject[i].prd=="C"){
		prd="CNC";
	}else if(jsonObject[i].prd=="M"){
		prd="NRML";
	}else if(jsonObject[i].prd=="I"){
		prd="MIS";
	}
       	   
	    if(jsonObject[i].status=="REJECTED") {

	       body=body+"<li>";
	       body=body+"<div class='recent-left'>";
	       body=body+"<label class='form-label'>"+jsonObject[i].tsym+"</label>";
	       body=body+"<p>Rejected due to Insufficient funds. Required margin is "+jsonObject[i].prc+" but available margin is 0.00. Check the orderbook for open orders</p>";
	       body=body+"</div>";
	       body=body+"<div class='recent-right float-end'>";
	       body=body+"<label class='form-label'>Bought @ "+jsonObject[i].prc+" Limit - "+prd+" </label>";
	       body=body+"<label class='lable_info bg_red'>"+jsonObject[i].status+"</label>";
	       body=body+"</div>";
	       body=body+"</li>";
	       
	    }else{
	    	
	    	body=body+"<li>";
	    	body=body+"<div class='recent-left'>";
	    	body=body+"<label class='form-label'>"+jsonObject[i].tsym+"</label>";

	    	body=body+"</div>";
	    	body=body+"<div class='recent-right float-end'>";
	    	body=body+"<label class='form-label'>Bought @ "+jsonObject[i].prc+" Limit - "+prd+" </label>";
	    	body=body+"<label class='lable_info bg_grey'>"+jsonObject[i].status+"</label>";
	    	body=body+"</div>";
	    	body=body+"</li>";
	    }
	       
 	   
 }

	                    
}

 $('.recentdataorders').html(body); 
	        
		
			},
			error:function(){
			//	alert("OrderBook Error");
			
			}	
		});
		
	
	}


function formatTabelCompleted3(d) {

	  console.log('formatTabelCompleted3', (d.status2Value === 'rejected'));
	  // `d` is the original data object for the row
	  var rejectedHTML = '';
	  
	
	 
	  if (d.status2Value === 'rejected') {
	    rejectedHTML = '<tr class="reject_cnt"><td  colspan="5"><p><span>Rejection Reason</span> '+ d.status2Msg +'</p></td><td colspan="2"><button class="btn btn-primary btn-xs">Make PAYIN</button><button onclick="buysellwindow('+d.token+');"  class="btn btn-primary btn-xs btn-showbuysellRepeat"   data-modal-type="' + d.busellStatus + '" >Try Again</button></td></tr>';
	  //Order-showbuysell
	  //data-modal-type="' + d.busellStatus + '"  
	 
	    $(document.body).on('click', '.btn-showbuysellRepeat' ,function(){
		    var modalType = $(this).attr('data-modal-type');
		    
		    if (modalType === 'buy') {
		      $('#buySellModalRepeat').addClass('themeBlue');
		      $('#buySellModalRepeat').removeClass('themeRed');
		      $('#switchBuySellRepeat').prop('checked', false);
		      $('#buyIdRepeat').show();
		      $('#sellIdRepeat').hide();
		    } else if (modalType === 'sell') {
		      $('#buySellModalRepeat').addClass('themeRed');
		      $('#buySellModalRepeat').removeClass('themeBlue');
		      $('#switchBuySellRepeat').prop('checked', true);
		      $('#buyIdRepeat').hide();
		      $('#sellIdRepeat').show();
		    }
		  });
		  $('#switchBuySellRepeat').change(function() {
		    var checkStatus = $(this).prop('checked');
		    if (checkStatus) {
		      $('#buySellModalRepeat').addClass('themeRed');
		      $('#buySellModalRepeat').removeClass('themeBlue');
		      $('#buyIdRepeat').hide();
		      $('#sellIdRepeat').show();
		    } else {
		      $('#buySellModalRepeat').addClass('themeBlue');
		      $('#buySellModalRepeat').removeClass('themeRed');
		      $('#buyIdRepeat').show();
		      $('#sellIdRepeat').hide();
		    }
		    console.log('checkStatus', checkStatus);
		  });
	  
	  // $(".btn-showbuysellRepeat").click(function() {
	  //   var modalDiv = $('#buySellModalRepeat');
	  //   modalDiv.modal({backdrop: false, show: true});
	  //   $('#buySellModalRepeat .modal-dialog').draggable({
	  //     handle: "#buySellModalRepeat .modal-header"
	  //   });
	  // });
	
	  $('.btn-showbuysellRepeat').click(function () {
	    // console.log('ddddd', $('#buySellModalRepeat').height(), $('#buySellModalRepeat').width());
	    var modalWidth = $('#buySellModalRepeat').width();
	    var modalHeight = $('#buySellModalRepeat').height();
	    $('#buySellModalRepeat').css('margin-left', ('-' + modalWidth / 2) + 'px');
	    $('#buySellModalRepeat').css('margin-top', ('-' + modalHeight / 2) + 'px');
	    var modalDiv = new bootstrap.Modal($('#buySellModalRepeat'));
	    modalDiv.show();
	    $('.buySellModalRepeat').draggable({
	      handle: ".modal-header"
	    });
	    // if (typeof draggable !== 'undefined') {}
	  });
	    
	   

	    
	  }
	  return '<table cellpadding="5" cellspacing="0" border="0" class="table-status" style="width:100%;">'+
	    '<tr>'+
	      '<td>' + d.status2Text + '</td>' +
	      '<td><span>Placed by:</span><p>' + d.placedby + '</p></td>' +
	      '<td><span>Order Type:</span><p>' + d.orderType + '</p></td>' +
	      '<td><span>Exchange Time:</span><p>' + d.exchangeTime + '</p></td>' +
	      '<td><span>Order ID:</span><p>' + d.orderId + '</p></td>' +
	      '<td><span>Exchange Order ID:</span><p>' + d.exOrderId + '</p></td>' +
	      '<td><span>Disclosed Quantity:</span><p>' + d.discloseQty + '</p></td>' +
	    '</tr>'+ rejectedHTML +
	  '</table>';
	  

	    
	   // $(document.body).on('click', '.btn-showbuysellRepeat' ,function(){
	    	

	  // Show Buy Sell Modal Control
	  
	 // $('.btn-showbuysellRepeat').click(function() {
	
	    
	}


$(document.body).on('click', '.btn-showbuysellModify' ,function(){
    var modalType = $(this).attr('data-modal-type');
    if (modalType === 'buy') {
      $('#buySellModalModify').addClass('themeBlue');
      $('#buySellModalModify').removeClass('themeRed');
      $('#switchBuySellModify').prop('checked', false);
      $('#buyIdModify').show();
      $('#sellIdModify').hide();
    } else if (modalType === 'sell') {
      $('#buySellModalModify').addClass('themeRed');
      $('#buySellModalModify').removeClass('themeBlue');
      $('#switchBuySellModify').prop('checked', true);
      $('#buyIdModify').hide();
      $('#sellIdModify').show();
    }
  });


$('#switchBuySellModify').change(function() {
    var checkStatus = $(this).prop('checked');
    if (checkStatus) {
      $('#buySellModalModify').addClass('themeRed');
      $('#buySellModalModify').removeClass('themeBlue');
      $('#buyIdModify').hide();
      $('#sellIdModify').show();
    } else {
      $('#buySellModalModify').addClass('themeBlue');
      $('#buySellModalModify').removeClass('themeRed');
      $('#buyIdModify').show();
      $('#sellIdModify').hide();
    }
    console.log('checkStatus', checkStatus);
  });

// $(".btn-showbuysellRepeat").click(function() {
//   var modalDiv = $('#buySellModalRepeat');
//   modalDiv.modal({backdrop: false, show: true});
//   $('#buySellModalRepeat .modal-dialog').draggable({
//     handle: "#buySellModalRepeat .modal-header"
//   });
// });

$('.btn-showbuysellModify').click(function () {
// console.log('ddddd', $('#buySellModalRepeat').height(), $('#buySellModalRepeat').width());
var modalWidth = $('#buySellModalModify').width();
var modalHeight = $('#buySellModalModify').height();
$('#buySellModalModify').css('margin-left', ('-' + modalWidth / 2) + 'px');
$('#buySellModalModify').css('margin-top', ('-' + modalHeight / 2) + 'px');
var modalDiv = new bootstrap.Modal($('#buySellModalModify'));
modalDiv.show();
$('.buySellModalModify').draggable({
  handle: ".modal-header"
});
// if (typeof draggable !== 'undefined') {}
});

