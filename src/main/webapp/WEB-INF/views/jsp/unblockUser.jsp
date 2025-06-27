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
</style>
</head>
<body>
	<div class="global-container">
	<div class="card login-form">
	<div class="card-body">
		<h3 class="card-title text-center">Unblock User</h3>
		<div class="card-text">
			<!--
			<div class="alert alert-danger alert-dismissible fade show" role="alert">Incorrect username or password.</div> -->
			<form action="UnblockUserAPI" method="post">
<!-- 				<form action="userValidation" method="post"> -->
			
				<div class="form-group">
					<label for="exampleInputUsername2"></label>
					<input type="text" class="form-control form-control-sm" placeholder="Username" id="userId" name="userId" aria-describedby="emailHelp">
				</div>
				<div class="form-group">
					<label for="exampleInputEmail2"></label>
					
					<input type="email" class="form-control form-control-sm"  placeholder="Email" id="emailId" name="emailId">
				</div>
				<div class="form-group">
					<label for="examplePANNo2"></label>
					<input type="password" class="form-control form-control-sm" placeholder="PAN Number" id="panNo" name="panNo"  aria-describedby="emailHelp">
				</div>
					<div class="errorMsg"><label style="color:red;text-align: center" for="errormessage">${message}</label></div>
				
		 		
				<button type="submit"  class="btn btn-primary btn-block">Unblock User</button>
			    <div style="padding-top:10px">
					<a href="${pageContext.request.contextPath}/webapp/WEB-INF/views/jsp/unblockUser.jsp"  style="float:right;">Back to Login</a> 
			  </div>
			
			</form>
		</div>
	</div>
</div>
</div>
	
</body>

</html> 