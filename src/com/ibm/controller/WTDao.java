package com.ibm.controller;

import java.sql.Connection;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class WTDao {
   public void createUser(HttpServletRequest request, HttpServletResponse response, ServletContext context){
	   Connection dbCon = (Connection) request.getServletContext().getAttribute("dbCon");
	   
   }
   public void login(HttpServletRequest request, HttpServletResponse response, ServletContext context) {
	   
   }
}
