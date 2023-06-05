function setup() {
  createCanvas (1080, 1080);
  colorMode (HSB);
  background(210, 0, 90);
}


function draw() {

  angleMode(DEGREES);
  tree (540, 890, 55, 0, 150);

  noLoop();

  save ("tree.png");
}


function tree(x, y, brightness, angle, length) {

  let hue = 150 + (dist (x, y, 540, 890)/12);

  // current detail
  strokeWeight(length/15);
  stroke (hue, 90, brightness);

  // branch
  var x2 = x - length * sin (angle);
  var y2 = y - length * cos (angle);
  line (x, y, x2, y2)

    // only continue if branch size isn't too small
    if (length > 5) {

    // smaller tree to the left
    tree (x2, y2, brightness + random (-5, 5), angle + 20, length * 0.8);

    //smaller tree to the right
    tree (x2, y2, brightness + random (-5 , 5), angle - 20, length * 0.8);
  }
}
