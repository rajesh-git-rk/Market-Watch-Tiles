package com.topaz.trading.repository;

import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import org.hibernate.Query;
import org.hibernate.SQLQuery;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.transform.Transformers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.topaz.trading.model.Alerts;
import com.topaz.trading.model.Client;
import com.topaz.trading.model.MarketWacthScript;
import com.topaz.trading.model.MarketWatch;
import com.topaz.trading.model.OtpMobile;

@Repository
@Transactional
public class ScriptImp {


	@Autowired
	private SessionFactory sessionFactory;
	
	
	public Session getSession() {
	    return sessionFactory.getCurrentSession();
	}


	
	      
	    public List<MarketWacthScript> save(MarketWacthScript script) {
	    	
	    	List<MarketWacthScript> list=null;
		
		Session session = this.sessionFactory.getCurrentSession();

		MarketWatch mar= new MarketWatch();
		 
		 mar.setMarketwatchid(11);
		// mar.setMarketwatchid(script.getMarketwatchid().getMarketwatchid());
		
		 script.setMarketwatchid(mar);
		int val=(Integer) session.save(script);
		list = session.createQuery("from MarketWacthScript where token='"+script.getToken()+"'").list();		
		String scrival=String.valueOf(val);
		
		return list;
	    }
	    
	    
	    
	    
	    public List<MarketWacthScript> listAll() {
	    	
	    	
	    	ArrayList<MarketWacthScript> entries=null;
	    	
	    	List<MarketWacthScript> list=null;
	    	try {
	    	Session session = this.sessionFactory.getCurrentSession();
	    	
	    	String mw="MW1";

	    	
	    	
	    	list = session.createQuery("from MarketWacthScript where Status='1' order by Id desc").list();

	    	}catch(Exception e){
	    		
	   		 System.out.println("Exception  database:"+e);
	   			
	   		}
	        return list;
	    }
	    

	    
	    public int delete(String id) {
	    	
	    	int deleId=0;
	    	try {
	    	
	    	Session session = this.sessionFactory.getCurrentSession();
	    	
	    	Query deleteid= session.createQuery("delete from MarketWacthScript where token='"+id+"'");
	    	
	    	deleId=deleteid.executeUpdate();
	    	
	    	}catch(Exception e){
	    		
		   		 System.out.println("Exception  database:"+e);
		   			
		   		}

	    	return deleId;
	    }
	    
	    	 // Alert Methods   
	    
	      
	    public List<Alerts> AlertSave(Alerts script) {
	    	
	    	List<Alerts> list=null;
	    	
		Query qry=null;
		
		Session session = this.sessionFactory.getCurrentSession();
		int val=(Integer) session.save(script);
		
		System.out.println("val::::::"+val);
		
		System.out.println("script::::::"+script.getId());
		
		qry=session.createQuery("Update Alerts set alertdeleteid='"+script.getId()+"' where id='"+script.getId()+"'");
		
		int valqry=qry.executeUpdate();
		
		list = session.createQuery("from Alerts where id='"+script.getId()+"'").list();

		
		String scrival=String.valueOf(val);
		
		return list;
	    }
	    
	    
	    
