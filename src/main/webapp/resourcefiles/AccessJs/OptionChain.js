function OptionChainfun(nfoSymbol,exchange,price,nfoinstrument_name){

	
	$('.OptionChainDiv').show();
	
	
	if(price==null){
		price=0;
	}
	alert("symboldisplayname : "+nfoSymbol+" exchange : "+exchange+" price : "+price+" nfoinstrument_name : "+nfoinstrument_name);

	$.ajax({
		type :'POST',
		url  :'OptionChain',	
		dataType: 'json',
		//data    :"displayname="+displayname+"&exchange="+exchange+"&nfoexpiry_date="+nfoexpiry_date+"&nfoinstrument_name="+nfoinstrument_name,
		data : "nfoSymbol="+nfoSymbol+"&exchange="+exchange+"&price="+price+"&nfoinstrument_name="+nfoinstrument_name,
		//data    :"tsym="+symboldisplayname+"&exchange="+exchange+"&strprc="+strprc+"&cnt="+cnt,
		success:function(jsonObject){
			
			
			
			alert("jsonObject : "+JSON.stringify(jsonObject.values));
			
			
			var callOptionbody="";			
			var strikOptionbody="";
			var putOptionbody="";
			
			var pp;
			var tsym;
			var optt;
			var ti;
			var strprc;
			var exch;
			var ls;
			var token;
			
			
			
			if (jQuery.isEmptyObject(jsonObject))
		    {
		       //console.log("Empty Object");
			  	$("#OptionChainDivhideId").show();
				$("#OptionChainDivcallId").show();
				$("#OptionChainbodycallId").hide();
				$("#OptionChaininnerbodycallId").show();
			
		    }
			
			else{
				var scripscallData=jsonObject.values;
				
				
				alert("values leng :"+scripscallData.length);
				
				/* var scripscallData  = jsonObject.scripCalls.scripscallData;
				 var scripsputsData = jsonObject.scripsPuts.scripsputsData;*/
				 
				/*alert("scripscallData "+scripscallData)
				 alert("scripscallData leng :"+scripscallData.length);
				 alert("scripsputsData leng :"+scripsputsData.length);*/
				 
				//Call OptionChain data
				 
				 for (var i = 0; i < scripscallData.length; i++) {
					
					 pp=scripscallData[i].pp;
					 tsym=JSON.stringify(scripscallData[i].tsym);
					 optt=JSON.stringify(scripscallData[i].optt);
					 ti=JSON.stringify(scripscallData[i].ti);
					 
					// alert("pp : "+pp+" tsym : "+tsym+" optt : "+optt+" ti : "+ti) 
					 
					 strprc=JSON.stringify(scripscallData[i].strprc);
					 exch=JSON.stringify(scripscallData[i].exch);
					 ls=JSON.stringify(scripscallData[i].ls);
					 token=JSON.stringify(scripscallData[i].token);
					 
					// alert("strprc : "+strprc+" exch : "+exch+" ls : "+ls+" token : "+token) 
					 	
					  	callOptionbody=callOptionbody+"<tr >";
					  	
					  	callOptionbody=callOptionbody+"<td class='hover_Btns td_green'>" + "1" + "</td>";
					  	
					    callOptionbody=callOptionbody+"<td class='hover_Btns' >";
						callOptionbody=callOptionbody+ "<ul>";
						
						callOptionbody=callOptionbody+ "<li data-bs-toggle='tooltip' data-bs-placement='top' title='Buy'>";
						callOptionbody=callOptionbody+ "<button class='btn btn-lightBlue btn-showbuysell'  type='button' data-modal-type='buy'>B";                        
						callOptionbody=callOptionbody+"</button>";
	                    callOptionbody=callOptionbody+"</li>";
	                    
	                    callOptionbody=callOptionbody+"<li data-bs-toggle='tooltip' data-bs-placement='top' title='Sell'>";
	                    callOptionbody=callOptionbody+"<button class='btn btn-red btn-showbuysell' type='button' data-modal-type='sell'>S";
	                    callOptionbody=callOptionbody+"</button>";
	                    callOptionbody=callOptionbody+"</li>";
	                    
	                    callOptionbody=callOptionbody+"</ul>";	                    
                        callOptionbody=callOptionbody+"</td>";
                        
                        
                        
                        callOptionbody=callOptionbody+"<td class='hover_Btns'>" + "1" + "</td>";	         
	       				callOptionbody=callOptionbody+"<td class='hover_Btns'>" + "2" + "</td>";
	       				callOptionbody=callOptionbody+"<td class='hover_Btns'>" + "3" + "</td>";	
	       				 
	       				 callOptionbody=callOptionbody+"</tr>";
	       				
	                   /* callOptionbody=callOptionbody+"<li data-bs-toggle='tooltip' data-bs-placement='top' title='Market Depth'>";
                        callOptionbody=callOptionbody+"<button class='btn accordion-button' type='button' data-bs-toggle='collapse' data-bs-target='' aria-expanded='false' aria-controls='collapseOne'>";
                        callOptionbody=callOptionbody+"<i class='bi bi-upc-scan'></i>";
                        callOptionbody=callOptionbody+"</button>";
                        callOptionbody=callOptionbody+"</li>";
                      
                        callOptionbody=callOptionbody+"<li data-bs-toggle='tooltip' data-bs-placement='top' title='More'>";
                        callOptionbody=callOptionbody+"<div class='dropdown'>";
                        callOptionbody=callOptionbody+"<button class='btn btn-secondary dropdown-toggle' id='hoverdropdownMenuButton_' data-bs-toggle='dropdown' aria-expanded='false'>";
                        callOptionbody=callOptionbody+ "<i class='bi bi-three-dots-vertical'></i>";
                        callOptionbody=callOptionbody+"</button>";
                        
                        callOptionbody=callOptionbody+ "<ul class='dropdown-menu dropdown-menu-end' aria-labelledby='hoverdropdownMenuButton_'>";
                        callOptionbody=callOptionbody+"<li><a class='dropdown-item' href='#'><i class='bi-alarm'></i> Set price alert</a></li>"; 
                        callOptionbody=callOptionbody+ "<li><a class='dropdown-item' href='#'><i class='bi bi-pin-angle'></i> Pin Ticker ";
                        callOptionbody=callOptionbody+ "<span  id='PintickerPagebuttonIdOne' name='PintickerPagebuttonIdOne'   value='1'>1</span>";
                        callOptionbody=callOptionbody+ "<span id='PintickerPagebuttonIdTwo' name='PintickerPagebuttonIdTwo'    value='2' >2</span>";
                        callOptionbody=callOptionbody+ "</a></li>";
                        callOptionbody=callOptionbody+ "<li><a class='dropdown-item' href='#'><i class='bi bi-info-circle'></i> Symbol info</a>";
                        callOptionbody=callOptionbody+"</li>";*/
	                    
	                    
                       
                        
                			 
				 
				 
				 
				 strikOptionbody=strikOptionbody+"<tr>";			 
				 strikOptionbody=strikOptionbody+"<td class='td_price'>" + strprc + "</td>";	
				 strikOptionbody=strikOptionbody+"</tr>";
				
				 
				 strikOptionbody=strikOptionbody+"<td colspan='1' class='table-active text-center td_blue'>"+"Spot Price"+"<strong>"+35,126.85+"</strong>";
				 strikOptionbody=strikOptionbody+"</td>"
				 strikOptionbody=strikOptionbody+"</tr>"
				 
				 strikOptionbody=strikOptionbody+" <tr>";
//				 strikOptionbody=strikOptionbody+"<td colspan='1' class='table-active text-center td_blue'>" + ">Spot Price" + "<strong>"+ "2" +"</strong>"+ "</td>";	         
				
			 
				 
				      putOptionbody= putOptionbody+"<tr>";			 
					  putOptionbody= putOptionbody+"<td>" + "1" + "</td>";	         
					  putOptionbody= putOptionbody+"<td>" + "2" + "</td>";
					  putOptionbody= putOptionbody+"<td>" + "3"+ "</td>";
					  putOptionbody= putOptionbody+"<td>" + "4" + "</td>";	         
					  putOptionbody= putOptionbody+"</tr>";
		}
				 
				 
				
	         		
			$('#OptionChainbodycallId').html(callOptionbody);
			
			$('#strikOptinChainbodycallId').html(strikOptionbody);
			$('#OptionChainbodyputId').html(putOptionbody);
			
			
			$("#OptionChainDivhideId").show();
			$("#OptionChainDivcallId").show();
			$("#OptionChainbodycallId").show();
			$('#OptionChainbodyputId').show();
			$("#strikOptinChainbodycallId").show();
			$("#OptionChaininnerbodycallId").hide();
			
			}
			
			
			
			/* // Accordion side menu collapse
			  $('.current_rate_lists li .hover_Btns ul li .accordion-button').click(function () {
				  alert("ss")
			    $('.accordion-collapse').removeClass('show');
			  });
			  // Show Buy Sell Modal Control
			  
			  $('.btn-showbuysell').click(function() {
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
			  
			  // $(".btn-showbuysell").click(function() {
			  //   var modalDiv = $('#buySellModal');
			  //   modalDiv.modal({backdrop: false, show: true});
			  //   $('#buySellModal .modal-dialog').draggable({
			  //     handle: "#buySellModal .modal-header"
			  //   });
			  // });
			  $('.drag-checkbox input[type="checkbox"]').change(function () {
			    $('#sideMenuList ul li').each(function () {
			      var ischecked = $(this).find('.form-check-input').is(':checked');
			      if (ischecked) {
			        $('.deleteBtn').removeClass('d-none');
			        return false;
			      } else {
			        $('.deleteBtn').addClass('d-none');
			      }
			    });
			  });
			  $('.btn-showbuysell').click(function () {
			    // console.log('ddddd', $('#buySellModal').height(), $('#buySellModal').width());
			    var modalWidth = $('#buySellModal').width();
			    var modalHeight = $('#buySellModal').height();
			    $('#buySellModal').css('margin-left', ('-' + modalWidth / 2) + 'px');
			    $('#buySellModal').css('margin-top', ('-' + modalHeight / 2) + 'px');
			    var modalDiv = new bootstrap.Modal($('#buySellModal'));
			    modalDiv.show();
			    $('.buySellModal').draggable({
			      handle: ".modal-header"
			    });
			    // if (typeof draggable !== 'undefined') {}
			  });*/

			  
		},
		error:function(){
			//alert("OptionChain Error");
		
		}	
	});
	
	}
