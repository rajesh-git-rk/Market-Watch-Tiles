package com.topaz.trading.Util;

import java.util.Random;

public class PlaceorderTest {

	public static void main(String[] args) {
		Random random=new Random();
		
		int RandomTag=random.nextInt(4-1)+1;
	 
		switch (RandomTag) {
		case 1:
			System.out.println("1: 228530 GOLDM21JUNFUT");
		
			break;
		case 2:
			System.out.println("2: 220823 GOLD21MAY46100CE");
			break;
		case 3:
			System.out.println("3: 221598 SILVER21JULFUT");
			break;

		default:
			System.out.println("default ");
			break;
		}
		
		
		
	}

}
