function startBreatheGame() {
  console.log("gothere!!!!");

var circle = document.getElementById("t9-circle");
var text = document.getElementById("t9-breathe-text");

var alt = false;
var counter = 0;

var interv = setInterval(function() {
  if (alt) {
    circle.style.transform = "scale(1)";
    text.innerHTML = "exhale";
  } else {
    circle.style.transform = "scale(1.5)";
    text.innerHTML = "inhale";
  }
  alt = !alt;
  counter++;
  if (counter == 6) {
    breatheDone();
  }
}, 1800);

function breatheDone() {
  clearInterval(interv);
  text.innerHTML = "good job!";
  setTimeout(function() {
    youWin();
  }, 2000);
}

}
