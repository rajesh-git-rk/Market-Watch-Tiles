//Preloader
$(function () {
  const cssClasses = [
    'rangeslider--is-lowest-value',
    'rangeslider--is-highest-value'
  ];
});


$.fn.scrollDivToElement = function(childSel) {
  if (!this.length) return this;

  return this.each(function() {
      let parentEl = $(this);
      let childEl = parentEl.find(childSel);

      if (childEl.length > 0) {
          parentEl.scrollTop(
              parentEl.scrollTop() - parentEl.offset().top + childEl.offset().top - (parentEl.outerHeight() / 2) + (childEl.outerHeight() / 2)
          );
      }
  });
};
//Switch dark mode
$(document).ready(function () {
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })
  if ($('input[type=range]').length > 0) {
    $('input[type=range]')
      .rangeslider({
        polyfill: false
      })
      .on('input', function () {
        const fraction = (this.value - this.min) / (this.max - this.min);
        if (fraction === 0) {
          this.nextSibling.classList.add(cssClasses[0]);
        } else if (fraction === 1) {
          this.nextSibling.classList.add(cssClasses[1]);
        } else {
          this.nextSibling.classList.remove(...cssClasses)
        }
      });
  }
  // var scrollTableCenter = document.querySelector('.table-active');
  // setTimeout(function() {
  //   scrollTableCenter.scrollIntoView();
  // })
  var scrollTrNo = 0;
  if($('.oc-table-main').length > 0) {
    var tableTrLength = $('.oc-table-left .table-borderless tbody tr').length;
    scrollTrNo = Math.round((tableTrLength/2)-1);
    // console.log('tableTrLength', scrollTrNo);
    $('.oc-table-main').scrollDivToElement('.table-borderless tbody tr:eq('+scrollTrNo+')');
  }
  $('.oc-table-main').scroll(function(e) {
    var isActiveTrVisible = checkInView($(".oc-table-main .table tr td.table-active"), false, ".oc-table-main");
    var scrollHeight = $(this).scrollTop();
    var scrolingArea = $(this)[0].scrollHeight;
    var scrolPosMiddle = scrolingArea/2;
    var ocContHeight = ($('.oc-table-main').height() - 35);
      // console.log('ocContHeight', ocContHeight);
    $('.floatingSpotPrice').removeClass('toTop');
    $('.floatingSpotPrice').removeClass('toBot');
    $('.oc-table-holder').removeClass('addPad36');
    if(!isActiveTrVisible) {
      $('.floatingSpotPrice').removeClass('d-none');
      if (scrollHeight < scrolPosMiddle) {
        $('.floatingSpotPrice').addClass('toBot');
        $('.floatingSpotPrice').css('bottom', '0px');
      } else {
        $('.floatingSpotPrice').addClass('toTop');
        $('.oc-table-holder').addClass('addPad36');
        $('.floatingSpotPrice').css('bottom', ocContHeight+'px');
      }
    } else {
      $('.floatingSpotPrice').addClass('d-none');
    }
  });
  $('.scrollBotBox label.lbl_blue_txt').click(function() {
    // var targetElm = document.querySelector('.scrollbotTarget');
    var scrollboxHeight = $('.oc-table-main');
    scrollboxHeight.toggleClass('autoHeight');
    var mainContHgt = $('.main_content').height();
    console.log('mainContHgt', mainContHgt);
    setTimeout(function() {
      // scrollTableCenter.scrollIntoView();
      // targetElm.scrollIntoView();
      if (scrollboxHeight.hasClass('autoHeight')) {
        scrollboxHeight.css('height', ((mainContHgt-130)/2) + 'px');
        $('.oc-table-main').scrollDivToElement('.table-borderless tbody tr:eq('+scrollTrNo+')');
      } else {
        scrollboxHeight.css('height', 'calc(77vh - 100px)');
      }      
    }, 100);
  });
});




