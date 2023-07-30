//http://www.red3d.com/cwr/steer/

let vehicle;
let path;

function setup() {
  createCanvas(800, 400);
  vehicle = new Vehicle (100,100);
  vehicle.vel.x = 2;
  path = new Path (0, 200, width, 200)
}

function draw() {
  background(0);
  
  path.end.y  = mouseY;
  
  let force = vehicle.follow(path);
  vehicle.applyForce(force);
  
  vehicle.update();
  vehicle.show();
  vehicle.edges();
  
  path.show();
}
