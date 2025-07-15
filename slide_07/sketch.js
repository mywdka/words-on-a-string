let p5js;
let pixelation = 10; // level of pixelation (lower number higher detail)

function setup() {
  p5js = createGraphics(windowWidth, windowHeight); // create an offscreen buffer (like a canvas that we dont see)
  p5js.pixelDensity(1); // keep this to one

  // draw text into the offscreen buffer
  p5js.background(255);
  p5js.textFont("Labrada");
  p5js.textSize(256);
  p5js.textWeight(600)
  p5js.textAlign(CENTER, CENTER);
  p5js.fill(0);
  p5js.text("p5*js", p5js.width / 2, p5js.height / 2);

  // grab its pixels
  p5js.loadPixels();

  createCanvas(windowWidth, windowHeight); // create a visible canvas

}

function draw() {
  // clear to white
  background(255);

  // loop over blocks
  for (let x = 0; x < width; x += pixelation) {
    for (let y = 0; y < height; y += pixelation) {
      let i = 4 * (x + y * p5js.width); // we are only interested in one every 4 pixels (r,g,b,a)
      let brightness = p5js.pixels[i];

      fill(brightness, 255);
      circle(x, y, pixelation); // draw circles
    }
  }

  pixelation = int(map(sin(frameCount * 0.02), -1, 1, 10, 50));
}

function mousePressed(){
    window.location.href = '../slide_09/'
}