$(document).ready(function () {
  
	
	  $('.btn-authorize').click(function () {
		    $(this).addClass("hide");
		     $("#authorizeModal .scrollContent").addClass("hide");
		     $("#authorizeModal .btn-cdsl").removeClass("hide");
		   });
		   $('#authorizeModal').on('hidden.bs.modal', function(e) {
		    $("#authorizeModal .btn-authorize").removeClass("hide");
		    $("#authorizeModal .scrollContent").removeClass("hide");
		    $("#authorizeModal .btn-cdsl").addClass("hide");
		  })
		  
		  
 $("#profile_load").change(function(event){
    var output = document.getElementById('output');
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function() {
      URL.revokeObjectURL(output.src) // free memory
    }
  });
  $('.btn-cdsl').click(function () {
    window.open(this.href,"my_window", "width=400, height=400");
  });
  
  
  /*$('#datepicker').datepicker({
	  
    dateFormat: 'd M yy',
    minDate: new Date(),
    defaultDate:  new Date(),
    
  }).datepicker('setDate',new Date());*/

  /* Get the element you want displayed in fullscreen */
  var elem = document.documentElement;
  $('.full-screen').click(function () {
    openFullscreen();
  });
  /* Function to open fullscreen mode */
  function openFullscreen() {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
      elem = window.top.document.body; //To break out of frame in IE
      elem.msRequestFullscreen();
    }
  }

  // running widget controls
  $('.running-widget .running-control').click(function () {
    var getstatus = $(this).attr('data-status');
    var getElmn = $(this).parent().parent().find('.running-label');
    if (getstatus === 'active') {
      getElmn.text('Pause');
      getElmn.attr('data-status', 'pause')
      $(this).attr('data-status', 'pause');
      $(this).find('i').removeClass('bi-pause-circle-fill').addClass('bi-play-circle-fill');
    } else if (getstatus === 'pause') {
      getElmn.text('Running');
      getElmn.attr('data-status', 'active')
      $(this).attr('data-status', 'active');
      $(this).find('i').removeClass('bi-play-circle-fill').addClass('bi-pause-circle-fill');
    }
  });

  $(".mode_change").on("click", function () {
    if ($("body").hasClass("dark")) {
      $("body").removeClass("dark");
    } else {
      $("body").addClass("dark");
    }
  });

  $(".hamburger").click(function () {
    $(this).toggleClass("is-active");
  });

  $(window).click(function (e) {

    if ($(".navbar-collapse").hasClass("show")) {
      $('.navbar-collapse').removeClass("show");

      e.preventDefault();
      $(".hamburger").removeClass("is-active");
    }

  });
  $('.navbar-collapse').click(function (event) {
    event.stopPropagation();

  });
  
  $('.collapse').on('shown.bs.collapse', function (e) {
	    var $card = $(this).closest('.card');
	    var $open = $($(this).data('parent')).find('.collapse.show');
	    if ($card.length > 0) {
	      var additionalOffset = 0;
	      if ($card.prevAll().filter($open.closest('.card')).length !== 0) {
	        additionalOffset = $open.height();
	      }
	      $('html,body').animate({
	        scrollTop: $card.offset().top - additionalOffset
	      }, 500);
	    }

	  });
  $('.scrollBotBox .collapse').on('shown.bs.collapse', function (e) {
    var $card = $(this).closest('.card');
    var $open = $($(this).data('parent')).find('.collapse.show');
    $('.scrollBotBox .collapse').addClass("show");
    if ($card.length > 0) {
      var additionalOffset = 0;
      if ($card.prevAll().filter($open.closest('.card')).length !== 0) {
        additionalOffset = $open.height();
      }
      // $('html,body').animate({
      //   scrollTop: $card.offset().top - additionalOffset
      // }, 500);
    }

  });
  $('.scrollBotBox .collapse').on('hide.bs.collapse', function (e) {
    $('.scrollBotBox .collapse').removeClass("show");
  });
 
  // Auto complete
  if (typeof Autocomplete !== 'undefined') {
    var field = document.getElementById('search_table');
    if (field !== null) {
      var ac = new Autocomplete(field, {
        data: [{ label: "I'm a label", value: 42 }],
        maximumItems: 5,
        treshold: 1,
        onSelectItem: ({ label, value }) => {
          console.log("user selected:", label, value);
        }
      });

      ac.setData([
        {
          "label": "BANKNIFTY NSE",
          "value": "BANKNIFTY NSE"
        },
        {
          "label": "BANKBARODA NSE",
          "value": "BANKBARODA NSE"
        },
      ]);
    }
  }
  // Side menu search widget
  $('html, body').click(function () {
    if ($('#sideSearchDropdown1').length > 0 && $('#sideSearchDropdown1').hasClass('show')) {
    	document.getElementById("search").value = "";
    	sideSearchData = [];
    	updatewatchlist(sideSearchData);
    	$('#sideSearchDropdown1').removeClass('show');
    }
  })
  
 
  $('.search_bx input[type=search]').click(function (e) {
    var getTarget = $(this).data('trigger');
    if (!$(getTarget).hasClass('show')) {
      $(getTarget).addClass('show');
    }
    // else {
    //   $(getTarget).removeClass('show');
    // }
    e.stopPropagation();
  });
  $('body, html').on('click', '.side-search-dropdown .search-list li', function (e) {
    var isSelcted = $(this).hasClass('selected');
    if (!isSelcted) {
      $(this).addClass('selected');
      $(this).find('.icon-select').html('<i class="bi bi-check2"></i>');
    } else {
      $(this).removeClass('selected');
      $(this).find('.icon-select').html('<i class="bi bi-plus"></i>');
    }
    e.stopPropagation();
  });
  $('body, html').on('click', '.side-search-dropdown', function (e) {
    e.stopPropagation();
  })
  $('body, html').on('click', '.side-search-dropdown .group-category li', function (e) {
    var groupName = $(this).attr('data-group');
    $('.side-search-dropdown .group-category li').removeClass('active');
    $(this).addClass('active');
    // console.log('---------', filterByGroup, groupName);
    if (typeof sideSearchData !== 'undefined') {
      if (groupName === 'all') {
        bindSearchSideMenuData(sideSearchData, '#sideSearchDropdown1');
      } else {
        var filterByGroup = _.filter(sideSearchData, function (i) {
          return i.group === groupName
        });
        bindSearchSideMenuData(filterByGroup, '#sideSearchDropdown1');
      }
    }
    e.stopPropagation();
  });
  if (typeof sideSearchData !== 'undefined' && sideSearchData.length > 0) {
    var catergoryData = [];
    var ggroupCatergry = _.groupBy(sideSearchData, function (i) {
      return i.group
    });
    if (typeof _ !== 'undefined') {
      _.map(ggroupCatergry, function (i, j) {
        catergoryData.push(j);
      });
    }
    var groupListHtml = '<li class="active" data-group="all">All</li>';
    if (catergoryData.length > 0) {
      catergoryData.map(function (i) {
        groupListHtml = groupListHtml + '<li data-group="' + i + '">' + i + '</li>';
      });
    }
    $('#sideSearchDropdown1').find('.group-category').html(groupListHtml);
  }
  if (typeof sideSearchData !== 'undefined') {
    bindSearchSideMenuData(sideSearchData, '#sideSearchDropdown1');
  }
  
  var marktDepthMdlEl = document.getElementById('marketDepthModal');
  if (typeof marktDepthMdlEl !== 'undefined' && marktDepthMdlEl !== null) {
    marktDepthMdlEl.addEventListener('show.bs.modal', function (event) {
      // do something...
      var modalWidth = $('#marketDepthModal').width();
      var modalHeight = $('#marketDepthModal').height();
      $('#marketDepthModal').css('margin-left', ('-' + modalWidth / 2) + 'px');
      $('#marketDepthModal').css('margin-top', ('-' + modalHeight / 2) + 'px');
      $('#marketDepthModal').draggable({
        handle: ".modal-header"
      });
    })
  }
  var setAlertMdlEl = document.getElementById('setAlertModal');
  if (typeof setAlertMdlEl !== 'undefined' && setAlertMdlEl !== null) {
    setAlertMdlEl.addEventListener('show.bs.modal', function () {
      var modalWidth = $('#setAlertModal').width();
      var modalHeight = $('#setAlertModal').height();
      $('#setAlertModal').css('margin-left', ('-' + modalWidth / 2) + 'px');
      $('#setAlertModal').css('margin-top', ('-' + modalHeight / 2) + 'px');
      $('#setAlertModal').draggable({
        handle: ".modal-header"
      });
    });
  }
  var optionChainChrtMdlEl = document.getElementById('optionChainChartModal');
  if (typeof optionChainChrtMdlEl !== 'undefined' && optionChainChrtMdlEl !== null) {
    optionChainChrtMdlEl.addEventListener('show.bs.modal', function () {
      var modalWidth = $('#optionChainChartModal').width();
      var modalHeight = $('#optionChainChartModal').height();
      $('#optionChainChartModal').css('margin-left', ('-' + modalWidth / 2) + 'px');
      $('#optionChainChartModal').css('margin-top', ('-' + modalHeight / 2) + 'px');
      $('#optionChainChartModal').draggable({
        handle: ".modal-header"
      });
    });
  }
  
  // Number Spinner 
  $('.number-spinner .ns-btn a').click(function () {
    var btn = $(this),
      oldValue = btn.closest('.number-spinner').find('input').val().trim(),
      newVal = 0;
   // alert("newVal : "+newVal+" oldValue : "+oldValue);
    if (btn.attr('data-dir') === 'up') {
      newVal = parseInt(oldValue) + 1;
     // alert("up newVal : "+newVal+" oldValue : "+oldValue);
    } else {
      if (oldValue > 1) {
        newVal = parseInt(oldValue) - 1;
       // alert(" down newVal : "+newVal+" oldValue : "+oldValue);
      } else {
        newVal = 1;
      }
    }
    btn.closest('.number-spinner').find('input').val(newVal);
  });
  $('.number-spinner>input').keypress(function (evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  });
  // Enable Drag option
  $('.enableDrag').click(function () {
    $('#sideMenuList > ul > li').each(function () {
      if (!$(this).hasClass('hasCheckbox')) {
        $(this).addClass('hasCheckbox');
      } else {
        $(this).removeClass('hasCheckbox');
        $(this).find('.form-check-input').prop('checked', false);
        $('.deleteBtn').addClass('d-none');
      }
    })
  })
  $(".table-custom tr").hover(function () {
    $('.table-custom tr td:last-child').removeClass('show');
    $(this).find('td:last-child').toggleClass('show');
  });
  $(".table-custom").mouseleave(function () {
    $('.table-custom tr td:last-child').removeClass('show');
  });
});
//Data Tables Starts
$(document).ready(function() {

  $(".advanced li").click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    if ($('.recurring').hasClass('active')){
      $(".date_item").show();
      $("#datepicker").prop("disabled", false);
    } 
    else{
      $(".date_item").hide();
      $("#datepicker").prop("disabled", true);
    }
    // else {
    //     $('#takeonebar').addClass('slamdown');
    //   }
  });
  $("#alert_option li").click(function(){
    $(this).addClass('active').siblings().removeClass('active');
  });
  
  $(".modifyadvanced li").click(function(){
	    $(this).addClass('active').siblings().removeClass('active');
	    if ($('.modifyrecurring').hasClass('active')){
	      $(".date_item").show();
	      $("#modifydatepicker").prop("disabled", false);
	    } 
	    else{
	      $(".date_item").hide();
	      $("#modifydatepicker").prop("disabled", true);
	    }
	    // else {
	    //     $('#takeonebar').addClass('slamdown');
	    //   }
	  });
	  $("#modifyalert_option li").click(function(){
	    $(this).addClass('active').siblings().removeClass('active');
	  });

