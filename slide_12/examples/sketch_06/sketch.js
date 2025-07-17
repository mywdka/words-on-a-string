// array to hold common words from JSON
let commonWords = [];

function preload() {
  // load the list of common words before setup()
  loadJSON(
    "https://raw.githubusercontent.com/dariusk/corpora/master/data/words/common.json",
    (data) => {
      commonWords = data.commonWords;
    }
  );
}

function setup() {
  createCanvas(400, 200);

  // text settings
  textAlign(CENTER, CENTER);
  textSize(64);
  textStyle(BOLD);
  textFont("Garamond");
  fill("crimson");
  stroke(0);
  strokeWeight(4);
}

function draw() {
  background("darkgreen"); // green background

  // pick one word based on mouseX and mouseY
  // map mouseX + mouseY to an index in the array
  let i = map(mouseX + mouseY, 0, width + height, 0, commonWords.length);
  i = round(i) // round up decimals

  // draw the chosen word in the center
  text(commonWords[i], width / 2, height / 2);
}
