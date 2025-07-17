// full message string to scroll
let message = "scroll";

// tracks progress of color interpolation (0 to 1)
let index = 0;

// speed and direction of color interpolation change
let direction = 0.01;

// horizontal offset for scrolling the text
let scrollLevel = 0;

function setup() {
  createCanvas(400, 200);

  // set up text appearance
  textAlign(CENTER, CENTER);
  textFont("Garamond");
  textStyle(BOLD);
  textSize(96);
  stroke(0);
  strokeWeight(4);
  fill("white");

  // define start and end colors for background
  from = color(0, 191, 255); // deep sky blue
  to = color(75, 0, 130); // indigo

}

function draw() {
  // interpolate background color between 'from' and 'to' based on index
  light = lerpColor(from, to, index);
  background(light);

  // draw the scrolling text, offset by scrollLevel
  text(message, width / 2 - scrollLevel, height / 2);
}

function mouseWheel() {
  // update color interpolation index
  index += direction;

  // if index goes beyond [0,1], reverse direction
  if (index > 1 || index < 0) {
    direction = -direction;
  }

  // advance the scroll offset
  scrollLevel += 3;

  // wrap text around once it scrolls off the right edge
  if (scrollLevel > width) {
    scrollLevel = -width;
  }
}