//  if ($('#tabelPending3').length > 0) {
//    $('#tabelPending3').DataTable({
//      ajax: 'js/ajax/tablePendingData.json',
//      columns: [
//        { data: "name" },
//        { data: "sellbuybtn" },
//        { data: "qty" },
//        { data: "product" },
//        { data: "price" },
//        { data: "triggerPrice" },
//        { data: "status" },
//        { data: "LTP" },
//        { data: "avgPrice" },
//        {
//          data: "btncolpse",
//          orderable: false,
//        },
//      ],
//      paging: false,
//      pageLength: 100,
//      info: false,
//      scrollY: "74vh",
//      scrollCollapse: true,
//      scrollX: true,
//    });
//  }
  
  // new $.fn.dataTable.FixedHeader( table );
});


//if ($('#tabelCompleted3').length > 0) {
//  var tabelCompleted3 = $('#tabelCompleted3').DataTable({
//    // data: tableCompletedData,
//    ajax: 'js/ajax/tableCompletedData.json',
//    columns: [
//      { data: "name" },
//      { data: "sellbuybtn" },
//      { data: "qty" },
//      { data: "product" },
//      { data: "price" },
//      { data: "triggerPrice" },
//      { data: "status" },
//      { data: "LTP" },
//      { data: "avgPrice" },
//      { 
//        className: 'details-control',
//        orderable: false,
//        data: "btncolpse",
//        defaultContent: '+'
//      },
//    ],
//    paging: false,
//    pageLength: 100,
//    info: false,
//    orderable: false,
//    scrollY: "74vh",
//    scrollCollapse: true,
//    scrollX: true,
//    
//  });
//  var openTabelCompleted3Rows = new Array();
//  $('#tabelCompleted3 tbody').on('click', 'td.details-control', function() {
//    var tr = $(this).closest('tr');
//    var row = tabelCompleted3.row(tr);
//    // $('#tabelCompleted3 tbody tr.shown').next('tr').remove();
//    // $('#tabelCompleted3 tbody tr').removeClass('shown');
//    if(row.child.isShown()){
//        // This row is already open - close it
//        row.child.hide();
//        tr.removeClass('shown');
//    } else {
//        // Open this row
//        closeCompletedTableOpenRows(tabelCompleted3, tr);
//        row.child(formatTabelCompleted3(row.data())).show();
//        tr.addClass('shown');
//        openTabelCompleted3Rows.push(tr);
//    }
//  });
//}



