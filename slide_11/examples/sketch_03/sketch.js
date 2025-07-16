let message = "scroll";

let index = 0;
let direction = 0.01;
let scrollLevel = 0;

function setup() {
  createCanvas(400, 200);

  textAlign(CENTER, CENTER);
  textFont("Garamond");
  textStyle(BOLD);
  textSize(96);
  stroke(0);
  strokeWeight(4);
  fill("white");

  from = color(0, 191, 255);
  to = color(75, 0, 130);
}

function draw() {
  light = lerpColor(from, to, index);
  background(light);

  text("scroll", width / 2 - scrollLevel, height / 2);
}

function mouseWheel() {
  index += direction;
  if (index > 1 || index < 0) {
    direction = -direction;
  }

  scrollLevel += 3;

  if (scrollLevel > width) {
    scrollLevel = -width;
  }
}
