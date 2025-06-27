package com.topaz.trading.repository;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.topaz.trading.model.Alerts;
import com.topaz.trading.model.Client;
import com.topaz.trading.model.SaveAnswer;

@Repository
@Transactional
public class SaveAnswerImpl {

	@Autowired
	private SessionFactory sessionFactory;

	public Session getSession() {
		return sessionFactory.getCurrentSession();
	}
	
	public List<SaveAnswer> SaveAnswerwithQuestionIndex(SaveAnswer saveAnsobj) {

		List<SaveAnswer> list = null;

		Session session = this.sessionFactory.getCurrentSession();
		int val = (Integer) session.save(saveAnsobj);

		list = session.createQuery("from SaveAnswer where clientid= '"+saveAnsobj.getClientid()+"' ").list();

		String SaveAnsVal = String.valueOf(val);

		return list;
	}
	/*public List<SaveAnswer> getAnswerByIndex(Integer index1, Integer index2, String clientid) {
		
		List<SaveAnswer>SecondList=null;
    	Query qry=null;
		Session session = this.sessionFactory.getCurrentSession();	
		qry= session.createQuery("select answers from SaveAnswer where clientid='"+clientid+"' AND indexid IN('"+index1+"','"+index2+"')"); 
		SecondList=qry.list();
		
		return SecondList;
		
	}*/

	public void deleteQuestionAnswerByClientId(String clientid) {

		Session session = this.sessionFactory.getCurrentSession();		
		
		Query qry=session.createQuery("delete from SaveAnswer where clientid='"+clientid+"'");
		
		int val=qry.executeUpdate();
	}

	public List<SaveAnswer> getAnswerByIndex1(Integer index1, String clientid) {
		List<SaveAnswer> index1List=null;
    	Query qry=null;
		Session session = this.sessionFactory.getCurrentSession();	
		qry= session.createQuery("select answers from SaveAnswer where clientid='"+clientid+"' AND indexid='"+index1+"' "); 
		index1List=qry.list();
		
		return index1List;
	}

	public List<SaveAnswer> getAnswerByIndex2(Integer index2, String clientid) {
		
		List<SaveAnswer> index2List=null;
    	Query qry=null;
		Session session = this.sessionFactory.getCurrentSession();	
		qry= session.createQuery("select answers from SaveAnswer where clientid='"+clientid+"' AND indexid ='"+index2+"' "); 
		index2List=qry.list();		
		return index2List;
	}
	

	

}