//if ($('#tabelTrade3').length > 0) {
//  var tabelTrades3 = $('#tabelTrade3').DataTable({
//    // data: tableTradesData,
//    ajax: 'js/ajax/tableTradesData.json',
//    columns: [
//      { data: "name" },
//      { data: "sellbuybtn" },
//      { data: "qty" },
//      { data: "product" },
//      { data: "price" },
//      { data: "triggerPrice" },
//      { data: "status" },
//      { data: "LTP" },
//      { data: "avgPrice" },
//      { 
//        className: 'details-control',
//        orderable: false,
//        data: "btncolpse",
//        defaultContent: '',
//      },
//    ],
//    paging: false,
//    pageLength: 100,
//    info: false,
//    scrollY: "74vh",
//    scrollCollapse: true,
//    scrollX: true,
//  });
//  var openTabelTrade3Rows = new Array();
//  $('#tabelTrade3 tbody').on('click', 'td.details-control', function() {
//    var tr = $(this).closest('tr');
//    var row = tabelTrades3.row( tr );
//    if(row.child.isShown()){
//        // This row is already open - close it
//        row.child.hide();
//        tr.removeClass('shown');
//    } else {
//        // Open this row
//        closeTradeTableOpenRows(tabelTrades3, tr);
//        row.child(formatTabelTrades3(row.data())).show();
//        tr.addClass('shown');
//        openTabelTrade3Rows.push(tr);
//    }
//  });
//}
function formatTabelTrades3(d) {
  // `d` is the original data object for the row
	var prevprd;
	 if(d.product=="CNC"){
		 prevprd="I"; 
	 }else if(d.product=="NRML"){
		 prevprd="I";
	 }else if(d.product=="MIS"){
		 prevprd="M";
	 }
	
	console.log("data::"+d);
  return '<table cellpadding="5" cellspacing="0" border="0" class="table-status" style="width:100%;">'+
      '<tr>'+
        '<td>' + d.status2Text + '</td>' +
        '<td><span>Placed by:</span><p>' + d.placedby + '</p></td>' +
        '<td><span>Order Type:</span><p>' + d.orderType + '</p></td>' +
        '<td><span>Exchange Time:</span><p>' + d.exchangeTime + '</p></td>' +
        '<td><span>Order ID:</span><p>' + d.orderId + '</p></td>' +
        '<td><span>Exchange Order ID:</span><p>' + d.exOrderId + '</p></td>' +
        '<td><span>Disclosed Quantity:</span><p>' + d.discloseQty + '</p></td>' +
      '</tr>'+
      '<tr>'+
          
        '<td class="convert" colspan="7"><div class="dropdown convert-dropdown"><button class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="false">Convert to NRML</button> <div class="dropdown-menu" aria-labelledby="convertButton1"><h3>Conversion</h3><span class="btn-close2"><i class="bi bi-x-lg"></i></span><ul class="pro-info"><li><h2>'+d.tsym+'</h2><p><span>'+d.exch+'</span><span>'+d.orderType+'</span></p></li><li><p class="quantity">QTY: ' + d.qty + '</p><label class="buy-label">BUY</label></li></ul><div class="confirm"><p>Do you want to convert the Order to NRML</p><div class="btn-part"><button onclick="productConvert(\'' + d.tsym + '\',\''+d.exch+'\',\''+d.orderType+'\',\''+prevprd+'\',\''+d.qty+'\',\''+d.trantype+'\',\''+d.prd+'\',\''+d.postype+'\');" class="btn btn-primary">Yes</button><button class="btn btn-primary btn-red">No</button></div></div></div></div></td>'+

      '</tr>'+
  '</table>';
}

