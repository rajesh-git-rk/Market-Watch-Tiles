function AccountClickfunction(){
	
	//$("#AccountId").show();
	$("#ProfileDivId").show();
	
	$("#OrderId").hide();
	$("#dashboardId").hide();
	$("#loadGraphId").hide();
	$("#PortfolioDivId").hide();
	$("#FundsDivId").hide();
	$("#AlertsDivId").hide();
	//$("#ProfileDivId").hide();
	

	
	 $.ajax({
			type :'POST',
			url :'userDetails',
			dataType: 'json',
			success:function(jsonObject){ 
				
			
				 var stat=jsonObject.stat;
		    	 var emailAddress=jsonObject.email;
		    	 var accountID=jsonObject.actid;
		    	 var profileuserName=jsonObject.uname;
		    	 var mobileNumber=jsonObject.m_num;
		    	 var prarr=jsonObject.prarr;
		    	 var s_prdt_aliVal="";
		    	 var s_prdt_aliValArr = new Array();
		    	 var exchangeNames=jsonObject.exarr;
		    	 var exchName="";
		    	 
		    	 document.getElementById('accountId').innerHTML=accountID;
		    	 for (var mm = 0;  mm<  prarr.length; mm++) {
		    		 
		    		 s_prdt_aliVal= prarr[mm].s_prdt_ali;
		    		 s_prdt_aliValArr.push(s_prdt_aliVal);
		    		 
		    	 }
		    	 
		    	
			
				//if(exchangeNames=="MCX" || exchangeNames=="NSE" || exchangeNames=="NFO" || exchangeNames=="BSE" || exchangeNames=="BFO")
				if(exchangeNames=="MCX,NSE,NFO")	
				{
					
					document.getElementById('activeSegmentId').innerHTML=exchangeNames;
					}
				else{
					document.getElementById('inActiveSegmentId').innerHTML=exchangeNames;
				}
		    	 
				document.getElementById('profileuserName').innerHTML=profileuserName;
				document.getElementById('emailAddress').innerHTML= emailAddress;
				document.getElementById('mobileNumber').innerHTML=mobileNumber;
				document.getElementById('productsId').innerHTML=s_prdt_aliValArr;
				document.getElementById('referralClientsId').innerHTML=0;
				document.getElementById('referralRevenueId').innerHTML=0;
				
				
				
	
			},
			error:function(){
				//alert("FundValue Error");
			
			}	
	  });
	 
	 
	 $.ajax({
			type :'POST',
			url :'clientDetails',
			dataType: 'json',
			success:function(jsonObject){ 
				
			
				 var stat=jsonObject.stat;
		    	 var panNumber=jsonObject.pan;
		    	 var address=jsonObject.addr;
		    	 var bankDetails=jsonObject.bankdetails;
		    	 var dpDetails=jsonObject.dp_acct_num;
		    	 
		    	  var bankname=""; var acctnumber="";var ifsc_code="";var dpnum="";
		    	  
		    	  
		    	 for (var i = 0; i < bankDetails.length; i++) {
		    		 
		    		 bankname=bankDetails[i].bankn;
		    		 acctnumber=bankDetails[i].acctnum;
		    	     ifsc_code=bankDetails[i].ifsc_code;
		    		
				}
		    	 
		    	 for (var ik = 0; ik < dpDetails.length; ik++) {
		    		 
		    		 dpnum=dpDetails[ik].dpnum;
		    		
		    		 
				}
		    	 document.getElementById('panNumberId').innerHTML=panNumber;
		    	 document.getElementById('addressId').innerHTML=address;
		    	 document.getElementById('banknameId').innerHTML=bankname;
		    	 document.getElementById('acctnumberId').innerHTML=acctnumber;
		    	 document.getElementById('ifsc_codeId').innerHTML=ifsc_code;
		    	 document.getElementById('bioIdInput').value=dpnum;
		    	 
				
			},
			error:function(){
				//alert("clientDetails Error");
			
			}	
	  });
	 
				
	var userId=$("#UserIdhiddenId").val();
	
	/*document.getElementById("UserIDhiddval").value=$("#UserIdhiddenId").val();
	document.getElementById("passwordhiddval").value=$("#passwordhiddenId").val();
	document.getElementById("tpinhiddval").value=$("#tpinhiddenId").val();*/
	
	/*
	
	$.ajax({
		
		type : 'POST',
		url  : 'ClientDetails',
		//data : "userId="+userId,
		success:function(JsonObject){
		
		
		},
			error:function(){
				alert("BracketOrder Error");
			
			}	
	});
	*/

	
}

