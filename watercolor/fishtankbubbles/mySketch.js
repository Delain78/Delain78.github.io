let cnv;

let bg;

//random walk
let dot_move = 100;
let col_shift = 2;

// moving part
let x = 0;
let y = 0;

function preload(){
  bg = loadImage('paper24.jpg');
}


function setup() {
  createCanvas(1080, 1080);
  noStroke();
  
  //background watercolor paper texture
  colorMode(HSB);
  background(210,0,100);
  	
	watercolor();

	// paper texture
	tint(0,0,100,0.5);
  image(bg,0,0,width,height);
	
	
	cnv = createGraphics(100,100); 
}
  
function draw(){
  cnv.stroke(255);
	cnv.strokeWeight(3);
  cnv. noFill();
   cnv.ellipse(50,50,50);
    
  imageMode(CENTER);
  push();
  translate(width/2,height);
  image(cnv,0,y);
  pop();
  
	y--
}


function watercolor(){
	 
	// variables
	let h = 180;
	let maxVary = 10;
  let hMax = h + maxVary;
  let hMin = h - maxVary;
	let hue2 = h;
	let s = 100;
	let sMax = s + 10;
  let sMin = s - 10;
	let b = 100;
	let bMax = b+2;
  let bMin = b-15 
	let alpha = 0.08;
	
 
  // random walk
  let x_dot = width/2;
  let y_dot = height/2;
  
  // number of watercolor dots to fill the canvas
  let numb = (width * height) / 70;
	
  for (q = 0; q < numb; q++) {
      x_dot = x_dot + random(-dot_move, dot_move);
      y_dot = y_dot + random(-dot_move, dot_move);
      hue2 = hue2 + random(-col_shift, col_shift);
      s = s + random(-col_shift*2, col_shift*2);
      b = b + random(-col_shift*2, col_shift*2);
      if (x_dot < 0) {
        x_dot = width;
      }
      else if (x_dot > width) {
        x_dot = 0;
      }
      if (y_dot < 0) {
        y_dot = height;
      }
      else if (y_dot > height) {
        y_dot = 0;
      }
      if (hue2 > hMax) {
        hue2 = hMax;
      }
      else if (hue2 < hMin) {
        hue2 = hMin;
      }
      if (hue2 > 360) {
        h2 = hue2 - 360;
      }
      else if (hue < 0) {
        h2 = hue2 + 360;
      }
      if (s > sMax) {
        s = sMax;
      }
      if (s < sMin) {
        s = sMin;
      }
      if (b > bMax) {
        b = bMax;
      }
      else if (b < bMin) {
        b = bMin;
      }
      
    fill(hue2, s ,b ,alpha);
    push();
    translate(x_dot,y_dot);
    rotate(random(TWO_PI));
    beginShape();
    for (m = 0; m < TWO_PI; m += 1) {
      r = random(20, 50);
      let x = cos(m) * r;
      let y = sin(m) * r;
      vertex(x, y);
    }
    endShape(CLOSE);
    pop();
    }
}



function keyPressed() {
  if (key === 's') {
    save('watercolorbackground.png'); // 10s sec
  }
}
