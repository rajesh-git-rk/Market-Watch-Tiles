function Portfoliofunction(){
	
	$("#PositionstabId").addClass('active');
    $("#HoldingstabId").removeClass('active');
    
	 $("#portfoliohideId").show();
	 $("#PositionsDivId").show();
	 $("PositionsbodyId").show();
	 $("#otherId").hide();
	 $("#orderdashboardbookhiddenId").hide();
	 $("#markethiddenId").hide();	
	 $("#profileDivhideId").hide();
	 $("#HoldingsDivId").hide();
	 
	 
	 //OptionChain
	 	$("#OptionChainDivhideId").hide();
		$("#OptionChainDivcallId").hide();
		$("#OptionChainbodycallId").hide();
		$("#OptionChaininnerbodycallId").hide();
	 
	 //Orderbook Div Details
	 $("#orderhideId").hide();
	 
	 //Fun Div Details
	 $("#FundshideId").hide();
	 $("#FundsDivId").hide();
	 $("#FundsbodyId").hide();
	 
	 //Profile Div Details
	 $("#AccountProfile").hide();
	 $('#AccountProfileDivId').hide();
	 $('#AccountProfilebodyId').hide();
	 
	 //PinTicker Div Details
	 	$("#OptionChainDivhideId").hide();
		$("#OptionChainDivcallId").hide();
		$("#OptionChainbodycallId").hide();
		$("#OptionChaininnerbodycallId").hide();
		$("#OptionChainDivputId").hide();
		$("#OptionChainbodyputId").hide();
		$("#OptionChaininnerbodyputId").hide();
		
	//Alert Div Details
	 $("#AlertDivId").hide();
	 
	    var uid=$("#UserID").val();
		var actid=$("#UserID").val();
		var type=$("#dayNetId").val();
		var sprdtali="CNC:CNC||MIS:MIS||NRML:NRML";	
		var type = "NET";
		  $.ajax({
				type :'POST',
				url :'PositionBook',
				data : "s_prdt_ali="+sprdtali+"&uid="+uid+"&actid="+actid+"&type="+type,
				dataType: 'json',
				success:function(response){
					var jsonObject =JSON.parse(response);
					 var body;
				      for (var i = 0; i < jsonObject.length; i++) {
					        var stat= jsonObject[i].stat;
					        
					        if(stat==='Ok'){
					        	 
					        	var PreviousCloseVal=Number(1);
					        	var Boardlotquantity=jsonObject[i].BLQty;
					        	
					        	var PLvalueOne=parseFloat(jsonObject[i].LTP)-parseFloat(PreviousCloseVal);				        	
					        	
					        	var PLvaluetwo= PLvalueOne*parseFloat(Boardlotquantity)*(parseFloat(jsonObject[i].Netqty))
					        	
					        	var CFBuyavgprc=jsonObject[i].CFBuyavgprc;
					        	var CFSellavgprc=jsonObject[i].CFSellavgprc;
					        	if(CFSellavgprc==0){
					        		var BoughtSoldprice=CFBuyavgprc;
					        	}
					        	else if(CFBuyavgprc==0){
					        		var BoughtSoldprice=CFSellavgprc;
					        	}
					        		
					        	var NetChange= parseFloat(jsonObject[i].LTP)-parseFloat(BoughtSoldprice);
					        					        	
					        	
					        	var Symbolvar = JSON.stringify(jsonObject[i].Symbol);	
					        	var TsymVAR=JSON.stringify(jsonObject[i].Tsym);
					        	var TokenTag = jsonObject[i].Token;				        	
					        	var NetqtyTag = jsonObject[i].Netqty;				        	
					        	var PcodeTag= JSON.stringify(jsonObject[i].Pcode);
					        	var ExchangeTag = JSON.stringify(jsonObject[i].Exchange);
					        	
					            body=body+"<tr  onmouseover='Squareoffbtnmouseover("+TokenTag+")' onmouseout='Squareoffbtnmouseout("+TokenTag+")'>";
					       	 
                                body=body+"<td>" + jsonObject[i].Symbol + "<button type='button' id='"+TokenTag+"_SquareoffbtnId' class='btn swd-button squareOffButton'  data-toggle='modal' data-toggle='tooltip' data-placement='bottom' title='Square off' data-target='#SquareoffmyModal' onclick='SquareoffModelViewFun("+TokenTag+","+Symbolvar+","+NetqtyTag+","+PcodeTag+","+ExchangeTag+","+TsymVAR+");'  style='margin-top:-6%;margin-left:65%;display:none;width:38%;background-color:gray;color: #fff;text-align:center;font-size: 10px;font-family: Helvetica, Sans-Serif;'  >Squareoff </button>";
						       	 
					            
					            body=body+ " <input type='hidden' id='TokenTaghiddenId' value="+TokenTag+" >";
					            body=body+" <input type='hidden' id='symbolhiddenId' value="+Symbolvar+" >";
					            body=body+" <input type='hidden' id='NetqtyhiddenId' value="+NetqtyTag+" >";
					            body=body+" <input type='hidden' id='PcodehiddenId' value="+PcodeTag+" >";
					            body=body+" <input type='hidden' id='ExchangehiddenId' value="+ExchangeTag+" >";
					            body=body+ "</td>";
					            var qos = 1;
					            	
					          //  client.subscribe(TokenTag,{qos: qos});
					            
					            tokenArray.push(TokenTag);
					            
					        	 body=body+"<td>" + NetqtyTag + "</td>";
					        	 body=body+"<td>" + PreviousCloseVal+ "</td>";
						       //  body=body+"<td>" + jsonObject[i].LTP + "</td>";
						         body=body+"<td><label id='positin_price'></label> </td>";
						         body=body+"<td>" + PLvaluetwo + "</td>";
						         body=body+"<td>" +  NetChange + "</td>";
						         
						         body=body+"</tr>";
						        
						         $('#PositionsbodyId').html(body);
						         $('#PositionsinnerbodyId').hide();
						         $('#PositionsbodyId').show();
					        }
				      else if(stat==='Not_Ok'){
				    	  $('#PositionsinnerbodyId').show();
				    	  $('#PositionsbodyId').hide();
				         }        
					       
				      }
				    },
				error:function(){
		
				}	
		  });   
	    
}




