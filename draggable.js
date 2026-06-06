function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    var header = document.getElementById(elmnt.id + "header");
    
    if (header) {
        header.onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }

    function getPositionAsPercentage(element) {
        var parent = element.parentElement;
        if (!parent) parent = document.body;
        
        var leftPercent = (element.offsetLeft / parent.clientWidth) * 100;
        var topPercent = (element.offsetTop / parent.clientHeight) * 100;
        
        return { left: leftPercent, top: topPercent };
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
        
        var newTop = elmnt.offsetTop - pos2;
        var newLeft = elmnt.offsetLeft - pos1;
        
        var parent = elmnt.parentElement;
        if (!parent) parent = document.body;
        
        var topPercent = (newTop / parent.clientHeight) * 100;
        var leftPercent = (newLeft / parent.clientWidth) * 100;
        
        elmnt.style.top = topPercent + "%";
        elmnt.style.left = leftPercent + "%";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}