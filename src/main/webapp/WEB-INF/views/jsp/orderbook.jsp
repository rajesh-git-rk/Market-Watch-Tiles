<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>

<script src="./resourcefiles/AccessJs/OrderbookJS.js"></script>
</head>
<body>

<div id="orderhideId" style="display: none">
					<ul class="nav nav-pills">
						<li class="nav-item"><a class="nav-link active"
							aria-current="page" href="#">Active</a></li>
						<li class="nav-item"><a class="nav-link" href="#">Link</a></li>
						<li class="nav-item"><a class="nav-link" href="#">Link</a></li>
						<li class="nav-item"><a class="nav-link disabled" href="#"
							tabindex="-1" aria-disabled="true">Disabled</a></li>
					</ul>
					<div class="tab">
						<button class="tablinks" style="margin-left: 15px;"
							id="pendingorderId" onclick="pendingordfunc()" value="Pending">Pending</button>
						<button class="tablinks" style="margin-left: 15px;"
							id="completedorderId" onclick="completeordfunc()"
							value="Completed">Completed</button>
						<button class="tablinks" id="tradebookorderId" value="TradeBook"
							onclick="tradeordfunc()">Trade Book</button>
					</div>
					<div id="PendingDivId" class="tabcontent">
						<h3>Pending Order Book</h3>

						<table id="pendingordertableId"
							class="table table-striped table-bordered display sortable"
							style="width: 100%;">
							<thead style="background-color: #e3e5e7;">
								<tr>
									<th>Exchange</th>
									<th>Product</th>
									<th>Qty</th>
									<th>Avg Price</th>
									<th>Status</th>
									<th>Exchange Order Time</th>
									<th>Exchange Order Number</th>
									<th>Nest Order Time</th>
									<th>Nest Order Number</th>
									<th>Action</th>
								</tr>
							</thead>
							<tbody id="pendingorderbodyId" onclick="orderrefresh();">

							</tbody>
						</table>
						<div id="pendinginnerbodyId" style="display: none;">

							<label style="margin-left: 418px;">No Data</label>
						</div>
					</div>

					<div id="CompletedDivId" class="tabcontent" style="display: none">
						<h3>Completed Order Book</h3>
						<table id="completedorderId"
							class="table table-striped table-bordered display sortable"
							style="width: 100%;">
							<thead style="background-color: #e3e5e7;">
								<tr>

									<th>Exchange</th>
									<th>Product</th>
									<th>Qty</th>
									<th>Avg Price</th>
									<th>Status</th>
									<th>Exchange Order Time</th>
									<th>Exchange Order Number</th>
									<th>Nest Order Time</th>
									<th>Nest Order Number</th>
									<th>Action</th>


								</tr>
							</thead>
							<tbody id="CompletedorderbodyId">

							</tbody>
						</table>

						<div id="CompletedinnerbodyId" style="display: none;">

							<label style="margin-left: 418px;">No Data</label>
						</div>
					</div>

					<div id="TradeBookDivId" class="tabcontent" style="display: none">
						<h3>Trade Book</h3>
						<table id="tradebookorderId"
							class="table table-striped table-bordered display sortable"
							style="width: 100%;">
							<thead style="background-color: #e3e5e7;">
								<tr>
									<th>Exchange</th>
									<th>Product</th>
									<th>Qty</th>
									<th>Avg Price</th>
									<th>PCode</th>
									<th>Exchange Order Time</th>
									<th>Exchange Order Number</th>
									<th>Nest Order Time</th>
									<th>Nest Order Number</th>
									<th>Action</th>
								</tr>
							</thead>
							<tbody id="tradebookorderbodyId">

							</tbody>

						</table>

						<div id="tradebookinnerbodyId" style="display: none;">

							<label style="margin-left: 418px;">No Data</label>
						</div>
					</div>

				</div>

</body>
</html>