//let x;
//let y;
let pos;

function setup() {
  createCanvas(400, 400);
  background(51);
  pos = createVector(200,200);
  console.log(pos);
}

function draw() {
  
  stroke(255);
  strokeWeight(2);
  point(pos.x,pos.y);
  
  let r = floor(random(4));
  
  switch(r) {  // switch statement
      case(0):
        pos.x  = pos.x +1; //right
        break;
      case(1):
        pos.x = pos.x - 1; //left
        break;
      case(2):
        pos.y = pos.y + 1; //down
        break;
      case(3):
        pos.y = pos.y - 1; //up
        break;
  }
}