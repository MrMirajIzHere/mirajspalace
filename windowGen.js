function createWindow(config) {
    const id = config.id;
    const title = config.title;
    const iconLeft = config.iconLeft || null;
    const headerStyle = config.headerStyle || `background-color: ${config.headerColor || "#00007F"};`;
    const headerClass = config.headerClass || "";
    const moldImage = config.moldImage || "images/othervines/vinesPlaceholder.png";
	const moldPos = config.moldPos || "right: 22px";
    const customClass = config.customClass || "maindiv";
    const extraStyle = config.extraStyle || "";
    const onDrop = config.onDrop !== false;
	let doubleSpace = "";
	
	if(iconLeft !== null){
	doubleSpace = "&nbsp;&nbsp;";
	}
    
    let html = `<div id="${id}" class="${customClass}"${onDrop ? ' ondrop="drop(event)" ondragover="allowDrop(event)"' : ''} style="${extraStyle}">`;
    
    // close
    html += `<input type="image" src="images/crossButton.png" onclick="closeWindow('${id}')" class="alignRight"/>`;
    
    // icon
    if (iconLeft) {
        html += `<img src="${iconLeft}" height="auto" width="16" class="alignLeft"/>`;
    }
    
    // mold
    html += `<span id="${id}Mold" style="display: none"><img src="${moldImage}" style="top: 50px; ${moldPos}; display: block; position: absolute; transform: scale(2); pointer-events: none" class="revealAnim"/></span>`;
    
    // header things
    html += `<div id="${id}header" class="headerdiv ${headerClass}" style="${headerStyle}">`;
    html += `${doubleSpace}${title}&nbsp;&nbsp;&nbsp;`;
    html += `</div>`;
    
    // the juice
    html += `<div class="window-content">`;
    html += config.content;
    html += `</div>`;
    
    html += `</div>`;
    
    return html;
}

function initDraggableWindows() {
    $('.maindiv, .console').each(function() {
        dragElement(this);
    });
}

function openWindow(id) {
    $('#' + id).show();
}

function closeWindow(id) {
  $('#' + id).hide();
}