//function formatTabelCompleted3(d) {
//  console.log('formatTabelCompleted3', (d.status2Value === 'rejected'));
//  // `d` is the original data object for the row
//  var rejectedHTML = '';
//  if (d.status2Value === 'rejected') {
//    rejectedHTML = '<tr class="reject_cnt"><td  colspan="5"><p><span>Rejection Reason</span> '+ d.status2Msg +'</p></td><td colspan="2"><button class="btn btn-primary btn-xs">Make PAYIN</button><button onclick="buysellwindow('+d.token+');" class="btn btn-primary btn-xs btn-showbuysell repeatOrder-showbuysell" data-modal-type="' + d.busellStatus + '">Try Again</button></td></tr>';
//  }
//  return '<table cellpadding="5" cellspacing="0" border="0" class="table-status" style="width:100%;">'+
//    '<tr>'+
//      '<td>' + d.status2Text + '</td>' +
//      '<td><span>Placed by:</span><p>' + d.placedby + '</p></td>' +
//      '<td><span>Order Type:</span><p>' + d.orderType + '</p></td>' +
//      '<td><span>Exchange Time:</span><p>' + d.exchangeTime + '</p></td>' +
//      '<td><span>Order ID:</span><p>' + d.orderId + '</p></td>' +
//      '<td><span>Exchange Order ID:</span><p>' + d.exOrderId + '</p></td>' +
//      '<td><span>Disclosed Quantity:</span><p>' + d.discloseQty + '</p></td>' +
//    '</tr>'+ rejectedHTML +
//  '</table>';
//}
	
	
	 $('#datepicker').datepicker({
   	  
 	    dateFormat: 'd M yy',
 	    minDate: new Date(),
 	    defaultDate:  new Date(),
 	    
 	  }).datepicker('setDate',new Date());
	 
	 
	
	 
	 
	
	
	  $(".advanced li").click(function(){
		 
	    $(this).addClass('active').siblings().removeClass('active');
	    if ($('.recurring').hasClass('active')){
	      $(".date_item").show();
	      $("#datepicker").prop("disabled", false);
	    
	    } 
	    else{
	      $(".date_item").hide();
	      $("#datepicker").prop("disabled", true);
	    }
	    // else {
	    //     $('#takeonebar').addClass('slamdown');
	    //   }
	  });
	  $("#alert_option li").click(function(){
	    $(this).addClass('active').siblings().removeClass('active');
	  });
