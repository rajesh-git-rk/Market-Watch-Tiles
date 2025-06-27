var searchBodyArray = new Array();
var tokenId;

var tokenArray = new Array();

var deletetokenArray = new Array();


	

function setMarketwatchActiveClass(id, elem){
	var marketwatchid = id.value;
	
	getMarketwatchListById(id.value);
	
	$("a.active").removeClass("active");
    $(elem).addClass("active");
}
 

function getActiveMarketWatchElem() {
	var getstatus =document.getElementsByClassName('btn active');
	
	var data = [].map.call(getstatus, elem => elem.textContent);

	
	if (data == '1') {
	
	return document.getElementById("marketwatchname1");
	
	}else if (data == '2') {
	
	return document.getElementById("marketwatchname2");
	
	}else if (data == '3') {
		
	return document.getElementById("marketwatchname3");
	
	}else if (data == '4') {
		
	return document.getElementById("marketwatchname4");
	
	}else if (data === '5') {
		
	return document.getElementById("marketwatchname5");
	}
	return undefined;
	
	}
function getMarketwatchList(){

  
		$.ajax({
			type :'GET',
			url :'getMarketwatchList',
		    data : '',
			dataType: 'json',
			success:function(response){
	 
				 var body;

				 
				// alert("response:::"+response);
				 
					for (var i = 0; i <response.length; i++) {
		
						var marketwatchid=response[i].marketwatchid;
						var userId=response[i].marketwatchid;
						var marketwatch_name=response[i].marketwatch_name;

						 document.getElementById("marketwatchname1").value = response[0].marketwatchid;
						 document.getElementById("marketwatchname2").value = response[1].marketwatchid;
						 document.getElementById("marketwatchname3").value = response[2].marketwatchid;
						 document.getElementById("marketwatchname4").value = response[3].marketwatchid;
						 document.getElementById("marketwatchname5").value = response[4].marketwatchid;
						
					//	alert("marketwatch_name::1:"+response[0].marketwatch_name);
					
					}
					 var marketwatchid = document.getElementById("marketwatchname1").value;
					 
					// alert("marketwatchid:::"+marketwatchid);
					 getMarketwatchListById(marketwatchid);
					

			},
			error:function(){
				//alert("getMarketwatchList Error");
				
				}	
		});
	} 


