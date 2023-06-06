// based on cubic disarray of Georg Nees

let steps = 12;

// Max amount to rotate cells by (degrees).
var maxRotate = 30

// Max amount to translate cells by.
var maxTranslate = 15

function setup() {
	createCanvas(800, 800);
	background(0);
	colorMode(HSB);
	
	for (let j = 1; j < 2*steps-1; j++){
		for (let i = 6; i < steps +6; i++){
			drawSqaure(i,j);
		}
	}
}

function drawSqaure(i,j){
	let s = width/(steps*2);
	let x = i * s;
	let y = j * s;
	let translateBy = random(-maxTranslate, maxTranslate) * y/height;
	let rotateBy = random(-maxRotate, maxRotate) * y/height;
	let h = 120 + y/7;
	push();
	translate (x,y);
	//rotate(rotateBy)
	stroke (h,100,100);
	strokeWeight(4);
	noFill();
	square(0,0,s);
	pop();
}



function keyPressed() {
  if (key === 's') {
    save('watercolorbackground.png'); 
  }
}
