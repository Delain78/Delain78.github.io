function setup() {
  createCanvas (1080, 1080);
  colorMode (HSB);
  background(210, 0, 0);
}

function draw() {
  for (let x = 127.2; x <width-127.2; x += 10) {
		for (let y = 135; y < height-127.2; y += 135){
    noFill();
    my_math_function (x,y)
  }
	}
  noLoop();
}



function my_math_function(x,y) {
  let size = 125 * cos (x/3);
	strokeWeight(3);
  stroke (150 + x/19, 100, 100, 0.8);
  circle (x, y, size);
}

function keyPressed() {
  if (key === "s") {
    save("sinusbubbles.png");
  }
}
