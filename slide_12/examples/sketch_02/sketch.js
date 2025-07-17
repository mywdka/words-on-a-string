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
  createCanvas(400, 200);

  // speed
  frameRate(5);

  // text style
  textAlign(CENTER, CENTER);
  textSize(32);
  textStyle(BOLD);
  textWrap(WORD);
  stroke(0)
  
  fill("crimson");
}

function draw() {
  background("darkgreen");

  // display name

  text(myData[nameIndex].name, width/2, height/2);

  // move to next name
  nameIndex++;

  // reset when reaches end of list
  if (nameIndex >= listLength) {
    nameIndex = 0;
  }

  
  /// 🚧 EXTRA 🚧///
  // calculate loading bar length
  l = map(nameIndex, 0, listLength, 0, width);
  //  display loading bar
  rect(0, height-(height/8), l, 20);
}
