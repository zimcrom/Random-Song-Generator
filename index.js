let selectionsEl = document.getElementById("selections");
let startBtn = document.getElementById("start");

// Get info for random numbers
console.log("There are " + song.length + " songs");
console.log("There are " + style.length + " styles");

function generateNew() {
    // Generate random numbers
    let randomSongNumber = Math.floor(Math.random() * 41);
    let randomStyleNumber = Math.floor(Math.random() * 27);

    // Grab random song and style from array
    let getSong = song[randomSongNumber];
    let getStyle = style[randomStyleNumber];

    // Display on page
    document.getElementById('songDisplay').innerHTML = getSong;
    document.getElementById('styleDisplay').innerHTML = getStyle;
};

// Generate new selection
startBtn.onclick = generateNew;