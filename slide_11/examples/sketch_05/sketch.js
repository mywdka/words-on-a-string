let txt = "";
let message = "too big a sky";
let alt_message = "too small a window";

let index = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);

  textAlign(CENTER, CENTER);
  textFont("Courier New");
  textStyle(BOLD);
  textSize(32);
  stroke(0);
  strokeWeight(3);
  fill("white");

  from = color(0, 191, 255);
  to = color(75, 0, 130);
}

function draw() {
  index = map(windowWidth, 1280, 500, 1, 0);
  index = constrain(index, 0, 1);
  light = lerpColor(from, to, index);
  background(light);
  text(txt, width / 2, height / 2);

  if (windowWidth > 800) {
    txt = message;
  } else {
    txt = alt_message;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
