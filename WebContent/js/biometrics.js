function workPlanFunc()
{
	if(document.getElementById('light').checked == true) {
  	document.bioform.action ="lightworkoutplan.html";
	}
	else if(document.getElementById('heavy').checked == true) {
  	document.bioform.action ="lightworkoutplan.html";
  	//
	}
	return true;
}


//Using button for result

function idealWeight()
{

	// $(document).ready(function(){
	// 	  $("#resultButton").click(function(){
	// 	    $("#resultantText").hide();
	// 	  });
	// 	});

	if(document.getElementById('male').checked == false && document.getElementById('female').checked == false){
		alert("Please select gender !!!")
	}
	else if(document.getElementById('male').checked) {
		
		var ht = document.getElementById('height').value;
	  	var ibw = Math.ceil(50.0 + 2.3 * ((ht / 2.54) - 60.0));  /*Body mass formula for male*/
		weight = document.getElementById('weight').value;
		var result = result(ibw , weight);
		document.getElementById("resultantText").innerHTML = result; 
		document.getElementById("resultantText").style.color = "white";
	}
	else if(document.getElementById('female').checked){
		var ht = document.getElementById('height').value;
		var ibw = Math.ceil(45.5 + 2.3 * ((ht/ 2.54) - 60.0));  /*Body mass formula for female*/
		weight = document.getElementById('weight').value;
		var result = result(ibw , weight);
		document.getElementById("resultantText").innerHTML = result; 
		document.getElementById("resultantText").style.color = "white"; 
	}


	function result(ibw , weight)
	{
		if(weight > ibw)
		{
			var res = "Ideal weight = "+ibw+" kgs <br> You need to lose "+(weight - ibw)+" kgs to reach ideal weight";
			return res;
		}
		else if(weight < ibw)
		{
			var res = "Ideal weight = "+ibw+" kgs <br> You need to gain "+(ibw - weight)+" kgs to reach ideal weight";
			return res;
		}
		else if(weight = ibw)
		{
			var res = "Ideal weight = "+ibw+" kgs <br> You have reached your ideal body weight ! Workout regularly to maintain it !";
			return res;
		}
	
	}
}





