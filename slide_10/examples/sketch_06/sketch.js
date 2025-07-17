let word = "oscillate"; // the word to animate

function setup() {
  createCanvas(400, 200);

  // set up text appearance
  textStyle(BOLDITALIC);
  textFont("Courier New");
  textSize(64);
  textAlign(CENTER, CENTER);
  fill("lemonchiffon");

  // get total width of the word in pixels
  wordWidth = textWidth(word);
}

function draw() {
  background("darkblue");

  // create a loop that goes through each letter and...
  for (i = 0; i < word.length; i++) {
    // ...measures width of current letter
    let letterWidth = textWidth(word[i]);

    // ...assigns vertical position to the letter using a sine wave
    // adds index offset for staggered animation
    let y = sin(frameCount * 0.1 + i);

    // maps sine value (-1...1) to vertical range (50...150)
    y = map(y, -1, 1, 50, height - 50);

    // move to the right for next letter
    translate(letterWidth, 0);
    // draw letter at updated vertical position
    text(word[i], 0, y);
  }
}
