// Hand Pose Detection with ml5.js
// !! note that you need to import ML5js script in your html file.
// Check the tutorial by Daniel Shiffman 👇👇
// https://thecodingtrain.com/tracks/ml5js-beginners-guide/ml5/hand-pose

let video;
let handPose;
let hands = [];
let f1, f2; // finger points

function preload() {
  // load the handpose model and flip the video
  handPose = ml5.handPose({ flipped: true });
}

function gotHands(results) {
  // save the results array
  hands = results;

  if (hands[0]) {
    // get index fingertip (keypoint 8) and thumb tip (keypoint 4)
    f1 = hands[0].keypoints[8];
    f2 = hands[0].keypoints[4];
  }
}

function setup() {
  createCanvas(640, 480);

  // start video capture flipped
  video = createCapture(VIDEO, { flipped: true });
  video.hide();

  // start detecting hands
  handPose.detectStart(video, gotHands);

  // set text style
  textAlign(CENTER, CENTER);
  fill("white");
  textStyle(BOLDITALIC);
}

function draw() {
  background(0);

  // draw the video lightly
  tint(255, 128);
  image(video, 0, 0);

  if (hands[0]) {

    // find center between the two fingertips
    let posX = (f1.x + f2.x) / 2;
    let posY = (f1.y + f2.y) / 2;
    translate(posX, posY);

    // find angle between fingers and rotate
    let angle = atan2(f2.y - f1.y, f2.x - f1.x) - PI;
    rotate(angle);

    // find distance between finger tips and scale text
    let s = dist(f1.x, f1.y, f2.x, f2.y);
    s = map(s, 0, width, 0, 10);
    scale(s);

    // draw the message in the middle
    text("i am between", 0, 0);
    
  }
}
