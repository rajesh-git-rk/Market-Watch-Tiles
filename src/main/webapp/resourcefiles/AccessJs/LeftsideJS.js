//var sideSearchData ;
//= [
//    { group: "equity", value: "HDFC BANK", type: "NSE 26 SEPT 21 FUT",token:"1000", expdate:""},
//    { group: "equity", value: "Bank Nifty", type: "NSE 26 NOV 21 FUT"},
//    { group: "equity", value: "Bank Nifty", type: "NSE 26 NOV 21 FUT"},
//    { group: "fo", value: "Bank Nifty", type: "NSE 26 SEPT 21 FUT"},
//    { group: "fo", value: "Bank Nifty", type: "NSE 26 OCT 21 FUT"},
//    { group: "fo", value: "Bank Nifty", type: "NSE 26 NOV 21 FUT"},
//    { group: "fo", value: "Bank Nifty", type: "NSE 26 OCT 21 FUT"},
//    { group: "fo", value: "Bank Nifty", type: "NSE 26 SEPT 21 FUT"},
//    { group: "commodity", value: "Bank Nifty", type: "NSE 26 DEC 21 FUT"},
//    { group: "commodity", value: "Bank Nifty", type: "NSE 26 SEPT 21 FUT"},
//    { group: "commodity", value: "Bank Nifty", type: "NSE 26 SEPT 21 FUT"},
//    { group: "commodity", value: "Bank Nifty", type: "NSE 26 OCT 21 FUT"},
//    { group: "currency", value: "Bank Nifty", type: "NSE 26 DEC 21 FUT"},
//    { group: "currency", value: "Bank Nifty", type: "NSE 26 JAN 21 FUT"},
//];



 
 
 
var sideSearchData=[];

//var searchBodyArray = new Array();
//var tokenId;

//var tokenArray = new Array();


