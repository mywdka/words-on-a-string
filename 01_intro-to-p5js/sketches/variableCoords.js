let message = " ————— for every letter a step down ————— ";
let x = 10;
let y = 10;
let i = 1;

function preload() {
  font = loadFont("fonts/Hershey-Noailles-Times-Triplex-Bold.otf");
}

function setup() {
  createCanvas(400, 600);
  background("cornsilk");
}

function draw() {
  textSize(32);
  textAlign(CENTER, CENTER);
  textFont(font);
  stroke(0); // give text a border
  strokeWeight(2); // make border 2px
  fill("cornsilk");
  text(message[i], x, y);

  x = x + 10;
  y = y + 15;
  i = i + 1;
}
