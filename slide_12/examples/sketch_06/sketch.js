let commonWords = [];

function preload() {
  loadJSON(
    "https://raw.githubusercontent.com/dariusk/corpora/master/data/words/common.json",
    gotWords
  );
}

function gotWords(data) {
  commonWords = data.commonWords;
}

function setup() {
  createCanvas(400, 200);
  textAlign(CENTER, CENTER);
  textSize(64);
  textStyle(BOLD);
  textFont("Garamond");
  fill("crimson");
  stroke(0);
  strokeWeight(4);

}

function draw() {
  background("darkgreen");

  let x = floor(map(mouseX, 0, width, 0, commonWords.length));
  let y = floor(map(mouseY, 0, height, 0, commonWords.length));
  let word = commonWords[(x + y) % commonWords.length];

  text(word, width / 2, height / 2);
}
