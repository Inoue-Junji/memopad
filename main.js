let display = document.getElementById("display");
let startStop = document.getElementById("startStop");
let reset = document.getElementById("reset");

let hours = 0;
let minutes = 0;
let seconds = 0;

let newHours = 0;
let newMinutes = 0;
let newSeconds = 0;

function stopWatch() {
    seconds++;
    if (seconds / 60 == 1) {
        minutes++;
        seconds = 0;
        if (minutes / 60 == 1) {
            hours++;
            minutes = 0;
        }
    }
    if (seconds < 10) {
        newSeconds = "0" + seconds;
    } else {
        newSeconds = seconds;
    }
    if (minute < 10) {
        newMinutes = "0" + minutes;
    } else {
        newMinutes = minutes;
    }
    if (hours < 10) {
        newHours = "0" + hours;
    } else {
        newHours = hours;
    }



    display.innerHTML = newHours + ":" + newMinutes + ":" + newSeconds;
}

startStop.addEventListener("click", function () {
    setInterval(stopWatch, 100);
})
