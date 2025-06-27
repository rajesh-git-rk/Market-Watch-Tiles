package com.topaz.trading.keycloak;




import java.net.HttpURLConnection;
import java.net.URL;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.keycloak.representations.AccessTokenResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.FormHttpMessageConverter;
import org.springframework.security.core.userdetails.UserDetailsByNameServiceWrapper;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.topaz.trading.keycloak.KeycloakConnectionProvider;
import com.topaz.trading.pojo.UserInfo;

@RestController
//@RequestMapping(path="/v1.0")

public class KeycloakLogincontroller {
	
	 @Autowired
	 KeycloakConnectionProvider keyCloakConnectionProvider;
	 
	 RestTemplate restTemplate = new RestTemplate();
 
	
	 
	 /**
	  * This method will call keycloak service to user login. after successful login it will provide
	  * access token.
	 * @throws Exception 
	  */
	 
	// @PostMapping(path="/login")
	 @RequestMapping(value = "/login", method = RequestMethod.POST)
	 public AccessTokenResponse login(@RequestParam String username,@RequestParam("password") String password,
			 HttpServletRequest request, HttpServletResponse response) throws Exception { 
		// System.out.println("username : "+username+" password : "+password); 
		 
	     try {
	         MultiValueMap<String, String> requestParams = new LinkedMultiValueMap<>();
	         requestParams.add("client_id",keyCloakConnectionProvider.getClientId());
	         requestParams.add("username", username);
	         requestParams.add("password", password);
	         requestParams.add("grant_type","password");
	         requestParams.add("client_secret",keyCloakConnectionProvider.getClientSecret());
	         requestParams.add("scope", "openid");
	         	
	         HttpHeaders headers = new HttpHeaders();
			 headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
			 HttpEntity<MultiValueMap<String, String>> requestData = new HttpEntity<>(requestParams, headers);
			 restTemplate.getMessageConverters().add(new FormHttpMessageConverter());
			 String restApiurlStr = keyCloakConnectionProvider.getRestApiurl();
			
			/*URL restApiurl = new URL(restApiurlStr.toString());
			 
			 HttpURLConnection restApiurlconn = (HttpURLConnection) restApiurl.openConnection();
				
				if (restApiurlconn.getResponseCode() != 200) {
					response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
				throw new RuntimeException("Failed : HTTP error code : " + response);
				}*/
				
	         return restTemplate.postForObject(restApiurlStr, requestData, AccessTokenResponse.class);
			
	         
	     } catch (Exception e) {
	    	 	e.getMessage();
	         throw e;
	     }
	 }
	 
	 
	 public AccessTokenResponse loginKeycloak() {
		 String restApiurl=null;
		 HttpEntity<MultiValueMap<String, String>> requestData=null;
		 try {
	         MultiValueMap<String, String> requestParams = new LinkedMultiValueMap<>();
	         requestParams.add("client_id",keyCloakConnectionProvider.getClientId());
	         requestParams.add("username", keyCloakConnectionProvider.getKeycloakapp_user());
	         requestParams.add("password", keyCloakConnectionProvider.getKeycloakapp_pass());
	         requestParams.add("grant_type","password");
	         requestParams.add("client_secret",keyCloakConnectionProvider.getClientSecret());
	         requestParams.add("scope", "openid");
	         	
	         HttpHeaders headers = new HttpHeaders();
			 headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
			 requestData = new HttpEntity<>(requestParams, headers);
			 restTemplate.getMessageConverters().add(new FormHttpMessageConverter());
			 restApiurl = keyCloakConnectionProvider.getRestApiurl();
				 
	        // return restTemplate.postForObject(restApiurl, requestData, AccessTokenResponse.class);
	         
	         
	     } catch (Exception e) {
	    	 	/*e.getMessage();
	         throw e;*/
	    	 return restTemplate.postForObject(restApiurl, requestData, AccessTokenResponse.class,HttpStatus.UNAUTHORIZED);
	     }
		 
		 return restTemplate.postForObject(restApiurl, requestData, AccessTokenResponse.class);
		}
	 
	 
	 public AccessTokenResponse login() {
		 String restApiurl=null;
		 HttpEntity<MultiValueMap<String, String>> requestData=null;
	     try {
	         MultiValueMap<String, String> requestParams = new LinkedMultiValueMap<>();
	         requestParams.add("client_id",keyCloakConnectionProvider.getClientId());
	         requestParams.add("username", keyCloakConnectionProvider.getKeycloakapp_user());
	         requestParams.add("password", keyCloakConnectionProvider.getKeycloakapp_pass());
	         requestParams.add("grant_type","password");
	         requestParams.add("client_secret",keyCloakConnectionProvider.getClientSecret());
	         requestParams.add("scope", "openid");
	         	
	         HttpHeaders headers = new HttpHeaders();
			 headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
			 requestData = new HttpEntity<>(requestParams, headers);
			 restTemplate.getMessageConverters().add(new FormHttpMessageConverter());
			 restApiurl = keyCloakConnectionProvider.getRestApiurl();			 
	        
			// return restTemplate.postForObject(restApiurl, requestData, AccessTokenResponse.class);
	         
	     } catch (Exception e) {
	    	 	/*e.getMessage();
	         throw e;*/
	    	 return restTemplate.postForObject(restApiurl, requestData, AccessTokenResponse.class,HttpStatus.UNAUTHORIZED);
	     }
	     return restTemplate.postForObject(restApiurl, requestData, AccessTokenResponse.class,HttpStatus.OK);
	     
	 }
	 
	 	//@PostMapping(path="/logout")
	 	@RequestMapping(value = "/logoutkeycloak", method = RequestMethod.POST)
	    public void logout(@RequestParam (value = "refresh_token",required = false) String refresh_token) {
	 	//  public void logout(@RequestBody UserInfo userInfo) {
	 		
	 		
	 		//String refresh_token=userInfo.getRefresh_token();
	 		
	        try {
	            MultiValueMap<String, String> requestParams = new LinkedMultiValueMap<>();
	         
	            requestParams.add("client_id",keyCloakConnectionProvider.getClientId());
	            requestParams.add("client_secret",keyCloakConnectionProvider.getClientSecret());
	            requestParams.add("refresh_token", refresh_token);
	            logoutUserSession(requestParams);

	        } catch (Exception e) {
	            e.getMessage();
	            throw e;
	        }
	    }
	 
	 private void logoutUserSession(MultiValueMap<String, String> requestParams) {
		 
		    HttpHeaders headers = new HttpHeaders();
		    headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
		    HttpEntity<MultiValueMap<String, String>> request = new HttpEntity<>(requestParams, headers);
		    String url= keyCloakConnectionProvider.getLogouturl();
		    System.out.println("url : "+url); 
		    restTemplate.postForEntity(url, request, Object.class);
		}


	

	
}
