let bubbles = [];

function setup() {
  createCanvas(600, 400);
  for (i =0; i < 5; i++){
  let x = random(width);
  let y = random(height);
  let r = random(10, 50);
  let b = new Bubble(x, y, r);
  bubbles.push(b);
  }
}

function mousePressed() {
 for (i = 0; i < bubbles.length; i++) {
    bubbles[i].clicked(mouseX, mouseY);
  }
}

//function mousePressed(){
//let r = random (10,50);
//let b = new Bubble(mouseX, mouseY,r);
//bubbles.push(b);

//}

function draw() {
  background(0);
  for (i = 0; i < bubbles.length; i++) {
    bubbles[i].show();
    bubbles[i].bubblemove();
  }
}
