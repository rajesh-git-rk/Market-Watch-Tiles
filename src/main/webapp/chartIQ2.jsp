<!DOCTYPE html><!--
This is a fully functional desktop-like example showing how to load a chart with a corresponding
feature-rich user interface. It is intended mainly for larger screens and may not always render
optimally on small devices.

This template requires the Technical Analysis package. If you are using a different package, some
features may not work.

Customize this sample template as needed to meet your use case and to fit the screen size of your
supported devices.
--><html><head>

<meta charset="utf-8">
<meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1">
    <link rel="stylesheet" type="text/css" href="./assets/chartiq/css/normalize.css" media="screen">
    <link rel="stylesheet" type="text/css" href="./assets/chartiq/css/page-defaults.css" media="screen">
    <link rel="stylesheet" type="text/css" href="./assets/chartiq/css/stx-chart.css" media="screen">
    <link rel="stylesheet" type="text/css" href="./assets/chartiq/css/chartiq.css" media="screen">

<script src="./assets/chartiq/js/thirdparty/custom-elements.min.js"></script> <!-- Legacy Edge support for webcomponents -->
</head>
<body>

<cq-context>
<cq-color-picker></cq-color-picker>

<div class="ciq-nav full-screen-hide">
	<!-- enables the more button when in break-sm mode -->
	<div class="sidenav-toggle ciq-toggles">
		<cq-toggle class="ciq-sidenav" cq-member="sidenav" cq-toggles="sidenavOn,sidenavOff" cq-toggle-classes="active," keyboard-navigation="false"><span></span>
			<cq-tooltip>More</cq-tooltip>
		</cq-toggle>
	</div>
	
	<cq-menu class="ciq-search">
		<cq-lookup cq-keystroke-claim="" cq-keystroke-default="" cq-uppercase=""></cq-lookup>
	</cq-menu>

	<!-- any entry in this div will be shown in the side navigation bar in break-sm mode -->
	<cq-side-nav cq-on="sidenavOn">
		<div class="icon-toggles ciq-toggles">
			<cq-toggle class="ciq-draw" cq-member="drawing"><span></span><cq-tooltip>Draw</cq-tooltip></cq-toggle>

			<cq-info-toggle-dropdown>
				<cq-toggle class="ciq-CH" cq-member="crosshair">
					<span></span>
					<cq-tooltip>Crosshair (Alt + \)</cq-tooltip>
				</cq-toggle>

				<cq-menu class="ciq-menu toggle-options collapse">
					<span></span>
					<cq-menu-dropdown>
						<cq-item cq-member="crosshair">Hide Heads-Up Display<span class="ciq-radio"><span></span></span></cq-item>
						<cq-item cq-member="headsUp-static">Show Heads-Up Display<span class="ciq-radio"><span></span></span></cq-item>
					</cq-menu-dropdown>
				</cq-menu>
			</cq-info-toggle-dropdown>

			<cq-info-toggle-dropdown>
				<cq-toggle class="ciq-HU" cq-member="headsUp">
					<span></span>
					<cq-tooltip>Info</cq-tooltip>
				</cq-toggle>

				<cq-menu class="ciq-menu toggle-options collapse tooltip-ui">
					<span></span>
					<cq-menu-dropdown>
						<cq-item cq-member="headsUp-dynamic">Show Dynamic Callout<span class="ciq-radio"><span></span></span></cq-item>
						<cq-item cq-member="headsUp-floating">Show Tooltip<span class="ciq-radio"><span></span></span></cq-item>
					</cq-menu-dropdown>
				</cq-menu>
			</cq-info-toggle-dropdown>

			<cq-toggle class="ciq-DT tableview-ui" cq-member="tableView"><span></span><cq-tooltip>Table View</cq-tooltip></cq-toggle>
		</div>
	</cq-side-nav>

	<div class="ciq-menu-section">
		<div class="ciq-dropdowns">
			<cq-menu class="ciq-menu ciq-period">
				<span><cq-clickable stxbind="Layout.periodicity">1D</cq-clickable></span>
				<cq-menu-dropdown>
					<cq-menu-container cq-name="menuPeriodicity"></cq-menu-container>
				</cq-menu-dropdown>
			</cq-menu>

			<cq-menu class="ciq-menu ciq-views collapse">
				<span>Views</span>
				<cq-menu-dropdown>
					<cq-views></cq-views>
				</cq-menu-dropdown>
			</cq-menu>

			<cq-menu class="ciq-menu ciq-display collapse">
					<span>Display</span>
				<cq-menu-dropdown>
					<cq-menu-dropdown-section class="chart-types">
						<cq-heading>Chart Style</cq-heading>
						<cq-menu-container cq-name="menuChartStyle"></cq-menu-container>
					</cq-menu-dropdown-section>
					<cq-menu-dropdown-section class="chart-aggregations">
						<cq-menu-container cq-name="menuChartAggregates"></cq-menu-container>
					</cq-menu-dropdown-section>
				</cq-menu-dropdown>
			</cq-menu>

			<cq-menu class="ciq-menu ciq-studies collapse" cq-focus="input">
				<span>Studies</span>
				<cq-menu-dropdown>
					<cq-study-legend cq-no-close="">
						<cq-section-dynamic>
							<cq-heading>Current Studies</cq-heading>
							<cq-study-legend-content>
								<template cq-study-legend="">
									<cq-item>
										<cq-label class="click-to-edit"></cq-label>
										<div class="ciq-icon ciq-close"></div>
									</cq-item>
								</template>
							</cq-study-legend-content>
							<cq-placeholder>
								<div stxtap="Layout.clearStudies()" class="ciq-btn sm">Clear All</div>
							</cq-placeholder>
						</cq-section-dynamic>
					</cq-study-legend>
					<div class="scriptiq-ui">
						<cq-heading>ScriptIQ</cq-heading>
							<cq-item><cq-clickable cq-selector="cq-scriptiq-editor" cq-method="open">New Script</cq-clickable></cq-item>
							<cq-scriptiq-menu></cq-scriptiq-menu>
						<cq-separator></cq-separator>
					</div>
					<cq-heading cq-filter="" cq-filter-min="15">Studies</cq-heading>
					<cq-studies></cq-studies>
				</cq-menu-dropdown>
			</cq-menu>

			<cq-menu class="ciq-menu stx-markers collapse">
				<span>Events</span>
				<cq-menu-dropdown>
					<cq-heading>Chart Events</cq-heading>
					<cq-item stxtap="Markers.showMarkers('square')">Simple Square<span class="ciq-radio"><span></span></span>
					</cq-item>
					<cq-item stxtap="Markers.showMarkers('circle')">Simple Circle<span class="ciq-radio"><span></span></span>
					</cq-item>
					<cq-item stxtap="Markers.showMarkers('callout')">Callouts<span class="ciq-radio"><span></span></span>
					</cq-item>
					<cq-item class="ta_markers-ui" stxtap="Markers.showMarkers('trade')">Trade<span class="ciq-radio"><span></span></span>
					</cq-item>
					<cq-item class="video_markers-ui" stxtap="Markers.showMarkers('video')">Video<span class="ciq-radio"><span></span></span>
					</cq-item>
					<cq-item stxtap="Markers.showMarkers('abstract')">Abstract<span class="ciq-radio"><span></span></span>
					</cq-item>
					<cq-separator></cq-separator>
					<cq-item stxtap="Markers.showMarkers()" class="ciq-active">None<span class="ciq-radio"><span></span></span>
					</cq-item>
					<div class="timespanevent-ui">
						<cq-separator></cq-separator>
						<cq-heading>Panel Events</cq-heading>
						<cq-item class="span-event" stxtap="TimeSpanEvent.showMarkers('Order')" cq-no-close="">Order<span class="ciq-checkbox ciq-active"><span></span></span></cq-item>
						<cq-item class="span-event" stxtap="TimeSpanEvent.showMarkers('CEO')" cq-no-close="">CEO<span class="ciq-checkbox ciq-active"><span></span></span></cq-item>
						<cq-item class="span-event" stxtap="TimeSpanEvent.showMarkers('News')" cq-no-close="">News<span class="ciq-checkbox ciq-active"><span></span></span></cq-item>
					</div>
				</cq-menu-dropdown>
			</cq-menu>

			<cq-menu class="ciq-menu ciq-preferences collapse">
				<span></span>
				<cq-menu-dropdown>
					<cq-menu-dropdown-section class="chart-preferences">
						<cq-heading>Chart Preferences</cq-heading>
						<cq-menu-container cq-name="menuChartPreferences"></cq-menu-container>
						<cq-separator></cq-separator>
					</cq-menu-dropdown-section>
					<cq-menu-dropdown-section class="y-axis-preferences">
						<cq-heading>Y-Axis Preferences</cq-heading>
						<cq-menu-container cq-name="menuYAxisPreferences"></cq-menu-container>
						<cq-separator></cq-separator>
					</cq-menu-dropdown-section>
					<cq-menu-dropdown-section class="chart-theme">
						<cq-heading>Themes</cq-heading>
						<cq-themes></cq-themes>
						<cq-separator></cq-separator>
					</cq-menu-dropdown-section>
					<cq-menu-dropdown-section class="chart-locale">
						<cq-heading>Locale</cq-heading>
						<cq-item><cq-clickable cq-selector="cq-timezone-dialog" cq-method="open">Change Timezone</cq-clickable></cq-item>
						<cq-item stxsetget="Layout.Language()"><cq-flag></cq-flag><cq-language-name>Change Language</cq-language-name></cq-item>
					</cq-menu-dropdown-section>
					<cq-menu-dropdown-section class="shortcuts-ui">
						<cq-separator></cq-separator>
						<cq-heading>Shortcuts</cq-heading>
						<cq-item stxtap="Layout.showShortcuts(true)">Shortcuts / Hotkeys</cq-item>
					</cq-menu-dropdown-section>
				</cq-menu-dropdown>
			</cq-menu>
		</div>
		<div class="trade-toggles ciq-toggles">
			<cq-toggle class="tfc-ui sidebar stx-trade" cq-member="tfc"><span></span><cq-tooltip>Trade</cq-tooltip></cq-toggle>
			<cq-toggle class="analystviews-ui stx-analystviews" cq-member="analystviews"><span></span><cq-tooltip>Analyst Views</cq-tooltip></cq-toggle>
			<cq-toggle class="technicalinsights-ui stx-technicalinsights" cq-member="technicalinsights"><span></span><cq-tooltip>Technical Insights</cq-tooltip></cq-toggle>
		</div>
	</div>

