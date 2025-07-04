let myData;
let nameIndex = 0;

// Load the JSON
function preload() {
  myData = loadJSON(
    "https://data.techforpalestine.org/api/v2/killed-in-gaza.json",
    function (result) {
      listLength = result.length; // what's max length of list?
    }
  );
}

function setup() {
  // size of canvas
  createCanvas(400, 400);

  // speed
  frameRate(5);

  // text style
  textAlign(CENTER, CENTER);
  textSize(64);
  textStyle(BOLD);
  textWrap(WORD);
  fill("crimson");
}

function draw() {
  background("darkgreen");

  // display name
  text(myData[nameIndex].name, 0, 0, 400, 400);

  // move to next name
  nameIndex++;

  // reset when reaches end of list
  if (nameIndex >= listLength) {
    nameIndex = 0;
  }
}
