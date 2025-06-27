<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"    
"http://www.w3.org/TR/html4/loose.dtd">
<html>

<head>

<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport"
	content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta name="description" content="">
<meta name="author" content="">


<title>Crypto</title>

<!-- Custom fonts for this template-->
<link href="./assets/external/vendor/fontawesome-free/css/all.min.css"
	rel="stylesheet" type="text/css">
<link href="./assets/css/style.css"
	rel="stylesheet" type="text/css">
<link
	href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
	rel="stylesheet">

<!-- Custom styles for this template-->
<link href="./assets/external/css/sb-admin-2.css" rel="stylesheet">

<script src="./assets/external/vendor/jquery/jquery.min.js"></script>

<script src="./assets/external/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

<!-- Core plugin JavaScript-->
<script
	src="./assets/external/vendor/jquery-easing/jquery.easing.min.js"></script>

<!-- Custom scripts for all pages-->
<script src="./assets/external/js/sb-admin-2.min.js"></script>

<!-- Page level plugins -->
<script src="./assets/external/vendor/chart.js/Chart.min.js"></script>

<!-- Page level custom scripts -->
<script src="./assets/external/js/demo/chart-area-demo.js"></script>
<script src="./assets/external/js/demo/chart-pie-demo.js"></script>



<script>
	var tokenArray = new Array();

	var tokenId;
</script>


<style>

/*Profile Pic Start*/
</style>

</head>
<body>


	<div class="row">
		<div id="header" class="col-lg-12">
			<tiles:insertAttribute name="header" />
		</div>
	</div>

	<div class="row">
		<div id="menu" class="col-lg-4">
			<tiles:insertAttribute name="search" />
		</div>
		<div id="chartArea" style="margin-top: -15px; margin-left: -35px;"
			class="col-lg-8">
			<tiles:insertAttribute name="body" />
		</div>

	</div>

</body>
</html>
