let blurLvl = 10;

let lightLvl = 0;
let lerpIndex = 0;

let path;

function setup() {
  createCanvas(400, 200);
  canvas = select(".p5Canvas");
  canvas.style("cursor:pointer");

  textAlign(CENTER, CENTER);
  textFont("Garamond");
  textSize(96);
  textStyle(BOLD);
  stroke(0);
  strokeWeight(4);
  fill("white");

  hcenter = width / 2;
  vcenter = height / 2;
  path = -vcenter;

  fromCol = color(0, 191, 255);
  toCol = color(75, 0, 130);

  // initialise
  background(fromCol)
  text("hover", hcenter, vcenter);
}

function mouseMoved() {
  if (mouseX > 0 && mouseX <= width && mouseY > 0 && mouseY <= height) {
    blurLvl = blurLvl * 1.025;
    blurLvl = constrain(blurLvl, 0, 75);
    lerpIndex += 0.005;
    lerpIndex = constrain(lerpIndex, 0, 1);
    path += 2;
    path = constrain(path, -vcenter, height);
  }
  lightLvl = lerpColor(fromCol, toCol, lerpIndex);
  background(lightLvl);

  push();
    noStroke();
    fill("darkorange");
    circle(hcenter, path, height);
    filter(BLUR, blurLvl);
  pop();

  text("hover", hcenter, vcenter);
}

