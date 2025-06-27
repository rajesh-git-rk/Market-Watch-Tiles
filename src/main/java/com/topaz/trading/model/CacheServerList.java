package com.topaz.trading.model;

import java.util.List;
import java.util.Map;

public class CacheServerList {
	
	//private List<User> userlist;
	
	private Map<Integer,MCXSegment> mapmcxuser;
	
	private Map<Integer,NseCMSegment> mapnsecmuser;
	
	private Map<Integer,NseFOSegment> mapnsefouser;
	
	

	public Map<Integer, MCXSegment> getMapmcxuser() {
		return mapmcxuser;
	}

	public void setMapmcxuser(Map<Integer, MCXSegment> mapmcxuser) {
		this.mapmcxuser = mapmcxuser;
	}

	public Map<Integer, NseCMSegment> getMapnsecmuser() {
		return mapnsecmuser;
	}

	public void setMapnsecmuser(Map<Integer, NseCMSegment> mapnsecmuser) {
		this.mapnsecmuser = mapnsecmuser;
	}

	public Map<Integer, NseFOSegment> getMapnsefouser() {
		return mapnsefouser;
	}

	public void setMapnsefouser(Map<Integer, NseFOSegment> mapnsefouser) {
		this.mapnsefouser = mapnsefouser;
	}

//	public List<User> getUserlist() {
//		return userlist;
//	}
//
//	public void setUserlist(List<User> userlist) {
//		this.userlist = userlist;
//	}

   
	
	

}
