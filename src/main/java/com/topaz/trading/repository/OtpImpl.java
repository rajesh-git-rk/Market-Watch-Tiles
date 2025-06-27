package com.topaz.trading.repository;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.topaz.trading.model.Client;
import com.topaz.trading.model.OtpMobile;

@Repository

public class OtpImpl {

	@Autowired
	private SessionFactory sessionFactory;
	
	
	public Session getSession() {
	    return sessionFactory.getCurrentSession();
	}

	@Transactional
	public List<OtpMobile> OTPValidationfromUser(String clientid, String userOTP) {
		
		List<OtpMobile>list=null;
    	Query qry=null;
		Session session = this.sessionFactory.getCurrentSession();	
		qry= session.createQuery("from  OtpMobile where clientid='"+clientid+"' AND otp='"+userOTP+"'");
		list=qry.list();
		return list;
	}
	@Transactional
	public List<OtpMobile> panNumberValidationByUser(String clientid, String pannumber) {
		List<OtpMobile>list=null;
    	Query qry=null;
		Session session = this.sessionFactory.getCurrentSession();	
		qry= session.createQuery("from  OtpMobile where clientid='"+clientid+"' AND pannumber='"+pannumber+"'");
		list=qry.list();
		return list;
	}
	
	@Transactional
	public void OTpUpdateonMobile(String clientid, String otpNumber,String cellAddr,String mode) {
		System.out.println("dai impl  clientid "+clientid+" otpNumber "+otpNumber+" cellAddr "+cellAddr+" mode "+mode); 
		Query qry=null;
		Session session = this.sessionFactory.getCurrentSession();	
		qry= session.createQuery("update  OtpMobile set otp='"+otpNumber+"', mode='"+mode+"' where clientid='"+clientid+"'and phonenumber='"+cellAddr+"'");
		int val=qry.executeUpdate(); 
		
	}
	
	@Transactional
	public void OTpUpdateonEmail(String clientid, String otpNumber,String EmailIdTag,String mode) {
		Query qry=null;
		Session session = this.sessionFactory.getCurrentSession();	
		qry= session.createQuery("update  OtpMobile set otp='"+otpNumber+"' , mode='"+mode+"' where clientid='"+clientid+"'and emailid='"+EmailIdTag+"'");
		int val=qry.executeUpdate(); 
	}
	
	/*@Transactional  
    public List<OtpMobile> otpVerifyUpdate(OtpMobile otpVal) {
		
    	List<OtpMobile> list=null;
    	Query qry=null;
		Session session = this.sessionFactory.getCurrentSession();
		//Transaction  trans=session.beginTransaction();
    	System.out.println("phonenumber::::"+otpVal.getPhonenumber()+"otp::"+otpVal.getOtp());
    	int val=(Integer) session.save(otpVal);
    	//trans.commit();
    	session.getTransaction().commit();
	return list;
    }*/

	

	  @Transactional  
	    public List<OtpMobile> otpVerifyUpdate(String otpVal) {
	    	
	    	List<OtpMobile> list=null;
	    	Query qry=null;
			Session session = this.sessionFactory.getCurrentSession();
		   	int val=(Integer) session.save(otpVal);
		
		return list;
	    }
	  
	  
	  @Transactional
		public int otpVerifyUpdatefromUser(String otp, String phonenumber) {
			  Query qry=null;
			  List<OtpMobile> list=null;
				Session session = this.sessionFactory.getCurrentSession();	
				
				OtpMobile otpval=new OtpMobile();
				otpval.setOtp(otp);
				otpval.setPhonenumber(phonenumber);
				int val=(Integer) session.save(otpval);
				
				//qry= session.createQuery("update  OtpMobile set otp='"+otp+"'  where  phonenumber='"+phonenumber+"'");
				//int val=qry.executeUpdate(); 
				return val;	
				
		}
		  
		  @Transactional
			public List<OtpMobile> otpCheckfromUser(String otp, String phonenumber) {
				  Query qry=null;
				  List<OtpMobile> list=null;
					Session session = this.sessionFactory.getCurrentSession();	
					qry= session.createQuery("from  OtpMobile  where  phonenumber='"+phonenumber+"' AND otp='"+otp+"'");
					list=qry.list();
					return list;	
					
			}


		  @Transactional
		  public List<OtpMobile> getClientIdbyEmailOrSMS(String userinputphn,String userinputemail,String mode) {
				 Query qry=null;
				  List<OtpMobile> list=null;
					Session session = this.sessionFactory.getCurrentSession();	
					if(mode.equalsIgnoreCase("SMS")) {
					qry= session.createQuery("from  OtpMobile  where  phonenumber='"+userinputphn+"' ");
					}
					else {
						qry= session.createQuery("from  OtpMobile  where   emailid='"+userinputemail+"'");

					}
					list=qry.list();				
					return list;	
			
				
			}

	
	 
	 

}
