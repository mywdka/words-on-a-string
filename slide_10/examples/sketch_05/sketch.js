function setup() {
  createCanvas(400, 200);

  // set up text appearance
  textFont("Noto Serif");
  textStyle(ITALIC);
  textSize(64);
  textAlign(CENTER, CENTER);
  fill("lemonchiffon");
}

function draw() {
  background("darkblue");

  // create a value that goes up and down smoothly
  let weight = sin(frameCount * 0.01); // use a sine wave to change over time

  // change the range from -1..1 to 100..900 (thicker weight)
  weight = map(weight, -1, 1, 100, 900);

  textWeight(weight); // change how thick the text is
  text("breath", width / 2, height / 2); // draw the word in the center
}
