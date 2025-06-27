<nav class="navbar navbar-header navbar-expand navbar-light">
    <a class="navbar-brand" href="index.html"><img src="./resourcefiles/images/logo.png" class="img-fluid" alt="" /></a>
    <a class="sidebar-toggler" href="#"><span class="navbar-toggler-icon"></span></a>
    <button class="btn navbar-toggler ms-auto" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
        aria-expanded="false" aria-label="Toggle navigation">
        <div class="hamburger" id="hamburger-1">
            <span class="line"></span>
            <span class="line"></span>
            <span class="line"></span>
        </div>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav d-flex align-items-center navbar-light ms-auto">
            <li class="nav-item">
                <a href="#" onclick="dashboardClickFunction();" class="nav-link active">DASHBOARD</a>
            </li>
            <li class="nav-item">
                <a href="#" onclick="orderClickfunction();"  class="nav-link btn-showorders">ORDERS</a>
            </li>
            <li class="nav-item">
                <a href="#" onclick="PortfolioClickfunction();" class="nav-link btn-showPortfolio">PORTFOLIO</a>
            </li>
            <li class="nav-item">
                <a href="#" onclick="FundsClickfunction();" class="nav-link btn-showFunds">FUNDS</a>
            </li>
            <li class="nav-item">
                <a href="#" onclick="AlertsClickfunction();" class="nav-link btn-showAlerts">ALERTS</a>
            </li>
            <li class="dropdown sort-menu notifications nav-icon">
                            <a href="#" class="dropdown-toggle nav-link-lg nav-link-notification"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                <span class="d-block d-sm-block d-md-none">Notifications</span>
                                <div class="d-lg-inline-block">
                                    <i class="bi bi-bell"></i>
                                </div>
                            </a>
                            <div class="dropdown-menu py-2 px-4 dropdown-menu-lg-end">

                                <ul class="nav nav-tabs" id="notifcations-tab" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <a class="nav-link active" id="orders-tab" onclick="getOrderNotification();" data-bs-toggle="tab" href="#orders"
                                            role="tab" aria-controls="orders" aria-selected="true">Orders</a>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <a class="nav-link" id="alerts-tab" data-bs-toggle="tab" href="#alerts"
                                            role="tab" aria-controls="alerts" aria-selected="false">Alerts</a>
                                    </li>

                                </ul>
                                <div class="tab-content" id="TabContent">
                                    <div class="tab-pane fade show active" id="orders" role="tabpanel"
                                        aria-labelledby="orders-tab">
                                        <ul class="noti_li y_scroll ordersNotificationRecords">
                                            
                                        </ul>

                                    </div>
                                    <div class="tab-pane fade" id="alerts" role="tabpanel" aria-labelledby="alerts-tab">
                                        <ul class="noti_li y_scroll alertrecords">
                                        
                                        
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </li>
           <!--  <li class="nav-item dropdown ms-xl-3">
                <a href="#" role="button" class="dropdown-toggle nav-link-lg nav-link-user"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    <div class="avatar d-none d-sm-none d-md-block">
                        <img src="./resourcefiles/images/profile_img.png" alt="" srcset="">
                    </div>
                    <span class="d-block d-sm-block d-md-none">Profile</span>
                </a>
                <div class="dropdown-menu dropdown-menu-end">
                    <a class="dropdown-item btn-showAccount" href="#" onclick="AccountClickfunction()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24"
                            height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="feather feather-user">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg> Account</a>
                    <a class="dropdown-item active" href="#"><svg xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="feather feather-mail">
                            <path
                                d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z">
                            </path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                        </svg> Messages</a>
                    <a class="dropdown-item" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                            height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="feather feather-settings">
                            <circle cx="12" cy="12" r="3"></circle>
                            <path
                                d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z">
                            </path>
                        </svg> Settings</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="logout"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                            height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="feather feather-log-out">
                            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                            <polyline points="16 17 21 12 16 7"></polyline>
                            <line x1="21" y1="12" x2="9" y2="12"></line>
                        </svg> Logout</a>
                </div>
            </li> -->
              <li class="nav-item dropdown sort-menu profile ms-xl-3">
                            <a href="#" role="button" class="dropdown-toggle nav-link-lg nav-link-user"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                <div class="avatar d-none d-sm-none d-md-block">
                                    <img src="./resourcefiles/images/profile_img.png" alt="" srcset="">
                                </div>
                                <span class="d-block d-sm-block d-md-none">Profile</span>
                            </a>
                            <div class="dropdown-menu dropdown-menu-end">
                           <a class="dropdown-item btn-showAccount" href="#" onclick="AccountClickfunction()" ><i class="bi bi-person"></i> Profile</a>
                            
<!--                                 <a class="dropdown-item btn-showProfile" href="#" onclick="profilePageOnClick();" ><i class="bi bi-person"></i> Profile</a> -->
                                <a class="dropdown-item full-screen" href="#"><i class="bi bi-fullscreen"></i> Full
                                    Screen</a>
                                <a class="dropdown-item" href="#"><i class="bi bi-exclamation-triangle"></i> Help &
                                    Support</a>
                                <a class="dropdown-item" href="#"><i class="bi bi-diagram-2"></i> Refer & Earn</a>
                                <a class="dropdown-item" href="#"><i class="bi bi-journals"></i> User Manual</a>
                                <a class="dropdown-item" href="logout"><i class="bi bi-box-arrow-in-right"></i> Logout</a>
                            </div>
                        </li>
        </ul>
    </div>
    <div class="blk_bg"></div>
</nav>