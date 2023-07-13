let walker;

function setup() {
  createCanvas(640, 240);
  walker = new Walker();
   background (255);
}

function draw() {
  walker.update();
  walker.show();
}