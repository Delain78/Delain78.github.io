let oscillators = [];

function setup() {
  createCanvas(640, 240);
  
  let lax = 200;
  let avx = 0.02;
  let avy = -0.01;

  //left and down
  for (let i = 0; i < 17; i++) {
    oscillators.push(new Oscillator(lax, 200 - i *25, avx, avy));
  }
  
   //left and up
  for (let i = 0; i < 17; i++) {
    oscillators.push(new Oscillator(lax, 200 - i *25, avx, -avy));
  }
  
    //right and down
  for (let i = 0; i < 17; i++) {
    oscillators.push(new Oscillator(-lax, 200 - i *25, -avx, avy));
  }
  
   //right and up
  for (let i = 0; i < 17; i++) {
    oscillators.push(new Oscillator(-lax, 200 - i *25, -avx, -avy));
  }
  
  
  
}

function draw() {
  background(255);

  for (let o of oscillators) {
    o.show();
    o.oscillate();
  }
}
