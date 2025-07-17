let dogBreeds = [];
let selectedBreed = "";

// we'll use this for the text block's coordinates and position
let textBlock;

function preload() {
  // load list of dog breeds
  loadJSON(
    "https://raw.githubusercontent.com/dariusk/corpora/refs/heads/master/data/animals/dogs.json",
    (data) => (dogBreeds = data.dogs)
  );
}

function setup() {
  createCanvas(400, 200);

  // block's coords and pos
  textBlock = [width / 2, height / 2, width - 50, height - 50];

  // text style
  textFont("Georgia");
  textSize(24);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  strokeWeight(2);
  rectMode(CENTER);

  // draw the background bones and initial message
  drawBackground();
  text("type a letter to get a dog breed!", ...textBlock);
}

function keyPressed() {
  let letter = key.toLowerCase();
  if (letter >= "a" && letter <= "z") {

    // find breeds starting with the letter
    let matches = dogBreeds.filter((b) => b.toLowerCase().startsWith(letter));

    // pick one or default
    selectedBreed = matches.length ? random(matches) : "my best friend";

    // redraw background and show new message
    drawBackground();
    text(`🐕 good boy, ${selectedBreed}, good boy 🐕`, ...textBlock);
  }
}

function drawBackground() {
  background("darkgreen");

  // draw bone pattern
  fill(255);
  for (let x = 0; x <= width; x += 50) {
    for (let y = 0; y <= height; y += 50) {
      text("🦴", x, y);
    }
  }
  
  // semi-transparent box behind text
  fill(237, 20, 61, 150);
  rect(...textBlock);
  fill("white");
}
