var time;
var timeOut = 6;

console.log("retrieving time");
var gettingItem = browser.storage.sync.get('time');
gettingItem.then((res) => {
  if (res.time) {
    time = res.time;
  } else {
    time = 0;
  }
  console.log(time);
});

// setInterval(function () {
//   time += 1;
//   browser.storage.sync.set({
//     time: time
//   });
//   if (time == timeOut) {
//     alert("time out!");
//     // timeOut();
//   }
//   console.log("set time: " + time);
// }, 1000);
//
// function resetTime() {
//   time = 0;
//   browser.storage.sync.set({
//     time: 0
//   });
//   removeElement('t9-hax-cover');
// }

setTimeout(function() {
  _timeOut();
}, 2000);

function _timeOut() {
  var html = '\
  <div id="t9-hax-cover" style="position: absolute; width:100%; height:100%; background-color:rgba(0,0,0,.5); z-index:10000; top: 0; left:0;">\
    <div style="width: 700px; height: 500px; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); background-color:white; border-radius: 40px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)">\
      <div style="display: flex; flex-wrap: wrap; justify-content: center; width: 100%; height: 100%; margin-top:16px">';
  for (var i=0; i<6; i++) {
    html += '<img id="t9-activity-'+ (i+1) +'" src="'+ browser.runtime.getURL("images/Break-Time_Activity-Icons-0"+ (i+1) +".png") +'" style="width:215px;height:215px; cursor:pointer;"></img>';
  }
  html += '</div></div></div>';
  document.body.firstChild.insertAdjacentHTML('beforebegin', html);
  document.getElementById('t9-activity-3').onclick = function () {
    console.log("GOTHERE1");
    playBreatheGame();
  };
  document.getElementById('t9-activity-5').onclick = function () {
    console.log("GOTHERE2");
    playTypingGame();
  };
  document.getElementById('t9-activity-6').onclick = function () {
    console.log("GOTHERE3");
    playPaintGame();
  };
}

function youWin() {
  document.getElementById('t9-hax-cover').innerHTML = '\
  <div style="width: 700px; height: 500px; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); background-color:white; border-radius: 40px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">\
    <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">\
      <div style="text-align:center; color:green; font-size:40px;">You Win!</div>\
      <button id="t9-hax-win-button" style="position: absolute; left: 50%; transform: translateX(-50%);">Continue</button>\
    </div>\
  </div>';
  document.getElementById('t9-hax-cover').onclick = function () {
    removeElement('t9-hax-cover');
  };
}

function removeElement(elementId) {
    var element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
}

function playTypingGame() {
  var typeGame = '\
  <style>\
  .purp {\
      background-color: #4527a0;\
  }\
  .arial {\
      font-family: "Arial Rounded MT Bold", "Helvetica Rounded", Arial, sans-serif;\
      color: #c0ca33;\
  }\
  .hcolor {\
      background-color:#291661;\
  }\
  </style>\
  <div class="purp arial text-white">\
    <header class="hcolor arial text-center p-3 mb-5">\
      <h1>Word Wizard</h1>\
    </header>\
    <div class="container text-center">\
      <div class="row">\
        <div class="col-md-6 mx-auto">\
          <p class="lead">Type The Given Word Within\
            <span class="text-success" id="seconds">5</span> Seconds. To play again, just type the current word. Your score will reset:</p>\
          <h2 class="display-2 mb-5" id="current-word">hello</h2>\
          <input type="text" class="form-control form-control-lg" placeholder="Start typing..." id="word-input" autofocus>\
          <h4 class="mt-3" id="message"></h4>\
          <div class="row mt-5">\
            <div class="col-md-6">\
              <h3>Time Left:\
                <span id="time">0</span>\
              </h3>\
            </div>\
            <div class="col-md-6">\
              <h3>Score:\
                <span id="score">0</span>\
              </h3>\
            </div>\
          </div>\
    </div>\
  </div>';

  document.getElementById('t9-hax-cover').innerHTML = '\
  <div style="width: 700px; height: 500px; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); background-color:white; border-radius: 40px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); overflow:hidden;">\
    '+ typeGame +'\
  </div>';
  startTypingGame();
}

