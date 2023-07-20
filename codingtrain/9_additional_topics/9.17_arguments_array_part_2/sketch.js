let particles = [];

function setup() {
  createCanvas(200, 200);
  particles[0] = new Particle();
  particles[1] = new Particle(150, 50);
  let v = createVector(150, 100);
  particles[2] = new Particle(v);
  particles[3] = new Particle("100,150");
}

function draw() {
  background(0);
  for (let i = 0; i < particles.length; i++) {
    particles[i].show();
  }
}

function Particle(a, b) {
  
  // constructor function
  if (a instanceof p5.Vector) {
    // covers particle[2]
    this.x = a.x;
    this.y = a.y;
  } else if (typeof a === "string") {
    // covers particle[3]
    let nums = a.split(","); // split the string up at the , in two strings
    console.log(nums);
    this.x = Number(nums[0]); // convert "100" to 100
    this.y = Number(nums[1]);
    console.log(this.x, this.y);
  } else {
    this.x = a || 100; //covers particles [0] and particle [1]
    this.y = b || 100;
  }

  //show functon
  this.show = function () {
    fill(255);
    ellipse(this.x, this.y, 16, 16);
  };
}
