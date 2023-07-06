//http://www.red3d.com/cwr/steer/

let pursuer;
let target; 

function setup() {
  createCanvas(400, 400);
  pursuer = new Vehicle (100,100);
  target = new Target (200,100);
}

function draw() {
  background(0);
  
  let steering = pursuer.evade(target);
  pursuer.applyForce(steering);
  
  pursuer.edges();
  pursuer.update();
  pursuer.show();
  
  target.edges();
  target.update();
  target.show();
}
