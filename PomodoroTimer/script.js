const timerDisplay = document.getElementById("timer");
const modeButtons = document.querySelectorAll(".mode-btn");
const page = document.getElementById("page");
const startPauseBtn = document.getElementById("start-pause");
const ring = document.querySelector(".ring-progress");
const modeButtonPomodoro = document.getElementById("pomobtn");
const modeButtonShort = document.getElementById("shortbtn");

let timeLeft = 25 * 60;
let duration = timeLeft;
let timerInterval = null;
let isPaused = false;


const radius = 90;
const circumference = 2 * Math.PI * radius;
ring.style.strokeDasharray = circumference;
ring.style.strokeDashoffset = circumference;

function updateCircle() {
    const percent = duration > 0 ? timeLeft / duration : 0;
    ring.style.strokeDashoffset = circumference * (1 - percent);
}

function updateDisplay() {
    const m = Math.floor(timeLeft / 60);
    const s = timeLeft % 60;
    timerDisplay.textContent = `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
    updateCircle();
}

function tick() {
    if (timeLeft > 0) {
        timeLeft--;
        updateDisplay();
    } else {
        clearInterval(timerInterval);
        timerInterval = null;
        isPaused = false;
        startPauseBtn.textContent = "Start";
        alert("Time's up");
        if (duration == modeButtonShort.dataset.time) {
          modeButtonPomodoro.click();
        } else if (duration == modeButtonPomodoro.dataset.time) {
          modeButtonShort.click();
        }
    }
}

startPauseBtn.addEventListener("click", () => {

    if (!timerInterval) {

        timerInterval = setInterval(tick, 1000);
        isPaused = false;
        startPauseBtn.textContent = "Pause";
        return;
    }


    if (!isPaused) {
        clearInterval(timerInterval);
        timerInterval = null;
        isPaused = true;
        startPauseBtn.textContent = "Resume";
    } else {
        timerInterval = setInterval(tick, 1000);
        isPaused = false;
        startPauseBtn.textContent = "Pause";
    }
});

modeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        modeButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const color = btn.dataset.color;


        document.documentElement.style.setProperty('--mode-color', color);

        clearInterval(timerInterval);
        timerInterval = null;
        isPaused = false;
        startPauseBtn.textContent = "Start";


        timeLeft = parseInt(btn.dataset.time, 10) * 60;
        duration = timeLeft;
        updateDisplay();
    });
});

(function init() {
    const active = document.querySelector('.mode-btn.active') || modeButtons[0];
    const color = active.dataset.color;
    document.documentElement.style.setProperty('--mode-color', color);

    updateDisplay();
})();
