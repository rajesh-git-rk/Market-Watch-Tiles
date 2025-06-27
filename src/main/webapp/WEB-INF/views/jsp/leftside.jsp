
<div id="sidebars" class="active">
    <div class="sidebar-wrapper">
        <div class="sidebar-header">
            <div class="current_rate">
                <div class="nifty_title">
                    <span class="tp_blue"><label id="firstpintickerscript">NIFTY</label></span><span class="tp_lgreen">+0.12%</span>
                </div>
                <div class="nse_index">
                    <span><label id="firstpintickerexchseries">NSE INDEX</label></span><span>16,650.90</span>
                </div>
            </div>

            <div class="current_rate">
                <div class="nifty_title">
                    <span class="tp_blue"><label id="secondprintickerscript">SENSEX</label></span><span class="tp_lgreen">+0.13%</span>
                </div>
                <div class="nse_index">
                    <span><label id="secondprintickerseries">BSE INDEX</label></span><span>56,014.83</span>
                </div>
            </div>
            <a class="btn btn-primary d-block d-sm-block d-lg-none expand_icn ms-auto"
                data-bs-toggle="collapse" href="#sidebar" role="button" aria-expanded="false"
                aria-controls="sidebar">
                <i class="bi bi-plus"></i>
                <i class="bi bi-dash"></i>
            </a>
        </div>
        <div class="collapse show sidebar-content" id="sidebar">
            <div class="card card-body">
                <div class="side-search-widget1">
                    <div class="search_bx">
                        <input type="search" name="search" autocomplete="off" placeholder="Add Symbols"
                            id="search" data-trigger="#sideSearchDropdown1" />
                             
                        <button type="submit" class="search_btn"><i class="bi bi-search"></i></button>
                    </div>
                    <div id="sideSearchDropdown1" class="side-search-dropdown">
                        <ul class="group-category">
                            <li class="active" data-group="all">All</li>
                            <li data-group="equity" id="searchplus">equity</li>
                            <li data-group="fo">fo</li>
                            <li data-group="commodity">commodity</li>
                            <li data-group="currency">currency</li>
                        </ul>
                         <ul class="search-list">
                        </ul> 
                    </div>
                </div>
                

<div id="searchhiddenval">
</div>


                <div class="pag_grid_types">
                    <ul class="pag_nav d-flex">
                        <li><a onclick="setMarketwatchActiveClass(marketwatchname1, this);" id="marketwatchname1" class="btn active" href="#">1</a></li>
                        <li><a onclick="setMarketwatchActiveClass(marketwatchname2, this);" id="marketwatchname2" class="btn" href="#">2</a></li>
                        <li><a onclick="setMarketwatchActiveClass(marketwatchname3, this);" id="marketwatchname3" class="btn" href="#">3</a></li>
                        <li><a onclick="setMarketwatchActiveClass(marketwatchname4, this);" id="marketwatchname4" class="btn" href="#">4</a></li>
                        <li><a onclick="setMarketwatchActiveClass(marketwatchname5, this);" id="marketwatchname5" class="btn" href="#">5</a></li>
                    </ul>
                    <div class="collapses_list">
                        <a href="#" class="deleteBtn d-none" id="deleteBtnId" onclick="multiplescriptdelete();"><i class="bi bi-trash"></i></a>
                        <a href="javascript:;" class="enableDrag"><i class="bi bi-list-task"></i></a>
                        <div class="dropdown sort-menu">
                            <a href="#" class="dropdown-toggle" type="button" id="sortDropdownMenu1"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="bi bi-list-nested"></i>
                            </a>
                            <div class="dropdown-menu dropdown-menu-end"
                                aria-labelledby="sortDropdownMenu1">
                                <div class="sort-options">
                                    <p>Sort</p>
                                    <ul>
                                        <li><a class="dropdown-item" href="#">A-Z</a></li>
                                        <li><a class="dropdown-item" href="#">LTP</a></li>
                                        <li class="active"><a class="dropdown-item" href="#">EXH</a></li>
                                        <li><a class="dropdown-item" href="#">CHG%</a></li>
                                    </ul>
                                    <!-- <p>Font Size</p>
                        <ul>
                            <li><a class="dropdown-item" href="#">S</a></li>
                            <li class="active"><a class="dropdown-item" href="#">M</a></li>
                            <li><a class="dropdown-item" href="#">L</a></li>
                        </ul> -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="scr_lists" id="sideMenuList">
                    <ul class="current_rate_lists">
                    
    
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>


