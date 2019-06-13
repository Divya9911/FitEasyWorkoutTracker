// Get the modal
var modal = document.getElementById("myModal");
var statmodal = document.getElementById("statModal");
// Get the button that opens the modal
var btn = document.getElementById("sidebar").querySelectorAll("#spans");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var closebtn = document.getElementsByClassName("closeButton")[0];
console.log(closebtn);
console.log(span);
// When the user clicks the button, open the modal 
for (var i = 0; i < btn.length; i++) {
    btn[i].onclick = function() {
      modal.style.display = "block";
    }
    console.log(btn[i].value);

}
// When the user clicks on <span>, close the modal
span.
onclick = function() {
  modal.style.display = "none";
}

closebtn.onclick = function() {
	statmodal.style.display = "none";
	$("#graph").html("Generate Progress Graph");
    $("#report").html("Generate Progress Report");
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//script for timer on click
var h1 = document.getElementsByTagName('h1')[0],
    start = $('#start-button'),
    stop = $('#stop-button'),
    seconds = 0, minutes = 0, hours = 0;
    //t;

//replace timer button

$(document).ready(function(){
  $("#start-button").click(function(){
    $("#start-button").hide();
    $("#stop-button").show();
    
    myTimer = setInterval(myClock, 1000);

    function myClock() {
       seconds++;
       if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
       }
   
    
    h1.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
        
    } 

  });
  $("#stop-button").click(function(){
    $("#stop-button").hide();
    $("#start-button").show();
    clearInterval(myTimer);
    h1.textContent = "00:00:00";
    timeValue = minutes + " minutes " + seconds + " seconds";
    calorieBurnt = ((seconds/60) / 55) + " Calories/min" ;
    statmodal.style.display = "block";
    $("#timespan").html(timeValue);
    $("#calorie").html(calorieBurnt);
    seconds = 0; minutes = 0; hours = 0;
  });
});
