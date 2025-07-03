let message = " waterfalling down the canvas wohoooooooo ";
let x = 10;
let y = 10;
let i = 1;

function setup() {
  createCanvas(400, 600);
  background("cornsilk");
}

function draw() {
  textSize(32);
  textAlign(CENTER, CENTER);
  stroke(0); // give text a border
  strokeWeight(2); // make border 2px
  fill("cornsilk");
  text(message[i], x, y);

  x = mouseX;
  y = y + 15;
  i = i + 1;
  
  if (y > height){
    i = 0
    y = 0
  }
}