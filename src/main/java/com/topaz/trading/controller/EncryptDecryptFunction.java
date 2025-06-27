package com.topaz.trading.controller;




import java.util.Base64;

import javax.crypto.Cipher;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.SecretKeySpec;

import com.google.common.io.BaseEncoding;

public final class EncryptDecryptFunction {

	
	    
	 static String KEY_AES = "000fk15pvbbgmxgpej22364iu8nv287k";
	 private final static String cI = "AES/CBC/PKCS5Padding"; 
	 private final static String nI = "AES/CBC/NoPadding";
	 private final static String dI = " AES/ECB/PKCS5Padding";
	 private final static String alg = "AES";
	 private final static String alg1 = "DES";
	 
	 
	 public static String encryptMethod(String cleartext) throws Exception{
			
		 byte[] key = KEY_AES.getBytes("UTF-8");

       try {
    	   
    	   
    	// Generating IV.
           byte[] IV = new byte[16];
           
           System.out.println("Original Text  : "+cleartext);
           
          // byte[] cipherText = encrypt(cleartext.getBytes(),key, IV);
           
         //Get Cipher Instance
	        Cipher cipher = Cipher.getInstance("AES/CBC/PKCS5Padding");
	        
	      //Create SecretKeySpec
	        SecretKeySpec keySpec = new SecretKeySpec(key, "AES");
	        
	        //Create IvParameterSpec
	        IvParameterSpec ivSpec = new IvParameterSpec(IV);
	        
	        //Initialize Cipher for ENCRYPT_MODE
	        cipher.init(Cipher.ENCRYPT_MODE, keySpec, ivSpec);       
	       
	        
	        //Perform Encryption
	        byte[] encrypted = cipher.doFinal(cleartext.getBytes());
	        String base64String = BaseEncoding.base64().encode(encrypted);
	          return base64String;
	      
	        
    
          
       } catch (Exception e) {
           e.printStackTrace();
           return cleartext;
       }
	}
	 
	 
	
	    
	 
	public static String encrypt(String cleartext) throws Exception{
		
		 byte[] key = KEY_AES.getBytes("UTF-8");

       try {
    	   Cipher cipher = Cipher.getInstance(alg); 
           SecretKeySpec skeySpec = new SecretKeySpec(key, alg);
         
       //  IvParameterSpec ivSpec = new IvParameterSpec(new byte[16]);
           //cipher.init(Cipher.ENCRYPT_MODE, skeySpec,ivSpec);
          cipher.init(Cipher.ENCRYPT_MODE, skeySpec);
           byte[] encrypted = cipher.doFinal(cleartext.getBytes());
           String base64String = BaseEncoding.base64().encode(encrypted);
          return base64String;
          
       } catch (Exception e) {
           e.printStackTrace();
           return cleartext;
       }
	}
		
	 public static String decrypt(String encrypted) throws Exception {
		
		 
		 System.out.println("encrypted : "+encrypted.toString()); 
		 byte[] key = KEY_AES.getBytes("UTF-8");
		 
	        try {	
	        	Cipher cipher = Cipher.getInstance(cI);
		       // SecretKeySpec skeySpec = new SecretKeySpec(Base64.decodeBase64(key), alg);
	        	 SecretKeySpec skeySpec = new SecretKeySpec(key, alg);
	        	 System.out.println("skeySpec : "+skeySpec); 
	        	IvParameterSpec ivSpec = new IvParameterSpec(new byte[16]);
	        	cipher.init(Cipher.DECRYPT_MODE, skeySpec,ivSpec);
		       // cipher.init(Cipher.DECRYPT_MODE, skeySpec,new IvParameterSpec(new byte[16]));
	        	  //cipher.init(Cipher.DECRYPT_MODE, skeySpec);
		        System.out.println("cipher : "+cipher.toString()); 
		        //cipher.init(Cipher.DECRYPT_MODE, new SecretKeySpec(skeySpec.getEncoded(),alg));
		      /*  Base64 decoder = new Base64();         
			        byte[] decoded22;
			        decoded22 = decoder.decode(encrypted);
			        System.out.println("decoded : "+decoded22.toString());		        
			        byte[] decrypted = cipher.doFinal(decoded22);
			      //  byte[] decrypted = cipher.doFinal(Base64.decodeBase64(encrypted));
		        decrypted.toString();*/
		       
		        
		        //String encoded = Base64.getEncoder().encodeToString(bytes);
		        
		      
		        //byte[] decoded = Base64.getDecoder().decode(encrypted.getBytes("UTF-8"));
		        byte[] decoded = Base64.getDecoder().decode(encrypted);
		        byte[] decrypted = cipher.doFinal(decoded);
		        String decryptedtext = new String(decrypted);     
		        System.out.println("plain text : "+decryptedtext);
		        return decryptedtext.toString();
		        
	        } catch (Exception e) {
	            e.printStackTrace();
	            return encrypted;
	        } 			       
        
	 }
}




