package com.topaz.trading.repository;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.ListIterator;
import java.util.Map;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.json.simple.JSONObject;
import org.json.simple.JSONValue;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.google.gson.Gson;
import com.google.gson.JsonElement;
import com.topaz.trading.model.BatchScript;
import com.topaz.trading.model.DocumentExchange;
import com.topaz.trading.model.OrderNotification;

import io.redisearch.AggregationResult;
import io.redisearch.Document;
import io.redisearch.Query;
import io.redisearch.SearchResult;
import io.redisearch.aggregation.AggregationBuilder;
import io.redisearch.client.Client;

@Repository
@Transactional
public class IndexDBImp {
	
	
	@Autowired
	private SessionFactory sessionFactory;
	
	
	public Session getSession() {
	    return sessionFactory.getCurrentSession();
	}

	public List<BatchScript> getSerachFilterAll(String inputdata, String server, String porter, String indexname) {


		List<BatchScript> resulval = null;

		try {

			boolean userFound = false;
			Session session = this.sessionFactory.getCurrentSession();
		//	Query qry=null;		

			System.out.println("inputdata : " + inputdata.toString());
			String doublespace = inputdata.replaceAll("\\s{2,}", " ");

			String[] queryString = doublespace.split(" ");
			StringBuilder queryBuilder = new StringBuilder();

			for (int i = 0; i < queryString.length; i++) { 
					
				org.hibernate.Query qry = session.createSQLQuery("select * from batch_script_tbl where nsesymbol like :sf");
				qry.setString("sf",'%'+queryString[i]+'%');
				
			//	org.hibernate.Query qry = session.createQuery("From BatchScript as rb where rb.nseSymbol like :sf");
			//	qry.setString("sf",'%'+queryString[i]+'%');
				
			//	org.hibernate.Query qry=session.createQuery("from BatchScript where nseSymbol like '%:"+queryString[i]+"%' ");
			//	 nseSymbol LIKE '%"+queryString[i]+"%' OR mcxInstrumentCode LIKE '%"+queryString[i]+"%' OR nfoSymbol LIKE '%"+queryString[i]+"%'  ORDER BY weight asc

				System.out.println("qry:::"+qry);
				resulval = qry.list();

				
			}
			
			
			System.out.println("count:::"+resulval.size());
			
		//	queryBuilder.append("*");
			
	//		System.out.println("Query: " + queryBuilder.toString());

		//	res = client.search(new Query(queryBuilder.toString()).limit(0, 100));

			

		} catch (Exception ex) {
			ex.printStackTrace();
		}

		return resulval;


	}
}
