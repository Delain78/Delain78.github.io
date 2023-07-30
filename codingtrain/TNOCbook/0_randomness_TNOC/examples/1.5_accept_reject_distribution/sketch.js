let randomCounts = []; // keeps track how often a number is picked

function setup() {
  createCanvas(600, 240);
  for(let i = 0; i <20; i++){
    randomCounts[i]= 0;
  }
}

function draw() {
  background(255);
  
  // pick a random nummber and increase the count
  
  let index = int(acceptReject() * randomCounts.length);
  randomCounts[index]++
  
  stroke(0);
  fill(175);
  w = width/randomCounts.length;
  
   //graphing the result
  for (let x = 0; x < randomCounts.length; x++){
    rect(x*w, height - randomCounts[x], w-1, randomCounts[x]);
  }
}

function acceptReject(){
  while (true){ // do this forever until you find a qualifing value
    let r1 = random(1) //pick random value
    let probability = r1; // assign the probability
    let r2 = random(1) //pick second random value
    if( r2 < probability){
      return r1;
    }
  }
}