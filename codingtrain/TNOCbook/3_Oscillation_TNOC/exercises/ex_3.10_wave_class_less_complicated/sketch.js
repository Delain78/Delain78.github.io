let wave0;
let wave1;

function setup() {
  createCanvas(640, 240);

  // x origin,y origin, amplitude,period,phase
  wave0 = new Wave(50, 75, 20, 600, 0);
  wave1 = new Wave(300, 120, 40, 180, 0);
}

function draw() {
  background(255);

  // x < 100 is width of the wave, x += 7 is the xspacing
  for (let x = 0; x < 100; x += 7) {
    let y = 0;
    y += wave0.evaluate(x);
    wave0.show(x, y);
  }
  wave0.update();

  for (let x = 0; x < 300; x += 7) {
    let y = 0;
    y += wave1.evaluate(x);
    wave1.show(x, y);
  }
  wave1.update();
}
