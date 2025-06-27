/**
 * 
 */

function AlertsClickfunction(){
	
	$("#AlertsDivId").show();
	$("#FundsDivId").hide();
	$("#PortfolioDivId").hide();
	$("#OrderId").hide();
	$("#dashboardId").hide();
	$("#loadGraphId").hide();
	$("#AccountId").hide();
	
	
	var obj = new Object();
	var listItem = new Object();
	$.ajax({
	type :'POST',
	url :'getAlert',
	dataType: 'json',
	success:function(jsonObject){
		
		// var jsonObject =JSON.parse(response);
	
		//alert("response" +jsonObject);
		
	   priceAlertData=[];
       //alert(jsonObject.length);
       if(jsonObject.length >0){
	  
	    	 
	    	   for (var i = 0; i <jsonObject.length; i++) {
	  	    	 
	  	    	 
	    		   listItem.alertId=jsonObject[i].id;
	    		   listItem.IdTag=jsonObject[i].id;
	    		 //  listItem.alertconditionTag=JSON.stringify(jsonObject[i].alertcondition);
	    		   listItem.alertconditionTag=jsonObject[i].alertcondition;
	    		   listItem.priceTag=jsonObject[i].price;
	    		   listItem.notificationTag=jsonObject[i].notificationintervalmin;
	    		   listItem.expirydateTag=jsonObject[i].expirydate;
	    		   listItem.timerTag=jsonObject[i].timer;
	    		   listItem.frequencyTag=jsonObject[i].frequency;
	    		   listItem.scriptnameTag=jsonObject[i].scriptname;
	    		   listItem.statusTag=jsonObject[i].status;
	    		   listItem.exchangeTag=jsonObject[i].exchange;
	  	    	// var stat;
	    		   
	    		 //  alert("listItem.alertconditionTag::"+listItem.alertconditionTag);
	    
	  	  	 var alertval=jsonObject[i].alertcondition+" &#x20B9;"+jsonObject[i].price;
		    	
	    	  listItem = new Object();
	    	
	    	 if(jsonObject[i].status==='1'){
	    		 	    		 
	    		 listItem.stat="1";//RUNNING
	    	 }else{
	    		 	    	
	    		 listItem.stat="0";//PAUSED
	    	 }
	    	 listItem.id=jsonObject[i].id;
	    	 listItem.name=jsonObject[i].scriptname;	    
	    	 listItem.label=jsonObject[i].scriptname+" "+alertval;
	    	 listItem.price="LTP &#x20B9;"+jsonObject[i].price;
	    	 priceAlertData.push(listItem);
	    	   }
	    	   
	    	 
	    	   
	    	   if($('.priceAlert').length > 0) {
	    		   var pATargetBind =  $('.priceAlert .alerts_data_lists');
	    		   var pATargetHTML = "";
	    		   $.each(priceAlertData, function(index, listItem) {
	    			   // alert("listItem.stat: "+listItem.stat+ " listItem.id: "+listItem.id);
	    			   if(listItem.stat=="1"){
	    				   pATargetHTML = pATargetHTML + '<li> <div class="alerts_lft"> <label class="mb-1">'+ listItem.name +'</label> <p>'+ listItem.label +'</p> </div> <div class="alerts_rgt running-widget"> <div class="running-area"> <label class="btn mb-1 running-label">Running</label> <label class="value"> '+ listItem.price +' <span data-status="active" class="running-control"> <i class="bi bi-pause-circle-fill ms-2" onclick="AlertPauseFun(\''+listItem.id+'\',\''+listItem.stat+'\')"> </i> </span> </label> </div> <div class="running-drop dropstart"> <button id="priceAlDropTog'+index+'" type="button" class="dropdown-toggle" data-bs-auto-close="false" data-bs-toggle="dropdown" aria-expanded="false" onclick="alertclickfun('+index+');"> <i class="bi bi-three-dots-vertical" ></i> </button> <div class="dropdown-menu"  style="display:none" id="priceAlDropMenu_'+index+'"> <span class="btn-close3"><i class="bi bi-x-lg"></i></span> <h5>PRICE ALERTS</h5> <h4 class="tp_blue"> '+ listItem.name +' <span>'+ listItem.label +'</span> </h4> <ul> <li><button onclick="clickModifyAlert(\''+listItem.id+'\',\''+listItem.alertconditionTag+'\',\''+listItem.priceTag+'\',\''+listItem.expirydateTag+'\',\''+listItem.timerTag+'\',\''+listItem.frequencyTag+'\',\''+listItem.scriptnameTag+'\',\''+listItem.statusTag+'\',\''+listItem.exchangeTag+'\')" class="btn btn-blue" data-bs-toggle="modal" data-bs-target="#modifyAlertModal" >Modify</button></li> <li class="dropdown pAcancelDDMenu"><button type="button" class="btn-red btn dropdown-toggle"   id="dDMenuPACan'+index+'"  onclick="alertDeleteclickfun('+index+');" data-bs-toggle="dropdown" data-bs-auto-close="false" class="cancel-btn btn btn-red">Delete</button><div class="dropdown-menu dd-cancel" id="deleteAlDropMenu_'+index+'" aria-labelledby="dDMenuPACan'+index+'"> <h3>PRICE ALERTS</h3><span class="btn-close2"><i class="bi bi-x-lg"></i></span> <p>Do you wish to delete this alert?</p> <div class="confirm"><div class="btn-part"><button class="btn btn-primary btn-primary"  onclick="AlertDelelteFun(\''+listItem.id+'\')">Yes</button><button onclick="deleteHideonClick('+index+');" class="btn btn-primary btn-red">No</button></div></div></div></li>  </ul> </div> </div> </div> </li>';
	    			   }
	    			   else if(listItem.stat=="0")
	    			   {
	    				   pATargetHTML = pATargetHTML + '<li> <div class="alerts_lft"> <label class="mb-1">'+ listItem.name +'</label> <p>'+ listItem.label +'</p> </div> <div class="alerts_rgt running-widget"> <div class="running-area"> <label class="btn mb-1 running-label">Pause</label> <label class="value"> '+ listItem.price +' <span data-status="pause" class="running-control"> <i class="bi bi-play-circle-fill ms-2 " onclick="AlertPauseFun(\''+listItem.id+'\',\''+listItem.stat+'\');"></i> </span> </label> </div> <div class="running-drop dropstart"> <button id="priceAlDropTog'+index+'" type="button" class="dropdown-toggle" data-bs-auto-close="false" data-bs-toggle="dropdown" aria-expanded="false" onclick="alertclickfun('+index+');"> <i class="bi bi-three-dots-vertical"></i> </button> <div class="dropdown-menu" style="display:none" id="priceAlDropMenu_'+index+'"> <span class="btn-close3"><i class="bi bi-x-lg"></i></span> <h5>PRICE ALERTS</h5> <h4 class="tp_blue"> '+ listItem.name +' <span>'+ listItem.label +'</span> </h4> <ul> <li><button onclick="clickModifyAlert(\''+listItem.id+'\',\''+listItem.alertconditionTag+'\',\''+listItem.priceTag+'\',\''+listItem.expirydateTag+'\',\''+listItem.timerTag+'\',\''+listItem.frequencyTag+'\',\''+listItem.scriptnameTag+'\',\''+listItem.statusTag+'\',\''+listItem.exchangeTag+'\')" class="btn btn-blue" data-bs-toggle="modal" data-bs-target="#modifyAlertModal">Modify</button></li> <li class="dropdown pAcancelDDMenu"><button type="button" class="btn-red btn dropdown-toggle"      id="dDMenuPACan'+index+'" onclick="alertDeleteclickfun('+index+');" data-bs-toggle="dropdown" data-bs-auto-close="false" class="cancel-btn btn btn-red">Delete</button><div class="dropdown-menu dd-cancel" id="deleteAlDropMenu_'+index+'" aria-labelledby="dDMenuPACan'+index+'"> <h3>PRICE ALERTS</h3><span class="btn-close2"><i class="bi bi-x-lg"></i></span> <p>Do you wish to delete this alert?</p> <div class="confirm"><div class="btn-part"><button class="btn btn-primary btn-primary" onclick="AlertDelelteFun(\''+listItem.id+'\')">Yes</button><button onclick="deleteHideonClick('+index+');" class="btn btn-primary btn-red">No</button></div></div></div></li> </ul> </div> </div> </div> </li>';

	    			   }
	    		   });
	    		   pATargetBind.html(pATargetHTML);
	    	   }
	    	 
	    
       }
       
	 	    $('.running-widget .running-control').click(function() {
	 	        var getstatus = $(this).attr('data-status');
	 	        var getElmn = $(this).parent().parent().find('.running-label');
	 	        if (getstatus === 'active') {
	 	          getElmn.text('Pause');
	 	          getElmn.attr('data-status', 'pause')
	 	          $(this).attr('data-status', 'pause');
	 	          $(this).find('i').removeClass('bi-pause-circle-fill').addClass('bi-play-circle-fill');
	 	        } else if (getstatus === 'pause') {
	 	          getElmn.text('Running');
	 	          getElmn.attr('data-status', 'active')
	 	          $(this).attr('data-status', 'active');
	 	          $(this).find('i').removeClass('bi-play-circle-fill').addClass('bi-pause-circle-fill');
	 	        }
	 	      });
	 	    
	 	    
	 	   $(".priceAlert .searchbar .form-control").keyup(function(ev) {
	 		    var _this = $(this);
	 		    var filter = _this.val();
	 		    // console.log('ev.keyCode', ev.keyCode, filter);
	 		    $(".priceAlert .alerts_data_lists li").each(function() {
	 		      if (filter !== '' && $(this).find('label').text().search(new RegExp(filter, "i")) < 0) {
	 		        $(this).css("display", "none");
	 		      } else {
	 		        $(this).css("display", "flex");
	 		      }
	 		    });
	 		  });
	 	   
//	 	  $(document).on('click', '.priceAlert .running-widget > .dropdown-toggle', function (e) {
// 	    		
//	 		  $(".running-widget .dropdown-menu.show").removeClass("show");
//	 		  // $(".dd-cancel.dropdown-menu").removeClass("show");
//	 		  e.stopPropagation();
//	 		  $(e.currentTarget).next(".dropdown-menu").addClass("show");
//	 		});
	 	 
	 	      
	
	},
	 	error:function(){
	 		//alert("getAlert Error");
	 	
	 	}	
	 });
	
	
	
}


