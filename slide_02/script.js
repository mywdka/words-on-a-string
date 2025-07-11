function setup() {
  noCanvas();
  const wordsText = document.getElementById('words').innerText;
  const words = select('#words').html('');
  for (let i = 0; i < wordsText.length; i++) {
    createSpan(wordsText[i])
      .parent(words)
      .addClass('sineing')
      .style('display','inline-block')
      .style('animation', `sine ${2 + i/10}s ease-in-out infinite`)
  }
}