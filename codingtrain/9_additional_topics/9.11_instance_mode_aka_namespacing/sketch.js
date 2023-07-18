// sketch one position 0,0
let sketch1 = function (p) {
  p.x = 100;
  p.y = 100;
  p.hue = p.random(150, 210);

  p.setup = function () {
    let canvas1 = p.createCanvas(200, 200);
    canvas1.position(0, 0); // ---> position (0,0)

    p.colorMode(p.HSB);
    p.createCanvas(200, 200);
    p.background(100, 0, 51);
  };

  p.draw = function () {
    p.fill(p.hue, 100, 100, 0.2);
    p.noStroke();
    p.ellipse(p.x, p.y, 48, 48);

    p.x = p.x + p.random(-10, 10);
    p.y = p.y + p.random(-10, 10);
  };
};

let myp5_1 = new p5(sketch1);

function resetBackground() {
  myp5_1.x = myp5_1.width / 2;
  myp5_1.y = myp5_1.height / 2;
  myp5_1.background(100, 0, 51);
}

setInterval(resetBackground, 3000);

// sketch 2 position 200,0
let sketch2 = function (p) {
  p.x = 100;
  p.y = 100;
  p.hue = p.random(150, 210);

  p.setup = function () {
    let canvas1 = p.createCanvas(200, 200);
    canvas1.position(200, 0); //position 200,0

    p.colorMode(p.HSB);
    p.createCanvas(200, 200);
    p.background(100, 0, 51);
  };

  p.draw = function () {
    p.fill(p.hue, 100, 100, 0.2);
    p.noStroke();
    p.ellipse(p.x, p.y, 48, 48);

    p.x = p.x + p.random(-10, 10);
    p.y = p.y + p.random(-10, 10);
  };
};

let myp5_2 = new p5(sketch2);

function resetBackground2() {
  myp5_2.x = myp5_2.width / 2;
  myp5_2.y = myp5_2.height / 2;
  myp5_2.background(100, 0, 51);
}

setInterval(resetBackground2, 3000);
