let bubbles = [];

function setup() {
  createCanvas(600, 400);
  
}

function mouseDragged() {
    let r = 40;
    let b = new Bubble(mouseX, mouseY, r);
    bubbles.push(b);
}


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
  
  if (bubbles.length > 10){
  bubbles.splice (0,1);
  }
}
