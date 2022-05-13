var timer; 
var timeLeft = 60; // seconds

document.getElementById("#playBtn").addEventListener("click", start);

// end game when timer runs out
function gameOver() {
cancelInterval(timer);

  // re-show the button, so they can start it again
$('#playBtn').show();
}

function updateTimer() {
timeLeft = timeLeft - 1;
if(timeLeft >= 0)
    $('#timer').html(timeLeft);
else {
    gameOver();
}
}

// start game
function start() {
// call function every 60 seconds
timer = setInterval(updateTimer, 1000);
}