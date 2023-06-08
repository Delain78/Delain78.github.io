// based on the codign train tutorial on youtube

let total = 200;
let r;
let factor = 2; //try 3 and 4


function setup() {
	createCanvas(1080,1080);
	r = width/2-100;
	colorMode(HSB);
}

function getVector(index, total) { // store x,y position
  let angle = map(index % total, 0, total, 0, TWO_PI); // make points on the circle
  let v = p5.Vector.fromAngle(angle); // make and vector pointing in that direction
  v.mult(r); //scaling
  return v;
}


function draw() {
	background(0,0,0);
	
	//circle
	translate (width/2, height/2);
	stroke(0,0,0);
	noFill();
	circle (0, 0, r *2);

	//lines in circle
	for (let i =0; i < total; i++){
		let hue = 120 + i/2;
		let a = getVector(i, total);
    let b = getVector(i * factor, total);
		strokeWeight(2)
		stroke(hue,85,85, 0.8);
    line(a.x, a.y, b.x, b.y);
			fill (hue,85, 85, 0.8);
			circle(a.x,a.y,20);
	}

}

function keyPressed() {
  if (key === 's') {
    save('cardioid.png'); 
  }
}