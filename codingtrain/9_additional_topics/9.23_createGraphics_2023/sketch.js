let cnv;
let x = 50;
let y = 50;
let angle =0;

function setup() {
  createCanvas(400, 300);
  cnv = createGraphics(100,100);
  //cnv.background(100);
  cnv.fill(100);
  cnv.ellipse(50,50,100);
  
}

function draw() {
  background(0);
   cnv.stroke(255);
   cnv.fill(255);
   cnv.ellipse(x,y,10);
  x += random(-5,5)
  y += random (-5,5);
  
  imageMode(CENTER);
  image(cnv,mouseX,mouseY);
  
  push();
  translate(200,200);
  rotate(angle);
  tint(0,255,0);
  image(cnv,0,0);
  pop();
  
  angle += 0.01;

}