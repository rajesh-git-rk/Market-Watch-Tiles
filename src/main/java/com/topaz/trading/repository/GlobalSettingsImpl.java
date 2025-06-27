package com.topaz.trading.repository;

import javax.transaction.Transactional;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import com.topaz.trading.model.GlobalSettings;
import java.util.List;


@Repository
@Transactional
public class GlobalSettingsImpl {

	@Autowired
	private SessionFactory sessionFactory;
	
	public Session getSession() {
		return sessionFactory.getCurrentSession();
	}
	
	
  public  List<GlobalSettings> FooterDetails(){
	  
	 
	  List<GlobalSettings> list=null;
	  try {
	     Session session=this.sessionFactory.getCurrentSession();
	     Query query=session.createQuery("from GlobalSettings where id='1'");
	     list=query.list();
	     //System.out.println("List Size :: "+list.size());
	     
	  
	  }
	  catch(Exception e) {
	       System.out.println("Exception  database:"+e);
	  }
	  return list;
 }


}
