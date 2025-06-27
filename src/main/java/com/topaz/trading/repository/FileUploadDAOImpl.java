package com.topaz.trading.repository;

import javax.transaction.Transactional;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.topaz.trading.model.Segment_table;

import com.topaz.trading.service.Fileuploadservice;

@Repository
@Transactional
public class FileUploadDAOImpl implements Fileuploadservice {
		
    @Autowired
    private SessionFactory sessionFactory;     
    
	
	public Session getSession() {
	    return sessionFactory.getCurrentSession();
	}

	

	public void SaveSegmentfiles(Segment_table uploadFile) {
		
		 sessionFactory.getCurrentSession().save(uploadFile);
	}

	

	
   
    }