// Adapted from the cloud-to-butt safari extension available at
// https://github.com/panicsteve/cloud-to-butt

walk(document.body);

function walk(node) {
	var child, next;
	var rando = Math.random();
	//var rn = rando;
	
//	if (node.tagName.toLowerCase() == 'input' || node.tagName.toLowerCase() == 'textarea'
//	    || node.classList.indexOf('ace_editor') > -1) {
//		return;
//	}
	
	switch (node.nodeType) {
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while (child) {
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;
		case 3: // Text node
			handleText(node, rando);
			break;
	}
}

function handleText(textNode, rando)  {
	var v = textNode.nodeValue;
	// Browser text find-replace here:
    v = v.replace(/\bmouth\b/g, "word house");
    v = v.replace(/\bMouth\b/g, "Word house");
    v = v.replace(/\bsea\b/g, "whale road");
    v = v.replace(/\bSea\b/g, "Whale road");
    v = v.replace(/\bskull\b/g, "eye sky");
    v = v.replace(/\bSkull\b/g, "Eye sky");
    v = v.replace(/\bskulls\b/g, "eye skies");
    v = v.replace(/\bSkulls\b/g, "Eye skies");
    var hairArray = ['head trees', 'skull forest'];
	v = v.replace(/\bhair\b/g, hairArray[Math.floor(rando * hairArray.length)]);
	var HairArray = ['Head trees', 'Skull forest'];
	v = v.replace(/\bHair\b/g, HairArray[Math.floor(rando * HairArray.length)]);
	var bodyArray = ['bone-locker', 'flesh-prison', 'limb-vessel', 'soul-dwelling']; 
	v = v.replace(/\bbody\b/g, bodyArray[Math.floor(rando * bodyArray.length)]);
	var BodyArray = ['Bone-locker', 'Flesh-prison', 'Limb-vessel', 'Soul-dwelling']; 
	v = v.replace(/\bBody\b/g, BodyArray[Math.floor(rando * BodyArray.length)]);
	
	textNode.nodeValue = v;
}
