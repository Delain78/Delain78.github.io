function setup() {
	createCanvas(1080, 1080);
	colorMode (HSB);
	angleMode (DEGREES);
	background(210,0,30);
}

function draw() {
	
// rotate big circle
	
for (let p = 0; p < 2; p++){ 
	for (let i= 0; i < 360; i += 10){
		noFill();
		let hue = i;
		stroke(hue*p,100*p,100*p,0.8);
		strokeWeight(3 + 6 * (1-p));
		var r = 200;
		var x = r * cos (i);
		var y = r * sin (i);
		ellipse (540+x,540-y,r*2,r*2);
	}
}	
	
}

function keyPressed() {
  if (key === 's') {
    save('03.png'); 
  }
}

