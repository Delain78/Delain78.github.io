
function setup() {
  createCanvas(600, 600);
}

function draw() {
  //noiseSeed(99);
  background(0);
  translate(width/2, height/2);
  stroke (255);
  noFill();
 
  
  beginShape();
  for (let a = 0; a < TWO_PI; a +=0.1){
    let xoff =  map (sin (a *10), -1, 1, -10, 10)
    let r = 100 + xoff;
    let x = r * cos (a);
    let y = r * sin (a);
    vertex (x,y);
  }
  endShape(CLOSE)
  
  //noLoop();
}