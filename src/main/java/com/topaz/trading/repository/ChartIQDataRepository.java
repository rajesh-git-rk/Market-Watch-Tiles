package com.topaz.trading.repository;


import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.topaz.trading.model.ChartIQData;


@Repository
public class ChartIQDataRepository {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    private static final String oneMinQuery="select time,open,high,low,volume,close from one_min_data where time >= ? and time <= ? and ticker = ?";
    private static final String oneMinQueryTillNow="select time,open,high,low,volume,close from one_min_data where time >= ? and ticker = ?";
    private static final String fiveMinQuery="select bucket,open,high,low,volume,close from five_min_data where bucket >= ? and bucket <= ? and ticker = ?";
    private static final String fiveMinQueryTillNow="select bucket,open,high,low,volume,close from five_min_data where bucket >= ? and ticker = ?";
    private static final String tenMinQuery="select bucket,open,high,low,volume,close from ten_min_data where bucket >= ? and bucket <= ? and ticker = ?";
    private static final String tenMinQueryTillNow="select bucket,open,high,low,volume,close from ten_min_data where bucket >= ? and ticker = ?";
    private static final String fifteenMinQuery="select bucket,open,high,low,volume,close from fifteen_min_data where bucket >= ? and bucket <= ? and ticker = ?";
    private static final String fifteenMinQueryTillNow="select bucket,open,high,low,volume,close from fifteen_min_data where bucket >= ? and ticker = ?";
    private static final String thirtyMinQuery="select bucket,open,high,low,volume,close from thirty_min_data where bucket >= ? and bucket <= ? and ticker = ?";
    private static final String thirtyMinQueryTillNow="select bucket,open,high,low,volume,close from thirty_min_data where bucket >= ? and ticker = ?";
    

    private static final String eodQuery="select bucket,open,high,low,volume,close from eod_data where bucket >= ? and bucket <= ? and ticker = ?";
    private static final String eodQueryTillNow="select bucket,open,high,low,volume,close from eod_data where bucket >= ? and ticker = ?";


    private static final Logger logger = LogManager.getLogger(ChartIQDataRepository.class);
	
/**
 * One minute data
 */
	public List<ChartIQData> getOneMinData(Date startdate, Optional<Date> enddate, String ticker) {
		String queryString=enddate.isPresent() ? oneMinQuery : oneMinQueryTillNow;
		Object[] args=enddate.isPresent() ? new Object[] {startdate, enddate.get(), ticker} : new Object[] {startdate, ticker};
		logger.debug("query {}",queryString);
		 return jdbcTemplate.query(
	                queryString, args,
	                (rs, rowNum) ->
	                        new ChartIQData(
	                                rs.getInt("volume"),
	                                rs.getDouble("close"),
	                                rs.getDouble("low"),
	                                rs.getDouble("open"),
	                                rs.getDouble("high"),
	                                rs.getTimestamp("time").toString()
	                               
	                        )
	        );
	}



/**
 * Five minute data
 */

	public List<ChartIQData> getFiveMinData(Date startdate, Optional<Date> enddate, String ticker) {
		String queryString=enddate.isPresent() ? fiveMinQuery : fiveMinQueryTillNow;
		Object[] args=enddate.isPresent() ? new Object[] {startdate, enddate.get(), ticker} : new Object[] {startdate, ticker};
		logger.debug("query {}",queryString);
		return jdbcTemplate.query(
                queryString, args,
                (rs, rowNum) ->
                        new ChartIQData(
                                rs.getInt("volume"),
                                rs.getDouble("close"),
                                rs.getDouble("low"),
                                rs.getDouble("open"),
                                rs.getDouble("high"),
                                rs.getTimestamp("bucket").toString()
                               
                        )
        );
	}



/**
 * Ten minute data
 */

	public List<ChartIQData> getTenMinData(Date startdate, Optional<Date> enddate, String ticker) {
		String queryString=enddate.isPresent() ? tenMinQuery : tenMinQueryTillNow;
		Object[] args=enddate.isPresent() ? new Object[] {startdate, enddate.get(), ticker} : new Object[] {startdate, ticker};
		logger.debug("query {}",queryString);
		return jdbcTemplate.query(
                queryString, args,
                (rs, rowNum) ->
                        new ChartIQData(
                                rs.getInt("volume"),
                                rs.getDouble("close"),
                                rs.getDouble("low"),
                                rs.getDouble("open"),
                                rs.getDouble("high"),
                                rs.getTimestamp("bucket").toString()
                               
                        )
        );
	}

	/**
	 * Fifteen minute data
	 */

		public List<ChartIQData> getFifteenMinData(Date startdate, Optional<Date> enddate, String ticker) {
			String queryString=enddate.isPresent() ? fifteenMinQuery : fifteenMinQueryTillNow;
			Object[] args=enddate.isPresent() ? new Object[] {startdate, enddate.get(), ticker} : new Object[] {startdate, ticker};
			logger.debug("query {}",queryString);
			return jdbcTemplate.query(
	                queryString, args,
	                (rs, rowNum) ->
	                        new ChartIQData(
	                                rs.getInt("volume"),
	                                rs.getDouble("close"),
	                                rs.getDouble("low"),
	                                rs.getDouble("open"),
	                                rs.getDouble("high"),
	                                rs.getTimestamp("bucket").toString()
	                               
	                        )
	        );
		}
		
		/**
		 * Thirty minute data
		 */

			public List<ChartIQData> getThirtyMinData(Date startdate, Optional<Date> enddate, String ticker) {
				String queryString=enddate.isPresent() ? thirtyMinQuery : thirtyMinQueryTillNow;
				Object[] args=enddate.isPresent() ? new Object[] {startdate, enddate.get(), ticker} : new Object[] {startdate, ticker};
				logger.debug("query {}",queryString);
				return jdbcTemplate.query(
		                queryString, args,
		                (rs, rowNum) ->
		                        new ChartIQData(
		                                rs.getInt("volume"),
		                                rs.getDouble("close"),
		                                rs.getDouble("low"),
		                                rs.getDouble("open"),
		                                rs.getDouble("high"),
		                                rs.getTimestamp("bucket").toString()
		                               
		                        )
		        );
			}




/**
 * One day data
 */
	public List<ChartIQData> getEoDData(Date startdate, Optional<Date> enddate, String ticker) {
		String queryString=enddate.isPresent() ? eodQuery : eodQueryTillNow;
		Object[] args=enddate.isPresent() ? new Object[] {startdate, enddate.get(), ticker} : new Object[] {startdate, ticker};
		logger.debug("query {}",queryString);
		return jdbcTemplate.query(
	                queryString,args,
	                (rs, rowNum) ->
	                        new ChartIQData(
	                                rs.getInt("volume"),
	                                rs.getDouble("close"),
	                                rs.getDouble("low"),
	                                rs.getDouble("open"),
	                                rs.getDouble("high"),
	                                rs.getTimestamp("bucket").toString()
	                               
	                        )
	        );
	}




    
}