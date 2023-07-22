class Particle {
  constructor() {
    // first parameter higher --> faster, lower --> slower);
    this.xNoise = new NoiseLoop(0.1, -width, width * 2);
    this.yNoise = new NoiseLoop(0.1, -height, height * 2);
    this.dNoise = new NoiseLoop(2, 10, 120); //diameter
    this.rNoise = new NoiseLoop(2, 100, 255); //red values
    this.bNoise = new NoiseLoop(2, 100, 255); //blue values
  }

  render(a) {
    noStroke();
    let x = this.xNoise.value(a);
    let y = this.yNoise.value(a);
    let d = this.dNoise.value(a);
    let r = this.rNoise.value(a);
    let b = this.bNoise.value(a);
    fill(r, 50, b, 200);
    circle(x, y, d);
  }
}
