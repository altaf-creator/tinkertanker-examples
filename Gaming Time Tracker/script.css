// ============================
// Load existing data
// ============================
let sessions = JSON.parse(localStorage.getItem("gamingSessions")) || [];

const gameName = document.getElementById("gameName");
const minutesPlayed = document.getElementById("minutesPlayed");
const sessionList = document.getElementById("sessionList");
const addBtn = document.getElementById("addBtn");

let chart;

// Color palette for sessions
const colors = [
    '#FF5733', '#33FF57', '#3357FF', '#F333FF', '#FF33A8',
    '#33FFF5', '#F5FF33', '#FF8F33', '#8F33FF', '#33FF8F'
];

// ============================
// Save to localStorage
// ============================
function saveSessions() {
    localStorage.setItem("gamingSessions", JSON.stringify(sessions));
}

// ============================
// Display sessions
// ============================
function renderSessions() {
    sessionList.innerHTML = "";

    sessions.forEach((s, index) => {
        const li = document.createElement("li");
        li.style.backgroundColor = colors[index % colors.length];
        li.innerHTML = `
            <span>${s.game} — ${s.minutes} min</span>
            <button class="delete-btn" onclick="deleteSession(${index})">X</button>
        `;
        sessionList.appendChild(li);
    });

    updateChart();
}

function deleteSession(i) {
    sessions.splice(i, 1);
    saveSessions();
    renderSessions();
}

// ============================
// Add new session (stack duplicates)
// ============================
addBtn.addEventListener("click", () => {
    const game = gameName.value.trim();
    const mins = Number(minutesPlayed.value.trim());

    if (game === "" || mins <= 0) {
        alert("Please enter valid data.");
        return;
    }

    // Check if game exists and add minutes
    let found = false;
    for (let i = 0; i < sessions.length; i++) {
        if (sessions[i].game.toLowerCase() === game.toLowerCase()) {
            sessions[i].minutes += mins; // Stack on top of existing session
            found = true;
            break;
        }
    }

    if (!found) {
        sessions.push({ game: game, minutes: mins });
    }

    saveSessions();
    renderSessions();

    gameName.value = "";
    minutesPlayed.value = "";
});

// ============================
// Chart.js visualization
// ============================
function updateChart() {
    const labels = sessions.map(s => s.game);
    const data = sessions.map(s => s.minutes);
    const backgroundColors = sessions.map((_, i) => colors[i % colors.length]);

    if (chart) chart.destroy();

    const ctx = document.getElementById("playChart").getContext("2d");

    chart = new Chart(ctx, {
        type: "bar",
        data: {
            labels: labels,
            datasets: [{
                label: "Minutes Played",
                data: data,
                backgroundColor: backgroundColors
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: false }
            },
            scales: {
                y: { beginAtZero: true }
            }
        }
    });
}

// Initial render
renderSessions();
