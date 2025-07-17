// this sketch takes the text
// // and breaks each letter into a small <span> element
// // that changes upon mouse touch

function setup() {
  noCanvas(); // we inject directly into html, no canvas

  const subtitleText = document.getElementById("subtitle").innerText; // gets content of text
  const subtitle = select("#subtitle").html(""); // selects text element from its id and clears it

  // run a loop that goes through each letter and...
  for (let i = 0; i < subtitleText.length; i++) {
    let span = createSpan(subtitleText[i]).parent(subtitle); // creates a <span>

    // if a letter is touched...
    span.mouseOver(function () {
      textHover(this); // triggers this function we just created
    });
  }
}

function textHover(el) {
  el.style("color", "red"); // change color of el(ement) to red
}
