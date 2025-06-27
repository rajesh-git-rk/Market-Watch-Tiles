package com.topaz.trading.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.topaz.trading.model.ClientSetting;
import com.topaz.trading.model.FirstTimeLogin;


@Repository
@Transactional
public class LoginImpl {
	
	@Autowired
	private SessionFactory sessionFactory;

	public Session getSession() {
		return sessionFactory.getCurrentSession();
	}

	public List<FirstTimeLogin> getLoginDetailbyUserId(String userId) {
		List<FirstTimeLogin> list=null;	    
    	try {
    		Session session = this.sessionFactory.getCurrentSession();
    	
    	list = session.createQuery("from FirstTimeLogin where clientid='"+userId+"'").list();

    	}catch(Exception e){	    		
   		 System.out.println("Exception  database:"+e);
   		}
    	
        return list;
	}

	public void saveLoginTableDetails(FirstTimeLogin saveLogin) {
		List<FirstTimeLogin> list=null;	    
    	try {
    		Session session = this.sessionFactory.getCurrentSession();
    	
    		sessionFactory.getCurrentSession().save(saveLogin);

    	}catch(Exception e){	    		
   		 System.out.println("Exception  database:"+e);
   			
   		}
	}


}
