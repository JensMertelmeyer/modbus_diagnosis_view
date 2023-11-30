const frame = document.getElementById("upper");	
frame.addEventListener("load", () => initButtons(frame));


function initButtons(frame) {
	const doc = frame.contentDocument || frame.contentWindow.document;
		
	doc.getElementById("btn_left").addEventListener(
		"click",
		() => addLeft()
	);
	
	doc.getElementById("btn_right").addEventListener(
		"click",
		() => addRight()
	);
	
	doc.getElementById("btn_break").addEventListener(
		"click",
		() => addBreak()
	);
}

var id = 0;

function addLeft() {
	const frame = document.getElementById("lower");
	const content = 
		'<div class="box sb_left box_left">'
		+'Links'
		+'<div class="timestamp">'
		+ new Date().toLocaleString()
		+ '</div>'
		+'</div>';
	
	frame.contentWindow.addTestBubble(true, content, ++id);
	frame.contentWindow.scrollToBottom();
}

function addRight() {
	const frame = document.getElementById("lower");
	const content = 
		'<div class="box sb_right box_right">'
		+'Rechts'
		+'<div class="timestamp">'
		+ new Date().toLocaleString()
		+ '</div>'
		+'</div>';
	
	frame.contentWindow.addTestBubble(false, content, ++id);
	frame.contentWindow.scrollToBottom();
}

function addBreak() {
	const frame = document.getElementById("lower");
	frame.contentWindow.addBreak();
	frame.contentWindow.scrollToBottom();
}