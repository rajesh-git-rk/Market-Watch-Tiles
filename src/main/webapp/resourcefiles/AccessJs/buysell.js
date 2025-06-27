


function buysellwindowOpen(userId,scriptName,price,exchange,token,displayname,mcxTickSize,
		mcxOriginalExpiryDate,nseTickSize,nseExDate,nfoexpiry_date,mcxInstrumentCode,mcxStrikePrice,
		mcxOptionType,mcxInstrumentName,mcxInstrumentSeries,nseSymbol,nseSeries,nfoSymbol,nfostrike_price,nfooption_type,
		nfoinstrument_name,nfoTicksize){

	
	//var AvailableMargin=document.getElementById("marginUsed").value;
	var AvailableMargin=$("#marginUsedhiddenId").val();
		
		//alert("mcxStrikePrice : "+mcxStrikePrice+" nfostrike_price : "+nfostrike_price)
		
	/*alert("mcxTickSize : "+mcxTickSize)*/
	//alert("mcxInstrumentName : "+mcxInstrumentName+" mcxOptionType : "+mcxOptionType)
	//alert(" nfooption_type : "+nfooption_type+" nfoinstrument_name : "+nfoinstrument_name); 
	
	document.getElementById("AvailableMarginspanId").innerHTML =AvailableMargin;
	//$('#buySellModal').show();
	$('#buySellModal').modal('show');
	document.getElementById("priceId").value=document.getElementById(token+"_priceid_hidden").value;
	document.getElementById("UserID").value=userId;	
	document.getElementById("token").value=token;
	document.getElementById("buysell_priceid").innerHTML = document.getElementById(token+"_priceid_hidden").value;
	document.getElementById("stockhiddval").value=exchange;
	//document.getElementById("exchangelabelId").innerHTML=exchange;
	
	//MCX
	document.getElementById("mcxexpirylabelId").innerHTML=mcxOriginalExpiryDate;		
	
	
	//NFO
	document.getElementById("nfoexpirydatelabelId").innerHTML=nfoexpiry_date;
	
	document.getElementById("scriptNamehiddval").value=scriptName;
	
	document.getElementById("displaynamehiddval").value=displayname;
	
		
	const monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']

    const d = new Date();
    var dd = String(d.getDate()).padStart(2, '0');
    var mm = String(d.getMonth() + 1).padStart(2, '0');
    var yyyy = d.getFullYear();
    var todaydate = +dd +"/"+ monthNames[d.getMonth()] +"/"+ yyyy;
    	
 
   
			if (exchange==='MCX')
				{
				

				
				
				
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
				
				var myDate = new Date(mcxOriginalExpiryDate);
				
				var shortYear = myDate.getFullYear();
				// Add this line
				var twoDigitYear = shortYear.toString().substr(-2);
				var dd = myDate.getDate();
				 var mcxexpiryDATEmyDate = +myDate.getDate() +monthNames[myDate.getMonth()]+twoDigitYear;				
				//var mcxexpiryDATEmyDate = +twoDigitYear +monthNames[myDate.getMonth()];		
				 var mcxexpirydatedisplay = +myDate.getDate()+"-" +monthNames[myDate.getMonth()]+"-"+ myDate.getFullYear();
				
				 
					//MCX TICK SIZE
					document.getElementById("mcxticksizehiddval").value=mcxTickSize;
				//McxInstrumentName
				document.getElementById("mcxInstrumentNamehiddval").value=mcxInstrumentName;
				document.getElementById("mcxexpirydatehiddval").value=mcxexpirydatedisplay;
				
				//McxOptionType
				document.getElementById("mcxOptionTypehiddval").value=mcxOptionType;
				 
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
						document.getElementById("stocklabelId").innerHTML=displayname+" "+fut+" "+exchange;
						document.getElementById("stocklabelhiddenId").value=displayname+fut;
						document.getElementById("scripthiddval").value=displayname+"0"+mcxexpiryDATEmyDate;
					}else{
						document.getElementById("stocklabelId").innerHTML=displayname+" "+fut+" "+exchange;
						document.getElementById("stocklabelhiddenId").value=displayname+fut;
						document.getElementById("scripthiddval").value=displayname+mcxexpiryDATEmyDate;
					}
				}
				else if(mcxInstrumentName=="OPTFUT" || mcxInstrumentName=="OPTCOM"){
				
					var num=mcxStrikePrice/100;
					
					
					var DecimalmcxStrikePrice= num.toFixed(2);
					document.getElementById('decimalhiddval').value=(Math.round(DecimalmcxStrikePrice * 100) / 100);
					
					var decimalVal=$("#decimalhiddval").val();
					
					//document.getElementById('decimalhiddval').value=mcxStrikePrice;
					if(mcxOptionType=="PE"){
					if(dd<10) 
					{
					document.getElementById("stocklabelId").innerHTML=displayname+""+decimalVal+" "+exchange;
					document.getElementById("stocklabelhiddenId").value=displayname+"P"+decimalVal;
					document.getElementById("scripthiddval").value=displayname+"0"+mcxexpiryDATEmyDate+"P"+decimalVal;
					}else{
					document.getElementById("stocklabelId").innerHTML=displayname+" "+decimalVal+" "+mcxOptionType+" "+exchange;
					document.getElementById("stocklabelhiddenId").value=displayname+decimalVal+mcxOptionType;
					document.getElementById("scripthiddval").value=displayname+mcxexpiryDATEmyDate+"P"+decimalVal;
					}
					}
					else  if(mcxOptionType=="CE"){
						if(dd<10) 
						{
						document.getElementById("stocklabelId").innerHTML=displayname+""+decimalVal+" "+exchange;
						document.getElementById("stocklabelhiddenId").value=displayname+"C"+decimalVal;
						document.getElementById("scripthiddval").value=displayname+"0"+mcxexpiryDATEmyDate+"C"+decimalVal;
						}else{
						document.getElementById("stocklabelId").innerHTML=displayname+" "+""+decimalVal+" "+mcxOptionType+" "+exchange;
						document.getElementById("stocklabelhiddenId").value=displayname+"C"+decimalVal+mcxOptionType;
						document.getElementById("scripthiddval").value=displayname+mcxexpiryDATEmyDate+"C"+decimalVal;
						}	
					}
			}
				
		
				}
			
			else if(exchange==='NSE'){
				
				$("#NrmlId").show();
				$("#cncId").hide();
				$("#MisId").show();
				
				
				
				
				if(nseSeries=="AF" || nseSeries=="BE" || 
				   nseSeries=="BL" || nseSeries=="EQ" ||
				   nseSeries=="IQ" || nseSeries=="L1" || 
				   nseSeries=="R1" || nseSeries=="RL" || nseSeries=="V1" ){
					
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
				  	document.getElementById("nseticksizehiddval").value=nseTickSize;
				  
				  //NSE
					document.getElementById("nseexpirydatehiddval").innerHTML=nseExDate;
					document.getElementById("nseexpirydatehiddval").value=nseExDate;	
					document.getElementById("nseSerieshiddval").value=nseSeries
					
				  	document.getElementById("stocklabelId").innerHTML=nseSymbol+"-"+nseSeries+" "+exchange;
					document.getElementById("scripthiddval").value=nseSymbol+"-"+nseSeries;
				
				
			}
			
			else  if(exchange==='NFO'){		
				
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
				  
				  
				
				
				var myDate = new Date(nfoexpiry_date);
				
				var shortYear = myDate.getFullYear(); 
				// Add this line
				var twoDigitYear = shortYear.toString().substr(-2);
				var dd = myDate.getDate();
				var nfoexpirymyDate ='';
				
				  nfoexpirymyDate = +dd+monthNames[myDate.getMonth()]+twoDigitYear;
				 
				  nfoexpirymyDatedisplay=dd+"-"+monthNames[myDate.getMonth()]+"-"+myDate.getFullYear();
				
					//NfoInstrumentName
						document.getElementById("NfoInstrumentNamehiddval").value=nfoinstrument_name;
						
						document.getElementById("nfoexpirydatehiddval").value=nfoexpirymyDatedisplay;
						
						//Nfooption_type
						document.getElementById("nfooption_typehiddval").value=nfooption_type;
						
				  
				  //alert("nfooption_type : "+nfooption_type+" nfoinstrument_name : "+nfoinstrument_name); 
				  
				if(nfoinstrument_name=="FUTIDX" || nfoinstrument_name=="FUTSTK" ){
					if(nfooption_type=="XX"){
					if(dd<10) 
					{
						
						//	dd='0'+dd;
						// nfoexpirymyDate = dd.concat(monthNames[myDate.getMonth()]+twoDigitYear);						 
						 document.getElementById("stocklabelId").innerHTML=nfoSymbol+" "+"FUT"+" "+exchange;
						 document.getElementById("scripthiddval").value=nfoSymbol+"0"+nfoexpirymyDate+"F";
					}else {
						document.getElementById("stocklabelId").innerHTML=nfoSymbol+" "+"FUT"+" "+exchange;
						document.getElementById("scripthiddval").value=nfoSymbol+nfoexpirymyDate+"F";
					} 	
					}
				}
				
				else if (nfoinstrument_name=="OPTIDX" || nfoinstrument_name=="OPTSTK" ){
					
					
					var num=nfostrike_price/100;				
					
					var DecimalmcxStrikePrice= num.toFixed(2);
					document.getElementById('decimalhiddval').value=(Math.round(DecimalmcxStrikePrice * 100) / 100);
					
					var decimalVal=$("#decimalhiddval").val();
					
					//document.getElementById('decimalhiddval').value=nfostrike_price;
					
					//document.getElementById('nfoTicksizehiddval').value=nfoTicksize;
					
					if(nfooption_type=="PE"){
						
					
					if(dd<10) 
					{
					  //  dd='0'+dd;
						// nfoexpirymyDate = dd.concat(monthNames[myDate.getMonth()]+twoDigitYear);
					document.getElementById("stocklabelId").innerHTML=nfosymbol+" "+decimalVal+" "+exchange;
					document.getElementById("scripthiddval").value=nfosymbol+"0"+nfoexpirymyDate+"P"+decimalVal;
					}else{
						
						document.getElementById("stocklabelId").innerHTML=nfoSymbol+" "+decimalVal+" "+exchange;
						document.getElementById("scripthiddval").value=nfoSymbol+nfoexpirymyDate+"P"+decimalVal;
					}
					}
					else if(nfooption_type=="CE"){
						
						
						if(dd<10) 
						{
						  //  dd='0'+dd;
							// nfoexpirymyDate = dd.concat(monthNames[myDate.getMonth()]+twoDigitYear);
						document.getElementById("stocklabelId").innerHTML=nfosymbol+" "+decimalVal+" "+exchange;
						document.getElementById("scripthiddval").value=nfosymbol+"0"+nfoexpirymyDate+"C"+decimalVal;
						}else{							
							document.getElementById("stocklabelId").innerHTML=nfoSymbol+" "+decimalVal+" "+exchange;
							document.getElementById("scripthiddval").value=nfoSymbol+nfoexpirymyDate+"C"+decimalVal;
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
   
   
   
   
}




//=====buy/Sell Price TickSize =============	



function validateFloatKeyPress2(el, evt) {
	
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
}




var value;
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

   function TriggerPriceFunction(){
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
   	  
   }
   
   /**
    * Req.Margin Calculation from Qty Increase /decrease Event
    */
   var classname = document.getElementsByClassName("QtyEventClass");

   classname.addEventListener('click', SpanCalculationFunction(), false);
   
 	
   function SpanCalculationFunction(){
	  
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
	   
   }
   
   
   
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
 	 
 	 
 	 function PlaceOrderbuyfun(){
 	    
 	    	var web="WEB";
 	    	var MCX="MCX";
 	    	var NSE="NSE";
 	    	//var DiscQuanErrorTag= document.getElementById("DiscQuanhiddenErrorId").value;		
 	    	
 	    		
 	    	if ( $('li.RegularOrdcls').hasClass('active') ) {
 	     		
 	    		
 	     		//var prd="C";
 	     		var Ret;
 		      		if ($('li.daycls').hasClass('active')){
 		      		Ret="DAY";      		
 		      		}      		
 	    			if ($('li.ioccls').hasClass('active')){
 	    			Ret="IOC";
 	    			}
 	    			if ($('li.gtccls').hasClass('active')){      		
 	    			 Ret="GTC";
 	    			}
 	    			if ($('li.gtdcls').hasClass('active')){       		
 	    			 Ret="GTD";
 	    			}
 	    			if ($('li.gttcls').hasClass('active')){       		
 	    			 Ret="GTT";
 	    			}
 	    		if(Ret==="DAY" || Ret==="IOC" || Ret==="GTT" ){
 	    			
 	    		
 	    		var sprdtali="CNC:CNC||MIS:MIS||NRML:NRML";	
 	    		var s_prdt_ali=sprdtali;
 	    		var uid=$("#UserID").val();
 	    		var actid=$("#UserID").val();
 	    		
 	    		var Ttranstype='B';
 	    		
 	    		var scriptName=$("#scriptNamehiddval").val(); 	    		
 	    		var displayName=$("#displaynamehiddval").val();
 	    		//var prctyp="LMT"; //Price type (from DefaultLogin/ NormalLogin rest api)
 	    		
 	    		var prctyp;
 	    		if ($('li.lmtcls').hasClass('active')){ //Price Type ( L or SL )
 	    			  prctyp="LMT";
 	    		 }
 	    		if ($('li.mktcls').hasClass('active')){ //Price Type ( L or SL )
 	    			  prctyp="MKT"; 
 	    		 }
 	    		if ($('li.slcls').hasClass('active')){ //Price Type ( L or SL )
 	    			  prctyp="SL"; 
 	    		 }
 	    		if ($('li.slmcls').hasClass('active')){ //Price Type ( L or SL )
 	    			  prctyp="SL-M"; 
 	    		 }
 	    		//alert("prctyp : "+prctyp);
 	    	
 	    		$(".Productscls").show();
 	    		var qty=$("#QtyId").val();
 	    		 
 	    		 var discqtyVAL=$("#DiscquantityId").val();    		
 	    		 var TsymVAL=$("#scripthiddval").val();
 	    		 var exchangeType=$("#stockhiddval").val();
 	    		  
 	    		 
 	    		 if(exchangeType==='MCX'){ //MCX
 	    			 
 	    		var exch=exchangeType;
 	    		var discqty=discqtyVAL;
 	    		var Tsym=TsymVAL;
 	    		if ($('li.nrmlcls').hasClass('active')){
 	    			var Pcode="NRML";
 	    			prd="M";
 	    		}
 	    		if ($('li.miscls').hasClass('active')){
 	    			var Pcode="MIS";
 	    			prd="I";
 	    		}
 	    		
 	    		 }
 	    		 if(exchangeType==='NSE'){ //NSE
 	    			
 	    				var exch="NSE";
 	    				var discqty=discqtyVAL;
 	    				var Tsym=TsymVAL;
 	    				if ($('li.nrmlcls').hasClass('active')){ 	    	    			
 	    	    			prd="M";
 	    	    		}
 	    				if ($('li.cnccls').hasClass('active')){	    	    			
 	    	    			prd="C";
 	    	    		}
 	    				
 	    				if ($('li.miscls').hasClass('active')){	    	    			
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
 	    		
 	    		var PriceVAL=$("#priceId").val();  
 	    		if(PriceVAL==""){
 	    			PriceVAL="0";    			
 	    		}
 	    		
 	    		
 	    		var TriggerpriceVAL=$('#TriggerpriceId').val();  //(TrigPrice Send as 0 for default)
 	    		
 	    		var TrigPrice;
 	    		var Price;
 	    		if ($('li.lmtcls').hasClass('active')){
 	    			TrigPrice="0";
 	    			Price=PriceVAL;
 	    		}
 	    		if ($('li.mktcls').hasClass('active')){
 	    			TrigPrice="0";
 	    			Price="0";
 	    		}
 	    		if ($('li.slcls').hasClass('active')){
 	    			TrigPrice=TriggerpriceVAL;
 	    			Price=PriceVAL;
 	    		}
 	    		if ($('li.slmcls').hasClass('active')){
 	    			TrigPrice=TriggerpriceVAL;
 	    			Price="0";
 	    		}
 	    		
 	    		
 	    		var DateDays="NA"; //(DateDays Send as NA for default)
 	    		
 	    		var AMO;
 	    		
 	    		if ($('li.AfterMarketOrdcls').hasClass('active')){	
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
 	    		url :'PlaceOrder',		
 	    		data:"s_prdt_ali="+s_prdt_ali+"&uid="+uid+"&actid="+actid+"&Tsym="
 	    		+Tsym+"&exch="+exch+"&Ttranstype="+Ttranstype+"&Ret="+Ret+"&prctyp="+prctyp+"&qty="+qty+"&discqty="+discqty+"&prd="+prd+
 	    		"&MktPro="+MktPro+"&Price="+Price+"&TrigPrice="+TrigPrice+"&Pcode="+Pcode+"&DateDays="+DateDays+"&AMO="+AMO+
 	    		"&PosSquareFlg="+PosSquareFlg+"&MinQty="+MinQty+"&orderSource="+orderSource+"&naicCode="+naicCode+
 	    		"&ltpOratp="+ltpOratp+"&SqrOffAbsOrticks="+SqrOffAbsOrticks+"&SqrOffvalue="+SqrOffvalue+"&SLAbsOrticks="+
 	    		SLAbsOrticks+"&SLvalue="+SLvalue+"&trailingSL="+trailingSL+"&tSLticks="+tSLticks+"&userTag="+userTag
 	    		+"&scriptName="+scriptName+"&displayName="+displayName,
 	    		
 	    		success:function(JsonObject){
 	    		
 	    			alert("JsonObject : "+JsonObject);
 	    			 $('#buySellModal').modal('hide');
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
     			
     			var uid=$("#UserID").val();
     			var actid=$("#UserID").val();
     			var Ttranstype='B';
     			
     			if ($('li.gtccls').hasClass('active')){
     				Ret="GTC";
     				}
     			if ($('li.gtdcls').hasClass('active')){
     				Ret="GTD";
     				}
     			
     			var prctyp;
     			var PriceVAL=$("#priceId").val();
     			if(PriceVAL==""){
         			PriceVAL="0";    			
         		}
     			var Price;
     			if ($('li.lmtcls').hasClass('active')){ //Price Type ( L or SL )
     				  prctyp="LMT";
     				  Price=PriceVAL;
     			 }
     			if ($('li.mktcls').hasClass('active')){ //Price Type ( L or SL )
     				  prctyp="MKT";
     				  Price="0";
     			 }
     			if ($('li.slcls').hasClass('active')){  //Price Type ( L or SL )
     				  prctyp="SL";
     				  Price=PriceVAL;
     			 }
     			if ($('li.slmcls').hasClass('active')){ //Price Type ( L or SL )
     				  prctyp="SL-M";
     				  Price="0";
     			 }			 
     			
     			 var qty=$("#QtyId").val();
     			 var exchangeType=$("#stockhiddval").val();
     	  	 	 var TsymVAL=$("#scripthiddval").val();
     	  	 	 
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
     			if ($('li.cnccls').hasClass('active')){
     				Pcode="CNC";
     			}
     			if ($('li.nrmlcls').hasClass('active')){
     				Pcode="NRML";
     			}
     			if ($('li.miscls').hasClass('active')){
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
 	    			url :'PlaceGTDOrder',		
 	    			data:"s_prdt_ali="+s_prdt_ali+"&uid="+uid+"&actid="+actid+"&Tsym="
 	    			+Tsym+"&exch="+exch+"&Ttranstype="+Ttranstype+"&Ret="+Ret+"&prctyp="+prctyp+"&qty="+qty+"&Branch="+Branch+
 	    			"&Broker="+Broker+"&Price="+Price+"&userTag="+userTag+"&Pcode="+Pcode+"&DateDays="+DateDays+
 	    			"&orderSource="+orderSource+"&naicCode="+naicCode,
 	    			success:function(JsonObject){
 	    			
 	    			/*var JsonObject= JSON.parse(response);
 	    			var values= Object.values(JsonObject);*/
 	    			var result=values[1];
 	    			var stat= values[0];
 	    			if(stat==='Ok'){
 	    				$('#BuyOrderNumberModelId').modal('show'); 		
 	    				$('#buyOrderNumbers').html(result);
 	    				$('#myModal').modal('hide');
 	    			}
 	    			else if(stat==='Not_Ok'){
 	    				alert("Error :"+result);
 	    				$('#myModal').modal('show');
 	    			}
 	    		
 	    			},
 	    			error:function(){
 	    				alert("PlaceGTDOrder Error");
 	    			
 	    				}	
 	    			});			
 	    		}	
 	    	}
 	    	
 	    	else if ( $('li.BracketOrdcls').hasClass('active') ) {	
 	 		
 	 		
 	 		var sprdtali="CNC:CNC||MIS:MIS||NRML:NRML";	
 			var s_prdt_ali=sprdtali;			 
 			 var Ttranstype='B';
 			 var qty=$("#QtyId").val();
 			
 			var actid=$("#UserID").val();
 			 var uid=$("#UserID").val();
 		
 			 var Ret="DAY";
 			var scriptName=$("#scriptNamehiddval").val(); 	    		
	    	var displayName=$("#displaynamehiddval").val();
	    		
 			 var Price=$("#priceId").val();	
 			 if(Price==""){
 				 Price="0";    			
 	 		}
 	 		// var TokenNo=$("#tokenhiddval").val();
 			
 			 var discqtyVAL=$("#DiscquantityId").val();
 			 var exchangeType=$("#stockhiddval").val();
 			
 			var TsymVAL=$("#scripthiddval").val();
 			 
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
 			 var SqrOffvalue=$("#TargetAbsolutequanId").val();
 			 var SLAbsOrticks="Absolute";              				//Stop Loss type ( Absolute or Ticks )
 			 var SLvalue=$("#stoplossAbsolutequanId").val();
 			 var TargetstoplossVAL=$("#TargetstoplossquanId").val();
 			
 			 
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
 			
 			if ($('li.lmtcls').hasClass('active') ) { //Price Type ( L or SL )
 				 var prctyp="LMT";
 				 var TrigPrice="0";
 			 }
 			if ($('li.slcls').hasClass('active') ) { //Price Type ( L or SL )
 				 var prctyp="SL"; 
 				 var TrigPrice=$("#TriggerpriceId").val();
 			 }
 			
 			$.ajax({
 				
 				type : 'POST',
 				url  : 'PlaceOrder',
 				data : "s_prdt_ali="+s_prdt_ali+"&uid="+uid+"&actid="+actid+"&Tsym="
 	    		+Tsym+"&exch="+exch+"&Ttranstype="+Ttranstype+"&Ret="+Ret+"&prctyp="+prctyp+"&qty="+qty+"&discqty="+discqty+"&prd="+prd+
 	    		"&MktPro="+MktPro+"&Price="+Price+"&TrigPrice="+TrigPrice+"&Pcode="+Pcode+"&DateDays="+DateDays+"&AMO="+AMO+
 	    		"&PosSquareFlg="+PosSquareFlg+"&MinQty="+MinQty+"&orderSource="+orderSource+"&naicCode="+naicCode+
 				"&ltpOratp="+ltpOratp+"&SqrOffAbsOrticks="+SqrOffAbsOrticks+
 				"&SqrOffvalue="+SqrOffvalue+"&SLAbsOrticks="+SLAbsOrticks+"&SLvalue="+SLvalue+"&trailingSL="+trailingSL+
 				"&tSLticks="+tSLticks+"&userTag="+userTag+"&TrigPrice="+TrigPrice+"&scriptName="+scriptName+"&displayName="+displayName,
 				
 					success:function(JsonObject){
 								alert("JsonObject"+JsonObject);
 								 $('#buySellModal').modal('hide');
 						/*var JsonObject= JSON.parse(response);
 						var values= Object.values(JsonObject);*/
 						var result=values[1];
 						var stat= values[0];
 						if(stat==='Ok'){
 							$('#BuyOrderNumberModelId').modal('show'); 		
 							$('#buyOrderNumbers').html(result);
 							$('#myModal').modal('hide');
 						}
 						else if(stat==='Not_Ok'){
 							alert("Error :"+result);
 							$('#myModal').modal('show');
 						} 					
 						},
 					error:function(){
 						alert("BracketOrder Error");
 					
 					}	
 			});
 			
 		}
 		
 	    	
 	    	 	else if ( $('li.CoverOrdcls').hasClass('active') ) {		
 	     		
 	     		
 	    		
 	    		var sprdtali="CNC:CNC||MIS:MIS||NRML:NRML";	
 	    		var s_prdt_ali=sprdtali;
 	    		
 	    		var uid=$("#UserID").val();
 	    		var actid=$("#UserID").val();
 	    		var prctyp;
 	    		var scriptName=$("#scriptNamehiddval").val(); 	    		
 	    		var displayName=$("#displaynamehiddval").val();
 	    		
 	    		if ( $('li.lmtcls').hasClass('active') ){  //Price Type ( L or SL )
 	    			  prctyp="LMT";
 	    		 }
 	    		if ( $('li.mktcls').hasClass('active') ){ //Price Type ( L or SL )	    			
 	    			  prctyp="MKT"; 
 	    		 }
 	    		
 	    		var qty=$("#QtyId").val();
 	    		var discqtyVAL=$("#DiscquantityId").val();    		
 	     	 	var TsymVAL=$("#scripthiddval").val();
 	    		var exchangeType=$("#stockhiddval").val();
 	    		
 	    		var prd; 
 	    		 if(exchangeType==='MCX'){ //MCX
 	    			var exch=exchangeType;
 	    			var discqty=discqtyVAL;
 	    			var Tsym=TsymVAL;
 	    			prd="H"; 
 	    		 }
 	    		 if(exchangeType==='NSE'){ //NSE

 	    				var exch=NSE;
 	    				var discqty=discqtyVAL;
 	    				var Tsym=TsymVAL;
 	    				prd="H"; 
 	    				 }      		
 	    		
 	    		if(exchangeType==='NFO'){ //F&O-NFO
 	    			var exch="NFO";
 	    			var discqty=discqtyVAL;
 	    			var Tsym=TsymVAL;
 	    			prd="H"; 
 	    		}	    		
 	    		
 	    		var Ttranstype='B'; 	    		
 	    		var Ret="DAY";	    		
 	    		var MktPro="NA"; //(MktPro Should be sent as NA by default)
 	    		var Price=$("#priceId").val();
 	    		if(Price==""){
 	    			Price="0";    			
 	    		}
 	    		//var StopLossVAL= $('#CoStoplossId').val();
 	    		var StopLossVAL=$("#TriggerpriceId").val();
 	    		
 	    		if(StopLossVAL>0){
 	    			var TrigPrice=StopLossVAL;
 	    		}else{
 	    		var TrigPrice="0"; //(TrigPrice Send as 0 for default)
 	    		}
 	    		var Pcode="CO"; // need to check
 	    		var DateDays="NA"; //(DateDays Send as NA for default)
 	    		
 	    		
 	    			if ( $('li.AfterMarketOrdcls').hasClass('active') ){
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
 	    		url :'PlaceOrder',		
 	    		data:"s_prdt_ali="+s_prdt_ali+"&uid="+uid+"&actid="+actid+"&Tsym="+Tsym+
 	    		"&exch="+exch+"&Ttranstype="+Ttranstype+"&Ret="+Ret+"&prctyp="+prctyp+"&qty="+qty+"&discqty="+discqty+
 	    		"&MktPro="+MktPro+"&Price="+Price+"&TrigPrice="+TrigPrice+"&Pcode="+Pcode+"&DateDays="+DateDays+"&AMO="+AMO+
 	    		"&PosSquareFlg="+PosSquareFlg+"&MinQty="+MinQty+"&orderSource="+orderSource+"&naicCode="+naicCode+
 	    		"&ltpOratp="+ltpOratp+"&SqrOffAbsOrticks="+SqrOffAbsOrticks+"&SqrOffvalue="+SqrOffvalue+"&SLAbsOrticks="+
 	    		SLAbsOrticks+"&SLvalue="+SLvalue+"&trailingSL="+trailingSL+"&tSLticks="+tSLticks+"&userTag="+userTag+
 	    		"&TrigPrice="+TrigPrice+"&prd="+prd+"&scriptName="+scriptName+"&displayName="+displayName,
 				
 	    		success:function(JsonObject){
 	    		
 	    			alert("JsonObject : "+JsonObject); 
 	    			 $('#buySellModal').modal('hide');
 	    		/*var JsonObject= JSON.parse(response);
 	    		var values= Object.values(JsonObject);*/
 	    		var result=values[1];
 	    		var stat= values[0];
 	    		if(stat==='Ok'){
 	    			$('#BuyOrderNumberModelId').modal('show'); 		
 	    			$('#buyOrderNumbers').html(result);
 	    			$('#myModal').modal('hide');
 	    		}
 	    		else if(stat==='Not_Ok'){
 	    			alert("Error :"+result);
 	    			$('#myModal').modal('show');
 	    		}
 	    		
 	    		
 	    		},
 	    		error:function(){
 	    			alert("PlaceOrder Error");
 	    		
 	    		}	
 	    	});
 	    	
 	    	}
 	    		//else if($("input:radio[name='AfterMarketOrdId']").is(":checked")) { 
 	    		else if ($('li.AfterMarketOrdcls').hasClass('active')) {
 	     		
 	    			
 	    			
 	 	     		//var prd="C";
 	 	     		var Ret;
 	 		      		if ($('li.daycls').hasClass('active')){
 	 		      		Ret="DAY";      		
 	 		      		}      		
 	 	    			if ($('li.ioccls').hasClass('active')){
 	 	    			Ret="IOC";
 	 	    			}
 	 	    			if ($('li.gtccls').hasClass('active')){      		
 	 	    			 Ret="GTC";
 	 	    			}
 	 	    			if ($('li.gtdcls').hasClass('active')){       		
 	 	    			 Ret="GTD";
 	 	    			}
 	 	    			if ($('li.gttcls').hasClass('active')){       		
 	 	    			 Ret="GTT";
 	 	    			}
 	 	    		if(Ret==="DAY" || Ret==="IOC" ){
 	 	    			
 	 	    		
 	 	    		var sprdtali="CNC:CNC||MIS:MIS||NRML:NRML";	
 	 	    		var s_prdt_ali=sprdtali;
 	 	    		var uid=$("#UserID").val();
 	 	    		var actid=$("#UserID").val();
 	 	    		
 	 	    		var Ttranstype='B';
 	 	    		
 	 	    		var scriptName=$("#scriptNamehiddval").val(); 	    		
 	 	    		var displayName=$("#displaynamehiddval").val();
 	 	    		
 	 	    	
 	 	    		$(".Productscls").show();
 	 	    		var qty=$("#QtyId").val();
 	 	    		 
 	 	    		 var discqtyVAL=$("#DiscquantityId").val();    		
 	 	    		 var TsymVAL=$("#scripthiddval").val();
 	 	    		 var exchangeType=$("#stockhiddval").val();
 	 	    		  
 	 	    		 var prd;
 	 	    		 
 	 	    		 if(exchangeType==='MCX'){ //MCX
 	 	    			 
 	 	    		var exch=exchangeType;
 	 	    		var discqty=discqtyVAL;
 	 	    		var Tsym=TsymVAL;	 	    		
 	 	    		
 	 	    		if ($('.nrmlcls').hasClass('active')){
 	 	    			var Pcode="NRML";
 	 	    			prd="M";
 	 	    		}
 	 	    		if ($('.miscls').hasClass('active')){
 	 	    			var Pcode="MIS";
 	 	    			prd="I";
 	 	    		}
 	 	    		
 	 	    		 }
 	 	    		 if(exchangeType==='NSE'){ //NSE 	 	    			
 	 	    				var exch="NSE";
 	 	    				var discqty=discqtyVAL;
 	 	    				var Tsym=TsymVAL;
 	 	    				
 	 	    				if ($('li.nrmlcls').hasClass('active')){ 	 	   	    			
 	 	   	    			prd="M";
 	 	    				}
 	 	    				if ($('.cnccls').hasClass('active')){	    	    			
 	 	    	    			prd="C";
 	 	    	    		} 	 	    				
 	 	    				if ($('.miscls').hasClass('active')){	    	    			
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
 	 	    		
 	 	    		var PriceVAL=$("#priceId").val();  
 	 	    		if(PriceVAL==""){
 	 	    			PriceVAL="0";    			
 	 	    		}
 	 	    		
 	 	    		
 	 	    		var TriggerpriceVAL=$('#TriggerpriceId').val();  //(TrigPrice Send as 0 for default)
 	 	    		
 	 	    		var TrigPrice;
 	 	    		var Price;
 	 	    		var prctyp;
 	 	    		
 	 	    		if ($('.lmtcls').hasClass('active')){
 	 	    			TrigPrice="0";
 	 	    			Price=PriceVAL;
 	 	    			 prctyp="LMT";
 	 	    		}
 	 	    		if ($('.mktcls').hasClass('active')){
 	 	    			TrigPrice="0";
 	 	    			Price="0";
 	 	    			 prctyp="MKT";
 	 	    		}
 	 	    		if ($('.slcls').hasClass('active')){
 	 	    			TrigPrice=TriggerpriceVAL;
 	 	    			Price=PriceVAL;
 	 	    			 prctyp="SL";
 	 	    		}
 	 	    		if ($('.slmcls').hasClass('active')){
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
 	    			url :'PlaceOrder',	
 	    			data:"s_prdt_ali="+s_prdt_ali+"&uid="+uid+"&actid="+actid+"&prd="+prd+"&Tsym="+Tsym+
 	        		"&exch="+exch+"&Ttranstype="+Ttranstype+"&Ret="+Ret+"&prctyp="+prctyp+"&qty="+qty+"&discqty="+discqty+
 	        		"&MktPro="+MktPro+"&Price="+Price+"&TrigPrice="+TrigPrice+"&Pcode="+Pcode+"&DateDays="+DateDays+"&AMO="+AMO+
 	        		"&PosSquareFlg="+PosSquareFlg+"&MinQty="+MinQty+"&orderSource="+orderSource+"&naicCode="+naicCode+
 	        		"&ltpOratp="+ltpOratp+"&SqrOffAbsOrticks="+SqrOffAbsOrticks+"&SqrOffvalue="+SqrOffvalue+"&SLAbsOrticks="+
 	        		SLAbsOrticks+"&SLvalue="+SLvalue+"&trailingSL="+trailingSL+"&tSLticks="+tSLticks+"&userTag="+userTag+
 	        		"&TrigPrice="+TrigPrice+"&scriptName="+scriptName+"&displayName="+displayName,
 	    			
 	    			success:function(JsonObject){     
 	    				alert("JsonObject : "+JsonObject);
 	    				 $('#buySellModal').modal('hide');
 	    			/*var JsonObject= JSON.parse(response);
 	    			var values= Object.values(JsonObject);*/
 	    			var result=values[1];
 	    			var stat= values[0];
 	    			if(stat==='Ok'){
 	    				$('#BuyOrderNumberModelId').modal('show'); 		
 	    				$('#buyOrderNumbers').html(result);
 	    				$('#myModal').modal('hide');
 	    			}
 	    			else if(stat==='Not_Ok'){
 	    				alert("Error :"+result);
 	    				$('#myModal').modal('show');
 	    			}
 	    			
 	    			
 	    			
 	    			},
 	    			error:function(){
 	    				alert("PlaceOrder Error");
 	    			
 	    			}	
 	    		});
 	    		
 	    		}
 	    	
 	    }
 	    
 	 }
 	  
 	  
 	  
 	  function PlaceOrdersellfun(){ 	
 	  	
 	  	$(".Productscls").show();
 	    	
 	    	var web="WEB";
 	    	var MCX="MCX";
 	    	var NSE="NSE";
 	    	//var DiscQuanErrorTag= document.getElementById("DiscQuanhiddenErrorId").value;		
 	    	
 	    		
 	 		
 	    	if ($('li.RegularOrdcls').hasClass('active') ) {
 	     		
 	    		
 	     		//var prd="C";
 	     		var Ret;
 		      		if ($('li.daycls').hasClass('active')){
 		      		Ret="DAY";      		
 		      		}      		
 	    			if ($('li.ioccls').hasClass('active')){
 	    			Ret="IOC";
 	    			}
 	    			if ($('li.gtccls').hasClass('active')){      		
 	    			 Ret="GTC";
 	    			}
 	    			if ($('li.gtdcls').hasClass('active')){       		
 	    			 Ret="GTD";
 	    			}
 	    			if ($('li.gttcls').hasClass('active')){       		
 	    			 Ret="GTT";
 	    			}
 	    		if(Ret==="DAY" || Ret==="IOC" || Ret==="GTT" ){
 	    			
 	    		
 	    		var sprdtali="CNC:CNC||MIS:MIS||NRML:NRML";	
 	    		var s_prdt_ali=sprdtali;
 	    		var uid=$("#UserID").val();
 	    		var actid=$("#UserID").val();
 	    		
 	    		var Ttranstype='S';
 	    		var scriptName=$("#scriptNamehiddval").val(); 	    		
 	    		var displayName=$("#displaynamehiddval").val();
 	    		
 	    		//var prctyp="LMT"; //Price type (from DefaultLogin/ NormalLogin rest api)
 	    		
 	    		var prctyp;
 	    		if ($('li.lmtcls').hasClass('active')){ //Price Type ( L or SL )
 	    			  prctyp="LMT";
 	    		 }
 	    		if ($('li.mktcls').hasClass('active')){ //Price Type ( L or SL )
 	    			  prctyp="MKT"; 
 	    		 }
 	    		if ($('li.slcls').hasClass('active')){ //Price Type ( L or SL )
 	    			  prctyp="SL"; 
 	    		 }
 	    		if ($('li.slmcls').hasClass('active')){ //Price Type ( L or SL )
 	    			  prctyp="SL-M"; 
 	    		 }
 	    		//alert("prctyp : "+prctyp);
 	    	
 	    		$(".Productscls").show();
 	    		var qty=$("#QtyId").val();
 	    		 
 	    		 var discqtyVAL=$("#DiscquantityId").val();    		
 	    		 var TsymVAL=$("#scripthiddval").val();
 	    		 var exchangeType=$("#stockhiddval").val();
 	    		  
 	    		 
 	    		 if(exchangeType==='MCX'){ //MCX
 	    			 
 	    		var exch=exchangeType;
 	    		var discqty=discqtyVAL;
 	    		var Tsym=TsymVAL;
 	    		
 	    		
 	    		if ($('li.nrmlcls').hasClass('active')){
 	    			var Pcode="NRML";
 	    			prd="M";
 	    		}
 	    		if ($('li.miscls').hasClass('active')){
 	    			var Pcode="MIS";
 	    			prd="I";
 	    		}
 	    		
 	    		 }
 	    		 if(exchangeType==='NSE'){ //NSE
 	    			
 	    				var exch="NSE";
 	    				var discqty=discqtyVAL;
 	    				var Tsym=TsymVAL;
 	    				if ($('li.nrmlcls').hasClass('active')){
 	    	    			prd="M";
 	    	    		}
 	    				if ($('li.cnccls').hasClass('active')){	    	    			
 	    	    			prd="C";
 	    	    		}
 	    				
 	    				if ($('li.miscls').hasClass('active')){	    	    			
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
 	    		
 	    		var PriceVAL=$("#priceId").val();  
 	    		if(PriceVAL==""){
 	    			PriceVAL="0";    			
 	    		}
 	    		
 	    		
 	    		var TriggerpriceVAL=$('#TriggerpriceId').val();  //(TrigPrice Send as 0 for default)
 	    		
 	    		var TrigPrice;
 	    		var Price;
 	    		if ($('li.lmtcls').hasClass('active')){
 	    			TrigPrice="0";
 	    			Price=PriceVAL;
 	    		}
 	    		if ($('li.mktcls').hasClass('active')){
 	    			TrigPrice="0";
 	    			Price="0";
 	    		}
 	    		if ($('li.slcls').hasClass('active')){
 	    			TrigPrice=TriggerpriceVAL;
 	    			Price=PriceVAL;
 	    		}
 	    		if ($('li.slmcls').hasClass('active')){
 	    			TrigPrice=TriggerpriceVAL;
 	    			Price="0";
 	    		}
 	    		
 	    		
 	    		var DateDays="NA"; //(DateDays Send as NA for default)
 	    		
 	    		var AMO;
 	    		
 	    		if ($('li.AfterMarketOrdcls').hasClass('active')){	
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
 	    			 $('#buySellModal').modal('hide');
 	    			 
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
     			
     			var uid=$("#UserID").val();
     			var actid=$("#UserID").val();
     			var Ttranstype='S';
     			
     			if ($('li.gtccls').hasClass('active')){
     				Ret="GTC";
     				}
     			if ($('li.gtdcls').hasClass('active')){
     				Ret="GTD";
     				}
     			
     			var prctyp;
     			var PriceVAL=$("#priceId").val();
     			if(PriceVAL==""){
         			PriceVAL="0";    			
         		}
     			var Price;
     			if ($('li.lmtcls').hasClass('active')){ //Price Type ( L or SL )
     				  prctyp="LMT";
     				  Price=PriceVAL;
     			 }
     			if ($('li.mktcls').hasClass('active')){ //Price Type ( L or SL )
     				  prctyp="MKT";
     				  Price="0";
     			 }
     			if ($('li.slcls').hasClass('active')){  //Price Type ( L or SL )
     				  prctyp="SL";
     				  Price=PriceVAL;
     			 }
     			if ($('li.slmcls').hasClass('active')){ //Price Type ( L or SL )
     				  prctyp="SL-M";
     				  Price="0";
     			 }			 
     			
     			 var qty=$("#QtyId").val();
     			 var exchangeType=$("#stockhiddval").val();
     	  	 	 var TsymVAL=$("#scripthiddval").val();
     	  	 	 
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
     			if ($('li.cnccls').hasClass('active')){
     				Pcode="CNC";
     			}
     			if ($('li.nrmlcls').hasClass('active')){
     				Pcode="NRML";
     			}
     			if ($('li.miscls').hasClass('active')){
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
 	    			url :'PlaceGTDOrder',		
 	    			data:"s_prdt_ali="+s_prdt_ali+"&uid="+uid+"&actid="+actid+"&Tsym="
 	    			+Tsym+"&exch="+exch+"&Ttranstype="+Ttranstype+"&Ret="+Ret+"&prctyp="+prctyp+"&qty="+qty+"&Branch="+Branch+
 	    			"&Broker="+Broker+"&Price="+Price+"&userTag="+userTag+"&Pcode="+Pcode+"&DateDays="+DateDays+
 	    			"&orderSource="+orderSource+"&naicCode="+naicCode,
 	    			success:function(JsonObject){
 	    			
 	    			/*var JsonObject= JSON.parse(response);
 	    			var values= Object.values(JsonObject);*/
 	    			var result=values[1];
 	    			var stat= values[0];
 	    			if(stat==='Ok'){
 	    				$('#BuyOrderNumberModelId').modal('show'); 		
 	    				$('#buyOrderNumbers').html(result);
 	    				$('#myModal').modal('hide');
 	    			}
 	    			else if(stat==='Not_Ok'){
 	    				alert("Error :"+result);
 	    				$('#myModal').modal('show');
 	    			}
 	    		
 	    			},
 	    			error:function(){
 	    				alert("PlaceGTDOrder Error");
 	    			
 	    				}	
 	    			});			
 	    		}	
 	    	}
 	    	
 	    	else if ( $('li.BracketOrdcls').hasClass('active') ) {	
 	 		
 	    		
 	    		$(".Productscls").hide();
 	 		var sprdtali="CNC:CNC||MIS:MIS||NRML:NRML";	
 			var s_prdt_ali=sprdtali;
 			 
 			
 			 var Ttranstype='S';
 			 var qty=$("#QtyId").val();
 			
 			 var actid=$("#UserID").val();
 			 var uid=$("#UserID").val();
 		
 			 var Ret="DAY";
 			 
 			 var Price=$("#priceId").val();	
 			 if(Price==""){
 				 Price="0";    			
 	 		}
 			 var discqtyVAL=$("#DiscquantityId").val(); 
 			 var TsymVAL=$("#scripthiddval").val();
 	 		var exchangeType=$("#stockhiddval").val();
 	 		
 	 		var prd;			 
 	 		var scriptName=$("#scriptNamehiddval").val(); 	    		
	    		var displayName=$("#displaynamehiddval").val();
 			 
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
 			 var SqrOffvalue=$("#TargetAbsolutequanId").val();
 			 var SLAbsOrticks="Absolute";              				//Stop Loss type ( Absolute or Ticks )
 			 var SLvalue=$("#stoplossAbsolutequanId").val();
 			 var TargetstoplossVAL=$("#TargetstoplossquanId").val();
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
 			
 			if ($('li.lmtcls').hasClass('active') ) { //Price Type ( L or SL )
 				 var prctyp="LMT";
 				 var TrigPrice="0";
 			 }
 			if ($('li.slcls').hasClass('active') ) { //Price Type ( L or SL )
 				 var prctyp="SL"; 
 				 var TrigPrice=$("#TriggerpriceId").val();
 			 }
 			
 			$.ajax({
 				
 				type : 'POST',
 				url  : 'PlaceOrder',
 				data : "s_prdt_ali="+s_prdt_ali+"&uid="+uid+"&actid="+actid+"&Tsym="
 	    		+Tsym+"&exch="+exch+"&Ttranstype="+Ttranstype+"&Ret="+Ret+"&prctyp="+prctyp+"&qty="+qty+"&discqty="+discqty+"&prd="+prd+
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
 							$('#BuyOrderNumberModelId').modal('show'); 		
 							$('#buyOrderNumbers').html(result);
 							$('#myModal').modal('hide');
 						}
 						else if(stat==='Not_Ok'){
 							alert("Error :"+result);
 							$('#myModal').modal('show');
 						} 					
 						},
 					error:function(){
 						alert("BracketOrder Error");
 					
 					}	
 			});
 			
 		}
 	    	else if ( $('li.CoverOrdcls').hasClass('active') ) {		
 	    		
 	    		$(".Productscls").hide();
 	    		
 	    		var sprdtali="CNC:CNC||MIS:MIS||NRML:NRML";	
 	    		var s_prdt_ali=sprdtali;
 	    		
 	    		
 	    		var uid=$("#UserID").val();
 	    		var actid=$("#UserID").val();
 	    		var prctyp;
 	    		//if($("input:radio[name='lmtId']").is(":checked")) { //Price Type ( L or SL )
 	    		if ( $('li.lmtcls').hasClass('active') ){
 	    			  prctyp="LMT";
 	    		 }
 	    		 //if($("input:radio[name='mktId']").is(":checked")) { //Price Type ( L or SL )
 	    			if ( $('li.mktcls').hasClass('active') ){
 	    			  prctyp="MKT"; 
 	    		 }
 	    		
 	    		var qty=$("#QtyId").val();
 	    		var discqtyVAL="0";
 	    		var TsymVAL=$("#scripthiddval").val();
 	    		var exchangeType=$("#stockhiddval").val();
 	    		var prd;
 	    		var scriptName=$("#scriptNamehiddval").val(); 	    		
 	    		var displayName=$("#displaynamehiddval").val();
 	    	
 	    		 if(exchangeType==='MCX'){ //MCX
  	    			var exch=exchangeType;
  	    			var discqty=discqtyVAL;
  	    			var Tsym=TsymVAL;
  	    			prd="H"; 
  	    		 }
  	    		 if(exchangeType==='NSE'){ //NSE

  	    				var exch=NSE;
  	    				var discqty=discqtyVAL;
  	    				var Tsym=TsymVAL;
  	    				prd="H"; 
  	    				 }      		
  	    		
  	    		if(exchangeType==='NFO'){ //F&O-NFO
  	    			var exch="NFO";
  	    			var discqty=discqtyVAL;
  	    			var Tsym=TsymVAL;
  	    			prd="H"; 
  	    		}	   
  	    		
 		    		
 	    		var Ttranstype='S';  		
 	    			    		
 	    		var Ret="DAY";
 	    		
 	    		var MktPro="NA"; //(MktPro Should be sent as NA by default)
 	    		var Price=$("#priceId").val();
 	    		 if(Price==""){
 	    			 Price="0";    			
 	     		}
 	    		//var StopLossVAL= $('#CoStoplossId').val();
 	    		var StopLossVAL=$("#TriggerpriceId").val();
 	    		
 	    		if(StopLossVAL>0){
 	    			var TrigPrice=StopLossVAL;
 	    		}else{
 	    		var TrigPrice="0"; //(TrigPrice Send as 0 for default)
 	    		}
 	    		var Pcode="CO"; // need to check
 	    		var DateDays="NA"; //(DateDays Send as NA for default)
 	    		
 	    		
 	    			if ( $('li.AfterMarketOrdcls').hasClass('active') ){
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
 	    		url :'PlaceOrder',		
 	    		data:"s_prdt_ali="+s_prdt_ali+"&uid="+uid+"&actid="+actid+"&Tsym="+Tsym+
 	    		"&exch="+exch+"&Ttranstype="+Ttranstype+"&Ret="+Ret+"&prctyp="+prctyp+"&qty="+qty+"&discqty="+discqty+
 	    		"&MktPro="+MktPro+"&Price="+Price+"&TrigPrice="+TrigPrice+"&Pcode="+Pcode+"&DateDays="+DateDays+"&AMO="+AMO+
 	    		"&PosSquareFlg="+PosSquareFlg+"&MinQty="+MinQty+"&orderSource="+orderSource+"&naicCode="+naicCode+
 	    		"&ltpOratp="+ltpOratp+"&SqrOffAbsOrticks="+SqrOffAbsOrticks+"&SqrOffvalue="+SqrOffvalue+"&SLAbsOrticks="+
 	    		SLAbsOrticks+"&SLvalue="+SLvalue+"&trailingSL="+trailingSL+"&tSLticks="+tSLticks+"&userTag="+userTag+
 	    		"&TrigPrice="+TrigPrice+"&prd="+prd+"&scriptName="+scriptName+"&displayName="+displayName,
 				
 	    		success:function(JsonObject){
 	    		
 	    			alert("JsonObject : "+JsonObject); 
 	    			 $('#buySellModal').modal('hide');
 	    		/*var JsonObject= JSON.parse(response);
 	    		var values= Object.values(JsonObject);*/
 	    		var result=values[1];
 	    		var stat= values[0];
 	    		if(stat==='Ok'){
 	    			$('#BuyOrderNumberModelId').modal('show'); 		
 	    			$('#buyOrderNumbers').html(result);
 	    			$('#myModal').modal('hide');
 	    		}
 	    		else if(stat==='Not_Ok'){
 	    			alert("Error :"+result);
 	    			$('#myModal').modal('show');
 	    		}
 	    		
 	    		
 	    		},
 	    		error:function(){
 	    			alert("PlaceOrder Error");
 	    		
 	    		}	
 	    	});
 	    	
 	    	}
 	    		//else if($("input:radio[name='AfterMarketOrdId']").is(":checked")) { 
 	    		else if ($('li.AfterMarketOrdcls').hasClass('active')) {
 	     		
 	    			
 	    			
 	    			var sprdtali="CNC:CNC||MIS:MIS||NRML:NRML";	
 	    			var s_prdt_ali=sprdtali;
 	    			var uid=$("#UserID").val();
 	    			var actid=$("#UserID").val();
 	    			var qty=$("#QtyId").val();
 	    			var discqtyVAL=$("#DiscquantityId").val();
 	       		 
 	    			var TsymVAL=$("#scripthiddval").val();
 	        		var exchangeType=$("#stockhiddval").val();
 	        		
 	        		var scriptName=$("#scriptNamehiddval").val(); 	    		
 	 	    		var displayName=$("#displaynamehiddval").val();
 	        		var prd; 
 	        		 if(exchangeType==='MCX'){ //MCX
 	 	    			 
 	 	 	    		var exch=exchangeType;
 	 	 	    		var discqty=discqtyVAL;
 	 	 	    		var Tsym=TsymVAL;	 	    		
 	 	 	    		
 	 	 	    		if ($('.nrmlcls').hasClass('active')){
 	 	 	    			var Pcode="NRML";
 	 	 	    			prd="M";
 	 	 	    		}
 	 	 	    		if ($('.miscls').hasClass('active')){
 	 	 	    			var Pcode="MIS";
 	 	 	    			prd="I";
 	 	 	    		}
 	 	 	    		
 	 	 	    		 }
 	 	 	    		 if(exchangeType==='NSE'){ //NSE 	 	    			
 	 	 	    				var exch="NSE";
 	 	 	    				var discqty=discqtyVAL;
 	 	 	    				var Tsym=TsymVAL;
 	 	 	    				if ($('li.nrmlcls').hasClass('active')){
 	 	 	  	    			prd="M";
 	 	 	    				}
 	 	 	    				
 	 	 	    				if ($('.cnccls').hasClass('active')){	    	    			
 	 	 	    	    			prd="C";
 	 	 	    	    		} 	 	    				
 	 	 	    				if ($('.miscls').hasClass('active')){	    	    			
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
 	    		
 	    			if ( $('li.daycls').hasClass('active') ){
 	    			var Ret="DAY";
 	    			}
 	    			if ( $('li.ioccls').hasClass('active') ){
 	    				var Ret="IOC";
 	    				}
 	    			if ( $('li.gtccls').hasClass('active') ){
 	    				var Ret="GTC";
 	    				}
 	    			if ( $('li.gtdcls').hasClass('active') ){
 	    				var Ret="GTD";
 	    				}
 	    			if ( $('li.gttcls').hasClass('active') ){
 	    				var Ret="GTT";
 	    				}
 	    				var MktPro="NA"; //(MktPro Should be sent as NA by default)
 	    			var Price=$("#priceId").val();
 	    			 if(Price==""){
 	    				 Price="0";    			
 	    	 		}
 	    			
 	    			if ( $('.lmtcls').hasClass('active') ){ //Price Type ( L or SL )
 	    				var  prctyp="LMT";
 	    				 var TrigPrice="0";
 	    			 }
 	    			if ( $('.mktcls').hasClass('active') ){ //Price Type ( L or SL )
 	    				var prctyp="MKT"; 
 	    				var TrigPrice="0";
 	    			 }
 	    			if ( $('.slcls').hasClass('active') ){ //Price Type ( L or SL )
 	    				var prctyp="SL"; 
 	    				var TriggerpriceVAL="0";
 	    			 }
 	    			if ( $('.slmcls').hasClass('active') ){ //Price Type ( L or SL )
 	    				var prctyp="SL-M"; 
 	    				var TriggerpriceVAL=$('#TriggerpriceId').val();
 	    			 }
 	    			 
 	    			if ( $('.cnccls').hasClass('active') ){      			
 	    				var Pcode="CNC";
 	    			}
 	    			if ( $('.nrmlcls').hasClass('active') ){ 
 	    				var Pcode="NRML";
 	    			}
 	    			if ( $('.miscls').hasClass('active') ){ 
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
 	    			url :'PlaceOrder',	
 	    			data:"s_prdt_ali="+s_prdt_ali+"&uid="+uid+"&actid="+actid+"&prd="+prd+"&Tsym="+Tsym+
 	        		"&exch="+exch+"&Ttranstype="+Ttranstype+"&Ret="+Ret+"&prctyp="+prctyp+"&qty="+qty+"&discqty="+discqty+
 	        		"&MktPro="+MktPro+"&Price="+Price+"&TrigPrice="+TrigPrice+"&Pcode="+Pcode+"&DateDays="+DateDays+"&AMO="+AMO+
 	        		"&PosSquareFlg="+PosSquareFlg+"&MinQty="+MinQty+"&orderSource="+orderSource+"&naicCode="+naicCode+
 	        		"&ltpOratp="+ltpOratp+"&SqrOffAbsOrticks="+SqrOffAbsOrticks+"&SqrOffvalue="+SqrOffvalue+"&SLAbsOrticks="+
 	        		SLAbsOrticks+"&SLvalue="+SLvalue+"&trailingSL="+trailingSL+"&tSLticks="+tSLticks+"&userTag="+userTag+
 	        		"&TrigPrice="+TrigPrice+"&scriptName="+scriptName+"&displayName="+displayName,
 	    			
 	    			success:function(JsonObject){  
 	    				
 	    				alert("JsonObject : "+JsonObject);
 	    				 $('#buySellModal').modal('hide');
 	    			/*var JsonObject= JSON.parse(response);
 	    			var values= Object.values(JsonObject);*/
 	    			var result=values[1];
 	    			var stat= values[0];
 	    			if(stat==='Ok'){
 	    				$('#BuyOrderNumberModelId').modal('show'); 		
 	    				$('#buyOrderNumbers').html(result);
 	    				$('#myModal').modal('hide');
 	    			}
 	    			else if(stat==='Not_Ok'){
 	    				alert("Error :"+result);
 	    				$('#myModal').modal('show');
 	    			}	    			
 	    			},
 	    			error:function(){
 	    				alert("PlaceOrder Error");
 	    			}	
 	    		});     		
 	    }   	
 	  }


 	

 	
 	 
 	// ======== Buy/Sell END ===============