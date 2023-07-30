//http://www.red3d.com/cwr/steer/

let pursuer;
let target1;
let target2

function setup() {
  createCanvas(400, 400);
  pursuer = new Vehicle (100,100);
  target1 = new Target (200,100);
  target2 = new Target (100,300);
}

function draw() {
  background(0);
  
  let steering1 = pursuer.evade(target1);
  let steering2 = pursuer.pursue(target2);
  pursuer.applyForce(steering1);
  pursuer.applyForce(steering2);
  
  pursuer.edges();
  pursuer.update();
  pursuer.show();
  
  target1.edges();
  target1.update();
  target1.show();
  
  target2.edges();
  target2.update();
  target2.show();
}
