let word = "";

function setup() {
  createCanvas(400, 200);

  // text settings
  textAlign(CENTER, CENTER);
  textFont("Georgia");
  textSize(24);
  textStyle(BOLD);
  rectMode(CENTER);
  textWrap(WORD);
  fill("white");
  stroke(0);
  strokeWeight(2);

  // load current weather code for Rotterdam (lat=51.9225, lon=4.4792)
  const url =
    "https://api.open-meteo.com/v1/forecast?latitude=51.9225&longitude=4.4792&current=weather_code";
  loadJSON(url, gotWeather);
}

function gotWeather(data) {
  // code 0 means clear weather; anything else we treat as not clear
  word =
    data.current.weather_code === 0
      ? "bright and warm and"
      : "not as bright and not as warm but";
}

function draw() {
  background("darkgreen");
  // build and draw the sentence in the middle
  const sentence = "now, here, the world is " + word + " I'll be alright";
  text(sentence, width / 2, height / 2, width-50, height);
}
