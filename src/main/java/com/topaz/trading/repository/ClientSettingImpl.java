package com.topaz.trading.repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.topaz.trading.model.Client;
import com.topaz.trading.model.ClientSetting;
import com.topaz.trading.model.MarketWacthScript;

@Repository
@Transactional
public class  ClientSettingImpl  { 
	
	
	@Autowired
	private SessionFactory sessionFactory;

	public Session getSession() {
		return sessionFactory.getCurrentSession();
	}

	
	public List<ClientSetting> ScriptListSortingOrderfromPrevioueLoad(String sortvalue) {
		List<ClientSetting> list=null;	    
    	try {
    		Session session = this.sessionFactory.getCurrentSession();
    	//ASC|DESC
    	 Query qry=(Query) session.createQuery("update ClientSetting set sortingbyorder='ASC' where script_sorting=:sortvalue ").setParameter("sortvalue",sortvalue);	 		
 		 int val=qry.executeUpdate();
    	
    	list = session.createQuery("from ClientSetting where Status='1' order by Id desc").list();

    	}catch(Exception e){	    		
   		 System.out.println("Exception  database:"+e);
   			
   		}
        return list;
	}
	
	@Transactional
	public List<ClientSetting> ScriptListSortingOrderDefault(String UserId,String SortingField,String SortingOrder) {
	
		Session session = this.sessionFactory.getCurrentSession();
		List<ClientSetting> list=null;	    
    	try {    		
    		ClientSetting clientVal= new ClientSetting();			
			clientVal.setClientid(UserId);
			clientVal.setSortingbyfield(SortingField);
			clientVal.setSortingbyorder(SortingOrder);			
			session.save(clientVal);
 		list = session.createQuery("from ClientSetting where clientid='"+UserId+"'").list();
    	}catch(Exception e){	    		
   		 System.out.println("Exception  database:"+e);
   			
   		}
        return list;
	}


	public List<ClientSetting> CheckScriptListSortingOrderDefault(String userId) {
		List<ClientSetting> list=null;	    
    	try {
	    	Session session = this.sessionFactory.getCurrentSession();
    	   	
    	list = session.createQuery("from ClientSetting where clientid='"+userId+"' ").list();

    	}catch(Exception e){	    		
   		 System.out.println("Exception  database:"+e);
   			
   		}
        return list;
		
	}

	
	   







		public List<ClientSetting> UpdatebySortingOrder(String userId, String SortingbyOrderId) {
			
			
			List<ClientSetting> list=null;
	    	try {
	    	Session session = this.sessionFactory.getCurrentSession();
			if(SortingbyOrderId.equalsIgnoreCase("desc")) {
    			Query qry=session.createQuery("update ClientSetting set sortingbyorder='asc'  where clientid='"+userId+"' and sortingbyorder='"+SortingbyOrderId+"' ");	 
		    	int val=qry.executeUpdate();
		    	list = session.createQuery("from ClientSetting where clientid='"+userId+"'").list();
				}
			else if(SortingbyOrderId.equalsIgnoreCase("asc")){
				Query qry=session.createQuery("update ClientSetting set sortingbyorder='desc'  where  clientid='"+userId+"' and sortingbyorder='"+SortingbyOrderId+"' ");	 
		    	int val=qry.executeUpdate();
		    	list = session.createQuery("from ClientSetting where clientid='"+userId+"'").list();
			}
			
			
		}catch(Exception e){
	   		
	   		 System.out.println("Exception  database:"+e);
	   			
	   		}
	    		return list;
		}


		public List<ClientSetting> UpdatebySortingbyfieldId(String userId, String sortingbyfieldId ,String SortingbyOrderId) {
			List<ClientSetting> list=null;
	    	try {
	    	Session session = this.sessionFactory.getCurrentSession();
	    	if(SortingbyOrderId.equals("asc")) {
	    		if(sortingbyfieldId.equalsIgnoreCase("exchange") || sortingbyfieldId!="exchange") {
	    			Query qry=session.createQuery("update ClientSetting set sortingbyfield='"+sortingbyfieldId+"',sortingbyorder='desc' where clientid='"+userId+"' and sortingbyfield='"+sortingbyfieldId+"' and sortingbyorder='"+SortingbyOrderId+"' ");	 
			    	int val=qry.executeUpdate();
			    	list = session.createQuery("from ClientSetting where clientid='"+userId+"'").list();
					}
	    	}
	    	else if(SortingbyOrderId.equals("desc")){
	    		if(sortingbyfieldId.equalsIgnoreCase("exchange") || sortingbyfieldId!="exchange") {
	    			Query qry=session.createQuery("update ClientSetting set sortingbyfield='"+sortingbyfieldId+"',sortingbyorder='asc' where clientid='"+userId+"' and sortingbyfield='"+sortingbyfieldId+"' and sortingbyorder='"+SortingbyOrderId+"' ");	 
			    	int val=qry.executeUpdate();
			    	list = session.createQuery("from ClientSetting where clientid='"+userId+"'").list();
					}
	    	}
			
			
			
		}catch(Exception e){
	   		
	   		 System.out.println("Exception  database:"+e);
	   			
	   		}
	    		return list;
		}


		


	
	
	
}
