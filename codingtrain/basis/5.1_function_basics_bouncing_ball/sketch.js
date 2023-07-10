let ball={
  x:300,
  y:200,
  xspeed:4,
  yspeed:-3  
}

function setup() {
  createCanvas(600, 400);
}

function draw() {
 background(0);
  display();
  ballmove();
  bounce();

}

function ballmove(){
    ball.x = ball.x + ball.xspeed;
  ball.y = ball.y + ball.yspeed;
}

function display(){
   
  stroke (255);
  strokeWeight(4);
  fill(255,0,255)
  ellipse (ball.x, ball.y, 24,24)
}

function bounce(){
    if (ball.x >width || ball.x <0){   // || = or
  ball.xspeed = ball.xspeed * -1;
  }
  
  if (ball.y > height || ball.y <0){
  ball.yspeed = ball.yspeed * -1;
  }
}