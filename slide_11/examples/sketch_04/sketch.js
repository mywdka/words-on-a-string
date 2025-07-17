let message = "move me";

let index = 0;
let direction = 0.01;
let scrollLevel = 0;

function setup() {
  createCanvas(400, 200);

  textAlign(CENTER, CENTER);
  textFont("Courier New");
  textStyle(BOLD);
  textSize(64);
  stroke(0);
  strokeWeight(4);
  fill("white");

  messageWidth = textWidth(message);

  from = color(0, 191, 255);
  to = color(75, 0, 130);

  // initialise
  background(from);
  for (i = 0; i < message.length; i++) {
    text(message[i], 0, height / 2);
  }
}

function draw() {
  light = lerpColor(from, to, index);
  background(light);

  for (i = 0; i < message.length; i++) {
    let letterWidth = textWidth(message[i]);

    let y = sin(i * 0.75 + mouseX/25);
    y = map(y, -1, 1, 50, height-50);

    let x = i * letterWidth + messageWidth / 3;

    text(message[i], x, y);

    text("↔", mouseX, mouseY);
    index = mouseX/width
  }
}
