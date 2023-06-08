// based on the maurer roses tutorial of the coding train

//https://en.wikipedia.org/wiki/Maurer_rose

let n = 5;
let d = 97;

function setup() {
	createCanvas(1080, 1080);
	colorMode(HSB);
	angleMode(DEGREES);
}

function draw() {
	background(210,0,0);
	translate (width/2, height/2);

	// the maurer rose part
	noFill();
	beginShape();
	strokeWeight(2);
	for (let i = 0; i < 361; i++){
		 let k = i * d;
		 let r = 500 * sin (n * k);
		 let x = r * cos(k);
		 let y = r * sin(k);
		stroke (190,90,90, 0.8);
		vertex (x,y);
	}
endShape();
	
	
	// the mathmetical rose part
		noFill();
	
	strokeWeight(8);
	beginShape();
	for (let i = 0; i < 361; i++){
		let k = i;
		let r = 500 * sin (n * k);
		let x = r * cos(k);
		let y = r * sin(k);
		stroke(180,90,90)
		vertex (x,y);
	}
endShape();
	
}

function keyPressed() {
  if (key === 's') {
    save('maurerrose.png'); 
  }
}