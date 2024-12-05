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
		console.log(waterCanD + " is not a draggable")
	} else {
	var moldId = (e.target.id || e.target.parentElement.id || e.target.parentElement.parentElement.id || e.target.parentElement.parentElement.parentElement.id)
	console.log(waterCanD + " dropped on " + moldId);
	/*example id="blogMold"*/
	document.getElementById(moldId + "Mold").style.display = 'block'
	}
}

function allowDrop(e) {
     e.preventDefault();
}

function endDrag(e){
    document.getElementById('waterCanPNG').src = 'images/wateringCanSMALL.png';
	console.log("drag stopped");
}