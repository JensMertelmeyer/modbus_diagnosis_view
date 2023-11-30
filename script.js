const fillWithExamples = false;
var id = 0;

const frame = document.getElementById("upper");
frame.addEventListener("load", () => initButtons(frame));

document.getElementById("lower").addEventListener(
	"load", 
	() => {
		if(fillWithExamples)
			addExamples();
	}
);

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
	
	doc.getElementById("btn_timeout").addEventListener(
		"click",
		() => addTimeout()
	);
	
	if(fillWithExamples)
		addExamples();	
}

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

function addTimeout() {
	const frame = document.getElementById("lower");
	const content = 
		'<div class="box box_left box_alert pattern">'
		+'Timeout links!'
		+'<div class="timestamp">'
		+ new Date().toLocaleString()
		+ '</div>'
		+'</div>';
	
	frame.contentWindow.addTestBubble(true, content, ++id);
	frame.contentWindow.scrollToBottom();
}

function addBreak() {
	const frame = document.getElementById("lower");
	frame.contentWindow.addBreak();
	frame.contentWindow.scrollToBottom();
}

function addExamples() {
	console.log("fill w/ examples");
	const frame = document.getElementById("lower");
	
	let content = 
		'<div class="box sb_right box_right">'
		+'Dear Sir, can you please tell me the register value of '
		+'<span class="controlCharacter">4711</span>'
		+'?'
		+'<div class="timestamp">'
		+ new Date().toLocaleString()
		+ '</div>'
		+'</div>';	
	frame.contentWindow.addTestBubble(true, content, ++id);
	
	content = 
		'<div class="box sb_left box_left">'
		+'But of course, the value is right at '
		+'<span class="controlCharacter">123</span>'
		+'.'
		+'<div class="timestamp">'
		+ new Date().toLocaleString()
		+ '</div>'
		+'</div>';
	frame.contentWindow.addTestBubble(false, content, ++id);
	
	frame.contentWindow.addBreak();
	
	content =
		'<div class="box sb_right box_right">'
		+'By all means, I would like inquire about the register values of '
		+'<span class="controlCharacter">115</span>'
		+ ' to '
		+'<span class="controlCharacter">135</span>'
		+', if you please.'
		+'<div class="timestamp">'
		+ new Date().toLocaleString()
		+ '</div>'
		+'</div>';
	frame.contentWindow.addTestBubble(true, content, ++id);
		
	content =
		'<div class="box sb_left box_left">'
		+'It is my pleasure to inform you about the manifold characteristics '
		+'of your desired register values. They are: '
		+'<span class="controlCharacter">4622</span>, '
		+'<span class="controlCharacter">4622</span>, '
		+'<span class="controlCharacter">4636</span>, '
		+'<span class="controlCharacter">4642</span>, '
		+'<span class="controlCharacter">4636</span>, '
		+'<span class="controlCharacter">4633</span>, '
		+'<span class="controlCharacter">4694</span>'
		+' and '
		+'<span class="controlCharacter">4620</span>'
		+'.'
		+'<div class="timestamp">'
		+ new Date().toLocaleString()
		+ '</div>'
		+'</div>';
	frame.contentWindow.addTestBubble(false, content, ++id);
	
	frame.contentWindow.scrollToBottom();
}