<%-- <%@ page language="java" contentType="text/html; charset=ISO-8859-1" --%>
<%-- 	pageEncoding="ISO-8859-1"%> --%>
	<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<!DOCTYPE html>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/core"%>

<%-- <%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%> --%>


<html lang="en">
<head id="Head1">
<title></title>
<meta name="viewport" content="width=device-width, initial-scale=1" />
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script
	src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<link rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-beta/css/bootstrap.min.css" />
<link rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.4.1/css/mdb.min.css" />
<!--     <link rel="shortcut icon" href="images/Iconlogo.png" type="image/x-icon" /> -->
<!--     <link rel="icon" href="images/Iconlogo.png" type="image/x-icon" /> -->


  
<style>
html,body { 
	height: 100%; 
}

input[type=text],select
{
width:100%;
padding:20px 20px;
margin: 8px 0;
display:inline-block;
border:1px solid #ccc;
border-radius:4px;
box-sizing:border-box;
}
input[type=password],select
{
width:100%;
padding:8px 20px;
margin: 8px 0;
display:inline-block;
border:1px solid #ccc;
border-radius:4px;
box-sizing:border-box;
}


.global-container{
	height:100%;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #f5f5f5;
}

form{
	padding-top: 10px;
	font-size: 14px;
	margin-top: 10px;
}

.card-title{ font-weight:300; }

.btn{
	font-size: 14px;
	margin-top:20px;
}


.login-form{ 
	width:330px;
	margin:20px;
}

.sign-up{
	text-align:center;
	padding:20px 0 0;
}

h3{
   margin-top:1rem;
   opacity:0.8;
}
h4{
   margin-top:1rem;
   opacity:0.8;
   text-align:left;
   font-size: 18px;
   margin-bottom: 1rem;
}
}
.alert{
	margin-bottom:-30px;
	font-size: 13px;
	margin-top:20px;
}
.f2fa{
  margin-top: 40px;
  text-align:center;
  font-size: 12px;
  color: black;
  opacity:0.7; 
 /*  padding:20px 150px 0 50px; */
  margin:auto;
}

.profileimage{
  display:block;
  
}
.textOnInput label {
    position: absolute;
    top: -5px;
    left: 13px;
    padding: 1px;
    z-index: 1;
}

.textOnInput label:after {
    content: " ";
    background-color: #fff;
    width: 100%;
    height: 13px;
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: -1;
}
.textOnInput {
    position: relative;
}
label{
   margin-bottom: .5rem;
    font-size: 14px;
    font-weight: 400;
    display: inline-block;

}


</style>
</head>
<body>
	<div class="global-container">
	<div class="card login-form">
	<div class="card-body">
		 <h3 class="card-title text-center" >Reset Password</h3> 		
		<!--
			<div class="alert alert-danger alert-dismissible fade show" role="alert">Incorrect username or password.</div> -->
			<form action="SaveclientPassword" method="post">
			
				<input type="hidden" class="form-control form-control-sm"  name="clientid" value="${clientid}">
				<div class="form-group textOnInput">
					
					 <!-- <a href="#" style="float:right;font-size:12px;">Forgot password?</a> -->
					 <label for="inputText">New Password</label>
					 
					<input type="password" class="form-control form-control-sm" id="password" maxlength="12" name="password" onkeyup="validatepassword();" required>
				</div>
				
				<div class="form-group textOnInput">
					
					 <!-- <a href="#" style="float:right;font-size:12px;">Forgot password?</a> -->
					 <label for="inputText">Confirm Password</label>
					<input type="password" class="form-control form-control-sm" id="cnfrmpassword" name="cnfrmpassword" maxlength="12" onkeyup="check();" required>
				</div>
				 <div><span id='pwdmatchingmessage' style="font-size:12px;color: #837E7C">*Password should contain between 8 to 12 characters  <br> *Password should contain only alphanumeric characters</span></div>
				<h4>2Factor PIN</h4>
				<p>Set a numeric 6 digit PIN as your 2Factor authentication code. This is required for logins along with your password.</p>
				
				<div class="form-group textOnInput">
      				 <label for="inputText">Enter TPIN</label>
					<input type="password" class="form-control form-control-sm" maxlength="6" id="tpin" name="tpin" onkeyup="validatetpin();" required>
				</div> 
				
				<div class="form-group textOnInput">
      				 <label for="inputText">Confirm TPIN</label>
					<input type="password" class="form-control form-control-sm" maxlength="6" id="cnfrmtpin" name="cnfrmtpin"  onkeyup="check();" required>
				</div> 
				<div><span id='tpinmatchingmessage' style="font-size:12px;color: #837E7C">*TPIN should contain 6 digits</span></div>
				 
				 <div id=message style="font-family:sans-serif; color:red; fontweight:bold"></div>
				 
				<button id="btn" type="submit"  class="btn btn-primary btn-block"  disabled="disabled">Save</button>
			
			</form>
		</div>
	</div>
