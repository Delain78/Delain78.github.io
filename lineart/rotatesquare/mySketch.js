let angle = 0;

function setup() {
	createCanvas(1080, 1080);
	colorMode (HSB);
	angleMode (DEGREES);
	background(210,0,30);
}

function draw() {
	
// rotate square
for (let p = 0; p < 2; p++){ 
	for (let i= 0; i < 360; i += 5){
		push();
		translate(540, 540); 
		rotate(i);
		strokeWeight(4 + 8 * (1-p));
		let hue = i;
		stroke(hue*p,100*p,100*p,0.8);
		noFill();
		rect(0, 0, 300, 300);
		pop();  //The origin is back to (0, 0) and rotation is back to 0.
	}
}
}

function keyPressed() {
  if (key === 's') {
    save('03.png'); 
  }
}
