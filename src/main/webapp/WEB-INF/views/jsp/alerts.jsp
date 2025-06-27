<div class="main_content" id="AlertsDivId" style="display:none;">
                <div class="row">
                    <div class="col">
                        <div class="ava_bal_bg priceAlert">
                            <div class="title">
                                <h4 class="lbl_blue_txt">
                                    PRICE ALERTS
                                </h4>
                                <div class="searchbar">
                                    <i class="bi bi-search"></i>
                                    <input type="text" class="form-control" id="" placeholder="search.." autocomplete="off" >
                                </div>
                            </div>
                            <ul class="alerts_data_lists">
                          
  
                           </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        
   <!-- set Alert Modal -->
      <div class="modal fade setAlertModal" id="modifyAlertModal" data-bs-backdrop="false" data-bs-keyboard="true"
      tabindex="-1" aria-labelledby="setAlertModal" aria-hidden="true">
      <div class="modal-dialog">
          <div class="modal-content">
              <div class="modal-header">
                  <div class="modal-title">
                      <h6>Modify alert</h6>
                  </div>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"><i
                          class="bi bi-x-lg"></i></button>
              </div>
              <div class="modal-body">
                  <ul class="current_rate_lists1 product_info mb-3">
                      <li>
                          <div class="current_rate">
                              <div class="nifty_title">
                                  <span class="tp_blue"><label id="modifyscriptnamelabelId"></label></span><span class="tp_lgreen">26,535.76
                                  </span>
                              </div>
                             <!--  <div class="nse_index">
                                  <span>NSE 29 APR 21 FUT</span><span class="tp_lgreen"><i
                                          class="bi bi-chevron-up"></i> +0,73 (+0,52%) </span>
                              </div> -->
                          </div>
                      </li>
                  </ul>
                  <div class="row">
                      <div class="col-12">
                          <p class="text-blue">Alert Condition</p>
                          <ul class="setalert_btns" id="modifyalert_option">
                              <li  class="modifyalert lessthan active">LESSER THAN</li>
                              <li class="modifyalert greaterthan">GREATER THAN</li>
                              <li class="modifyalert lessequal">LESS THAN OR EQUAL TO</li>
                              <li class="modifyalert greaterequal">GREAT THAN OR EQUAL TO</li>
                          </ul>
                      </div>
                  </div>
                  <div class="form-field">
                      <div class="row">
                          <div class="col-6 d-flex align-items-center">Price</div>
                          <div class="col-6">
                              <div class="form-group">
                                  <div class="form-group">
                                      <div class="number-spinner">
                                          <span class="ns-btn">
                                              <a data-dir="dwn"><i class="bi bi-dash"></i></a>
                                          </span>
                                          <input type="text" id="modifyalertPriceId" class="pl-ns-value form-control" >
                                          <span class="ns-btn">
                                              <a data-dir="up"><i class="bi bi-plus"></i></a>
                                          </span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="row">
                          <div class="col-12">
                              <label for="Textarea1" class="form-label text-blue">Add Comment</label>
                              <textarea class="form-control" id="modifyaddCommentId" rows="6"
                                  placeholder="Write your comment here..."></textarea>
                          </div>
                      </div>
                      <div class="row mt-2">
                          <div class="col-5">
                              <div class="accordion accordion-flush" id="modifyaccordionFlush">
                                  <div class="accordion-item">
                                      <h2 class="accordion-header" id="modifyflush-headingOne">
                                          <button class="accordion-button collapsed" type="button"
                                              data-bs-toggle="collapse" data-bs-target="#modifyflush-collapseOne"
                                              aria-expanded="false" aria-controls="modifyflush-collapseOne">
                                              Advanced
                                          </button>
                                      </h2>
                                      <div id="modifyflush-collapseOne" class="accordion-collapse collapse"
                                          aria-labelledby="modifyflush-headingOne" data-bs-parent="#modifyaccordionFlush">
                                          <div class="accordion-body">

                                              <ul class="modifyadvanced setalert_btns">
                                                  <li class="modifyfrequency modifyonce active ">ONCE</li>
                                                  <li class="modifyfrequency modifyrecurring">RECURRING</li>
                                              </ul>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div class="col-7">
                              <div class="date_item">
                                  <label for="modifydatepicker">Till Date</label> <input type="text" id="modifydatepicker"
                                      readonly="" disabled="">
                              </div>
                          </div>
                      </div>
                      <div class="row justify-content-center">
                          <div class="col-6 mt-2">
                              <button type="button" onclick="modifyAlert();" class="btn btn-green btn-default btn-block">MODIFY ALERT</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>    
      
      <input type="hidden" id="modifyscriptNamehiddId" name="modifyscriptNamehiddId" >
   		<input type="hidden" id="modifypricehiddId" name="modifypricehiddId" >
   		<input type="hidden" id="alertModifyhiddId" name="alertModifyhiddId" >
   		<input type="hidden" id="alertModifyhidddate" name="alertModifyhidddate" >
   		

    </div>
    
    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ"
        crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js"></script>
    <script src="js/autocomplete.js"></script>
    <script src="js/rangeslider.min.js"></script>
    <script src="js/demo-data.js"></script>
    <script src="js/main.js"></script>
    <script src="js/custom.js"></script>

</body>

</html>