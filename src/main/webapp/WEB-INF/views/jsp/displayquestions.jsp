<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" 
    "http://www.w3.org/TR/html4/loose.dtd">
   
<html xmlns="http://www.w3.org/1999/xhtml">
  
 
  <title>Crypto</title>
	  
		<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
		<%@ taglib uri="http://www.springframework.org/tags" prefix="spring" %>
		<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form" %>
		<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/core"%>
		<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
			  
  	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script> 
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.blockUI/2.70/jquery.blockUI.min.js"></script>
 	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    <script type="text/javascript" src="jquery.blockUI.js"></script>
    
    
	<link rel="stylesheet" 	href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-beta/css/bootstrap.min.css" />
	<link rel="stylesheet" 	href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.4.1/css/mdb.min.css" />

		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>	
		<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
<script>
var indexes = new Array();
var indexId;
</script>
<style>

table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 80%;
  height:50%;
  
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
.container {

max-width:720px;
margin-top: 180px; 
margin-left: 450px;
}
.app-center{
margin-left: 30px;
}

html,body { 
	height: 100%; 
}

.global-container{
	height:260%;
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

.card-title{ font-weight:200; }

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

<div id="ItemsCount">
	<br>
	<div id="ItemsList">
	</div>
	
	</div>
	
	
	<div class="card login-form">
	<div class="card-body">
		<h3 class="card-title text-center">Reset 2FA</h3>
		<p align="center">choose any 5 questions</p>
		<div class="card-text">
		<form action="SaveAns"    onsubmit = "return validateAnswer();" method="POST">
		<div class="form-group" id="myDiv_ID">
				 <input type='hidden' value='${fn:length(displayQuestions)}' id="displayQuestionsCount"/>
				 <c:forEach  items = "${displayQuestions}"  var = "varquestions" varStatus="status">
       		<script>
       		indexId = "${varquestions.index}";
            indexes.push(indexId);
           </script>				 
					<label id="indexId" style="display:none;" name="indexId" for="${varquestions.index}">${varquestions.index}</label> 
					<label id="questionId" name="questionId" for="${varquestions.questions}">${varquestions.questions}</label>
					<input type="text" class="answerId"  id="${varquestions.index}" name="${varquestions.index}">
					
					<input type="hidden" id="IndexAns" name="IndexAns" >
				</c:forEach>
								
				<div class="errorMsg"><label style="color:red;text-align: center" for="errormessage">${message}</label></div>
				
				</div>
				
				<button type="submit"   id="btn-submit" class="btn btn-primary btn-block">Submit</button>

</form>
		</div>
	</div> 
	
	
 </div>
 </div>


<script language="javascript">



 
function validateAnswer (displayQuestions) {
	var indexCount = document.getElementById("displayQuestionsCount").value;
	//alert(indexCount+" "+indexes[1]+" "+indexes[2]+" "+indexes[10]);
	var answerCount = 0;
	var index;
	var AppendVAL;
	var IndexAns;
	var indexesArray = new Array();
	for(var i=0; i< indexCount; i++) {
		
		//alert("tagid: "+indexes[i]);
		//alert(document.getElementById(indexes[i]).value);
		index = document.getElementById(indexes[i]).value;
		if(index!='') {			 
			answerCount ++;
			AppendVAL= indexes[i]+"|"+index;
			indexesArray.push(AppendVAL);
			indexAnsTag = document.getElementById('IndexAns').value=indexesArray;			 
		};
			   
	}
	
	
	if(answerCount != 5) {
		alert("Count is:"+ answerCount+". You should answer 5 questions.");
		return false;
	}
	else if(answerCount == 5){
		
	}
	else if(answerCount > 5){
		if(index==='') {		
		document.getElementById('answerId').disabled = true;
		}
		alert("Count is : "+ answerCount+". You should answer 5 questions.");
		return false;
	}	
	return true;
	
}


$("[input='text']").change(function() { 
    var $this = $(this);
    $.ajax({
        url: "",
        data: { name: $this.attr("id"), value: $this.val() },
        success: function(data) {
            console.log(data);
        }
    });
});


</script>
</body>

</html>