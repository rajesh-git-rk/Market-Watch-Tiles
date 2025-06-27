package com.topaz.trading.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.topaz.trading.model.Alerts;
import com.topaz.trading.model.EncryptionTable;
import com.topaz.trading.service.Encryptionservice;

@Repository
@Transactional
public class EncryptionDaoImpl  implements Encryptionservice{

	
	 @Autowired
	    private SessionFactory sessionFactory;     
	    
		
		public Session getSession() {
		    return sessionFactory.getCurrentSession();
		}
		
	@Override
	public void saveEncryptiondetails(EncryptionTable encryptpojo) {
		 sessionFactory.getCurrentSession().save(encryptpojo);
	}

	@Override
	public List<EncryptionTable> getEncrytpionData() {
		List<EncryptionTable> list=null;   				
		Session session = this.sessionFactory.getCurrentSession();
		list = session.createQuery("from EncryptionTable").list();
		return list;
	}

	@Override
	public List<EncryptionTable> UpdateEncryptiondetails(EncryptionTable encryptpojo) {
		List<EncryptionTable> list=null;
    	
		Query qry=null;
		
		Session session = this.sessionFactory.getCurrentSession();	
		list = session.createQuery("from EncryptionTable").list();
		qry=session.createQuery("Update EncryptionTable set encryption='"+list.get(0).getEncryption()+"' , securitykey='"+list.get(0).getSecuritykey()+"' where id='"+list.get(0).getId()+"'");
		
		int valqry=qry.executeUpdate();
		
		list = session.createQuery("from EncryptionTable where id='"+list.get(0).getId()+"'").list();

		
		
		return list;
	}

	
	
	
}
