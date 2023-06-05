function setup() {
  createCanvas (1080, 1080);
  colorMode (HSB);
  background(210, 0, 90);
}


function draw() {
    angleMode (DEGREES);
    for (let i = 0; i < 2000; i += 1) {
   noStroke();
    particle()
  }
  noLoop();
  
  //save ("bubbles.png");
}


function particle() {
  let x = random (100,980);
  let y = random (100,980);
  let hue = 180 + 30 * (sq(sin (x)));
  
  let size = 20 * sin(x);
  
  stroke (hue, 100, 60, 0.5);
  fill (hue, 100, 90, 0.5);
    
  circle (x, y, size);
}
