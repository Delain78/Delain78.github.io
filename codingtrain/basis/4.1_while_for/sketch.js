function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  strokeWeight(4);
  stroke(255);
  
  
  let x = 0;
  while (x <= width) {
    fill (0,200,255);//blue
  ellipse(x, 100, 25, 25);
  x = x + 50;
  }
  
  for ( let x =0; x <= width; x = x += 50){
    fill (255,0,200); // pink
    ellipse(x, 300, 25, 25);
  }

}
