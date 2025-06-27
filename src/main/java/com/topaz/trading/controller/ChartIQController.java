//package com.topaz.trading.controller;
//
//import java.io.BufferedReader;
//import java.io.IOException;
//import java.io.InputStream;
//import java.io.InputStreamReader;
//import java.net.HttpURLConnection;
//import java.net.URL;
//import java.util.ArrayList;
//import java.util.HashMap;
//import java.util.List;
//import java.util.Map;
//import java.util.Map.Entry;
//import java.util.Properties;
//
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;
//import javax.servlet.http.HttpSession;
//
//import org.apache.commons.collections.map.MultiValueMap;
//import org.apache.commons.lang.StringUtils;
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//import org.json.simple.JSONArray;
//import org.json.simple.JSONObject;
//import org.json.simple.JSONValue;
//import org.json.simple.parser.ParseException;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.ui.Model;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestMethod;
//import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.bind.annotation.RestController;
//import org.springframework.web.servlet.ModelAndView;
//
//import com.google.gson.JsonArray;
//import com.google.gson.JsonElement;
//import com.google.gson.JsonObject;
//import com.google.gson.JsonParser;
//import com.topaz.trading.repository.IndexDBImp;
//import com.topaz.trading.response.PayLoad;
//import com.topaz.trading.response.ReponseData;
//
//import io.redisearch.Document;
//
//@RestController
//public class ChartIQController {
//
//
//	private static Logger logger = LoggerFactory.getLogger(Cachecontoller.class);
//
//	@Autowired
//	private IndexDBImp _mcxRepository;
//
//	@Autowired
//	private MarketwatchProvider marketwatchProvider;
//	
//	
//	
//	
//	
//	
//	
//	
//
//	/**
//	 * @param m
//	 * @return
//	 */
//	@RequestMapping(value = "/chartIQ", method = RequestMethod.GET, produces = "text/html")
//	public ModelAndView loadChartIQ(Model m) {
//		ModelAndView mav = new ModelAndView("chart-iframe");
//		return mav;
//	}
//
//	/**
//	 * @param m
//	 * @return
//	 */
//	@RequestMapping(value = "/chartIQView", method = RequestMethod.GET, produces = "application/json")
//	public ModelAndView loadChartIQJSP(Model m) {
//		ModelAndView mav = new ModelAndView("chartIQ.jsp");
//		return mav;
//	}
//	/**
//	 * This method will retrieve NSE,NFO,MCX scripts to the user based on the search
//	 * criteria from the chartIq.
//	 * 
//	 * @param t         user entered text from the chartIQ
//	 * @param m         max results
//	 * @param ciqrandom random generated time stamp from chart iq
//	 * @param e         search types in the chartIQ (ALL, F&O..etc)
//	 * @return
//	 * @throws IOException
//	 */
//	
//	
//	
//	
//	@RequestMapping(value = "/datefeed", method = RequestMethod.GET, produces = "application/json")
//	public JSONArray feedChartByDate(HttpServletRequest request, HttpServletResponse response) {
//		//List<String> messages = new ArrayList<>();
//		//String message = hiveMqService.getMessagefromMQ(request, response, "sbi");
//		//StringTokenizer tokenizer = new StringTokenizer(message, "|");
//		/*while (tokenizer.hasMoreElements()) {
//			System.out.println((String) tokenizer.nextElement());
//			messages.add((String) tokenizer.nextElement() + "}");
//		}*/
//		Integer minute=1;
//		String yymmdd ="2021-07-06";
//		String timeSplit = "T";
//		String hour ="10:";
//		//String min = "00:";
//		String sec ="00.";
//		String milliSec = "000Z";
//		
//		String preZero= "";
//		
//		JSONArray jsArr = new JSONArray();
//		for (int i = 0; i < 59; i++) {
//			JSONObject js = new JSONObject();
//			js.put("Close", "100.20");
//			js.put("Open", "101.31");
//			js.put("High", "102.31");
//			js.put("Low", "100.31");
//			js.put("Volume", "54158202");
//			if(minute<10) {
//				preZero = "0";
//			}else {
//				preZero ="";
//			}
//			js.put("DT", yymmdd+timeSplit+hour+String.valueOf(preZero+minute+":")+sec+milliSec);
//			jsArr.add(js);
//			minute++;
//		}
//		
//		/*System.out.println("JS STring : : : "+jsArr.toJSONString());
//		StringTokenizer newToken = new StringTokenizer(messages.get(0), ":");*/
//
//		return jsArr;
//	}
//
//	
//	
//	@RequestMapping(value = "/symbolLookupService", method = RequestMethod.GET, produces = "application/json")
//	public ReponseData getSymbols(@RequestParam String t, @RequestParam Integer m, @RequestParam double ciqrandom,
//			@RequestParam String e) throws IOException {
//
//		logger.info("Entry : getSymbols()");
//
//		ReponseData data = new ReponseData();
//		PayLoad payload = new PayLoad();
//
//		List<String> symbols = new ArrayList<String>();
//		List<Document> result = null;
//
//		InputStream propertiesInputStream = null;
//		Properties props = new Properties();
//
//		propertiesInputStream = this.getClass().getClassLoader().getResourceAsStream("application.properties");
//
//		if (t == null || "".equalsIgnoreCase(t)) {
//			payload.setSymbols(symbols);
//			data.setPayload(payload);
//			return data;
//		}
//
//		props.load(propertiesInputStream);
//		String server = props.getProperty("spring.redis.host");
//		String porter = props.getProperty("spring.redis.port");
//		String indexname = props.getProperty("spring.redis.indexname");
//
//		result = mcxRepository.getSerachFilterAll(t, server, porter, indexname);
//
//		if (e.equalsIgnoreCase("null")) {
//			e = "ALL";
//		}
//
//		for (Document document : result) {
//			Iterable<Map.Entry<String, Object>> properties = document.getProperties();
//
//			for (Map.Entry<String, Object> propertie : properties) {
//				if ("nseToken".contains(propertie.getKey())) {
//					payload.setSymbols(addNscemScript(properties, document.getProperties().toString(), symbols, e));
//				}
//				if ("nfoToken".contains(propertie.getKey())) {
//					payload.setSymbols(addNsefoScript(properties, document.getProperties().toString(), symbols, e));
//				}
//				if ("mcxInstrumentIdentifier".contains(propertie.getKey())) {
//					payload.setSymbols(
//							addMcxInstrumentScript(properties, document.getProperties().toString(), symbols, e));
//				}
//
//			}
//
//		}
//		data.setPayload(payload);
//		logger.info("Exit : getSymbols()");
//		return data;
//	}
//
//	/**
//	 * @param request
//	 * @param response
//	 * @return
//	 * @throws IOException
//	 */
//	@RequestMapping(value = "/fetchBalances", method = RequestMethod.GET, produces = "application/json")
//	public HashMap<String, String> fetchBalances(HttpServletRequest request, HttpServletResponse response)
//			throws IOException {
//		HashMap<String, String> responseData = new HashMap<String, String>();
//
//		List<JSONObject> fundsArrayResponse = new ArrayList<JSONObject>();
//		JSONObject balance = new JSONObject();
//
//		HttpSession session = null;
//		session = request.getSession();
//		String userId = (String) session.getAttribute("userId");
//		String PublicKey4 = (String) session.getAttribute("publicKey4");
//		String tomcatCount = (String) session.getAttribute("TomcatCount");
//
//		JSONObject jsonRequestBody = new JSONObject();
//
//		jsonRequestBody.put("segment", "ALL");
//		jsonRequestBody.put("actid", userId);
//		jsonRequestBody.put("uid", userId);
//
//		try {
//			String eJdata = jsonRequestBody.toJSONString();
//			String jKey = CommonFunction.hashData(PublicKey4);
//
//			StringBuffer stringBuffer = new StringBuffer(marketwatchProvider.getLimitsurl());
//			stringBuffer.append("jsessionid=" + "." + tomcatCount + "&jData=" + eJdata + "&jKey=" + jKey + "");
//
//			URL LimitsPageurl = new URL(stringBuffer.toString());
//			HttpURLConnection httpUrlConnection = (HttpURLConnection) LimitsPageurl.openConnection();
//
//			httpUrlConnection.setRequestMethod("POST");
//			httpUrlConnection.setRequestProperty("Accept", "application/json");
//
//			if (httpUrlConnection.getResponseCode() != 200) {
//				throw new RuntimeException("Failed : HTTP error code : " + httpUrlConnection.getResponseCode());
//			}
//
//			BufferedReader br2 = new BufferedReader(new InputStreamReader((httpUrlConnection.getInputStream())));
//			String output;
//
//			while ((output = br2.readLine()) != null) {
//				Object obj = JSONValue.parse(output);
//				balance = (JSONObject) obj;
//			}
//			System.out.println(balance.get("Netcashavailable"));
//
//			responseData.put("liquidity", (String) balance.get("Netcashavailable")!=null? "0.00" : (String) balance.get("Netcashavailable"));
//			responseData.put("unsettledCash", (String) balance.get("Utilizedamount"));
//			responseData.put("cash", (String) balance.get("additionalmarginprsnt"));
//			responseData.put("profitLoss", (String) balance.get("PayinAmt"));
//			responseData.put("buyingPower", (String) balance.get("PayoutAmt"));
//
//			httpUrlConnection.disconnect();
//		} catch (Exception e) {
//			//logger.error("Exception occured during fetchBalances() : ", e.getMessage());
//		}
//
//		fundsArrayResponse.add(balance);
//
//		return responseData;
//	}
//
//	/**
//	 * @param request
//	 * @param response
//	 * @return
//	 * @throws IOException
//	 * @throws ParseException
//	 */
//	@RequestMapping(value = "/fetchOpenOrders", method = RequestMethod.GET, produces = "application/json")
//	public JSONObject fetchOpenorders(HttpServletRequest request, HttpServletResponse response)
//			throws IOException, ParseException {
//
//		HttpSession session = null;
//		session = request.getSession();
//
//		String userId = (String) session.getAttribute("userId");
//		String publicKey4 = (String) session.getAttribute("publicKey4");
//		String TomcatCount = (String) session.getAttribute("TomcatCount");
//
//		JSONObject openOrderJsonObject = new JSONObject();
//		openOrderJsonObject.put("uid", userId);
//		openOrderJsonObject.put("s_prdt_ali", "CNC:CNC||MIS:MIS||NRML:NRML");
//
//		String jsonInputString = openOrderJsonObject.toJSONString();
//		JSONObject chartOpenOrderResponseData = new JSONObject();
//		MultiValueMap mapJsonResponse = new MultiValueMap();
//
//		try {
//
//			String jKey = CommonFunction.hashData(publicKey4);
//			StringBuffer OrderbookAns = new StringBuffer(marketwatchProvider.getOrderBookurl());
//
//			OrderbookAns.append("jsessionid=" + "." + TomcatCount + "&jData=" + jsonInputString + "&jKey=" + jKey + "");
//
//			URL Orderbookurl = new URL(OrderbookAns.toString());
//			HttpURLConnection openOrdersConnection = (HttpURLConnection) Orderbookurl.openConnection();
//			openOrdersConnection.setRequestMethod("POST");
//			openOrdersConnection.setRequestProperty("Accept", "application/json");
//
//			if (openOrdersConnection.getResponseCode() != 200) {
//				throw new RuntimeException("Failed : HTTP error code : " + openOrdersConnection.getResponseCode());
//			}
//			BufferedReader br3 = new BufferedReader(new InputStreamReader((openOrdersConnection.getInputStream())));
//			extarctOpenOrdersIntoReqJsonFormat(chartOpenOrderResponseData, mapJsonResponse, br3);
//			openOrdersConnection.disconnect();
//
//		} catch (Exception e) {
//			//logger.error("Exception occured during fetchOpenorders() : ", e.getMessage());
//		}
//		return chartOpenOrderResponseData;
//
//	}
//
//	/**
//	 * @param chartOpenOrderResponseData
//	 * @param mapJsonResponse
//	 * @param br3
//	 * @throws IOException
//	 */
//	private void extarctOpenOrdersIntoReqJsonFormat(JSONObject chartOpenOrderResponseData,
//			MultiValueMap mapJsonResponse, BufferedReader br3) throws IOException {
//		JsonObject openOrdersObject = new JsonObject();
//		JsonArray openOrdersAryObj = new JsonArray();
//		String output = "";
//		while ((output = br3.readLine()) != null) {
//			JsonParser parser = new JsonParser();
//			Object obj = parser.parse(output);
//			openOrdersObject.add("orderbook", (JsonElement) obj);
//			openOrdersAryObj = openOrdersObject.getAsJsonArray("orderbook");
//		}
//		Integer i = 1;
//
//		String symbol = "";
//		String qty = "";
//		String exch = "";
//		String tranType = "";
//		String price = "";
//
//		for (JsonElement object : openOrdersAryObj) {
//			JsonElement jsonLineItem = (JsonElement) object;
//			JSONObject jo = new JSONObject();
//			JSONArray ja = new JSONArray();
//
//			if ("Ok".equalsIgnoreCase(getJsonValueByKey(jsonLineItem, "stat"))) {
//
//				if ("open".equalsIgnoreCase(getJsonValueByKey(jsonLineItem, "Status"))) {
//
//					symbol = getJsonValueByKey(jsonLineItem, "Sym");
//					qty = getJsonValueByKey(jsonLineItem, "Qty");
//					exch = getJsonValueByKey(jsonLineItem, "Exchange");
//					tranType = getJsonValueByKey(jsonLineItem, "Trantype");
//					price = getJsonValueByKey(jsonLineItem, "Prc");
//
//					jo.put("id", i);
//					jo.put("action", StringUtils.isEmpty(exch) ? "" : exch);
//					jo.put("limit", StringUtils.isEmpty(price) ? "" : price);
//					jo.put("tif", StringUtils.isEmpty(qty) ? "" : qty);
//					jo.put("currency", StringUtils.isEmpty(tranType) ? "" : tranType);
//					ja.add(jo);
//
//					mapJsonResponse.put(symbol, jo);
//
//					i++;
//				}
//			}
//		}
//		chartOpenOrderResponseData.putAll(mapJsonResponse);
//	}
//
//	/**
//	 * @param request
//	 * @param response
//	 * @return
//	 * @throws IOException
//	 * @throws ParseException
//	 */
//	@RequestMapping(value = "/fetchPosition", method = RequestMethod.GET, produces = "application/json")
//	public JSONObject fetchPosition(HttpServletRequest request, HttpServletResponse response)
//			throws IOException, ParseException {
//
//		HttpSession session = null;
//		session = request.getSession();
//		String userId = (String) session.getAttribute("userId");
//		String PublicKey4 = (String) session.getAttribute("publicKey4");
//		String tomcatCount = (String) session.getAttribute("TomcatCount");
//		JSONObject requestData = new JSONObject();
//
//		requestData.put("uid", userId);
//		requestData.put("actid", userId);
//		requestData.put("type", "DAY");
//		requestData.put("s_prdt_ali", "CNC:CNC||MIS:MIS||NRML:NRML");
//
//		JsonObject positionJsonObj = new JsonObject();
//		JsonArray positionArrObj = new JsonArray();
//		JSONObject finalResponseJsonObject = new JSONObject();
//
//		try {
//			String jsonReqData = requestData.toJSONString();
//			String jKey = CommonFunction.hashData(PublicKey4);
//
//			StringBuffer PositionBook = new StringBuffer(marketwatchProvider.getPositionBookurl());
//			PositionBook.append("jsessionid=" + "." + tomcatCount + "&jData=" + jsonReqData + "&jKey=" + jKey + "");
//
//			URL reqUrl = new URL(PositionBook.toString());
//			HttpURLConnection httpConnection = (HttpURLConnection) reqUrl.openConnection();
//			httpConnection.setRequestMethod("POST");
//			httpConnection.setRequestProperty("Accept", "application/json");
//
//			if (httpConnection.getResponseCode() != 200) {
//				throw new RuntimeException("Failed : HTTP error code : " + httpConnection.getResponseCode());
//			}
//
//			BufferedReader br2 = new BufferedReader(new InputStreamReader((httpConnection.getInputStream())));
//			String output;
//			while ((output = br2.readLine()) != null) {
//
//				JsonParser parser = new JsonParser();
//				Object obj = parser.parse(output);
//				positionJsonObj.add("position", (JsonElement) obj);
//				positionArrObj = positionJsonObj.getAsJsonArray("position");
//			}
//			String symbol = "";
//			Integer i = 1;
//			for (JsonElement object : positionArrObj) {
//				JsonElement jsonLineItem = (JsonElement) object;
//				JSONObject jo = new JSONObject();
//
//				if ("Ok".equalsIgnoreCase(getJsonValueByKey(jsonLineItem, "stat"))) {
//
//					String netQty = getJsonValueByKey(jsonLineItem, "Netqty");
//					String ltp = getJsonValueByKey(jsonLineItem, "LTP");
//					String mtoM = getJsonValueByKey(jsonLineItem, "MtoM");
//					String prevClose = getJsonValueByKey(jsonLineItem, "MtoM");
//					symbol = jsonLineItem.getAsJsonObject().get("Symbol").getAsString();
//
//					jo.put("id", i);
//					jo.put("quantity", StringUtils.isEmpty(netQty) ? "" : netQty);
//					jo.put("basis", StringUtils.isEmpty(ltp) ? "" : ltp);
//					jo.put("price", StringUtils.isEmpty(mtoM) ? "" : mtoM);
//					jo.put("prevClose", StringUtils.isEmpty(prevClose) ? "" : prevClose);
//					jo.put("currency", "INR");
//
//					finalResponseJsonObject.put(symbol, jo);
//				}
//
//				i++;
//			}
//
//			httpConnection.disconnect();
//
//		} catch (Exception e) {
//			//logger.error("Exception occured during fetchPosition() : ", e.getMessage());
//		}
//		return finalResponseJsonObject;
//	}
//
//	/**
//	 * @param jsonLineItem
//	 * @param key
//	 * @return
//	 */
//	private String getJsonValueByKey(JsonElement jsonLineItem, String key) {
//		return jsonLineItem.getAsJsonObject().get(key).getAsString();
//	}
//
//	/**
//	 * This method will retrieve MCX scripts to the user based on the search
//	 * criteria from the chartIq.
//	 * 
//	 * @param properties
//	 * @param string
//	 * @param symbols
//	 * @param filter
//	 * @return
//	 */
//	private List<String> addMcxInstrumentScript(Iterable<Entry<String, Object>> properties, String string,
//			List<String> symbols, String filter) {
//
//		if ("ALL".equalsIgnoreCase(filter) || "COMMODITY".equalsIgnoreCase(filter)) {
//			String mcxNameUnderlyingAsset = "";
//			String mcxOptionType = "";
//			String mcxOriginalExpiryDate = "";
//			String mcxExchange = "";
//			StringBuilder sbNameAndExchange = new StringBuilder();
//
//			for (Map.Entry<String, Object> propertie : properties) {
//				if ("mcxNameUnderlyingAsset".equalsIgnoreCase(propertie.getKey())) {
//					mcxNameUnderlyingAsset = propertie.getValue().toString() + "|";
//				}
//				if ("mcxOptionType".equalsIgnoreCase(propertie.getKey())) {
//					mcxOptionType = propertie.getValue().toString();
//				}
//				if ("mcxExchange".equalsIgnoreCase(propertie.getKey())) {
//					mcxExchange = propertie.getValue().toString();
//				}
//				if ("mcxOriginalExpiryDate".equalsIgnoreCase(propertie.getKey())) {
//					mcxOriginalExpiryDate = propertie.getValue().toString() + "|";
//				}
//			}
//			sbNameAndExchange.append(mcxOptionType);
//			sbNameAndExchange.append("  ");
//			sbNameAndExchange.append("(");
//			sbNameAndExchange.append(mcxExchange);
//			sbNameAndExchange.append(")");
//			sbNameAndExchange.append("|");
//			symbols.add(mcxNameUnderlyingAsset + sbNameAndExchange.toString() + mcxOriginalExpiryDate);
//
//			logger.info("mcxseries data :::: ",
//					mcxNameUnderlyingAsset + sbNameAndExchange.toString() + mcxOriginalExpiryDate);
//		}
//		return symbols;
//	}
//
//	/**
//	 * This method will retrieve NFO scripts to the user based on the search
//	 * criteria from the chartIq.
//	 * 
//	 * @param properties
//	 * @param string
//	 * @param symbols
//	 * @param filter
//	 * @return
//	 */
//	private List<String> addNsefoScript(Iterable<Entry<String, Object>> properties, String string, List<String> symbols,
//			String filter) {
//
//		StringBuilder sb = new StringBuilder();
//		if ("ALL".equalsIgnoreCase(filter) || "F".equalsIgnoreCase(filter)) {
//			String nfoSymbol = "";
//			String nfoStockname = "";
//			String nfostrike_price = "";
//			String nfoExchange = "";
//			StringBuilder sbNameAndExchange = new StringBuilder();
//
//			// nfoExchange
//
//			for (Map.Entry<String, Object> propertie : properties) {
//				if ("nfoSymbol".equalsIgnoreCase(propertie.getKey())) {
//					nfoSymbol = propertie.getValue().toString() + "|";
//				}
//				if ("nfoStockname".equalsIgnoreCase(propertie.getKey())) {
//					nfoStockname = propertie.getValue().toString();
//				}
//				if ("nfoExchange".equalsIgnoreCase(propertie.getKey())) {
//					nfoExchange = propertie.getValue().toString();
//				}
//				if ("nfostrike_price".equalsIgnoreCase(propertie.getKey())) {
//					nfostrike_price = propertie.getValue().toString() + "|";
//				}
//			}
//			sbNameAndExchange.append(nfoStockname);
//			sbNameAndExchange.append("  ");
//			sbNameAndExchange.append("(");
//			sbNameAndExchange.append(nfoExchange);
//			sbNameAndExchange.append(")");
//			sbNameAndExchange.append("|");
//			symbols.add(nfoSymbol + sbNameAndExchange.toString() + nfostrike_price);
//
//			logger.info("nfoseries data :::: ", nfoSymbol + sbNameAndExchange.toString() + nfostrike_price);
//		}
//		return symbols;
//	}
//
//	/**
//	 * This method will retrieve NSE scripts to the user based on the search
//	 * criteria from the chartIq.
//	 * 
//	 * @param properties
//	 * @param string
//	 * @param symbols
//	 * @param filter
//	 * @return
//	 */
//	private List<String> addNscemScript(Iterable<Entry<String, Object>> properties, String string, List<String> symbols,
//			String filter) {
//
//		if ("ALL".equalsIgnoreCase(filter) || "EQUITY".equalsIgnoreCase(filter)) {
//			String nseSymbol = "";
//			String nseName = "";
//			String nseSeries = "";
//			String nseExchange = "";
//			StringBuilder sbNameAndExchange = new StringBuilder();
//
//			// nfoExchange
//
//			for (Map.Entry<String, Object> propertie : properties) {
//				if ("nseSymbol".equalsIgnoreCase(propertie.getKey())) {
//					nseSymbol = propertie.getValue().toString() + "|";
//				}
//				if ("nseName".equalsIgnoreCase(propertie.getKey())) {
//					nseName = propertie.getValue().toString();
//				}
//				if ("nseExchange".equalsIgnoreCase(propertie.getKey())) {
//					nseExchange = propertie.getValue().toString();
//				}
//				if ("nseSeries".equalsIgnoreCase(propertie.getKey())) {
//					nseSeries = propertie.getValue().toString();
//				}
//			}
//			sbNameAndExchange.append(nseName);
//			sbNameAndExchange.append("  ");
//			sbNameAndExchange.append("(");
//			sbNameAndExchange.append(nseExchange);
//			sbNameAndExchange.append(")");
//			sbNameAndExchange.append("|");
//			symbols.add(nseSymbol + sbNameAndExchange.toString() + nseSeries);
//
//			logger.info("nseseried data :::: ", nseSymbol + sbNameAndExchange.toString() + nseSeries);
//		}
//		return symbols;
//	}
//
//	@RequestMapping(value = "/home", method = RequestMethod.GET, produces = "application/json")
//	public ModelAndView navigateToChartIq(HttpServletRequest request, HttpServletResponse response) {
//		//ModelAndView mav = new ModelAndView("home");
//		//return mav;
//		
//        ModelAndView mav=null;
//		 
//		 HttpSession session = null;
//			session = request.getSession();
//			String userId = (String) session.getAttribute("userId");
//			
//			System.out.println("userId=="+userId);
//			
//			if(userId==null) {
//
//				mav=new ModelAndView("login");
//				mav.addObject("userId","null");
//			}else {
//				mav=new ModelAndView("home");
//			}
//			
//			//mav=new ModelAndView("exchange-light");
//			return mav; 
//	}
//
//	@RequestMapping(value = "/exchange1", method = RequestMethod.GET, produces = "application/json")
//	public ModelAndView helloWorld(Model m) {
//		ModelAndView mav = new ModelAndView("exchange");
//		return mav;
//	}
//	
//	@RequestMapping(value = "/placeOrderfromChartIq", method = RequestMethod.POST)
//	public String PlaceOrderPage(@RequestParam("s_prdt_ali") String s_prdt_ali, @RequestParam("uid") String uid,
//			@RequestParam("actid") String actid, @RequestParam("Tsym") String Tsym, @RequestParam String exch,
//			@RequestParam String Ttranstype, @RequestParam String Ret, @RequestParam String prctyp,
//			@RequestParam String qty, @RequestParam String discqty, @RequestParam String MktPro,
//			@RequestParam String Price, @RequestParam String TrigPrice, @RequestParam String Pcode,
//			@RequestParam String DateDays, @RequestParam String AMO, @RequestParam String PosSquareFlg,
//			@RequestParam String MinQty, @RequestParam String orderSource, @RequestParam String TokenNo,
//			@RequestParam String naicCode, @RequestParam String action, HttpServletRequest request,
//			HttpServletResponse response) {
//
//		String outputValue = "";
//		HttpSession session = null;
//		session = request.getSession();
//		String userId = (String) session.getAttribute("userId");
//		String PublicKey4 = (String) session.getAttribute("publicKey4");
//		String tomcatCount = (String) session.getAttribute("TomcatCount");
//
//		JSONObject PlaceOrderInput = new JSONObject();
//
//		PlaceOrderInput.put("s_prdt_ali", s_prdt_ali);
//		PlaceOrderInput.put("qty", qty);
//		PlaceOrderInput.put("uid", uid);
//		PlaceOrderInput.put("prctyp", prctyp);
//		PlaceOrderInput.put("orderSource", orderSource);
//		PlaceOrderInput.put("naicCode", naicCode);
//		PlaceOrderInput.put("exch", exch);
//		PlaceOrderInput.put("Tsym", Tsym);
//
//		PlaceOrderInput.put("discqty", discqty);
//		PlaceOrderInput.put("actid", actid);
//		PlaceOrderInput.put("Ttranstype", Ttranstype);
//		PlaceOrderInput.put("TrigPrice", TrigPrice);
//		PlaceOrderInput.put("TokenNo", TokenNo);
//		PlaceOrderInput.put("Ret", Ret);
//		PlaceOrderInput.put("Price", Price);
//		PlaceOrderInput.put("PosSquareFlg", PosSquareFlg);
//		PlaceOrderInput.put("Pcode", Pcode);
//
//		PlaceOrderInput.put("MktPro", MktPro);
//		PlaceOrderInput.put("MinQty", MinQty);
//		PlaceOrderInput.put("DateDays", DateDays);
//		PlaceOrderInput.put("AMO", AMO);
//
//		try {
//			String eJdata = PlaceOrderInput.toJSONString();
//			String jKey = CommonFunction.hashData(PublicKey4);
//
//			StringBuffer PlaceOrder = new StringBuffer(marketwatchProvider.getPlaceOrderurl());
//			PlaceOrder.append("jsessionid=" + "." + tomcatCount + "&jData=" + eJdata + "&jKey=" + jKey + "");
//
//			URL PlaceOrderurl = new URL(PlaceOrder.toString());
//			logger.info("PlaceOrderurl : " + PlaceOrderurl.toString());
//			HttpURLConnection PlaceOrderconn = (HttpURLConnection) PlaceOrderurl.openConnection();
//
//			PlaceOrderconn.setRequestMethod("POST");
//			PlaceOrderconn.setRequestProperty("Accept", "application/json");
//			if (PlaceOrderconn.getResponseCode() != 200) {
//				throw new RuntimeException("Failed : HTTP error code : " + PlaceOrderconn.getResponseCode());
//			}
//			BufferedReader br2 = new BufferedReader(new InputStreamReader((PlaceOrderconn.getInputStream())));
//			String output;
//			JSONObject PlaceOrderJson = null;
//			while ((output = br2.readLine()) != null) {
//				Object obj = JSONValue.parse(output);
//				PlaceOrderJson = (JSONObject) obj;
//
//			}
//			outputValue = PlaceOrderJson.toJSONString();
//
//		} catch (Exception e) {
//			logger.error("Unexpected PlaceOrder error", e.getMessage());
//
//		}
//		return outputValue;
//	}
//
//}
