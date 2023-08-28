class Wave {
  constructor(x, y, amp, period, phase) {
    // starting point wave
    this.origin = createVector(x,y )
  
    
    this.amplitude = amp;
    this.period = period;
    this.phase = phase;
  }

  evaluate(x) {
    return sin(this.phase + (TWO_PI * x) / this.period) * this.amplitude;
  }

  update() {
    this.phase += 0.02;
  }

  show(x, y) {
    stroke(0);
    fill(127, 100);
    circle(x + this.origin.x, y + this.origin.y, 20);
  }
}
