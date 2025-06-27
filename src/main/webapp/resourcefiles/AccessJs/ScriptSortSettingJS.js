
function ShowModalScritSetting(){
	
	var SortingbyfieldhiddenvalueId= $("#SortingbyfieldhiddenvalueId").val();
	var SortingbyOrderhiddenvalueId= $("#SortingbyOrderhiddenvalueId").val();
	//alert("SortingbyfieldhiddenvalueId : "+SortingbyfieldhiddenvalueId)
	//alert("SortingbyOrderhiddenvalueId : "+SortingbyOrderhiddenvalueId)
	$("#myModalScriptSetting").show();
	
	 var ascorder="asc";
	 var descorder="desc";
	if(SortingbyOrderhiddenvalueId===ascorder){
		$("#AZSortdescId").show();
		$("#AZSortascId").hide();							
		$("#EXCSortdescId").show();
		$("#EXCSortascId").hide();
	}
	else if(SortingbyOrderhiddenvalueId===descorder){
		$("#AZSortdescId").hide();
		$("#AZSortascId").show();
		$("#EXCSortdescId").hide();
		$("#EXCSortascId").show();
	}
	
	
	document.getElementById("SortingbyfieldModalhiddenvalueId").value=SortingbyfieldhiddenvalueId;
	document.getElementById("SortingbyOrderModalhiddenvalueId").value=SortingbyOrderhiddenvalueId;
}


