function setup() {
  createCanvas(600, 200);
  textSize(20);
  textFont("Courier New");
}

function draw() {
  background("skyblue");

  let word = "waves do not die they never die no they do not";
  let midHeight = height / 2;
  let time = frameCount;
  let speed = 0.05;
  let amplitude = 50;
  let frequency = 0.1;

  for (let idx = 0; idx < word.length; idx++) {
    let y = midHeight + sin(time * speed + idx * frequency) * amplitude;

    let letterWidth = textWidth(word[idx]);
    let segmentWidth = textWidth(word.substring(0, idx));

    let x = segmentWidth + letterWidth;

    text(word[idx], x, y);
  }
}
