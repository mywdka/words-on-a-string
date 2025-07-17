function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // set up text style
  textAlign(CENTER, CENTER);
  textFont("Courier New");
  textStyle(BOLD);
  textSize(32);
  stroke(0); 
  strokeWeight(3);
  fill("white");
  
  // set the two colors we will blend
  fromCol = color(0, 191, 255); // sky blue
  toCol = color(75, 0, 130); // indigo
}

function draw() {
  // find t between 0 and 1 based on window width
  let t = map(windowWidth, 500, 1280, 0, 1);
  t = constrain(t, 0, 1);
  
  // blend the background color
  background(lerpColor(fromCol, toCol, t));

  // pick which message to show
  let msg = windowWidth > 800 ? "too big a sky" : "too small a window";

  // draw the message in the middle
  text(msg, width / 2, height / 2);
}

function windowResized() {
  // update the canvas if the window changes size
  resizeCanvas(windowWidth, windowHeight);
}
