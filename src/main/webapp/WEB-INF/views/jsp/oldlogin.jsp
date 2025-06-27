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
<link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>

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
	background-color: #f5f5f5;
}

.global-container{
/* 	height:100%; */
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #f5f5f5;
}

form{
	padding-top: 10px;
	font-size: 14px;
	margin-top: 30px;
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

.alert{
	margin-bottom:-30px;
	font-size: 13px;
	margin-top:20px;
}

.footer-details
{
   	margin-top:10px;
    text-align:center;
}

.appIicons a{
 margin-right:20px;
 margin-left:20px;
 font-size: larger;

}
.appIicons i{
color:darkgrey;
}

i:hover{
color:dodgerblue; 
}
a:hover {
  color:#000066; 
  text-decoration: underline;
  cursor:pointer;
}
.externalLinks{
  font-size:10px;
  padding-bottom: 13px;
}
.footerAddressLabel{
  font-size:10px;
  white-space: break-spaces;
  margin-bottom: 0px;
}
</style>
</head>
<body>
	<div class="global-container">
	<div class="card login-form">
	<div class="card-body">
	<c:choose>
    <c:when test="${not empty userId}">
       <div class="errorMsg"><label style="color:red;text-align: center" for="errormessage"> Session Is Expired... Please Login</label></div>
    </c:when>
    <c:otherwise>
        
        
    </c:otherwise>
</c:choose>
		<h3 class="card-title text-center">Login to Topaz</h3>
		<div class="card-text">
			<!--
			<div class="alert alert-danger alert-dismissible fade show" role="alert">Incorrect username or password.</div> -->
			<form action="Authenticate" method="post">
               <!-- 	<form action="userValidation" method="post"> -->
				<!-- to error: add class "has-danger" -->
				<div class="form-group">
					<label for="exampleInputEmail1"></label>
					<input type="text" class="form-control form-control-sm" placeholder="Username" id="userId" name="userId" aria-describedby="emailHelp">
				</div>
				<div class="form-group">
					<label for="exampleInputPassword1"></label>
					<a href="#" style="float:right;font-size:12px;">Forgot password?</a>
					<input type="password" class="form-control form-control-sm"  placeholder="Password" id="password" name="password">
				</div>
					<div class="errorMsg"><label style="color:red;text-align: center" for="errormessage">${message}</label></div>
				
				<button type="submit" onclick="login_page()" class="btn btn-primary btn-block">Secured Sign in</button>
				
			</form>
		</div>
		<div>

			<form action="UnblockUser" method="post" style="margin-top:0px;">
				<button type="submit" class="btn-link" style="color:blue; cursor:pointer;margin-left:-8px;"> Unblock User</button>
			</form>
				
		    <!-- <form action="ForgotPassword" method="post" style="margin-top:0px">
				    <button type="submit" class="btn-link" style="color:blue;">Forgot Password/2FA?</button>
				 </form> -->
				<!-- <a href="" id="forgotpassword" onclick="forgotpasswordfunc(); " style="float:right;"> Forgot Password/2FA?</a>  -->
        </div>

		<div class="sign-up" style="margin-left:-41px;">
		   	Don't have an account? <a href="#">Create One</a>
		</div>
		
	</div>
</div>
</div>
<div class="footer-details">

   <div class=appIicons style="margin-bottom:15px">
      <a href="https://www.google.co.in" ><i class="fab fa-google-play"></i></a>
      <a href="https://www.gmail.com"><i class="fab fa-apple"></i></a>
    </div>
   <div><label  id="footer-address" class="footerAddressLabel" ></label></div>
   <div class="externalLinks">
       <a  href="https://www.mcxindia.com/" target="_blank">MCX</a>
       <a  href="https://www.nseindia.com/" target="_blank">NSE</a>
       <a  href="https://www.bseindia.com/" target="_blank">BSE</a>
       <a  href="https://www.cdslindia.com/index.html" target="_blank">CDSL</a>
    </div>
    
 </div>
 
<script type="text/javascript">

 $(document).ready(function(){

	
	$.ajax({
		type :'POST',
		url :'getFooterDetails',						
		dataType:'json',
		
		success:function(response){
						
			 //alert("response length:::"+response.length);
			  for (var i = 0; i < response.length; i++) {
    			  var addressline1=response[i].address;
    			
			 document.getElementById("footer-address").innerHTML=addressline1;
			 }  
			  
		},
		error:function(){
       			alert("footerdetails Error");
		
		}	
	});
	
});

</script>

<!-- <script type="text/javascript">

 function login_page()
{
	
	var userId=$("#userId").val();	
	var password=$("#password").val();
	
	$.ajax({
		type :'POST',
		url :'Authenticate',		
		data :"userId="+userId+"&password="+password,
		success:function(data){
			alert(data);
// 			$("login_page").html(jQuery(response).find("#login_value").html()); 
// 			$(".login_page").load("#login_value");
// 			$("#empcode1").val(response.empcode);
// 			$("#pass1").val(response.pass);
		},
		error:function(){
// 			alert("login Error");
// 			jAlert("siginpage error","Error")
		
		}	
	});
	
	}
	
	
</script>  -->

</body>


</html>