let parsedLines = [];
let rawText = "";

function preload() {
  rawText = loadStrings("text.txt");
}

function setup() {
  noCanvas();
  parseText(rawText);
}

function parseText(lines) {
  let chapterIndex = -1;

  for (let line of lines) {
    if (line.startsWith("-title:")) {
      chapterIndex++;
      parsedLines.push({
        type: "title",
        text: line.replace("-title:", "").trim(),
        chapterIndex
      });
    } else {
      parsedLines.push({
        type: "text",
        text: line,
        chapterIndex
      });
    }
  }

  renderText();
}

function renderText() {
  const container = select("#content");
  container.html(""); // clear previous

  let chapters = {};

  for (let entry of parsedLines) {
    const idx = entry.chapterIndex;
    if (!chapters[idx]) {
      chapters[idx] = {
        title: "",
        texts: []
      };
    }

    if (entry.type === "title") {
      chapters[idx].title = entry.text;
    } else if (entry.type === "text") {
      chapters[idx].texts.push(entry.text);
    }
  }

  for (let idx in chapters) {
    const chapter = chapters[idx];
    const chapterDiv = createDiv().addClass("chapter");

    const titleDiv = createDiv(chapter.title).addClass("title");
    const textDiv = createDiv(chapter.texts.join("<br>")).addClass("text");

    chapterDiv.child(titleDiv);
    chapterDiv.child(textDiv);
    container.child(chapterDiv);
  }
}
