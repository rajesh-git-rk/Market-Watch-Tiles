//package com.topaz.trading.chart.controller;
//
//import java.io.BufferedReader;
//import java.io.InputStreamReader;
//import java.net.HttpURLConnection;
//import java.net.URL;
//
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;
//import javax.servlet.http.HttpSession;
//
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//import org.json.simple.JSONObject;
//import org.json.simple.JSONValue;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestMethod;
//import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.topaz.trading.controller.Cachecontoller;
//import com.topaz.trading.controller.CommonFunction;
//import com.topaz.trading.controller.MarketwatchProvider;
//import com.topaz.trading.controller.Orderbookcontroller;
//import com.topaz.trading.repository.ScriptImp;
//@RestController
//public class ChartiqOrderController {
//
//	@Autowired
//	MarketwatchProvider marketwatchProvider;
//
//	@Autowired
//	ScriptImp scriptImp;
//
//	//private static Logger logger = LogManager.getLogger(ChartiqOrderController.class);
//	
//	private static Logger logger = LoggerFactory.getLogger(ChartiqOrderController.class);
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