<!-- set Alert Modal -->
      <div class="modal fade setAlertModal" id="setAlertModal" data-bs-backdrop="false" data-bs-keyboard="true"
      tabindex="-1" aria-labelledby="setAlertModal" aria-hidden="true">
      <div class="modal-dialog">
          <div class="modal-content">
              <div class="modal-header">
                  <div class="modal-title">
                      <h6>Set alert</h6>
                  </div>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"><i
                          class="bi bi-x-lg"></i></button>
              </div>
              <div class="modal-body">
                  <ul class="current_rate_lists1 product_info mb-3">
                      <li>
                          <div class="current_rate">
                              <div class="nifty_title">
                                  <span class="tp_blue">BANKNIFTY</span><span class="tp_lgreen">26,535.76
                                  </span>
                              </div>
                              <div class="nse_index">
                                  <span>NSE 29 APR 21 FUT</span><span class="tp_lgreen"><i
                                          class="bi bi-chevron-up"></i> +0,73 (+0,52%) </span>
                              </div>
                          </div>
                      </li>
                  </ul>
                  <div class="row">
                      <div class="col-12">
                          <p class="text-blue">Alert Condition</p>
                          <ul class="setalert_btns" id="alert_option">
                              <li class="alertdata active">LESSER THAN</li>
                              <li class="alertdata">GREATER THAN</li>
                              <li class="alertdata">LESS THAN OR EQUAL TO</li>
                              <li class="alertdata">GREAT THAN OR EQUAL TO</li>
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
                                          <input type="text" id="alertPriceId" class="pl-ns-value form-control" value="4566">
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
                              <textarea class="form-control" id="addCommentId" rows="6"
                                  placeholder="Write your comment here..."></textarea>
                          </div>
                      </div>
                      <div class="row mt-2">
                          <div class="col-5">
                              <div class="accordion accordion-flush" id="accordionFlush">
                                  <div class="accordion-item">
                                      <h2 class="accordion-header" id="flush-headingOne">
                                          <button class="accordion-button collapsed" type="button"
                                              data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
                                              aria-expanded="false" aria-controls="flush-collapseOne">
                                              Advanced
                                          </button>
                                      </h2>
                                      <div id="flush-collapseOne" class="accordion-collapse collapse"
                                          aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlush">
                                          <div class="accordion-body">

                                              <ul class="advanced setalert_btns">
                                                  <li class="frequency active once">ONCE</li>
                                                  <li class="frequency recurring">RECURRING</li>
                                              </ul>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div class="col-7">
                              <div class="date_item">
                                  <label for="datepicker">Till Date</label> <input type="text" id="datepicker"
                                      readonly="" disabled="">
                              </div>
                          </div>
                      </div>
                      <div class="row justify-content-center">
                          <div class="col-6 mt-2">
                              <button type="button" onclick="createAlert();" class="btn btn-green btn-default btn-block">SET ALERT</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
       <input type="hidden" id="LTPhiddval" name="LTPhiddval" >
       
      <input type="hidden" id="setScriptNamehiddenId" name="setScriptNamehiddenId" >
   		<input type="hidden" id="setpricehiddenId" name="setpricehiddenId" >
   		<input type="hidden" id="setexchangehiddenId" name="setexchangehiddenId" >
   		<input type="hidden" id="settokenhiddenId" name="settokenhiddenId" >
   		<input type="hidden" id="setmcxOriginalExpiryDatehiddenId" name="setmcxOriginalExpiryDatehiddenId" >
   		<input type="hidden" id="setnseExDatehiddenId" name="setnseExDatehiddenId" >
   		<input type="hidden" id="setnfoexpiry_datehiddenId" name="setnfoexpiry_datehiddenId" >
   		
   		<input type="hidden" id="setstockdisplaynameId" name="setstockdisplaynameId" >
   		<input type="hidden" id="setmcxticksizeId" name="setmcxticksizeId" >
   		<input type="hidden" id="setmcxexpirydateId" name="setmcxexpirydateId" >
   		<input type="hidden" id="setnseticksizeId" name="setnseticksizeId" >
   		<input type="hidden" id="setnseexpirydateId" name="setnseexpirydateId" >
   		<input type="hidden" id="setnfoexpirydateId" name="setnfoexpirydateId" >
   		<input type="hidden" id="setmcxInstrumentCodeId" name="setmcxInstrumentCodeId" >
   		<input type="hidden" id="setmcxStrikePriceId" name="setmcxStrikePriceId" >
   		<input type="hidden" id="setmcxOptionTypeId" name="setmcxOptionTypeId" >
   		<input type="hidden" id="setmcxInstrumentNameId" name="setmcxInstrumentNameId" >
   		<input type="hidden" id="setmcxInstrumentSeriesId" name="setmcxInstrumentSeriesId" >
   		<input type="hidden" id="setnseSymbolId" name="setnseSymbolId" >
   		<input type="hidden" id="setnseSeriesId" name="setnseSeriesId" >
   		<input type="hidden" id="setnfosymbolId" name="setnfosymbolId" >
   		<input type="hidden" id="setnfostrike_priceId" name="setnfostrike_priceId" >
   		<input type="hidden" id="setnfooption_typeId" name="setnfooption_typeId" >
   		<input type="hidden" id="setnfoinstrument_nameId" name="setnfoinstrument_nameId" >
      
  </div>
  
  
  
  <!-- Symbol Info Modal -->
    <div class="modal fade symbolInfoModal" id="symbolInfoModal" data-bs-backdrop="false" data-bs-keyboard="true"
        tabindex="-1" aria-labelledby="symbolInfoModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <div class="modal-title">
                        <h6>Symbol Info</h6>
                    </div>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"><i
                            class="bi bi-x-lg"></i></button>
                </div>
                <div class="modal-body">
                    <ul class="info_list y_scroll symbolinfodata">
                       
                    </ul>
                </div>
            </div>
        </div>
    </div>




 <div id="confirmPopup" style="display:hidden;">
 <%@ include file="buysell.jsp" %>
</div>

<div id="optionchainPopup" style="display:hidden;">
      <%@ include file="OptionChain.jsp" %>
</div>



<script type="text/javascript">
	 
	 $('.btn-showbuysell').click(function(event) {
		   document.getElementById("confirmPopup").style.display="block";
		  });
	 
	 $('.btn-showOptionchain').click(function(event) {
		   document.getElementById("optionchainPopup").style.display="block";
		  });
	
</script> 

