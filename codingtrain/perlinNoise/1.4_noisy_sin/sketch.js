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
    let n = map (noise(xoff), 0, 1, -50, 50);
    let s = map (sin(xoff), -1, 1,0, height);
    let y = n + s;
    
    //let y = random(height);
    //let y = noise(xoff) * 100 + height/2 + sin (xoff) * height/2; 
    vertex(x,y);
    
    xoff +=inc;
  }
  endShape();
  
  //noLoop();                                                 
  
  start +=0.01
}
