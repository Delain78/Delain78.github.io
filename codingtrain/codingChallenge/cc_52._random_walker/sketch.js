let x;
let y;

function setup() {
  createCanvas(400, 400);
  x = 200;
  y = 200;
  background(51);
}

function draw() {
  
  stroke(255);
  strokeWeight(2);
  point(x,y);
  
  let r = floor(random(4));
  
  switch(r) {  // switch statement
      case(0):
        x  = x +1; //right
        break;
      case(1):
        x = x - 1; //left
        break;
      case(2):
        y = y + 1; //down
        break;
      case(3):
        y = y - 1; //up
        break;
  }
}