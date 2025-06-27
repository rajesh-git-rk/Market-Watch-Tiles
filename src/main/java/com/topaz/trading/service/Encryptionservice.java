package com.topaz.trading.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.topaz.trading.model.EncryptionTable;
import com.topaz.trading.pojo.EncryptPojo;
@Service
public interface Encryptionservice {

	void saveEncryptiondetails(EncryptionTable encryptpojo);

	List<EncryptionTable> getEncrytpionData();

	List<EncryptionTable> UpdateEncryptiondetails(EncryptionTable encryptpojo);    
 
}
