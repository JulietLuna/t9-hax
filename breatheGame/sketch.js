function startBreatheGame() {

var circle = document.getElementById("t9-circle");
var alt = false;
setInterval(function() {
  if (alt) {
    circle.style.height = "400px";
    circle.style.width = "400px";
  } else {
    circle.style.height = "200px";
    circle.style.width = "200px";
  }
  alt = !alt;
}, 1000);

}