function SortingOrderfunctionAZ(){
	$("#myModalScriptSetting").show();
	
	var SortingbyfieldId=$("#SortingbyfieldModalhiddenvalueId").val();	
	var SortingbyOrderId=$("#SortingbyOrderModalhiddenvalueId").val();
	//alert("SortingbyfieldhiddenvalueId : "+SortingbyfieldId)
	//alert("SortingbyOrderhiddenvalueId : "+SortingbyOrderId)
		$.ajax({
			type :'POST',
			url :'SortingOrderfunctionAZ',	
			dataType: 'json',
			data:"SortingbyfieldId="+SortingbyfieldId+"&SortingbyOrderId="+SortingbyOrderId,		
			success:function(jsonObject){
					var body;
				
					var response=jsonObject.scriptList;
					  
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
						var nfostrike_price=JSON.stringify(response[i].nfostrike_price);
						var nfooption_type=JSON.stringify(response[i].nfooption_type);
						var nfoinstrument_name=JSON.stringify(response[i].nfoinstrument_name);
						var nfoexpiryoriginaldate=JSON.stringify(response[i].nfoexpiryoriginaldate);
						 /* tokenId = response[i].token;
			             tokenArray.push(tokenId); */
						
						
			     		body=body+"<tr  id='"+response[i].token+"_mydivId'  onmouseover='stockbuybtnmouseover("+token+")' onmouseout='stockbuybtnmouseout("+token+")' style='height:40px;border-bottom: 1px solid lightcyan;'>";
			             
						body=body+"<td  class='Field' id='"+response[i].token+"'  style='height:40px;width:350px;padding-left:15px; padding-top:20px;padding-bottom: 10px;'>"
						body=body+" <span style='display:block;'><i class='icon ion-md-star'></i>"+response[i].scriptName+"&nbsp;<label class='addbtn'>"+response[i].exchange+"</label>";
		           	  "<input type='hidden' id='mydivhiddenId' name='mydivhiddenId' value='"+response[i].token+"_mydivId' />";
		           	body=body+" </span> ";
						//body=body+"<div   id='"+response[i].token+"_stockbuysell' style='display:none'>";
						//body=body+"<i class='icon ion-md-star'></i>"+response[i].scriptName+"&nbsp;"
						 
					//body=body+"<a id='"+response[i].token+"_stockbuysell'    name='stockbuyName' href='#' onclick='onclickstockbuybtnToggle(); changeModalContent(event);  onclickstockbuybtn("+scriptName+","+price+","+exchange+","+token+","+displayname+","+mcxTickSize+","+mcxOriginalExpiryDate+","+nseTickSize+","+nseExDate+","+nfoexpiry_date+","+mcxInstrumentCode+","+mcxStrikePrice+","+mcxOptionType+","+mcxInstrumentName+","+mcxInstrumentSeries+","+nseSymbol+","+nseSeries+","+nfoSymbol+","+nfostrike_price+","+nfooption_type+","+nfoinstrument_name+")' data-toggle='modal'  data-target='#myModal' >buy</a>";
					
						//body=body+"<button type='button'    id='"+response[i].token+"_stockbuysell'    name='stockbuyName'  onclick='onclickstockbuybtnToggle(); changeModalContent(event);  onclickstockbuybtn("+scriptName+","+price+","+exchange+","+token+","+displayname+","+mcxTickSize+","+mcxOriginalExpiryDate+","+nseTickSize+","+nseExDate+","+nfoexpiry_date+","+mcxInstrumentCode+","+mcxStrikePrice+","+mcxOptionType+","+mcxInstrumentName+","+mcxInstrumentSeries+","+nseSymbol+","+nseSeries+","+nfoSymbol+","+nfostrike_price+","+nfooption_type+","+nfoinstrument_name+")' data-toggle='modal'  data-target='#myModal' >BUY</button>";
						//body=body+"<button type='button'    id=''    name='stocksellName'  onclick='onclickstocksellbtnToggle(); changeModalContent(event);  onclickstocksellbtn("+scriptName+","+price+","+exchange+","+token+","+displayname+","+mcxTickSize+","+mcxOriginalExpiryDate+","+nseTickSize+","+nseExDate+","+nfoexpiry_date+","+mcxInstrumentCode+","+mcxStrikePrice+","+mcxOptionType+","+mcxInstrumentName+","+mcxInstrumentSeries+","+nseSymbol+","+nseSeries+","+nfoSymbol+","+nfostrike_price+","+nfooption_type+","+nfoinstrument_name+")'  data-toggle='modal'  data-target='#myModal'>SELL</button>";
						//body=body+"<button type='button'    class=' stocksellbtn swd-button' id=''    name='marketDepthName'  onclick='getMarketDepth("+scriptName+","+price+","+exchange+","+token+")' data-target='#modalMarketDepth' data-toggle='modal'>MD</button>"
						    
						    

						//body=body+"<button type='button' style='cursor:pointer' class='stocksellbtn swd-button' id='deletescriptId' name='deletescriptId'  onclick='deleteScript("+token+")' >Delete</button>";	
						//body=body+"<icon  style='cursor:pointer' class='fa fa-clock-o' id='setalertId' name='setalertId'  onclick='setAlert("+scriptName+","+price+","+exchange+","+token+","+mcxOriginalExpiryDate+","+nseExDate+","+nfoexpiry_date+")' data-toggle='modal'  data-target='#myModalAlertSet' >SetAlert</icon>";

						//body=body+"</div>";
						body=body+"</td>";  
						if(response[i].price !=null){
						body=body+"<td id='"+response[i].token+"_priceid' class='Field'>"+response[i].price+"</td>&nbsp;&nbsp;";
						}else{
							body=body+"<td id='"+response[i].token+"_priceid' class='Field' style='width:40px;padding-left:0px;padding-bottom: 10px;'></td>";
						}
						body=body+"<td id='"+response[i].token+"_changeid' class='Field' style='width:40px;padding-left:0px;padding-bottom: 10px;'>+0.0</td>";
						
		          
						body=body+"</tr>";
						
							body=body+"<tr  id='"+response[i].token+"_stockbuysellfirst'  onmouseover='stockbuybtnmouseover("+token+")' onmouseout='stockbuybtnmouseout("+token+")' style='background-color:lightblue;width:100%;height:40px;border-bottom: 1px solid lightcyan;visibility:collapse'>";
				             
							body=body+"<td  class='Field' id='"+response[i].token+"'  style='height:40px;padding-left:15px; padding-top:20px;padding-bottom: 10px;'>"
							body=body+" <span style='display:block;'><i class='icon ion-md-star'></i>"+response[i].scriptName+"&nbsp;<label class='addbtn'>"+response[i].exchange+"</label>";
			             	  "<input type='hidden' id='mydivhiddenId' name='mydivhiddenId' value='"+response[i].token+"_mydivId' />";
			             	body=body+" </span> ";
			             	body=body+"</td>";
			             	body=body+"<td>";
					        body=body+"<div class='wrapwrapper' id='"+response[i].token+"_buy_sell_wrapper'><div class='wrapper'>"
					        body=body+"<div class='icon facebook'><div class='tooltip'>Buy</div><span><i class='fab b-buy-b'></i></span></div>";
					        body=body+"<div class='icon twitter'><div class='tooltip'>Sell</div><span><i class='fab s-sell-s'></i></span></div>"
					        body=body+"<div class='icon instagram' onclick='loadChart();'><div class='tooltip'>Chart</div><span><i class='fab c-chart-c'></i></span></div>";
					       // if(response[i].exchange=='NFO' && response[i].nfoinstrument_name=='FUTIDX' || response[i].nfoinstrument_name=='FUTSTK' ){
					        if(response[i].exchange=='NFO' && response[i].nfoinstrument_name=='OPTIDX' || response[i].nfoinstrument_name=='OPTSTK'  ){
						        body=body+"<div class='icon instagram' onclick='OptionChainfun("+displayname+","+exchange+","+nfoexpiryoriginaldate+","+nfoinstrument_name+")'><div class='tooltip'>Option</div><span><i class='fab o-chart-o'>O</i></span></div>";
						        }
						        else{
							        body=body+"<div style='display:none;' class='icon instagram'><div class='tooltip' style='display:none;'>OptionChain</div><span><i class='fab o-chart-o'></i></span></div>";

						        }
					 	        body=body+"<div class='icon instagram ' onclick='ShowModalMoreOption("+displayname+","+token+")' data-toggle='modal'  data-target='#myModalMoreOption'><div class='tooltip'>More</div><span><i class='fa fa-bars'></i></span></div>";
						        
					        
					        
					        
					        body=body+"</div></div>"
			             	
							//body=body+"<div   id='"+response[i].token+"_stockbuysell' style='display:none'>";
							//body=body+"<i class='icon ion-md-star'></i>"+response[i].scriptName+"&nbsp;"
							 
						//body=body+"<a id='"+response[i].token+"_stockbuysell'    name='stockbuyName' href='#' onclick='onclickstockbuybtnToggle(); changeModalContent(event);  onclickstockbuybtn("+scriptName+","+price+","+exchange+","+token+","+displayname+","+mcxTickSize+","+mcxOriginalExpiryDate+","+nseTickSize+","+nseExDate+","+nfoexpiry_date+","+mcxInstrumentCode+","+mcxStrikePrice+","+mcxOptionType+","+mcxInstrumentName+","+mcxInstrumentSeries+","+nseSymbol+","+nseSeries+","+nfoSymbol+","+nfostrike_price+","+nfooption_type+","+nfoinstrument_name+")' data-toggle='modal'  data-target='#myModal' >buy</a>";
						
							//body=body+"<button type='button'    id='"+response[i].token+"_stockbuysell'    name='stockbuyName'  onclick='onclickstockbuybtnToggle(); changeModalContent(event);  onclickstockbuybtn("+scriptName+","+price+","+exchange+","+token+","+displayname+","+mcxTickSize+","+mcxOriginalExpiryDate+","+nseTickSize+","+nseExDate+","+nfoexpiry_date+","+mcxInstrumentCode+","+mcxStrikePrice+","+mcxOptionType+","+mcxInstrumentName+","+mcxInstrumentSeries+","+nseSymbol+","+nseSeries+","+nfoSymbol+","+nfostrike_price+","+nfooption_type+","+nfoinstrument_name+")' data-toggle='modal'  data-target='#myModal' >BUY</button>";
							//body=body+"<button type='button'    id=''    name='stocksellName'  onclick='onclickstocksellbtnToggle(); changeModalContent(event);  onclickstocksellbtn("+scriptName+","+price+","+exchange+","+token+","+displayname+","+mcxTickSize+","+mcxOriginalExpiryDate+","+nseTickSize+","+nseExDate+","+nfoexpiry_date+","+mcxInstrumentCode+","+mcxStrikePrice+","+mcxOptionType+","+mcxInstrumentName+","+mcxInstrumentSeries+","+nseSymbol+","+nseSeries+","+nfoSymbol+","+nfostrike_price+","+nfooption_type+","+nfoinstrument_name+")'  data-toggle='modal'  data-target='#myModal'>SELL</button>";
							//body=body+"<button type='button'    class=' stocksellbtn swd-button' id=''    name='marketDepthName'  onclick='getMarketDepth("+scriptName+","+price+","+exchange+","+token+")' data-target='#modalMarketDepth' data-toggle='modal'>MD</button>"
							    
							    

							//body=body+"<button type='button' style='cursor:pointer' class='stocksellbtn swd-button' id='deletescriptId' name='deletescriptId'  onclick='deleteScript("+token+")' >Delete</button>";	
							//body=body+"<icon  style='cursor:pointer' class='fa fa-clock-o' id='setalertId' name='setalertId'  onclick='setAlert("+scriptName+","+price+","+exchange+","+token+","+mcxOriginalExpiryDate+","+nseExDate+","+nfoexpiry_date+")' data-toggle='modal'  data-target='#myModalAlertSet' >SetAlert</icon>";

							//body=body+"</div>";
							body=body+"</td>";
							body=body+"<td id='"+response[i].token+"_changeid' class='Field' style='width:40px;padding-left:0px;padding-bottom: 10px;'>+0.0</td>";
							
							if(response[i].price !=null){
							//body=body+"<td id='"+response[i].token+"_priceid' class='Field'>"+response[i].price+"</td>&nbsp;&nbsp;";
							}else{
								//body=body+"<td id='"+response[i].token+"_priceid' class='Field' style='width:40px;padding-left:0px;padding-bottom: 10px;'></td>";
							}
							//body=body+"<td id='"+response[i].token+"_changeid' class='Field' style='width:40px;padding-left:0px;padding-bottom: 10px;'>+0.0</td>";
							
			            
							body=body+"</tr>";
							
							
						

					}
					
					
						var SortingbyfieldTag=jsonObject.Sortingbyfield;
						var SortingbyOrderTag=jsonObject.SortingbyOrder;
						
						//alert("SortingbyfieldhiddenvalueId : "+SortingbyfieldTag)
						//alert("SortingbyOrderhiddenvalueId : "+SortingbyOrderTag)
						 document.getElementById("SortingbyfieldhiddenvalueId").value=SortingbyfieldTag;
						 document.getElementById("SortingbyOrderhiddenvalueId").value=SortingbyOrderTag;
						 
						 document.getElementById("SortingbyfieldModalhiddenvalueId").value=SortingbyfieldTag;
						 document.getElementById("SortingbyOrderModalhiddenvalueId").value=SortingbyOrderTag;
						 
						 var ascorder="asc";
						 var descorder="desc";
						if(SortingbyOrderTag===ascorder){
							$("#AZSortdescId").show();
							$("#AZSortascId").hide();
						}
						else if(SortingbyOrderTag===descorder){
							$("#AZSortdescId").hide();
							$("#AZSortascId").show();
						}
						
						
						 $('#addscriptId').html(body); 
			},
			error:function(){
				alert("SortingOrderfunctionAZ Error");
			
			}	
		});	
	}


