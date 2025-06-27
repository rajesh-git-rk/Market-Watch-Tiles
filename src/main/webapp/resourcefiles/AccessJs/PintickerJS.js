function ShowModalMoreOption(scriptId,tokenId,setScriptName,setprice,setexchange,settoken,setmcxOriginalExpiryDate,
		setnseExDate,setnfoexpiry_date,setstockdisplaynameId,setmcxticksizeId,setmcxexpirydateId,setnseticksizeId,
		setnseexpirydateId,setnfoexpirydateId,setmcxInstrumentCodeId,setmcxStrikePriceId,setmcxOptionTypeId,setmcxInstrumentNameId,
		setmcxInstrumentSeriesId,setnseSymbolId,setnseSeriesId,setnfosymbolId,setnfostrike_priceId,setnfooption_typeId,setnfoinstrument_nameId){	
	//$('#myModalMoreOption').modal('show');
	
	
	
	//$('#myModalMoreOption').show();
	
	//alert("scriptId::"+scriptId+"tokenId:::"+tokenId);
	
	// document.getElementById("scripthiddenId").value=scriptId;
	// document.getElementById("tokenhiddenId").value=tokenId;
	 

	 
	 document.getElementById("setScriptNamehiddenId").value=setScriptName;
	 document.getElementById("setpricehiddenId").value=setprice;
	 document.getElementById("setexchangehiddenId").value=setexchange;
	 document.getElementById("settokenhiddenId").value=settoken;
	 document.getElementById("setmcxOriginalExpiryDatehiddenId").value=setmcxOriginalExpiryDate;
	 document.getElementById("setnseExDatehiddenId").value=setnseExDate;
	 document.getElementById("setnfoexpiry_datehiddenId").value=setnfoexpiry_date;
	 
	 document.getElementById("setstockdisplaynameId").value=setstockdisplaynameId;
	 document.getElementById("setmcxticksizeId").value=setmcxticksizeId; 
	 document.getElementById("setmcxexpirydateId").value=setmcxexpirydateId;
	 document.getElementById("setnseticksizeId").value=setnseticksizeId;
	 document.getElementById("setnseexpirydateId").value=setnseexpirydateId;
	 document.getElementById("setnfoexpirydateId").value=setnfoexpirydateId;
	 document.getElementById("setmcxInstrumentCodeId").value=setmcxInstrumentCodeId;
	 document.getElementById("setmcxStrikePriceId").value=setmcxStrikePriceId;
	 document.getElementById("setmcxOptionTypeId").value=setmcxOptionTypeId;
	 document.getElementById("setmcxInstrumentNameId").value=setmcxInstrumentNameId;
	 document.getElementById("setmcxInstrumentSeriesId").value=setmcxInstrumentSeriesId;
	 document.getElementById("setnseSymbolId").value=setnseSymbolId;
	 document.getElementById("setnseSeriesId").value=setnseSeriesId;
	 document.getElementById("setnfosymbolId").value=setnfosymbolId;
	 document.getElementById("setnfostrike_priceId").value=setnfostrike_priceId;
	 document.getElementById("setnfooption_typeId").value=setnfooption_typeId;
	 document.getElementById("setnfoinstrument_nameId").value=setnfoinstrument_nameId;
	 
	 

}


function setPinTickerfun(token,scriptname,exch,series,postion){
	
    
  // alert("scriptId::"+scriptname+"tokenId::"+token+"postion::"+postion+"exch::"+exch+"series::"+series);
  //  var postion1=1;
   
	
	$.ajax({
		type :'POST',
		url :'PinTicker',	
		dataType: 'json',
		data:"scriptId="+scriptname+"&tokenId="+token+"&Position="+postion+"&exchseries="+exch+" "+series,		
		success:function(response){
			
			var jsonObject= JSON.parse(response);
					
			var scriptTag;
			var postionTag;	
			var exchseries;
			
			var ErrorMessage;
			
			 var body;
			 var firstpintickerbody;
			 var secondprintickerbody;
			 
			 
				 scriptTag=jsonObject.scriptId;
				 postionTag=jsonObject.Position;
				 ErrorMessage=jsonObject.PinTickerErrmessage;
				 exchseries =jsonObject.ExchSeries;
				 
				 
				 if(postionTag==1 && ErrorMessage !=1){

					 document.getElementById("firstpintickerscript").innerHTML=scriptTag;	 
					 document.getElementById("firstpintickerexchseries").innerHTML=exchseries;
						 
				 }else if(postionTag==2 && ErrorMessage !=1){
					 
					 document.getElementById("secondprintickerscript").innerHTML=scriptTag;	 
					 document.getElementById("secondprintickerseries").innerHTML=exchseries;	
				 }else{
					 alert("This Script Already Added!.");
				
				 }
				 	
			
			
		},
		error:function(){
			//alert("PinTicker Error");
		
		}	
	});	
}



function PinTickerPrevioueLoadFunction(){
	
	$.ajax({
		type :'POST',
		url :'PinTickerPrevioueLoad',	
		dataType: 'html',
		success:function(response){
			
			var jsonObject= JSON.parse(response);
			
			var scriptTagfirst;
			var postionfirst;			
			var scriptTagsecond;
			var positionsecond;
			
			var exchfirst;
			var exchsecond;
			
			 var body;
			 var firstpintickerbody;
			 var secondprintickerbody;		
			 //alert("length : "+ jsonObject.length);
				
			for (var i = 0; i < jsonObject.length; i++) {				
				scriptTagfirst=jsonObject[1].scriptname;
				postionfirst=jsonObject[1].position;
				scriptTagsecond=jsonObject[0].scriptname;
				postionsecond=jsonObject[0].position;
				
				exchfirst=jsonObject[1].exchseries;
				exchsecond=jsonObject[0].exchseries;
			}
				
			 
			 document.getElementById("firstpintickerscript").innerHTML=scriptTagfirst;	 
			 document.getElementById("firstpintickerexchseries").innerHTML=exchfirst;
			 
			 document.getElementById("secondprintickerscript").innerHTML=scriptTagsecond;	 
			 document.getElementById("secondprintickerseries").innerHTML=exchsecond;
			

		},
		error:function(){
			//alert("PinTicker Error");
		
		}	
	});	
	}
