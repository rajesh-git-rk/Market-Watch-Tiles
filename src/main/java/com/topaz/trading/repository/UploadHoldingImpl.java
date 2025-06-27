package com.topaz.trading.repository;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.topaz.trading.model.MarketWacthScript;
import com.topaz.trading.model.NonPOAClient;
import com.topaz.trading.model.T1UploadHolding;
import com.topaz.trading.model.UploadHolding;

@Repository
@Transactional
public class UploadHoldingImpl {

	@Autowired
	private SessionFactory sessionFactory;
	
	public Session getSession() {
		return sessionFactory.getCurrentSession();
	}
	
	 public List<UploadHolding> getUploadHoldingData() {
	    		    	
	    	
	    	List<UploadHolding> list=null;
	    	try {
	    	Session session = this.sessionFactory.getCurrentSession();
	    	
            Query query= session.createQuery("from UploadHolding");
	    	 
	    	 list = query.list();
	    	
	    	}catch(Exception e){
	    		
	   		 System.out.println("Exception  database:"+e);
	   			
	   		}
	        return list;
	    }
	 
	 public List<T1UploadHolding> getT1UploadHoldingData() {
	    	
	    	
	    	List<T1UploadHolding> list=null;
	    	try {
	    	Session session = this.sessionFactory.getCurrentSession();
	    	
            Query query= session.createQuery("from T1UploadHolding");
	    	 
	    	 list = query.list();
	    	
	    	}catch(Exception e){
	    		
	   		 System.out.println("Exception  database:"+e);
	   			
	   		}
	        return list;
	    }
	 
	 public List<MarketWacthScript>  getISINNumber(String Symbol){
		 
		 List<MarketWacthScript> list=null;
	    	try {
	    	Session session = this.sessionFactory.getCurrentSession();
	    	
         Query query= session.createQuery("from MarketWacthScript where nseSymbol='"+Symbol+"'");
	    	 
	    	 list = query.list();
	    	
	    	}catch(Exception e){
	    		
	   		 System.out.println("Exception  database:"+e);
	   			
	   		}
	        return list;
	 }
	 
	 public List<UploadHolding> getNONPOAList1() {
	    	
	    	
	    	List<NonPOAClient> list=null;
	    	List<UploadHolding> list1=null;
	    	try {
	    	Session session = this.sessionFactory.getCurrentSession();
	    	
	    	Query query= session.createQuery("from NonPOAClient");
	    	 
	    	 list = query.list();
	    	 System.out.println("UploadHolding size : "+list.size());
	    	 String clientcode="";
	    	 for (int i = 0; i < list.size(); i++) {
	    		 clientcode=list.get(i).getClientcode();
			
	    	 
	    	// String clientcode=list.get(0).getClientcode();
	    	
	    	//System.out.println("clientcode:::"+clientcode);
	    	
	    	Query query1= session.createQuery("from UploadHolding where accountid='"+clientcode+"'");
	    	
	    	 list1 = query1.list();
	    	 }
	   // 	Query query2= session.createQuery("from clientcode NonPOAClient");
	    	
	    	}catch(Exception e){
	    		
	   		 System.out.println("Exception  database:"+e);
	   			
	   		}
	        return list1;
	    }
	 
	 public List<T1UploadHolding> getNONPOAList2() {
	    	
	    	
	    	List<NonPOAClient> list=null;
	    	List<T1UploadHolding> list1=null;
	    	try {
	    	Session session = this.sessionFactory.getCurrentSession();
	    	
      Query query= session.createQuery("from NonPOAClient");
	    	 
	    	 list = query.list();
	    	 
	    	 
	    	 System.out.println("T1UploadHolding size : "+list.size());
	    	 String clientcode="";
	    	 for (int i = 0; i < list.size(); i++) {
	    		 clientcode=list.get(i).getClientcode();
			
	    	 
	    	 
	    	
	    	//String clientcode=list.get(0).getClientcode();
	    	
	    	//System.out.println("clientcode:::"+clientcode);
	    	
	    	Query query1= session.createQuery("from T1UploadHolding where accountid='"+clientcode+"'");
	    	
	    	 list1 = query1.list();
	    	 }
	   // 	Query query2= session.createQuery("from clientcode NonPOAClient");
	    	
	    	}catch(Exception e){
	    		
	   		 System.out.println("Exception  database:"+e);
	   			
	   		}
	        return list1;
	    }
	    
	
}