//package com.topaz.trading.controller;
//
//
//
//
//import java.util.Arrays;
////import java.util.Base64;
//import org.apache.commons.codec.binary.Base64;
//
//
//
//
//import javax.crypto.Cipher;
//import javax.crypto.spec.IvParameterSpec;
//import javax.crypto.spec.SecretKeySpec;
//
//import org.springframework.beans.factory.annotation.Autowired;
//
//
//import com.topaz.trading.service.Encryptionservice;
//
//public final class EncryptDecryptFunction {
//
//	@Autowired
//	static Encryptionservice encryptionservice;
//	    
//	 //static String KEY_AES = "000fk15pvbbgmxgpej22364iu8nv287k";
//	 private final static String cI = "AES/CBC/PKCS5PADDING";	
//	 private final static String alg = "AES";
//	 
//	 private final static String alg1 = "DES";
//	 private final static String dI = " AES/ECB/PKCS5Padding";	 
//	 private final static String nI = "AES/CBC/NoPadding";
//	    
//	 private  static int enc_len;
//	 private  static int  dec_len;
//	public static String encrypt(String cleartext,byte[] key) throws Exception{
//		
//		 System.out.println("key : "+key);	
//		 int ivSize = 16;
//		byte[] iv = new byte[ivSize];
//		 
//       try {
//    	   Cipher cipher = Cipher.getInstance(cI); 
//           SecretKeySpec skeySpec = new SecretKeySpec(key, alg);
//           System.out.println("skeySpec : "+skeySpec); 
//           IvParameterSpec ivSpec = new IvParameterSpec(iv);
//           cipher.init(Cipher.ENCRYPT_MODE, skeySpec,ivSpec);
//         
//         // cipher.init(Cipher.ENCRYPT_MODE, skeySpec);
//          System.out.println("cipher : "+cipher.toString()); 
//          
//           byte[] encrypted = cipher.doFinal(cleartext.getBytes("UTF-8"));
//           //String base64String = BaseEncoding.base64().encode(encrypted);
//           byte[] dataBytes = new Base64().encode(encrypted);
//         //  byte[] dataBytes = Base64.enencode(encrypted);
//          String base64String= dataBytes.toString();
//          System.out.println("base64String : "+base64String.toString());
//          return base64String;
//          
//       } catch (Exception e) {
//           e.printStackTrace();
//           return cleartext;
//       }
//	}
//		
//	 public static String decrypt(String encrypted,byte[] key) throws Exception {
//		 
//		
//		 System.out.println("key  : "+key);
//		 int ivSize = 16;
//		 byte[] iv = new byte[ivSize];
//	        try {		   
//	        	byte[] decodedKey = new Base64().decode(encrypted);
//	        	//byte[] decodedKey = Base64.getDecoder().decode(key);
//	        	
//	        	Cipher cipher = Cipher.getInstance("AES/CBC/PKCS5Padding");
//	        	 SecretKeySpec skeySpec = new SecretKeySpec(Arrays.copyOf(decodedKey, 16), "AES");
//	        	 System.out.println("skeySpec : "+skeySpec); 
//	        	IvParameterSpec ivSpec = new IvParameterSpec(iv);
//	        	cipher.init(Cipher.DECRYPT_MODE, skeySpec,ivSpec);
//	        	// cipher.init(Cipher.DECRYPT_MODE, skeySpec);
//		       // cipher.init(Cipher.DECRYPT_MODE, skeySpec,new IvParameterSpec(new byte[16]));
//		        System.out.println("cipher : "+cipher.toString()); 
//		        
//		      //  byte[] decoded = Base64.getDecoder().decode(encrypted.getBytes("ISO-8859-1"));
//		      
//		       // byte[] decoded = Base64.getDecoder().decode(encrypted);
//		        
//	           /* byte[] cipherText = cipher.doFinal(Base64.getDecoder().decode(encrypted));
//
//	            System.out.println("cipherText : "+cipherText.toString()); 
//	            String decryptedtext = new String(cipherText,"ISO-8859-1");
//	             
//	            System.out.println("decrypted : "+decryptedtext.toString());*/ 
//		       // byte[] decoded = new Base64().decode(encrypted.getBytes("UTF-8"));
//		       // System.out.println("decrypted : "+decoded); 
//		        byte[] decoded = new Base64().decode(encrypted.getBytes());
//		        enc_len = cipher.update(encrypted.getBytes(), 0, encrypted.length(), decoded, 0);
//		        //byte[] decrypted = cipher.doFinal(Base64.decodeBase64(encrypted));
//		        enc_len += cipher.doFinal(decoded, enc_len);
//		       //byte[] decrypted = cipher.doFinal(decoded);
//		        
//		        
//		        
//		        byte[] decrypted = new byte[cipher.getOutputSize(enc_len)];
//	            int dec_len = cipher.update(encrypted.getBytes(), 0, enc_len, decrypted, 0);
//	            dec_len += cipher.doFinal(decrypted, dec_len);
//	            
//	            String decryptedtext = new String(decrypted,"ISO-8859-1");
//	            System.out.println("plain text : "+decryptedtext);
//	          
//	            
//		      //  System.out.println("decrypted : "+decrypted); 
//		       // byte[] decoded = Base64.getUrlDecoder().decode(decrypted);
//		      //  byte[] decoded = new Base64().decode(decrypted);
//		        
//		       // byte[] decoded = Base64.getDecoder().decode(decrypted);
//			   
//	
//		        return decryptedtext;
//		        
//	        } catch (Exception e) {
//	            e.printStackTrace();
//	            return encrypted;
//	        } 			       
//        
//	 }
//}
