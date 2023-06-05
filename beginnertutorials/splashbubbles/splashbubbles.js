function setup() {
  createCanvas (1080, 1080);
  colorMode (HSB);
  background(210, 0, 100);
}


function draw() {
    angleMode (DEGREES);
    for (let i = 0; i < 2500; i += 1) {
   noStroke();
    particle()
  }
  noLoop();
  
  save ("splashbubbles.png");
}


function particle() {
  let x = random (100,980);
  let y = random (100,980);
  
  var d = dist (x,y,540,540);
  
  let hue = 180 + 30 * (sq(sin (d)));
  
  let size = 20 * sin(d);
  
  stroke (hue, 100, 60, 0.5);
  fill (hue, 100, 90, 0.5);
    
  circle (x, y, size);
}
