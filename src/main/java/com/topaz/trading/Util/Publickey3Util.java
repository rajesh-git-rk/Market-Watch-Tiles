package com.topaz.trading.Util;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.security.PrivateKey;
import java.security.PublicKey;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.apache.commons.crypto.Crypto;
import org.bouncycastle.util.encoders.Hex;
import org.json.simple.JSONObject;
import org.json.simple.JSONValue;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.web.client.RestTemplate;

//import com.sun.org.apache.xerces.internal.impl.dv.util.Base64;
import java.util.Base64;

import com.topaz.trading.controller.CommonFunction;
import com.topaz.trading.controller.MarketwatchProvider;
import com.tr.nest.crypto.CryptoRSA;
import com.tr.nest.crypto.NestKeyPair;


@Component

@Controller
public class Publickey3Util {

	@Autowired
	MarketwatchProvider marketwatchProvider;

	public String stat, tdata, sQuestions, scount, sIndex, Emsg, Message, sLastAccessInSec, sPasswordReset, sUserToken,
	UserSessionID, tomcatCount;


	public List<Object> authenticate(String userId) {
		
		String PublicKey1 = null, PublicKey3 = null;
		List<Object> Publickeys = new ArrayList<Object>();

		String PreAuthenticationKey = marketwatchProvider.getPreAuthenticationKey();
		String GetInitialKeyurl = marketwatchProvider.getInitialKeyurl();
		try {

			URL Intialkeyurl = new URL(GetInitialKeyurl);
			HttpURLConnection Intialkeyconn = (HttpURLConnection) Intialkeyurl.openConnection();
			Intialkeyconn.setRequestMethod("POST");
			Intialkeyconn.setRequestProperty("Accept", "application/json");
			
			if (Intialkeyconn.getResponseCode() != 200) {

				throw new RuntimeException("Failed : HTTP error code : " + Intialkeyconn.getResponseCode());
			}

			BufferedReader br = new BufferedReader(new InputStreamReader((Intialkeyconn.getInputStream())));

			String output;

			while ((output = br.readLine()) != null) {

				Object obj2 = JSONValue.parse(output);
				JSONObject jsa2 = (JSONObject) obj2;
				String BsPub = (String) jsa2.get("publicKey");
				tomcatCount = (String) jsa2.get("tomcatCount");
				//byte[] Pubbyte = Base64.decode(BsPub);
				byte[] Pubbyte = Base64.getDecoder().decode(BsPub);
				
				// public key1
				PublicKey1 = new String(Pubbyte);
			}

			Intialkeyconn.disconnect();

			CryptoRSA nCrypto = new CryptoRSA();
			CryptoRSA nRSA = new CryptoRSA();
			NestKeyPair sKeyPair = nCrypto.generateNestKeyPair(2048);

			// public key2 and private key2
			String PublicKey2 = sKeyPair.getPemPublicKey();
			PrivateKey PrivateKey2 = sKeyPair.getPrivateKey();

			PublicKey pubKey1 = nRSA.getPublicKeyFromPemData(PublicKey1);

			String ePubKey2 = nRSA.encrypt(PublicKey2, pubKey1);

			String hashPub1 =CommonFunction.hashData(PublicKey1);

			JSONObject jsonObj = new JSONObject();
			jsonObj.put("jData", ePubKey2);
			jsonObj.put("jKey", hashPub1);

			StringBuffer getPreAuthenticationKeyUrl = new StringBuffer(PreAuthenticationKey);
			getPreAuthenticationKeyUrl
					.append("jsessionid=" + "." + tomcatCount + "&jData=" + ePubKey2 + "&jKey=" + hashPub1 + "");

			URL PreAuthenticationurl = new URL(getPreAuthenticationKeyUrl.toString());

			HttpURLConnection PreAuthenticationconn = (HttpURLConnection) PreAuthenticationurl.openConnection();
			PreAuthenticationconn.setRequestMethod("POST");
			PreAuthenticationconn.setRequestProperty("Accept", "application/json");
			PreAuthenticationconn.setDoInput(true);
			PreAuthenticationconn.setDoOutput(true);

			if (PreAuthenticationconn.getResponseCode() != 200) {

				throw new RuntimeException("Failed : HTTP error code : " + PreAuthenticationconn.getResponseCode());
			}

			BufferedReader br1 = new BufferedReader(new InputStreamReader((PreAuthenticationconn.getInputStream())));

			while ((output = br1.readLine()) != null) {

				Object obj = JSONValue.parse(output);
				JSONObject jsObj = (JSONObject) obj;
				stat = (String) jsObj.get("stat");

				// get public key 3
				PublicKey3 = (String) jsObj.get("publicKey3");

			}
			PreAuthenticationconn.disconnect();
			
			String pubKey3 = nRSA.decrypt(PublicKey3, PrivateKey2);
			PublicKey pKey3 = nRSA.getPublicKeyFromPemData(pubKey3);
			String jKey =CommonFunction.hashData(pubKey3);			
			
			Publickeys.add(PublicKey3);
			Publickeys.add(jKey);
			Publickeys.add(tomcatCount);
			Publickeys.add(PrivateKey2);

		} catch (Exception e) {
			e.printStackTrace();

		}
		return Publickeys;
	}

}
