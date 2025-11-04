const questions = [
    {
        question: "You see a new student in class. How do you react?",
        answers: [
            { text: "Say hi and try to befriend them", score: 7 },
            { text: "Observe quietly, maybe approach later", score: 6 }
        ]
    },
    {
        question: "During a group project, what's your role?",
        answers: [
            { text: "Leader, I like taking charge", score: 7 },
            { text: "Supporter, I contribute quietly", score: 6 }
        ]
    },
    {
        question: "On weekends, you prefer to:",
        answers: [
            { text: "Go out and socialize", score: 7 },
            { text: "Stay home and relax", score: 6 }
        ]
    },
    {
        question: "When faced with a challenge, you:",
        answers: [
            { text: "Tackle it head-on", score: 7 },
            { text: "Think carefully before acting", score: 6 }
        ]
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const nextButton = document.getElementById("next-btn");
const resultContainer = document.getElementById("result");
const scoreElement = document.getElementById("score");
const restartButton = document.getElementById("restart-btn");

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    resultContainer.classList.add("hide");
    document.getElementById("quiz").classList.remove("hide");
    showQuestion();
}

function showQuestion() {
    clearAnswers();
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.addEventListener("click", () => selectAnswer(answer.score));
        answersElement.appendChild(button);
    });
}

function clearAnswers() {
    while (answersElement.firstChild) {
        answersElement.removeChild(answersElement.firstChild);
    }
}

function selectAnswer(selectedScore) {
    score += selectedScore;
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("quiz").classList.add("hide");
    resultContainer.classList.remove("hide");

    // Determine result
    const average = score / questions.length;
    if (average >= 6.5) {
        scoreElement.innerText = "You're a 7! Confident and outgoing!";
    } else {
        scoreElement.innerText = "You're a 6! Thoughtful and calm!";
    }
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    showQuestion();
});

restartButton.addEventListener("click", startQuiz);

// Initialize
startQuiz();
