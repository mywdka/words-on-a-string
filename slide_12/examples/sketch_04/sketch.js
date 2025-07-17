let parsedLines = [];
let rawText = "";
let chapters = [];
let currentChapterIndex = 0;
let nextButton; // reference to the button

function preload() {
  rawText = loadStrings("text.txt");
}

function setup() {
  noCanvas();
  parseText(rawText);
  createNextButton();
  renderNextChapter(); // render the first chapter
}

function parseText(lines) {
  let chapterIndex = -1;
  let tempChapters = {};

  for (let line of lines) {
    if (line.startsWith("-block:")) {
      chapterIndex++;
      tempChapters[chapterIndex] = {
        title: line.replace("-block:", "").trim(),
        texts: [],
      };
    } else {
      if (chapterIndex >= 0) {
        tempChapters[chapterIndex].texts.push(line);
      }
    }
  }

  chapters = Object.values(tempChapters);
}

function createNextButton() {
  nextButton = createButton("NEXT BLOCK").style(
    "margin-top: 10px; background-color: crimson; color: white; font-family: monospace; font-weight: bold; cursor:pointer"
  );
  nextButton.mousePressed(renderNextChapter);
}

function renderNextChapter() {
  if (currentChapterIndex >= chapters.length) return;

  const container = select("#content");
  const chapter = chapters[currentChapterIndex];

  const chapterDiv = createDiv().addClass("chapter");
  const titleDiv = createDiv(chapter.title).addClass("title");
  const textDiv = createDiv(chapter.texts.join("<br>")).addClass("text");

  chapterDiv.child(titleDiv);
  chapterDiv.child(textDiv);
  container.child(chapterDiv);

  currentChapterIndex++;

  // remove button if we've reached the last chapter
  if (currentChapterIndex >= chapters.length) {
    nextButton.remove();
  }
}
