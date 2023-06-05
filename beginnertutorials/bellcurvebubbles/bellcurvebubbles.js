function setup() {
  createCanvas (1080, 1080);
  colorMode (HSB);
  background(210, 0, 100);
}


function draw() {
    for (let i = 0; i < 1000; i += 1) {
    particle()
    }
  noLoop();
  
  //save ("bellcurvebubbles.png");
}


function particle() {
  let x = random (100,980);
  let y = random (100,980);
  let hue = 180 + 30 * (sq(sin (x/3)));
  
  var d = dist (540,540, x, y);
  let size = 50* exp(-sq(d/220));
  
  stroke (hue, 100, 60, 0.5);
  fill (hue, 100, 90, 0.5);
    
  circle (x, y, size);
}