</div>
<!-- End Navbar -->

<!-- custom tag for scriptiq only works when plugin is loaded -->
<cq-scriptiq class="scriptiq-ui"></cq-scriptiq>

<!-- custom tag for analystviews only works when plugin is loaded -->
<cq-analystviews class="analystviews-ui" token="eZOrIVNU3KR1f0cf6PTUYg==" partner="1000" disabled=""></cq-analystviews>

<!-- custom tag for technicalinsights only works when plugin is loaded -->
<cq-technicalinsights uid="" lang="en" disabled=""></cq-technicalinsights> 

<div class="ciq-chart-area">
	<div class="ciq-chart">

		<cq-message-toaster defaultdisplaytime="10" defaulttransition="slide" defaultposition="top"></cq-message-toaster>

		<cq-palette-dock>
			<div class="palette-dock-container">
				<cq-drawing-palette class="palette-drawing grid palette-hide" docked="true" orientation="vertical" min-height="300" cq-drawing-edit="none"></cq-drawing-palette>
				<cq-drawing-settings class="palette-settings" docked="true" hide="true" orientation="horizontal" min-height="40" cq-drawing-edit="none"></cq-drawing-settings>
			</div>
		</cq-palette-dock>


		<div class="chartContainer">

			<!-- stx-hu-tooltip is required only if addon tooltip is used and customization is required -->
			<stx-hu-tooltip>
				<stx-hu-tooltip-field field="DT">
					<stx-hu-tooltip-field-name>Date/Time</stx-hu-tooltip-field-name>
					<stx-hu-tooltip-field-value></stx-hu-tooltip-field-value>
				</stx-hu-tooltip-field>
				<stx-hu-tooltip-field field="Close">
					<stx-hu-tooltip-field-name></stx-hu-tooltip-field-name>
					<stx-hu-tooltip-field-value></stx-hu-tooltip-field-value>
				</stx-hu-tooltip-field>
			</stx-hu-tooltip>

			<cq-chart-title cq-marker="" cq-browser-tab=""></cq-chart-title>

			<cq-chartcontrol-group class="full-screen-show" cq-marker=""></cq-chartcontrol-group>

			<cq-comparison-lookup></cq-comparison-lookup>

			<cq-chart-legend></cq-chart-legend>

			<cq-loader></cq-loader>
		</div>
		<!-- End Chart Container -->
	</div>
	<!-- End Chart Box -->
