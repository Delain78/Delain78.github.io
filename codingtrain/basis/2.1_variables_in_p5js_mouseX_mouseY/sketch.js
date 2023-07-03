function setup() {
  createCanvas(400, 300);
 background(0);//greyscale
}

function draw() {
  
  //fill(255,50);
  //noStroke();
  strokeWeight(8);
  stroke (255,50);
  line(pmouseX,pmouseY,mouseX,mouseY);
 // circle (mouseX, mouseY,25);
   
}

function mousePressed (){
	background(0);
}

function keyPressed (){
	background(0,255,0);
}