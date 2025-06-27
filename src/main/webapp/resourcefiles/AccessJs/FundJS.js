

$(document).ready(function(){
	
	//alert("ok");
	getfund();
	
	getPayin();
});


function getPayin(){
//	alert("fund");
	 $.ajax({
			type :'POST',
			url :'GetPayinReport',
			data : '',
			dataType: 'json',
			success:function(response){ 
				
				//alert("response:::"+response);
				
			//	var jsonObject =JSON.parse(response);	
				
				
			},
			error:function(){
				//alert("FundValue Error");
			
			}	
	  });
	 
}

function getfund(){
//	alert("fund");
	 $.ajax({
			type :'POST',
			url :'Limits',
			data : '',
			dataType: 'json',
			success:function(response){ 
				
			//	alert("response:::"+response);
				
			//	var jsonObject =JSON.parse(response);				
				
//				var FreecashvalueTagALL,MarginUsedvalueTagALL,PayInvalueALL,PayOutTagALL,AdhocMarginvalueALL,CollaterlValueALL,ExposureMarginvalueALL=null;
//			    var SpanMarginvalueALL,VarMarginvalueALL,PremiumPresentvalueALL,VarMarginvalueALL, TotalMarginValueTagALL =null;
//			    
//			    var FreecashvalueTagCOM,MarginUsedvalueTagCOM,PayInvalueCOM,PayOutTagCOM,AdhocMarginvalueCOM,CollaterlValueCOM,ExposureMarginvalueCOM=null;
//			    var SpanMarginvalueCOM,VarMarginvalueCOM,PremiumPresentvalueCOM,VarMarginvalueCOM, TotalMarginValueTagCOM =null;
//			    
//			    
//				var stat=null;
//				var body;
//			
//			    	  for (var i = 0; i <jsonObject.length; i++) {
//			    		  
//			    		     FreecashvalueTagALL=jsonObject[0].credits;			    		     
//				    		 MarginUsedvalueTagALL=jsonObject[0].Utilizedamount;				    		
//				    		 PayInvalueALL =jsonObject[0].PayinAmt;
//				    		 PayOutTagALL=  jsonObject[0].PayoutAmt;
//				    		 AdhocMarginvalueALL=jsonObject[0].Adhoc;
//				    		 CollaterlValueALL=  jsonObject[0].grossCollateral;
//				    		 ExposureMarginvalueALL= jsonObject[0].exposuremargin;
//				    		 SpanMarginvalueALL=  jsonObject[0].spanmargin;
//				    		 VarMarginvalueALL= jsonObject[0].varmargin;
//				    		 PremiumPresentvalueALL= jsonObject[0].premiumpresent;
//				    		 ExtremeLossMarginALL=jsonObject[0].elm;
//				    		 TotalMarginValueTagALL=Number(FreecashvalueTagALL)+Number(PayInvalueALL)+Number(AdhocMarginvalueALL)-Number(PayOutTagALL);
//				        
//				        	//this field we need to calculate ( TotalMargin=free cash + payin+adhoc-payout);
//				        	 
//				        	 FreecashvalueTagCOM=jsonObject[1].credits;				        	 
//				    		 MarginUsedvalueTagCOM=jsonObject[1].Utilizedamount;
//				    		 PayInvalueCOM =jsonObject[1].PayinAmt;
//				    		 PayOutTagCOM=  jsonObject[1].PayoutAmt;
//				    		 AdhocMarginvalueCOM=jsonObject[1].Adhoc;
//				    		 CollaterlValueCOM=  jsonObject[1].grossCollateral;
//				    		 ExposureMarginvalueCOM= jsonObject[1].exposuremargin;
//				    		 SpanMarginvalueCOM=  jsonObject[1].spanmargin;
//				    		 VarMarginvalueCOM= jsonObject[1].varmargin;
//				    		 PremiumPresentvalueCOM= jsonObject[1].premiumpresent;
//				    		 ExtremeLossMarginALL=jsonObject[0].elm;
//				        	 TotalMarginValueTagCOM=Number(FreecashvalueTagCOM)+Number(PayInvalueCOM)+Number(AdhocMarginvalueCOM)-Number(PayOutTagCOM); 
//				        	 
//				        	 
//				        	
//			    		   stat= jsonObject[0].stat;
//			    		  
//			    	  }
//			    		  
//			    	       if(stat==='Ok'){
//					        	var Freecash="Freecash";
//					        	 var MarginUsed="MarginUsed";
//					        	 var TotalMargin="TotalMargin";
//					        	 var PayIn="PayIn";
//					        	 var PayOut="PayOut";
//					        	 var AdhocMargin="AdhocMargin";
//					        	 var CollaterlValueTag="CollaterlValue";
//					        	 var ExposureMargin="ExposureMargin";
//					        	 var SpanMargin="SpanMargin";
//					        	 var VarMargin="VarMargin";
//					        	 var PremiumPresent="PremiumPresent";
//					        	 var ExtremeLossMargin="ExtremeLossMargin";
//				        
//				        	 
//				        	 body=body+"<tr>";				        	
//				        	 body=body+"<td>" +Freecash  + "</td>"+"<td>" +FreecashvalueTagALL  + "</td>"+"<td>" + FreecashvalueTagCOM + "</td>";	
//				        	 body=body+"</tr>";
//				        	 
//				        	 body=body+"<tr>";
//				        	 body=body+"<td>" + MarginUsed+"</td>"+"<td>" +MarginUsedvalueTagALL  + "</td>"+"<td>" + MarginUsedvalueTagCOM + "</td>";
//				        	 body=body+"</tr>";
//				        	 
//				        	 body=body+"<tr>"; 
//				        	 body=body+"<td>" + TotalMargin+"</td>"+"<td>" +TotalMarginValueTagALL  + "</td>"+"<td>" + TotalMarginValueTagCOM + "</td>";
//				        	 body=body+"</tr>";
//				        	 
//				        	 body=body+"<tr>";
//				        	 body=body+"<td>" + PayIn+"</td>"+"<td>" +PayInvalueALL  + "</td>"+"<td>" + PayInvalueCOM + "</td>";
//				        	 body=body+"</tr>";
//				        	 
//				        	 body=body+"<tr>";
//				        	 body=body+"<td>" + PayOut+"</td>"+"<td>" +PayOutTagALL + "</td>"+"<td>" + PayOutTagCOM + "</td>";
//				        	 body=body+"</tr>";
//				        	 
//				        	 body=body+"<tr>";
//				        	 body=body+"<td>" + AdhocMargin+" </td>"+"<td>" +AdhocMarginvalueALL  + "</td>"+"<td>" + AdhocMarginvalueCOM + "</td>";
//				        	 body=body+"</tr>";
//				        	 
//				        	 body=body+"<tr>";
//				        	 body=body+"<td>" + CollaterlValueTag+"</td>"+"<td>" +CollaterlValueALL  + "</td>"+"<td>" + CollaterlValueCOM + "</td>";
//				        	 body=body+"</tr>";
//				        	 
//				        	 body=body+"<tr>";
//				        	 body=body+"<td>" + ExposureMargin +"</td>"+"<td>" +ExposureMarginvalueALL  + "</td>"+"<td>" + ExposureMarginvalueCOM + "</td>";
//				        	 body=body+"</tr>";
//				        	 
//				        	 body=body+"<tr>";
//				        	 body=body+"<td>" + SpanMargin +"</td>"+"<td>" +SpanMarginvalueALL  + "</td>"+"<td>" + SpanMarginvalueCOM + "</td>";
//				        	 body=body+"</tr>";
//				        	 
//				        	 body=body+"<tr>";
//				        	 body=body+"<td>" + VarMargin +"</td>"+"<td>" +VarMarginvalueALL  + "</td>"+"<td>" + VarMarginvalueCOM + "</td>";
//				        	 body=body+"</tr>";
//				        	 
//				        	 body=body+"<tr>";
//				        	 body=body+"<td>" + PremiumPresent+"</td>"+"<td>" +PremiumPresentvalueALL  + "</td>"+"<td>" + PremiumPresentvalueCOM + "</td>";
//				        	 body=body+"</tr>";
//				        	 
//				        	 body=body+"<tr>";
//				        	 body=body+"<td>" + ExtremeLossMargin+"</td>"+"<td>" +VarMarginvalueALL  + "</td>"+"<td>" + VarMarginvalueCOM + "</td>";
//				        	 body=body+"</tr>";
//				        	 
//				        	 
//					         $('#FundsbodyId').html(body);
//					         $('#FundsinnerbodyId').hide();
//					         $('#FundsbodyId').show();
					        
//				        }
//			      else if(stat="Not_Ok"){
//			    	  $('#FundsinnerbodyId').show();
//			    	  $('#FundsbodyId').hide();
//			    	  
//			         }    
			},
			error:function(){
				//alert("FundValue Error");
			
			}	
	  });
}

