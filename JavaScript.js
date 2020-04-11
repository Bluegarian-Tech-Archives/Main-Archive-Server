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
    let fallenKingdomPause = document.getElementById("Fallen Kingdom")

    fallenKingdomPause.pause();
    megalovaniaPause.pause();
    crabRavePause.pause();
    
    swedenPlay.play();
}
function pauseSweden() {
    let swedenPause = document.getElementById("Sweden");
    swedenPause.pause();
}
function restartSweden() {
    let megalovaniaPause= document.getElementById("Megalovania");
    let crabRavePause = document.getElementById("CrabRave");
    let audio = document.getElementById("Sweden");
    let fallenKingdomPause = document.getElementById("Fallen Kingdom")
    fallenKingdomPause.pause();
    if (audio.paused) {
        audio.currentTime = 0
        fallenKingdomPause.pause();
        megalovaniaPause.pause();
        crabRavePause.pause();
        audio.play();
    }else{
        fallenKingdomPause.pause();
        megalovaniaPause.pause();
        crabRavePause.pause();
        audio.currentTime = 0
    }
}

//Crab Rave

function playCrabRave() {
    let crabRavePlay = document.getElementById("CrabRave");
    let swedenPause = document.getElementById("Sweden");
    let megalovaniaPause = document.getElementById("Megalovania");
    let fallenKingdomPause = document.getElementById("Fallen Kingdom")

    fallenKingdomPause.pause();
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
    let swedenPause = document.getElementById("Sweden");
    let megalovaniaPause = document.getElementById("Megalovania");
    let fallenKingdomPause = document.getElementById("Fallen Kingdom")
    if (audio.paused) {
        audio.currentTime = 0
        fallenKingdomPause.pause();
        megalovaniaPause.pause();
        swedenPause.pause();
        audio.play();
    }else{
        fallenKingdomPause.pause();
        megalovaniaPause.pause();
        swedenPause.pause();
        audio.currentTime = 0
    }
}

//Megalovania

function playMegalovania() {
    let megalovaniaPlay = document.getElementById("Megalovania");
    let crabRavePause = document.getElementById("CrabRave");
    let swedenPause = document.getElementById("Sweden");
    let fallenKingdomPause = document.getElementById("Fallen Kingdom")

    fallenKingdomPause.pause();
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
    let crabRavePause = document.getElementById("CrabRave");
    let swedenPause = document.getElementById("Sweden");
    let fallenKingdomPause = document.getElementById("Fallen Kingdom")
    if (audio.paused) {
        fallenKingdomPause.pause();
        swedenPause.pause();
        crabRavePause.pause();
        audio.currentTime = 0
        audio.play();
    }else{
        fallenKingdomPause.pause();
        swedenPause.pause();
        crabRavePause.pause();
        audio.currentTime = 0
    }
}

//Fallen Kingdom

function playFallenKingdom() {
    let fallenKingdomPlay = document.getElementById("Fallen Kingdom")
    let megalovaniaPause = document.getElementById("Megalovania");
    let crabRavePause = document.getElementById("CrabRave");
    let swedenPause = document.getElementById("Sweden");

    megalovaniaPause.pause();
    swedenPause.pause();
    crabRavePause.pause();

    fallenKingdomPlay.play();
}
function pauseFallenKingdom() {
    let fallenKingdomPause = document.getElementById("Fallen Kingdom")
    fallenKingdomPause.pause();
}
function restartFallenKingdom() {
    let audio = document.getElementById("Fallen Kingdom");
    let megalovaniaPause = document.getElementById("Megalovania");
    let crabRavePause = document.getElementById("CrabRave");
    let swedenPause = document.getElementById("Sweden");
    if (audio.paused) {
        swedenPause.pause();
        megalovaniaPause.pause();
        crabRavePause.pause();
        audio.currentTime = 0
        audio.play();
    }else{
        swedenPause.pause();
        crabRavePause.pause();
        megalovaniaPause.pause();
        audio.currentTime = 0
    }
}










function spamYee() {
console.log('YEEEEEEEEEEEEEEEEEEEEEE');
// <button onclick="spamYee()">Click Me to Spam YEEEEEEEEE in Console</button>
}


// https://youtu.be/dQw4w9WgXcQ


