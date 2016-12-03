// Adapted from the cloud-to-butt safari extension available at
// https://github.com/panicsteve/cloud-to-butt

walk(document.body);

function walk(node) {
	var child, next;
	
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
			handleText(node);
			break;
	}
}

function handleText(textNode)  {
	var v = textNode.nodeValue;
	// Browser text find-replace here:
    v = v.replace(/\bTrump\b/g, "VonClownstick");
    v = v.replace(/\bDonaldTrump\b/g, "DonaldVonClownstick");
	v = v.replace(/\bTrumpism\b/g, "Clownstickism");
    v = v.replace(/\brealDonaldTrump\b/g, "realVonClownstick");

	textNode.nodeValue = v;
}
