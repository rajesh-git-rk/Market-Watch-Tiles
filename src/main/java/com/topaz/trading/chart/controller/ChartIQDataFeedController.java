package com.topaz.trading.chart.controller;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.topaz.trading.model.ChartIQData;
import com.topaz.trading.service.ChartIQDataService;



@RestController
public class ChartIQDataFeedController {

	private static final Logger logger = LogManager.getLogger(ChartIQDataFeedController.class);

	@Autowired
	private ChartIQDataService dataService;

	@RequestMapping(value = "/datafeed", method=RequestMethod.GET)
	public ResponseEntity<?> getFeed(@RequestParam String interval,
			@RequestParam @DateTimeFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss.S") Date startdate,
			@RequestParam @DateTimeFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss.S") Optional<Date> enddate,
			@RequestParam String identifier, @RequestParam int period) {

		long startTime = System.currentTimeMillis();
		logger.debug("startdate {}, enddate {}, interval {}, period {}, ticker {}", startdate, enddate, interval,
				period, identifier);

		List<ChartIQData> data = dataService.fetchData(startdate, enddate, interval, period, identifier);
		logger.debug("execution time {} ms", (System.currentTimeMillis() - startTime));
		if (data.size() > 0) {
			return new ResponseEntity<>(data, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(data, HttpStatus.NO_CONTENT);
		}

	}
}
