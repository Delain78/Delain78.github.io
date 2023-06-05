
function setup() {

  createCanvas (1080, 1080);
  colorMode(HSB);
  background (210, 0, 0); //greyscale --> any hue, 0 sat, 100 brightness white --> 0 brightness black
  
}

function draw() {
  angleMode(DEGREES);
  for (let angle = 0; angle < 360 * 6; angle += 4){
   spot(angle);
  }
  noLoop();
  
 save("snailhouse.png")
}

function spot(angle) {
  
 let r = 60 + map (angle, 0, 360*6 ,0,300);
 let x = r * cos (angle);
 let y = r * sin (angle);
let hue =  160 + 50 * (sq(sin (x/3)));

  noFill ();
  strokeWeight(2);
  stroke (hue,90,90, 0.6);
  circle (540 + x, 540-y, 150);
  
}
