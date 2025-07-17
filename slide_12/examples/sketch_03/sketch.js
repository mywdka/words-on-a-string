let dogBreeds = [];
let selectedBreed = "";

let textPos;

function preload() {
  // Load the JSON file with dog breeds
  loadJSON(
    "https://raw.githubusercontent.com/dariusk/corpora/refs/heads/master/data/animals/dogs.json",
    gotData
  );
}

function gotData(data) {
  dogBreeds = data.dogs;
}

function setup() {
  createCanvas(400, 200);
  textPos = [width / 2, height / 2, width - 50, height - 50];

  textFont('Georgia');
  stroke(0)
  strokeWeight(2)
  textStyle(BOLD);
  textSize(24);
  textAlign(CENTER, CENTER);
  rectMode(CENTER);
  textWrap(WORD);

  createWallpaper();
  print(...textPos);

  text("Type a letter to get a dog breed!", ...textPos);
}

function keyPressed() {
  let letter = key.toLowerCase();
  if (letter.match(/[a-z]/)) {
    let matches = dogBreeds.filter((b) => b.toLowerCase().startsWith(letter));
    if (matches.length > 0) {
      selectedBreed = random(matches);
    } else {
      selectedBreed = "my best friend"; // if user presses 'q', 'u', 'x', or 'z'
    }
    
    createWallpaper()
    text(`🐕 Good boy, ${selectedBreed}, good boy 🐕`, ...textPos);
  }
}

function createWallpaper() {
  clear()
  background("darkgreen");

  for (x = 0; x <= width; x += 50) {
    for (y = 0; y <= height; y += 50) {
      text("🦴", x, y);
    }
  }
  fill(237, 20, 61, 255 / 1.5);
  rect(...textPos);
  fill("white");
}