function SortingOrderfunctionExchange(){
	
	var SortingbyfieldId=$("#SortingbyfieldhiddenvalueId").val();	
	var SortingbyOrderId=$("#SortingbyOrderhiddenvalueId").val();

	$("#myModalScriptSetting").show();
	document.getElementById("SortingbyfieldModalhiddenvalueId").value=SortingbyfieldhiddenvalueId;
	document.getElementById("SortingbyOrderModalhiddenvalueId").value=SortingbyOrderhiddenvalueId;
	

		$.ajax({
			type :'POST',
			url :'SortingOrderfunctionExchange',	
			dataType: 'json',
			data:"SortingbyfieldId="+SortingbyfieldId+"&SortingbyOrderId="+SortingbyOrderId,			
			success:function(jsonObject){
				var body;
				
				 var response=jsonObject.scriptList;
				 
				 var response=jsonObject.scriptList;
				  
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
						var nfostrike_price=JSON.stringify(response[i].nfostrike_price);
						var nfooption_type=JSON.stringify(response[i].nfooption_type);
						var nfoinstrument_name=JSON.stringify(response[i].nfoinstrument_name);
						var nfoexpiryoriginaldate=JSON.stringify(response[i].nfoexpiryoriginaldate);
						 /* tokenId = response[i].token;
			             tokenArray.push(tokenId); */
						
						
			     		body=body+"<tr  id='"+response[i].token+"_mydivId'  onmouseover='stockbuybtnmouseover("+token+")' onmouseout='stockbuybtnmouseout("+token+")' style='height:40px;border-bottom: 1px solid lightcyan;'>";
			             
						body=body+"<td  class='Field' id='"+response[i].token+"'  style='height:40px;width:350px;padding-left:15px; padding-top:20px;padding-bottom: 10px;'>"
						body=body+" <span style='display:block;'><i class='icon ion-md-star'></i>"+response[i].scriptName+"&nbsp;<label class='addbtn'>"+response[i].exchange+"</label>";
		           	  "<input type='hidden' id='mydivhiddenId' name='mydivhiddenId' value='"+response[i].token+"_mydivId' />";
		           	body=body+" </span> ";
						//body=body+"<div   id='"+response[i].token+"_stockbuysell' style='display:none'>";
						//body=body+"<i class='icon ion-md-star'></i>"+response[i].scriptName+"&nbsp;"
						 
					//body=body+"<a id='"+response[i].token+"_stockbuysell'    name='stockbuyName' href='#' onclick='onclickstockbuybtnToggle(); changeModalContent(event);  onclickstockbuybtn("+scriptName+","+price+","+exchange+","+token+","+displayname+","+mcxTickSize+","+mcxOriginalExpiryDate+","+nseTickSize+","+nseExDate+","+nfoexpiry_date+","+mcxInstrumentCode+","+mcxStrikePrice+","+mcxOptionType+","+mcxInstrumentName+","+mcxInstrumentSeries+","+nseSymbol+","+nseSeries+","+nfoSymbol+","+nfostrike_price+","+nfooption_type+","+nfoinstrument_name+")' data-toggle='modal'  data-target='#myModal' >buy</a>";
					
						//body=body+"<button type='button'    id='"+response[i].token+"_stockbuysell'    name='stockbuyName'  onclick='onclickstockbuybtnToggle(); changeModalContent(event);  onclickstockbuybtn("+scriptName+","+price+","+exchange+","+token+","+displayname+","+mcxTickSize+","+mcxOriginalExpiryDate+","+nseTickSize+","+nseExDate+","+nfoexpiry_date+","+mcxInstrumentCode+","+mcxStrikePrice+","+mcxOptionType+","+mcxInstrumentName+","+mcxInstrumentSeries+","+nseSymbol+","+nseSeries+","+nfoSymbol+","+nfostrike_price+","+nfooption_type+","+nfoinstrument_name+")' data-toggle='modal'  data-target='#myModal' >BUY</button>";
						//body=body+"<button type='button'    id=''    name='stocksellName'  onclick='onclickstocksellbtnToggle(); changeModalContent(event);  onclickstocksellbtn("+scriptName+","+price+","+exchange+","+token+","+displayname+","+mcxTickSize+","+mcxOriginalExpiryDate+","+nseTickSize+","+nseExDate+","+nfoexpiry_date+","+mcxInstrumentCode+","+mcxStrikePrice+","+mcxOptionType+","+mcxInstrumentName+","+mcxInstrumentSeries+","+nseSymbol+","+nseSeries+","+nfoSymbol+","+nfostrike_price+","+nfooption_type+","+nfoinstrument_name+")'  data-toggle='modal'  data-target='#myModal'>SELL</button>";
						//body=body+"<button type='button'    class=' stocksellbtn swd-button' id=''    name='marketDepthName'  onclick='getMarketDepth("+scriptName+","+price+","+exchange+","+token+")' data-target='#modalMarketDepth' data-toggle='modal'>MD</button>"
						    
						    

						//body=body+"<button type='button' style='cursor:pointer' class='stocksellbtn swd-button' id='deletescriptId' name='deletescriptId'  onclick='deleteScript("+token+")' >Delete</button>";	
						//body=body+"<icon  style='cursor:pointer' class='fa fa-clock-o' id='setalertId' name='setalertId'  onclick='setAlert("+scriptName+","+price+","+exchange+","+token+","+mcxOriginalExpiryDate+","+nseExDate+","+nfoexpiry_date+")' data-toggle='modal'  data-target='#myModalAlertSet' >SetAlert</icon>";

						//body=body+"</div>";
						body=body+"</td>";  
						if(response[i].price !=null){
						body=body+"<td id='"+response[i].token+"_priceid' class='Field'>"+response[i].price+"</td>&nbsp;&nbsp;";
						}else{
							body=body+"<td id='"+response[i].token+"_priceid' class='Field' style='width:40px;padding-left:0px;padding-bottom: 10px;'></td>";
						}
						body=body+"<td id='"+response[i].token+"_changeid' class='Field' style='width:40px;padding-left:0px;padding-bottom: 10px;'>+0.0</td>";
						
		          
						body=body+"</tr>";
						
							body=body+"<tr  id='"+response[i].token+"_stockbuysellfirst'  onmouseover='stockbuybtnmouseover("+token+")' onmouseout='stockbuybtnmouseout("+token+")' style='background-color:lightblue;width:100%;height:40px;border-bottom: 1px solid lightcyan;visibility:collapse'>";
				             
							body=body+"<td  class='Field' id='"+response[i].token+"'  style='height:40px;padding-left:15px; padding-top:20px;padding-bottom: 10px;'>"
							body=body+" <span style='display:block;'><i class='icon ion-md-star'></i>"+response[i].scriptName+"&nbsp;<label class='addbtn'>"+response[i].exchange+"</label>";
			             	  "<input type='hidden' id='mydivhiddenId' name='mydivhiddenId' value='"+response[i].token+"_mydivId' />";
			             	body=body+" </span> ";
			             	body=body+"</td>";
			             	body=body+"<td>";
					        body=body+"<div class='wrapwrapper' id='"+response[i].token+"_buy_sell_wrapper'><div class='wrapper'>"
					        body=body+"<div class='icon facebook'><div class='tooltip'>Buy</div><span><i class='fab b-buy-b'></i></span></div>";
					        body=body+"<div class='icon twitter'><div class='tooltip'>Sell</div><span><i class='fab s-sell-s'></i></span></div>"
					        body=body+"<div class='icon instagram' onclick='loadChart();'><div class='tooltip'>Chart</div><span><i class='fab c-chart-c'></i></span></div>";
					      //  if(response[i].exchange=='NFO' && response[i].nfoinstrument_name=='FUTIDX' || response[i].nfoinstrument_name=='FUTSTK' ){
					        if(response[i].exchange=='NFO' && response[i].nfoinstrument_name=='OPTIDX' || response[i].nfoinstrument_name=='OPTSTK'  ){
						        body=body+"<div class='icon instagram' onclick='OptionChainfun("+displayname+","+exchange+","+nfoexpiryoriginaldate+","+nfoinstrument_name+")'><div class='tooltip'>Option</div><span><i class='fab o-chart-o'>O</i></span></div>";
						        }
						        else{
							        body=body+"<div style='display:none;' class='icon instagram'><div class='tooltip' style='display:none;'>OptionChain</div><span><i class='fab o-chart-o'></i></span></div>";

						        }
					 	        body=body+"<div class='icon instagram ' onclick='ShowModalMoreOption("+displayname+","+token+")' data-toggle='modal'  data-target='#myModalMoreOption'><div class='tooltip'>More</div><span><i class='fa fa-bars'></i></span></div>";
						        
					        
					        
					        
					        body=body+"</div></div>"
			             	
							//body=body+"<div   id='"+response[i].token+"_stockbuysell' style='display:none'>";
							//body=body+"<i class='icon ion-md-star'></i>"+response[i].scriptName+"&nbsp;"
							 
						//body=body+"<a id='"+response[i].token+"_stockbuysell'    name='stockbuyName' href='#' onclick='onclickstockbuybtnToggle(); changeModalContent(event);  onclickstockbuybtn("+scriptName+","+price+","+exchange+","+token+","+displayname+","+mcxTickSize+","+mcxOriginalExpiryDate+","+nseTickSize+","+nseExDate+","+nfoexpiry_date+","+mcxInstrumentCode+","+mcxStrikePrice+","+mcxOptionType+","+mcxInstrumentName+","+mcxInstrumentSeries+","+nseSymbol+","+nseSeries+","+nfoSymbol+","+nfostrike_price+","+nfooption_type+","+nfoinstrument_name+")' data-toggle='modal'  data-target='#myModal' >buy</a>";
						
							//body=body+"<button type='button'    id='"+response[i].token+"_stockbuysell'    name='stockbuyName'  onclick='onclickstockbuybtnToggle(); changeModalContent(event);  onclickstockbuybtn("+scriptName+","+price+","+exchange+","+token+","+displayname+","+mcxTickSize+","+mcxOriginalExpiryDate+","+nseTickSize+","+nseExDate+","+nfoexpiry_date+","+mcxInstrumentCode+","+mcxStrikePrice+","+mcxOptionType+","+mcxInstrumentName+","+mcxInstrumentSeries+","+nseSymbol+","+nseSeries+","+nfoSymbol+","+nfostrike_price+","+nfooption_type+","+nfoinstrument_name+")' data-toggle='modal'  data-target='#myModal' >BUY</button>";
							//body=body+"<button type='button'    id=''    name='stocksellName'  onclick='onclickstocksellbtnToggle(); changeModalContent(event);  onclickstocksellbtn("+scriptName+","+price+","+exchange+","+token+","+displayname+","+mcxTickSize+","+mcxOriginalExpiryDate+","+nseTickSize+","+nseExDate+","+nfoexpiry_date+","+mcxInstrumentCode+","+mcxStrikePrice+","+mcxOptionType+","+mcxInstrumentName+","+mcxInstrumentSeries+","+nseSymbol+","+nseSeries+","+nfoSymbol+","+nfostrike_price+","+nfooption_type+","+nfoinstrument_name+")'  data-toggle='modal'  data-target='#myModal'>SELL</button>";
							//body=body+"<button type='button'    class=' stocksellbtn swd-button' id=''    name='marketDepthName'  onclick='getMarketDepth("+scriptName+","+price+","+exchange+","+token+")' data-target='#modalMarketDepth' data-toggle='modal'>MD</button>"
							    
							    

							//body=body+"<button type='button' style='cursor:pointer' class='stocksellbtn swd-button' id='deletescriptId' name='deletescriptId'  onclick='deleteScript("+token+")' >Delete</button>";	
							//body=body+"<icon  style='cursor:pointer' class='fa fa-clock-o' id='setalertId' name='setalertId'  onclick='setAlert("+scriptName+","+price+","+exchange+","+token+","+mcxOriginalExpiryDate+","+nseExDate+","+nfoexpiry_date+")' data-toggle='modal'  data-target='#myModalAlertSet' >SetAlert</icon>";

							//body=body+"</div>";
							body=body+"</td>";
							body=body+"<td id='"+response[i].token+"_changeid' class='Field' style='width:40px;padding-left:0px;padding-bottom: 10px;'>+0.0</td>";
							
							if(response[i].price !=null){
							//body=body+"<td id='"+response[i].token+"_priceid' class='Field'>"+response[i].price+"</td>&nbsp;&nbsp;";
							}else{
								//body=body+"<td id='"+response[i].token+"_priceid' class='Field' style='width:40px;padding-left:0px;padding-bottom: 10px;'></td>";
							}
							//body=body+"<td id='"+response[i].token+"_changeid' class='Field' style='width:40px;padding-left:0px;padding-bottom: 10px;'>+0.0</td>";
							
			            
							body=body+"</tr>";
							
							
						

					}
					
					 $('#addscriptId').html(body); 
						var SortingbyfieldTag=jsonObject.Sortingbyfield;
						var SortingbyOrderTag=jsonObject.SortingbyOrder;
						 document.getElementById("SortingbyfieldhiddenvalueId").value=SortingbyfieldTag;
						 document.getElementById("SortingbyOrderhiddenvalueId").value=SortingbyOrderTag;
						 document.getElementById("SortingbyfieldModalhiddenvalueId").value=SortingbyfieldTag;
						 document.getElementById("SortingbyOrderModalhiddenvalueId").value=SortingbyOrderTag;
						 var ascorder="asc";
						 var descorder="desc";
						if(SortingbyOrderTag===ascorder){						
							$("#EXCSortdescId").show();
							$("#EXCSortascId").hide();
						}
						else if(SortingbyOrderTag===descorder){
							$("#EXCSortdescId").hide();
							$("#EXCSortascId").show();
						}
						
			},
			error:function(){
				alert("SortingOrderfunctionExchange Error");
			
			}	
		});	
	}


