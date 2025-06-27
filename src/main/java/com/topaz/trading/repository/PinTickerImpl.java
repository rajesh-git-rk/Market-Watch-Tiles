package com.topaz.trading.repository;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.topaz.trading.model.PinTicker;

@Repository
@Transactional
public class PinTickerImpl {

	@Autowired
	private SessionFactory sessionFactory;

	public Session getSession() {
		return sessionFactory.getCurrentSession();
	}

	public List<PinTicker> SavePinTickerDetailbyPostion(String scriptId, String tokenId, String position,String exchseries) {

		List<PinTicker> list = null;
		Query qry = null;
		Session session = this.sessionFactory.getCurrentSession();
		PinTicker pinTicker = new PinTicker();
		pinTicker.setScriptname(scriptId);
		pinTicker.setTokenId(tokenId);
		pinTicker.setPosition(position);
		pinTicker.setExchseries(exchseries);
		int pinTickerval = (Integer)session .save(pinTicker);
		qry = (Query) session.createQuery("from PinTicker where tokenId='" + pinTicker.getTokenId() + "' ");
		list =  qry.list();
		return list;

	}

	public List<PinTicker> getPinTickerDetailbyPostion(String tokenId, String position) {
		List<PinTicker> list = null;
		Query qry = null;
		Session session = this.sessionFactory.getCurrentSession();		
	
		qry = session.createQuery("from PinTicker where   tokenId='"+tokenId+"' and  position='"+1+"' OR position='"+2+"' ");
		list=qry.list();	
		
		return list;
	}

	public List<PinTicker> UpdatePinTickerDetailbyPostion(String scriptId, String tokenId, String position, String exchseries) {

		List<PinTicker> list = null;
		Query qry = null;
		Session session = this.sessionFactory.getCurrentSession();
		qry = session.createQuery("Update PinTicker set scriptname='" +scriptId +"',tokenId='" + tokenId
				+ "', exchseries='" +exchseries +"'  where position='" + position + "' ");
		int val = qry.executeUpdate();

//		if (val > 0) {
			list = session.createQuery("from PinTicker where tokenId='" + tokenId + "' ").list();
//		} else {
//			list = null;
//		}
		return list;
	}

	public List<PinTicker> getAllPinTickerDetailbyPostion() {
		List<PinTicker> list = null;
		Session session = this.sessionFactory.getCurrentSession();
		list = session.createQuery("from PinTicker").list();
		return list;
	}

	public List<PinTicker> getPinTickerDetailbyToken(String tokenId) {
		List<PinTicker> list = null;
		Session session = this.sessionFactory.getCurrentSession();
		list = session.createQuery("from PinTicker where tokenId='"+tokenId+"' ").list();
		return list;
	}

}
