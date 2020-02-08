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
      width: 645;\
      height: 500px;\
  }\
  .t9arial {\
      font-family: "Arial Rounded MT Bold", "Helvetica Rounded", Arial, sans-serif;\
      color: #c0ca33;\
      text-align: center;\
      font-size: 28px;\
    }\
  .t9text {\
    font-family: "Arial Rounded MT Bold", "Helvetica Rounded", Arial, sans-serif;\
    color: #ffffff;\
    text-align: center;\
    font-size: 16px;\
  }\
  .t9textdynamic {\
    font-family: "Arial Rounded MT Bold", "Helvetica Rounded", Arial, sans-serif;\
    text-align: center;\
    color: #c0ca33;\
    font-size: 20px;\
  }\
  .t9center{\
    font-family: "Arial Rounded MT Bold", "Helvetica Rounded", Arial, sans-serif;\
    text-align: center;\
    padding: 120px;\
  }\
  .hcolor {\
      background-color:#291661;\
  }\
  .t9hat {\
    background-color: #4527a0;\
    position: absolute;\
    left: 50%;\
    margin-left: -38px;\
  }\
  </style>\
      <div class= "t9hat">\
      <img src="https://github.com/zer0grand/t9-hax/blob/master/images/WizardHat.png" width="78" height="112">\
      </div>\
  <div class="purp t9center">\
    <header class="hcolor t9arial">\
      <h1>Word Wizard</h1>\
    </header>\
    <div class="container text-center">\
      <div class="row">\
        <div class="col-md-6 mx-auto">\
          <p class="t9text">Type the given word within\
            <span class="t9text" id="seconds">5</span> Seconds. To play again, just type the current word. Your score will reset:</p>\
          <h2 class="t9textdynamic display-2 mb-5" id="current-word">hello</h2>\
          <input type="text" class="form-control form-control-lg" placeholder="Start typing..." id="word-input" autofocus>\
          <h4 class="t9textdynamic" id="message"></h4>\
          <div class="row mt-5">\
            <div class="col-md-6">\
              <h3 class="t9text">Time Left:\
                <span id="time">0</span>\
              </h3>\
            </div>\
            <div class="col-md-6">\
              <h3 class="t9text">Score:\
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
  <style>\
  main {\
    display: flex;\
    background-color: white;\
    border-radius: 40px;\
    height: 80px;\
    width: 100%;\
    overflow: hidden;\
  }\
  .colors {\
    width: 60%;\
    height: 100%;\
  }\
  .t9-color-picker {\
    height: 100%;\
    width: 100%;\
    font-size: 40px;\
    padding-left: 30px;\
    border: none;\
  }\
  .t9-color-picker:hover {\
    background-color: rgb(230, 230, 230);\
  }\
  .t9-clear {\
    height: 100%;\
    width: 12%;\
    border: none;\
    background-color:white;\
    font-size: 30px;\
  }\
  .t9-clear:hover {\
    background-color: rgb(230, 230, 230);\
  }\
  .thickness {\
    width: 30%;\
    height: 100%;\
  }\
  .t9-stroke-weight {\
    width: 100%;\
    border: none;\
    font-size: 40px;\
    height: 100%;\
    background-color: white;\
    padding-left:30px;\
  }\
  .t9-stroke-weight:hover {\
    background-color: rgb(230, 230, 230);\
  }\
  </style>\
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
