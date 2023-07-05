let angle = 0;
let angleV = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  fill(252, 238, 33);
  translate(width / 2, height / 2);
  //let r = map (sin (angle), -1, 1, 0, 200);
  let y = map (sin(angle), -1,1,-200,200);
  stroke(255);
  line(0,0,0,y);
  circle (0,y, 32);
  
  //let increment = TWO_PI/60;
  angle += angleV;
  
  angleV += 0.0001;
  //console.log (frameRate());
}