function alertclickfun(e){

	
	$("#priceAlDropMenu_"+e).show();
	
}

function clickModifyAlert(id,alertconditionTag,priceTag,expirydateTag,timerTag,frequencyTag,scriptnameTag,statusTag,exchangeTag){
	
	//alert("okk");
	//alert("alertconditionTag: "+alertconditionTag+"priceTag: "+priceTag+"expirydateTag: "+expirydateTag+"timerTag: "+timerTag+"frequencyTag: "+frequencyTag+"scriptnameTag: "+scriptnameTag+"statusTag: "+statusTag+"exchangeTag: "+exchangeTag)

	document.getElementById("modifyscriptNamehiddId").value=scriptnameTag;
	document.getElementById("modifypricehiddId").value=priceTag;
	document.getElementById("alertModifyhiddId").value=id;
	document.getElementById("alertModifyhidddate").value=expirydateTag;
	
	document.getElementById("modifyscriptnamelabelId").innerHTML=scriptnameTag
	
	document.getElementById("modifyalertPriceId").value=priceTag;
	//document.getElementById("modifydatepicker").value=expirydateTag;
	//document.getElementById("modifytimeId").value=timerTag;
	//document.getElementById("modifyalertconditionId").value=alertconditionTag;
	
		
	if(alertconditionTag==="LESSER THAN"){
	
	$(".lessthan").addClass("active");
	 $(".greaterthan").removeClass("active");
	 $(".lessequal").removeClass("active");
	 $(".greaterequal").removeClass("active");
	  
   }else if(alertconditionTag==="GREATER THAN"){
	   
		 $(".greaterthan").addClass("active");
		 $(".lessequal").removeClass("active");
		 $(".greaterequal").removeClass("active");
		 $(".lessthan").removeClass("active");
	}else if(alertconditionTag==="LESS THAN OR EQUAL TO"){
		
		 $(".lessequal").addClass("active");
		 $(".greaterequal").removeClass("active");
		 $(".lessthan").removeClass("active");
		 $(".greaterthan").removeClass("active");
	}else if(alertconditionTag==="GREAT THAN OR EQUAL TO"){
		
		 $(".greaterthan").addClass("active");
		 $(".lessequal").removeClass("active");
		 $(".greaterequal").removeClass("active");
		 $(".lessthan").removeClass("active");
		
	}
	
		
	if(frequencyTag==="ONCE"){

		 $(".modifyonce").addClass("active");
		 $(".modifyrecurring").removeClass("active");
	}else if(frequencyTag==="RECURRING"){
		 $(".modifyrecurring").addClass("active");
		 $(".modifyonce").removeClass("active");
	}
	
	
	
	
}

