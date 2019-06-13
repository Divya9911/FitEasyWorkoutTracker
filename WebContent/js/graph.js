$(document).ready(function () {
	
	var chart = new CanvasJS.Chart("graphDiv",{
		
		animationEnabled: true,
		
		title: {
				text:"WorkOut Progress Graph",
				fontColor: "white"
		},
		axisX:{
			labelFontColor: "white",
			interval:1,
			title:"<-----Daily Improvement----->",
			titleFontColor: "white",
			labelAngle: -30
		},
		
		axisY:{
			
			labelFontColor: "white",
			interval:0.5,
			title:"<-----Calories Burnt----->",
			titleFontColor: "white",
			labelAngle: -30
			
		},
		width: 1100,
		height: 600,
		backgroundColor: "rgba(0,0,0, .5)",
		data:[
					{
						lineColor: "red",
					
						type:"spline",
						dataPoints:[
							 									 		
									{label: "Sunday", y: 7,color: "orange"},
									{label: "Monday", y: 5,color: "orange"},
									{label: "Tuesday", y: 9,color: "orange"},
									{label: "Wednesday", y: 4,color: "orange"},
									{label: "Thursday", y: 6,color: "orange"},
									{label: "Friday", y: 3,color: "orange"},
									{label: "Saturday", y: 3,color: "orange"}
						]
					
					}
			]
		
	});
	chart.render();
	
});