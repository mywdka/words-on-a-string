let slideValue = 400;

function setup() {
  createCanvas(400, 200);
  fill("lemonchiffon");
  textFont("serif");
  textStyle(BOLDITALIC)
  textAlign(CENTER, CENTER);
  textSize(64);
}

function draw() {
  background("darkblue");
  text("sliding in", slideValue + width/2, height / 2);
  
  slideValue/=1.1
  print(slideValue);
  
  if (slideValue < 0.1){
    slideValue = 400
  }
}
