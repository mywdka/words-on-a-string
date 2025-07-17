let message = "and the text changes";

// make a new list with the four words
let words = message.split(" ");

function setup() {
  createCanvas(400, 200);

  // text set-up
  textFont("serif");
  textStyle(BOLDITALIC);
  textAlign(CENTER, CENTER);
  textSize(64);
  fill("lemonchiffon"); // text color
}

function draw() {
  background("darkblue");

  // frameCount is very fast, so we multiply it by 0.05
  let slowTime = frameCount * 0.05;

  // turns the counter into a 1-2-3-4 loop
  let counter = slowTime % 4;

  // we don't want decimals here. int() cuts them out
  let i = int(counter);

  // display the word number 'i' in the center
  text(words[i], width / 2, height / 2);
}