//function formatTabelTrades3(d) {
//  // `d` is the original data object for the row
//  return '<table cellpadding="5" cellspacing="0" border="0" class="table-status" style="width:100%;">'+
//      '<tr>'+
//        '<td>' + d.status2Text + '</td>' +
//        '<td><span>Placed by:</span><p>' + d.placedby + '</p></td>' +
//        '<td><span>Order Type:</span><p>' + d.orderType + '</p></td>' +
//        '<td><span>Exchange Time:</span><p>' + d.exchangeTime + '</p></td>' +
//        '<td><span>Order ID:</span><p>' + d.orderId + '</p></td>' +
//        '<td><span>Exchange Order ID:</span><p>' + d.exOrderId + '</p></td>' +
//        '<td><span>Disclosed Quantity:</span><p>' + d.discloseQty + '</p></td>' +
//      '</tr>'+
//      '<tr>'+
//        '<td class="convert" colspan="7"><div class="dropdown convert-dropdown"><button class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="false">Convert to NRML</button> <div class="dropdown-menu" aria-labelledby="convertButton1"><h3>Conversion</h3><span class="btn-close2"><i class="bi bi-x-lg"></i></span><ul class="pro-info"><li><h2>Gold1</h2><p><span>NSE</span><span>EQ</span><span>MARKET</span></p></li><li><p class="quantity">QTY: ' + d.qty + '</p><label class="buy-label">BUY</label></li></ul><div class="confirm"><p>Do you want to convert the Order to NRML</p><div class="btn-part"><button class="btn btn-primary">Yes</button><button class="btn btn-primary btn-red">No</button></div></div></div></div></td>'+
//      '</tr>'+
//  '</table>';
//}


//function closeCompletedTableOpenRows(table, selectedRow) {
//  $.each(openTabelCompleted3Rows, function (index, openRow) {
//      // not the selected row!
//      if ($.data(selectedRow) !== $.data(openRow)) {
//          var rowToCollapse = table.row(openRow);
//          rowToCollapse.child.hide();
//          openRow.removeClass('shown');
//          // replace icon to expand
//          $(openRow).find('td.details-control').html('<button type="button" class="btn btn-secondary"><i class="bi bi-three-dots-vertical"></i> </button>');
//          // remove from list
//          var index = $.inArray(selectedRow, openTabelCompleted3Rows);
//          openTabelCompleted3Rows.splice(index, 1);
//      }
//  });
//}
//function closeTradeTableOpenRows(table, selectedRow) {
//  $.each(openTabelTrade3Rows, function (index, openRow) {
//      // not the selected row!
//	  
//	  console.log("index::"+index+"openRow::"+openRow);
//      if ($.data(selectedRow) !== $.data(openRow)) {
//          var rowToCollapse = table.row(openRow);
//          rowToCollapse.child.hide();
//          openRow.removeClass('shown');
//          // replace icon to expand
//          $(openRow).find('td.details-control').html('<button type="button" class="btn btn-secondary"><i class="bi bi-three-dots-vertical"></i> </button>');
//          // remove from list
//          var index = $.inArray(selectedRow, openTabelTrade3Rows);
//          openTabelTrade3Rows.splice(index, 1);
//      }
//  });
//}

