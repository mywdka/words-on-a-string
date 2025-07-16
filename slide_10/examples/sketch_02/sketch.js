let message = "and the text changes";
let words = message.split(' ');

function setup() {
  createCanvas(400, 200);
  textFont("serif");
  textStyle(BOLDITALIC)
  textAlign(CENTER, CENTER);
  textSize(64);
  fill('lemonchiffon')
}

function draw() {
  background('darkblue')
  let slowTime = frameCount*0.05
  let counter = slowTime % 4
  let i = int(counter)
  
  text(words[i],width/2,height/2)
}
