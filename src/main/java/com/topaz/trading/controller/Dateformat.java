package com.topaz.trading.controller;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

public class Dateformat {

	public static void main(String[] args) {
	    String x = "1613952000";
	    long foo = Long.parseLong(x);
	    System.out.println(x + "\n" + foo);
	    
	    Date date = new Date(foo);
	    DateFormat formatter = new SimpleDateFormat("dd/MM/yyyy");
	    System.out.println(formatter.format(date)); 
	    
	  
	}
	
}
