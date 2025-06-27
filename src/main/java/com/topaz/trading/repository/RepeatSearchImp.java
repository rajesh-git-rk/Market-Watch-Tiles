package com.topaz.trading.repository;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.ListIterator;
import java.util.Map;

import org.json.simple.JSONObject;
import org.json.simple.JSONValue;
import org.springframework.stereotype.Repository;

import com.google.gson.Gson;
import com.google.gson.JsonElement;
import com.topaz.trading.model.DocumentExchange;

import io.redisearch.AggregationResult;
import io.redisearch.Document;
import io.redisearch.Query;
import io.redisearch.SearchResult;
import io.redisearch.aggregation.AggregationBuilder;
import io.redisearch.client.Client;

@Repository
public class RepeatSearchImp {

	
	public List<Document> getSerachFilterAll(String inputdata, String server, String porter, String indexname) {

		int port = Integer.parseInt(porter);

		int inputlen = inputdata.length();

		SearchResult res = null;

		List<SearchResult> result = new ArrayList<SearchResult>();

		List<Document> resulval = null;
		//List<Map<String, Object>> resulval1 = null;

		List<DocumentExchange> resul = new ArrayList<DocumentExchange>();

		String password = "mypassword";
		int timeout = 3000;
		int poolSize = 0;
		try {

			Client client = new Client(indexname, server, port);

			System.out.println("inputdata : " + inputdata.toString());
			String doublespace = inputdata.replaceAll("\\s{2,}", " ");

			String[] queryString = doublespace.split(" ");
			StringBuilder queryBuilder = new StringBuilder();

			for (int i = 0; i < queryString.length; i++) { 

				queryBuilder.append(queryString[i]);
				//.append("* ")
			}
			System.out.println("Query: " + queryBuilder.toString());
			res = client.search(new Query(queryBuilder.toString()).limit(0, 1));
			
			//.setSortBy("sort_order", true).

			System.out.println("res::::value:::" + res);

			 resulval = (res.docs);

			class Sortbyname implements Comparator<Document> {
				// Used for sorting in ascending order of
				// name
				@Override
				public int compare(Document o1, Document o2) {

					Integer script1Weight = null;
					Integer script2Weight = null;

					if (o1.getProperties() != null) {
						script1Weight = getOptimalFilterValue(o1, (JSONObject) JSONValue
								.parse(new Gson().fromJson(new Gson().toJson(o1), JsonElement.class).getAsJsonObject()
										.get("properties").toString()));
					}

					if (o2.getProperties() != null) {
						
						script2Weight = getOptimalFilterValue(o2, (JSONObject) JSONValue
								.parse(new Gson().fromJson(new Gson().toJson(o2), JsonElement.class).getAsJsonObject()
										.get("properties").toString()));
					}

					return script1Weight.compareTo(script2Weight);
				}

				private Integer getOptimalFilterValue(Document object, JSONObject getJson1) {
					
					if (getJson1.get("nseExchange") != null) {
						// exchange2 = getJson1.get("nseExchange").toString();
						if (getJson1.get("nseSeries").toString().equalsIgnoreCase("EQ")) {
							return 1;
						} else {
							return 7;
						}
					} else if (getJson1.get("nfoExchange") != null) {
						// exchange2 = getJson1.get("nfoExchange").toString();
						if (getJson1.get("nfooption_type").toString().equalsIgnoreCase("XX")) {
							
							return 2;
						} else {
							return 4;
						}

					} else if (getJson1.get("mcxExchange") != null) {
						// exchange2 = getJson1.get("mcxExchange").toString();
						if (getJson1.get("mcxInstrumentName").toString().equalsIgnoreCase("FUTCOM")
								|| getJson1.get("mcxInstrumentName").toString().equalsIgnoreCase("FUTIDX")) {
							return 3;
						} else {
							return 6;
						}
					}
					return 7;
				}
			}

			/*
			 * class Sortbyname implements Comparator<Document> { // Used for sorting in
			 * ascending order of // name
			 * 
			 * @Override public int compare(Document o1, Document o2) {
			 * 
			 * String exchange1 = ""; String exchange2 = "";
			 * 
			 * if(o1.getProperties() !=null) {
			 * 
			 * 
			 * JsonObject jsonObject = null;
			 * 
			 * JSONObject getJson = new JSONObject();
			 * 
			 * List<Document> li = new ArrayList<Document>();
			 * 
			 * li.add(o1);
			 * 
			 * 
			 * Iterator<Document> iterator = li.iterator();
			 * 
			 * while (iterator.hasNext()) { Gson gs = new Gson();
			 * 
			 * JsonElement element = gs.fromJson(gs.toJson(iterator.next()),
			 * JsonElement.class);
			 * 
			 * jsonObject = element.getAsJsonObject();
			 * 
			 * }
			 * 
			 * String values = jsonObject.get("properties").toString();
			 * 
			 * 
			 * Object obj = JSONValue.parse(values); getJson = (JSONObject) obj;
			 * 
			 * 
			 * if(getJson.get("nseExchange")!=null){ //exchange1 =
			 * getJson.get("nseExchange").toString();
			 * if(getJson.get("nseSeries").toString().equalsIgnoreCase("EQ")) { exchange1 =
			 * "ABC"; }else { exchange1 = "WED"; } }else if(getJson.get("nfoExchange")
			 * !=null) { //exchange1 = getJson.get("nfoExchange").toString();
			 * if(getJson.get("nfooption_type").toString().equalsIgnoreCase("XX")) {
			 * exchange1 ="BCE"; }else { exchange1 = "XEW"; }
			 * 
			 * }else if(getJson.get("mcxExchange") !=null) { //exchange1 =
			 * getJson.get("mcxExchange").toString();
			 * if(getJson.get("mcxInstrumentName").toString().equalsIgnoreCase("FUTCOM") ||
			 * getJson.get("mcxInstrumentName").toString().equalsIgnoreCase("FUTIDX")){
			 * exchange1 ="CBS"; }else { exchange1 = "ZSE"; } }
			 * 
			 * 
			 * }
			 * 
			 * if(o2.getProperties() !=null) {
			 * 
			 * 
			 * JsonObject jsonObject1 = null;
			 * 
			 * JSONObject getJson1 = new JSONObject();
			 * 
			 * List<Document> list = new ArrayList<Document>();
			 * 
			 * list.add(o2);
			 * 
			 * List<JsonObject> entities1 = new ArrayList<JsonObject>();
			 * 
			 * 
			 * Iterator<Document> iterator1 = list.iterator();
			 * 
			 * while (iterator1.hasNext()) { Gson gs1 = new Gson();
			 * 
			 * JsonElement element1 = gs1.fromJson(gs1.toJson(iterator1.next()),
			 * JsonElement.class);
			 * 
			 * jsonObject1 = element1.getAsJsonObject();
			 * 
			 * }
			 * 
			 * String values1 = jsonObject1.get("properties").toString();
			 * 
			 * Object obj1 = JSONValue.parse(values1); getJson1 = (JSONObject) obj1;
			 * 
			 * 
			 * if (getJson1.get("nseExchange") != null) { // exchange2 =
			 * getJson1.get("nseExchange").toString();
			 * if(getJson1.get("nseSeries").toString().equalsIgnoreCase("EQ")) { exchange2 =
			 * "ABC"; }else { exchange2 = "WED"; } } else if (getJson1.get("nfoExchange") !=
			 * null) { //exchange2 = getJson1.get("nfoExchange").toString();
			 * if(getJson1.get("nfooption_type").toString().equalsIgnoreCase("XX")) {
			 * exchange2 ="BCE"; }else { exchange2 = "XEW"; }
			 * 
			 * } else if (getJson1.get("mcxExchange") != null) { //exchange2 =
			 * getJson1.get("mcxExchange").toString();
			 * if(getJson1.get("mcxInstrumentName").toString().equalsIgnoreCase("FUTCOM") ||
			 * getJson1.get("mcxInstrumentName").toString().equalsIgnoreCase("FUTIDX")){
			 * exchange2 ="CBS"; }else { exchange2 = "ZSE"; } }
			 * 
			 * 
			 * }
			 * 
			 * return exchange1.compareTo(exchange2); } }
			 */

			class Sortbydate implements Comparator<Document> {
				// Used for sorting in ascending order of
				// name
				@Override
				public int compare(Document o1, Document o2) {

					String date1 = "";
					String date2 = "";

					if (o1.getProperties() != null) {

						 JSONObject json = (JSONObject) JSONValue
								.parse(new Gson().fromJson(new Gson().toJson(o1), JsonElement.class).getAsJsonObject()
										.get("properties").toString());


						if (json.get("nseExDate") != null) {
							date1 = json.get("nseExDate").toString();
						}

						else if (json.get("nfoexpiry_date") != null) {
							date1 = json.get("nfoexpiry_date").toString();

						} else if (json.get("mcxOriginalExpiryDate") != null) {
							date1 = json.get("mcxOriginalExpiryDate").toString();
						}

					}

					if (o2.getProperties() != null) {

						JSONObject json = (JSONObject) JSONValue
						.parse(new Gson().fromJson(new Gson().toJson(o2), JsonElement.class).getAsJsonObject()
								.get("properties").toString());

						if (json.get("nseExDate") != null) {
							date2 = json.get("nseExDate").toString();

						} else if (json.get("nfoexpiry_date") != null) {
							date2 = json.get("nfoexpiry_date").toString();

						} else if (json.get("mcxOriginalExpiryDate") != null) {
							date2 = json.get("mcxOriginalExpiryDate").toString();
						}

					}

					return date2.compareTo(date1);
				}
			}

//	 System.out.println("\nSorted Before by name");
//     for (int i = 0; i < resulval.size(); i++)
//         System.out.println(resulval.get(i));

		//	Collections.sort(resulval, new Sortbyname().thenComparing(new Sortbydate()));

			// .thenComparing(new Sortbyseries())

			System.out.println("\nSorted After1 by name");
			for (int i = 0; i < resulval.size(); i++) {
				System.out.println(resulval.get(i));

			}

		} catch (Exception ex) {
			ex.printStackTrace();
		}

		return resulval;//.subList(0, 100);

	}
}
