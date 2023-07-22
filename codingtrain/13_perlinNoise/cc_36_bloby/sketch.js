yoff = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  translate(width / 2, height / 2);

  let radius = 150;

  beginShape();
  let xoff = 0;
  for (let a = 0; a < TWO_PI; a += 0.1) {
    let offset = map(noise(xoff, yoff), 0, 1, -25, 25);
    let r = radius + offset;
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x, y);
    xoff += 0.1
  }
  endShape(CLOSE);

  yoff += 0.01;

}
