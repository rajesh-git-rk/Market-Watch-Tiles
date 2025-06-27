<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    
    <!doctype html>
<html lang="en">
<head>
<meta charset="ISO-8859-1">
<title>Login</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">


<link href="./resourcefiles/css/icomoon.css" rel="stylesheet"	type="text/css">
<link href="./resourcefiles/css/styles.css" rel="stylesheet"	type="text/css">
<link href="./resourcefiles/css/font-awesome.min.css" rel="stylesheet"	type="text/css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>

<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script> 
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script> 
<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script> --> 
<script src="./resourcefiles/js/custom.js"></script>
<script type="text/javascript" src="./resourcefiles/AccessJs/account.js"></script>
<!-- <script src="https://ajax.aspnetcdn.com/ajax/jquery.validate/1.14.0/jquery.validate.js"></script> -->



<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/core"%>

<meta charset="ISO-8859-1">
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
    <div class="col-md-6 col-sm-8">
      <div class="common-form form2">
        <form action="tpinValidation" method="post" id="form5" novalidate="novalidate">
         
         
          <div class="mb-3  password">
            <label for="unipassword" class="form-label">Enter Your Unique TPIN
            </label>
            <div class="tpin d-flex ">

              <input class="inputs Box productkey1 passtext" type="password" name="number1" maxlength="1">
              <input class="inputs Box productkey1 passtext" type="password" name="number2" maxlength="1">
              <input class="inputs Box productkey1 passtext" type="password" name="number3" maxlength="1">
              <input class="inputs Box productkey1 passtext" type="password" name="number4" maxlength="1">
              <input class="inputs Box productkey1 passtext" type="password" name="number5" maxlength="1">
              <input class="inputs Box productkey1 passtext" type="password" name="number6" maxlength="1"> 
              <div class="eye eye2"><i class="fa fa-eye-slash" aria-hidden="true"></i></div>
            </div>
            
          </div>
          <div class="mb-w mb-5 no-padding forgot-unblock clearfix">
            
           
            <a href="#" class="float-end">Forgot TPIN ?</a>
           
           </div>
           
           <div class="errorMsg"><label style="color:red;text-align: center" for="errormessage">${message}</label></div>
         <div class="btn-pos">
          <div class="mb-2  d-grid gap-2">
            <button type="submit" class="btn btn-primary btn-lg blue-btn">Secured Sign In  <i class="icon fa fa-angle-right"></i></button>
          </div>
         </div>
        
              
           
       
         
          
        </form>
        
      </div>
    </div>
    <div class="col-md-6 col-sm-4">
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
</script>

</body>
</html>