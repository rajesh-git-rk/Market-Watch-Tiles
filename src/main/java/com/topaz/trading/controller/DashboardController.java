package com.topaz.trading.controller;

import java.awt.BasicStroke;
import java.awt.Color;
import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.List;
import java.util.regex.Pattern;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.swing.BorderFactory;

import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.text.PDFTextStripper;
import org.bouncycastle.asn1.ocsp.Request;
import org.jfree.chart.ChartFactory;
import org.jfree.chart.ChartFrame;
import org.jfree.chart.ChartPanel;
import org.jfree.chart.JFreeChart;
import org.jfree.chart.plot.PiePlot;
import org.jfree.chart.plot.PiePlot3D;
import org.jfree.data.general.DefaultPieDataset;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import com.itextpdf.text.pdf.PdfDocument;
import com.itextpdf.text.pdf.PdfImportedPage;
import com.itextpdf.text.pdf.PdfReader;
import com.topaz.trading.model.MarketWacthScript;
import com.topaz.trading.model.Script;
import com.topaz.trading.model.Segment_table;
import com.topaz.trading.repository.ScriptImp2;
import com.topaz.trading.service.Fileuploadservice;


@RestController
public class Dashboardcontroller {

	private static final float TOP_ALIGNMENT = 0;
	
	@Autowired
	ScriptImp2 scriptImp;
	@Autowired
	Fileuploadservice fileuploadservice;
	
	
	
	@RequestMapping(value = "/home", method = RequestMethod.GET, produces = "application/json")
	public ModelAndView navigateToChartIq(HttpServletRequest request, HttpServletResponse response) {
		//ModelAndView mav = new ModelAndView("home");
		//return mav;
		
        ModelAndView mav=null;
		 
		 HttpSession session = null;
			session = request.getSession();
			String userId = (String) session.getAttribute("userId");
			
			System.out.println("userId=="+userId);
			
			if(userId==null) {

				mav=new ModelAndView("login");
				mav.addObject("userId","null");
			}else {
				mav=new ModelAndView("home");
			}
			
			//mav=new ModelAndView("exchange-light");
			return mav; 
	}

	
	 @RequestMapping(value="/login", method = RequestMethod.GET, produces="application/json")
		public ModelAndView indexPage(HttpServletRequest request, HttpServletResponse response) {
		 
		 ModelAndView mav=new ModelAndView("login");
		 HttpSession session = null;
			session = request.getSession();
			session.removeAttribute("userId");

			return mav; 
		}
	 
	 
	 
	 
	 @RequestMapping(value="/backtoLogin", method = RequestMethod.GET, produces="application/json")
		public ModelAndView BacktoLoginPage(HttpServletRequest request, HttpServletResponse response) {
		 
		 ModelAndView mav=new ModelAndView("login");
		 HttpSession session = null;
			session = request.getSession();
			session.removeAttribute("userId");

			return mav; 
		}
	 
	
	 @RequestMapping(value="/dashboard", method = RequestMethod.GET, produces="application/json")
		public ModelAndView companylist(HttpServletRequest request, HttpServletResponse response) {

		 
		 ModelAndView mav=null;
		 
		 HttpSession session = null;
			session = request.getSession();
			String userId = (String) session.getAttribute("userId");
			
			//System.out.println("userId=="+userId);
			
			if(userId==null) {

				mav=new ModelAndView("login");
				mav.addObject("userId","null");
			}else {
				mav=new ModelAndView("exchange-light");
			}
			
			//mav=new ModelAndView("exchange-light");
			return mav; 
		}
	 
	 @RequestMapping(value="/exchange", method = RequestMethod.GET, produces="application/json")
		public ModelAndView dashboard(Model m) {

		 
		 ModelAndView mav=new ModelAndView("home");
		 
		 MarketWacthScript script =new MarketWacthScript();
		 
		 List<MarketWacthScript> list= scriptImp.listAll();
		 
		 mav.addObject("scriptList", list);
			return mav; 
		}

	 @RequestMapping(value="/dashboardmain", method = RequestMethod.GET, produces="application/json")
		public ModelAndView home(Model m) {
		 ModelAndView mav=new ModelAndView("dashboardmain");		 
			return mav; 
		}
	 

	 
	 
	 @RequestMapping(value="/getCurrentValHoldingsDashboard", method = RequestMethod.POST, produces="application/json")
		public ModelAndView getCurrentValHoldingsDashboard(Model m) {
		 
		// System.out.println("inside getCurrentValHoldingsDashboard");

		 ModelAndView mav=new ModelAndView("home");
		 			
		 return mav; 
		}

	 @RequestMapping(value="/getInvestmentHoldingsDashboard", method = RequestMethod.POST, produces="application/json")
		public ModelAndView getInvestmentHoldingsDashboard(Model m) {
		 
		// System.out.println("inside getInvestmentHoldingsDashboard");

		 ModelAndView mav=new ModelAndView("home");
		 			
		 return mav; 
		}
	 @RequestMapping(value="/getplHoldingsDashboard", method = RequestMethod.POST, produces="application/json")
		public ModelAndView getplHoldingsDashboard(Model m) {
		 
		// System.out.println("inside getplHoldingsDashboard");

		 ModelAndView mav=new ModelAndView("home");
		 			
		 return mav; 
		}
		 