function SortingOrderfunctionLTP(){
	
var LTPSortId=$("#LTPSortId").val();	
	
	$.ajax({
		type :'POST',
		url :'SortingOrderfunctionLTP',	
		dataType: 'html',
		data:"LTPSortId="+LTPSortId,		
		success:function(response){
			 $('#scriptlisthiddId').show();
			 $('#myModalScriptSetting').show();
			 $('#scriptlisthiddId').html(jQuery(response).find('#scriptbodylistId').html());
			 $('#myModalScriptSetting').html(jQuery(response).find('#myModalScriptSetting').html());
		},
		error:function(){
			alert("SortingOrderfunctionLTP Error");
		
		}	
	});	
	
}

function SortingOrderfunctionPercentage(){
	
var PercentageSortId=$("#PercentageSortId").val();	
	
	$.ajax({
		type :'POST',
		url :'SortingOrderfunctionPercentage',	
		dataType: 'html',
		data:"PercentageSortId="+PercentageSortId,		
		success:function(response){
			 $('#scriptlisthiddId').show();
			 $('#myModalScriptSetting').show();
			 $('#scriptlisthiddId').html(jQuery(response).find('#scriptbodylistId').html());
			 $('#myModalScriptSetting').html(jQuery(response).find('#myModalScriptSetting').html());
		},
		error:function(){
			alert("SortingOrderfunctionPercentage Error");
		
		}	
	});	
	
}

