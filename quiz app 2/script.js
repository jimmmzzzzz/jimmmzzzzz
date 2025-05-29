const quizData = [
    {
        question: "What is the capital of France?",
        answers: ["Berlin", "Madrid", "Paris", "Lisbon"],
        correct: 2
    },
    {
        question: "What is 2 + 2?",
        answers: ["3", "4", "5", "33"],
        correct: 1
    },
    {
        question: "What is the largest planet?",
        answers: ["Earth", "Mars", "Jupiter", "Saturn"],
        correct: 2
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const questionEl = document.getElementById("question");
    const answerButtons = document.querySelectorAll(".answer-btn");
    const currentData = quizData[currentQuestion];
    questionEl.textContent = currentData.question;
    answerButtons.forEach((btn, index) => {
        btn.onclick = () => selectAnswer(index);
        btn.textContent = currentData.answers[index];
        btn.disabled = false;
        btn.style.backgroundColor = "#eee";
    });
}

function selectAnswer(index) {
    const isCorrect = index === quizData[currentQuestion].correct;
    const buttons = document.querySelectorAll(".answer-btn");
    buttons.forEach((btn, i) => {
        btn.disabled = true;
        btn.style.backgroundColor = i === quizData[currentQuestion].correct ? "#c8e6c9" : "#ffcdd2";
    });
    if (isCorrect) score++;
}

function nextQuestion() {
    const nextButton = document.getElementById("next-btn");
    nextButton.onclick = () => {
        currentQuestion++;
        if (currentQuestion < quizData.length) {
            loadQuestion();
        } else {
            document.getElementById("quiz").innerHTML = `
                <h2>You scored ${score} out of ${quizData.length}</h2>
                <button onclick="location.reload()">Try Again</button>
            `;
        }
    }
}

window.onload = () => {
    loadQuestion();
    nextQuestion();
};