function DayNetOnchangeFun(){
	
	var type=$("#dayNetId").val();
	
	if(type === "NET"){
		
		$("#PositionsDivId").show();
	    $("#HoldingsDivId").hide();
	    var type=$("#dayNetId").val();
	    var uid=$("#UserID").val();
		var actid=$("#UserID").val();
		var sprdtali="CNC:CNC||MIS:MIS||NRML:NRML";	
		var s_prdt_ali=sprdtali;
		  $.ajax({
				type :'POST',
				url :'PositionBook',
				data : "s_prdt_ali="+s_prdt_ali+"&uid="+uid+"&actid="+actid+"&type="+type,
				dataType: 'json',
				success:function(response){					
					var jsonObject =JSON.parse(response);
					
					 var body;
				      for (var i = 0; i < jsonObject.length; i++) {
				    	  
				    	 
					        var stat= jsonObject[i].stat;
					        if(stat==='Ok'){
					        	 
					        	var PreviousCloseVal=Number(1);
					        	var Boardlotquantity=jsonObject[i].BLQty;
					        	
					        	var PLvalueOne=parseFloat(jsonObject[i].LTP)-parseFloat(PreviousCloseVal);				        	
					        	
					        	var PLvaluetwo= PLvalueOne*parseFloat(Boardlotquantity)*(parseFloat(jsonObject[i].Netqty))
					        	
					        	var CFBuyavgprc=jsonObject[i].CFBuyavgprc;
					        	var CFSellavgprc=jsonObject[i].CFSellavgprc;
					        	if(CFSellavgprc==0){
					        		var BoughtSoldprice=CFBuyavgprc;
					        	}
					        	else if(CFBuyavgprc==0){
					        		var BoughtSoldprice=CFSellavgprc;
					        	}
					        	
					        	var NetChange= parseFloat(jsonObject[i].LTP)-parseFloat(BoughtSoldprice);
					        					        	
					        	var Symbolvar = JSON.stringify(jsonObject[i].Symbol);	
					        	var TsymVAR=JSON.stringify(jsonObject[i].Tsym);
					        	var TokenTag = jsonObject[i].Token;				        	
					        	var NetqtyTag = jsonObject[i].Netqty;				        	
					        	var PcodeTag= JSON.stringify(jsonObject[i].Pcode);
					        	var ExchangeTag = JSON.stringify(jsonObject[i].Exchange);
					        	
					        	body=body+"<tr  onmouseover='Squareoffbtnmouseover("+TokenTag+")' onmouseout='Squareoffbtnmouseout("+TokenTag+")'>";

					        	//body=body+"<td>" + jsonObject[i].Symbol + "<button type='button' id='"+TokenTag+"_SquareoffbtnId' class='btn squareOffButton'  data-toggle='modal' data-toggle='tooltip' data-placement='bottom' title='Square off' data-target='#SquareoffmyModal' onclick='SquareoffModelViewFun("+TokenTag+","+Symbolvar+","+NetqtyTag+","+PcodeTag+","+ExchangeTag+","+TsymVAR+");' style='font-size:8px; margin-top:-6%;margin-left:40%;display:none;'  >Squareoff </button>";
                                body=body+"<td>" + jsonObject[i].Symbol + "<button type='button' id='"+TokenTag+"_SquareoffbtnId' class='btn swd-button squareOffButton'  data-toggle='modal' data-toggle='tooltip' data-placement='bottom' title='Square off' data-target='#SquareoffmyModal' onclick='SquareoffModelViewFun("+TokenTag+","+Symbolvar+","+NetqtyTag+","+PcodeTag+","+ExchangeTag+","+TsymVAR+");'  style='margin-top:-6%;margin-left:65%;display:none;width:38%;background-color: gray;color: #fff;text-align:center;font-size: 10px;font-family: Helvetica, Sans-Serif;'  >Squareoff </button>";
 

						            
						            body=body+ " <input type='hidden' id='TokenTaghiddenId' value="+TokenTag+" >";
						            body=body+" <input type='hidden' id='symbolhiddenId' value="+Symbolvar+" >";
						            body=body+" <input type='hidden' id='NetqtyhiddenId' value="+NetqtyTag+" >";
						            body=body+" <input type='hidden' id='PcodehiddenId' value="+PcodeTag+" >";
						            body=body+" <input type='hidden' id='ExchangehiddenId' value="+ExchangeTag+" >";
						            body=body+ "</td>";
						            var qos = 1;

						           // client.subscribe(TokenTag,{qos: qos});
						            
						            tokenArray.push(TokenTag);
						            
						        	 body=body+"<td>" + NetqtyTag + "</td>";
						        	 body=body+"<td>" + PreviousCloseVal+ "</td>";
							       //  body=body+"<td>" + jsonObject[i].LTP + "</td>";
							         body=body+"<td><label id='positin_price'></label> </td>";
							         body=body+"<td>" + PLvaluetwo + "</td>";
							         body=body+"<td>" +  NetChange + "</td>";
							         body=body+"</tr>";
						         $('#PositionsbodyId').html(body);
						         $('#PositionsinnerbodyId').hide();
						         $('#PositionsbodyId').show();
					        }
				      else{
				    	  $('#PositionsinnerbodyId').show();
				    	  $('#PositionsbodyId').hide();
				         }        
				      }
				},
				error:function(){
				
				}	
		  });	
			
	}
	else if(type=== "DAY"){
		
		$("#PositionsDivId").show();
	    $("#HoldingsDivId").hide();
	    var type=$("#dayNetId").val();
	    var uid=$("#UserID").val();
		var actid=$("#UserID").val();
		var sprdtali="CNC:CNC||MIS:MIS||NRML:NRML";	
		var s_prdt_ali=sprdtali;
		
		  $.ajax({
				type :'POST',
				url :'PositionBook',
				data : "s_prdt_ali="+s_prdt_ali+"&uid="+uid+"&actid="+actid+"&type="+type,
				dataType: 'json',
//				contentType:'application/json; charset=utf-8',
				success:function(response){
					
					var jsonObject =JSON.parse(response);
					 var body;
				      for (var i = 0; i < jsonObject.length; i++) {
				    	 
				    	
					        var stat= jsonObject[i].stat;
					        
					        if(stat==='Ok'){
					        	 
					        	var PreviousCloseVal=Number(1);
					        	var Boardlotquantity=jsonObject[i].BLQty;
					        	
					        	var PLvalueOne=parseFloat(jsonObject[i].LTP)-parseFloat(PreviousCloseVal);				        	
					        	
					        	var PLvaluetwo= PLvalueOne*parseFloat(Boardlotquantity)*(parseFloat(jsonObject[i].Netqty))					        	
					        	
					        	 var Buyavgprc=parseFloat(jsonObject[i].Buyavgprc);
					        	 var Sellavgprc=parseFloat(jsonObject[i].Sellavgprc);					        
					        	
					        	if(Sellavgprc==0){
					        		var BoughtSoldprice=Buyavgprc;
					        	}
					        	else if(Buyavgprc==0){
					        		var BoughtSoldprice=Sellavgprc;
					        	}
					        	var NetChange= parseFloat(jsonObject[i].LTP)-parseFloat(BoughtSoldprice);

					        	var Symbolvar = JSON.stringify(jsonObject[i].Symbol);
					        	var TsymVAR=JSON.stringify(jsonObject[i].Tsym);
					        	var TokenTag = jsonObject[i].Token;				        	
					        	var NetqtyTag = jsonObject[i].Netqty;				        	
					        	var PcodeTag= JSON.stringify(jsonObject[i].Pcode);
					        	var ExchangeTag = JSON.stringify(jsonObject[i].Exchange);
					        	
					        	
					        	body=body+"<tr  onmouseover='Squareoffbtnmouseover("+TokenTag+")' onmouseout='Squareoffbtnmouseout("+TokenTag+")'>";
					        	//body=body+"<td>" + jsonObject[i].Symbol + "<button type='button' id='"+TokenTag+"_SquareoffbtnId' class='btn squareOffButton'  data-toggle='modal' data-toggle='tooltip' data-placement='bottom' title='Square off' data-target='#SquareoffmyModal' onclick='SquareoffModelViewFun("+TokenTag+","+Symbolvar+","+NetqtyTag+","+PcodeTag+","+ExchangeTag+","+TsymVAR+");' style='font-size:8px; margin-top:-6%;margin-left:40%;display:none;'  >Squareoff </button>";
                                body=body+"<td>" + jsonObject[i].Symbol + "<button type='button' id='"+TokenTag+"_SquareoffbtnId' class='btn swd-button squareOffButton'  data-toggle='modal' data-toggle='tooltip' data-placement='bottom' title='Square off' data-target='#SquareoffmyModal' onclick='SquareoffModelViewFun("+TokenTag+","+Symbolvar+","+NetqtyTag+","+PcodeTag+","+ExchangeTag+","+TsymVAR+");'  style='margin-top:-6%;margin-left:65%;display:none;width:38%;background-color: gray;color: #fff;text-align:center;font-size: 10px;font-family: Helvetica, Sans-Serif;'  >Squareoff </button>";


						            
						            body=body+ " <input type='hidden' id='TokenTaghiddenId' value="+TokenTag+" >";
						            body=body+" <input type='hidden' id='symbolhiddenId' value="+Symbolvar+" >";
						            body=body+" <input type='hidden' id='NetqtyhiddenId' value="+NetqtyTag+" >";
						            body=body+" <input type='hidden' id='PcodehiddenId' value="+PcodeTag+" >";
						            body=body+" <input type='hidden' id='ExchangehiddenId' value="+ExchangeTag+" >";
						            body=body+ "</td>";
						            var qos = 1;

						           // client.subscribe(TokenTag,{qos: qos});
						            
						            tokenArray.push(TokenTag);
						            
						        	 body=body+"<td>" + NetqtyTag + "</td>";
						        	 body=body+"<td>" + PreviousCloseVal+ "</td>";
							       //  body=body+"<td>" + jsonObject[i].LTP + "</td>";
							         body=body+"<td><label id='positin_price'></label> </td>";
							         body=body+"<td>" + PLvaluetwo + "</td>";
							         body=body+"<td>" +  NetChange + "</td>";
							         body=body+"</tr>";
						         $('#PositionsbodyId').html(body);
						         $('#PositionsinnerbodyId').hide();
						         $('#PositionsbodyId').show();
					        }
				      else{
				    	  $('#PositionsinnerbodyId').show();
				    	  $('#PositionsbodyId').hide();
				         }   
					        
					       
				      }
				},
				error:function(){
				
				}	
		  });
		
	}
	
}

