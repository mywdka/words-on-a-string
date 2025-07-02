function preload() {
  font = loadFont("fonts/Labrada.ttf");
}

function setup() {
  createCanvas(400, 200);
}

function draw() {
  background("cornsilk");

  textAlign(CENTER, CENTER);
  rectMode(CENTER);
  
  textSize(32);
  textFont(font);
  fill('maroon')
  text("ai could never fail like i fail", 200, 100, 300, 300);
}
