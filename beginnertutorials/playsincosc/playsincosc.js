
function setup() {

  createCanvas (1080, 1080);
  colorMode(HSB);
  background (210, 0, 0); //greyscale --> any hue, 0 sat, 100 brightness white --> 0 brightness black
  
}

function draw() {
  angleMode(DEGREES);
  for (let angle = 0; angle < 360; angle +=0.11){
   spot(angle);
  }
  noLoop();
  
 // save("playsincosc.png")
}

function spot(angle) {
  
 let x = 300 * cos (angle * 11) * sin (angle*4);
 let y = 300 * cos (angle * 4) * sin (angle*6);

  noFill ();
  stroke (180,90,90, 0.3);
  circle (540 + x, 540-y, 100);
  
}
