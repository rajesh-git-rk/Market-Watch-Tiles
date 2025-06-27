package com.topaz.trading.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Table;

@Entity
@Table(name="upload_non_poa_client_tbl")
public class NonPOAClient implements Serializable {

		
		@javax.persistence.Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
		
		@Column(name="id")
		private Integer id;
		
		@Column(name="clientcode")
		private String clientcode;
		
		@Column(name="poastatus")
		private String poastatus;
		
		@Column(name="dpid")
		private String dpid;

		public Integer getId() {
			return id;
		}

		public void setId(Integer id) {
			this.id = id;
		}

		public String getClientcode() {
			return clientcode;
		}

		public void setClientcode(String clientcode) {
			this.clientcode = clientcode;
		}

		public String getPoastatus() {
			return poastatus;
		}

		public void setPoastatus(String poastatus) {
			this.poastatus = poastatus;
		}

		public String getDpid() {
			return dpid;
		}

		public void setDpid(String dpid) {
			this.dpid = dpid;
		}
		
		
		
		
}