function getMarketwatchListById(marketwatchname1){
	
	//alert("marketwatchname1::"+marketwatchname1);

	unsubribeTopics();
	
		  var call;
			
			//var marketwatchid="34";
			call="marketwatchid="+marketwatchname1;
			
			//call="marketwatchid="+marketwatchid;
			   
			$.ajax({
				type :'GET',
				url :'getScriptValueOfMarketIdForWeb',
			    data : call,
				dataType: 'json',
				success:function(jsonObject){

					 var body="";

					 searchBodyArray = [];
						
						tokenArray = [];	
						
				if(jsonObject.stat=='Ok'){	
							
						 var response=jsonObject.script;
							var userId=JSON.stringify(jsonObject.userId);

					// alert("res:::"+response);
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
							
							var nfoTicksize=JSON.stringify(response[i].nfospreadmin);
							var nfostrike_price=JSON.stringify(response[i].nfostrike_price);
							var nfooption_type=JSON.stringify(response[i].nfooption_type);
							var nfoinstrument_name=JSON.stringify(response[i].nfoinstrument_name);
						
						//	alert(" exch : "+response[i].exchange+" nfoinstrument_name : "+response[i].nfoinstrument_name);
							if(response[i].token !=null){
								
								
								
								
								//alert("strikeprice   : "+LTPprice);
								 
								body=body+"<li class='hashover'>";
								body=body+"<div class='current_rate_row'>";
								body=body+"<div class='drag-checkbox'>"
								body=body+"<input type='checkbox' id='check_"+response[i].token+"' onclick='deleteCheckFun("+response[i].token+")' class='form-check-input' />";
								body=body+"<i class='bi bi-grip-vertical'></i>";
								body=body+"</div>";
								body=body+"<div class='current_rate' data-for='#check_list1'>";
								body=body+"<div class='nifty_title'>";
								body=body+"<input type='hidden' id='"+response[i].token+"_priceid_hidden'  name='"+response[i].token+"_priceid' />";
								body=body+"<span class='tp_blue'>"+response[i].displayname+"</span><span class='tp_lgreen' class='"+response[i].token+"_priceid'  id='"+response[i].token+"_priceid'></span>";
								body=body+"</div>";
								body=body+"<div class='nse_index'>";
								if(response[i].exchange=="NSE"){
								body=body+"<span>"+response[i].scriptName+"</span><span><i class='bi bi-chevron-up'></i> + 4.20 (0.12%)</span>";
								}else if(response[i].exchange=="NFO"){
								body=body+"<span>"+response[i].scriptName+"</span><span><i class='bi bi-chevron-up'></i> + 4.20 (0.12%)</span>";
							   }else if(response[i].exchange=="MCX"){
								body=body+"<span>"+response[i].scriptName+"</span><span><i class='bi bi-chevron-up'></i> + 4.20 (0.12%)</span>";
							   }
								body=body+"</div>";
								body=body+"<div class='hover_Btns'>"
								body=body+ "<ul>";
								body=body+ "<li data-bs-toggle='tooltip' data-bs-placement='top' title='Buy'>";
								body=body+ "<button class='btn btn-lightBlue btn-showbuysell' onclick='buysellwindowOpen("+userId+","+scriptName+","+price+","+exchange+","+response[i].token +","+displayname+","+mcxTickSize+","+mcxOriginalExpiryDate+","+nseTickSize+","+nseExDate+","+nfoexpiry_date+","+mcxInstrumentCode+","+mcxStrikePrice+","+mcxOptionType+","+mcxInstrumentName+","+mcxInstrumentSeries+","+nseSymbol+","+nseSeries+","+nfoSymbol+","+nfostrike_price+","+nfooption_type+","+nfoinstrument_name+","+nfoTicksize+")' type='button' data-modal-type='buy'>B";                        
								/*body=body+ "<button class='btn btn-lightBlue btn-showbuysell' type='button' data-modal-type='buy'>B";                        
	                            */
								body=body+"</button>";
	                            body=body+"</li>";
	                            body=body+"<li data-bs-toggle='tooltip' data-bs-placement='top' title='Sell'>";
	                            body=body+"<button class='btn btn-red btn-showbuysell' onclick='buysellwindowOpen("+userId+","+scriptName+","+price+","+exchange+","+token+","+displayname+","+mcxTickSize+","+mcxOriginalExpiryDate+","+nseTickSize+","+nseExDate+","+nfoexpiry_date+","+mcxInstrumentCode+","+mcxStrikePrice+","+mcxOptionType+","+mcxInstrumentName+","+mcxInstrumentSeries+","+nseSymbol+","+nseSeries+","+nfoSymbol+","+nfostrike_price+","+nfooption_type+","+nfoinstrument_name+","+nfoTicksize+")' type='button' data-modal-type='sell'>S";
	                            body=body+"</button>";
	                            body=body+"</li>";
	                            
	                            body=body+"<li data-bs-toggle='tooltip' data-bs-placement='top' title='Market Depth'>";
	                            body=body+"<button class='btn accordion-button' type='button' data-bs-toggle='collapse' data-bs-target='#collapseOne_"+response[i].token+"' aria-expanded='false' aria-controls='collapseOne'>";
	                            body=body+"<i class='bi bi-upc-scan'></i>";
	                            body=body+"</button>";
	                            body=body+"</li>";
	                            body=body+"<li data-bs-toggle='tooltip' data-bs-placement='top' title='View Chart'>";
	                            body=body+ "<button class='btn showchart' onclick='displayChart("+displayname+","+exchange+");' type='button'><i class='bi bi-graph-up'></i></button>";
	                            body=body+"</li>";
	                            body=body+ "<li data-bs-toggle='tooltip' data-bs-placement='top' title='Option Chain'>";
	                            if(response[i].exchange=='NFO' && response[i].nfoinstrument_name!='XX'){
	                            body=body+ "<button class='btn btn-showOptionchain' onclick='OptionChainfun("+nfoSymbol+","+exchange+","+price+","+nfoinstrument_name+")' type='button'><i class='bi bi-arrow-down-up'></i></button>";
	                            }
	                            else{
		                            body=body+ "<button style='display:none;' class='btn' onclick='OptionChainfun("+displayname+","+exchange+","+nfoexpiry_date+","+nfoinstrument_name+")' type='button'><i class='bi bi-arrow-down-up'></i></button>";
	                            }
	                            body=body+ "</li>";
	                            body=body+"<li data-bs-toggle='tooltip' data-bs-placement='top' title='More'>";
	                            body=body+"<div class='dropdown'>";
	                            body=body+"<button class='btn btn-secondary dropdown-toggle' id='hoverdropdownMenuButton_"+response[i].token+"' onclick='ShowModalMoreOption("+displayname+","+token+","+scriptName+","+price+","+exchange+","+token+","+mcxOriginalExpiryDate+","+nseExDate+","+nfoexpiry_date+","+displayname+","+mcxTickSize+","+mcxOriginalExpiryDate+","+nseTickSize+","+nseExDate+","+nfoexpiry_date+","+mcxInstrumentCode+","+mcxStrikePrice+","+mcxOptionType+","+mcxInstrumentName+","+mcxInstrumentSeries+","+nseSymbol+","+nseSeries+","+nfoSymbol+","+nfostrike_price+","+nfooption_type+","+nfoinstrument_name+")'  data-bs-toggle='dropdown' aria-expanded='false'>";
	                            body=body+ "<i class='bi bi-three-dots-vertical'></i>";
	                            body=body+"</button>";
	              
	                            body=body+ "<ul class='dropdown-menu dropdown-menu-end' aria-labelledby='hoverdropdownMenuButton_"+response[i].token+"'>";
	                            body=body+"<li><a class='dropdown-item'  data-bs-toggle='modal' data-bs-target='#setAlertModal' href='#'><i class='bi-alarm'></i> Set price alert</a></li>"; 
	                            body=body+ "<li><a class='dropdown-item' href='#'><i class='bi bi-pin-angle'></i> Pin Ticker ";
	                            if(response[i].exchange=="NSE"){
	                            body=body+ "<span  id='PintickerPagebuttonIdOne' name='PintickerPagebuttonIdOne'  onclick='setPinTickerfun("+response[i].token+",\""+response[i].displayname+"\",\""+response[i].exchange+"\",\""+response[i].nseSeries+"\",1)' value='1'>1</span>";
	                            body=body+ "<span id='PintickerPagebuttonIdTwo' name='PintickerPagebuttonIdTwo'  onclick='setPinTickerfun("+response[i].token+",\""+response[i].displayname+"\",\""+response[i].exchange+"\",\""+response[i].nseSeries+"\",2)'  value='2' >2</span>";
	                            }else if(response[i].exchange=="NFO"){
		                        body=body+ "<span  id='PintickerPagebuttonIdOne' name='PintickerPagebuttonIdOne'  onclick='setPinTickerfun("+response[i].token+",\""+response[i].displayname+"\",\""+response[i].exchange+"\",\""+response[i].nfooption_type+"\",1)' value='1'>1</span>";
		                        body=body+ "<span id='PintickerPagebuttonIdTwo' name='PintickerPagebuttonIdTwo'  onclick='setPinTickerfun("+response[i].token+",\""+response[i].displayname+"\",\""+response[i].exchange+"\",\""+response[i].nfooption_type+"\",2)'  value='2' >2</span>";
		                        }else if(response[i].exchange=="MCX"){
			                    body=body+ "<span  id='PintickerPagebuttonIdOne' name='PintickerPagebuttonIdOne'  onclick='setPinTickerfun("+response[i].token+",\""+response[i].displayname+"\",\""+response[i].exchange+"\",\""+response[i].mcxInstrumentName+"\",1)' value='1'>1</span>";
			                    body=body+ "<span id='PintickerPagebuttonIdTwo' name='PintickerPagebuttonIdTwo'  onclick='setPinTickerfun("+response[i].token+",\""+response[i].displayname+"\",\""+response[i].exchange+"\",\""+response[i].mcxInstrumentName+"\",2)'  value='2' >2</span>";
			                        }
	                            body=body+ "</a></li>";
	                            body=body+ "<li><a class='dropdown-item' onclick='getSymbolInfo("+exchange+","+token+");' data-bs-toggle='modal' data-bs-target='#symbolInfoModal' href='#'><i class='bi bi-info-circle'></i> Symbol info</a>";
	                            body=body+"</li>";
	                            body=body+"<li><a class='dropdown-item tp_red' onclick='deleteScript("+response[i].token+")' href='#'><i class='bi bi-dash-circle'></i> Remove Symbol</a>";
	                            body=body+"</li>";
	                            body=body+"</ul>";
	                            body=body+"</div>";
	                            body=body+ "</li>";
	                            body=body+ "</ul>";
	                            body=body+ "</div>";
	                            body=body+ "</div>";
	                            body=body+"</div>";
	                            body=body+"<div class='accordion-item'>";
	                            body=body+"<div id='collapseOne_"+response[i].token+"' class='accordion-collapse collapse' aria-labelledby='headingOne' data-bs-parent='#accordionExample'>";
	                            body=body+"<div class='accordion-body'>";
	                            body=body+"<h5 class='tp_blue accordion-title'>";
	                            body=body+ "<span><i class='bi bi-filter'></i> Market Depth</span>";
	                            body=body+ "<a href='#' class='btn btn-primary btn-sm'>Option Chain</a>";
	                            body=body+ "</h5>";
	                            body=body+ "<div class='price-list'>";
	                            body=body+ "<ul class='buy-list'>";
	                            body=body+ "<li class='plist-head'>";
	                            body=body+ "<span>Price</span>";
	                            body=body+ "<span>Buyers</span>";
	                            body=body+ "<span>Qty</span>";
	                            body=body+ "</li>";
	                            body=body+ "<li class='plist-item'>"
	                            body=body+  "<span>23233.22</span>";
	                            body=body+ "<span>10</span>";
	                            body=body+  "<span>26,235</span>";
	                            body=body+ "</li>";
	                            body=body+ "<li class='plist-botm'>"
	                            body=body+ "<span>Bid Total</span>"
	                            body=body+ "<span>85,235,44</span>";
	                            body=body+ "</li>";
	                            body=body+ "</ul>";
	                            body=body+ "<ul class='sell-list'>";
	                            body=body+ "<li class='plist-head'>";
	                            body=body+ "<span>Price</span>";
	                            body=body+ "<span>Buyers</span>";
	                            body=body+ "<span>Qty</span>";
	                            body=body+"</li>";
	                            body=body+ "<li class='plist-item'>";
	                            body=body+ "<span>23233.22</span>";
	                            body=body+ "<span>10</span>";
	                            body=body+ "<span>26,235</span>";
	                            body=body+ "</li>";
	                            body=body+ "<li class='plist-botm'>";
	                            body=body+ "<span>Bid Total</span>";
	                            body=body+ "<span>85,235,44</span>";
	                            body=body+ "</li>";
	                            body=body+ "</ul>";
	                            body=body+"</div>";
	                            body=body+ "<div class='progress-indicator'>";
	                            body=body+ "<i class='bi bi-arrow-up-square-fill tp_lgreen'></i>";
	                            body=body+ "<div class='progess-item'>"
	                            body=body+ "<div class='pg-block bg-lightblue' style='width:58%'>58 ";
	                            body=body+ "</div>";
	                            body=body+ "<div class='pg-block bg-red' style='width:42%'>42</div>";
	                            body=body+ "</div>";
	                            body=body+ "<i class='bi bi-arrow-down-square-fill clr-red'></i>";
	                            body=body+ "</div>";
	                            body=body+ "<div class='technical-area'>";
	                            body=body+ "<h5>Technical</h5>";
	                            body=body+ "<ul>";
	                            body=body+ "<li>";
	                            body=body+ "<button type='button' class='btn btn-red'>Sell</button>"
	                            body=body+ "<p>Hourly</p>";
	                            body=body+ "</li>";
	                            body=body+ "<li>";
	                            body=body+ "<button type='button' class='btn btn-grey'>Neutral</button>";
	                            body=body+ "<p>Daily</p>";
	                            body=body+ "</li>";
	                            body=body+ "<li>";
	                            body=body+ "<button type='button'   class='btn btn-lightBlue'>Buy</button>";
	                            body=body+ "<p>Weekly</p>";
	                            body=body+ "</li>";
	                            body=body+ "<li>";
	                            body=body+ "<button type='button' class='btn btn-lightBlue'>Strong Buy</button>";
	                            body=body+ "<p>Monthly</p>";
	                            body=body+ "</li>";
	                            body=body+"</ul>";
	                            body=body+"</div>";
	                            body=body+"</div>";
	                            body=body+"</div>";
	                            body=body+"</div>";
	                            body=body+"</li>";				
								
							
							
							tokenId = response[i].token;
							searchBodyArray.push(response[i].token);
							
							tokenArray.push(response[i].token);
							}
							
						
						}
						
						 $('.current_rate_lists').html(body); 

					}else{
						$('.current_rate_lists').html(''); 
					}
						
						  // });
						 // Accordion side menu collapse
						  $('.current_rate_lists li .hover_Btns ul li .accordion-button').click(function () {
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
						  
						   $(".btn-showbuysell").click(function() {
						     var modalDiv = $('#buySellModal');
						     modalDiv.modal({backdrop: false, show: true});
						     $('#buySellModal .modal-dialog').draggable({
						       handle: "#buySellModal .modal-header"
						     });
						   });
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
						  });

				},
				error:function(){
				//	alert("getMarketwatchListById Error");
					
					}	
			});
			initMQTT();
		} 



