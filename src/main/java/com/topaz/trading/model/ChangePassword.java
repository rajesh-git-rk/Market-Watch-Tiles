package com.topaz.trading.model;

public class ChangePassword {
	
	
	private String clientid;
	private String oldPassword;
	private String newPassword;
	private String sTxFlag;
	
	
	public String getClientid() {
		return clientid;
	}
	public void setClientid(String clientid) {
		this.clientid = clientid;
	}
	public String getOldPassword() {
		return oldPassword;
	}
	public void setOldPassword(String oldPassword) {
		this.oldPassword = oldPassword;
	}
	public String getNewPassword() {
		return newPassword;
	}
	public void setNewPassword(String newPassword) {
		this.newPassword = newPassword;
	}
	public String getsTxFlag() {
		return sTxFlag;
	}
	public void setsTxFlag(String sTxFlag) {
		this.sTxFlag = sTxFlag;
	}
	
	
	
	
	

}
