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
}, 4000);

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
  document.getElementById('t9-activity-5').onclick = function () {
    playTypingGame();
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
      #t9-cirlce {\
        width: 200px;\
        height: 200px;\
        background-color: red;\
        transition: transform 1s;\
      }\
    </style>\
    <div>\
      <div id="t9-circle"></div>\
    </div>';

  document.getElementById('t9-hax-cover').innerHTML = '\
  <div style="width: 700px; height: 500px; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); background-color:white; border-radius: 40px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">\
    '+ breatheGame +'\
  </div>';
  startTypingGame();
}
