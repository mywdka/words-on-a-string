// array to hold each block's data
let blocks = [];

// which block we are showing now
let currentIndex = 0;

// button to go to next block
let nextButton;

function preload() {
  // load the text file as an array of lines
  rawLines = loadStrings("text.txt");
}

function setup() {
  noCanvas(); // we don’t need a drawing canvas
  parseText(rawLines); // turn lines into blocks
  createNextButton(); // add the "NEXT BLOCK" button
  showBlock(); // show the first block
}

// turn the raw lines into a simple blocks array
function parseText(lines) {
  let block = null;

  for (let line of lines) {
    // loop through each line

    if (line.startsWith("-block:")) {
      // start a new block when we see "-block:"
      block = {
        title: line.replace("-block:", "").trim(), // and remove "-block:" from the title
        texts: [],
      };
      blocks.push(block);
    } else if (block) {
      // add normal lines to the current block
      block.texts.push(line);
    }
  }
}

// make the button and wire it to showBlock()
function createNextButton() {
  nextButton = createButton("NEXT BLOCK");
  nextButton.mousePressed(showBlock);
}

// show the next block on the page
function showBlock() {
  if (currentIndex >= blocks.length) return;

  let container = select("#content");
  let chap = blocks[currentIndex];

  // create a div for this block
  let box = createDiv().addClass("block");

  // add the title
  createDiv(chap.title).addClass("title").parent(box);

  // add the body text, using <br> for line breaks
  createDiv(chap.texts.join("<br>")).addClass("text").parent(box);

  container.child(box);
  currentIndex++;

  // if that was the last block, remove the button
  if (currentIndex >= blocks.length) {
    nextButton.remove();
  }
}
