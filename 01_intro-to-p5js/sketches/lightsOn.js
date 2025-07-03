let msg = "are the lights on or off?";

function setup() {
  createCanvas(400, 400);
  textAlign(CENTER,CENTER);
  textSize(64);
  textFont("Merriweather");
  stroke(100);
}

function draw() {
  if (mouseIsPressed) {
    msg = "lights on";
    background("white");
    fill("yellow");
    circle(200, 200, 200);
    filter(BLUR,10);
  } else {
    msg = "lights off";
    background("black");
  }

  fill("black");
  text(msg, 200, 200);
}