function ChangePasswordfunc(){
	
	document.getElementById("passwordhiddval").value=$("#passwordhiddenId").val();
	
}



function savechangePassword(){
	
	var oldpassword=$("#passwordhiddval").val();
	var newpassword=$("#setpassword").val();
	var conpassword=$("#conpassword").val();
	
	//alert("oldpassword : "+oldpassword+" newpassword : "+newpassword+" conpassword : "+conpassword);
	$.ajax({
			
			type : 'POST',
			url  : 'changePasswordApi',
			data : "oldpassword="+oldpassword+"&newpassword="+newpassword+"&conpassword="+conpassword,
			success:function(JsonObject){
			
			if(JsonObject.stat=="Ok"){
				alert("stat : "+JsonObject.stat);
				alert("message : "+JsonObject.dmsg);
			}
			else if(JsonObject.stat=="Not_Ok"){
				alert("stat :"+JsonObject.stat);
				alert("message : "+JsonObject.emsg);
			}
			
			},
				error:function(){
					alert("BracketOrder Error");
				
				}	
		});
		
	
}


function ChangeTpinfunc(){
	document.getElementById("UserIDhiddval").value=$("#UserIdhiddenId").val();
	document.getElementById("tpinhiddval").value=$("#tpinhiddenId").val();
	
}

function SaveChangeTpin(){
	
	var clientId=$("#UserIDhiddval").val();
	var oldTpin=$("#tpinhiddval").val();
	var newTpin=$("#settpin").val();
	var confirmtpin=$("#confirmtpin").val();
	
	//alert("clientId : "+clientId+" oldTpin : "+oldTpin+" newTpin : "+newTpin+" confirmtpin : "+confirmtpin);
	$.ajax({
			
			type : 'POST',
			url  : 'changeTpinApi',
			dataType:'json',
			data : "clientId="+clientId+"&oldTpin="+oldTpin+"&newTpin="+newTpin+"&confirmtpin="+confirmtpin,
			success:function(JsonObject){
			alert(JsonObject.Tpinmessage);
			//$("#ChangepinEditId").hide();
			$("#AccountId").show();
			},
				error:function(){
					alert("BracketOrder Error");
				
				}	
		});
	
}

