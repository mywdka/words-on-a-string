function setup() {
    noCanvas()
    const subtitleText = document.getElementById('subtitle').innerText; // what's the text inside <p id="subtitle">?
    const subtitle = select('#subtitle').html(''); // selecting <p id="subtitle">

    for (let i = 0; i < subtitleText.length; i++) {
    let span = createSpan(subtitleText[i]).parent(subtitle); // creating a <span> for each letter


    // font-family exception for "interaction station" and "graphic design"
    if ((i > 31 && i <= 50) || (i > 66 && i < 82)){
        span.style("font-family","'Karrik'");
    }

    // if a letter is touched...
    span.mouseOver(function() {
        textHover(this); // trigger this function
    });

    }
}

function textHover(el) {
    el.style('font-weight', '1000'); // change font weight to 1000
}