package com.topaz.trading.Util;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;

import org.springframework.web.bind.annotation.RequestParam;

public class Dateformat {

	public static void main(String[] args) {
		
	    String x = "1613952000";
	    long foo = Long.parseLong(x);
	    System.out.println(x + "\n" + foo);
	    
	    Date date = new Date(foo);
	    DateFormat formatter = new SimpleDateFormat("dd/MM/yyyy");
	    System.out.println(formatter.format(date));   
	    
	    String todayAsString = formatter.format(date);
	    
	    String str[] = todayAsString.toString().split("/");
	    int day = Integer.parseInt(str[0]);
	    int month = Integer.parseInt(str[1]);
	    int year=Integer.parseInt(str[2]);
	    String mydate="";
		switch(month)
   		{
			case 1:					
					mydate=day+"/JAN/"+year;
					break;
			case 2:
					mydate=day+"/FEB/"+year;
      	         		break;
			case 3:
					mydate=day+"/MAR/"+year;
      		 		break;
			case 4:
					mydate=day+"/APR/"+year;
					break;
			case 5:
					mydate=day+"/MAY/"+year;
					break;
			case 6:
					mydate=day+"/JUN/"+year;
      		 		break;
			case 7:
					mydate=day+"/JUL/"+year;
      		 		break;
			case 8:
					mydate=day+"/AUG/"+year;
      	         	break;
			case 9:
					mydate=day+"/SEP/"+year;
      	         	break;
			case 10:
					mydate=day+"/OCT/"+year;
      		 		break;
			case 11:
					mydate=day+"/NOV/"+year;
      		 		break;
			case 12:
					mydate=day+"/DEC/"+year;
      		 		break;
			default:
      		 		System.out.print("\nInvalid Month number\nPlease try again ....\n");
      		 		break;
   				}
	  
		
		System.out.println("mydate "+mydate); 
		
	}
	
}