//Data Tables Ends

$(document).on('click', '.btn-close2', function (e) {
  $(this).parent().addClass("hide").removeClass("show");
  $("#tabelTrade3,#tablePosition").css("padding-bottom", "0px");
  
  
})
$(document).on('click', '.btn-close3', function (e) {
  $(e.currentTarget).parent().removeClass("show");
  $(e.currentTarget).parent().attr('style', '');
  $(e.currentTarget).parent().parent().find('.dropdown-toggle').removeClass("show");
  $(e.currentTarget).parent().parent().find('.dropdown-toggle').attr('aria-expanded', false);
});
$(document).on('click', '.priceAlert .running-widget > .dropdown-toggle', function (e) {
  $(".running-widget .dropdown-menu.show").removeClass("show");
  // $(".dd-cancel.dropdown-menu").removeClass("show");
  $(e.currentTarget).next(".dropdown-menu").addClass("show");
});
$(document).on('click', '.convert-dropdown .dropdown-toggle', function (e) {
  $(this).next(".dropdown-menu").addClass("show").removeClass("hide");
  $("#tabelTrade3,#tablePosition").css("padding-bottom", "220px");
});
$(document).on('click', '#tabelPending3 .modify-btn', function (e) {
  $(this).parent().parent(".dropdown-menu").addClass("hide").removeClass("show");
});
$(document).on('click', '#tabelPending3 .dropstart .dropdown-toggle', function (e) {
  $(".dd-top.dropdown-menu").addClass("hide").removeClass("show");
  $(".dd-cancel.dropdown-menu").addClass("hide").removeClass("show");
  $(this).next(".dropdown-menu").addClass("show").removeClass("hide");
  $("#tabelPending3").css("padding-bottom", "0px")
});
$(document).on('click', '#tabelPending3 .dropstart .cancel-btn.dropdown-toggle', function (e) {
  $(this).parent().parent().parent().addClass("show");
  $("#tabelPending3").css("padding-bottom", "200px");
 
});
$(document).on('click', '#tabelPending3  .btn-close2', function (e) {
  $(".dd-top.dropdown-menu.show").addClass("hide").removeClass("show");
  $("#tabelPending3").css("padding-bottom", "0px")
})



  /*if($('.priceAlert').length > 0) {
    var pATargetBind =  $('.priceAlert .alerts_data_lists');
    var pATargetHTML = "";
    $.each(priceAlertData, function(index, listItem) {
      pATargetHTML = pATargetHTML + '<li> <div class="alerts_lft"> <label class="mb-1">'+ listItem.name +'</label> <p>'+ listItem.label +'</p> </div> <div class="alerts_rgt running-widget"> <div class="running-area"> <label class="btn mb-1 running-label">Running</label> <label class="value"> '+ listItem.price +' <span data-status="active" class="running-control"> <i class="bi bi-pause-circle-fill ms-2"></i> </span> </label> </div> <div class="running-drop dropstart"> <button id="priceAlDropTog'+index+'" type="button" class="dropdown-toggle" data-bs-auto-close="false" data-bs-toggle="dropdown" aria-expanded="false"> <i class="bi bi-three-dots-vertical"></i> </button> <div class="dropdown-menu" id="priceAlDropMenu'+index+'"> <span class="btn-close3"><i class="bi bi-x-lg"></i></span> <h5>PRICE ALERTS</h5> <h4 class="tp_blue"> '+ listItem.name +' <span>'+ listItem.label +'</span> </h4> <ul> <li><button class="btn btn-blue">Modify</button></li> <li class="dropdown pAcancelDDMenu"><button type="button" class="btn-red btn dropdown-toggle" id="dDMenuPACan'+index+'" data-bs-toggle="dropdown" data-bs-auto-close="false" class="cancel-btn btn btn-red">Delete</button><div class="dropdown-menu dd-cancel" aria-labelledby="dDMenuPACan'+index+'"> <h3>PRICE ALERTS</h3><span class="btn-close2"><i class="bi bi-x-lg"></i></span> <p>Do you wish to delete this alert?</p> <div class="confirm"><div class="btn-part"><button class="btn btn-primary btn-primary">Yes</button><button class="btn btn-primary btn-red">No</button></div></div></div></li> <li><button class="btn btn-blue">Place New Order</button></li> </ul> </div> </div> </div> </li>';
    });
    pATargetBind.html(pATargetHTML);
  }*/
 /* $(".priceAlert .searchbar .form-control").keyup(function(ev) {
    var _this = $(this);
    var filter = _this.val();
    // console.log('ev.keyCode', ev.keyCode, filter);
    $(".priceAlert .alerts_data_lists li").each(function() {
      if (filter !== '' && $(this).find('label').text().search(new RegExp(filter, "i")) < 0) {
        $(this).css("display", "none");
      } else {
        $(this).css("display", "flex");
      }
    });
  });*/

