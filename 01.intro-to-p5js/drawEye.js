function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("antiquewhite");

  // sclera
  fill("white");
  circle(200, 200, 100);

  // iris
  fill("peachpuff");
  circle(200, 200, 50);

  // pupil
  fill(0);
  circle(200, 200, 15);

  // reflection
  fill(255, 125);
  circle(215, 190, 20);
}
