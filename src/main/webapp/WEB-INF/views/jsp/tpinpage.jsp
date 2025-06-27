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
padding:0 0 0 45px;;
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
			
		
			<!-- <div class="alert alert-danger alert-dismissible fade show" role="alert">Incorrect username or password.</div> -->
    	<form action="TpinValidation" method="post">
			<!-- 	to error: add class "has-danger" -->
		   <div class="card-text">
	               <img  class="profileimage"  style="width:10;  height:10 ; border-radius:50%; margin-bottom:10px;display:block;margin-left: 90px;
                    margin-right: 30px; "  src="/webapp/assets/img/profilepictureavatar.png" alt="profile picture ">
				
			   <div class="form-group">
<%-- 			    <label style="text-align:center;display:block;" for="${clientid}" name="clientid">${clientid}</label> --%>
					<input type="text" class="form-control form-control-sm " style="border: none; margin-left:90px;" name="clientid" value="${clientid}">
				</div>
				
				<div class="form-group textOnInput">
                    <label for="inputText">PIN </label>
					<input type="password"  maxlength="6"  onkeyup="SecondTimeTpinfunction()" class="form-control form-control-sm" name="tpin">
				</div>
<!-- 				<div><span id='tpinmatchingmessage' style="font-size:12px;color: #837E7C">*Enter your 6 digits TPIN </span></div> -->
<!-- 					<div class="errorMsg"><label style="text-align: center" for="*Enter your 6 digits TPIN" id="tpinmatchingmessage">*Enter your 6 digits TPIN</label></div> -->
				
				<div class="errorMsg"><label style="color:red;text-align: center" for="${tpinmessage}" id="tpinErrorMsgId">${tpinmessage}</label></div>
				
				<div><button type="submit"  class="btn btn-primary btn-block">Continue</button></div>
				
			     <div style="margin-bottom:20px;  margin-top: 10px;text-align: center;">
			        <a class="f2fa" href="#" >Forgot TPIN?</a>
			     </div>
		     </div>
		 </form>
		</div>
	</div>
</div>

	<script type="text/javascript">
/*   function SecondTimeTpinfunction()
  { 
	  var TpinDefaultTag=$("#tpinmatchingmessage").val();
	  var TpinErrorMsgIdTag= document.getElementById("tpinErrorMsgId").value;
	  alert("TpinErrorMsgIdTag "+TpinErrorMsgIdTag);
	  
	  if(TpinErrorMsgIdTag!=''){
		  document.getElementById("tpinmatchingmessage").style.display = "none";  
	  }
	  else{
		  document.getElementById("tpinmatchingmessage").style.display ="block";
	  }
 		
	  
  }*/
  </script>

</body>


</html>