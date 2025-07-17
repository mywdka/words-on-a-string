// !!this sketch is not using p5js, but pure javascript!!

// variables declared at start (we fill them up later)
let lines = [];
let paragraphs = [];

let index;
let letterIndex;

const fallback = { text: "" };

// load text.csv and return its full text corpus
async function loadParagraphs() {
  const resp = await fetch("text.csv");
  const raw = await resp.text();
  return raw.split(/\r?\n/);
}

// for every line create a js object {text: line}
function parseLines(rawLines) {
  return rawLines.map(line => ({ text: line }));
}

// create a <span> element with each letter and its respective highlight color
function updateTextTransition() {
  const fromLine = paragraphs[index] || fallback;
  const toLine = paragraphs[index + 1] || fallback;

  const fromText = fromLine.text;
  const toText = toLine.text;
  const maxLength = Math.max(fromText.length, toText.length);

  let newHTML = "";
  for (let i = 0; i < maxLength; i++) {
    const char = i < letterIndex ? toText[i] || " " : fromText[i] || " ";
    const highlight = i < letterIndex ? (index + 1) % 2 === 0 : index % 2 === 0;
    newHTML += `<span class='letter ${highlight ? "highlight" : ""}'>${char}</span>`;
  }

  document.getElementById("text").innerHTML = newHTML;
}

// assign letter based on scroll amount (using mouse wheel as interactive behaviour)
function scrollByAmount(delta) {
  if (delta <= 0) return; // no scrolling backwards (only positive deltas)

  const increment = 1 + Math.floor(Math.abs(delta) / 40); // 40 is arbitrary! change for slower/faster scroll
  letterIndex += increment;

  const fromText = (paragraphs[index] || fallback).text; // fallbacks are handy if paragraphs[index].text doesn't exist (that happens)
  const toText = (paragraphs[index + 1] || fallback).text;
  const maxLength = Math.max(fromText.length, toText.length);

  if (letterIndex > maxLength) {
    if (index < paragraphs.length - 1) {
      index++;
      letterIndex = 0; // resets letter index and restarts the line
    } else {
      letterIndex = maxLength; // or stops it if we finished the essay
    }
  }

  updateTextTransition(); // runs this everytime you scroll
}

function handleWheel(e) {
  scrollByAmount(e.deltaY); // we just need vertical scroll, which we send to scrollByAmount()
}

// initial function of the script: loads text, parses lines and updates text transition
async function initialize() {
  lines = await loadParagraphs();
  paragraphs = parseLines(lines);

  index = 0;
  letterIndex = 0;

  updateTextTransition();
}

initialize();

// after that we just listen to our mousewheel
document.addEventListener("wheel", handleWheel);