$(document).ready(function(){

	recentOrderFuntion();
    alertDisplay();
    
    getOrderNotification();
    fundsDashboard();
    getAlert();
    piechartCheckboxOnChange();
    
    OrdersDashboard();

	getMarketwatchList();
	//functionOrder();
	
    openOrderFuntion();
	
	PinTickerPrevioueLoadFunction();

	$('.search_bx input[type=search]').on("search", function (e) {
		 // alert(`You clicked the 'x'. Input value: "${e.target.value}"`);
		  sideSearchData = [];
		    updatewatchlist(sideSearchData);
		    $('#sideSearchDropdown1').removeClass('show');
		});

	$("#search").keydown(function (e) {
		    if(e.key == "Enter") {
		    //alert(`Enter pressed, input value: "${ev.target.value}"`);
		        e.preventDefault();
		    }
		});

	$("#search").keyup(function (e) {
		
	var searchTerm = document.getElementById("search").value;
			
			  if(searchTerm.length >0){
				  
	   
	   $.ajax({
		type :'Get',
		url :'indexAdd',
		data :"searchTerm=" +encodeURIComponent(searchTerm),
		dataType: 'json',
		success:function(jsonObject){

		//	alert("response:::"+jsonObject);
			// var jsonObject =JSON.parse(response);

		    var body;

		    sideSearchData=[];
		    
		    var hiddenval="";
		    var htmlval="";

		        for (var i = 0; i <jsonObject.length; i++) {
		        	 var obj = new Object();
		        	 
		        		const monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
						 
		        	 
		 	        if(jsonObject[i].nseToken !=null){
		 	        	var nseobj = new Object();
		 	        	
		 	        	nseobj.nseToken=jsonObject[i].nseToken;
		 	        	nseobj.nseSymbol=jsonObject[i].nseSymbol;
		 	        	nseobj.nseSeries=jsonObject[i].nseSeries;
		 	        	nseobj.nseInstrumentType=jsonObject[i].nseInstrumentType;
		 	        	nseobj.nseIssuedCapital=jsonObject[i].nseIssuedCapital;
		 	        	nseobj.nseCreditRating=jsonObject[i].nseCreditRating;
		 	        	nseobj.nseBoardLotQuantity=jsonObject[i].nseBoardLotQuantity;
		 	        	nseobj.nseTickSize=jsonObject[i].nseTickSize;
		 	        	nseobj.nseName=jsonObject[i].nseName;
		 	        	nseobj.nseIssueStartDate=jsonObject[i].nseIssueStartDate;
		 	        	nseobj.nseIssueIPDate=jsonObject[i].nseIssueIPDate;
		 	        	nseobj.nseIssueMaturityDate=jsonObject[i].nseIssueMaturityDate;
		 	        	nseobj.nseFreezePercent=jsonObject[i].nseFreezePercent;
		 	        	nseobj.nseListingDate=jsonObject[i].nseListingDate;
		 	        	nseobj.nseExpulsionDate=jsonObject[i].nseExpulsionDate;
		 	        	nseobj.nseReAdmissionDate=jsonObject[i].nseReAdmissionDate;
		 	        	nseobj.nseExDate=jsonObject[i].nseExDate;
		 	        	nseobj.nseRecordDate=jsonObject[i].nseRecordDate;
		 	        	nseobj.nseFaceValue=jsonObject[i].nseFaceValue;
		 	        	nseobj.nseISINNo=jsonObject[i].nseISINNo;
		 	        	nseobj.nseExchange=jsonObject[i].nseExchange;
		 	            
		 	        	
		 	        	
		 	        	 var searchdisplayName=nseobj.nseSeries+" "+nseobj.nseExchange; 
     	                   obj.value = nseobj.nseSymbol;
				            obj.type = searchdisplayName;
				            obj.tokens =nseobj.nseToken;
				            

				            obj.exch =nseobj.nseExchange;
				            
				            if(nseobj.nseSeries=="EQ"){
				            	obj.group = "equity";
				            }else{
				            	obj.group = "all";
				            }
				            	        	             
		        	             
						            	
						            	
						 hiddenval=searchdisplayName+","+nseobj.nseToken+","+nseobj.nseExchange+","+nseobj.nseSymbol+","+nseobj.nseSeries+","+nseobj.nseInstrumentType+","+nseobj.nseIssuedCapital+","+nseobj.nseCreditRating+","+nseobj.nseBoardLotQuantity+","+nseobj.nseTickSize+","+nseobj.nseIssueStartDate+","+nseobj.nseIssueIPDate+","+nseobj.nseIssueMaturityDate+","+nseobj.nseFreezePercent+","+nseobj.nseListingDate+","+nseobj.nseExpulsionDate+","+nseobj.nseReAdmissionDate+","+nseobj.nseExDate+","+nseobj.nseRecordDate+","+nseobj.nseFaceValue+","+nseobj.nseISINNo+","+nseobj.nseName;

		        	             
		 	        } else if(jsonObject[i].nfoToken !=null){
		 	       
		 	        	var nfoobj = new Object();
		 	        	
				        nfoobj.nfoToken=jsonObject[i].nfoToken;
				        nfoobj.nfoinstrument_name=jsonObject[i].nfoinstrument_name;
				        nfoobj.nfoSymbol=jsonObject[i].nfoSymbol;
				        nfoobj.nfoSeries=jsonObject[i].nfoSeries;
				        nfoobj.nfoexpiry_date=jsonObject[i].nfoexpiry_date;
				        nfoobj.nfostrike_price=jsonObject[i].nfostrike_price;
				        nfoobj.nfooption_type=jsonObject[i].nfooption_type;
				        nfoobj.nfoissue_infostart_date=jsonObject[i].nfoissue_infostart_date;
				        nfoobj.nfoissue_infomaturity_date=jsonObject[i].nfoissue_infomaturity_date;
				        nfoobj.nfoboard_lot_quantity=jsonObject[i].nfoboard_lot_quantity;
				        nfoobj.nfoStockname=jsonObject[i].nfoStockname;
				        nfoobj.nfoExchange=jsonObject[i].nfoExchange;
				        nfoobj.nfominspread=jsonObject[i].nfominspread;
				        
				        
				        var DecimalnfoStrikePrice=nfoobj.nfostrike_price/100;
//						
//						
//						var DecimalnfoStrikePrice= num.toFixed(2);
//						
//						DecimalnfoStrikePrice=(Math.round(DecimalnfoStrikePrice * 100) / 100)
			            


			            var displayName;
		 	                  	var myDate = new Date(nfoobj.nfoexpiry_date);
		 	       	         //   if(nfoobj.nfoinstrument_name=="FUTIDX" || nfoobj.nfoinstrument_name=="FUTSTK" ){
		 	                   if(nfoobj.nfooption_type=="XX"){
		 	       	            displayName=myDate.getDate() +monthNames[myDate.getMonth()]+" "+"FUT"+" "+nfoobj.nfoExchange;
		 	       	            }else{
		 	       	            displayName=myDate.getDate() +monthNames[myDate.getMonth()]+" "+DecimalnfoStrikePrice+" "+nfoobj.nfooption_type+" "+nfoobj.nfoExchange;
		 	       	            }
		 	       	        obj.value = nfoobj.nfoSymbol;
				           
				           	obj.group = "fo"; 
				           	obj.type= displayName;
				           	
				           	obj.tokens =nfoobj.nfoToken;
				           	obj.exch =nfoobj.nfoExchange;
					   //	nfodeleteScript(jsonObject[i].properties.nfoToken);


				           hiddenval=displayName+","+nfoobj.nfoToken+","+nfoobj.nfoExchange+","+nfoobj.nfoinstrument_name+","+nfoobj.nfoSeries+","+nfoobj.nfoexpiry_date+","+nfoobj.nfostrike_price+","+nfoobj.nfooption_type+","+nfoobj.nfoissue_infostart_date+","+nfoobj.nfoissue_infomaturity_date+","+nfoobj.nfoboard_lot_quantity+","+nfoobj.nfoStockname+","+nfoobj.nfoSymbol+","+nfoobj.nfominspread;
				           
   	
			        }	            
		            
		 	        else if(jsonObject[i].mcxInstrumentIdentifier !=null){
		            	
		            	var mcxobj = new Object();
		            
		            	mcxobj.mcxInstrumentIdentifier=jsonObject[i].mcxInstrumentIdentifier;
		            	mcxobj.mcxInstrumentCode=jsonObject[i].mcxInstrumentCode;
		            	mcxobj.mcxInstrumentSeries=jsonObject[i].mcxInstrumentSeries;
		            	mcxobj.mcxProductStartDate=jsonObject[i].mcxProductStartDate;
		            	mcxobj.mcxLastTradingDate=jsonObject[i].mcxLastTradingDate;
		            	mcxobj.mcxLotSize=jsonObject[i].mcxLotSize;
		            	mcxobj.mcxTickSize=jsonObject[i].mcxTickSize;
		            	mcxobj.mcxDeliveryStartDate=jsonObject[i].mcxDeliveryStartDate;
		            	mcxobj.mcxDeliveryEndDate=jsonObject[i].mcxDeliveryEndDate;
		            	mcxobj.mcxLastModifiedDate=jsonObject[i].mcxLastModifiedDate;
		            	mcxobj.mcxInstrumentInfo=jsonObject[i].mcxInstrumentInfo;
		            	mcxobj.mcxTenderPeriodStartDate=jsonObject[i].mcxTenderPeriodStartDate;
		            	mcxobj.mcxTenderPeriodStartDate=jsonObject[i].mcxTenderPeriodEndDate;
		            	mcxobj.mcxNameUnderlyingAsset=jsonObject[i].mcxNameUnderlyingAsset;
		            	mcxobj.mcxInstrumentName=jsonObject[i].mcxInstrumentName;
		            	mcxobj.mcxOriginalExpiryDate=jsonObject[i].mcxOriginalExpiryDate;
		            	mcxobj.mcxStrikePrice=jsonObject[i].mcxStrikePrice;
		            	mcxobj.mcxOptionType=jsonObject[i].mcxOptionType;
		            	mcxobj.mcxExchange=jsonObject[i].mcxExchange;
		            	
		            	 var DecimalmcxStrikePrice=mcxobj.mcxStrikePrice/100;
//							
//							
//							var DecimalmcxStrikePrice= num.toFixed(2);
//							
//							DecimalmcxStrikePrice=(Math.round(DecimalmcxStrikePrice * 100) / 100)
		        		
		            	//alert("mcx strprc :"+mcxobj.mcxStrikePrice);
	        		var myDate = new Date(mcxobj.mcxOriginalExpiryDate);
					
	        		var displayName;

					if(mcxobj.mcxOptionType=="XX"){
						displayName=myDate.getDate() +monthNames[myDate.getMonth()]+" "+"FUT"+" "+mcxobj.mcxExchange;
					}else{

						displayName=myDate.getDate() +monthNames[myDate.getMonth()]+" "+DecimalmcxStrikePrice+" "+mcxobj.mcxOptionType+" "+mcxobj.mcxExchange;
					}
					
					obj.type=displayName;
					obj.value = mcxobj.mcxInstrumentCode;
		            
		            //if(mcxInstrumentSeries=="XX"){
		            	obj.group = "commodity";
		            //}
		            	
		            	obj.tokens =mcxobj.mcxInstrumentIdentifier;
		            	
		            	obj.exch =mcxobj.mcxExchange;


		            	hiddenval=displayName+","+mcxobj.mcxInstrumentIdentifier+","+mcxobj.mcxExchange+","+mcxobj.mcxInstrumentCode+","+mcxobj.mcxInstrumentSeries+","+mcxobj.mcxProductStartDate+","+mcxobj.mcxLastTradingDate+","+mcxobj.mcxLotSize+","+mcxobj.mcxTickSize+","+mcxobj.mcxDeliveryStartDate+","+mcxobj.mcxDeliveryEndDate+","+mcxobj.mcxLastModifiedDate+","+mcxobj.mcxInstrumentInfo+","+mcxobj.mcxTenderPeriodStartDate+","+mcxobj.mcxTenderPeriodEndDate+","+mcxobj.mcxInstrumentName+","+mcxobj.mcxOriginalExpiryDate+","+mcxobj.mcxStrikePrice+","+mcxobj.mcxOptionType+","+mcxobj.mcxInstrumentCode;
		            		
		            	
		          }
		        		
		     htmlval=htmlval+"<input type='hidden' name='token' id='token_"+obj.tokens+"'  value='"+hiddenval+"' />";

			    document.getElementById("searchhiddenval").innerHTML = htmlval;
			    obj.flag =true; 
		 		for(var j=0;j<searchBodyArray.length;j++){
	         		if(searchBodyArray[j]==obj.tokens){
	         			obj.flag =false; 
	 				    break; 
	         		}
		 		}
		            
	        	sideSearchData.push(obj);
		        } //for loop end
		        
		        
		        
		       updatewatchlist(sideSearchData);
		        //bindSearchSideMenuData(sideSearchData, '#sideSearchDropdown1');
		        //$('.side-search-dropdown .group-category li').click();
		},
		error:function(){
			//alert("RedisSearch Error");		
		}	
	}); 
	   
	   
	    }else{
	
		}	

	});
	
	
});








	  function getActiveMarketWatchId() {
			var getstatus =document.getElementsByClassName('btn active');
			
			var data = [].map.call(getstatus, elem => elem.textContent);

			if (data == '1') {
			
			marketwatchid=document.getElementById("marketwatchname1").value;
			
			}else if (data == '2') {
			
			marketwatchid=document.getElementById("marketwatchname2").value;
			
			}else if (data == '3') {
				
			marketwatchid=document.getElementById("marketwatchname3").value;
			
			}else if (data == '4') {
				
			marketwatchid=document.getElementById("marketwatchname4").value;
			
			}else if (data == '5') {
				
			marketwatchid=document.getElementById("marketwatchname5").value;
			
			}

			return marketwatchid;
			
			}

		  function searchAddScript(tokendata,exch){
				
				// alert("exch:::"+exch);
			  
			

			 tokenArray.push(tokendata);
			     
				var marketwatchid="";
				var tokenval = document.getElementById('token_'+tokendata).value;
				
				
				marketwatchid = getActiveMarketWatchId();
		// alert("marketwatchid:::"+marketwatchid);
				
				var scripsplit;
				  
				  var scriptname;
				  var token;
				  var exchange;
				
				if(exch =="NSE"){
				
				scripsplit= tokenval.split(",");
				  
				scriptname=scripsplit[0];
				token=scripsplit[1];
				exchange=scripsplit[2];
				  
				  
				  var nseSymbol=scripsplit[3];
				  var nseSeries=scripsplit[4];
				  var nseInstrumentType=scripsplit[5];
				  var nseIssuedCapital=scripsplit[6];
				  var nseCreditRating=scripsplit[7];
				  var nseBoardLotQuantity=scripsplit[8];
				  var nseTickSize=scripsplit[9];
				  var nseIssueStartDate=scripsplit[10];
				  var nseIssueIPDate=scripsplit[11];
				  var nseIssueMaturityDate=scripsplit[12];
				  var nseFreezePercent=scripsplit[13];
				  var nseListingDate=scripsplit[14];
				  var nseExpulsionDate=scripsplit[15];
				  var nseReAdmissionDate=scripsplit[16];
				  var nseExDate=scripsplit[17];
				  var nseRecordDate=scripsplit[18];
				  var nseFaceValue=scripsplit[19];
				  var nseISINNo=scripsplit[20];
				  var displayname=scripsplit[21];
				  
				// alert("displayname:::"+displayname+"nseISINNo::::"+nseISINNo);
				  

				addScriptNse(marketwatchid,scriptname,token,exchange,nseSymbol,nseSeries,nseInstrumentType,nseIssuedCapital,nseCreditRating,nseBoardLotQuantity,
						nseTickSize,nseIssueStartDate,nseIssueIPDate,nseIssueMaturityDate,nseFreezePercent,nseListingDate,nseExpulsionDate,nseReAdmissionDate,nseExDate,nseRecordDate,nseFaceValue,nseISINNo,displayname);
				
				
				
				}
				
				else if(exch =="NFO"){
					
					scripsplit= tokenval.split(",");
					  
					scriptname=scripsplit[0];
					token=scripsplit[1];
					exchange=scripsplit[2];
					  
					  
					  var nfoinstrument_name=scripsplit[3];
					  var nfoSeries=scripsplit[4];
					  var nfoexpiry_date=scripsplit[5];
					  var nfostrike_price=scripsplit[6];
					  var nfooption_type=scripsplit[7];
					  var nfoissue_infostart_date=scripsplit[8];
					  var nfoissue_infomaturity_date=scripsplit[9];
					  var nfoboard_lot_quantity=scripsplit[10];
					  var nfoStockname=scripsplit[11];
					  var displayname=scripsplit[12];
					  var nfospreadmin=scripsplit[13];

					  
					// alert("displayname:::"+displayname+"exchange::::"+exchange);
					  

					  addScriptNfo(marketwatchid,scriptname,token,exchange,nfoinstrument_name,nfoSeries,nfoexpiry_date,
								nfostrike_price,nfooption_type,nfoissue_infostart_date,nfoissue_infomaturity_date,nfoboard_lot_quantity,nfoStockname,displayname,nfospreadmin);
					}
				
				
				else if(exch =="MCX"){
					
					scripsplit= tokenval.split(",");
					  
					scriptname=scripsplit[0];
					token=scripsplit[1];
					exchange=scripsplit[2];
					  
					  
					  var mcxInstrumentCode=scripsplit[3];
					  var mcxInstrumentSeries=scripsplit[4];
					  var mcxProductStartDate=scripsplit[5];
					  var mcxLastTradingDate=scripsplit[6];
					  var mcxLotSize=scripsplit[7];
					  var mcxTickSize=scripsplit[8];
					  var mcxDeliveryStartDate=scripsplit[9];
					  var mcxDeliveryEndDate=scripsplit[10];
					  var mcxLastModifiedDate=scripsplit[11];
					  var mcxInstrumentInfo=scripsplit[12];
					  var mcxTenderPeriodStartDate=scripsplit[13];
					  var mcxTenderPeriodEndDate=scripsplit[14];
					  var mcxInstrumentName=scripsplit[15];
					  var mcxOriginalExpiryDate=scripsplit[16];
					  var mcxStrikePrice=scripsplit[17];
					  var mcxOptionType=scripsplit[18];
					  var displayname=scripsplit[19];

					  
					// alert("displayname:::"+displayname+"exchange::::"+exchange);
					  

					  addScriptMcx(marketwatchid,scriptname,token,exchange,mcxInstrumentCode,mcxInstrumentSeries,mcxProductStartDate,mcxLastTradingDate,mcxLotSize,
								mcxTickSize,mcxDeliveryStartDate,mcxDeliveryEndDate,mcxLastModifiedDate,mcxInstrumentInfo,mcxTenderPeriodStartDate,mcxTenderPeriodEndDate,
								mcxInstrumentName,mcxOriginalExpiryDate,mcxStrikePrice,mcxOptionType,displayname);
				}
				
				 var topic = tokendata;
			     var qos = 1;

				 client.subscribe(topic.toString(),{qos: qos});	
				
				
			}





			function updatewatchlist(sideSearchData) {
			    var groupName = $('.group-category').find('li.active').attr('data-group');
			   // $('.side-search-dropdown .group-category li').removeClass('active');
			    // $(this).addClass('active');
			    // console.log('---------', filterByGroup, groupName);
			  // alert(groupName);
			    if (groupName === 'all' ) {
			      bindSearchSideMenuData(sideSearchData, '#sideSearchDropdown1');  
			    } else {
			      var filterByGroup = _.filter(sideSearchData, function(i) {
			        return i.group === groupName
			      });
			      bindSearchSideMenuData(filterByGroup, '#sideSearchDropdown1');
			    }
			   // e.stopPropagation();
			  }




			function addScriptNse(marketwatchid,scriptname,token,exchange,nseSymbol,nseSeries,nseInstrumentType,nseIssuedCapital,nseCreditRating,nseBoardLotQuantity,
					nseTickSize,nseIssueStartDate,nseIssueIPDate,nseIssueMaturityDate,nseFreezePercent,nseListingDate,nseExpulsionDate,nseReAdmissionDate,nseExDate,nseRecordDate,nseFaceValue,nseISINNo,displayname){

				

				  $.ajax({
						type :'POST',
						url :'addScriptNse',
						data :'Token='+token+"&Marketwatchid="+marketwatchid+"&Exchange="+exchange+"&Scriptname="+encodeURIComponent(scriptname)+"&NseSymbol="+nseSymbol+"&NseSeries="+nseSeries+"&NseInstrumentType="+nseInstrumentType+
						"&NseIssuedCapital="+nseIssuedCapital+"&NseCreditRating="+nseCreditRating+"&NseBoardLotQuantity="+nseBoardLotQuantity+"&NseTickSize="+nseTickSize+"&NseIssueStartDate="+nseIssueStartDate+"&NseIssueIPDate="+nseIssueIPDate+"&NseIssueMaturityDate="+nseIssueMaturityDate+
						"&NseFreezePercent="+nseFreezePercent+"&NseListingDate="+nseListingDate+"&NseExpulsionDate="+nseExpulsionDate+"&NseReAdmissionDate="+nseReAdmissionDate+"&NseExDate="+nseExDate+
						"&NseRecordDate="+nseRecordDate+"&NseFaceValue="+nseFaceValue+"&NseISINNo="+nseISINNo+"&Displayname="+displayname,
						dataType: 'json',
						success:function(jsonObject){
						     
			                // var jsonObject =JSON.parse(response);
							
							// alert("jsonObject:::"+jsonObject);
							
						//	var searchListHtml = '';
							
							for (var i = 0; i <sideSearchData.length; i++) {
								if(token == sideSearchData[i].tokens) {
									
								//	alert("sideSearchData[i]:B::"+sideSearchData[i].flag);
								//	alert("ok");
									sideSearchData[i].flag = false;	
									
									
//									 var deleteclickCode = 'onclick ="searchDeleteScript('+sideSearchData[i].tokens+',\'' + sideSearchData[i].exch + '\');"';
//									
//									 searchListHtml = searchListHtml + '<li data-group="'+ sideSearchData[i].group +'" '+deleteclickCode+'><div class="sList-content"><h5>'+ sideSearchData[i].value +'</h5><p>'+ sideSearchData[i].type +'</p></div><div class="icon-select"><i class="bi bi-check2"></i></div></li>';
//									
//									alert("sideSearchData[i]:A::"+sideSearchData[i].flag);							
									
									break;
								}
							}
							
					//		$('#sideSearchDropdown1').find('.search-list').html(searchListHtml);
							
						// updatewatchlist(sideSearchData);
							
							 getMarketwatchListById(marketwatchid);

					         
						},
						error:function(){
						// alert("AddScript Error");
							
						
						}	
					});

				  
				
			}

			function addScriptNfo(marketwatchid,scriptname,token,exchange,nfoinstrument_name,nfoSeries,nfoexpiry_date,
					nfostrike_price,nfooption_type,nfoissue_infostart_date,nfoissue_infomaturity_date,nfoboard_lot_quantity,nfoStockname,displayname,nfospreadmin){

				$.ajax({
						type :'POST',
						url :'addScriptNfo',
						data :'Token='+token+"&Marketwatchid="+marketwatchid+"&Exchange="+exchange+"&Scriptname="+encodeURIComponent(scriptname)+"&Nfoinstrument_name="+nfoinstrument_name+"&NfoSeries="+nfoSeries+
						       "&Nfoexpiry_date="+nfoexpiry_date+"&Nfostrike_price="+nfostrike_price+"&Nfooption_type="+nfooption_type+"&Nfoissue_infostart_date="+nfoissue_infostart_date+
						       "&Nfoissue_infomaturity_date="+nfoissue_infomaturity_date+"&Nfoboard_lot_quantity="+nfoboard_lot_quantity+"&NfoStockname="+nfoStockname+"&Displayname="+displayname+"&Nfospreadmin="+nfospreadmin,
						dataType: 'json',
						success:function(jsonObject){
						     
							for (var i = 0; i <sideSearchData.length; i++) {
								if(token == sideSearchData[i].tokens) {
									sideSearchData[i].flag = false;		
									break;
								}
							}
							
							// updatewatchlist(sideSearchData);
							
							
							 getMarketwatchListById(marketwatchid);

						},
						error:function(){
						// alert("AddScript Error");
							
						
						}	
					});
				
				
				
			}


			function addScriptMcx(marketwatchid,scriptname,token,exchange,mcxInstrumentCode,mcxInstrumentSeries,mcxProductStartDate,mcxLastTradingDate,mcxLotSize,
					mcxTickSize,mcxDeliveryStartDate,mcxDeliveryEndDate,mcxLastModifiedDate,mcxInstrumentInfo,mcxTenderPeriodStartDate,mcxTenderPeriodEndDate,
					mcxInstrumentName,mcxOriginalExpiryDate,mcxStrikePrice,mcxOptionType,displayname){

				$.ajax({
						type :'POST',
						url :'addScriptMcx',
						data :'Token='+token+"&Marketwatchid="+marketwatchid+"&Exchange="+exchange+"&Scriptname="+encodeURIComponent(scriptname)+"&McxInstrumentCode="+mcxInstrumentCode+
						       "&McxInstrumentSeries="+mcxInstrumentSeries+"&McxProductStartDate="+mcxProductStartDate+"&McxLastTradingDate="+mcxLastTradingDate+"&McxLotSize="+mcxLotSize+"&McxTickSize="+mcxTickSize+
						       "&McxDeliveryStartDate="+mcxDeliveryStartDate+"&McxDeliveryEndDate="+mcxDeliveryEndDate+"&McxLastModifiedDate="+mcxLastModifiedDate+"&McxInstrumentInfo="+mcxInstrumentInfo+
						       "&McxTenderPeriodStartDate="+mcxTenderPeriodStartDate+"&McxTenderPeriodEndDate="+mcxTenderPeriodEndDate+"&McxInstrumentName="+mcxInstrumentName+"&McxOriginalExpiryDate="+mcxOriginalExpiryDate+
						       "&McxStrikePrice="+mcxStrikePrice+"&McxOptionType="+mcxOptionType+"&Displayname="+displayname,
						dataType: 'json',
						success:function(jsonObject){
						     
							for (var i = 0; i <sideSearchData.length; i++) {
								if(token == sideSearchData[i].tokens) {
									sideSearchData[i].flag = false;		
								// alert("flag set is"+sideSearchData[i].flag)
									break;
								}
							}
							
							// updatewatchlist(sideSearchData);
							
							 getMarketwatchListById(marketwatchid);
					  				    
						},
						error:function(){
							// alert("AddScript Error");
							
						
						}	
					});
				
					
			}


			function searchDeleteScript(token,flag){
				
				   
				
				$.ajax({
					type :'POST',
					url :'deleteScript',
				    data :"Token=" +token,
					dataType: 'html',
					success:function(response){
						// alert("response::"+response);
						
						
						for (var i = 0; i <sideSearchData.length; i++) {
							if(token == sideSearchData[i].tokens) {
								sideSearchData[i].flag = true;	
								// alert("flag delete set is"+sideSearchData[i].flag)
								break;
							}
						}

						// updatewatchlist(sideSearchData);
						var marketwatchid = getActiveMarketWatchId();
						getMarketwatchListById(marketwatchid);
						
					   client.unsubscribe(token.toString() ); 
					},
					error:function(){
						
					
					}	
				});
				
			}
			
			
			
			function getSymbolInfo(exchange,token){
				

				   $.ajax({
					type :'Get',
					url :'getSymbolInfo',
					data :"Exchange="+exchange+"&Token="+token,
					dataType: 'json',
					success:function(response){

						var body="";
						body=body+"<li>Exchange <span>"+response.exch+"</span></li>";
						body=body+"<li>Trading Symbol <span>"+response.tsym+"</span></li>";
						body=body+"<li>Company Name <span>"+response.cname+"</span></li>";
						body=body+"<li>Symbol Name <span>"+response.symname+"</span></li>";
						body=body+"<li>Segment <span>"+response.seg+"</span></li>";
						body=body+"<li>Intrument Name <span>"+response.instname+"</span></li>";
						body=body+"<li>ISIN <span>"+response.isin+"</span></li>";
						body=body+"<li>Price Precision <span>"+response.pp+"</span></li>";
						body=body+"<li>Tick Size <span>"+response.ti+"</span></li>";
						body=body+"<li>Lot Size <span>"+response.ls+"</span></li>";
						body=body+"<li>Token <span>"+response.token+"</span></li>";
						body=body+"<li>Freeze Qty <span>"+response.frzqty+"</span></li>";

						
				    $(".symbolinfodata").html(body);
						 
					},
					error:function(){
						
					
					}	
				});
			}	
			
			
			function displayChart(displayname,exch){				
				
				$("#displaylabelId").html(displayname);
				$("#exchlabelId").html(exch);
				$("#loadGraphId").show();
				$("#OrderId").hide();
				$("#dashboardId").hide();
				$("#AccountId").hide();		
				$("#FundsDivId").hide();
			    $("#AlertsDivId").hide();
				
			}


