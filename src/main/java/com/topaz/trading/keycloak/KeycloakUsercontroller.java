package com.topaz.trading.keycloak;


import java.util.Arrays;
import java.util.Collections;


import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import javax.ws.rs.core.Response;


import org.apache.http.client.methods.HttpDelete;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.message.AbstractHttpMessage;
import org.keycloak.admin.client.Keycloak;
import org.keycloak.admin.client.resource.RealmResource;
import org.keycloak.admin.client.resource.UsersResource;
import org.keycloak.representations.idm.CredentialRepresentation;
import org.keycloak.representations.idm.RoleRepresentation;
import org.keycloak.representations.idm.UserRepresentation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;


import com.topaz.trading.keycloak.KeycloakConnectionProvider;
import com.topaz.trading.pojo.UserInfo;

@RestController
//@RequestMapping(path="/v1.0")
public class KeycloakUsercontroller {

				
	 @Autowired
	 KeycloakConnectionProvider keyCloakConnectionProvider;
	 
	 		RestTemplate restTemplate = new RestTemplate();	 		
	
	 		// @PostMapping(path="/user/add")	
	 		@RequestMapping(value = "/user/add", method = RequestMethod.POST)
	 		 protected  void  createUser(@RequestParam("username") String username,@RequestParam("firstname") String firstname,
			 @RequestParam("lastname") String lastname,@RequestParam("email") String email,@RequestParam("password") String password,
			 @RequestParam("Attribute") String Attribute,@RequestParam("enable") String enable) {
	 
		    	Keycloak keycloak = Keycloak.getInstance(keyCloakConnectionProvider.getAuthServerUrl(),keyCloakConnectionProvider.getAdminRealm(),keyCloakConnectionProvider.getAdminUser(),
		    			keyCloakConnectionProvider.getAdminpassword(),keyCloakConnectionProvider.getAdminClientId());
		        
		        Response result=null;
			    RealmResource realmResource = keycloak.realm(keyCloakConnectionProvider.getRealm());
			    UsersResource userResource = realmResource.users();
			    
			    CredentialRepresentation credential = new CredentialRepresentation();
			  	credential.setTemporary(false);
		        credential.setType(CredentialRepresentation.PASSWORD);
		        credential.setValue(password);
		        
			    
			    // Create User Representation
			    UserRepresentation user = new UserRepresentation();			    
			     user.setUsername(username);
				 user.setFirstName(firstname);
				 user.setLastName(lastname);
				 user.setEmail(email);
				 if(enable.equals("Y")) {
				 user.setEnabled(true); 
				 }
				 if(enable.equals("N")) {
					 user.setEnabled(false); 
					 }
				 
				 user.setAttributes(Collections.singletonMap("origin",Arrays.asList("demo")));
				 user.setCredentials(Arrays.asList(credential));

				 
			    // Create user (requires manage-users role) 
			    try {
			    	result = userResource.create(user);			    		
			    	String userId =result.getLocation().getPath().replaceAll(".*/([^/]+)$", "$1");
			        } 
			    catch (Exception e) {
			        e.getMessage();
			    }
	 		 }
	
	 
	 		// @DeleteMapping(path="/user/delete")
	 		@RequestMapping(value = "/user/delete", method = RequestMethod.DELETE)
			 public boolean deleteUser(@RequestBody UserInfo userInfo,HttpServletRequest request,@Valid @RequestHeader String Authorization ) {
	 			//((AbstractHttpMessage) request).setHeader("Content-Type", "application/x-www-form-urlencoded");
	 			String userID = userInfo.getUserId();
	 			
	 			Keycloak keycloak = Keycloak.getInstance(keyCloakConnectionProvider.getAuthServerUrl(),keyCloakConnectionProvider.getAdminRealm(),keyCloakConnectionProvider.getAdminUser(),
		    			keyCloakConnectionProvider.getAdminpassword(),keyCloakConnectionProvider.getAdminClientId());
		        
					
					HttpDelete urlForDeleteUser=new HttpDelete(keyCloakConnectionProvider.getRestApiurl() + userID);
					urlForDeleteUser.addHeader("Authorization", "Bearer " + Authorization);				
					String locationHeader = urlForDeleteUser.getURI().toString(); 
					// Delete testuser
					 keycloak.realm(keyCloakConnectionProvider.getRealm()).users().get(userID).remove();
					 return true;
			}	
	 
	 
	 		// @PostMapping(path="/user/role/add")
	 		@RequestMapping(value = "/user/role/add", method = RequestMethod.POST)
	 		 protected  void  createRole(@RequestParam("rolename") String rolename,@RequestParam("userId") String userId,
			 @Valid @RequestHeader String Authorization)
		 		{
	
	 			Keycloak keycloak = Keycloak.getInstance(keyCloakConnectionProvider.getAuthServerUrl(),keyCloakConnectionProvider.getAdminRealm(),keyCloakConnectionProvider.getAdminUser(),
		    			keyCloakConnectionProvider.getAdminpassword(),keyCloakConnectionProvider.getAdminClientId());
		        
			 
			  //Assigning the role
		       RoleRepresentation savedRoleRepresentation = keycloak.realm(keyCloakConnectionProvider.getRealm()).roles()
		    		   .get(rolename).toRepresentation();
		       keycloak.realm(keyCloakConnectionProvider.getRealm()).users().get(userId).roles().realmLevel().add(Arrays.asList(savedRoleRepresentation));     
	         
		 }
	 		
	 		
	 		//@PostMapping(path="/client/user/role/add")
	 		@RequestMapping(value = "/client/user/role/add", method = RequestMethod.POST)
	 		 protected  void  CreateClientUserRole(@RequestParam("rolename") String rolename,@RequestParam("userId") String userId,
			 @Valid @RequestHeader String Authorization)
		 		{
	 			Keycloak keycloak = Keycloak.getInstance(keyCloakConnectionProvider.getAuthServerUrl(),keyCloakConnectionProvider.getAdminRealm(),keyCloakConnectionProvider.getAdminUser(),
		    			keyCloakConnectionProvider.getAdminpassword(),keyCloakConnectionProvider.getAdminClientId());
		        
	 		  // Assign Client-role to the user
			 keycloak.realm(keyCloakConnectionProvider.getRealm()).clients().findByClientId(keyCloakConnectionProvider.getClientId()).forEach(clientRepresentation -> {
			 RoleRepresentation savedClientRoleRepresentation = keycloak.realm(keyCloakConnectionProvider.getRealm()).clients()
			             .get(clientRepresentation.getId()).roles().get(rolename).toRepresentation();
			     keycloak.realm(keyCloakConnectionProvider.getRealm()).users().get(userId).roles().clientLevel(clientRepresentation.getId())
			             .add(Arrays.asList(savedClientRoleRepresentation));
			 });
			 
}

}