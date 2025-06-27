$('.buySellModalRepeat').draggable({
    handle: ".modal-header"
  });

//New code...............................
function buysellwindow(token){
	
	$("#RepeatconfirmPopup").show();
	$("#loadGraphId").hide();
	$("#OrderId").show();
	$("#dashboardId").hide();
	$("#AccountId").hide();	

	$('#buySellModalRepeat').modal('show');

	var call="token="+token;
	
	   
	$.ajax({
		type :'GET',
		url :'getScriptValueOfToken',
	    data : call,
		dataType: 'json',
		success:function(response){
			
			 var jsonObject =JSON.parse(response);
			 
			 for (var i = 0; i <jsonObject.length; i++) {
	 

					
					//var AvailableMargin=document.getElementById("marginUsed").value;
					 //var AvailableMargin=$("#marginUsedhiddenIdRepeat").val();
						
	
					
					 //document.getElementById("AvailableMarginspanIdRepeat").innerHTML =AvailableMargin;
					$('#buySellModalRepeat').show();
					///$('#buySellModalRepeat').modal('show');
					//document.getElementById("priceIdRepeat").value=document.getElementById(token+"_priceid_hidden").value;
					//document.getElementById("UserIDRepeat").value=userId;	
					//document.getElementById("tokenRepeat").value=token;
					//document.getElementById("buysell_priceidRepeat").innerHTML = document.getElementById(token+"_priceid_hidden").value;
					//document.getElementById("stockhiddvalRepeat").value=exchange;
				//document.getElementById("exchangelabelId").innerHTML=exchange;

					
					//document.getElementById("scriptNamehiddvalRepeat").value=scriptName;
					
					//document.getElementById("displaynamehiddvalRepeat").value=displayname;
					
					var displayname;
					
						
					const monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']

				    const d = new Date();
				    var dd = String(d.getDate()).padStart(2, '0');
				    var mm = String(d.getMonth() + 1).padStart(2, '0');
				    var yyyy = d.getFullYear();
				    var todaydate = +dd +"/"+ monthNames[d.getMonth()] +"/"+ yyyy;
				    	
				 
				   
							if (jsonObject[i].properties.mcxExchange==='MCX')
								{
								document.getElementById("stockhiddvalRepeat").value=jsonObject[i].properties.mcxExchange;
								document.getElementById("mcxexpirylabelIdRepeat").innerHTML=jsonObject[i].properties.mcxOriginalExpiryDate;		

								var myDate = new Date(jsonObject[i].properties.mcxOriginalExpiryDate);
								
				        		var scriptName;

								if(jsonObject[i].properties.mcxOptionType=="XX"){
									scriptName=myDate.getDate() +monthNames[myDate.getMonth()]+" "+"FUT"+" "+jsonObject[i].properties.mcxExchange;
								}else{

									scriptName=myDate.getDate() +monthNames[myDate.getMonth()]+" "+jsonObject[i].properties.mcxStrikePrice+" "+jsonObject[i].properties.mcxOptionType+" "+jsonObject[i].properties.mcxExchange;
								}
				 	        	
				 	        document.getElementById("scriptNamehiddvalRepeat").value=scriptName;
							
							document.getElementById("displaynamehiddvalRepeat").value=jsonObject[i].properties.mcxInstrumentCode;
							
							displayname=jsonObject[i].properties.mcxInstrumentCode;
								
								
								if ($('li.nrmlclsRepeat').hasClass('active')){
				 	    			var Pcode="NRML";
				 	    			prd="M";
				 	    		}
				 	    		if ($('li.misclsRepeat').hasClass('active')){
				 	    			var Pcode="MIS";
				 	    			prd="I";
				 	    		}
				 	    		
				 	    		
								$(".BracketOrdclsRepeat").show();
								$(".CoverOrdclsRepeat").show();
								
								
								
								
								$('.nrmlclsRepeat').hasClass('active') 
							   	 if ($('.nrmlclsRepeat').hasClass('active') ) {
							   	$('.nrmlclsRepeat').siblings().removeClass('active');
							   	 }
							   	if ($('.misclsRepeat').hasClass('active') ) {
							   		$('.misclsRepeat').siblings().removeClass('active');
							   	}
								//=======  Regular ORDER MCX START =======
								
								  if ($('li.RegularOrdclsRepeat').hasClass('active') ) {
							    	  $('.CoverOrderrightsideDivclsRepeat').hide();
							     	  $('.NonCoverOrderDivclsRepeat').show();
							    	 
							    	  $('.BracketordertextboxclsRepeat').hide();     	
							    	
							    	 // $('.priceclsRepeat').prop('disabled',false);
									  $('.DisclosedQtyclsRepeat').prop('disabled',false);
									  $(".DisclosedQtyclsRepeat").show();
							    	
									  
									  	$(".dayclsRepeat").show();
									   	 $(".iocclsRepeat").show();
									   	 $(".gtcclsRepeat").show();
									   	 $(".gtdclsRepeat").show();
									   	 $(".gttclsRepeat").show();
									   	
									   	 $('.priceclsRepeat').prop('disabled',false);
									   	 
									   	 $('.ProductsclsRepeat').show();
									   	 
									 	$("#NrmlIdRepeat").show();
										$("#cncIdRepeat").hide();
										$("#MisIdRepeat").show();
										
										
										
									   	 
										$(".nrmlclsRepeat").addClass('active')    		 
								   		 if ($('.nrmlclsRepeat').hasClass('active') ) {
								   			 $('.nrmlclsRepeat').siblings().removeClass('active');
								    	  }
										 
								   		if ($('.misclsRepeat').hasClass('active') ) {
								  			 $('.misclsRepeat').siblings().removeClass('active');
								   	  }
								   		
										
									 
							    	
							    	 if ($('li.dayclsRepeat').hasClass('active') ) {
							     		$('.DisclosedQtyclsRepeat').prop('disabled',true);
							     		$('.TriggerpriceclsRepeat').hide();
							     		$('.DTDValidityclsRepeat').hide();
							     	 }
							    	 if ($('li.iocclsRepeat').hasClass('active') ) {
							      		$('.DisclosedQtyclsRepeat').prop('disabled',true);
							      		$('.TriggerpriceclsRepeat').hide();
							      		$('.DTDValidityclsRepeat').hide();
							      	 }
							    	 if ($('li.gtcclsRepeat').hasClass('active') ) {
							       		$('.DisclosedQtyclsRepeat').prop('disabled',true);
							       		$('.TriggerpriceclsRepeat').hide();
							       		$('.DTDValidityclsRepeat').hide();
							       	 }
							    	 
							    	if ($('li.gtdclsRepeat').hasClass('active') ) {
							    		
							     		$('.DisclosedQtyclsRepeat').prop('disabled',true);
							     		$('.TriggerpriceclsRepeat').hide();
							     		$('.DTDValidityclsRepeat').show();
							     		
							     		$(".date_item").show();
							     		$("#datepickerbuysellRepeat").prop("disabled", false);
							     		
							     		  $('#datepickerbuysellRepeat').datepicker({
								  
									 	    dateFormat: 'd M yy',
									 	    minDate: new Date(),
									 	    defaultDate:  new Date(),
								    
							     		  	}).datepicker('setDate',new Date())
							     	
							      }
									/*else{
									      $(".date_item").hide();
									      $("#datepicker").prop("disabled", true);
									    }*/
							    	if ($('li.gttclsRepeat').hasClass('active') ) {
							    		
							     		$('.DisclosedQtyclsRepeat').prop('disabled',true);
							     		$('.TriggerpriceclsRepeat').hide();
							     		$('.DTDValidityclsRepeat').hide();
							     		
							     	 }
							    	 
							    	
							    		 $('.ValidityclsRepeat').show();
							    		 $('.CoverordertypeclsRepeat').hide();
							    	 
							    		 $("#lmtIdRepeat").show();
									   	 $("#mktIdRepeat").show();
									   	 $("#slIdRepeat").show();
									   	 $("#sl-mIdRepeat").show();
									   	 
									   	$(".lmtclsRepeat").addClass('active')  
								         
							   	 
							   	 	if ($('.lmtclsRepeat').hasClass('active') ) { //Price Type ( L or SL )
							   	 	$('.priceclsRepeat').prop('disabled',false);
									$('.DisclosedQtyclsRepeat').prop('disabled',false);     		
							 		$('.TriggerpriceclsRepeat').hide();
							 		 $('.lmtclsRepeat').siblings().removeClass('active'); 
									 }
							   	 	if ($('.mktclsRepeat').hasClass('active') ) { //Price Type ( L or SL )
							   	 	$('.priceclsRepeat').prop('disabled',true);
									$('.DisclosedQtyclsRepeat').prop('disabled',false);     		
							 		$('.TriggerpriceclsRepeat').hide();
							 		 $('.mktclsRepeat').siblings().removeClass('active'); 
									 }
							   	 	if ($('.slclsRepeat').hasClass('active') ) { //Price Type ( L or SL )
							   	 	$('.TriggerpriceclsRepeat').show();
							  		$('.DisclosedQtyclsRepeat').prop('disabled',false);
							  		 $('.slclsRepeat').siblings().removeClass('active'); 
									 }
									 if ($('.slmclsRepeat').hasClass('active') ) { //Price Type ( L or SL )
										 $('.NonCoverOrderDivclsRepeat').show();
								    		$('.DisclosedQtyclsRepeat').prop('disabled',false);
								    		$('.priceclsRepeat').prop('disabled',true);
								      		$('.TriggerpriceclsRepeat').show();
								      		 $('.slmclsRepeat').siblings().removeClass('active'); 
									 }
							   	 
							      }
								  
								//=======  Regular MCX END =======
								  
								  
								//=======  BracketOrder MCX START =======
								  
								  
								  
								  else if ($('li.BracketOrdclsRepeat').hasClass('active') ) {
									 
									  $('.priceclsRepeat').prop('disabled',false);
							    	  
								   		 $(".lmtclsRepeat").addClass('active')    		 
								   		 if ($('.slclsRepeat').hasClass('active') ) {
								   			 $('.slclsRepeat').siblings().removeClass('active');
								    	  }
								   		if ($('.lmtclsRepeat').hasClass('active') ) {
								  			 $('.lmtclsRepeat').siblings().removeClass('active');
								   	  }
								   	 
										   	 $(".DisclosedQtyclsRepeat").disabled = false;
										   	 $(".DisclosedQtyclsRepeat").show();
										   	 $('.ProductsclsRepeat').hide();
										   	 $('.priceclsRepeat').prop('disabled',false);
										   	 $('.BracketordertextboxclsRepeat').show();
										   	 $('.ValidityclsRepeat').hide();    	 
										   	 $('.CoverOrderrightsideDivclsRepeat').hide();
										   	 $('.NonCoverOrderDivclsRepeat').show();
										   	 $("#lmtIdRepeat").show();
										   	 $("#mktIdRepeat").hide();
										   	 $("#slIdRepeat").show();
										   	 $("#sl-mIdRepeat").hide();
										   	 $('.CoverordertypeclsRepeat').hide();
										   	 $('.TriggerpriceclsRepeat').hide();
										   	 
										   	 if ($('li.lmtclsRepeat').hasClass('active') ) { //Price Type ( L or SL )
										   		 $('.TriggerpriceclsRepeat').hide();
										 		 }
										 		 if ($('li.slclsRepeat').hasClass('active') ) { //Price Type ( L or SL )
										 			$('.TriggerpriceclsRepeat').show();
										 		 }
										 		
										      }
								  
								  
								//=======  Bracket MCX END =======
								
								
								
								//=======  Cover Order MCX START =======
								  
								 	  
							      else if ($('li.CoverOrdclsRepeat').hasClass('active') ) {
							    	  
							    	  
							    	  $('.priceclsRepeat').prop('disabled',false);
							    	  
							    	  
								   	  // $(".DisclosedQtyclsRepeat").disabled = false;
								   	   $(".DisclosedQtyclsRepeat").hide();
								   	  $('.ProductsclsRepeat').hide();
								   	 
								   	 $('.BracketordertextboxclsRepeat').hide();
								   	 $('.ValidityclsRepeat').hide();
								   	 $('.TriggerpriceclsRepeat').show();
								   	
								   	 $('.CoverOrderrightsideDivclsRepeat').show();
								   	 $('.NonCoverOrderDivclsRepeat').hide();
								   	 $("#CoverOrderlmtIdRepeat").show();
								   	 $("#CoverOrdermktIdRepeat").show();
								   	 $("#CoverOrderslIdRepeat").hide();
								   	 $("#CoverOrdersl-mIdRepeat").hide();
								   	 
								   	 $(".lmtclsRepeat").addClass('active')
								   	  if ($('.mktclsRepeat').hasClass('active') ) {
								   			 $('.mktclsRepeat').siblings().removeClass('active');
								   			 $('.priceclsRepeat').prop('disabled',true);
						    	  }
						   		if ($('.lmtclsRepeat').hasClass('active') ) {
						  			 $('.lmtclsRepeat').siblings().removeClass('active');
						  			 $('.priceclsRepeat').prop('disabled',false);
						   	  }
						   	 
						   	 
						    }
								  
								//=======  Cover Order MCX END =======
								
								
								
								  
									//=======  AMO Order MCX START =======
								  
								  
								  
								  
								  if ($('li.AfterMarketOrdclsRepeat').hasClass('active') ) {
										
										$('.priceclsRepeat').prop('disabled',false);
										 $('.CoverOrderrightsideDivclsRepeat').hide();
							        	  $('.NonCoverOrderDivclsRepeat').show();
							       	  $('.ProductsclsRepeat').show();
							       	  $('.BracketordertextboxclsRepeat').hide();
							       	
								        	$('.priceclsRepeat').prop('disabled',false);
								    		$('.DisclosedQtyclsRepeat').prop('disabled',false);
								    		$(".DisclosedQtyclsRepeat").show();
								    		$(".dayclsRepeat").show();
										   	 $(".iocclsRepeat").show();
										   	 $(".gtcclsRepeat").show();
										   	 $(".gtdclsRepeat").show();
										   	 $(".gttclsRepeat").show();
										   	 
										  	$("#NrmlIdRepeat").show();
											$("#cncIdRepeat").hide();
											$("#MisIdRepeat").show();
											
											
											
										   	 
											$(".nrmlclsRepeat").addClass('active')    		 
									   		 if ($('.nrmlclsRepeat').hasClass('active') ) {
									   			 $('.nrmlclsRepeat').siblings().removeClass('active');
									    	  }
											 
									   		if ($('.misclsRepeat').hasClass('active') ) {
									  			 $('.misclsRepeat').siblings().removeClass('active');
									   	  }
							       	
							       	 if ($('.dayclsRepeat').hasClass('active') ) {
							        		$('.DisclosedQtyclsRepeat').prop('disabled',true);
							        		$('.TriggerpriceclsRepeat').hide();
							        		$('.DTDValidityclsRepeat').hide();
							        	 }
							       	 if ($('.iocclsRepeat').hasClass('active') ) {
							         		$('.DisclosedQtyclsRepeat').prop('disabled',true);
							         		$('.TriggerpriceclsRepeat').hide();
							         		$('.DTDValidityclsRepeat').hide();
							         	 }
							       	 if ($('.gtcclsRepeat').hasClass('active') ) {
							          		$('.DisclosedQtyclsRepeat').prop('disabled',true);
							          		$('.TriggerpriceclsRepeat').hide();
							          		$('.DTDValidityclsRepeat').hide();
							          	 }
							       	 
							       	if ($('.gtdclsRepeat').hasClass('active') ) {
							       		
							        		$('.DisclosedQtyclsRepeat').prop('disabled',true);
							        		$('.TriggerpriceclsRepeat').hide();
							        		$('.DTDValidityclsRepeat').show();
							        		
							        		$(".date_item").show();
							         		$("#datepickerbuysellRepeat").prop("disabled", false);
							         		
							         		  $('#datepickerbuysellRepeat').datepicker({
							    	  
							    		 	    dateFormat: 'd M yy',
							    		 	    minDate: new Date(),
							    		 	    defaultDate:  new Date(),
							    	    
							         		  	}).datepicker('setDate',new Date())
							         	
							          }
							    		else{
							    		      $(".date_item").hide();
							    		      $("#datepickerRepeat").prop("disabled", true);
							    		    }
							       	if ($('.gttclsRepeat').hasClass('active') ) {
							       		
							        		$('.DisclosedQtyclsRepeat').prop('disabled',true);
							        		$('.TriggerpriceclsRepeat').hide();
							        		$('.DTDValidityclsRepeat').hide();
							        		
							        	 }
							       	 
							       	 $('.ValidityclsRepeat').show();
							       	$('.CoverordertypeclsRepeat').hide();
							       	 
							       	 $("#lmtIdRepeat").show();
							      	 $("#mktIdRepeat").show();
							      	 $("#slIdRepeat").show();
							      	 $("#sl-mIdRepeat").show();
							      	 
							      	$(".lmtclsRepeat").addClass('active');
							      		
							   		
							   		

							   	 	if ($('.lmtclsRepeat').hasClass('active') ) { //Price Type ( L or SL )
							   	   	 	$('.priceclsRepeat').prop('disabled',false);
							   			$('.DisclosedQtyclsRepeat').prop('disabled',false);     		
							   	 		$('.TriggerpriceclsRepeat').hide();
							   		 $('.lmtclsRepeat').siblings().removeClass('active');
							   			 }
							   	   	 	if ($('.mktclsRepeat').hasClass('active') ) { //Price Type ( L or SL )
							   	   	 	$('.priceclsRepeat').prop('disabled',true);
							   			$('.DisclosedQtyclsRepeat').prop('disabled',false);     		
							   	 		$('.TriggerpriceclsRepeat').hide();
							   	 	$('.mktclsRepeat').siblings().removeClass('active');
							   			 }
							   	   	 	if ($('.slclsRepeat').hasClass('active') ) { //Price Type ( L or SL )
							   	   	 	$('.TriggerpriceclsRepeat').show();
							   	  		$('.DisclosedQtyclsRepeat').prop('disabled',false);
							   	  	 $('.slclsRepeat').siblings().removeClass('active');
							   			 }
							   			 if ($('.slmclsRepeat').hasClass('active') ) { //Price Type ( L or SL )
							   				 $('.NonCoverOrderDivclsRepeat').show();
							   		    		$('.DisclosedQtyclsRepeat').prop('disabled',false);
							   		    		$('.priceclsRepeat').prop('disabled',true);
							   		      		$('.TriggerpriceclsRepeat').show();
							   		      	 $('.slmclsRepeat').siblings().removeClass('active');
							   			 }
							      	 
							         }
								  
									//=======  AMO Order MCX END =======				
								
								
								
								$("#cncIdRepeat").hide();
								$("#MisIdRepeat").show();
								$("#NrmlIdRepeat").show();
								
								
							
							
							
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
									document.getElementById("mcxticksizehiddvalRepeat").value=jsonObject[i].properties.mcxTickSize;
								//McxInstrumentName
								document.getElementById("mcxInstrumentNamehiddvalRepeat").value=jsonObject[i].properties.mcxInstrumentName;
								document.getElementById("mcxexpirydatehiddvalRepeat").value=mcxexpirydatedisplay;
								
								//McxOptionType
								document.getElementById("mcxOptionTypehiddvalRepeat").value=jsonObject[i].properties.mcxOptionType;
								 
								var fut="FUT";
								
								//alert("token : "+token);
								//document.getElementById("mcxStrikepricehiddval").value=token+"_priceid";
								
								//document.getElementById(token+"_priceid").value='mcxStrikepricehiddval';
								//var priceid=$("#mcxStrikepricehiddval").val();
								
								/*var priceid=document.getElementById(token+"_priceid").value;
								alert("mcxStrikePrice : "+priceid);*/ 
								
								if(jsonObject[i].properties.mcxInstrumentName=="FUTIDX" || jsonObject[i].properties.mcxInstrumentName=="FUTCOM"){
									if(dd<10) 
									{
										document.getElementById("stocklabelIdRepeat").innerHTML=displayname+" "+fut+" "+jsonObject[i].properties.mcxExchange;
										document.getElementById("stocklabelhiddenIdRepeat").value=displayname+fut;
										document.getElementById("scripthiddvalRepeat").value=displayname+"0"+mcxexpiryDATEmyDate;
									}else{
										document.getElementById("stocklabelIdRepeat").innerHTML=displayname+" "+fut+" "+jsonObject[i].properties.mcxExchange;
										document.getElementById("stocklabelhiddenIdRepeat").value=displayname+fut;
										document.getElementById("scripthiddvalRepeat").value=displayname+mcxexpiryDATEmyDate;
									}
								}
								else if(jsonObject[i].properties.mcxInstrumentName=="OPTFUT" || jsonObject[i].properties.mcxInstrumentName=="OPTCOM"){
								
									var num=jsonObject[i].properties.mcxStrikePrice/100;
									
									
									var DecimalmcxStrikePrice= num.toFixed(2);
									document.getElementById('decimalhiddval').value=(Math.round(DecimalmcxStrikePrice * 100) / 100);
									
									var decimalVal=$("#decimalhiddvalRepeat").val();
									
									//document.getElementById('decimalhiddval').value=mcxStrikePrice;
									if(jsonObject[i].properties.mcxOptionType=="PE"){
									if(dd<10) 
									{
									document.getElementById("stocklabelIdRepeat").innerHTML=displayname+""+decimalVal+" "+jsonObject[i].properties.mcxExchange;
									document.getElementById("stocklabelhiddenIdRepeat").value=displayname+"P"+decimalVal;
									document.getElementById("scripthiddvalRepeat").value=displayname+"0"+mcxexpiryDATEmyDate+"P"+decimalVal;
									}else{
									document.getElementById("stocklabelIdRepeat").innerHTML=displayname+" "+decimalVal+" "+jsonObject[i].properties.mcxOptionType+" "+jsonObject[i].properties.mcxExchange;
									document.getElementById("stocklabelhiddenIdRepeat").value=displayname+decimalVal+jsonObject[i].properties.mcxOptionType;
									document.getElementById("scripthiddvalRepeat").value=displayname+mcxexpiryDATEmyDate+"P"+decimalVal;
									}
									}
									else  if(jsonObject[i].properties.mcxOptionType=="CE"){
										if(dd<10) 
										{
										document.getElementById("stocklabelIdRepeat").innerHTML=displayname+""+decimalVal+" "+jsonObject[i].properties.mcxExchange;
										document.getElementById("stocklabelhiddenIdRepeat").value=displayname+"C"+decimalVal;
										document.getElementById("scripthiddvalRepeat").value=displayname+"0"+mcxexpiryDATEmyDate+"C"+decimalVal;
										}else{
										document.getElementById("stocklabelIdRepeat").innerHTML=displayname+" "+""+decimalVal+" "+jsonObject[i].properties.mcxOptionType+" "+jsonObject[i].properties.mcxExchange;
										document.getElementById("stocklabelhiddenIdRepeat").value=displayname+"C"+decimalVal+jsonObject[i].properties.mcxOptionType;
										document.getElementById("scripthiddvalRepeat").value=displayname+mcxexpiryDATEmyDate+"C"+decimalVal;
										}	
									}
							}
								
						
								}
							
							else if(jsonObject[i].properties.nseExchange==='NSE'){
								
								document.getElementById("stockhiddvalRepeat").value=jsonObject[i].properties.nseExchange;
								displayname=jsonObject[i].properties.nseSymbol;
				 	        	
			                    document.getElementById("scriptNamehiddvalRepeat").value=jsonObject[i].properties.nseSeries+" "+jsonObject[i].properties.nseExchange;
								
								document.getElementById("displaynamehiddvalRepeat").value=displayname;
								
								$("#NrmlIdRepeat").show();
								$("#cncIdRepeat").hide();
								$("#MisIdRepeat").show();
								
								
								
								
								if(jsonObject[i].properties.nseSeries=="AF" || jsonObject[i].properties.nseSeries=="BE" || 
										jsonObject[i].properties.nseSeries=="BL" || jsonObject[i].properties.nseSeries=="EQ" ||
										jsonObject[i].properties.nseSeries=="IQ" || jsonObject[i].properties.nseSeries=="L1" || 
										jsonObject[i].properties.nseSeries=="R1" || jsonObject[i].properties.nseSeries=="RL" || jsonObject[i].properties.nseSeries=="V1" ){
									
									$("#NrmlIdRepeat").show();
									$("#cncIdRepeat").show();
									$("#MisIdRepeat").show();
									
								}
						   		
								
								
								
								$(".BracketOrdclsRepeat").hide();
								$(".CoverOrdclsRepeat").hide();
								
								
								
								 $(".RegularOrdclsRepeat").addClass('active')  
								 
						   		 if ($('.RegularOrdclsRepeat').hasClass('active') ) {
						   			 $('.RegularOrdclsRepeat').siblings().removeClass('active');
						    	  }
						   		if ($('.AfterMarketOrdclsRepeat').hasClass('active') ) {
						  			 $('.AfterMarketOrdclsRepeat').siblings().removeClass('active');
						   	  }
						   		
								//=======  Regular ORDER NSE START =======
								
								  if ($('li.RegularOrdclsRepeat').hasClass('active') ) {
							    	  $('.CoverOrderrightsideDivclsRepeat').hide();
							     	  $('.NonCoverOrderDivclsRepeat').show();
							    	  $('.ProductsclsRepeat').show();
							    	  $('.BracketordertextboxclsRepeat').hide();     	
							    	
							    	  
							    	  $(".dayclsRepeat").show();
									   	 $(".iocclsRepeat").show();
									   	 $(".gtcclsRepeat").hide();
									   	 $(".gtdclsRepeat").hide();
									   	 $(".gttclsRepeat").hide();
									   	 
							    	 // $('.priceclsRepeat').prop('disabled',false);
									  $('.DisclosedQtyclsRepeat').prop('disabled',false);
									  $(".DisclosedQtyclsRepeat").show();
							    	
									  $('.priceclsRepeat').prop('disabled',false);
									  $(".nrmlclsRepeat").addClass('active')  
									 
								   		 if ($('.nrmlclsRepeat').hasClass('active') ) {
								   			 $('.nrmlclsRepeat').siblings().removeClass('active');
								    	  }
								   		if ($('.misclsRepeat').hasClass('active') ) {
								  			 $('.misclsRepeat').siblings().removeClass('active');
								   	  }
							    	
							    	 if ($('li.dayclsRepeat').hasClass('active') ) {
							     		$('.DisclosedQtyclsRepeat').prop('disabled',true);
							     		$('.TriggerpriceclsRepeat').hide();
							     		$('.DTDValidityclsRepeat').hide();
							     	 }
							    	 if ($('li.iocclsRepeat').hasClass('active') ) {
							      		$('.DisclosedQtyclsRepeat').prop('disabled',true);
							      		$('.TriggerpriceclsRepeat').hide();
							      		$('.DTDValidityclsRepeat').hide();
							      	 }
							    	 $(".gtcclsRepeat").hide();
							    	 $(".gtdclsRepeat").hide();
							    	 $(".gttclsRepeat").hide();
							    	
							    	 
							    		 $('.ValidityclsRepeat').show();
							    		 $('.CoverordertypeclsRepeat').hide();
							    	 
							    		 $("#lmtIdRepeat").show();
									   	 $("#mktIdRepeat").show();
									   	 $("#slIdRepeat").show();
									   	 $("#sl-mIdRepeat").show();
							   	 
							   	 	if ($('.lmtclsRepeat').hasClass('active') ) { //Price Type ( L or SL )
							   	 	$('.priceclsRepeat').prop('disabled',false);
									$('.DisclosedQtyclsRepeat').prop('disabled',false);     		
							 		$('.TriggerpriceclsRepeat').hide();
									 }
							   	 	if ($('.mktclsRepeat').hasClass('active') ) { //Price Type ( L or SL )
							   	 	$('.priceclsRepeat').prop('disabled',true);
									$('.DisclosedQtyclsRepeat').prop('disabled',false);     		
							 		$('.TriggerpriceclsRepeat').hide();
									 }
							   	 	if ($('.slclsRepeat').hasClass('active') ) { //Price Type ( L or SL )
							   	 	$('.TriggerpriceclsRepeat').show();
							  		$('.DisclosedQtyclsRepeat').prop('disabled',false);
									 }
									 if ($('.slmclsRepeat').hasClass('active') ) { //Price Type ( L or SL )
										 $('.NonCoverOrderDivclsRepeat').show();
								    		$('.DisclosedQtyclsRepeat').prop('disabled',false);
								    		$('.priceclsRepeat').prop('disabled',true);
								      		$('.TriggerpriceclsRepeat').show();
									 }
							   	 
							      }
								  
								//=======  Regular NSE END =======
								  				
								  
									//=======  AMO Order NSE START =======
								  
								  
								  if ($('.AfterMarketOrdclsRepeat').hasClass('active') ) {
										
										$('.priceclsRepeat').prop('disabled',false);
										 $('.CoverOrderrightsideDivclsRepeat').hide();
							        	  $('.NonCoverOrderDivclsRepeat').show();
							        	  $('.ProductsclsRepeat').show();
							        	  $('.BracketordertextboxclsRepeat').hide();
							       	
							        	  	$(".dayclsRepeat").show();
										   	 $(".iocclsRepeat").show();
										   	 $(".gtcclsRepeat").hide();
										   	 $(".gtdclsRepeat").hide();
										   	 $(".gttclsRepeat").hide();
										   	 
								        
								    		$('.DisclosedQtyclsRepeat').prop('disabled',false);
								    		$(".DisclosedQtyclsRepeat").show();
							       	
								    		 $('.priceclsRepeat').prop('disabled',false);
											  $(".cncclsRepeat").addClass('active')    		 
										   		 if ($('.cncclsRepeat').hasClass('active') ) {
										   			 $('.cncclsRepeat').siblings().removeClass('active');
										    	  }
										   		if ($('.misclsRepeat').hasClass('active') ) {
										  			 $('.misclsRepeat').siblings().removeClass('active');
										   	  }
							       	
							       	 if ($('.dayclsRepeat').hasClass('active') ) {
							        		$('.DisclosedQtyclsRepeat').prop('disabled',true);
							        		$('.TriggerpriceclsRepeat').hide();
							        		$('.DTDValidityclsRepeat').hide();
							        	 }
							       	 if ($('.iocclsRepeat').hasClass('active') ) {
							         		$('.DisclosedQtyclsRepeat').prop('disabled',true);
							         		$('.TriggerpriceclsRepeat').hide();
							         		$('.DTDValidityclsRepeat').hide();
							         	 }
							       	 if ($('.gtcclsRepeat').hasClass('active') ) {
							          		$('.DisclosedQtyclsRepeat').prop('disabled',true);
							          		$('.TriggerpriceclsRepeat').hide();
							          		$('.DTDValidityclsRepeat').hide();
							          	 }
							       	 
							       	if ($('.gtdclsRepeat').hasClass('active') ) {
							       		
							        		$('.DisclosedQtyclsRepeat').prop('disabled',true);
							        		$('.TriggerpriceclsRepeat').hide();
							        		$('.DTDValidityclsRepeat').show();
							        		
							        		$(".date_item").show();
							         		$("#datepickerbuysellRepeat").prop("disabled", false);
							         		
							         		  $('#datepickerbuysellRepeat').datepicker({
							    	  
							    		 	    dateFormat: 'd M yy',
							    		 	    minDate: new Date(),
							    		 	    defaultDate:  new Date(),
							    	    
							         		  	}).datepicker('setDate',new Date())
							         	
							          }
							    		else{
							    		      $(".date_item").hide();
							    		      $("#datepickerRepeat").prop("disabled", true);
							    		    }
							       	if ($('.gttclsRepeat').hasClass('active') ) {
							       		
							        		$('.DisclosedQtyclsRepeat').prop('disabled',true);
							        		$('.TriggerpriceclsRepeat').hide();
							        		$('.DTDValidityclsRepeat').hide();
							        		
							        	 }
							       	 
							       	 $('.ValidityclsRepeat').show();
							       	$('.CoverordertypeclsRepeat').hide();
							       	 
							       	 $("#lmtIdRepeat").show();
							      	 $("#mktIdRepeat").show();
							      	 $("#slIdRepeat").show();
							      	 $("#sl-mIdRepeat").show();
							      	 
							      	 //$(".lmtclsRepeat").addClass('active')

							   	 	if ($('.lmtclsRepeat').hasClass('active') ) { //Price Type ( L or SL )
							   	   	 	$('.priceclsRepeat').prop('disabled',false);
							   			$('.DisclosedQtyclsRepeat').prop('disabled',false);     		
							   	 		$('.TriggerpriceclsRepeat').hide();
							   			 }
							   	   	 	if ($('.mktclsRepeat').hasClass('active') ) { //Price Type ( L or SL )
							   	   	 	$('.priceclsRepeat').prop('disabled',true);
							   			$('.DisclosedQtyclsRepeat').prop('disabled',false);     		
							   	 		$('.TriggerpriceclsRepeat').hide();
							   	 	
							   			 }
							   	   	 	if ($('.slclsRepeat').hasClass('active') ) { //Price Type ( L or SL )
							   	   	 	$('.TriggerpriceclsRepeat').show();
							   	  		$('.DisclosedQtyclsRepeat').prop('disabled',false);
							   	  	
							   			 }
							   			 if ($('.slmclsRepeat').hasClass('active') ) { //Price Type ( L or SL )
							   				 $('.NonCoverOrderDivclsRepeat').show();
							   		    		$('.DisclosedQtyclsRepeat').prop('disabled',false);
							   		    		$('.priceclsRepeat').prop('disabled',true);
							   		      		$('.TriggerpriceclsRepeat').show();
							   		      	
							   			 }
							      	 
							         }
								  
									//=======  AMO Order NSE END =======
								
								  
								  //NSE TICK SIZE
								  	document.getElementById("nseticksizehiddvalRepeat").value=jsonObject[i].properties.nseTickSize;
								  
								  //NSE
									document.getElementById("nseexpirydatehiddvalRepeat").innerHTML=jsonObject[i].properties.nseExDate;
									document.getElementById("nseexpirydatehiddvalRepeat").value=jsonObject[i].properties.nseExDate;	
									document.getElementById("nseSerieshiddvalRepeat").value=jsonObject[i].properties.nseSeries
									
								  	document.getElementById("stocklabelIdRepeat").innerHTML=jsonObject[i].properties.nseSymbol+"-"+jsonObject[i].properties.nseSeries+" "+jsonObject[i].properties.nseExchange;
									document.getElementById("scripthiddvalRepeat").value=jsonObject[i].properties.nseSymbol+"-"+jsonObject[i].properties.nseSeries;
								
								
							}
							
							else  if(jsonObject[i].properties.nfoExchange==='NFO'){	
								
								document.getElementById("stockhiddvalRepeat").value=jsonObject[i].properties.nfoExchange;
								document.getElementById("nfoexpirydatelabelIdRepeat").innerHTML=jsonObject[i].properties.nfoexpiry_date;
								
								var scriptName;
			                  	var myDate = new Date(jsonObject[i].properties.nfoexpiry_date);
			       	            if(jsonObject[i].properties.nfoinstrument_name=="FUTIDX" || jsonObject[i].properties.nfoinstrument_name=="FUTSTK" ){
			       	            scriptName=myDate.getDate() +monthNames[myDate.getMonth()]+" "+"FUT"+" "+jsonObject[i].properties.nfoExchange;
			       	            }else{
			       	            scriptName=myDate.getDate() +monthNames[myDate.getMonth()]+" "+jsonObject[i].properties.nfostrike_price+" "+jsonObject[i].properties.nfooption_type+" "+jsonObject[i].properties.nfoExchange;
			       	            }
			 	        	
			 	        	displayname=jsonObject[i].properties.nfoSymbol;
			 	        	
		                     document.getElementById("scriptNamehiddvalRepeat").value=scriptName;
							
							document.getElementById("displaynamehiddvalRepeat").value=displayname;
								
								$("#NrmlIdRepeat").show();
								$("#cncIdRepeat").hide();
								$("#MisIdRepeat").show();
								
								
								
							   	 
								$(".nrmlclsRepeat").addClass('active')    		 
						   		 if ($('.nrmlclsRepeat').hasClass('active') ) {
						   			 $('.nrmlclsRepeat').siblings().removeClass('active');
						    	  }
								   		 
						   		 if ($('.cncclsRepeat').hasClass('active') ) {
						   			 $('.cncclsRepeat').siblings().removeClass('active');
						    	  }
						   		if ($('.misclsRepeat').hasClass('active') ) {
						  			 $('.misclsRepeat').siblings().removeClass('active');
						   	  }
						   		
								
								$(".BracketOrdclsRepeat").hide();
								$(".CoverOrdclsRepeat").hide();
								
								
									$(".RegularOrdclsRepeat").addClass('active')  
								 
						   		 if ($('.RegularOrdclsRepeat').hasClass('active') ) {
						   			 $('.RegularOrdclsRepeat').siblings().removeClass('active');
						    	  }
						   		if ($('.AfterMarketOrdclsRepeat').hasClass('active') ) {
						  			 $('.AfterMarketOrdclsRepeat').siblings().removeClass('active');
						   	  }
						   		
								//=======  Regular ORDER NSE START =======
								
								  if ($('li.RegularOrdclsRepeat').hasClass('active') ) {
									  	 $(".dayclsRepeat").show();
									   	 $(".iocclsRepeat").show();
									   	 $(".gtcclsRepeat").hide();
									   	 $(".gtdclsRepeat").hide();
									   	 $(".gttclsRepeat").hide();
									   	 
							    	  $('.CoverOrderrightsideDivclsRepeat').hide();
							     	  $('.NonCoverOrderDivclsRepeat').show();
							    	  $('.ProductsclsRepeat').show();
							    	  $('.BracketordertextboxclsRepeat').hide();     	
							    	
							    	 // $('.priceclsRepeat').prop('disabled',false);
									  $('.DisclosedQtyclsRepeat').prop('disabled',false);
									  $(".DisclosedQtyclsRepeat").show();
							    	
									  $('.priceclsRepeat').prop('disabled',false);
										$('li.nrmlclsRepeat').hasClass('active')
							    	
							    	 if ($('.dayclsRepeat').hasClass('active') ) {
							     		$('.DisclosedQtyclsRepeat').prop('disabled',true);
							     		$('.TriggerpriceclsRepeat').hide();
							     		$('.DTDValidityclsRepeat').hide();
							     	 }
							    	 if ($('.iocclsRepeat').hasClass('active') ) {
							      		$('.DisclosedQtyclsRepeat').prop('disabled',true);
							      		$('.TriggerpriceclsRepeat').hide();
							      		$('.DTDValidityclsRepeat').hide();
							      	 }
							    	 $(".gtcclsRepeat").hide();
							    	 $(".gtdclsRepeat").hide();
							    	 $(".gttclsRepeat").hide();
							    	
							    	 
							    		 $('.ValidityclsRepeat').show();
							    		 $('.CoverordertypeclsRepeat').hide();
							    	 
							    		 $("#lmtIdRepeat").show();
									   	 $("#mktIdRepeat").show();
									   	 $("#slIdRepeat").show();
									   	 $("#sl-mIdRepeat").show();
							   	 
							   	 	if ($('.lmtclsRepeat').hasClass('active') ) { //Price Type ( L or SL )
							   	 	$('.priceclsRepeat').prop('disabled',false);
									$('.DisclosedQtyclsRepeat').prop('disabled',false);     		
							 		$('.TriggerpriceclsRepeat').hide();
									 }
							   	 	if ($('.mktclsRepeat').hasClass('active') ) { //Price Type ( L or SL )
							   	 	$('.priceclsRepeat').prop('disabled',true);
									$('.DisclosedQtyclsRepeat').prop('disabled',false);     		
							 		$('.TriggerpriceclsRepeat').hide();
									 }
							   	 	if ($('.slclsRepeat').hasClass('active') ) { //Price Type ( L or SL )
							   	 	$('.TriggerpriceclsRepeat').show();
							  		$('.DisclosedQtyclsRepeat').prop('disabled',false);
									 }
									 if ($('.slmclsRepeat').hasClass('active') ) { //Price Type ( L or SL )
										 $('.NonCoverOrderDivclsRepeat').show();
								    		$('.DisclosedQtyclsRepeat').prop('disabled',false);
								    		$('.priceclsRepeat').prop('disabled',true);
								      		$('.TriggerpriceclsRepeat').show();
									 }
							   	 
							      }
								  
								//=======  Regular NSE END =======
								  				
								  
									//=======  AMO Order NSE START =======
								  
								  
								  if ($('.AfterMarketOrdclsRepeat').hasClass('active') ) {
										
									  
									     $(".dayclsRepeat").show();
									   	 $(".iocclsRepeat").show();
									   	 $(".gtcclsRepeat").hide();
									   	 $(".gtdclsRepeat").hide();
									   	 $(".gttclsRepeat").hide();
									   	 
										$('.priceclsRepeat').prop('disabled',false);
										 $('.CoverOrderrightsideDivclsRepeat').hide();
							        	  $('.NonCoverOrderDivclsRepeat').show();
							       	  $('.ProductsclsRepeat').show();
							       	  $('.BracketordertextboxclsRepeat').hide();
							       	
								        	$('.priceclsRepeat').prop('disabled',false);
								    		$('.DisclosedQtyclsRepeat').prop('disabled',false);
								    		$(".DisclosedQtyclsRepeat").show();
							       	
							     
							       	
							       	 if ($('.dayclsRepeat').hasClass('active') ) {
							        		$('.DisclosedQtyclsRepeat').prop('disabled',true);
							        		$('.TriggerpriceclsRepeat').hide();
							        		$('.DTDValidityclsRepeat').hide();
							        	 }
							       	 if ($('.iocclsRepeat').hasClass('active') ) {
							         		$('.DisclosedQtyclsRepeat').prop('disabled',true);
							         		$('.TriggerpriceclsRepeat').hide();
							         		$('.DTDValidityclsRepeat').hide();
							         	 }
							       	 if ($('.gtcclsRepeat').hasClass('active') ) {
							          		$('.DisclosedQtyclsRepeat').prop('disabled',true);
							          		$('.TriggerpriceclsRepeat').hide();
							          		$('.DTDValidityclsRepeat').hide();
							          	 }
							       	 
							       	if ($('.gtdclsRepeat').hasClass('active') ) {
							       		
							        		$('.DisclosedQtyclsRepeat').prop('disabled',true);
							        		$('.TriggerpriceclsRepeat').hide();
							        		
							        		$('.DTDValidityclsRepeat').show();
								     		$(".date_item").show();
								     		$("#datepickerbuysellRepeat").prop("disabled", false);
								     		
								     		  $('#datepickerbuysellRepeat').datepicker({
							   	  
										 	    dateFormat: 'd M yy',
										 	    minDate: new Date(),
										 	    defaultDate:  new Date(),
							 	    
								     		  	}).datepicker('setDate',new Date())
								     	
							        	
								  }
							 		else{
							 		      $(".date_item").hide();
							 		      $("#datepickerRepeat").prop("disabled", true);
							 		    }
							       	if ($('.gttclsRepeat').hasClass('active') ) {
							       		
							        		$('.DisclosedQtyclsRepeat').prop('disabled',true);
							        		$('.TriggerpriceclsRepeat').hide();
							        		$('.DTDValidityclsRepeat').hide();
							        		
							        	 }
							       	 
							       	 $('.ValidityclsRepeat').show();
							       	$('.CoverordertypeclsRepeat').hide();
							       	 
							       	 $("#lmtIdRepeat").show();
							      	 $("#mktIdRepeat").show();
							      	 $("#slIdRepeat").show();
							      	 $("#sl-mIdRepeat").show();
							      	 
							      	 //$(".lmtclsRepeat").addClass('active')

							   	 	if ($('.lmtclsRepeat').hasClass('active') ) { //Price Type ( L or SL )
							   	   	 	$('.priceclsRepeat').prop('disabled',false);
							   			$('.DisclosedQtyclsRepeat').prop('disabled',false);     		
							   	 		$('.TriggerpriceclsRepeat').hide();
							   			 }
							   	   	 	if ($('.mktclsRepeat').hasClass('active') ) { //Price Type ( L or SL )
							   	   	 	$('.priceclsRepeat').prop('disabled',true);
							   			$('.DisclosedQtyclsRepeat').prop('disabled',false);     		
							   	 		$('.TriggerpriceclsRepeat').hide();
							   	 	
							   			 }
							   	   	 	if ($('.slclsRepeat').hasClass('active') ) { //Price Type ( L or SL )
							   	   	 	$('.TriggerpriceclsRepeat').show();
							   	  		$('.DisclosedQtyclsRepeat').prop('disabled',false);
							   	  	
							   			 }
							   			 if ($('.slmclsRepeat').hasClass('active') ) { //Price Type ( L or SL )
							   				 $('.NonCoverOrderDivclsRepeat').show();
							   		    		$('.DisclosedQtyclsRepeat').prop('disabled',false);
							   		    		$('.priceclsRepeat').prop('disabled',true);
							   		      		$('.TriggerpriceclsRepeat').show();
							   		      	
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
										document.getElementById("NfoInstrumentNamehiddvalRepeat").value=jsonObject[i].properties.nfoinstrument_name;
										
										document.getElementById("nfoexpirydatehiddvalRepeat").value=nfoexpirymyDatedisplay;
										
										//Nfooption_type
										document.getElementById("nfooption_typehiddvalRepeat").value=jsonObject[i].properties.nfooption_type;
										
								  
								  //alert("nfooption_type : "+nfooption_type+" nfoinstrument_name : "+nfoinstrument_name); 
								  
								if(jsonObject[i].properties.nfoinstrument_name=="FUTIDX" || jsonObject[i].properties.nfoinstrument_name=="FUTSTK" ){
									if(nfooption_type=="XX"){
									if(dd<10) 
									{
										
										//	dd='0'+dd;
										// nfoexpirymyDate = dd.concat(monthNames[myDate.getMonth()]+twoDigitYear);						 
										 document.getElementById("stocklabelIdRepeat").innerHTML=jsonObject[i].properties.nfoSymbol+" "+"FUT"+" "+jsonObject[i].properties.nfoExchange;
										 document.getElementById("scripthiddvalRepeat").value=jsonObject[i].properties.nfoSymbol+"0"+nfoexpirymyDate+"F";
									}else {
										document.getElementById("stocklabelIdRepeat").innerHTML=jsonObject[i].properties.nfoSymbol+" "+"FUT"+" "+jsonObject[i].properties.nfoExchange;
										document.getElementById("scripthiddvalRepeat").value=jsonObject[i].properties.nfoSymbol+nfoexpirymyDate+"F";
									} 	
									}
								}
								
								else if (jsonObject[i].properties.nfoinstrument_name=="OPTIDX" || jsonObject[i].properties.nfoinstrument_name=="OPTSTK" ){
									
									
									var num=jsonObject[i].properties.nfostrike_price/100;				
									
									var DecimalmcxStrikePrice= num.toFixed(2);
									document.getElementById('decimalhiddvalRepeat').value=(Math.round(DecimalmcxStrikePrice * 100) / 100);
									
									var decimalVal=$("#decimalhiddvalRepeat").val();
									
									//document.getElementById('decimalhiddval').value=nfostrike_price;
									
									//document.getElementById('nfoTicksizehiddval').value=nfoTicksize;
									
									if(jsonObject[i].properties.nfooption_type=="PE"){
										
									
									if(dd<10) 
									{
									  //  dd='0'+dd;
										// nfoexpirymyDate = dd.concat(monthNames[myDate.getMonth()]+twoDigitYear);
									document.getElementById("stocklabelIdRepeat").innerHTML=jsonObject[i].properties.nfosymbol+" "+decimalVal+" "+jsonObject[i].properties.nfoExchange;
									document.getElementById("scripthiddvalRepeat").value=jsonObject[i].properties.nfosymbol+"0"+nfoexpirymyDate+"P"+decimalVal;
									}else{
										
										document.getElementById("stocklabelIdRepeat").innerHTML=jsonObject[i].properties.nfoSymbol+" "+decimalVal+" "+jsonObject[i].properties.nfoExchange;
										document.getElementById("scripthiddvalRepeat").value=jsonObject[i].properties.nfoSymbol+nfoexpirymyDate+"P"+decimalVal;
									}
									}
									else if(jsonObject[i].properties.nfooption_type=="CE"){
										
										
										if(dd<10) 
										{
										  //  dd='0'+dd;
											// nfoexpirymyDate = dd.concat(monthNames[myDate.getMonth()]+twoDigitYear);
										document.getElementById("stocklabelIdRepeat").innerHTML=jsonObject[i].properties.nfosymbol+" "+decimalVal+" "+jsonObject[i].properties.nfoExchange;
										document.getElementById("scripthiddvalRepeat").value=jsonObject[i].properties.nfosymbol+"0"+nfoexpirymyDate+"C"+decimalVal;
										}else{							
											document.getElementById("stocklabelIdRepeat").innerHTML=jsonObject[i].properties.nfoSymbol+" "+decimalVal+" "+jsonObject[i].properties.nfoExchange;
											document.getElementById("scripthiddvalRepeat").value=jsonObject[i].properties.nfoSymbol+nfoexpirymyDate+"C"+decimalVal;
										}					
										
									}
									
								}		
							}


							$('.CoverOrderrightsideDivclsRepeat').hide();
							$('.NonCoverOrderDivclsRepeat').show();
							$('.DisclosedQtyclsRepeat').prop('disabled',false);
							$(".DisclosedQtyclsRepeat").show();
						    $('.ProductsclsRepeat').show();
						    $('.BracketordertextboxclsRepeat').hide();
						    $('.ValidityclsRepeat').show();
						    $('.TriggerpriceclsRepeat').hide();
						   	$("#lmtIdRepeat").show();
							$("#mktIdRepeat").show();
							$("#slIdRepeat").show();
							$("#sl-mIdRepeat").show();
					  
					 
				$(".buysellcatgryRepeat li").on('click', function(){
						 
				       $(this).siblings().removeClass('active');
				       $(this).addClass('active')
				       
				  /* $('#datepicker').datepicker({
				   dateFormat: 'd M yy',
				   minDate: new Date(),
				   defaultDate:  new Date(),

				 }).datepicker('setDate',new Date());*/
				   
				 //buy-sell Order window
				     
				    
				      if ($('li.RegularOrdclsRepeat').hasClass('active') ) {
				    	  $('.CoverOrderrightsideDivclsRepeat').hide();
				     	  $('.NonCoverOrderDivclsRepeat').show();
				    	  $('.ProductsclsRepeat').show();
				    	  $('.BracketordertextboxclsRepeat').hide();     	
				    	
				    	 // $('.priceclsRepeat').prop('disabled',false);
						  $('.DisclosedQtyclsRepeat').prop('disabled',false);
						  $(".DisclosedQtyclsRepeat").show();
				    	
				    
				    	
				    	 if ($('li.dayclsRepeat').hasClass('active') ) {
				     		$('.DisclosedQtyclsRepeat').prop('disabled',true);
				     		$('.TriggerpriceclsRepeat').hide();
				     		$('.DTDValidityclsRepeat').hide();
				     	 }
				    	 if ($('li.iocclsRepeat').hasClass('active') ) {
				      		$('.DisclosedQtyclsRepeat').prop('disabled',true);
				      		$('.TriggerpriceclsRepeat').hide();
				      		$('.DTDValidityclsRepeat').hide();
				      	 }
				    	 if ($('li.gtcclsRepeat').hasClass('active') ) {
				       		$('.DisclosedQtyclsRepeat').prop('disabled',true);
				       		$('.TriggerpriceclsRepeat').hide();
				       		$('.DTDValidityclsRepeat').hide();
				       	 }
				    	 
				    	if ($('li.gtdclsRepeat').hasClass('active') ) {
				    		
				     		$('.DisclosedQtyclsRepeat').prop('disabled',true);
				     		$('.TriggerpriceclsRepeat').hide();
				     		
				     		$('.DTDValidityclsRepeat').show();
				     		$(".date_item").show();
				     		$("#datepickerbuysellRepeat").prop("disabled", false);
				     		
				     		  $('#datepickerbuysellRepeat').datepicker({
					  
						 	    dateFormat: 'd M yy',
						 	    minDate: new Date(),
						 	    defaultDate:  new Date(),
					    
				     		  	}).datepicker('setDate',new Date())
				     	
				      }
						else{
						      $(".date_item").hide();
						      $("#datepickerRepeat").prop("disabled", true);
						    }
				    	if ($('li.gttclsRepeat').hasClass('active') ) {
				    		
				     		$('.DisclosedQtyclsRepeat').prop('disabled',true);
				     		$('.TriggerpriceclsRepeat').hide();
				     		$('.DTDValidityclsRepeat').hide();
				     		
				     	 }
				    	 
				    		 $('.ValidityclsRepeat').show();
				    		 $('.CoverordertypeclsRepeat').hide();
				    	 
				    		 $("#lmtIdRepeat").show();
						   	 $("#mktIdRepeat").show();
						   	 $("#slIdRepeat").show();
						   	 $("#sl-mIdRepeat").show();
				   	 
				   	 	if ($('li.lmtclsRepeat').hasClass('active') ) { //Price Type ( L or SL )
				   	 	$('.priceclsRepeat').prop('disabled',false);
						$('.DisclosedQtyclsRepeat').prop('disabled',false);     		
				 		$('.TriggerpriceclsRepeat').hide();
						 }
				   	 	if ($('li.mktclsRepeat').hasClass('active') ) { //Price Type ( L or SL )
				   	 	$('.priceclsRepeat').prop('disabled',true);
						$('.DisclosedQtyclsRepeat').prop('disabled',false);     		
				 		$('.TriggerpriceclsRepeat').hide();
						 }
				   	 	if ($('li.slclsRepeat').hasClass('active') ) { //Price Type ( L or SL )
				   	 	$('.TriggerpriceclsRepeat').show();
				  		$('.DisclosedQtyclsRepeat').prop('disabled',false);
						 }
						 if ($('li.slmclsRepeat').hasClass('active') ) { //Price Type ( L or SL )
							 $('.NonCoverOrderDivclsRepeat').show();
					    		$('.DisclosedQtyclsRepeat').prop('disabled',false);
					    		$('.priceclsRepeat').prop('disabled',true);
					      		$('.TriggerpriceclsRepeat').show();
						 }
				   	 
				      }
				      else if ($('li.BracketOrdclsRepeat').hasClass('active') ) {
				    	  
				   		 $(".lmtclsRepeat").addClass('active')    		 
				   		 if ($('.slclsRepeat').hasClass('active') ) {
				   			 $('.slclsRepeat').siblings().removeClass('active');
				    	  }
				   		if ($('.lmtclsRepeat').hasClass('active') ) {
				  			 $('.lmtclsRepeat').siblings().removeClass('active');
				   	  }
				   	 
						   	 $(".DisclosedQtyclsRepeat").disabled = false;
						   	 $(".DisclosedQtyclsRepeat").show();
						   	 $('.ProductsclsRepeat').hide();
						   	 $('.priceclsRepeat').prop('disabled',false);
						   	 $('.BracketordertextboxclsRepeat').show();
						   	 $('.ValidityclsRepeat').hide();    	 
						   	 $('.CoverOrderrightsideDivclsRepeat').hide();
						   	 $('.NonCoverOrderDivclsRepeat').show();
						   	 $("#lmtIdRepeat").show();
						   	 $("#mktIdRepeat").hide();
						   	 $("#slIdRepeat").show();
						   	 $("#sl-mIdRepeat").hide();
						   	 $('.CoverordertypeclsRepeat').hide();
						   	 $('.TriggerpriceclsRepeat').hide();
						   	 
						   	 if ($('li.lmtclsRepeat').hasClass('active') ) { //Price Type ( L or SL )
						   		 $('.TriggerpriceclsRepeat').hide();
						 		 }
						 		 if ($('li.slclsRepeat').hasClass('active') ) { //Price Type ( L or SL )
						 			$('.TriggerpriceclsRepeat').show();
						 		 }
						 		
						      }      
				      
						      else if ($('li.CoverOrdclsRepeat').hasClass('active') ) {
						   	  // $(".DisclosedQtyclsRepeat").disabled = false;
						   	   $(".DisclosedQtyclsRepeat").hide();
						   	  $('.ProductsclsRepeat').hide();
						   	 
						   	 $('.BracketordertextboxclsRepeat').hide();
						   	 $('.ValidityclsRepeat').hide();
						   	 $('.TriggerpriceclsRepeat').show();
						   	
						   	 $('.CoverOrderrightsideDivclsRepeat').show();
						   	 $('.NonCoverOrderDivclsRepeat').hide();
						   	 $("#CoverOrderlmtIdRepeat").show();
						   	 $("#CoverOrdermktIdRepeat").show();
						   	 $("#CoverOrderslIdRepeat").hide();
						   	 $("#CoverOrdersl-mIdRepeat").hide();
						   	 
						   	 $(".lmtclsRepeat").addClass('active')
						   	  if ($('.mktclsRepeat').hasClass('active') ) {
						   			 $('.mktclsRepeat').siblings().removeClass('active');
						   			 $('.priceclsRepeat').prop('disabled',true);
				    	  }
				   		if ($('.lmtclsRepeat').hasClass('active') ) {
				  			 $('.lmtclsRepeat').siblings().removeClass('active');
				  			 $('.priceclsRepeat').prop('disabled',false);
				   	  }
				   	 
				   	 
				    }
				      else if ($('li.AfterMarketOrdclsRepeat').hasClass('active') ) {       	   
				         	
				   	   	  $('.CoverOrderrightsideDivclsRepeat').hide();
				        	  $('.NonCoverOrderDivclsRepeat').show();
				       	  $('.ProductsclsRepeat').show();
				       	  $('.BracketordertextboxclsRepeat').hide();
				       	
					        	$('.priceclsRepeat').prop('disabled',false);
					    		$('.DisclosedQtyclsRepeat').prop('disabled',false);
					    		$(".DisclosedQtyclsRepeat").show();
				       	
				     
				       	
				       	 if ($('.dayclsRepeat').hasClass('active') ) {
				        		$('.DisclosedQtyclsRepeat').prop('disabled',true);
				        		$('.TriggerpriceclsRepeat').hide();
				        		$('.DTDValidityclsRepeat').hide();
				        	 }
				       	 if ($('.iocclsRepeat').hasClass('active') ) {
				         		$('.DisclosedQtyclsRepeat').prop('disabled',true);
				         		$('.TriggerpriceclsRepeat').hide();
				         		$('.DTDValidityclsRepeat').hide();
				         	 }
				       	 if ($('.gtcclsRepeat').hasClass('active') ) {
				          		$('.DisclosedQtyclsRepeat').prop('disabled',true);
				          		$('.TriggerpriceclsRepeat').hide();
				          		$('.DTDValidityclsRepeat').hide();
				          	 }
				       	 
				       	if ($('.gtdclsRepeat').hasClass('active') ) {
				       		
				        		$('.DisclosedQtyclsRepeat').prop('disabled',true);
				        		$('.TriggerpriceclsRepeat').hide();
				        		$('.DTDValidityclsRepeat').show();
				        		
					     		$(".date_item").show();
					     		$("#datepickerbuysellRepeat").prop("disabled", false);
					     		
					     		  $('#datepickerbuysellRepeat').datepicker({
				   	  
							 	    dateFormat: 'd M yy',
							 	    minDate: new Date(),
							 	    defaultDate:  new Date(),
				 	    
					     		  	}).datepicker('setDate',new Date())
					     	 
				        	 }
				      		
						else{
						      $(".date_item").hide();
						      $("#datepickerRepeat").prop("disabled", true);
						    }
				       	if ($('.gttclsRepeat').hasClass('active') ) {
				       		
				        		$('.DisclosedQtyclsRepeat').prop('disabled',true);
				        		$('.TriggerpriceclsRepeat').hide();
				        		$('.DTDValidityclsRepeat').hide();
				        		
				        	 }
				       	 
				       	 $('.ValidityclsRepeat').show();
				       	$('.CoverordertypeclsRepeat').hide();
				       	 
				       	 $("#lmtIdRepeat").show();
				      	 $("#mktIdRepeat").show();
				      	 $("#slIdRepeat").show();
				      	 $("#sl-mIdRepeat").show();
				      	 
				      	 //$(".lmtclsRepeat").addClass('active')

				   	 	if ($('.lmtclsRepeat').hasClass('active') ) { //Price Type ( L or SL )
				   	   	 	$('.priceclsRepeat').prop('disabled',false);
				   			$('.DisclosedQtyclsRepeat').prop('disabled',false);     		
				   	 		$('.TriggerpriceclsRepeat').hide();
				   			 }
				   	   	 	if ($('.mktclsRepeat').hasClass('active') ) { //Price Type ( L or SL )
				   	   	 	$('.priceclsRepeat').prop('disabled',true);
				   			$('.DisclosedQtyclsRepeat').prop('disabled',false);     		
				   	 		$('.TriggerpriceclsRepeat').hide();
				   	 	
				   			 }
				   	   	 	if ($('.slclsRepeat').hasClass('active') ) { //Price Type ( L or SL )
				   	   	 	$('.TriggerpriceclsRepeat').show();
				   	  		$('.DisclosedQtyclsRepeat').prop('disabled',false);
				   	  	
				   			 }
				   			 if ($('.slmclsRepeat').hasClass('active') ) { //Price Type ( L or SL )
				   				 $('.NonCoverOrderDivclsRepeat').show();
				   		    		$('.DisclosedQtyclsRepeat').prop('disabled',false);
				   		    		$('.priceclsRepeat').prop('disabled',true);
				   		      		$('.TriggerpriceclsRepeat').show();
				   		      	
				   			 }
				      	 
				         }
				       
				   })
				  
				  //=== Required margin Function === 
				   SpanCalculationFunctionRepeat();


				   document.getElementById("buyIdRepeat").addEventListener("click",PlaceOrderbuyfunRepeat);    
				   document.getElementById("sellIdRepeat").addEventListener("click",PlaceOrdersellfunRepeat); 
				   document.getElementById("TriggerpriceIdRepeat").addEventListener("keyup",TriggerPriceFunctionRepeat);
				   document.getElementById("priceIdRepeat").addEventListener("keyup",myPriceFunctionRepeat);
				   document.getElementById("DiscquantityIdRepeat").addEventListener("keyup",mydiscqtyFunctionRepeat);
				   
				   
				   	
					
					
					//END buy/sell
		   
		   
	        		


	        } //for loop end
			
			
		},
		error:function(){
		//	alert("getMarketwatchListById Error");
			
			}	
	});
}


   
function validateFloatKeyPress2Repeat(el, evt) {
	
	var priceVal=$('#priceIdRepeat').val();
	
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
}




var value;
var mcxTicksize;
var nseTicksize;
var nfoTicksize;
$('#priceIdRepeat').on('change',function(){	
	  
	var priceVal=$('#priceIdRepeat').val();
	var exchangeType=$('#stockhiddvalRepeat').val();
	

	//===== MCX Segment ======
	if(exchangeType=="MCX"){	
		
	value = document.getElementById("priceIdRepeat").step =priceVal;				    
	mcxTicksize=$("#mcxticksizehiddvalRepeat").val();
	
	
	document.getElementById("priceIdRepeat").step =mcxTicksize;
	//Number.parseFloat(mcxTicksize).toFixed(2)
	
	if($(this).val() > value){
		  var upTagvalue=parseInt(value)+mcxTicksize;
		  ocument.getElementById("priceIdRepeat").value = upTagvalue;
		  //document.getElementById("priceId").value =(Math.round(upTagvalue * 100) / 100).toFixed(3);
		  //(Math.round(upTagvalue * 100) / 100).toFixed(2)
	}else if($(this).val() < value){
		  var downTagvalue=parseInt(value)-mcxTicksize;
		  document.getElementById("priceIdRepeat").value =downTagvalue;
		  //document.getElementById("priceId").value =(Math.round(downTagvalue * 100) / 100).toFixed(3);
	}

	}				    	
	//===== NSE Segment ======
	else if(exchangeType=="NSE"){	
	    	value = document.getElementById("priceIdRepeat").step =priceVal;				    
	      	 nseTicksize=$("#nseticksizehiddvalRepeat").val();
	      
	     document.getElementById("priceIdRepeat").step =nseTicksize;	
	     
	     if($(this).val() > value){
	    	  var upTagvalue=parseInt(value)+parseInt(nseTicksize);
	    	  document.getElementById("priceIdRepeat").value =upTagvalue.toFixed(2);
	    	 // document.getElementById("priceId").value =(Math.round(upTagvalue * 100) / 100).toFixed(3);
	    	  
	      }else if($(this).val() < value){
	    	  var downTagvalue=parseInt(value)-parseInt(nseTicksize);
	    	 document.getElementById("priceIdRepeat").value =downTagvalue.toFixed(2);
	    	  //document.getElementById("priceId").value =(Math.round(downTagvalue * 100) / 100).toFixed(3);
	      }
	     }	
	else if(exchangeType=="NFO"){	
    	value = document.getElementById("priceIdRepeat").step =priceVal;				    
      	 nfoTicksize=$("#nfoTicksizehiddvalRepeat").val();
      
     document.getElementById("priceIdRepeat").step =nfoTicksize;	
     
     if($(this).val() > value){
    	  var upTagvalue=parseInt(value)+parseInt(nfoTicksize);
    	  document.getElementById("priceIdRepeat").value =upTagvalue.toFixed(2);
    	  //document.getElementById("priceId").value =(Math.round(upTagvalue * 100) / 100).toFixed(3);
    	  //(Math.round(num1 * 100) / 100).toFixed(2);
      }else if($(this).val() < value){
    	  var downTagvalue=parseInt(value)-parseInt(nfoTicksize);
    	 document.getElementById("priceIdRepeat").value =downTagvalue.toFixed(2);
    	//  document.getElementById("priceId").value =(Math.round(downTagvalue * 100) / 100).toFixed(3);
      }
     }
	
	
			value = $(this).val();
			
			
			
			/*Number.prototype.before = function () {
				  var value = parseInt(this.toString().split(".")[0], 10);//before
				  return value ? value : 0;
				}

				Number.prototype.after = function () {
				  var value = parseInt(this.toString().split(".")[1], 10);//after
				  return value ? value : 0;
				}*/


			
			
});			    
//==============================


   
   
 //Regular Order When you Click SL Order Type Validation for TriggerPrice

   function TriggerPriceFunctionRepeat(){
   	    var TriggerPriceVAL=$("#TriggerpriceIdRepeat").val();
         var PriceVAL=$("#priceIdRepeat").val();       
        	 if ( $('li.RegularOrdclsRepeat').hasClass('active') ) {       
       		if ( $('li.slclsRepeat').hasClass('active') ) {
       			
       	  if(Number(TriggerPriceVAL)>Number(PriceVAL)){
       		//  document.getElementById("TriggerPricehiddenErrorId").value='TriggerPriceError';
       		  $(".TriggerPriceErrorclsRepeat").show();
       		  $("#TriggerPriceErrorIdRepeat").show();
       		  document.getElementById("buyIdRepeat").disabled = true;	
       		  document.getElementById("sellIdRepeat").disabled = true;
           }
           else if(Number(PriceVAL)>=Number( TriggerPriceVAL) || Number(PriceVAL)>Number(TriggerPriceVAL)){
        	   $(".TriggerPriceErrorclsRepeat").hide();
        	   $("#TriggerPriceErrorIdRepeat").hide();
         	document.getElementById("buyIdRepeat").disabled = false;
   		document.getElementById("sellIdRepeat").disabled = false;
           }
       	  }
         }
   	  
   }
   
   /**
    * Req.Margin Calculation from Qty Increase /decrease Event
    */
   var classname = document.getElementsByClassName("QtyEventClassRepeat");

   classname.addEventListener('click', SpanCalculationFunctionRepeat(), false);
   
 	
   function SpanCalculationFunctionRepeat(){
	  
	   var buyqty=$("#QtyIdRepeat").val();
	   var exch=$("#stockhiddvalRepeat").val();	   
	   var price=$("#priceIdRepeat").val();
	   var symbolname=$("#displaynamehiddvalRepeat").val();
	   var Strikeprice=$("#decimalhiddvalRepeat").val();
	  // alert("Strikeprice : "+Strikeprice)
	   //var symbolname=$("#stocklabelhiddenId").val();
	   //var symbolname=$("#scripthiddval").val();
	   var optt="",strprc="",optt="",instrumentname="",expirydate="",prd="";
	   
	   
	    if(exch=="MCX"){
		    instrumentname=$("#mcxInstrumentNamehiddvalRepeat").val();
		    //var mcxOptionType=$("#mcxOptionTypehiddval").val();
		    expirydate=$("#mcxexpirydatehiddvalRepeat").val();
		    
		   if ($('li.nrmlclsRepeat').hasClass('active')){    		
    			prd="M";
    		}
    		if ($('li.misclsRepeat').hasClass('active')){    			
    			prd="I";
    		}
    		
    		if(instrumentname=="OPTFUT" || instrumentname=="OPTCOM"){  
    			
    			strprc=Strikeprice;
    			optt=$("#mcxOptionTypehiddvalRepeat").val();
    			
    		}
    		
    		  $.ajax({
    	    		type :'POST',
    	    		url  :'SpanCalcRepeat',		
    	    		data :"prd="+prd+"&exch="+exch+"&symbolname="+symbolname+"&instrumentname="+instrumentname+
    	    		"&expirydate="+expirydate+"&buyqty="+buyqty+"&strprc="+strprc+"&optt="+optt,
    	    		
    	    		success:function(JsonObject){    			
    	    			//alert("Req. Margin : "+JsonObject.span_trade);    	     		
    	    			if(JsonObject.stat=="Ok"){    				
    	    				document.getElementById("ReqMarginspanIdRepeat").innerHTML =JsonObject.span_trade;
    	    			}
    	    			else if(JsonObject.stat=="Not_Ok"){    				
    	    				document.getElementById("ReqMarginspanIdRepeat").innerHTML ="0.00";
    	    			}
    	    		},
    	    		error:function(){
    	    			alert("PlaceOrderRepeat Error");
    	    		
    	    		}	
    	    	});
    		
	   }
	
	   
	   else if(exch=="NFO"){		   
		   instrumentname=$("#NfoInstrumentNamehiddvalRepeat").val();
		   expirydate=$("#nfoexpirydatehiddvalRepeat").val();
		   if ($('li.nrmlclsRepeat').hasClass('active')){
    			prd="M";
    		}
    		if ($('li.misclsRepeat').hasClass('active')){    			
    			prd="I";
    		}
    		if(instrumentname=="OPTIDX" || instrumentname=="OPTSTK"){   	
    			strprc=Strikeprice;
    			optt=$("#nfooption_typehiddvalRepeat").val();
    		//alert("strprc : "+strprc+" optt : "+optt);	
    		}
    		
    		  $.ajax({
    	    		type :'POST',
    	    		url  :'SpanCalcRepeat',		
    	    		data :"prd="+prd+"&exch="+exch+"&symbolname="+symbolname+"&instrumentname="+instrumentname+
    	    		"&expirydate="+expirydate+"&buyqty="+buyqty+"&strprc="+strprc+"&optt="+optt,
    	    		
    	    		success:function(JsonObject){    			
    	    			//alert("Req. Margin : "+JsonObject.span_trade);    	     		
    	    			if(JsonObject.stat=="Ok"){    				
    	    				document.getElementById("ReqMarginspanIdRepeat").innerHTML =JsonObject.span_trade;
    	    			}
    	    			else if(JsonObject.stat=="Not_Ok"){    				
    	    				document.getElementById("ReqMarginspanIdRepeat").innerHTML ="0.00";
    	    			}
    	    		},
    	    		error:function(){
    	    			alert("PlaceOrderRepeat Error");
    	    		
    	    		}	
    	    	});
    		  
	   }
	   if(exch=="NSE"){
		   	   
		   document.getElementById("ReqMarginspanIdRepeat").innerHTML =Number(buyqty)*Number(price);
   		}
	   
   }
   
   
   
 	//Regular Order When you Click SL Order Type Validation for Price
 	 function myPriceFunctionRepeat(){
 		 
 		 var PriceVAL=$("#priceIdRepeat").val();
 		  var TriggerPriceVAL=$("#TriggerpriceIdRepeat").val();
 	   	  
 	   	 if ( $('li.RegularOrdclsRepeat').hasClass('active') ) { 
 	    	 
 	   		if ( $('li.slclsRepeat').hasClass('active') ) {
 		  if(Number(TriggerPriceVAL)>Number(PriceVAL)){
 			
 			  //document.getElementById("TriggerPricehiddenErrorId").value='TriggerPriceError';
 			  $(".TriggerPriceErrorclsRepeat").show();
       		  $("#TriggerPriceErrorIdRepeat").show();
 			  document.getElementById("buyIdRepeat").disabled = true;	
 			  document.getElementById("sellIdRepeat").disabled = true;
 	   }
 	   else if(Number(PriceVAL)>=Number( TriggerPriceVAL) || Number(PriceVAL)>Number(TriggerPriceVAL)){
 		   $(".TriggerPriceErrorclsRepeat").hide();
    	   $("#TriggerPriceErrorIdRepeat").hide();
 	 	 document.getElementById("buyIdRepeat").disabled = false;
 			document.getElementById("sellIdRepeat").disabled = false;
 	   }
 	   	  }
 	     }
 	 }
   
 	 
 	 

 	 function mydiscqtyFunctionRepeat(){
 	     
 	 	   var Discquantity = document.getElementById("DiscquantityIdRepeat").value;
 	 	   var Quantity = document.getElementById("QtyIdRepeat").value;
 	 	   
 	 	 //  var exchangeType=$("#stockhiddval").val();
 	 	   var  exchangeType="MCX";
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
 	 		   
 	 		 if ($('li.nrmlclsRepeat').hasClass('active')){	    			
	    			prd="M";
	    		}
 	 		 if ($('li.cncclsRepeat').hasClass('active')){	    	    			
	    			prd="C";
	    		}
				
				if ($('li.misclsRepeat').hasClass('active')){	    	    			
	    			prd="I";
	    		}
				
 	 		
 	 		 $("#NrmlIdRepeat").prop("disabled",true);
 	 		 $('#GTTlabelIdRepeat').show();
 	 		 
 	 	    var perVal = Number(Quantity /100 ) * Number(ValueTenPer);
 	 	  
 	 	   if(Number(Discquantity) === Number(Zero)){
 	 		  
 	 		  $(".DiscQuanErrorclsRepeat").hide();
 	 		  $("#DiscQuanErrorIdRepeat").hide();
 	  		  document.getElementById("buyIdRepeat").disabled = false;	
 	  		  document.getElementById("sellIdRepeat").disabled = false;
 	 	   }

 	 	  else if(Number(Discquantity)<Number(perVal) ||  Number(Discquantity)>Number(Quantity))
 	 	  		{
 	 		//	document.getElementById("DiscQuanNSEhiddenErrorId").value='DiscQuanNSEError';
 	 		  $(".DiscQuanErrorclsRepeat").show();
 	 		  $("#DiscQuanErrorIdRepeat").show();
 	 		
 	 		  document.getElementById("buyIdRepeat").disabled = true;	
 	 		  document.getElementById("sellIdRepeat").disabled = true;
 	 	}
 	 	  else if(Number(Discquantity)>=Number(perVal) ||  Number(Discquantity)>Number(Quantity))
 	 	{
 	 		 $(".DiscQuanErrorclsRepeat").hide();
 	 		  $("#DiscQuanErrorIdRepeat").hide();
 	 		 
 	 		  document.getElementById("buyIdRepeat").disabled = false;	
 	 		  document.getElementById("sellIdRepeat").disabled = false;
 	 	}
 	 	 }
 	 	 
 	 	 if(exchangeType==='MCX'){ 				//MCX
 	 		 
 	 		 $("#cncIdRepeat").prop("disabled",true);
 	 		 $('#gttIdRepeat').hide();	
 	 		 
 	 		 var perVal = Number(Quantity /100 ) * Number(ValueTwentyFivePer); 
 	 		 if(Number(Discquantity) === Number(Zero)){
 	 			 $(".DiscQuanErrorclsRepeat").hide();
 		 		  $("#DiscQuanErrorIdRepeat").hide();
 	 	    		  document.getElementById("buyIdRepeat").disabled = false;	
 	 	    		  document.getElementById("sellIdRepeat").disabled = false;
 	 		  }
 	 		 
 	 		 else  if(Number(Discquantity)<Number(perVal) ||  Number(Discquantity)>Number(Quantity))
 	 			{
 	 				// document.getElementById("DiscQuanMCXhiddenErrorId").value='DiscQuanMCXError';
 	 			  $(".DiscQuanErrorclsRepeat").show();
 		 		  $("#DiscQuanErrorIdRepeat").show();
 	 	    		  document.getElementById("buyIdRepeat").disabled = true;	
 	 	    		  document.getElementById("sellIdRepeat").disabled = true;
 	 			}
 	 			  else if(Number(Discquantity)>=Number(perVal) ||  Number(Discquantity)>Number(Quantity))
 	 			{ 				 
 	 				  $(".DiscQuanErrorclsRepeat").hide();
 			 		  $("#DiscQuanErrorIdRepeat").hide();			 		  
 	 	    		  document.getElementById("buyIdRepeat").disabled = false;	
 	 	    		  document.getElementById("sellIdRepeat").disabled = false;
 	 			}
 	 		  
 	 	 }
 	 	 
 	 } 
 	 
 	 
 	 function PlaceOrderbuyfunRepeat(){
 	    
 	    	var web="WEB";
 	    	var MCX="MCX";
 	    	var NSE="NSE";
 	    	//var DiscQuanErrorTag= document.getElementById("DiscQuanhiddenErrorId").value;		
 	    	
 	    		
 	    	if ( $('li.RegularOrdclsRepeat').hasClass('active') ) {
 	     		
 	    		
 	     		//var prd="C";
 	     		var Ret;
 		      		if ($('li.dayclsRepeat').hasClass('active')){
 		      		Ret="DAY";      		
 		      		}      		
 	    			if ($('li.iocclsRepeat').hasClass('active')){
 	    			Ret="IOC";
 	    			}
 	    			if ($('li.gtcclsRepeat').hasClass('active')){      		
 	    			 Ret="GTC";
 	    			}
 	    			if ($('li.gtdclsRepeat').hasClass('active')){       		
 	    			 Ret="GTD";
 	    			}
 	    			if ($('li.gttclsRepeat').hasClass('active')){       		
 	    			 Ret="GTT";
 	    			}
 	    		if(Ret==="DAY" || Ret==="IOC" || Ret==="GTT" ){
 	    			
 	    		
 	    		var sprdtali="CNC:CNC||MIS:MIS||NRML:NRML";	
 	    		var s_prdt_ali=sprdtali;
 	    	//	var uid=$("#UserIDRepeat").val();
 	    	//	var actid=$("#UserIDRepeat").val();
 	    		
 	    		var Ttranstype='B';
 	    		
 	    		var scriptName=$("#scriptNamehiddvalRepeat").val(); 	    		
 	    		var displayName=$("#displaynamehiddvalRepeat").val();
 	    		//var prctyp="LMT"; //Price type (from DefaultLogin/ NormalLogin rest api)
 	    		
 	    		var prctyp;
 	    		if ($('li.lmtclsRepeat').hasClass('active')){ //Price Type ( L or SL )
 	    			  prctyp="LMT";
 	    		 }
 	    		if ($('li.mktclsRepeat').hasClass('active')){ //Price Type ( L or SL )
 	    			  prctyp="MKT"; 
 	    		 }
 	    		if ($('li.slclsRepeat').hasClass('active')){ //Price Type ( L or SL )
 	    			  prctyp="SL"; 
 	    		 }
 	    		if ($('li.slmclsRepeat').hasClass('active')){ //Price Type ( L or SL )
 	    			  prctyp="SL-M"; 
 	    		 }
 	    		//alert("prctyp : "+prctyp);
 	    	
 	    		$(".ProductsclsRepeat").show();
 	    		var qty=$("#QtyIdRepeat").val();
 	    		 
 	    		 var discqtyVAL=$("#DiscquantityIdRepeat").val();    		
 	    		 var TsymVAL=$("#scripthiddvalRepeat").val();
 	    		 var exchangeType=$("#stockhiddvalRepeat").val();
 	    		 
 	    		 
 	    		//  alert("TsymVAL::"+TsymVAL+"exchangeType:::"+exchangeType);
 	    		 
 	    		 if(exchangeType==='MCX'){ //MCX
 	    			 
 	    		var exch=exchangeType;
 	    		var discqty=discqtyVAL;
 	    		var Tsym=TsymVAL;
 	    		
 	    		
 	    		if ($('li.nrmlclsRepeat').hasClass('active')){
 	    			var Pcode="NRML";
 	    			prd="M";
 	    		}
 	    		if ($('li.misclsRepeat').hasClass('active')){
 	    			var Pcode="MIS";
 	    			prd="I";
 	    		}
 	    		
 	    		 }
 	    		 if(exchangeType==='NSE'){ //NSE
 	    			
 	    				var exch="NSE";
 	    				var discqty=discqtyVAL;
 	    				var Tsym=TsymVAL;
 	    				if ($('li.nrmlclsRepeat').hasClass('active')){ 	    	    			
 	    	    			prd="M";
 	    	    		}
 	    				if ($('li.cncclsRepeat').hasClass('active')){	    	    			
 	    	    			prd="C";
 	    	    		}
 	    				
 	    				if ($('li.misclsRepeat').hasClass('active')){	    	    			
 	    	    			prd="I";
 	    	    		}
 	    			//	alert("TSYM:nse::"+Tsym);	
 	    				
 	    				}
 	    		 
 	    		 if(exchangeType==='NFO'){ //F&O-NFO
 	    			
 	    				var exch="NFO";
 	    				var discqty="0";			 
 	    				var Tsym=TsymVAL; 	    				
 	    				//var Tsym="BANKNIFTY18NOV21C32900";
 	    				prd="M";
 	    			}
 	    		 
 	    		var MktPro="NA"; //(MktPro Should be sent as NA by default)
 	    		
 	    		var PriceVAL=$("#priceIdRepeat").val();  
 	    		if(PriceVAL==""){
 	    			PriceVAL="0";    			
 	    		}
 	    		
 	    		
 	    		var TriggerpriceVAL=$('#TriggerpriceIdRepeat').val();  //(TrigPrice Send as 0 for default)
 	    		
 	    		var TrigPrice;
 	    		var Price;
 	    		if ($('li.lmtclsRepeat').hasClass('active')){
 	    			TrigPrice="0";
 	    			Price=PriceVAL;
 	    		}
 	    		if ($('li.mktclsRepeat').hasClass('active')){
 	    			TrigPrice="0";
 	    			Price="0";
 	    		}
 	    		if ($('li.slclsRepeat').hasClass('active')){
 	    			TrigPrice=TriggerpriceVAL;
 	    			Price=PriceVAL;
 	    		}
 	    		if ($('li.slmclsRepeat').hasClass('active')){
 	    			TrigPrice=TriggerpriceVAL;
 	    			Price="0";
 	    		}
 	    		
 	    		
 	    		var DateDays="NA"; //(DateDays Send as NA for default)
 	    		
 	    		var AMO;
 	    		
 	    		if ($('li.AfterMarketOrdclsRepeat').hasClass('active')){	
 	    			AMO="YES";
 	    		}
 	    		else{
 	    			AMO="NO";
 	    		}
 	    		
 	    		
 	    		var PosSquareFlg="N";
 	    		var MinQty="0"; //(MinQty Send as 0 for default)
 	    		var orderSource=web
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
 	    		
 	    	//	alert("TSYM:1::"+Tsym);
 	    		
 	    		
 	    	$.ajax({
 	    		type :'POST',
 	    		url :'PlaceOrderRepeat',		
 	    		data:"s_prdt_ali="+s_prdt_ali+"&Tsym="+Tsym+"&exch="+exch+"&Ttranstype="+Ttranstype+"&Ret="+Ret+"&prctyp="+prctyp+"&qty="+qty+"&discqty="+discqty+"&prd="+prd+
 	    		"&MktPro="+MktPro+"&Price="+Price+"&TrigPrice="+TrigPrice+"&Pcode="+Pcode+"&DateDays="+DateDays+"&AMO="+AMO+
 	    		"&PosSquareFlg="+PosSquareFlg+"&MinQty="+MinQty+"&orderSource="+orderSource+"&naicCode="+naicCode+
 	    		"&ltpOratp="+ltpOratp+"&SqrOffAbsOrticks="+SqrOffAbsOrticks+"&SqrOffvalue="+SqrOffvalue+"&SLAbsOrticks="+
 	    		SLAbsOrticks+"&SLvalue="+SLvalue+"&trailingSL="+trailingSL+"&tSLticks="+tSLticks+"&userTag="+userTag
 	    		+"&scriptName="+scriptName+"&displayName="+displayName,
 	    		
 	    		success:function(JsonObject){
 	    		
 	    			alert("JsonObject Repeat: "+JsonObject);
 	    		/*var JsonObject= JSON.parse(response);
 	    		var values= Object.values(JsonObject);*/
 	    		
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
 	    	else if(Ret==="GTC" || Ret==="GTD" ){
 	    		
 	    		var sprdtali="CNC:CNC||MIS:MIS||NRML:NRML";	
     			var s_prdt_ali=sprdtali;
     			
     			var uid=$("#UserIDRepeat").val();
     			var actid=$("#UserIDRepeat").val();
     			var Ttranstype='B';
     			
     			if ($('li.gtcclsRepeat').hasClass('active')){
     				Ret="GTC";
     				}
     			if ($('li.gtdclsRepeat').hasClass('active')){
     				Ret="GTD";
     				}
     			
     			var prctyp;
     			var PriceVAL=$("#priceIdRepeat").val();
     			if(PriceVAL==""){
         			PriceVAL="0";    			
         		}
     			var Price;
     			if ($('li.lmtclsRepeat').hasClass('active')){ //Price Type ( L or SL )
     				  prctyp="LMT";
     				  Price=PriceVAL;
     			 }
     			if ($('li.mktclsRepeat').hasClass('active')){ //Price Type ( L or SL )
     				  prctyp="MKT";
     				  Price="0";
     			 }
     			if ($('li.slclsRepeat').hasClass('active')){  //Price Type ( L or SL )
     				  prctyp="SL";
     				  Price=PriceVAL;
     			 }
     			if ($('li.slmclsRepeat').hasClass('active')){ //Price Type ( L or SL )
     				  prctyp="SL-M";
     				  Price="0";
     			 }			 
     			
     			 var qty=$("#QtyIdRepeat").val();
     			 var exchangeType=$("#stockhiddvalRepeat").val();
     	  	 	 var TsymVAL=$("#scripthiddvalRepeat").val();
     	  	 	 
     			 if(exchangeType==='MCX'){ //MCX			 
     				 var exch="MCX";
     				 var Tsym=TsymVAL;			
     			 	}
     			 if(exchangeType==='NSE'){ //NSE			
     					var exch="NSE";
     					var Tsym=TsymVAL;
     					}			 
     			 if(exchangeType==='NFO'){ //F&O-NFO				
     					var exch="NFO";
     					var Tsym=TsymVAL;
     				}		
     			
     			var Pcode;
     			if ($('li.cncclsRepeat').hasClass('active')){
     				Pcode="CNC";
     			}
     			if ($('li.nrmlclsRepeat').hasClass('active')){
     				Pcode="NRML";
     			}
     			if ($('li.misclsRepeat').hasClass('active')){
     				Pcode="MIS";
     			}      			
     			var DateDaysTag=$("#datepicker22").val(); //(DateDays Send as NA for default)	
     				
     			    const d = new Date(DateDaysTag);
     			    var dd = String(d.getDate()).padStart(2, '0');
     			    var mm = String(d.getMonth() + 1).padStart(2, '0');
     			    var yyyy = d.getFullYear();
     			    var DateDays = +dd +"-"+mm +"-"+ yyyy;
     				
 	      			var Branch="NETMAGIC";
 	      			var Broker="ENRICH";
 	      			var orderSource=web;
 	      			var userTag=web;
 	      			var naicCode="010";
 	      			
 	      			
 	      			
 	      			
 	    			
 	    		$.ajax({
 	    			type :'POST',
 	    			url :'PlaceGTDOrderRepeat',		
 	    			data:"s_prdt_ali="+s_prdt_ali+"&Tsym="+Tsym+"&exch="+exch+"&Ttranstype="+Ttranstype+"&Ret="+Ret+"&prctyp="+prctyp+"&qty="+qty+"&Branch="+Branch+
 	    			"&Broker="+Broker+"&Price="+Price+"&userTag="+userTag+"&Pcode="+Pcode+"&DateDays="+DateDays+
 	    			"&orderSource="+orderSource+"&naicCode="+naicCode,
 	    			success:function(JsonObject){
 	    			
 	    			/*var JsonObject= JSON.parse(response);
 	    			var values= Object.values(JsonObject);*/
 	    			var result=values[1];
 	    			var stat= values[0];
 	    			if(stat==='Ok'){
 	    				$('#BuyOrderNumberModelIdRepeat').modal('show'); 		
 	    				$('#buyOrderNumbersRepeat').html(result);
 	    				$('#myModalRepeat').modal('hide');
 	    			}
 	    			else if(stat==='Not_Ok'){
 	    				alert("Error :"+result);
 	    				$('#myModalRepeat').modal('show');
 	    			}
 	    		
 	    			},
 	    			error:function(){
 	    				alert("PlaceGTDOrderRepeat Error");
 	    			
 	    				}	
 	    			});			
 	    		}	
 	    	}
 	    	
 	    	else if ( $('li.BracketOrdclsRepeat').hasClass('active') ) {	
 	 		
 	 		
 	 		var sprdtali="CNC:CNC||MIS:MIS||NRML:NRML";	
 			var s_prdt_ali=sprdtali;			 
 			 var Ttranstype='B';
 			 var qty=$("#QtyIdRepeat").val();
 			
 			//var actid=$("#UserIDRepeat").val();
 			// var uid=$("#UserIDRepeat").val();
 		
 			 var Ret="DAY";
 			var scriptName=$("#scriptNamehiddvalRepeat").val(); 	    		
	    	var displayName=$("#displaynamehiddvalRepeat").val();
	    		
 			 var Price=$("#priceIdRepeat").val();	
 			 if(Price==""){
 				 Price="0";    			
 	 		}
 	 		// var TokenNo=$("#tokenhiddval").val();
 			
 			 var discqtyVAL=$("#DiscquantityIdRepeat").val();
 			 var exchangeType=$("#stockhiddvalRepeat").val();
 			
 			var TsymVAL=$("#scripthiddvalRepeat").val();
 			 
 			var prd;
 			 
 			 if(exchangeType==='MCX'){ //MCX

 			 var exch=MCX;
 			 var discqty=discqtyVAL;
 			 var Tsym=TsymVAL;
 			 prd="B"
 			 }
 			 if(exchangeType==='NSE'){ //NSE
 				 var exch=NSE;
 				 var discqty=discqtyVAL;
 				// var TokenNo=TokenNo;
 				var Tsym=TsymVAL;
 				prd="B"
 				}  		 
 			 if(exchangeType==='NFO'){ //F&O-NFO
 				var exch="NFO";
 				var discqty="0";
 				//var TokenNo=TokenNo;
 				var Tsym=TsymVAL;
 				prd="M"
 				}
 			 
 			 var ltpOratp="LTP"; //LTP or ATP  		 
 			 var SqrOffAbsOrticks="Absolute";  						//Square Off type ( Absolute or Ticks )
 			 var SqrOffvalue=$("#TargetAbsolutequanIdRepeat").val();
 			 var SLAbsOrticks="Absolute";              				//Stop Loss type ( Absolute or Ticks )
 			 var SLvalue=$("#stoplossAbsolutequanIdRepeat").val();
 			 var TargetstoplossVAL=$("#TargetstoplossquanIdRepeat").val();
 			
 			 
 			 var AMO="YES";
 			 
 			 var ZERO='0';
 			 if(TargetstoplossVAL==Number(ZERO)){
 				 var tSLticks=TargetstoplossVAL;			
 				 var trailingSL="N"						
 			 }
 			 if(TargetstoplossVAL>Number(ZERO)){
 				 var tSLticks=TargetstoplossVAL;		 //Trailing SL value optional ( if 'trailingSL' is Y )
 				 var trailingSL="Y"						//Trailing Stop Loss optional ( Y ,if required or else N )
 			 }
 			 var naicCode="010";
 			 var orderSource="WEB";
 			 var userTag="WEB"; 
 			
 			if ($('li.lmtclsRepeat').hasClass('active') ) { //Price Type ( L or SL )
 				 var prctyp="LMT";
 				 var TrigPrice="0";
 			 }
 			if ($('li.slclsRepeat').hasClass('active') ) { //Price Type ( L or SL )
 				 var prctyp="SL"; 
 				 var TrigPrice=$("#TriggerpriceIdRepeat").val();
 			 }
 			
 			$.ajax({
 				
 				type : 'POST',
 				url  : 'PlaceOrderRepeat',
 				data : "s_prdt_ali="+s_prdt_ali+"&Tsym="+Tsym+"&exch="+exch+"&Ttranstype="+Ttranstype+"&Ret="+Ret+"&prctyp="+prctyp+"&qty="+qty+"&discqty="+discqty+"&prd="+prd+
 	    		"&MktPro="+MktPro+"&Price="+Price+"&TrigPrice="+TrigPrice+"&Pcode="+Pcode+"&DateDays="+DateDays+"&AMO="+AMO+
 	    		"&PosSquareFlg="+PosSquareFlg+"&MinQty="+MinQty+"&orderSource="+orderSource+"&naicCode="+naicCode+
 				"&ltpOratp="+ltpOratp+"&SqrOffAbsOrticks="+SqrOffAbsOrticks+
 				"&SqrOffvalue="+SqrOffvalue+"&SLAbsOrticks="+SLAbsOrticks+"&SLvalue="+SLvalue+"&trailingSL="+trailingSL+
 				"&tSLticks="+tSLticks+"&userTag="+userTag+"&TrigPrice="+TrigPrice+"&scriptName="+scriptName+"&displayName="+displayName,
 				
 					success:function(JsonObject){
 								alert("JsonObject"+JsonObject);;
 						/*var JsonObject= JSON.parse(response);
 						var values= Object.values(JsonObject);*/
 						var result=values[1];
 						var stat= values[0];
 						if(stat==='Ok'){
 							$('#BuyOrderNumberModelIdRepeat').modal('show'); 		
 							$('#buyOrderNumbersRepeat').html(result);
 							$('#myModalRepeat').modal('hide');
 						}
 						else if(stat==='Not_Ok'){
 							alert("Error :"+result);
 							$('#myModalRepeat').modal('show');
 						} 					
 						},
 					error:function(){
 						alert("BracketOrderRepeat Error");
 					
 					}	
 			});
 			
 		}
 		
 	    	
 	    	 	else if ( $('li.CoverOrdclsRepeat').hasClass('active') ) {		
 	     		
 	     		
 	    		
 	    		var sprdtali="CNC:CNC||MIS:MIS||NRML:NRML";	
 	    		var s_prdt_ali=sprdtali;
 	    		
 	    	//	var uid=$("#UserIDRepeat").val();
 	    	//	var actid=$("#UserIDRepeat").val();
 	    		var prctyp;
 	    		var scriptName=$("#scriptNamehiddvalRepeat").val(); 	    		
 	    		var displayName=$("#displaynamehiddvalRepeat").val();
 	    		
 	    		if ( $('li.lmtclsRepeat').hasClass('active') ){  //Price Type ( L or SL )
 	    			  prctyp="LMT";
 	    		 }
 	    		if ( $('li.mktclsRepeat').hasClass('active') ){ //Price Type ( L or SL )	    			
 	    			  prctyp="MKT"; 
 	    		 }
 	    		
 	    		var qty=$("#QtyIdRepeat").val();
 	    		var discqtyVAL=$("#DiscquantityIdRepeat").val();    		
 	     	 	var TsymVAL=$("#scripthiddvalRepeat").val();
 	    		var exchangeType=$("#stockhiddvalRepeat").val();
 	    		
 	    		var prd; 
 	    		 if(exchangeType==='MCX'){ //MCX
 	    			var exch=exchangeType;
 	    			var discqty=discqtyVAL;
 	    			var Tsym=TsymVAL;
 	    			prd="C"; 
 	    		 }
 	    		 if(exchangeType==='NSE'){ //NSE

 	    				var exch=NSE;
 	    				var discqty=discqtyVAL;
 	    				var Tsym=TsymVAL;
 	    				prd="C"; 
 	    				 }      		
 	    		
 	    		if(exchangeType==='NFO'){ //F&O-NFO
 	    			var exch="NFO";
 	    			var discqty=discqtyVAL;
 	    			var Tsym=TsymVAL;
 	    			prd="M"; 
 	    		}	    		
 	    		
 	    		var Ttranstype='B'; 	    		
 	    		var Ret="DAY";	    		
 	    		var MktPro="NA"; //(MktPro Should be sent as NA by default)
 	    		var Price=$("#priceIdRepeat").val();
 	    		if(Price==""){
 	    			Price="0";    			
 	    		}
 	    		//var StopLossVAL= $('#CoStoplossId').val();
 	    		var StopLossVAL=$("#TriggerpriceIdRepeat").val();
 	    		
 	    		if(StopLossVAL>0){
 	    			var TrigPrice=StopLossVAL;
 	    		}else{
 	    		var TrigPrice="0"; //(TrigPrice Send as 0 for default)
 	    		}
 	    		var Pcode="CO"; // need to check
 	    		var DateDays="NA"; //(DateDays Send as NA for default)
 	    		
 	    		
 	    			if ( $('li.AfterMarketOrdclsRepeat').hasClass('active') ){
 	    			var AMO="YES";
 	    		}
 	    		else{
 	    			var AMO="NO";
 	    		}
 	    		var PosSquareFlg="N";
 	    		var MinQty="0"; //(MinQty Send as 0 for default)
 	    		var orderSource=web
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
 	    		
 	    	$.ajax({
 	    		type :'POST',
 	    		url :'PlaceOrderRepeat',		
 	    		data:"s_prdt_ali="+s_prdt_ali+"&Tsym="+Tsym+
 	    		"&exch="+exch+"&Ttranstype="+Ttranstype+"&Ret="+Ret+"&prctyp="+prctyp+"&qty="+qty+"&discqty="+discqty+
 	    		"&MktPro="+MktPro+"&Price="+Price+"&TrigPrice="+TrigPrice+"&Pcode="+Pcode+"&DateDays="+DateDays+"&AMO="+AMO+
 	    		"&PosSquareFlg="+PosSquareFlg+"&MinQty="+MinQty+"&orderSource="+orderSource+"&naicCode="+naicCode+
 	    		"&ltpOratp="+ltpOratp+"&SqrOffAbsOrticks="+SqrOffAbsOrticks+"&SqrOffvalue="+SqrOffvalue+"&SLAbsOrticks="+
 	    		SLAbsOrticks+"&SLvalue="+SLvalue+"&trailingSL="+trailingSL+"&tSLticks="+tSLticks+"&userTag="+userTag+
 	    		"&TrigPrice="+TrigPrice+"&prd="+prd+"&scriptName="+scriptName+"&displayName="+displayName,
 				
 	    		success:function(JsonObject){
 	    		
 	    			alert("JsonObject : "+JsonObject); 
 	    			
 	    		/*var JsonObject= JSON.parse(response);
 	    		var values= Object.values(JsonObject);*/
 	    		var result=values[1];
 	    		var stat= values[0];
 	    		if(stat==='Ok'){
 	    			$('#BuyOrderNumberModelIdRepeat').modal('show'); 		
 	    			$('#buyOrderNumbersRepeat').html(result);
 	    			$('#myModalRepeat').modal('hide');
 	    		}
 	    		else if(stat==='Not_Ok'){
 	    			alert("Error :"+result);
 	    			$('#myModalRepeat').modal('show');
 	    		}
 	    		
 	    		
 	    		},
 	    		error:function(){
 	    			alert("PlaceOrderRepeat Error");
 	    		
 	    		}	
 	    	});
 	    	
 	    	}
 	    		//else if($("input:radio[name='AfterMarketOrdId']").is(":checked")) { 
 	    		else if ($('li.AfterMarketOrdclsRepeat').hasClass('active')) {
 	     		
 	    			
 	    			
 	 	     		//var prd="C";
 	 	     		var Ret;
 	 		      		if ($('li.dayclsRepeat').hasClass('active')){
 	 		      		Ret="DAY";      		
 	 		      		}      		
 	 	    			if ($('li.iocclsRepeat').hasClass('active')){
 	 	    			Ret="IOC";
 	 	    			}
 	 	    			if ($('li.gtcclsRepeat').hasClass('active')){      		
 	 	    			 Ret="GTC";
 	 	    			}
 	 	    			if ($('li.gtdclsRepeat').hasClass('active')){       		
 	 	    			 Ret="GTD";
 	 	    			}
 	 	    			if ($('li.gttclsRepeat').hasClass('active')){       		
 	 	    			 Ret="GTT";
 	 	    			}
 	 	    		if(Ret==="DAY" || Ret==="IOC" ){
 	 	    			
 	 	    		
 	 	    		var sprdtali="CNC:CNC||MIS:MIS||NRML:NRML";	
 	 	    		var s_prdt_ali=sprdtali;
 	 	    	//	var uid=$("#UserIDRepeat").val();
 	 	    	//	var actid=$("#UserIDRepeat").val();
 	 	    		
 	 	    		var Ttranstype='B';
 	 	    		
 	 	    		var scriptName=$("#scriptNamehiddvalRepeat").val(); 	    		
 	 	    		var displayName=$("#displaynamehiddvalRepeat").val();
 	 	    		
 	 	    	
 	 	    		$(".ProductsclsRepeat").show();
 	 	    		var qty=$("#QtyIdRepeat").val();
 	 	    		 
 	 	    		 var discqtyVAL=$("#DiscquantityIdRepeat").val();    		
 	 	    		 var TsymVAL=$("#scripthiddvalRepeat").val();
 	 	    		 var exchangeType=$("#stockhiddvalRepeat").val();
 	 	    		  
 	 	    		 var prd;
 	 	    		 
 	 	    		 if(exchangeType==='MCX'){ //MCX
 	 	    			 
 	 	    		var exch=exchangeType;
 	 	    		var discqty=discqtyVAL;
 	 	    		var Tsym=TsymVAL;	 	    		
 	 	    		
 	 	    		if ($('.nrmlclsRepeat').hasClass('active')){
 	 	    			var Pcode="NRML";
 	 	    			prd="M";
 	 	    		}
 	 	    		if ($('.misclsRepeat').hasClass('active')){
 	 	    			var Pcode="MIS";
 	 	    			prd="I";
 	 	    		}
 	 	    		
 	 	    		 }
 	 	    		 if(exchangeType==='NSE'){ //NSE 	 	    			
 	 	    				var exch="NSE";
 	 	    				var discqty=discqtyVAL;
 	 	    				var Tsym=TsymVAL;
 	 	    				
 	 	    				if ($('li.nrmlclsRepeat').hasClass('active')){ 	 	   	    			
 	 	   	    			prd="M";
 	 	    				}
 	 	    				if ($('.cncclsRepeat').hasClass('active')){	    	    			
 	 	    	    			prd="C";
 	 	    	    		} 	 	    				
 	 	    				if ($('.misclsRepeat').hasClass('active')){	    	    			
 	 	    	    			prd="I";
 	 	    	    		}	
 	 	    				}
 	 	    		 
 	 	    		 if(exchangeType==='NFO'){ //F&O-NFO
 	 	    			
 	 	    				var exch="NFO";
 	 	    				var discqty="0";			 
 	 	    				var Tsym=TsymVAL; 	    				
 	 	    				//var Tsym="BANKNIFTY18NOV21C32900";
 	 	    				prd="M";
 	 	    			}
 	 	    		 
 	 	    		var MktPro="NA"; //(MktPro Should be sent as NA by default)
 	 	    		
 	 	    		var PriceVAL=$("#priceIdRepeat").val();  
 	 	    		if(PriceVAL==""){
 	 	    			PriceVAL="0";    			
 	 	    		}
 	 	    		
 	 	    		
 	 	    		var TriggerpriceVAL=$('#TriggerpriceIdRepeat').val();  //(TrigPrice Send as 0 for default)
 	 	    		
 	 	    		var TrigPrice;
 	 	    		var Price;
 	 	    		var prctyp;
 	 	    		
 	 	    		if ($('.lmtclsRepeat').hasClass('active')){
 	 	    			TrigPrice="0";
 	 	    			Price=PriceVAL;
 	 	    			 prctyp="LMT";
 	 	    		}
 	 	    		if ($('.mktclsRepeat').hasClass('active')){
 	 	    			TrigPrice="0";
 	 	    			Price="0";
 	 	    			 prctyp="MKT";
 	 	    		}
 	 	    		if ($('.slclsRepeat').hasClass('active')){
 	 	    			TrigPrice=TriggerpriceVAL;
 	 	    			Price=PriceVAL;
 	 	    			 prctyp="SL";
 	 	    		}
 	 	    		if ($('.slmclsRepeat').hasClass('active')){
 	 	    			TrigPrice=TriggerpriceVAL;
 	 	    			Price="0";
 	 	    			 prctyp="SL-M";
 	 	    		}
 	 	    		
 	 	    		
 	 	    		var DateDays="NA"; //(DateDays Send as NA for default)
 	 	    		
 	 	    		var AMO="YES";
 	 	    		
 	 	    		
 	 	    		var PosSquareFlg="N";
 	 	    		var MinQty="0"; //(MinQty Send as 0 for default)
 	 	    		var orderSource=web
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
 	 	    		
 	    					
 	    		$.ajax({
 	    			type :'POST',
 	    			url :'PlaceOrderRepeat',	
 	    			data:"s_prdt_ali="+s_prdt_ali+"&prd="+prd+"&Tsym="+Tsym+
 	        		"&exch="+exch+"&Ttranstype="+Ttranstype+"&Ret="+Ret+"&prctyp="+prctyp+"&qty="+qty+"&discqty="+discqty+
 	        		"&MktPro="+MktPro+"&Price="+Price+"&TrigPrice="+TrigPrice+"&Pcode="+Pcode+"&DateDays="+DateDays+"&AMO="+AMO+
 	        		"&PosSquareFlg="+PosSquareFlg+"&MinQty="+MinQty+"&orderSource="+orderSource+"&naicCode="+naicCode+
 	        		"&ltpOratp="+ltpOratp+"&SqrOffAbsOrticks="+SqrOffAbsOrticks+"&SqrOffvalue="+SqrOffvalue+"&SLAbsOrticks="+
 	        		SLAbsOrticks+"&SLvalue="+SLvalue+"&trailingSL="+trailingSL+"&tSLticks="+tSLticks+"&userTag="+userTag+
 	        		"&TrigPrice="+TrigPrice+"&scriptName="+scriptName+"&displayName="+displayName,
 	    			
 	    			success:function(JsonObject){     
 	    				alert("JsonObject : "+JsonObject);
 	    			/*var JsonObject= JSON.parse(response);
 	    			var values= Object.values(JsonObject);*/
 	    			var result=values[1];
 	    			var stat= values[0];
 	    			if(stat==='Ok'){
 	    				$('#BuyOrderNumberModelIdRepeat').modal('show'); 		
 	    				$('#buyOrderNumbersRepeat').html(result);
 	    				$('#myModalRepeat').modal('hide');
 	    			}
 	    			else if(stat==='Not_Ok'){
 	    				alert("Error :"+result);
 	    				$('#myModalRepeat').modal('show');
 	    			}
 	    			
 	    			
 	    			
 	    			},
 	    			error:function(){
 	    				alert("PlaceOrderRepeat Error");
 	    			
 	    			}	
 	    		});
 	    		
 	    		}
 	    	
 	    }
 	    
 	 }
 	  
 	  
 	  
 	  function PlaceOrdersellfunRepeat(){ 	
 	  	alert("sell order...")
 	  	$(".ProductsclsRepeat").show();
 	    	
 	    	var web="WEB";
 	    	var MCX="MCX";
 	    	var NSE="NSE";
 	    	//var DiscQuanErrorTag= document.getElementById("DiscQuanhiddenErrorId").value;		
 	    	
 	    		
 	 		
 	    	if ($('li.RegularOrdclsRepeat').hasClass('active') ) {
 	     		
 	    		
 	     		//var prd="C";
 	     		var Ret;
 		      		if ($('li.dayclsRepeat').hasClass('active')){
 		      		Ret="DAY";      		
 		      		}      		
 	    			if ($('li.iocclsRepeat').hasClass('active')){
 	    			Ret="IOC";
 	    			}
 	    			if ($('li.gtcclsRepeat').hasClass('active')){      		
 	    			 Ret="GTC";
 	    			}
 	    			if ($('li.gtdclsRepeat').hasClass('active')){       		
 	    			 Ret="GTD";
 	    			}
 	    			if ($('li.gttclsRepeat').hasClass('active')){       		
 	    			 Ret="GTT";
 	    			}
 	    		if(Ret==="DAY" || Ret==="IOC" || Ret==="GTT" ){
 	    			
 	    		
 	    		var sprdtali="CNC:CNC||MIS:MIS||NRML:NRML";	
 	    		var s_prdt_ali=sprdtali;
 	    	//	var uid=$("#UserIDRepeat").val();
 	    	//	var actid=$("#UserIDRepeat").val();
 	    		
 	    		var Ttranstype='S';
 	    		var scriptName=$("#scriptNamehiddvalRepeat").val(); 	    		
 	    		var displayName=$("#displaynamehiddvalRepeat").val();
 	    		
 	    		//var prctyp="LMT"; //Price type (from DefaultLogin/ NormalLogin rest api)
 	    		
 	    		var prctyp;
 	    		if ($('li.lmtclsRepeat').hasClass('active')){ //Price Type ( L or SL )
 	    			  prctyp="LMT";
 	    		 }
 	    		if ($('li.mktclsRepeat').hasClass('active')){ //Price Type ( L or SL )
 	    			  prctyp="MKT"; 
 	    		 }
 	    		if ($('li.slclsRepeat').hasClass('active')){ //Price Type ( L or SL )
 	    			  prctyp="SL"; 
 	    		 }
 	    		if ($('li.slmclsRepeat').hasClass('active')){ //Price Type ( L or SL )
 	    			  prctyp="SL-M"; 
 	    		 }
 	    		//alert("prctyp : "+prctyp);
 	    	
 	    		$(".ProductsclsRepeat").show();
 	    		var qty=$("#QtyIdRepeat").val();
 	    		 
 	    		 var discqtyVAL=$("#DiscquantityIdRepeat").val();    		
 	    		 var TsymVAL=$("#scripthiddvalRepeat").val();
 	    		 var exchangeType=$("#stockhiddvalRepeat").val();
 	    		  
 	    		 
 	    		 if(exchangeType==='MCX'){ //MCX
 	    			 
 	    		var exch=exchangeType;
 	    		var discqty=discqtyVAL;
 	    		var Tsym=TsymVAL;
 	    		
 	    		
 	    		if ($('li.nrmlclsRepeat').hasClass('active')){
 	    			var Pcode="NRML";
 	    			prd="M";
 	    		}
 	    		if ($('li.misclsRepeat').hasClass('active')){
 	    			var Pcode="MIS";
 	    			prd="I";
 	    		}
 	    		
 	    		 }
 	    		 if(exchangeType==='NSE'){ //NSE
 	    			
 	    				var exch="NSE";
 	    				var discqty=discqtyVAL;
 	    				var Tsym=TsymVAL;
 	    				if ($('li.nrmlclsRepeat').hasClass('active')){
 	    	    			prd="M";
 	    	    		}
 	    				if ($('li.cncclsRepeat').hasClass('active')){	    	    			
 	    	    			prd="C";
 	    	    		}
 	    				
 	    				if ($('li.misclsRepeat').hasClass('active')){	    	    			
 	    	    			prd="I";
 	    	    		}
 	    				
 	    				
 	    				}
 	    		 
 	    		 if(exchangeType==='NFO'){ //F&O-NFO
 	    			
 	    				var exch="NFO";
 	    				var discqty="0";			 
 	    				var Tsym=TsymVAL; 	    				
 	    				//var Tsym="BANKNIFTY18NOV21C32900";
 	    				prd="M";
 	    			}
 	    		 
 	    		var MktPro="NA"; //(MktPro Should be sent as NA by default)
 	    		
 	    		var PriceVAL=$("#priceIdRepeat").val();  
 	    		if(PriceVAL==""){
 	    			PriceVAL="0";    			
 	    		}
 	    		
 	    		
 	    		var TriggerpriceVAL=$('#TriggerpriceIdRepeat').val();  //(TrigPrice Send as 0 for default)
 	    		
 	    		var TrigPrice;
 	    		var Price;
 	    		if ($('li.lmtclsRepeat').hasClass('active')){
 	    			TrigPrice="0";
 	    			Price=PriceVAL;
 	    		}
 	    		if ($('li.mktclsRepeat').hasClass('active')){
 	    			TrigPrice="0";
 	    			Price="0";
 	    		}
 	    		if ($('li.slclsRepeat').hasClass('active')){
 	    			TrigPrice=TriggerpriceVAL;
 	    			Price=PriceVAL;
 	    		}
 	    		if ($('li.slmclsRepeat').hasClass('active')){
 	    			TrigPrice=TriggerpriceVAL;
 	    			Price="0";
 	    		}
 	    		
 	    		
 	    		var DateDays="NA"; //(DateDays Send as NA for default)
 	    		
 	    		var AMO;
 	    		
 	    		if ($('li.AfterMarketOrdclsRepeat').hasClass('active')){	
 	    			AMO="YES";
 	    		}
 	    		else{
 	    			AMO="NO";
 	    		}
 	    		
 	    		
 	    		var PosSquareFlg="N";
 	    		var MinQty="0"; //(MinQty Send as 0 for default)
 	    		var orderSource=web
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
 	    		
 	    	$.ajax({
 	    		type :'POST',
 	    		url :'PlaceOrderRepeat',		
 	    		data:"s_prdt_ali="+s_prdt_ali+"&Tsym="+Tsym+"&exch="+exch+"&Ttranstype="+Ttranstype+"&Ret="+Ret+"&prctyp="+prctyp+"&qty="+qty+"&discqty="+discqty+"&prd="+prd+
 	    		"&MktPro="+MktPro+"&Price="+Price+"&TrigPrice="+TrigPrice+"&Pcode="+Pcode+"&DateDays="+DateDays+"&AMO="+AMO+
 	    		"&PosSquareFlg="+PosSquareFlg+"&MinQty="+MinQty+"&orderSource="+orderSource+"&naicCode="+naicCode+
 	    		"&ltpOratp="+ltpOratp+"&SqrOffAbsOrticks="+SqrOffAbsOrticks+"&SqrOffvalue="+SqrOffvalue+"&SLAbsOrticks="+
 	    		SLAbsOrticks+"&SLvalue="+SLvalue+"&trailingSL="+trailingSL+"&tSLticks="+tSLticks+"&userTag="+userTag+
 	    		"&scriptName="+scriptName+"&displayName="+displayName,
 	    		
 	    		success:function(JsonObject){
 	    		
 	    			alert("JsonObject : "+JsonObject);
 	    		/*var JsonObject= JSON.parse(response);
 	    		var values= Object.values(JsonObject);*/
 	    		
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
 	    			alert("PlaceOrderRepeat Error");
 	    		
 	    		}	
 	    	});      	
 	    	
 	    }      		
 	    	else if(Ret==="GTC" || Ret==="GTD" ){
 	    		
 	    		var sprdtali="CNC:CNC||MIS:MIS||NRML:NRML";	
     			var s_prdt_ali=sprdtali;
     			
     			//var uid=$("#UserIDRepeat").val();
     			//var actid=$("#UserIDRepeat").val();
     			var Ttranstype='S';
     			
     			if ($('li.gtcclsRepeat').hasClass('active')){
     				Ret="GTC";
     				}
     			if ($('li.gtdclsRepeat').hasClass('active')){
     				Ret="GTD";
     				}
     			
     			var prctyp;
     			var PriceVAL=$("#priceIdRepeat").val();
     			if(PriceVAL==""){
         			PriceVAL="0";    			
         		}
     			var Price;
     			if ($('li.lmtclsRepeat').hasClass('active')){ //Price Type ( L or SL )
     				  prctyp="LMT";
     				  Price=PriceVAL;
     			 }
     			if ($('li.mktclsRepeat').hasClass('active')){ //Price Type ( L or SL )
     				  prctyp="MKT";
     				  Price="0";
     			 }
     			if ($('li.slclsRepeat').hasClass('active')){  //Price Type ( L or SL )
     				  prctyp="SL";
     				  Price=PriceVAL;
     			 }
     			if ($('li.slmclsRepeat').hasClass('active')){ //Price Type ( L or SL )
     				  prctyp="SL-M";
     				  Price="0";
     			 }			 
     			
     			 var qty=$("#QtyIdRepeat").val();
     			 var exchangeType=$("#stockhiddvalRepeat").val();
     	  	 	 var TsymVAL=$("#scripthiddvalRepeat").val();
     	  	 	 
     			 if(exchangeType==='MCX'){ //MCX			 
     				 var exch="MCX";
     				 var Tsym=TsymVAL;			
     			 	}
     			 if(exchangeType==='NSE'){ //NSE			
     					var exch="NSE";
     					var Tsym=TsymVAL;
     					}			 
     			 if(exchangeType==='NFO'){ //F&O-NFO				
     					var exch="NFO";
     					var Tsym=TsymVAL;
     				}		
     			
     			var Pcode;
     			if ($('li.cncclsRepeat').hasClass('active')){
     				Pcode="CNC";
     			}
     			if ($('li.nrmlclsRepeat').hasClass('active')){
     				Pcode="NRML";
     			}
     			if ($('li.misclsRepeat').hasClass('active')){
     				Pcode="MIS";
     			}      			
     			var DateDaysTag=$("#datepicker22").val(); //(DateDays Send as NA for default)	
     				
     			    const d = new Date(DateDaysTag);
     			    var dd = String(d.getDate()).padStart(2, '0');
     			    var mm = String(d.getMonth() + 1).padStart(2, '0');
     			    var yyyy = d.getFullYear();
     			    var DateDays = +dd +"-"+mm +"-"+ yyyy;
     				
 	      			var Branch="NETMAGIC";
 	      			var Broker="ENRICH";
 	      			var orderSource=web;
 	      			var userTag=web;
 	      			var naicCode="010";
 	    			
 	    		$.ajax({
 	    			type :'POST',
 	    			url :'PlaceGTDOrderRepeat',		
 	    			data:"s_prdt_ali="+s_prdt_ali+"&Tsym="+Tsym+"&exch="+exch+"&Ttranstype="+Ttranstype+"&Ret="+Ret+"&prctyp="+prctyp+"&qty="+qty+"&Branch="+Branch+
 	    			"&Broker="+Broker+"&Price="+Price+"&userTag="+userTag+"&Pcode="+Pcode+"&DateDays="+DateDays+
 	    			"&orderSource="+orderSource+"&naicCode="+naicCode,
 	    			success:function(JsonObject){
 	    			
 	    			/*var JsonObject= JSON.parse(response);
 	    			var values= Object.values(JsonObject);*/
 	    			var result=values[1];
 	    			var stat= values[0];
 	    			if(stat==='Ok'){
 	    				$('#BuyOrderNumberModelIdRepeat').modal('show'); 		
 	    				$('#buyOrderNumbersRepeat').html(result);
 	    				$('#myModalRepeat').modal('hide');
 	    			}
 	    			else if(stat==='Not_Ok'){
 	    				alert("Error :"+result);
 	    				$('#myModalRepeat').modal('show');
 	    			}
 	    		
 	    			},
 	    			error:function(){
 	    				alert("PlaceGTDOrderRepeat Error");
 	    			
 	    				}	
 	    			});			
 	    		}	
 	    	}
 	    	
 	    	else if ( $('li.BracketOrdclsRepeat').hasClass('active') ) {	
 	 		
 	    		
 	    		$(".ProductsclsRepeat").hide();
 	 		var sprdtali="CNC:CNC||MIS:MIS||NRML:NRML";	
 			var s_prdt_ali=sprdtali;
 			 
 			
 			 var Ttranstype='S';
 			 var qty=$("#QtyIdRepeat").val();
 			
 			 var actid=$("#UserIDRepeat").val();
 			 var uid=$("#UserIDRepeat").val();
 		
 			 var Ret="DAY";
 			 
 			 var Price=$("#priceIdRepeat").val();	
 			 if(Price==""){
 				 Price="0";    			
 	 		}
 			 var discqtyVAL=$("#DiscquantityIdRepeat").val(); 
 			 var TsymVAL=$("#scripthiddvalRepeat").val();
 	 		var exchangeType=$("#stockhiddvalRepeat").val();
 	 		
 	 		var prd;			 
 	 		var scriptName=$("#scriptNamehiddvalRepeat").val(); 	    		
	    		var displayName=$("#displaynamehiddvalRepeat").val();
 			 
 	 		if(exchangeType==='MCX'){ //MCX

 	 			 var exch=MCX;
 	 			 var discqty=discqtyVAL;
 	 			 var Tsym=TsymVAL;
 	 			 prd="B"
 	 			 }
 	 			 if(exchangeType==='NSE'){ //NSE
 	 				 var exch=NSE;
 	 				 var discqty=discqtyVAL;
 	 				// var TokenNo=TokenNo;
 	 				var Tsym=TsymVAL;
 	 				prd="B"
 	 				}  		 
 	 			 if(exchangeType==='NFO'){ //F&O-NFO
 	 				var exch="NFO";
 	 				var discqty="0";
 	 				//var TokenNo=TokenNo;
 	 				var Tsym=TsymVAL;
 	 				prd="M"
 	 				}
 	 			 
 			 var ltpOratp="LTP"; //LTP or ATP  		 
 			 var SqrOffAbsOrticks="Absolute";  						//Square Off type ( Absolute or Ticks )
 			 var SqrOffvalue=$("#TargetAbsolutequanIdRepeat").val();
 			 var SLAbsOrticks="Absolute";              				//Stop Loss type ( Absolute or Ticks )
 			 var SLvalue=$("#stoplossAbsolutequanIdRepeat").val();
 			 var TargetstoplossVAL=$("#TargetstoplossquanIdRepeat").val();
 			var AMO="YES";
 			 var ZERO='0';
 			 if(TargetstoplossVAL==Number(ZERO)){
 				 var tSLticks=TargetstoplossVAL;			
 				 var trailingSL="N"						
 			 }
 			 if(TargetstoplossVAL>Number(ZERO)){
 				 var tSLticks=TargetstoplossVAL;		 //Trailing SL value optional ( if 'trailingSL' is Y )
 				 var trailingSL="Y"						//Trailing Stop Loss optional ( Y ,if required or else N )
 			 }
 			 var naicCode="010";
 			 var orderSource="WEB";
 			 var userTag="WEB"; 
 			
 			if ($('li.lmtclsRepeat').hasClass('active') ) { //Price Type ( L or SL )
 				 var prctyp="LMT";
 				 var TrigPrice="0";
 			 }
 			if ($('li.slclsRepeat').hasClass('active') ) { //Price Type ( L or SL )
 				 var prctyp="SL"; 
 				 var TrigPrice=$("#TriggerpriceIdRepeat").val();
 			 }
 			
 			$.ajax({
 				
 				type : 'POST',
 				url  : 'PlaceOrderRepeat',
 				data : "s_prdt_ali="+s_prdt_ali+"&Tsym="+Tsym+"&exch="+exch+"&Ttranstype="+Ttranstype+"&Ret="+Ret+"&prctyp="+prctyp+"&qty="+qty+"&discqty="+discqty+"&prd="+prd+
 	    		"&MktPro="+MktPro+"&Price="+Price+"&TrigPrice="+TrigPrice+"&Pcode="+Pcode+"&DateDays="+DateDays+"&AMO="+AMO+
 	    		"&PosSquareFlg="+PosSquareFlg+"&MinQty="+MinQty+"&orderSource="+orderSource+"&naicCode="+naicCode+
 				"&ltpOratp="+ltpOratp+"&SqrOffAbsOrticks="+SqrOffAbsOrticks+
 				"&SqrOffvalue="+SqrOffvalue+"&SLAbsOrticks="+SLAbsOrticks+"&SLvalue="+SLvalue+"&trailingSL="+trailingSL+
 				"&tSLticks="+tSLticks+"&userTag="+userTag+"&TrigPrice="+TrigPrice
 				+"&scriptName="+scriptName+"&displayName="+displayName,
 				
 					success:function(JsonObject){
 								alert("JsonObject"+JsonObject);;
 						/*var JsonObject= JSON.parse(response);
 						var values= Object.values(JsonObject);*/
 						var result=values[1];
 						var stat= values[0];
 						if(stat==='Ok'){
 							$('#BuyOrderNumberModelIdRepeat').modal('show'); 		
 							$('#buyOrderNumbersRepeat').html(result);
 							$('#myModalRepeat').modal('hide');
 						}
 						else if(stat==='Not_Ok'){
 							alert("Error :"+result);
 							$('#myModalRepeat').modal('show');
 						} 					
 						},
 					error:function(){
 						alert("BracketOrderRepeat Error");
 					
 					}	
 			});
 			
 		}
 	    	else if ( $('li.CoverOrdclsRepeat').hasClass('active') ) {		
 	    		
 	    		$(".ProductsclsRepeat").hide();
 	    		
 	    		var sprdtali="CNC:CNC||MIS:MIS||NRML:NRML";	
 	    		var s_prdt_ali=sprdtali;
 	    		
 	    		
 	    		var uid=$("#UserIDRepeat").val();
 	    		var actid=$("#UserIDRepeat").val();
 	    		var prctyp;
 	    		//if($("input:radio[name='lmtId']").is(":checked")) { //Price Type ( L or SL )
 	    		if ( $('li.lmtclsRepeat').hasClass('active') ){
 	    			  prctyp="LMT";
 	    		 }
 	    		 //if($("input:radio[name='mktId']").is(":checked")) { //Price Type ( L or SL )
 	    			if ( $('li.mktclsRepeat').hasClass('active') ){
 	    			  prctyp="MKT"; 
 	    		 }
 	    		
 	    		var qty=$("#QtyIdRepeat").val();
 	    		var discqtyVAL="0";
 	    		var TsymVAL=$("#scripthiddvalRepeat").val();
 	    		var exchangeType=$("#stockhiddvalRepeat").val();
 	    		var prd;
 	    		var scriptName=$("#scriptNamehiddvalRepeat").val(); 	    		
 	    		var displayName=$("#displaynamehiddvalRepeat").val();
 	    	
 	    		 if(exchangeType==='MCX'){ //MCX
  	    			var exch=exchangeType;
  	    			var discqty=discqtyVAL;
  	    			var Tsym=TsymVAL;
  	    			prd="C"; 
  	    		 }
  	    		 if(exchangeType==='NSE'){ //NSE

  	    				var exch=NSE;
  	    				var discqty=discqtyVAL;
  	    				var Tsym=TsymVAL;
  	    				prd="C"; 
  	    				 }      		
  	    		
  	    		if(exchangeType==='NFO'){ //F&O-NFO
  	    			var exch="NFO";
  	    			var discqty=discqtyVAL;
  	    			var Tsym=TsymVAL;
  	    			prd="M"; 
  	    		}	   
  	    		
 		    		
 	    		var Ttranstype='S';  		
 	    			    		
 	    		var Ret="DAY";
 	    		
 	    		var MktPro="NA"; //(MktPro Should be sent as NA by default)
 	    		var Price=$("#priceIdRepeat").val();
 	    		 if(Price==""){
 	    			 Price="0";    			
 	     		}
 	    		//var StopLossVAL= $('#CoStoplossId').val();
 	    		var StopLossVAL=$("#TriggerpriceIdRepeat").val();
 	    		
 	    		if(StopLossVAL>0){
 	    			var TrigPrice=StopLossVAL;
 	    		}else{
 	    		var TrigPrice="0"; //(TrigPrice Send as 0 for default)
 	    		}
 	    		var Pcode="CO"; // need to check
 	    		var DateDays="NA"; //(DateDays Send as NA for default)
 	    		
 	    		
 	    			if ( $('li.AfterMarketOrdclsRepeat').hasClass('active') ){
 	    			var AMO="YES";
 	    		}
 	    		else{
 	    			var AMO="NO";
 	    		}
 	    		var PosSquareFlg="N";
 	    		var MinQty="0"; //(MinQty Send as 0 for default)
 	    		var orderSource=web
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
 	    		
 	    	$.ajax({
 	    		type :'POST',
 	    		url :'PlaceOrderRepeat',		
 	    		data:"s_prdt_ali="+s_prdt_ali+"&Tsym="+Tsym+
 	    		"&exch="+exch+"&Ttranstype="+Ttranstype+"&Ret="+Ret+"&prctyp="+prctyp+"&qty="+qty+"&discqty="+discqty+
 	    		"&MktPro="+MktPro+"&Price="+Price+"&TrigPrice="+TrigPrice+"&Pcode="+Pcode+"&DateDays="+DateDays+"&AMO="+AMO+
 	    		"&PosSquareFlg="+PosSquareFlg+"&MinQty="+MinQty+"&orderSource="+orderSource+"&naicCode="+naicCode+
 	    		"&ltpOratp="+ltpOratp+"&SqrOffAbsOrticks="+SqrOffAbsOrticks+"&SqrOffvalue="+SqrOffvalue+"&SLAbsOrticks="+
 	    		SLAbsOrticks+"&SLvalue="+SLvalue+"&trailingSL="+trailingSL+"&tSLticks="+tSLticks+"&userTag="+userTag+
 	    		"&TrigPrice="+TrigPrice+"&prd="+prd+"&scriptName="+scriptName+"&displayName="+displayName,
 				
 	    		success:function(JsonObject){
 	    		
 	    			alert("JsonObject : "+JsonObject); 
 	    			
 	    		/*var JsonObject= JSON.parse(response);
 	    		var values= Object.values(JsonObject);*/
 	    		var result=values[1];
 	    		var stat= values[0];
 	    		if(stat==='Ok'){
 	    			$('#BuyOrderNumberModelIdRepeat').modal('show'); 		
 	    			$('#buyOrderNumbersRepeat').html(result);
 	    			$('#myModalRepeat').modal('hide');
 	    		}
 	    		else if(stat==='Not_Ok'){
 	    			alert("Error :"+result);
 	    			$('#myModalRepeat').modal('show');
 	    		}
 	    		
 	    		
 	    		},
 	    		error:function(){
 	    			alert("PlaceOrderRepeat Error");
 	    		
 	    		}	
 	    	});
 	    	
 	    	}
 	    		//else if($("input:radio[name='AfterMarketOrdId']").is(":checked")) { 
 	    		else if ($('li.AfterMarketOrdclsRepeat').hasClass('active')) {
 	     		
 	    			
 	    			
 	    			var sprdtali="CNC:CNC||MIS:MIS||NRML:NRML";	
 	    			var s_prdt_ali=sprdtali;
 	    			var uid=$("#UserIDRepeat").val();
 	    			var actid=$("#UserIDRepeat").val();
 	    			var qty=$("#QtyIdRepeat").val();
 	    			var discqtyVAL=$("#DiscquantityIdRepeat").val();
 	       		 
 	    			var TsymVAL=$("#scripthiddvalRepeat").val();
 	        		var exchangeType=$("#stockhiddvalRepeat").val();
 	        		
 	        		var scriptName=$("#scriptNamehiddvalRepeat").val(); 	    		
 	 	    		var displayName=$("#displaynamehiddvalRepeat").val();
 	        		var prd; 
 	        		 if(exchangeType==='MCX'){ //MCX
 	 	    			 
 	 	 	    		var exch=exchangeType;
 	 	 	    		var discqty=discqtyVAL;
 	 	 	    		var Tsym=TsymVAL;	 	    		
 	 	 	    		
 	 	 	    		if ($('.nrmlclsRepeat').hasClass('active')){
 	 	 	    			var Pcode="NRML";
 	 	 	    			prd="M";
 	 	 	    		}
 	 	 	    		if ($('.misclsRepeat').hasClass('active')){
 	 	 	    			var Pcode="MIS";
 	 	 	    			prd="I";
 	 	 	    		}
 	 	 	    		
 	 	 	    		 }
 	 	 	    		 if(exchangeType==='NSE'){ //NSE 	 	    			
 	 	 	    				var exch="NSE";
 	 	 	    				var discqty=discqtyVAL;
 	 	 	    				var Tsym=TsymVAL;
 	 	 	    				if ($('li.nrmlclsRepeat').hasClass('active')){
 	 	 	  	    			prd="M";
 	 	 	    				}
 	 	 	    				
 	 	 	    				if ($('.cncclsRepeat').hasClass('active')){	    	    			
 	 	 	    	    			prd="C";
 	 	 	    	    		} 	 	    				
 	 	 	    				if ($('.misclsRepeat').hasClass('active')){	    	    			
 	 	 	    	    			prd="I";
 	 	 	    	    		}	
 	 	 	    				}
 	 	 	    		 
 	 	 	    		 if(exchangeType==='NFO'){ //F&O-NFO
 	 	 	    			
 	 	 	    				var exch="NFO";
 	 	 	    				var discqty="0";			 
 	 	 	    				var Tsym=TsymVAL; 	    				
 	 	 	    				//var Tsym="BANKNIFTY18NOV21C32900";
 	 	 	    				prd="M";
 	 	 	    			}
 		    		
 	    			 
 	    			var Ttranstype='S';
 	    		
 	    			if ( $('li.dayclsRepeat').hasClass('active') ){
 	    			var Ret="DAY";
 	    			}
 	    			if ( $('li.iocclsRepeat').hasClass('active') ){
 	    				var Ret="IOC";
 	    				}
 	    			if ( $('li.gtcclsRepeat').hasClass('active') ){
 	    				var Ret="GTC";
 	    				}
 	    			if ( $('li.gtdclsRepeat').hasClass('active') ){
 	    				var Ret="GTD";
 	    				}
 	    			if ( $('li.gttclsRepeat').hasClass('active') ){
 	    				var Ret="GTT";
 	    				}
 	    				var MktPro="NA"; //(MktPro Should be sent as NA by default)
 	    			var Price=$("#priceIdRepeat").val();
 	    			 if(Price==""){
 	    				 Price="0";    			
 	    	 		}
 	    			
 	    			if ( $('.lmtclsRepeat').hasClass('active') ){ //Price Type ( L or SL )
 	    				var  prctyp="LMT";
 	    				 var TrigPrice="0";
 	    			 }
 	    			if ( $('.mktclsRepeat').hasClass('active') ){ //Price Type ( L or SL )
 	    				var prctyp="MKT"; 
 	    				var TrigPrice="0";
 	    			 }
 	    			if ( $('.slclsRepeat').hasClass('active') ){ //Price Type ( L or SL )
 	    				var prctyp="SL"; 
 	    				var TriggerpriceVAL="0";
 	    			 }
 	    			if ( $('.slmclsRepeat').hasClass('active') ){ //Price Type ( L or SL )
 	    				var prctyp="SL-M"; 
 	    				var TriggerpriceVAL=$('#TriggerpriceIdRepeat').val();
 	    			 }
 	    			 
 	    			if ( $('.cncclsRepeat').hasClass('active') ){      			
 	    				var Pcode="CNC";
 	    			}
 	    			if ( $('.nrmlclsRepeat').hasClass('active') ){ 
 	    				var Pcode="NRML";
 	    			}
 	    			if ( $('.misclsRepeat').hasClass('active') ){ 
 	    				var Pcode="MIS";
 	    			}
 	    			var DateDays="NA"; //(DateDays Send as NA for default)
 	    			var AMO="YES";
 	    			
 	    			var PosSquareFlg="N";
 	    			var MinQty="0"; //(MinQty Send as 0 for default)
 	    			var orderSource=web
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
 	        		
 	    		$.ajax({
 	    			type :'POST',
 	    			url :'PlaceOrderRepeat',	
 	    			data:"s_prdt_ali="+s_prdt_ali+"&prd="+prd+"&Tsym="+Tsym+
 	        		"&exch="+exch+"&Ttranstype="+Ttranstype+"&Ret="+Ret+"&prctyp="+prctyp+"&qty="+qty+"&discqty="+discqty+
 	        		"&MktPro="+MktPro+"&Price="+Price+"&TrigPrice="+TrigPrice+"&Pcode="+Pcode+"&DateDays="+DateDays+"&AMO="+AMO+
 	        		"&PosSquareFlg="+PosSquareFlg+"&MinQty="+MinQty+"&orderSource="+orderSource+"&naicCode="+naicCode+
 	        		"&ltpOratp="+ltpOratp+"&SqrOffAbsOrticks="+SqrOffAbsOrticks+"&SqrOffvalue="+SqrOffvalue+"&SLAbsOrticks="+
 	        		SLAbsOrticks+"&SLvalue="+SLvalue+"&trailingSL="+trailingSL+"&tSLticks="+tSLticks+"&userTag="+userTag+
 	        		"&TrigPrice="+TrigPrice+"&scriptName="+scriptName+"&displayName="+displayName,
 	    			
 	    			success:function(JsonObject){  
 	    				
 	    				alert("JsonObject : "+JsonObject);
 	    			/*var JsonObject= JSON.parse(response);
 	    			var values= Object.values(JsonObject);*/
 	    			var result=values[1];
 	    			var stat= values[0];
 	    			if(stat==='Ok'){
 	    				$('#BuyOrderNumberModelIdRepeat').modal('show'); 		
 	    				$('#buyOrderNumbersRepeat').html(result);
 	    				$('#myModalRepeat').modal('hide');
 	    			}
 	    			else if(stat==='Not_Ok'){
 	    				alert("Error :"+result);
 	    				$('#myModalRepeat').modal('show');
 	    			}	    			
 	    			},
 	    			error:function(){
 	    				alert("PlaceOrderRepeat Error");
 	    			}	
 	    		});     		
 	    }   	
 	  }


 	

 	
 	 
 	// ======== Buy/Sell END ===============