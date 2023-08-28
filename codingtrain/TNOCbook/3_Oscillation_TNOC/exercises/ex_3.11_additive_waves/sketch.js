let waves = [];

function setup() {
  createCanvas(640, 240);
  for (let i = 0; i < 5; i++) {
    waves[i] = new Wave(random(10, 40), random(100, 640), random(TWO_PI));
  }
}

function draw() {
  background(255);

  for (let x = 0; x < width; x += 7) {
    let y = 0;
    for (let wave of waves) {
      y += wave.evaluate(x);
    }
    stroke(0);
    fill(127,100);
    circle(x, y + height / 2, 20);
  }
  
  for (let wave of waves){
    wave.update();
  }
}
