let timer;
let timeLeft = 25 * 60; // 25 minutes in seconds
let isRunning = false;

const timerDisplay = document.getElementById('timer');
const statusDisplay = document.getElementById('status');

function updateDisplay(seconds) {
    const min = Math.floor(seconds / 60).toString().padStart(2, '0');
    const sec = (seconds % 60).toString().padStart(2, '0');
    timerDisplay.textContent = `${min}:${sec}`;
}

// Callback function for countdown
function countdown(callback) {
    if (timeLeft <= 0) {
        clearInterval(timer);
        isRunning = false;
        statusDisplay.textContent = "Time's up! Take a break!";
        callback(); // Call the callback when timer ends
        return;
    }
    updateDisplay(timeLeft);
    timeLeft--;
}

// Start timer
function startTimer() {
    if (!isRunning) {
        isRunning = true;
        statusDisplay.textContent = "Focus on your study!";
        timer = setInterval(() => countdown(() => alert("Pomodoro Completed!")), 1000);
    }
}

// Pause timer
function pauseTimer() {
    if (isRunning) {
        clearInterval(timer);
        isRunning = false;
        statusDisplay.textContent = "Paused";
    }
}

// Reset timer
function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    timeLeft = 25 * 60;
    updateDisplay(timeLeft);
    statusDisplay.textContent = "Timer Reset";
}

// Event listeners
document.getElementById('startBtn').addEventListener('click', startTimer);
document.getElementById('pauseBtn').addEventListener('click', pauseTimer);
document.getElementById('resetBtn').addEventListener('click', resetTimer);

// Initial display
updateDisplay(timeLeft);
