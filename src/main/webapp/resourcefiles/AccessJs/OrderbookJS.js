




function mydiscqtyFunction(){
    
	   var Discquantity = document.getElementById("DiscquantityId").value;
	   var Quantity = document.getElementById("QtyId").value;
	   
	   var scriptName=$("#stockhiddval").val();
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
	 if(scriptName==='NSE'){ 			//NSE
		
		 $("#NrmlId").prop("disabled",true);
		 $('#GTTlabelId').show();
		 
	  var perVal = Number(Quantity /100 ) * Number(ValueTenPer);
	  
	  if(Number(Discquantity) === Number(Zero)){
		     $("#DiscQuanNSEErrorId").hide();

 		  document.getElementById("buyId").disabled = false;	
 		  document.getElementById("sellId").disabled = false;
	  }

	  else if(Number(Discquantity)<Number(perVal) ||  Number(Discquantity)>Number(Quantity))
	{
			document.getElementById("DiscQuanNSEhiddenErrorId").value='DiscQuanNSEError';
		  $("#DiscQuanNSEErrorId").show();

		  document.getElementById("buyId").disabled = true;	
		  document.getElementById("sellId").disabled = true;
	}
	  else if(Number(Discquantity)>=Number(perVal) ||  Number(Discquantity)>Number(Quantity))
	{
		  $("#DiscQuanNSEErrorId").hide();

		  document.getElementById("buyId").disabled = false;	
		  document.getElementById("sellId").disabled = false;
	}
	 }
	 
	 if(scriptName==='MCX'){ 				//MCX
		 
		 $("#cncId").prop("disabled",true);
		 $('#GTTlabelId').hide();	
		 
		 var perVal = Number(Quantity /100 ) * Number(ValueTwentyFivePer);
					
		 if(Number(Discquantity) === Number(Zero)){
			   $("#DiscQuanMCXErrorId").hide();

	    		  document.getElementById("buyId").disabled = false;	
	    		  document.getElementById("sellId").disabled = false;
		  }
		 
		 else  if(Number(Discquantity)<Number(perVal) ||  Number(Discquantity)>Number(Quantity))
			{
				 document.getElementById("DiscQuanMCXhiddenErrorId").value='DiscQuanMCXError';
				  $("#DiscQuanMCXErrorId").show();

	    		  document.getElementById("buyId").disabled = true;	
	    		  document.getElementById("sellId").disabled = true;
			}
			  else if(Number(Discquantity)>=Number(perVal) ||  Number(Discquantity)>Number(Quantity))
			{
				  $("#DiscQuanMCXErrorId").hide();

	    		  document.getElementById("buyId").disabled = false;	
	    		  document.getElementById("sellId").disabled = false;
			}
		  
	 }
	 
} 

function myqtyFunction(){
	   
	   var Quantity = document.getElementById("QtyId").value;
	   var Discquantity = document.getElementById("DiscquantityId").value;
	
	      var scriptName=$("#stockhiddval").val();
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
	  if(scriptName==='NSE'){ 		//NSE
		  
		 $("#NrmlId").prop("disabled",true);
		 $('#GTTlabelId').show();
		 
	  var perVal = Number(Quantity /100 ) * Number(ValueTenPer);
	  
	  if(Number(Discquantity) === Number(Zero)){
		   $("#DiscQuanNSEErrorId").hide();

 		  document.getElementById("buyId").disabled = false;	
 		  document.getElementById("sellId").disabled = false;
	  }
	  
	  else  if(Number(Discquantity)<Number(perVal) ||  Number(Discquantity)>Number(Quantity))
	{
		  document.getElementById("DiscQuanNSEhiddenErrorId").value='DiscQuanNSEError';
		  $("#DiscQuanNSEErrorId").show();

		  document.getElementById("buyId").disabled = true;	
		  document.getElementById("sellId").disabled = true;
	}
	  else if(Number(Discquantity)>=Number(perVal) ||  Number(Discquantity)>Number(Quantity))
	{
		  $("#DiscQuanNSEErrorId").hide();

		  document.getElementById("buyId").disabled = false;	
		  document.getElementById("sellId").disabled = false;
	}
	  }

		if(scriptName==='MCX'){        //MCX
			
		 $("#cncId").prop("disabled",true);
		 $('#GTTlabelId').hide();
		 
		 var perVal = Number(Quantity /100 ) * Number(ValueTwentyFivePer);
		 
		 if(Number(Discquantity) === Number(Zero)){
			   $("#DiscQuanMCXErrorId").hide();

	    		  document.getElementById("buyId").disabled = false;	
	    		  document.getElementById("sellId").disabled = false;
		  }	  
		 else if(Number(Discquantity)<Number(perVal) ||  Number(Discquantity)>Number(Quantity))
			{
			document.getElementById("DiscQuanMCXhiddenErrorId").value='DiscQuanMCXError';
				  $("#DiscQuanMCXErrorId").show();

	    		  document.getElementById("buyId").disabled = true;	
	    		  document.getElementById("sellId").disabled = true;
			}
			  else if(Number(Discquantity)>=Number(perVal) ||  Number(Discquantity)>Number(Quantity))
			{
				  $("#DiscQuanMCXErrorId").hide();

	    		  document.getElementById("buyId").disabled = false;	
	    		  document.getElementById("sellId").disabled = false;
			}
		}
		
}





//Regular Order When you Click SL Order Type Validation for TriggerPrice

function TriggerPriceFunction(){
	
	  var TriggerPriceVAL=$("#TriggerpriceId").val();
      var PriceVAL=$("#priceId").val();
      if($("input:radio[name='RegularOrdId']").is(":checked")) {
    	 
    	  if($("input:radio[name='slId']").is(":checked")) {
    		
    	  if(Number(TriggerPriceVAL)>Number(PriceVAL)){
    		  document.getElementById("TriggerPricehiddenErrorId").value='TriggerPriceError';
    		  $("#TriggerPriceErrorId").show();
    		  document.getElementById("buyId").disabled = true;	
    		  document.getElementById("sellId").disabled = true;
        }
        else if(Number(PriceVAL)>=Number( TriggerPriceVAL) || Number(PriceVAL)>Number(TriggerPriceVAL)){
      	  $("#TriggerPriceErrorId").hide();
      	document.getElementById("buyId").disabled = false;
		document.getElementById("sellId").disabled = false;
        }
    	  }
      }
	  
}


function TriggerPricekeyupFunction(){
	
	
	  var TriggerPriceVAL=$("#TriggerpriceId").val();
      var PriceVAL=$("#priceId").val();
      if($("input:radio[name='RegularOrdId']").is(":checked")) {
    	 
    	  if($("input:radio[name='slId']").is(":checked")) {
    		
    	  if(Number(TriggerPriceVAL)>Number(PriceVAL)){
    		  document.getElementById("TriggerPricehiddenErrorId").value='TriggerPriceError';
    		  $("#TriggerPriceErrorId").show();
    		  document.getElementById("buyId").disabled = true;	
    		  document.getElementById("sellId").disabled = true;
        }
        else if(Number(PriceVAL)>=Number( TriggerPriceVAL) || Number(PriceVAL)>Number(TriggerPriceVAL)){
      	  $("#TriggerPriceErrorId").hide();
      	document.getElementById("buyId").disabled = false;
		document.getElementById("sellId").disabled = false;
        }
    	  }
      }
	  
	
}


//Regular Order When you Click SL Order Type Validation for Price
 function myPriceFunction(){
	 
	  var TriggerPriceVAL=$("#TriggerpriceId").val();
   	  var PriceVAL=$("#priceId").val();
     if($("input:radio[name='RegularOrdId']").is(":checked")) {
    	 
   	  if($("input:radio[name='slId']").is(":checked")) {
	  if(Number(TriggerPriceVAL)>Number(PriceVAL)){
		  document.getElementById("TriggerPricehiddenErrorId").value='TriggerPriceError';
		  $("#TriggerPriceErrorId").show();
		  document.getElementById("buyId").disabled = true;	
		  document.getElementById("sellId").disabled = true;
   }
   else if(Number(PriceVAL)>=Number( TriggerPriceVAL) || Number(PriceVAL)>Number(TriggerPriceVAL)){
 	  $("#TriggerPriceErrorId").hide();
 	 document.getElementById("buyId").disabled = false;
		document.getElementById("sellId").disabled = false;
   }
   	  }
     }
 }


 
 function myPriceonkeyupFunction(){

	  var TriggerPriceVAL=$("#TriggerpriceId").val();
   	  var PriceVAL=$("#priceId").val();
     if($("input:radio[name='RegularOrdId']").is(":checked")) {
    	 
   	  if($("input:radio[name='slId']").is(":checked")) {
	  if(Number(TriggerPriceVAL)>Number(PriceVAL)){
		  document.getElementById("TriggerPricehiddenErrorId").value='TriggerPriceError';
		  $("#TriggerPriceErrorId").show();
		  document.getElementById("buyId").disabled = true;	
		  document.getElementById("sellId").disabled = true;
   }
   else if(Number(PriceVAL)>=Number( TriggerPriceVAL) || Number(PriceVAL)>Number(TriggerPriceVAL)){
 	  $("#TriggerPriceErrorId").hide();
 	 document.getElementById("buyId").disabled = false;
		document.getElementById("sellId").disabled = false;
   }
   	  }
     }
	 
 }















