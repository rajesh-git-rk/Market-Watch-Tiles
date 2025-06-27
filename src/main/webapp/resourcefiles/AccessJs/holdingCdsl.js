
	// var mqttHost = '127.0.0.1';
	var mqttHost = '192.168.1.179';

	var symbolArray = new Array();
	
	var allSymbolArray =new Array();
	
	var continueToCDSLArray = new Array();
		
		function settleIdFun(){
		
			 $.ajax({
					type :'POST',
					url :'getsettleId',
				//    data :'',
					dataType: 'json',
					success:function(response){
						alert("response::"+response);
						//getscriptrefresh();

					},
					error:function(){
					//alert("getsettle Error");
						
					
					}	
				});
			
		}
		
		
		
		function holdingnonPOAfunction(){
			
			 $.ajax({
					type :'POST',
					url :'nonPOAHoldingDatafromDB',
				//    data :"Token=" +symbol,
					dataType: 'json',
					success:function(jsonObject){
						
						 var body="";
						 var holdingdata=jsonObject.list;
						 //alert("holdingdata : "+holdingdata)
						 var selectAll="Select All";
						 var selectinstr="Select Instrument";
						 var qtyHead="QTY";
						 
						 body=body+"<div class='scrollContent'>";
						 body=body+"<div class='scrollHeader'>"; 
						 body=body+"<ul>";
						 body=body+"<li>"+selectinstr+"</li>";
						 body=body+"<li>";
						 body=body+"<div class='form-check'>";						 
						 body=body+"<input type='checkbox' class='form-check-input' id='boidSelectAll' onclick='selectAll(this);'  />";						
						 body=body+"<label class='form-check-label' for='boidSelectAll'>"+selectAll+" ";
						 body=body+"</label>";
						 body=body+"</div>";
						 body=body+"</li>";
						 body=body+"<li>"+qtyHead+"</li>";
						 body=body+"</ul>";
						 body=body+"</div>";
						
							
						  for (var i = 0; i < holdingdata.length; i++) {			    		
							 
			    			var account_code=holdingdata[i].accountid;
			    		 	var symbol=holdingdata[i].symbol;
			    			var series=holdingdata[i].series;
			    			var quantity=holdingdata[i].quantity;
			    			
			    			
			    			var SymbolsSeries=symbol+"-"+series;
			    			 var symboldata=JSON.stringify(symbol+"-"+series);
			    			 var symbols=JSON.stringify(symbol);
			    			 var qty=JSON.stringify(quantity);
			    			 
						     var checkboxval=JSON.stringify(symbol+"|"+series+"|"+quantity);
						     
						   //  alert("checkboxval : "+checkboxval);
					
						     allSymbolArray.push(symbol+"|"+series+"|"+quantity);
						     
						//onclick='selectMultipleRecord("+checkboxval+")' name='"+holdingdata[i].symbol+"_checkbox' id='"+holdingdata[i].symbol+"_checkbox' 
						body=body+"<div class='scrollBody'>"; 
						body=body+"<ul>";
						body=body+"<li>";
						body=body+"<div class='form-check'>";
						body=body+"<input type='checkbox' class='form-check-input'  onclick='selectMultipleRecord("+checkboxval+")' name='"+holdingdata[i].symbol+"_checkbox' id='"+holdingdata[i].symbol+"_checkbox' />";
						body=body+"<label class='form-check-label' >"+SymbolsSeries+" ";
						body=body+"</label>";
						body=body+"</div>";
						body=body+"<div class='listQty'> "+quantity+" ";
						body=body+"</div>";
						body=body+"</li>";
						body=body+"</ul>";
						 body=body+"</div>";
						 }
						  body=body+"</div>";	

							
							$('.scrollBody').html(body);
					},
					error:function(){
					alert("getsettle Error");
						
					
					}	
				});
		}
		
		function selectAll(source) {
			
			
			 var checkboxes = document.querySelectorAll('input[type="checkbox"]');
		    for (var i = 0; i < checkboxes.length; i++) {
		        if (checkboxes[i] != source)
		            checkboxes[i].checked = source.checked;
		    } 
			
			    for (var i = 0; i < allSymbolArray.length; i++) {
			    	
			            var symbolval=allSymbolArray[i].toString().split("|");
			            
			            var symboldata=symbolval[0].toString()+"|"+symbolval[1].toString()+"|"+symbolval[2].toString();
						//alert("symboldata "+symboldata)
			            symbolArray.push(symboldata);
			    }
		}
		
		
		
		function selectMultipleRecord(checkboxval){
			
		//	alert("checkboxval "+checkboxval)
			
          var checkedValue = $('.checkBoxClass:checked').val(); 
          symbolArray.push(checkboxval);
				 	
						 
		}
		
		function finalSelectedCheckbox(){
			
			  $("#authorizeModal").modal('show');
			  
			for(var j=0; j<symbolArray.length; j++){
				
			var symbols =	symbolArray[j].toString().split("|");
				
			//	alert("symbols 1: "+symbols[0].toString());
			//	alert("symbols 2: "+symbols[1].toString());
			//	alert("symbols 3: "+symbols[2].toString());
			var symboldata=symbols[0].toString()+" "+symbols[1].toString();
			
			var qty=symbols[2].toString();
			
			//alert("symboldata::"+symboldata+" qty : "+qty);
			
			 $.ajax({
				type :'POST',
				url :'getISINNumber',
			    data :"Symbol=" +symboldata+"&Qty="+qty,
				dataType: 'json',
				success:function(jsonObject){
					// var jsonObject =JSON.parse(response);
					
					var qtyval=jsonObject.qty;
					var Isinval=jsonObject.isin;
					var trancationid=jsonObject.transactionid;
					
				var count = Object.values(jsonObject);
	
				var countVal=count[1];
				
				var jsonObjectVal =JSON.parse(countVal);
					 
					 for (var i = 0; i <jsonObjectVal.length; i++) {
						 
						 if(jsonObjectVal[i].properties.nseToken !=null){
							 
							 var nseISINNo=jsonObjectVal[i].properties.nseISINNo;
							 
						//	 alert("nseISINNo:::"+nseISINNo+"qty::"+qtyval+"trancationid::"+trancationid);
							 
							 var cdsldata=nseISINNo+"|"+qtyval+"|"+trancationid;

							 continueToCDSLArray.push(cdsldata);

						 }
					 }
				},
				error:function(){
				alert("getsettle Error");
					
				
				}	
			}); 

	 			}
	 		
		}
		
		var trancationdataArr = new Array();
		
		function continuetocdsl(){
			
			var boidId=document.getElementById("bioIdInput").value;
			var settleId=document.getElementById("settlehiddenId").value;
			
			//alert("boidId::"+boidId+"settleId::"+settleId);
			
			var isinNumber;
			var qtyval;
			var trancationid;
		//	var trancationdataArr = new Array();
			//var trancationdata[];
			
		//	"<input type='hidden' id='trancationdata' name='trancationdata' />"
			for(var j=0; j<continueToCDSLArray.length; j++){
				
			var cdsldata =	continueToCDSLArray[j].toString().split("|");
				
				/*alert("cdsldata 1: "+cdsldata[0].toString());
				alert("cdsldata 2: "+cdsldata[1].toString());
				alert("cdsldata  3: "+cdsldata[2].toString());*/
				
			isinNumber=cdsldata[0].toString();
			qtyval=cdsldata[1].toString();
			trancationid=cdsldata[2].toString();
			
			trancationdata=trancationid+"|"+isinNumber+"|"+qtyval;
			
			
			trancationdataArr.push(trancationdata);
			//$("#trancationdata").html(trancationdata);
			
		//	document.getElementById('trancationdata').value += trancationdata;

			
			}
			//alert("trancationdataArr "+trancationdataArr.toString());
			
		//	var dataVal=document.getElementById("trancationdata").value;
		
	//	var $dataVal=$("#trancationdata").html();
			
		//	alert("dataVal:::"+dataVal);
			//alert("BOID : "+boidId+" settleId : "+settleId+" ");
			//alert(" isinNumber : "+isinNumber+" qtyval : "+qtyval);
			
			
			 $.ajax({
					type :'POST',
					url :'getContinueToCDSL',
				    data :"BOID=" +boidId+"&SettlementId="+settleId+"&TranactionId="+trancationid+"&IsinNumber="+isinNumber+"&Quantity="+qtyval+"&trancationdata="+trancationdataArr,
					dataType: 'json',
					success:function(jsonObject){
						// var jsonObject =JSON.parse(response);
						console.log("response for cdsl : "+jsonObject);
						alert("jsonObject :"+jsonObject);	
						
						$("#authorizeModal").hide();
						
						document.getElementById("transactiondataId").value=trancationdataArr;
						
						 Responsetocdsl();
						
						
						
						
						
						
						
						
					},
					error:function(){
					alert("getcontinue cdsl Error");
						
					
					}	
				}); 
			 
		//	}
		}
		
		
	/*	function  Responsetocdsl(){
			
			//var trancationdataArr=document.getElementById("transactiondataId").value();
			var trancationdata=trancationdataArr;
			alert("trancationdata : "+trancationdata);
			
			$("#CdslResponsePage").show();
			$("#CdslResponseDivId").show();
			
			
			 $.ajax({
					type :'POST',
					url :'CdslReturnUrl',
				    data :"trancationdata="+trancationdata,
					dataType: 'json',
					success:function(jsonObject){
						
						console.log("response for cdsl : "+jsonObject);
						alert("jsonObject :"+jsonObject);	
						
					},
					error:function(){
					alert("getcontinue cdsl Error");
						
					
					}	
				}); 
			
			
		}*/