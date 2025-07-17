// the full message to display, split into individual words
let message = "click and the text changes";

// split the message into an array of words
let words = message.split(" ");

// index of the current word to show
let i = 0;

// variables for interpolating the background color
let lerpIndex = 0; // tracks progress from 0 to 1

function setup() {
  createCanvas(400, 200);
  // make the cursor a pointer over the canvas
  select(".p5Canvas").style("cursor:pointer");

  // center text and set font/style
  textAlign(CENTER, CENTER);
  textFont("Garamond");
  textStyle(BOLD);
  textSize(96);
  stroke(0);
  strokeWeight(4);
  fill("white");

  // define start and end colors for background
  fromCol = color(0, 191, 255); // deep sky blue
  toCol = color(75, 0, 130); // indigo
}

function draw() {
  // calculate the current background color based on lerpIndex
  let lightLvl = lerpColor(fromCol, toCol, lerpIndex);
  background(lightLvl);

  // draw the current word in the middle of the canvas
  text(words[i], width / 2, height / 2);
}

function mouseClicked() {
  // advance to the next word, wrapping around at the end
  i = (i + 1) % words.length;

  // advance the color interpolation by one step
  lerpIndex += 1 / words.length;
  // wrap lerpIndex back to 0 when it reaches 1
  if (lerpIndex >= 1) {
    lerpIndex = 0;
  }
}
