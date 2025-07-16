let word = "oscillate";

function setup() {
  createCanvas(400, 200);
  textStyle(BOLDITALIC);
  textFont("Courier New");
  textSize(64);
  textAlign(CENTER, CENTER);
  fill("lemonchiffon");

  wordWidth = textWidth(word);
}

function draw() {
  background("darkblue");

  for (i = 0; i < word.length; i++) {
    let letterWidth = textWidth(word[i]);

    // makes a slow (0.1) sine and adds one unit of index
    let y = sin(frameCount * 0.1 + i);
    // updates y and maps it to canvas' height
    y = map(y, -1, 1, 50, height-50);

    translate(letterWidth, 0);
    text(word[i], 0, y);
  }
}