// Drag and Drop option
// https://github.com/lukasoppermann/html5sortable
if (typeof sortable !== 'undefined') {
  sortable('#sideMenuList ul', {
    handle: 'i.bi-grip-vertical'
  });
  // reload list after adding items, its like initialization
  // sortable('#sideMenuList ul', 'reload');
}
function bindSearchSideMenuData(getSearchData, targetId) {
  // console.log('========', getSearchData);
  if ($(targetId).length > 0 && typeof getSearchData !== 'undefined') {
    if (getSearchData.length > 0) {
      $(targetId).find('.search-list').removeClass('empty');
      var searchListHtml = '';
      getSearchData.map(function (i) {
    	  var addclickCode = 'onclick ="searchAddScript('+i.tokens+',\'' + i.exch + '\');"';
    	  
     	 var deleteclickCode = 'onclick ="searchDeleteScript('+i.tokens+',\'' + i.exch + '\');"';
     	 
     //  searchListHtml = searchListHtml + '<li data-group="'+ i.group +'" '+deleteclickCode+'><div class="sList-content"><h5>'+ i.value +'</h5><p>'+ i.type +'</p></div><div class="icon-select"><i class="bi bi-check2"></i></div></li>';
     	  
     if(i.flag==true){

         searchListHtml = searchListHtml + '<li data-group="'+ i.group +'" '+addclickCode+'><div class="sList-content"><h5>'+ i.value +'</h5><p>'+ i.type +'</p></div><div class="icon-select"><i class="bi bi-plus"></i></div></li>';
  
      }else{
     		  
     	 searchListHtml = searchListHtml + '<li data-group="'+ i.group +'" '+deleteclickCode+'><div class="sList-content"><h5>'+ i.value +'</h5><p>'+ i.type +'</p></div><div class="icon-select"><i class="bi bi-check2"></i></div></li>';
    	  }
      });
      $(targetId).find('.search-list').html(searchListHtml);
    } else {
      $(targetId).find('.search-list').addClass('empty');
      $(targetId).find('.search-list').html('<li data-group="empty"><div class="sList-content">Search for symbols to add<br />Eg; RELIANCE NSE, NIFTY APR FUT,<br />BANKNIFTY CE 19500, SILVERMIC APR FUT</div></li>');
    }
  }
}
// Dashboard Google Chart
if (typeof google !== 'undefined') {
  google.charts.load("current", { packages: ["corechart"] });
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['items', 'value'],
      ['item1', 11],
      ['item2', 2],
      ['item3', 2],
      ['item4', 2],
      ['item5', 7]
    ]);

    var options = {
      title: 'Holdings',
      pieHole: 0.4,
      legend: 'none',
      pieSliceText: 'label',
      slices: {
        2: { offset: 0.1 },
      },
    };
    var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
    chart.draw(data, options);
  }
}

function  checkInView(elem, partial, scrollDiv) {
  var container = $(scrollDiv);
  var contHeight = container.height();
  var contTop = container.scrollTop();
  var contBottom = contTop + contHeight ;

  var elemTop = $(elem).offset().top - container.offset().top;
  var elemBottom = elemTop + $(elem).height();
  
  var isTotal = (elemTop >= 0 && elemBottom <=contHeight);
  var isPart = ((elemTop < 0 && elemBottom > 0 ) || (elemTop > 0 && elemTop <= container.height())) && partial ;
  
  return  isTotal  || isPart ;
}