	 @RequestMapping(value="/getrunningPositionsDashboard", method = RequestMethod.POST)
		public ModelAndView runningPositionsDashboard(Model m,HttpServletRequest request, HttpServletResponse response) throws IOException {
		 
		// System.out.println("inside  runningPositionsDashboard");
		 
		 ModelAndView mav=new ModelAndView("home");		
		 	
		// initUI();
		 
		 DefaultPieDataset dataset = createDataset();
			
			JFreeChart chart=ChartFactory.createPieChart("Pie Chart", dataset, true, true, true);
			
			PiePlot Pie=(PiePlot) chart.getPlot();
			Pie.setForegroundAlpha(TOP_ALIGNMENT); 
			
			/*ChartFrame frame=new ChartFrame("Pie Chart", chart);
			frame.setVisible(true);
			frame.setSize(450,500);*/
			
			mav.addObject("chart", chart);
		 
		 return mav; 
		}



	/*private void initUI() {
		DefaultPieDataset dataset = createDataset();
		
		JFreeChart chart=ChartFactory.createPieChart("Pie Chart", dataset, true, true, true);
		
		PiePlot Pie=(PiePlot) chart.getPlot();
		Pie.setForegroundAlpha(TOP_ALIGNMENT); 
		
		ChartFrame frame=new ChartFrame("Pie Chart", chart);
		frame.setVisible(true);
		frame.setSize(450,500);
	}*/
	
	 private DefaultPieDataset createDataset() {

	        DefaultPieDataset dataset = new DefaultPieDataset();
	        dataset.setValue("Apache", 52);
	        dataset.setValue("Nginx", 31);
	        dataset.setValue("IIS", 12);
	        dataset.setValue("LiteSpeed", 2);
	        dataset.setValue("Google server", 1);
	        dataset.setValue("Others", 2);

	        return dataset;
	    }
	 
	 
	 
	 @RequestMapping(value="/uploadSegment", method = RequestMethod.POST)
		public ModelAndView uploadSegment(HttpServletRequest request, HttpServletResponse response,
				@RequestParam("file") MultipartFile file) throws IOException {
	 
	    //System.out.println("upload segment");
		 ModelAndView mv=new ModelAndView("dashboardmain");
		 
		 String message = null;

			try {
				
				//System.out.println("inside try block");
				
//				
				InputStream inputStream = file.getInputStream();
				BufferedReader fileReader = new BufferedReader(new InputStreamReader(inputStream, "UTF-8"));
				
			
				PDDocument pdfDocument=PDDocument.load(inputStream);				
				PDFTextStripper pdfTextstripper=new PDFTextStripper();
				String docText=pdfTextstripper.getText(pdfDocument);
				//System.out.println("docText : "+docText);

				String name = "", accountnumber = "", segmenttype = "";
				String[] SegmentArr = docText.split(Pattern.quote("||"));
				
				name = SegmentArr[0].toString();
				accountnumber= SegmentArr[1].toString();
				segmenttype =SegmentArr[2].toString();
							

					Segment_table uploadfile = new Segment_table();

					uploadfile.setName(name);
					uploadfile.setAccountnumber(accountnumber);
					uploadfile.setSegmenttype(segmenttype);
					
					fileuploadservice.SaveSegmentfiles(uploadfile);

					message = "Uploaded the file successfully: " + file.getOriginalFilename();
					mv.setViewName("dashboardmain");
					mv.addObject("message", message);
				

			} catch (Exception e) {
				message = "Could not upload the file: " + file.getOriginalFilename() + "!";
				mv.setViewName("dashboardmain");
				mv.addObject("message", message);
			}

			return mv;
		}
	
	 @RequestMapping(value="/ForgotPassword", method = RequestMethod.GET, produces="application/json")
		public ModelAndView getForgotPassword(Model m) {
		 
		 //System.out.println("inside getForgotPassword");

		 ModelAndView mav=new ModelAndView("forgotpassword");
		 			
		 return mav; 
		}
		 
	 
	 @RequestMapping(value="/CdslResponse", method = RequestMethod.GET, produces="application/json")
		public ModelAndView getCdslResponse(Model m) {		 
		 ModelAndView mav=new ModelAndView("sample");		 	 			
		 return mav; 
		}
	 
	 
	 @RequestMapping(value="/tpinInvalid", method = RequestMethod.GET, produces="application/json")
		public ModelAndView tpinInvalidResponse(Model m) {
		 ModelAndView mav=new ModelAndView("tpin");		 
		 mav.addObject("message", "Please Provide Valid Tpin");		 			
		 return mav; 
		}
	 
	 
}
