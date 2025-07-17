let words = [" ", "so ", "what ", "is ", "the ", "content ", "of ", "the ", "class", "? ", "like ", "i ", "mean ", "more ", "in ", "detail", "?", "?", "!", "?", " 🤪 "];
let currentIndex = 0;

function setup() {
  createCanvas(1000, 500).class('p5'); // create a canvas with class=p5 (to select it later)

  // text variables
  textSize(64);
  textAlign(CENTER, CENTER);
  textFont('Hershey'); // you can use this font because it's loaded in style.css
  rectMode(CENTER);
  fill('white')
}

function draw() {
  background('red');

  // this variable contains the text content from zero to "currentIndex"
  let textToShow = words.slice(0, currentIndex + 1).join("");

  // display the text (text, x coordinate, y coordinate, text-box width)
  text(textToShow, width/2, height/2, 800);

  // if we reach the end of the sentence, display the link <a>
  if (currentIndex >= words.length){
    select('.p5').hide()
    createA('../slide_07/', 'i dont know lets find out!').position(0, windowHeight/2);
    noLoop(); // stop the sketch from running
  }
}

// runs only when mouse is pressed
function mousePressed() {
  currentIndex++; // increases index that we use to display sentence
}