function OptionChainfun222(displayname,exchange,nfoexpiry_date,nfoinstrument_name){

	alert("symboldisplayname : "+symboldisplayname+" exchange : "+exchange+" strprc : "+strprc+" cnt : "+cnt);
	
	$.ajax({
		type :'POST',
		url  :'OptionChain',	
		dataType: 'json',
		data    :"tsym="+symboldisplayname+"&exchange="+exchange+"&strprc="+strprc+"&cnt="+cnt,
		success:function(jsonObject){
			
			
			$("#OptionChainDivhideId").show();
			$("#OptionChainDivcallId").show();
			//var jsonObject= JSON.parse(JSON.stringify(response))
			//var jsonObject= JSON.parse(response)
			
			 var body;
			var callOptionbody;
			var callOptionbody;
			
		
			var callsopenprice=null;
			var volumeTag;
			var callbestsellpriceTag;
			var callsbestsellsizeTag;
			var callsbestbuypriceTag;
			var callsbestbuysizeTag;
			var callslasttradepriceTag;
			var callsnetchangeTag;
			var callsstrikepriceTag;
			
			 if (jQuery.isEmptyObject(jsonObject))
			    {
			       //console.log("Empty Object");
				  	$("#OptionChainDivhideId").show();
					$("#OptionChainDivcallId").show();
					$("#OptionChainbodycallId").hide();
					$("#OptionChaininnerbodycallId").show();
				
			    }
			 else{
			
				 var scripscallData  = jsonObject.scripCalls.scripscallData;
				 var scripsputsData = jsonObject.scripsPuts.scripsputsData;
				 
				/* alert("scripscallData "+scripscallData)
				 alert("scripscallData leng :"+scripscallData.length);
				 alert("scripsputsData leng :"+scripsputsData.length);*/
				 
				//Call OptionChain data
				 
				 for (var i = 0; i < scripscallData.length; i++) {
					 
					 volumeTag=scripscallData[i].callstradevolume;
					 callbestsellpriceTag=scripscallData[i].callsbestsellprice;
					 callsbestsellsizeTag=scripscallData[i].callsbestsellsize;
					 callsbestbuypriceTag=scripscallData[i].callsbestbuyprice;
					 callsbestbuysizeTag=scripscallData[i].callsbestbuysize;
					 callslasttradepriceTag=scripscallData[i].callslasttradeprice;
					 callsnetchangeTag=scripscallData[i].callsnetchange;
					 callsstrikepriceTag=scripscallData[i].callsstrikeprice;
							 
				 callOptionbody=callOptionbody+"<tr>";
			 
				 callOptionbody=callOptionbody+"<td>" + "1" + "</td>";
	         
				 callOptionbody=callOptionbody+"<td>" + "2" + "</td>";
				 callOptionbody=callOptionbody+"<td>" + volumeTag+ "</td>";
				 callOptionbody=callOptionbody+"<td>" + "4" + "</td>";
				 callOptionbody=callOptionbody+"<td>" +  callsbestsellsizeTag +""+callbestsellpriceTag+ ""+ "</td>";
				 callOptionbody=callOptionbody+"<td>" +  callsbestbuysizeTag  +""+callsbestbuypriceTag+ "" + "</td>";
				 callOptionbody=callOptionbody+"<td>" +  callslasttradepriceTag+""+callsnetchangeTag+""+ "</td>";
				 callOptionbody=callOptionbody+"<td>" +  callsstrikepriceTag+ "</td>";
	         
				 callOptionbody=callOptionbody+"</tr>";
			 
		}
	         	var putstradevolumeTag;
	         	var putsbestbuypriceTag;
	         	var putsbestsellpriceTag;
	         	var putslasttradepriceTag;
	         	var putsopenpriceTag;
	         	var putsnetchangeTag;
	         	var putstrikepriceTag;
	         	var putsbestsellsizeTag;
	         	var putsbestbuysizeTag;
	         	
	         	
	         	//Put OptionChain data
	         		for (var i = 0; i < scripsputsData.length; i++) {
						 
	         			putstradevolumeTag=scripsputsData[i].putstradevolume;
	         			putsbestbuypriceTag=scripsputsData[i].putsbestbuyprice;
	         			putsbestsellpriceTag=scripsputsData[i].putsbestsellprice;
	         			putslasttradepriceTag=scripsputsData[i].putslasttradeprice;
	         			putsopenpriceTag=scripsputsData[i].putsopenprice;
	         			putsnetchangeTag=scripsputsData[i].putsnetchange;
	         			putstrikepriceTag=scripsputsData[i].putstrikeprice;
	         			putsbestsellsizeTag=scripsputsData[i].putsbestsellsize;
	         			putsbestbuysizeTag=scripsputsData[i].putsbestbuysize;
	         		
	         		 callOptionbody=callOptionbody+"<tr>";
	    			 
					 callOptionbody=callOptionbody+"<td>" + "1" + "</td>";
		         
					 callOptionbody=callOptionbody+"<td>" + "2" + "</td>";
					 callOptionbody=callOptionbody+"<td>" + putstradevolumeTag+ "</td>";
					 callOptionbody=callOptionbody+"<td>" + "4" + "</td>";
					 callOptionbody=callOptionbody+"<td>" +  putsbestsellsizeTag +""+putsbestsellpriceTag+ ""+ "</td>";
					 callOptionbody=callOptionbody+"<td>" +  putsbestbuysizeTag  +""+putsbestbuypriceTag+ "" + "</td>";
					  callOptionbody=callOptionbody+"<td>" +  putslasttradepriceTag+""+putsnetchangeTag+""+ "</td>";
					 
		         
					 callOptionbody=callOptionbody+"</tr>";
	         		 }
	         		
			$('#OptionChainbodycallId').html(callOptionbody);	         	
			$('#OptionChainbodyputId').html(callOptionbody); 
			
			
			$("#OptionChainDivhideId").show();
			$("#OptionChainDivcallId").show();
			$("#OptionChainbodycallId").show();
			$("#OptionChaininnerbodycallId").hide();
			
		}
		},
		error:function(){
			//alert("OptionChain Error");
		
		}	
	});
	
	}