function Positionstabfunc()
{	
	$("#PositionstabId").addClass('active');
    $("#HoldingstabId").removeClass('active');
    
       $("#portfoliohideId").show();
	   $("#PositionsDivId").show();
	   $("#HoldingsDivId").hide();
     
    var uid=$("#UserID").val();
	var actid=$("#UserID").val();
	var type=$("#dayNetId").val();
	var sprdtali="CNC:CNC||MIS:MIS||NRML:NRML";	
	var s_prdt_ali=sprdtali;
	var type = "NET";
	  $.ajax({
			type :'POST',
			url :'PositionBook',
			data : "s_prdt_ali="+s_prdt_ali+"&uid="+uid+"&actid="+actid+"&type="+type,
			dataType: 'json',
			success:function(response){
				var jsonObject =JSON.parse(response);
				 var body;
			      for (var i = 0; i < jsonObject.length; i++) {
			    	  
			    	 
				        var stat= jsonObject[i].stat;
				        if(stat==='Ok'){
				        	 
				        	var PreviousCloseVal=Number(1);
				        	var Boardlotquantity=jsonObject[i].BLQty;
				        	
				        	var PLvalueOne=parseFloat(jsonObject[i].LTP)-parseFloat(PreviousCloseVal);				        	
				        	
				        	var PLvaluetwo= PLvalueOne*parseFloat(Boardlotquantity)*(parseFloat(jsonObject[i].Netqty))
				        	
				        	var CFBuyavgprc=jsonObject[i].CFBuyavgprc;
				        	var CFSellavgprc=jsonObject[i].CFSellavgprc;
				        	if(CFSellavgprc==0){
				        		var BoughtSoldprice=CFBuyavgprc;
				        	}
				        	else if(CFBuyavgprc==0){
				        		var BoughtSoldprice=CFSellavgprc;
				        	}
				        		
				        	var NetChange= parseFloat(jsonObject[i].LTP)-parseFloat(BoughtSoldprice);
				        					        	
				        	
				        	var Symbolvar = JSON.stringify(jsonObject[i].Symbol);	
				        	var TsymVAR=JSON.stringify(jsonObject[i].Tsym);
				        	var TokenTag = jsonObject[i].Token;				        	
				        	var NetqtyTag = jsonObject[i].Netqty;				        	
				        	var PcodeTag= JSON.stringify(jsonObject[i].Pcode);
				        	var ExchangeTag = JSON.stringify(jsonObject[i].Exchange);
				        	
				        	body=body+"<tr  onmouseover='Squareoffbtnmouseover("+TokenTag+")' onmouseout='Squareoffbtnmouseout("+TokenTag+")'>";
				        	 //body=body+"<td>" + jsonObject[i].Symbol + "<button type='button' id='"+TokenTag+"_SquareoffbtnId' class='btn-primary swd-button'  data-toggle='modal' data-toggle='tooltip' data-placement='bottom' title='Square off' data-target='#SquareoffmyModal' onclick='SquareoffModelViewFun( "+TokenTag+","+Symbolvar+","+NetqtyTag+","+PcodeTag+","+ExchangeTag+","+TsymVAR+");' style='cursor: pointer;font-size:12px;width:40%;height:25px; margin-top:-6%;margin-left:40%;display:none;'  >Squareoff </button>" +
                            body=body+"<td>" + jsonObject[i].Symbol + "<button type='button' id='"+TokenTag+"_SquareoffbtnId' class='btn swd-button squareOffButton'  data-toggle='modal' data-toggle='tooltip' data-placement='bottom' title='Square off' data-target='#SquareoffmyModal' onclick='SquareoffModelViewFun("+TokenTag+","+Symbolvar+","+NetqtyTag+","+PcodeTag+","+ExchangeTag+","+TsymVAR+");'  style='margin-top:-6%;margin-left:65%;display:none;width:38%;background-color: gray;color: #fff;text-align:center;font-size: 10px;font-family: Helvetica, Sans-Serif;'  >Squareoff </button>";
	 

					            
					            body=body+ " <input type='hidden' id='TokenTaghiddenId' value="+TokenTag+" >";
					            body=body+" <input type='hidden' id='symbolhiddenId' value="+Symbolvar+" >";
					            body=body+" <input type='hidden' id='NetqtyhiddenId' value="+NetqtyTag+" >";
					            body=body+" <input type='hidden' id='PcodehiddenId' value="+PcodeTag+" >";
					            body=body+" <input type='hidden' id='ExchangehiddenId' value="+ExchangeTag+" >";
					            body=body+ "</td>";
					            var qos = 1;

					            //client.subscribe(TokenTag,{qos: qos});
					            
					            tokenArray.push(TokenTag);
					            
					        	 body=body+"<td>" + NetqtyTag + "</td>";
					        	 body=body+"<td>" + PreviousCloseVal+ "</td>";
						       //  body=body+"<td>" + jsonObject[i].LTP + "</td>";
						         body=body+"<td><label id='positin_price'></label> </td>";
						         body=body+"<td>" + PLvaluetwo + "</td>";
						         body=body+"<td>" +  NetChange + "</td>";
						         body=body+"</tr>";
					         $('#PositionsbodyId').html(body);
					         $('#PositionsinnerbodyId').hide();
					         $('#PositionsbodyId').show();
				        }
			      else{
			    	  $('#PositionsinnerbodyId').show();
			    	  $('#PositionsbodyId').hide();
			         }        
				       
			      }
			    },
			error:function(){
			
			}	
	  });   
    
}



