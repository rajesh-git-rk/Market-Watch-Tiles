package com.topaz.trading.controller;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.bouncycastle.util.encoders.Hex;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.Gson;
import com.google.gson.JsonElement;
import com.topaz.trading.model.OrderhistoryResponse;

@RestController
public class MarketDepthController {

	@Autowired
	MarketwatchProvider marketwatchProvider;

    private static Logger logger = LoggerFactory.getLogger(MarketDepthController.class);

	@RequestMapping(value = "/ShowMarketPicture", method = RequestMethod.POST, produces = "application/json")
	public ResponseEntity<String> showMarketPicture(HttpServletRequest request, HttpServletResponse response,
			@RequestParam("Exchange") String exchange,@RequestParam("price") String price) {

		 System.out.println(exchange +" :exchange: =============");
		 System.out.println(price +" : price : =============");

		HttpSession session = null;
		session = request.getSession();
		String userId = (String) session.getAttribute("userId");
		System.out.println("userId:::::" + userId);

		String publicKey4 = (String) session.getAttribute("publicKey4");
		String TomcatCount = (String) session.getAttribute("TomcatCount");

		System.out.println("publicKey4::::" + publicKey4);
		System.out.println("TomcatCount:::::" + TomcatCount);

		JSONObject marketPictureJsonObj = new JSONObject();
		marketPictureJsonObj.put("Exchange", exchange);
		marketPictureJsonObj.put("Symbol", price);
		marketPictureJsonObj.put("uid", userId);

		String strJsonReq = marketPictureJsonObj.toJSONString();
		String jsonReponse = "";

		try {
			String jKey = hashData(publicKey4);
			StringBuffer markPictureUrl = new StringBuffer(marketwatchProvider.getShowMarketPictureUrl());
			markPictureUrl.append("jsessionid=" + "." + TomcatCount + "&jData=" + strJsonReq + "&jKey=" + jKey + "");

			URL requestUrl = new URL(markPictureUrl.toString());
			System.out.println("OrderHistoryurl::::" + requestUrl);
			HttpURLConnection Orderbookconn = (HttpURLConnection) requestUrl.openConnection();
			Orderbookconn.setRequestMethod("POST");
			Orderbookconn.setRequestProperty("Accept", "application/json");
			System.out.println("resCode::::" + Orderbookconn.getResponseCode());

			if (Orderbookconn.getResponseCode() != 200) {
				throw new RuntimeException("Failed : HTTP error code : " + Orderbookconn.getResponseCode());
			}

			BufferedReader br3 = new BufferedReader(new InputStreamReader((Orderbookconn.getInputStream())));
			String output = "";
			while ((output = br3.readLine()) != null) {
				System.out.println("output::::" + output);
				jsonReponse = new Gson().toJson(output);
			}

			System.out.println("orderlist:::::" + jsonReponse);
			Orderbookconn.disconnect();
		} catch (Exception e) {
			logger.error("Unexpected ValidAns error", e.getMessage());

		}

		return ResponseEntity.ok().body(jsonReponse);

	}

	@RequestMapping(value = "/ShowQuote", method = RequestMethod.POST, produces = "application/json")
	public ResponseEntity<String> showQuote(HttpServletRequest request, HttpServletResponse response,
			@RequestParam("Exchange") String exchange,@RequestParam("price") String price) {

//		,@RequestParam("nestOrd") String nestOrd

		HttpSession session = null;
		session = request.getSession();
		String userId = (String) session.getAttribute("userId");
		System.out.println("userId:::::" + userId);

		String publicKey4 = (String) session.getAttribute("publicKey4");

		String TomcatCount = (String) session.getAttribute("TomcatCount");

		System.out.println("publicKey4::::" + publicKey4);

		System.out.println("TomcatCount:::::" + TomcatCount);

		// String nestOrd=request.getParameter("nestOrd");

		JSONObject OrderBookInputJson = new JSONObject();

		OrderBookInputJson.put("Exchange", exchange);
		OrderBookInputJson.put("Symbol", price);
		OrderBookInputJson.put("uid", userId);

		String OrderBookInputJsonInputJdata = OrderBookInputJson.toJSONString();
		JSONObject OrderBookValidationJson = new JSONObject();
		List<String> OrderBookValidationList = null;

		OrderhistoryResponse orderRes = new OrderhistoryResponse();
		OrderhistoryResponse orderRes1 = new OrderhistoryResponse();

		List<OrderhistoryResponse> orderResList = null;

		List<String> list = null;

		String json = "";
		String outputval = "";

		try {

			String jKey = hashData(publicKey4);
			StringBuffer OrderbookAns = new StringBuffer(marketwatchProvider.getShowQuoteUrl());
			OrderbookAns.append("jsessionid=" + "." + TomcatCount + "&jData=" + OrderBookInputJsonInputJdata + "&jKey="
					+ jKey + "");

			URL OrderHistoryurl = new URL(OrderbookAns.toString());
			System.out.println("OrderHistoryurl::::" + OrderHistoryurl);
			HttpURLConnection Orderbookconn = (HttpURLConnection) OrderHistoryurl.openConnection();
			Orderbookconn.setRequestMethod("POST");
			Orderbookconn.setRequestProperty("Accept", "application/json");
			System.out.println("resCode::::" + Orderbookconn.getResponseCode());

			if (Orderbookconn.getResponseCode() != 200) {
				throw new RuntimeException("Failed : HTTP error code : " + Orderbookconn.getResponseCode());
			}

			BufferedReader br3 = new BufferedReader(new InputStreamReader((Orderbookconn.getInputStream())));

			String output = "";

			JSONArray array = new JSONArray();
			JsonElement element = null;
			while ((output = br3.readLine()) != null) {

				System.out.println("output::::" + output);

				json = new Gson().toJson(output);

			}

			// JsonRea

			System.out.println("orderlist:::::" + json);

			Orderbookconn.disconnect();

		} catch (Exception e) {
			logger.error("Unexpected ValidAns error", e.getMessage());

		}

		return ResponseEntity.ok().body(json);

	}

	public static String hashData(String data) throws NoSuchAlgorithmException, UnsupportedEncodingException {
		MessageDigest md = MessageDigest.getInstance("SHA-256");
		byte[] digest = md.digest(data.getBytes());
		String hashedData = Hex.toHexString(digest);
		return hashedData;
	}

}
