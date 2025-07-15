function setup() {
  noCanvas(); // we inject directly into html, no canvas

  const wordsText = document.getElementById('words').innerText; // get content of text
  const words = select('#words').html(''); // select text object and clear
  
  // run a loop that goes through each letter and...
  for (let i = 0; i < wordsText.length; i++) {
    createSpan(wordsText[i]) // creates a <span>
      .parent(words) // inside the existing <h1>
      .addClass('sineing') // gives it CSS class .sineing
      .style('display','inline-block')
      .style('animation', `sine ${2 + i/10}s ease-in-out infinite`) // assigns it existing sine animation from CSS
  }
}