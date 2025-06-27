<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>

<!-- Page level Scripts -->
<script src="./resourcefiles/AccessJs/OrderbookJS.js"></script>
<script src="./resourcefiles/AccessJs/PortfolioJS.js"></script>
<script src="./resourcefiles/AccessJs/RepeatOrder.js"></script>

<script src="./resourcefiles/AccessJs/FundJS.js"></script>
<script src="./resourcefiles/AccessJs/ProfileJS.js"></script>
<script src="./resourcefiles/AccessJs/marketDepth.js"></script>


</head>
<body id="page-top">

	<!-- Page Wrapper -->
	<!-- <div id="wrapper"> -->
		<!-- Content Wrapper -->
		<div id="content-wrapper" style="width:100%">

			<!-- Main Content -->
			<div id="content" style="width:100%;height:60px;">

				<!-- Topbar -->

				<nav
					class="navbar navbar-expand navbar-light bg-blue topbar mb-4 static-top shadow"
					style="background-color: #FFFFFF;">


					<div class="collapse navbar-collapse" id="navbarSupportedContent" style="height:100%;">

						<div class="navbar-nav"
							style="height:100%; width: 416px; height:100%;">
							<div  style="width: 208px;">
								<label id="firstpintickerbody" name="firstpintickerbody"></label>
								<label id="" name="">0.00</label>
								<label id="" name="">0.00%</label>
									</div>
							<div class="topbar-divider d-none d-sm-block" style="margin-left: 5px;"></div>
							<div  style="width:50%;">
							<label id="secondprintickerbody" name="secondprintickerbody"></label>
								<label id="" name="" >0.00</label>
								<label id="" name="">0.00%</label>
							</div>
							<div class="topbar-divider d-none d-sm-block"></div>
						</div>

						<ul class="navbar-nav mr-auto" style="height:100px;">


							<li class="nav-item"><img  src="${pageContext.request.contextPath}/assets/img/logo-dark.png" style="padding-left: 10px; padding-top: 10px;" alt="logo"></li>

							<div class="topbar-divider d-none d-sm-block" style="margin-left: 5px; padding-left:10px"></div>


							<li class="nav-item active" style="width:100px;font:arial"><a class="nav-link" href="./exchange">Home
									<span class="sr-only">(current)</span>
							</a></li>
							<li class="nav-item" style="width:100px"><a class="nav-link"
								onclick="functionOrder();" href="#">Orders</a></li>

							<li class="nav-item" style="width:100px"><a class="nav-link"
								onclick="Portfoliofunction();" href="#">Portfolio</a></li>


							<li class="nav-item" style="width:100px"><a class="nav-link"
								onclick="Fundsfunction()" href="#">Funds</a></li>


							<li class="nav-item" style="width:100px"><a class="nav-link"
								onclick="AlertFunction()" href="#">Alerts</a></li>


							<li class="nav-item dropdown no-arrow mx-1"><a
								class="nav-link dropdown-toggle" href="#" id="alertsDropdown"
								role="button" data-toggle="dropdown" aria-haspopup="true"
								aria-expanded="false"> <i class="fas fa-bell fa-fw"></i> <!-- Counter - Alerts -->
									<span class="badge badge-danger badge-counter">3+</span>
							</a> <!-- Dropdown - Alerts -->
								<div
									class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
									aria-labelledby="alertsDropdown">
									<h6 class="dropdown-header">Alerts Center</h6>
									<a class="dropdown-item d-flex align-items-center" href="#">
										<div class="mr-3">
											<div class="icon-circle bg-primary">
												<i class="fas fa-file-alt text-white"></i>
											</div>
										</div>
										<div>
											<div class="small text-gray-500">December 12, 2019</div>
											<span class="font-weight-bold">A new monthly report is
												ready to download!</span>
										</div>
									</a> <a class="dropdown-item d-flex align-items-center" href="#">
										<div class="mr-3">
											<div class="icon-circle bg-success">
												<i class="fas fa-donate text-white"></i>
											</div>
										</div>
										<div>
											<div class="small text-gray-500">December 7, 2019</div>
											$290.29 has been deposited into your account!
										</div>
									</a> <a class="dropdown-item d-flex align-items-center" href="#">
										<div class="mr-3">
											<div class="icon-circle bg-warning">
												<i class="fas fa-exclamation-triangle text-white"></i>
											</div>
										</div>
										<div>
											<div class="small text-gray-500">December 2, 2019</div>
											Spending Alert: We've noticed unusually high spending for
											your account.
										</div>
									</a> <a class="dropdown-item text-center small text-gray-500"
										href="#">Show All Alerts</a>
								</div></li>


							<li class="nav-item dropdown no-arrow mx-1" style="padding-left: 35px;"><a
								class="nav-link dropdown-toggle" href="#" id="messagesDropdown"
								role="button" data-toggle="dropdown" aria-haspopup="true"
								aria-expanded="false"> <i class="fas fa-envelope fa-fw"></i>
									<!-- Counter - Messages --> <span
									class="badge badge-danger badge-counter">7</span>
							</a> <!-- Dropdown - Messages -->
								<div
									class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
									aria-labelledby="messagesDropdown">
									<h6 class="dropdown-header">Message Center</h6>
									<a class="dropdown-item d-flex align-items-center" href="#">
										<div class="dropdown-list-image mr-3">
											<img class="rounded-circle" src="img/undraw_profile_1.svg"
												alt="...">
											<div class="status-indicator bg-success"></div>
										</div>
										<div class="font-weight-bold">
											<div class="text-truncate">Hi there! I am wondering if
												you can help me with a problem I've been having.</div>
											<div class="small text-gray-500">Emily Fowler · 58m</div>
										</div>
									</a> <a class="dropdown-item d-flex align-items-center" href="#">
										<div class="dropdown-list-image mr-3">
											<img class="rounded-circle" src="img/undraw_profile_2.svg"
												alt="...">
											<div class="status-indicator"></div>
										</div>
										<div>
											<div class="text-truncate">I have the photos that you
												ordered last month, how would you like them sent to you?</div>
											<div class="small text-gray-500">Jae Chun · 1d</div>
										</div>
									</a> <a class="dropdown-item d-flex align-items-center" href="#">
										<div class="dropdown-list-image mr-3">
											<img class="rounded-circle" src="img/undraw_profile_3.svg"
												alt="...">
											<div class="status-indicator bg-warning"></div>
										</div>
										<div>
											<div class="text-truncate">Last month's report looks
												great, I am very happy with the progress so far, keep up the
												good work!</div>
											<div class="small text-gray-500">Morgan Alvarez · 2d</div>
										</div>
									</a> <a class="dropdown-item d-flex align-items-center" href="#">
										<div class="dropdown-list-image mr-3">
											<img class="rounded-circle"
												src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
												alt="...">
											<div class="status-indicator bg-success"></div>
										</div>
										<div>
											<div class="text-truncate">Am I a good boy? The reason
												I ask is because someone told me that people say this to all
												dogs, even if they aren't good...</div>
											<div class="small text-gray-500">Chicken the Dog · 2w</div>
										</div>
									</a> <a class="dropdown-item text-center small text-gray-500"
										href="#">Read More Messages</a>
								</div></li>


							<div class="topbar-divider d-none d-sm-block"></div>


							<li class="nav-item dropdown no-arrow" style="padding-left: 40px;"><a
								class="nav-link dropdown-toggle" href="#" id="userDropdown"
								role="button" data-toggle="dropdown" aria-haspopup="true"
								aria-expanded="false"> <span
									class="mr-2 d-none d-lg-inline text-gray-600 small">Nawaz</span>
									<img class="img-profile rounded-circle"
									src="./assets/external/img/undraw_profile.svg">
							</a> <!-- Dropdown - User Information -->
								<div class="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
									<a class="dropdown-item" href="#" role="button" onclick="Profilefunction()"> 
									<i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
										Profile
									</a>

