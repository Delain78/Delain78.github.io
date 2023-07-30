//let xoff1 = 0;
//let xoff2 = 10000;
let inc = 0.01;
start = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(51);
  stroke(255);
  fill(255,100);
  beginShape();
  let xoff = start;
  vertex (0,400);
  for (let x = 0; x < width; x++) {
    stroke(255);
    //let y = random(height);
    let y = noise(xoff) * height; // same a is map, see below
    vertex(x,y);
    
    xoff +=inc;
  }
  vertex(400,400);
  endShape();
  
  start +=0.01

  //noLoop();

  //let x = random(width);

  //let x = map(noise(xoff1), 0,1, 0, width);
  //let y = map(noise(xoff2), 0,1, 0, height);

  //xoff1 += 0.02;
  //xoff2 += 0.02;

  //ellipse (x,y,24,24);
}