function deleteCheckFun(token){
	
	//alert("token::"+token);
	var checkedValue = $('.form-check-input:checked').val(); 	
	//alert("checkedValue::"+checkedValue);
	
	if(checkedValue !=undefined){
	    deletetokenArray.push(token);
	    
	    $('#deleteBtnId').show();
	}else{

		deletetokenArray.pop(token);
		
		$('#deleteBtnId').hide();
	}
	
}


function multiplescriptdelete(){
	
	for(var j=0; j<deletetokenArray.length; j++){


		
		$.ajax({
			type :'POST',
			url :'deleteScript',
		    data :"Token=" +deletetokenArray[j],
			dataType: 'html',
			success:function(response){
				
				$('#deleteBtnId').hide();
				
				marketwatchid = getActiveMarketWatchId();
				getMarketwatchListById(marketwatchid);

				client.unsubscribe(deletetokenArray[j].toString());

			},
			error:function(){

			}	
		});
	}
}
function deleteScript(symbol){
	
    
	  $.ajax({
			type :'POST',
			url :'deleteScript',
		    data :"Token=" +symbol,
			dataType: 'html',
			success:function(response){
				//alert("response::"+response);
				
				marketwatchid = getActiveMarketWatchId();
				getMarketwatchListById(marketwatchid);
				
				 client.unsubscribe(symbol.toString());

			},
			error:function(){
			//alert("DeleteScript Error");
				
			
			}	
		});
	 
	 

	
}








