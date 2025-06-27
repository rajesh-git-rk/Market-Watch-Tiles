package com.topaz.trading.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.topaz.trading.model.Client;

@Repository
@Transactional
public class ClientImpl {

	@Autowired
	private SessionFactory sessionFactory;

	public Session getSession() {
		return sessionFactory.getCurrentSession();
	}

	public List<Client> verifyClientId(String clientid) {
		List<Client> list = null;
		Query qry = null;
		Session session = this.sessionFactory.getCurrentSession();
		list = session.createQuery("from Client where clientid='" + clientid + "'").list();
		return list;
	}

	public List<Client> loginVerifyUpdate(String clientid, String password, String tpin) {

		Session session = this.sessionFactory.getCurrentSession();
		List<Client> list = null;

		Client clientVal = new Client();

		clientVal.setClientid(clientid);
		clientVal.setPassword(password);
		clientVal.setTpin(tpin);
		session.save(clientVal);
		list = session.createQuery("from Client where tpin='" + tpin + "' AND  clientid='" + clientid + "'").list();

		return list;
	}

	public List<Client> FingerPrintloginverify(String clientid, Integer fingerprint) {
		List<Client> list = null;
		Session session = this.sessionFactory.getCurrentSession();
		list = session
				.createQuery("from Client where clientid='" + clientid + "' AND fingerprintid='" + fingerprint + "' ")
				.list();
		return list;
	}

	public List<Client> SecondTimeloginVerify(String clientid, String tpin) {
		List<Client> SecondList = null;
		Query qry = null;
		Session session = this.sessionFactory.getCurrentSession();
		qry = session.createQuery("from Client where clientid='" + clientid + "' AND tpin='" + tpin + "'");
		SecondList = qry.list();
		return SecondList;
	}
	
	public List<Client> SecondTimeloginVerifyByUserId(String clientid) {
		List<Client> SecondList = null;
		Query qry = null;
		Session session = this.sessionFactory.getCurrentSession();
		qry = session.createQuery("from Client where clientid='" + clientid+"' ");
		SecondList = qry.list();
		return SecondList;
	}

	
	public Boolean verifyTpinByUserId(String clientId,String tpin) {		
		Session session = this.sessionFactory.getCurrentSession();
		List<Client> list=session.createQuery("from Client where clientid='" + clientId+"' and tpin='" + tpin+"' ").list();
		
		if(list.size()==0)
		{
			return false;
		}
		
		return true;
	}
	
	public List<Client> UpdatePasswordAndTpinByClientId(String clientid, String password, String tpin) {

		List<Client> list = null;
		Query qry = null;
		Session session = this.sessionFactory.getCurrentSession();
		qry = session.createQuery("update Client set tpin='" + tpin + "',password='" + password + "' where clientid='" + clientid + "'");
		int val = qry.executeUpdate();
		list = session.createQuery(	"from Client where tpin='" + tpin + "' AND password='" + password + "' AND clientid='" + clientid + "'")
				.list();

		return list;

	}

	
	 @Transactional
		public List<Client> SaveProfileImagePath(String clientid,Client FileDB) {
	    	List<Client> list=null;
	    	Query qry=null;
			Session session = this.sessionFactory.getCurrentSession();	
			
			
			Client clientVal= new Client();
			
			//clientVal.setImagename(FileDB.getImagename());  
			//clientVal.setImage(FileDB.getImage());
			session.save(clientVal);
			list = session.createQuery("from Client where  clientid='"+clientid+"' ").list();

			return list;
		}


	    @Transactional
		public List<Client> UpdateProfileImagePath(String userId, Client fileDB) {
	    	List<Client> list=null;
	    	Query qry=null;	    	
			Session session = this.sessionFactory.getCurrentSession();			
			//qry = session.createQuery("update Client set  imagename='"+fileDB.getImagename()+"', image='"+fileDB.getImage()+"' where clientid='"+userId+"'");
			int val=qry.executeUpdate();
			list = session.createQuery("from Client where clientid='"+userId+"'").list();

			return list;
		}


	    
		public List<Client> FetchProfileImage(String userId) {
	    	Session session = this.sessionFactory.getCurrentSession();		
	    	 
	    	 Query query= session.createSQLQuery("select image from client_tbl where clientid=:userId").addEntity(Client.class).setParameter("userId",userId);
	    	 List<Client> images = query.list();
			return images;
	    	
		}

		public List<Client> UpdatePasswordByClientId(String clientid, String newPassword) {
			List<Client> list = null;
			Query qry = null;
			Session session = this.sessionFactory.getCurrentSession();
			qry = session.createQuery("update Client set password='" + newPassword + "' where clientid='" + clientid + "'");
			int val = qry.executeUpdate();
			list = session.createQuery(	"from Client where password='" + newPassword + "' AND clientid='" + clientid + "'")
					.list();

			return list;
		}

		public List<Client> UpdateTpinByClientId(String clientid, String tpin) {
			List<Client> list = null;
			Query qry = null;
			Session session = this.sessionFactory.getCurrentSession();
			qry = session.createQuery("update Client set tpin='" + tpin + "' where clientid='" + clientid + "'");
			int val = qry.executeUpdate();
			list = session.createQuery(	"from Client where tpin='" + tpin + "'  AND clientid='" + clientid + "'")
					.list();

			return list;
		}

		public List<Client> SaveTpinByClientId(String clientid, String tpin) {
			Session session = this.sessionFactory.getCurrentSession();
			List<Client> list = null;

			Client clientVal = new Client();

			clientVal.setClientid(clientid);
			clientVal.setTpin(tpin);
			session.save(clientVal);
			list = session.createQuery("from Client where tpin='" + tpin + "' AND  clientid='" + clientid + "'").list();

			return list;
		}

		public Boolean changeTpinByUserId(String clientId, String confirmtpin, String oldTpin) {
		
			List<Client> list = null;
			Query qry = null;
			Session session = this.sessionFactory.getCurrentSession();
			qry = session.createQuery("update Client set tpin='" + confirmtpin +"'  where clientid='" + clientId+"' and tpin='" + oldTpin+"' ");
			int val = qry.executeUpdate();
			list = session.createQuery(	"from Client where tpin='" + confirmtpin + "'  AND clientid='" + clientId + "'").list();
			
			if(list.size()==0)
			{
				return false;
			}
			
			return true;
		}

		public void SaveClientId(String clientid) {
			List<Client> list = null;
			Query qry = null;
			Session session = this.sessionFactory.getCurrentSession();
		
			Client clientVal= new Client();
			
			clientVal.setClientid(clientid);  
			
			session.save(clientVal);
		}

		


}