function modifyAlert(){
	
var alertModifyId = document.getElementById("alertModifyhiddId").value;
	
	var script = document.getElementById("modifyscriptNamehiddId").value;
//   var price = document.getElementById("modifypricehiddId").value;
      
  // var alertcondition = document.getElementById("modifyalertconditionId").value;

   var alertprice = document.getElementById("modifyalertPriceId").value;

 // var frequency= $("input:radio[name=modifyFrequencyId]:checked").val() 
   
//   var notification = document.getElementById("modifynotificationid").value;
   
 //  var expiry = document.getElementById("modifydatepicker").value;
   
   var alertModifyhidddate = document.getElementById("alertModifyhidddate").value;
  
  var alertconditiontab =document.getElementsByClassName('modifyalert active');
	
	 var alertcondition = [].map.call(alertconditiontab, elem => elem.textContent);
		
  var frequencytab =document.getElementsByClassName('modifyfrequency active');
			
	var frequency = [].map.call(frequencytab, elem => elem.textContent);
	
	
	//alert("frequency: "+frequency+" alertcondition: "+alertcondition+" alertModifyId: "+alertModifyId+" alertprice: "+alertprice+" expiry: "+alertModifyhidddate);
	 
   if(alertprice !=""){
	   
  var call="scriptName="+script+"&price="+alertprice+"&frequency="+frequency+"&expiry="+alertModifyhidddate+"&alertcondition="+alertcondition+"&Id="+alertModifyId;
	
 
	$.ajax({
		type :'POST',
		url :'updateAlert',
		data :call,
		dataType: 'json',
		success:function(response){

			//var jsonObject = response;
			
		 alert("Alert Updated Successfully");
		 
		//   $('#alertupdateshowId').toast('show');
		 
		 $("#modifyAlertModal").hide();
		 
		 AlertsClickfunction();
		 
		},
		error:function(){
		//	alert("getAlert Error");
		
		}	
	});
 }else{
   	
   	alert("fill the fields");
   }
}

function alertDeleteclickfun(e){
	$("#deleteAlDropMenu_"+e).show();
}

function deleteHideonClick(e){
	$("#deleteAlDropMenu_"+e).hide();
}

function AlertDelelteFun(id){
	
	alert("id: "+id);
	
	$.ajax({
		type :'POST',
		url :'getAlertDelete',
		data :"Id="+id,
		dataType: 'html',
		success:function(response){
			
			if(response !=0){
			 alert("Alert Deleted Successfully Id :"+response);
			//	$('#deleteshowId').toast('show');
			 
			// AlertFunction();
				
				AlertsClickfunction();
				
			}else{
			//	AlertFunction();
				AlertsClickfunction();
			}

	         
		},
		error:function(){
		//	alert("DeleteAlert Error");
		
		}	
	});
	
}