function startPaintGame() {

const clearButton = document.querySelector('.t9-clear');
const stroke_weight = document.querySelector('.t9-stroke-weight');
const color_picker = document.querySelector('.t9-color-picker');
// const rect = document.getElementById('t9-hax-cover').firstChild;

const canvas = document.querySelector('#t9-canvas');
const ctx = canvas.getContext('2d');
let isDrawing = false;

canvas.addEventListener('mousedown', start);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stop);

clearButton.addEventListener('click', clearCanvas);


function start (e) {
  isDrawing = true;
  draw(e);
}

function draw (e) {
  console.log("gothere1");
  if (!isDrawing) return;
  ctx.lineWidth = stroke_weight.value;
  ctx.lineCap = "round";
  ctx.strokeStyle = color_picker.value;

  var rect = e.target.getBoundingClientRect();
  var x = e.clientX - rect.left; //x position within the element.
  var y = e.clientY - rect.top;  //y position within the element.

  ctx.lineTo(x, y);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(x, y);
  console.log("gothere2");
}

function stop () {
  isDrawing = false;
  ctx.beginPath();
}

function clearCanvas () {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

window.addEventListener('resize', resizeCanvas);
function resizeCanvas () {
  canvas.width = 900;
  canvas.height = 500;
}
resizeCanvas();

}
