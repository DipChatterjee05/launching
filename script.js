let countDownDate = new Date("Sep 3, 2024 00:00:00").getTime();

let x = setInterval(() => {
    let currentDate = new Date().getTime();
    let countDownTimer = countDownDate - currentDate;
    let days = Math.floor(countDownTimer / (1000 * 60 * 60 * 24));
    let hours = Math.floor((countDownTimer % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((countDownTimer % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((countDownTimer % (1000 * 60)) / 1000);
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    if (countDownTimer < 0) {
        clearInterval(x);
        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";
    }
}, 1000);
