// alles genormaliseerd tussen 0 en 1

let n;

function setup() {
  createCanvas(1080, 1090);
  colorMode(HSB);
}

function draw() {
  background(150, 0, 0);
  stroke(0, 0, 100);
  strokeWeight(3);

  drawFractal(width / 2, height / 2, 500,5);
}

function polar(angle, r) {
  return {
    x: r * cos(angle),
    y: 20 + r * sin(angle),
  };
}

function drawFractal(x, y, r, depth) { // r = size
  const n = 3;
  for (let i = 0; i < n; i++) {
    const f = i / n;
    const angle = f * TWO_PI + 3/4*TWO_PI;// 3/4 * PI is to put it horizontal
    if (depth > 0) { 
      const scale = 0.5; //scale x and y position
      const rNew = 0.5 * r;
      const p = polar(angle, rNew); // scale r
      drawFractal(x + p.x, y + p.y, rNew,depth-1);
    } else {
      const p1 = polar(angle, r);
      const p2 = polar(angle + (1 / n) * TWO_PI, r);
      const hue =100 + y/8;
      const s = 85;
      const b = 85;
      const c = color(hue, s, b);
      stroke(c);
      line(x + p1.x, y + p1.y, x + p2.x, y + p2.y);
    }
  }
}

function keyPressed() {
  if (key === 's') {
    save('watercolorbackground.png'); 
  }
}

