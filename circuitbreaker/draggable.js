//draggable divs
dragElement(document.getElementById("selector_s"));
dragElement(document.getElementById("a1x6"));
dragElement(document.getElementById("l-pass_s"));
dragElement(document.getElementById("tone_buffer"));
dragElement(document.getElementById("tuner"));
dragElement(document.getElementById("b_neg"));
dragElement(document.getElementById("synth_1"));
dragElement(document.getElementById("tuner_batt"));
dragElement(document.getElementById("single"));
dragElement(document.getElementById("humbucker"));
dragElement(document.getElementById("coil-split"));
dragElement(document.getElementById("unison"));
dragElement(document.getElementById("synth_2"));
dragElement(document.getElementById("matrix"));
dragElement(document.getElementById("toggle_s2"));
dragElement(document.getElementById("selector_p"));
dragElement(document.getElementById("volume"));
dragElement(document.getElementById("mix"));
dragElement(document.getElementById("l-pass"));
dragElement(document.getElementById("h-pass"));
dragElement(document.getElementById("switch_power"));
dragElement(document.getElementById("tone"));
dragElement(document.getElementById("speaker"));
dragElement(document.getElementById("kill"));
dragElement(document.getElementById("amp"));
dragElement(document.getElementById("out_main"));
dragElement(document.getElementById("out_synth"));
dragElement(document.getElementById("a9v_in"));
dragElement(document.getElementById("loopback"));
dragElement(document.getElementById("db-09"));
dragElement(document.getElementById("aux"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + ".header")) {
    document.getElementById(elmnt.id + ".header").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
	
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
