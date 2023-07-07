let yoff = 0;

function setup() {
  createCanvas(200, 200);
}

function draw() {
  background(51);
  translate(width / 2, height / 2);
  rotate(PI / 2);

  stroke(255);
  fill(255, 50);
  strokeWeight(1);

  let da = PI / 100; //delta angle
  let dx = 0.1;

  let xoff = 0;
  beginShape();
  for (let a = -PI / 2; a <= PI / 2; a += da) {
    let n = noise(xoff, yoff);
    let r = sin(2 * a) * map(n, 0, 1, 50, 100);
    let x = r * cos(a);
    let y = r * sin(a);
    xoff += dx;
    //point(x,y);
    vertex(x, y);
  }

  for (let a = PI / 2; a <= (3 * PI) / 2; a += da) {
    let n = noise(xoff, yoff);
    let r = sin(2 * a) * map(n, 0, 1, 50, 100);
    let x = r * cos(a);
    let y = r * sin(a);
    xoff -= dx;
    //point(x,y);
    vertex(x, y);
  }
  endShape();
  
 // yoff += 0.1;
}
