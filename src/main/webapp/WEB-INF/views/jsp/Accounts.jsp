<!-- <div class="main_content" id="AccountProfileDivId" style="display:none;"> -->
  
  <div class="main_content">
                
    <div class="row">
        <div class="col-md-12">
        <div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0">Change Password</h6>
								</div>
								<div class="col-sm-9 text-secondary">
								<input type="hidden" id="mcxticksizehiddval" style="color: white;" name="mcxticksizehiddval" />
<!-- 								<label style="color:black;" id="emailAddresslabelId"> </label> -->
									<input type="text"  style="border: 0px none;"  id="changepasswordlabelId" name="emailAddresslabelId">
							     <i class='fa fa-edit' data-toggle='modal'  style='color:blue;cursor: pointer;font-size:24px;'   onclick="ChangePasswordfunc()" data-target='#ChangepasswordEditId'  title='Edit'></i>
								
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0">Change Pin</h6>
								</div>
								<div class="col-sm-9 text-secondary">
<!-- 								<label style="color:black;" id="emailAddresslabelId"> </label> -->
									<input type="text"  style="border: 0px none;"  id="emailAddresslabelId" name="emailAddresslabelId">
							     <i class='fa fa-edit' data-toggle='modal'  style='color:blue;cursor: pointer;font-size:24px;'  onclick="ChangeTpinfunc()" data-target='#ChangepinEditId'  title='Edit'></i>
								
								</div>
							</div>
							
           	<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0">Email address</h6>
								</div>
								<div class="col-sm-9 text-secondary">
<!-- 								<label style="color:black;" id="emailAddresslabelId"> </label> -->
									<input type="text"  style="border: 0px none;"  id="emailAddresslabelId" name="emailAddresslabelId">
							     <i class='fa fa-edit' data-toggle='modal'  style='color:blue;cursor: pointer;font-size:24px;'  onclick='EditEmailFun()'  data-target='#ProfileEmailPhoneEditId'  title='Edit'></i>
								
								</div>
							</div>
    
    				<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0">Mobile Number</h6>
								</div>
								<div class="col-sm-9 text-secondary">
<!-- 								<label style="color:black;" id="emailAddresslabelId"> </label> -->
									<input type="text"  style="border: 0px none;"  id="emailAddresslabelId" name="emailAddresslabelId">
							     <i class='fa fa-edit' data-toggle='modal'  style='color:blue;cursor: pointer;font-size:24px;'  onclick='EditmobileFun()'  data-target='#ProfileEmailPhoneEditId'  title='Edit'></i>
								
								</div>
							</div>
							
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0">Address</h6>
								</div>
								<div class="col-sm-9 text-secondary">
<!-- 								<label style="color:black;" id="emailAddresslabelId"> </label> -->
									<input type="text"  style="border: 0px none;"  id="emailAddresslabelId" name="emailAddresslabelId">
							     <i class='fa fa-edit' data-toggle='modal'  style='color:blue;cursor: pointer;font-size:24px;'  onclick='EditaddressFun()'  data-target='#ProfileEmailPhoneEditId'  title='Edit'></i>
								
								</div>
							</div>
							
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0">PAN</h6>
								</div>
								<div class="col-sm-9 text-secondary">
<!-- 								<label style="color:black;" id="emailAddresslabelId"> </label> -->
									<input type="text"  style="border: 0px none;"  id="emailAddresslabelId" name="emailAddresslabelId">
								
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0">DP ID</h6>
								</div>
								<div class="col-sm-9 text-secondary">
<!-- 								<label style="color:black;" id="emailAddresslabelId"> </label> -->
									<input type="text"  style="border: 0px none;"  id="emailAddresslabelId" name="emailAddresslabelId">
							     <i class='fa fa-edit' data-toggle='modal'  style='color:blue;cursor: pointer;font-size:24px;'  onclick='EditdpIdFun()'  data-target='#ProfileEmailPhoneEditId'  title='Edit'></i>
								
								</div>
							</div>
    
        </div>
    </div>





				<!-- Profile Confirm update Modal START -->


	<div class="modal fade ProfileModel" id="ChangepasswordEditId" data-bs-backdrop="false" data-bs-keyboard="false" tabindex="-1" aria-labelledby="buySellModalLabel" aria-hidden="true">
					 <div class="modal-dialog modal-lg">
						<!-- Modal content-->
						<div class="modal-content profile-column">
						
						
							<div class="modal-header">
								<h4 class="modal-title" style="color:white;">Confirm update</h4>
								<button type="button" class="close" data-dismiss="modal">&times;</button>
							</div>
							
							
							<div class="modal-body">
								
								
					<div class="col-md-6 col-sm-8">
				      <div class="common-form form2">
