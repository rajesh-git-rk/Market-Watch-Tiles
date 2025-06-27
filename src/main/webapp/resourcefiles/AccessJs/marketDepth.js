

function getMarketDepth(name, price, exchange, token) {
	$.ajax({
		type: 'POST',
		url: 'ShowMarketPicture',
		//data :'Token='+token+"&Exchange="+exchange+"&price="+encodeURIComponent(name)+"&Price="+price,
		data: "Exchange=" + exchange + "&price=" + token,
		dataType: 'json',
		success: function(response) {

			var jsonObject = JSON.parse(response);
			var result = Object.values(jsonObject);

			$("#bid1").html(result[50]);
			$("#bid2").html(result[51]);
			$("#bid3").html(result[42]);
			$("#bid4").html(result[44]);
			$("#bid5").html(result[46]);

			$("#border1").html(result[54]);
			$("#border2").html(result[52]);
			$("#border3").html(result[59]);
			$("#border4").html(result[58]);
			$("#border5").html(result[57]);

			$("#bQty1").html(result[36]);
			$("#bQty2").html(result[33]);
			$("#bQty3").html(result[34]);
			$("#bQty4").html(result[31]);
			$("#bQty5").html(result[30]);

			$("#sid1").html(result[56]);
			$("#sid2").html(result[54]);
			$("#sid3").html(result[59]);
			$("#sid4").html(result[58]);
			$("#sid5").html(result[57]);

			$("#sorder1").html(result[14]);
			$("#sorder2").html(result[12]);
			$("#sorder3").html(result[11]);
			$("#sorder4").html(result[10]);
			$("#sorder5").html(result[9]);

			$("#sQty1").html(result[36]);
			$("#sQty2").html(result[33]);
			$("#sQty3").html(result[34]);
			$("#sQty4").html(result[31]);
			$("#sQty5").html(result[30]);

			$("#mdLowerCircuit").html(result[29]);
			$("#mdUpperCircuit").html(result[45]);

			displayMarketDepth();

		},
		error: function() {
			alert("PlaceOrder Error");
			displayMarketDepth();

		}
	});

	$.ajax({
		type: 'POST',
		url: 'ShowQuote',
		data: "Exchange=" + exchange + "&price=" + token,
		dataType: 'json',
		success: function(response) {

			var jsonObject = JSON.parse(response);
			var result = Object.values(jsonObject);

			var count = Object.keys(jsonObject).length;

			$("#mdOpen").html(result[4]);
			$("#mdHigh").html(result[37]);

			$("#mdLow").html(result[1]);
			$("#mdPrevCLose").html(result[10]);

			$("#mdVolume").html(result[18]);
			$("#mdLTQ").html(result[23]);

			$("#mdAvgPrice").html(result[12]);
			$("#mdLTT").html(result[19]);

			$("#mdTotalBuy").html(result[26]);
			$("#mdTotalSell").html(result[8]);

			$("#mdExpiry").html(result[9]);





			console.log(response);

		}, error: function() {
			alert("Show Quote Error");
			displayMarketDepth();

		}
	});

}

function displayMarketDepth() {
	$("#divMarketDepthTopScript").show();
	$("#marketDepthViewMore").show();
	$("#marketDepthBottom").show();
	$("#marketDepthExp").show();



}

function hideMarketDepth() {
	$("#divMarketDepthTopScript").hide();
	$("#marketDepthViewMore").hide();
	$("#marketDepthBottom").hide();
	$("#marketDepthExp").hide();


}
