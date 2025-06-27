<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
 <head>
 <title><sitemesh:write property='title'/></title>
 <sitemesh:write property='head'/>
 </head>
 
 <body>
 This is the decorator body in user:
 <sitemesh:write property='body'/>
 </body>
</html>