let txt_one = "scrolling ";
let txt_two = "sideways ";
let speed = 2;

let x1 = 0, x2 = 0;

function setup() {
  createCanvas(400, 200);
  textFont("serif");
  textStyle(BOLDITALIC);
  textSize(64);
  fill("lemonchiffon");
  textAlign(LEFT, CENTER);

  // measures text widths once 
  // (how long is the word in pixels)
  w1 = textWidth(txt_one);
  w2 = textWidth(txt_two);

  // finds how many words fit in one line of canvas
  // then add one more
  count1 = ceil(width / w1) + 1;
  count2 = ceil(width / w2) + 1;
}

function draw() {
  background("darkblue");

  // 'scrolling' x position
  x1 = x1 - 2 // subtracts 2 every frame
  x1 = x1 % w1; // how close is x1 to w1?
  if (x1 > 0) x1 -= w1; // if x1 crosses w1 lets reset

  // 'sideways' x position
  x2 = (x2 + 2) % w2;
  if (x2 > 0) x2 -= w2;

  // draws enough copies to fill the width
  // uses a loop (i is 0, max i is count1, i increases by 1)
  for (let i = 0; i < count1; i++) {
    text(txt_one, x1 + i * w1, height * 3/8);
  }
  for (let i = 0; i < count2; i++) {
    text(txt_two, x2 + i * w2, height * 6/8);
  }
}
