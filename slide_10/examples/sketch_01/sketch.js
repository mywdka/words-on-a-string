let slideValue = 400;

function setup() {
  createCanvas(400, 200);

  fill("lemonchiffon"); // text color
  textFont("serif");
  textStyle(BOLDITALIC);
  textAlign(CENTER, CENTER);
  textSize(64); // in pixels
}

function draw() {
  background("darkblue");

  // we add the changing variable "slideValue" to the final position of the text
  text("sliding in", slideValue + width / 2, height / 2);

  // divide slideValue by itself * 1.1
  slideValue /= 1.1;

  // you can see the slideValue in the console
  print(slideValue);

  // reset value to 400 if the word reaches the center
  if (slideValue < 0.1) {
    slideValue = 400;
  }
}
