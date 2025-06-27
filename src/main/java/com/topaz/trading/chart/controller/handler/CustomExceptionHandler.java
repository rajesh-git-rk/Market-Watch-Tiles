package com.topaz.trading.chart.controller.handler;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import com.topaz.trading.chart.exception.UnexpectedArgException;
import com.topaz.trading.model.ChartIQExceptionResponse;


@RestController
@ControllerAdvice
public class CustomExceptionHandler extends ResponseEntityExceptionHandler {

    @ExceptionHandler(value = {UnexpectedArgException.class})
    protected ResponseEntity<Object> handleUnexpectedArgs(RuntimeException ex, WebRequest request) {
    	ChartIQExceptionResponse resp = new ChartIQExceptionResponse(ex.getMessage());
    	return new ResponseEntity<>(resp, HttpStatus.NOT_IMPLEMENTED);
    }

}
