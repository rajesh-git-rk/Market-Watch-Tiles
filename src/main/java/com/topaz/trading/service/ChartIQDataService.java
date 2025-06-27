package com.topaz.trading.service;


import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.topaz.trading.chart.exception.UnexpectedArgException;
import com.topaz.trading.model.ChartIQData;
import com.topaz.trading.repository.ChartIQDataRepository;


@Service
public class ChartIQDataService{

	@Autowired
	ChartIQDataRepository dataRepository;
	private static final Logger logger = LogManager.getLogger(ChartIQDataService.class);
	
	
	public List<ChartIQData> fetchData(Date startdate, Optional<Date> enddate, String interval, int period, String ticker) {
		List<ChartIQData> feed= new ArrayList<ChartIQData>();
		if(interval.equals("minute")) {
			if(period == 1) {
				feed= dataRepository.getOneMinData(startdate, enddate, ticker);
			}else if(period == 5){
				feed= dataRepository.getFiveMinData(startdate, enddate, ticker);
			}else if(period == 10) {
				feed= dataRepository.getTenMinData(startdate, enddate, ticker);
			}else if(period == 15){
				feed= dataRepository.getFifteenMinData(startdate, enddate, ticker);
			}else if(period == 30) {
				feed= dataRepository.getThirtyMinData(startdate, enddate, ticker);
			}else {
				logger.info("Unexpected input params received.");
				throw new UnexpectedArgException("Unexpected interval received.");
			}
		}
		else if(interval.equals("day")) {
			if(period ==1) {
				feed= dataRepository.getEoDData(startdate, enddate, ticker);
			}else {
				logger.info("Unexpected interval period received.");
				throw new UnexpectedArgException("Unexpected interval period received.");
				
				
			}
		}
		else {
			logger.info("Unexpected interval received.");
			throw new UnexpectedArgException("Unexpected interval received.");
		}
		return feed;
	}
}