<!-- 				        <form action="changePassword" method="post" id="SetTpinPasswordform" novalidate="novalidate"> -->
				       <input type="hidden" id="passwordhiddval"  name="passwordhiddval" />
			          <div class="mb-2 password">
			            <label for="setpassword" class="form-label">Set New Password</label>
			            <input type="password" class="form-control passtext" id="setpassword" name="setpassword" />
			            <div class="eye"><i class="fa fa-eye-slash" aria-hidden="true"></i></div>
			          </div>
			          <div class="mb-2  password">
			            <label for="conpassword" class="form-label">Confirm Password</label>
			            <input type="password" class="form-control passtext" id="conpassword" name="conpassword" />
			            <div class="eye"><i class="fa fa-eye-slash" aria-hidden="true"></i></div>
			          </div>
          
        
			           <div class="errorMsg"><label style="color:red;text-align: center" for="errormessage">${message}</label></div>
			          <div class="row justify-content-center set-pr">
			            <div class="col-md-9">
			              <div class="mb-2 d-grid gap-2">
			                <button type="submit"  onclick="savechangePassword()" class="btn btn-primary btn-lg blue-btn set-btn">Set <strong>Password</strong>
			              </div>
			            </div>
			          </div>
       
			         
			          
<!-- 			        </form> -->
			        
			      </div>
			    </div>
										

								
								
								<div class="modal-footer">
									<button type="button" id="sendOtpId" style="color:white;" onclick="SendOTPProfileEmailPhone()" data-toggle='modal'
										data-target='#OtpModelId' disabled="disabled" class="btn btn-default buysubmitgreen fonts">Send OTP</button>
									<button type="button" class="btn btn-default cancelbtn" data-dismiss="modal">Close</button>
								</div>
								
								
							</div>



						</div>	
					</div>
				</div>
		<!-- Profile Confirm update Modal END -->	
		
		<div class="modal fade ProfileModel" id="ChangepinEditId" data-bs-backdrop="false" data-bs-keyboard="false" tabindex="-1" aria-labelledby="buySellModalLabel" aria-hidden="true">
					 <div class="modal-dialog modal-lg">
						<!-- Modal content-->
						<div class="modal-content profile-column">
						
						
							<div class="modal-header">
								<h4 class="modal-title" style="color:white;">Confirm update</h4>
								<button type="button" class="close" data-dismiss="modal">&times;</button>
							</div>
							
							
							<div class="modal-body">
								 <input type="hidden" id="UserIDhiddval"  name="UserIDhiddval" />
            					 <input type="hidden" id="tpinhiddval"  name="tpinhiddval" />
								
					<div class="col-md-6 col-sm-8">
				      <div class="common-form form2">
<!-- 				        <form action="passwordTpin" method="post" id="SetTpinPasswordform" novalidate="novalidate"> -->
				                  
			        <div class="mb-2  password">
            <label for="conpassword" class="form-label">Set Your Unique TPIN</label>
            <div class="tpin d-flex ">
            
            <input type="text" class="form-control passtext" id="settpin" maxlength="6" name="settpin" />

            </div>
           
          </div>
          
           <div class="mb-4  password">
            <label for="conpassword" class="form-label">Confirm TPIN
            </label>
            <div class="tpin d-flex ">
 			            <input type="text" class="form-control passtext" maxlength="6" id="confirmtpin" name="confirmtpin" />

            </div>
           
          </div>
          
        
			           <div class="errorMsg"><label style="color:red;text-align: center" for="errormessage">${message}</label></div>
			          <div class="row justify-content-center set-pr">
			            <div class="col-md-9">
			              <div class="mb-2 d-grid gap-2">
			                <button type="submit" onclick="SaveChangeTpin()" class="btn btn-primary btn-lg blue-btn set-btn">Set <strong>TPIN</strong>
			              </div>
			            </div>
			          </div>
       
			         
			          
			        </form>
			        
			      </div>
			    </div>
										

								
								
								<div class="modal-footer">
									<button type="button" id="sendOtpId" style="color:white;" onclick="SendOTPProfileEmailPhone()" data-toggle='modal'
										data-target='#OtpModelId' disabled="disabled" class="btn btn-default buysubmitgreen fonts">Send OTP</button>
									<button type="button" class="btn btn-default cancelbtn" data-dismiss="modal">Close</button>
								</div>
								
								
							</div>



						</div>	
					</div>
				</div>
		<!-- Profile Confirm update Modal END -->	
		
</div>