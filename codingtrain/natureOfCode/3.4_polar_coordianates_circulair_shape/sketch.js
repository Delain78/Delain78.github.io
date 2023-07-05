let angle = 0;
let r = 150;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  stroke(255);
  strokeWeight(4);
  noFill();
  translate(width / 2, height / 2);
  //circle (0,0, r *2);

  //let increment = map (mouseX, 0, width, 0.01, PI);
  let increment = 0.1;

  beginShape();
  for (a = 0; a < TWO_PI; a += 0.1) {
    let r1 = r + random (-10,10);
    let x = r1 * cos(a);
    let y = r1 * sin(a);
    vertex(x, y);
  }
  endShape(CLOSE);
  
  noLoop();

  //strokeWeight(16);
  //stroke(252,238,33);
  //let x = r * cos (angle);
  //let y = r * sin (angle);
  //point (x,y);

  //angle +=0.04;
  //r -= 0.2;
}
