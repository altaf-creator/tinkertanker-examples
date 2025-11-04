const puzzles = [
    { emoji: "🌧️☔😭", answer: "crying in the rain" },
    { emoji: "🎯🔥", answer: "hot target" },
    { emoji: "🚀🌕", answer: "rocket to the moon" },
    { emoji: "🍔➡️🏠", answer: "bring home food" },
    { emoji: "💤📚", answer: "sleep on it" },
    { emoji: "🐟➡️🌊", answer: "fish out of water" },
    { emoji: "🐘📦", answer: "elephant in the room" },
    { emoji: "🧊❤️", answer: "cold heart" },
    { emoji: "🧠⚡", answer: "brainstorm" },
    { emoji: "🐝👂", answer: "buzzing in your ear" },
    { emoji: "⏰🏃💨", answer: "running out of time" },
    { emoji: "👀🍬", answer: "eye candy" },
    { emoji: "😴💭⭐", answer: "dream big" },
    { emoji: "🪨👶", answer: "rock a baby" },
    { emoji: "🔥🧊", answer: "fire and ice" },
    { emoji: "🕒🍽️", answer: "it's time to eat" },
    { emoji: "📦🎁❓", answer: "mystery box" },
    { emoji: "🙉🎵", answer: "hear no music" },
    { emoji: "🛌🌙", answer: "good night" },
    { emoji: "🤐🤫", answer: "keep it quiet" }
];

let current = 0;

function loadPuzzle() {
    document.getElementById("emojiBox").textContent = puzzles[current].emoji;
    document.getElementById("message").textContent = "";
    document.getElementById("guessInput").value = "";
}

function checkGuess() {
    let userGuess = document.getElementById("guessInput").value.toLowerCase().trim();
    let correctAnswer = puzzles[current].answer.toLowerCase();

    if (userGuess === correctAnswer) {
        document.getElementById("message").textContent = "✅ Correct!";
        document.getElementById("message").style.color = "green";
    } else {
        document.getElementById("message").textContent = "❌ Try Again!";
        document.getElementById("message").style.color = "red";
    }
}

function nextPuzzle() {
    current++;
    if (current >= puzzles.length) current = 0;
    loadPuzzle();
}

window.onload = loadPuzzle;
