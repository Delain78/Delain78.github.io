let oscillators = [];

function setup() {
  createCanvas(640, 240);

  for (let i = 0; i < 10; i++) {
    oscillators.push(new Oscillator());
  }
}

function draw() {
  background(255);

  for (let o of oscillators) {
    o.show();
    o.oscillate();
  }
}
