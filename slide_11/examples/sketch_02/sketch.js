let message = "click and the text changes";
let words = message.split(" ");
let i = 0;

let lerpIndex = 0,
  lerpCounter = 0;

function setup() {
  createCanvas(400, 200);
  select(".p5Canvas").style("cursor:pointer");

  textAlign(CENTER, CENTER);
  textFont("Garamond");
  textStyle(BOLD);
  textSize(96);
  stroke(0);
  strokeWeight(4);
  fill("white");

  fromCol = color(0, 191, 255);
  toCol = color(75, 0, 130);
}

function draw() {
  lightLvl = lerpColor(fromCol, toCol, lerpIndex);
  background(lightLvl);

  text(words[i], width / 2, height / 2);

}

function mouseClicked() {
  i++;
  i = i % words.length;

  lerpIndex += 1 / words.length;
  if (lerpIndex >= 1) {
    lerpIndex = 0;
  }
}