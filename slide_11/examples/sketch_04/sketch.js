// the message to display, broken into individual characters later
let message = "move me";

// controls the color interpolation (0 to 1)
let index = 0;

// width of the whole message in pixels
let messageWidth;

function setup() {
  createCanvas(400, 200);

  // set up text appearance
  textAlign(CENTER, CENTER);
  textFont("Courier New");
  textStyle(BOLD);
  textSize(64);
  stroke(0);
  strokeWeight(4);
  fill("white");

  // measure the width of the full message
  messageWidth = textWidth(message);

  // define start and end colors for background
  from = color(0, 191, 255); // deep sky blue
  to   = color(75, 0, 130);  // indigo

  // draw initial background
  background(from);
}

function draw() {
  // update background color based on mouseX position
  index = mouseX / width;
  let light = lerpColor(from, to, index);
  background(light);

  // draw each character with a vertical sine-wave motion
  // for each letter in the message...
  for (let i = 0; i < message.length; i++) {
    // ...width of this single character
    let letterWidth = textWidth(message[i]);

    // ...create sine value based on character index and mouseX
    let y = sin(i * 0.75 + mouseX / 25);
    
    // map sine output (-1..1) to vertical range (50..height-50)
    y = map(y, -1, 1, 50, height - 50);

    // x position: spread characters out and shift right by a third of the message width
    let x = i * letterWidth + messageWidth / 3;

    // draw the character at its computed (x, y)
    text(message[i], x, y);
  }

  // draw a doublesided arrow at the mouse position
  text("↔", mouseX, mouseY);
}
