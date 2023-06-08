function setup() {
  createCanvas (1080, 1080);
  colorMode (HSB);
  background(210,0,10);
}

function draw() {
  for (let s = 100; s < width-150; s += 50) {
    noFill();
    strokeWeight(5);
     my_ring (s)
  }
  noLoop();

}


function my_ring (s){
  let x = 980 - s/2; 
  stroke (150 + s/18, 100, 100, 0.8);
	circle (x, 540, s);  
}

function keyPressed() {
  if (key === "s") {
    save("circleincircle.png");
  }
}
