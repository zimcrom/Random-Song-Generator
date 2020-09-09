let selectionsEl = document.getElementById("selections");
let startBtn = document.getElementById("start");

// Get info for random numbers
console.log("There are " + song.length + " songs");
console.log("There are " + style.length + " styles");

// Generate random numbers
let randomSongNumber = Math.floor(Math.random() * 42);
let randomStyleNumber = Math.floor(Math.random() * 28);

function generateNew() {
    let getSong = song[randomSongNumber];
    let getStyle = style[randomStyleNumber];

    document.getElementById('songDisplay').innerHTML = getSong;
    document.getElementById('styleDisplay').innerHTML = getStyle;
}

// Generate new selection
startBtn.onclick = generateNew;