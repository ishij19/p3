let isSubmitted = false; // To track if the quiz has been submitted
let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 30; // 30 seconds per question

const questions = [
    {
        question: "What is the value of π (pi) rounded to two decimal places?",
        options: ["3.12", "3.14", "3.16", "3.18"],
        correctAnswer: 1,
    },
    {
        question: "What is 7 x 8?",
        options: ["54", "56", "58", "60"],
        correctAnswer: 1,
    },
    {
        question: "What is the square root of 64?",
        options: ["6", "7", "8", "9"],
        correctAnswer: 2,
    }

];

// Display the current question and options
function displayQuestion() {
    if (isSubmitted) return; // Prevent displaying questions after submission

    const questionElement = document.getElementById("question");
    const optionsContainer = document.getElementById("options");
    const nextButton = document.getElementById("next-btn");
    const timerElement = document.getElementById("timer-seconds");

    // Clear previous options
    optionsContainer.innerHTML = "";

    // Display the current question
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    // Display the options
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkAnswer(index, currentQuestion.correctAnswer);
        optionsContainer.appendChild(button);
    });

    // Hide the next button initially
    nextButton.style.display = "none";

    // Reset timer
    timeLeft = 30;
    timerElement.textContent = timeLeft;
    clearInterval(timer);
    timer = setInterval(updateTimer, 1000);

    // Update progress bar
    progressBar();
}

// Update timer every second
function updateTimer() {
    const timerElement = document.getElementById("timer-seconds");
    timeLeft--;
    timerElement.textContent = timeLeft;

    if (timeLeft <= 0) {
        clearInterval(timer);
        goToNextQuestion();   // Automatically go to next question on timeout without changing score
    }
}

// Check if the selected answer is correct
function checkAnswer(selectedIndex, correctIndex) {
    if (selectedIndex === correctIndex) {
        score++; // Increment score only if the answer is correct
    }

    // Show the next button after answering
    document.getElementById("next-btn").style.display = "block";
}

// Handle moving to the next question or showing results
function goToNextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        displayQuestion();
        progressBar();
    } else {
        showResult();
    }
}

// Handle 'Next' button click
document.getElementById("next-btn").onclick = goToNextQuestion;

// Progress bar function
function progressBar() {
    const progressBarElement = document.getElementById("progress-bar");

    // Calculate progress percentage based on answered questions
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

    // Update progress bar width
    progressBarElement.style.width = `${progress}%`;
}

// Show the result of the quiz
function showResult() {
    if (isSubmitted) return; // Prevent showing result multiple times

    isSubmitted = true; // Mark quiz as submitted
    const resultElement = document.getElementById("result");

    // Display score in result element
    resultElement.textContent = `Quiz Completed! Your score is ${score}/${questions.length}`;

    // Ensure result element is visible now
    resultElement.style.display = "block";

    // Hide question and options
    document.getElementById("question-container").style.display = "none";

    // Hide next button and timer after last question
    document.getElementById("next-btn").style.display = "none";

    // Hide timer element after last question
    document.getElementById("timer-seconds").style.display = "none";

    // Show submit button
    document.getElementById("submit-btn").style.display = "block";
}
// Handle 'Submit' button click
document.getElementById('submit-btn').addEventListener('click', () => {
    if (isSubmitted) return; // Prevent multiple submissions

    const username = prompt("Enter your name:");

    // Send score to backend (if applicable)
    fetch('http://localhost:5000/api/quiz/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, score })
    })
        .then(response => response.json())
        .then(data => alert(data.message)) // Display message from backend
        .catch(error => console.error('Error submitting score:', error));

    isSubmitted = true; // Mark as submitted
});

// Initialize the quiz
displayQuestion();