function Fundsfunction(){
	
	var  Segmentcom=$("#fundcomId").val();
	var  Segmentall=$("#fundallId").val();
		
	$("#FundshideId").show();
	$("#FundsDivId").show();
	$("#FundsbodyId").show();
	
	//portfolio Div Details
	 $("#portfoliohideId").hide();
	 
	//OptionChain
	 	$("#OptionChainDivhideId").hide();
		$("#OptionChainDivcallId").hide();
		$("#OptionChainbodycallId").hide();
		$("#OptionChaininnerbodycallId").hide();
		
	 
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
	
	 
	
	 // OptioChain Div Detail	 
	 $("#OptionChainDivhideId").hide();
	 $("#OptionChainDivId").hide();
	$("#OptionChainbodyId").hide();
	$("#OptionChaininnerbodyId").hide();
	
	  $.ajax({
			type :'POST',
			url :'Funds',
			data : "Segmentcom="+Segmentcom+"&Segmentall="+Segmentall,
			dataType: 'json',
			success:function(response){ 
				
				var jsonObject =JSON.parse(response);				
				
				var FreecashvalueTagALL,MarginUsedvalueTagALL,PayInvalueALL,PayOutTagALL,AdhocMarginvalueALL,CollaterlValueALL,ExposureMarginvalueALL=null;
			    var SpanMarginvalueALL,VarMarginvalueALL,PremiumPresentvalueALL,VarMarginvalueALL, TotalMarginValueTagALL =null;
			    
			    var FreecashvalueTagCOM,MarginUsedvalueTagCOM,PayInvalueCOM,PayOutTagCOM,AdhocMarginvalueCOM,CollaterlValueCOM,ExposureMarginvalueCOM=null;
			    var SpanMarginvalueCOM,VarMarginvalueCOM,PremiumPresentvalueCOM,VarMarginvalueCOM, TotalMarginValueTagCOM =null;
			    
			    
				var stat=null;
				var body;
			
			    	  for (var i = 0; i <jsonObject.length; i++) {
			    		  
			    		     FreecashvalueTagALL=jsonObject[0].credits;			    		     
				    		 MarginUsedvalueTagALL=jsonObject[0].Utilizedamount;				    		
				    		 PayInvalueALL =jsonObject[0].PayinAmt;
				    		 PayOutTagALL=  jsonObject[0].PayoutAmt;
				    		 AdhocMarginvalueALL=jsonObject[0].Adhoc;
				    		 CollaterlValueALL=  jsonObject[0].grossCollateral;
				    		 ExposureMarginvalueALL= jsonObject[0].exposuremargin;
				    		 SpanMarginvalueALL=  jsonObject[0].spanmargin;
				    		 VarMarginvalueALL= jsonObject[0].varmargin;
				    		 PremiumPresentvalueALL= jsonObject[0].premiumpresent;
				    		 ExtremeLossMarginALL=jsonObject[0].elm;
				    		 TotalMarginValueTagALL=Number(FreecashvalueTagALL)+Number(PayInvalueALL)+Number(AdhocMarginvalueALL)-Number(PayOutTagALL);
				        
				        	//this field we need to calculate ( TotalMargin=free cash + payin+adhoc-payout);
				        	 
				        	 FreecashvalueTagCOM=jsonObject[1].credits;				        	 
				    		 MarginUsedvalueTagCOM=jsonObject[1].Utilizedamount;
				    		 PayInvalueCOM =jsonObject[1].PayinAmt;
				    		 PayOutTagCOM=  jsonObject[1].PayoutAmt;
				    		 AdhocMarginvalueCOM=jsonObject[1].Adhoc;
				    		 CollaterlValueCOM=  jsonObject[1].grossCollateral;
				    		 ExposureMarginvalueCOM= jsonObject[1].exposuremargin;
				    		 SpanMarginvalueCOM=  jsonObject[1].spanmargin;
				    		 VarMarginvalueCOM= jsonObject[1].varmargin;
				    		 PremiumPresentvalueCOM= jsonObject[1].premiumpresent;
				    		 ExtremeLossMarginALL=jsonObject[0].elm;
				        	 TotalMarginValueTagCOM=Number(FreecashvalueTagCOM)+Number(PayInvalueCOM)+Number(AdhocMarginvalueCOM)-Number(PayOutTagCOM); 
				        	 
				        	 
				        	
			    		   stat= jsonObject[0].stat;
			    		  
			    	  }
			    		  
			    	       if(stat==='Ok'){
					        	var Freecash="Freecash";
					        	 var MarginUsed="MarginUsed";
					        	 var TotalMargin="TotalMargin";
					        	 var PayIn="PayIn";
					        	 var PayOut="PayOut";
					        	 var AdhocMargin="AdhocMargin";
					        	 var CollaterlValueTag="CollaterlValue";
					        	 var ExposureMargin="ExposureMargin";
					        	 var SpanMargin="SpanMargin";
					        	 var VarMargin="VarMargin";
					        	 var PremiumPresent="PremiumPresent";
					        	 var ExtremeLossMargin="ExtremeLossMargin";
				        
				        	 
				        	 body=body+"<tr>";				        	
				        	 body=body+"<td>" +Freecash  + "</td>"+"<td>" +FreecashvalueTagALL  + "</td>"+"<td>" + FreecashvalueTagCOM + "</td>";	
				        	 body=body+"</tr>";
				        	 
				        	 body=body+"<tr>";
				        	 body=body+"<td>" + MarginUsed+"</td>"+"<td>" +MarginUsedvalueTagALL  + "</td>"+"<td>" + MarginUsedvalueTagCOM + "</td>";
				        	 body=body+"</tr>";
				        	 
				        	 body=body+"<tr>"; 
				        	 body=body+"<td>" + TotalMargin+"</td>"+"<td>" +TotalMarginValueTagALL  + "</td>"+"<td>" + TotalMarginValueTagCOM + "</td>";
				        	 body=body+"</tr>";
				        	 
				        	 body=body+"<tr>";
				        	 body=body+"<td>" + PayIn+"</td>"+"<td>" +PayInvalueALL  + "</td>"+"<td>" + PayInvalueCOM + "</td>";
				        	 body=body+"</tr>";
				        	 
				        	 body=body+"<tr>";
				        	 body=body+"<td>" + PayOut+"</td>"+"<td>" +PayOutTagALL + "</td>"+"<td>" + PayOutTagCOM + "</td>";
				        	 body=body+"</tr>";
				        	 
				        	 body=body+"<tr>";
				        	 body=body+"<td>" + AdhocMargin+" </td>"+"<td>" +AdhocMarginvalueALL  + "</td>"+"<td>" + AdhocMarginvalueCOM + "</td>";
				        	 body=body+"</tr>";
				        	 
				        	 body=body+"<tr>";
				        	 body=body+"<td>" + CollaterlValueTag+"</td>"+"<td>" +CollaterlValueALL  + "</td>"+"<td>" + CollaterlValueCOM + "</td>";
				        	 body=body+"</tr>";
				        	 
				        	 body=body+"<tr>";
				        	 body=body+"<td>" + ExposureMargin +"</td>"+"<td>" +ExposureMarginvalueALL  + "</td>"+"<td>" + ExposureMarginvalueCOM + "</td>";
				        	 body=body+"</tr>";
				        	 
				        	 body=body+"<tr>";
				        	 body=body+"<td>" + SpanMargin +"</td>"+"<td>" +SpanMarginvalueALL  + "</td>"+"<td>" + SpanMarginvalueCOM + "</td>";
				        	 body=body+"</tr>";
				        	 
				        	 body=body+"<tr>";
				        	 body=body+"<td>" + VarMargin +"</td>"+"<td>" +VarMarginvalueALL  + "</td>"+"<td>" + VarMarginvalueCOM + "</td>";
				        	 body=body+"</tr>";
				        	 
				        	 body=body+"<tr>";
				        	 body=body+"<td>" + PremiumPresent+"</td>"+"<td>" +PremiumPresentvalueALL  + "</td>"+"<td>" + PremiumPresentvalueCOM + "</td>";
				        	 body=body+"</tr>";
				        	 
				        	 body=body+"<tr>";
				        	 body=body+"<td>" + ExtremeLossMargin+"</td>"+"<td>" +VarMarginvalueALL  + "</td>"+"<td>" + VarMarginvalueCOM + "</td>";
				        	 body=body+"</tr>";
				        	 
				        	 
					         $('#FundsbodyId').html(body);
					         $('#FundsinnerbodyId').hide();
					         $('#FundsbodyId').show();
					        
				        }
			      else if(stat="Not_Ok"){
			    	  $('#FundsinnerbodyId').show();
			    	  $('#FundsbodyId').hide();
			    	  
			         }    
			},
			error:function(){
				//alert("FundValue Error");
			
			}	
	  });	
	 
}

