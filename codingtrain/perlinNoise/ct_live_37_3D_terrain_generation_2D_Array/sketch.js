let cols, rows;
let scl = 20;
let w = 1200;
let h = 900;
let z;

let flying = 0;

function setup() {
  createCanvas(600, 600, WEBGL);

  cols = w / scl;
  rows = h / scl;
  z = make2DArray(cols, rows);
}

function draw() {
  
  flying -=0.3;
  
  let yoff = flying;
  for (let y = 0; y < rows; y++) {
    let xoff = 0;
    for (let x = 0; x < cols; x++) {
      z[x][y] = map(noise(xoff, yoff), 0, 1, -100, 100);
      xoff += 0.1;
    }
    yoff += 0.1;
  }

  background(255);
  stroke(0);
  noFill();

  translate(0,100);
  rotateX(PI / 3);

  translate(-w / 2, -h / 2);
  for (let y = 0; y < rows - 1; y++) {
    beginShape(TRIANGLE_STRIP);
    for (let x = 0; x < cols; x++) {
      vertex(x * scl, y * scl, z[x][y]);
      vertex(x * scl, (y + 1) * scl, z[x][y + 1]);
      //rect(x * scl - w / 2, y * scl - h / 2, scl, scl);
    }
    endShape();
  }
}

function make2DArray(cols, rows) {
  let arr = new Array(cols);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}
