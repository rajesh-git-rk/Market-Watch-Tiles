$(document).ready(function(){
  $('.NetclsPosition').click(function(){
    $('.DayclsPosition').removeClass('active').addClass('inactive');
     $(this).removeClass('inactive').addClass('active');
    });
  $('.DayclsPosition').click(function(){
	    $('.NetclsPosition').removeClass('active').addClass('inactive');
	     $(this).removeClass('inactive').addClass('active');
	    });
  
  
 
  
	  $('#boidSelectAll').change(function() {
	    var chkStatus = $(this).prop('checked');
	    console.log(chkStatus);
	    if (chkStatus) {
	      $('#authorizeModal .scrollContent ul li').each(function () {
	        $(this).find('.form-check-input').prop('checked', true);
	      });
	    } else {
	      $('#authorizeModal .scrollContent ul li').each(function () {
	        $(this).find('.form-check-input').prop('checked', false);
	      });
	    }	    
	  })

	  if($('#authorizeModal').length > 0) {  
		  
		    var aMTargetBind =  $('#authorizeModal .scrollContent .scrollBody').find('ul');
		    var aMTargetHTML = "";
		    $.each(authorizeData, function(index, listItem) {
		      aMTargetHTML = aMTargetHTML + '<li> <div class="form-check"> <input class="form-check-input" type="checkbox" value="" id="boidListid_'+index+'"> <label class="form-check-label" for="boidListid_'+index+'"> ' + listItem.name + ' </label> </div> <div class="listQty">' + listItem.qty + '</div> </li>';
		    });
		    aMTargetBind.html(aMTargetHTML);
		  }
	  
	 /*var portfolioTab = document.getElementById('tradeStatusTab');
	  portfolioTab.addEventListener('show.bs.tab', function (event) {
	    if (event.target.id === 'holdings-tab') {
	    	
	      $('.holdings-tab-btn').removeClass('d-none');
	      $('.position-tab-btn').addClass('d-none');
	    } else {
	      $('.position-tab-btn').removeClass('d-none');
	      $('.holdings-tab-btn').addClass('d-none');
	    }
	  });*/
	  

	  
	  
}); 


$('.buySellModal').draggable({
    handle: ".modal-header"
  });




var finalResponse={};
	
	finalResponse.data= new Array();
	
	var jsondata=[];
	
function PortfolioClickfunction(){
	

	$("#PortfolioDivId").show();
	$("#OrderId").hide();
	$("#dashboardId").hide();
	$("#loadGraphId").hide();
	$("#AccountId").hide();
	$("#FundsDivId").hide();
	$("#AlertsDivId").hide();
	
	$("#CdslResponsePage").hide();
	$("#CdslResponseDivId").hide();
	
	PosistionBookfunction();
	
	 $('.holdings-tab-btn').hide();
     $('.position-tab-btn').show();
}

