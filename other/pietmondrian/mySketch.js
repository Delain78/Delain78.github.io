// based on art of Piet Mondriaan

function setup() {
 createCanvas(1080, 1080);
	colorMode(HSB);
	rectMode(CENTER);
 //noStroke();
	
	background(210,0,90);
 	drawSquare(width / 2, height / 2, 850, 3); //midden
}


function drawSquare(cx, cy, r, depth) { //r = size
	let d = dist(width/2, height/2, cx, cy);
	const hue =150 + d/6;
  const s = 85;
  const b = 85;
  const c = color(hue, s, b);
  stroke(hue, s, b-40);
	strokeWeight(4);
	noFill();
	square(cx, cy, r);
	if (depth > 0){
	if (random()> 0.25){drawSquare(cx	- r/4, cy - r/4, r/2, depth-1);}//links boven
 	if (random()> 0.25){drawSquare(cx + r/4, cy	- r/4, r/2, depth-1);}//rechts boven
 	if (random()> 0.25){drawSquare(cx	- r/4, cy + r/4, r/2, depth-1);}//links onder
 	if (random()> 0.25){drawSquare(cx + r/4, cy	+ r/4, r/2, depth-1);}//rechts onder
	}
}

function keyPressed() {
  if (key === 's') {
    save('vicsekfractal.png'); 
  }
}

