package com.topaz.trading.keycloak;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Component;



@Component
@PropertySource("classpath:application.properties")
public class KeycloakConnectionProvider {
	    
  
	   /* @Value("${keycloak.auth-server-url}")
	    String  serverUrl;*/

	    @Value("${keycloak.realm}")
	     String realm;
	    	    

		@Value("${keycloak.credentials.secret}")
	    String clientSecret;
	    
	    @Value("${keycloak.resource}")
	    String clientId;
	    
	    @Value("${keycloak.granttype}")
	    String grant_type;
	    
	    @Value("${keycloak.restApiurl}")
	    String restApiurl;
	    
	    @Value("${keycloak.logouturl}")
	    String logouturl;
	    
	    @Value("${keycloak.auth-server-url}")
	    String AuthServerUrl;
	    
	    @Value("${keycloak.admin_user}")
	    String AdminUser;
	    
	    @Value("${keycloak.admin_password}")
	    String Adminpassword;
	    
	    @Value("${keycloak.admin_realm}")
	    String AdminRealm;
	    
	    @Value("${keycloak.admin_clientId}")
	    String AdminClientId;
	    
	    @Value("${keycloak.app_user}")
	    String keycloakapp_user;
	    
	    @Value("${keycloak.app_pass}")
	    String keycloakapp_pass;

		

		public String getRealm() {
			return realm;
		}

		public void setRealm(String realm) {
			this.realm = realm;
		}

		public String getClientSecret() {
			return clientSecret;
		}

		public void setClientSecret(String clientSecret) {
			this.clientSecret = clientSecret;
		}

		public String getClientId() {
			return clientId;
		}

		public void setClientId(String clientId) {
			this.clientId = clientId;
		}

		public String getGrant_type() {
			return grant_type;
		}

		public void setGrant_type(String grant_type) {
			this.grant_type = grant_type;
		}

		public String getRestApiurl() {
			return restApiurl;
		}

		public void setRestApiurl(String restApiurl) {
			this.restApiurl = restApiurl;
		}

		public String getLogouturl() {
			return logouturl;
		}

		public void setLogouturl(String logouturl) {
			this.logouturl = logouturl;
		}

		public String getAuthServerUrl() {
			return AuthServerUrl;
		}

		public void setAuthServerUrl(String authServerUrl) {
			AuthServerUrl = authServerUrl;
		}

		public String getAdminUser() {
			return AdminUser;
		}

		public void setAdminUser(String adminUser) {
			AdminUser = adminUser;
		}

		public String getAdminpassword() {
			return Adminpassword;
		}

		public void setAdminpassword(String adminpassword) {
			Adminpassword = adminpassword;
		}

		public String getAdminRealm() {
			return AdminRealm;
		}

		public void setAdminRealm(String adminRealm) {
			AdminRealm = adminRealm;
		}

		public String getAdminClientId() {
			return AdminClientId;
		}

		public void setAdminClientId(String adminClientId) {
			AdminClientId = adminClientId;
		}

		public String getKeycloakapp_user() {
			return keycloakapp_user;
		}

		public void setKeycloakapp_user(String keycloakapp_user) {
			this.keycloakapp_user = keycloakapp_user;
		}

		public String getKeycloakapp_pass() {
			return keycloakapp_pass;
		}

		public void setKeycloakapp_pass(String keycloakapp_pass) {
			this.keycloakapp_pass = keycloakapp_pass;
		}
	    
	    
	    
	    
	 
}