function SquareoffModelViewFun(TokenTag,Symbolvar,NetqtyTag,PcodeTag,ExchangeTag,TsymVAR){
	
	
	
	var symbolhiddenIdTag=Symbolvar;
	var NetqtyhiddenIdTag=NetqtyTag;
	var PcodehiddenIdTag=PcodeTag;
	var ExchangehiddenIdTag=ExchangeTag;
	var TokenTag=TokenTag ;
	
	
	$("#SquareoffsymbolTxtId").val(symbolhiddenIdTag);
	
	$("#SquareoffPcodeId").val(PcodehiddenIdTag);
	$("#SquareoffExchangeId").val(ExchangeTag);
	$("#SquareoffTokenId").val(TokenTag);
	document.getElementById("SquareofflabelId").innerHTML=TsymVAR;	
	$("#SquareoffHiddenId").val(TsymVAR);
	$("#TokenhiddenId").val(TokenTag);
	var PstvNetqtyTag= Math.abs(NetqtyhiddenIdTag);
	$("#SquareoffNetqtyId").val(PstvNetqtyTag);
	$("#SqroffDiscquantityId").val(0);
	if (NetqtyhiddenIdTag < 0){
	var NetQtyHiddenvalueforBtnTag="Negative";
	$("#NetQtyHiddenvalueforBtn").val(NetQtyHiddenvalueforBtnTag);
	
	$("#SqroffbuyId").show();
	$("#SqroffsellId").hide();
	}
	else if(NetqtyhiddenIdTag > 0){
		var NetQtyHiddenvalueforBtnTag="Positive";
		$("#NetQtyHiddenvalueforBtn").val(NetQtyHiddenvalueforBtnTag);
		$("#SqroffbuyId").hide();
		$("#SqroffsellId").show();
	}
}