function PlaceOrderbuyfun(){
	
	//alert("buyOrder")
	
	var web="WEB";
	var MCX="MCX";
	var NSE="NSE";
	var DiscQuanErrorTag= document.getElementById("DiscQuanhiddenErrorId").value;		
	
	if($("input:radio[name='CoverOrdId']").is(":checked")) { 
			
// 		alert("CoverOrdId")
		
		var sprdtali="CNC:CNC||MIS:MIS||NRML:NRML";	
		var s_prdt_ali=sprdtali;
		var uid=$("#UserID").val();
		var actid=$("#UserID").val();
		
		//var prctyp="L"; //Price type (from DefaultLogin/ NormalLogin rest api)
		
		var prctyp;
		if($("input:radio[name='lmtId']").is(":checked")) { //Price Type ( L or SL )
			  prctyp="L";
		 }
		 if($("input:radio[name='mktId']").is(":checked")) { //Price Type ( L or SL )
			  prctyp="MKT"; 
		 }
		
		 
		
		var qty=$("#QtyId").val();
		var discqtyVAL=$("#DiscquantityId").val();
 	 	var TsymVAL=$("#scripthiddval").val();
		var scriptName=$("#stockhiddval").val();
		
		 if(scriptName==='MCX'){ //MCX
			var exch=MCX;
			var discqty=discqtyVAL;
			var Tsym=TsymVAL;
		 }
		 if(scriptName==='NSE'){ //NSE

				var exch=NSE;
				var discqty=discqtyVAL;
				var Tsym=TsymVAL;
				 }
		
		
		if(scriptName==='NFO'){ //F&O-NFO
			var exch="NFO";
			var discqty=$("#DiscquantityId").val();
			var Tsym=TsymVAL;
		}
		var Ttranstype='B';
		
		if($("input:radio[name='dayId']").is(":checked")) {
		var Ret="DAY";
		}
		
		var MktPro="NA"; //(MktPro Should be sent as NA by default)
		var Price=$("#priceId").val();
		
		var StopLossVAL= $('#CoStoplossId').val();

		if(StopLossVAL>0){
			var TrigPrice=StopLossVAL;
		}else{
		var TrigPrice="0"; //(TrigPrice Send as 0 for default)
		}
		var Pcode="CO"; // need to check
		var DateDays="NA"; //(DateDays Send as NA for default)
		
		if($("input:radio[name='AfterMarketOrdId']").is(":checked")) {	
			var AMO="YES";
		}
		else{
			var AMO="NO";
		}
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
		"&PosSquareFlg="+PosSquareFlg+"&MinQty="+MinQty+"&orderSource="+orderSource+"&naicCode="+naicCode,
		success:function(response){
		
		var JsonObject= JSON.parse(response);
		var values= Object.values(JsonObject);
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
		else if($("input:radio[name='AfterMarketOrdId']").is(":checked")) { 
			
// 			alert("AfterMarketOrd")
			var sprdtali="CNC:CNC||MIS:MIS||NRML:NRML";	
			var s_prdt_ali=sprdtali;
			var uid=$("#UserID").val();
			var actid=$("#UserID").val();
	 	 	var TsymVAL=$("#scripthiddval").val();
			var qty=$("#QtyId").val();
			var discqtyVAL=$("#DiscquantityId").val();
			
			 var scriptName=$("#stockhiddval").val();
			 if(scriptName==='MCX'){ //MCX

			var exch=MCX;
			var discqty=discqtyVAL;
			var Tsym=TsymVAL;
			 }
			 if(scriptName==='NSE'){ //NSE

					var exch=NSE;
					var discqty=discqtyVAL;
					var Tsym=TsymVAL;
					 }
			 
			 if(scriptName==='NFO'){ //F&O-NFO
					var exch="NFO";
					var discqty="0";
					var Tsym=TsymVAL;
				}
			 
			var Ttranstype='B';
			
			if($("input:radio[name='dayId']").is(":checked")) {
			var Ret="DAY";
			}
			if($("input:radio[name='iocId']").is(":checked")) {
				var Ret="IOC";
				}
			if($("input:radio[name='gtcId']").is(":checked")) {
				var Ret="GTC";
				}
			if($("input:radio[name='gtdId']").is(":checked")) {
				var Ret="GTD";
				}
			if($("input:radio[name='gttId']").is(":checked")) {
				var Ret="GTT";
				}
			//var prctyp="L"; //Price type (from DefaultLogin/ NormalLogin rest api)
			
			var prctyp;
			if($("input:radio[name='lmtId']").is(":checked")) { //Price Type ( L or SL )
				  prctyp="L";
			 }
			 if($("input:radio[name='mktId']").is(":checked")) { //Price Type ( L or SL )
				  prctyp="MKT"; 
			 }
			 if($("input:radio[name='slId']").is(":checked")) { //Price Type ( L or SL )
				  prctyp="SL"; 
			 }
			 if($("input:radio[name='sl-mId']").is(":checked")) { //Price Type ( L or SL )
				  prctyp="SL-M"; 
			 }
			 
			
			
			var MktPro="NA"; //(MktPro Should be sent as NA by default)
			var Price=$("#priceId").val();
			
			var TriggerpriceVAL=$('#TriggerpriceId').val();  //(TrigPrice Send as 0 for default)
			
			if($("input:radio[name='lmtId']").is(":checked")) {
				var TrigPrice="0";
			}
			if($("input:radio[name='mktId']").is(":checked")) {
				var TrigPrice="0";
			}
			if($("input:radio[name='slId']").is(":checked")) {
				var TrigPrice=TriggerpriceVAL;
			}
			if($("input:radio[name='sl-mId']").is(":checked")) {
				var TrigPrice=TriggerpriceVAL;
			}
			
			if($("input:radio[name='cncId']").is(":checked")) {
				var Pcode="CNC";
			}
			if($("input:radio[name='NrmlId']").is(":checked")) {
				var Pcode="NRML";
			}
			if($("input:radio[name='MisId']").is(":checked")) {
				var Pcode="MIS";
			}
			var DateDays="NA"; //(DateDays Send as NA for default)
			var AMO="YES";
			
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
			"&PosSquareFlg="+PosSquareFlg+"&MinQty="+MinQty+"&orderSource="+orderSource+"&naicCode="+naicCode,
			success:function(response){
			
			var JsonObject= JSON.parse(response);
			var values= Object.values(JsonObject);
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
	
	else if($("input:radio[name='BracketOrdId']").is(":checked")) { 
		
// 		alert("BracketOrd")
		 
		 
		 var Ttranstype='B';
		 var qty=$("#QtyId").val();
		 var actid=$("#UserID").val();
		 var uid=$("#UserID").val();
		 
		 if($("input:radio[name='dayId']").is(":checked")) {
				var Ret="DAY";
				}
		 
		 var Price=$("#priceId").val();	
 		 var TokenNo=$("#tokenhiddval").val(); 								
		 var discqtyVAL=$("#DiscquantityId").val();
		 var scriptName=$("#stockhiddval").val();
		 if(scriptName==='MCX'){ //MCX

		var exch=MCX;
		var discqty=discqtyVAL;
		var TokenNo=TokenNo;
		 }
		 if(scriptName==='NSE'){ //NSE

				var exch=NSE;
				var discqty=discqtyVAL;
				var TokenNo=TokenNo;
				 }
		 
		 if(scriptName==='NFO'){ //F&O-NFO
				var exch="NFO";
				var discqty="0";
				var TokenNo=TokenNo;
			}
		 
		 var ltpOratp="LTP"; //LTP or ATP
		 
		 var SqrOffAbsOrticks="Absolute";  						//Square Off type ( Absolute or Ticks )
		 var SqrOffvalue=$("#TargetAbsolutequanId").val();
		 var SLAbsOrticks="Absolute";              				//Stop Loss type ( Absolute or Ticks )
		 var SLvalue=$("#stoplossAbsolutequanId").val();
		 		 							
		var TargetstoplossVAL=$("#TargetstoplossquanId").val();
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
		 
		 if($("input:radio[name='lmtId']").is(":checked")) { //Price Type ( L or SL )
			 var prctyp="L";
			 var TrigPrice="0";
		 }
		 if($("input:radio[name='slId']").is(":checked")) { //Price Type ( L or SL )
			 var prctyp="SL"; 
			 var TrigPrice=$("#TriggerpriceId").val();
		 }
		
		$.ajax({
			
			type : 'POST',
			url  : 'placebracketorder',
			data : "exch="+exch+"&TokenNo="+TokenNo+"&Ttranstype="+Ttranstype+"&qty="+qty+"&actid="+actid+"&uid="+uid+
			"&Ret="+Ret+"&discqty="+discqty+"&Price="+Price+"&ltpOratp="+ltpOratp+"&SqrOffAbsOrticks="+SqrOffAbsOrticks+
			"&SqrOffvalue="+SqrOffvalue+"&SLAbsOrticks="+SLAbsOrticks+"&SLvalue="+SLvalue+"&trailingSL="+trailingSL+
			"&tSLticks="+tSLticks+"&naicCode="+naicCode+"&orderSource="+orderSource+"&userTag="+userTag+
			"&prctyp="+prctyp+"&TrigPrice="+TrigPrice,
			
				success:function(response){

					var JsonObject= JSON.parse(response);
					var values= Object.values(JsonObject);
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
	
	else if($("input:radio[name='RegularOrdId']").is(":checked")) { 
		
 		//alert("RegularOrdId");
		
		if($("input:radio[name='dayId']").is(":checked")) {
		var Ret="DAY";
		}
		if($("input:radio[name='iocId']").is(":checked")) {
			var Ret="IOC";
			}
		if($("input:radio[name='gtcId']").is(":checked")) {
			var Ret="GTC";
			}
		if($("input:radio[name='gtdId']").is(":checked")) {
			var Ret="GTD";
			}
		if($("input:radio[name='gttId']").is(":checked")) {
			var Ret="GTT";
			}
		
		
		if(Ret==="DAY" || Ret==="IOC" || Ret==="GTT" ){
			
		
		var sprdtali="CNC:CNC||MIS:MIS||NRML:NRML";	
		var s_prdt_ali=sprdtali;
		var uid=$("#UserID").val();
		var actid=$("#UserID").val();
		var Ttranstype='B';
		
		//var prctyp="L"; //Price type (from DefaultLogin/ NormalLogin rest api)
		
		var prctyp;
		if($("input:radio[name='lmtId']").is(":checked")) { //Price Type ( L or SL )
			  prctyp="L";
		 }
		 if($("input:radio[name='mktId']").is(":checked")) { //Price Type ( L or SL )
			  prctyp="MKT"; 
		 }
		 if($("input:radio[name='slId']").is(":checked")) { //Price Type ( L or SL )
			  prctyp="SL"; 
		 }
		 if($("input:radio[name='sl-mId']").is(":checked")) { //Price Type ( L or SL )
			  prctyp="SL-M"; 
		 }
		 
		
		var qty=$("#QtyId").val();
		var discqtyVAL=$("#DiscquantityId").val();
		 var scriptName=$("#stockhiddval").val();
		 var TokenNo=$("#tokenhiddval").val(); 
  	 	var TsymVAL=$("#scripthiddval").val();
		 if(scriptName==='MCX'){ //MCX
			 
		var exch="MCX";
		var discqty=discqtyVAL;
		var Tsym=TsymVAL;
		var TokenNo=TokenNo;
		
		 }
		 if(scriptName==='NSE'){ //NSE
			
				var exch="NSE";
				var discqty=discqtyVAL;
				var Tsym=TsymVAL;
				var TokenNo=TokenNo;
				}
		 
		 if(scriptName==='NFO'){ //F&O-NFO
			
				var exch="NFO";
				var discqty="0";			 
				var Tsym=TsymVAL;
				var TokenNo=TokenNo;
			}
		 
		var MktPro="NA"; //(MktPro Should be sent as NA by default)
		
		var PriceVAL=$("#priceId").val();
		var TriggerpriceVAL=$('#TriggerpriceId').val();  //(TrigPrice Send as 0 for default)
		
		if($("input:radio[name='lmtId']").is(":checked")) {
			var TrigPrice="0";
			var Price=PriceVAL;
		}
		if($("input:radio[name='mktId']").is(":checked")) {
			var TrigPrice="0";
			var Price="0";
		}
		if($("input:radio[name='slId']").is(":checked")) {
			var TrigPrice=TriggerpriceVAL;
			var Price=PriceVAL;
		}
		if($("input:radio[name='sl-mId']").is(":checked")) {
			var TrigPrice=TriggerpriceVAL;
			var Price="0";
		}
				
		if($("input:radio[name='cncId']").is(":checked")) {
			var Pcode="CNC";
		}
		if($("input:radio[name='NrmlId']").is(":checked")) {
			var Pcode="NRML";
		}
		if($("input:radio[name='MisId']").is(":checked")) {
			var Pcode="MIS";
		}
		var DateDays="NA"; //(DateDays Send as NA for default)
		
		if($("input:radio[name='AfterMarketOrdId']").is(":checked")) {	
			var AMO="YES";
		}
		else{
			var AMO="NO";
		}
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
		
		else if(Ret==="GTC" || Ret==="GTD" ){
			
		
			var sprdtali="CNC:CNC||MIS:MIS||NRML:NRML";	
			
			var s_prdt_ali=sprdtali;
			
			var uid=$("#UserID").val();
			var actid=$("#UserID").val();
			var Ttranstype='B';
			
			if($("input:radio[name='gtcId']").is(":checked")) {
				Ret="GTC";
				}
			if($("input:radio[name='gtdId']").is(":checked")) {
				Ret="GTD";
				}
			
			var prctyp;
			if($("input:radio[name='lmtId']").is(":checked")) { //Price Type ( L or SL )
				  prctyp="L";
			 }
			 if($("input:radio[name='mktId']").is(":checked")) { //Price Type ( L or SL )
				  prctyp="MKT"; 
			 }
			 if($("input:radio[name='slId']").is(":checked")) { //Price Type ( L or SL )
				  prctyp="SL"; 
			 }
			 if($("input:radio[name='sl-mId']").is(":checked")) { //Price Type ( L or SL )
				  prctyp="SL-M"; 
			 }			 
			
			 var qty=$("#QtyId").val();
			 var scriptName=$("#stockhiddval").val();
	  	 	 var TsymVAL=$("#scripthiddval").val();
	  	 	 
			 if(scriptName==='MCX'){ //MCX			 
				 var exch="MCX";
				 var Tsym=TsymVAL;			
			 	}
			 if(scriptName==='NSE'){ //NSE			
					var exch="NSE";
					var Tsym=TsymVAL;
					}			 
			 if(scriptName==='NFO'){ //F&O-NFO				
					var exch="NFO";
					var Tsym=TsymVAL;
				}
			 
			
			var PriceVAL=$("#priceId").val();
			
			if($("input:radio[name='lmtId']").is(":checked")) {
				var Price=PriceVAL;
			}
			if($("input:radio[name='mktId']").is(":checked")) {
				var Price="0";
			}
			if($("input:radio[name='slId']").is(":checked")) {
				var Price=PriceVAL;
			}
			if($("input:radio[name='sl-mId']").is(":checked")) {
				var Price="0";
			}
			
			
			var Pcode;
			if($("input:radio[name='cncId']").is(":checked")) {
				Pcode="CNC";
			}
			if($("input:radio[name='NrmlId']").is(":checked")) {
				Pcode="NRML";
			}
			if($("input:radio[name='MisId']").is(":checked")) {
				Pcode="MIS";
			}
			
			var DateDaysTag=$("#datepicker").val(); //(DateDays Send as NA for default)	
					
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
			success:function(response){
			
			var JsonObject= JSON.parse(response);
			var values= Object.values(JsonObject);
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
	

}


function PlaceOrdersellfun(){

// 	alert("sellOrder")
	var web="WEB";
	var MCX="MCX";
	var NSE="NSE";
		var DiscQuanErrorTag= document.getElementById("DiscQuanhiddenErrorId").value;		
	
	if($("input:radio[name='CoverOrdId']").is(":checked")) { 
			
// 		alert("CoverOrdId")
		
		var sprdtali="CNC:CNC||MIS:MIS||NRML:NRML";	
		var s_prdt_ali=sprdtali;
		var uid=$("#UserID").val();
		var actid=$("#UserID").val();
		var Ttranstype='S';
		
		if($("input:radio[name='dayId']").is(":checked")) {
		var Ret="DAY";
		}
		
		//var prctyp="L"; //Price type (from DefaultLogin/ NormalLogin rest api)
		
		var prctyp;
		if($("input:radio[name='lmtId']").is(":checked")) { //Price Type ( L or SL )
			  prctyp="L";
		 }
		 if($("input:radio[name='mktId']").is(":checked")) { //Price Type ( L or SL )
			  prctyp="MKT"; 
		 }
		
		 
		
		var qty=$("#QtyId").val();
		
		var discqtyVAL=$("#DiscquantityId").val();
		 var scriptName=$("#stockhiddval").val();

	 	 	var TsymVAL=$("#scripthiddval").val();
			
		 
		 if(scriptName==='MCX'){ //MCX

		var exch=MCX;
		var discqty=discqtyVAL;
		var Tsym=TsymVAL;
		 }
		 if(scriptName==='NSE'){ //NSE

				var exch=NSE;
				var discqty=discqtyVAL;
				var Tsym=TsymVAL;
				 }
		 
		 if(scriptName==='NFO'){ //F&O-NFO
				var exch="NFO";
				var discqty="0";
				var Tsym=TsymVAL;
			}
		 
		
		var MktPro="NA"; //(MktPro Should be sent as NA by default)
		var Price=$("#priceId").val();
		
		var StopLossVAL= $('#CoStoplossId').val();
		if(StopLossVAL>0){
			var TrigPrice=StopLossVAL;
		}else{
		var TrigPrice="0"; //(TrigPrice Send as 0 for default)
		}
		var Pcode="CO"; // need to check
		var DateDays="NA"; //(DateDays Send as NA for default)
		
		if($("input:radio[name='AfterMarketOrdId']").is(":checked")) {	
			var AMO="YES";
		}
		else{
			var AMO="NO";
		}
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
		"&PosSquareFlg="+PosSquareFlg+"&MinQty="+MinQty+"&orderSource="+orderSource+"&naicCode="+naicCode,
		success:function(response){
		
		var JsonObject= JSON.parse(response);
		var values= Object.values(JsonObject);
		var result=values[1];
		var stat= values[0];
		if(stat==='Ok'){
			$('#SellOrderNumberModelId').modal('show'); 		
			$('#sellOrderNumbers').html(result);
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
		else if($("input:radio[name='AfterMarketOrdId']").is(":checked")) { 
			
// 			alert("AfterMarketOrd")
			var sprdtali="CNC:CNC||MIS:MIS||NRML:NRML";	
			var s_prdt_ali=sprdtali;
			var uid=$("#UserID").val();
			var actid=$("#UserID").val();
			
			var Ttranstype='S';
			
			if($("input:radio[name='dayId']").is(":checked")) {
			var Ret="DAY";
			}
			if($("input:radio[name='iocId']").is(":checked")) {
				var Ret="IOC";
				}
			if($("input:radio[name='gtcId']").is(":checked")) {
				var Ret="GTC";
				}
			if($("input:radio[name='gtdId']").is(":checked")) {
				var Ret="GTD";
				}
			if($("input:radio[name='gttId']").is(":checked")) {
				var Ret="GTT";
				}
			//var prctyp="L"; //Price type (from DefaultLogin/ NormalLogin rest api)
			
			var prctyp;
			if($("input:radio[name='lmtId']").is(":checked")) { //Price Type ( L or SL )
				  prctyp="L";
			 }
			 if($("input:radio[name='mktId']").is(":checked")) { //Price Type ( L or SL )
				  prctyp="MKT"; 
			 }
			 if($("input:radio[name='slId']").is(":checked")) { //Price Type ( L or SL )
				  prctyp="SL"; 
			 }
			 if($("input:radio[name='sl-mId']").is(":checked")) { //Price Type ( L or SL )
				  prctyp="SL-M"; 
			 }
			 
			
			var qty=$("#QtyId").val();
			var discqtyVAL=$("#DiscquantityId").val();
			 var scriptName=$("#stockhiddval").val();
		 	 	var TsymVAl=$("#scripthiddval").val();

			 
			 if(scriptName==='MCX'){ //MCX

			var exch=MCX;
			var discqty=discqtyVAL;
			var Tsym=TsymVAl;
			 }
			 if(scriptName==='NSE'){ //NSE

					var exch=NSE;
					var discqty=discqtyVAL;
					var Tsym=TsymVAl;
					 }
			 
			 if(scriptName==='NFO'){ //F&O-NFO
					var exch="NFO";
					var discqty="0";
					var Tsym=TsymVAl;
				}
			
			var MktPro="NA"; //(MktPro Should be sent as NA by default)
			var Price=$("#priceId").val();
			
			var TriggerpriceVAL=$('#TriggerpriceId').val();  //(TrigPrice Send as 0 for default)
			
			if($("input:radio[name='lmtId']").is(":checked")) {
				var TrigPrice="0";
			}
			if($("input:radio[name='mktId']").is(":checked")) {
				var TrigPrice="0";
			}
			if($("input:radio[name='slId']").is(":checked")) {
				var TrigPrice=TriggerpriceVAL;
			}
			if($("input:radio[name='sl-mId']").is(":checked")) {
				var TrigPrice=TriggerpriceVAL;
			}
			
			if($("input:radio[name='cncId']").is(":checked")) {
				var Pcode="CNC";
			}
			if($("input:radio[name='NrmlId']").is(":checked")) {
				var Pcode="NRML";
			}
			if($("input:radio[name='MisId']").is(":checked")) {
				var Pcode="MIS";
			}
			var DateDays="NA"; //(DateDays Send as NA for default)
			var AMO="YES";
			
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
			"&PosSquareFlg="+PosSquareFlg+"&MinQty="+MinQty+"&orderSource="+orderSource+"&naicCode="+naicCode,
			success:function(response){
			
			var JsonObject= JSON.parse(response);
			var values= Object.values(JsonObject);
			var result=values[1];
			var stat= values[0];
			if(stat==='Ok'){
				$('#SellOrderNumberModelId').modal('show'); 		
				$('#sellOrderNumbers').html(result);
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
	
	else if($("input:radio[name='BracketOrdId']").is(":checked")) { 
		
// 		alert("BracketOrd")
		
	
		 var Ttranstype='S';
		 var qty=$("#QtyId").val();
		 var actid=$("#UserID").val();
		 var uid=$("#UserID").val();
		 
		 if($("input:radio[name='dayId']").is(":checked")) {
				var Ret="DAY";
				}

		 var discqtyVAL=$("#DiscquantityId").val();
		 var scriptName=$("#stockhiddval").val();
 		 var TokenNoVAL=$("#tokenhiddval").val(); 							
 		 
		 if(scriptName==='MCX'){ //MCX

		var exch=MCX;
		var discqty=discqtyVAL;
		 var TokenNo=TokenNoVAL;
		 }
		 if(scriptName==='NSE'){ //NSE

				var exch=NSE;
				var discqty=discqtyVAL;
				 var TokenNo=TokenNoVAL;
				 }
		 
		 if(scriptName==='NFO'){ //F&O
				var exch="NFO";
				var discqty="0";
				var TokenNo=TokenNoVAL;
			}
		 
		 var Price=$("#priceId").val();		
		 
		 var ltpOratp="LTP"; //LTP or ATP
		 
		 var SqrOffAbsOrticks="Absolute";  						//Square Off type ( Absolute or Ticks )
		 var SqrOffvalue=$("#TargetAbsolutequanId").val();
		 var SLAbsOrticks="Absolute";              				//Stop Loss type ( Absolute or Ticks )
		 var SLvalue=$("#stoplossAbsolutequanId").val();
		 		 							
		var TargetstoplossVAL=$("#TargetstoplossquanId").val();
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
		 
		 if($("input:radio[name='lmtId']").is(":checked")) { //Price Type ( L or SL )
			 var prctyp="L";
			 var TrigPrice="0";
		 }
		 if($("input:radio[name='slId']").is(":checked")) { //Price Type ( L or SL )
			 var prctyp="SL"; 
			 var TrigPrice=$("#TriggerpriceId").val();
		 }
		
		$.ajax({
			
			type : 'POST',
			url  : 'placebracketorder',
			data : "exch="+exch+"&TokenNo="+TokenNo+"&Ttranstype="+Ttranstype+"&qty="+qty+"&actid="+actid+"&uid="+uid+
			"&Ret="+Ret+"&discqty="+discqty+"&Price="+Price+"&ltpOratp="+ltpOratp+"&SqrOffAbsOrticks="+SqrOffAbsOrticks+
			"&SqrOffvalue="+SqrOffvalue+"&SLAbsOrticks="+SLAbsOrticks+"&SLvalue="+SLvalue+"&trailingSL="+trailingSL+
			"&tSLticks="+tSLticks+"&naicCode="+naicCode+"&orderSource="+orderSource+"&userTag="+userTag+
			"&prctyp="+prctyp+"&TrigPrice="+TrigPrice,
			
				success:function(response){

					var JsonObject= JSON.parse(response);
					var values= Object.values(JsonObject);
					var result=values[1];
					var stat= values[0];
					if(stat==='Ok'){
						$('#SellOrderNumberModelId').modal('show'); 		
						$('#sellOrderNumbers').html(result);
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
	
	else if($("input:radio[name='RegularOrdId']").is(":checked")) { 
		
 		
		
		
		if($("input:radio[name='dayId']").is(":checked")) {
		var Ret="DAY";
		}
		if($("input:radio[name='iocId']").is(":checked")) {
			var Ret="IOC";
			}
		if($("input:radio[name='gtcId']").is(":checked")) {
			var Ret="GTC";
			}
		if($("input:radio[name='gtdId']").is(":checked")) {
			var Ret="GTD";
			}
		if($("input:radio[name='gttId']").is(":checked")) {
			var Ret="GTT";
			}
		
		if(Ret==="DAY" || Ret==="IOC" || Ret==="GTT" ){
			
			
			var sprdtali="CNC:CNC||MIS:MIS||NRML:NRML";	
			
			var s_prdt_ali=sprdtali;
			var uid=$("#UserID").val();
			var actid=$("#UserID").val();
			 
			var Ttranstype='S';
		//var prctyp="L"; //Price type (from DefaultLogin/ NormalLogin rest api)
		
		var prctyp;
		if($("input:radio[name='lmtId']").is(":checked")) { //Price Type ( L or SL )
			  prctyp="L";
		 }
		 if($("input:radio[name='mktId']").is(":checked")) { //Price Type ( L or SL )
			  prctyp="MKT"; 
		 }
		 if($("input:radio[name='slId']").is(":checked")) { //Price Type ( L or SL )
			  prctyp="SL"; 
		 }
		 if($("input:radio[name='sl-mId']").is(":checked")) { //Price Type ( L or SL )
			  prctyp="SL-M"; 
		 }
		 
		
		
		var qty=$("#QtyId").val();
		var discqtyVAL=$("#DiscquantityId").val();
		 var scriptName=$("#stockhiddval").val();
	 	 	var TsymVAL=$("#scripthiddval").val();
			var TokenVal=$("#tokenhiddval").val();
		 if(scriptName==='MCX'){ //MCX

			var exch=MCX;
			var discqty=discqtyVAL;
			var Tsym=TsymVAL;
			var TokenNo=TokenVal;
		 }
		 if(scriptName==='NSE'){ //NSE

				var exch=NSE;
				var discqty=discqtyVAL;
				var Tsym=TsymVAL;
				var TokenNo=TokenVal;
				 }
		 
		 if(scriptName==='NFO'){ //F&O
				var exch="NFO";
				var discqty="0";
				var Tsym=TsymVAL;
				var TokenNo=TokenVal;
			}
		
		var MktPro="NA"; //(MktPro Should be sent as NA by default)
		var PriceVAL=$("#priceId").val();
		var TriggerpriceVAL=$('#TriggerpriceId').val();  //(TrigPrice Send as 0 for default)
		
		
		if($("input:radio[name='lmtId']").is(":checked")) {
			var TrigPrice="0";
			var Price=PriceVAL;
		}
		if($("input:radio[name='mktId']").is(":checked")) {
			var TrigPrice="0";
			var Price="0";
		}
		if($("input:radio[name='slId']").is(":checked")) {
			var TrigPrice=TriggerpriceVAL;
			var Price=PriceVAL;
		}
		if($("input:radio[name='sl-mId']").is(":checked")) {
			var TrigPrice=TriggerpriceVAL;
			var Price="0";
		}
				
		if($("input:radio[name='cncId']").is(":checked")) {
			var Pcode="CNC";
		}
		if($("input:radio[name='NrmlId']").is(":checked")) {
			var Pcode="NRML";
		}
		if($("input:radio[name='MisId']").is(":checked")) {
			var Pcode="MIS";
		}
		
		var DateDays="NA"; //(DateDays Send as NA for default)
		
		
		if($("input:radio[name='AfterMarketOrdId']").is(":checked")) {	
			var AMO="YES";
		}
		else{
			var AMO="NO";
		}
		
		var PosSquareFlg="N";		
		var MinQty="0"; //(MinQty Send as 0 for default)		
		var orderSource=web;		
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
			$('#SellOrderNumberModelId').modal('show'); 		
			$('#sellOrderNumbers').html(result);
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
		
		else if(Ret==="GTC" || Ret==="GTD" ){
			
			
			var sprdtali="CNC:CNC||MIS:MIS||NRML:NRML";	
			
			var s_prdt_ali=sprdtali;
			
			var uid=$("#UserID").val();
			var actid=$("#UserID").val();
			var Ttranstype='S';
			
			if($("input:radio[name='gtcId']").is(":checked")) {
				Ret="GTC";
				}
			if($("input:radio[name='gtdId']").is(":checked")) {
				Ret="GTD";
				}
			
			var prctyp;
			if($("input:radio[name='lmtId']").is(":checked")) { //Price Type ( L or SL )
				  prctyp="L";
			 }
			 if($("input:radio[name='mktId']").is(":checked")) { //Price Type ( L or SL )
				  prctyp="MKT"; 
			 }
			 if($("input:radio[name='slId']").is(":checked")) { //Price Type ( L or SL )
				  prctyp="SL"; 
			 }
			 if($("input:radio[name='sl-mId']").is(":checked")) { //Price Type ( L or SL )
				  prctyp="SL-M"; 
			 }			 
			
			 var qty=$("#QtyId").val();
			 var scriptName=$("#stockhiddval").val();
	  	 	 var TsymVAL=$("#scripthiddval").val();
	  	 	 
			 if(scriptName==='MCX'){ //MCX			 
				 var exch="MCX";
				 var Tsym=TsymVAL;			
			 	}
			 if(scriptName==='NSE'){ //NSE			
					var exch="NSE";
					var Tsym=TsymVAL;
					}			 
			 if(scriptName==='NFO'){ //F&O-NFO				
					var exch="NFO";
					var Tsym=TsymVAL;
				}
			var PriceVAL=$("#priceId").val();
			
			if($("input:radio[name='lmtId']").is(":checked")) {
				var Price=PriceVAL;
			}
			if($("input:radio[name='mktId']").is(":checked")) {
				var Price="0";
			}
			if($("input:radio[name='slId']").is(":checked")) {
				var Price=PriceVAL;
			}
			if($("input:radio[name='sl-mId']").is(":checked")) {
				var Price="0";
			}
			
			
			var Pcode;
			if($("input:radio[name='cncId']").is(":checked")) {
				Pcode="CNC";
			}
			if($("input:radio[name='NrmlId']").is(":checked")) {
				Pcode="NRML";
			}
			if($("input:radio[name='MisId']").is(":checked")) {
				Pcode="MIS";
			}
			
			var DateDaysTag=$("#datepicker").val(); //(DateDays Send as NA for default)	
					
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
			success:function(response){
			
			var JsonObject= JSON.parse(response);
			var values= Object.values(JsonObject);
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
}





function onclickstockbuybtn(stockId,price,exchange,token,stockdisplayname,mcxticksize,mcxexpirydate,nseticksize,nseexpirydate,nfoexpirydate,mcxInstrumentCode,mcxStrikePrice,mcxOptionType,mcxInstrumentName,mcxInstrumentSeries,nseSymbol,nseSeries,nfosymbol,nfostrike_price,nfooption_type,nfoinstrument_name){
	
	
	
	
	//alert("stockid"+stockId+"price:::"+price+"exchange"+exchange+"token:::"+token);
	$('#myModal').modal('show');
	document.getElementById("priceId").value=price;
	
	document.getElementById("mcxexpirylabelId").innerHTML=mcxexpirydate;
	document.getElementById("nseexpirydatelabelId").innerHTML="";
	document.getElementById("nfoexpirydatelabelId").innerHTML=nfoexpirydate;
		
		
	document.getElementById("mcxticksizehiddval").value=mcxticksize;
	document.getElementById("mcxexpirydatehiddval").value=mcxexpirydate;
	document.getElementById("nseticksizehiddval").value=nseticksize;
	document.getElementById("nseexpirydatehiddval").value=nseexpirydate;
	document.getElementById("nfoexpirydatehiddval").value=nfoexpirydate;
	
	
	
	document.getElementById("stockhiddval").value=exchange;
	document.getElementById("tokenhiddval").value=token;
	
	
	//const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	const monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']

    const d = new Date();
    var dd = String(d.getDate()).padStart(2, '0');
    var mm = String(d.getMonth() + 1).padStart(2, '0');
    var yyyy = d.getFullYear();
    var todaydate = +dd +"/"+ monthNames[d.getMonth()] +"/"+ yyyy;
    
    

	
	
		var valid=exchange;
					
			if (valid==='MCX')
				{
				
				var mcxexpiryDATE=mcxexpirydate;
				
				var myDate = new Date(mcxexpiryDATE);
				
				var shortYear = myDate.getFullYear(); 
				// Add this line
				var twoDigitYear = shortYear.toString().substr(-2);
				// var mcxexpiryDATEmyDate = +myDate.getDate() +monthNames[myDate.getMonth()];
				
				var mcxexpiryDATEmyDate = +twoDigitYear +monthNames[myDate.getMonth()];
				
				//alert("mcxexpiryDATEmyDate : "+mcxexpiryDATEmyDate)
				
				var fut="FUT";
				if(mcxOptionType=="XX"){
				document.getElementById("stocklabelId").innerHTML=stockdisplayname+" "+mcxexpiryDATEmyDate+" "+fut;
				document.getElementById("scripthiddval").value=stockdisplayname+mcxexpiryDATEmyDate+fut;
				}else{
					document.getElementById("stocklabelId").innerHTML=stockdisplayname+" "+mcxexpiryDATEmyDate+" "+mcxStrikePrice+" "+mcxOptionType;
					document.getElementById("scripthiddval").value=stockdisplayname+mcxexpiryDATEmyDate+mcxStrikePrice+mcxOptionType;
				}
				
			
				
					  		 
						//	alert("MCX")
					
						$("#QtyId").val("1");
						$("#DiscquantityId").val("0");
						$("#DiscquantityLabelId").show();
						$("#DiscquantityId").show();
					  //Product Order method on MCX
					  	$("#RegularOrdId").prop("checked",true);
						$("#BracketOrdId").prop("checked",false);						
						$("#CoverOrdId").prop("checked",false);					
						$('#AfterMarketOrdId').prop('checked', false); 
						 
						
						
						$("#TriggerPriceErrorId").hide();
						$("#DiscQuanErrorId").hide();
						$("#DiscQuanNSEErrorId").hide();
						$("#DiscQuanMCXErrorId").hide();
						
						$("#RegularOrdId").prop("disabled",false);
						$("#BracketOrdId").prop("disabled",false);
						$("#CoverOrdId").prop("disabled",false);
						$('#AfterMarketOrdId').prop('disabled', false);
						
						$("#TriggerPriceDivId").show();
						$("#CoStoplossDivId").hide();
						$("#GTTlabelId").hide();				
					  	$("#datepickerId").hide();					  	
					  	$("#GTTstoplossId").hide();
					  	$("#GttTargetId").hide();
					  	$('#BracketOrdId').show();
						$('#BracketOrdspanId').show();
						$('#CoverOrdId').show();
						$('#CoverOrdspanId').show();
					  	
					 // Regular Order  on MCX
					  	if($("input:radio[name='RegularOrdId']").is(":checked")) {
					  		
					  		$("#BracketOrdId").prop("checked",false);
							$("#BracketOrdId").prop("checked",false);
							$("#CoverOrdId").prop("checked",false);
							
							$("#CoStoplossDivId").hide();
							$("#TriggerPriceDivId").show();
							
							$('#IoclabelId').show();   
							$('#GTClabelId').show();
							$('#GTDlabelId').show();
							$('#GTTlabelId').hide();
							$('#dayId').show();
							$('#dayId').prop("checked",true);
							$("#gttId").prop("disabled",true);
							
							$("#cncId").prop("disabled",true);	
							$("#cncId").prop('checked',false);
							$('#NrmlId').prop('disabled', false);
							$('#NrmlId').prop('checked', true);
							$("#MisId").prop("disabled",false);
							$("#MisId").prop('checked',false);
							
							$("#lmtId").prop("checked",true);
							$("#mktId").prop("checked",false);	
							$('#slId').prop('checked',false);
							$('#sl-mId').prop('checked',false);	
							
							if($("input:radio[name='lmtId']").is(":checked")) {
								 $("#DiscquantityId").prop("disabled",false);
								 $("#DiscquantityId").val("0");
									//LMT
							      $("#TriggerpriceId").prop("disabled",true);
							      $("#TriggerpriceId").val("0");
							      $("#priceId").prop("disabled",false); 
							      
							      $("#mktId").prop("disabled",false);
							      $("#slId").prop("disabled",false);
							      $("#sl-mId").prop("disabled",false);
								 
							 }
							 if($("input:radio[name='mktId']").is(":checked")) {
								 //MKT
								 $("#TriggerpriceId").prop("disabled",true);
							     $("#TriggerpriceId").val("0");
							     $("#priceId").prop("disabled",true);
							     $("#priceId").val("0");	
							     
							     $("#lmtId").prop("disable",false);
							      $("#slId").prop("disabled",false);
							      $("#sl-mId").prop("disabled",false);
							     
							    	$('#stoplessId').hide();
								 	$('#tarketDivId').hide();
								 	$('#TrailingstopId').hide();
								 }
							 
							 if($("input:radio[name='slId']").is(":checked")) {
								 $("#DiscquantityId").prop("disabled",false);
								 $("#DiscquantityId").val("0");
								   //SL
									  $("#TriggerpriceId").prop("disabled",false);
								      $("#priceId").prop("disabled",false);
								      $("#priceId").val("0");
								      
								      $("#lmtId").prop("disabled",false);
								      $("#mktId").prop("disabled",false);
								      $("#sl-mId").prop("disabled",false);
								      
								      
								      }
							 
							 if($("input:radio[name='sl-mId']").is(":checked")) {
							 		//SL-M
								  	  $("#TriggerpriceId").prop("disabled",false);
								  	  $("#TriggerpriceId").val("0");
								      $("#priceId").prop("disabled",true);
								      $("#priceId").val("0");
								      $("#DiscquantityId").prop("disabled",false);
								     	 $('#stoplessId').hide();
									 	$('#tarketDivId').hide();
									 	$('#TrailingstopId').hide();
									 	
									 	 $("#lmtId").prop("disabled",false);
									      $("#mktId").prop("disabled",false);
									      $("#slId").prop("disabled",false);
									      
								 }
							
							
					  	}
					 
					 // AfterMarketOrder  on MCX
						if($("input:radio[name='AfterMarketOrdId']").is(":checked")) {
							
							$("#BracketOrdId").prop("checked",false);
							$("#BracketOrdId").prop("checked",false);
							$("#CoverOrdId").prop("checked",false);
							
							$("#CoStoplossDivId").hide();
							$("#TriggerPriceDivId").show();
							
					  		 
							$('#IoclabelId').show();   
							$('#GTClabelId').show();
							$('#GTDlabelId').show();
							$('#GTTlabelId').hide();
							$('#dayId').show();
							$('#dayId').prop("checked",true);
							$("#gttId").prop("disabled",true);
							
							
							$("#cncId").prop("disabled",false);				
							$('#NrmlId').prop('disabled', false);
							$('#NrmlId').prop('checked', true);
							$("#MisId").prop("disabled",false);
							
							$("#lmtId").prop("checked",true);
							$("#mktId").prop("checked",false);	
							$('#slId').prop('checked',false);
							$('#sl-mId').prop('checked',false);
							
							 if($("input:radio[name='lmtId']").is(":checked")) {
								 $("#DiscquantityId").prop("disabled",false);
								 $("#DiscquantityId").val("0");
									//LMT
							      $("#TriggerpriceId").prop("disabled",true);
							      $("#TriggerpriceId").val("0");
							      $("#priceId").prop("disabled",false); 
							      
							      $("#slId").prop("checked",false);
							      $("#mktId").prop("disabled",false);
							      $("#sl-mId").prop("disabled",false);
							      
								 
							 }
							 if($("input:radio[name='mktId']").is(":checked")) {
								 //MKT
								 $("#TriggerpriceId").prop("disabled",true);
							     $("#TriggerpriceId").val("0");
							     $("#priceId").prop("disabled",true);
							     $("#priceId").val("0");	  
							     
							    	$('#stoplessId').hide();
								 	$('#tarketDivId').hide();
								 	$('#TrailingstopId').hide();
								 	
								 	$("#slId").prop("checked",false);
								      $("#lmtId").prop("disabled",false);
								      $("#sl-mId").prop("disabled",false);
								      
								 }
							 
							 if($("input:radio[name='slId']").is(":checked")) {
								 $("#DiscquantityId").prop("disabled",false);
								 $("#DiscquantityId").val("0");
								   //SL
									  $("#TriggerpriceId").prop("disabled",false);
								      $("#priceId").prop("disabled",false);
								      $("#priceId").val("0");    
							 
								      $("#lmtId").prop("checked",false);
								      $("#mktId").prop("disabled",false);
								      $("#sl-mId").prop("disabled",false);
								      
									}
							 if($("input:radio[name='sl-mId']").is(":checked")) {
							 		//SL-M
								  	  $("#TriggerpriceId").prop("disabled",false);
								  	  $("#TriggerpriceId").val("0");
								      $("#priceId").prop("disabled",true);
								      $("#priceId").val("0");
								      $("#DiscquantityId").prop("disabled",false);
								     	 $('#stoplessId').hide();
									 	$('#tarketDivId').hide();
									 	$('#TrailingstopId').hide();
									 	
									 	$("#slId").prop("checked",false);
									      $("#mktId").prop("disabled",false);
									      $("#lmtId").prop("disabled",false);
									      
								 }
							
						}
						// Bracket Order  on MCX
					  	 if($("input:radio[name='BracketOrdId']").is(":checked")) {
					  		$("#RegularOrdId").prop("checked",false);
							$("#BracketOrdId").prop("checked",false);
							$("#CoverOrdId").prop("checked",false);
							$('#AfterMarketOrdId').prop('checked', false);  
					  		 
							
							$('#dayId').prop('checked', true);
						  	$("#datepickerId").hide();
						  	$("#TriggerPriceDivId").show();	
						  	$("#GTTlabelId").hide();
						  	
						  	$('#IoclabelId').show();   
							$('#GTClabelId').show();
							$('#GTDlabelId').show();
							$('#GTTlabelId').hide();
							$('#dayId').show();
							$('#dayId').prop("checked",true);
							$("#gttId").prop("disabled",true);
					  		 
							$("#cncId").prop("disabled",true);				
							$('#NrmlId').prop('disabled', true);
							$("#MisId").prop("disabled",true);
							
							$('#BracketOrdId').show();
							$('#BracketOrdspanId').show();
							$('#CoverOrdId').show();
							$('#CoverOrdspanId').show();
							
							 
							$("#lmtId").prop("checked",true);
							$('#lmtId').prop('disabled',false);
							$("#mktId").prop("disabled",true);	
							$("#mktId").prop("checked",false);	
							$('#slId').prop('disabled',false);
							$("#slId").prop("checked",false);
							$('#sl-mId').prop('disabled',true);
							$("#sl-mId").prop("checked",false);
							
							$("#CoStoplossDivId").hide();
							$("#TriggerPriceDivId").show();
						
							 if($("input:radio[name='lmtId']").is(":checked")) {
								 
								 
								 $("#DiscquantityId").prop("disabled",true);
								 $("#DiscquantityId").val("0");
									//LMT
								     $("#TriggerpriceId").prop("disabled",true);
								     $("#TriggerpriceId").val("0");
								     $("#priceId").prop("disabled",false);
								     
								      $("#mktId").prop("checked",false);
								      $("#sl-mId").prop("checked",false);
							 }
							 if($("input:radio[name='slId']").is(":checked")) {
							 
								 $("#DiscquantityId").prop("disabled",true);
								 	
									  //SL
						 			     $("#TriggerpriceId").prop("disabled",false);
						 			     $("#TriggerpriceId").val("0");
						 			     $("#priceId").prop("disabled",false);
								 			
						 			     $("#mktId").prop("checked",false);
						 			      $("#sl-mId").prop("checked",false);
							 }
					  		
					  	 }
						
					  // Cover Order  on MCX
					  	if($("input:radio[name='CoverOrdId']").is(":checked")) {
					  		
					  		$("#RegularOrdId").prop("checked",false);
							$("#BracketOrdId").prop("checked",false);
							$('#AfterMarketOrdId').prop('checked', false);  
					  		 
					  		
							$("#cncId").prop("disabled",true);				
							$('#NrmlId').prop('disabled', true);
							$("#MisId").prop("disabled",true);
							
							$('#IoclabelId').show();   
							$('#GTClabelId').show();
							$('#GTDlabelId').show();
							$('#GTTlabelId').hide();
							$('#dayId').show();
							$('#dayId').prop("checked",true);
							$("#gttId").prop("disabled",true);
							
							$("#lmtId").prop("checked",true);
							$('#lmtId').prop('disabled',false);
							$("#mktId").prop("disabled",true);	
							$("#mktId").prop("checked",false);	
							$('#slId').prop('disabled',false);
							$("#slId").prop("checked",false);
							$('#sl-mId').prop('disabled',true);
							$("#sl-mId").prop("checked",false);
							
							$("#CoStoplossDivId").show();
							$("#TriggerPriceDivId").hide();
							
							 if($("input:radio[name='lmtId']").is(":checked")) {
								 $("#DiscquantityId").prop("disabled",false);
								 $("#DiscquantityId").val("0");
									//LMT
							      $("#TriggerpriceId").prop("disabled",true);
							      $("#TriggerpriceId").val("0");
							      $("#priceId").prop("disabled",false); 
							      
							      $("#slId").prop("checked",false);
							      $("#sl-mId").prop("checked",false);
								 
							 }
							 if($("input:radio[name='mktId']").is(":checked")) {
								 $("#DiscquantityId").prop("disabled",false);
								 $("#DiscquantityId").val("0");
								   //SL
									  $("#TriggerpriceId").prop("disabled",false);
								      $("#priceId").prop("disabled",false);
								      $("#priceId").val("0"); 
								      $("#slId").prop("checked",false);
								      $("#sl-mId").prop("checked",false);
							 
						}
							 
					  	}
					  	 
					  	
						 if($("input:radio[name='dayId']").is(":checked")) {	
								
								$('#iocId').prop('checked', false);
								$('#gtcId').prop('checked', false);
								$('#gtdId').prop('checked', false);
								$('#gttId').prop('checked', false);
						 }
						 if($("input:radio[name='iocId']").is(":checked")) {	
								
								$('#dayId').prop('checked', false);
								$('#gtcId').prop('checked', false);
								$('#gtdId').prop('checked', false);
								$('#gttId').prop('checked', false);
						 }
						 if($("input:radio[name='gtcId']").is(":checked")) {	
								
								$('#dayId').prop('checked', false);
								$('#iocId').prop('checked', false);
								$('#gtdId').prop('checked', false);
								$('#gttId').prop('checked', false);
						 }
						 if($("input:radio[name='gtdId']").is(":checked")) {	
								
								$('#dayId').prop('checked', false);
								$('#iocId').prop('checked', false);
								$('#gtcId').prop('checked', false);
								$('#gttId').prop('checked', false);
						 }
						 if($("input:radio[name='gttId']").is(":checked")) {	
								
								$('#dayId').prop('checked', false);
								$('#iocId').prop('checked', false);
								$('#gtcId').prop('checked', false);
								$('#gtdId').prop('checked', false);
						 }
						 
						 	$('#datepicker').datepicker("destroy");
							$('#datepicker').datepicker("refresh");
					
							var Endday=mcxexpirydate;
							$('#datepicker').datepicker({ 								
								dateFormat: 'dd/M/yy',
							    minDate: todaydate,
								maxDate:Endday,
							    showOtherMonths: true,
							    selectOtherMonths: true,
							    changeMonth: true,
							    changeYear: true
//						 	    showButtonPanel: true
							});

						 
				}
			
			
		 	else if(valid==='NSE'){
				
			//	alert("NSE")
		 		
		 		
		 		document.getElementById("stocklabelId").innerHTML=nseSymbol+"-"+nseSeries;
		 		document.getElementById("scripthiddval").value=nseSymbol+"-"+nseSeries;
		 		
				$("#QtyId").val("1");
				$("#DiscquantityId").val("0");
				$("#DiscquantityLabelId").show();
				$("#DiscquantityId").show();
				
				$("#TriggerPriceErrorId").hide();
				$("#DiscQuanErrorId").hide();
				$("#DiscQuanNSEErrorId").hide();
				$("#DiscQuanMCXErrorId").hide();
								
				$('#RegularOrdId').prop('checked', true);				
				$('#AfterMarketOrdId').prop('checked', false);
				
				$("#TriggerpriceId").prop("disabled",true);
				$("#DiscquantityId").prop("disabled",false);
			    $("#TriggerpriceId").val("0");
			    $("#priceId").prop("disabled",false);
				
				$("#CoStoplossDivId").hide();			 	
				$("#TriggerPriceDivId").show();
				$("#GTTlabelId").show();	
				$("#gttId").show();
				$("#GTTspanId").show();
				
			  	$("#datepickerId").hide();
			 
			  	
				
				if($("input:radio[name='RegularOrdId']").is(":checked")) {
					
			  		$("#BracketOrdId").prop("disabled",true);
					$("#CoverOrdId").prop("disabled",false);
					$('#AfterMarketOrdId').prop('checked', false);
					
					$("#cncId").prop("disabled",false);
					$('#cncId').prop('checked', true);
					$('#NrmlId').prop('disabled', true);
					$('#NrmlId').prop('checked', false);
					$('#MisId').prop('checked', false);
					$('#MisId').prop('disabled', false);
				  	
					

					$("#TriggerpriceId").prop("disabled",true);
					$("#DiscquantityId").prop("disabled",false);
				    $("#TriggerpriceId").val("0");
				    $("#priceId").prop("disabled",false);
				    
					$('#lmtId').prop('checked', true);
					$('#mktId').prop('checked', false);
					$('#mktId').prop('disabled', false);
					$('#slId').prop('checked', false);
					$('#slId').prop('disabled', false);
					$('#sl-mId').prop('checked', false);
					$('#sl-mId').prop('disabled', false);
					
					$('#BracketOrdId').hide();
					$('#BracketOrdspanId').hide();
					$('#CoverOrdId').hide();
					$('#CoverOrdspanId').hide();
					$('#stoplessId').hide();
				 	$('#tarketDivId').hide();
				 	$('#TrailingstopId').hide();
					
				 	$('#dayId').show();
				 	$('#IoclabelId').show(); 
					$('#GTClabelId').show();
					$('#GTDlabelId').show();
					$('#GTTlabelId').show();
					$('#dayId').prop("checked",true);
					$('#iocId').prop('checked', false);
					$('#gtcId').prop('checked', false);
					$('#gtdId').prop('checked', false);
					$('#gttId').prop('checked', false);
					$("#gttId").prop("disabled",false);
					
					$("#TriggerPriceDivId").show();
					$("#CoStoplossDivId").hide();
					
					 if($("input:radio[name='lmtId']").is(":checked")) {
						 $("#DiscquantityId").prop("disabled",false);
						 $("#DiscquantityId").val("0");
							//LMT
					      $("#TriggerpriceId").prop("disabled",true);
					      $("#TriggerpriceId").val("0");
					      $("#priceId").prop("disabled",false); 
					      
					      $("#slId").prop("checked",false);
					      $("#mktId").prop("disabled",false);
					      $("#sl-mId").prop("disabled",false);
					      
						 
					 }
					 if($("input:radio[name='mktId']").is(":checked")) {
						 //MKT
						 $("#TriggerpriceId").prop("disabled",true);
					     $("#TriggerpriceId").val("0");
					     $("#priceId").prop("disabled",true);
					     $("#priceId").val("0");	  
					     
					    	$('#stoplessId').hide();
						 	$('#tarketDivId').hide();
						 	$('#TrailingstopId').hide();
						 	
						 	$("#slId").prop("checked",false);
						      $("#lmtId").prop("disabled",false);
						      $("#sl-mId").prop("disabled",false);
						      
						 }
					 
					 if($("input:radio[name='slId']").is(":checked")) {
						 $("#DiscquantityId").prop("disabled",false);
						 $("#DiscquantityId").val("0");
						   //SL
							  $("#TriggerpriceId").prop("disabled",false);
						      $("#priceId").prop("disabled",false);
						      $("#priceId").val("0");    
					 
						      $("#lmtId").prop("checked",false);
						      $("#mktId").prop("disabled",false);
						      $("#sl-mId").prop("disabled",false);
						      
							}
					 if($("input:radio[name='sl-mId']").is(":checked")) {
					 		//SL-M
						  	  $("#TriggerpriceId").prop("disabled",false);
						  	  $("#TriggerpriceId").val("0");
						      $("#priceId").prop("disabled",true);
						      $("#priceId").val("0");
						      $("#DiscquantityId").prop("disabled",false);
						     	 $('#stoplessId').hide();
							 	$('#tarketDivId').hide();
							 	$('#TrailingstopId').hide();
							 	
							 	$("#slId").prop("checked",false);
							      $("#mktId").prop("disabled",false);
							      $("#lmtId").prop("disabled",false);
							      
						 }
					
				}
				 if($("input:radio[name='AfterMarketOrdId']").is(":checked")) {
					 
						
				  		$("#BracketOrdId").prop("disabled",true);
						$("#CoverOrdId").prop("disabled",false);
						$('#AfterMarketOrdId').prop('checked', false);
						
						
						$("#cncId").prop("disabled",false);
						$('#cncId').prop('checked', true);
						$('#NrmlId').prop('disabled', true);
						$('#NrmlId').prop('checked', false);
						$('#MisId').prop('checked', false);
						$('#MisId').prop('disabled', false);
					  	
						
							
						$("#TriggerPriceDivId").show();
						$("#CoStoplossDivId").hide();
												

						$("#TriggerpriceId").prop("disabled",true);
						$("#DiscquantityId").prop("disabled",false);
					    $("#TriggerpriceId").val("0");
					    $("#priceId").prop("disabled",false);
					    
						$('#lmtId').prop('checked', true);
						$('#mktId').prop('checked', false);
						$('#mktId').prop('disabled', false);
						$('#slId').prop('checked', false);
						$('#slId').prop('disabled', false);
						$('#sl-mId').prop('checked', false);
						$('#sl-mId').prop('disabled', false);
						
						$('#BracketOrdId').hide();
						$('#BracketOrdspanId').hide();
						$('#CoverOrdId').hide();
						$('#CoverOrdspanId').hide();
						$('#stoplessId').hide();
					 	$('#tarketDivId').hide();
					 	$('#TrailingstopId').hide();
						
					 	$('#dayId').show();
					 	$('#IoclabelId').show(); 
						$('#GTClabelId').show();
						$('#GTDlabelId').show();
						$('#GTTlabelId').show();
						$('#dayId').prop("checked",true);
						$('#iocId').prop('checked', false);
						$('#gtcId').prop('checked', false);
						$('#gtdId').prop('checked', false);
						$('#gttId').prop('checked', false);
						$("#gttId").prop("disabled",false);
						
						 if($("input:radio[name='lmtId']").is(":checked")) {
							 $("#DiscquantityId").prop("disabled",false);
							 $("#DiscquantityId").val("0");
								//LMT
						      $("#TriggerpriceId").prop("disabled",true);
						      $("#TriggerpriceId").val("0");
						      $("#priceId").prop("disabled",false); 
						      
						      $("#slId").prop("checked",false);
						      $("#mktId").prop("disabled",false);
						      $("#sl-mId").prop("disabled",false);
						      
							 
						 }
						 if($("input:radio[name='mktId']").is(":checked")) {
							 //MKT
							 $("#TriggerpriceId").prop("disabled",true);
						     $("#TriggerpriceId").val("0");
						     $("#priceId").prop("disabled",true);
						     $("#priceId").val("0");	  
						     
						    	$('#stoplessId').hide();
							 	$('#tarketDivId').hide();
							 	$('#TrailingstopId').hide();
							 	
							 	$("#slId").prop("checked",false);
							      $("#lmtId").prop("disabled",false);
							      $("#sl-mId").prop("disabled",false);
							      
							 }
						 
						 if($("input:radio[name='slId']").is(":checked")) {
							 $("#DiscquantityId").prop("disabled",false);
							 $("#DiscquantityId").val("0");
							   //SL
								  $("#TriggerpriceId").prop("disabled",false);
							      $("#priceId").prop("disabled",false);
							      $("#priceId").val("0");    
						 
							      $("#lmtId").prop("checked",false);
							      $("#mktId").prop("disabled",false);
							      $("#sl-mId").prop("disabled",false);
							      
								}
						 if($("input:radio[name='sl-mId']").is(":checked")) {
						 		//SL-M
							  	  $("#TriggerpriceId").prop("disabled",false);
							  	  $("#TriggerpriceId").val("0");
							      $("#priceId").prop("disabled",true);
							      $("#priceId").val("0");
							      $("#DiscquantityId").prop("disabled",false);
							     	 $('#stoplessId').hide();
								 	$('#tarketDivId').hide();
								 	$('#TrailingstopId').hide();
								 	
								 	$("#slId").prop("checked",false);
								      $("#mktId").prop("disabled",false);
								      $("#lmtId").prop("disabled",false);
								      
							 }
				 }
				
				
			
			  	
			  	
				 if($("input:radio[name='dayId']").is(":checked")) {	
						
						$('#iocId').prop('checked', false);
						$('#gtcId').prop('checked', false);
						$('#gtdId').prop('checked', false);
						$('#gttId').prop('checked', false);
						
						$("#GTTstoplossId").hide();
						$("#GttTargetId").hide();
						
						$("#GTTstoplossValueId").prop("disabled",true);
						 $("#GttTargetvalueId").val("0");
							$("#GttTargetvalueId").prop("disabled",true);
							 $("#GttTargetvalueId").val("0");
							 
							 
				 }
				 if($("input:radio[name='iocId']").is(":checked")) {	
						
						$('#dayId').prop('checked', false);
						$('#gtcId').prop('checked', false);
						$('#gtdId').prop('checked', false);
						$('#gttId').prop('checked', false);
						
						$("#GTTstoplossId").hide();
						$("#GttTargetId").hide();
						
						$("#GTTstoplossValueId").prop("disabled",true);
						 $("#GttTargetvalueId").val("0");
							$("#GttTargetvalueId").prop("disabled",true);
							 $("#GttTargetvalueId").val("0");
				 }
				 if($("input:radio[name='gtcId']").is(":checked")) {	
						
						$('#dayId').prop('checked', false);
						$('#iocId').prop('checked', false);
						$('#gtdId').prop('checked', false);
						$('#gttId').prop('checked', false);
						
						$("#GTTstoplossId").hide();
						$("#GttTargetId").hide();
						
						$("#GTTstoplossValueId").prop("disabled",true);
						 $("#GttTargetvalueId").val("0");
							$("#GttTargetvalueId").prop("disabled",true);
							 $("#GttTargetvalueId").val("0");
				 }
				 if($("input:radio[name='gtdId']").is(":checked")) {	
						
						$('#dayId').prop('checked', false);
						$('#iocId').prop('checked', false);
						$('#gtcId').prop('checked', false);
						$('#gttId').prop('checked', false);
						
						$("#GTTstoplossId").hide();
						$("#GttTargetId").hide();
						
						$("#GTTstoplossValueId").prop("disabled",true);
						 $("#GttTargetvalueId").val("0");
							$("#GttTargetvalueId").prop("disabled",true);
							 $("#GttTargetvalueId").val("0");
				 }
				 if($("input:radio[name='gttId']").is(":checked")) {	
						
						$('#dayId').prop('checked', false);
						$('#iocId').prop('checked', false);
						$('#gtcId').prop('checked', false);
						$('#gtdId').prop('checked', false);
						
						$("#GTTstoplossId").show();
						$("#GttTargetId").show();
						
				 }
				
			//
				 
					$('#datepicker').datepicker("destroy");
					$('#datepicker').datepicker("refresh");
					//var Endday=nseexpirydate;
						var Endday=00/00/00;
					$('#datepicker').datepicker({ 
						
						dateFormat: 'dd/M/yy',
					    minDate: todaydate,
						maxDate:Endday,
					    showOtherMonths: true,
					    selectOtherMonths: true,
					    changeMonth: true,
					    changeYear: true
//				 	    showButtonPanel: true
					});

				 
			}
		
			else  if(valid==='NFO'){
				
				var nfoexpiryDATE=nfoexpirydate;
				var myDate = new Date(nfoexpiryDATE);
				
				var shortYear = myDate.getFullYear(); 
				// Add this line
				var twoDigitYear = shortYear.toString().substr(-2);
				var dd = myDate.getDate();
				var nfoexpirymyDate ='';
				
				  nfoexpirymyDate = +dd+monthNames[myDate.getMonth()]+twoDigitYear;
				 
				if(nfoinstrument_name=="FUTIDX" || nfoinstrument_name=="FUTSTK" ){
					if(dd<10) 
					{
						//	dd='0'+dd;
						// nfoexpirymyDate = dd.concat(monthNames[myDate.getMonth()]+twoDigitYear);						 
						 document.getElementById("stocklabelId").innerHTML=nfosymbol+" "+"0"+nfoexpirymyDate+" "+"FUT";
						 document.getElementById("scripthiddval").value=nfosymbol+"0"+nfoexpirymyDate+"FUT";
					}else {
						
						document.getElementById("stocklabelId").innerHTML=nfosymbol+" "+nfoexpirymyDate+" "+"FUT";
						document.getElementById("scripthiddval").value=nfosymbol+nfoexpirymyDate+"FUT";
					} 
					
				}else{
					
					if(dd<10) 
					{
					  //  dd='0'+dd;
						// nfoexpirymyDate = dd.concat(monthNames[myDate.getMonth()]+twoDigitYear);
					document.getElementById("stocklabelId").innerHTML=nfosymbol+" "+"0"+nfoexpirymyDate+nfostrike_price+" "+nfooption_type;
					document.getElementById("scripthiddval").value=nfosymbol+"0"+nfoexpirymyDate+nfostrike_price+nfooption_type;
					}else{
						document.getElementById("stocklabelId").innerHTML=nfosymbol+" "+nfoexpirymyDate+" "+nfostrike_price+" "+nfooption_type;
						document.getElementById("scripthiddval").value=nfosymbol+nfoexpirymyDate+nfostrike_price+nfooption_type;
					}	 
						 
				}
				
			//	alert("NFO")
				
			
				
				$("#QtyId").val("1");
				$("#DiscquantityId").val("0");
				$("#DiscquantityLabelId").hide();
				$("#DiscquantityId").hide();
				
			  //Product Order method on MCX
			  	$("#RegularOrdId").prop("checked",true);
				$("#BracketOrdId").prop("checked",false);						
				$("#CoverOrdId").prop("checked",false);					
				$('#AfterMarketOrdId').prop('checked', false); 
				 
				
				
				$("#TriggerPriceErrorId").hide();
				$("#DiscQuanErrorId").hide();
				$("#DiscQuanNSEErrorId").hide();
				$("#DiscQuanMCXErrorId").hide();
				
				$("#RegularOrdId").prop("disabled",false);
				$("#BracketOrdId").prop("disabled",false);
				$("#CoverOrdId").prop("disabled",false);
				$('#AfterMarketOrdId').prop('disabled', false);
				
				$("#TriggerPriceDivId").show();
				$("#CoStoplossDivId").hide();
				$("#GTTlabelId").hide();
				$("#gttId").hide();
				$("#GTTspanId").hide();
			  	$("#datepickerId").hide();					  	
			  	$("#GTTstoplossId").hide();
			  	$("#GttTargetId").hide();
			  	$('#BracketOrdId').show();
				$('#BracketOrdspanId').show();
				$('#CoverOrdId').show();
				$('#CoverOrdspanId').show();
			  	
				$("#cncId").prop("disabled",true);	
				$("#cncId").prop('checked',false);
				$('#NrmlId').prop('disabled', false);
				$('#NrmlId').prop('checked', true);
				$("#MisId").prop("disabled",false);
				$("#MisId").prop('checked',false);
				
			 // Regular Order  on MCX
			  	if($("input:radio[name='RegularOrdId']").is(":checked")) {
			  		
			  		$("#BracketOrdId").prop("checked",false);
					$("#BracketOrdId").prop("checked",false);
					$("#CoverOrdId").prop("checked",false);
					$('#AfterMarketOrdId').prop('checked', false);
			  		 
					
					$("#CoStoplossDivId").hide();
					$("#TriggerPriceDivId").show();
					
					$('#IoclabelId').show();   
					$('#GTClabelId').show();
					$('#GTDlabelId').show();
					$('#GTTlabelId').hide();
					$("#gttId").hide();
					$("#GTTspanId").hide();
					$('#dayId').show();
					$('#dayId').prop("checked",true);
					$("#gttId").prop("disabled",true);
					
					$("#cncId").prop("disabled",true);	
					$("#cncId").prop('checked',false);
					$('#NrmlId').prop('disabled', false);
					$('#NrmlId').prop('checked', true);
					$("#MisId").prop("disabled",false);
					$("#MisId").prop('checked',false);
					
					$("#lmtId").prop("checked",true);
					$("#mktId").prop("checked",false);	
					$('#slId').prop('checked',false);
					$('#sl-mId').prop('checked',false);	
					
					if($("input:radio[name='lmtId']").is(":checked")) {
						 $("#DiscquantityId").prop("disabled",false);
						 $("#DiscquantityId").val("0");
							//LMT
					      $("#TriggerpriceId").prop("disabled",true);
					      $("#TriggerpriceId").val("0");
					      $("#priceId").prop("disabled",false); 
					      
					      $("#mktId").prop("disabled",false);
					      $("#slId").prop("disabled",false);
					      $("#sl-mId").prop("disabled",false);
						 
					 }
					 if($("input:radio[name='mktId']").is(":checked")) {
						 //MKT
						 $("#TriggerpriceId").prop("disabled",true);
					     $("#TriggerpriceId").val("0");
					     $("#priceId").prop("disabled",true);
					     $("#priceId").val("0");	
					     
					     $("#lmtId").prop("disable",false);
					      $("#slId").prop("disabled",false);
					      $("#sl-mId").prop("disabled",false);
					     
					    	$('#stoplessId').hide();
						 	$('#tarketDivId').hide();
						 	$('#TrailingstopId').hide();
						 }
					 
					 if($("input:radio[name='slId']").is(":checked")) {
						 $("#DiscquantityId").prop("disabled",false);
						 $("#DiscquantityId").val("0");
						   //SL
							  $("#TriggerpriceId").prop("disabled",false);
						      $("#priceId").prop("disabled",false);
						      $("#priceId").val("0");
						      
						      $("#lmtId").prop("disabled",false);
						      $("#mktId").prop("disabled",false);
						      $("#sl-mId").prop("disabled",false);
						      
						      
						      }
					 
					 if($("input:radio[name='sl-mId']").is(":checked")) {
					 		//SL-M
						  	  $("#TriggerpriceId").prop("disabled",false);
						  	  $("#TriggerpriceId").val("0");
						      $("#priceId").prop("disabled",true);
						      $("#priceId").val("0");
						      $("#DiscquantityId").prop("disabled",false);
						     	 $('#stoplessId').hide();
							 	$('#tarketDivId').hide();
							 	$('#TrailingstopId').hide();
							 	
							 	 $("#lmtId").prop("disabled",false);
							      $("#mktId").prop("disabled",false);
							      $("#slId").prop("disabled",false);
							      
						 }
					
					
			  	}
			 
			 // AfterMarketOrder  on MCX
				if($("input:radio[name='AfterMarketOrdId']").is(":checked")) {
					
					$("#BracketOrdId").prop("checked",false);
					$("#BracketOrdId").prop("checked",false);
					$("#CoverOrdId").prop("checked",false);
					
					$("#CoStoplossDivId").hide();
					$("#TriggerPriceDivId").show();
					
			  		 
					$('#IoclabelId').show();   
					$('#GTClabelId').show();
					$('#GTDlabelId').show();
					$("#GTTlabelId").hide();
					$("#gttId").hide();
					$("#GTTspanId").hide();
					$('#dayId').show();
					$("#gttId").prop("disabled",false);
					$('#dayId').prop("checked",true);
					
					
					
					$("#cncId").prop("disabled",true);	
					$("#cncId").prop('checked',false);
					$('#NrmlId').prop('disabled', false);
					$('#NrmlId').prop('checked', true);
					$("#MisId").prop("disabled",false);
					$("#MisId").prop('checked',false);
					
					$("#lmtId").prop("checked",true);
					$("#mktId").prop("checked",false);	
					$('#slId').prop('checked',false);
					$('#sl-mId').prop('checked',false);
					
					 if($("input:radio[name='lmtId']").is(":checked")) {
						 $("#DiscquantityId").prop("disabled",false);
						 $("#DiscquantityId").val("0");
							//LMT
					      $("#TriggerpriceId").prop("disabled",true);
					      $("#TriggerpriceId").val("0");
					      $("#priceId").prop("disabled",false); 
					      
					      $("#slId").prop("checked",false);
					      $("#mktId").prop("disabled",false);
					      $("#sl-mId").prop("disabled",false);
					      
						 
					 }
					 if($("input:radio[name='mktId']").is(":checked")) {
						 //MKT
						 $("#TriggerpriceId").prop("disabled",true);
					     $("#TriggerpriceId").val("0");
					     $("#priceId").prop("disabled",true);
					     $("#priceId").val("0");	  
					     
					    	$('#stoplessId').hide();
						 	$('#tarketDivId').hide();
						 	$('#TrailingstopId').hide();
						 	
						 	$("#slId").prop("checked",false);
						      $("#lmtId").prop("disabled",false);
						      $("#sl-mId").prop("disabled",false);
						      
						 }
					 
					 if($("input:radio[name='slId']").is(":checked")) {
						 $("#DiscquantityId").prop("disabled",false);
						 $("#DiscquantityId").val("0");
						   //SL
							  $("#TriggerpriceId").prop("disabled",false);
						      $("#priceId").prop("disabled",false);
						      $("#priceId").val("0");    
					 
						      $("#lmtId").prop("checked",false);
						      $("#mktId").prop("disabled",false);
						      $("#sl-mId").prop("disabled",false);
						      
							}
					 if($("input:radio[name='sl-mId']").is(":checked")) {
					 		//SL-M
						  	  $("#TriggerpriceId").prop("disabled",false);
						  	  $("#TriggerpriceId").val("0");
						      $("#priceId").prop("disabled",true);
						      $("#priceId").val("0");
						      $("#DiscquantityId").prop("disabled",false);
						     	 $('#stoplessId').hide();
							 	$('#tarketDivId').hide();
							 	$('#TrailingstopId').hide();
							 	
							 	$("#slId").prop("checked",false);
							      $("#mktId").prop("disabled",false);
							      $("#lmtId").prop("disabled",false);
							      
						 }
					
				}
				// Bracket Order  on MCX
			  	 if($("input:radio[name='BracketOrdId']").is(":checked")) {
			  		 
			  		$("#RegularOrdId").prop("checked",false);
					$("#BracketOrdId").prop("checked",false);
					$("#CoverOrdId").prop("checked",false);
					$('#AfterMarketOrdId').prop('checked', false);  
			  		 
					
					$('#dayId').prop('checked', true);
				  	$("#datepickerId").hide();
				  	$("#TriggerPriceDivId").show();	
				  	$("#GTTlabelId").hide();
				  	
				  	$('#IoclabelId').show();   
					$('#GTClabelId').show();
					$('#GTDlabelId').show();
					$('#GTTlabelId').hide();
					$('#dayId').show();
					$('#dayId').prop("checked",true);
					$("#gttId").prop("disabled",true);
			  		 
					$("#cncId").prop("disabled",true);				
					$('#NrmlId').prop('disabled', true);
					$("#MisId").prop("disabled",true);
					
					$('#BracketOrdId').show();
					$('#BracketOrdspanId').show();
					$('#CoverOrdId').show();
					$('#CoverOrdspanId').show();
					
					 
					$("#lmtId").prop("checked",true);
					$('#lmtId').prop('disabled',false);
					$("#mktId").prop("disabled",true);	
					$("#mktId").prop("checked",false);	
					$('#slId').prop('disabled',false);
					$("#slId").prop("checked",false);
					$('#sl-mId').prop('disabled',true);
					$("#sl-mId").prop("checked",false);
					
					$("#CoStoplossDivId").hide();
					$("#TriggerPriceDivId").show();
				
					 if($("input:radio[name='lmtId']").is(":checked")) {
						 
						 
						 $("#DiscquantityId").prop("disabled",true);
						 $("#DiscquantityId").val("0");
							//LMT
						     $("#TriggerpriceId").prop("disabled",true);
						     $("#TriggerpriceId").val("0");
						     $("#priceId").prop("disabled",false);
						     
						      $("#mktId").prop("checked",false);
						      $("#sl-mId").prop("checked",false);
					 }
					 if($("input:radio[name='slId']").is(":checked")) {
					 
						 $("#DiscquantityId").prop("disabled",true);
						 	
							  //SL
				 			     $("#TriggerpriceId").prop("disabled",false);
				 			     $("#TriggerpriceId").val("0");
				 			     $("#priceId").prop("disabled",false);
						 			
				 			     $("#mktId").prop("checked",false);
				 			      $("#sl-mId").prop("checked",false);
					 }
			  		
			  	 }
				
			  // Cover Order  on MCX
			  	if($("input:radio[name='CoverOrdId']").is(":checked")) {
			  		
			  		$("#RegularOrdId").prop("checked",false);
					$("#BracketOrdId").prop("checked",false);
					$('#AfterMarketOrdId').prop('checked', false);  
			  		 
			  		
					$("#cncId").prop("disabled",true);				
					$('#NrmlId').prop('disabled', true);
					$("#MisId").prop("disabled",true);
					
					$('#IoclabelId').show();   
					$('#GTClabelId').show();
					$('#GTDlabelId').show();
					$('#GTTlabelId').hide();
					$('#dayId').show();
					$('#dayId').prop("checked",true);
					$("#gttId").prop("disabled",true);
					
					$("#lmtId").prop("checked",true);
					$('#lmtId').prop('disabled',false);
					$("#mktId").prop("disabled",true);	
					$("#mktId").prop("checked",false);	
					$('#slId').prop('disabled',false);
					$("#slId").prop("checked",false);
					$('#sl-mId').prop('disabled',true);
					$("#sl-mId").prop("checked",false);
					
					$("#CoStoplossDivId").show();
					$("#TriggerPriceDivId").hide();
					
					 if($("input:radio[name='lmtId']").is(":checked")) {
						 $("#DiscquantityId").prop("disabled",false);
						 $("#DiscquantityId").val("0");
							//LMT
					      $("#TriggerpriceId").prop("disabled",true);
					      $("#TriggerpriceId").val("0");
					      $("#priceId").prop("disabled",false); 
					      
					      $("#slId").prop("checked",false);
					      $("#sl-mId").prop("checked",false);
						 
					 }
					 if($("input:radio[name='mktId']").is(":checked")) {
						 $("#DiscquantityId").prop("disabled",false);
						 $("#DiscquantityId").val("0");
						   //SL
							  $("#TriggerpriceId").prop("disabled",false);
						      $("#priceId").prop("disabled",false);
						      $("#priceId").val("0"); 
						      $("#slId").prop("checked",false);
						      $("#sl-mId").prop("checked",false);
					 
				}
					 
			  	}
			  	 
			  	
				 if($("input:radio[name='dayId']").is(":checked")) {	
						
						$('#iocId').prop('checked', false);
						$('#gtcId').prop('checked', false);
						$('#gtdId').prop('checked', false);
						$('#gttId').prop('checked', false);
				 }
				 if($("input:radio[name='iocId']").is(":checked")) {	
						
						$('#dayId').prop('checked', false);
						$('#gtcId').prop('checked', false);
						$('#gtdId').prop('checked', false);
						$('#gttId').prop('checked', false);
				 }
				 if($("input:radio[name='gtcId']").is(":checked")) {	
						
						$('#dayId').prop('checked', false);
						$('#iocId').prop('checked', false);
						$('#gtdId').prop('checked', false);
						$('#gttId').prop('checked', false);
				 }
				 if($("input:radio[name='gtdId']").is(":checked")) {	
						
						$('#dayId').prop('checked', false);
						$('#iocId').prop('checked', false);
						$('#gtcId').prop('checked', false);
						$('#gttId').prop('checked', false);
				 }
				 if($("input:radio[name='gttId']").is(":checked")) {	
						
						$('#dayId').prop('checked', false);
						$('#iocId').prop('checked', false);
						$('#gtcId').prop('checked', false);
						$('#gtdId').prop('checked', false);
				 }
				 

					$('#datepicker').datepicker("destroy");
					$('#datepicker').datepicker("refresh");
				
					var Endday=nfoexpirydate;
					$('#datepicker').datepicker({ 
						
						dateFormat: 'dd/M/yy',
					    minDate: todaydate,
						maxDate:Endday,
					    showOtherMonths: true,
					    selectOtherMonths: true,
					    changeMonth: true,
					    changeYear: true
//				 	    showButtonPanel: true
					});
					
				
					} 
				  
			var act = $('.toggle-btn').hasClass("active");
			var buybtnId = document.getElementById("buybtnId");
			var sellbtnId = document.getElementById("sellbtnId");
			var buyId = document.getElementById("buyId");
			var sellId = document.getElementById("sellId");
			$("#TriggerPriceDivId").show();
		
			  if(act==false){
				  act=false;
				  buyId.style.display = "block";
				  sellId.style.display = "none";					  
				  $('.inner-circle').css('marginLeft','0px');
			  }
			  else if(act==true) {
				   act=false;					  
				  buyId.style.display = "block";
				  sellId.style.display = "none";					  
				  $('.inner-circle').css('marginLeft','0px');
				 /* buyId.style.display = "none";
				  sellId.style.display = "block";
				  $('.inner-circle').css('marginLeft','30px');*/
			  }				
					
			}
			
	


function onclickstocksellbtn(stockId,price,exchange,token,stockdisplayname,mcxticksize,mcxexpirydate,nseticksize,nseexpirydate,nfoexpirydate,mcxInstrumentCode,mcxStrikePrice,mcxOptionType,mcxInstrumentName,mcxInstrumentSeries,nseSymbol,nseSeries,nfosymbol,nfostrike_price,nfooption_type,nfoinstrument_name){

	$('#myModal').modal('show');
		
	document.getElementById("priceId").value=price;
	
	document.getElementById("stocklabelId").innerHTML=stockdisplayname;
	document.getElementById("mcxexpirylabelId").innerHTML=mcxexpirydate;
	document.getElementById("nseexpirydatelabelId").innerHTML="";
	document.getElementById("nfoexpirydatelabelId").innerHTML=nfoexpirydate;		
		
	document.getElementById("mcxticksizehiddval").value=mcxticksize;
	document.getElementById("mcxexpirydatehiddval").value=mcxexpirydate;
	document.getElementById("nseticksizehiddval").value=nseticksize;
	document.getElementById("nseexpirydatehiddval").value=nseexpirydate;
	document.getElementById("nfoexpirydatehiddval").value=nfoexpirydate;
	
	document.getElementById("stockhiddval").value=exchange;
	document.getElementById("tokenhiddval").value=token;
	
	
	//const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	//const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
	const monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']

    const d = new Date();
    var dd = String(d.getDate()).padStart(2, '0');
    var mm = String(d.getMonth() + 1).padStart(2, '0');
    var yyyy = d.getFullYear();
    var todaydate = +dd +"/"+ monthNames[d.getMonth()] +"/"+ yyyy;
    
	
	var valid=exchange;
	
	if (valid==='MCX')
		{
		//	alert("MCX")
		
		var mcxexpiryDATE=mcxexpirydate;
		
		var myDate = new Date(mcxexpiryDATE);
		
		
		var myDate = new Date(mcxexpiryDATE);
		
		var shortYear = myDate.getFullYear(); 
		// Add this line
		var twoDigitYear = shortYear.toString().substr(-2);
		// var mcxexpiryDATEmyDate = +myDate.getDate() +monthNames[myDate.getMonth()];
		
		var mcxexpiryDATEmyDate = +twoDigitYear +monthNames[myDate.getMonth()];
		
		
		var fut="FUT";
		if(mcxOptionType=="XX"){
		document.getElementById("stocklabelId").innerHTML=stockdisplayname+" "+mcxexpiryDATEmyDate+" "+fut;
		document.getElementById("scripthiddval").value=stockdisplayname+mcxexpiryDATEmyDate+fut;
		}else{
			document.getElementById("stocklabelId").innerHTML=stockdisplayname+" "+mcxexpiryDATEmyDate+" "+mcxStrikePrice+" "+mcxOptionType;
			document.getElementById("scripthiddval").value=stockdisplayname+mcxexpiryDATEmyDate+mcxStrikePrice+mcxOptionType;
		}
		
			
				$("#QtyId").val("1");
				$("#DiscquantityId").val("0");
				$("#DiscquantityLabelId").show();
				$("#DiscquantityId").show();
				
			  //Product Order method on MCX
			  	$("#RegularOrdId").prop("checked",true);
				$("#BracketOrdId").prop("checked",false);						
				$("#CoverOrdId").prop("checked",false);					
				$('#AfterMarketOrdId').prop('checked', false); 
				 
				$("#RegularOrdId").prop("disabled",false);
				$("#BracketOrdId").prop("disabled",false);
				$("#CoverOrdId").prop("disabled",false);
				$('#AfterMarketOrdId').prop('disabled', false);
				
				$("#TriggerPriceErrorId").hide();
				$("#DiscQuanErrorId").hide();
				$("#DiscQuanNSEErrorId").hide();
				$("#DiscQuanMCXErrorId").hide();
				
				$("#TriggerPriceDivId").show();
				$("#CoStoplossDivId").hide();
				$("#GTTlabelId").hide();				
			  	$("#datepickerId").hide();					  	
			  	$("#GTTstoplossId").hide();
			  	$("#GttTargetId").hide();
			  	$('#BracketOrdId').show();
				$('#BracketOrdspanId').show();
				$('#CoverOrdId').show();
				$('#CoverOrdspanId').show();
			  	
			 // Regular Order  on MCX
			  	if($("input:radio[name='RegularOrdId']").is(":checked")) {
			  		
			  		$("#BracketOrdId").prop("checked",false);
					$("#BracketOrdId").prop("checked",false);
					$("#CoverOrdId").prop("checked",false);
					$('#AfterMarketOrdId').prop('checked', false);
			  		 
					$('#IoclabelId').show();   
					$('#GTClabelId').show();
					$('#GTDlabelId').show();
					$('#GTTlabelId').hide();
					$('#dayId').show();
					$('#dayId').prop("checked",true);
					$("#gttId").prop("disabled",true);
					
					$("#cncId").prop("disabled",true);	
					$("#cncId").prop('checked',false);
					$('#NrmlId').prop('disabled', false);
					$('#NrmlId').prop('checked', true);
					$("#MisId").prop("disabled",false);
					$("#MisId").prop('checked',false);
					
					$("#TriggerPriceDivId").show();
					$("#CoStoplossDivId").hide();
					
					$("#lmtId").prop("checked",true);
					$("#mktId").prop("checked",false);	
					$('#slId').prop('checked',false);
					$('#sl-mId').prop('checked',false);	
					
					 if($("input:radio[name='lmtId']").is(":checked")) {
						 $("#DiscquantityId").prop("disabled",false);
						 $("#DiscquantityId").val("0");
							//LMT
					      $("#TriggerpriceId").prop("disabled",true);
					      $("#TriggerpriceId").val("0");
					      $("#priceId").prop("disabled",false); 
					      
					      $("#slId").prop("checked",false);
					      $("#mktId").prop("disabled",false);
					      $("#sl-mId").prop("disabled",false);
					      
						 
					 }
					 if($("input:radio[name='mktId']").is(":checked")) {
						 //MKT
						 $("#TriggerpriceId").prop("disabled",true);
					     $("#TriggerpriceId").val("0");
					     $("#priceId").prop("disabled",true);
					     $("#priceId").val("0");	  
					     
					    	$('#stoplessId').hide();
						 	$('#tarketDivId').hide();
						 	$('#TrailingstopId').hide();
						 	
						 	$("#slId").prop("checked",false);
						      $("#lmtId").prop("disabled",false);
						      $("#sl-mId").prop("disabled",false);
						      
						 }
					 
					 if($("input:radio[name='slId']").is(":checked")) {
						 $("#DiscquantityId").prop("disabled",false);
						 $("#DiscquantityId").val("0");
						   //SL
							  $("#TriggerpriceId").prop("disabled",false);
						      $("#priceId").prop("disabled",false);
						      $("#priceId").val("0");    
					 
						      $("#lmtId").prop("checked",false);
						      $("#mktId").prop("disabled",false);
						      $("#sl-mId").prop("disabled",false);
						      
							}
					 if($("input:radio[name='sl-mId']").is(":checked")) {
					 		//SL-M
						  	  $("#TriggerpriceId").prop("disabled",false);
						  	  $("#TriggerpriceId").val("0");
						      $("#priceId").prop("disabled",true);
						      $("#priceId").val("0");
						      $("#DiscquantityId").prop("disabled",false);
						     	 $('#stoplessId').hide();
							 	$('#tarketDivId').hide();
							 	$('#TrailingstopId').hide();
							 	
							 	$("#slId").prop("checked",false);
							      $("#mktId").prop("disabled",false);
							      $("#lmtId").prop("disabled",false);
							      
						 }
			  	}
			 
			 // AfterMarketOrder  on MCX
				if($("input:radio[name='AfterMarketOrdId']").is(":checked")) {
					
					$("#BracketOrdId").prop("checked",false);
					$("#BracketOrdId").prop("checked",false);
					$("#CoverOrdId").prop("checked",false);
					
			  		 
					$('#IoclabelId').show();   
					$('#GTClabelId').show();
					$('#GTDlabelId').show();
					$('#GTTlabelId').hide();
					$('#dayId').show();
					$('#dayId').prop("checked",true);
					$("#gttId").prop("disabled",true);
					
					
					$("#cncId").prop("disabled",false);				
					$('#NrmlId').prop('disabled', false);
					$('#NrmlId').prop('checked', true);
					$("#MisId").prop("disabled",false);
					
					$("#lmtId").prop("checked",true);
					$("#mktId").prop("checked",false);	
					$('#slId').prop('checked',false);
					$('#sl-mId').prop('checked',false);
					
					$("#TriggerPriceDivId").show();
					$("#CoStoplossDivId").hide();
					
					 if($("input:radio[name='lmtId']").is(":checked")) {
						 $("#DiscquantityId").prop("disabled",false);
						 $("#DiscquantityId").val("0");
							//LMT
					      $("#TriggerpriceId").prop("disabled",true);
					      $("#TriggerpriceId").val("0");
					      $("#priceId").prop("disabled",false); 
					      
					      $("#slId").prop("checked",false);
					      $("#mktId").prop("disabled",false);
					      $("#sl-mId").prop("disabled",false);
					      
						 
					 }
					 if($("input:radio[name='mktId']").is(":checked")) {
						 //MKT
						 $("#TriggerpriceId").prop("disabled",true);
					     $("#TriggerpriceId").val("0");
					     $("#priceId").prop("disabled",true);
					     $("#priceId").val("0");	  
					     
					    	$('#stoplessId').hide();
						 	$('#tarketDivId').hide();
						 	$('#TrailingstopId').hide();
						 	
						 	$("#slId").prop("checked",false);
						      $("#lmtId").prop("disabled",false);
						      $("#sl-mId").prop("disabled",false);
						      
						 }
					 
					 if($("input:radio[name='slId']").is(":checked")) {
						 $("#DiscquantityId").prop("disabled",false);
						 $("#DiscquantityId").val("0");
						   //SL
							  $("#TriggerpriceId").prop("disabled",false);
						      $("#priceId").prop("disabled",false);
						      $("#priceId").val("0");    
					 
						      $("#lmtId").prop("checked",false);
						      $("#mktId").prop("disabled",false);
						      $("#sl-mId").prop("disabled",false);
						      
							}
					 if($("input:radio[name='sl-mId']").is(":checked")) {
					 		//SL-M
						  	  $("#TriggerpriceId").prop("disabled",false);
						  	  $("#TriggerpriceId").val("0");
						      $("#priceId").prop("disabled",true);
						      $("#priceId").val("0");
						      $("#DiscquantityId").prop("disabled",false);
						     	 $('#stoplessId').hide();
							 	$('#tarketDivId').hide();
							 	$('#TrailingstopId').hide();
							 	
							 	$("#slId").prop("checked",false);
							      $("#mktId").prop("disabled",false);
							      $("#lmtId").prop("disabled",false);
							      
						 }
					 
					
				}
				// Bracket Order  on MCX
			  	 if($("input:radio[name='BracketOrdId']").is(":checked")) {
			  		$("#RegularOrdId").prop("checked",false);
					$("#BracketOrdId").prop("checked",false);
					$("#CoverOrdId").prop("checked",false);
					$('#AfterMarketOrdId').prop('checked', false);  
			  		 
					
					$('#dayId').prop('checked', true);
				  	$("#datepickerId").hide();
				  	$("#TriggerPriceDivId").show();	
				  	$("#GTTlabelId").hide();
				  	
				  	$('#IoclabelId').show();   
					$('#GTClabelId').show();
					$('#GTDlabelId').show();
					$('#GTTlabelId').hide();
					$('#dayId').show();
					$('#dayId').prop("checked",true);
					$("#gttId").prop("disabled",true);
			  		 
					$("#cncId").prop("disabled",true);				
					$('#NrmlId').prop('disabled', true);
					$("#MisId").prop("disabled",true);
					
					$('#BracketOrdId').show();
					$('#BracketOrdspanId').show();
					$('#CoverOrdId').show();
					$('#CoverOrdspanId').show();
					
					
					$("#TriggerPriceDivId").show();
					$("#CoStoplossDivId").hide();
					
					$("#lmtId").prop("checked",true);
					$('#lmtId').prop('disabled',false);
					$("#mktId").prop("disabled",true);	
					$("#mktId").prop("checked",false);	
					$('#slId').prop('disabled',false);
					$("#slId").prop("checked",false);
					$('#sl-mId').prop('disabled',true);
					$("#sl-mId").prop("checked",false);
				
					 if($("input:radio[name='lmtId']").is(":checked")) {
						 
						 
						 $("#DiscquantityId").prop("disabled",true);
						 $("#DiscquantityId").val("0");
							//LMT
						     $("#TriggerpriceId").prop("disabled",true);
						     $("#TriggerpriceId").val("0");
						     $("#priceId").prop("disabled",false);
						     
						      $("#mktId").prop("checked",false);
						      $("#sl-mId").prop("checked",false);
					 }
					 if($("input:radio[name='slId']").is(":checked")) {
					 
						 $("#DiscquantityId").prop("disabled",true);
						 	
							  //SL
				 			     $("#TriggerpriceId").prop("disabled",false);
				 			     $("#TriggerpriceId").val("0");
				 			     $("#priceId").prop("disabled",false);
						 			
				 			     $("#mktId").prop("checked",false);
				 			      $("#sl-mId").prop("checked",false);
					 }
			  		
			  	 }
				
			  // Cover Order  on MCX
			  	if($("input:radio[name='CoverOrdId']").is(":checked")) {
			  		
			  		$("#RegularOrdId").prop("checked",false);
					$("#BracketOrdId").prop("checked",false);
					$('#AfterMarketOrdId').prop('checked', false);  
			  		 
			  		
					$("#TriggerPriceDivId").hide();
					$("#CoStoplossDivId").show();
					
					$("#cncId").prop("disabled",true);				
					$('#NrmlId').prop('disabled', true);
					$("#MisId").prop("disabled",true);
					
					$('#IoclabelId').show();   
					$('#GTClabelId').show();
					$('#GTDlabelId').show();
					$('#GTTlabelId').hide();
					$('#dayId').show();
					$('#dayId').prop("checked",true);
					$("#gttId").prop("disabled",true);
					
					$("#lmtId").prop("checked",true);
					$('#lmtId').prop('disabled',false);
					$("#mktId").prop("disabled",true);	
					$("#mktId").prop("checked",false);	
					$('#slId').prop('disabled',false);
					$("#slId").prop("checked",false);
					$('#sl-mId').prop('disabled',true);
					$("#sl-mId").prop("checked",false);
					
					 if($("input:radio[name='lmtId']").is(":checked")) {
						 $("#DiscquantityId").prop("disabled",false);
						 $("#DiscquantityId").val("0");
							//LMT
					      $("#TriggerpriceId").prop("disabled",true);
					      $("#TriggerpriceId").val("0");
					      $("#priceId").prop("disabled",false); 
					      
					      $("#slId").prop("checked",false);
					      $("#sl-mId").prop("checked",false);
						 
					 }
					 if($("input:radio[name='mktId']").is(":checked")) {
						 $("#DiscquantityId").prop("disabled",false);
						 $("#DiscquantityId").val("0");
						   //SL
							  $("#TriggerpriceId").prop("disabled",false);
						      $("#priceId").prop("disabled",false);
						      $("#priceId").val("0"); 
						      $("#slId").prop("checked",false);
						      $("#sl-mId").prop("checked",false);
					 
				}
					 
			  	}
			  	 
			  	
				 if($("input:radio[name='dayId']").is(":checked")) {	
						
						$('#iocId').prop('checked', false);
						$('#gtcId').prop('checked', false);
						$('#gtdId').prop('checked', false);
						$('#gttId').prop('checked', false);
				 }
				 if($("input:radio[name='iocId']").is(":checked")) {	
						
						$('#dayId').prop('checked', false);
						$('#gtcId').prop('checked', false);
						$('#gtdId').prop('checked', false);
						$('#gttId').prop('checked', false);
				 }
				 if($("input:radio[name='gtcId']").is(":checked")) {	
						
						$('#dayId').prop('checked', false);
						$('#iocId').prop('checked', false);
						$('#gtdId').prop('checked', false);
						$('#gttId').prop('checked', false);
				 }
				 if($("input:radio[name='gtdId']").is(":checked")) {	
						
						$('#dayId').prop('checked', false);
						$('#iocId').prop('checked', false);
						$('#gtcId').prop('checked', false);
						$('#gttId').prop('checked', false);
				 }
				 if($("input:radio[name='gttId']").is(":checked")) {	
						
						$('#dayId').prop('checked', false);
						$('#iocId').prop('checked', false);
						$('#gtcId').prop('checked', false);
						$('#gtdId').prop('checked', false);
				 }
				 
				 

					$('#datepicker').datepicker("destroy");
					$('#datepicker').datepicker("refresh");

					var Endday=mcxexpirydate;
					$('#datepicker').datepicker({ 
						
						dateFormat: 'dd/M/yy',
					    minDate: todaydate,
						maxDate:Endday,
					    showOtherMonths: true,
					    selectOtherMonths: true,
					    changeMonth: true,
					    changeYear: true
//				 	    showButtonPanel: true
					});
				 
		}
	
	
 	else if(valid==='NSE'){
		
	//	alert("NSE")
 		
 		
		document.getElementById("stocklabelId").innerHTML=nseSymbol+"-"+nseSeries;
		document.getElementById("scripthiddval").value=nseSymbol+"-"+nseSeries;
		
		
		$("#QtyId").val("1");
		$("#DiscquantityId").val("0");
		$("#DiscquantityLabelId").show();
		$("#DiscquantityId").show();
						
		$('#RegularOrdId').prop('checked', true);				
		$('#AfterMarketOrdId').prop('checked', false);
		
		$("#TriggerpriceId").prop("disabled",true);
		$("#DiscquantityId").prop("disabled",false);
	    $("#TriggerpriceId").val("0");
	    $("#priceId").prop("disabled",false);
		
	    $("#TriggerPriceErrorId").hide();
		$("#DiscQuanErrorId").hide();
		$("#DiscQuanNSEErrorId").hide();
		$("#DiscQuanMCXErrorId").hide();
	 	
		$("#TriggerPriceDivId").show();
		$("#CoStoplossDivId").hide();
		$("#GTTlabelId").show();
		$("#gttId").show();
		$("#GTTspanId").show();
		
	  	$("#datepickerId").hide();
	 
		 
	  	
		
		if($("input:radio[name='RegularOrdId']").is(":checked")) {
			
	  		$("#BracketOrdId").prop("disabled",true);
			$("#CoverOrdId").prop("disabled",false);
			$('#AfterMarketOrdId').prop('checked', false);
			
								
			$("#cncId").prop("disabled",false);
			$('#cncId').prop('checked', true);
			$('#NrmlId').prop('disabled', true);
			$('#NrmlId').prop('checked', false);
			$('#MisId').prop('checked', false);
			$('#MisId').prop('disabled', false);
			
			$("#TriggerPriceDivId").show();
			$("#CoStoplossDivId").hide();

			$("#TriggerpriceId").prop("disabled",true);
			$("#DiscquantityId").prop("disabled",false);
		    $("#TriggerpriceId").val("0");
		    $("#priceId").prop("disabled",false);
		    
			$('#lmtId').prop('checked', true);
			$('#mktId').prop('checked', false);
			$('#mktId').prop('disabled', false);
			$('#slId').prop('checked', false);
			$('#slId').prop('disabled', false);
			$('#sl-mId').prop('checked', false);
			$('#sl-mId').prop('disabled', false);
			
			$('#BracketOrdId').hide();
			$('#BracketOrdspanId').hide();
			$('#CoverOrdId').hide();
			$('#CoverOrdspanId').hide();
			$('#stoplessId').hide();
		 	$('#tarketDivId').hide();
		 	$('#TrailingstopId').hide();
			
		 	$('#dayId').show();
		 	$('#IoclabelId').show(); 
			$('#GTClabelId').show();
			$('#GTDlabelId').show();
			$('#GTTlabelId').show();
			$('#dayId').prop("checked",true);
			$('#iocId').prop('checked', false);
			$('#gtcId').prop('checked', false);
			$('#gtdId').prop('checked', false);
			$('#gttId').prop('checked', false);
			$("#gttId").prop("disabled",false);
			
			 if($("input:radio[name='lmtId']").is(":checked")) {
				 $("#DiscquantityId").prop("disabled",false);
				 $("#DiscquantityId").val("0");
					//LMT
			      $("#TriggerpriceId").prop("disabled",true);
			      $("#TriggerpriceId").val("0");
			      $("#priceId").prop("disabled",false); 
			      
			      $("#slId").prop("checked",false);
			      $("#mktId").prop("disabled",false);
			      $("#sl-mId").prop("disabled",false);
			      
				 
			 }
			 if($("input:radio[name='mktId']").is(":checked")) {
				 //MKT
				 $("#TriggerpriceId").prop("disabled",true);
			     $("#TriggerpriceId").val("0");
			     $("#priceId").prop("disabled",true);
			     $("#priceId").val("0");	  
			     
			    	$('#stoplessId').hide();
				 	$('#tarketDivId').hide();
				 	$('#TrailingstopId').hide();
				 	
				 	$("#slId").prop("checked",false);
				      $("#lmtId").prop("disabled",false);
				      $("#sl-mId").prop("disabled",false);
				      
				 }
			 
			 if($("input:radio[name='slId']").is(":checked")) {
				 $("#DiscquantityId").prop("disabled",false);
				 $("#DiscquantityId").val("0");
				   //SL
					  $("#TriggerpriceId").prop("disabled",false);
				      $("#priceId").prop("disabled",false);
				      $("#priceId").val("0");    
			 
				      $("#lmtId").prop("checked",false);
				      $("#mktId").prop("disabled",false);
				      $("#sl-mId").prop("disabled",false);
				      
					}
			 if($("input:radio[name='sl-mId']").is(":checked")) {
			 		//SL-M
				  	  $("#TriggerpriceId").prop("disabled",false);
				  	  $("#TriggerpriceId").val("0");
				      $("#priceId").prop("disabled",true);
				      $("#priceId").val("0");
				      $("#DiscquantityId").prop("disabled",false);
				     	 $('#stoplessId').hide();
					 	$('#tarketDivId').hide();
					 	$('#TrailingstopId').hide();
					 	
					 	$("#slId").prop("checked",false);
					      $("#mktId").prop("disabled",false);
					      $("#lmtId").prop("disabled",false);
					      
				 }
			 
			
		}
		 if($("input:radio[name='AfterMarketOrdId']").is(":checked")) {
			 
				
		  		$("#BracketOrdId").prop("disabled",true);
				$("#CoverOrdId").prop("disabled",false);
				$('#AfterMarketOrdId').prop('checked', false);
				
				
				$("#TriggerPriceDivId").show();
				$("#CoStoplossDivId").hide();
				 if(valid==='NSE'){
					   $("#cncId").prop("disabled",false);
						$('#cncId').prop('checked', true);
						$('#NrmlId').prop('disabled', true);
						$('#NrmlId').prop('checked', false);
						$('#MisId').prop('checked', false);
						$('#MisId').prop('disabled', false);
				 }
				
				

				$("#TriggerpriceId").prop("disabled",true);
				$("#DiscquantityId").prop("disabled",false);
			    $("#TriggerpriceId").val("0");
			    $("#priceId").prop("disabled",false);
			    
				$('#lmtId').prop('checked', true);
				$('#mktId').prop('checked', false);
				$('#mktId').prop('disabled', false);
				$('#slId').prop('checked', false);
				$('#slId').prop('disabled', false);
				$('#sl-mId').prop('checked', false);
				$('#sl-mId').prop('disabled', false);
				
				$('#BracketOrdId').hide();
				$('#BracketOrdspanId').hide();
				$('#CoverOrdId').hide();
				$('#CoverOrdspanId').hide();
				$('#stoplessId').hide();
			 	$('#tarketDivId').hide();
			 	$('#TrailingstopId').hide();
				
			 	$('#dayId').show();
			 	$('#IoclabelId').show(); 
				$('#GTClabelId').show();
				$('#GTDlabelId').show();
				$('#GTTlabelId').show();
				$('#dayId').prop("checked",true);
				$('#iocId').prop('checked', false);
				$('#gtcId').prop('checked', false);
				$('#gtdId').prop('checked', false);
				$('#gttId').prop('checked', false);
				$("#gttId").prop("disabled",false);
				
				
				 if($("input:radio[name='lmtId']").is(":checked")) {
					 $("#DiscquantityId").prop("disabled",false);
					 $("#DiscquantityId").val("0");
						//LMT
				      $("#TriggerpriceId").prop("disabled",true);
				      $("#TriggerpriceId").val("0");
				      $("#priceId").prop("disabled",false); 
				      
				      $("#slId").prop("checked",false);
				      $("#mktId").prop("disabled",false);
				      $("#sl-mId").prop("disabled",false);
				      
					 
				 }
				 if($("input:radio[name='mktId']").is(":checked")) {
					 //MKT
					 $("#TriggerpriceId").prop("disabled",true);
				     $("#TriggerpriceId").val("0");
				     $("#priceId").prop("disabled",true);
				     $("#priceId").val("0");	  
				     
				    	$('#stoplessId').hide();
					 	$('#tarketDivId').hide();
					 	$('#TrailingstopId').hide();
					 	
					 	$("#slId").prop("checked",false);
					      $("#lmtId").prop("disabled",false);
					      $("#sl-mId").prop("disabled",false);
					      
					 }
				 
				 if($("input:radio[name='slId']").is(":checked")) {
					 $("#DiscquantityId").prop("disabled",false);
					 $("#DiscquantityId").val("0");
					   //SL
						  $("#TriggerpriceId").prop("disabled",false);
					      $("#priceId").prop("disabled",false);
					      $("#priceId").val("0");    
				 
					      $("#lmtId").prop("checked",false);
					      $("#mktId").prop("disabled",false);
					      $("#sl-mId").prop("disabled",false);
					      
						}
				 if($("input:radio[name='sl-mId']").is(":checked")) {
				 		//SL-M
					  	  $("#TriggerpriceId").prop("disabled",false);
					  	  $("#TriggerpriceId").val("0");
					      $("#priceId").prop("disabled",true);
					      $("#priceId").val("0");
					      $("#DiscquantityId").prop("disabled",false);
					     	 $('#stoplessId').hide();
						 	$('#tarketDivId').hide();
						 	$('#TrailingstopId').hide();
						 	
						 	$("#slId").prop("checked",false);
						      $("#mktId").prop("disabled",false);
						      $("#lmtId").prop("disabled",false);
						      
					 }
				 
				 
				 
		 }
		
		
		
	  	
	  	
		 if($("input:radio[name='dayId']").is(":checked")) {	
				
				$('#iocId').prop('checked', false);
				$('#gtcId').prop('checked', false);
				$('#gtdId').prop('checked', false);
				$('#gttId').prop('checked', false);
				
				$("#GTTstoplossId").hide();
				$("#GttTargetId").hide();
				 $("#GTTstoplossValueId").prop("disabled",true);
				 $("#GttTargetvalueId").val("0");
					$("#GttTargetvalueId").prop("disabled",true);
					 $("#GttTargetvalueId").val("0");
		 }
		 if($("input:radio[name='iocId']").is(":checked")) {	
				
				$('#dayId').prop('checked', false);
				$('#gtcId').prop('checked', false);
				$('#gtdId').prop('checked', false);
				$('#gttId').prop('checked', false);
				
				$("#GTTstoplossId").hide();
				$("#GttTargetId").hide();
				$("#GTTstoplossValueId").prop("disabled",true);
				 $("#GttTargetvalueId").val("0");
					$("#GttTargetvalueId").prop("disabled",true);
					 $("#GttTargetvalueId").val("0");
		 }
		 if($("input:radio[name='gtcId']").is(":checked")) {	
				
				$('#dayId').prop('checked', false);
				$('#iocId').prop('checked', false);
				$('#gtdId').prop('checked', false);
				$('#gttId').prop('checked', false);
				
				$("#GTTstoplossId").hide();
				$("#GttTargetId").hide();
				 	$("#GTTstoplossValueId").prop("disabled",true);
					$("#GttTargetvalueId").prop("disabled",true);
					$("#GTTstoplossValueId").prop("disabled",true);
					 $("#GttTargetvalueId").val("0");
						$("#GttTargetvalueId").prop("disabled",true);
						 $("#GttTargetvalueId").val("0");
		 }
		 if($("input:radio[name='gtdId']").is(":checked")) {	
				
				$('#dayId').prop('checked', false);
				$('#iocId').prop('checked', false);
				$('#gtcId').prop('checked', false);
				$('#gttId').prop('checked', false);
				
				$("#GTTstoplossId").hide();
				$("#GttTargetId").hide();
				$("#GTTstoplossValueId").prop("disabled",true);
				 $("#GttTargetvalueId").val("0");
					$("#GttTargetvalueId").prop("disabled",true);
					 $("#GttTargetvalueId").val("0");
		 }
		 if($("input:radio[name='gttId']").is(":checked")) {	
				
				$('#dayId').prop('checked', false);
				$('#iocId').prop('checked', false);
				$('#gtcId').prop('checked', false);
				$('#gtdId').prop('checked', false);
				
				$("#GTTstoplossId").show();
				$("#GttTargetId").show();
		 }
		

			$('#datepicker').datepicker("destroy");
			$('#datepicker').datepicker("refresh");
			//var Endday=nseexpirydate;
			var Endday=00/00/00;
			$('#datepicker').datepicker({ 
				
				dateFormat: 'dd/M/yy',
			    minDate: todaydate,
				maxDate:Endday,
			    showOtherMonths: true,
			    selectOtherMonths: true,
			    changeMonth: true,
			    changeYear: true
//		 	    showButtonPanel: true
			});
		 
	}
	else  if(valid==='NFO'){
		
		
		var nfoexpiryDATE=nfoexpirydate;
		var myDate = new Date(nfoexpiryDATE);
		
		var shortYear = myDate.getFullYear(); 
		// Add this line
		var twoDigitYear = shortYear.toString().substr(-2);
		var dd = myDate.getDate();
		var nfoexpirymyDate ='';
		
		  nfoexpirymyDate = +dd+monthNames[myDate.getMonth()]+twoDigitYear;
		 
		if(nfoinstrument_name=="FUTIDX" || nfoinstrument_name=="FUTSTK" ){
			if(dd<10) 
			{
				//	dd='0'+dd;
				// nfoexpirymyDate = dd.concat(monthNames[myDate.getMonth()]+twoDigitYear);						 
				 document.getElementById("stocklabelId").innerHTML=nfosymbol+" "+"0"+nfoexpirymyDate+" "+"FUT";
				 document.getElementById("scripthiddval").value=nfosymbol+"0"+nfoexpirymyDate+"FUT";
			}else {
				
				document.getElementById("stocklabelId").innerHTML=nfosymbol+" "+nfoexpirymyDate+" "+"FUT";
				document.getElementById("scripthiddval").value=nfosymbol+nfoexpirymyDate+"FUT";
			} 
			
		}else{
			
			if(dd<10) 
			{
			  //  dd='0'+dd;
				// nfoexpirymyDate = dd.concat(monthNames[myDate.getMonth()]+twoDigitYear);
			document.getElementById("stocklabelId").innerHTML=nfosymbol+" "+"0"+nfoexpirymyDate+" "+nfostrike_price+" "+nfooption_type;
			document.getElementById("scripthiddval").value=nfosymbol+"0"+nfoexpirymyDate+nfostrike_price+nfooption_type;
			}else{
				document.getElementById("stocklabelId").innerHTML=nfosymbol+" "+nfoexpirymyDate+" "+nfostrike_price+" "+nfooption_type;
				document.getElementById("scripthiddval").value=nfosymbol+nfoexpirymyDate+nfostrike_price+nfooption_type;
			}	 
				 
		}
		//alert("NFO")
		
		$("#QtyId").val("1");
		$("#DiscquantityId").val("0");
		$("#DiscquantityLabelId").hide();
		$("#DiscquantityId").hide();
		
	  //Product Order method on MCX
	  	$("#RegularOrdId").prop("checked",true);
		$("#BracketOrdId").prop("checked",false);						
		$("#CoverOrdId").prop("checked",false);					
		$('#AfterMarketOrdId').prop('checked', false); 
		 
		
		
		$("#TriggerPriceErrorId").hide();
		$("#DiscQuanErrorId").hide();
		$("#DiscQuanNSEErrorId").hide();
		$("#DiscQuanMCXErrorId").hide();
		
		$("#RegularOrdId").prop("disabled",false);
		$("#BracketOrdId").prop("disabled",false);
		$("#CoverOrdId").prop("disabled",false);
		$('#AfterMarketOrdId').prop('disabled', false);
		
		$("#TriggerPriceDivId").show();
		$("#CoStoplossDivId").hide();
		$("#GTTlabelId").hide();
		$("#gttId").hide();
		$("#GTTspanId").hide();			
	  	$("#datepickerId").hide();					  	
	  	$("#GTTstoplossId").hide();
	  	$("#GttTargetId").hide();
	  	$("#gttId").prop("disabled",true);
	  	$('#BracketOrdId').show();
		$('#BracketOrdspanId').show();
		$('#CoverOrdId').show();
		$('#CoverOrdspanId').show();
		
		$("#cncId").prop("disabled",true);	
		$("#cncId").prop('checked',false);
		$('#NrmlId').prop('disabled', false);
		$('#NrmlId').prop('checked', true);
		$("#MisId").prop("disabled",false);
		$("#MisId").prop('checked',false);
		
	  	
	 // Regular Order  on MCX
	  	if($("input:radio[name='RegularOrdId']").is(":checked")) {
	  		
	  		$("#BracketOrdId").prop("checked",false);
			$("#BracketOrdId").prop("checked",false);
			$("#CoverOrdId").prop("checked",false);
			$('#AfterMarketOrdId').prop('checked', false);
	  		 
			
			$("#CoStoplossDivId").hide();
			$("#TriggerPriceDivId").show();
			
			$('#IoclabelId').show();   
			$('#GTClabelId').show();
			$('#GTDlabelId').show();
			$("#GTTlabelId").hide();
			$("#gttId").hide();
			$("#GTTspanId").hide();
			$('#dayId').show();
			$("#gttId").hide();
			$('#dayId').prop("checked",true);
			$("#gttId").prop("disabled",true);
			
			$("#cncId").prop("disabled",true);	
			$("#cncId").prop('checked',false);
			$('#NrmlId').prop('disabled', false);
			$('#NrmlId').prop('checked', true);
			$("#MisId").prop("disabled",false);
			$("#MisId").prop('checked',false);
			
			$("#lmtId").prop("checked",true);
			$("#mktId").prop("checked",false);	
			$('#slId').prop('checked',false);
			$('#sl-mId').prop('checked',false);	
			
			if($("input:radio[name='lmtId']").is(":checked")) {
				 $("#DiscquantityId").prop("disabled",false);
				 $("#DiscquantityId").val("0");
					//LMT
			      $("#TriggerpriceId").prop("disabled",true);
			      $("#TriggerpriceId").val("0");
			      $("#priceId").prop("disabled",false); 
			      
			      $("#mktId").prop("disabled",false);
			      $("#slId").prop("disabled",false);
			      $("#sl-mId").prop("disabled",false);
				 
			 }
			 if($("input:radio[name='mktId']").is(":checked")) {
				 //MKT
				 $("#TriggerpriceId").prop("disabled",true);
			     $("#TriggerpriceId").val("0");
			     $("#priceId").prop("disabled",true);
			     $("#priceId").val("0");	
			     
			     $("#lmtId").prop("disable",false);
			      $("#slId").prop("disabled",false);
			      $("#sl-mId").prop("disabled",false);
			     
			    	$('#stoplessId').hide();
				 	$('#tarketDivId').hide();
				 	$('#TrailingstopId').hide();
				 }
			 
			 if($("input:radio[name='slId']").is(":checked")) {
				 $("#DiscquantityId").prop("disabled",false);
				 $("#DiscquantityId").val("0");
				   //SL
					  $("#TriggerpriceId").prop("disabled",false);
				      $("#priceId").prop("disabled",false);
				      $("#priceId").val("0");
				      
				      $("#lmtId").prop("disabled",false);
				      $("#mktId").prop("disabled",false);
				      $("#sl-mId").prop("disabled",false);
				      
				      
				      }
			 
			 if($("input:radio[name='sl-mId']").is(":checked")) {
			 		//SL-M
				  	  $("#TriggerpriceId").prop("disabled",false);
				  	  $("#TriggerpriceId").val("0");
				      $("#priceId").prop("disabled",true);
				      $("#priceId").val("0");
				      $("#DiscquantityId").prop("disabled",false);
				     	 $('#stoplessId').hide();
					 	$('#tarketDivId').hide();
					 	$('#TrailingstopId').hide();
					 	
					 	 $("#lmtId").prop("disabled",false);
					      $("#mktId").prop("disabled",false);
					      $("#slId").prop("disabled",false);
					      
				 }
			
			
	  	}
	 
	 // AfterMarketOrder  on MCX
		if($("input:radio[name='AfterMarketOrdId']").is(":checked")) {
			
			$("#BracketOrdId").prop("checked",false);
			$("#BracketOrdId").prop("checked",false);
			$("#CoverOrdId").prop("checked",false);
			
			$("#CoStoplossDivId").hide();
			$("#TriggerPriceDivId").show();
			
	  		 
			$('#IoclabelId').show();   
			$('#GTClabelId').show();
			$('#GTDlabelId').show();
			$("#GTTlabelId").hide();
			$("#gttId").hide();
			$("#GTTspanId").hide();
			$('#dayId').show();
			$('#GTTspanId').hide();
			$('#dayId').prop("checked",true);
			$("#gttId").prop("disabled",true);
			
			
			$("#cncId").prop("disabled",true);	
			$("#cncId").prop('checked',false);
			$('#NrmlId').prop('disabled', false);
			$('#NrmlId').prop('checked', true);
			$("#MisId").prop("disabled",false);
			$("#MisId").prop('checked',false);
			
			
			$("#lmtId").prop("checked",true);
			$("#mktId").prop("checked",false);	
			$('#slId').prop('checked',false);
			$('#sl-mId').prop('checked',false);
			
			 if($("input:radio[name='lmtId']").is(":checked")) {
				 $("#DiscquantityId").prop("disabled",false);
				 $("#DiscquantityId").val("0");
					//LMT
			      $("#TriggerpriceId").prop("disabled",true);
			      $("#TriggerpriceId").val("0");
			      $("#priceId").prop("disabled",false); 
			      
			      $("#slId").prop("checked",false);
			      $("#mktId").prop("disabled",false);
			      $("#sl-mId").prop("disabled",false);
			      
				 
			 }
			 if($("input:radio[name='mktId']").is(":checked")) {
				 //MKT
				 $("#TriggerpriceId").prop("disabled",true);
			     $("#TriggerpriceId").val("0");
			     $("#priceId").prop("disabled",true);
			     $("#priceId").val("0");	  
			     
			    	$('#stoplessId').hide();
				 	$('#tarketDivId').hide();
				 	$('#TrailingstopId').hide();
				 	
				 	$("#slId").prop("checked",false);
				      $("#lmtId").prop("disabled",false);
				      $("#sl-mId").prop("disabled",false);
				      
				 }
			 
			 if($("input:radio[name='slId']").is(":checked")) {
				 $("#DiscquantityId").prop("disabled",false);
				 $("#DiscquantityId").val("0");
				   //SL
					  $("#TriggerpriceId").prop("disabled",false);
				      $("#priceId").prop("disabled",false);
				      $("#priceId").val("0");    
			 
				      $("#lmtId").prop("checked",false);
				      $("#mktId").prop("disabled",false);
				      $("#sl-mId").prop("disabled",false);
				      
					}
			 if($("input:radio[name='sl-mId']").is(":checked")) {
			 		//SL-M
				  	  $("#TriggerpriceId").prop("disabled",false);
				  	  $("#TriggerpriceId").val("0");
				      $("#priceId").prop("disabled",true);
				      $("#priceId").val("0");
				      $("#DiscquantityId").prop("disabled",false);
				     	 $('#stoplessId').hide();
					 	$('#tarketDivId').hide();
					 	$('#TrailingstopId').hide();
					 	
					 	$("#slId").prop("checked",false);
					      $("#mktId").prop("disabled",false);
					      $("#lmtId").prop("disabled",false);
					      
				 }
			
		}
		// Bracket Order  on MCX
	  	 if($("input:radio[name='BracketOrdId']").is(":checked")) {
	  		$("#RegularOrdId").prop("checked",false);
			$("#BracketOrdId").prop("checked",false);
			$("#CoverOrdId").prop("checked",false);
			$('#AfterMarketOrdId').prop('checked', false);  
	  		 
			
			$('#dayId').prop('checked', true);
		  	$("#datepickerId").hide();
		  	$("#TriggerPriceDivId").show();	
		  			  	
		  	$('#IoclabelId').show();   
			$('#GTClabelId').show();
			$('#GTDlabelId').show();
			$("#GTTlabelId").hide();
			$("#gttId").hide();
			$("#GTTspanId").hide();
			$('#dayId').show();
			$('#dayId').prop("checked",true);
			$("#gttId").prop("disabled",true);
	  		 
			$("#cncId").prop("disabled",true);				
			$('#NrmlId').prop('disabled', true);
			$("#MisId").prop("disabled",true);
			
			$('#BracketOrdId').show();
			$('#BracketOrdspanId').show();
			$('#CoverOrdId').show();
			$('#CoverOrdspanId').show();
			
			 
			$("#lmtId").prop("checked",true);
			$('#lmtId').prop('disabled',false);
			$("#mktId").prop("disabled",true);	
			$("#mktId").prop("checked",false);	
			$('#slId').prop('disabled',false);
			$("#slId").prop("checked",false);
			$('#sl-mId').prop('disabled',true);
			$("#sl-mId").prop("checked",false);
			
			$("#CoStoplossDivId").hide();
			$("#TriggerPriceDivId").show();
		
			 if($("input:radio[name='lmtId']").is(":checked")) {
				 
				 
				 $("#DiscquantityId").prop("disabled",true);
				 $("#DiscquantityId").val("0");
					//LMT
				     $("#TriggerpriceId").prop("disabled",true);
				     $("#TriggerpriceId").val("0");
				     $("#priceId").prop("disabled",false);
				     
				      $("#mktId").prop("checked",false);
				      $("#sl-mId").prop("checked",false);
			 }
			 if($("input:radio[name='slId']").is(":checked")) {
			 
				 $("#DiscquantityId").prop("disabled",true);
				 	
					  //SL
		 			     $("#TriggerpriceId").prop("disabled",false);
		 			     $("#TriggerpriceId").val("0");
		 			     $("#priceId").prop("disabled",false);
				 			
		 			     $("#mktId").prop("checked",false);
		 			      $("#sl-mId").prop("checked",false);
			 }
	  		
	  	 }
		
	  // Cover Order  on MCX
	  	if($("input:radio[name='CoverOrdId']").is(":checked")) {
	  		
	  		$("#RegularOrdId").prop("checked",false);
			$("#BracketOrdId").prop("checked",false);
			$('#AfterMarketOrdId').prop('checked', false);  
	  		 
	  		
			$("#cncId").prop("disabled",true);				
			$('#NrmlId').prop('disabled', true);
			$("#MisId").prop("disabled",true);
			
			$('#IoclabelId').show();   
			$('#GTClabelId').show();
			$('#GTDlabelId').show();
			$("#GTTlabelId").hide();
			$("#gttId").hide();
			$("#GTTspanId").hide();
			$('#dayId').show();
			$('#dayId').prop("checked",true);
			$("#gttId").prop("disabled",true);
			
			$("#lmtId").prop("checked",true);
			$('#lmtId').prop('disabled',false);
			$("#mktId").prop("disabled",true);	
			$("#mktId").prop("checked",false);	
			$('#slId').prop('disabled',false);
			$("#slId").prop("checked",false);
			$('#sl-mId').prop('disabled',true);
			$("#sl-mId").prop("checked",false);
			
			$("#CoStoplossDivId").show();
			$("#TriggerPriceDivId").hide();
			
			 if($("input:radio[name='lmtId']").is(":checked")) {
				 $("#DiscquantityId").prop("disabled",false);
				 $("#DiscquantityId").val("0");
					//LMT
			      $("#TriggerpriceId").prop("disabled",true);
			      $("#TriggerpriceId").val("0");
			      $("#priceId").prop("disabled",false); 
			      
			      $("#slId").prop("checked",false);
			      $("#sl-mId").prop("checked",false);
				 
			 }
			 if($("input:radio[name='mktId']").is(":checked")) {
				 $("#DiscquantityId").prop("disabled",false);
				 $("#DiscquantityId").val("0");
				   //SL
					  $("#TriggerpriceId").prop("disabled",false);
				      $("#priceId").prop("disabled",false);
				      $("#priceId").val("0"); 
				      $("#slId").prop("checked",false);
				      $("#sl-mId").prop("checked",false);
			 
		}
			 
	  	}
	  	 
	  	
		 if($("input:radio[name='dayId']").is(":checked")) {	
				
				$('#iocId').prop('checked', false);
				$('#gtcId').prop('checked', false);
				$('#gtdId').prop('checked', false);
				$('#gttId').prop('checked', false);
		 }
		 if($("input:radio[name='iocId']").is(":checked")) {	
				
				$('#dayId').prop('checked', false);
				$('#gtcId').prop('checked', false);
				$('#gtdId').prop('checked', false);
				$('#gttId').prop('checked', false);
		 }
		 if($("input:radio[name='gtcId']").is(":checked")) {	
				
				$('#dayId').prop('checked', false);
				$('#iocId').prop('checked', false);
				$('#gtdId').prop('checked', false);
				$('#gttId').prop('checked', false);
		 }
		 if($("input:radio[name='gtdId']").is(":checked")) {	
				
				$('#dayId').prop('checked', false);
				$('#iocId').prop('checked', false);
				$('#gtcId').prop('checked', false);
				$('#gttId').prop('checked', false);
		 }
		 if($("input:radio[name='gttId']").is(":checked")) {	
				
				$('#dayId').prop('checked', false);
				$('#iocId').prop('checked', false);
				$('#gtcId').prop('checked', false);
				$('#gtdId').prop('checked', false);
		 }
		 
		    $('#datepicker').datepicker("destroy");
			$('#datepicker').datepicker("refresh");
			var Endday=nfoexpirydate;
			$('#datepicker').datepicker({ 
				
				dateFormat: 'dd/M/yy',
			    minDate: todaydate,
				maxDate:Endday,
			    showOtherMonths: true,
			    selectOtherMonths: true,
			    changeMonth: true,
			    changeYear: true
//		 	    showButtonPanel: true
			});
	} 

	 var act = $('.toggle-btn').hasClass("active");
	  var buybtnId = document.getElementById("buybtnId");		 
	  var sellbtnId = document.getElementById("sellbtnId");
	  var buyId = document.getElementById("buyId");
	  var sellId = document.getElementById("sellId");
//		  var header=document.getElementById("modelheaderId");
	 // var radiolabel=document.getElementById("radioinlineId");
	
	  if(act==true){
		  act= true;
		  buyId.style.display = "none";
		  sellId.style.display = "block";
		  $('.inner-circle').css('marginLeft','30px');
        //	header.style.backgroundColor="#3FBC8A";
		 // radiolabel.style.Color="#E55C5C";
	  }		  
	  else if((act==false)){ 
		  act= true;		 
		  buyId.style.display = "none";
		  sellId.style.display = "block";
		  
		 // buyId.style.display = "block";
		  //  sellId.style.display = "none";
		    $('.inner-circle').css('marginLeft','30px');
//			  header.style.backgroundColor="#E55C5C";
		 // radiolabel.style.Color="#3FBC8A";
	  }	



			
	}








//============================== Thangadurai  START==========================================


//====ALERT START =========

function setAlert(){
	
	$('#myModalAlertSet').modal('show');

	var currentDate = new Date()
	    var day = currentDate.getDate();
	    var month = currentDate.getMonth() + 1;
	    var year = currentDate.getFullYear();
	    var mydate = day+"-"+month+"-"+year;
	    
	    var hour = currentDate.getHours();
	    var min = currentDate.getMinutes();
	    var sec = currentDate.getSeconds();
	    
	    var myhours=hour+":"+min;
	    

	    
	    var script=$("#setScriptNamehiddenId").val();
	    var price=$("#setpricehiddenId").val();
	    var exchange=$("#setexchangehiddenId").val();
	    var token=$("#settokenhiddenId").val();
	    var mcxexpirydate=$("#setmcxOriginalExpiryDatehiddenId").val();
	    var nseexpirydate=$("#setnseExDatehiddenId").val();
	    var nfoexpirydate=$("#setnfoexpiry_datehiddenId").val();

		
		document.getElementById("scriptNamehiddId").value=script;
		document.getElementById("pricehiddId").value=price;
		document.getElementById("exchangehiddId").value=exchange;
		document.getElementById("tokenhiddId").value=token;
		
		document.getElementById("scriptnamelabelId").innerHTML=script;
		document.getElementById("alertPriceId").value=price;
		document.getElementById("expiryDate").value=mydate;
		document.getElementById("timeId").value=myhours;
		
		
		var less="Lesser than";
		document.getElementById("description").value=script+" "+less+" "+price;
		
		const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
		//const monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']

	    const d = new Date();
	    var dd = String(d.getDate()).padStart(2, '0');
	    var mm = String(d.getMonth() + 1).padStart(2, '0');
	    var yyyy = d.getFullYear();
	    var todaydate = +dd +"/"+ monthNames[d.getMonth()] +"/"+ yyyy;
		
		if(exchange==="MCX"){
			var Endday=mcxexpirydate;
			$('#expiryDate').datepicker({ 
				dateFormat: 'dd/M/yy',
			    minDate: todaydate,
				maxDate:Endday,
			    showOtherMonths: true,
			    selectOtherMonths: true,
			    changeMonth: true,
			    changeYear: true
		 	  //  showButtonPanel: true
			});
		}
		
//			if(exchange==="NSE"){
//				var Endday=nseexpirydate;
//				$('#expiryDate').datepicker({ 
//					dateFormat: 'dd/M/yy',
//				    minDate: todaydate,
//					maxDate:Endday,
//				    showOtherMonths: true,
//				    selectOtherMonths: true,
//				    changeMonth: true,
//				    changeYear: true
//			 	  //  showButtonPanel: true
//				});
//			}
			
	if(exchange==="NFO"){
			var Endday=nfoexpirydate;
			$('#expiryDate').datepicker({ 
				dateFormat: 'dd/M/yy',
			    minDate: todaydate,
				maxDate:Endday,
			    showOtherMonths: true,
			    selectOtherMonths: true,
			    changeMonth: true,
			    changeYear: true
		 	  //  showButtonPanel: true
			});

		}
	}


function createAlert(){
	
	
	var script = document.getElementById("scriptNamehiddId").value;

	var price = document.getElementById("pricehiddId").value;
    
    var exchange=document.getElementById("exchangehiddId").value;
	var token=document.getElementById("tokenhiddId").value;
    
    var alertcondition = document.getElementById("alertconditionId").value;

    var alertprice = document.getElementById("alertPriceId").value;

    var frequency= $("input:radio[name=FrequencyId]:checked").val() 
    
    var notification = document.getElementById("notificationid").value;
    
    var expiry = document.getElementById("expiryDate").value;
    
    var time = document.getElementById("timeId").value;
    
  var setstockdisplaynameId = document.getElementById("setstockdisplaynameId").value;
  var setmcxticksizeId=document.getElementById("setmcxticksizeId").value; 
  var setmcxexpirydateId=document.getElementById("setmcxexpirydateId").value;
  var setnseticksizeId=document.getElementById("setnseticksizeId").value;
  var setnseexpirydateId=document.getElementById("setnseexpirydateId").value;
  var setnfoexpirydateId= document.getElementById("setnfoexpirydateId").value;
  var setmcxInstrumentCodeId=document.getElementById("setmcxInstrumentCodeId").value;
  var setmcxStrikePriceId= document.getElementById("setmcxStrikePriceId").value;
  var setmcxOptionTypeId=document.getElementById("setmcxOptionTypeId").value;
  var setmcxInstrumentNameId=document.getElementById("setmcxInstrumentNameId").value;
  var setmcxInstrumentSeriesId=document.getElementById("setmcxInstrumentSeriesId").value;
  var setnseSymbolId=document.getElementById("setnseSymbolId").value;
  var setnseSeriesId=document.getElementById("setnseSeriesId").value;
  var setnfosymbolId=document.getElementById("setnfosymbolId").value;
  var setnfostrike_priceId=document.getElementById("setnfostrike_priceId").value;
  var setnfooption_typeId= document.getElementById("setnfooption_typeId").value;
  var setnfoinstrument_nameId=document.getElementById("setnfoinstrument_nameId").value;
    
    
  if(alertprice !="" && expiry !="" && time !=""){

    var call="scriptName="+script+"&price="+alertprice+"&frequency="+frequency+"&notification="+notification+"&expiry="+expiry+"&time="+time+"&alertcondition="+alertcondition+"&exchange="+exchange+
    "&token="+token+"&setstockdisplayname="+setstockdisplaynameId+"&setmcxticksize="+setmcxticksizeId+"&setmcxexpirydate="+setmcxexpirydateId+"&setnseticksize="+setnseticksizeId+
    "&setnseexpirydate="+setnseexpirydateId+"&setnfoexpirydate="+setnfoexpirydateId+"&setmcxInstrumentCode="+setmcxInstrumentCodeId+"&setmcxStrikePrice="+setmcxStrikePriceId+"&setmcxOptionType="+setmcxOptionTypeId+
    "&setmcxInstrumentName="+setmcxInstrumentNameId+"&setmcxInstrumentSeries="+setmcxInstrumentSeriesId+"&setnseSymbol="+setnseSymbolId+"&setnseSeries="+setnseSeriesId+"&setnfosymbol="+setnfosymbolId+
    "&setnfostrike_price="+setnfostrike_priceId+"&setnfooption_type="+setnfooption_typeId+"&setnfoinstrument_name="+setnfoinstrument_nameId;
		
		$.ajax({
			type :'POST',
			url :'AlertSet',
			data :call,
			dataType: 'json',
			success:function(response){

				//var jsonObject = response;
				
				 //alert("Alert Created Successfully");
				 $('#setalertshowId').toast('show');
				 
				 $("#myModalAlertSet").modal('hide'); 
				 $('#myModalMoreOption').modal('hide');
				 
				 AlertFunction();
					
		         
			},
			error:function(){
				alert("AlertSet Error");
			
			}	
		});
		
		
}else{
	
	alert("fill the fields");
}
	
}


function AlertFunction(){

	
	 $("#AlertDivId").show();
	 
	 $("#orderhideId").hide();
   $("#otherId").hide();
	 $("#orderdashboardbookhiddenId").hide();
	 $("#markethiddenId").hide();
	 
	 //Portfolio Div Details	 
	 $("#portfoliohideId").hide();
	 $("#PositionsDivId").hide();
	 $("PositionsbodyId").hide();
	 
	//OptionChain
	 	$("#OptionChainDivhideId").hide();
		$("#OptionChainDivcallId").hide();
		$("#OptionChainbodycallId").hide();
		$("#OptionChaininnerbodycallId").hide();
		
	 
	 //Fund Div Details
	 	$("#FundshideId").hide();
		$("#FundsDivId").hide();
		$("#FundsbodyId").hide();
	
		//Profile Div Details
		 $("#AccountProfile").hide();
		 $('#AccountProfileDivId').hide();
		 $('#AccountProfilebodyId').hide();
		 
		 
	$.ajax({
		type :'POST',
		url :'getAlert',
		dataType: 'json',
		success:function(jsonObject){
				
			 // var jsonObject =JSON.parse(response);
           var body; 
           
//           body="<div id='AlertDivId' class='tabcontent' style='margin-right:-26px;margin-left:-13px;'>";
//
//	    	 body=body+"<table id='alerttableId' class='table table-striped table-bordered display sortable' style='width: 100%;text-align: center;'>";
//	    	 body=body+"<thead style='background-color: #4e73df;color: #fff; font-size:13px;'>";
//	    	 body=body+"<tr>";
//	    	 body=body+"<th>Script Name</th>";
//	    	 body=body+"<th>Alert</th>";
//	    	 body=body+"<th>Frequency</th>";
//	    	 body=body+"<th>Expiry Date</th>"
//	    	 body=body+"<th>Status</th>";
//	    	 body=body+"<th>Symbol</th>";
//	    	 body=body+"</tr>";
//	    	 body=body+"</thead>";
//	    	 body=body+"<tbody>";

         //  alert("jsonObject.length::"+jsonObject);
           if(jsonObject.length >0){
		     
		     for (var i = 0; i <jsonObject.length; i++) {
		    	 
		    	 
		    	 var alertId=jsonObject[i].id;
		    	 
		    	 
		    	 var IdTag=JSON.stringify(jsonObject[i].id);
		    	 var alertconditionTag=JSON.stringify(jsonObject[i].alertcondition);
		    	 var priceTag=JSON.stringify(jsonObject[i].price);
		    	 var notificationTag=JSON.stringify(jsonObject[i].notificationintervalmin);
		    	 var expirydateTag=JSON.stringify(jsonObject[i].expirydate);
		    	 var timerTag=JSON.stringify(jsonObject[i].timer);
		    	 var frequencyTag=JSON.stringify(jsonObject[i].frequency);
		    	 var scriptnameTag=JSON.stringify(jsonObject[i].scriptname);
		    	 var statusTag=JSON.stringify(jsonObject[i].status);
		    	 var exchangeTag=JSON.stringify(jsonObject[i].exchange);
		    	 
		    	 var stat;
		    	 if(jsonObject[i].status==='1'){
		    		 
		    		 stat="RUNNING";
		    	 }else{
		    		 
		    		 stat="PAUSED";
		    	 }
		    	 var alertval=jsonObject[i].alertcondition+" "+jsonObject[i].price
		    	 
		    	

		    	if(jsonObject[i].scriptname !=null){
		    	 body=body+"<tr style='font-size:12px;'>";
	        	 body=body+"<td>" + jsonObject[i].scriptname + "</td>";
	        	 body=body+"<td>" + alertval + "</td>";
	        	 
	        	 if(jsonObject[i].frequency=="Once"){
		         body=body+"<td>" + jsonObject[i].notificationintervalmin + "</td>";
	        	 }else{
	        		 body=body+"<td>" + jsonObject[i].notificationintervalmin +" mn(s)"+ "</td>";
	        	 }
		         
		         body=body+"<td>" + jsonObject[i].expirydate +" "+jsonObject[i].timer+ "</td>";
	        	 body=body+"<td>" + stat + "</td>";
	        	 if(jsonObject[i].status=="1"){
	        	 body=body+"<td><i class='bi bi-pencil-square' data-toggle='modal' data-target='#myModalAlertModify' style='cursor: pointer;font-size:24px;' onclick='EditAlertFun("+IdTag+","+alertconditionTag+","+priceTag+","+notificationTag+","+expirydateTag+","+timerTag+","+frequencyTag+","+scriptnameTag+","+exchangeTag+")'   title='Edit'></i>&nbsp&nbsp<i class=' bi bi-pause' style='cursor: pointer;font-size:24px;' onclick='PauseFun("+alertId+","+statusTag+")'  title='Pause'></i>&nbsp&nbsp<i class='bi bi-trash' style='cursor: pointer;font-size:24px;' onclick='deleteFun("+alertId+");' title='Delete'></i></td>";
	        	 }else{
	        		 body=body+"<td><i class='bi bi-pencil-square' data-toggle='modal' data-target='#myModalAlertModify' style='cursor: pointer;font-size:24px;' onclick='EditAlertFun("+IdTag+","+alertconditionTag+","+priceTag+","+notificationTag+","+expirydateTag+","+timerTag+","+frequencyTag+","+scriptnameTag+","+exchangeTag+")'   title='Edit'></i>&nbsp&nbsp<i class='bi bi-play-fill' style='cursor: pointer;font-size:24px;' onclick='PauseFun("+alertId+","+statusTag+")'  title='Play'></i>&nbsp&nbsp<i class='bi bi-trash' style='cursor: pointer;font-size:24px;' onclick='deleteFun("+alertId+");' title='Delete'></i></td>"; 
	        	 }
	        	 body=body+"</tr>";
	        	 
		    	}
	        	 


		      
		   }
		    // $("#myModalAlertSet").modal('hide'); 
		    
//       	 body=body+"</tbody>";
//	    	 body=body+"</table>";
//	    	 body=body+"<div id='alertinnerbodyId' style='display: none;'>";
//
//	    	 body=body+"<label style='margin-left: 418px;'>No Data</label>";
//	    	 body=body+"</div>";
//	    	 body=body+"</div>";
	    	 
		    // $('#body-right').html(body);
		    // $('#chartIQ').hide();
		    // $('#main-content').show();
		     //$("#main-content").load("/market-watch/exchange-light-layout.jsp");
		    // document.getElementById("main-content").innerHTML='<object type="text/html" data="/market-watch/exchange-light-layout.jsp" ></object>';
			    
		     //$('#main-content').show();
		    
		     //$("#main-content").show();
		    // alert("body:"+body);
		     $('#alertbodyId').html(body);
		    // $('#alertbodyId').show();
		    // alert($('#alertbodyId').html());   	  
        }else{
      	 $('#alertbodyId').html('');

        }
		      

	         
		},
		error:function(){
			//alert("getAlert Error");
		
		}	
	});
	
}



function EditAlertFun(id,alertcondition,alertprice,notification,expiry,time,frequency,scriptname,exchange){

	
	document.getElementById("modifyscriptNamehiddId").value=scriptname;
	document.getElementById("modifypricehiddId").value=alertprice;
	
	document.getElementById("alertModifyhiddId").value=id;
	document.getElementById("modifyscriptnamelabelId").innerHTML=scriptname;
	document.getElementById("modifyalertPriceId").value=alertprice;
	document.getElementById("modifyexpiryDate").value=expiry;
	document.getElementById("modifytimeId").value=time;
	
	document.getElementById("modifyalertconditionId").value=alertcondition;
	document.getElementById("modifynotificationid").value=notification;
	
	 if(frequency==='Once'){
	 $("#modifyOnceId").prop("checked", true);
	
	$("#modifyrecurringIdTime").hide();
	$("#modifyrecurringIdExpiry").hide();
	$("#modifyrecurringIdInterval").hide();
	}else{
	 $("#modifyRecurringId").prop("checked", true);
	
	$("#modifyrecurringIdTime").show();
	$("#modifyrecurringIdExpiry").show();
	$("#modifyrecurringIdInterval").show();
	} 
	 

	
	var less="Lesser than";
	document.getElementById("modifydescription").value=scriptname+" "+alertcondition+" "+alertprice;
	
	/* const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
	//const monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']

  const d = new Date();
  var dd = String(d.getDate()).padStart(2, '0');
  var mm = String(d.getMonth() + 1).padStart(2, '0');
  var yyyy = d.getFullYear();
  var todaydate = +dd +"/"+ monthNames[d.getMonth()] +"/"+ yyyy;
	
	if(exchange==="MCX"){
		var Endday=expiry;
		$('#expiryDate').datepicker({ 
			dateFormat: 'dd/M/yy',
		    minDate: todaydate,
			maxDate:Endday,
		    showOtherMonths: true,
		    selectOtherMonths: true,
		    changeMonth: true,
		    changeYear: true
	 	  //  showButtonPanel: true
		});
	} */
	
//		if(exchange==="NSE"){
//			var Endday=nseexpirydate;
//			$('#expiryDate').datepicker({ 
//				dateFormat: 'dd/M/yy',
//			    minDate: todaydate,
//				maxDate:Endday,
//			    showOtherMonths: true,
//			    selectOtherMonths: true,
//			    changeMonth: true,
//			    changeYear: true
//		 	  //  showButtonPanel: true
//			});
//		}
		
/* if(exchange==="NFO"){
		var Endday=expiry;
		$('#expiryDate').datepicker({ 
			dateFormat: 'dd/M/yy',
		    minDate: todaydate,
			maxDate:Endday,
		    showOtherMonths: true,
		    selectOtherMonths: true,
		    changeMonth: true,
		    changeYear: true
	 	  //  showButtonPanel: true
		});

	} */
		
	
}


function updateAlert(){
	
	var alertModifyId = document.getElementById("alertModifyhiddId").value;
	
	var script = document.getElementById("modifyscriptNamehiddId").value;
   var price = document.getElementById("modifypricehiddId").value;
      
   var alertcondition = document.getElementById("modifyalertconditionId").value;

   var alertprice = document.getElementById("modifyalertPriceId").value;

  var frequency= $("input:radio[name=modifyFrequencyId]:checked").val() 
   
   var notification = document.getElementById("modifynotificationid").value;
   
   var expiry = document.getElementById("modifyexpiryDate").value;
   
   var time = document.getElementById("modifytimeId").value;
   
   if(alertprice !="" && expiry !="" && time !=""){

  var call="scriptName="+script+"&price="+alertprice+"&frequency="+frequency+"&notification="+notification+"&expiry="+expiry+"&time="+time+"&alertcondition="+alertcondition+"&Id="+alertModifyId;
	
	$.ajax({
		type :'POST',
		url :'updateAlert',
		data :call,
		dataType: 'json',
		success:function(response){

			//var jsonObject = response;
			
		 //alert("Alert Updated Successfully");
		   $('#alertupdateshowId').toast('show');
		 
		 $("#myModalAlertModify").modal('hide');
		 AlertFunction();
				         
		},
		error:function(){
		//	alert("getAlert Error");
		
		}	
	});
 }else{
   	
   	alert("fill the fields");
   }
}

function PauseFun(id,status){
	

	$("#AlertDivId").show();
	 
	 $("#orderhideId").hide();
   $("#otherId").hide();
	 $("#orderdashboardbookhiddenId").hide();
	 $("#markethiddenId").hide();
	 //Portfolio Div Details
	 
	  $("#portfoliohideId").hide();
	 $("#PositionsDivId").hide();
	 $("PositionsbodyId").hide();
	 
	//OptionChain
	 	$("#OptionChainDivhideId").hide();
		$("#OptionChainDivcallId").hide();
		$("#OptionChainbodycallId").hide();
		$("#OptionChaininnerbodycallId").hide();
	 
	 //Fund Div Details
	 	$("#FundshideId").hide();
		$("#FundsDivId").hide();
		$("#FundsbodyId").hide();
	
	$.ajax({
		type :'POST',
		url :'getAlertPause',
		data :"Id="+id+"&status="+status,
		dataType: 'json',
		success:function(jsonObject){
			// alert("response::"+response);
				
			 // var jsonObject =JSON.parse(response);
           var body; 
           
//           body="<div id='AlertDivId' class='tabcontent' style='margin-right:-26px;margin-left:-13px;'>";
//
//	    	 body=body+"<table id='alerttableId' class='table table-striped table-bordered display sortable' style='width: 100%;text-align: center;'>";
//	    	 body=body+"<thead style='background-color: #4e73df;color: #fff; font-size:13px;'>";
//	    	 body=body+"<tr>";
//	    	 body=body+"<th>Script Name</th>";
//	    	 body=body+"<th>Alert</th>";
//	    	 body=body+"<th>Frequency</th>";
//	    	 body=body+"<th>Expiry Date</th>"
//	    	 body=body+"<th>Status</th>";
//	    	 body=body+"<th>Symbol</th>";
//	    	 body=body+"</tr>";
//	    	 body=body+"</thead>";
//	    	 body=body+"<tbody>";
		     
		     for (var i = 0; i <jsonObject.length; i++) {
		    	 
		    	 var alertId=jsonObject[i].Id;
		    	 
		    	 var IdTag=JSON.stringify(jsonObject[i].Id);
		    	 var alertconditionTag=JSON.stringify(jsonObject[i].alertcondition);
		    	 var priceTag=JSON.stringify(jsonObject[i].price);
		    	 var notificationTag=JSON.stringify(jsonObject[i].notificationintervalmin);
		    	 var expirydateTag=JSON.stringify(jsonObject[i].expirydate);
		    	 var timerTag=JSON.stringify(jsonObject[i].timer);
		    	 var frequencyTag=JSON.stringify(jsonObject[i].frequency);
		    	 var scriptnameTag=JSON.stringify(jsonObject[i].scriptname);
		    	 var exchangeTag=JSON.stringify(jsonObject[i].exchange);
		    	 
		    	 var stat;
		    	 if(jsonObject[i].status==='1'){
		    		 
		    		 stat="RUNNING";
		    		 AlertFunction();
		    	 }else{
		    		 
		    		 stat="PAUSED";
		    		 AlertFunction();
		    	 }
		    	 var alertval=jsonObject[i].alertcondition+" "+jsonObject[i].price;
		    	 

		    	 if(jsonObject[i].scriptname !=null){
		 		
		    	 body=body+"<tr style='font-size:12px;'>";
	        	 body=body+"<td>" + jsonObject[i].scriptname + "</td>";
	        	 body=body+"<td>" + alertval + "</td>";
		         body=body+"<td>" + jsonObject[i].notificationintervalmin +" mn(s)"+ "</td>";
		         body=body+"<td>" + jsonObject[i].expirydate +" "+jsonObject[i].timer+ "</td>";
	        	 body=body+"<td>" + stat + "</td>";
	        	 body=body+"<td><i class='bi bi-pencil-square' data-toggle='modal' data-target='#myModalAlertModify' style='cursor: pointer;font-size:24px;' onclick='EditAlertFun("+IdTag+","+alertconditionTag+","+priceTag+","+notificationTag+","+expirydateTag+","+timerTag+","+frequencyTag+","+scriptnameTag+","+exchangeTag+")'   title='Edit'></i>&nbsp&nbsp<i class='bi bi-pause' style='cursor: pointer;font-size:24px;' onclick='PauseFun("+alertId+")'  title='Pause'></i>&nbsp&nbsp<i class='bi bi-trash' style='cursor: pointer;font-size:24px;' onclick='deleteFun("+alertId+");' title='Delete'></i></td>";
	            body=body+"</tr>";
	            
		     }
	            


	    		 	

		      
		   }		        	  
		     
//       	 body=body+"</tbody>";
//	    	 body=body+"</table>";
//	    	 body=body+"<div id='alertinnerbodyId' style='display: none;'>";
//
//	    	 body=body+"<label style='margin-left: 418px;'>No Data</label>";
//	    	 body=body+"</div>";
//	    	 body=body+"</div>";
	    	 
		   //  $('#chartIQ').hide();
		    // $('#main-content').show();
		     //$("#main-content").load("/market-watch/exchange-light-layout.jsp");
		     //document.getElementById("main-content").innerHTML='<object type="text/html" data="/market-watch/exchange-light-layout.jsp" ></object>';


		     $('#alertbodyId').html(body);
//		     $('#alertbodyId').show();

	         
		},
		error:function(){
		//	alert("getPausedAlert Error");
		
		}	
	});
	
	
}



function deleteFun(id){
	

	$.ajax({
		type :'POST',
		url :'getAlertDelete',
		data :"Id="+id,
		dataType: 'html',
		success:function(response){
			
			if(response !=0){
			 //alert("Alert Deleted Successfully Id :"+response);
				$('#deleteshowId').toast('show');
			 
			 AlertFunction();
				
			}else{
				AlertFunction();
			}

	         
		},
		error:function(){
		//	alert("DeleteAlert Error");
		
		}	
	});
	
	
}

function myTriggerfun(){
	
	var currentDate = new Date()
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1;
    var year = currentDate.getFullYear();
    var mydate = day+"-"+month+"-"+year;

  //  alert("mydate::::"+mydate);
    var hour = currentDate.getHours();
    var min = currentDate.getMinutes();
    var sec = currentDate.getSeconds();
    
    var myhours=hour+":"+min;
    
  //  alert("myhours::::"+myhours);    
 
 var d="12-08-2021";
 
 var h="20:50";
 
 var price="500";
 
 var call="price="+price+"&mydate="+d+"&myhours="+h;
 
    $.ajax({
		type :'POST',
		url :'getTriggerAlert',
		data :call,
		dataType: 'html',
		success:function(response){
			// alert("response::"+response);
			 
			 var jsonObject =JSON.parse(response);
			
			 $("#alertmessageId").html("<label style='color:red'>"+jsonObject.length+"</label>");
	         
		},
		error:function(){
			//alert("NotificationAlert Error");
		
		}	
	});
}

window.onload = myTriggerfun;

function alertConnect(){
	
	$("#alertshowId").show();
	var currentDate = new Date()
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1;
    var year = currentDate.getFullYear();
    var mydate = day+"-"+month+"-"+year;

  //  alert("mydate::::"+mydate);
    var hour = currentDate.getHours();
    var min = currentDate.getMinutes();
    var sec = currentDate.getSeconds();
    
    var myhours=hour+":"+min;
 
 var d="12-08-2021";
 
 var h="20:50";
 
 var price="500";
 
 var call="price="+price+"&mydate="+d+"&myhours="+h;
 
    $.ajax({
		type :'POST',
		url :'getTriggerAlert',
		data :call,
		dataType: 'html',
		success:function(response){

			//alert("response:::"+response);
			 var jsonObject =JSON.parse(response);
             var body; 
             
             body="";

            if(jsonObject.length >0){
		     
		     for (var i = 0; i <jsonObject.length; i++) {
		    	  
		    		 var TokenTagNSE=JSON.stringify(jsonObject[i].token);
		    		 var ScriptTag=JSON.stringify(jsonObject[i].scriptname);
		    		 var priceTag=JSON.stringify(jsonObject[i].price);
		    		 var exchangeTag=JSON.stringify(jsonObject[i].exchange);
		    		 
		    		 var stockdisplayname=JSON.stringify(jsonObject[i].stockdisplayname);
		    		 var mcxticksize=JSON.stringify(jsonObject[i].mcxticksize);
		    		 var mcxexpirydate=JSON.stringify(jsonObject[i].mcxexpirydate);
		    		 var nseticksize=JSON.stringify(jsonObject[i].nseticksize);
		    		 var nseexpirydate=JSON.stringify(jsonObject[i].nseexpirydate);
		    		 var nfoexpirydate=JSON.stringify(jsonObject[i].nfoexpirydate);
		    		 var mcxInstrumentCode=JSON.stringify(jsonObject[i].mcxInstrumentCode);
		    		 var mcxStrikePrice=JSON.stringify(jsonObject[i].mcxStrikePrice);
		    		 var mcxOptionType=JSON.stringify(jsonObject[i].mcxOptionType);
		    		 var mcxInstrumentName=JSON.stringify(jsonObject[i].mcxInstrumentName);
		    		 var mcxInstrumentSeries=JSON.stringify(jsonObject[i].mcxInstrumentSeries);
		    		 var nseSymbol=JSON.stringify(jsonObject[i].nseSymbol);
		    		 var nseSeries=JSON.stringify(jsonObject[i].nseSeries);
		    		 var nfosymbol=JSON.stringify(jsonObject[i].nfosymbol);
		    		 var nfostrike_price=JSON.stringify(jsonObject[i].nfostrike_price);
		    		 var nfooption_type=JSON.stringify(jsonObject[i].nfooption_type);
		    		 var nfoinstrument_name=JSON.stringify(jsonObject[i].nfoinstrument_name);
		    		 
		    		 
		    		 
		    		 body=body+"<a class='dropdown-item d-flex align-items-center'>";	
		    		 body=body+ " <div>";
		    		 body=body+ " <div class='small text-gray-500' style='color: #a7e4d9 !important;'></div>";
		    		// body=body+ "<span class='font-weight-bold'></span>";
		    		 body=body+ "<div style='font-size:12px;font-family: Helvetica, Sans-Serif;'>";
		    		  
				 		
		    		 	body=body+"<tr id='TokenTagNSE' onmouseover='stockbuybtnmouseover("+TokenTagNSE+")' onmouseout='stockbuybtnmouseout("+TokenTagNSE+")'>"
		    		 	body=body+"<td class='Field col-sm-12'>"+jsonObject[i].scriptname+"&nbsp;&nbsp;"+jsonObject[i].alertcondition+"&nbsp;&nbsp;"+jsonObject[i].price+"&nbsp;&nbsp;&nbsp;"+jsonObject[i].exchange+"&nbsp;&nbsp;";
		    		 	
		    		 	//body=body+"<button type='button'    class='stockbuybtn swd-button'   name='stockbuyName'  onclick='onclickstockbuybtn("+ScriptTag+","+priceTag+","+exchangeTag+","+TokenTagNSE+","+''+","+''+","+''+","+''+","+''+","+''+")' data-toggle='modal'  data-target='#myModal' >BUY</button>"
		    		 	//body=body+"<button type='button'    class='stocksellbtn swd-button'   name='stocksellName'  onclick='onclickstocksellbtn("+ScriptTag+","+priceTag+","+exchangeTag+","+TokenTagNSE+","+''+","+''+","+''+","+''+","+''+","+''+")'  data-toggle='modal'  data-target='#myModal'>SELL</button>"
		    		 	body=body+"<button type='button' onclick='onclickstockbuybtn("+ScriptTag+","+priceTag+","+exchangeTag+","+TokenTagNSE+","+stockdisplayname+","+mcxticksize+","+mcxexpirydate+","+nseticksize+","+nseexpirydate+","+nfoexpirydate+","+mcxInstrumentCode+","+mcxStrikePrice+","+mcxOptionType+","+mcxInstrumentName+","+mcxInstrumentSeries+","+nseSymbol+","+nseSeries+","+nfosymbol+","+nfostrike_price+","+nfooption_type+","+nfoinstrument_name+")' data-toggle='modal'  data-target='#myModal' class='icon facebook'><div class='tooltip'>Buy</div><span><i class='fab b-buy-b' ></i></span></button>&nbsp;&nbsp;";
		    	        body=body+"<button type='button' onclick='onclickstocksellbtn("+ScriptTag+","+priceTag+","+exchangeTag+","+TokenTagNSE+","+stockdisplayname+","+mcxticksize+","+mcxexpirydate+","+nseticksize+","+nseexpirydate+","+nfoexpirydate+","+mcxInstrumentCode+","+mcxStrikePrice+","+mcxOptionType+","+mcxInstrumentName+","+mcxInstrumentSeries+","+nseSymbol+","+nseSeries+","+nfosymbol+","+nfostrike_price+","+nfooption_type+","+nfoinstrument_name+")'  data-toggle='modal'  data-target='#myModal' class='icon twitter'><div class='tooltip'>Sell</div><span><i class='fab s-sell-s' ></i></span></button>";
		    		 	body=body+"</td>";	
		    		 	body=body+"</tr>";	
		    		 	body=body+ "</div>";
		    		 	body=body+ "</div>";
		        		body=body+ "</a>";

		     } 
		     
		     
    		

             $("#alertmessageId").hide();
		     
		     $('#messageAlertBodyId').html(body); 
            }else{   
		     $('#messageAlertBodyId').html('NO RECORD FOUND'); 
		     
            }

	         
		},
		error:function(){
			//alert("getTriggerAlert Error");
		
		}	
	});
	
	
}




//============== ALERT END ========================================

//==============Modify order start==========================

function mydiscqtyFunctionModify(){
    
	   var Discquantity = document.getElementById("DiscquantityIdModify").value;
	   var Quantity = document.getElementById("QtyIdModify").value;
	   
	   var scriptName=$("#stockhiddval").val();
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
	 if(scriptName==='NSE'){ 			//NSE
		
		 $("#NrmlIdModify").prop("disabled",true);
		 $('#GTTlabelIdModify').show();
		 
	  var perVal = Number(Quantity /100 ) * Number(ValueTenPer);
	  
	  if(Number(Discquantity) === Number(Zero)){
		     $("#DiscQuanNSEErrorIdModify").hide();

		  document.getElementById("buyIdModify").disabled = false;	
		  document.getElementById("sellIdModify").disabled = false;
	  }

	  else if(Number(Discquantity)<Number(perVal) ||  Number(Discquantity)>Number(Quantity))
	{
			document.getElementById("DiscQuanNSEhiddenErrorIdModify").value='DiscQuanNSEErrorModify';
		  $("#DiscQuanNSEErrorIdModify").show();

		  document.getElementById("buyIdModify").disabled = true;	
		  document.getElementById("sellIdModify").disabled = true;
	}
	  else if(Number(Discquantity)>=Number(perVal) ||  Number(Discquantity)>Number(Quantity))
	{
		  $("#DiscQuanNSEErrorIdModify").hide();

		  document.getElementById("buyIdModify").disabled = false;	
		  document.getElementById("sellIdModify").disabled = false;
	}
	 }
	 
	 if(scriptName==='MCX'){ 				//MCX
		 
		 $("#cncIdModify").prop("disabled",true);
		 $('#GTTlabelIdModify').hide();	
		 
		 var perVal = Number(Quantity /100 ) * Number(ValueTwentyFivePer);
					
		 if(Number(Discquantity) === Number(Zero)){
			   $("#DiscQuanMCXErrorIdModify").hide();

	    		  document.getElementById("buyIdModify").disabled = false;	
	    		  document.getElementById("sellIdModify").disabled = false;
		  }
		 
		 else  if(Number(Discquantity)<Number(perVal) ||  Number(Discquantity)>Number(Quantity))
			{
				 document.getElementById("DiscQuanMCXhiddenErrorIdModify").value='DiscQuanMCXErrorModify';
				  $("#DiscQuanMCXErrorIdModify").show();

	    		  document.getElementById("buyIdModify").disabled = true;	
	    		  document.getElementById("sellIdModify").disabled = true;
			}
			  else if(Number(Discquantity)>=Number(perVal) ||  Number(Discquantity)>Number(Quantity))
			{
				  $("#DiscQuanMCXErrorIdModify").hide();

	    		  document.getElementById("buyIdModify").disabled = false;	
	    		  document.getElementById("sellIdModify").disabled = false;
			}
		  
	 }
	 
} 

function myqtyFunctionModify(){
	   
	   var Quantity = document.getElementById("QtyIdModify").value;
	   var Discquantity = document.getElementById("DiscquantityIdModify").value;
	
	      var scriptName=$("#stockhiddval").val();
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
	  if(scriptName==='NSE'){ 		//NSE
		  
		 $("#NrmlIdModify").prop("disabled",true);
		 $('#GTTlabelIdModify').show();
		 
	  var perVal = Number(Quantity /100 ) * Number(ValueTenPer);
	  
	  if(Number(Discquantity) === Number(Zero)){
		   $("#DiscQuanNSEErrorIdModify").hide();

		  document.getElementById("buyIdModify").disabled = false;	
		  document.getElementById("sellIdModify").disabled = false;
	  }
	  
	  else  if(Number(Discquantity)<Number(perVal) ||  Number(Discquantity)>Number(Quantity))
	{
		  document.getElementById("DiscQuanNSEhiddenErrorIdModify").value='DiscQuanNSEErrorModify';
		  $("#DiscQuanNSEErrorIdModify").show();

		  document.getElementById("buyIdModify").disabled = true;	
		  document.getElementById("sellIdModify").disabled = true;
	}
	  else if(Number(Discquantity)>=Number(perVal) ||  Number(Discquantity)>Number(Quantity))
	{
		  $("#DiscQuanNSEErrorIdModify").hide();

		  document.getElementById("buyIdModify").disabled = false;	
		  document.getElementById("sellIdModify").disabled = false;
	}
	  }

		if(scriptName==='MCX'){        //MCX
			
		 $("#cncIdModify").prop("disabled",true);
		 $('#GTTlabelIdModify').hide();
		 
		 var perVal = Number(Quantity /100 ) * Number(ValueTwentyFivePer);
		 
		 if(Number(Discquantity) === Number(Zero)){
			   $("#DiscQuanMCXErrorIdModify").hide();

	    		  document.getElementById("buyIdModify").disabled = false;	
	    		  document.getElementById("sellIdModify").disabled = false;
		  }	  
		 else if(Number(Discquantity)<Number(perVal) ||  Number(Discquantity)>Number(Quantity))
			{
			document.getElementById("DiscQuanMCXhiddenErrorIdModify").value='DiscQuanMCXErrorModify';
				  $("#DiscQuanMCXErrorIdModify").show();

	    		  document.getElementById("buyIdModify").disabled = true;	
	    		  document.getElementById("sellIdModify").disabled = true;
			}
			  else if(Number(Discquantity)>=Number(perVal) ||  Number(Discquantity)>Number(Quantity))
			{
				  $("#DiscQuanMCXErrorIdModify").hide();

	    		  document.getElementById("buyIdModify").disabled = false;	
	    		  document.getElementById("sellIdModify").disabled = false;
			}
		}
		
}





//Regular Order When you Click SL Order Type Validation for TriggerPrice

function TriggerPriceFunctionModify(){
	
	  var TriggerPriceVAL=$("#TriggerpriceIdModify").val();
   var PriceVAL=$("#priceIdModify").val();
   if($("input:radio[name='RegularOrdIdModify']").is(":checked")) {
 	 
 	  if($("input:radio[name='slIdModify']").is(":checked")) {
 		
 	  if(Number(TriggerPriceVAL)>Number(PriceVAL)){
 		  document.getElementById("TriggerPricehiddenErrorIdModify").value='TriggerPriceError';
 		  $("#TriggerPriceErrorIdModify").show();
 		  document.getElementById("buyIdModify").disabled = true;	
 		  document.getElementById("sellIdModify").disabled = true;
     }
     else if(Number(PriceVAL)>=Number( TriggerPriceVAL) || Number(PriceVAL)>Number(TriggerPriceVAL)){
   	  $("#TriggerPriceErrorIdModify").hide();
   	document.getElementById("buyIdModify").disabled = false;
		document.getElementById("sellIdModify").disabled = false;
     }
 	  }
   }
	  
}


function TriggerPricekeyupFunctionModify(){
	
	
	  var TriggerPriceVAL=$("#TriggerpriceIdModify").val();
   var PriceVAL=$("#priceIdModify").val();
   if($("input:radio[name='RegularOrdIdModify']").is(":checked")) {
 	 
 	  if($("input:radio[name='slIdModify']").is(":checked")) {
 		
 	  if(Number(TriggerPriceVAL)>Number(PriceVAL)){
 		  document.getElementById("TriggerPricehiddenErrorIdModify").value='TriggerPriceError';
 		  $("#TriggerPriceErrorIdModify").show();
 		  document.getElementById("buyIdModify").disabled = true;	
 		  document.getElementById("sellIdModify").disabled = true;
     }
     else if(Number(PriceVAL)>=Number( TriggerPriceVAL) || Number(PriceVAL)>Number(TriggerPriceVAL)){
   	  $("#TriggerPriceErrorIdModify").hide();
   	document.getElementById("buyIdModify").disabled = false;
		document.getElementById("sellIdModify").disabled = false;
     }
 	  }
   }
	  
	
}


//Regular Order When you Click SL Order Type Validation for Price
function myPriceFunctionModify(){
	 
	  var TriggerPriceVAL=$("#TriggerpriceIdModify").val();
	  var PriceVAL=$("#priceIdModify").val();
  if($("input:radio[name='RegularOrdIdModify']").is(":checked")) {
 	 
	  if($("input:radio[name='slIdModify']").is(":checked")) {
	  if(Number(TriggerPriceVAL)>Number(PriceVAL)){
		  document.getElementById("TriggerPricehiddenErrorIdModify").value='TriggerPriceError';
		  $("#TriggerPriceErrorIdModify").show();
		  document.getElementById("buyIdModify").disabled = true;	
		  document.getElementById("sellIdModify").disabled = true;
}
else if(Number(PriceVAL)>=Number( TriggerPriceVAL) || Number(PriceVAL)>Number(TriggerPriceVAL)){
	  $("#TriggerPriceErrorIdModify").hide();
	 document.getElementById("buyIdModify").disabled = false;
		document.getElementById("sellIdModify").disabled = false;
}
	  }
  }
}



function myPriceonkeyupFunctionModify(){

	  var TriggerPriceVAL=$("#TriggerpriceIdModify").val();
	  var PriceVAL=$("#priceIdModify").val();
  if($("input:radio[name='RegularOrdIdModify']").is(":checked")) {
 	 
	  if($("input:radio[name='slIdModify']").is(":checked")) {
	  if(Number(TriggerPriceVAL)>Number(PriceVAL)){
		  document.getElementById("TriggerPricehiddenErrorIdModify").value='TriggerPriceError';
		  $("#TriggerPriceErrorIdModify").show();
		  document.getElementById("buyIdModify").disabled = true;	
		  document.getElementById("sellIdModify").disabled = true;
}
else if(Number(PriceVAL)>=Number( TriggerPriceVAL) || Number(PriceVAL)>Number(TriggerPriceVAL)){
	  $("#TriggerPriceErrorIdModify").hide();
	 document.getElementById("buyIdModify").disabled = false;
		document.getElementById("sellIdModify").disabled = false;
}
	  }
  }
	 
}

//==============Modify order end==========================



//allId,eqtyId,nfoId,currencyId

function allfun(evt,val){
	
//	alert("val:::"+val);
	$("#allId").addClass('active');
    $("#eqtyId").removeClass('active');
    $("#nfoId").removeClass('active');
    $("#commodityId").removeClass('active');
    $("#currencyId").removeClass('active');
	//$("#heederlisthiddId").hide();
	//$("#scriptlisthiddId").show();
	//getscriptrefresh();
	$("#SearchdivbodyId").show();
	
	$("#EqtySearchdivbodyId").hide();
	$("#NfoSearchdivbodyId").hide();
	$("#CommoditySearchdivbodyId").hide();
	$("#CurrenySearchdivbodyId").hide();
}
function eqtyfun(evt,val){
	
//	alert("val:eqty::"+val);
	$("#allId").removeClass('active');
    $("#eqtyId").addClass('active');
    $("#nfoId").removeClass('active');
    $("#commodityId").removeClass('active');
    $("#currencyId").removeClass('active');
	//$("#heederlisthiddId").hide();		
	//$("#scriptlisthiddId").show();
	
	$("#EqtySearchdivbodyId").show();
	
	$("#SearchdivbodyId").hide();
	$("#NfoSearchdivbodyId").hide();
	$("#CommoditySearchdivbodyId").hide();
	$("#CurrenySearchdivbodyId").hide();
	
}
function nfofun(evt,val){
	
	$("#allId").removeClass('active');
    $("#eqtyId").removeClass('active');
    $("#nfoId").addClass('active');
    $("#commodityId").removeClass('active');
    $("#currencyId").removeClass('active');
	//$("#heederlisthiddId").hide();		
	//$("#scriptlisthiddId").show();
	
	$("#NfoSearchdivbodyId").show();
	
	$("#SearchdivbodyId").hide();
	$("#EqtySearchdivbodyId").hide();
	$("#CommoditySearchdivbodyId").hide();
	$("#CurrenySearchdivbodyId").hide();
}
function commodityfun(evt,val){
	
	$("#allId").removeClass('active');
    $("#eqtyId").removeClass('active');
    $("#nfoId").removeClass('active');
    $("#commodityId").addClass('active');
    $("#currencyId").removeClass('active');
	//$("#heederlisthiddId").hide();	
	//$("#scriptlisthiddId").show();
	
	$("#CommoditySearchdivbodyId").show();
	
	$("#SearchdivbodyId").hide();
	$("#EqtySearchdivbodyId").hide();
	$("#NfoSearchdivbodyId").hide();
	$("#CurrenySearchdivbodyId").hide();
}
function currencyfun(evt,val){
	
	$("#allId").removeClass('active');
    $("#eqtyId").removeClass('active');
    $("#nfoId").removeClass('active');
    $("#commodityId").removeClass('active');
    $("#currencyId").addClass('active');
	//$("#heederlisthiddId").hide();	
	$("#scriptlisthiddId").show();
	
	$("#CurrenySearchdivbodyId").show();
	
	$("#SearchdivbodyId").hide();
	$("#EqtySearchdivbodyId").hide();
	$("#NfoSearchdivbodyId").hide();
	$("#CommoditySearchdivbodyId").hide();

}
//order book start


function orderrefresh(){
	functionOrder();
}

function functionOrder22(){
	
	
  $("#orderhideId").show();
  $("#otherId").hide();
	 $("#orderdashboardbookhiddenId").hide();
	 $("#markethiddenId").hide();
	 
	 
	//OptionChain
	 	$("#OptionChainDivhideId").hide();
		$("#OptionChainDivcallId").hide();
		$("#OptionChainbodycallId").hide();
		$("#OptionChaininnerbodycallId").hide();
		
	 //Portfolio Div Details	 
	  $("#portfoliohideId").hide();
	 $("#PositionsDivId").hide();
	 $("PositionsbodyId").hide();
	 
	 //Fund Div Details
	 	$("#FundshideId").hide();
		$("#FundsDivId").hide();
		$("#FundsbodyId").hide();
		
		
		//Profile Div Details
		 $("#AccountProfile").hide();
		 $('#AccountProfileDivId').hide();
		 $('#AccountProfilebodyId').hide();
		 
		 
		 //AlertDiv
		 $("#AlertDivId").hide();
	
	  $.ajax({
			type :'POST',
			url :'OrderBook',
			dataType: 'json',
			contentType:'application/json; charset=utf-8',
			success:function(jsonObject){
				
			//	alert("res:::"+jsonObject);
				//var jsonObject =JSON.parse(response);
				
				//alert("jsonObject:::"+jsonObject);
				
			//	var count = Object.keys(jsonObject);
				
			//	alert("count:::"+count);

		             
			      var PendingTag = document.getElementById("pendingorderId").value;
				
			        alert("PendingTag:::"+PendingTag);
			       
			        if(PendingTag==="Pending"){
			        	
			        	  $("#PendingDivId").show();
					       $("#CompletedDivId").hide();
					       $("#TradeBookDivId").hide(); 
					       
					       var body;
					       
//					       body="<div style='margin-left:-11px;margin-right:-26px;'>"
//					       
//
//					      body=body+"<button class='w3-bar-item w3-button active' style='margin-left:0px;' id='pendingorderId' onclick='pendingordfunc()' value='Pending'><label style='font-size:13px;'>Pending<label></button>";
//					      body=body+"<button class='w3-bar-item w3-button' style='margin-left:15px;' id='completedorderId' onclick='completeordfunc()' value='Completed'><label style='font-size:13px;'>Completed</label></button>";
//					      body=body+"<button class='w3-bar-item w3-button' id='tradebookorderId' value='TradeBook' onclick='tradeordfunc()'><label style='font-size:13px;'>Trade Book</label></button>";
////					       body=body+"</div>";
//					           
//			                body=body+"<div class='tab'>";
//							 body=body+"<div id='PendingDivId' class='tabcontent' >";
//				        	 body=body+ "<table class='table table-striped table-bordered display sortable' style='width: 100%; text-align: center;'>";
//				                body=body+"<thead style='background-color: #4e73df;color: #fff; font-size:13px;'>";
//				                body=body+"<tr>";
//				                body=body+"<th>Exchange</th>";
//				                body=body+"<th>Product</th>";
//				                body=body+"<th>Qty</th>";
//				                body=body+"<th>Avg Price</th>";
//				                body=body+"<th>Status</th>";
//				                body=body+"<th>Exchange Order Time</th>";
//				                body=body+"<th>Action</th>";
//				                body=body+"</tr>";
//				                body=body+"</thead>";
//				                body=body+"	<tbody>";

					    
     for (var i = 0; i < jsonObject.length; i++) {
     	
    //	 alert("okk");
     	
   //  var status= jsonObject[i].Status;
     var status= jsonObject[i].status;
     var stat= jsonObject[i].stat;
     
     if(stat==='Ok'){
     	
     	   if(status==='open'){
     		   
     		   
     		   var prc=jsonObject[i].Prc;
                var qty=jsonObject[i].Qty;
                var status=jsonObject[i].Status;   
                var nestordernum=jsonObject[i].Nstordno;
                var averageprice=jsonObject[i].Avgprc;
                var exchangetimestamp=jsonObject[i].ExchConfrmtime;
                var accountId=jsonObject[i].accountId;
                
                var nestordernumModify=JSON.stringify(jsonObject[i].Nstordno);
                var pcodeModify=JSON.stringify(jsonObject[i].Pcode);
                var dayModify=JSON.stringify(jsonObject[i].Validity);
                var lmtIdModify=JSON.stringify(jsonObject[i].OriginalPrctype);
                
                var priceIdModify=JSON.stringify(jsonObject[i].Prc);
                var QtyIdModify=JSON.stringify(jsonObject[i].Qty);
                var TriggerpriceIdModify=JSON.stringify(jsonObject[i].Trgprc);
                var DiscquantityIdModify=JSON.stringify(jsonObject[i].Dscqty);
                
                var accountIdModify=JSON.stringify(jsonObject[i].accountId);
                var ExsegModify=JSON.stringify(jsonObject[i].Exchange);
                var TrsymModify=JSON.stringify(jsonObject[i].Trsym);
                var TrantypeModify=JSON.stringify(jsonObject[i].Trantype);
                var PrctypeModify=JSON.stringify(jsonObject[i].Prctype);
                var FillsharesModify=JSON.stringify(jsonObject[i].Fillshares);
                var ExchangeModify=JSON.stringify(jsonObject[i].Exchange);
                
                var ScriptNameRepeat=JSON.stringify(jsonObject[i].Scripname);
                var PrcRepeat=JSON.stringify(jsonObject[i].Prc);
                var ExchangeRepeat=JSON.stringify(jsonObject[i].Exchange);
                var TokenRepeat=JSON.stringify(jsonObject[i].token);
                var ticksizeRepeat=JSON.stringify(jsonObject[i].ticksize);
                var expirydateRepeat=JSON.stringify(jsonObject[i].ExpDate);
                var strikepriceRepeat=JSON.stringify(jsonObject[i].strikePrice);
                var trsymbolRepeat=JSON.stringify(jsonObject[i].Trsym);
                var symbolRepeat=JSON.stringify(jsonObject[i].Sym);
                var trantypeRepeat=JSON.stringify(jsonObject[i].Trantype);
                var accountIdRepeat=JSON.stringify(jsonObject[i].accountId);
                
               

          if(jsonObject[i].Exchange !=null){        
     		          	   
     	 body=body+"<tr style='font-size:12px;'>";
     	 body=body+"<td>" + jsonObject[i].Exchange + "</td>";
     	 body=body+"<td>" + jsonObject[i].Sym + "</td>";
	     body=body+"<td>" + jsonObject[i].Qty + "</td>";
	     body=body+"<td>" + jsonObject[i].Avgprc + "</td>";
     	 body=body+"<td>" + jsonObject[i].Status + "</td>";
	     body=body+"<td>" + jsonObject[i].ExchConfrmtime + "</td>";
	     
	   //  alert("ScriptNameRepeat"+ScriptNameRepeat+"ExchangeRepeat::"+ExchangeRepeat+"TokenRepeat::"+TokenRepeat);
	     
	    // onclickstockbuybtn('${scptList.scriptName}','${scptList.price}','${scptList.exchange}','${scptList.token}','${scptList.displayname}','${scptList.mcxTickSize}','${scptList.mcxOriginalExpiryDate}','${scptList.nseTickSize}','${scptList.nseExDate}','${scptList.nfoexpiry_date}','${scptList.mcxInstrumentCode}','${scptList.mcxStrikePrice}','${scptList.mcxOptionType}','${scptList.mcxInstrumentName}','${scptList.mcxInstrumentSeries}','${scptList.nseSymbol}','${scptList.nseSeries}','${scptList.nfoSymbol}','${scptList.nfostrike_price}','${scptList.nfooption_type}','${scptList.nfoinstrument_name}')" 
         
	       body=body+"<td><i class='bi bi-pencil-square' data-toggle='modal'  style='cursor: pointer;font-size:24px;' onclick='EditFun("+nestordernumModify+","+pcodeModify+","+dayModify+","+lmtIdModify+","+priceIdModify+","+QtyIdModify+","+TriggerpriceIdModify+","+DiscquantityIdModify+","+accountIdModify+","+ExsegModify+","+TrsymModify+","+TrantypeModify+","+PrctypeModify+","+FillsharesModify+","+ExchangeModify+")' data-target='#myModalModify'  title='Edit'></i>&nbsp&nbsp&nbsp&nbsp<i class='bi bi-x-circle' style='cursor: pointer;font-size:24px;' onclick='CancelFun("+nestordernumModify+")' data-toggle='modal' data-target='#myModalCancel' title='Cancel'></i>&nbsp&nbsp<i class='bi bi-clock-history' style='cursor: pointer;font-size:24px;' onclick='orderHistoryFun("+nestordernumModify+");' title='OrderHistory'></i>"
	      // body=body+"&nbsp&nbsp<i class='fa fa-repeat' style='cursor: pointer;font-size:24px;' onclickrepeatbuybtn("+ScriptNameRepeat+","+'1223'+","+ExchangeRepeat+","+TokenRepeat+","+ScriptNameRepeat+","+''+","+''+","+''+","+''+","+''+","+''+","+''+","+''+","+''+","+''+","+''+","+''+","+''+","+''+","+''+","+''+")' data-toggle='modal'  data-target='#myModalRepeat' title='Repeat Order'></i></td>";
	       body=body+"&nbsp&nbsp<i class='bi bi-arrow-repeat' style='cursor: pointer;font-size:24px;' onclick='onclickrepeatbuybtn("+ScriptNameRepeat+","+PrcRepeat+","+ExchangeRepeat+","+TokenRepeat+","+symbolRepeat+","+ticksizeRepeat+","+expirydateRepeat+","+strikepriceRepeat+","+trsymbolRepeat+","+symbolRepeat+","+trantypeRepeat+","+accountIdRepeat+")' data-toggle='modal'  data-target='#myModalRepeat' title='Repeat Order'></i></td>";
	       body=body+"</tr>";
	       
        }
	        

         
         $("#cancelStocklabelId").html(jsonObject[i].Exseg);

         $("#Prc").val(prc);				        		          	   
         $("#Qty").val(qty);
         $("#Status").val(status);
         $("#nestordernumber").val(nestordernum);
         $("#averageprice").val(averageprice);
         $("#exchangetimestamp").val(exchangetimestamp);
         $("#accountId").val(accountId);
         
	    

     	   
     }
     	   
     /* else{
          $('#pendinginnerbodyId').show();
         }*/  
     	   
		                    		                   

     }
     
      else{
         $('#pendinginnerbodyId').show();
     } 
     
		                    
     }
     
//     body=body+"</tbody>";
//     body=body+"</table>"; 
     
//     body=body+"<div id='pendinginnerbodyId' style='display: none;'>";
//
//     body=body+"<label style='margin-left: 418px;'>No Data</label>";
//     body=body+"</div>";
//     body=body+"</div>";
//     body=body+"</div>";
//     body=body+"</div>";
     

     $('#pendingorderbodyId').html(body); 

   //  $('#body-right').html(body);
			       
	}
			        
		
			},
			error:function(){
			//	alert("OrderBook Error");
			
			}	
		});
		
	
	}
	
function pendingordfunc(){
	
	//functionOrder();
	
	//alert("ppp");

	var PendingTag = document.getElementById("pendingorderId").value;

    if(PendingTag==="Pending"){
    	
      $("#pendingorderId").addClass('active');
  	  $("#tradebookorderId").removeClass('active');
  	  $("#completedorderId").removeClass('active');
      	
      	  $("#PendingDivId").show();
		       $("#CompletedDivId").hide();
		       $("#TradeBookDivId").hide();
		       $("#portfoliohideId").hide();
		       
		     //Portfolio Div Details	 
		 	  $("#portfoliohideId").hide();
		 	 $("#PositionsDivId").hide();
		 	 $("PositionsbodyId").hide();
		 	 
		 	 //Fund Div Details
		 	 	$("#FundshideId").hide();
		 		$("#FundsDivId").hide();
		 		$("#FundsbodyId").hide();
		 		
		 		
		 		//Profile Div Details
		 		 $("#AccountProfile").hide();
		 		 $('#AccountProfileDivId').hide();
		 		 $('#AccountProfilebodyId').hide();
		 		 
		 		 //AlertDiv
				 $("#AlertDivId").hide();
      }
	}
	
function completeordfunc222(){
	
	//alert("ccc");
var completedTag = document.getElementById("completedorderId").value;

      if(completedTag==="Completed"){
      	
    	  $("#pendingorderId").removeClass('active');
    	  $("#tradebookorderId").removeClass('active');
    	  $("#completedorderId").addClass('active');
    	  
      	  $("#PendingDivId").hide();
		       $("#CompletedDivId").show();
		       $("#TradeBookDivId").hide();
		       $("#portfoliohideId").hide();
		       
		       
		     //Portfolio Div Details	 
		 	  $("#portfoliohideId").hide();
		 	 $("#PositionsDivId").hide();
		 	 $("PositionsbodyId").hide();
		 	 
		 	 //Fund Div Details
		 	 	$("#FundshideId").hide();
		 		$("#FundsDivId").hide();
		 		$("#FundsbodyId").hide();
		 		
		 		
		 		//Profile Div Details
		 		 $("#AccountProfile").hide();
		 		 $('#AccountProfileDivId').hide();
		 		 $('#AccountProfilebodyId').hide();
		 		 
		 		 //AlertDiv
				 $("#AlertDivId").hide();
      }
      
      
      $.ajax({
			type :'POST',
			url :'OrderBook',
			dataType: 'json',
			contentType:'application/json; charset=utf-8',
			success:function(jsonObject){
				
				//var jsonObject =JSON.parse(response);
		             
			 var PendingTag = document.getElementById("completedorderId").value;
			        
			        if(PendingTag==="Completed"){
			        	
			        	  $("#PendingDivId").hide();
					       $("#CompletedDivId").show();
					       $("#TradeBookDivId").hide(); 
					       
				var body;
				

							    
		        for (var i = 0; i < jsonObject.length; i++) {
		        	
		        	var ScriptNameRepeat=JSON.stringify(jsonObject[i].Scripname);
                var PrcRepeat=JSON.stringify(jsonObject[i].Prc);
                var ExchangeRepeat=JSON.stringify(jsonObject[i].Exchange);
                var TokenRepeat=JSON.stringify(jsonObject[i].token);
                var ticksizeRepeat=JSON.stringify(jsonObject[i].ticksize);
                var expirydateRepeat=JSON.stringify(jsonObject[i].ExpDate);
                var strikepriceRepeat=JSON.stringify(jsonObject[i].strikePrice);
                var trsymbolRepeat=JSON.stringify(jsonObject[i].Trsym);
                var symbolRepeat=JSON.stringify(jsonObject[i].Sym);
                var trantypeRepeat=JSON.stringify(jsonObject[i].Trantype);
                var accountIdRepeat=JSON.stringify(jsonObject[i].accountId);
                
		        var status= jsonObject[i].Status;
		        
		        var stat= jsonObject[i].stat;
		        
		        if(stat==='Ok'){
		        	
		        if(status==='complete' ||status==='rejected' || status==='cancelled'){
		        	
		        	 var nestordernum=jsonObject[i].Nstordno;
		        	 
		        	
		                
		            if(jsonObject[i].Exchange !=null){  
		        		          	   
		        	 body=body+"<tr style='font-size:12px;'>";
		        	 body=body+"<td>" + jsonObject[i].Exchange + "</td>";
		        	 body=body+"<td>" + jsonObject[i].Sym + "</td>";
			         body=body+"<td>" + jsonObject[i].Qty + "</td>";
			         body=body+"<td>" + jsonObject[i].Avgprc + "</td>";
		        	 body=body+"<td>" + jsonObject[i].Status + "</td>";
			         body=body+"<td>" + jsonObject[i].ExchConfrmtime + "</td>";
			         body=body+"<td><i class='bi bi-clock-history' style='cursor: pointer;font-size:24px;' onclick='completedOrderHistoryFun("+nestordernum+");' title='OrderHistory'></i>"
			         body=body+"&nbsp&nbsp<i class='bi bi-arrow-repeat' style='cursor: pointer;font-size:24px;' onclick='onclickrepeatbuybtn("+ScriptNameRepeat+","+PrcRepeat+","+ExchangeRepeat+","+TokenRepeat+","+symbolRepeat+","+ticksizeRepeat+","+expirydateRepeat+","+strikepriceRepeat+","+trsymbolRepeat+","+symbolRepeat+","+trantypeRepeat+","+accountIdRepeat+")' data-toggle='modal'  data-target='#myModalRepeat' title='Repeat Order'></i></td>";
		            body=body+"</tr>";
		            
		          }  
	
		            
		              }
		        
		        }else{
		    	   
		    	   $('#CompletedinnerbodyId').show();
		         }  
		        
		     }
				                    		                   
//	            body=body+"</tbody>";
//	            body=body+"</table>";
	            
//	            body=body+"<div id='CompletedinnerbodyId' style='display: none;'>";
//
//	 	       body=body+"<label style='margin-left: 418px;'>No Data</label>";
//	 	       body=body+"</div>";
//	           body=body+"</div>"; 
//	 	       body=body+"</div>";
//	           body=body+"</div>";
			       
				$('#CompletedorderbodyId').html(body); 
		      //  $('#body-right').html(body);
				                    
		                 

		 } 
			},
			error:function(){
			//	alert("OrderBook Error");
			
			}	
		});
	}
	
function tradeordfunc222(){

var tradebookTag = document.getElementById("tradebookorderId").value;

  if(tradebookTag==="TradeBook"){
	  $("#tradebookorderId").addClass('active');
	  $("#pendingorderId").removeClass('active');
	  $("#completedorderId").removeClass('active');
	  
  	  $("#PendingDivId").hide();
	       $("#CompletedDivId").hide();
	       $("#TradeBookDivId").show();
	       $("#portfoliohideId").hide();
  }
  
  
  $.ajax({
		type :'POST',
		url :'TradeBook',
		dataType: 'json',
		contentType:'application/json; charset=utf-8',
		success:function(response){

				var jsonObject =JSON.parse(response);
	             
		        var TradeTag = document.getElementById("tradebookorderId").value;

		        if(TradeTag==="TradeBook"){
		        	
		        	  $("#PendingDivId").hide();
				       $("#CompletedDivId").hide();
				       $("#TradeBookDivId").show(); 
				       
	                    			                    				                 				                 
				       var body;
//				       body= "<div style='margin-left:-11px;margin-right:-26px;'>"
////					      
//					       body=body+"<button class='w3-bar-item w3-button' style='margin-left:0px;' id='pendingorderId' onclick='pendingordfunc()' value='Pending'>Pending</button>";
//					       body=body+"<button class='w3-bar-item w3-button' style='margin-left:15px;' id='completedorderId' onclick='completeordfunc()' value='Completed'>Completed</button>";
//					       body=body+"<button class='w3-bar-item w3-button' id='tradebookorderId' value='TradeBook' onclick='tradeordfunc()'>Trade Book</button>";
////					       body=body+"</div>";
//				       body=body+"<div class='tab'>";
//				       body=body+"<div  class='tabcontent' style='style='padding-left:30px;' >";
//			        	 
//			        	 body=body+ "<table id='tradebookorderId'class='table table-striped table-bordered display sortable' style='width: 100%;text-align: center;'>";
//			                body=body+"<thead style='background-color: #4e73df;color: #fff; font-size:13px;'>";
//			                body=body+"<tr>";
//			                body=body+"<th>Exchange</th>";
//			                body=body+"<th>Product</th>";
//			                body=body+"<th>Qty</th>";
//			                body=body+"<th>Avg Price</th>";
//			                body=body+"<th>Status</th>";
//			                body=body+"<th>Exchange Order Time</th>";
//			                body=body+"<th>Action</th>";
//			                body=body+"</tr>";
//			                body=body+"</thead>";
//			                body=body+"	<tbody>";
     
					    
				        for (var i = 0; i < jsonObject.length; i++) {
				        	
				        	var ScriptNameRepeat=JSON.stringify(jsonObject[i].symbolname);
		                    var PrcRepeat=JSON.stringify(jsonObject[i].Price);
		                    var ExchangeRepeat=JSON.stringify(jsonObject[i].Exchange);
		                    var TokenRepeat=JSON.stringify(jsonObject[i].Symbol);
		                    var ticksizeRepeat=JSON.stringify("");
		                    var expirydateRepeat=JSON.stringify(jsonObject[i].Expiry);
		                    var strikepriceRepeat=JSON.stringify(jsonObject[i].strikeprice);
		                    var trsymbolRepeat=JSON.stringify(jsonObject[i].Tsym);
		                    var symbolRepeat=JSON.stringify(jsonObject[i].symbolname);
		                    var trantypeRepeat=JSON.stringify(jsonObject[i].Trantype);
		                    var accountIdRepeat=JSON.stringify(jsonObject[i].accountId);
		                    
				        	var pcode=JSON.stringify(jsonObject[i].Pcode);
			                var fillshares=JSON.stringify(jsonObject[i].FillId);
			                var nstordno=JSON.stringify(jsonObject[i].Nstordno);
				         var nestordernum =jsonObject[i].Nstordno;
				        if(jsonObject[i].stat==='Ok'){
				        	
				        	
				          if(jsonObject[i].Exchange !=null){  						        		          	   
				        	 body=body+"<tr style='font-size:12px;'>";
				        	 body=body+"<td>" + jsonObject[i].Exchange + "</td>";
				        	 body=body+"<td>" + jsonObject[i].symbolname + "</td>";
					         body=body+"<td>" + jsonObject[i].Qty + "</td>";
					         body=body+"<td>" + jsonObject[i].AvgPrice + "</td>";
				        	 body=body+"<td>" + jsonObject[i].Pcode + "</td>";
					         body=body+"<td>" + jsonObject[i].Exchtime + "</td>";
					         if(jsonObject[i].Exchange==="MCX" && jsonObject[i].Pcode==="NRML"){
						         body=body+"<td><i class='bi bi-clock-history' style='cursor: pointer;font-size:24px;' onclick='tradeBookOrderHistoryFun("+nestordernum+");' title='OrderHistory'></i><button type='button' onclick='toPositionConversion("+pcode+","+fillshares+","+nstordno+","+'"MIS"'+")' data-toggle='modal' data-target='#myModalPosition'  class='btn btn-default  converttomisbutton font' > CONVERT TO MIS</button>"
						         body=body+"&nbsp&nbsp<i class='bi bi-arrow-repeat' style='cursor: pointer;font-size:24px;' onclick='onclickrepeatbuybtn("+ScriptNameRepeat+","+PrcRepeat+","+ExchangeRepeat+","+TokenRepeat+","+symbolRepeat+","+ticksizeRepeat+","+expirydateRepeat+","+strikepriceRepeat+","+trsymbolRepeat+","+symbolRepeat+","+trantypeRepeat+","+accountIdRepeat+")' data-toggle='modal'  data-target='#myModalRepeat' title='Repeat Order'></i></td>";
						         }else if(jsonObject[i].Exchange==="MCX" && jsonObject[i].Pcode==="MIS"){
						         body=body+"<td><i class='bi bi-clock-history' style='cursor: pointer;font-size:24px;' onclick='tradeBookOrderHistoryFun("+nestordernum+");' title='OrderHistory'></i><button type='button' onclick='toPositionConversion("+pcode+","+fillshares+","+nstordno+","+'"NRML"'+")' data-toggle='modal' data-target='#myModalPosition'  class='btn btn-default buysubmitgreen font' >CONVERT TO NRML</button>"
						         body=body+"&nbsp&nbsp<i class='bi bi-arrow-repeat' style='cursor: pointer;font-size:24px;' onclick='onclickrepeatbuybtn("+ScriptNameRepeat+","+PrcRepeat+","+ExchangeRepeat+","+TokenRepeat+","+symbolRepeat+","+ticksizeRepeat+","+expirydateRepeat+","+strikepriceRepeat+","+trsymbolRepeat+","+symbolRepeat+","+trantypeRepeat+","+accountIdRepeat+")' data-toggle='modal'  data-target='#myModalRepeat' title='Repeat Order'></i></td>";
						         }else if(jsonObject[i].Exchange==="NSE" && jsonObject[i].Pcode==="MIS"){
						         body=body+"<td><i class='bi bi-clock-history' style='cursor: pointer;font-size:24px;' onclick='tradeBookOrderHistoryFun("+nestordernum+");' title='OrderHistory'></i><button type='button' onclick='toPositionConversion("+pcode+","+fillshares+","+nstordno+","+'"CNC"'+")' data-toggle='modal' data-target='#myModalPosition'  class='btn btn-default buysubmitgreen font' >CONVERT TO CNC</button>"
						         body=body+"&nbsp&nbsp<i class='bi bi-arrow-repeat' style='cursor: pointer;font-size:24px;' onclick='onclickrepeatbuybtn("+ScriptNameRepeat+","+PrcRepeat+","+ExchangeRepeat+","+TokenRepeat+","+symbolRepeat+","+ticksizeRepeat+","+expirydateRepeat+","+strikepriceRepeat+","+trsymbolRepeat+","+symbolRepeat+","+trantypeRepeat+","+accountIdRepeat+")' data-toggle='modal'  data-target='#myModalRepeat' title='Repeat Order'></i></td>";
						         }else if(jsonObject[i].Exchange==="NSE" && jsonObject[i].Pcode==="CNC"){
						         body=body+"<td><i class='bi bi-clock-history' style='cursor: pointer;font-size:24px;' onclick='tradeBookOrderHistoryFun("+nestordernum+");' title='OrderHistory'></i><button type='button' onclick='toPositionConversion("+pcode+","+fillshares+","+nstordno+","+'"MIS"'+")' data-toggle='modal' data-target='#myModalPosition'  class='btn btn-default buysubmitgreen font' >CONVERT TO MIS</button>"
						         body=body+"&nbsp&nbsp<i class='bi bi-arrow-repeat' style='cursor: pointer;font-size:24px;' onclick='onclickrepeatbuybtn("+ScriptNameRepeat+","+PrcRepeat+","+ExchangeRepeat+","+TokenRepeat+","+symbolRepeat+","+ticksizeRepeat+","+expirydateRepeat+","+strikepriceRepeat+","+trsymbolRepeat+","+symbolRepeat+","+trantypeRepeat+","+accountIdRepeat+")' data-toggle='modal'  data-target='#myModalRepeat' title='Repeat Order'></i></td>";
						         }else if(jsonObject[i].Exchange==="NFO" && jsonObject[i].Pcode==="NRML"){
						         body=body+"<td><i class='bi bi-clock-history' style='cursor: pointer;font-size:24px;' onclick='tradeBookOrderHistoryFun("+nestordernum+");' title='OrderHistory'></i><button type='button' onclick='toPositionConversion("+pcode+","+fillshares+","+nstordno+","+'"MIS"'+")' data-toggle='modal' data-target='#myModalPosition'  class='btn btn-default buysubmitgreen font' >CONVERT TO MIS</button>"
						         body=body+"&nbsp&nbsp<i class='bi bi-arrow-repeat' style='cursor: pointer;font-size:24px;' onclick='onclickrepeatbuybtn("+ScriptNameRepeat+","+PrcRepeat+","+ExchangeRepeat+","+TokenRepeat+","+symbolRepeat+","+ticksizeRepeat+","+expirydateRepeat+","+strikepriceRepeat+","+trsymbolRepeat+","+symbolRepeat+","+trantypeRepeat+","+accountIdRepeat+")' data-toggle='modal'  data-target='#myModalRepeat' title='Repeat Order'></i></td>";
						         }else if(jsonObject[i].Exchange==="NFO" && jsonObject[i].Pcode==="MIS"){
						         body=body+"<td><i class='bi bi-clock-history' style='cursor: pointer;font-size:24px;' onclick='tradeBookOrderHistoryFun("+nestordernum+");' title='OrderHistory'></i><button type='button' onclick='toPositionConversion("+pcode+","+fillshares+","+nstordno+","+'"NRML"'+")' data-toggle='modal' data-target='#myModalPosition'  class='btn btn-default buysubmitgreen font' >CONVERT TO NRML</button>"
						         body=body+"&nbsp&nbsp<i class='bi bi-arrow-repeat' style='cursor: pointer;font-size:24px;' onclick='onclickrepeatbuybtn("+ScriptNameRepeat+","+PrcRepeat+","+ExchangeRepeat+","+TokenRepeat+","+symbolRepeat+","+ticksizeRepeat+","+expirydateRepeat+","+strikepriceRepeat+","+trsymbolRepeat+","+symbolRepeat+","+trantypeRepeat+","+accountIdRepeat+")' data-toggle='modal'  data-target='#myModalRepeat' title='Repeat Order'></i></td>";
						         }
					         
				            body=body+"</tr>";
				            
				          }

				            
				            
				        } 
				        
				        else{
				    	   
				    	   $('#tradebookinnerbodyId').show();
				       }  

				  }
//			            body=body+"</tbody>";
//			            body=body+"</table>";
//			            body=body+"<div id='tradebookinnerbodyId' style='display: none;'>";
//
//			 	       body=body+"<label style='margin-left: 418px;'>No Data</label>";
//			 	       body=body+"</div>";
//			 	       body=body+"</div>";
//			 	       body=body+"</div>";
//			 	       body=body+"</div>";
						                    		                   
				      
					       
					$('#tradebookorderbodyId').html(body);
				        
//				       $('#body-right').html(body);
	                  
	                   

		        } 
		},
		error:function(){
		//	alert("OrderBook Error");
		
		}	
	});
//});

}

	
	
function toPositionConversion(pcode,fillshare,nstOrderNumber,pchange){
	  
	 // alert("pcode:::"+pcode+"pchange:::"+pchange);
	  
	  document.getElementById("positionhiddnstordId").value=nstOrderNumber;
	  document.getElementById("positionhiddpcode").value=pcode;
	  document.getElementById("positionhiddfillshare").value=fillshare;
	  document.getElementById("positionhiddpchange").value=pchange;

}

function PositionOrderfun(){
	  
	  var positionnstordId = document.getElementById("positionhiddnstordId").value;
	  var positionpcode = document.getElementById("positionhiddpcode").value;
	  var positionfillshare = document.getElementById("positionhiddfillshare").value;
	  var positionpchange = document.getElementById("positionhiddpchange").value;
	  
	  var call="positionnstord="+positionnstordId+"&positionpcode="+positionpcode+"&positionfillshare="+positionfillshare+"&positionpchange="+positionpchange;

	  	 $.ajax({
				type :'POST',
				url :'PositionConvertion',
				data :call,
				dataType: 'json',
				success:function(response){					
					
					var result = Object.values(response);
					
					var stat=result[0];
					
					var msg= result[1];
					
					//alert("stat:::"+stat+"  msg:::"+msg);
					
					if(stat==='Ok'){
						$("#myModalPosition").modal('hide');
					
						$("#ajax_responsePosition").modal('show');
						
						$("#positionordernumber").html(result[1]);
						orderrefresh();
					}else{
						$("#myModalPosition").modal('hide');	
						$("#ajax_responsePosition").modal('show');
						$("#positionordernumber").html(result[1]);
						
					}


			         
				},
				error:function(){
					//alert("OrderBookPosition Error");
				
				}	
			});
}


function EditFun(nestid,pcodeModify,dayModify,mktModify,priceIdModify,QtyIdModify,TriggerpriceIdModify,DiscquantityIdModify,
		accountIdModify,ExsegModify,TrsymModify,TrantypeModify,PrctypeModify,FillsharesModify,ExchangeModify){
		
	document.getElementById("nestordernumberhiddId").value=nestid;
	document.getElementById("pcodeModifyhiddId").value=pcodeModify;
	document.getElementById("dayModifyhiddId").value=dayModify;
	document.getElementById("mktModifyhiddId").value=mktModify;
	document.getElementById("priceIdModifyhiddId").value=priceIdModify;
	document.getElementById("QtyIdModifyhiddId").value=QtyIdModify;
	document.getElementById("TriggerModifyhiddId").value=TriggerpriceIdModify;
	document.getElementById("DiscModifyhiddId").value=DiscquantityIdModify;
	
	document.getElementById("accountIdModifyhiddId").value=accountIdModify;
	document.getElementById("ExsegModifyhiddId").value=ExsegModify;
	document.getElementById("TrsymModifyhiddId").value=TrsymModify;
	document.getElementById("TrantypeModifyhiddId").value=TrantypeModify;
	document.getElementById("PrctypeModifyhiddId").value=PrctypeModify;
	document.getElementById("FillsharesModifyhiddId").value=FillsharesModify;
	document.getElementById("ExchangeModifyhiddId").value=ExchangeModify;
	
	document.getElementById("modifyStocklabelId").innerHTML=ExchangeModify;
	
	document.getElementById("priceIdModify").value=priceIdModify;
	document.getElementById("QtyIdModify").value=QtyIdModify;
	document.getElementById("TriggerpriceIdModify").value=TriggerpriceIdModify;
	document.getElementById("DiscquantityIdModify").value=DiscquantityIdModify;
	
	var pcode=pcodeModify;
	var validity=dayModify;
	var prctype=PrctypeModify;

	 if(pcode==='NRML'){
	    	
	    	$("#NrmlIdModify").prop("checked", true);
	       
	    }else{
	    	   $("#MisIdModify").prop("checked", true);
	    	   
	    }
  
  
  
  if(validity==='DAY'){
	
	$("#dayIdModify").prop("checked", true);
  
  }else if(validity==='IOC'){
  	
  	$("#iocIdModify").prop("checked", true);
  }else if(validity==='GTC'){
  	$("#gtcIdModify").prop("checked", true);
  	
  }else if(validity==='GTD'){
  	$("#gtdIdModify").prop("checked", true);
  	
  }else if(validity==='GTT'){
  	$("#gttIdModify").prop("checked", true);
  	
  }
  
  
  
  if(prctype==='L'){
	    	
	   $("#lmtIdModify").prop("checked", true);
	       
  }else if(prctype==='MKT'){
	   
	   $("#mktIdModify").prop("checked", true);
  }else if(prctype===''){
	   
	   $("#slIdModify").prop("checked", true);
   }else if(prctype===''){
 	   
 	   $("#sl-mIdModify").prop("checked", true);
    }
	
	
	
	if($("input:radio[name='lmtIdModify']").is(":checked")) {
	$('#mktIdModify').prop('checked', false);
	$('#slIdModify').prop('checked', false);
	$('#sl-mIdModify').prop('checked', false);
	
	
	$('#stoplessIdModify').hide();
	$('#tarketDivIdModify').hide();
	$('#TrailingstopIdModify').hide();
	
	//LMT
    $("#TriggerpriceIdModify").prop("disabled",true);
    $("#TriggerpriceIdModify").val("0");
    $("#priceIdModify").prop("disabled",false);
    $("#DiscquantityIdModify").prop("disabled",true);
}	

	
	
	 var scriptName=ExchangeModify;
	 
	
	 
	//const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		const monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']

	    const d = new Date();
	    var dd = String(d.getDate()).padStart(2, '0');
	    var mm = String(d.getMonth() + 1).padStart(2, '0');
	    var yyyy = d.getFullYear();
	    var todaydate = +dd +"/"+ monthNames[d.getMonth()] +"/"+ yyyy;

	   
		
	 
	 
	 
	 
	 if(scriptName==='MCX'){ //MCX
		 	$('#GTTlabelIdModify').hide();
		 	$('#gttIdModify').hide();
		 	
		 	 var Endday="00/00/00";
				$('#datepickerModify').datepicker({ 								
					dateFormat: 'dd/M/yy',
				    minDate: todaydate,
					maxDate:Endday,
				    showOtherMonths: true,
				    selectOtherMonths: true,
				    changeMonth: true,
				    changeYear: true
//			 	    showButtonPanel: true
				});
		 	
	 }
	 if(scriptName==='NSE'){ //NSE
		 
		 $('#GTTlabelIdModify').show();
		
		 var Endday="00/00/00";
			$('#datepickerModify').datepicker({ 								
				dateFormat: 'dd/M/yy',
			    minDate: todaydate,
				maxDate:Endday,
			    showOtherMonths: true,
			    selectOtherMonths: true,
			    changeMonth: true,
			    changeYear: true
//		 	    showButtonPanel: true
			});
	 }
	 if(scriptName==='NFO'){ //F&O
		 	$('#GTTlabelIdModify').hide();
		 	$('#gttIdModify').hide();
		 	
		 	 var Endday="00/00/00";
				$('#datepickerModify').datepicker({ 								
					dateFormat: 'dd/M/yy',
				    minDate: todaydate,
					maxDate:Endday,
				    showOtherMonths: true,
				    selectOtherMonths: true,
				    changeMonth: true,
				    changeYear: true
//			 	    showButtonPanel: true
				});
		 		 	
	 }
}



function ModifyOrderfun222(){
	
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
	 
	 
	 

//  alert("QtyIdModify::"+QtyIdModify+"priceIdModify::"+priceIdModify);
//  alert("lmtIdModify::"+lmtIdModify+"mktIdModify::"+mktIdModify+"slIdModify::"+slIdModify+"slmIdModify::"+slmIdModify);
//  alert("dayIdModify::"+dayIdModify+"iocIdModify::"+iocIdModify+"gtcIdModify::"+gtcIdModify+"gtdIdModify::"+gtdIdModify+"gttIdModify::"+gttIdModify);
  
var call="nestOrd="+nestordernumber+"&pcodeModify="+pcodeModify+"&dayModify="+Ret+"&mktModify="+mktModify+"&priceIdModify="+ Math.round(priceIdModify)
+"&QtyIdModify="+QtyIdModify+"&TriggerModify="+ Math.round(TriggerModify)+"&DiscModify="+DiscModify+"&accountIdModify="+accountIdModify+"&ExsegModify="+ExsegModify
+"&TrsymModify="+TrsymModify+"&TrantypeModify="+TrantypeModify+"&PrctypeModify="+prctyp+"&FillshareModify="+FillshareModify;

	// alert("nestordernumber:::"+nestordernumber+"pcodeModify::::"+pcodeModify+"TrsymModify::"+TrsymModify);
	
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

function CancelFun222(id){
	document.getElementById("cancelhiddnstordId").value=id;
}

function CancelOrderfun222(){
	
var nestordernumber = document.getElementById("cancelhiddnstordId").value;

	 $.ajax({
		type :'POST',
		url :'CancelOrder',
		data :"nestOrd="+nestordernumber,
		dataType: 'json',
		success:function(response){
			
			var jsonObject =JSON.parse(response);
			
			var result = Object.values(jsonObject);
			
			var stat= result[1];
			
			
			if(stat==='Ok'){
				$("#myModalCancel").modal('hide');
			
				$("#ajax_response").modal('show');
				
				$("#cancelordernumber").html(result[0]);
				orderrefresh();
			}


	         
		},
		error:function(){
			alert("OrderBookCancel Error");
		
		}	
	});

}

function orderHistoryFun222(nestordernumber){

	 $.ajax({
		type :'POST',
		url :'OrderHistory',
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

function completedOrderHistoryFun(nestordernumber){
	
	 $.ajax({
		type :'POST',
		url :'OrderHistory',
		data :"nestOrd=" +nestordernumber,
		dataType: 'json',
		//contentType:'application/json; charset=utf-8',
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
		       var reason='';

		         
		         var body;

				    
			        for (var i = 0; i <jsonObject.length; i++) {
			        	   price= jsonObject[0].Prc;				        		          	   
			        	   Qty= jsonObject[0].Qty; 				        	   
				    	   Status=jsonObject[0].Status;
				    	   Ordtype= jsonObject[0].Ordtype;
				    	   nestordernumber= jsonObject[0].nestordernumber
				    	   averageprice= jsonObject[0].averageprice;
				    	   exchangetimestamp= jsonObject[0].exchangetimestamp;
				    	   scripname= jsonObject[0].symbolname;
				    	   reason=jsonObject[0].rejectionreason;
				    	   
				    	 
				    	 
				    	   $("#completeorderprice").html(price);
					       $("#completeorderQty").html(Qty);
					       $("#completeorderStatus").html(Status);
					       $("#completeorderOrdtype").html(Ordtype);
					       $("#completeordernestordernumber").html(nestordernumber);
					       $("#completeorderaverageprice").html(averageprice);
					       $("#completeorderexchangetimestamp").html(exchangetimestamp);
					       $("#completeorderscripname").html(scripname);
					       $("#completeorderreason").html(reason);
					     
					       
					     $("#completeHistoryStocklabelId").html(jsonObject[i].exchange);
					       
					       $("#viewhiddnstordId").val(nestordernumber);

			        }
		       
		     

		       $("#completeOrderHistory").modal('show');
	         
		},
		error:function(){
			//alert("OrderHistory Error");
			
		
		}	
	});

}



function viewHistoryFun(){
   
    var nestordernumber = document.getElementById("viewhiddnstordId").value;
  
$.ajax({
	type :'POST',
	url :'OrderHistory',
	data :"nestOrd=" +nestordernumber,
	dataType: 'json',
	//contentType:'application/json; charset=utf-8',
	success:function(response){
		
		var jsonObject =JSON.parse(response);
			                    				                 				                 
			       var body;

				    
			        for (var i = 0; i < jsonObject.length; i++) {
			        
			        if(jsonObject[i].stat==='Ok'){
			        							        		          	   
			        	 body=body+"<tr>";
			        	 body=body+"<td>" + jsonObject[i].modifiedBy + "</td>";
			        	 body=body+"<td>" + jsonObject[i].Status + "</td>";
			        	 body=body+"<td>" + jsonObject[i].Ordtype + "</td>";
				         body=body+"<td>" + jsonObject[i].Prc + "</td>";
				         body=body+"<td>" + jsonObject[i].averageprice + "</td>";
			        	 body=body+"<td>" + jsonObject[i].triggerprice + "</td>";
				         body=body+"<td>" + jsonObject[i].Qty + "</td>";
				         body=body+"<td>" + jsonObject[i].bqty + "</td>";
			        	 body=body+"<td>" + jsonObject[i].exchangetimestamp + "</td>";
			            body=body+"</tr>";
			            
			            
			        } 
			        
			        else{
			    	   
			    	   $('.viewhistoryinnerbodyclass').show();
			       } 
			        
			        $("#viewHistoryStocklabelId").html(jsonObject[i].exchange);

			  }
					                    		                   
			      
			        $('.viewhistoryclass').html(body);
			        $('#viewHistoryOrderModalId').modal('show');
			        $("#completeOrderHistory").modal('hide');
					 
	       
	},
	error:function(){
		//alert("OrderBook Error");
	
	}	
});

}


function tradeBookOrderHistoryFun(nestordernumber){

	 $.ajax({
		type :'POST',
		url  :'OrderHistory',
		data :"nestOrd=" +nestordernumber,
		dataType : 'json',
	//    contentType:'application/json; charset=utf-8',
		success:function(response){
			       
		      var jsonObject =JSON.parse(response);

		       var nstordno= '';
		       var price= '';
		       var pcode= '';
		       var fillId= '';
		       var exchordID= '';
		       var exchtime= '';
		       var time= '';

		         
		         var body;

				    
			        for (var i = 0; i <jsonObject.length; i++) {
			        	
			        	nstordno= jsonObject[0].nestordernumber;				        		          	   
			        	price= jsonObject[0].Prc;
			        	pcode= jsonObject[0].productcode;
			        	fillId= jsonObject[0].Ordtype;
			        	exchordID= jsonObject[0].exchangeorderid;
			        	exchtime= jsonObject[0].exchangetimestamp;
			        	time= jsonObject[0].ExchTimeStamp;
				    	   
				    	   
				    	   $("#orderId").html(nstordno);
					       $("#tradeprice").html(price);
					       $("#tradeproductId").html(pcode);
					       $("#tradeId").html(fillId);
					       $("#tradeExchangeOrderId").html(exchordID);
					       $("#tradeupdatetimeId").html(exchtime);
					       $("#tradeexchangetime").html(time);
					       
					      $("#tradeHistoryStocklabelId").html(jsonObject[i].exchange);

			        }
		       
		     

		       $("#myModalTradebookHistory").modal('show');
	         
		},
		error:function(){
			//alert("TradeHistory Error");
			
		
		}	
	});

}


//===============================KAMBALA UI START===================================


function functionOrder(){
	
	alert("kkk");
	
  $("#orderhideId").show();
  $("#otherId").hide();
	 $("#orderdashboardbookhiddenId").hide();
	 $("#markethiddenId").hide();
	 
	 
	//OptionChain
	 	$("#OptionChainDivhideId").hide();
		$("#OptionChainDivcallId").hide();
		$("#OptionChainbodycallId").hide();
		$("#OptionChaininnerbodycallId").hide();
		
	 //Portfolio Div Details	 
	  $("#portfoliohideId").hide();
	 $("#PositionsDivId").hide();
	 $("PositionsbodyId").hide();
	 
	 //Fund Div Details
	 	$("#FundshideId").hide();
		$("#FundsDivId").hide();
		$("#FundsbodyId").hide();
		
		
		//Profile Div Details
		 $("#AccountProfile").hide();
		 $('#AccountProfileDivId').hide();
		 $('#AccountProfilebodyId').hide();
		 
		 
		 //AlertDiv
		 $("#AlertDivId").hide();
	
	  $.ajax({
			type :'POST',
			url :'OrderBook',
			dataType: 'json',
		//	contentType:'application/json; charset=utf-8',
			success:function(jsonObject){
				
			//	alert("res:::"+jsonObject);
				//var jsonObject =JSON.parse(response);
				
				//alert("jsonObject:::"+jsonObject);
				
			//	var count = Object.keys(jsonObject);
				
			//	alert("count:::"+count);

		             
			      var PendingTag = document.getElementById("pendingorderId").value;
				
			        alert("PendingTag:::"+PendingTag);
			       
			        if(PendingTag==="Pending"){
			        	
			        	  $("#PendingDivId").show();
					       $("#CompletedDivId").hide();
					       $("#TradeBookDivId").hide(); 
					       
					       var body;
					       

					    
     for (var i = 0; i < jsonObject.length; i++) {
     	
    //	 alert("okk");
     	
   //  var status= jsonObject[i].Status;
     var status= jsonObject[i].status;
     var stat= jsonObject[i].stat;
     
     if(stat==='Ok'){
     	
     	   if(status==='OPEN'){
     		   
     		   
//     		   var prc=jsonObject[i].Prc;
//                var qty=jsonObject[i].Qty;
//                var status=jsonObject[i].Status;   
//                var nestordernum=jsonObject[i].Nstordno;
//                var averageprice=jsonObject[i].Avgprc;
//                var exchangetimestamp=jsonObject[i].ExchConfrmtime;
//                var accountId=jsonObject[i].accountId;
                
//                var nestordernumModify=JSON.stringify(jsonObject[i].Nstordno);
//                var pcodeModify=JSON.stringify(jsonObject[i].Pcode);
//                var dayModify=JSON.stringify(jsonObject[i].Validity);
//                var lmtIdModify=JSON.stringify(jsonObject[i].OriginalPrctype);
//                
//                var priceIdModify=JSON.stringify(jsonObject[i].Prc);
//                var QtyIdModify=JSON.stringify(jsonObject[i].Qty);
//                var TriggerpriceIdModify=JSON.stringify(jsonObject[i].Trgprc);
//                var DiscquantityIdModify=JSON.stringify(jsonObject[i].Dscqty);
//                
//                var accountIdModify=JSON.stringify(jsonObject[i].accountId);
//                var ExsegModify=JSON.stringify(jsonObject[i].Exchange);
//                var TrsymModify=JSON.stringify(jsonObject[i].Trsym);
//                var TrantypeModify=JSON.stringify(jsonObject[i].Trantype);
//                var PrctypeModify=JSON.stringify(jsonObject[i].Prctype);
//                var FillsharesModify=JSON.stringify(jsonObject[i].Fillshares);
//                var ExchangeModify=JSON.stringify(jsonObject[i].Exchange);
                
//                var ScriptNameRepeat=JSON.stringify(jsonObject[i].Scripname);
//                var PrcRepeat=JSON.stringify(jsonObject[i].Prc);
//                var ExchangeRepeat=JSON.stringify(jsonObject[i].Exchange);
//                var TokenRepeat=JSON.stringify(jsonObject[i].token);
//                var ticksizeRepeat=JSON.stringify(jsonObject[i].ticksize);
//                var expirydateRepeat=JSON.stringify(jsonObject[i].ExpDate);
//                var strikepriceRepeat=JSON.stringify(jsonObject[i].strikePrice);
//                var trsymbolRepeat=JSON.stringify(jsonObject[i].Trsym);
//                var symbolRepeat=JSON.stringify(jsonObject[i].Sym);
//                var trantypeRepeat=JSON.stringify(jsonObject[i].Trantype);
//                var accountIdRepeat=JSON.stringify(jsonObject[i].accountId);
                
               

          if(jsonObject[i].exch !=null){        
     		          	   
     	 body=body+"<tr style='font-size:12px;'>";
     	 body=body+"<td>" + jsonObject[i].exch + "</td>";
     	 body=body+"<td>" + jsonObject[i].dname + "</td>";
	     body=body+"<td>" + jsonObject[i].qty + "</td>";
	     body=body+"<td>" + jsonObject[i].prc + "</td>";
     	 body=body+"<td>" + jsonObject[i].status + "</td>";
	     body=body+"<td>" + jsonObject[i].norentm + "</td>";
	     
	   //  alert("ScriptNameRepeat"+ScriptNameRepeat+"ExchangeRepeat::"+ExchangeRepeat+"TokenRepeat::"+TokenRepeat);
	     
	    // onclickstockbuybtn('${scptList.scriptName}','${scptList.price}','${scptList.exchange}','${scptList.token}','${scptList.displayname}','${scptList.mcxTickSize}','${scptList.mcxOriginalExpiryDate}','${scptList.nseTickSize}','${scptList.nseExDate}','${scptList.nfoexpiry_date}','${scptList.mcxInstrumentCode}','${scptList.mcxStrikePrice}','${scptList.mcxOptionType}','${scptList.mcxInstrumentName}','${scptList.mcxInstrumentSeries}','${scptList.nseSymbol}','${scptList.nseSeries}','${scptList.nfoSymbol}','${scptList.nfostrike_price}','${scptList.nfooption_type}','${scptList.nfoinstrument_name}')" 
         
	     //  body=body+"<td><i class='bi bi-pencil-square' data-toggle='modal'  style='cursor: pointer;font-size:24px;' onclick='EditFun("+nestordernumModify+","+pcodeModify+","+dayModify+","+lmtIdModify+","+priceIdModify+","+QtyIdModify+","+TriggerpriceIdModify+","+DiscquantityIdModify+","+accountIdModify+","+ExsegModify+","+TrsymModify+","+TrantypeModify+","+PrctypeModify+","+FillsharesModify+","+ExchangeModify+")' data-target='#myModalModify'  title='Edit'></i>&nbsp&nbsp&nbsp&nbsp<i class='bi bi-x-circle' style='cursor: pointer;font-size:24px;' onclick='CancelFun("+nestordernumModify+")' data-toggle='modal' data-target='#myModalCancel' title='Cancel'></i>&nbsp&nbsp<i class='bi bi-clock-history' style='cursor: pointer;font-size:24px;' onclick='orderHistoryFun("+nestordernumModify+");' title='OrderHistory'></i>"
	      
	    //   body=body+"&nbsp&nbsp<i class='bi bi-arrow-repeat' style='cursor: pointer;font-size:24px;' onclick='onclickrepeatbuybtn("+ScriptNameRepeat+","+PrcRepeat+","+ExchangeRepeat+","+TokenRepeat+","+symbolRepeat+","+ticksizeRepeat+","+expirydateRepeat+","+strikepriceRepeat+","+trsymbolRepeat+","+symbolRepeat+","+trantypeRepeat+","+accountIdRepeat+")' data-toggle='modal'  data-target='#myModalRepeat' title='Repeat Order'></i></td>";
	       body=body+"</tr>";
	       
        }
	        

         
//         $("#cancelStocklabelId").html(jsonObject[i].Exseg);
//
//         $("#Prc").val(prc);				        		          	   
//         $("#Qty").val(qty);
//         $("#Status").val(status);
//         $("#nestordernumber").val(nestordernum);
//         $("#averageprice").val(averageprice);
//         $("#exchangetimestamp").val(exchangetimestamp);
//         $("#accountId").val(accountId);
         
	    

     	   
     }
     	   
     /* else{
          $('#pendinginnerbodyId').show();
         }*/  
     	   
		                    		                   

     }
     
      else{
         $('#pendinginnerbodyId').show();
     } 
     
		                    
     }
     


     $('#pendingorderbodyId').html(body); 

   //  $('#body-right').html(body);
			       
	}
			        
		
			},
			error:function(){
			//	alert("OrderBook Error");
			
			}	
		});
		
	
	}


function completeordfunc(){
	
	//alert("ccc");
var completedTag = document.getElementById("completedorderId").value;

      if(completedTag==="Completed"){
      	
    	  $("#pendingorderId").removeClass('active');
    	  $("#tradebookorderId").removeClass('active');
    	  $("#completedorderId").addClass('active');
    	  
      	  $("#PendingDivId").hide();
		       $("#CompletedDivId").show();
		       $("#TradeBookDivId").hide();
		       $("#portfoliohideId").hide();
		       
		       
		     //Portfolio Div Details	 
		 	  $("#portfoliohideId").hide();
		 	 $("#PositionsDivId").hide();
		 	 $("PositionsbodyId").hide();
		 	 
		 	 //Fund Div Details
		 	 	$("#FundshideId").hide();
		 		$("#FundsDivId").hide();
		 		$("#FundsbodyId").hide();
		 		
		 		
		 		//Profile Div Details
		 		 $("#AccountProfile").hide();
		 		 $('#AccountProfileDivId').hide();
		 		 $('#AccountProfilebodyId').hide();
		 		 
		 		 //AlertDiv
				 $("#AlertDivId").hide();
      }
      
      
      $.ajax({
			type :'POST',
			url :'OrderBook',
			dataType: 'json',
			//contentType:'application/json; charset=utf-8',
			success:function(jsonObject){
				
				//var jsonObject =JSON.parse(response);
		             
			 var PendingTag = document.getElementById("completedorderId").value;
			        
			        if(PendingTag==="Completed"){
			        	
			        	  $("#PendingDivId").hide();
					       $("#CompletedDivId").show();
					       $("#TradeBookDivId").hide(); 
					       
				var body;
				

							    
		        for (var i = 0; i < jsonObject.length; i++) {
		        	
//		        	var ScriptNameRepeat=JSON.stringify(jsonObject[i].Scripname);
//                var PrcRepeat=JSON.stringify(jsonObject[i].Prc);
//                var ExchangeRepeat=JSON.stringify(jsonObject[i].Exchange);
//                var TokenRepeat=JSON.stringify(jsonObject[i].token);
//                var ticksizeRepeat=JSON.stringify(jsonObject[i].ticksize);
//                var expirydateRepeat=JSON.stringify(jsonObject[i].ExpDate);
//                var strikepriceRepeat=JSON.stringify(jsonObject[i].strikePrice);
//                var trsymbolRepeat=JSON.stringify(jsonObject[i].Trsym);
//                var symbolRepeat=JSON.stringify(jsonObject[i].Sym);
//                var trantypeRepeat=JSON.stringify(jsonObject[i].Trantype);
//                var accountIdRepeat=JSON.stringify(jsonObject[i].accountId);
                
		        var status= jsonObject[i].status;
		        
		        alert("status:::"+status);
		        
		        var stat= jsonObject[i].stat;
		        
		        if(stat==='Ok'){
		        	
		        if(status==='COMPLETE' ||status==='REJECTED' || status==='CANCELLED'){
		        	
		        	 var nestordernum=jsonObject[i].norenordno;
		        	 
		        	
		                
		            if(jsonObject[i].exch !=null){  
		        		          	   
		        	 body=body+"<tr style='font-size:12px;'>";
		        	 body=body+"<td>" + jsonObject[i].exch + "</td>";
		        	 body=body+"<td>" + jsonObject[i].dname + "</td>";
			         body=body+"<td>" + jsonObject[i].qty + "</td>";
			         body=body+"<td>" + jsonObject[i].prc + "</td>";
		        	 body=body+"<td>" + jsonObject[i].status + "</td>";
			         body=body+"<td>" + jsonObject[i].norentm + "</td>";
			         body=body+"<td><i class='bi bi-clock-history' style='cursor: pointer;font-size:24px;' onclick='completedOrderHistoryFun("+nestordernum+");' title='OrderHistory'></i>";
			      //   body=body+"&nbsp&nbsp<i class='bi bi-arrow-repeat' style='cursor: pointer;font-size:24px;' onclick='onclickrepeatbuybtn("+ScriptNameRepeat+","+PrcRepeat+","+ExchangeRepeat+","+TokenRepeat+","+symbolRepeat+","+ticksizeRepeat+","+expirydateRepeat+","+strikepriceRepeat+","+trsymbolRepeat+","+symbolRepeat+","+trantypeRepeat+","+accountIdRepeat+")' data-toggle='modal'  data-target='#myModalRepeat' title='Repeat Order'></i></td>";
		            body=body+"</tr>";
		            
		          }  
	
		            
		              }
		        
		        }else{
		    	   
		    	   $('#CompletedinnerbodyId').show();
		         }  
		        
		     }
				                    		                   

			       
				$('#CompletedorderbodyId').html(body);          

		 } 
			},
			error:function(){
			//	alert("OrderBook Error");
			
			}	
		});
	}



function tradeordfunc(){

	var tradebookTag = document.getElementById("tradebookorderId").value;

	  if(tradebookTag==="TradeBook"){
		  $("#tradebookorderId").addClass('active');
		  $("#pendingorderId").removeClass('active');
		  $("#completedorderId").removeClass('active');
		  
	  	  $("#PendingDivId").hide();
		       $("#CompletedDivId").hide();
		       $("#TradeBookDivId").show();
		       $("#portfoliohideId").hide();
	  }
	  
	  
	  $.ajax({
			type :'POST',
			url :'TradeBook',
			dataType: 'json',
		//	contentType:'application/json; charset=utf-8',
			success:function(jsonObject){

				//	var jsonObject =JSON.parse(response);
		             
			        var TradeTag = document.getElementById("tradebookorderId").value;

			        if(TradeTag==="TradeBook"){
			        	
			        	  $("#PendingDivId").hide();
					       $("#CompletedDivId").hide();
					       $("#TradeBookDivId").show(); 
					       
		                    			                    				                 				                 
					       var body;

						    
					        for (var i = 0; i < jsonObject.length; i++) {
					        	
					        	var ScriptNameRepeat=JSON.stringify(jsonObject[i].symbolname);
			                    var PrcRepeat=JSON.stringify(jsonObject[i].Price);
			                    var ExchangeRepeat=JSON.stringify(jsonObject[i].Exchange);
			                    var TokenRepeat=JSON.stringify(jsonObject[i].Symbol);
			                    var ticksizeRepeat=JSON.stringify("");
			                    var expirydateRepeat=JSON.stringify(jsonObject[i].Expiry);
			                    var strikepriceRepeat=JSON.stringify(jsonObject[i].strikeprice);
			                    var trsymbolRepeat=JSON.stringify(jsonObject[i].Tsym);
			                    var symbolRepeat=JSON.stringify(jsonObject[i].symbolname);
			                    var trantypeRepeat=JSON.stringify(jsonObject[i].Trantype);
			                    var accountIdRepeat=JSON.stringify(jsonObject[i].accountId);
			                    
					        	var pcode=JSON.stringify(jsonObject[i].Pcode);
				                var fillshares=JSON.stringify(jsonObject[i].FillId);
				                var nstordno=JSON.stringify(jsonObject[i].Nstordno);
					         var nestordernum =jsonObject[i].Nstordno;
					        if(jsonObject[i].stat==='Ok'){
					        	
					        	
					          if(jsonObject[i].Exchange !=null){  						        		          	   
					        	 body=body+"<tr style='font-size:12px;'>";
					        	 body=body+"<td>" + jsonObject[i].Exchange + "</td>";
					        	 body=body+"<td>" + jsonObject[i].symbolname + "</td>";
						         body=body+"<td>" + jsonObject[i].Qty + "</td>";
						         body=body+"<td>" + jsonObject[i].AvgPrice + "</td>";
					        	 body=body+"<td>" + jsonObject[i].Pcode + "</td>";
						         body=body+"<td>" + jsonObject[i].Exchtime + "</td>";
						         if(jsonObject[i].Exchange==="MCX" && jsonObject[i].Pcode==="NRML"){
							         body=body+"<td><i class='bi bi-clock-history' style='cursor: pointer;font-size:24px;' onclick='tradeBookOrderHistoryFun("+nestordernum+");' title='OrderHistory'></i><button type='button' onclick='toPositionConversion("+pcode+","+fillshares+","+nstordno+","+'"MIS"'+")' data-toggle='modal' data-target='#myModalPosition'  class='btn btn-default  converttomisbutton font' > CONVERT TO MIS</button>"
							         body=body+"&nbsp&nbsp<i class='bi bi-arrow-repeat' style='cursor: pointer;font-size:24px;' onclick='onclickrepeatbuybtn("+ScriptNameRepeat+","+PrcRepeat+","+ExchangeRepeat+","+TokenRepeat+","+symbolRepeat+","+ticksizeRepeat+","+expirydateRepeat+","+strikepriceRepeat+","+trsymbolRepeat+","+symbolRepeat+","+trantypeRepeat+","+accountIdRepeat+")' data-toggle='modal'  data-target='#myModalRepeat' title='Repeat Order'></i></td>";
							         }else if(jsonObject[i].Exchange==="MCX" && jsonObject[i].Pcode==="MIS"){
							         body=body+"<td><i class='bi bi-clock-history' style='cursor: pointer;font-size:24px;' onclick='tradeBookOrderHistoryFun("+nestordernum+");' title='OrderHistory'></i><button type='button' onclick='toPositionConversion("+pcode+","+fillshares+","+nstordno+","+'"NRML"'+")' data-toggle='modal' data-target='#myModalPosition'  class='btn btn-default buysubmitgreen font' >CONVERT TO NRML</button>"
							         body=body+"&nbsp&nbsp<i class='bi bi-arrow-repeat' style='cursor: pointer;font-size:24px;' onclick='onclickrepeatbuybtn("+ScriptNameRepeat+","+PrcRepeat+","+ExchangeRepeat+","+TokenRepeat+","+symbolRepeat+","+ticksizeRepeat+","+expirydateRepeat+","+strikepriceRepeat+","+trsymbolRepeat+","+symbolRepeat+","+trantypeRepeat+","+accountIdRepeat+")' data-toggle='modal'  data-target='#myModalRepeat' title='Repeat Order'></i></td>";
							         }else if(jsonObject[i].Exchange==="NSE" && jsonObject[i].Pcode==="MIS"){
							         body=body+"<td><i class='bi bi-clock-history' style='cursor: pointer;font-size:24px;' onclick='tradeBookOrderHistoryFun("+nestordernum+");' title='OrderHistory'></i><button type='button' onclick='toPositionConversion("+pcode+","+fillshares+","+nstordno+","+'"CNC"'+")' data-toggle='modal' data-target='#myModalPosition'  class='btn btn-default buysubmitgreen font' >CONVERT TO CNC</button>"
							         body=body+"&nbsp&nbsp<i class='bi bi-arrow-repeat' style='cursor: pointer;font-size:24px;' onclick='onclickrepeatbuybtn("+ScriptNameRepeat+","+PrcRepeat+","+ExchangeRepeat+","+TokenRepeat+","+symbolRepeat+","+ticksizeRepeat+","+expirydateRepeat+","+strikepriceRepeat+","+trsymbolRepeat+","+symbolRepeat+","+trantypeRepeat+","+accountIdRepeat+")' data-toggle='modal'  data-target='#myModalRepeat' title='Repeat Order'></i></td>";
							         }else if(jsonObject[i].Exchange==="NSE" && jsonObject[i].Pcode==="CNC"){
							         body=body+"<td><i class='bi bi-clock-history' style='cursor: pointer;font-size:24px;' onclick='tradeBookOrderHistoryFun("+nestordernum+");' title='OrderHistory'></i><button type='button' onclick='toPositionConversion("+pcode+","+fillshares+","+nstordno+","+'"MIS"'+")' data-toggle='modal' data-target='#myModalPosition'  class='btn btn-default buysubmitgreen font' >CONVERT TO MIS</button>"
							         body=body+"&nbsp&nbsp<i class='bi bi-arrow-repeat' style='cursor: pointer;font-size:24px;' onclick='onclickrepeatbuybtn("+ScriptNameRepeat+","+PrcRepeat+","+ExchangeRepeat+","+TokenRepeat+","+symbolRepeat+","+ticksizeRepeat+","+expirydateRepeat+","+strikepriceRepeat+","+trsymbolRepeat+","+symbolRepeat+","+trantypeRepeat+","+accountIdRepeat+")' data-toggle='modal'  data-target='#myModalRepeat' title='Repeat Order'></i></td>";
							         }else if(jsonObject[i].Exchange==="NFO" && jsonObject[i].Pcode==="NRML"){
							         body=body+"<td><i class='bi bi-clock-history' style='cursor: pointer;font-size:24px;' onclick='tradeBookOrderHistoryFun("+nestordernum+");' title='OrderHistory'></i><button type='button' onclick='toPositionConversion("+pcode+","+fillshares+","+nstordno+","+'"MIS"'+")' data-toggle='modal' data-target='#myModalPosition'  class='btn btn-default buysubmitgreen font' >CONVERT TO MIS</button>"
							         body=body+"&nbsp&nbsp<i class='bi bi-arrow-repeat' style='cursor: pointer;font-size:24px;' onclick='onclickrepeatbuybtn("+ScriptNameRepeat+","+PrcRepeat+","+ExchangeRepeat+","+TokenRepeat+","+symbolRepeat+","+ticksizeRepeat+","+expirydateRepeat+","+strikepriceRepeat+","+trsymbolRepeat+","+symbolRepeat+","+trantypeRepeat+","+accountIdRepeat+")' data-toggle='modal'  data-target='#myModalRepeat' title='Repeat Order'></i></td>";
							         }else if(jsonObject[i].Exchange==="NFO" && jsonObject[i].Pcode==="MIS"){
							         body=body+"<td><i class='bi bi-clock-history' style='cursor: pointer;font-size:24px;' onclick='tradeBookOrderHistoryFun("+nestordernum+");' title='OrderHistory'></i><button type='button' onclick='toPositionConversion("+pcode+","+fillshares+","+nstordno+","+'"NRML"'+")' data-toggle='modal' data-target='#myModalPosition'  class='btn btn-default buysubmitgreen font' >CONVERT TO NRML</button>"
							         body=body+"&nbsp&nbsp<i class='bi bi-arrow-repeat' style='cursor: pointer;font-size:24px;' onclick='onclickrepeatbuybtn("+ScriptNameRepeat+","+PrcRepeat+","+ExchangeRepeat+","+TokenRepeat+","+symbolRepeat+","+ticksizeRepeat+","+expirydateRepeat+","+strikepriceRepeat+","+trsymbolRepeat+","+symbolRepeat+","+trantypeRepeat+","+accountIdRepeat+")' data-toggle='modal'  data-target='#myModalRepeat' title='Repeat Order'></i></td>";
							         }
						         
					            body=body+"</tr>";
					            
					          }

					            
					            
					        } 
					        
					        else{
					    	   
					    	   $('#tradebookinnerbodyId').show();
					       }  

					  }
   		                   
					      
						       
						$('#tradebookorderbodyId').html(body);
					        
//					       $('#body-right').html(body);
		                  
		                   

			        } 
			},
			error:function(){
			//	alert("OrderBook Error");
			
			}	
		});
	//});

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
		 
		 
		 

	//  alert("QtyIdModify::"+QtyIdModify+"priceIdModify::"+priceIdModify);
	//  alert("lmtIdModify::"+lmtIdModify+"mktIdModify::"+mktIdModify+"slIdModify::"+slIdModify+"slmIdModify::"+slmIdModify);
	//  alert("dayIdModify::"+dayIdModify+"iocIdModify::"+iocIdModify+"gtcIdModify::"+gtcIdModify+"gtdIdModify::"+gtdIdModify+"gttIdModify::"+gttIdModify);
	  
	var call="nestOrd="+nestordernumber+"&pcodeModify="+pcodeModify+"&dayModify="+Ret+"&mktModify="+mktModify+"&priceIdModify="+ Math.round(priceIdModify)
	+"&QtyIdModify="+QtyIdModify+"&TriggerModify="+ Math.round(TriggerModify)+"&DiscModify="+DiscModify+"&accountIdModify="+accountIdModify+"&ExsegModify="+ExsegModify
	+"&TrsymModify="+TrsymModify+"&TrantypeModify="+TrantypeModify+"&PrctypeModify="+prctyp+"&FillshareModify="+FillshareModify;

		// alert("nestordernumber:::"+nestordernumber+"pcodeModify::::"+pcodeModify+"TrsymModify::"+TrsymModify);
		
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

	function CancelFun(id){
		document.getElementById("cancelhiddnstordId").value=id;
	}

	function CancelOrderfun(){
		
	var nestordernumber = document.getElementById("cancelhiddnstordId").value;

		 $.ajax({
			type :'POST',
			url :'CancelOrder',
			data :"nestOrd="+nestordernumber,
			dataType: 'json',
			success:function(response){
				
				var jsonObject =JSON.parse(response);
				
				var result = Object.values(jsonObject);
				
				var stat= result[1];
				
				
				if(stat==='Ok'){
					$("#myModalCancel").modal('hide');
				
					$("#ajax_response").modal('show');
					
					$("#cancelordernumber").html(result[0]);
					orderrefresh();
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


