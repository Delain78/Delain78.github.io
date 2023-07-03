let circleX = 100;

function setup() {
  createCanvas(400, 300);
}

function mousePressed (){
  circleX = 0;  
}

function draw() {
  
 background(0);//greyscale
 fill(255);
 noStroke();
 circle (circleX, 150,64);
  
circleX = circleX + 1; // --> circleX =+1 or circleX++
 //print("circleX:" + circleX);
   
}