function OptionChainfunOmensys(symboldisplayname,exchange,nfoexpirydate,nfoinstrument_name){
	
//	Portfolio Div Detail
	$("#portfoliohideId").hide();
	 $("#HoldingsDivId").hide();
	 
	 	$("#FundshideId").hide();
		$("#FundsDivId").hide();
		$("#FundsbodyId").hide();
		
		
		 
		//Orderbook Div Details
		 $("#otherId").hide();
		 $("#orderdashboardbookhiddenId").hide();
		 $("#markethiddenId").hide();	
		 $("#orderhideId").hide();
		 $("#profileDivhideId").hide();
		 
		//Profile Div Details
		 $("#AccountProfile").hide();
		 $('#AccountProfileDivId').hide();
		 $('#AccountProfilebodyId').hide();
		 
		 //Alert Div Details
		 $("#AlertDivId").hide();
	
		 
	//alert("symboldisplayname : "+symboldisplayname+" exchange : "+exchange+" nfoexpirydate : "+nfoexpirydate+" nfoinstrument_name : "+nfoinstrument_name);
	
	$.ajax({
		type :'POST',
		url :'OptionChain',	
		 dataType: 'json',
		data:"nfosymbol="+symboldisplayname+"&exchange="+exchange+"&nfoexpirydate="+nfoexpirydate+"&nfoinstrument_name="
		+nfoinstrument_name,
		success:function(jsonObject){
			
			
			$("#OptionChainDivhideId").show();
			$("#OptionChainDivcallId").show();
			//var jsonObject= JSON.parse(JSON.stringify(response))
			//var jsonObject= JSON.parse(response)
			
			 var body;
			var callOptionbody;
			var callOptionbody;
			
		
			var callsopenprice=null;
			var volumeTag;
			var callbestsellpriceTag;
			var callsbestsellsizeTag;
			var callsbestbuypriceTag;
			var callsbestbuysizeTag;
			var callslasttradepriceTag;
			var callsnetchangeTag;
			var callsstrikepriceTag;
			
			 if (jQuery.isEmptyObject(jsonObject))
			    {
			       //console.log("Empty Object");
				  	$("#OptionChainDivhideId").show();
					$("#OptionChainDivcallId").show();
					$("#OptionChainbodycallId").hide();
					$("#OptionChaininnerbodycallId").show();
				
			    }
			 else{
			
				 var scripscallData  = jsonObject.scripCalls.scripscallData;
				 var scripsputsData = jsonObject.scripsPuts.scripsputsData;
				 
				/* alert("scripscallData "+scripscallData)
				 alert("scripscallData leng :"+scripscallData.length);
				 alert("scripsputsData leng :"+scripsputsData.length);*/
				 
				//Call OptionChain data
				 
				 for (var i = 0; i < scripscallData.length; i++) {
					 
					 volumeTag=scripscallData[i].callstradevolume;
					 callbestsellpriceTag=scripscallData[i].callsbestsellprice;
					 callsbestsellsizeTag=scripscallData[i].callsbestsellsize;
					 callsbestbuypriceTag=scripscallData[i].callsbestbuyprice;
					 callsbestbuysizeTag=scripscallData[i].callsbestbuysize;
					 callslasttradepriceTag=scripscallData[i].callslasttradeprice;
					 callsnetchangeTag=scripscallData[i].callsnetchange;
					 callsstrikepriceTag=scripscallData[i].callsstrikeprice;
							 
				 callOptionbody=callOptionbody+"<tr>";
			 
				 callOptionbody=callOptionbody+"<td>" + "1" + "</td>";
	         
				 callOptionbody=callOptionbody+"<td>" + "2" + "</td>";
				 callOptionbody=callOptionbody+"<td>" + volumeTag+ "</td>";
				 callOptionbody=callOptionbody+"<td>" + "4" + "</td>";
				 callOptionbody=callOptionbody+"<td>" +  callsbestsellsizeTag +""+callbestsellpriceTag+ ""+ "</td>";
				 callOptionbody=callOptionbody+"<td>" +  callsbestbuysizeTag  +""+callsbestbuypriceTag+ "" + "</td>";
				 callOptionbody=callOptionbody+"<td>" +  callslasttradepriceTag+""+callsnetchangeTag+""+ "</td>";
				 callOptionbody=callOptionbody+"<td>" +  callsstrikepriceTag+ "</td>";
	         
				 callOptionbody=callOptionbody+"</tr>";
			 
		}
	         	var putstradevolumeTag;
	         	var putsbestbuypriceTag;
	         	var putsbestsellpriceTag;
	         	var putslasttradepriceTag;
	         	var putsopenpriceTag;
	         	var putsnetchangeTag;
	         	var putstrikepriceTag;
	         	var putsbestsellsizeTag;
	         	var putsbestbuysizeTag;
	         	
	         	
	         	//Put OptionChain data
	         		for (var i = 0; i < scripsputsData.length; i++) {
						 
	         			putstradevolumeTag=scripsputsData[i].putstradevolume;
	         			putsbestbuypriceTag=scripsputsData[i].putsbestbuyprice;
	         			putsbestsellpriceTag=scripsputsData[i].putsbestsellprice;
	         			putslasttradepriceTag=scripsputsData[i].putslasttradeprice;
	         			putsopenpriceTag=scripsputsData[i].putsopenprice;
	         			putsnetchangeTag=scripsputsData[i].putsnetchange;
	         			putstrikepriceTag=scripsputsData[i].putstrikeprice;
	         			putsbestsellsizeTag=scripsputsData[i].putsbestsellsize;
	         			putsbestbuysizeTag=scripsputsData[i].putsbestbuysize;
	         		
	         		 callOptionbody=callOptionbody+"<tr>";
	    			 
					 callOptionbody=callOptionbody+"<td>" + "1" + "</td>";
		         
					 callOptionbody=callOptionbody+"<td>" + "2" + "</td>";
					 callOptionbody=callOptionbody+"<td>" + putstradevolumeTag+ "</td>";
					 callOptionbody=callOptionbody+"<td>" + "4" + "</td>";
					 callOptionbody=callOptionbody+"<td>" +  putsbestsellsizeTag +""+putsbestsellpriceTag+ ""+ "</td>";
					 callOptionbody=callOptionbody+"<td>" +  putsbestbuysizeTag  +""+putsbestbuypriceTag+ "" + "</td>";
					  callOptionbody=callOptionbody+"<td>" +  putslasttradepriceTag+""+putsnetchangeTag+""+ "</td>";
					 
		         
					 callOptionbody=callOptionbody+"</tr>";
	         		 }
	         		
			$('#OptionChainbodycallId').html(callOptionbody);	         	
			$('#OptionChainbodyputId').html(callOptionbody); 
			
			
			$("#OptionChainDivhideId").show();
			$("#OptionChainDivcallId").show();
			$("#OptionChainbodycallId").show();
			$("#OptionChaininnerbodycallId").hide();
			
		}
		},
		error:function(){
			//alert("OptionChain Error");
		
		}	
	});
	
	}



