let p;
let v;

//constructor function
function Particle(){
  this.x = 100;
  this.y = 99;
  //this.show = function(){
   // point(this.x,this.y)
 //}
}

//added a prototype function to the constructor function Particle
Particle.prototype.show = function (){
  point(this.x,this.y)
}

// added a new function to the p5.Vector.protype library
p5.Vector.prototype.double = function(){
  this.x *= 2;
  this.y *= 2;
  this.z *= 2;
}


function setup() {
  createCanvas(600, 300);
  p = new Particle();
  console.log(p.hasOwnProperty('x'));
  v = createVector(3,4);
  console.log(v)
}

function draw() {
  background(0);
}