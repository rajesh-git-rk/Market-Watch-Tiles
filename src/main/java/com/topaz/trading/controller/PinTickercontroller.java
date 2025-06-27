package com.topaz.trading.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


import com.topaz.trading.model.PinTicker;
import com.topaz.trading.repository.PinTickerImpl;
@RestController
public class PinTickercontroller {
	
	@Autowired
	PinTickerImpl pinTickerImpl;
	
	private static Logger logger = LoggerFactory.getLogger(PinTickercontroller.class);
	
	@RequestMapping(value = "/PinTickerPrevioueLoad", method = RequestMethod.POST)
	public ResponseEntity<List<PinTicker>> PinTickerPrevioueLoadPage(HttpServletRequest request, HttpServletResponse response){
		
		JSONObject PinTickerJson=new JSONObject();
		JSONArray array = new JSONArray();	

		String scriptname=null;
		String Positionval=null;
		String Exchseriesval=null;
		String PinTickeroutputValue=null;
		
		List<PinTicker>getAllPinTickerbyPostion=pinTickerImpl.getAllPinTickerDetailbyPostion();
		
		if(getAllPinTickerbyPostion.size()>0) {
			
		
		for (int i = 0; i < getAllPinTickerbyPostion.size(); i++) {	
			
			scriptname=getAllPinTickerbyPostion.get(i).getScriptname();
			Positionval=getAllPinTickerbyPostion.get(i).getPosition();	
			Exchseriesval=getAllPinTickerbyPostion.get(i).getExchseries();
			PinTickerJson.put("scriptId",scriptname);
			PinTickerJson.put("Position",Positionval);
			PinTickerJson.put("exchseries",Exchseriesval);
			PinTickeroutputValue=PinTickerJson.toJSONString();
			array.add(PinTickeroutputValue);
		}		
		}	
		
		else {
			getAllPinTickerbyPostion=null;
			//logger.error(" This PinTicker response   Empty  : ");
		}
		//logger.info(" PinTicker response Value : "+array);
		
		
		return ResponseEntity.ok().body(getAllPinTickerbyPostion);
	}
	
	
	@RequestMapping(value = "/PinTicker", method = RequestMethod.POST)
	public ResponseEntity<String> PinTickerPage(HttpServletRequest request, HttpServletResponse response,
		@RequestParam String scriptId,@RequestParam String tokenId,@RequestParam String Position, @RequestParam String exchseries){			
		String outputValue="";
		JSONObject PinTickerJson=new JSONObject();
		JSONArray array = new JSONArray();			
		String scriptname=null;
		String Positionval=null;
		String ExchSeries=null;
		List<PinTicker>getPinTickerbyToken=pinTickerImpl.getPinTickerDetailbyToken(tokenId);		
		String Errmessage=null;		
		//logger.info("PinTickerPage Request tokenId : "+tokenId+" Position : "+Position+"exchseries::"+exchseries); 		
		 if( getPinTickerbyToken.size()==0){			 
			 List<PinTicker>getPinTickerbyPostion=pinTickerImpl.getPinTickerDetailbyPostion(tokenId,Position);   
				if(getPinTickerbyPostion.size()>0) {						
						List<PinTicker> UpdatePinTickerbyPostion=pinTickerImpl.UpdatePinTickerDetailbyPostion(scriptId,tokenId,Position,exchseries);
							for (int i = 0; i < UpdatePinTickerbyPostion.size(); i++) {			
								scriptname=UpdatePinTickerbyPostion.get(i).getScriptname();
								Positionval=UpdatePinTickerbyPostion.get(i).getPosition();
								ExchSeries=UpdatePinTickerbyPostion.get(i).getExchseries();
								Errmessage="0";
							}			
						}
				else if(getPinTickerbyPostion.size()==0){
					List<PinTicker> SavePinTickerbyPostion=pinTickerImpl.SavePinTickerDetailbyPostion(scriptId,tokenId,Position,exchseries);
			
					for (int i = 0; i < SavePinTickerbyPostion.size(); i++) {			
					scriptname=SavePinTickerbyPostion.get(i).getScriptname();
					Positionval=SavePinTickerbyPostion.get(i).getPosition();
					ExchSeries=SavePinTickerbyPostion.get(i).getExchseries();
					Errmessage="0";
					}		
				}		
		 	}
		 	else if( getPinTickerbyToken.size()>0 ) {
			
			// logger.error("This Tokenid is alread there : "+tokenId);
			 Errmessage="1";
		 		}
		 
		
		
		PinTickerJson.put("scriptId",scriptname);
		PinTickerJson.put("Position",Positionval);
		PinTickerJson.put("ExchSeries",ExchSeries);
		PinTickerJson.put("PinTickerErrmessage",Errmessage);
		String PinTickeroutputValue=PinTickerJson.toJSONString();
		array.add(PinTickeroutputValue);	
		
		
		outputValue =array.toString();
		//logger.info("PinTicker response Value : "+array);
		
		return ResponseEntity.ok().body(outputValue);
	}
	
	
	

}
