let timerDisplay = document.getElementById("timer");
let startBtn = document.getElementById("start");
let pauseBtn = document.getElementById("pause");
let resetBtn = document.getElementById("reset");
let modeButtons = document.querySelectorAll(".mode-btn");

let timeLeft = 25 * 60;
let duration = timeLeft;
let timerInterval = null;

const progress = document.querySelector(".ring-progress");
const radius = 90;
const circumference = 2 * Math.PI * radius;
progress.style.strokeDasharray = circumference;
progress.style.strokeDashoffset = 0;

function updateCircle() {
    const percent = timeLeft / duration;
    progress.style.strokeDashoffset = circumference * (1 - percent);
}

function updateDisplay() {
    let m = Math.floor(timeLeft / 60);
    let s = timeLeft % 60;
    timerDisplay.textContent =
        `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
    updateCircle();
}

startBtn.addEventListener("click", () => {
    if (timerInterval) return;

    timerInterval = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            updateDisplay();
        } else {
            clearInterval(timerInterval);
            timerInterval = null;
            alert("Time's up!");
        }
    }, 1000);
});

pauseBtn.addEventListener("click", () => {
    clearInterval(timerInterval);
    timerInterval = null;
});

resetBtn.addEventListener("click", () => {
    clearInterval(timerInterval);
    timerInterval = null;
    timeLeft = duration;
    updateDisplay();
});

modeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        clearInterval(timerInterval);
        timerInterval = null;
        let min = parseInt(btn.dataset.time);
        timeLeft = min * 60;
        duration = timeLeft;
        updateDisplay();
    });
});

updateDisplay();

