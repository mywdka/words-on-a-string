function setup() {
  createCanvas(400, 200);
  textFont("Noto Serif");
  textStyle(ITALIC)
  textSize(64);
  textAlign(CENTER, CENTER);
  fill("lemonchiffon");
}

function draw() {
  background("darkblue");
  let weight = sin(frameCount * 0.01);
  weight = map(weight, -1, 1, 100, 900);
  
  textWeight(weight);
  text("breath", width / 2, height / 2);
}
