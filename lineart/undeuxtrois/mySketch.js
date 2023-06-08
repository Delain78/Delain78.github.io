// based on un, deux, trois of Vera Molnár

let s = 54;

function setup() {
	createCanvas(1080, 1080);
	background(175);
	colorMode(HSB);
	angleMode(DEGREES);
	
	stroke(180,0,100);
	strokeWeight(4);
	

	for (let x = s; x < width; x +=s ){
		for (let y = s; y < height-s; y +=s){
		 line (x,y,x,y+ s);
		}
	}
	
	
}



/*

// Max amount to rotate cells by (degrees).
let  maxRotate = 30;

// Max amount to translate cells by.
let maxTranslate = 15;

function setup() {
	createCanvas(1080, 1080);
	background(0);
	colorMode(HSB);
	angleMode(DEGREES);
	
for (let x = 270; x < width-270; x +=s ){
	for (let y = 45; y < height-45; y +=s){
			drawRect(x,y);
	}
	}
}

function drawRect(x,y){
	let h = 120 + y/9;
	push();
	translate (x,y);
	
	let translateBy = random(-maxTranslate, maxTranslate) * y/height;
	let rotateBy = random(-maxRotate, maxRotate) * y/height;
	
	translate (translateBy,translateBy);
	rotate(rotateBy)
	
	// filled option;
	//let h = 180 + (rotateBy *3);
	//stroke (h,0,100, 0.8);
	//fill (h,100,100,0.9);
	
	stroke(h,100,100);
	strokeWeight(4);
	noFill();
	rect(0,0,s,s);
	pop();
}



function keyPressed() {
  if (key === 's') {
    save('cubicdisarray.png'); 
  }
}*/