	    public List<Alerts> getAlertlistAll() {
	    	
	    	
	    	ArrayList<Alerts> entries=null;
	    	
	    	List<Alerts> list=null;
	    	try {
	    	Session session = this.sessionFactory.getCurrentSession();
	    	
	    	list = session.createQuery("from Alerts where status='1' OR status='0' order by id desc").list();

	    	}catch(Exception e){
	    		
	   		 System.out.println("Exception  database:"+e);
	   			
	   		}
	        return list;
	    }
	    
	      
	    public List<Alerts> getAlertupdate(String id,Alerts script) {
	    	
	    	List<Alerts> list=null;
	    	
	    	System.out.println("script::::"+id+"alertcon:::"+script.getAlertcondition());
		
		Session session = this.sessionFactory.getCurrentSession();
		//int val=(Integer) session.save(script);
		
		Query qry=session.createQuery("Update Alerts set alertcondition='"+script.getAlertcondition()+"',price='"+script.getPrice()+"'"
				+ ",notificationintervalmin='"+script.getNotificationintervalmin()+"',expirydate='"+script.getExpirydate()+"',timer='"+script.getTimer()+"' "
						+ ",frequency='"+script.getFrequency()+"' where Id='"+id+"'");
		
		int val=qry.executeUpdate();

		
		list = session.createQuery("from Alerts where id='"+id+"'").list();

		
		return list;
	    }
	    
	      
	    public List<Alerts> updatePause(String id,String status) {
	    	
	    	List<Alerts> list=null;
	    	
	    	System.out.println("script::::"+id+"status::"+status);
	    	Query qry=null;
		Session session = this.sessionFactory.getCurrentSession();
		//int val=(Integer) session.save(script);
		
		if(status.equalsIgnoreCase("1")) {
		qry=session.createQuery("Update Alerts set status='0' where id='"+id+"'");
		
	    }else{
	    	qry=session.createQuery("Update Alerts set status='1' where id='"+id+"'");
	    }
		
		int val=qry.executeUpdate();

		
		list = session.createQuery("from Alerts").list();

		
		return list;
	    }
	    
	      
	    public int getDelete(String id) {
	    	
	    	List<Alerts> list=null;
	    	
	    	System.out.println("script::::"+id);
		
		Session session = this.sessionFactory.getCurrentSession();
		//int val=(Integer) session.save(script);
		
		Query qry=session.createQuery("delete from Alerts where id='"+id+"'");
		
		int val=qry.executeUpdate();

		int valunq=Integer.parseInt(id);
		
		return valunq;
	    }
	    
	      
	    public List<Alerts> getTrigger(Alerts script) {
	    	
	    	List<Alerts> list=null;
	    	
	    	boolean userFound = false;
		Session session = this.sessionFactory.getCurrentSession();
		Query qry=null;
		
		
	//	qry=session.createQuery("from Alerts where  price <= '"+script.getPrice()+"'"
	//			+ "AND expirydate='"+script.getExpirydate().trim()+"'AND timer='"+script.getTimer().trim()+"' AND status='1'");
		
		qry=session.createQuery("from Alerts where  price <= '"+script.getPrice()+"' AND status='1'");
		

		List list1 = qry.list();
		

		if ((list1 != null) && (list1.size() > 0)) {
			
			userFound= true;

		}
		
		System.out.println("count:::"+list1.size());

		
		

		
		return list1;
	    }
	    
	    
	  
	    
	    
	   /*   
	    public List<Client> loginVerifyUpdate(Client clientVal) {
	    	
	    	List<Client> list=null;
	    	Query qry=null;
			Session session = this.sessionFactory.getCurrentSession();
	    	int val=(Integer) session.save(clientVal);
			
			System.out.println("val::::::"+val);
	    	
			qry=session.createQuery("Update Client set password='"+clientVal.getPassword()+"' AND tpin='"+clientVal.getTpin()+"' where clientid='"+clientVal.getId()); 
			int val2=qry.executeUpdate();		
		return list;
	    }*/


	    
		public List<Client> SecondTimeloginVerify(String clientid,String tpin) { 			
	    	List<Client>SecondList=null;
	    	Query qry=null;
			Session session = this.sessionFactory.getCurrentSession();	
			qry= session.createQuery("from Client where clientid='"+clientid+"' AND tpin='"+tpin+"'");
			SecondList=qry.list();
			return SecondList;
		}


	    
		public List<Client> FirstTimeloginVerify(String clientid, String password) {
	    	
	    	Query qry=null;
	    	List<Client>list=null;
			Session session = this.sessionFactory.getCurrentSession();	
			qry= session.createQuery("from Client where clientid='"+clientid+"' AND password='"+password+"'");
			 list=qry.list();			 
			return list;
		}


	  
	    
	     
	      
