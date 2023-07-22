let inc = 0.01;
start = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(51);
  stroke(255);
  noFill();
  beginShape();
  let xoff = start;
  for (let x = 0; x < width; x++) {
    stroke(255);
    //let y = random(height);
    let y = noise(xoff) * height; // same a is map, see below
    vertex(x,y);
    
    xoff +=inc;
  }
  endShape();
  
  //noLoop();                                                 
  
  start +=0.01
}