function SquareoffSubmitFun(){
	
	var sprdtali="CNC:CNC||MIS:MIS||NRML:NRML";	
	var uid=$("#UserID").val(); 
	var actid=$("#UserID").val();
	var s_prdt_ali=sprdtali;	
	var Exchangeseg=$("#SquareoffExchangeId").val();
	var Pcode=$("#SquareoffPcodeId").val();
	var Netqty=$("#SquareoffNetqtyId").val();
	var Token=$("#SquareoffTokenId").val();
	var symbol=$("#SquareoffsymbolTxtId").val();
	var orderSource="s";
	
	  $.ajax({
			type :'POST',
			url :'SquareOffPosition',
			data : "uid="+uid+"&actid="+actid+"&s_prdt_ali="+s_prdt_ali+"&Exchangeseg="+Exchangeseg+"&Pcode="+Pcode+"&Netqty="+Netqty+"&Token="+Token+"&symbol="+symbol+"&orderSource="+orderSource,
			success:function(response){
				

				
				var jsonObject =JSON.parse(response);
	
				 var body;
			      for (var i = 0; i < jsonObject.length; i++) {
				        var stat= jsonObject[i].stat;
				        if(stat==='Ok'){
				        	
				        }
				        else{
				        	
				        }
			      }
			      
			},
			error:function(){
		    	alert("SquareOffPosition Error");
			
			}	
	  });  
	 
	}

function HoldingsOnClickFunc(){ 

	$("#HoldingstabId").addClass('active');
    $("#PositionstabId").removeClass('active');
    
       $("#portfoliohideId").show();
	   $("#PositionsDivId").hide();
	   $("#HoldingsDivId").show();
	   $("#orderhideId").hide();
//	   $("#PendingDivId").hide();
	   $("#CompletedDivId").hide();
	   $("#TradeBookDivId").hide();
    
	   $.ajax({
			type :'POST',
			url :'HoldingDatafromDB',  //Holding
			dataType: 'json',
			success:function(jsonObject){
				
				//alert("response:: "+jsonObject);
				//var holdingdata =JSON.parse(response);
				
				 var body;
				 var holdingdata=jsonObject.list;
				 
				 //alert("holdingdata length:::"+holdingdata.length);
				 
				  for (var i = 0; i < holdingdata.length; i++) {
					  
					  var t1flagdata ="";
					  if(holdingdata[i].t1flag =="1"){
						  t1flagdata = " - T1";  
					  }
	    		
				    var t1flag=holdingdata[i].t1flag;
	    			var account_code=holdingdata[i].acct_code;
	    		 	var symbol=holdingdata[i].symbol;
	    			var series=holdingdata[i].series;
	    			var quantity=holdingdata[i].quantity;
	    			
				     				     
	    			 body=body+"<tr>";
	    			 body=body+"<td>" + symbol + " - " +series + t1flagdata+"</td>";
		        	 body=body+"<td>" + quantity + "</td>";
		        	
			         body=body+"</tr>";
			         
			         $('#HoldingsbodyId').html(body);
			         $('#HoldingsinnerbodyId').hide();					         
			         $('#HoldingsbodyId').show();
				 }  
				  
				 // alert("account_code " + account_code +" symbol "+symbol+ "series" +series + "quantity" +quantity);
						   
	    },
	error:function(){
		alert("Holding Error");
	
	      }	
	    
     });
			
}



