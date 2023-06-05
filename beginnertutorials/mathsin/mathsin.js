function setup() {
  createCanvas (1080, 1080);
  colorMode (HSB);
  background(210, 0, 90);
}

function draw() {
  for (let x = 100; x <width-100; x += 10) {
    noFill();
    my_math_function (x)
  }
  noLoop();

  save ("wavysin.png");
}



function my_math_function(x) {
  let size = 125 * cos (x/3);
  stroke (x/3, 90, 60, 0.8);
  circle (x, 540, size);
}