</div>

</body>
<script type="text/javascript">
  function check()
  {       
	  if (document.getElementById('password').value =="" &&
		    document.getElementById('cnfrmpassword').value=="") 
		  {
		      $('#tpin').prop('disabled', true);
		      $('#cnfrmtpin').prop('disabled', true);
		   document.getElementById('pwdmatchingmessage').style.color = 'red';
 		    document.getElementById('pwdmatchingmessage').innerHTML = "Please fill in the passwords";
 		   $('button').prop('disabled', true);
		  }
	  else
	  {
          if (document.getElementById('password').value ==
  		    document.getElementById('cnfrmpassword').value) 
              {
        	 
  		      document.getElementById('pwdmatchingmessage').innerHTML = '';
  		      validatepassword();
  		      $('#tpin').prop('disabled', false);
  		      $('#cnfrmtpin').prop('disabled', false);
               if(document.getElementById('tpin').value =="" ||
	  		             document.getElementById('cnfrmtpin').value=="")
                 {document.getElementById('tpinmatchingmessage').innerHTML = "";}
               else if (document.getElementById('tpin').value ==
  		             document.getElementById('cnfrmtpin').value )
                           {
            	              
            	                document.getElementById('tpinmatchingmessage').innerHTML = "";
            	                validatetpin();
            	                $('button').prop('disabled', false);
                           }
               else{
            	   document.getElementById('tpinmatchingmessage').style.color = 'red';
       		    document.getElementById('tpinmatchingmessage').innerHTML = "TPIN's dont match";
       		 $('button').prop('disabled', true);
       		    
                       }

             } 
           else{
  		    document.getElementById('pwdmatchingmessage').style.color = 'red';
  		    document.getElementById('pwdmatchingmessage').innerHTML = "Passwords don't match";
  		    $('#tpin').prop('disabled', true);
  		    $('#cnfrmtpin').prop('disabled', true);
  		    $('button').prop('disabled', true);
  		    }
	  }
  }
   function validatepassword() {
	 
	
	  var pwd=$("#password").val();
	
       var regExp =/^[0-9a-zA-Z]+$/;
       
       if(pwd.match(regExp)) 
    	   {
    	  
    	       document.getElementById('pwdmatchingmessage').innerHTML = ""; 
    	       if(pwd.length >=6 && pwd.length<=12 ) {
    	    	   document.getElementById('pwdmatchingmessage').innerHTML = ""; 
    	    	   
    	       }
    	       else{
    	    	
    	    	   document.getElementById('pwdmatchingmessage').style.color = 'red';
    	 		    document.getElementById('pwdmatchingmessage').innerHTML = "Your Password should be between 6 to 12 characters";
    	       }
    	   
    	   } 
       else
    	   {
    	   document.getElementById('pwdmatchingmessage').style.color = 'red';
 		    document.getElementById('pwdmatchingmessage').innerHTML = " Use only alphanumeric characters ";
    	   }
 }  
 function validatetpin()
   {
	 
	   var tp=$("#tpin").val();
	
	   var regExp= /^[0-9]+$/;
	   if(tp.match(regExp)) 
		   {
		         document.getElementById('tpinmatchingmessage').innerHTML = ""; 
	             if(tp.length==6 ) {
	    	           document.getElementById('tpinmatchingmessage').innerHTML = ""; 
		           }
	             else if(tp.length<6 || tp.length>6 ){
	    	       document.getElementById('tpinmatchingmessage').style.color = 'red';
	    	       document.getElementById('tpinmatchingmessage').innerHTML = "Your TPIN should be 6 digits";
	    	       }
	 
           }
       
   
        else
	      {
        	
	            document.getElementById('tpinmatchingmessage').style.color = 'red';
	            document.getElementById('tpinmatchingmessage').innerHTML = " Use only digits ";
	      } 
  }

  </script>


</html>