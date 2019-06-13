<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ page import="java.sql.*"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
<link rel="stylesheet" type="text/css" href="css/mystyle.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<link rel="stylesheet"
	href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
	integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
	crossorigin="anonymous">
</head>
<body>
	<header>
		<nav class="navbar navbar-dark">
			<div class="container-fluid">

				<a class="navbar-brand" id="a1" href="#"><h3>FitEasy</h3></a>
				<h1 style="text-align: center; color: white">Weekly Workout
					Report</h1>
				<a class="navbar-brand active"
					style="padding: 10px; border-bottom: 5px solid white;"
					href="graph.html" style="float:right; margin-right:0;"> Health
					Improvement</a> <a class="navbar-brand" id="a2" href="index.html">
					<h5>LogOut</h5>
				</a>

			</div>
		</nav>
	</header>
	<div class="table table-responsive; space">
		<table class="center table hoverTable" style="table-layout: fixed;">
			<tr>
				<th scope="col">Workout Plan</th>
				<th scope="col">Activity Name</th>
				<th scope="col">Time Taken</th>
				<th scope="col">Calories Burnt</th>
				<th scope="col">Date</th>
			</tr>
			<%! int totalTime=0;
				int totalCal =0 ;%>
			<%
			Statement stmt=null;
			
			try {
				//Load the driver
				Class.forName("com.mysql.jdbc.Driver");
				//Create the Connection
				Connection dbCon = DriverManager.getConnection("jdbc:mysql://localhost:3306/workouttracker","root","");
				//Create Statement for executing the query
				stmt = dbCon.createStatement();
				String fetchQry = "Select * from workout_details";
				
				
				
			ResultSet rs=stmt.executeQuery(fetchQry);
			//To fetch the data from database
			while(rs.next())
			{
			%>
			<tr>
				<td><%=rs.getString("workout_plan")%></td>
				<td><%=rs.getString("activity_name") %></td>
				<td><%=rs.getDouble("time_taken")%></td>
				<td><%=rs.getInt("cal_burnt")%></td>
				<td><%=rs.getDate("date")%></td>
			</tr>
			<%
        	}
			Statement stmt1 = dbCon.createStatement();
			String sumQry = "select sum(time_taken),sum(cal_burnt) from workout_details";
			ResultSet rs1 = stmt1.executeQuery(sumQry);
			if(rs1.next())
  			{
  				totalTime = rs1.getInt(1);
  				totalCal = rs1.getInt(2);
  				
  				
  			%>
			<tr>
				<td></td>
				<td></td>
				<td><%= totalTime%></td>
				<td><%= totalCal%></td>
				<td></td>
			</tr>
			<% 
  			}
			%>
		</table>
		<%
    		rs.close();
			rs1.close();
    		stmt.close();
    		stmt1.close();
    		dbCon.close();
    		}catch (Exception e) {
			System.out.println("Problem in loading the driver : "+e.getMessage());
			}
			%>
	</div>
	<div>
		<footer class="container-fluid navbar-dark bg-dark">
			<p align="center">
				Contact information: <a href="mailer.html">
					fitEasy@workout.org.in</a>
			</p>
		</footer>
	</div>

	<script
		src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
</body>
</html>