$(document).ready(function() {	

    $('.Box').on("keyup", function(e) {
        var $input = $(this);
        if ($input.val().length == 0 && e.which == 8) {
          $input.toggleClass("productkey productkey1").prev('.Box').focus();
        }
        else if ($input.val().length >= parseInt($input.attr("maxlength"), 10)) {
          $input.toggleClass("productkey1 productkey2").next('.Box').focus();
        }
    });
    

$("#form1").validate({
    rules: {
        username: "required",                    
        password: {
            required: true,
            minlength: 6
        },
       
     
    },
    messages: {
        username: "Please enter user name",                   
        password: {
            required: "Please provide a password",
           // minlength: "Your password must be at least 6 characters long"
            minlength: "Your password must be minimum 8 to maximum 12 characters"
        },
      
    },
    
    submitHandler: function(form) {
        form.submit();
    }
    
});


$( "#form2" ).validate({
    rules: {
      id1: {
        require_from_group: [3, ".inputoption"]
      },
      id2: {
        require_from_group: [3, ".inputoption"]
      },
      id3: {
        require_from_group: [3, ".inputoption"]
      },
      id4: {
        require_from_group: [3, ".inputoption"]
      }
    }
  });
$("#form3").validate({
    rules: {
        bankaccount: "required",  
        regno: "required",                  
       
       
     
    },
  
    
    submitHandler: function(form) {
        form.submit();
    }
    
});
$("#form4").validate({
    rules: {
        setpassword1: {
            required: true,
            minlength: 6
        },        
        conpassword1:{
            required: true,
            minlength: 6
        },
        number1: "required",  
        number2: "required",
        number3: "required",
        number4: "required",
        number5: "required",
        number6: "required",
        number7: "required",
        number8: "required",
        number9: "required",
        number10: "required",
        number11: "required",
        number12: "required",
     
    },
    messages: {
        setpassword1:{
            required: "Please provide a password",
            minlength: "Your password must be at least 6 characters long"
        },                    
        conpassword1: {
            required: "Please confirm a password",
            minlength: "Your password must be at least 6 characters long"
        },
        number1: "",  
        number2: "",
        number3: "",
        number4: "",
        number5: "",
        number6: "",
        number7: "",
        number8: "",
        number9: "",
        number10: "",
        number11: "",
        number12: "",
    },
    
    submitHandler: function(form) {
        form.submit();
    }
    
});
$("#form5").validate({
	
    rules: {
    	
        number1: "required",  
        number2: "required",
        number3: "required",
        number4: "required",
        number5: "required",
        number6: "required",
    },
    messages: {
        number1: "",  
        number2: "",
        number3: "",
        number4: "",
        number5: "",
        number6: "",
       
      
    },
  
    
    submitHandler: function(form) {
        form.submit();
    }
    
});




$("#form6").validate({
    rules: {
        username2: "required",                    
        pannumber: "required",  
       
     
    },
    messages: {
        username2: "Please enter user name",                   
        pannumber: "Please enter PAN number",
      
    },
    
    submitHandler: function(form) {
        form.submit();
    }
    
});
$("#form7").validate({
    rules: {
                           
        oldpassword: {
            required: true,
            minlength: 6
        },
        newpassword: {
            required: true,
            minlength: 6
        },
        conpassword: {
            required: true,
            minlength: 6
        },
       
     
    },
    messages: {
                        
        oldpassword: {
            required: "Please provide a password",
            minlength: "Your password must be at least 6 characters long"
        },
        newpassword: {
            required: "Please provide a new password",
            minlength: "Your password must be at least 6 characters long"
        },
        conpassword: {
            required: "Please provide a confirm password",
            minlength: "Your password must be at least 6 characters long"
        },
      
    },
    
    submitHandler: function(form) {
        form.submit();
    }
    
});
$("#form8").validate({
    rules: {
        number1: "required",  
        number2: "required",
        number3: "required",
        number4: "required",
        number5: "required",
        number6: "required",
        number7: "required",
        number8: "required",
        number9: "required",
        number10: "required",
        number11: "required",
        number12: "required",
        number13: "required",
        number14: "required",
        number15: "required",
        number16: "required",
        number17: "required",
        number18: "required",                  
       
       
     
    },
    messages: {
        number1: "",  
        number2: "",
        number3: "",
        number4: "",
        number5: "",
        number6: "",
        number7: "",
        number8: "",
        number9: "",
        number10: "",
        number11: "",
        number12: "",
        number13: "",
        number14: "",
        number15: "",
        number16: "",
        number17: "",
        number18: "",   
      
    },
  
    
    submitHandler: function(form) {
        form.submit();
    }
    
});

$('.eye i').click(function(){
    
    if($(this).hasClass('fa-eye-slash')){
       
      $(this).removeClass('fa-eye-slash');
      
      $(this).addClass('fa-eye');
      
      $(this).parent().parent().find('.passtext').attr('type','text');
        
    }else{
     
      $(this).removeClass('fa-eye');
      
      $(this).addClass('fa-eye-slash');  
      
      $(this).parent().parent().find('.passtext').attr('type','password');
    }
});

});

function profilePageOnClick(){
	
	alert("profilePageOnClick");
	
	$("#ProfileDivId").show();
	$("#AccountId").hide();
	$("#OrderId").hide();
	$("#dashboardId").hide();
	$("#loadGraphId").hide();
	$("#PortfolioDivId").hide();
	$("#FundsDivId").hide();
	$("#AlertsDivId").hide();
	
	
}


