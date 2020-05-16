// Detect mobile user
function isMobile() {
return /(phone Ipad|pod I iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec IwOSBrowser|BrowserNG IWebos ISymbian|Windows Phone)/i.test(navigator.userAgent)
}if(isMobile()){
    window.location.href = 'https://bluegarian-tech-archives.github.io/Mobile-Redirect/'
}

//Display in console
console.log('%cWARNING: YOU HAVE BEEN DETECTED ATTEMPTING TO ACCESS THE FILES ON THIS ARCHIVE WITHOUT OFFICIAL ' +
'APRROVAL. MTF TEAM DEPLOYED. SAY YOUR LAST WORDS.','background: yellow; color: red; font-size: 35px; font-family: Courier New; font-weight: bold;');





// Reavel Archive if function "Reveal" is triggered by onClick
function Reveal() {
    alert('Verification Success');

    let rev = document.getElementById("Reveal Archive");
    rev.style.display = "block";
}

let closeVerification = document.getElementById('Verification Section');

function verificationClose() {
    let closeVerification = document.getElementById('Verification Section');
    closeVerification.style.display = "none";
}

//THE BUTTON OF TP



// Rick Roll Troll (temp disabled)

/*
function rickRolledBoi() {
    let rickRolled = document.getElementById("getRickRolled");
    rickRolled.play();
}

function stopRickRoll() {
    let rickRolled = document.getElementById("getRickRolled");
    rickRolled.pause();
}
*/
 
// Close verification section




function stopRickRoll() {
    alert('ERROR: Rick Roll has been removed from the site for now due to unofficial impression. This button is currently rendered useless.');
}


//When hovering over a button for the table of contents
function playTableHoverSound() {
    let tableSoundPlay = document.getElementById("tableHoverSoundSrc");
    tableSoundPlay.play();
}


