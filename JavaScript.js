//Display in console
deathMsg="WARNING: YOU HAVE BEEN DETECTED ATTEMPTING TO ACCESS THE FILES ON THIS ARCHIVE WITHOUT OFFICIAL APRROVAL. MTF TEAM DEPLOYED. SAY YOUR LAST WORDS.";

console.log(deathMsg);

// Reavel Archive if function "Reveal" is triggered by onClick
function Reveal() {
    alert('Verification Success');

    let rev = document.getElementById("Reveal Archive");
    rev.style.display = "block";
}

// Rick Roll Troll
function rickRolledBoi() {
    let rickRolled = document.getElementById("getRickRolled");
    rickRolled.play();
}

function stopRickRoll() {
    let rickRolled = document.getElementById("getRickRolled");
    rickRolled.pause();
}

//When hovering over a button for the table of contents
function playTableHoverSound() {
    let tableSoundPlay = document.getElementById("tableHoverSoundSrc");
    tableSoundPlay.play();
}

// --- Music ---

//Sweden

function playSweden() {
    let swedenPlay = document.getElementById("Sweden");
    let megalovaniaPause = document.getElementById("Megalovania");
    let crabRavePause = document.getElementById("CrabRave");
    megalovaniaPause.pause();
    crabRavePause.pause();
    
    swedenPlay.play();
}
function pauseSweden() {
    let swedenPause = document.getElementById("Sweden");
    swedenPause.pause();
}
function restartSweden() {
    let audio = document.getElementById("Sweden");
    if (audio.paused) {
        audio.currentTime = 0
        audio.play();
    }else{
        audio.currentTime = 0
    }
}

//Crab Rave

function playCrabRave() {
    let crabRavePlay = document.getElementById("CrabRave");
    let swedenPause = document.getElementById("Sweden");
    let megalovaniaPause = document.getElementById("Megalovania");
    megalovaniaPause.pause();
    swedenPause.pause();

    crabRavePlay.play();
}
function pauseCrabRave() {
    let crabRavePause = document.getElementById("CrabRave");
    crabRavePause.pause();
}
function restartCrabRave() {
    let audio = document.getElementById("CrabRave");
    if (audio.paused) {
        audio.currentTime = 0
        audio.play();
    }else{
        audio.currentTime = 0
    }
}

//Megalovania

function playMegalovania() {
    let megalovaniaPlay = document.getElementById("Megalovania");
    let crabRavePause = document.getElementById("CrabRave");
    let swedenPause = document.getElementById("Sweden");
    swedenPause.pause();
    crabRavePause.pause();

    megalovaniaPlay.play();
}
function pauseMegalovania() {
    let megalovaniaPause = document.getElementById("Megalovania");
    megalovaniaPause.pause();
}
function restartMegalovania() {
    let audio = document.getElementById("Megalovania");
    if (audio.paused) {
        audio.currentTime = 0
        audio.play();
    }else{
        audio.currentTime = 0
    }
}
















function spamYee() {
console.log('YEEEEEEEEEEEEEEEEEEEEEE');
// <button onclick="spamYee()">Click Me to Spam YEEEEEEEEE in Console</button>
}


// https://youtu.be/dQw4w9WgXcQ