function Holdingstabfunc(){
	
	$("#HoldingstabId").addClass('active');
    $("#PositionstabId").removeClass('active');
    
       $("#portfoliohideId").show();
	   $("#PositionsDivId").hide();
	   $("#HoldingsDivId").show();
	   $("#orderhideId").hide();
//	   $("#PendingDivId").hide();
	   $("#CompletedDivId").hide();
	   $("#TradeBookDivId").hide();
    
    
    var sprdtali="CNC:CNC||MIS:MIS||NRML:NRML";	
    
    var uid=$("#UserID").val();    
	var actid=$("#UserID").val();
	var brkname="DefaultLogin";	  //NormalLogin DefaultLogin
	var s_prdt_ali=sprdtali;
	var symbol="";
	var exch="";
	var Pcode="CNC"
//	var type = "NET";
	  $.ajax({
			type :'POST',
			url :'Holding',  //Holding
			data : "s_prdt_ali="+s_prdt_ali+"&uid="+uid+"&actid="+actid+"&brkname="+brkname+"&symbol="+symbol+"&exch="+exch+"&Pcode="+Pcode,
//			data : "s_prdt_ali="+s_prdt_ali+"&uid="+uid+"&actid="+actid+"&type="+type,
			dataType: 'json',
			success:function(response){
				
				var jsonObject =JSON.parse(response);
				
				 var body;
			      for (var i = 0; i < jsonObject.length; i++) {			    	  
				        var stat= jsonObject[i].stat;
				        
				        if(stat==='Ok'){
				        	 
				        	var PreviousCloseVal=Number(1);
				        	var Boardlotquantity=jsonObject[i].BLQty;
				        	
				        	var PLvalueOne=parseFloat(jsonObject[i].LTP)-parseFloat(PreviousCloseVal);				        	
				        	
				        	var PLvaluetwo= PLvalueOne*parseFloat(Boardlotquantity)*(parseFloat(jsonObject[i].Netqty))
				        	
				        	var CFBuyavgprc=jsonObject[i].CFBuyavgprc;
				        	var CFSellavgprc=jsonObject[i].CFSellavgprc;
				        	if(CFSellavgprc==0){
				        		var BoughtSoldprice=CFBuyavgprc;
				        	}
				        	else if(CFBuyavgprc==0){
				        		var BoughtSoldprice=CFSellavgprc;
				        	}
				        		
				        	var NetChange= parseFloat(jsonObject[i].LTP)-parseFloat(BoughtSoldprice);
				        					        	
				        	
				        	var Symbolvar = JSON.stringify(jsonObject[i].Symbol);				        	
				        	var TokenTag = jsonObject[i].Token;				        	
				        	var NetqtyTag = jsonObject[i].Netqty;				        	
				        	var PcodeTag= JSON.stringify(jsonObject[i].Pcode);
				        	var ExchangeTag = JSON.stringify(jsonObject[i].Exchange);

				        	

				        	body=body+"<tr>";
				        	 body=body+"<td>" + jsonObject[i].Symbol +"</td>";
				        	 body=body+"<td>" + NetqtyTag + "</td>";
				        	 body=body+"<td>" + PreviousCloseVal+ "</td>";
					         body=body+"<td>" + jsonObject[i].LTP + "</td>";
					         body=body+"<td>" + PLvaluetwo + "</td>";
					         body=body+"<td>" +  NetChange + "</td>";
					         body=body+"</tr>";
					         $('#HoldingsbodyId').html(body);
					         $('#HoldingsinnerbodyId').hide();					         
					         $('#HoldingsbodyId').show();
					         $('#PositionsbodyId').hide();
					         $('#PositionsinnerbodyId').hide();
				        }
			      else{
			    	  $('#HoldingsinnerbodyId').show();
			    	  $('#HoldingsbodyId').hide();
			    	  $('#PositionsbodyId').hide();
				         $('#PositionsinnerbodyId').hide();
			         }        
				       
			      }
			    },
			error:function(){
				//alert("Holding Error");
			
			}	
	  });
}