	    public List<Client> loginVerifyUpdate(Client clientVal) {
	    	
	    	List<Client> list=null;
	    	Query qry=null;
			Session session = this.sessionFactory.getCurrentSession();
	    	int val=(Integer) session.save(clientVal);		
		list = session.createQuery("from Client where clientid='"+clientVal.getClientid()+"' AND password='"+clientVal.getPassword()+"'").list();

		
		return list;
	    }


	    
		public List<Client> loginVerifyUpdate(String clientid, String password, String tpin) { 
	    	 
			Session session = this.sessionFactory.getCurrentSession();  	
			List<Client> list=null;	
			
			Client clientVal= new Client();
			
			clientVal.setClientid(clientid);
			clientVal.setPassword(password);
			clientVal.setTpin(tpin);			
			session.save(clientVal);
			list = session.createQuery("from Client where tpin='"+tpin+"' AND  clientid='"+clientid+"'").list();
			
		return list;
	    }


	    
		public List<Client> TpinUpdateonMobile(String clientid, String tpin) {
			List<Client> list=null;
	    	Query qry=null;
			Session session = this.sessionFactory.getCurrentSession();			
			qry = session.createQuery("update Client set tpin='"+tpin+"' where clientid='"+clientid+"'");
			int val=qry.executeUpdate();
			list = session.createQuery("from Client where tpin='"+tpin+"' AND  clientid='"+clientid+"'").list();

			return list;
		
		}


	    
		public List<Client> SaveloginIdAndPassword(String clientid,String password) {
			List<Client> list=null;
	    	Query qry=null;
			Session session = this.sessionFactory.getCurrentSession();	
			
			
			Client clientVal= new Client();
			
			clientVal.setClientid(clientid);
			clientVal.setPassword(password);	
			session.save(clientVal);
			list = session.createQuery("from Client where  clientid='"+clientid+"' and password='"+password+"'").list();

			return list;
		}


	    
		public List<Client> UpdatePasswordAndTpinByClientId(String clientid,String password, String tpin) {
			
	    	List<Client> list=null;
	    	Query qry=null;
			Session session = this.sessionFactory.getCurrentSession();			
			qry = session.createQuery("update Client set tpin='"+tpin+"',password='"+password+"' where clientid='"+clientid+"'");
			int val=qry.executeUpdate();
			list = session.createQuery("from Client where tpin='"+tpin+"' AND password='"+password+"' AND clientid='"+clientid+"'").list();

			return list;
	    	
		}


	    
		public List<Client> UpdatePasswordByClientId(String clientid, String password) {
			List<Client> list=null;
	    	Query qry=null;
			Session session = this.sessionFactory.getCurrentSession();			
			qry = session.createQuery("update Client set password='"+password+"' where clientid='"+clientid+"'");
			int val=qry.executeUpdate();
			list = session.createQuery("from Client where clientid='"+clientid+"'").list();

			return list;
		}


	    
		public List<Client> VerifyClientId(String clientid) {
	    	List<Client> list=null;
	    	Query qry=null;
			Session session = this.sessionFactory.getCurrentSession();				
			list = session.createQuery("from Client where clientid='"+clientid+"'").list();
			return list;
		}



		 
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
	    	
	    	System.out.println("userId "+userId); 
	    	List<Client> list=null;
	    	Session session = this.sessionFactory.getCurrentSession();	
	    	
	    	 
	    	 Query query= session.createSQLQuery("select image from client_tbl where clientid=:userId").addEntity(Client.class).setParameter("userId",userId);
	    	 
	    	 List<Client> images = query.list();
	    	 
