function dragStart(e) {
    console.log("drag start");
    e.dataTransfer.setData("text", e.target.id);
    document.getElementById('waterCanPNG').src = 'images/wateringCanSMALLdragged.png';
}

function drop(e) {
    if (e.preventDefault) {
        e.preventDefault();
    }

    var waterCanD = e.dataTransfer.getData("text");
    if (waterCanD != "waterCan") {
        console.log(waterCanD + " is not a draggable");
    } else {
        let target = e.target;
        let moldId = null;
        
        while (target && target !== document.body) {
            if (target.id && target.id.endsWith && !target.id.endsWith("Mold")) {
                if (target.classList && (target.classList.contains('maindiv') || target.classList.contains('console'))) {
                    moldId = target.id;
                    break;
                }
            }
            target = target.parentElement;
        }
        
        if (moldId) {
            console.log(waterCanD + " dropped on " + moldId);
            const moldElement = document.getElementById(moldId + "Mold");
            if (moldElement) {
                moldElement.style.display = 'block';
            }
        }
    }
}

function allowDrop(e) {
     e.preventDefault();
}

function endDrag(e){
    document.getElementById('waterCanPNG').src = 'images/wateringCanSMALL.png';
	console.log("drag stopped");
}