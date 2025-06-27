


function SendOTPVerification(){
	
	var inputOTPTag=$("#otpinputId").val();
	var hiddenOTPTag=$("#verifyOTPhiddenId").val();
	
	if(inputOTPTag==hiddenOTPTag){
		alert("OTP is validated successfully, please proceed further.");
		//After successful modification: Your modification request is processed successfully. Thank you!
	}
	else{
		alert("You have entered wrong OTP. Please check and try again with the correct OTP.");
	}
}




function EditEmailFun(mailId,mobileId){
	document.getElementById("EmailhiddenId").value=mailId;
	document.getElementById("mobilehiddenId").value=mobileId;
}
function SendOTPProfileEmailPhone(){
	 var EmailIdTag=$("#EmailhiddenId").val();
	 var mobileTag=$("#mobilehiddenId").val();
	
	
		 
	var userId=$("#UserID").val();
	
	 $.ajax({
			type :'POST',
			url :'SendOtpMailAndMobile',
			data: "EmailIdTag="+EmailIdTag+"&mobileTag="+mobileTag+"&userId="+userId,
			success:function(response){
				
				var jsonObject =JSON.parse(response);
				var outputTag=jsonObject.outputmessage;
				$("#verifyOTPhiddenId").val(jsonObject.OTP);
				
				if(outputTag="Ok"){
					$("#otpShowId").show();
					$("#ProfileEmailPhoneEditId").hide();
				}
				else{
					$("#OtpModelId").hide();				
					$("#ProfileEmailPhoneEditId").show();
				}
				
			 },
				error:function(){
					alert("Accountdetails Error");
				}	
				
			});
	
}