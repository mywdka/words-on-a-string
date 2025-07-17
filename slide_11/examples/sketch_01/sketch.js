// how blurry the circle is
let blurLevel = 10;

// how far we’ve interpolated from start color to end color (0–1)
let transitionProgress = 0;

// current y‑position of the big circle
let circleY;

// starting and ending background colors
let startColor, endColor;

function setup() {
  createCanvas(400, 200);

  // set up text appearance
  textAlign(CENTER, CENTER);
  textFont("Garamond");
  textSize(96);
  textStyle(BOLD);
  stroke(0);
  strokeWeight(4);
  fill("white");

  // define colors
  startColor = color(0, 191, 255); // deep sky blue
  endColor = color(75, 0, 130); // indigo

  // initialize circle just above center
  circleY = height / 2 - height;

  // draw initial frame
  background(startColor);
  text("hover", width / 2, height / 2);
}

function draw() {
  // check if mouse is over the canvas
  if (mouseX > 0 && mouseX <= width && mouseY > 0 && mouseY <= height) {

    // gradually increase the blur (up to 75 max)
    blurLevel = min(blurLevel * 1.025, 75);

    // gradually move circle down (up to bottom edge at 200px)
    circleY = min(circleY + 2, height);

    // gradually advance the background color transition (up to 1)
    transitionProgress = min(transitionProgress + 0.005, 1);
  }

  // compute the interpolated background color
  let bg = lerpColor(startColor, endColor, transitionProgress);
  background(bg);

  // draw the big blurred circle
  push();
  noStroke();
  fill("darkorange");
  circle(width / 2, circleY, height);
  filter(BLUR, blurLevel);
  pop();

  // draw the static text on top
  text("hover", width / 2, height / 2);
}