function PosistionBookfunction(){
	
	
	 $('.holdings-tab-btn').hide();
     $('.position-tab-btn').show();
	
 	$("#CdslResponsePage").hide();
	$("#CdslResponseDivId").hide();
	
	  $.ajax({
			type :'POST',
			url :'Positions',
			dataType: 'json',
			success:function(response){

				var jsonObject =JSON.parse(response.data);
				
				var body="";
				 jsondata=[];
	 		for (var i = 0; i < jsonObject.length; i++) {
	 		var objres = new Object();
	   		var stat= jsonObject[i].stat;
   
		   	 if(stat==='Ok'){
		   		 
		   		 var scriptName=JSON.stringify(jsonObject[i].tsym);
		   		 var exchange=JSON.stringify(jsonObject[i].exch);
		   		 var netqty=JSON.stringify(jsonObject[i].netqty);
		   		 var prd=JSON.stringify(jsonObject[i].prd);
		   		 var price=JSON.stringify(jsonObject[i].prc);
		   		 
		   		 
		   		 var statusbuysell=""; var trantype=""; var priceValue="";
	     		objres.name= "<span class='watchlist'>"+jsonObject[i].tsym+"</span><small><span>"+jsonObject[i].exch+"</span> <span>EQ</span> <span>MARKET</span></small>";

		   		//objres.name= "name": "<span class='watchlist'>GOLD1</span><small><span>NSE</span> <span>EQ</span> <span>MARKET</span></small>",
	     
	     		if(jsonObject[i].daysellqty=="0"){
	       		  //objres.sellbuybtn="<button type='button' class='btn btn-lightBlue btn-showbuysellPosition' onclick='buysellwindowOpenPosition("+jsonObject[i].tsym+","+jsonObject[i].exch+","+jsonObject[i].netqty+","+jsonObject[i].prd+")'  data-modal-type='buy'>Buy</button>";
	       		 objres.sellbuybtn="<button type='button' class='btn btn-lightBlue btn-status'  data-modal-type='buy'>Buy</button>";
	       		statusbuysell= "Buy";
	       		priceValue=jsonObject[i].openbuyamt;
	       		trantype="B";
	       		
	       		
	       	/*	if ($("#DayIdPosition").hasClass("active")) {
	       		 objres.qty=jsonObject[i].daybuyqty;
	       		}
	       		else if ($("#NetIdPosition").hasClass("active")) {
	       		 objres.qty=jsonObject[i].cfbuyqty;
	       		}*/
	       		
	     		}else if(jsonObject[i].daybuyqty=="0"){
	       	//		 objres.sellbuybtn="<button type='button' class='btn btn btn-red btn-showbuysellPortfolio'  onclick='buysellwindowOpenPosition("+jsonObject[i].tsym+","+jsonObject[i].exch+","+jsonObject[i].netqty+","+jsonObject[i].prd+")' data-modal-type='sell'>Sell</button>";
		       			 objres.sellbuybtn="<button type='button' class='btn btn btn-red btn-status'   data-modal-type='sell'>Sell</button>";
		       			statusbuysell= "Sell";
		       			priceValue=jsonObject[i].opensellamt;
		       			trantype="S";
		       			
		       			/*if ($("#DayIdPosition").hasClass("active")) {
		   	       		 objres.qty=jsonObject[i].daysellqty;
		   	       		}
		   	       		else if ($("#NetIdPosition").hasClass("active")) {
		   	       		 objres.qty=jsonObject[i].cfsellqty;
		   	       		}*/
		       			
	       		  }
	     		
	     		 objres.qty=jsonObject[i].netqty;	 
	     		 
	     		 
	            //"product": "Intraday",	     		 
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
	     		// "price": "51,030.00",
	     		// objres.price=jsonObject[i].prc;	            
		     		objres.price=priceValue;
	            //"LTP": "77,839.00",
	            objres.LTP="77,839.00";
	     		 
	            //"mtm": "<span class='tp_red'>-1,800.00</span>",
	            objres.mtm= "<span class='tp_red'>"+jsonObject[i].urmtom+"</span>"
	           // "btncolpse": "<button type='button' class='btn btn-secondary'><i class='bi bi-three-dots-vertical'></i> </button>",
	     		objres.btncolpse="<button type='button' class='btn btn-secondary'><i class='bi bi-three-dots-vertical'></i> </button>";  
	            
	            objres.busellStatus=statusbuysell;
	           // objres.status2Value="completed";
	           // objres.status2Msg="";
	            objres.placedby=jsonObject[i].actid;
	            objres.pAndL="<span class='tp_red'>-1,800.00</span>";
	            objres.buyAvgPrice=jsonObject[i].daybuyavgprc;
	            objres.sellAvgPrice=jsonObject[i].daysellavgprc;
	            
	             objres.token=jsonObject[i].token; 
	             objres.scriptName=jsonObject[i].tsym;
		   		 objres.exchange=jsonObject[i].exch;
		   		 objres.netqty=jsonObject[i].netqty;
		   		 objres.prd=jsonObject[i].prd;
		   		 objres.price=priceValue;
		   		 objres.trantype=trantype;
		   		 
		   		 jsondata.push(objres);
		   	 }
		   	 
		   	
	 		}
		
//	 		Data Rendering here
	 		
	 		if ($('#tablePosition').length > 0) {
	 			  var tablePosition = $('#tablePosition').DataTable({
	 			   data: jsondata,
	 			   // ajax: 'js/ajax/tablePositionData.json',
	 			    columns: [
	 			      { data: "name" },
	 			      { data: "sellbuybtn" },
	 			      { data: "qty" },
	 			      { data: "product" },
	 			      { data: "price" },
	 			      { data: "LTP" },
	 			      { data: "mtm" },
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
	 			
	 			 var openTablePostionRows = new Array();	 			
	 			$('#tablePosition tbody').on('click', 'td.details-control', function() {
	 			  var tr = $(this).closest('tr');
	 			  var row = tablePosition.row(tr);
	 			  if(row.child.isShown()){
	 			      // This row is already open - close it
	 			      row.child.hide();
	 			      tr.removeClass('shown');
	 			  } else {
	 			      // Open this row
	 			     // closeTablePostionOpenRows(tabelPosition, tr);	 				  
	 				 $.each(openTablePostionRows, function (index, openRow) {
	 					  // not the selected row!
	 					  if ($.data(tr) !== $.data(openRow)) {
	 					      var rowToCollapse = tablePosition.row(openRow);
	 					      rowToCollapse.child.hide();
	 					      openRow.removeClass('shown');
	 					      // replace icon to expand
	 					      $(openRow).find('td.details-control').html('<button type="button" class="btn btn-secondary"><i class="bi bi-three-dots-vertical"></i> </button>');
	 					      // remove from list
	 					      var index = $.inArray(tr, openTablePostionRows);
	 					      openTablePostionRows.splice(index, 1); 
	 					    
	 					      
	 					  }
	 					});
	 				  
	 				
	 			      row.child(formatTablePosition(row.data())).show();
	 			      tr.addClass('shown');
	 			     openTablePostionRows.push(tr);
	 			  }
	 			});
	 			
	 			}
	 		
			},
			error:function(){
			//	alert("OrderBook Error");
			
			}	
		});
	






}


function formatTablePosition(d) {

	console.log('formatTablePosition', (d.busellStatus === 'Buy'));
	
	  var bysellClass = d.busellStatus === 'Sell' ? 'btn-red' : 'btn-lightBlue'
		 
		  if(d.qty=="0"){
			  PositionHTML = '<div class="dropdown convert-dropdown"><button class="'+ bysellClass +' btn btn-sm btn-showbuysellPortfolio"   onclick="buysellwindowOpenPosition(\'' + d.scriptName + '\',\''+d.token+'\',\''+d.exchange+'\',\''+d.netqty+'\',\''+d.placedby+'\',\''+d.LTP+'\',\''+d.price+'\');" data-modal-type="' + (d.busellStatus).toLowerCase() + '" type="button">'+ d.busellStatus +' More</button><button type="button" disabled class="btn btn-red btn-sm dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="false">Square Off</button><div class="dropdown-menu" aria-labelledby="convertButton1"><span class="btn-close2"><i class="bi bi-x-lg"></i></span><ul><li><div class="form-check"> <input class="form-check-input" type="radio" name="SqurOffOption" id="allSqurOff"> <label class="form-check-label" for="allSqurOff">All </label></div></li><li><div class="form-check"> <input class="form-check-input" type="radio" name="SqurOffOption" id="exactQtySqurOff" checked> <label class="form-check-label" for="exactQtySqurOff">Exact Qty </label></div></li></ul><div class="form-group"><div class="row"><div class="col-6 d-flex align-items-center">Price</div><div class="col-6"><input type="text" class="form-control"  id="sqroffpriceId" value='+d.price+'></div></div></div><div class="form-group"><div class="row"><div class="col-6 d-flex align-items-center">Exact Qty</div><div class="col-6"><div class="number-spinner"><span class="ns-btn"><a data-dir="dwn"><i class="bi bi-dash"></i></a></span><input type="text" class="pl-ns-value form-control"  id="sqroffQtyId" value="1"><span class="ns-btn"><a data-dir="up"><i class="bi bi-plus"></i></a></span></div></div></div></div><button type="button" class="btn btn-red" onclick="SquareoffOrder(\''+d.scriptName+'\',\''+d.placedby+'\',\''+d.trantype+'\',\''+d.exchange+'\',\''+d.prd+'\');">Square Off Order</button></div></div>'
		  }
		  else{
			  PositionHTML = '<div class="dropdown convert-dropdown"><button class="'+ bysellClass +' btn btn-sm btn-showbuysellPortfolio" onclick="buysellwindowOpenPosition(\'' + d.scriptName + '\',\''+d.token+'\',\''+d.exchange+'\',\''+d.netqty+'\',\''+d.placedby+'\',\''+d.LTP+'\',\''+d.price+'\');" data-modal-type="' + (d.busellStatus).toLowerCase() + '" type="button">'+ d.busellStatus +' More</button><button type="button" class="btn btn-red btn-sm dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="false">Square Off</button><div class="dropdown-menu" aria-labelledby="convertButton1"><span class="btn-close2"><i class="bi bi-x-lg"></i></span><ul><li><div class="form-check"> <input class="form-check-input" type="radio" name="SqurOffOption" id="allSqurOff"> <label class="form-check-label" for="allSqurOff">All </label></div></li><li><div class="form-check"> <input class="form-check-input" type="radio" name="SqurOffOption" id="exactQtySqurOff" checked> <label class="form-check-label" for="exactQtySqurOff">Exact Qty </label></div></li></ul><div class="form-group"><div class="row"><div class="col-6 d-flex align-items-center">Price</div><div class="col-6"><input type="text" class="form-control"  id="sqroffpriceId" value='+d.price+'></div></div></div><div class="form-group"><div class="row"><div class="col-6 d-flex align-items-center">Exact Qty</div><div class="col-6"><div class="number-spinner"><span class="ns-btn"><a data-dir="dwn"><i class="bi bi-dash"></i></a></span><input type="text" class="pl-ns-value form-control"  id="sqroffQtyId" value="1"><span class="ns-btn"><a data-dir="up"><i class="bi bi-plus"></i></a></span></div></div></div></div><button type="button" class="btn btn-red" onclick="SquareoffOrder(\''+d.scriptName+'\',\''+d.placedby+'\',\''+d.trantype+'\',\''+d.exchange+'\',\''+d.prd+'\');">Square Off Order</button></div></div>'
		  }
		  			
		  
		  // Number Spinner 
		//  $('.number-spinner .ns-btn a').click(function () {
		  $(document.body).on('click', '.number-spinner .ns-btn a' ,function(){

			 
		    var btn = $(this),
		      oldValue = btn.closest('.number-spinner').find('input').val().trim(),
		      newVal = 0;
		  
		    if (btn.attr('data-dir') === 'up') {
		    	
		      newVal = parseInt(oldValue) + 1;
		      
		    } else {
		      if (oldValue > 1) {
		        newVal = parseInt(oldValue) - 1;
		        
		      } else {
		        newVal = 1;
		      }
		    }
		    btn.closest('.number-spinner').find('input').val(newVal);
		  });
		  $('.number-spinner>input').keypress(function (evt) {
		    evt = (evt) ? evt : window.event;
		    var charCode = (evt.which) ? evt.which : evt.keyCode;
		    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
		      return false;
		    }
		    return true;
		  });
		  
		  
		 
		  
	//buy-sell window																																																							
	  $(document.body).on('click', '.btn-showbuysellPortfolio' ,function(){
		  
					
		    var modalType = $(this).attr('data-modal-type');
		    if (modalType === 'buy') {
		      $('#buySellModal').addClass('themeBlue');
		      $('#buySellModal').removeClass('themeRed');
		      $('#switchBuySell').prop('checked', false);
		      $('#buyId').show();
		      $('#sellId').hide();
		    } else if (modalType === 'sell') {
		      $('#buySellModal').addClass('themeRed');
		      $('#buySellModal').removeClass('themeBlue');
		      
		      
		      $('#switchBuySell').prop('checked', true);
		      $('#buyId').hide();
		      $('#sellId').show();
		    }
		    
		  $('#buySellModal').modal('show');	
		  });
		  $('#switchBuySell').change(function() {
		    var checkStatus = $(this).prop('checked');
		    if (checkStatus) {
		      $('#buySellModal').addClass('themeRed');
		      $('#buySellModal').removeClass('themeBlue');
		      $('#buyId').hide();
		      $('#sellId').show();
		    } else {
		      $('#buySellModal').addClass('themeBlue');
		      $('#buySellModal').removeClass('themeRed');
		      $('#buyId').show();
		      $('#sellId').hide();
		    }
		    console.log('checkStatus', checkStatus);
		  });
	  
	   /*$(".btn-showbuysellPortfolio").click(function() {
	     var modalDiv = $('#buySellModal');
	     modalDiv.modal({backdrop: false, show: true});
	     $('#buySellModal .modal-dialog').draggable({
	       handle: "#buySellModal .modal-header"
	     });
	   });*/

	  $('.btn-showbuysellPortfolio').click(function () {
	    // console.log('ddddd', $('#buySellModal').height(), $('#buySellModal').width());
	    var modalWidth = $('#buySellModal').width();
	    var modalHeight = $('#buySellModal').height();
	    $('#buySellModal').css('margin-left', ('-' + modalWidth / 2) + 'px');
	    $('#buySellModal').css('margin-top', ('-' + modalHeight / 2) + 'px');
	    var modalDiv = new bootstrap.Modal($('#buySellModal'));
	    modalDiv.show();
	    
	   /* $('.buySellModal').draggable({
	      handle: ".modal-header"
	    });*/
	    // if (typeof draggable !== 'undefined') {}
	  });
	  

	  var prevprd=d.prd;
	  
	  var newprd;
	  var convertlableName;
	  
	  if(d.prd=="C"){
		  newprd="M"; 
		  convertlableName="Do you want to convert the Order to CNC";
		  convertButton="Convert to NRML";
		 }else if(d.prd=="M"){
			 newprd="I";
			 convertlableName="Do you want to convert the Order to MIS";
			 convertButton="Convert to MIS";
		 }else if(d.prd=="I"){
			 newprd="M";
			 convertlableName="Do you want to convert the Order to NRML";
			 convertButton="Convert to NRML";
		 }
	  
		 /*if(d.prd=="CNC"){
			 prevprd="I"; 
		 }else if(d.prd=="NRML"){
			 prevprd="I";
		 }else if(d.prd=="MIS"){
			 prevprd="M";
		 }*/
	  
	  
	  
	  
	  return '<table cellpadding="5" cellspacing="0" border="0" class="table-status position-status" style="width:100%;">'+
	    '<tr>'+
	      '<td><span>Placed by:</span><p>' + d.placedby + '</p></td>' +
	      '<td><span>Price:</span><p>' + d.price + '</p></td>' +
	      '<td><span>LTP:</span><p>' + d.LTP + '</p></td>' +
	      '<td><span>MTM:</span><p>' + d.mtm + '</p></td>' +
	      '<td><span>P&L:</span><p>' + d.pAndL + '</p></td>' +
	      '<td><span>Buy Avg.Price:</span><p>' + d.buyAvgPrice + '</p></td>' +
	      '<td><span>Sell Avg.Price:</span><p>' + d.sellAvgPrice + '</p></td>' +	      
	      '<td class="text-end btn-holder convert position-drop">'+ PositionHTML +'</td>'+
	      '</tr>'+ 
	      '<tr>'+
	      '<td class="convert" colspan="8"><div class="dropdown convert-dropdown"><button class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="false">'+convertButton+'</button> <div class="dropdown-menu" aria-labelledby="convertButton1"><h3>Conversion</h3><span class="btn-close2"><i class="bi bi-x-lg"></i></span><ul class="pro-info"><li><h2>'+d.scriptName+'</h2><p><span>'+d.exchange+'</span><span>EQ</span><span>MARKET</span></p></li><li><p class="quantity">QTY: ' + d.qty + '</p><label class="buy-label">BUY</label></li></ul><div class="confirm"><p>'+convertlableName+'</p><div class="btn-part"><button class="btn btn-primary" onclick="productConvert(\'' + d.scriptName + '\',\''+d.exchange+'\',\''+newprd+'\',\''+d.qty+'\',\''+d.trantype+'\',\''+prevprd+'\');">Yes</button><button class="btn btn-primary btn-red">No</button></div></div></div></div></td>'+
	    '</tr>'+
	    //productConvert(\'' + d.scriptName + '\',\''+d.exchange+'\',\''+d.prd+'\',\''+d.qty+'\',\''+d.trantype+'\',\''+prevprd+'\',\''+d.postype+'\');"
	      '</table>';
	  
	    /*  '<td class="text-end btn-holder convert position-drop"><div class="dropdown convert-dropdown"><button class="'+ bysellClass +' btn btn-sm btn-showbuysellPortfolio"  data-modal-type="' + (d.busellStatus).toLowerCase() + '" type="button">'+ d.busellStatus +' More</button><button type="button" class="btn btn-red btn-sm dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="false">Square Off</button><div class="dropdown-menu" aria-labelledby="convertButton1"><span class="btn-close2"><i class="bi bi-x-lg"></i></span><ul><li><div class="form-check"> <input class="form-check-input" type="radio" name="SqurOffOption" id="allSqurOff"> <label class="form-check-label" for="allSqurOff">All </label></div></li><li><div class="form-check"> <input class="form-check-input" type="radio" name="SqurOffOption" id="exactQtySqurOff" checked> <label class="form-check-label" for="exactQtySqurOff">Exact Qty </label></div></li></ul><div class="form-group"><div class="row"><div class="col-6 d-flex align-items-center">Price</div><div class="col-6"><input type="text" class="form-control" value="0.00"></div></div></div><div class="form-group"><div class="row"><div class="col-6 d-flex align-items-center">Exact Qty</div><div class="col-6"><div class="number-spinner"><span class="ns-btn"><a data-dir="dwn"><i class="bi bi-dash"></i></a></span><input type="text" class="pl-ns-value form-control" value="1"><span class="ns-btn"><a data-dir="up"><i class="bi bi-plus"></i></a></span></div></div></div></div><button type="button" class="btn btn-red">Square Off Order</button></div></div></td>' +
	    '</tr>'+ 
	    '<tr>'+
	      '<td class="convert" colspan="8"><div class="dropdown convert-dropdown"><button class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="false">Convert to MIS</button> <div class="dropdown-menu" aria-labelledby="convertButton1"><h3>Conversion</h3><span class="btn-close2"><i class="bi bi-x-lg"></i></span><ul class="pro-info"><li><h2>Gold1</h2><p><span>NSE</span><span>EQ</span><span>MARKET</span></p></li><li><p class="quantity">QTY: ' + d.qty + '</p><label class="buy-label">BUY</label></li></ul><div class="confirm"><p>Do you want to convert the Order to NRML</p><div class="btn-part"><button class="btn btn-primary">Yes</button><button class="btn btn-primary btn-red">No</button></div></div></div></div></td>'+
	    '</tr>'+
	  '</table>';
	  */
	  
	}


function productConvert(tsym,exch,prd,qty,trantype,prevprd){
	
orderType="LMT";
	var postype="";
	
	if ($("#DayIdPosition").hasClass("active")) {
		postype=$("#DayIdPosition").val();
	}
	else if ($("#NetIdPosition").hasClass("active")) {
		postype=$("#NetIdPosition").val();
	}
	//alert("tsym:::"+tsym+"exch::"+exch+"prd::"+prd+"qty::"+qty+"trantype::"+trantype+"prevprd::"+prevprd+" postype "+postype+" orderType : "+orderType);
		  
		  var call="tsym="+tsym+"&exch="+exch+"&ordertype="+orderType+"&prd="+prd+"&qty="+qty+"&trantype="+trantype+"&prevprd="+prevprd+"&postype="+postype;

		  	 $.ajax({
					type :'POST',
					url :'ProductConversion',
					data :call,
					dataType: 'json',
					success:function(response){					

						var result = Object.values(response);
						
						
					//	alert("result: "+result)
						var stat=result[1];				

						var msg= result[2];			
						
						if(stat==='Ok'){
							alert("PRODUCT CONVERSION SUCCESSFULLY");
						}else if(stat==='Not_Ok'){
							alert(msg);
						}
					},
					error:function(){
						//alert("OrderBookPosition Error");
					
					}	
				});
	}


function SquareoffOrder(scriptName,userId,transtype,exchange,prd){
	
	
	//alert("scriptName : "+scriptName+" userId : "+userId+" transtype : "+transtype+" exchange : "+exchange+" prd : "+prd+"")
	var sqroffpriceId=$("#sqroffpriceId").val();
	var sqroffQtyId=$("#sqroffQtyId").val();
	
if(transtype==="B"){
	
		var Price=sqroffpriceId; 
		var Ret="DAY";
		var uid=userId;
		var prd=prd;
		var Tsym=scriptName;
		var exch=exchange;
 		var qty=sqroffQtyId;
 		var actid=userId;
 		var Ttranstype="S";
 		var prctyp="";
 		var orderSource="WEB"
 		
 		var sprdtali="CNC:CNC||MIS:MIS||NRML:NRML";	
 		var s_prdt_ali=sprdtali;
 		
 		var discqty="";
 		
 		var Pcode=""; 			
 		var MktPro="NA"; 		
 		var TrigPrice="0";
 		var DateDays="NA"; 
 		var AMO="";
 		var PosSquareFlg="N";
 		var MinQty="0"; 
 		
 		var naicCode="010";
 		
 		//brackerOrder req
 		var ltpOratp="0";
 		var SqrOffAbsOrticks= "0";
 		var SqrOffvalue= "0";
 		var SLAbsOrticks= "0";
 		var SLvalue= "0";
 		var trailingSL= "0";
 		var tSLticks= "0";
 		var userTag="0";
 		var displayName="";
 		var scriptName="";
	
   	$.ajax({
 		type :'POST',
 		url :'PlaceOrder',		
 		data:"s_prdt_ali="+s_prdt_ali+"&uid="+uid+"&actid="+actid+"&Tsym="
 		+Tsym+"&exch="+exch+"&Ttranstype="+Ttranstype+"&Ret="+Ret+"&prctyp="+prctyp+"&qty="+qty+"&discqty="+discqty+"&prd="+prd+
 		"&MktPro="+MktPro+"&Price="+Price+"&TrigPrice="+TrigPrice+"&Pcode="+Pcode+"&DateDays="+DateDays+"&AMO="+AMO+
 		"&PosSquareFlg="+PosSquareFlg+"&MinQty="+MinQty+"&orderSource="+orderSource+"&naicCode="+naicCode+
 		"&ltpOratp="+ltpOratp+"&SqrOffAbsOrticks="+SqrOffAbsOrticks+"&SqrOffvalue="+SqrOffvalue+"&SLAbsOrticks="+
 		SLAbsOrticks+"&SLvalue="+SLvalue+"&trailingSL="+trailingSL+"&tSLticks="+tSLticks+"&userTag="+userTag+
 		"&scriptName="+scriptName+"&displayName="+displayName,
 		
 		success:function(JsonObject){
 		
 			alert("JsonObject : "+JsonObject);
 		
 		var stat= JsonObject.stat;
 		var result=JsonObject.norenordno;
 		if(stat==='Ok'){
 			alert("Order OK")
 		}
 		else if(stat==='Not_Ok'){
 			alert("Error :Not_ok");
 		}     		
 	
 		},
 		error:function(){
 			alert("PlaceOrder Error");
 		
 		}	
 	});
   	
	/*document.getElementById("buyId").addEventListener("click",PlaceOrderbuyfun);    
	document.getElementById("sellId").addEventListener("click",PlaceOrdersellfun); */
}

else if(transtype==="S"){
	
	var Price=sqroffpriceId; 
	var Ret="DAY";
	var uid=userId;
	var prd=prd;
	var Tsym=scriptName;
	var exch=exchange;
		var qty=sqroffQtyId;
		var actid=userId;
		var Ttranstype="B";
		var prctyp="";
		var orderSource="WEB"
		
		var sprdtali="CNC:CNC||MIS:MIS||NRML:NRML";	
		var s_prdt_ali=sprdtali;
		
		var discqty="";
		
		var Pcode=""; 			
		var MktPro="NA"; 		
		var TrigPrice="0";
		var DateDays="NA"; 
		var AMO="";
		var PosSquareFlg="N";
		var MinQty="0"; 
		
		var naicCode="010";
		
		//brackerOrder req
		var ltpOratp="0";
		var SqrOffAbsOrticks= "0";
		var SqrOffvalue= "0";
		var SLAbsOrticks= "0";
		var SLvalue= "0";
		var trailingSL= "0";
		var tSLticks= "0";
		var userTag="0";
		var displayName="";
 		var scriptName="";


	$.ajax({
		type :'POST',
		url :'PlaceOrder',		
		data:"s_prdt_ali="+s_prdt_ali+"&uid="+uid+"&actid="+actid+"&Tsym="
		+Tsym+"&exch="+exch+"&Ttranstype="+Ttranstype+"&Ret="+Ret+"&prctyp="+prctyp+"&qty="+qty+"&discqty="+discqty+"&prd="+prd+
		"&MktPro="+MktPro+"&Price="+Price+"&TrigPrice="+TrigPrice+"&Pcode="+Pcode+"&DateDays="+DateDays+"&AMO="+AMO+
		"&PosSquareFlg="+PosSquareFlg+"&MinQty="+MinQty+"&orderSource="+orderSource+"&naicCode="+naicCode+
		"&ltpOratp="+ltpOratp+"&SqrOffAbsOrticks="+SqrOffAbsOrticks+"&SqrOffvalue="+SqrOffvalue+"&SLAbsOrticks="+
		SLAbsOrticks+"&SLvalue="+SLvalue+"&trailingSL="+trailingSL+"&tSLticks="+tSLticks+"&userTag="+userTag+
		"&scriptName="+scriptName+"&displayName="+displayName,
		
		success:function(JsonObject){
		
			alert("JsonObject : "+JsonObject);
		
		var stat= JsonObject.stat;
		var result=JsonObject.norenordno;
		if(stat==='Ok'){
			alert("Order OK")
		}
		else if(stat==='Not_Ok'){
			alert("Error :Not_ok");
		}     		
	
		},
		error:function(){
			alert("PlaceOrder Error");
		
		}	
	});
	
}


}

//=====buy/Sell Price TickSize =============

/*function validateFloatKeyPress2(el, evt) {
	
	var priceVal=$('#priceId').val();
	
	//var dotcontains = priceVal.indexOf(".") != -1;
	var dotcontains =priceVal.toString().split(".")[0];
	
	
    var charCode = (evt.which) ? evt.which : event.keyCode;

    if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57)) {
    	        return false;
    }

    if (charCode == 46 && el.value.indexOf(".") !== -1) {
    	
        return false;
    }

    if (el.value.indexOf(".") !== -1)
    {
        var range = document.selection.createRange();
        if (range.text != ""){
        }
        else
        {
            var number = el.value.split('.');
            if (number.length == 2 && number[1].length > 1)
                return false;
        }
    }

    return true;
}*/




/*var value;
var mcxTicksize;
var nseTicksize;
var nfoTicksize;
$('#priceId').on('change',function(){	
	  
	var priceVal=$('#priceId').val();
	var exchangeType=$('#stockhiddval').val();
	

	//===== MCX Segment ======
	if(exchangeType=="MCX"){	
		
	value = document.getElementById("priceId").step =priceVal;				    
	mcxTicksize=$("#mcxticksizehiddval").val();
	
	
	document.getElementById("priceId").step =mcxTicksize;
	//Number.parseFloat(mcxTicksize).toFixed(2)
	
	if($(this).val() > value){
		  var upTagvalue=parseInt(value)+mcxTicksize;
		  ocument.getElementById("priceId").value = upTagvalue;
		  //document.getElementById("priceId").value =(Math.round(upTagvalue * 100) / 100).toFixed(3);
		  //(Math.round(upTagvalue * 100) / 100).toFixed(2)
	}else if($(this).val() < value){
		  var downTagvalue=parseInt(value)-mcxTicksize;
		  document.getElementById("priceId").value =downTagvalue;
		  //document.getElementById("priceId").value =(Math.round(downTagvalue * 100) / 100).toFixed(3);
	}

	}				    	
	//===== NSE Segment ======
	else if(exchangeType=="NSE"){	
	    	value = document.getElementById("priceId").step =priceVal;				    
	      	 nseTicksize=$("#nseticksizehiddval").val();
	      
	     document.getElementById("priceId").step =nseTicksize;	
	     
	     if($(this).val() > value){
	    	  var upTagvalue=parseInt(value)+parseInt(nseTicksize);
	    	  document.getElementById("priceId").value =upTagvalue.toFixed(2);
	    	 // document.getElementById("priceId").value =(Math.round(upTagvalue * 100) / 100).toFixed(3);
	    	  
	      }else if($(this).val() < value){
	    	  var downTagvalue=parseInt(value)-parseInt(nseTicksize);
	    	 document.getElementById("priceId").value =downTagvalue.toFixed(2);
	    	  //document.getElementById("priceId").value =(Math.round(downTagvalue * 100) / 100).toFixed(3);
	      }
	     }	
	else if(exchangeType=="NFO"){	
    	value = document.getElementById("priceId").step =priceVal;				    
      	 nfoTicksize=$("#nfoTicksizehiddval").val();
      
     document.getElementById("priceId").step =nfoTicksize;	
     
     if($(this).val() > value){
    	  var upTagvalue=parseInt(value)+parseInt(nfoTicksize);
    	  document.getElementById("priceId").value =upTagvalue.toFixed(2);
    	  //document.getElementById("priceId").value =(Math.round(upTagvalue * 100) / 100).toFixed(3);
    	  //(Math.round(num1 * 100) / 100).toFixed(2);
      }else if($(this).val() < value){
    	  var downTagvalue=parseInt(value)-parseInt(nfoTicksize);
    	 document.getElementById("priceId").value =downTagvalue.toFixed(2);
    	//  document.getElementById("priceId").value =(Math.round(downTagvalue * 100) / 100).toFixed(3);
      }
     }
	
	
			value = $(this).val();
			
			
			
			Number.prototype.before = function () {
				  var value = parseInt(this.toString().split(".")[0], 10);//before
				  return value ? value : 0;
				}

				Number.prototype.after = function () {
				  var value = parseInt(this.toString().split(".")[1], 10);//after
				  return value ? value : 0;
				}


			
			
});	*/		    
//==============================


   
   
 //Regular Order When you Click SL Order Type Validation for TriggerPrice

   /*function TriggerPriceFunction(){
   	    var TriggerPriceVAL=$("#TriggerpriceId").val();
         var PriceVAL=$("#priceId").val();       
        	 if ( $('li.RegularOrdcls').hasClass('active') ) {       
       		if ( $('li.slcls').hasClass('active') ) {
       			
       	  if(Number(TriggerPriceVAL)>Number(PriceVAL)){
       		//  document.getElementById("TriggerPricehiddenErrorId").value='TriggerPriceError';
       		  $(".TriggerPriceErrorcls").show();
       		  $("#TriggerPriceErrorId").show();
       		  document.getElementById("buyId").disabled = true;	
       		  document.getElementById("sellId").disabled = true;
           }
           else if(Number(PriceVAL)>=Number( TriggerPriceVAL) || Number(PriceVAL)>Number(TriggerPriceVAL)){
        	   $(".TriggerPriceErrorcls").hide();
        	   $("#TriggerPriceErrorId").hide();
         	document.getElementById("buyId").disabled = false;
   		document.getElementById("sellId").disabled = false;
           }
       	  }
         }
   	  
   }*/
   
   /**
    * Req.Margin Calculation from Qty Increase /decrease Event
    */
   /*var classname = document.getElementsByClassName("QtyEventClass");

   classname.addEventListener('click', SpanCalculationFunction(), false);*/
   
 	
   /*function SpanCalculationFunction(){
	  
	   var buyqty=$("#QtyId").val();
	   var exch=$("#stockhiddval").val();	   
	   var price=$("#priceId").val();
	   var symbolname=$("#displaynamehiddval").val();
	   var Strikeprice=$("#decimalhiddval").val();
	  // alert("Strikeprice : "+Strikeprice)
	   //var symbolname=$("#stocklabelhiddenId").val();
	   //var symbolname=$("#scripthiddval").val();
	   var optt="",strprc="",optt="",instrumentname="",expirydate="",prd="";
	   
	   
	    if(exch=="MCX"){
		    instrumentname=$("#mcxInstrumentNamehiddval").val();
		    //var mcxOptionType=$("#mcxOptionTypehiddval").val();
		    expirydate=$("#mcxexpirydatehiddval").val();
		    
		   if ($('li.nrmlcls').hasClass('active')){    		
    			prd="M";
    		}
    		if ($('li.miscls').hasClass('active')){    			
    			prd="I";
    		}
    		
    		if(instrumentname=="OPTFUT" || instrumentname=="OPTCOM"){  
    			
    			strprc=Strikeprice;
    			optt=$("#mcxOptionTypehiddval").val();
    			
    		}
    		
    		  $.ajax({
    	    		type :'POST',
    	    		url  :'SpanCalc',		
    	    		data :"prd="+prd+"&exch="+exch+"&symbolname="+symbolname+"&instrumentname="+instrumentname+
    	    		"&expirydate="+expirydate+"&buyqty="+buyqty+"&strprc="+strprc+"&optt="+optt,
    	    		
    	    		success:function(JsonObject){    			
    	    			//alert("Req. Margin : "+JsonObject.span_trade);    	     		
    	    			if(JsonObject.stat=="Ok"){    				
    	    				document.getElementById("ReqMarginspanId").innerHTML =JsonObject.span_trade;
    	    			}
    	    			else if(JsonObject.stat=="Not_Ok"){    				
    	    				document.getElementById("ReqMarginspanId").innerHTML ="0.00";
    	    			}
    	    		},
    	    		error:function(){
    	    			alert("PlaceOrder Error");
    	    		
    	    		}	
    	    	});
    		
	   }
	
	   
	   else if(exch=="NFO"){		   
		   instrumentname=$("#NfoInstrumentNamehiddval").val();
		   expirydate=$("#nfoexpirydatehiddval").val();
		   if ($('li.nrmlcls').hasClass('active')){
    			prd="M";
    		}
    		if ($('li.miscls').hasClass('active')){    			
    			prd="I";
    		}
    		if(instrumentname=="OPTIDX" || instrumentname=="OPTSTK"){   	
    			strprc=Strikeprice;
    			optt=$("#nfooption_typehiddval").val();
    		//alert("strprc : "+strprc+" optt : "+optt);	
    		}
    		
    		  $.ajax({
    	    		type :'POST',
    	    		url  :'SpanCalc',		
    	    		data :"prd="+prd+"&exch="+exch+"&symbolname="+symbolname+"&instrumentname="+instrumentname+
    	    		"&expirydate="+expirydate+"&buyqty="+buyqty+"&strprc="+strprc+"&optt="+optt,
    	    		
    	    		success:function(JsonObject){    			
    	    			//alert("Req. Margin : "+JsonObject.span_trade);    	     		
    	    			if(JsonObject.stat=="Ok"){    				
    	    				document.getElementById("ReqMarginspanId").innerHTML =JsonObject.span_trade;
    	    			}
    	    			else if(JsonObject.stat=="Not_Ok"){    				
    	    				document.getElementById("ReqMarginspanId").innerHTML ="0.00";
    	    			}
    	    		},
    	    		error:function(){
    	    			alert("PlaceOrder Error");
    	    		
    	    		}	
    	    	});
    		  
	   }
	   if(exch=="NSE"){
		   	   
		   document.getElementById("ReqMarginspanId").innerHTML =Number(buyqty)*Number(price);
   		}
	   
   }*/
   
   
   
 	//Regular Order When you Click SL Order Type Validation for Price
 	 function myPriceFunction(){
 		 
 		 var PriceVAL=$("#priceId").val();
 		  var TriggerPriceVAL=$("#TriggerpriceId").val();
 	   	  
 	   	 if ( $('li.RegularOrdcls').hasClass('active') ) { 
 	    	 
 	   		if ( $('li.slcls').hasClass('active') ) {
 		  if(Number(TriggerPriceVAL)>Number(PriceVAL)){
 			
 			  //document.getElementById("TriggerPricehiddenErrorId").value='TriggerPriceError';
 			  $(".TriggerPriceErrorcls").show();
       		  $("#TriggerPriceErrorId").show();
 			  document.getElementById("buyId").disabled = true;	
 			  document.getElementById("sellId").disabled = true;
 	   }
 	   else if(Number(PriceVAL)>=Number( TriggerPriceVAL) || Number(PriceVAL)>Number(TriggerPriceVAL)){
 		   $(".TriggerPriceErrorcls").hide();
    	   $("#TriggerPriceErrorId").hide();
 	 	 document.getElementById("buyId").disabled = false;
 			document.getElementById("sellId").disabled = false;
 	   }
 	   	  }
 	     }
 	 }
   
 	 
 	 

 	 function mydiscqtyFunction(){
 	     
 	 	   var Discquantity = document.getElementById("DiscquantityId").value;
 	 	   var Quantity = document.getElementById("QtyId").value;
 	 	   
 	 	   var exchangeType=$("#stockhiddval").val();
 	 	   //var  exchangeType="MCX";
 	 	   var ValueTenPer=Number(10);
 	 	   var ValueTwentyFivePer=Number(25);
 	 	   var Zero="0";
 	 		 
 	 	/*  if(Number(Discquantity)> Number(Quantity)){
 	 		 document.getElementById("DiscQuanhiddenErrorId").value='DiscQuanError';
 	 			$("#DiscQuanErrorId").show();
 	 			
 	 		document.getElementById("buyId").disabled = true;	
 	 		document.getElementById("sellId").disabled = true;
 	 			
 	 			}
 	 		else if(Number(Discquantity)<= Number(Quantity) || Number(Discquantity)< Number(Quantity)){
 	 			$("#DiscQuanErrorId").hide();
 	 	
 	 			  document.getElementById("buyId").disabled = false;	
 	 			  document.getElementById("sellId").disabled = false;
 	 		} */
 	 	   if(exchangeType==='NSE'){ 
 	 		   
 	 		   //NSE
 	 		   
 	 		 if ($('li.nrmlcls').hasClass('active')){	    			
	    			prd="M";
	    		}
 	 		 if ($('li.cnccls').hasClass('active')){	    	    			
	    			prd="C";
	    		}
				
				if ($('li.miscls').hasClass('active')){	    	    			
	    			prd="I";
	    		}
				
 	 		
 	 		 $("#NrmlId").prop("disabled",true);
 	 		 $('#GTTlabelId').show();
 	 		 
 	 	    var perVal = Number(Quantity /100 ) * Number(ValueTenPer);
 	 	  
 	 	   if(Number(Discquantity) === Number(Zero)){
 	 		  
 	 		  $(".DiscQuanErrorcls").hide();
 	 		  $("#DiscQuanErrorId").hide();
 	  		  document.getElementById("buyId").disabled = false;	
 	  		  document.getElementById("sellId").disabled = false;
 	 	   }

 	 	  else if(Number(Discquantity)<Number(perVal) ||  Number(Discquantity)>Number(Quantity))
 	 	  		{
 	 		//	document.getElementById("DiscQuanNSEhiddenErrorId").value='DiscQuanNSEError';
 	 		  $(".DiscQuanErrorcls").show();
 	 		  $("#DiscQuanErrorId").show();
 	 		
 	 		  document.getElementById("buyId").disabled = true;	
 	 		  document.getElementById("sellId").disabled = true;
 	 	}
 	 	  else if(Number(Discquantity)>=Number(perVal) ||  Number(Discquantity)>Number(Quantity))
 	 	{
 	 		 $(".DiscQuanErrorcls").hide();
 	 		  $("#DiscQuanErrorId").hide();
 	 		 
 	 		  document.getElementById("buyId").disabled = false;	
 	 		  document.getElementById("sellId").disabled = false;
 	 	}
 	 	 }
 	 	 
 	 	 if(exchangeType==='MCX'){ 				//MCX
 	 		 
 	 		 $("#cncId").prop("disabled",true);
 	 		 $('#gttId').hide();	
 	 		 
 	 		 var perVal = Number(Quantity /100 ) * Number(ValueTwentyFivePer); 
 	 		 if(Number(Discquantity) === Number(Zero)){
 	 			 $(".DiscQuanErrorcls").hide();
 		 		  $("#DiscQuanErrorId").hide();
 	 	    		  document.getElementById("buyId").disabled = false;	
 	 	    		  document.getElementById("sellId").disabled = false;
 	 		  }
 	 		 
 	 		 else  if(Number(Discquantity)<Number(perVal) ||  Number(Discquantity)>Number(Quantity))
 	 			{
 	 				// document.getElementById("DiscQuanMCXhiddenErrorId").value='DiscQuanMCXError';
 	 			  $(".DiscQuanErrorcls").show();
 		 		  $("#DiscQuanErrorId").show();
 	 	    		  document.getElementById("buyId").disabled = true;	
 	 	    		  document.getElementById("sellId").disabled = true;
 	 			}
 	 			  else if(Number(Discquantity)>=Number(perVal) ||  Number(Discquantity)>Number(Quantity))
 	 			{ 				 
 	 				  $(".DiscQuanErrorcls").hide();
 			 		  $("#DiscQuanErrorId").hide();			 		  
 	 	    		  document.getElementById("buyId").disabled = false;	
 	 	    		  document.getElementById("sellId").disabled = false;
 	 			}
 	 		  
 	 	 }
 	 	 
 	 } 




 function Holdingfunction(){
	
	 $('.position-tab-btn').hide();
	 $('.holdings-tab-btn').show();
	var userId=$("#UserIdhiddenId").val();
	
	
	$("#CdslResponsePage").hide();
	$("#CdslResponseDivId").hide();
	
	 $.ajax({
			type :'POST',
			url :'holdings',
			dataType: 'json',
			success:function(response){

				var jsonObject =JSON.parse(response.data);
				
				
				//alert("response : "+response.data);
				
				
				
				
				
				var body="";
				 jsondata=[];
	
	 		for (var i = 0; i < jsonObject.length; i++) {
	 			
	 			var objres = new Object();
	   		var stat= jsonObject[i].stat;

	   		var HoldingValues=jsonObject[i].exch_tsym;
			
		   	 if(stat==='Ok'){
		   		 
		   		//alert("length : "+HoldingValues.length);
		   		 for (var kk = 0; kk < HoldingValues.length;kk++) {
		   			
		   			
		   		objres.name= "<p class='watchlist'>"+HoldingValues[kk].tsym+"</p><p class='hold-taskLab'><span class='active'>T1</span> <span>T2</span></p>";
		   		 
		   		objres.tsym=HoldingValues[kk].tsym;
		   		objres.token=HoldingValues[kk].token;
		   		objres.exchange=HoldingValues[kk].exch;
		   		 }
		   		 //alert("tsym : "+tsym);
		   		
		   		 
		   		 //onclick='buysellwindowOpenPosition(\'' + d.tsym + '\',\''+d.token+'\',\''+d.exchange+'\',\''+jsonObject[i].holdqty+'\',\''+userId+'\',\''+d.LTP+'\',\''+jsonObject[i].upldprc+'\');'
		   		 
		   		 	// objres.name= "";	 		
   		  
		     		    objres.netQty=jsonObject[i].holdqty;
			     	    objres.avgPrice= jsonObject[i].upldprc;
				        objres.LTP="77,839.00";
			     		objres.currValue="77.00";
			     		objres.pAndL="100.00";
			     		objres.pAndLPercnt="222";
			     		objres.btncolpse="<button type='button' class='btn btn-secondary'><i class='bi bi-three-dots-vertical'></i> </button>";  
			     		
			     		
			     		//objres.sellbuybtn="<button type='button' class='btn btn-lightBlue btn-showbuysellPortfolio' onclick='buysellwindowOpenPosition(\'' + d.tsym + '\',\''+d.token+'\',\''+d.exchange+'\',\''+jsonObject[i].holdqty+'\',\''+userId+'\',\''+d.LTP+'\',\''+jsonObject[i].upldprc+'\');'  data-modal-type='buy'>Buy</button> <button type='button' class='btn btn btn-red btn-showbuysellPortfolio' onclick='buysellwindowOpenPosition(\'' + d.tsym + '\',\''+d.token+'\',\''+d.exchange+'\',\''+jsonObject[i].holdqty+'\',\''+userId+'\',\''+d.LTP+'\',\''+jsonObject[i].upldprc+'\');'  data-modal-type='sell'>Sell</button>";
			     		objres.pAndL="100.00";
			     		objres.pAndLPercnt="22";
			     		objres.dayPAndL="11";
			     		objres.totQty=jsonObject[i].holdqty;
			     		objres.totInvst="00.00";
			     		objres.dayRetrn= "<span>1,800.00 <small> (1.43%)</small></span>";
			     		objres.ovrAllRetrn="<span>1,800.00 <small> (1.43%)</small></span>";
			     		objres.unRealGainLoss="<span>2,500.00 <small> (16.43%)</small></span>";
			     		objres.realGainLoss="<span>0.00 <small> (0.00%)</small></span>";
			     		objres.userId=userId;
			     		objres.price=jsonObject[i].sell_amt;
			     		/* "btncolpse": "<button type='button' class='btn btn-secondary'><i class='bi bi-three-dots-vertical'></i> </button>",
			             "pAndL": "<span class='tp_red'>-1,800.00</span>",
			             "pAndLPercnt": "<span class='tp_red'>1.13%</span>",
			             "pAndLboth": "<span class='tp_red'>-1,800.00<small> (1.13%)</small></span>",
			             "dayPAndL": "<span class='tp_red'>-1,800.00<small> (1.13%)</small></span>",
			             "totQty": "10",
			             "totInvst": "3,500.00",
			             "dayRetrn": "<span>1,800.00 <small> (1.43%)</small></span>",
			             "ovrAllRetrn": "<span>1,800.00 <small> (1.43%)</small></span>",
			             "unRealGainLoss": "<span>2,500.00 <small> (16.43%)</small></span>",
			             "realGainLoss": "<span>0.00 <small> (0.00%)</small></span>"*/
			     		
			     		jsondata.push(objres);
		   		 }
		   	 
		 	 
	 		}
	 		
		 	if ($('#tableHoldings').length > 0) {
			  var tableHoldings = $('#tableHoldings').DataTable({
			    data: jsondata,
			  //  ajax: 'js/ajax/tableHoldingsData.json',
			    columns: [
			      { data: "name" },
			      { data: "netQty" },
			      { data: "avgPrice" },
			      { data: "LTP" },
			      { data: "currValue" },
			      { data: "pAndL" },
			      { data: "pAndLPercnt" },
			      { 
			        className: 'details-control',
			        orderable: false,
			        data: "btncolpse",
			        defaultContent: ''
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
			  var openTableHoldingsRows = new Array();
			  $('#tableHoldings tbody').on('click', 'td.details-control', function() {
			    var tr = $(this).closest('tr');
			    var row = tableHoldings.row(tr);
			    if(row.child.isShown()){
			        // This row is already open - close it
			        row.child.hide();
			        tr.removeClass('shown');
			    } else {
			        // Open this row
			        //closeTableHoldingsOpenRows(tabelHoldings, tr);			    	

			    	$.each(openTableHoldingsRows, function (index, openRow) {
			    	  // not the selected row!
			    	  if ($.data(tr) !== $.data(openRow)) {
			    	      var rowToCollapse = tableHoldings.row(openRow);
			    	      rowToCollapse.child.hide();
			    	      openRow.removeClass('shown');
			    	      // replace icon to expand
			    	      $(openRow).find('td.details-control').html('<button type="button" class="btn btn-secondary"><i class="bi bi-three-dots-vertical"></i> </button>');
			    	      // remove from list
			    	      var index = $.inArray(tr, openTableHoldingsRows);
			    	      openTableHoldingsRows.splice(index, 1);
			    	  }
			    	});
			    	
			    	
			    	
			        row.child(formatTableHoldings(row.data())).show();
			        tr.addClass('shown');
			        openTableHoldingsRows.push(tr);
			    }
			  }); 
			}
		 	
		 	
	 		
		
			},
			error:function(){
			//	alert("OrderBook Error");
			
			}	
		});
	
}

function formatTableHoldings(d) {
	
	
	var sellbuybtn='<button type="button" class="btn btn-lightBlue btn-showbuysellPortfolio" onclick="buysellwindowOpenPosition(\'' + d.tsym + '\',\''+d.token+'\',\''+d.exchange+'\',\''+d.netQty+'\',\''+d.userId+'\',\''+d.LTP+'\',\''+d.price+'\');"  data-modal-type="buy">Buy</button> <button type="button" class="btn btn btn-red btn-showbuysellPortfolio" onclick="buysellwindowOpenPosition(\'' + d.tsym + '\',\''+d.token+'\',\''+d.exchange+'\',\''+d.netQty+'\',\''+d.userId+'\',\''+d.LTP+'\',\''+d.price+'\');"  data-modal-type="sell">Sell</button>';
		 
	 HoldingsHTML ='<td colspan="8" class="text-end btn-holder">' +sellbuybtn + '</td>';
	 
	 
		
	 
	//buy-sell window																																																							
	  $(document.body).on('click', '.btn-showbuysellPortfolio' ,function(){
			$('#buySellModal').modal('show');
		    var modalType = $(this).attr('data-modal-type');
		    if (modalType === 'buy') {
		      $('#buySellModal').addClass('themeBlue');
		      $('#buySellModal').removeClass('themeRed');
		      $('#switchBuySell').prop('checked', false);
		      $('#buyId').show();
		      $('#sellId').hide();
		    } else if (modalType === 'sell') {
		      $('#buySellModal').addClass('themeRed');
		      $('#buySellModal').removeClass('themeBlue');
		      
		      
		      $('#switchBuySell').prop('checked', true);
		      $('#buyId').hide();
		      $('#sellId').show();
		    }
		  });
		  $('#switchBuySell').change(function() {
		    var checkStatus = $(this).prop('checked');
		    if (checkStatus) {
		      $('#buySellModal').addClass('themeRed');
		      $('#buySellModal').removeClass('themeBlue');
		      $('#buyId').hide();
		      $('#sellId').show();
		    } else {
		      $('#buySellModal').addClass('themeBlue');
		      $('#buySellModal').removeClass('themeRed');
		      $('#buyId').show();
		      $('#sellId').hide();
		    }
		    console.log('checkStatus', checkStatus);
		  });
	  
	   $(".btn-showbuysellPortfolio").click(function() {
	     var modalDiv = $('#buySellModal');
	     modalDiv.modal({backdrop: false, show: true});
	     $('#buySellModal .modal-dialog').draggable({
	       handle: "#buySellModal .modal-header"
	     });
	   });

	  $('.btn-showbuysellPortfolio').click(function () {
	    // console.log('ddddd', $('#buySellModal').height(), $('#buySellModal').width());
	    var modalWidth = $('#buySellModal').width();
	    var modalHeight = $('#buySellModal').height();
	    $('#buySellModal').css('margin-left', ('-' + modalWidth / 2) + 'px');
	    $('#buySellModal').css('margin-top', ('-' + modalHeight / 2) + 'px');
	    var modalDiv = new bootstrap.Modal($('#buySellModal'));
	    modalDiv.show();
	   /* $('.buySellModal').draggable({
	      handle: ".modal-header"
	    });*/
	    // if (typeof draggable !== 'undefined') {}
	  });
	  
	  
	  
	  
	  
	  
	
	  // `d` is the original data object for the row
	  return '<table cellpadding="5" cellspacing="0" border="0" class="table-status holdings-status" style="width:100%;">'+
	    '<thead>'+
	    '<tr>'+
	      '<th><span>P&L:</span></th>'+
	      '<th><span>Day P&L:</span></th>'+
	      '<th><span>Total Qty:</span></th>'+
	      '<th><span>Total Investment:</span></th>'+
	      '<th><span>Day Return:</span></th>'+
	      '<th><span>Overall Return:</span></th>'+
	      '<th><span>Unrealized Gain/Loss:</span></th>'+
	      '<th><span>Realized Gain/Loss:</span></th>'+
	    '</tr>'+
	    '</thead><tbody>'+
	    '<tr>'+
	      '<td><p>' + d.pAndLboth + '</p></td>' +
	      '<td><p>' + d.dayPAndL + '</p></td>' +
	      '<td><p>' + d.totQty + '</p></td>' +
	      '<td><p>' + d.totInvst + '</p></td>' +
	      '<td><p>' + d.dayRetrn + '</p></td>' +
	      '<td><p>' + d.ovrAllRetrn + '</p></td>' +
	      '<td><p>' + d.unRealGainLoss + '</p></td>' +
	      '<td><p>' + d.realGainLoss + '</p></td>' +
	    '</tr>'+
	    '<tr>'+HoldingsHTML+'</tr>' +
	    
   		
	    
	  '</tbody></table>';
	}





function buysellwindowOpenPosition(scriptName,token,exchange,netqty,userId,LTP,price){
	
	//alert(" scriptName "+scriptName+" token "+token+" exchange "+exchange+" netqty "+netqty+" userId "+userId+" LTP "+LTP);
	
	
	document.getElementById("AvailableMarginspanId").innerHTML =$("#marginUsedhiddenId").val();

	$('#buySellModal').modal('show');
	
	document.getElementById("QtyId").value=netqty;
	document.getElementById("stocklabelId").innerHTML=scriptName+" "+exchange;
	document.getElementById("priceId").value=price;
	//document.getElementById("priceId").value=document.getElementById(token+"_priceid_hidden").value;
	document.getElementById("UserID").value=userId;	
	document.getElementById("token").value=token;
	document.getElementById("scripthiddval").value=scriptName;
	document.getElementById("stockhiddval").value=exchange;
		
	//document.getElementById("buysell_priceid").innerHTML = document.getElementById(token+"_priceid_hidden").value;
	//document.getElementById("stockhiddval").value=exchange;
	//document.getElementById("exchangelabelId").innerHTML=exchange;
	
	//MCX
	//document.getElementById("mcxexpirylabelId").innerHTML=mcxOriginalExpiryDate;		
	
	
	//NFO
	//document.getElementById("nfoexpirydatelabelId").innerHTML=nfoexpiry_date;
	
	//document.getElementById("scriptNamehiddval").value=scriptName;
	
	
	//document.getElementById("displaynamehiddval").value=displayname;
	var call="token="+token;

/*$.ajax({
	type :'GET',
	url :'getScriptValueOfToken',
    data : call,
	dataType: 'json',
	success:function(response){
		
		
		alert("jsonObject : "+response);
		 var jsonObject =JSON.parse(response);
		 
		 
		 
		 
		 for (var i = 0; i <jsonObject.length; i++) {*/
 

				
				
				
				//document.getElementById("scriptNamehiddval").value=scriptName;
				
				//document.getElementById("displaynamehiddval").value=displayname;
				
				var displayname;
				
					
				const monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']

			    const d = new Date();
			    var dd = String(d.getDate()).padStart(2, '0');
			    var mm = String(d.getMonth() + 1).padStart(2, '0');
			    var yyyy = d.getFullYear();
			    var todaydate = +dd +"/"+ monthNames[d.getMonth()] +"/"+ yyyy;
			    	
			 
			   
						//if (jsonObject[i].properties.mcxExchange==='MCX')
			    if (exchange==='MCX')
							{
							//MCX
							//document.getElementById("mcxexpirylabelId").innerHTML=jsonObject[i].properties.mcxOriginalExpiryDate;		
								

						/*	var myDate = new Date(jsonObject[i].properties.mcxOriginalExpiryDate);
							
			        		var scriptName;

							if(mcxobj.mcxOptionType=="XX"){
								scriptName=myDate.getDate() +monthNames[myDate.getMonth()]+" "+"FUT"+" "+jsonObject[i].properties.mcxExchange;
							}else{

								scriptName=myDate.getDate() +monthNames[myDate.getMonth()]+" "+jsonObject[i].properties.mcxStrikePrice+" "+jsonObject[i].properties.mcxOptionType+" "+jsonObject[i].properties.mcxExchange;
							}
			 	        	
			 	        document.getElementById("scriptNamehiddval").value=scriptName;
						
						document.getElementById("displaynamehiddval").value=jsonObject[i].properties.mcxInstrumentCode;
						
						displayname=jsonObject[i].properties.mcxInstrumentCode;*/
							
							
							if ($('li.nrmlcls').hasClass('active')){
			 	    			var Pcode="NRML";
			 	    			prd="M";
			 	    		}
			 	    		if ($('li.miscls').hasClass('active')){
			 	    			var Pcode="MIS";
			 	    			prd="I";
			 	    		}
			 	    		
			 	    		
							$(".BracketOrdcls").show();
							$(".CoverOrdcls").show();
							
							
							
							
							$('.nrmlcls').hasClass('active') 
						   	 if ($('.nrmlcls').hasClass('active') ) {
						   	$('.nrmlcls').siblings().removeClass('active');
						   	 }
						   	if ($('.miscls').hasClass('active') ) {
						   		$('.miscls').siblings().removeClass('active');
						   	}
							//=======  Regular ORDER MCX START =======
							
							  if ($('li.RegularOrdcls').hasClass('active') ) {
						    	  $('.CoverOrderrightsideDivcls').hide();
						     	  $('.NonCoverOrderDivcls').show();
						    	 
						    	  $('.Bracketordertextboxcls').hide();     	
						    	
						    	 // $('.pricecls').prop('disabled',false);
								  $('.DisclosedQtycls').prop('disabled',false);
								  $(".DisclosedQtycls").show();
						    	
								  
								  	$(".daycls").show();
								   	 $(".ioccls").show();
								   	 $(".gtccls").show();
								   	 $(".gtdcls").show();
								   	 $(".gttcls").show();
								   	
								   	 $('.pricecls').prop('disabled',false);
								   	 
								   	 $('.Productscls').show();
								   	 
								 	$("#NrmlId").show();
									$("#cncId").hide();
									$("#MisId").show();
									
									
									
								   	 
									$(".nrmlcls").addClass('active')    		 
							   		 if ($('.nrmlcls').hasClass('active') ) {
							   			 $('.nrmlcls').siblings().removeClass('active');
							    	  }
									 
							   		if ($('.miscls').hasClass('active') ) {
							  			 $('.miscls').siblings().removeClass('active');
							   	  }
							   		
									
								 
						    	
						    	 if ($('li.daycls').hasClass('active') ) {
						     		$('.DisclosedQtycls').prop('disabled',true);
						     		$('.Triggerpricecls').hide();
						     		$('.DTDValiditycls').hide();
						     	 }
						    	 if ($('li.ioccls').hasClass('active') ) {
						      		$('.DisclosedQtycls').prop('disabled',true);
						      		$('.Triggerpricecls').hide();
						      		$('.DTDValiditycls').hide();
						      	 }
						    	 if ($('li.gtccls').hasClass('active') ) {
						       		$('.DisclosedQtycls').prop('disabled',true);
						       		$('.Triggerpricecls').hide();
						       		$('.DTDValiditycls').hide();
						       	 }
						    	 
						    	if ($('li.gtdcls').hasClass('active') ) {
						    		
						     		$('.DisclosedQtycls').prop('disabled',true);
						     		$('.Triggerpricecls').hide();
						     		$('.DTDValiditycls').show();
						     		
						     		$(".date_item").show();
						     		$("#datepickerbuysell").prop("disabled", false);
						     		
						     		  $('#datepickerbuysell').datepicker({
							  
								 	    dateFormat: 'd M yy',
								 	    minDate: new Date(),
								 	    defaultDate:  new Date(),
							    
						     		  	}).datepicker('setDate',new Date())
						     	
						      }
								/*else{
								      $(".date_item").hide();
								      $("#datepicker").prop("disabled", true);
								    }*/
						    	if ($('li.gttcls').hasClass('active') ) {
						    		
						     		$('.DisclosedQtycls').prop('disabled',true);
						     		$('.Triggerpricecls').hide();
						     		$('.DTDValiditycls').hide();
						     		
						     	 }
						    	 
						    	
						    		 $('.Validitycls').show();
						    		 $('.Coverordertypecls').hide();
						    	 
						    		 $("#lmtId").show();
								   	 $("#mktId").show();
								   	 $("#slId").show();
								   	 $("#sl-mId").show();
								   	 
								   	$(".lmtcls").addClass('active')  
							         
						   	 
						   	 	if ($('.lmtcls').hasClass('active') ) { //Price Type ( L or SL )
						   	 	$('.pricecls').prop('disabled',false);
								$('.DisclosedQtycls').prop('disabled',false);     		
						 		$('.Triggerpricecls').hide();
						 		 $('.lmtcls').siblings().removeClass('active'); 
								 }
						   	 	if ($('.mktcls').hasClass('active') ) { //Price Type ( L or SL )
						   	 	$('.pricecls').prop('disabled',true);
								$('.DisclosedQtycls').prop('disabled',false);     		
						 		$('.Triggerpricecls').hide();
						 		 $('.mktcls').siblings().removeClass('active'); 
								 }
						   	 	if ($('.slcls').hasClass('active') ) { //Price Type ( L or SL )
						   	 	$('.Triggerpricecls').show();
						  		$('.DisclosedQtycls').prop('disabled',false);
						  		 $('.slcls').siblings().removeClass('active'); 
								 }
								 if ($('.slmcls').hasClass('active') ) { //Price Type ( L or SL )
									 $('.NonCoverOrderDivcls').show();
							    		$('.DisclosedQtycls').prop('disabled',false);
							    		$('.pricecls').prop('disabled',true);
							      		$('.Triggerpricecls').show();
							      		 $('.slmcls').siblings().removeClass('active'); 
								 }
						   	 
						      }
							  
							//=======  Regular MCX END =======
							  
							  
							//=======  BracketOrder MCX START =======
							  
							  
							  
							  else if ($('li.BracketOrdcls').hasClass('active') ) {
								 
								  $('.pricecls').prop('disabled',false);
						    	  
							   		 $(".lmtcls").addClass('active')    		 
							   		 if ($('.slcls').hasClass('active') ) {
							   			 $('.slcls').siblings().removeClass('active');
							    	  }
							   		if ($('.lmtcls').hasClass('active') ) {
							  			 $('.lmtcls').siblings().removeClass('active');
							   	  }
							   	 
									   	 $(".DisclosedQtycls").disabled = false;
									   	 $(".DisclosedQtycls").show();
									   	 $('.Productscls').hide();
									   	 $('.pricecls').prop('disabled',false);
									   	 $('.Bracketordertextboxcls').show();
									   	 $('.Validitycls').hide();    	 
									   	 $('.CoverOrderrightsideDivcls').hide();
									   	 $('.NonCoverOrderDivcls').show();
									   	 $("#lmtId").show();
									   	 $("#mktId").hide();
									   	 $("#slId").show();
									   	 $("#sl-mId").hide();
									   	 $('.Coverordertypecls').hide();
									   	 $('.Triggerpricecls').hide();
									   	 
									   	 if ($('li.lmtcls').hasClass('active') ) { //Price Type ( L or SL )
									   		 $('.Triggerpricecls').hide();
									 		 }
									 		 if ($('li.slcls').hasClass('active') ) { //Price Type ( L or SL )
									 			$('.Triggerpricecls').show();
									 		 }
									 		
									      }
							  
							  
							//=======  Bracket MCX END =======
							
							
							
							//=======  Cover Order MCX START =======
							  
							 	  
						      else if ($('li.CoverOrdcls').hasClass('active') ) {
						    	  
						    	  
						    	  $('.pricecls').prop('disabled',false);
						    	  
						    	  
							   	  // $(".DisclosedQtycls").disabled = false;
							   	   $(".DisclosedQtycls").hide();
							   	  $('.Productscls').hide();
							   	 
							   	 $('.Bracketordertextboxcls').hide();
							   	 $('.Validitycls').hide();
							   	 $('.Triggerpricecls').show();
							   	
							   	 $('.CoverOrderrightsideDivcls').show();
							   	 $('.NonCoverOrderDivcls').hide();
							   	 $("#CoverOrderlmtId").show();
							   	 $("#CoverOrdermktId").show();
							   	 $("#CoverOrderslId").hide();
							   	 $("#CoverOrdersl-mId").hide();
							   	 
							   	 $(".lmtcls").addClass('active')
							   	  if ($('.mktcls').hasClass('active') ) {
							   			 $('.mktcls').siblings().removeClass('active');
							   			 $('.pricecls').prop('disabled',true);
					    	  }
					   		if ($('.lmtcls').hasClass('active') ) {
					  			 $('.lmtcls').siblings().removeClass('active');
					  			 $('.pricecls').prop('disabled',false);
					   	  }
					   	 
					   	 
					    }
							  
							//=======  Cover Order MCX END =======
							
							
							
							  
								//=======  AMO Order MCX START =======
							  
							  
							  
							  
							  if ($('li.AfterMarketOrdcls').hasClass('active') ) {
									
									$('.pricecls').prop('disabled',false);
									 $('.CoverOrderrightsideDivcls').hide();
						        	  $('.NonCoverOrderDivcls').show();
						       	  $('.Productscls').show();
						       	  $('.Bracketordertextboxcls').hide();
						       	
							        	$('.pricecls').prop('disabled',false);
							    		$('.DisclosedQtycls').prop('disabled',false);
							    		$(".DisclosedQtycls").show();
							    		$(".daycls").show();
									   	 $(".ioccls").show();
									   	 $(".gtccls").show();
									   	 $(".gtdcls").show();
									   	 $(".gttcls").show();
									   	 
									  	$("#NrmlId").show();
										$("#cncId").hide();
										$("#MisId").show();
										
										
										
									   	 
										$(".nrmlcls").addClass('active')    		 
								   		 if ($('.nrmlcls').hasClass('active') ) {
								   			 $('.nrmlcls').siblings().removeClass('active');
								    	  }
										 
								   		if ($('.miscls').hasClass('active') ) {
								  			 $('.miscls').siblings().removeClass('active');
								   	  }
						       	
						       	 if ($('.daycls').hasClass('active') ) {
						        		$('.DisclosedQtycls').prop('disabled',true);
						        		$('.Triggerpricecls').hide();
						        		$('.DTDValiditycls').hide();
						        	 }
						       	 if ($('.ioccls').hasClass('active') ) {
						         		$('.DisclosedQtycls').prop('disabled',true);
						         		$('.Triggerpricecls').hide();
						         		$('.DTDValiditycls').hide();
						         	 }
						       	 if ($('.gtccls').hasClass('active') ) {
						          		$('.DisclosedQtycls').prop('disabled',true);
						          		$('.Triggerpricecls').hide();
						          		$('.DTDValiditycls').hide();
						          	 }
						       	 
						       	if ($('.gtdcls').hasClass('active') ) {
						       		
						        		$('.DisclosedQtycls').prop('disabled',true);
						        		$('.Triggerpricecls').hide();
						        		$('.DTDValiditycls').show();
						        		
						        		$(".date_item").show();
						         		$("#datepickerbuysell").prop("disabled", false);
						         		
						         		  $('#datepickerbuysell').datepicker({
						    	  
						    		 	    dateFormat: 'd M yy',
						    		 	    minDate: new Date(),
						    		 	    defaultDate:  new Date(),
						    	    
						         		  	}).datepicker('setDate',new Date())
						         	
						          }
						    		else{
						    		      $(".date_item").hide();
						    		      $("#datepicker").prop("disabled", true);
						    		    }
						       	if ($('.gttcls').hasClass('active') ) {
						       		
						        		$('.DisclosedQtycls').prop('disabled',true);
						        		$('.Triggerpricecls').hide();
						        		$('.DTDValiditycls').hide();
						        		
						        	 }
						       	 
						       	 $('.Validitycls').show();
						       	$('.Coverordertypecls').hide();
						       	 
						       	 $("#lmtId").show();
						      	 $("#mktId").show();
						      	 $("#slId").show();
						      	 $("#sl-mId").show();
						      	 
						      	$(".lmtcls").addClass('active');
						      		
						   		
						   		

						   	 	if ($('.lmtcls').hasClass('active') ) { //Price Type ( L or SL )
						   	   	 	$('.pricecls').prop('disabled',false);
						   			$('.DisclosedQtycls').prop('disabled',false);     		
						   	 		$('.Triggerpricecls').hide();
						   		 $('.lmtcls').siblings().removeClass('active');
						   			 }
						   	   	 	if ($('.mktcls').hasClass('active') ) { //Price Type ( L or SL )
						   	   	 	$('.pricecls').prop('disabled',true);
						   			$('.DisclosedQtycls').prop('disabled',false);     		
						   	 		$('.Triggerpricecls').hide();
						   	 	$('.mktcls').siblings().removeClass('active');
						   			 }
						   	   	 	if ($('.slcls').hasClass('active') ) { //Price Type ( L or SL )
						   	   	 	$('.Triggerpricecls').show();
						   	  		$('.DisclosedQtycls').prop('disabled',false);
						   	  	 $('.slcls').siblings().removeClass('active');
						   			 }
						   			 if ($('.slmcls').hasClass('active') ) { //Price Type ( L or SL )
						   				 $('.NonCoverOrderDivcls').show();
						   		    		$('.DisclosedQtycls').prop('disabled',false);
						   		    		$('.pricecls').prop('disabled',true);
						   		      		$('.Triggerpricecls').show();
						   		      	 $('.slmcls').siblings().removeClass('active');
						   			 }
						      	 
						         }
							  
								//=======  AMO Order MCX END =======				
							
							
							
							$("#cncId").hide();
							$("#MisId").show();
							$("#NrmlId").show();
							
							
						
						
						
							//var mcxexpiryDATE=mcxOriginalExpiryDate;
							
							var myDate = new Date(jsonObject[i].properties.mcxOriginalExpiryDate);
							
							var shortYear = myDate.getFullYear();
							// Add this line
							var twoDigitYear = shortYear.toString().substr(-2);
							var dd = myDate.getDate();
							 var mcxexpiryDATEmyDate = +myDate.getDate() +monthNames[myDate.getMonth()]+twoDigitYear;				
							//var mcxexpiryDATEmyDate = +twoDigitYear +monthNames[myDate.getMonth()];		
							 var mcxexpirydatedisplay = +myDate.getDate()+"-" +monthNames[myDate.getMonth()]+"-"+ myDate.getFullYear();
							
							 
								//MCX TICK SIZE
								document.getElementById("mcxticksizehiddval").value=jsonObject[i].properties.mcxTickSize;
							//McxInstrumentName
							document.getElementById("mcxInstrumentNamehiddval").value=jsonObject[i].properties.mcxInstrumentName;
							document.getElementById("mcxexpirydatehiddval").value=mcxexpirydatedisplay;
							
							//McxOptionType
							document.getElementById("mcxOptionTypehiddval").value=jsonObject[i].properties.mcxOptionType;
							 
							var fut="FUT";
							
							//alert("token : "+token);
							//document.getElementById("mcxStrikepricehiddval").value=token+"_priceid";
							
							//document.getElementById(token+"_priceid").value='mcxStrikepricehiddval';
							//var priceid=$("#mcxStrikepricehiddval").val();
							
							/*var priceid=document.getElementById(token+"_priceid").value;
							alert("mcxStrikePrice : "+priceid);*/ 
							
							if(mcxInstrumentName=="FUTIDX" || mcxInstrumentName=="FUTCOM"){
								if(dd<10) 
								{
									document.getElementById("stocklabelId").innerHTML=displayname+" "+fut+" "+jsonObject[i].properties.mcxExchange;
									document.getElementById("stocklabelhiddenId").value=displayname+fut;
									document.getElementById("scripthiddval").value=displayname+"0"+mcxexpiryDATEmyDate;
								}else{
									document.getElementById("stocklabelId").innerHTML=displayname+" "+fut+" "+jsonObject[i].properties.mcxExchange;
									document.getElementById("stocklabelhiddenId").value=displayname+fut;
									document.getElementById("scripthiddval").value=displayname+mcxexpiryDATEmyDate;
								}
							}
							else if(jsonObject[i].properties.mcxInstrumentName=="OPTFUT" || jsonObject[i].properties.mcxInstrumentName=="OPTCOM"){
							
								var num=jsonObject[i].properties.mcxStrikePrice/100;
								
								
								var DecimalmcxStrikePrice= num.toFixed(2);
								document.getElementById('decimalhiddval').value=(Math.round(DecimalmcxStrikePrice * 100) / 100);
								
								var decimalVal=$("#decimalhiddval").val();
								
								//document.getElementById('decimalhiddval').value=mcxStrikePrice;
								if(mcxOptionType=="PE"){
								if(dd<10) 
								{
								document.getElementById("stocklabelId").innerHTML=displayname+""+decimalVal+" "+jsonObject[i].properties.mcxExchange;
								document.getElementById("stocklabelhiddenId").value=displayname+"P"+decimalVal;
								document.getElementById("scripthiddval").value=displayname+"0"+mcxexpiryDATEmyDate+"P"+decimalVal;
								}else{
								document.getElementById("stocklabelId").innerHTML=displayname+" "+decimalVal+" "+jsonObject[i].properties.mcxOptionType+" "+jsonObject[i].properties.mcxExchange;
								document.getElementById("stocklabelhiddenId").value=displayname+decimalVal+jsonObject[i].properties.mcxOptionType;
								document.getElementById("scripthiddval").value=displayname+mcxexpiryDATEmyDate+"P"+decimalVal;
								}
								}
								else  if(mcxOptionType=="CE"){
									if(dd<10) 
									{
									document.getElementById("stocklabelId").innerHTML=displayname+""+decimalVal+" "+jsonObject[i].properties.mcxExchange;
									document.getElementById("stocklabelhiddenId").value=displayname+"C"+decimalVal;
									document.getElementById("scripthiddval").value=displayname+"0"+mcxexpiryDATEmyDate+"C"+decimalVal;
									}else{
									document.getElementById("stocklabelId").innerHTML=displayname+" "+""+decimalVal+" "+jsonObject[i].properties.mcxOptionType+" "+jsonObject[i].properties.mcxExchange;
									document.getElementById("stocklabelhiddenId").value=displayname+"C"+decimalVal+jsonObject[i].properties.mcxOptionType;
									document.getElementById("scripthiddval").value=displayname+mcxexpiryDATEmyDate+"C"+decimalVal;
									}	
								}
						}
							
					
							}
						
						else if(jsonObject[i].properties.nseExchange==='NSE'){
							
							displayname=jsonObject[i].properties.nseSymbol;
			 	        	
		                    document.getElementById("scriptNamehiddval").value=jsonObject[i].properties.nseSeries+" "+jsonObject[i].properties.nseExchange;
							
							document.getElementById("displaynamehiddval").value=displayname;
							
							$("#NrmlId").show();
							$("#cncId").hide();
							$("#MisId").show();
							
							
							
							
							if(jsonObject[i].properties.nseSeries=="AF" || jsonObject[i].properties.nseSeries=="BE" || 
									jsonObject[i].properties.nseSeries=="BL" || jsonObject[i].properties.nseSeries=="EQ" ||
									jsonObject[i].properties.nseSeries=="IQ" || jsonObject[i].properties.nseSeries=="L1" || 
									jsonObject[i].properties.nseSeries=="R1" || jsonObject[i].properties.nseSeries=="RL" || jsonObject[i].properties.nseSeries=="V1" ){
								
								$("#NrmlId").show();
								$("#cncId").show();
								$("#MisId").show();
								
							}
					   		
							
							
							
							$(".BracketOrdcls").hide();
							$(".CoverOrdcls").hide();
							
							
							
							 $(".RegularOrdcls").addClass('active')  
							 
					   		 if ($('.RegularOrdcls').hasClass('active') ) {
					   			 $('.RegularOrdcls').siblings().removeClass('active');
					    	  }
					   		if ($('.AfterMarketOrdcls').hasClass('active') ) {
					  			 $('.AfterMarketOrdcls').siblings().removeClass('active');
					   	  }
					   		
							//=======  Regular ORDER NSE START =======
							
							  if ($('li.RegularOrdcls').hasClass('active') ) {
						    	  $('.CoverOrderrightsideDivcls').hide();
						     	  $('.NonCoverOrderDivcls').show();
						    	  $('.Productscls').show();
						    	  $('.Bracketordertextboxcls').hide();     	
						    	
						    	  
						    	  $(".daycls").show();
								   	 $(".ioccls").show();
								   	 $(".gtccls").hide();
								   	 $(".gtdcls").hide();
								   	 $(".gttcls").hide();
								   	 
						    	 // $('.pricecls').prop('disabled',false);
								  $('.DisclosedQtycls').prop('disabled',false);
								  $(".DisclosedQtycls").show();
						    	
								  $('.pricecls').prop('disabled',false);
								  $(".nrmlcls").addClass('active')  
								 
							   		 if ($('.nrmlcls').hasClass('active') ) {
							   			 $('.nrmlcls').siblings().removeClass('active');
							    	  }
							   		if ($('.miscls').hasClass('active') ) {
							  			 $('.miscls').siblings().removeClass('active');
							   	  }
						    	
						    	 if ($('li.daycls').hasClass('active') ) {
						     		$('.DisclosedQtycls').prop('disabled',true);
						     		$('.Triggerpricecls').hide();
						     		$('.DTDValiditycls').hide();
						     	 }
						    	 if ($('li.ioccls').hasClass('active') ) {
						      		$('.DisclosedQtycls').prop('disabled',true);
						      		$('.Triggerpricecls').hide();
						      		$('.DTDValiditycls').hide();
						      	 }
						    	 $(".gtccls").hide();
						    	 $(".gtdcls").hide();
						    	 $(".gttcls").hide();
						    	
						    	 
						    		 $('.Validitycls').show();
						    		 $('.Coverordertypecls').hide();
						    	 
						    		 $("#lmtId").show();
								   	 $("#mktId").show();
								   	 $("#slId").show();
								   	 $("#sl-mId").show();
						   	 
						   	 	if ($('.lmtcls').hasClass('active') ) { //Price Type ( L or SL )
						   	 	$('.pricecls').prop('disabled',false);
								$('.DisclosedQtycls').prop('disabled',false);     		
						 		$('.Triggerpricecls').hide();
								 }
						   	 	if ($('.mktcls').hasClass('active') ) { //Price Type ( L or SL )
						   	 	$('.pricecls').prop('disabled',true);
								$('.DisclosedQtycls').prop('disabled',false);     		
						 		$('.Triggerpricecls').hide();
								 }
						   	 	if ($('.slcls').hasClass('active') ) { //Price Type ( L or SL )
						   	 	$('.Triggerpricecls').show();
						  		$('.DisclosedQtycls').prop('disabled',false);
								 }
								 if ($('.slmcls').hasClass('active') ) { //Price Type ( L or SL )
									 $('.NonCoverOrderDivcls').show();
							    		$('.DisclosedQtycls').prop('disabled',false);
							    		$('.pricecls').prop('disabled',true);
							      		$('.Triggerpricecls').show();
								 }
						   	 
						      }
							  
							//=======  Regular NSE END =======
							  				
							  
								//=======  AMO Order NSE START =======
							  
							  
							  if ($('.AfterMarketOrdcls').hasClass('active') ) {
									
									$('.pricecls').prop('disabled',false);
									 $('.CoverOrderrightsideDivcls').hide();
						        	  $('.NonCoverOrderDivcls').show();
						        	  $('.Productscls').show();
						        	  $('.Bracketordertextboxcls').hide();
						       	
						        	  	$(".daycls").show();
									   	 $(".ioccls").show();
									   	 $(".gtccls").hide();
									   	 $(".gtdcls").hide();
									   	 $(".gttcls").hide();
									   	 
							        
							    		$('.DisclosedQtycls').prop('disabled',false);
							    		$(".DisclosedQtycls").show();
						       	
							    		 $('.pricecls').prop('disabled',false);
										  $(".cnccls").addClass('active')    		 
									   		 if ($('.cnccls').hasClass('active') ) {
									   			 $('.cnccls').siblings().removeClass('active');
									    	  }
									   		if ($('.miscls').hasClass('active') ) {
									  			 $('.miscls').siblings().removeClass('active');
									   	  }
						       	
						       	 if ($('.daycls').hasClass('active') ) {
						        		$('.DisclosedQtycls').prop('disabled',true);
						        		$('.Triggerpricecls').hide();
						        		$('.DTDValiditycls').hide();
						        	 }
						       	 if ($('.ioccls').hasClass('active') ) {
						         		$('.DisclosedQtycls').prop('disabled',true);
						         		$('.Triggerpricecls').hide();
						         		$('.DTDValiditycls').hide();
						         	 }
						       	 if ($('.gtccls').hasClass('active') ) {
						          		$('.DisclosedQtycls').prop('disabled',true);
						          		$('.Triggerpricecls').hide();
						          		$('.DTDValiditycls').hide();
						          	 }
						       	 
						       	if ($('.gtdcls').hasClass('active') ) {
						       		
						        		$('.DisclosedQtycls').prop('disabled',true);
						        		$('.Triggerpricecls').hide();
						        		$('.DTDValiditycls').show();
						        		
						        		$(".date_item").show();
						         		$("#datepickerbuysell").prop("disabled", false);
						         		
						         		  $('#datepickerbuysell').datepicker({
						    	  
						    		 	    dateFormat: 'd M yy',
						    		 	    minDate: new Date(),
						    		 	    defaultDate:  new Date(),
						    	    
						         		  	}).datepicker('setDate',new Date())
						         	
						          }
						    		else{
						    		      $(".date_item").hide();
						    		      $("#datepicker").prop("disabled", true);
						    		    }
						       	if ($('.gttcls').hasClass('active') ) {
						       		
						        		$('.DisclosedQtycls').prop('disabled',true);
						        		$('.Triggerpricecls').hide();
						        		$('.DTDValiditycls').hide();
						        		
						        	 }
						       	 
						       	 $('.Validitycls').show();
						       	$('.Coverordertypecls').hide();
						       	 
						       	 $("#lmtId").show();
						      	 $("#mktId").show();
						      	 $("#slId").show();
						      	 $("#sl-mId").show();
						      	 
						      	 //$(".lmtcls").addClass('active')

						   	 	if ($('.lmtcls').hasClass('active') ) { //Price Type ( L or SL )
						   	   	 	$('.pricecls').prop('disabled',false);
						   			$('.DisclosedQtycls').prop('disabled',false);     		
						   	 		$('.Triggerpricecls').hide();
						   			 }
						   	   	 	if ($('.mktcls').hasClass('active') ) { //Price Type ( L or SL )
						   	   	 	$('.pricecls').prop('disabled',true);
						   			$('.DisclosedQtycls').prop('disabled',false);     		
						   	 		$('.Triggerpricecls').hide();
						   	 	
						   			 }
						   	   	 	if ($('.slcls').hasClass('active') ) { //Price Type ( L or SL )
						   	   	 	$('.Triggerpricecls').show();
						   	  		$('.DisclosedQtycls').prop('disabled',false);
						   	  	
						   			 }
						   			 if ($('.slmcls').hasClass('active') ) { //Price Type ( L or SL )
						   				 $('.NonCoverOrderDivcls').show();
						   		    		$('.DisclosedQtycls').prop('disabled',false);
						   		    		$('.pricecls').prop('disabled',true);
						   		      		$('.Triggerpricecls').show();
						   		      	
						   			 }
						      	 
						         }
							  
								//=======  AMO Order NSE END =======
							
							  
							  //NSE TICK SIZE
							  	document.getElementById("nseticksizehiddval").value=jsonObject[i].properties.nseTickSize;
							  
							  //NSE
								document.getElementById("nseexpirydatehiddval").innerHTML=jsonObject[i].properties.nseExDate;
								document.getElementById("nseexpirydatehiddval").value=jsonObject[i].properties.nseExDate;	
								document.getElementById("nseSerieshiddval").value=jsonObject[i].properties.nseSeries
								
							  	document.getElementById("stocklabelId").innerHTML=jsonObject[i].properties.nseSymbol+"-"+jsonObject[i].properties.nseSeries+" "+jsonObject[i].properties.nseExchange;
								document.getElementById("scripthiddval").value=jsonObject[i].properties.nseSymbol+"-"+jsonObject[i].properties.nseSeries;
							
							
						}
						
						else  if(jsonObject[i].properties.nfoExchange==='NFO'){	
							
							//NFO
							document.getElementById("nfoexpirydatelabelId").innerHTML=jsonObject[i].properties.nfoexpiry_date;
							
							
							var scriptName;
		                  	var myDate = new Date(jsonObject[i].properties.nfoexpiry_date);
		       	            if(jsonObject[i].properties.nfoinstrument_name=="FUTIDX" || jsonObject[i].properties.nfoinstrument_name=="FUTSTK" ){
		       	            scriptName=myDate.getDate() +monthNames[myDate.getMonth()]+" "+"FUT"+" "+jsonObject[i].properties.nfoExchange;
		       	            }else{
		       	            scriptName=myDate.getDate() +monthNames[myDate.getMonth()]+" "+jsonObject[i].properties.nfostrike_price+" "+jsonObject[i].properties.nfooption_type+" "+jsonObject[i].properties.nfoExchange;
		       	            }
		 	        	
		 	        	displayname=jsonObject[i].properties.nfoSymbol;
		 	        	
	                     document.getElementById("scriptNamehiddval").value=scriptName;
						
						document.getElementById("displaynamehiddval").value=displayname;
							
							$("#NrmlId").show();
							$("#cncId").hide();
							$("#MisId").show();
							
							
							
						   	 
							$(".nrmlcls").addClass('active')    		 
					   		 if ($('.nrmlcls').hasClass('active') ) {
					   			 $('.nrmlcls').siblings().removeClass('active');
					    	  }
							   		 
					   		 if ($('.cnccls').hasClass('active') ) {
					   			 $('.cnccls').siblings().removeClass('active');
					    	  }
					   		if ($('.miscls').hasClass('active') ) {
					  			 $('.miscls').siblings().removeClass('active');
					   	  }
					   		
							
							$(".BracketOrdcls").hide();
							$(".CoverOrdcls").hide();
							
							
								$(".RegularOrdcls").addClass('active')  
							 
					   		 if ($('.RegularOrdcls').hasClass('active') ) {
					   			 $('.RegularOrdcls').siblings().removeClass('active');
					    	  }
					   		if ($('.AfterMarketOrdcls').hasClass('active') ) {
					  			 $('.AfterMarketOrdcls').siblings().removeClass('active');
					   	  }
					   		
							//=======  Regular ORDER NSE START =======
							
							  if ($('li.RegularOrdcls').hasClass('active') ) {
								  	 $(".daycls").show();
								   	 $(".ioccls").show();
								   	 $(".gtccls").hide();
								   	 $(".gtdcls").hide();
								   	 $(".gttcls").hide();
								   	 
						    	  $('.CoverOrderrightsideDivcls').hide();
						     	  $('.NonCoverOrderDivcls').show();
						    	  $('.Productscls').show();
						    	  $('.Bracketordertextboxcls').hide();     	
						    	
						    	 // $('.pricecls').prop('disabled',false);
								  $('.DisclosedQtycls').prop('disabled',false);
								  $(".DisclosedQtycls").show();
						    	
								  $('.pricecls').prop('disabled',false);
									$('li.nrmlcls').hasClass('active')
						    	
						    	 if ($('.daycls').hasClass('active') ) {
						     		$('.DisclosedQtycls').prop('disabled',true);
						     		$('.Triggerpricecls').hide();
						     		$('.DTDValiditycls').hide();
						     	 }
						    	 if ($('.ioccls').hasClass('active') ) {
						      		$('.DisclosedQtycls').prop('disabled',true);
						      		$('.Triggerpricecls').hide();
						      		$('.DTDValiditycls').hide();
						      	 }
						    	 $(".gtccls").hide();
						    	 $(".gtdcls").hide();
						    	 $(".gttcls").hide();
						    	
						    	 
						    		 $('.Validitycls').show();
						    		 $('.Coverordertypecls').hide();
						    	 
						    		 $("#lmtId").show();
								   	 $("#mktId").show();
								   	 $("#slId").show();
								   	 $("#sl-mId").show();
						   	 
						   	 	if ($('.lmtcls').hasClass('active') ) { //Price Type ( L or SL )
						   	 	$('.pricecls').prop('disabled',false);
								$('.DisclosedQtycls').prop('disabled',false);     		
						 		$('.Triggerpricecls').hide();
								 }
						   	 	if ($('.mktcls').hasClass('active') ) { //Price Type ( L or SL )
						   	 	$('.pricecls').prop('disabled',true);
								$('.DisclosedQtycls').prop('disabled',false);     		
						 		$('.Triggerpricecls').hide();
								 }
						   	 	if ($('.slcls').hasClass('active') ) { //Price Type ( L or SL )
						   	 	$('.Triggerpricecls').show();
						  		$('.DisclosedQtycls').prop('disabled',false);
								 }
								 if ($('.slmcls').hasClass('active') ) { //Price Type ( L or SL )
									 $('.NonCoverOrderDivcls').show();
							    		$('.DisclosedQtycls').prop('disabled',false);
							    		$('.pricecls').prop('disabled',true);
							      		$('.Triggerpricecls').show();
								 }
						   	 
						      }
							  
							//=======  Regular NSE END =======
							  				
							  
								//=======  AMO Order NSE START =======
							  
							  
							  if ($('.AfterMarketOrdcls').hasClass('active') ) {
									
								  
								     $(".daycls").show();
								   	 $(".ioccls").show();
								   	 $(".gtccls").hide();
								   	 $(".gtdcls").hide();
								   	 $(".gttcls").hide();
								   	 
									$('.pricecls').prop('disabled',false);
									 $('.CoverOrderrightsideDivcls').hide();
						        	  $('.NonCoverOrderDivcls').show();
						       	  $('.Productscls').show();
						       	  $('.Bracketordertextboxcls').hide();
						       	
							        	$('.pricecls').prop('disabled',false);
							    		$('.DisclosedQtycls').prop('disabled',false);
							    		$(".DisclosedQtycls").show();
						       	
						     
						       	
						       	 if ($('.daycls').hasClass('active') ) {
						        		$('.DisclosedQtycls').prop('disabled',true);
						        		$('.Triggerpricecls').hide();
						        		$('.DTDValiditycls').hide();
						        	 }
						       	 if ($('.ioccls').hasClass('active') ) {
						         		$('.DisclosedQtycls').prop('disabled',true);
						         		$('.Triggerpricecls').hide();
						         		$('.DTDValiditycls').hide();
						         	 }
						       	 if ($('.gtccls').hasClass('active') ) {
						          		$('.DisclosedQtycls').prop('disabled',true);
						          		$('.Triggerpricecls').hide();
						          		$('.DTDValiditycls').hide();
						          	 }
						       	 
						       	if ($('.gtdcls').hasClass('active') ) {
						       		
						        		$('.DisclosedQtycls').prop('disabled',true);
						        		$('.Triggerpricecls').hide();
						        		
						        		$('.DTDValiditycls').show();
							     		$(".date_item").show();
							     		$("#datepickerbuysell").prop("disabled", false);
							     		
							     		  $('#datepickerbuysell').datepicker({
						   	  
									 	    dateFormat: 'd M yy',
									 	    minDate: new Date(),
									 	    defaultDate:  new Date(),
						 	    
							     		  	}).datepicker('setDate',new Date())
							     	
						        	
							  }
						 		else{
						 		      $(".date_item").hide();
						 		      $("#datepicker").prop("disabled", true);
						 		    }
						       	if ($('.gttcls').hasClass('active') ) {
						       		
						        		$('.DisclosedQtycls').prop('disabled',true);
						        		$('.Triggerpricecls').hide();
						        		$('.DTDValiditycls').hide();
						        		
						        	 }
						       	 
						       	 $('.Validitycls').show();
						       	$('.Coverordertypecls').hide();
						       	 
						       	 $("#lmtId").show();
						      	 $("#mktId").show();
						      	 $("#slId").show();
						      	 $("#sl-mId").show();
						      	 
						      	 //$(".lmtcls").addClass('active')

						   	 	if ($('.lmtcls').hasClass('active') ) { //Price Type ( L or SL )
						   	   	 	$('.pricecls').prop('disabled',false);
						   			$('.DisclosedQtycls').prop('disabled',false);     		
						   	 		$('.Triggerpricecls').hide();
						   			 }
						   	   	 	if ($('.mktcls').hasClass('active') ) { //Price Type ( L or SL )
						   	   	 	$('.pricecls').prop('disabled',true);
						   			$('.DisclosedQtycls').prop('disabled',false);     		
						   	 		$('.Triggerpricecls').hide();
						   	 	
						   			 }
						   	   	 	if ($('.slcls').hasClass('active') ) { //Price Type ( L or SL )
						   	   	 	$('.Triggerpricecls').show();
						   	  		$('.DisclosedQtycls').prop('disabled',false);
						   	  	
						   			 }
						   			 if ($('.slmcls').hasClass('active') ) { //Price Type ( L or SL )
						   				 $('.NonCoverOrderDivcls').show();
						   		    		$('.DisclosedQtycls').prop('disabled',false);
						   		    		$('.pricecls').prop('disabled',true);
						   		      		$('.Triggerpricecls').show();
						   		      	
						   			 }
						      	 
						         }
							  
								//=======  AMO Order NSE END =======
							  
							  
							
							
							var myDate = new Date(jsonObject[i].properties.nfoexpiry_date);
							
							var shortYear = myDate.getFullYear(); 
							// Add this line
							var twoDigitYear = shortYear.toString().substr(-2);
							var dd = myDate.getDate();
							var nfoexpirymyDate ='';
							
							  nfoexpirymyDate = +dd+monthNames[myDate.getMonth()]+twoDigitYear;
							 
							  nfoexpirymyDatedisplay=dd+"-"+monthNames[myDate.getMonth()]+"-"+myDate.getFullYear();
							
								//NfoInstrumentName
									document.getElementById("NfoInstrumentNamehiddval").value=jsonObject[i].properties.nfoinstrument_name;
									
									document.getElementById("nfoexpirydatehiddval").value=nfoexpirymyDatedisplay;
									
									//Nfooption_type
									document.getElementById("nfooption_typehiddval").value=jsonObject[i].properties.nfooption_type;
									
							  
							  //alert("nfooption_type : "+nfooption_type+" nfoinstrument_name : "+nfoinstrument_name); 
							  
							if(jsonObject[i].properties.nfoinstrument_name=="FUTIDX" || jsonObject[i].properties.nfoinstrument_name=="FUTSTK" ){
								if(nfooption_type=="XX"){
								if(dd<10) 
								{
									
									//	dd='0'+dd;
									// nfoexpirymyDate = dd.concat(monthNames[myDate.getMonth()]+twoDigitYear);						 
									 document.getElementById("stocklabelId").innerHTML=jsonObject[i].properties.nfoSymbol+" "+"FUT"+" "+jsonObject[i].properties.nfoExchange;
									 document.getElementById("scripthiddval").value=jsonObject[i].properties.nfoSymbol+"0"+nfoexpirymyDate+"F";
								}else {
									document.getElementById("stocklabelId").innerHTML=jsonObject[i].properties.nfoSymbol+" "+"FUT"+" "+jsonObject[i].properties.nfoExchange;
									document.getElementById("scripthiddval").value=jsonObject[i].properties.nfoSymbol+nfoexpirymyDate+"F";
								} 	
								}
							}
							
							else if (jsonObject[i].properties.nfoinstrument_name=="OPTIDX" || jsonObject[i].properties.nfoinstrument_name=="OPTSTK" ){
								
								
								var num=jsonObject[i].properties.nfostrike_price/100;				
								
								var DecimalmcxStrikePrice= num.toFixed(2);
								document.getElementById('decimalhiddval').value=(Math.round(DecimalmcxStrikePrice * 100) / 100);
								
								var decimalVal=$("#decimalhiddval").val();
								
								//document.getElementById('decimalhiddval').value=nfostrike_price;
								
								//document.getElementById('nfoTicksizehiddval').value=nfoTicksize;
								
								if(jsonObject[i].properties.nfooption_type=="PE"){
									
								
								if(dd<10) 
								{
								  //  dd='0'+dd;
									// nfoexpirymyDate = dd.concat(monthNames[myDate.getMonth()]+twoDigitYear);
								document.getElementById("stocklabelId").innerHTML=jsonObject[i].properties.nfosymbol+" "+decimalVal+" "+jsonObject[i].properties.nfoExchange;
								document.getElementById("scripthiddval").value=jsonObject[i].properties.nfosymbol+"0"+nfoexpirymyDate+"P"+decimalVal;
								}else{
									
									document.getElementById("stocklabelId").innerHTML=jsonObject[i].properties.nfoSymbol+" "+decimalVal+" "+jsonObject[i].properties.nfoExchange;
									document.getElementById("scripthiddval").value=jsonObject[i].properties.nfoSymbol+nfoexpirymyDate+"P"+decimalVal;
								}
								}
								else if(jsonObject[i].properties.nfooption_type=="CE"){
									
									
									if(dd<10) 
									{
									  //  dd='0'+dd;
										// nfoexpirymyDate = dd.concat(monthNames[myDate.getMonth()]+twoDigitYear);
									document.getElementById("stocklabelId").innerHTML=jsonObject[i].properties.nfosymbol+" "+decimalVal+" "+jsonObject[i].properties.nfoExchange;
									document.getElementById("scripthiddval").value=jsonObject[i].properties.nfosymbol+"0"+nfoexpirymyDate+"C"+decimalVal;
									}else{							
										document.getElementById("stocklabelId").innerHTML=jsonObject[i].properties.nfoSymbol+" "+decimalVal+" "+jsonObject[i].properties.nfoExchange;
										document.getElementById("scripthiddval").value=jsonObject[i].properties.nfoSymbol+nfoexpirymyDate+"C"+decimalVal;
									}					
									
								}
								
							}		
						}


						$('.CoverOrderrightsideDivcls').hide();
						$('.NonCoverOrderDivcls').show();
						$('.DisclosedQtycls').prop('disabled',false);
						$(".DisclosedQtycls").show();
					    $('.Productscls').show();
					    $('.Bracketordertextboxcls').hide();
					    $('.Validitycls').show();
					    $('.Triggerpricecls').hide();
					   	$("#lmtId").show();
						$("#mktId").show();
						$("#slId").show();
						$("#sl-mId").show();
				  
				 
			$(".buysellcatgry li").on('click', function(){
					 
			       $(this).siblings().removeClass('active');
			       $(this).addClass('active')
			       
			  /* $('#datepicker').datepicker({
			   dateFormat: 'd M yy',
			   minDate: new Date(),
			   defaultDate:  new Date(),

			 }).datepicker('setDate',new Date());*/
			   
			 //buy-sell Order window
			     
			    
			      if ($('li.RegularOrdcls').hasClass('active') ) {
			    	  $('.CoverOrderrightsideDivcls').hide();
			     	  $('.NonCoverOrderDivcls').show();
			    	  $('.Productscls').show();
			    	  $('.Bracketordertextboxcls').hide();     	
			    	
			    	 // $('.pricecls').prop('disabled',false);
					  $('.DisclosedQtycls').prop('disabled',false);
					  $(".DisclosedQtycls").show();
			    	
			    
			    	
			    	 if ($('li.daycls').hasClass('active') ) {
			     		$('.DisclosedQtycls').prop('disabled',true);
			     		$('.Triggerpricecls').hide();
			     		$('.DTDValiditycls').hide();
			     	 }
			    	 if ($('li.ioccls').hasClass('active') ) {
			      		$('.DisclosedQtycls').prop('disabled',true);
			      		$('.Triggerpricecls').hide();
			      		$('.DTDValiditycls').hide();
			      	 }
			    	 if ($('li.gtccls').hasClass('active') ) {
			       		$('.DisclosedQtycls').prop('disabled',true);
			       		$('.Triggerpricecls').hide();
			       		$('.DTDValiditycls').hide();
			       	 }
			    	 
			    	if ($('li.gtdcls').hasClass('active') ) {
			    		
			     		$('.DisclosedQtycls').prop('disabled',true);
			     		$('.Triggerpricecls').hide();
			     		
			     		$('.DTDValiditycls').show();
			     		$(".date_item").show();
			     		$("#datepickerbuysell").prop("disabled", false);
			     		
			     		  $('#datepickerbuysell').datepicker({
				  
					 	    dateFormat: 'd M yy',
					 	    minDate: new Date(),
					 	    defaultDate:  new Date(),
				    
			     		  	}).datepicker('setDate',new Date())
			     	
			      }
					else{
					      $(".date_item").hide();
					      $("#datepicker").prop("disabled", true);
					    }
			    	if ($('li.gttcls').hasClass('active') ) {
			    		
			     		$('.DisclosedQtycls').prop('disabled',true);
			     		$('.Triggerpricecls').hide();
			     		$('.DTDValiditycls').hide();
			     		
			     	 }
			    	 
			    		 $('.Validitycls').show();
			    		 $('.Coverordertypecls').hide();
			    	 
			    		 $("#lmtId").show();
					   	 $("#mktId").show();
					   	 $("#slId").show();
					   	 $("#sl-mId").show();
			   	 
			   	 	if ($('li.lmtcls').hasClass('active') ) { //Price Type ( L or SL )
			   	 	$('.pricecls').prop('disabled',false);
					$('.DisclosedQtycls').prop('disabled',false);     		
			 		$('.Triggerpricecls').hide();
					 }
			   	 	if ($('li.mktcls').hasClass('active') ) { //Price Type ( L or SL )
			   	 	$('.pricecls').prop('disabled',true);
					$('.DisclosedQtycls').prop('disabled',false);     		
			 		$('.Triggerpricecls').hide();
					 }
			   	 	if ($('li.slcls').hasClass('active') ) { //Price Type ( L or SL )
			   	 	$('.Triggerpricecls').show();
			  		$('.DisclosedQtycls').prop('disabled',false);
					 }
					 if ($('li.slmcls').hasClass('active') ) { //Price Type ( L or SL )
						 $('.NonCoverOrderDivcls').show();
				    		$('.DisclosedQtycls').prop('disabled',false);
				    		$('.pricecls').prop('disabled',true);
				      		$('.Triggerpricecls').show();
					 }
			   	 
			      }
			      else if ($('li.BracketOrdcls').hasClass('active') ) {
			    	  
			   		 $(".lmtcls").addClass('active')    		 
			   		 if ($('.slcls').hasClass('active') ) {
			   			 $('.slcls').siblings().removeClass('active');
			    	  }
			   		if ($('.lmtcls').hasClass('active') ) {
			  			 $('.lmtcls').siblings().removeClass('active');
			   	  }
			   	 
					   	 $(".DisclosedQtycls").disabled = false;
					   	 $(".DisclosedQtycls").show();
					   	 $('.Productscls').hide();
					   	 $('.pricecls').prop('disabled',false);
					   	 $('.Bracketordertextboxcls').show();
					   	 $('.Validitycls').hide();    	 
					   	 $('.CoverOrderrightsideDivcls').hide();
					   	 $('.NonCoverOrderDivcls').show();
					   	 $("#lmtId").show();
					   	 $("#mktId").hide();
					   	 $("#slId").show();
					   	 $("#sl-mId").hide();
					   	 $('.Coverordertypecls').hide();
					   	 $('.Triggerpricecls').hide();
					   	 
					   	 if ($('li.lmtcls').hasClass('active') ) { //Price Type ( L or SL )
					   		 $('.Triggerpricecls').hide();
					 		 }
					 		 if ($('li.slcls').hasClass('active') ) { //Price Type ( L or SL )
					 			$('.Triggerpricecls').show();
					 		 }
					 		
					      }      
			      
					      else if ($('li.CoverOrdcls').hasClass('active') ) {
					   	  // $(".DisclosedQtycls").disabled = false;
					   	   $(".DisclosedQtycls").hide();
					   	  $('.Productscls').hide();
					   	 
					   	 $('.Bracketordertextboxcls').hide();
					   	 $('.Validitycls').hide();
					   	 $('.Triggerpricecls').show();
					   	
					   	 $('.CoverOrderrightsideDivcls').show();
					   	 $('.NonCoverOrderDivcls').hide();
					   	 $("#CoverOrderlmtId").show();
					   	 $("#CoverOrdermktId").show();
					   	 $("#CoverOrderslId").hide();
					   	 $("#CoverOrdersl-mId").hide();
					   	 
					   	 $(".lmtcls").addClass('active')
					   	  if ($('.mktcls').hasClass('active') ) {
					   			 $('.mktcls').siblings().removeClass('active');
					   			 $('.pricecls').prop('disabled',true);
			    	  }
			   		if ($('.lmtcls').hasClass('active') ) {
			  			 $('.lmtcls').siblings().removeClass('active');
			  			 $('.pricecls').prop('disabled',false);
			   	  }
			   	 
			   	 
			    }
			      else if ($('li.AfterMarketOrdcls').hasClass('active') ) {       	   
			         	
			   	   	  $('.CoverOrderrightsideDivcls').hide();
			        	  $('.NonCoverOrderDivcls').show();
			       	  $('.Productscls').show();
			       	  $('.Bracketordertextboxcls').hide();
			       	
				        	$('.pricecls').prop('disabled',false);
				    		$('.DisclosedQtycls').prop('disabled',false);
				    		$(".DisclosedQtycls").show();
			       	
			     
			       	
			       	 if ($('.daycls').hasClass('active') ) {
			        		$('.DisclosedQtycls').prop('disabled',true);
			        		$('.Triggerpricecls').hide();
			        		$('.DTDValiditycls').hide();
			        	 }
			       	 if ($('.ioccls').hasClass('active') ) {
			         		$('.DisclosedQtycls').prop('disabled',true);
			         		$('.Triggerpricecls').hide();
			         		$('.DTDValiditycls').hide();
			         	 }
			       	 if ($('.gtccls').hasClass('active') ) {
			          		$('.DisclosedQtycls').prop('disabled',true);
			          		$('.Triggerpricecls').hide();
			          		$('.DTDValiditycls').hide();
			          	 }
			       	 
			       	if ($('.gtdcls').hasClass('active') ) {
			       		
			        		$('.DisclosedQtycls').prop('disabled',true);
			        		$('.Triggerpricecls').hide();
			        		$('.DTDValiditycls').show();
			        		
				     		$(".date_item").show();
				     		$("#datepickerbuysell").prop("disabled", false);
				     		
				     		  $('#datepickerbuysell').datepicker({
			   	  
						 	    dateFormat: 'd M yy',
						 	    minDate: new Date(),
						 	    defaultDate:  new Date(),
			 	    
				     		  	}).datepicker('setDate',new Date())
				     	 
			        	 }
			      		
					else{
					      $(".date_item").hide();
					      $("#datepicker").prop("disabled", true);
					    }
			       	if ($('.gttcls').hasClass('active') ) {
			       		
			        		$('.DisclosedQtycls').prop('disabled',true);
			        		$('.Triggerpricecls').hide();
			        		$('.DTDValiditycls').hide();
			        		
			        	 }
			       	 
			       	 $('.Validitycls').show();
			       	$('.Coverordertypecls').hide();
			       	 
			       	 $("#lmtId").show();
			      	 $("#mktId").show();
			      	 $("#slId").show();
			      	 $("#sl-mId").show();
			      	 
			      	 //$(".lmtcls").addClass('active')

			   	 	if ($('.lmtcls').hasClass('active') ) { //Price Type ( L or SL )
			   	   	 	$('.pricecls').prop('disabled',false);
			   			$('.DisclosedQtycls').prop('disabled',false);     		
			   	 		$('.Triggerpricecls').hide();
			   			 }
			   	   	 	if ($('.mktcls').hasClass('active') ) { //Price Type ( L or SL )
			   	   	 	$('.pricecls').prop('disabled',true);
			   			$('.DisclosedQtycls').prop('disabled',false);     		
			   	 		$('.Triggerpricecls').hide();
			   	 	
			   			 }
			   	   	 	if ($('.slcls').hasClass('active') ) { //Price Type ( L or SL )
			   	   	 	$('.Triggerpricecls').show();
			   	  		$('.DisclosedQtycls').prop('disabled',false);
			   	  	
			   			 }
			   			 if ($('.slmcls').hasClass('active') ) { //Price Type ( L or SL )
			   				 $('.NonCoverOrderDivcls').show();
			   		    		$('.DisclosedQtycls').prop('disabled',false);
			   		    		$('.pricecls').prop('disabled',true);
			   		      		$('.Triggerpricecls').show();
			   		      	
			   			 }
			      	 
			         }
			       
			   })
			  
			  //=== Required margin Function === 
			   SpanCalculationFunction();


			   document.getElementById("buyId").addEventListener("click",PlaceOrderbuyfun);    
			   document.getElementById("sellId").addEventListener("click",PlaceOrdersellfun); 
			   document.getElementById("TriggerpriceId").addEventListener("keyup",TriggerPriceFunction);
			   document.getElementById("priceId").addEventListener("keyup",myPriceFunction);
			   document.getElementById("DiscquantityId").addEventListener("keyup",mydiscqtyFunction);
			   
			   
			   $(document.body).on('click', '.number-spinner .ns-btn a' ,function(){

					 
				    var btn = $(this),
				      oldValue = btn.closest('.number-spinner').find('input').val().trim(),
				      newVal = 0;
				   // alert("oldValue : "+oldValue)
				    if (btn.attr('data-dir') === 'up') {
				    	
				      newVal = parseInt(oldValue) + 1;
				      //alert("newVal : "+newVal)
				    } else {
				      if (oldValue > 1) {
				        newVal = parseInt(oldValue) - 1;
				        //alert("newVal : "+newVal)
				      } else {
				        newVal = 1;
				      }
				    }
				    btn.closest('.number-spinner').find('input').val(newVal);
				  });
				  $('.number-spinner>input').keypress(function (evt) {
				    evt = (evt) ? evt : window.event;
				    var charCode = (evt.which) ? evt.which : evt.keyCode;
				    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
				      return false;
				    }
				    return true;
				  });
				  
				
				
				//END buy/sell
	   
	   
        		


       // } //for loop end
		
		
	/*},
	error:function(){
	//	alert("getMarketwatchListById Error");
		
		}	
});*/
			   
			   
}




$('.CoverOrderrightsideDivcls').hide();
$('.NonCoverOrderDivcls').show();
$('.DisclosedQtycls').prop('disabled',false);
$(".DisclosedQtycls").show();
$('.Productscls').show();
$('.Bracketordertextboxcls').hide();
$('.Validitycls').show();
$('.Triggerpricecls').hide();
	
	$("#lmtId").show();
	$("#mktId").show();
	$("#slId").show();
	$("#sl-mId").show();


$(".buysellcatgry li").on('click', function(){

$(this).siblings().removeClass('active');
$(this).addClass('active')

/* $('#datepicker').datepicker({
dateFormat: 'd M yy',
minDate: new Date(),
defaultDate:  new Date(),

}).datepicker('setDate',new Date());*/

//buy-sell Order window


if ($('li.RegularOrdcls').hasClass('active') ) {
$('.CoverOrderrightsideDivcls').hide();
$('.NonCoverOrderDivcls').show();
$('.Productscls').show();
$('.Bracketordertextboxcls').hide();     	

// $('.pricecls').prop('disabled',false);
$('.DisclosedQtycls').prop('disabled',false);
$(".DisclosedQtycls").show();



if ($('li.daycls').hasClass('active') ) {
	$('.DisclosedQtycls').prop('disabled',true);
	$('.Triggerpricecls').hide();
	$('.DTDValiditycls').hide();
}
if ($('li.ioccls').hasClass('active') ) {
	$('.DisclosedQtycls').prop('disabled',true);
	$('.Triggerpricecls').hide();
	$('.DTDValiditycls').hide();
}
if ($('li.gtccls').hasClass('active') ) {
	$('.DisclosedQtycls').prop('disabled',true);
	$('.Triggerpricecls').hide();
	$('.DTDValiditycls').hide();
}

if ($('li.gtdcls').hasClass('active') ) {

	$('.DisclosedQtycls').prop('disabled',true);
	$('.Triggerpricecls').hide();
	
	$('.DTDValiditycls').show();
	$(".date_item").show();
	$("#datepickerbuysell").prop("disabled", false);
	
	  $('#datepickerbuysell').datepicker({

	    dateFormat: 'd M yy',
	    minDate: new Date(),
	    defaultDate:  new Date(),

	  	}).datepicker('setDate',new Date())

}
else{
  $(".date_item").hide();
  $("#datepicker").prop("disabled", true);
}
if ($('li.gttcls').hasClass('active') ) {

	$('.DisclosedQtycls').prop('disabled',true);
	$('.Triggerpricecls').hide();
	$('.DTDValiditycls').hide();
	
}

 $('.Validitycls').show();
 $('.Coverordertypecls').hide();

 $("#lmtId").show();
	 $("#mktId").show();
	 $("#slId").show();
	 $("#sl-mId").show();

if ($('li.lmtcls').hasClass('active') ) { //Price Type ( L or SL )
$('.pricecls').prop('disabled',false);
$('.DisclosedQtycls').prop('disabled',false);     		
$('.Triggerpricecls').hide();
}
if ($('li.mktcls').hasClass('active') ) { //Price Type ( L or SL )
$('.pricecls').prop('disabled',true);
$('.DisclosedQtycls').prop('disabled',false);     		
$('.Triggerpricecls').hide();
}
if ($('li.slcls').hasClass('active') ) { //Price Type ( L or SL )
$('.Triggerpricecls').show();
$('.DisclosedQtycls').prop('disabled',false);
}
if ($('li.slmcls').hasClass('active') ) { //Price Type ( L or SL )
 $('.NonCoverOrderDivcls').show();
	$('.DisclosedQtycls').prop('disabled',false);
	$('.pricecls').prop('disabled',true);
		$('.Triggerpricecls').show();
}

}
else if ($('li.BracketOrdcls').hasClass('active') ) {

$(".lmtcls").addClass('active')    		 
if ($('.slcls').hasClass('active') ) {
	 $('.slcls').siblings().removeClass('active');
}
if ($('.lmtcls').hasClass('active') ) {
	 $('.lmtcls').siblings().removeClass('active');
}

	 $(".DisclosedQtycls").disabled = false;
	 $(".DisclosedQtycls").show();
	 $('.Productscls').hide();
	 $('.pricecls').prop('disabled',false);
	 $('.Bracketordertextboxcls').show();
	 $('.Validitycls').hide();    	 
	 $('.CoverOrderrightsideDivcls').hide();
	 $('.NonCoverOrderDivcls').show();
	 $("#lmtId").show();
	 $("#mktId").hide();
	 $("#slId").show();
	 $("#sl-mId").hide();
	 $('.Coverordertypecls').hide();
	 $('.Triggerpricecls').hide();
	 
	 if ($('li.lmtcls').hasClass('active') ) { //Price Type ( L or SL )
		 $('.Triggerpricecls').hide();
		 }
		 if ($('li.slcls').hasClass('active') ) { //Price Type ( L or SL )
			$('.Triggerpricecls').show();
		 }
		
  }      

  else if ($('li.CoverOrdcls').hasClass('active') ) {
	  // $(".DisclosedQtycls").disabled = false;
	   $(".DisclosedQtycls").hide();
	  $('.Productscls').hide();
	 
	 $('.Bracketordertextboxcls').hide();
	 $('.Validitycls').hide();
	 $('.Triggerpricecls').show();
	
	 $('.CoverOrderrightsideDivcls').show();
	 $('.NonCoverOrderDivcls').hide();
	 $("#CoverOrderlmtId").show();
	 $("#CoverOrdermktId").show();
	 $("#CoverOrderslId").hide();
	 $("#CoverOrdersl-mId").hide();
	 
	 $(".lmtcls").addClass('active')
	  if ($('.mktcls').hasClass('active') ) {
			 $('.mktcls').siblings().removeClass('active');
			 $('.pricecls').prop('disabled',true);
}
if ($('.lmtcls').hasClass('active') ) {
	 $('.lmtcls').siblings().removeClass('active');
	 $('.pricecls').prop('disabled',false);
}


}
else if ($('li.AfterMarketOrdcls').hasClass('active') ) {       	   
	
	  $('.CoverOrderrightsideDivcls').hide();
  $('.NonCoverOrderDivcls').show();
 $('.Productscls').show();
 $('.Bracketordertextboxcls').hide();

	$('.pricecls').prop('disabled',false);
	$('.DisclosedQtycls').prop('disabled',false);
	$(".DisclosedQtycls").show();



if ($('.daycls').hasClass('active') ) {
	$('.DisclosedQtycls').prop('disabled',true);
	$('.Triggerpricecls').hide();
	$('.DTDValiditycls').hide();
 }
if ($('.ioccls').hasClass('active') ) {
		$('.DisclosedQtycls').prop('disabled',true);
		$('.Triggerpricecls').hide();
		$('.DTDValiditycls').hide();
	 }
if ($('.gtccls').hasClass('active') ) {
		$('.DisclosedQtycls').prop('disabled',true);
		$('.Triggerpricecls').hide();
		$('.DTDValiditycls').hide();
	 }

if ($('.gtdcls').hasClass('active') ) {
	
	$('.DisclosedQtycls').prop('disabled',true);
	$('.Triggerpricecls').hide();
	$('.DTDValiditycls').show();
	
		$(".date_item").show();
		$("#datepickerbuysell").prop("disabled", false);
		
		  $('#datepickerbuysell').datepicker({

 	    dateFormat: 'd M yy',
 	    minDate: new Date(),
 	    defaultDate:  new Date(),

		  	}).datepicker('setDate',new Date())
	 
 }
	
else{
  $(".date_item").hide();
  $("#datepicker").prop("disabled", true);
}
if ($('.gttcls').hasClass('active') ) {
	
	$('.DisclosedQtycls').prop('disabled',true);
	$('.Triggerpricecls').hide();
	$('.DTDValiditycls').hide();
	
 }

$('.Validitycls').show();
$('.Coverordertypecls').hide();

$("#lmtId").show();
$("#mktId").show();
$("#slId").show();
$("#sl-mId").show();

//$(".lmtcls").addClass('active')

if ($('.lmtcls').hasClass('active') ) { //Price Type ( L or SL )
	 	$('.pricecls').prop('disabled',false);
	$('.DisclosedQtycls').prop('disabled',false);     		
	$('.Triggerpricecls').hide();
	 }
	 	if ($('.mktcls').hasClass('active') ) { //Price Type ( L or SL )
	 	$('.pricecls').prop('disabled',true);
	$('.DisclosedQtycls').prop('disabled',false);     		
	$('.Triggerpricecls').hide();

	 }
	 	if ($('.slcls').hasClass('active') ) { //Price Type ( L or SL )
	 	$('.Triggerpricecls').show();
		$('.DisclosedQtycls').prop('disabled',false);
	
	 }
	 if ($('.slmcls').hasClass('active') ) { //Price Type ( L or SL )
		 $('.NonCoverOrderDivcls').show();
   		$('.DisclosedQtycls').prop('disabled',false);
   		$('.pricecls').prop('disabled',true);
     		$('.Triggerpricecls').show();
     	
	 }

}

})

//=== Required margin Function === 
//SpanCalculationFunction();


document.getElementById("buyId").addEventListener("click",PlaceOrderbuyfun);    
document.getElementById("sellId").addEventListener("click",PlaceOrdersellfun); 
document.getElementById("TriggerpriceId").addEventListener("keyup",TriggerPriceFunction);
document.getElementById("priceId").addEventListener("keyup",myPriceFunction);
document.getElementById("DiscquantityId").addEventListener("keyup",mydiscqtyFunction);

