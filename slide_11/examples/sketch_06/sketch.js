// Hand Pose Detection with ml5.js
// !! note that you need to import ML5js script in your html file. 
// Check the tutorial by Daniel Shiffman 👇👇
// https://thecodingtrain.com/tracks/ml5js-beginners-guide/ml5/hand-pose

let video;
let handPose;
let hands = [];
let f1, f2; // finger 1 and finger 2

function preload() {
  // Initialize HandPose model with flipped video input
  handPose = ml5.handPose({ flipped: true });
}

function gotHands(results) {
  hands = results;
  if (hands[0]) {
    f1 = hands[0].keypoints[8];
    f2 = hands[0].keypoints[4];
  }
}

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO, { flipped: true });
  video.hide();

  handPose.detectStart(video, gotHands);

  textAlign(CENTER, CENTER);
  fill("white");
  textStyle(BOLDITALIC);
}

function draw() {
  background(0)
  tint(255,128);
  image(video, 0, 0);

  if (hands[0]) {
    posX = (f1.x + f2.x) / 2;
    posY = (f1.y + f2.y) / 2;
    translate(posX, posY);

    angle = atan2(f2.y - f1.y, f2.x - f1.x) - PI;
    rotate(angle);

    s = dist(f1.x, f1.y, f2.x, f2.y);
    s = map(s, 0, width, 0, 10);
    scale(s);

    text("i am between", 0, 0);
  }
}
