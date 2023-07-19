let songs = [];
let totalsongs = 10;
let angle = 0;
let loading = true;
let counter = 0;

function preload() {
  //song1 = loadSound('rainbow1.mp3');
  // song2 = loadSound('rainbow2.mp3');
}

// closure function
function rainbowSong(filename) {
  loadSound(filename, soundLoaded);

  function soundLoaded(sound) {
    console.log(filename);
    songs.push(sound);
    //songs[index] = sound;
    //songs[index].play();
    counter++;
    if (counter == totalsongs) {
      loading = false;
    }
  }
}

function setup() {
  createCanvas(300, 300);
  console.log(floor(millis()) + " milliseconds");
  for (let i = 0; i < totalsongs; i++) {
    rainbowSong("rainbow" + i + ".mp3");
  }
}

function draw() {
  background(51);

  stroke(255);
  noFill();
  rect(10, 10, 200, 20);

  noStroke();
  fill(255, 100);
  let w = (200 * counter) / totalsongs;
  rect(10, 10, w, 20);

  if (loading) {
    // loading animation
    translate(width / 2, height / 2);
    rotate(angle);
    strokeWeight(4);
    stroke(255);
    line(0, 0, 100, 0);
    angle += 0.1;
  } else {
    background(0, 255, 0);
  }
}
