<!doctype html>
<html lang="en">
<head>
<title>Login</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta charset="utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<!-- Main Style Css -->
    <link rel="stylesheet" href="./resourcefiles/css/style.css" />
    
  <!-- Datepicker -->  
    <script src="http://code.jquery.com/jquery-1.9.1.js"></script>
	<script src="http://code.jquery.com/ui/1.11.0/jquery-ui.js"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
	


<!-- 		<img src= ".resourcefiles/images/"> -->

      <!--used for donut chart in dashboard-->
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>    
    <!--used for side bar search items-->
    <!-- <script type="text/javascript" src="./resourcefiles/js/demo-data.js"></script> -->
    <!--used for drag and drop list-->
    <script type="text/javascript" src="./resourcefiles/js/html5sortable.min.js"></script>
    <script type="text/javascript" src="./resourcefiles/js/main.js"></script>
    <script type="text/javascript" src="./resourcefiles/js/custom.js"></script>
    
    <script type="text/javascript" src="./resourcefiles/js/autocomplete.js"></script>
    <script type="text/javascript" src="./resourcefiles/js/rangeslider.min.js"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/paho-mqtt/1.0.1/mqttws31.min.js" type="text/javascript"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/paho-mqtt/1.0.1/mqttws31.js" type="text/javascript"></script>
	
   
    
<link href="./resourcefiles/css/icomoon.css" rel="stylesheet"	type="text/css">
<link href="./resourcefiles/css/styles.css" rel="stylesheet"	type="text/css">
<link href="./resourcefiles/css/font-awesome.min.css" rel="stylesheet"	type="text/css">

<script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>

<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script> 
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script> 

<script src="https://ajax.aspnetcdn.com/ajax/jquery.validate/1.14.0/jquery.validate.js"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/paho-mqtt/1.0.1/mqttws31.min.js" type="text/javascript"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/paho-mqtt/1.0.1/mqttws31.js" type="text/javascript"></script>

    <script src="https://cdn.datatables.net/1.10.11/js/jquery.dataTables.min.js"></script>
    <script src="https://cdn.datatables.net/select/1.1.2/js/dataTables.select.min.js"></script>
    <script src="https://cdn.datatables.net/responsive/2.0.2/js/dataTables.responsive.min.js"></script>


<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/core"%>

<meta charset="ISO-8859-1">

<style>
 .new-meows {
    float:left;
   
}
.spaceClass{
	 margin-left:10px; 
	 margin-top:7px;
	  }
 
 	 .ui-datepicker-next span {
    background-image: url(http://i.imgur.com/DyQTbOA.png); !important;

}
.ui-datepicker-prev span {
    background-image: url(http://i.imgur.com/DyQTbOA.png); !important;

}
</style>
</head>
<body>
<section>
  <header>
    <div class="logo">
      <img src="./resourcefiles/images/logo.png" class="img-fluid" />
    </div>
  </header>
  <div class="container custom-container">
   <div class="row">
     <div class="col-md-12">
       <div class="title">
         <h3>Login to <span>Trade</span>
         </h3>
       </div>
     </div>
   </div>
   <div class="row">
    <div class="col-md-7 col-sm-8">
      <div class="common-form form2">
        <form action="forgotPassword" method="post" id="form6" novalidate="novalidate">
          <div class="mb-2">
            <div class="form-check-inline">
           
              <label class="form-check-label">Reset</label>
            </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" checked>
            <label class="form-check-label" for="inlineRadio1">Password</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
            <label class="form-check-label" for="inlineRadio2">2FA</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3">
            <label class="form-check-label" for="inlineRadio3">TPIN</label>
          </div>
         
        </div>
          <div class="mb-3">
            <label for="username2" class="form-label text-blue">User Name</label>
            <input type="text" class="form-control" id="username" name="username"/>
          </div>
          <div class="mb-3">
            <label for="pannumber" class="form-label text-blue">PAN Number
              </label>
            <input type="text" class="form-control" id="pannumber" name="pannumber"/>
            
          </div>
            <div class="mb-4 ">
            <label for="dob" class="form-label text-blue">Date of Birth </label>
            
			<p> <input type="text" class="form-control datepicker new-meows" style="width:80%" id="dob" name="dob"/ > </p>
           </div>

      
          <div class="mb-4">
            <p class="click-p">By clicking below button, you will receive an One Time Password.
              Use the same in the next window to reset your password/2FA/TPIN</p>
            </div>
          
           <div class="errorMsg"><label style="color:red;text-align: center" for="errormessage">${message}</label></div>
            <div class=" justify-content-center">
              
                <div class="mb-2 d-grid gap-2">
                  <button type="submit" class="btn btn-primary btn-lg blue-btn set-btn">Continue  </button>
                </div>
              
            </div>
          <div class="mb-w forgot-unblock clearfix">
            
           
            <a href="backtoLogin" class="float-end">Back to <strong class="text-blue">Login</strong> </a>
           
           </div>
        </form>
        
      </div>
    </div>
    <div class="col-md-5 col-sm-4">
      <div class="right-content">
        <img src="./resourcefiles/images/women.png" class="img-fluid float-end"  />
      </div>
    </div>
   </div>
  </div>
  
  <div class="ftr-cnt">
    <div class="container">
     
          
          <div class="row">
            <div class="col-md-12">
            <footer>
              
              <p>Enrich Financial Solution Pvt ltd, MCX: ID 55250, NSE: 90145, BSE: 6744, SEBI Reg No: INZ000078632, CDSL DP ID : 12092400 DP SEBI REG NO: IN-DP-578-2021, Mutual Funds ARN : 160413
                Regd. Office: New.No.241, Old.No.85-86 III Floor B, Ziad Court, Rangaraja Puram Main Road, Kodambakkam, Chennai – 600024. </p>
                <p class="mcx">MCX NSE BSE CDSL</p>
              </div>
            </footer>
            </div>
          </div>
          </div>
</section>

 <script type="text/javascript">

 $(document).ready(function() {
	  	var d = new Date();
 		 var year = d.getFullYear() - 5;
 		 d.setFullYear(year);
     $( ".datepicker" ).datepicker({
         showOn: "button",          
         changeYear: true, 
         dateFormat: 'dd/mm/yy',
 		 changeMonth: true,		 
 		 yearRange: '1920:' + year + '', 
 		 defaultDate: d,
 		 buttonImage: '${pageContext.request.contextPath}/resourcefiles/images/icons-calendar-10.jpg',
         buttonImageOnly: true
      }); 
     
     $("img").addClass("spaceClass")
     $("img").addClass("ui-datepicker-next span")
     $("img").addClass("ui-datepicker-prev span")
 });
 
 

 </script>
</body>
</html>