			return images;
	    	
		}




	      
	    public int saveMarketWatch(MarketWatch script) {
	    	
	    	List<MarketWatch> list=null;
		
		Session session = this.sessionFactory.getCurrentSession();
		int val=0;
		
		
		try {
		val=(Integer) session.save(script);
 
		}catch(Exception e) {
			
		}
		
		 MarketWacthScript marketscript =new MarketWacthScript();
		 
		 MarketWatch mar= new MarketWatch();
		 
		 mar.setMarketwatchid(val);
		 marketscript.setMarketwatchid(mar);
		
		System.out.println("val::::"+val);
		try {
		 
		 MarketWacthScript marketscrpt = (MarketWacthScript) session.save(marketscript);
		 
       }catch(Exception e) {
			
		}

		
		return val;
	  }
	    
	      
	    public int reNameMarketWatch(MarketWatch script) {
	    	
	    	List<MarketWatch> list=null;
		
		Session session = this.sessionFactory.getCurrentSession();
    	Query qry=null;			
		qry = session.createQuery("update MarketWatch set marketwatch_name='"+script.getMarketwatch_name()+"' where marketwatchid='"+script.getMarketwatchid()+"' AND userId='"+script.getUserId()+"'");
		int val=qry.executeUpdate();
		
		System.out.println("value update:::"+val);
		String scrival=String.valueOf(val);
		
		return val;
	    }

   public List<MarketWatch> reNameMarketWatchList(MarketWatch script) {
	    	
	    	List<MarketWatch> list=null;
		
		Session session = this.sessionFactory.getCurrentSession();
    	Query qry=null;			
		qry = session.createQuery("update MarketWatch set marketwatch_name='"+script.getMarketwatch_name()+"' where marketwatchid='"+script.getMarketwatchid()+"' AND userId='"+script.getUserId()+"'");
		int val=qry.executeUpdate();
		
		System.out.println("value update:::"+val);
		list = session.createQuery("from MarketWatch where marketwatchid='"+script.getMarketwatchid()+"'").list();
		String scrival=String.valueOf(val);
		
		return list;
	    }
	    
	    public int marketDelete(int id) {
	    	
	    	int deleId=0;
	    	try {
	    	
	    	Session session = this.sessionFactory.getCurrentSession();
	    	

	    	//deleId= session.createQuery("Delete FROM MarketWacth  cr WHERE cr.MarketWacthScript.marketwatchid=:sid ").setParameter("sid",id).executeUpdate();
	    	
	    	//Query marketWatchDeleteId= session.createQuery("delete mw,mws from MarketWatch As mw inner join MarketWacthScript As mws on mw.marketwatchid= mws.marketwatchid where marketwatchid="+id+"");
	    	
	    	//deleId=marketWatchDeleteId.executeUpdate();
	    	List<MarketWacthScript> list=null;
	    	list = session.createQuery("from  MarketWacthScript where marketwatchid="+id+"").list();
	    	
	    	
	    	for(MarketWacthScript ss :list) {
	    		
	    		System.out.println("token:::"+ss.getToken());
	    	}
	    	
	    	
           Query MarketWacthScriptDeleteId= session.createQuery("delete from MarketWacthScript where marketwatchid="+id+"");
	    	
	      deleId=MarketWacthScriptDeleteId.executeUpdate();
	      
	      Query MarketWacthScriptDeleteId1= session.createQuery("delete from MarketWatch where marketwatchid="+id+"");
	    	
	     int  deleId1=MarketWacthScriptDeleteId1.executeUpdate();
	    	
	    	}catch(Exception e){
	    		
		   		 System.out.println("Exception  database:"+e);
		   			
		   		}

	    	return deleId;
	    }

	    
	    public int multipleDelete(String id) {
	    	
	    	int deleId=0;
	    	try {
	    	
	    	Session session = this.sessionFactory.getCurrentSession();
	    	
	    	String deleteArray[]=id.split(",");
	    	
	    	
	    	for(int i=0; i<deleteArray.length; i++) {
	    	
	    	System.out.println("delete::"+deleteArray[i]);
	    	Query deleteid= session.createQuery("delete from MarketWacthScript where token='"+deleteArray[i]+"'");
	    	
	    	deleId=deleteid.executeUpdate();
	    	
	    	}
	    	
	    	}catch(Exception e){
	    		
		   		 System.out.println("Exception  database:"+e);
		   			
		   		}

	    	return deleId;
	    }
	    
	    
	    
	    public List<MarketWacthScript> marketWatchlistAll() {
	    	
	    	
	    	ArrayList<MarketWacthScript> entries=null;
	    	
	    	List<MarketWacthScript> list=null;
	    	try {
	    	Session session = this.sessionFactory.getCurrentSession();
	    	
	    	String mw="MW1";

	    	System.out.println("test::ws:::query");
	    		    	
	    	
            Query query= session.createQuery("from MarketWacthScript");
	    	 
	    	 list = query.list();
	    	
	    	System.out.println("test:::e::query");

	    	}catch(Exception e){
	    		
	   		 System.out.println("Exception  database:"+e);
	   			
	   		}
	        return list;
	    }
	    
	    
	    public boolean marketWatchNameCheck(MarketWatch script) {
	    	
	    	
	    	Session session = this.sessionFactory.getCurrentSession();
	    	String marketwatchname=script.getMarketwatch_name();
			
			boolean userFound = false;
			
			Query qry=session.createQuery("from MarketWatch where  marketwatch_name = '"+marketwatchname+"'");
			
			List list1 = qry.list();
			

			if ((list1 != null) && (list1.size() > 0)) {
				
				userFound= true;

			}
	    	return userFound;
	    }
	    
	      
	    public List<MarketWacthScript> saveMobile(MarketWacthScript script) {
	    	
	    	List<MarketWacthScript> list=null;
		
		Session session = this.sessionFactory.getCurrentSession();
		System.out.println("Marketwatch Id:1::"+script.getMarketwatchid().getMarketwatchid());
		MarketWatch mar= new MarketWatch();
		 
		// mar.setMarketwatchid(32);
		 mar.setMarketwatchid(script.getMarketwatchid().getMarketwatchid());
		
		 script.setMarketwatchid(mar);
		int val=(Integer) session.save(script);
		list = session.createQuery("from MarketWacthScript where token='"+script.getToken()+"'").list();		
		String scrival=String.valueOf(val);
		
		return list;
	    }
	    
	    
	    public List<MarketWacthScript> scripListOfMarketId(MarketWacthScript script) {
	    	
	    	
	    	ArrayList<MarketWacthScript> entries=null;
	    	
	    	List<MarketWacthScript> list=null;
	    	try {
	    	Session session = this.sessionFactory.getCurrentSession();
	    	
           int marketwatchId=script.getMarketwatchid().getMarketwatchid();
	    	
	    	
	    	list = session.createQuery("from MarketWacthScript where marketwatchid="+marketwatchId+" order by Id desc").list();

	    	}catch(Exception e){
	    		
	   		 System.out.println("Exception  database:"+e);
	   			
	   		}
	        return list;
	    }
	    
	    
	    
		public List<Client> FingerPrintloginverify(String clientid, Integer fingerprint) {
	    	List<Client> list=null;	    	
			Session session = this.sessionFactory.getCurrentSession();				
			list = session.createQuery("from Client where clientid='"+clientid+"' AND fingerprintid='"+fingerprint+"' ").list();
			return list;
		}
	    
	      
	    public int getDeleteForMobile(String id) {
	    	
	    	List<Alerts> list=null;
	    	
	    	System.out.println("script::::"+id);
		
		Session session = this.sessionFactory.getCurrentSession();

		String deleteArray[]=id.split(",");
    	
		int val=0;
    	for(int i=0; i<deleteArray.length; i++) {
    	
    	System.out.println("delete::"+deleteArray[i]);
        Query qry=session.createQuery("delete from Alerts where alertdeleteid='"+deleteArray[i]+"'");
		
		val=qry.executeUpdate();
    	
    	}
		
		return val;
	  }
	    public List<MarketWacthScript> ScriptListSortingOrderDefaultbyscriptname(String sortingbyfieldId,
				String sortingbyOrderId,String marketwatchid) {
	    	List<MarketWacthScript> list=null;
			try {
	    	Session session = this.sessionFactory.getCurrentSession();   
	    	if(sortingbyOrderId.equals("asc")) {
		    	list = session.createQuery("from MarketWacthScript where status='1' and marketwatchid='"+marketwatchid+"'  ORDER BY displayname desc").list();	    	

	    	}else {
		    	list = session.createQuery("from MarketWacthScript where status='1' and marketwatchid='"+marketwatchid+"' ORDER BY displayname asc").list();	    	

	    	}
			}catch(Exception e){
	    		
		   		 System.out.println("Exception  database:"+e);
		   			
		   		}
			  return list;
		}

	    public List<MarketWacthScript> ScriptListSortingOrderDefaultbyexchangefromProperties(String sortingField,
				String sortingOrder,String marketwatchid) {
			
	    	List<MarketWacthScript> list=null;
			try {
	    	Session session = this.sessionFactory.getCurrentSession();  	    	
		    	list = session.createQuery("from MarketWacthScript where status='1' and marketwatchid='"+marketwatchid+"' ORDER BY exchange desc").list();	  	

			}catch(Exception e){	    		
		   		 System.out.println("Exception  database:"+e);		   			
		   		}
			  return list;
		}

	    public List<MarketWacthScript> ScriptListSortingOrderDefaultbyexchange(String SortingField,String SortingOrder,String marketwatchid) {
			List<MarketWacthScript> list=null;
			try {
	    	Session session = this.sessionFactory.getCurrentSession();   
	    	if(SortingOrder.equals("asc")) {
		    	list = session.createQuery("from MarketWacthScript where status='1' and marketwatchid='"+marketwatchid+"'   ORDER BY exchange desc").list();	    	

	    	}else {
		    	list = session.createQuery("from MarketWacthScript where status='1'   and marketwatchid='"+marketwatchid+"' ORDER BY exchange asc").list();	    	

	    	}
			}catch(Exception e){
	    		
		   		 System.out.println("Exception  database:"+e);
		   			
		   		}
			  return list;
		}
	    
	    @SuppressWarnings("unchecked")
		public List<MarketWacthScript> ScriptListbySortingOrder(String clientId, String SortingbyOrder,String marketwatchid) {
			
			List<MarketWacthScript> list=null;
			try {
		    	Session session = this.sessionFactory.getCurrentSession();
		    	
		    	if(SortingbyOrder.equals("asc")){
		    		list = session.createQuery("from MarketWacthScript where status='1' and marketwatchid='"+marketwatchid+"' and clientid='"+clientId+"' ORDER BY displayname asc").list();	
		    	}
		    	else if(SortingbyOrder.equals("desc")){
		    		list = session.createQuery("from MarketWacthScript where status='1' and marketwatchid='"+marketwatchid+"' and clientid='"+clientId+"' ORDER BY displayname desc").list();	
		    	}
		    	
		    	
		    	
				}catch(Exception e){
		    		
			   		 System.out.println("Exception  database:"+e);
			   			
			   		}
				  return list;
		}




		public List<MarketWacthScript> ScriptListbySortingbyfield(String clientId, String sortingbyfield,String sortingbyOrder,String marketwatchid) {
			List<MarketWacthScript> list=null;
			try {
		    	Session session = this.sessionFactory.getCurrentSession();
		    	
		    	if(sortingbyOrder.equals("asc")){
		    		list = session.createQuery("from MarketWacthScript where status='1' and marketwatchid='"+marketwatchid+"' and clientid='"+clientId+"' ORDER BY exchange desc").list();	
		    	}
		    	else if(sortingbyOrder.equals("desc")){
		    		list = session.createQuery("from MarketWacthScript where status='1' and marketwatchid='"+marketwatchid+"' and clientid='"+clientId+"' ORDER BY exchange asc").list();	
		    	}
		    	
		    	
		    	
				}catch(Exception e){
		    		
			   		 System.out.println("Exception  database:"+e);
			   			
			   		}
				  return list;
				 
		}




		public List<MarketWacthScript> ScriptListSortingOrderDefaultbyexchangeByUser(String clientId,String sortingbyfield, String sortingbyOrder,String marketwatchid) {
			List<MarketWacthScript> list=null;
			try {
	    	Session session = this.sessionFactory.getCurrentSession();    	
	    	list = session.createQuery("from MarketWacthScript where status='1' and marketwatchid='"+marketwatchid+"' and clientid='"+clientId+"' ORDER BY exchange desc").list();	    	
			}catch(Exception e){
	    		
		   		 System.out.println("Exception  database:"+e);
		   			
		   		}
			  return list;
		}




		



		





}