</div>
<!-- End Chart Area -->


<!-- Markers/Events -->
<cq-abstract-marker cq-type="helicopter"></cq-abstract-marker>
<!-- End Marker/Events -->

<!-- Attribution component -->
<cq-attribution></cq-attribution>

<div class="ciq-footer full-screen-hide">
	<cq-share-button></cq-share-button>
	<div class="shortcuts-ui ciq-shortcut-button" stxtap="Layout.showShortcuts()" title="Toggle shortcut legend"></div>
	<cq-show-range></cq-show-range>
</div>

<!-- End Footer -->

<cq-dialogs>
	<cq-dialog>
		<cq-drawing-context></cq-drawing-context>
	</cq-dialog>
	
	<cq-dialog>
		<cq-study-context></cq-study-context>
	</cq-dialog>
</cq-dialogs>

<cq-side-panel></cq-side-panel>
</cq-context>

<script type="module" crossorigin="use-credentials">
// This inline script acts as the entry point, without creating a separate external file.

import "./assets/chartiq/js/advanced.js";
import "./assets/chartiq/js/addOns.js";
import { CIQ } from "./assets/chartiq/js/components.js";

/* Uncomment the following to access deprecated functions and namespaces. */
//import "./assets/chartiq/js/deprecated.js";

/* Uncomment the following lines if you are using these plug-ins. */
import "./assets/chartiq/plugins/activetrader/cryptoiq.js";
//import "./assets/chartiq/plugins/analystviews/components.js";
//import "./assets/chartiq/plugins/scriptiq/scriptiq.js";
//import "./assets/chartiq/plugins/technicalinsights/components.js";
import "./assets/chartiq/plugins/tfc/tfc-loader.js";
import "./assets/chartiq/plugins/tfc/tfc-demo.js"; /* if using demo account class */
import "./assets/chartiq/plugins/timespanevent/timespanevent.js";
//import "./assets/chartiq/plugins/visualearnings/visualearnings.js";

