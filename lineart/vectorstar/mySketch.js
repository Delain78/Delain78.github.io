function setup() {
  createCanvas(1080, 1080);
	colorMode(HSB);
  background(0);
	noLoop();
	angleMode(DEGREES);
}

function draw() {

  translate (width/2, height/2);
 
	for (let i =0; i <600; i++){
	let r = random(-400,400);
	let angle = random(0,360);
	let x = r * cos (angle);
	let y = r * sin (angle);
	let hue = 120 + (dist (0,0,x,y))/6;
	v = createVector (x,y);
  
  strokeWeight(4);
  stroke(hue,85,85, 0.3);
  line (0,0,v.x,v.y);
	}
}

function keyPressed() {
  if (key === 's') {
    save('vectorstar.png'); 
  }
}
