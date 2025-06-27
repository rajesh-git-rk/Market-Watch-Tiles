
	
	function createAlert(){

		 
		 var alertconditiontab =document.getElementsByClassName('alertdata active');
			
		 var alertcondition = [].map.call(alertconditiontab, elem => elem.textContent);
			
	     var frequencytab =document.getElementsByClassName('frequency active');
				
		var frequency = [].map.call(frequencytab, elem => elem.textContent);

			
		var script = document.getElementById("setScriptNamehiddenId").value;

//	    
	    var exchange=document.getElementById("setexchangehiddenId").value;
	    
		var token=document.getElementById("settokenhiddenId").value;
	    
	    var alertprice = document.getElementById("alertPriceId").value;
   
	    var addComment = document.getElementById("addCommentId").value;

//	    var notification = document.getElementById("notificationid").value;
	    
	    var expiry = document.getElementById("datepicker").value;
	    
	  //  alert("alertprice::"+alertprice+"addComment::"+addComment+"expiry::"+expiry);
	    
	    
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
	    
	    
	  if(alertprice !="" && expiry !=""){

	    var call="scriptName="+script+"&price="+alertprice+"&frequency="+frequency+"&expiry="+expiry+"&alertcondition="+alertcondition+"&exchange="+exchange+
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
					
					 alert("Alert Created Successfully");
					 
					 
					// $('#setalertshowId').toast('show');
					 
					 $("#setAlertModal").modal('hide'); 
					// $('#myModalMoreOption').modal('hide');
					 
					// AlertFunction();
						
			         
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

	 
			 
		$.ajax({
			type :'POST',
			url :'getAlert',
			dataType: 'json',
			success:function(jsonObject){
					
				 // var jsonObject =JSON.parse(response);
	           var body; 
	           

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
	
			     $('#alertbodyId').html(body);
   	  
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
			     

			     $('#alertbodyId').html(body);
         
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

	function alertDisplay(){
	 
	    $.ajax({
			type :'GET',
			url :'getTriggerAlert',
			data :'',
			dataType: 'html',
			success:function(response){

				//alert("response:::"+response);
				 var jsonObject =JSON.parse(response);
				 
				// alert("jsonObject:::"+jsonObject.data);
	             
  
			     $('.alertrecords').html(jsonObject.data); 
	
		         
			},
			error:function(){
				//alert("getTriggerAlert Error");
			
			}	
		});
		
		
	}
