let trailText =
  "i want to move around, i want to claim all the space i can as a sentence, as a stream of words being echoed in this bright window";
let history = [];
const spacingFactor = 4;
const maxStep = 20;
const noiseIncrement = 0.01;
const steerStrength = 0.1; // how strongly to steer back
const marginRatio = 0.15; // how far from edge before steering kicks in

let xNoise = 0;
let yNoise = 1000;
let font;

function preload() {
  font = loadFont("../fonts/Hershey-Noailles-Times-Triplex-Bold.otf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(64);
  textAlign(CENTER, CENTER);
  textFont(font);
  fill(0);

  let center = createVector(width / 2, height + 100);
  let needed = trailText.length * spacingFactor;
  for (let i = 0; i < needed; i++) {
    history.push(center.copy());
  }
}

function draw() {
  background(255);
  drawLetters();
  updateHead();
  push();
  fill("white");
  textSize(128);
  stroke(0);
  text("KICK-OFF", width / 2, height / 2 - 225);
  text("Web Text Animation", width / 2, height / 2 - 100);
  rectMode(CENTER);
  fill(255, 200);
  rect(width / 2, height / 2 + 150, 800, 300, 15, 15);
  textSize(32);
  fill("black");
  noStroke();
  textAlign();
  text(
    "the first class introduces you to P5js — both the language and the environment. We will go through simple but fundamental notions of coding, especially in the context of text and animation.",
    width / 2,
    height / 2 + 150,
    800,
    300
  );
  pop();
}

function drawLetters() {
  for (let i = 0; i < trailText.length; i++) {
    let idx = history.length - 1 - i * spacingFactor;
    let pos = history[max(idx, 0)];
    noStroke;
    text(trailText.charAt(i), pos.x, pos.y);
  }
}

function updateHead() {
  let dx = map(noise(xNoise), 0, 1, -maxStep, maxStep);
  let dy = map(noise(yNoise), 0, 1, -maxStep, maxStep);
  xNoise += noiseIncrement;
  yNoise += noiseIncrement;

  let prev = history[history.length - 1];
  let steer = createVector(0, 0);

  // define inner box
  let minX = width * marginRatio;
  let maxX = width * (1 - marginRatio);
  let minY = height * marginRatio;
  let maxY = height * (1 - marginRatio);

  // if too far right, pushes left; too far left, pushes right
  if (prev.x > maxX) steer.x = -steerStrength * (prev.x - maxX);
  else if (prev.x < minX) steer.x = steerStrength * (minX - prev.x);

  // same for vertical
  if (prev.y > maxY) steer.y = -steerStrength * (prev.y - maxY);
  else if (prev.y < minY) steer.y = steerStrength * (minY - prev.y);

  // combines noise + steering
  let next = createVector(prev.x + dx + steer.x, prev.y + dy + steer.y);

  history.push(next);
  if (history.length > trailText.length * spacingFactor) {
    history.shift();
  }
}

function mousePressed() {
  window.location.href = "../slide_11/";
}
