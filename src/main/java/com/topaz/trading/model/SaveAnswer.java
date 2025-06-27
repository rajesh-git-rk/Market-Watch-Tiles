package com.topaz.trading.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Table;


@Entity
@Table(name="save_answer")
public class SaveAnswer implements Serializable {
	
	
	@javax.persistence.Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

	@Column(name="id")
	private Integer id;
	
	@Column(name="indexid")
	private String indexid;
	
	@Column(name="questions")
	private String questions;
	
	
	@Column(name="answers")
	private String answers;

	
	@Column(name="clientid")
	private String clientid;


	public Integer getId() {
		return id;
	}


	public void setId(Integer id) {
		this.id = id;
	}


	public String getIndexid() {
		return indexid;
	}


	public void setIndexid(String indexid) {
		this.indexid = indexid;
	}


	public String getQuestions() {
		return questions;
	}


	public void setQuestions(String questions) {
		this.questions = questions;
	}


	public String getAnswers() {
		return answers;
	}


	public void setAnswers(String answers) {
		this.answers = answers;
	}


	public String getClientid() {
		return clientid;
	}


	public void setClientid(String clientid) {
		this.clientid = clientid;
	}
	
	
	
	
	
	
	
	
	
	
	
}
