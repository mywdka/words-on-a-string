let fonts = ['Arial', 'Verdana', 'Tahoma', 'Georgia', 'Courier New']

function setup() {
  createCanvas(400, 200);

  textStyle(BOLDITALIC)
  textAlign(CENTER, CENTER);
  textSize(32);
  fill('lemonchiffon')
}

function draw() {
  background('darkblue')
  let slowTime = frameCount*0.1
  let counter = slowTime % 5
  let i = int(counter)
  textFont(fonts[i]);
  text('fonts change too',width/2,height/2)
}
