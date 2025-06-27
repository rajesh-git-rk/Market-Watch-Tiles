
function FundsClickfunction(){
	
	
	$("#FundsDivId").show();
	$("#PortfolioDivId").hide();
	$("#OrderId").hide();
	$("#dashboardId").hide();
	$("#loadGraphId").hide();
	$("#AccountId").hide();
	$("#AlertsDivId").hide();
	getFunds();
}


function getFunds(){
	
	 //alert("fund function");
	 $.ajax({
			type :'POST',
			url :'fundsLimitsAll',
			dataType: 'json',
			success:function(jsonObject){ 
				
				//alert("response:::"+jsonObject);
				
                var marginused=jsonObject.marginused==undefined?0.00:jsonObject.marginused;;
				var openingBalance=jsonObject.cash==undefined?0.00:jsonObject.cash;
				var payin=jsonObject.payin==undefined?0.00:jsonObject.payin;
				var payout=jsonObject.payout==undefined?0.00:jsonObject.payout;
				var brokerage=jsonObject.brokerage==undefined?0.00:jsonObject.brokerage;
				var span=jsonObject.span;
				var exposureMargin=jsonObject.expo;
				var collateral=jsonObject.collateral;
				var varMargin=jsonObject.varelm;
				var adhocMargin=jsonObject.daycash;
				var premium=jsonObject.premium;
				var availableBalance=Number(openingBalance)+Number(payin)-Number(payout)-Number(brokerage)-Number(marginused);
				
				document.getElementById('fund_price').innerHTML="&#x20B9; "+availableBalance;	
				document.getElementById('cash_Margin_A').innerHTML=openingBalance==undefined?"&#x20B9; 0.00":"&#x20B9; "+openingBalance;
				document.getElementById('margin_Used_A').innerHTML= marginused==undefined?"&#x20B9; 0.00":"&#x20B9; "+marginused;
				document.getElementById('total_Margin_A').innerHTML=marginused==undefined?"&#x20B9; 0.00":"&#x20B9; "+marginused;
				document.getElementById('adhoc_Margin_A').innerHTML=adhocMargin==undefined?"&#x20B9; 0.00":"&#x20B9; "+adhocMargin;
				document.getElementById('SPAN_A').innerHTML= span==undefined?"&#x20B9; 0.00":"&#x20B9; "+span;
				document.getElementById('pay_In_A').innerHTML=payin==undefined?"&#x20B9; 0.00":"&#x20B9; "+payin;
				document.getElementById('pay_Out_A').innerHTML= payout==undefined?"&#x20B9; 0.00":"&#x20B9; "+payout;
				document.getElementById('collateral_A').innerHTML=collateral==undefined?"&#x20B9; 0.00":"&#x20B9; "+collateral;
				document.getElementById('exposure_Margin_A').innerHTML=exposureMargin==undefined?"&#x20B9; 0.00":"&#x20B9; "+exposureMargin;
				document.getElementById('var_Margin_A').innerHTML=varMargin==undefined?"&#x20B9; 0.00":"&#x20B9; "+varMargin;
				document.getElementById('premium_Present_A').innerHTML=premium==undefined?"&#x20B9; 0.00":"&#x20B9; "+premium;
				
					
			},
			error:function(){
				//alert("FundValue Error");
			
			}	
	  });
	 
	 $.ajax({
			type :'POST',
			url :'fundsLimitsCOM',
			dataType: 'json',
			success:function(jsonObject){ 
				
				//alert("response:::"+jsonObject);
				
			//	var jsonObject =JSON.parse(response);	
				
				 var marginused=jsonObject.marginused==undefined?0.00:jsonObject.marginused;;
					var openingBalance=jsonObject.cash==undefined?0.00:jsonObject.cash;
					var payin=jsonObject.payin==undefined?0.00:jsonObject.payin;
					var payout=jsonObject.payout==undefined?0.00:jsonObject.payout;
					var brokerage=jsonObject.brokerage==undefined?0.00:jsonObject.brokerage;
					var span=jsonObject.span;
					var exposureMargin=jsonObject.expo;
					var collateral=jsonObject.collateral;
					var varMargin=jsonObject.varelm;
					var adhocMargin=jsonObject.daycash;
					var premium=jsonObject.premium;
					var availableBalance=Number(openingBalance)+Number(payin)-Number(payout)-Number(brokerage)-Number(marginused);
					 
					document.getElementById('fund_price_C').innerHTML="&#x20B9; "+availableBalance;	
					document.getElementById('cash_Margin_C').innerHTML=openingBalance==undefined?"&#x20B9; 0.00":"&#x20B9; "+openingBalance;
					document.getElementById('margin_Used_C').innerHTML= marginused==undefined?"&#x20B9; 0.00":"&#x20B9; "+marginused;
					document.getElementById('total_Margin_C').innerHTML=marginused==undefined?"&#x20B9; 0.00":"&#x20B9; "+marginused;;
					document.getElementById('adhoc_Margin_C').innerHTML=adhocMargin==undefined?"&#x20B9; 0.00":"&#x20B9; "+adhocMargin;;
					document.getElementById('SPAN_C').innerHTML= span==undefined?"&#x20B9; 0.00":"&#x20B9; "+span;;
					document.getElementById('pay_In_C').innerHTML=payin==undefined?"&#x20B9; 0.00":"&#x20B9; "+payin;;
					document.getElementById('pay_Out_C').innerHTML= payout==undefined?"&#x20B9; 0.00":"&#x20B9; "+payout;;
					document.getElementById('collateral_C').innerHTML=collateral==undefined?"&#x20B9; 0.00":"&#x20B9; "+collateral;;
					document.getElementById('exposure_Margin_C').innerHTML=exposureMargin==undefined?"&#x20B9; 0.00":"&#x20B9; "+exposureMargin;;
					document.getElementById('var_Margin_C').innerHTML=varMargin==undefined?"&#x20B9; 0.00":"&#x20B9; "+varMargin;;
					document.getElementById('premium_Present_C').innerHTML=premium==undefined?"&#x20B9; 0.00":"&#x20B9; "+premium;;
			
				 
			},
			error:function(){
				//alert("FundValue Error");

			}	
	  });
}


var popups = new Array();


function payoutLinkKambala(){
	
	var Key="PAYOUT";
	

	$.ajax({
		type :'POST',
		url :'payoutLinkKambala',
		//data : "Key="+Key,
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



function payinLinkKambala(){
	
	var Key="PAYIN";
	

	$.ajax({
		type :'POST',
		url :'payinLinkKambala',
		//data : "Key="+Key,
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
