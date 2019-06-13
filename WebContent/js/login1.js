//get the modal
var modal1 = document.getElementById('id01');

var modal2 = document.getElementById('id02');

var btn1 = document.getElementById("btn1");

var span = document.getElementsByClassName("close")[0]

var btn2 = document.getElementById("btn2");

var btn3 = document.getElementById("btn3");

var btn4 = document.getElementById("btn4");

btn1.onclick = function() {
  modal1.style.display = "block";    //open login modal
}

span.onclick = function() {
  modal1.style.display = "none";     //close login modal
}

btn2.onclick = function() {
  modal1.style.display = "none";     //close login modal
}

btn3.onclick = function() {
  modal2.style.display = "block";    //open signup modal
}

btn4.onclick = function() {
  modal2.style.display = "none";     //close signup modal
}