let circles = [];

function setup() {
  createCanvas(640, 320);
  background(255);
  
  let overlapping = false;
  
  let protection = 0;
 
  while (circles.length < 1000){
  // for (let i = 0; i < 25; i++) {
    let circle = {
      // makes an object
      x: random(width),
      y: random(height),
      r: random (6,36)
    };

    let overlapping = false;
    
    for (let j = 0; j < circles.length; j++) {
      let other = circles[j];
      let d = dist(circle.x, circle.y, other.x, other.y);
      if (d < circle.r + other.r) {
        // they are overlapping
        overlapping = true;
        break; // break out of the loop
      }
    }

    if (!overlapping) {
      circles.push(circle);
    }
    
    protection++;
    
    if (protection > 50000){
      break;
    }
    
  }

  for (let i = 0; i < circles.length; i++) {
    noStroke();
    fill(255, 0, 150, 100);
    ellipse(circles[i].x, circles[i].y, circles[i].r * 2, circles[i].r * 2);
  }
}

function draw() {}