<!-- 										<a class="dropdown-item" href="#"> <i -->
<!-- 										class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i> -->
<!-- 										Profile -->
<!-- 										</a> -->
									 <a class="dropdown-item" href="#"> <i
										class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
										Settings
									</a> <a class="dropdown-item" href="#"> <i
										class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
										Activity Log
									</a>
									<div class="dropdown-divider"></div>
									<a class="dropdown-item" href="Logout" > <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
										Logout
									</a>
								</div></li>


						</ul>

					</div>
				</nav>
			</div>
			<!-- End of Main Content -->

			<!-- Footer -->

		</div>
		<!-- End of Content Wrapper -->

	</div>
	<!-- End of Page Wrapper -->

	<!-- Scroll to Top Button-->
	<a class="scroll-to-top rounded" href="#page-top"> <i
		class="fas fa-angle-up"></i>
	</a>

	<!-- Logout Modal-->
	<div class="modal fade" id="logoutModal" tabindex="-1" role="dialog"
		aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
					<button class="close" type="button" data-dismiss="modal"
						aria-label="Close">
						<span aria-hidden="true">×</span>
					</button>
				</div>
				<div class="modal-body">Select "Logout" below if you are ready
					to end your current session.</div>
				<div class="modal-footer">
					<button class="btn btn-secondary" type="button"
						data-dismiss="modal">Cancel</button>
					<a class="btn btn-primary" href="login.html">Logout</a>
				</div>
			</div>
		</div>
		</div>
	<!-- </div> -->





		
		
</body>

		
</html>