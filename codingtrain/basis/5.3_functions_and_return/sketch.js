function setup() {
  let km = milesToKm(26,3);
  print(km);
  let km2 = milesToKm (100);
  print(km2);
}

function milesToKm(miles){
  let km = miles *1.6;
  return km;
}


function draw() {
  background(220);
}