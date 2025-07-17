let word = "";

function setup() {
  createCanvas(400, 200);
  textAlign(CENTER, CENTER);
  textFont("Georgia");
  textSize(32);
  textWrap(WORD);
  textStyle(BOLD);
  rectMode(CENTER);
  fill("white");
  stroke(0);
  strokeWeight(2)

  // Rotterdam: lat=51.9225, lon=4.4792
  let url =
    "https://api.open-meteo.com/v1/forecast?latitude=51.9225&longitude=4.4792&current=weather_code";
  loadJSON(url, gotWeather);
}

function gotWeather(data) {
  let code = data.current.weather_code;
  // open-oeteo weather codes: simplified mapping
  if (code == 0) {
    word = "bright and warm";
  } else {
    word = "not bright and not warm";
  }
}

function draw() {
  background('darkgreen');
  text(
    "today, here, the world is " + word + " and I am alright",
    width / 2,
    height / 2,
    width - 25,
    height - 25
  );
}