function playBreatheGame() {
  var breatheGame = '\
    <style>\
      .t9-cirlce {\
        width: 200px;\
        height: 200px;\
        background-color: red;\
        transition: transform 3s;\
      }\
    </style>\
    <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">\
      <div id="t9-circle" style="width: 200px; height: 200px; background-color: red; transition: transform 1s; border-radius:100%;"></div>\
      <div id="t9-breathe-text" style="font-size:40px; margin-top:80px; text-align:center;">breathe</div>\
    </div>';

  document.getElementById('t9-hax-cover').innerHTML = '\
  <div style="width: 700px; height: 500px; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); background-color:white; border-radius: 40px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">\
    '+ breatheGame +'\
  </div>';
  startBreatheGame();
}

function playPaintGame() {
  var paintGame = '\
  <script>\
  body { \
      margin:0;\
      padding:0;\
      width:100vh;\
      height:100vw;\
      background:#F3F3F3;\
  }\
  main { \
      position:absolute;\
      top:0;\
      left:0;\
      bottom:0;\
      width:80px;\
      background:#4527a0;\
  }\
  div { \
      position: absolute;\
      top: 80%;\
      width: 100%;\
      padding: 10px;\
      background:#4527a0;\
  }\
  h1{\
      font-family: "Arial Rounded MT Bold", "Helvetica Rounded", Arial, sans-serif;\
      color: #c0ca33;\
      text-align: center; \
      font-size: 22px;\
  }\
  p {\
      font-family: "Arial Rounded MT Bold", "Helvetica Rounded", Arial, sans-serif;\
      color: white;\
      text-align: center; \
      font-size: 14px;\
      padding-right:120px;\
      padding-left:120px;\
  }\
  main section {\
      display:block;\
      margin:15px auto;\
      width:30px;\
      height:30px;\
  }\
  main .colors {\
      background:#171717;\
      border:1px solid #F3F3F3;\
      position:relative;\
  }\
  main .colors .t9-color-picker {\
      display:none;\
      width:200px;\
      height:30px;\
      position:absolute;\
      top:50%;\
      left:30px;\
      -webkit-transform:translateY(-50%);\
      transform:translateY(-50%);\
  }\
  main .colors .t9-color-picker:focus {\
      display:block;\
  }\
  main .colors:hover .t9-color-picker {\
      display:block;\
  }\
  main .thickness {\
          position:relative;\
          background-color:#F3F3F3;\
  }\
  main .thickness::after {\
      content:"";\
      position:absolute;\
      left:50%;\
      top:50%;\
      -webkit-transform:translate(-50%, -50%);\
      transform:translate(-50%, -50%);\
      width:50%;\
      height:50%;\
      border-radius:50%;\
      background:#171717;\
  }\
  main .thickness .t9-stroke-weight {\
      display:none;\
      position:absolute;\
      width:auto;\
      height:25px;\
      left:30px;\
      top:50%;\
      -webkit-transform:translateY(-50%);\
      transform:translateY(-50%); \
  }\
  main .thickness .t9-stroke-weight:focus {\
      display:block; \
  }\
  main .thickness:hover .t9-stroke-weight {\
      display:block; \
  }\
  main .t9-clear {\
      display:block;\
      width:30px;\
      height:30px;\
      margin:0 auto;\
      color:#171717;\
      font-size:20px;\
      font-weight:900;\
      background-color:#c0ca33;\
      border:none;\
      outline:none;\
      cursor:pointer;\
  }\
  </script>\
  <div>\
    <canvas id="t9-canvas"></canvas>\
    <main>\
      <section class="colors">\
        <input type="text" class="t9-color-picker" value="black" />\
      </section>\
      <section class="thickness">\
        <input type="number" class="t9-stroke-weight" value="4" />\
      </section>\
      <button class="t9-clear">X</button>\
    </main>\
    <script src="main.js"></script>\
    <div>\
      <h1>\
        Draw Something!\
      </h1>\
      <p>Select a color using the color picker, you can type in words like "red" or "blue". Adjust your brush size by clicking on the dot and typing a number. Press the "X" to clear your canvas.</p>\
    </div>\
  </div>';
  document.getElementById('t9-hax-cover').innerHTML = '\
  <div style="width: 700px; height: 500px; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); background-color:white; border-radius: 40px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">\
    '+ paintGame +'\
  </div>';
  startPaintGame();
}
