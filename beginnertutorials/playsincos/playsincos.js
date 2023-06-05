
function setup() {

  createCanvas (1080, 1080);
  colorMode(HSB);
  background (210, 0, 0); //greyscale --> any hue, 0 sat, 100 brightness white --> 0 brightness black
  
}

function draw() {
  angleMode(DEGREES);
  for (let angle = 0; angle < 360; angle +=0.7){
   spot(angle);
  }
  noLoop();
  
  //save("playsincos.png")
}

function spot(angle) {
  
 let x = 300 * cos (angle * 3);
 let y = 300 * sin (angle * 4);

  noStroke ();
  var hue = (dist(540,540,x,y)) % 360 ;
  fill (hue,90,90, 0.3);
  circle (540 + x, 540-y, 40);
  
}