/*function OptionChainfun22(symboldisplayname,exchange,nfoexpirydate,nfoinstrument_name){
	
	//	Portfolio Div Detail
		$("#portfoliohideId").hide();
		 $("#HoldingsDivId").hide();
		 
		   $("#FundshideId").show();
			$("#FundsDivId").hide();
			$("#FundsbodyId").hide();
			 
		//Orderbook Div Details
		 $("#otherId").hide();
		 $("#orderdashboardbookhiddenId").hide();
		 $("#markethiddenId").hide();	
		 $("#orderhideId").hide();
		 $("#profileDivhideId").hide();
		 
		//Profile Div Details
		 $("#AccountProfile").hide();
		 $('#AccountProfileDivId').hide();
		 $('#AccountProfilebodyId').hide();
		 
		 //Alert Div Details
		 $("#AlertDivId").hide();
		 
	$.ajax({
		type :'POST',
		url :'OptionChain',	
		 dataType: 'json',
		data:"nfosymbol="+symboldisplayname+"&exchange="+exchange+"&nfoexpirydate="+nfoexpirydate+"&nfoinstrument_name="
		+nfoinstrument_name,
		success:function(jsonObject){
			
			//var jsonObject= JSON.parse(JSON.stringify(response))
			//var jsonObject= JSON.parse(response)
		
			
			
				var jsonLength=jsonObject.length;
			
				
			 var body;
			var callOptionbody ="";
			var putOptionbody;
			var strikeOptionbody;
			var emptyOptionbody;
			
			//alert("jsonObject : "+jsonObject);
			var callsopenprice=null;
			var volumeTag;
			var callbestsellpriceTag;
			var callsbestsellsizeTag;
			var callsbestbuypriceTag;
			var callsbestbuysizeTag;
			var callslasttradepriceTag;
			var callsnetchangeTag;
			var callsstrikepriceTag;
			
				
				 
				 
				 
				 var div = document.createElement('div');
		            div.setAttribute("id", "tbl");
		            document.body.appendChild(div)
		                document.getElementById("tbl").innerHTML = "<table border = '1'>" +
		              '<tr>' +
		                '<th>OI&Changes</th>' +
		                '<th>OI Percent</th> ' +
		                '<th>Header 3</th>' +
		                '<th>Volume </th>'+
		                '<th>IV </th>'+
		                '<th>Bid Price</th>'+
		                '<th> & Qty.Ask Price&Qty</th>'+
		                '<th>LTP & Changes</th>'+ 
		                '<th>Strike Price</th>'+  
		              '</tr>'
		              
				 var div = document.createElement('div');
		            div.setAttribute("id", "tbl");
		            document.body.appendChild(div) 
		               //  "<table border = '1' >"
		            //		           document.getElementById("body-right").innerHTML = '<table class="table table-striped table-bordered display sortable" style="width:100%;margin-left:-30px;padding-top: 15px;padding-bottom: 15px;padding-right:15px;padding-left: 15px;">'+

		           document.getElementById("body-right").innerHTML = '<table class="table table-striped  table-bordered display sortable" style="display: block; overflow-x: auto; white-space: nowrap;height:700px;width:975px;margin-left:-30px;padding-top: 15px;padding-bottom: 15px;padding-right:15px;padding-left: 15px;">'+
		                '<tr>' +
		              '<thead style="background-color: #4e73df;color: #fff;text-align:center;font-size: 12px;font-family: Helvetica, Sans-Serif;padding-top: 15px;padding-bottom: 15px;padding-right:15px;padding-left: 15px;">'+
		                '<th>OI&Changes</th>' +
		                '<th>OI Percent</th> ' +		              
		                '<th>Volume </th>'+
		                '<th>IV </th>'+
		                '<th>Bid Price</th>'+
		                '<th>Qty.Ask Price</th>'+
		                '<th>LTP & Changes</th>'+ 
		                '<th>Strike Price</th>'+  
		                '<th>OI&Changes</th>' +
		                '<th>OI Percent</th> ' +
		                '<th>Volume </th>'+
		                '<th>IV </th>'+
		                '<th>Bid Price</th>'+
		                '<th>Ask Price </th>'+
		                '<th>LTP</th>'+ 
		               '</tr>' +
		               
		             ' <tbody class="color_used" id="OptionChainbodycallId" style="height:650px;overflow:scroll;vertical-align: top;table-layout: fixed;width:100%;overflow:auto;padding-top:10px;padding-bottom:10px;padding-right:10px;padding-left:10px;text-align:center;font-size:12px;font-family:Helvetica,Sans-Serif;">'+
		               '</tbody>'
		           
		             
		            	 var scripscallData  = jsonObject.scripCalls.scripscallData;
		          
						 var scripsputsData = jsonObject.scripsPuts.scripsputsData;
		           
						 
		            var putdataLength=scripsputsData.length;
		            var calldataLength=scripscallData.length;
		            if (jsonObject.length==0){
		            	 
		            	 callOptionbody=callOptionbody+"<label style='margin-left: 40px;'>No Data Available</label>";
		  
					 }
		            else{  
		            
		         var length;
		         if(putdataLength > calldataLength) {
		        	 length = putdataLength;
		         }else {
		        	 length = calldataLength;
		         }
		         
		        	
		         
		 	    var putstradevolumeTag;
			 	var putsbestbuypriceTag;
			 	var putsbestsellpriceTag;
			 	var putslasttradepriceTag;
			 	var putsopenpriceTag;
			 	var putsnetchangeTag;
			 	var putstrikepriceTag;
			 	var putsbestsellsizeTag;
			 	var putsbestbuysizeTag; 
			 	var callIndex = 0;
			 	var putindex = 0;
	         			//Call OptionChain data
				   for (var i = 0; i <length; i++) {
					   callOptionbody=callOptionbody+'<tr>';
					   
					  
					   if(callIndex < calldataLength) {
						   callIndex++;
						 volumeTag=scripscallData[i].callstradevolume;
						 callbestsellpriceTag=scripscallData[i].callsbestsellprice;
						 callsbestsellsizeTag=scripscallData[i].callsbestsellsize;
						 callsbestbuypriceTag=scripscallData[i].callsbestbuyprice;
						 callsbestbuysizeTag=scripscallData[i].callsbestbuysize;
						 callslasttradepriceTag=scripscallData[i].callslasttradeprice;
						 callsnetchangeTag=scripscallData[i].callsnetchange;
						 callsstrikepriceTag=scripscallData[i].callsstrikeprice;
				
						 
						  
					// callOptionbody=callOptionbody+"<td id='oneId'></td>";		         
					// callOptionbody=callOptionbody+"<td id='twoId'></td>";
					 callOptionbody=callOptionbody+"<td id='volueId'>" + volumeTag+ "</td>";
					 callOptionbody=callOptionbody+"<td id='forthId'></td>";
					 callOptionbody=callOptionbody+"<td id='sellsizeId'>" +  callsbestsellsizeTag +""+callbestsellpriceTag+ ""+ "</td>";
					 callOptionbody=callOptionbody+"<td id='buysizeId'>" +  callsbestbuysizeTag  +""+callsbestbuypriceTag+ "" + "</td>";
					 callOptionbody=callOptionbody+"<td id='lasttradepriceNetchangeId'>" +  callslasttradepriceTag+""+callsnetchangeTag+""+ "</td>";
					 callOptionbody=callOptionbody+"<td id='strikepriceId'>" +  callsstrikepriceTag+ "</td>";
					  

					 }else {
						 
						// callOptionbody=callOptionbody+"<td id='oneId'></td>";				         
						// callOptionbody=callOptionbody+"<td id='twoId'></td>";
						 callOptionbody=callOptionbody+"<td id='volueId'></td>";
						 callOptionbody=callOptionbody+"<td id='forthId'></td>";
						 callOptionbody=callOptionbody+"<td id='sellsizeId'></td>";
						 callOptionbody=callOptionbody+"<td id='buysizeId'></td>";
						 callOptionbody=callOptionbody+"<td id='lasttradepriceNetchangeId'></td>";
						 callOptionbody=callOptionbody+"<td id='strikepriceId'></td>";						 
					 }
					 
					 if(putindex < putdataLength) {
						 putindex++;
							putstradevolumeTag=scripsputsData[i].putstradevolume;
		         			putsbestbuypriceTag=scripsputsData[i].putsbestbuyprice;
		         			putsbestsellpriceTag=scripsputsData[i].putsbestsellprice;
		         			putslasttradepriceTag=scripsputsData[i].putslasttradeprice;
		         			putsopenpriceTag=scripsputsData[i].putsopenprice;
		         			putsnetchangeTag=scripsputsData[i].putsnetchange;
		         			putstrikepriceTag=scripsputsData[i].putstrikeprice;
		         			putsbestsellsizeTag=scripsputsData[i].putsbestsellsize;
		         			putsbestbuysizeTag=scripsputsData[i].putsbestbuysize;
		         		
						 callOptionbody=callOptionbody+"<td id='oneputId'></td>";
						
						// callOptionbody=callOptionbody+"<td id='twoputId'></td>";
						// callOptionbody=callOptionbody+"<td id='putstradevolumeId'>" + putstradevolumeTag+ "</td>";
						 callOptionbody=callOptionbody+"<td id='fourthputId'></td>";
						 callOptionbody=callOptionbody+"<td id='putsbestsellsizeId'>" +  putsbestsellsizeTag +""+putsbestsellpriceTag+ ""+ "</td>";
						 callOptionbody=callOptionbody+"<td id='putsbestbuysizeId'>" +  putsbestbuysizeTag  +""+putsbestbuypriceTag+ "" + "</td>";
						 callOptionbody=callOptionbody+"<td id='putslasttradepriceId'>" +  putslasttradepriceTag+""+putsnetchangeTag+""+ "</td>";

					 } else {
						// callOptionbody=callOptionbody+"<td id='oneputId'></td>";							
						// callOptionbody=callOptionbody+"<td id='twoputId'></td>";
						 callOptionbody=callOptionbody+"<td id='putstradevolumeId'></td>";
						 callOptionbody=callOptionbody+"<td id='fourthputId'></td>";
						 callOptionbody=callOptionbody+"<td id='putsbestsellsizeId'></td>";
						 callOptionbody=callOptionbody+"<td id='putsbestbuysizeId'></td>";
						 callOptionbody=callOptionbody+"<td id='putslasttradepriceId'></td>";
 
					 }
					
					 callOptionbody=callOptionbody+"</tr>";
				
				
				 }
		             } 
		            
		            
			$('#OptionChainbodycallId').html(callOptionbody);
		
		},
		error:function(){
			//alert("PlaceOrder Error");
		
		}	
	});
	
	}*/