/* Uncomment the following for the L2 simulator (required for the activetrader sample). */
import "./assets/chartiq/examples/feeds/L2_simulator.js";

/* Template-specific imports */
import getDefaultConfig from "./assets/chartiq/js/defaultConfiguration.js";

import PerfectScrollbar from "./assets/chartiq/js/thirdparty/perfect-scrollbar.esm.js";

import quotefeed from "./assets/chartiq/examples/feeds/quoteFeedSimulator.js";
import "./assets/chartiq/examples/feeds/symbolLookupChartIQ.js";

import "./assets/chartiq/examples/markets/marketDefinitionsSample.js";
import "./assets/chartiq/examples/markets/marketSymbologySample.js";

import marker from "./assets/chartiq/examples/markers/markersSample.js";
import "./assets/chartiq/examples/markers/tradeAnalyticsSample.js";
import "./assets/chartiq/examples/markers/videoSample.js";

import "./assets/chartiq/examples/translations/translationSample.js";

/* Remove if not using the forecasting simulator (required for the forecasting sample). */
import forecastfeed from "./assets/chartiq/examples/feeds/quoteFeedForecastSimulator.js";

/* Uncomment the following import statement to enable the Option Sentiment by Strike study. */
//import "./assets/chartiq/js/extras/optionSentimentByStrike.js";

/*
 * Uncomment the following import statement to access the option chain simulator for option-based
 * functionality, such as the Option Sentiment By Strike study.
 *
 * Make the option chain simulator the chart data source by setting the quoteFeed property (in
 * the object parameter of the getDefaultConfig function call below) to the optionfeed variable,
 * for example:
 *
 *     const config = getDefaultConfig({
 *         markerSample: marker.MarkersSample,
 *         scrollStyle: PerfectScrollbar,
 *         quoteFeed: optionfeed,  // Provides simulated quote data and option data.
 *         forecastQuoteFeed: forecastfeed
 *     });
 */
//import optionfeed from "./examples/feeds/optionChainSimulator.js";

// Create and customize default configuration

const config = getDefaultConfig({
	markerSample: marker.MarkersSample,
	scrollStyle: PerfectScrollbar,
	quoteFeed: quotefeed,
	forecastQuoteFeed: forecastfeed,
	nameValueStore: CIQ.NameValueStore
});

// Create the chart...
		let stxx = config.createChart();

		// Simulate L2 data
		// In your implementation, you must instead load L2 data
		// using https://documentation.chartiq.com/CIQ.ChartEngine.html#updateCurrentMarketData
		//CIQ.simulateL2({ stx: stxx, onInterval: 1000, onTrade: true });

		//...then add whatever code you wish!</script>


</body></html>