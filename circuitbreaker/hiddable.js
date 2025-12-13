//(frankensteining code is fun /s)
//make stuff
var curTxt = document.createElement('div');
curTxt.classList.add('stroke');
curTxt.id = "cursorText";
curTxt.style.position = 'fixed';
curTxt.style.pointerEvents = 'none';
curTxt.style.zIndex = '5';
curTxt.style.display = 'none';
document.body.appendChild(curTxt);

var horizontalLine = document.createElement('div');
horizontalLine.id = "horizontalLine";
horizontalLine.style.position = 'fixed';
horizontalLine.style.pointerEvents = 'none';
horizontalLine.style.backgroundColor = 'red'; // color
horizontalLine.style.border = '1px solid black'; // border
horizontalLine.style.height = '1px';
horizontalLine.style.width = '100vw';
horizontalLine.style.zIndex = '4';
horizontalLine.style.display = 'none';
document.body.appendChild(horizontalLine);

var verticalLine = document.createElement('div');
verticalLine.id = "verticalLine";
verticalLine.style.position = 'fixed';
verticalLine.style.pointerEvents = 'none';
verticalLine.style.backgroundColor = 'red'; // color
verticalLine.style.border = '1px solid black'; // border
verticalLine.style.height = '100vh';
verticalLine.style.width = '1px';
verticalLine.style.zIndex = '4';
verticalLine.style.display = 'none';
document.body.appendChild(verticalLine);

//move and print
document.body.onmousemove = moveCursor;

function moveCursor(e) {
  if (!e) { e = window.event; }
  
  curTxt.style.left = (e.clientX + 4) + 'px';
  curTxt.style.top = (e.clientY - 30) + 'px';
  
  horizontalLine.style.top = e.clientY + 'px';
  horizontalLine.style.left = '0';
  
  verticalLine.style.left = e.clientX + 'px';
  verticalLine.style.top = '0';
}

function printMousePos(e) {
  var top = e.pageX - 300;
  var left = e.pageY - 8;
  
  document.getElementById('cursorText').innerHTML = 
  "x: " + e.pageX + ", y: " + e.pageY + "<br>" +
  "top: " + left + ", left: " + top;
}

document.addEventListener("mousemove", printMousePos);

var keysPressed = {};

//unhide on shift
function toggleElementsShift(show) {
  var displayValue = show ? 'block' : 'none';
  curTxt.style.display = displayValue;
  horizontalLine.style.display = displayValue;
  verticalLine.style.display = displayValue;
}

document.addEventListener('keydown', function(e) {
  keysPressed[e.key] = true;
  
  if (keysPressed['Shift']) {
  toggleElementsShift(true);
  }
});

document.addEventListener('keyup', function(e) {
  delete keysPressed[e.key];
  toggleElementsShift(false);
});

// hide on ctrl + alt, show on x
function toggleElementsCtrlAlt(show1) {
  var displayValue1 = show1 ? 'block' : 'none';
  var elements = document.getElementsByClassName("box");
  
  for (var i = 0; i < elements.length; i++) {
  elements[i].style.display = displayValue1;
  }
}

function toggleElementsXKey(showGuitar) {
  var guitarDisplay = showGuitar ? 'block' : 'none';
  var debugDisplay = showGuitar ? 'none' : 'block';
  var guitarElements = document.getElementsByClassName("guitar");
  var debugElements = document.getElementsByClassName("debug");
  
  for (var i = 0; i < guitarElements.length; i++) {
  guitarElements[i].style.display = guitarDisplay;
  }
  
  for (var i = 0; i < debugElements.length; i++) {
  debugElements[i].style.display = debugDisplay;
  }
}

document.addEventListener('keydown', function(e) {
  keysPressed[e.key] = true;
  
  if (keysPressed['Control'] && keysPressed['Alt']) {
  toggleElementsCtrlAlt(false);
  }
  
  if (e.key === 'x' || e.key === 'X') {
  toggleElementsXKey(false);
  }
});

document.addEventListener('keyup', function(e) {
  delete keysPressed[e.key];
  
  if (!keysPressed['Control'] || !keysPressed['Alt']) {
  toggleElementsCtrlAlt(true);
  }
  
  if (e.key === 'x' || e.key === 'X') {
  toggleElementsXKey(true);
  }
});