function SqroffPlaceOrderbuyfun(){
	
	var web="WEB";
	var MCX="MCX";
	var NSE="NSE";
	
	var DiscQuanErrorTag= document.getElementById("DiscQuanhiddenErrorId").value;		
	
	
		if($("input:radio[name='SqroffRegularOrdId']").is(":checked")) { 
		
 	
		
		var sprdtali="CNC:CNC||MIS:MIS||NRML:NRML";	
		var s_prdt_ali=sprdtali;
		var uid=$("#UserID").val();
		var actid=$("#UserID").val();			

		var NetQtyHiddenvalueforBtnTag=$("#NetQtyHiddenvalueforBtn").val();
		

		if(NetQtyHiddenvalueforBtnTag=="Negative"){
			var Ttranstype='B';
		}
		if(NetQtyHiddenvalueforBtnTag=="Positive"){
			var Ttranstype='S';
		}
	
		
		if($("input:radio[name='SqroffdayId']").is(":checked")) {
		var Ret="DAY";
		}
		if($("input:radio[name='SqroffiocId']").is(":checked")) {
			var Ret="IOC";
			}
		
		 
		
		//var prctyp="L"; //Price type (from DefaultLogin/ NormalLogin rest api)
		
		if($("input:radio[name='SqrofflmtId']").is(":checked")) {
			var prctyp="L";	
		}
		 if($("input:radio[name='SqroffmktId']").is(":checked")) {
				var prctyp="MKT";	
			}
		 
		var qty=$("#SquareoffNetqtyId").val();		
		var discqtyVAL=$("#SqroffDiscquantityId").val();		 
		var scriptName=$("#SquareoffHiddenId").val();		 
		var Tokenval=$("#TokenhiddenId").val();		 
		var ScriptType=$("#SquareoffExchangeId").val();
		 
		var discqty;
		var exch;
		var Tsym;
		var TokenNo;
		
		 if(ScriptType==='MCX'){ //MCX
			 discqty=discqtyVAL;
			 exch=MCX;			
			 Tsym=scriptName;	
			 TokenNo=Tokenval;		
		 }
		 if(ScriptType==='NSE'){ //NSE
				exch=NSE;				
				discqty=discqtyVAL;				
				Tsym=scriptName;	
				TokenNo=Tokenval;				
				}
		 
		 if(ScriptType==='NFO'){ //F&O
				 exch="NFO";
				 discqty="0";
				 Tsym=scriptName;
			}
		 
		var MktPro="NA"; //(MktPro Should be sent as NA by default)	
		var PriceVAL=$("#SqroffpriceId").val();
		var TriggerpriceVAL=$('#SqroffTriggerpriceId').val();  //(TrigPrice Send as 0 for default)
		var TrigPrice;
		var Price;
		if($("input:radio[name='SqrofflmtId']").is(":checked")) {
			TrigPrice="0";
			Price=PriceVAL;
		}
		if($("input:radio[name='SqroffmktId']").is(":checked")) {
			TrigPrice="0";
			Price=PriceVAL;
		}

		if($("input:radio[name='SqroffNrmlId']").is(":checked")) {
			var Pcode="NRML";
		}		
		var DateDays="NA"; //(DateDays Send as NA for default)
		
		var AMO="NO";
		var PosSquareFlg="N";
		var MinQty="0"; //(MinQty Send as 0 for default)
		var orderSource=web
		var naicCode="010";
		
	$.ajax({
		type :'POST',
		url :'PlaceOrder',		
		data:"s_prdt_ali="+s_prdt_ali+"&uid="+uid+"&actid="+actid+"&Tsym="
		+Tsym+"&exch="+exch+"&Ttranstype="+Ttranstype+"&Ret="+Ret+"&prctyp="+prctyp+"&qty="+qty+"&discqty="+discqty+
		"&MktPro="+MktPro+"&Price="+Price+"&TrigPrice="+TrigPrice+"&Pcode="+Pcode+"&DateDays="+DateDays+"&AMO="+AMO+
		"&PosSquareFlg="+PosSquareFlg+"&MinQty="+MinQty+"&orderSource="+orderSource+"&naicCode="+naicCode+"&TokenNo="+TokenNo,
		success:function(response){
		
		var JsonObject= JSON.parse(response);
		var values= Object.values(JsonObject);
		var result=values[1];
		var stat= values[0];
		if(stat==='Ok'){
			$('#BuyOrderNumberModelId').modal('show'); 		
			$('#buyOrderNumbers').html(result);
			$('#SquareoffmyModal').modal('hide');
		}
		else if(stat==='Not_Ok'){
			alert("Error :"+result);
			$('#SquareoffmyModal').modal('show');
		}
		
	
		},
		error:function(){
		//	alert("PlaceOrder Error");
		
		}	
	});
	
	}	
	
}

