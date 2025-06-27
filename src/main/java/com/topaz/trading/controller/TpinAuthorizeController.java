//package com.topaz.trading.controller;
//
//import java.io.File;
//import java.io.FileInputStream;
//import java.io.FileOutputStream;
//import java.io.IOException;
//import java.io.InputStream;
//import java.text.DateFormat;
//import java.text.SimpleDateFormat;
//import java.util.Date;
//import java.util.List;
//import java.util.Properties;
//import java.util.zip.GZIPInputStream;
//
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;
//
//import org.apache.commons.net.ftp.FTP;
//import org.apache.commons.net.ftp.FTPClient;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestMethod;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.topaz.trading.model.SettlementDownload;
//import com.topaz.trading.repository.ScriptImp2;
//
//@RestController
//public class TpinAuthorizeController {
//
//	@Autowired
//	ScriptImp2 scriptImp;
//	
////public void nseCM_nnf_ftpConnetor() throws IOException {
//		
//	@RequestMapping(value="/getsettleId", method = RequestMethod.POST)
//	public ResponseEntity<List<SettlementDownload>> getsettleId(HttpServletRequest request, HttpServletResponse response) throws IOException {	
//
//		FTPClient ftpClient = null;
//		FileOutputStream outputStream1 = null;
//		List<SettlementDownload> list=null;
//		try {
//			
//			System.out.println("Settle id in:1::");
//			InputStream propertiesInputStream = null;
//            Properties props = new Properties();
//            propertiesInputStream = this.getClass().getClassLoader().getResourceAsStream("application.properties");
//            props.load(propertiesInputStream);
//            
//            String server= props.getProperty("ftp.settlement.server");
//    		String porter= props.getProperty("ftp.settlement.port");
//    		String user= props.getProperty("ftp.settlement.user");
//    		String pass= props.getProperty("ftp.settlement.pass");
//    		String nseremote= props.getProperty("download.settlement.remote.path");
//
//			//String filename = "nnf_security.gz";
//    		
//    		System.out.println("Settle id in:2::");
//    		
//    		DateFormat dfm = new SimpleDateFormat("MMMyyyy");
//    		DateFormat df = new SimpleDateFormat("MMddyyyy");
//    		
//    		String filename = "C_STC_"+ dfm.format(new Date())+"_"+ df.format(new Date()) + ".csv.gz";
//    		
//    		props.setProperty("download.settlement.remote.path", filename);
//    		
//    		props.setProperty("download.settle.zip.filepath",filename);
//			
//			//String filename ="C_STC_SEP2021_09082021.csv.gz";
//    		
//    		System.out.println("filename:::"+filename);
//			
//			int port = Integer.parseInt(porter);
//
//			ftpClient = new FTPClient();
//
//			ftpClient.connect(server, port);
//
//			boolean login = ftpClient.login(user, pass);
//			System.out.println("login::::" + login);
//
//			ftpClient.enterLocalPassiveMode();
//
//			ftpClient.setFileType(FTP.BINARY_FILE_TYPE);
//
//			System.out.println("nseremote:::"+nseremote);
//			//String remoteFile1 = nseremote;
//			String remoteFile1 ="/Common/Clearing/"+filename;
//			System.out.println("remoteFile1:::"+remoteFile1);
//
//			File downloadFile1 = new File(filename);
//			System.out.println("downloadFile1:::"+downloadFile1);
//			outputStream1 = new FileOutputStream(downloadFile1);
//			System.out.println("outputStream1:::"+outputStream1);
//			boolean success = ftpClient.retrieveFile(remoteFile1, outputStream1);
//
//			System.out.println("success:::::" + success);
//
//			if (success) {
//				System.out.println("File Download Settlement  "+dfm+df+".gz has been downloaded successfully.");
//				nsennf_unGunzipFile();
//				
//				DateFormat dfmstring = new SimpleDateFormat("dd-MMM-yy");
//				String datestring=dfmstring.format(new Date());
//
//				System.out.println("datestring:::"+datestring);
//				
//			 list= scriptImp.getsettleId(datestring);
//			}
//
//			outputStream1.close();
//
//		} catch (Exception ex) {
//			System.out.println("Error: " + ex.getMessage());
//			ex.printStackTrace();
//		} finally {
//			// in.close();
//
//			outputStream1.close();
//		}
//			
//
//			return ResponseEntity.ok().body(list);
//	}
//
//
//
//
//
//public void nsennf_unGunzipFile() {
//
//	// String compressedFile = "E:/nnf_security.gz";
//    // String decompressedFile = "E:/Thangadurai/test/test.txt";
//
//	byte[] buffer = new byte[1024];
//
//	try {
//
//		InputStream propertiesInputStream = null;
//       Properties props = new Properties();
//       propertiesInputStream = this.getClass().getClassLoader().getResourceAsStream("application.properties");
//       props.load(propertiesInputStream);
//
//
//		String compressedFile = props.getProperty("download.settle.zip.filepath");
//		String decompressedFile = props.getProperty("download.settle.zip.destDirectory");
//
//
//		FileInputStream fileIn = new FileInputStream(compressedFile);
//
//		GZIPInputStream gZIPInputStream = new GZIPInputStream(fileIn);
//
//		FileOutputStream fileOutputStream = new FileOutputStream(decompressedFile);
//
//		int bytes_read;
//
//		while ((bytes_read = gZIPInputStream.read(buffer)) > 0) {
//
//			fileOutputStream.write(buffer, 0, bytes_read);
//		}
//
//		gZIPInputStream.close();
//		fileOutputStream.close();
//
//		System.out.println("The Settlement file was decompressed successfully!");
//
//	} catch (IOException ex) {
//		ex.printStackTrace();
//	}
//}
//}
