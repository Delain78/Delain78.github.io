function setup() {
	simple();
	colorMode (HSB)
}

function draw() {

	tree (400, 500, 50, 0, 100);
	
}

function tree(x, y, brightness, angle, length){
	
	// current detail
	strokeWeight(length/20);
	stroke (120,90, brightness);
	
	// branch
	var x2 = x - length * sin (angle);
	var y2 = y - length * cos (angle);
	line (x,y,x2,y2)
	
	// only continue if branch size isn't too small
	if (length > 10){
		
		// smaller tree to the left
		tree (x2, y2, brightness + randomNumber (-10,10), angle + 20, length * 0.8);

		//smaller tree to the right
		tree (x2, y2,  brightness + randomNumber (-10,10),angle - 20, length * 0.8);
	}
	
}