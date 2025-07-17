// make a list[] of fonts
let fonts = ["Arial", "Verdana", "Tahoma", "Georgia", "Courier New"];

function setup() {
  createCanvas(400, 200); 
  
  // text set-up
  textStyle(BOLDITALIC);
  textAlign(CENTER, CENTER);
  textSize(32);
  fill("lemonchiffon"); // text color
}

function draw() {
  background("darkblue");

  // framecount is very fast so we reduce it by 0.1
  let slowTime = frameCount * 0.1;

  // turns the counter into a 1-2-3-4-5 loop
  let counter = slowTime % 5;

  // we don't want decimals. int() cuts them out
  let i = int(counter);

  // choose font number 'i'
  textFont(fonts[i]);

  // display text in the center
  text("fonts change too", width / 2, height / 2);
}
