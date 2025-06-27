$('.buySellModalModify').draggable({
    handle: ".modal-header"
  });

//New code...............................
function modifyOrderWindow(token,uid,norenordno,exch,tsym,qty,prc,prctyp,ret){
	
	alert("token:modify:"+token+"uid::"+uid+"norenordno::"+norenordno+"exch::"+exch+"tsym::"+tsym+"qty::"+qty+"prc::"+prc+"prctyp::"+prctyp+"ret::"+ret);
	
	$("#ModifyconfirmPopup").show();
	$("#loadGraphId").hide();
	$("#OrderId").show();
	$("#dashboardId").hide();
	$("#AccountId").hide();	

	
	
	
	   document.getElementById("tokenModify").value=token;
	   document.getElementById("UserIDModify").value=uid;
	   document.getElementById("norenordnoModify").value=norenordno;
	   document.getElementById("exchModify").value=exch;
	   document.getElementById("tsymModify").value=tsym;
	   document.getElementById("qtyModify").value=qty;
	   document.getElementById("prcModify").value=prc;
	   document.getElementById("prctypModify").value=prctyp;
	   document.getElementById("retModify").value=ret;
	   
	   document.getElementById("priceIdModify").value=prc;
	   document.getElementById("QtyIdModify").value=qty;
	   
	   $('#buySellModalModify').modal('show');
	 //  document.getElementById("QtyIdModify").innerHTML=prc;
	 //  document.getElementById("QtyIdModify").innerHTML=prc;
	

	/*var call="token="+token;
	
	   
	$.ajax({
		type :'GET',
		url :'getScriptValueOfToken',
	    data : call,
		dataType: 'json',
		success:function(response){
			
			 var jsonObject =JSON.parse(response);
			 
			 for (var i = 0; i <jsonObject.length; i++) {
	 

					
					//var AvailableMargin=document.getElementById("marginUsed").value;
					 //var AvailableMargin=$("#marginUsedhiddenIdModify").val();
						
	
					
					 //document.getElementById("AvailableMarginspanIdModify").innerHTML =AvailableMargin;
					$('#buySellModalModify').show();
					///$('#buySellModalModify').modal('show');
					//document.getElementById("priceIdModify").value=document.getElementById(token+"_priceid_hidden").value;
					//document.getElementById("UserIDModify").value=userId;	
					//document.getElementById("tokenModify").value=token;
					//document.getElementById("buysell_priceidModify").innerHTML = document.getElementById(token+"_priceid_hidden").value;
					//document.getElementById("stockhiddvalModify").value=exchange;
				//document.getElementById("exchangelabelId").innerHTML=exchange;

					
					//document.getElementById("scriptNamehiddvalModify").value=scriptName;
					
					//document.getElementById("displaynamehiddvalModify").value=displayname;
					
					var displayname;
					
						
					const monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']

				    const d = new Date();
				    var dd = String(d.getDate()).padStart(2, '0');
				    var mm = String(d.getMonth() + 1).padStart(2, '0');
				    var yyyy = d.getFullYear();
				    var todaydate = +dd +"/"+ monthNames[d.getMonth()] +"/"+ yyyy;
				    	
				 
				   
							if (jsonObject[i].properties.mcxExchange==='MCX')
								{
								document.getElementById("stockhiddvalModify").value=jsonObject[i].properties.mcxExchange;
								document.getElementById("mcxexpirylabelIdModify").innerHTML=jsonObject[i].properties.mcxOriginalExpiryDate;		

								var myDate = new Date(jsonObject[i].properties.mcxOriginalExpiryDate);
								
				        		var scriptName;

								if(jsonObject[i].properties.mcxOptionType=="XX"){
									scriptName=myDate.getDate() +monthNames[myDate.getMonth()]+" "+"FUT"+" "+jsonObject[i].properties.mcxExchange;
								}else{

									scriptName=myDate.getDate() +monthNames[myDate.getMonth()]+" "+jsonObject[i].properties.mcxStrikePrice+" "+jsonObject[i].properties.mcxOptionType+" "+jsonObject[i].properties.mcxExchange;
								}
				 	        	
				 	        document.getElementById("scriptNamehiddvalModify").value=scriptName;
							
							document.getElementById("displaynamehiddvalModify").value=jsonObject[i].properties.mcxInstrumentCode;
							
							displayname=jsonObject[i].properties.mcxInstrumentCode;
								
								
								if ($('li.nrmlclsModify').hasClass('active')){
				 	    			var Pcode="NRML";
				 	    			prd="M";
				 	    		}
				 	    		if ($('li.misclsModify').hasClass('active')){
				 	    			var Pcode="MIS";
				 	    			prd="I";
				 	    		}
				 	    		
				 	    		
								$(".BracketOrdclsModify").show();
								$(".CoverOrdclsModify").show();
								
								
								
								
								$('.nrmlclsModify').hasClass('active') 
							   	 if ($('.nrmlclsModify').hasClass('active') ) {
							   	$('.nrmlclsModify').siblings().removeClass('active');
							   	 }
							   	if ($('.misclsModify').hasClass('active') ) {
							   		$('.misclsModify').siblings().removeClass('active');
							   	}
								//=======  Regular ORDER MCX START =======
								
								  if ($('li.RegularOrdclsModify').hasClass('active') ) {
							    	  $('.CoverOrderrightsideDivclsModify').hide();
							     	  $('.NonCoverOrderDivclsModify').show();
							    	 
							    	  $('.BracketordertextboxclsModify').hide();     	
							    	
							    	 // $('.priceclsModify').prop('disabled',false);
									  $('.DisclosedQtyclsModify').prop('disabled',false);
									  $(".DisclosedQtyclsModify").show();
							    	
									  
									  	$(".dayclsModify").show();
									   	 $(".iocclsModify").show();
									   	 $(".gtcclsModify").show();
									   	 $(".gtdclsModify").show();
									   	 $(".gttclsModify").show();
									   	
									   	 $('.priceclsModify').prop('disabled',false);
									   	 
									   	 $('.ProductsclsModify').show();
									   	 
									 	$("#NrmlIdModify").show();
										$("#cncIdModify").hide();
										$("#MisIdModify").show();
										
										
										
									   	 
										$(".nrmlclsModify").addClass('active')    		 
								   		 if ($('.nrmlclsModify').hasClass('active') ) {
								   			 $('.nrmlclsModify').siblings().removeClass('active');
								    	  }
										 
								   		if ($('.misclsModify').hasClass('active') ) {
								  			 $('.misclsModify').siblings().removeClass('active');
								   	  }
								   		
										
									 
							    	
							    	 if ($('li.dayclsModify').hasClass('active') ) {
							     		$('.DisclosedQtyclsModify').prop('disabled',true);
							     		$('.TriggerpriceclsModify').hide();
							     		$('.DTDValidityclsModify').hide();
							     	 }
							    	 if ($('li.iocclsModify').hasClass('active') ) {
							      		$('.DisclosedQtyclsModify').prop('disabled',true);
							      		$('.TriggerpriceclsModify').hide();
							      		$('.DTDValidityclsModify').hide();
							      	 }
							    	 if ($('li.gtcclsModify').hasClass('active') ) {
							       		$('.DisclosedQtyclsModify').prop('disabled',true);
							       		$('.TriggerpriceclsModify').hide();
							       		$('.DTDValidityclsModify').hide();
							       	 }
							    	 
							    	if ($('li.gtdclsModify').hasClass('active') ) {
							    		
							     		$('.DisclosedQtyclsModify').prop('disabled',true);
							     		$('.TriggerpriceclsModify').hide();
							     		$('.DTDValidityclsModify').show();
							     		
							     		$(".date_item").show();
							     		$("#datepickerbuysellModify").prop("disabled", false);
							     		
							     		  $('#datepickerbuysellModify').datepicker({
								  
									 	    dateFormat: 'd M yy',
									 	    minDate: new Date(),
									 	    defaultDate:  new Date(),
								    
							     		  	}).datepicker('setDate',new Date())
							     	
							      }
									else{
									      $(".date_item").hide();
									      $("#datepicker").prop("disabled", true);
									    }
							    	if ($('li.gttclsModify').hasClass('active') ) {
							    		
							     		$('.DisclosedQtyclsModify').prop('disabled',true);
							     		$('.TriggerpriceclsModify').hide();
							     		$('.DTDValidityclsModify').hide();
							     		
							     	 }
							    	 
							    	
							    		 $('.ValidityclsModify').show();
							    		 $('.CoverordertypeclsModify').hide();
							    	 
							    		 $("#lmtIdModify").show();
									   	 $("#mktIdModify").show();
									   	 $("#slIdModify").show();
									   	 $("#sl-mIdModify").show();
									   	 
									   	$(".lmtclsModify").addClass('active')  
								         
							   	 
							   	 	if ($('.lmtclsModify').hasClass('active') ) { //Price Type ( L or SL )
							   	 	$('.priceclsModify').prop('disabled',false);
									$('.DisclosedQtyclsModify').prop('disabled',false);     		
							 		$('.TriggerpriceclsModify').hide();
							 		 $('.lmtclsModify').siblings().removeClass('active'); 
									 }
							   	 	if ($('.mktclsModify').hasClass('active') ) { //Price Type ( L or SL )
							   	 	$('.priceclsModify').prop('disabled',true);
									$('.DisclosedQtyclsModify').prop('disabled',false);     		
							 		$('.TriggerpriceclsModify').hide();
							 		 $('.mktclsModify').siblings().removeClass('active'); 
									 }
							   	 	if ($('.slclsModify').hasClass('active') ) { //Price Type ( L or SL )
							   	 	$('.TriggerpriceclsModify').show();
							  		$('.DisclosedQtyclsModify').prop('disabled',false);
							  		 $('.slclsModify').siblings().removeClass('active'); 
									 }
									 if ($('.slmclsModify').hasClass('active') ) { //Price Type ( L or SL )
										 $('.NonCoverOrderDivclsModify').show();
								    		$('.DisclosedQtyclsModify').prop('disabled',false);
								    		$('.priceclsModify').prop('disabled',true);
								      		$('.TriggerpriceclsModify').show();
								      		 $('.slmclsModify').siblings().removeClass('active'); 
									 }
							   	 
							      }
								  
								//=======  Regular MCX END =======
								  
								  
								//=======  BracketOrder MCX START =======
								  
								  
								  
								  else if ($('li.BracketOrdclsModify').hasClass('active') ) {
									 
									  $('.priceclsModify').prop('disabled',false);
							    	  
								   		 $(".lmtclsModify").addClass('active')    		 
								   		 if ($('.slclsModify').hasClass('active') ) {
								   			 $('.slclsModify').siblings().removeClass('active');
								    	  }
								   		if ($('.lmtclsModify').hasClass('active') ) {
								  			 $('.lmtclsModify').siblings().removeClass('active');
								   	  }
								   	 
										   	 $(".DisclosedQtyclsModify").disabled = false;
										   	 $(".DisclosedQtyclsModify").show();
										   	 $('.ProductsclsModify').hide();
										   	 $('.priceclsModify').prop('disabled',false);
										   	 $('.BracketordertextboxclsModify').show();
										   	 $('.ValidityclsModify').hide();    	 
										   	 $('.CoverOrderrightsideDivclsModify').hide();
										   	 $('.NonCoverOrderDivclsModify').show();
										   	 $("#lmtIdModify").show();
										   	 $("#mktIdModify").hide();
										   	 $("#slIdModify").show();
										   	 $("#sl-mIdModify").hide();
										   	 $('.CoverordertypeclsModify').hide();
										   	 $('.TriggerpriceclsModify').hide();
										   	 
										   	 if ($('li.lmtclsModify').hasClass('active') ) { //Price Type ( L or SL )
										   		 $('.TriggerpriceclsModify').hide();
										 		 }
										 		 if ($('li.slclsModify').hasClass('active') ) { //Price Type ( L or SL )
										 			$('.TriggerpriceclsModify').show();
										 		 }
										 		
										      }
								  
								  
								//=======  Bracket MCX END =======
								
								
								
								//=======  Cover Order MCX START =======
								  
								 	  
							      else if ($('li.CoverOrdclsModify').hasClass('active') ) {
							    	  
							    	  
							    	  $('.priceclsModify').prop('disabled',false);
							    	  
							    	  
								   	  // $(".DisclosedQtyclsModify").disabled = false;
								   	   $(".DisclosedQtyclsModify").hide();
								   	  $('.ProductsclsModify').hide();
								   	 
								   	 $('.BracketordertextboxclsModify').hide();
								   	 $('.ValidityclsModify').hide();
								   	 $('.TriggerpriceclsModify').show();
								   	
								   	 $('.CoverOrderrightsideDivclsModify').show();
								   	 $('.NonCoverOrderDivclsModify').hide();
								   	 $("#CoverOrderlmtIdModify").show();
								   	 $("#CoverOrdermktIdModify").show();
								   	 $("#CoverOrderslIdModify").hide();
								   	 $("#CoverOrdersl-mIdModify").hide();
								   	 
								   	 $(".lmtclsModify").addClass('active')
								   	  if ($('.mktclsModify').hasClass('active') ) {
								   			 $('.mktclsModify').siblings().removeClass('active');
								   			 $('.priceclsModify').prop('disabled',true);
						    	  }
						   		if ($('.lmtclsModify').hasClass('active') ) {
						  			 $('.lmtclsModify').siblings().removeClass('active');
						  			 $('.priceclsModify').prop('disabled',false);
						   	  }
						   	 
						   	 
						    }
								  
								//=======  Cover Order MCX END =======
								
								
								
								  
									//=======  AMO Order MCX START =======
								  
								  
								  
								  
								  if ($('li.AfterMarketOrdclsModify').hasClass('active') ) {
										
										$('.priceclsModify').prop('disabled',false);
										 $('.CoverOrderrightsideDivclsModify').hide();
							        	  $('.NonCoverOrderDivclsModify').show();
							       	  $('.ProductsclsModify').show();
							       	  $('.BracketordertextboxclsModify').hide();
							       	
								        	$('.priceclsModify').prop('disabled',false);
								    		$('.DisclosedQtyclsModify').prop('disabled',false);
								    		$(".DisclosedQtyclsModify").show();
								    		$(".dayclsModify").show();
										   	 $(".iocclsModify").show();
										   	 $(".gtcclsModify").show();
										   	 $(".gtdclsModify").show();
										   	 $(".gttclsModify").show();
										   	 
										  	$("#NrmlIdModify").show();
											$("#cncIdModify").hide();
											$("#MisIdModify").show();
											
											
											
										   	 
											$(".nrmlclsModify").addClass('active')    		 
									   		 if ($('.nrmlclsModify').hasClass('active') ) {
									   			 $('.nrmlclsModify').siblings().removeClass('active');
									    	  }
											 
									   		if ($('.misclsModify').hasClass('active') ) {
									  			 $('.misclsModify').siblings().removeClass('active');
									   	  }
							       	
							       	 if ($('.dayclsModify').hasClass('active') ) {
							        		$('.DisclosedQtyclsModify').prop('disabled',true);
							        		$('.TriggerpriceclsModify').hide();
							        		$('.DTDValidityclsModify').hide();
							        	 }
							       	 if ($('.iocclsModify').hasClass('active') ) {
							         		$('.DisclosedQtyclsModify').prop('disabled',true);
							         		$('.TriggerpriceclsModify').hide();
							         		$('.DTDValidityclsModify').hide();
							         	 }
							       	 if ($('.gtcclsModify').hasClass('active') ) {
							          		$('.DisclosedQtyclsModify').prop('disabled',true);
							          		$('.TriggerpriceclsModify').hide();
							          		$('.DTDValidityclsModify').hide();
							          	 }
							       	 
							       	if ($('.gtdclsModify').hasClass('active') ) {
							       		
							        		$('.DisclosedQtyclsModify').prop('disabled',true);
							        		$('.TriggerpriceclsModify').hide();
							        		$('.DTDValidityclsModify').show();
							        		
							        		$(".date_item").show();
							         		$("#datepickerbuysellModify").prop("disabled", false);
							         		
							         		  $('#datepickerbuysellModify').datepicker({
							    	  
							    		 	    dateFormat: 'd M yy',
							    		 	    minDate: new Date(),
							    		 	    defaultDate:  new Date(),
							    	    
							         		  	}).datepicker('setDate',new Date())
							         	
							          }
							    		else{
							    		      $(".date_item").hide();
							    		      $("#datepickerModify").prop("disabled", true);
							    		    }
							       	if ($('.gttclsModify').hasClass('active') ) {
							       		
							        		$('.DisclosedQtyclsModify').prop('disabled',true);
							        		$('.TriggerpriceclsModify').hide();
							        		$('.DTDValidityclsModify').hide();
							        		
							        	 }
							       	 
							       	 $('.ValidityclsModify').show();
							       	$('.CoverordertypeclsModify').hide();
							       	 
							       	 $("#lmtIdModify").show();
							      	 $("#mktIdModify").show();
							      	 $("#slIdModify").show();
							      	 $("#sl-mIdModify").show();
							      	 
							      	$(".lmtclsModify").addClass('active');
							      		
							   		
							   		

							   	 	if ($('.lmtclsModify').hasClass('active') ) { //Price Type ( L or SL )
							   	   	 	$('.priceclsModify').prop('disabled',false);
							   			$('.DisclosedQtyclsModify').prop('disabled',false);     		
							   	 		$('.TriggerpriceclsModify').hide();
							   		 $('.lmtclsModify').siblings().removeClass('active');
							   			 }
							   	   	 	if ($('.mktclsModify').hasClass('active') ) { //Price Type ( L or SL )
							   	   	 	$('.priceclsModify').prop('disabled',true);
							   			$('.DisclosedQtyclsModify').prop('disabled',false);     		
							   	 		$('.TriggerpriceclsModify').hide();
							   	 	$('.mktclsModify').siblings().removeClass('active');
							   			 }
							   	   	 	if ($('.slclsModify').hasClass('active') ) { //Price Type ( L or SL )
							   	   	 	$('.TriggerpriceclsModify').show();
							   	  		$('.DisclosedQtyclsModify').prop('disabled',false);
							   	  	 $('.slclsModify').siblings().removeClass('active');
							   			 }
							   			 if ($('.slmclsModify').hasClass('active') ) { //Price Type ( L or SL )
							   				 $('.NonCoverOrderDivclsModify').show();
							   		    		$('.DisclosedQtyclsModify').prop('disabled',false);
							   		    		$('.priceclsModify').prop('disabled',true);
							   		      		$('.TriggerpriceclsModify').show();
							   		      	 $('.slmclsModify').siblings().removeClass('active');
							   			 }
							      	 
							         }
								  
									//=======  AMO Order MCX END =======				
								
								
								
								$("#cncIdModify").hide();
								$("#MisIdModify").show();
								$("#NrmlIdModify").show();
								
								
							
							
							
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
									document.getElementById("mcxticksizehiddvalModify").value=jsonObject[i].properties.mcxTickSize;
								//McxInstrumentName
								document.getElementById("mcxInstrumentNamehiddvalModify").value=jsonObject[i].properties.mcxInstrumentName;
								document.getElementById("mcxexpirydatehiddvalModify").value=mcxexpirydatedisplay;
								
								//McxOptionType
								document.getElementById("mcxOptionTypehiddvalModify").value=jsonObject[i].properties.mcxOptionType;
								 
								var fut="FUT";
								
								//alert("token : "+token);
								//document.getElementById("mcxStrikepricehiddval").value=token+"_priceid";
								
								//document.getElementById(token+"_priceid").value='mcxStrikepricehiddval';
								//var priceid=$("#mcxStrikepricehiddval").val();
								
								var priceid=document.getElementById(token+"_priceid").value;
								alert("mcxStrikePrice : "+priceid); 
								
								if(jsonObject[i].properties.mcxInstrumentName=="FUTIDX" || jsonObject[i].properties.mcxInstrumentName=="FUTCOM"){
									if(dd<10) 
									{
										document.getElementById("stocklabelIdModify").innerHTML=displayname+" "+fut+" "+jsonObject[i].properties.mcxExchange;
										document.getElementById("stocklabelhiddenIdModify").value=displayname+fut;
										document.getElementById("scripthiddvalModify").value=displayname+"0"+mcxexpiryDATEmyDate;
									}else{
										document.getElementById("stocklabelIdModify").innerHTML=displayname+" "+fut+" "+jsonObject[i].properties.mcxExchange;
										document.getElementById("stocklabelhiddenIdModify").value=displayname+fut;
										document.getElementById("scripthiddvalModify").value=displayname+mcxexpiryDATEmyDate;
									}
								}
								else if(jsonObject[i].properties.mcxInstrumentName=="OPTFUT" || jsonObject[i].properties.mcxInstrumentName=="OPTCOM"){
								
									var num=jsonObject[i].properties.mcxStrikePrice/100;
									
									
									var DecimalmcxStrikePrice= num.toFixed(2);
									document.getElementById('decimalhiddval').value=(Math.round(DecimalmcxStrikePrice * 100) / 100);
									
									var decimalVal=$("#decimalhiddvalModify").val();
									
									//document.getElementById('decimalhiddval').value=mcxStrikePrice;
									if(mcxOptionType=="PE"){
									if(dd<10) 
									{
									document.getElementById("stocklabelIdModify").innerHTML=displayname+""+decimalVal+" "+jsonObject[i].properties.mcxExchange;
									document.getElementById("stocklabelhiddenIdModify").value=displayname+"P"+decimalVal;
									document.getElementById("scripthiddvalModify").value=displayname+"0"+mcxexpiryDATEmyDate+"P"+decimalVal;
									}else{
									document.getElementById("stocklabelIdModify").innerHTML=displayname+" "+decimalVal+" "+jsonObject[i].properties.mcxOptionType+" "+jsonObject[i].properties.mcxExchange;
									document.getElementById("stocklabelhiddenIdModify").value=displayname+decimalVal+jsonObject[i].properties.mcxOptionType;
									document.getElementById("scripthiddvalModify").value=displayname+mcxexpiryDATEmyDate+"P"+decimalVal;
									}
									}
									else  if(mcxOptionType=="CE"){
										if(dd<10) 
										{
										document.getElementById("stocklabelIdModify").innerHTML=displayname+""+decimalVal+" "+jsonObject[i].properties.mcxExchange;
										document.getElementById("stocklabelhiddenIdModify").value=displayname+"C"+decimalVal;
										document.getElementById("scripthiddvalModify").value=displayname+"0"+mcxexpiryDATEmyDate+"C"+decimalVal;
										}else{
										document.getElementById("stocklabelIdModify").innerHTML=displayname+" "+""+decimalVal+" "+jsonObject[i].properties.mcxOptionType+" "+jsonObject[i].properties.mcxExchange;
										document.getElementById("stocklabelhiddenIdModify").value=displayname+"C"+decimalVal+jsonObject[i].properties.mcxOptionType;
										document.getElementById("scripthiddvalModify").value=displayname+mcxexpiryDATEmyDate+"C"+decimalVal;
										}	
									}
							}
								
						
								}
							
							else if(jsonObject[i].properties.nseExchange==='NSE'){
								
								document.getElementById("stockhiddvalModify").value=jsonObject[i].properties.nseExchange;
								displayname=jsonObject[i].properties.nseSymbol;
				 	        	
			                    document.getElementById("scriptNamehiddvalModify").value=jsonObject[i].properties.nseSeries+" "+jsonObject[i].properties.nseExchange;
								
								document.getElementById("displaynamehiddvalModify").value=displayname;
								
								$("#NrmlIdModify").show();
								$("#cncIdModify").hide();
								$("#MisIdModify").show();
								
								
								
								
								if(jsonObject[i].properties.nseSeries=="AF" || jsonObject[i].properties.nseSeries=="BE" || 
										jsonObject[i].properties.nseSeries=="BL" || jsonObject[i].properties.nseSeries=="EQ" ||
										jsonObject[i].properties.nseSeries=="IQ" || jsonObject[i].properties.nseSeries=="L1" || 
										jsonObject[i].properties.nseSeries=="R1" || jsonObject[i].properties.nseSeries=="RL" || jsonObject[i].properties.nseSeries=="V1" ){
									
									$("#NrmlIdModify").show();
									$("#cncIdModify").show();
									$("#MisIdModify").show();
									
								}
						   		
								
								
								
								$(".BracketOrdclsModify").hide();
								$(".CoverOrdclsModify").hide();
								
								
								
								 $(".RegularOrdclsModify").addClass('active')  
								 
						   		 if ($('.RegularOrdclsModify').hasClass('active') ) {
						   			 $('.RegularOrdclsModify').siblings().removeClass('active');
						    	  }
						   		if ($('.AfterMarketOrdclsModify').hasClass('active') ) {
						  			 $('.AfterMarketOrdclsModify').siblings().removeClass('active');
						   	  }
						   		
								//=======  Regular ORDER NSE START =======
								
								  if ($('li.RegularOrdclsModify').hasClass('active') ) {
							    	  $('.CoverOrderrightsideDivclsModify').hide();
							     	  $('.NonCoverOrderDivclsModify').show();
							    	  $('.ProductsclsModify').show();
							    	  $('.BracketordertextboxclsModify').hide();     	
							    	
							    	  
							    	  $(".dayclsModify").show();
									   	 $(".iocclsModify").show();
									   	 $(".gtcclsModify").hide();
									   	 $(".gtdclsModify").hide();
									   	 $(".gttclsModify").hide();
									   	 
							    	 // $('.priceclsModify').prop('disabled',false);
									  $('.DisclosedQtyclsModify').prop('disabled',false);
									  $(".DisclosedQtyclsModify").show();
							    	
									  $('.priceclsModify').prop('disabled',false);
									  $(".nrmlclsModify").addClass('active')  
									 
								   		 if ($('.nrmlclsModify').hasClass('active') ) {
								   			 $('.nrmlclsModify').siblings().removeClass('active');
								    	  }
								   		if ($('.misclsModify').hasClass('active') ) {
								  			 $('.misclsModify').siblings().removeClass('active');
								   	  }
							    	
							    	 if ($('li.dayclsModify').hasClass('active') ) {
							     		$('.DisclosedQtyclsModify').prop('disabled',true);
							     		$('.TriggerpriceclsModify').hide();
							     		$('.DTDValidityclsModify').hide();
							     	 }
							    	 if ($('li.iocclsModify').hasClass('active') ) {
							      		$('.DisclosedQtyclsModify').prop('disabled',true);
							      		$('.TriggerpriceclsModify').hide();
							      		$('.DTDValidityclsModify').hide();
							      	 }
							    	 $(".gtcclsModify").hide();
							    	 $(".gtdclsModify").hide();
							    	 $(".gttclsModify").hide();
							    	
							    	 
							    		 $('.ValidityclsModify').show();
							    		 $('.CoverordertypeclsModify').hide();
							    	 
							    		 $("#lmtIdModify").show();
									   	 $("#mktIdModify").show();
									   	 $("#slIdModify").show();
									   	 $("#sl-mIdModify").show();
							   	 
							   	 	if ($('.lmtclsModify').hasClass('active') ) { //Price Type ( L or SL )
							   	 	$('.priceclsModify').prop('disabled',false);
									$('.DisclosedQtyclsModify').prop('disabled',false);     		
							 		$('.TriggerpriceclsModify').hide();
									 }
							   	 	if ($('.mktclsModify').hasClass('active') ) { //Price Type ( L or SL )
							   	 	$('.priceclsModify').prop('disabled',true);
									$('.DisclosedQtyclsModify').prop('disabled',false);     		
							 		$('.TriggerpriceclsModify').hide();
									 }
							   	 	if ($('.slclsModify').hasClass('active') ) { //Price Type ( L or SL )
							   	 	$('.TriggerpriceclsModify').show();
							  		$('.DisclosedQtyclsModify').prop('disabled',false);
									 }
									 if ($('.slmclsModify').hasClass('active') ) { //Price Type ( L or SL )
										 $('.NonCoverOrderDivclsModify').show();
								    		$('.DisclosedQtyclsModify').prop('disabled',false);
								    		$('.priceclsModify').prop('disabled',true);
								      		$('.TriggerpriceclsModify').show();
									 }
							   	 
							      }
								  
								//=======  Regular NSE END =======
								  				
								  
									//=======  AMO Order NSE START =======
								  
								  
								  if ($('.AfterMarketOrdclsModify').hasClass('active') ) {
										
										$('.priceclsModify').prop('disabled',false);
										 $('.CoverOrderrightsideDivclsModify').hide();
							        	  $('.NonCoverOrderDivclsModify').show();
							        	  $('.ProductsclsModify').show();
							        	  $('.BracketordertextboxclsModify').hide();
							       	
							        	  	$(".dayclsModify").show();
										   	 $(".iocclsModify").show();
										   	 $(".gtcclsModify").hide();
										   	 $(".gtdclsModify").hide();
										   	 $(".gttclsModify").hide();
										   	 
								        
								    		$('.DisclosedQtyclsModify').prop('disabled',false);
								    		$(".DisclosedQtyclsModify").show();
							       	
								    		 $('.priceclsModify').prop('disabled',false);
											  $(".cncclsModify").addClass('active')    		 
										   		 if ($('.cncclsModify').hasClass('active') ) {
										   			 $('.cncclsModify').siblings().removeClass('active');
										    	  }
										   		if ($('.misclsModify').hasClass('active') ) {
										  			 $('.misclsModify').siblings().removeClass('active');
										   	  }
							       	
							       	 if ($('.dayclsModify').hasClass('active') ) {
							        		$('.DisclosedQtyclsModify').prop('disabled',true);
							        		$('.TriggerpriceclsModify').hide();
							        		$('.DTDValidityclsModify').hide();
							        	 }
							       	 if ($('.iocclsModify').hasClass('active') ) {
							         		$('.DisclosedQtyclsModify').prop('disabled',true);
							         		$('.TriggerpriceclsModify').hide();
							         		$('.DTDValidityclsModify').hide();
							         	 }
							       	 if ($('.gtcclsModify').hasClass('active') ) {
							          		$('.DisclosedQtyclsModify').prop('disabled',true);
							          		$('.TriggerpriceclsModify').hide();
							          		$('.DTDValidityclsModify').hide();
							          	 }
							       	 
							       	if ($('.gtdclsModify').hasClass('active') ) {
							       		
							        		$('.DisclosedQtyclsModify').prop('disabled',true);
							        		$('.TriggerpriceclsModify').hide();
							        		$('.DTDValidityclsModify').show();
							        		
							        		$(".date_item").show();
							         		$("#datepickerbuysellModify").prop("disabled", false);
							         		
							         		  $('#datepickerbuysellModify').datepicker({
							    	  
							    		 	    dateFormat: 'd M yy',
							    		 	    minDate: new Date(),
							    		 	    defaultDate:  new Date(),
							    	    
							         		  	}).datepicker('setDate',new Date())
							         	
							          }
							    		else{
							    		      $(".date_item").hide();
							    		      $("#datepickerModify").prop("disabled", true);
							    		    }
							       	if ($('.gttclsModify').hasClass('active') ) {
							       		
							        		$('.DisclosedQtyclsModify').prop('disabled',true);
							        		$('.TriggerpriceclsModify').hide();
							        		$('.DTDValidityclsModify').hide();
							        		
							        	 }
							       	 
							       	 $('.ValidityclsModify').show();
							       	$('.CoverordertypeclsModify').hide();
							       	 
							       	 $("#lmtIdModify").show();
							      	 $("#mktIdModify").show();
							      	 $("#slIdModify").show();
							      	 $("#sl-mIdModify").show();
							      	 
							      	 //$(".lmtclsModify").addClass('active')

							   	 	if ($('.lmtclsModify').hasClass('active') ) { //Price Type ( L or SL )
							   	   	 	$('.priceclsModify').prop('disabled',false);
							   			$('.DisclosedQtyclsModify').prop('disabled',false);     		
							   	 		$('.TriggerpriceclsModify').hide();
							   			 }
							   	   	 	if ($('.mktclsModify').hasClass('active') ) { //Price Type ( L or SL )
							   	   	 	$('.priceclsModify').prop('disabled',true);
							   			$('.DisclosedQtyclsModify').prop('disabled',false);     		
							   	 		$('.TriggerpriceclsModify').hide();
							   	 	
							   			 }
							   	   	 	if ($('.slclsModify').hasClass('active') ) { //Price Type ( L or SL )
							   	   	 	$('.TriggerpriceclsModify').show();
							   	  		$('.DisclosedQtyclsModify').prop('disabled',false);
							   	  	
							   			 }
							   			 if ($('.slmclsModify').hasClass('active') ) { //Price Type ( L or SL )
							   				 $('.NonCoverOrderDivclsModify').show();
							   		    		$('.DisclosedQtyclsModify').prop('disabled',false);
							   		    		$('.priceclsModify').prop('disabled',true);
							   		      		$('.TriggerpriceclsModify').show();
							   		      	
							   			 }
							      	 
							         }
								  
									//=======  AMO Order NSE END =======
								
								  
								  //NSE TICK SIZE
								  	document.getElementById("nseticksizehiddvalModify").value=jsonObject[i].properties.nseTickSize;
								  
								  //NSE
									document.getElementById("nseexpirydatehiddvalModify").innerHTML=jsonObject[i].properties.nseExDate;
									document.getElementById("nseexpirydatehiddvalModify").value=jsonObject[i].properties.nseExDate;	
									document.getElementById("nseSerieshiddvalModify").value=jsonObject[i].properties.nseSeries
									
								  	document.getElementById("stocklabelIdModify").innerHTML=jsonObject[i].properties.nseSymbol+"-"+jsonObject[i].properties.nseSeries+" "+jsonObject[i].properties.nseExchange;
									document.getElementById("scripthiddvalModify").value=jsonObject[i].properties.nseSymbol+"-"+jsonObject[i].properties.nseSeries;
								
								
							}
							
							else  if(jsonObject[i].properties.nfoExchange==='NFO'){	
								
								document.getElementById("stockhiddvalModify").value=jsonObject[i].properties.nfoExchange;
								document.getElementById("nfoexpirydatelabelIdModify").innerHTML=jsonObject[i].properties.nfoexpiry_date;
								
								var scriptName;
			                  	var myDate = new Date(jsonObject[i].properties.nfoexpiry_date);
			       	            if(jsonObject[i].properties.nfoinstrument_name=="FUTIDX" || jsonObject[i].properties.nfoinstrument_name=="FUTSTK" ){
			       	            scriptName=myDate.getDate() +monthNames[myDate.getMonth()]+" "+"FUT"+" "+jsonObject[i].properties.nfoExchange;
			       	            }else{
			       	            scriptName=myDate.getDate() +monthNames[myDate.getMonth()]+" "+jsonObject[i].properties.nfostrike_price+" "+jsonObject[i].properties.nfooption_type+" "+jsonObject[i].properties.nfoExchange;
			       	            }
			 	        	
			 	        	displayname=jsonObject[i].properties.nfoSymbol;
			 	        	
		                     document.getElementById("scriptNamehiddvalModify").value=scriptName;
							
							document.getElementById("displaynamehiddvalModify").value=displayname;
								
								$("#NrmlIdModify").show();
								$("#cncIdModify").hide();
								$("#MisIdModify").show();
								
								
								
							   	 
								$(".nrmlclsModify").addClass('active')    		 
						   		 if ($('.nrmlclsModify').hasClass('active') ) {
						   			 $('.nrmlclsModify').siblings().removeClass('active');
						    	  }
								   		 
						   		 if ($('.cncclsModify').hasClass('active') ) {
						   			 $('.cncclsModify').siblings().removeClass('active');
						    	  }
						   		if ($('.misclsModify').hasClass('active') ) {
						  			 $('.misclsModify').siblings().removeClass('active');
						   	  }
						   		
								
								$(".BracketOrdclsModify").hide();
								$(".CoverOrdclsModify").hide();
								
								
									$(".RegularOrdclsModify").addClass('active')  
								 
						   		 if ($('.RegularOrdclsModify').hasClass('active') ) {
						   			 $('.RegularOrdclsModify').siblings().removeClass('active');
						    	  }
						   		if ($('.AfterMarketOrdclsModify').hasClass('active') ) {
						  			 $('.AfterMarketOrdclsModify').siblings().removeClass('active');
						   	  }
						   		
								//=======  Regular ORDER NSE START =======
								
								  if ($('li.RegularOrdclsModify').hasClass('active') ) {
									  	 $(".dayclsModify").show();
									   	 $(".iocclsModify").show();
									   	 $(".gtcclsModify").hide();
									   	 $(".gtdclsModify").hide();
									   	 $(".gttclsModify").hide();
									   	 
							    	  $('.CoverOrderrightsideDivclsModify').hide();
							     	  $('.NonCoverOrderDivclsModify').show();
							    	  $('.ProductsclsModify').show();
							    	  $('.BracketordertextboxclsModify').hide();     	
							    	
							    	 // $('.priceclsModify').prop('disabled',false);
									  $('.DisclosedQtyclsModify').prop('disabled',false);
									  $(".DisclosedQtyclsModify").show();
							    	
									  $('.priceclsModify').prop('disabled',false);
										$('li.nrmlclsModify').hasClass('active')
							    	
							    	 if ($('.dayclsModify').hasClass('active') ) {
							     		$('.DisclosedQtyclsModify').prop('disabled',true);
							     		$('.TriggerpriceclsModify').hide();
							     		$('.DTDValidityclsModify').hide();
							     	 }
							    	 if ($('.iocclsModify').hasClass('active') ) {
							      		$('.DisclosedQtyclsModify').prop('disabled',true);
							      		$('.TriggerpriceclsModify').hide();
							      		$('.DTDValidityclsModify').hide();
							      	 }
							    	 $(".gtcclsModify").hide();
							    	 $(".gtdclsModify").hide();
							    	 $(".gttclsModify").hide();
							    	
							    	 
							    		 $('.ValidityclsModify').show();
							    		 $('.CoverordertypeclsModify').hide();
							    	 
							    		 $("#lmtIdModify").show();
									   	 $("#mktIdModify").show();
									   	 $("#slIdModify").show();
									   	 $("#sl-mIdModify").show();
							   	 
							   	 	if ($('.lmtclsModify').hasClass('active') ) { //Price Type ( L or SL )
							   	 	$('.priceclsModify').prop('disabled',false);
									$('.DisclosedQtyclsModify').prop('disabled',false);     		
							 		$('.TriggerpriceclsModify').hide();
									 }
							   	 	if ($('.mktclsModify').hasClass('active') ) { //Price Type ( L or SL )
							   	 	$('.priceclsModify').prop('disabled',true);
									$('.DisclosedQtyclsModify').prop('disabled',false);     		
							 		$('.TriggerpriceclsModify').hide();
									 }
							   	 	if ($('.slclsModify').hasClass('active') ) { //Price Type ( L or SL )
							   	 	$('.TriggerpriceclsModify').show();
							  		$('.DisclosedQtyclsModify').prop('disabled',false);
									 }
									 if ($('.slmclsModify').hasClass('active') ) { //Price Type ( L or SL )
										 $('.NonCoverOrderDivclsModify').show();
								    		$('.DisclosedQtyclsModify').prop('disabled',false);
								    		$('.priceclsModify').prop('disabled',true);
								      		$('.TriggerpriceclsModify').show();
									 }
							   	 
							      }
								  
								//=======  Regular NSE END =======
								  				
								  
									//=======  AMO Order NSE START =======
								  
								  
								  if ($('.AfterMarketOrdclsModify').hasClass('active') ) {
										
									  
									     $(".dayclsModify").show();
									   	 $(".iocclsModify").show();
									   	 $(".gtcclsModify").hide();
									   	 $(".gtdclsModify").hide();
									   	 $(".gttclsModify").hide();
									   	 
										$('.priceclsModify').prop('disabled',false);
										 $('.CoverOrderrightsideDivclsModify').hide();
							        	  $('.NonCoverOrderDivclsModify').show();
							       	  $('.ProductsclsModify').show();
							       	  $('.BracketordertextboxclsModify').hide();
							       	
								        	$('.priceclsModify').prop('disabled',false);
								    		$('.DisclosedQtyclsModify').prop('disabled',false);
								    		$(".DisclosedQtyclsModify").show();
							       	
							     
							       	
							       	 if ($('.dayclsModify').hasClass('active') ) {
							        		$('.DisclosedQtyclsModify').prop('disabled',true);
							        		$('.TriggerpriceclsModify').hide();
							        		$('.DTDValidityclsModify').hide();
							        	 }
							       	 if ($('.iocclsModify').hasClass('active') ) {
							         		$('.DisclosedQtyclsModify').prop('disabled',true);
							         		$('.TriggerpriceclsModify').hide();
							         		$('.DTDValidityclsModify').hide();
							         	 }
							       	 if ($('.gtcclsModify').hasClass('active') ) {
							          		$('.DisclosedQtyclsModify').prop('disabled',true);
							          		$('.TriggerpriceclsModify').hide();
							          		$('.DTDValidityclsModify').hide();
							          	 }
							       	 
							       	if ($('.gtdclsModify').hasClass('active') ) {
							       		
							        		$('.DisclosedQtyclsModify').prop('disabled',true);
							        		$('.TriggerpriceclsModify').hide();
							        		
							        		$('.DTDValidityclsModify').show();
								     		$(".date_item").show();
								     		$("#datepickerbuysellModify").prop("disabled", false);
								     		
								     		  $('#datepickerbuysellModify').datepicker({
							   	  
										 	    dateFormat: 'd M yy',
										 	    minDate: new Date(),
										 	    defaultDate:  new Date(),
							 	    
								     		  	}).datepicker('setDate',new Date())
								     	
							        	
								  }
							 		else{
							 		      $(".date_item").hide();
							 		      $("#datepickerModify").prop("disabled", true);
							 		    }
							       	if ($('.gttclsModify').hasClass('active') ) {
							       		
							        		$('.DisclosedQtyclsModify').prop('disabled',true);
							        		$('.TriggerpriceclsModify').hide();
							        		$('.DTDValidityclsModify').hide();
							        		
							        	 }
							       	 
							       	 $('.ValidityclsModify').show();
							       	$('.CoverordertypeclsModify').hide();
							       	 
							       	 $("#lmtIdModify").show();
							      	 $("#mktIdModify").show();
							      	 $("#slIdModify").show();
							      	 $("#sl-mIdModify").show();
							      	 
							      	 //$(".lmtclsModify").addClass('active')

							   	 	if ($('.lmtclsModify').hasClass('active') ) { //Price Type ( L or SL )
							   	   	 	$('.priceclsModify').prop('disabled',false);
							   			$('.DisclosedQtyclsModify').prop('disabled',false);     		
							   	 		$('.TriggerpriceclsModify').hide();
							   			 }
							   	   	 	if ($('.mktclsModify').hasClass('active') ) { //Price Type ( L or SL )
							   	   	 	$('.priceclsModify').prop('disabled',true);
							   			$('.DisclosedQtyclsModify').prop('disabled',false);     		
							   	 		$('.TriggerpriceclsModify').hide();
							   	 	
							   			 }
							   	   	 	if ($('.slclsModify').hasClass('active') ) { //Price Type ( L or SL )
							   	   	 	$('.TriggerpriceclsModify').show();
							   	  		$('.DisclosedQtyclsModify').prop('disabled',false);
							   	  	
							   			 }
							   			 if ($('.slmclsModify').hasClass('active') ) { //Price Type ( L or SL )
							   				 $('.NonCoverOrderDivclsModify').show();
							   		    		$('.DisclosedQtyclsModify').prop('disabled',false);
							   		    		$('.priceclsModify').prop('disabled',true);
							   		      		$('.TriggerpriceclsModify').show();
							   		      	
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
										document.getElementById("NfoInstrumentNamehiddvalModify").value=jsonObject[i].properties.nfoinstrument_name;
										
										document.getElementById("nfoexpirydatehiddvalModify").value=nfoexpirymyDatedisplay;
										
										//Nfooption_type
										document.getElementById("nfooption_typehiddvalModify").value=jsonObject[i].properties.nfooption_type;
										
								  
								  //alert("nfooption_type : "+nfooption_type+" nfoinstrument_name : "+nfoinstrument_name); 
								  
								if(jsonObject[i].properties.nfoinstrument_name=="FUTIDX" || jsonObject[i].properties.nfoinstrument_name=="FUTSTK" ){
									if(nfooption_type=="XX"){
									if(dd<10) 
									{
										
										//	dd='0'+dd;
										// nfoexpirymyDate = dd.concat(monthNames[myDate.getMonth()]+twoDigitYear);						 
										 document.getElementById("stocklabelIdModify").innerHTML=jsonObject[i].properties.nfoSymbol+" "+"FUT"+" "+jsonObject[i].properties.nfoExchange;
										 document.getElementById("scripthiddvalModify").value=jsonObject[i].properties.nfoSymbol+"0"+nfoexpirymyDate+"F";
									}else {
										document.getElementById("stocklabelIdModify").innerHTML=jsonObject[i].properties.nfoSymbol+" "+"FUT"+" "+jsonObject[i].properties.nfoExchange;
										document.getElementById("scripthiddvalModify").value=jsonObject[i].properties.nfoSymbol+nfoexpirymyDate+"F";
									} 	
									}
								}
								
								else if (jsonObject[i].properties.nfoinstrument_name=="OPTIDX" || jsonObject[i].properties.nfoinstrument_name=="OPTSTK" ){
									
									
									var num=jsonObject[i].properties.nfostrike_price/100;				
									
									var DecimalmcxStrikePrice= num.toFixed(2);
									document.getElementById('decimalhiddvalModify').value=(Math.round(DecimalmcxStrikePrice * 100) / 100);
									
									var decimalVal=$("#decimalhiddvalModify").val();
									
									//document.getElementById('decimalhiddval').value=nfostrike_price;
									
									//document.getElementById('nfoTicksizehiddval').value=nfoTicksize;
									
									if(jsonObject[i].properties.nfooption_type=="PE"){
										
									
									if(dd<10) 
									{
									  //  dd='0'+dd;
										// nfoexpirymyDate = dd.concat(monthNames[myDate.getMonth()]+twoDigitYear);
									document.getElementById("stocklabelIdModify").innerHTML=jsonObject[i].properties.nfosymbol+" "+decimalVal+" "+jsonObject[i].properties.nfoExchange;
									document.getElementById("scripthiddvalModify").value=jsonObject[i].properties.nfosymbol+"0"+nfoexpirymyDate+"P"+decimalVal;
									}else{
										
										document.getElementById("stocklabelIdModify").innerHTML=jsonObject[i].properties.nfoSymbol+" "+decimalVal+" "+jsonObject[i].properties.nfoExchange;
										document.getElementById("scripthiddvalModify").value=jsonObject[i].properties.nfoSymbol+nfoexpirymyDate+"P"+decimalVal;
									}
									}
									else if(jsonObject[i].properties.nfooption_type=="CE"){
										
										
										if(dd<10) 
										{
										  //  dd='0'+dd;
											// nfoexpirymyDate = dd.concat(monthNames[myDate.getMonth()]+twoDigitYear);
										document.getElementById("stocklabelIdModify").innerHTML=jsonObject[i].properties.nfosymbol+" "+decimalVal+" "+jsonObject[i].properties.nfoExchange;
										document.getElementById("scripthiddvalModify").value=jsonObject[i].properties.nfosymbol+"0"+nfoexpirymyDate+"C"+decimalVal;
										}else{							
											document.getElementById("stocklabelIdModify").innerHTML=jsonObject[i].properties.nfoSymbol+" "+decimalVal+" "+jsonObject[i].properties.nfoExchange;
											document.getElementById("scripthiddvalModify").value=jsonObject[i].properties.nfoSymbol+nfoexpirymyDate+"C"+decimalVal;
										}					
										
									}
									
								}		
							}


							$('.CoverOrderrightsideDivclsModify').hide();
							$('.NonCoverOrderDivclsModify').show();
							$('.DisclosedQtyclsModify').prop('disabled',false);
							$(".DisclosedQtyclsModify").show();
						    $('.ProductsclsModify').show();
						    $('.BracketordertextboxclsModify').hide();
						    $('.ValidityclsModify').show();
						    $('.TriggerpriceclsModify').hide();
						   	$("#lmtIdModify").show();
							$("#mktIdModify").show();
							$("#slIdModify").show();
							$("#sl-mIdModify").show();
					  
					 
				$(".buysellcatgryModify li").on('click', function(){
						 
				       $(this).siblings().removeClass('active');
				       $(this).addClass('active')
				       
				   $('#datepicker').datepicker({
				   dateFormat: 'd M yy',
				   minDate: new Date(),
				   defaultDate:  new Date(),

				 }).datepicker('setDate',new Date());
				   
				 //buy-sell Order window
				     
				    
				      if ($('li.RegularOrdclsModify').hasClass('active') ) {
				    	  $('.CoverOrderrightsideDivclsModify').hide();
				     	  $('.NonCoverOrderDivclsModify').show();
				    	  $('.ProductsclsModify').show();
				    	  $('.BracketordertextboxclsModify').hide();     	
				    	
				    	 // $('.priceclsModify').prop('disabled',false);
						  $('.DisclosedQtyclsModify').prop('disabled',false);
						  $(".DisclosedQtyclsModify").show();
				    	
				    
				    	
				    	 if ($('li.dayclsModify').hasClass('active') ) {
				     		$('.DisclosedQtyclsModify').prop('disabled',true);
				     		$('.TriggerpriceclsModify').hide();
				     		$('.DTDValidityclsModify').hide();
				     	 }
				    	 if ($('li.iocclsModify').hasClass('active') ) {
				      		$('.DisclosedQtyclsModify').prop('disabled',true);
				      		$('.TriggerpriceclsModify').hide();
				      		$('.DTDValidityclsModify').hide();
				      	 }
				    	 if ($('li.gtcclsModify').hasClass('active') ) {
				       		$('.DisclosedQtyclsModify').prop('disabled',true);
				       		$('.TriggerpriceclsModify').hide();
				       		$('.DTDValidityclsModify').hide();
				       	 }
				    	 
				    	if ($('li.gtdclsModify').hasClass('active') ) {
				    		
				     		$('.DisclosedQtyclsModify').prop('disabled',true);
				     		$('.TriggerpriceclsModify').hide();
				     		
				     		$('.DTDValidityclsModify').show();
				     		$(".date_item").show();
				     		$("#datepickerbuysellModify").prop("disabled", false);
				     		
				     		  $('#datepickerbuysellModify').datepicker({
					  
						 	    dateFormat: 'd M yy',
						 	    minDate: new Date(),
						 	    defaultDate:  new Date(),
					    
				     		  	}).datepicker('setDate',new Date())
				     	
				      }
						else{
						      $(".date_item").hide();
						      $("#datepickerModify").prop("disabled", true);
						    }
				    	if ($('li.gttclsModify').hasClass('active') ) {
				    		
				     		$('.DisclosedQtyclsModify').prop('disabled',true);
				     		$('.TriggerpriceclsModify').hide();
				     		$('.DTDValidityclsModify').hide();
				     		
				     	 }
				    	 
				    		 $('.ValidityclsModify').show();
				    		 $('.CoverordertypeclsModify').hide();
				    	 
				    		 $("#lmtIdModify").show();
						   	 $("#mktIdModify").show();
						   	 $("#slIdModify").show();
						   	 $("#sl-mIdModify").show();
				   	 
				   	 	if ($('li.lmtclsModify').hasClass('active') ) { //Price Type ( L or SL )
				   	 	$('.priceclsModify').prop('disabled',false);
						$('.DisclosedQtyclsModify').prop('disabled',false);     		
				 		$('.TriggerpriceclsModify').hide();
						 }
				   	 	if ($('li.mktclsModify').hasClass('active') ) { //Price Type ( L or SL )
				   	 	$('.priceclsModify').prop('disabled',true);
						$('.DisclosedQtyclsModify').prop('disabled',false);     		
				 		$('.TriggerpriceclsModify').hide();
						 }
				   	 	if ($('li.slclsModify').hasClass('active') ) { //Price Type ( L or SL )
				   	 	$('.TriggerpriceclsModify').show();
				  		$('.DisclosedQtyclsModify').prop('disabled',false);
						 }
						 if ($('li.slmclsModify').hasClass('active') ) { //Price Type ( L or SL )
							 $('.NonCoverOrderDivclsModify').show();
					    		$('.DisclosedQtyclsModify').prop('disabled',false);
					    		$('.priceclsModify').prop('disabled',true);
					      		$('.TriggerpriceclsModify').show();
						 }
				   	 
				      }
				      else if ($('li.BracketOrdclsModify').hasClass('active') ) {
				    	  
				   		 $(".lmtclsModify").addClass('active')    		 
				   		 if ($('.slclsModify').hasClass('active') ) {
				   			 $('.slclsModify').siblings().removeClass('active');
				    	  }
				   		if ($('.lmtclsModify').hasClass('active') ) {
				  			 $('.lmtclsModify').siblings().removeClass('active');
				   	  }
				   	 
						   	 $(".DisclosedQtyclsModify").disabled = false;
						   	 $(".DisclosedQtyclsModify").show();
						   	 $('.ProductsclsModify').hide();
						   	 $('.priceclsModify').prop('disabled',false);
						   	 $('.BracketordertextboxclsModify').show();
						   	 $('.ValidityclsModify').hide();    	 
						   	 $('.CoverOrderrightsideDivclsModify').hide();
						   	 $('.NonCoverOrderDivclsModify').show();
						   	 $("#lmtIdModify").show();
						   	 $("#mktIdModify").hide();
						   	 $("#slIdModify").show();
						   	 $("#sl-mIdModify").hide();
						   	 $('.CoverordertypeclsModify').hide();
						   	 $('.TriggerpriceclsModify').hide();
						   	 
						   	 if ($('li.lmtclsModify').hasClass('active') ) { //Price Type ( L or SL )
						   		 $('.TriggerpriceclsModify').hide();
						 		 }
						 		 if ($('li.slclsModify').hasClass('active') ) { //Price Type ( L or SL )
						 			$('.TriggerpriceclsModify').show();
						 		 }
						 		
						      }      
				      
						      else if ($('li.CoverOrdclsModify').hasClass('active') ) {
						   	  // $(".DisclosedQtyclsModify").disabled = false;
						   	   $(".DisclosedQtyclsModify").hide();
						   	  $('.ProductsclsModify').hide();
						   	 
						   	 $('.BracketordertextboxclsModify').hide();
						   	 $('.ValidityclsModify').hide();
						   	 $('.TriggerpriceclsModify').show();
						   	
						   	 $('.CoverOrderrightsideDivclsModify').show();
						   	 $('.NonCoverOrderDivclsModify').hide();
						   	 $("#CoverOrderlmtIdModify").show();
						   	 $("#CoverOrdermktIdModify").show();
						   	 $("#CoverOrderslIdModify").hide();
						   	 $("#CoverOrdersl-mIdModify").hide();
						   	 
						   	 $(".lmtclsModify").addClass('active')
						   	  if ($('.mktclsModify').hasClass('active') ) {
						   			 $('.mktclsModify').siblings().removeClass('active');
						   			 $('.priceclsModify').prop('disabled',true);
				    	  }
				   		if ($('.lmtclsModify').hasClass('active') ) {
				  			 $('.lmtclsModify').siblings().removeClass('active');
				  			 $('.priceclsModify').prop('disabled',false);
				   	  }
				   	 
				   	 
				    }
				      else if ($('li.AfterMarketOrdclsModify').hasClass('active') ) {       	   
				         	
				   	   	  $('.CoverOrderrightsideDivclsModify').hide();
				        	  $('.NonCoverOrderDivclsModify').show();
				       	  $('.ProductsclsModify').show();
				       	  $('.BracketordertextboxclsModify').hide();
				       	
					        	$('.priceclsModify').prop('disabled',false);
					    		$('.DisclosedQtyclsModify').prop('disabled',false);
					    		$(".DisclosedQtyclsModify").show();
				       	
				     
				       	
				       	 if ($('.dayclsModify').hasClass('active') ) {
				        		$('.DisclosedQtyclsModify').prop('disabled',true);
				        		$('.TriggerpriceclsModify').hide();
				        		$('.DTDValidityclsModify').hide();
				        	 }
				       	 if ($('.iocclsModify').hasClass('active') ) {
				         		$('.DisclosedQtyclsModify').prop('disabled',true);
				         		$('.TriggerpriceclsModify').hide();
				         		$('.DTDValidityclsModify').hide();
				         	 }
				       	 if ($('.gtcclsModify').hasClass('active') ) {
				          		$('.DisclosedQtyclsModify').prop('disabled',true);
				          		$('.TriggerpriceclsModify').hide();
				          		$('.DTDValidityclsModify').hide();
				          	 }
				       	 
				       	if ($('.gtdclsModify').hasClass('active') ) {
				       		
				        		$('.DisclosedQtyclsModify').prop('disabled',true);
				        		$('.TriggerpriceclsModify').hide();
				        		$('.DTDValidityclsModify').show();
				        		
					     		$(".date_item").show();
					     		$("#datepickerbuysellModify").prop("disabled", false);
					     		
					     		  $('#datepickerbuysellModify').datepicker({
				   	  
							 	    dateFormat: 'd M yy',
							 	    minDate: new Date(),
							 	    defaultDate:  new Date(),
				 	    
					     		  	}).datepicker('setDate',new Date())
					     	 
				        	 }
				      		
						else{
						      $(".date_item").hide();
						      $("#datepickerModify").prop("disabled", true);
						    }
				       	if ($('.gttclsModify').hasClass('active') ) {
				       		
				        		$('.DisclosedQtyclsModify').prop('disabled',true);
				        		$('.TriggerpriceclsModify').hide();
				        		$('.DTDValidityclsModify').hide();
				        		
				        	 }
				       	 
				       	 $('.ValidityclsModify').show();
				       	$('.CoverordertypeclsModify').hide();
				       	 
				       	 $("#lmtIdModify").show();
				      	 $("#mktIdModify").show();
				      	 $("#slIdModify").show();
				      	 $("#sl-mIdModify").show();
				      	 
				      	 //$(".lmtclsModify").addClass('active')

				   	 	if ($('.lmtclsModify').hasClass('active') ) { //Price Type ( L or SL )
				   	   	 	$('.priceclsModify').prop('disabled',false);
				   			$('.DisclosedQtyclsModify').prop('disabled',false);     		
				   	 		$('.TriggerpriceclsModify').hide();
				   			 }
				   	   	 	if ($('.mktclsModify').hasClass('active') ) { //Price Type ( L or SL )
				   	   	 	$('.priceclsModify').prop('disabled',true);
				   			$('.DisclosedQtyclsModify').prop('disabled',false);     		
				   	 		$('.TriggerpriceclsModify').hide();
				   	 	
				   			 }
				   	   	 	if ($('.slclsModify').hasClass('active') ) { //Price Type ( L or SL )
				   	   	 	$('.TriggerpriceclsModify').show();
				   	  		$('.DisclosedQtyclsModify').prop('disabled',false);
				   	  	
				   			 }
				   			 if ($('.slmclsModify').hasClass('active') ) { //Price Type ( L or SL )
				   				 $('.NonCoverOrderDivclsModify').show();
				   		    		$('.DisclosedQtyclsModify').prop('disabled',false);
				   		    		$('.priceclsModify').prop('disabled',true);
				   		      		$('.TriggerpriceclsModify').show();
				   		      	
				   			 }
				      	 
				         }
				       
				   })
				  
				  //=== Required margin Function === 
				//   SpanCalculationFunctionModify();


				   document.getElementById("buyIdModify").addEventListener("click",PlaceOrderbuyfunModify);    
				   document.getElementById("sellIdModify").addEventListener("click",PlaceOrdersellfunModify); 
				   document.getElementById("TriggerpriceIdModify").addEventListener("keyup",TriggerPriceFunctionModify);
				   document.getElementById("priceIdModify").addEventListener("keyup",myPriceFunctionModify);
				   document.getElementById("DiscquantityIdModify").addEventListener("keyup",mydiscqtyFunctionModify);
				   
				   
				   	
					
					
					//END buy/sell
		   
		   
	        		


	        } //for loop end
			
			
		},
		error:function(){
		//	alert("getMarketwatchListById Error");
			
			}	
	});*/
	
	
}


   
function validateFloatKeyPress2Modify(el, evt) {
	
	var priceVal=$('#priceIdModify').val();
	
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
$('#priceIdModify').on('change',function(){	
	  
	var priceVal=$('#priceIdModify').val();
	var exchangeType=$('#stockhiddvalModify').val();
	

	//===== MCX Segment ======
	if(exchangeType=="MCX"){	
		
	value = document.getElementById("priceIdModify").step =priceVal;				    
	mcxTicksize=$("#mcxticksizehiddvalModify").val();
	
	
	document.getElementById("priceIdModify").step =mcxTicksize;
	//Number.parseFloat(mcxTicksize).toFixed(2)
	
	if($(this).val() > value){
		  var upTagvalue=parseInt(value)+mcxTicksize;
		  ocument.getElementById("priceIdModify").value = upTagvalue;
		  //document.getElementById("priceId").value =(Math.round(upTagvalue * 100) / 100).toFixed(3);
		  //(Math.round(upTagvalue * 100) / 100).toFixed(2)
	}else if($(this).val() < value){
		  var downTagvalue=parseInt(value)-mcxTicksize;
		  document.getElementById("priceIdModify").value =downTagvalue;
		  //document.getElementById("priceId").value =(Math.round(downTagvalue * 100) / 100).toFixed(3);
	}

	}				    	
	//===== NSE Segment ======
	else if(exchangeType=="NSE"){	
	    	value = document.getElementById("priceIdModify").step =priceVal;				    
	      	 nseTicksize=$("#nseticksizehiddvalModify").val();
	      
	     document.getElementById("priceIdModify").step =nseTicksize;	
	     
	     if($(this).val() > value){
	    	  var upTagvalue=parseInt(value)+parseInt(nseTicksize);
	    	  document.getElementById("priceIdModify").value =upTagvalue.toFixed(2);
	    	 // document.getElementById("priceId").value =(Math.round(upTagvalue * 100) / 100).toFixed(3);
	    	  
	      }else if($(this).val() < value){
	    	  var downTagvalue=parseInt(value)-parseInt(nseTicksize);
	    	 document.getElementById("priceIdModify").value =downTagvalue.toFixed(2);
	    	  //document.getElementById("priceId").value =(Math.round(downTagvalue * 100) / 100).toFixed(3);
	      }
	     }	
	else if(exchangeType=="NFO"){	
    	value = document.getElementById("priceIdModify").step =priceVal;				    
      	 nfoTicksize=$("#nfoTicksizehiddvalModify").val();
      
     document.getElementById("priceIdModify").step =nfoTicksize;	
     
     if($(this).val() > value){
    	  var upTagvalue=parseInt(value)+parseInt(nfoTicksize);
    	  document.getElementById("priceIdModify").value =upTagvalue.toFixed(2);
    	  //document.getElementById("priceId").value =(Math.round(upTagvalue * 100) / 100).toFixed(3);
    	  //(Math.round(num1 * 100) / 100).toFixed(2);
      }else if($(this).val() < value){
    	  var downTagvalue=parseInt(value)-parseInt(nfoTicksize);
    	 document.getElementById("priceIdModify").value =downTagvalue.toFixed(2);
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

   function TriggerPriceFunctionModify(){
   	    var TriggerPriceVAL=$("#TriggerpriceIdModify").val();
         var PriceVAL=$("#priceIdModify").val();       
        	 if ( $('li.RegularOrdclsModify').hasClass('active') ) {       
       		if ( $('li.slclsModify').hasClass('active') ) {
       			
       	  if(Number(TriggerPriceVAL)>Number(PriceVAL)){
       		//  document.getElementById("TriggerPricehiddenErrorId").value='TriggerPriceError';
       		  $(".TriggerPriceErrorclsModify").show();
       		  $("#TriggerPriceErrorIdModify").show();
       		  document.getElementById("buyIdModify").disabled = true;	
       		  document.getElementById("sellIdModify").disabled = true;
           }
           else if(Number(PriceVAL)>=Number( TriggerPriceVAL) || Number(PriceVAL)>Number(TriggerPriceVAL)){
        	   $(".TriggerPriceErrorclsModify").hide();
        	   $("#TriggerPriceErrorIdModify").hide();
         	document.getElementById("buyIdModify").disabled = false;
   		document.getElementById("sellIdModify").disabled = false;
           }
       	  }
         }
   	  
   }
   
   /**
    * Req.Margin Calculation from Qty Increase /decrease Event
    */
 //  var classname = document.getElementsByClassName("QtyEventClassModify");

 //  classname.addEventListener('click', SpanCalculationFunctionModify(), false);
   
 	
   function SpanCalculationFunctionModify(){
	  
	   var buyqty=$("#QtyIdModify").val();
	   var exch=$("#stockhiddvalModify").val();	   
	   var price=$("#priceIdModify").val();
	   var symbolname=$("#displaynamehiddvalModify").val();
	   var Strikeprice=$("#decimalhiddvalModify").val();
	  // alert("Strikeprice : "+Strikeprice)
	   //var symbolname=$("#stocklabelhiddenId").val();
	   //var symbolname=$("#scripthiddval").val();
	   var optt="",strprc="",optt="",instrumentname="",expirydate="",prd="";
	   
	   
	    if(exch=="MCX"){
		    instrumentname=$("#mcxInstrumentNamehiddvalModify").val();
		    //var mcxOptionType=$("#mcxOptionTypehiddval").val();
		    expirydate=$("#mcxexpirydatehiddvalModify").val();
		    
		   if ($('li.nrmlclsModify').hasClass('active')){    		
    			prd="M";
    		}
    		if ($('li.misclsModify').hasClass('active')){    			
    			prd="I";
    		}
    		
    		if(instrumentname=="OPTFUT" || instrumentname=="OPTCOM"){  
    			
    			strprc=Strikeprice;
    			optt=$("#mcxOptionTypehiddvalModify").val();
    			
    		}
    		
    		  $.ajax({
    	    		type :'POST',
    	    		url  :'SpanCalcModify',		
    	    		data :"prd="+prd+"&exch="+exch+"&symbolname="+symbolname+"&instrumentname="+instrumentname+
    	    		"&expirydate="+expirydate+"&buyqty="+buyqty+"&strprc="+strprc+"&optt="+optt,
    	    		
    	    		success:function(JsonObject){    			
    	    			//alert("Req. Margin : "+JsonObject.span_trade);    	     		
    	    			if(JsonObject.stat=="Ok"){    				
    	    				document.getElementById("ReqMarginspanIdModify").innerHTML =JsonObject.span_trade;
    	    			}
    	    			else if(JsonObject.stat=="Not_Ok"){    				
    	    				document.getElementById("ReqMarginspanIdModify").innerHTML ="0.00";
    	    			}
    	    		},
    	    		error:function(){
    	    			alert("PlaceOrderModify Error");
    	    		
    	    		}	
    	    	});
    		
	   }
	
	   
	   else if(exch=="NFO"){		   
		   instrumentname=$("#NfoInstrumentNamehiddvalModify").val();
		   expirydate=$("#nfoexpirydatehiddvalModify").val();
		   if ($('li.nrmlclsModify').hasClass('active')){
    			prd="M";
    		}
    		if ($('li.misclsModify').hasClass('active')){    			
    			prd="I";
    		}
    		if(instrumentname=="OPTIDX" || instrumentname=="OPTSTK"){   	
    			strprc=Strikeprice;
    			optt=$("#nfooption_typehiddvalModify").val();
    		//alert("strprc : "+strprc+" optt : "+optt);	
    		}
    		
    		  $.ajax({
    	    		type :'POST',
    	    		url  :'SpanCalcModify',		
    	    		data :"prd="+prd+"&exch="+exch+"&symbolname="+symbolname+"&instrumentname="+instrumentname+
    	    		"&expirydate="+expirydate+"&buyqty="+buyqty+"&strprc="+strprc+"&optt="+optt,
    	    		
    	    		success:function(JsonObject){    			
    	    			//alert("Req. Margin : "+JsonObject.span_trade);    	     		
    	    			if(JsonObject.stat=="Ok"){    				
    	    				document.getElementById("ReqMarginspanIdModify").innerHTML =JsonObject.span_trade;
    	    			}
    	    			else if(JsonObject.stat=="Not_Ok"){    				
    	    				document.getElementById("ReqMarginspanIdModify").innerHTML ="0.00";
    	    			}
    	    		},
    	    		error:function(){
    	    			alert("PlaceOrderModify Error");
    	    		
    	    		}	
    	    	});
    		  
	   }
	   if(exch=="NSE"){
		   	   
		   document.getElementById("ReqMarginspanIdModify").innerHTML =Number(buyqty)*Number(price);
   		}
	   
   }
   
   
   
 	//Regular Order When you Click SL Order Type Validation for Price
 	 function myPriceFunctionModify(){
 		 
 		 var PriceVAL=$("#priceIdModify").val();
 		  var TriggerPriceVAL=$("#TriggerpriceIdModify").val();
 	   	  
 	   	 if ( $('li.RegularOrdclsModify').hasClass('active') ) { 
 	    	 
 	   		if ( $('li.slclsModify').hasClass('active') ) {
 		  if(Number(TriggerPriceVAL)>Number(PriceVAL)){
 			
 			  //document.getElementById("TriggerPricehiddenErrorId").value='TriggerPriceError';
 			  $(".TriggerPriceErrorclsModify").show();
       		  $("#TriggerPriceErrorIdModify").show();
 			  document.getElementById("buyIdModify").disabled = true;	
 			  document.getElementById("sellIdModify").disabled = true;
 	   }
 	   else if(Number(PriceVAL)>=Number( TriggerPriceVAL) || Number(PriceVAL)>Number(TriggerPriceVAL)){
 		   $(".TriggerPriceErrorclsModify").hide();
    	   $("#TriggerPriceErrorIdModify").hide();
 	 	 document.getElementById("buyIdModify").disabled = false;
 			document.getElementById("sellIdModify").disabled = false;
 	   }
 	   	  }
 	     }
 	 }
   
 	 
 	 

 	 function mydiscqtyFunctionModify(){
 	     
 	 	   var Discquantity = document.getElementById("DiscquantityIdModify").value;
 	 	   var Quantity = document.getElementById("QtyIdModify").value;
 	 	   
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
 	 		   
 	 		 if ($('li.nrmlclsModify').hasClass('active')){	    			
	    			prd="M";
	    		}
 	 		 if ($('li.cncclsModify').hasClass('active')){	    	    			
	    			prd="C";
	    		}
				
				if ($('li.misclsModify').hasClass('active')){	    	    			
	    			prd="I";
	    		}
				
 	 		
 	 		 $("#NrmlIdModify").prop("disabled",true);
 	 		 $('#GTTlabelIdModify').show();
 	 		 
 	 	    var perVal = Number(Quantity /100 ) * Number(ValueTenPer);
 	 	  
 	 	   if(Number(Discquantity) === Number(Zero)){
 	 		  
 	 		  $(".DiscQuanErrorclsModify").hide();
 	 		  $("#DiscQuanErrorIdModify").hide();
 	  		  document.getElementById("buyIdModify").disabled = false;	
 	  		  document.getElementById("sellIdModify").disabled = false;
 	 	   }

 	 	  else if(Number(Discquantity)<Number(perVal) ||  Number(Discquantity)>Number(Quantity))
 	 	  		{
 	 		//	document.getElementById("DiscQuanNSEhiddenErrorId").value='DiscQuanNSEError';
 	 		  $(".DiscQuanErrorclsModify").show();
 	 		  $("#DiscQuanErrorIdModify").show();
 	 		
 	 		  document.getElementById("buyIdModify").disabled = true;	
 	 		  document.getElementById("sellIdModify").disabled = true;
 	 	}
 	 	  else if(Number(Discquantity)>=Number(perVal) ||  Number(Discquantity)>Number(Quantity))
 	 	{
 	 		 $(".DiscQuanErrorclsModify").hide();
 	 		  $("#DiscQuanErrorIdModify").hide();
 	 		 
 	 		  document.getElementById("buyIdModify").disabled = false;	
 	 		  document.getElementById("sellIdModify").disabled = false;
 	 	}
 	 	 }
 	 	 
 	 	 if(exchangeType==='MCX'){ 				//MCX
 	 		 
 	 		 $("#cncIdModify").prop("disabled",true);
 	 		 $('#gttIdModify').hide();	
 	 		 
 	 		 var perVal = Number(Quantity /100 ) * Number(ValueTwentyFivePer); 
 	 		 if(Number(Discquantity) === Number(Zero)){
 	 			 $(".DiscQuanErrorclsModify").hide();
 		 		  $("#DiscQuanErrorIdModify").hide();
 	 	    		  document.getElementById("buyIdModify").disabled = false;	
 	 	    		  document.getElementById("sellIdModify").disabled = false;
 	 		  }
 	 		 
 	 		 else  if(Number(Discquantity)<Number(perVal) ||  Number(Discquantity)>Number(Quantity))
 	 			{
 	 				// document.getElementById("DiscQuanMCXhiddenErrorId").value='DiscQuanMCXError';
 	 			  $(".DiscQuanErrorclsModify").show();
 		 		  $("#DiscQuanErrorIdModify").show();
 	 	    		  document.getElementById("buyIdModify").disabled = true;	
 	 	    		  document.getElementById("sellIdModify").disabled = true;
 	 			}
 	 			  else if(Number(Discquantity)>=Number(perVal) ||  Number(Discquantity)>Number(Quantity))
 	 			{ 				 
 	 				  $(".DiscQuanErrorclsModify").hide();
 			 		  $("#DiscQuanErrorIdModify").hide();			 		  
 	 	    		  document.getElementById("buyIdModify").disabled = false;	
 	 	    		  document.getElementById("sellIdModify").disabled = false;
 	 			}
 	 		  
 	 	 }
 	 	 
 	 } 
 	 
 	 
 	 function PlaceOrderbuyfunModify(){
 	    
 	    	var web="WEB";
 	    	var MCX="MCX";
 	    	var NSE="NSE";
 	    	//var DiscQuanErrorTag= document.getElementById("DiscQuanhiddenErrorId").value;		
 	    	
 	    		
 	    	if ( $('li.RegularOrdclsModify').hasClass('active') ) {
 	     		
 	    		
 	     		//var prd="C";
 	     		var Ret;
 		      		if ($('li.dayclsModify').hasClass('active')){
 		      		Ret="DAY";      		
 		      		}      		
 	    			if ($('li.iocclsModify').hasClass('active')){
 	    			Ret="IOC";
 	    			}
 	    			if ($('li.gtcclsModify').hasClass('active')){      		
 	    			 Ret="GTC";
 	    			}
 	    			if ($('li.gtdclsModify').hasClass('active')){       		
 	    			 Ret="GTD";
 	    			}
 	    			if ($('li.gttclsModify').hasClass('active')){       		
 	    			 Ret="GTT";
 	    			}
 	    		if(Ret==="DAY" || Ret==="IOC" || Ret==="GTT" ){
 	    			
 	    		
 	    		var sprdtali="CNC:CNC||MIS:MIS||NRML:NRML";	
 	    		var s_prdt_ali=sprdtali;
 	    	//	var uid=$("#UserIDModify").val();
 	    	//	var actid=$("#UserIDModify").val();
 	    		
 	    		var Ttranstype='B';
 	    		
 	    		var scriptName=$("#scriptNamehiddvalModify").val(); 	    		
 	    		var displayName=$("#displaynamehiddvalModify").val();
 	    		//var prctyp="LMT"; //Price type (from DefaultLogin/ NormalLogin rest api)
 	    		
 	    		var prctyp;
 	    		if ($('li.lmtclsModify').hasClass('active')){ //Price Type ( L or SL )
 	    			  prctyp="LMT";
 	    		 }
 	    		if ($('li.mktclsModify').hasClass('active')){ //Price Type ( L or SL )
 	    			  prctyp="MKT"; 
 	    		 }
 	    		if ($('li.slclsModify').hasClass('active')){ //Price Type ( L or SL )
 	    			  prctyp="SL"; 
 	    		 }
 	    		if ($('li.slmclsModify').hasClass('active')){ //Price Type ( L or SL )
 	    			  prctyp="SL-M"; 
 	    		 }
 	    		//alert("prctyp : "+prctyp);
 	    	
 	    		$(".ProductsclsModify").show();
 	    		var qty=$("#QtyIdModify").val();
 	    		 
 	    		 var discqtyVAL=$("#DiscquantityIdModify").val();    		
 	    		 var TsymVAL=$("#scripthiddvalModify").val();
 	    		 var exchangeType=$("#stockhiddvalModify").val();
 	    		 
 	    		 
 	    		//  alert("TsymVAL::"+TsymVAL+"exchangeType:::"+exchangeType);
 	    		 
 	    		 if(exchangeType==='MCX'){ //MCX
 	    			 
 	    		var exch=exchangeType;
 	    		var discqty=discqtyVAL;
 	    		var Tsym=TsymVAL;
 	    		
 	    		
 	    		if ($('li.nrmlclsModify').hasClass('active')){
 	    			var Pcode="NRML";
 	    			prd="M";
 	    		}
 	    		if ($('li.misclsModify').hasClass('active')){
 	    			var Pcode="MIS";
 	    			prd="I";
 	    		}
 	    		
 	    		 }
 	    		 if(exchangeType==='NSE'){ //NSE
 	    			
 	    				var exch="NSE";
 	    				var discqty=discqtyVAL;
 	    				var Tsym=TsymVAL;
 	    				if ($('li.nrmlclsModify').hasClass('active')){ 	    	    			
 	    	    			prd="M";
 	    	    		}
 	    				if ($('li.cncclsModify').hasClass('active')){	    	    			
 	    	    			prd="C";
 	    	    		}
 	    				
 	    				if ($('li.misclsModify').hasClass('active')){	    	    			
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
 	    		
 	    		var PriceVAL=$("#priceIdModify").val();  
 	    		if(PriceVAL==""){
 	    			PriceVAL="0";    			
 	    		}
 	    		
 	    		
 	    		var TriggerpriceVAL=$('#TriggerpriceIdModify').val();  //(TrigPrice Send as 0 for default)
 	    		
 	    		var TrigPrice;
 	    		var Price;
 	    		if ($('li.lmtclsModify').hasClass('active')){
 	    			TrigPrice="0";
 	    			Price=PriceVAL;
 	    		}
 	    		if ($('li.mktclsModify').hasClass('active')){
 	    			TrigPrice="0";
 	    			Price="0";
 	    		}
 	    		if ($('li.slclsModify').hasClass('active')){
 	    			TrigPrice=TriggerpriceVAL;
 	    			Price=PriceVAL;
 	    		}
 	    		if ($('li.slmclsModify').hasClass('active')){
 	    			TrigPrice=TriggerpriceVAL;
 	    			Price="0";
 	    		}
 	    		
 	    		
 	    		var DateDays="NA"; //(DateDays Send as NA for default)
 	    		
 	    		var AMO;
 	    		
 	    		if ($('li.AfterMarketOrdclsModify').hasClass('active')){	
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
 	    		url :'PlaceOrderModify',		
 	    		data:"s_prdt_ali="+s_prdt_ali+"&Tsym="+Tsym+"&exch="+exch+"&Ttranstype="+Ttranstype+"&Ret="+Ret+"&prctyp="+prctyp+"&qty="+qty+"&discqty="+discqty+"&prd="+prd+
 	    		"&MktPro="+MktPro+"&Price="+Price+"&TrigPrice="+TrigPrice+"&Pcode="+Pcode+"&DateDays="+DateDays+"&AMO="+AMO+
 	    		"&PosSquareFlg="+PosSquareFlg+"&MinQty="+MinQty+"&orderSource="+orderSource+"&naicCode="+naicCode+
 	    		"&ltpOratp="+ltpOratp+"&SqrOffAbsOrticks="+SqrOffAbsOrticks+"&SqrOffvalue="+SqrOffvalue+"&SLAbsOrticks="+
 	    		SLAbsOrticks+"&SLvalue="+SLvalue+"&trailingSL="+trailingSL+"&tSLticks="+tSLticks+"&userTag="+userTag
 	    		+"&scriptName="+scriptName+"&displayName="+displayName,
 	    		
 	    		success:function(JsonObject){
 	    		
 	    			alert("JsonObject Modify: "+JsonObject);
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
     			
     			var uid=$("#UserIDModify").val();
     			var actid=$("#UserIDModify").val();
     			var Ttranstype='B';
     			
     			if ($('li.gtcclsModify').hasClass('active')){
     				Ret="GTC";
     				}
     			if ($('li.gtdclsModify').hasClass('active')){
     				Ret="GTD";
     				}
     			
     			var prctyp;
     			var PriceVAL=$("#priceIdModify").val();
     			if(PriceVAL==""){
         			PriceVAL="0";    			
         		}
     			var Price;
     			if ($('li.lmtclsModify').hasClass('active')){ //Price Type ( L or SL )
     				  prctyp="LMT";
     				  Price=PriceVAL;
     			 }
     			if ($('li.mktclsModify').hasClass('active')){ //Price Type ( L or SL )
     				  prctyp="MKT";
     				  Price="0";
     			 }
     			if ($('li.slclsModify').hasClass('active')){  //Price Type ( L or SL )
     				  prctyp="SL";
     				  Price=PriceVAL;
     			 }
     			if ($('li.slmclsModify').hasClass('active')){ //Price Type ( L or SL )
     				  prctyp="SL-M";
     				  Price="0";
     			 }			 
     			
     			 var qty=$("#QtyIdModify").val();
     			 var exchangeType=$("#stockhiddvalModify").val();
     	  	 	 var TsymVAL=$("#scripthiddvalModify").val();
     	  	 	 
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
     			if ($('li.cncclsModify').hasClass('active')){
     				Pcode="CNC";
     			}
     			if ($('li.nrmlclsModify').hasClass('active')){
     				Pcode="NRML";
     			}
     			if ($('li.misclsModify').hasClass('active')){
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
 	    			url :'PlaceGTDOrderModify',		
 	    			data:"s_prdt_ali="+s_prdt_ali+"&Tsym="+Tsym+"&exch="+exch+"&Ttranstype="+Ttranstype+"&Ret="+Ret+"&prctyp="+prctyp+"&qty="+qty+"&Branch="+Branch+
 	    			"&Broker="+Broker+"&Price="+Price+"&userTag="+userTag+"&Pcode="+Pcode+"&DateDays="+DateDays+
 	    			"&orderSource="+orderSource+"&naicCode="+naicCode,
 	    			success:function(JsonObject){
 	    			
 	    			/*var JsonObject= JSON.parse(response);
 	    			var values= Object.values(JsonObject);*/
 	    			var result=values[1];
 	    			var stat= values[0];
 	    			if(stat==='Ok'){
 	    				$('#BuyOrderNumberModelIdModify').modal('show'); 		
 	    				$('#buyOrderNumbersModify').html(result);
 	    				$('#myModalModify').modal('hide');
 	    			}
 	    			else if(stat==='Not_Ok'){
 	    				alert("Error :"+result);
 	    				$('#myModalModify').modal('show');
 	    			}
 	    		
 	    			},
 	    			error:function(){
 	    				alert("PlaceGTDOrderModify Error");
 	    			
 	    				}	
 	    			});			
 	    		}	
 	    	}
 	    	
 	    	else if ( $('li.BracketOrdclsModify').hasClass('active') ) {	
 	 		
 	 		
 	 		var sprdtali="CNC:CNC||MIS:MIS||NRML:NRML";	
 			var s_prdt_ali=sprdtali;			 
 			 var Ttranstype='B';
 			 var qty=$("#QtyIdModify").val();
 			
 			//var actid=$("#UserIDModify").val();
 			// var uid=$("#UserIDModify").val();
 		
 			 var Ret="DAY";
 			var scriptName=$("#scriptNamehiddvalModify").val(); 	    		
	    	var displayName=$("#displaynamehiddvalModify").val();
	    		
 			 var Price=$("#priceIdModify").val();	
 			 if(Price==""){
 				 Price="0";    			
 	 		}
 	 		// var TokenNo=$("#tokenhiddval").val();
 			
 			 var discqtyVAL=$("#DiscquantityIdModify").val();
 			 var exchangeType=$("#stockhiddvalModify").val();
 			
 			var TsymVAL=$("#scripthiddvalModify").val();
 			 
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
 			 var SqrOffvalue=$("#TargetAbsolutequanIdModify").val();
 			 var SLAbsOrticks="Absolute";              				//Stop Loss type ( Absolute or Ticks )
 			 var SLvalue=$("#stoplossAbsolutequanIdModify").val();
 			 var TargetstoplossVAL=$("#TargetstoplossquanIdModify").val();
 			
 			 
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
 			
 			if ($('li.lmtclsModify').hasClass('active') ) { //Price Type ( L or SL )
 				 var prctyp="LMT";
 				 var TrigPrice="0";
 			 }
 			if ($('li.slclsModify').hasClass('active') ) { //Price Type ( L or SL )
 				 var prctyp="SL"; 
 				 var TrigPrice=$("#TriggerpriceIdModify").val();
 			 }
 			
 			$.ajax({
 				
 				type : 'POST',
 				url  : 'PlaceOrderModify',
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
 							$('#BuyOrderNumberModelIdModify').modal('show'); 		
 							$('#buyOrderNumbersModify').html(result);
 							$('#myModalModify').modal('hide');
 						}
 						else if(stat==='Not_Ok'){
 							alert("Error :"+result);
 							$('#myModalModify').modal('show');
 						} 					
 						},
 					error:function(){
 						alert("BracketOrderModify Error");
 					
 					}	
 			});
 			
 		}
 		
 	    	
 	    	 	else if ( $('li.CoverOrdclsModify').hasClass('active') ) {		
 	     		
 	     		
 	    		
 	    		var sprdtali="CNC:CNC||MIS:MIS||NRML:NRML";	
 	    		var s_prdt_ali=sprdtali;
 	    		
 	    	//	var uid=$("#UserIDModify").val();
 	    	//	var actid=$("#UserIDModify").val();
 	    		var prctyp;
 	    		var scriptName=$("#scriptNamehiddvalModify").val(); 	    		
 	    		var displayName=$("#displaynamehiddvalModify").val();
 	    		
 	    		if ( $('li.lmtclsModify').hasClass('active') ){  //Price Type ( L or SL )
 	    			  prctyp="LMT";
 	    		 }
 	    		if ( $('li.mktclsModify').hasClass('active') ){ //Price Type ( L or SL )	    			
 	    			  prctyp="MKT"; 
 	    		 }
 	    		
 	    		var qty=$("#QtyIdModify").val();
 	    		var discqtyVAL=$("#DiscquantityIdModify").val();    		
 	     	 	var TsymVAL=$("#scripthiddvalModify").val();
 	    		var exchangeType=$("#stockhiddvalModify").val();
 	    		
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
 	    		var Price=$("#priceIdModify").val();
 	    		if(Price==""){
 	    			Price="0";    			
 	    		}
 	    		//var StopLossVAL= $('#CoStoplossId').val();
 	    		var StopLossVAL=$("#TriggerpriceIdModify").val();
 	    		
 	    		if(StopLossVAL>0){
 	    			var TrigPrice=StopLossVAL;
 	    		}else{
 	    		var TrigPrice="0"; //(TrigPrice Send as 0 for default)
 	    		}
 	    		var Pcode="CO"; // need to check
 	    		var DateDays="NA"; //(DateDays Send as NA for default)
 	    		
 	    		
 	    			if ( $('li.AfterMarketOrdclsModify').hasClass('active') ){
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
 	    		url :'PlaceOrderModify',		
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
 	    			$('#BuyOrderNumberModelIdModify').modal('show'); 		
 	    			$('#buyOrderNumbersModify').html(result);
 	    			$('#myModalModify').modal('hide');
 	    		}
 	    		else if(stat==='Not_Ok'){
 	    			alert("Error :"+result);
 	    			$('#myModalModify').modal('show');
 	    		}
 	    		
 	    		
 	    		},
 	    		error:function(){
 	    			alert("PlaceOrderModify Error");
 	    		
 	    		}	
 	    	});
 	    	
 	    	}
 	    		//else if($("input:radio[name='AfterMarketOrdId']").is(":checked")) { 
 	    		else if ($('li.AfterMarketOrdclsModify').hasClass('active')) {
 	     		
 	    			
 	    			
 	 	     		//var prd="C";
 	 	     		var Ret;
 	 		      		if ($('li.dayclsModify').hasClass('active')){
 	 		      		Ret="DAY";      		
 	 		      		}      		
 	 	    			if ($('li.iocclsModify').hasClass('active')){
 	 	    			Ret="IOC";
 	 	    			}
 	 	    			if ($('li.gtcclsModify').hasClass('active')){      		
 	 	    			 Ret="GTC";
 	 	    			}
 	 	    			if ($('li.gtdclsModify').hasClass('active')){       		
 	 	    			 Ret="GTD";
 	 	    			}
 	 	    			if ($('li.gttclsModify').hasClass('active')){       		
 	 	    			 Ret="GTT";
 	 	    			}
 	 	    		if(Ret==="DAY" || Ret==="IOC" ){
 	 	    			
 	 	    		
 	 	    		var sprdtali="CNC:CNC||MIS:MIS||NRML:NRML";	
 	 	    		var s_prdt_ali=sprdtali;
 	 	    	//	var uid=$("#UserIDModify").val();
 	 	    	//	var actid=$("#UserIDModify").val();
 	 	    		
 	 	    		var Ttranstype='B';
 	 	    		
 	 	    		var scriptName=$("#scriptNamehiddvalModify").val(); 	    		
 	 	    		var displayName=$("#displaynamehiddvalModify").val();
 	 	    		
 	 	    	
 	 	    		$(".ProductsclsModify").show();
 	 	    		var qty=$("#QtyIdModify").val();
 	 	    		 
 	 	    		 var discqtyVAL=$("#DiscquantityIdModify").val();    		
 	 	    		 var TsymVAL=$("#scripthiddvalModify").val();
 	 	    		 var exchangeType=$("#stockhiddvalModify").val();
 	 	    		  
 	 	    		 var prd;
 	 	    		 
 	 	    		 if(exchangeType==='MCX'){ //MCX
 	 	    			 
 	 	    		var exch=exchangeType;
 	 	    		var discqty=discqtyVAL;
 	 	    		var Tsym=TsymVAL;	 	    		
 	 	    		
 	 	    		if ($('.nrmlclsModify').hasClass('active')){
 	 	    			var Pcode="NRML";
 	 	    			prd="M";
 	 	    		}
 	 	    		if ($('.misclsModify').hasClass('active')){
 	 	    			var Pcode="MIS";
 	 	    			prd="I";
 	 	    		}
 	 	    		
 	 	    		 }
 	 	    		 if(exchangeType==='NSE'){ //NSE 	 	    			
 	 	    				var exch="NSE";
 	 	    				var discqty=discqtyVAL;
 	 	    				var Tsym=TsymVAL;
 	 	    				
 	 	    				if ($('li.nrmlclsModify').hasClass('active')){ 	 	   	    			
 	 	   	    			prd="M";
 	 	    				}
 	 	    				if ($('.cncclsModify').hasClass('active')){	    	    			
 	 	    	    			prd="C";
 	 	    	    		} 	 	    				
 	 	    				if ($('.misclsModify').hasClass('active')){	    	    			
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
 	 	    		
 	 	    		var PriceVAL=$("#priceIdModify").val();  
 	 	    		if(PriceVAL==""){
 	 	    			PriceVAL="0";    			
 	 	    		}
 	 	    		
 	 	    		
 	 	    		var TriggerpriceVAL=$('#TriggerpriceIdModify').val();  //(TrigPrice Send as 0 for default)
 	 	    		
 	 	    		var TrigPrice;
 	 	    		var Price;
 	 	    		var prctyp;
 	 	    		
 	 	    		if ($('.lmtclsModify').hasClass('active')){
 	 	    			TrigPrice="0";
 	 	    			Price=PriceVAL;
 	 	    			 prctyp="LMT";
 	 	    		}
 	 	    		if ($('.mktclsModify').hasClass('active')){
 	 	    			TrigPrice="0";
 	 	    			Price="0";
 	 	    			 prctyp="MKT";
 	 	    		}
 	 	    		if ($('.slclsModify').hasClass('active')){
 	 	    			TrigPrice=TriggerpriceVAL;
 	 	    			Price=PriceVAL;
 	 	    			 prctyp="SL";
 	 	    		}
 	 	    		if ($('.slmclsModify').hasClass('active')){
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
 	    			url :'PlaceOrderModify',	
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
 	    				$('#BuyOrderNumberModelIdModify').modal('show'); 		
 	    				$('#buyOrderNumbersModify').html(result);
 	    				$('#myModalModify').modal('hide');
 	    			}
 	    			else if(stat==='Not_Ok'){
 	    				alert("Error :"+result);
 	    				$('#myModalModify').modal('show');
 	    			}
 	    			
 	    			
 	    			
 	    			},
 	    			error:function(){
 	    				alert("PlaceOrderModify Error");
 	    			
 	    			}	
 	    		});
 	    		
 	    		}
 	    	
 	    }
 	    
 	 }
 	  
 	  
 	  
 	  function PlaceOrdersellfunModify(){ 	
 	  	alert("sell order...")
 	  	$(".ProductsclsModify").show();
 	    	
 	    	var web="WEB";
 	    	var MCX="MCX";
 	    	var NSE="NSE";
 	    	//var DiscQuanErrorTag= document.getElementById("DiscQuanhiddenErrorId").value;		
 	    	
 	    		
 	 		
 	    	if ($('li.RegularOrdclsModify').hasClass('active') ) {
 	     		
 	    		
 	     		//var prd="C";
 	     		var Ret;
 		      		if ($('li.dayclsModify').hasClass('active')){
 		      		Ret="DAY";      		
 		      		}      		
 	    			if ($('li.iocclsModify').hasClass('active')){
 	    			Ret="IOC";
 	    			}
 	    			if ($('li.gtcclsModify').hasClass('active')){      		
 	    			 Ret="GTC";
 	    			}
 	    			if ($('li.gtdclsModify').hasClass('active')){       		
 	    			 Ret="GTD";
 	    			}
 	    			if ($('li.gttclsModify').hasClass('active')){       		
 	    			 Ret="GTT";
 	    			}
 	    		if(Ret==="DAY" || Ret==="IOC" || Ret==="GTT" ){
 	    			
 	    		
 	    		var sprdtali="CNC:CNC||MIS:MIS||NRML:NRML";	
 	    		var s_prdt_ali=sprdtali;
 	    	//	var uid=$("#UserIDModify").val();
 	    	//	var actid=$("#UserIDModify").val();
 	    		
 	    		var Ttranstype='S';
 	    		var scriptName=$("#scriptNamehiddvalModify").val(); 	    		
 	    		var displayName=$("#displaynamehiddvalModify").val();
 	    		
 	    		//var prctyp="LMT"; //Price type (from DefaultLogin/ NormalLogin rest api)
 	    		
 	    		var prctyp;
 	    		if ($('li.lmtclsModify').hasClass('active')){ //Price Type ( L or SL )
 	    			  prctyp="LMT";
 	    		 }
 	    		if ($('li.mktclsModify').hasClass('active')){ //Price Type ( L or SL )
 	    			  prctyp="MKT"; 
 	    		 }
 	    		if ($('li.slclsModify').hasClass('active')){ //Price Type ( L or SL )
 	    			  prctyp="SL"; 
 	    		 }
 	    		if ($('li.slmclsModify').hasClass('active')){ //Price Type ( L or SL )
 	    			  prctyp="SL-M"; 
 	    		 }
 	    		//alert("prctyp : "+prctyp);
 	    	
 	    		$(".ProductsclsModify").show();
 	    		var qty=$("#QtyIdModify").val();
 	    		 
 	    		 var discqtyVAL=$("#DiscquantityIdModify").val();    		
 	    		 var TsymVAL=$("#scripthiddvalModify").val();
 	    		 var exchangeType=$("#stockhiddvalModify").val();
 	    		  
 	    		 
 	    		 if(exchangeType==='MCX'){ //MCX
 	    			 
 	    		var exch=exchangeType;
 	    		var discqty=discqtyVAL;
 	    		var Tsym=TsymVAL;
 	    		
 	    		
 	    		if ($('li.nrmlclsModify').hasClass('active')){
 	    			var Pcode="NRML";
 	    			prd="M";
 	    		}
 	    		if ($('li.misclsModify').hasClass('active')){
 	    			var Pcode="MIS";
 	    			prd="I";
 	    		}
 	    		
 	    		 }
 	    		 if(exchangeType==='NSE'){ //NSE
 	    			
 	    				var exch="NSE";
 	    				var discqty=discqtyVAL;
 	    				var Tsym=TsymVAL;
 	    				if ($('li.nrmlclsModify').hasClass('active')){
 	    	    			prd="M";
 	    	    		}
 	    				if ($('li.cncclsModify').hasClass('active')){	    	    			
 	    	    			prd="C";
 	    	    		}
 	    				
 	    				if ($('li.misclsModify').hasClass('active')){	    	    			
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
 	    		
 	    		var PriceVAL=$("#priceIdModify").val();  
 	    		if(PriceVAL==""){
 	    			PriceVAL="0";    			
 	    		}
 	    		
 	    		
 	    		var TriggerpriceVAL=$('#TriggerpriceIdModify').val();  //(TrigPrice Send as 0 for default)
 	    		
 	    		var TrigPrice;
 	    		var Price;
 	    		if ($('li.lmtclsModify').hasClass('active')){
 	    			TrigPrice="0";
 	    			Price=PriceVAL;
 	    		}
 	    		if ($('li.mktclsModify').hasClass('active')){
 	    			TrigPrice="0";
 	    			Price="0";
 	    		}
 	    		if ($('li.slclsModify').hasClass('active')){
 	    			TrigPrice=TriggerpriceVAL;
 	    			Price=PriceVAL;
 	    		}
 	    		if ($('li.slmclsModify').hasClass('active')){
 	    			TrigPrice=TriggerpriceVAL;
 	    			Price="0";
 	    		}
 	    		
 	    		
 	    		var DateDays="NA"; //(DateDays Send as NA for default)
 	    		
 	    		var AMO;
 	    		
 	    		if ($('li.AfterMarketOrdclsModify').hasClass('active')){	
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
 	    		url :'PlaceOrderModify',		
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
 	    			alert("PlaceOrderModify Error");
 	    		
 	    		}	
 	    	});      	
 	    	
 	    }      		
 	    	else if(Ret==="GTC" || Ret==="GTD" ){
 	    		
 	    		var sprdtali="CNC:CNC||MIS:MIS||NRML:NRML";	
     			var s_prdt_ali=sprdtali;
     			
     			//var uid=$("#UserIDModify").val();
     			//var actid=$("#UserIDModify").val();
     			var Ttranstype='S';
     			
     			if ($('li.gtcclsModify').hasClass('active')){
     				Ret="GTC";
     				}
     			if ($('li.gtdclsModify').hasClass('active')){
     				Ret="GTD";
     				}
     			
     			var prctyp;
     			var PriceVAL=$("#priceIdModify").val();
     			if(PriceVAL==""){
         			PriceVAL="0";    			
         		}
     			var Price;
     			if ($('li.lmtclsModify').hasClass('active')){ //Price Type ( L or SL )
     				  prctyp="LMT";
     				  Price=PriceVAL;
     			 }
     			if ($('li.mktclsModify').hasClass('active')){ //Price Type ( L or SL )
     				  prctyp="MKT";
     				  Price="0";
     			 }
     			if ($('li.slclsModify').hasClass('active')){  //Price Type ( L or SL )
     				  prctyp="SL";
     				  Price=PriceVAL;
     			 }
     			if ($('li.slmclsModify').hasClass('active')){ //Price Type ( L or SL )
     				  prctyp="SL-M";
     				  Price="0";
     			 }			 
     			
     			 var qty=$("#QtyIdModify").val();
     			 var exchangeType=$("#stockhiddvalModify").val();
     	  	 	 var TsymVAL=$("#scripthiddvalModify").val();
     	  	 	 
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
     			if ($('li.cncclsModify').hasClass('active')){
     				Pcode="CNC";
     			}
     			if ($('li.nrmlclsModify').hasClass('active')){
     				Pcode="NRML";
     			}
     			if ($('li.misclsModify').hasClass('active')){
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
 	    			url :'PlaceGTDOrderModify',		
 	    			data:"s_prdt_ali="+s_prdt_ali+"&Tsym="+Tsym+"&exch="+exch+"&Ttranstype="+Ttranstype+"&Ret="+Ret+"&prctyp="+prctyp+"&qty="+qty+"&Branch="+Branch+
 	    			"&Broker="+Broker+"&Price="+Price+"&userTag="+userTag+"&Pcode="+Pcode+"&DateDays="+DateDays+
 	    			"&orderSource="+orderSource+"&naicCode="+naicCode,
 	    			success:function(JsonObject){
 	    			
 	    			/*var JsonObject= JSON.parse(response);
 	    			var values= Object.values(JsonObject);*/
 	    			var result=values[1];
 	    			var stat= values[0];
 	    			if(stat==='Ok'){
 	    				$('#BuyOrderNumberModelIdModify').modal('show'); 		
 	    				$('#buyOrderNumbersModify').html(result);
 	    				$('#myModalModify').modal('hide');
 	    			}
 	    			else if(stat==='Not_Ok'){
 	    				alert("Error :"+result);
 	    				$('#myModalModify').modal('show');
 	    			}
 	    		
 	    			},
 	    			error:function(){
 	    				alert("PlaceGTDOrderModify Error");
 	    			
 	    				}	
 	    			});			
 	    		}	
 	    	}
 	    	
 	    	else if ( $('li.BracketOrdclsModify').hasClass('active') ) {	
 	 		
 	    		
 	    		$(".ProductsclsModify").hide();
 	 		var sprdtali="CNC:CNC||MIS:MIS||NRML:NRML";	
 			var s_prdt_ali=sprdtali;
 			 
 			
 			 var Ttranstype='S';
 			 var qty=$("#QtyIdModify").val();
 			
 			 var actid=$("#UserIDModify").val();
 			 var uid=$("#UserIDModify").val();
 		
 			 var Ret="DAY";
 			 
 			 var Price=$("#priceIdModify").val();	
 			 if(Price==""){
 				 Price="0";    			
 	 		}
 			 var discqtyVAL=$("#DiscquantityIdModify").val(); 
 			 var TsymVAL=$("#scripthiddvalModify").val();
 	 		var exchangeType=$("#stockhiddvalModify").val();
 	 		
 	 		var prd;			 
 	 		var scriptName=$("#scriptNamehiddvalModify").val(); 	    		
	    		var displayName=$("#displaynamehiddvalModify").val();
 			 
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
 			 var SqrOffvalue=$("#TargetAbsolutequanIdModify").val();
 			 var SLAbsOrticks="Absolute";              				//Stop Loss type ( Absolute or Ticks )
 			 var SLvalue=$("#stoplossAbsolutequanIdModify").val();
 			 var TargetstoplossVAL=$("#TargetstoplossquanIdModify").val();
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
 			
 			if ($('li.lmtclsModify').hasClass('active') ) { //Price Type ( L or SL )
 				 var prctyp="LMT";
 				 var TrigPrice="0";
 			 }
 			if ($('li.slclsModify').hasClass('active') ) { //Price Type ( L or SL )
 				 var prctyp="SL"; 
 				 var TrigPrice=$("#TriggerpriceIdModify").val();
 			 }
 			
 			$.ajax({
 				
 				type : 'POST',
 				url  : 'PlaceOrderModify',
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
 							$('#BuyOrderNumberModelIdModify').modal('show'); 		
 							$('#buyOrderNumbersModify').html(result);
 							$('#myModalModify').modal('hide');
 						}
 						else if(stat==='Not_Ok'){
 							alert("Error :"+result);
 							$('#myModalModify').modal('show');
 						} 					
 						},
 					error:function(){
 						alert("BracketOrderModify Error");
 					
 					}	
 			});
 			
 		}
 	    	else if ( $('li.CoverOrdclsModify').hasClass('active') ) {		
 	    		
 	    		$(".ProductsclsModify").hide();
 	    		
 	    		var sprdtali="CNC:CNC||MIS:MIS||NRML:NRML";	
 	    		var s_prdt_ali=sprdtali;
 	    		
 	    		
 	    		var uid=$("#UserIDModify").val();
 	    		var actid=$("#UserIDModify").val();
 	    		var prctyp;
 	    		//if($("input:radio[name='lmtId']").is(":checked")) { //Price Type ( L or SL )
 	    		if ( $('li.lmtclsModify').hasClass('active') ){
 	    			  prctyp="LMT";
 	    		 }
 	    		 //if($("input:radio[name='mktId']").is(":checked")) { //Price Type ( L or SL )
 	    			if ( $('li.mktclsModify').hasClass('active') ){
 	    			  prctyp="MKT"; 
 	    		 }
 	    		
 	    		var qty=$("#QtyIdModify").val();
 	    		var discqtyVAL="0";
 	    		var TsymVAL=$("#scripthiddvalModify").val();
 	    		var exchangeType=$("#stockhiddvalModify").val();
 	    		var prd;
 	    		var scriptName=$("#scriptNamehiddvalModify").val(); 	    		
 	    		var displayName=$("#displaynamehiddvalModify").val();
 	    	
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
 	    		var Price=$("#priceIdModify").val();
 	    		 if(Price==""){
 	    			 Price="0";    			
 	     		}
 	    		//var StopLossVAL= $('#CoStoplossId').val();
 	    		var StopLossVAL=$("#TriggerpriceIdModify").val();
 	    		
 	    		if(StopLossVAL>0){
 	    			var TrigPrice=StopLossVAL;
 	    		}else{
 	    		var TrigPrice="0"; //(TrigPrice Send as 0 for default)
 	    		}
 	    		var Pcode="CO"; // need to check
 	    		var DateDays="NA"; //(DateDays Send as NA for default)
 	    		
 	    		
 	    			if ( $('li.AfterMarketOrdclsModify').hasClass('active') ){
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
 	    		url :'PlaceOrderModify',		
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
 	    			$('#BuyOrderNumberModelIdModify').modal('show'); 		
 	    			$('#buyOrderNumbersModify').html(result);
 	    			$('#myModalModify').modal('hide');
 	    		}
 	    		else if(stat==='Not_Ok'){
 	    			alert("Error :"+result);
 	    			$('#myModalModify').modal('show');
 	    		}
 	    		
 	    		
 	    		},
 	    		error:function(){
 	    			alert("PlaceOrderModify Error");
 	    		
 	    		}	
 	    	});
 	    	
 	    	}
 	    		//else if($("input:radio[name='AfterMarketOrdId']").is(":checked")) { 
 	    		else if ($('li.AfterMarketOrdclsModify').hasClass('active')) {
 	     		
 	    			
 	    			
 	    			var sprdtali="CNC:CNC||MIS:MIS||NRML:NRML";	
 	    			var s_prdt_ali=sprdtali;
 	    			var uid=$("#UserIDModify").val();
 	    			var actid=$("#UserIDModify").val();
 	    			var qty=$("#QtyIdModify").val();
 	    			var discqtyVAL=$("#DiscquantityIdModify").val();
 	       		 
 	    			var TsymVAL=$("#scripthiddvalModify").val();
 	        		var exchangeType=$("#stockhiddvalModify").val();
 	        		
 	        		var scriptName=$("#scriptNamehiddvalModify").val(); 	    		
 	 	    		var displayName=$("#displaynamehiddvalModify").val();
 	        		var prd; 
 	        		 if(exchangeType==='MCX'){ //MCX
 	 	    			 
 	 	 	    		var exch=exchangeType;
 	 	 	    		var discqty=discqtyVAL;
 	 	 	    		var Tsym=TsymVAL;	 	    		
 	 	 	    		
 	 	 	    		if ($('.nrmlclsModify').hasClass('active')){
 	 	 	    			var Pcode="NRML";
 	 	 	    			prd="M";
 	 	 	    		}
 	 	 	    		if ($('.misclsModify').hasClass('active')){
 	 	 	    			var Pcode="MIS";
 	 	 	    			prd="I";
 	 	 	    		}
 	 	 	    		
 	 	 	    		 }
 	 	 	    		 if(exchangeType==='NSE'){ //NSE 	 	    			
 	 	 	    				var exch="NSE";
 	 	 	    				var discqty=discqtyVAL;
 	 	 	    				var Tsym=TsymVAL;
 	 	 	    				if ($('li.nrmlclsModify').hasClass('active')){
 	 	 	  	    			prd="M";
 	 	 	    				}
 	 	 	    				
 	 	 	    				if ($('.cncclsModify').hasClass('active')){	    	    			
 	 	 	    	    			prd="C";
 	 	 	    	    		} 	 	    				
 	 	 	    				if ($('.misclsModify').hasClass('active')){	    	    			
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
 	    		
 	    			if ( $('li.dayclsModify').hasClass('active') ){
 	    			var Ret="DAY";
 	    			}
 	    			if ( $('li.iocclsModify').hasClass('active') ){
 	    				var Ret="IOC";
 	    				}
 	    			if ( $('li.gtcclsModify').hasClass('active') ){
 	    				var Ret="GTC";
 	    				}
 	    			if ( $('li.gtdclsModify').hasClass('active') ){
 	    				var Ret="GTD";
 	    				}
 	    			if ( $('li.gttclsModify').hasClass('active') ){
 	    				var Ret="GTT";
 	    				}
 	    				var MktPro="NA"; //(MktPro Should be sent as NA by default)
 	    			var Price=$("#priceIdModify").val();
 	    			 if(Price==""){
 	    				 Price="0";    			
 	    	 		}
 	    			
 	    			if ( $('.lmtclsModify').hasClass('active') ){ //Price Type ( L or SL )
 	    				var  prctyp="LMT";
 	    				 var TrigPrice="0";
 	    			 }
 	    			if ( $('.mktclsModify').hasClass('active') ){ //Price Type ( L or SL )
 	    				var prctyp="MKT"; 
 	    				var TrigPrice="0";
 	    			 }
 	    			if ( $('.slclsModify').hasClass('active') ){ //Price Type ( L or SL )
 	    				var prctyp="SL"; 
 	    				var TriggerpriceVAL="0";
 	    			 }
 	    			if ( $('.slmclsModify').hasClass('active') ){ //Price Type ( L or SL )
 	    				var prctyp="SL-M"; 
 	    				var TriggerpriceVAL=$('#TriggerpriceIdModify').val();
 	    			 }
 	    			 
 	    			if ( $('.cncclsModify').hasClass('active') ){      			
 	    				var Pcode="CNC";
 	    			}
 	    			if ( $('.nrmlclsModify').hasClass('active') ){ 
 	    				var Pcode="NRML";
 	    			}
 	    			if ( $('.misclsModify').hasClass('active') ){ 
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
 	    			url :'PlaceOrderModify',	
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
 	    				$('#BuyOrderNumberModelIdModify').modal('show'); 		
 	    				$('#buyOrderNumbersModify').html(result);
 	    				$('#myModalModify').modal('hide');
 	    			}
 	    			else if(stat==='Not_Ok'){
 	    				alert("Error :"+result);
 	    				$('#myModalModify').modal('show');
 	    			}	    			
 	    			},
 	    			error:function(){
 	    				alert("PlaceOrderModify Error");
 	    			}	
 	    		});     		
 	    }   	
 	  }
 	  
 	  
 	  
 	 function ModifyOrderfun(){

 		 
 	  var token=document.getElementById("tokenModify").value;
 	  var userid=document.getElementById("UserIDModify").value;
 	  var norenordnoModify=document.getElementById("norenordnoModify").value;
 	  var exchModify= document.getElementById("exchModify").value;
 	  var tsym= document.getElementById("tsymModify").value;
 	  var qty= document.getElementById("qtyModify").value;
 	  var prc=document.getElementById("prcModify").value;
 	  var prctypeModify=document.getElementById("prctypModify").value;
 	  var ret=document.getElementById("retModify").value;


 		 var QtyIdModify = document.getElementById("QtyIdModify").value;
 		 var priceIdModify = document.getElementById("priceIdModify").value;
 		 


 		var Ret;


 			
 			if ($('li.dayclsModify').hasClass('active')){
		      		Ret="DAY";      		
		      		}      		
	    			if ($('li.iocclsModify').hasClass('active')){
	    			Ret="IOC";
	    			}
	    			if ($('li.gtcclsModify').hasClass('active')){      		
	    			 Ret="GTC";
	    			}
	    			if ($('li.gtdclsModify').hasClass('active')){       		
	    			 Ret="GTD";
	    			}
	    			if ($('li.gttclsModify').hasClass('active')){       		
	    			 Ret="GTT";
	    			}
 			//var prctyp="L"; //Price type (from DefaultLogin/ NormalLogin rest api)
 			
 			var prctyp;
 			

 			
 			if ($('li.lmtclsModify').hasClass('active')){ //Price Type ( L or SL )
				  prctyp="LMT";
			 }
			if ($('li.mktclsModify').hasClass('active')){ //Price Type ( L or SL )
				  prctyp="MKT";
			 }
			if ($('li.slclsModify').hasClass('active')){  //Price Type ( L or SL )
				  prctyp="SL";
			 }
			if ($('li.slmclsModify').hasClass('active')){ //Price Type ( L or SL )
				  prctyp="SL-M";
			 }	
			

 			 
 			 var call="uid="+userid+"&exch="+exchModify+"&tsym="+tsym+"&norenordno="+norenordnoModify+"&qty="+QtyIdModify+"&prc="+priceIdModify+"&prctyp="+prctyp+"&ret="+Ret;

 		
 			 $.ajax({
 				type :'POST',
 				url :'ModifyOrder',
 				data :call,
 				dataType: 'json',
 				//contentType:'application/json; charset=utf-8',
 				success:function(response){
 					 				
 					var result = Object.values(response);
 					
 					var stat= result[1];
 					
 					//alert("stat:::"+stat);
 					
 					if(stat==='Ok'){
 						
 						alert("Order Updated Successfully.")
 					
 						// $("#buySellModalModify").modal('hide');
 						
 					//	$("#modifyordernumber").html(result[0]); 
 					}else{
 						$("#buySellModalModify").modal('hide');
 					}
 				        
 				},
 				error:function(){
 					alert("ModifyOrder Error");
 				
 				}	
 			});

 		}


 	

 	
 	 
 	// ======== Buy/Sell END ===============