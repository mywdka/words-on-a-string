let word = "floaty floaty floaty floaty floaty floaty";
let s = 0;
function setup() {
  createCanvas(400, 400);

  // format text
  textSize(64);
  textAlign(CENTER, CENTER);
  textFont("Garamond");
}

function draw() {
  background("cornsilk");

  for (i = 0; i < word.length; i++) {
    noiseSeed(i);
    let x = width * noise(0.005 * frameCount);
    let y = height * noise(0.005 * frameCount + 10000);
    text(word[i], x, y);
  }
}