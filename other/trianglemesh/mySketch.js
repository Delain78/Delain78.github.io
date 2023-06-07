let space;
let points = [];
let pos = [];
let step = 12;
let maxVary = 15;

function setup() {
  createCanvas(1080, 1080);
  background(0);
  colorMode(HSB);
  strokeWeight(4);

	let frame = 67.5;
  let space = (width-(frame*2)) / step;

  for (let j = 1; j < step; j++) {
    for (let i = 1; i < step; i++) {
      let xoff = 0;
      if (j % 2 == 1) {
        xoff = space / 2;
      }
     
      let x =	frame * 3/4 + space * i + xoff + random(-maxVary, maxVary);
      let y = frame + space * j + random(-maxVary, maxVary);
			//point(x,y);
			points.push(createVector(x, y));
			
			let h = 100 + 200* noise(x,y);
			stroke(h, 0, 100);
      fill(h, 100, 100, 0.8);
    
      let pos = points.length - 1;
		
      if (pos > step - 1 && j % 2 == 0 && i >= 2) {
        triangle(
          points[pos].x,
          points[pos].y,
          points[pos - (step - 1)].x,
          points[pos - (step - 1)].y,
          points[pos - step].x,
          points[pos - step].y
        );
        triangle(
          points[pos].x,
          points[pos].y,
          points[pos - 1].x,
          points[pos - 1].y,
          points[pos - step].x,
          points[pos - step].y
        );
      }
      if (pos > step - 1 && j % 2 == 1 && i >= 2) {
        triangle(
          points[pos].x,
          points[pos].y,
          points[pos - 1].x,
          points[pos - 1].y,
          points[pos - (step - 1)].x,
          points[pos - (step - 1)].y
        );
        triangle(
          points[pos - 1].x,
          points[pos - 1].y,
          points[pos - (step - 1)].x,
          points[pos - (step - 1)].y,
          points[pos - step].x,
          points[pos - step].y
        );
      }
    }
  }
}

function keyPressed() {
  if (key === "s") {
    save("trianglemesh.png");
  }
}
