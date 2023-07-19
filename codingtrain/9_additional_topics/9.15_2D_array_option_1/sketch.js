let cols = 10;
let rows = 10;

let colors = [];

function setup() {
  createCanvas(300, 300);

  for (let i = 0; i < cols; i++) {
    colors[i] = [];
    for (let j = 0; j < rows; j++) {
    colors[i][j] = random(255);
  }
}
}

function draw() {
  background(220);

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * 30;
      let y = j * 30;

      fill(colors[i][j]);
      stroke(0);
      rect(x, y, 30, 30);
    }
  }
  
}