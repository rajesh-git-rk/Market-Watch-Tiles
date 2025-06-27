    <div class="main_content">
     <div class="profile_main">
                    <div class="row">
                        <div class="col-md-8">
                         <div class="profile_info">
                             <h4>PROFILE</h4>
                             <div class="profile_upload">
                                <label for="profile_load">
                                 <img id="output" src="./resourcefiles/images/profile_upload.jpg" class="img-fluid"/>
                                 <span class="edit_profile"><i class="bi bi-pencil"></i></span>
                                
                                 </label>
                                 <input type="file" id="profile_load" accept="image/*" />
                                 <div class="user_info">
                                  <!--   <h5 id="accountId">AB100200</h5> -->
                                     <h5 id="accountId"></h5>
                                    <!-- <span id="profileuserName">Chandran Rajesh</span> -->
                                    <span id="profileuserName"></span>
                                </div>
                             </div>
                            
                         </div>
                         
                        </div>
                        <div class="col-md-4">
                            <div class="profile_right">    
                                <div class="profile_date">
								<p><small>Last Traded Date</small></p>
								<p>11-Sept-2021</p>
                                </div>                          
                                <div class="change_btn">
                                    <a href="#" class="btn">Change Password</a>
                                    <a href="#" class="btn">Change PIN</a>
                                </div>
                            </div>
                        </div>
                    </div>
                
                </div>
                  <div class="profile_details">
                    <div class="row">
                    
                    
                        <div class="col-md-4">
                            <ul class="profile_datails_left">
                                <li>
                                    <label>Mobile Number </label>
                                    <p id="mobileNumber"> <span><a href="#" class="edit_icon"><i class="bi bi-pencil"></i></a></span>  </p>
                                   
                                </li>
                                <li>
                                    <label>PAN </label>
                                    <p id="panNumberId"></p>
                                   
                                </li>
                                <li class="clipboard">
                                    <label>DP ID</label>
<!--               	 <input id="bioIdInput" value="1208160026284951" readonly /> <span class="clip_icon"><i class="bi bi-files copytoClip" onclick="copyToClipboard('bioIdInput')"></i></span>  </p> -->
                                    
                       <input id="bioIdInput"  readonly /> <span class="clip_icon"><i class="bi bi-files copytoClip" onclick="copyToClipboard('bioIdInput')"></i></span>  </p>
                                  
                                </li>
                                <li>
                                    <label>Email</label>
                                   <!--  <p><a class="email" href="mailto:raj@gmail.com" >*****raj@gmail.com</a> -->
                                         <p><a class="email" href="mailto:raj@gmail.com" id="emailAddress"></a>
                                        <span><a href="#" class="edit_icon"><i class="bi bi-pencil"></i></a></span>  </p>
                                   
                                </li>
                                <li>
                                    <label>Address</label>
                                    <!-- <p id="addressId">No.241, Rangarajapuram Main Road, Kodambakkam,<br/>
                                        Chennai - 600024 <span><a href="#" class="edit_icon"><i class="bi bi-pencil"></i></a></span>  </p> -->
                                   <p id="addressId"><br/>
                                        <span><a href="#" class="edit_icon"><i class="bi bi-pencil"></i></a></span>  </p> 
                                </li>
                            </ul>
                        </div>
                        
                        
                        
                        <div class="col-md-4">
                            <ul class="bank_details">
                                <li>
                                    <label>Bank Details <span><a href="#" class="edit_icon"><i class="bi bi-pencil"></i></a></span></label>
                                   
                                   <ul>
                                       <!-- <li>
                                        <label>Holder Name </label>
                                        <p>Chandran Rajesh</p>
                                       </li> -->
                                       <li>
                                        <label>Account Number </label>
                                        <p id="acctnumberId"> <span class="account_type"> Primary Account</span></p>
                                       </li>
                                       <li>
                                        <label>Bank Name </label>
                                        <p id="banknameId"></p>
                                       </li>
                                      <!--  <li>
                                        <label>Branch </label>
                                        <p>Kodambakkam</p>
                                       </li> -->
                                       <li>
                                        <label>IFSC </label>
                                        <p id="ifsc_codeId"></p>
                                       </li>
                                   </ul>
                                </li>
                                <li>
                                    <ul class="segments">
                                        <li>
                                           <label> Active Segments</label>
                                           <!-- <p>MCX, NSE FO <span><a href="#" class="edit_icon"><i class="bi bi-pencil"></i></a></span></p> -->
                                           <p id="activeSegmentId"> <span><a href="#" class="edit_icon"><i class="bi bi-pencil"></i></a></span></p>
                                        </li>
                                        <li>
                                            <label> In-active Segments</label>
                                           <!--  <p>MCX, NSE FO  <button class="enable btn">Re-active</button></p> -->
                                            <p id="inActiveSegmentId">  <button class="enable btn">Re-active</button></p>
                                           
                                         </li>
                                        
                                    </ul>
                                    <ul class="segments">
                                        <li>
                                            <label>Products
                                            </label>
                                            <p id="productsId"></p>
                                         </li>
                                         <li>
                                             <label> SMS plan</label>
                                             <p>123 Pack  <button class="enable btn">Enable</button></p>
                                            
                                          </li>
                                    </ul>
                                 </li>
                              
                               
                            </ul>
                           
                        </div>
                        <div class="col-md-4">
                            <ul class="segments">
                                <li>
                                   <label> Referral Clients</label>
                                   <p id="referralClientsId">10</p>
                                </li>
                                <li>
                                    <label > Referral Revenue</label>
                                    <p id="referralRevenueId">10,000.00</p>
                                   
                                 </li>
                                
                            </ul>
                            <div class="change_btn">
                                <a href="#" class="btn">Login to Referral</a>
                               
                            </div>
                        </div>
                        
                        
                    </div>
                </div> 
            </div>
    