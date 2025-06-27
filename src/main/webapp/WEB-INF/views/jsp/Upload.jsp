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

		<h3 class="card-title text-center">File Upload</h3>
		<div class="card-text">
			<!--
			<div class="alert alert-danger alert-dismissible fade show" role="alert">Incorrect username or password.</div> -->
			<form action="fileUpload" method="post" enctype="multipart/form-data">
				<div class="form-group">
					<label for="exampleInputEmail1"></label>
					<input type="file"  id="file" name="file" >
					<input type="submit"  value="Upload">					
				</div>
				</form>
				<div class="form-group"><input type="file"  id="file" name="file" >
				<button onclick="uploadFile()">Upload holdings</button>
				</div>
				<div class="errorMsg"><label style="color:red;text-align: center" for="errormessage">${message}</label></div>
				
			
		</div>		
	</div>
</div>
</div>
	


<script type="text/javascript">

async function uploadFile(){
	let formData= new FormData();
	formData.append("File",ajaxfile.file[0]);
	await fetch('fileupload',{
		method:"POST",
		body:formData
	});
	
	
	alert("The file upload successfully!.")
	
}
	
	



</script>
</body>


</html>