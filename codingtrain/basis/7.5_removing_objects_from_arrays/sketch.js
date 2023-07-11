let bubbles = [];

function setup() {
  createCanvas(600, 400);
  for (i = 0; i < 10; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(10, 50);
    let b = new Bubble(x, y, r);
    bubbles.push(b);
  }
}

function mousePressed() {
  for (i = bubbles.length-1; i >= 0; i--) {
    if (bubbles[i].contains(mouseX, mouseY)) {
      bubbles.splice (i,1);
    }
  }
}

//function mousePressed() {
//for (i = 0; i < bubbles.length; i++) {
// bubbles[i].clicked(mouseX, mouseY);
// }
//}

//function mousePressed(){
//let r = random (10,50);
//let b = new Bubble(mouseX, mouseY,r);
//bubbles.push(b);

//}

function draw() {
  background(0);
  for (i = 0; i < bubbles.length; i++) {
    if (bubbles[i].contains(mouseX, mouseY)) {
      bubbles[i].changeColor(255);
    } else {
      bubbles[i].changeColor(0);
    }
    bubbles[i].show();
    bubbles[i].bubblemove();
  }
}