function mySqroffdiscqtyFunction(){
    
	   var Discquantity = document.getElementById("SqroffDiscquantityId").value;
	   var Quantity = document.getElementById("SquareoffNetqtyId").value;
	   
	   var scriptName=$("#SquareoffHiddenId").val();
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
	 if(scriptName==='NATURALGAS'){ 			//NSE
		
		 $("#NrmlId").prop("disabled",true);
		 $('#GTTlabelId').show();
		 
	  var perVal = Number(Quantity /100 ) * Number(ValueTenPer);
	  
	  if(Number(Discquantity) === Number(Zero)){
		     $("#SqroffDiscQuanNSEErrorId").hide();

		  document.getElementById("SqroffbuyId").disabled = false;	
		  document.getElementById("SqroffsellId").disabled = false;
	  }

	  else if(Number(Discquantity)<Number(perVal) ||  Number(Discquantity)>Number(Quantity))
	{
			document.getElementById("SqroffDiscQuanNSEhiddenErrorId").value='SqroffDiscQuanNSEError';
		  $("#SqroffDiscQuanNSEErrorId").show();

		  document.getElementById("SqroffbuyId").disabled = true;	
		  document.getElementById("SqroffsellId").disabled = true;
	}
	  else if(Number(Discquantity)>=Number(perVal) ||  Number(Discquantity)>Number(Quantity))
	{
		  $("#SqroffDiscQuanNSEErrorId").hide();

		  document.getElementById("SqroffbuyId").disabled = false;	
		  document.getElementById("SqroffsellId").disabled = false;
	}
	 }
	 
	 if(scriptName==='CRUDEOIL'){ 				//MCX
		
		 var perVal = Number(Quantity /100 ) * Number(ValueTwentyFivePer);
					
		 if(Number(Discquantity) === Number(Zero)){
			   $("#SqroffDiscQuanMCXErrorId").hide();

	    		  document.getElementById("SqroffbuyId").disabled = false;	
	    		  document.getElementById("SqroffsellId").disabled = false;
		  }
		 
		 else  if(Number(Discquantity)<Number(perVal) ||  Number(Discquantity)>Number(Quantity))
			{
				 document.getElementById("SqroffDiscQuanMCXhiddenErrorId").value='SqroffDiscQuanMCXError';
				  $("#SqroffDiscQuanMCXErrorId").show();

	    		  document.getElementById("SqroffbuyId").disabled = true;	
	    		  document.getElementById("SqroffsellId").disabled = true;
			}
			  else if(Number(Discquantity)>=Number(perVal) ||  Number(Discquantity)>Number(Quantity))
			{
				  $("#SqroffDiscQuanMCXErrorId").hide();

	    		  document.getElementById("SqroffbuyId").disabled = false;	
	    		  document.getElementById("SqroffsellId").disabled = false;
			}
		  
	 }
	 
} 


function mySquareoffNetqtyFunction(){
	 
	   var Quantity = document.getElementById("SquareoffNetqtyId").value;
	   var Discquantity = document.getElementById("SqroffDiscquantityId").value;	   

	      var scriptName=$("#SquareoffHiddenId").val();
		  var ValueTwentyFivePer=Number(25);
		  var ValueTenPer=Number(10);
		  var Zero="0";
		  
	/* if(Number(Quantity)< Number(Discquantity)){
		 document.getElementById("DiscQuanhiddenErrorId").value='DiscQuanError';
	$("#DiscQuanErrorId").show();
	
document.getElementById("buyId").disabled = true;	
document.getElementById("sellId").disabled = true;
	}
	else if(Number(Quantity)> Number(Discquantity) || Number(Quantity)>= Number(Discquantity)){
		$("#DiscQuanErrorId").hide();

		  document.getElementById("buyId").disabled = false;	
		  document.getElementById("sellId").disabled = false;
	}
*/
	  if(scriptName==='NATURALGAS'){ 		//NSE
		  
		 
	  var perVal = Number(Quantity /100 ) * Number(ValueTenPer);
	  
	  if(Number(Discquantity) === Number(Zero)){
		   $("#SqroffDiscQuanNSEErrorId").hide();

		  document.getElementById("SqroffbuyId").disabled = false;	
		  document.getElementById("SqroffsellId").disabled = false;
	  }
	  
	  else  if(Number(Discquantity)<Number(perVal) ||  Number(Discquantity)>Number(Quantity))
	{
		  document.getElementById("SqroffDiscQuanNSEhiddenErrorId").value='SqroffDiscQuanNSEError';
		  $("#SqroffDiscQuanNSEErrorId").show();

		  document.getElementById("SqroffbuyId").disabled = true;	
		  document.getElementById("SqroffsellId").disabled = true;
	}
	  else if(Number(Discquantity)>=Number(perVal) ||  Number(Discquantity)>Number(Quantity))
	{
		  $("#SqroffDiscQuanNSEErrorId").hide();

		  document.getElementById("SqroffbuyId").disabled = false;	
		  document.getElementById("SqroffsellId").disabled = false;
	}
	  }

		if(scriptName==='CRUDEOIL'){        //MCX
		
		 var perVal = Number(Quantity /100 ) * Number(ValueTwentyFivePer);
		 
		 if(Number(Discquantity) === Number(Zero)){
			   $("#SqroffDiscQuanMCXErrorId").hide();

	    		  document.getElementById("SqroffbuyId").disabled = false;	
	    		  document.getElementById("SqroffsellId").disabled = false;
		  }	  
		 else if(Number(Discquantity)<Number(perVal) ||  Number(Discquantity)>Number(Quantity))
			{
			document.getElementById("SqroffDiscQuanMCXhiddenErrorId").value='SqroffDiscQuanMCXError';
				  $("#SqroffDiscQuanMCXErrorId").show();
	    		  document.getElementById("SqroffbuyId").disabled = true;	
	    		  document.getElementById("SqroffsellId").disabled = true;
			}
			  else if(Number(Discquantity)>=Number(perVal) ||  Number(Discquantity)>Number(Quantity))
			{
				  
				  $("#SqroffDiscQuanMCXErrorId").hide();

	    		  document.getElementById("SqroffbuyId").disabled = false;	
	    		  document.getElementById("SqroffsellId").disabled = false;
			}
		}
		
}




function Squareoffbtnmouseover(id){

	document.getElementById(id+"_SquareoffbtnId").style.display = "block";
}


function Squareoffbtnmouseout(id){
	document.getElementById(id+"_SquareoffbtnId").style.display = "none";
}

