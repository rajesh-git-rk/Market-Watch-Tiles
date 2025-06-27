package com.topaz.trading.service;


import javax.transaction.Transactional;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.topaz.trading.model.Segment_table;


@Service
public interface  Fileuploadservice {


	void SaveSegmentfiles(Segment_table uploadFile);

	
}


