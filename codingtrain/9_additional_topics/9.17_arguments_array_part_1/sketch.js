// what in between the sum brackets () is called the arguments array

function setup() {
  createCanvas(200, 200);
}

function draw() {
  background(220);
}

function sum(arr) {
  
  // when you get an array use this
  if (arr instanceof Array) {
    let val = 0;
    for (let i = 0; i < arr.length; i++) {
      val += arr[i];
    }
    return val;
  }

  // if you don't get array use this
  let val = 0;
  for (let i = 0; i < arguments.length; i++) {
    val += arguments[i];
  }
  return val;
}

console.log(sum([5, 3, 8]));
