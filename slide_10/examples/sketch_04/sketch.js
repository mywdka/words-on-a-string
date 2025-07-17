let txt_one = "scrolling ";
let txt_two = "sideways ";
let speed = 2;

let x1 = 0,
  x2 = 0;

function setup() {
  createCanvas(400, 200);

  // set up text appearance
  textFont("sans-serif");
  textStyle(BOLDITALIC);
  textSize(64);
  fill("lemonchiffon");
  textAlign(LEFT, CENTER);

  // measure the width of each word in pixels
  w1 = textWidth(txt_one);
  w2 = textWidth(txt_two);

  // calculate how many copies of the word fit across the canvas
  // add one extra to avoid gaps
  count1 = ceil(width / w1) + 1;
  count2 = ceil(width / w2) + 1;
}

function draw() {
  background("darkblue");

  // update x position for 'scrolling' word (moves left)
  x1 = x1 - speed; // move x1 to the left by a few pixels
  x1 = x1 % w1; // wrap x1 around when it passes one word length
  if (x1 > 0) x1 -= w1; // ensure x1 is always negative or zero for clean looping

  // update x position for 'sideways' word (moves right)
  // same code but shorter syntax
  x2 = (x2 + speed) % w2;
  if (x2 > 0) x2 -= w2;

  // draw enough copies of each word to cover the canvas
  for (let n = 0; n < count1; n++) {
    // display n texts with variable x coordinates
    // text('scrolling', <400 to 0> + <1 to 3> * 246, 75)
    text(txt_one, x1 + n * w1, (height * 3) / 8);
  }
  for (let n = 0; n < count2; n++) {
    text(txt_two, x2 + n * w2, (height * 6) / 8);
  }
}