var popups = new Array();


function PayoutFundfun(){
	
	var Key="PAYOUT";
	

	$.ajax({
		type :'POST',
		url :'PayoutLink',
		data : "Key="+Key,
		dataType: 'json',
		success:function(response){ 
			
			var left = (screen.width/2)-400;
	        var popUp1=window.open(response,'_blank','height=800,width=800,left='+left+',location=1,status=1,scrollbars=1, resizable=1, directories=1, toolbar=1, titlebar=1');
	        popups.push(popUp1); 

	
    },
	error:function(){
		//alert("PayoutLink Error");
	
	}	
});	
}



function PayinFundfun(){
	
	var Key="PAYIN";
	

	$.ajax({
		type :'POST',
		url :'PayinLink',
		data : "Key="+Key,
		dataType: 'json',
		success:function(response){ 
			var left = (screen.width/2)-400;
			var popUp2=window.open(response,'_blank','height=800,width=800,left='+left+',location=1,status=1,scrollbars=1, resizable=1, directories=1, toolbar=1, titlebar=1');
			popups.push(popUp2); 
	

	},
	error:function(){
		//alert("PayinLink Error");
	
	}	
});	
}


function destroyPopUps()
{
     
      
        if(popups.length == 0) return;
        
        for(i=0; i<popups.length; i++)
        {
            popups[i].close();
        }
}
