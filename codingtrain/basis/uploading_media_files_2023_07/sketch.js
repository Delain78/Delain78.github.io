let kitten;

function preload(){
  kitten = loadImage('kitten3.png');
}

function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  background(220);
  image (kitten,0,0);
}