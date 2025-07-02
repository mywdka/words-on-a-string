function setup() {
  createCanvas(400, 400);
  background("peachpuff");

  drawEye();
}

function drawEye() {

  // eyelid
  noStroke();
  fill("salmon");
  circle(200, 200, 75);

  // sclera
  fill("white");
  ellipse(205, 205, 60, 40);

  // pupil
  fill(0);
  circle(205, 205, 30);

  // reflection
  fill("skyblue");
  circle(215, 200, 15);
}
