// const questions = [
//     {
//         question: "What is the capital of France?",
//         options: ["Berlin", "Madrid", "Paris", "Lisbon"],
//         correctAnswer: 2, // Index of the correct option
//     },
//     {
//         question: "Which planet is known as the Red Planet?",
//         options: ["Earth", "Mars", "Jupiter", "Saturn"],
//         correctAnswer: 1,
//     },
//     {
//         question: "What is the largest mammal in the world?",
//         options: ["Elephant", "Blue Whale", "Giraffe", "Polar Bear"],
//         correctAnswer: 1,
//     },
// ];

// let currentQuestionIndex = 0;
// let score = 0;
// let timer;
// let timeLeft = 30; // 30 seconds per question

// function displayQuestion() {
//     const questionElement = document.getElementById("question");
//     const optionsContainer = document.getElementById("options");
//     const nextButton = document.getElementById("next-btn");
//     const timerElement = document.getElementById("timer-seconds");

//     // Clear previous options
//     optionsContainer.innerHTML = "";

//     // Display the current question
//     const currentQuestion = questions[currentQuestionIndex];
//     questionElement.textContent = currentQuestion.question;

//     // Display the options
//     currentQuestion.options.forEach((option, index) => {
//         const button = document.createElement("button");
//         button.textContent = option;
//         button.onclick = () => checkAnswer(index, currentQuestion.correctAnswer);
//         optionsContainer.appendChild(button);
//     });

//     // Show the next button
//     nextButton.style.display = "none";

//     // Reset timer
//     timeLeft = 30;
//     timerElement.textContent = timeLeft;
//     clearInterval(timer);
//     timer = setInterval(updateTimer, 1000);
// }

// function updateTimer() {
//     const timerElement = document.getElementById("timer-seconds");
//     timeLeft--;
//     timerElement.textContent = timeLeft;
//     if (timeLeft <= 0) {
//         clearInterval(timer);
//         checkAnswer(-1, -1); // Timeout, no answer selected
//     }
// }

// function checkAnswer(selectedIndex, correctIndex) {
//     if (selectedIndex === correctIndex) {
//         score++;
//     }

//     // Show the next button
//     document.getElementById("next-btn").style.display = "block";
// }

// function showResult() {
//     const resultElement = document.getElementById("result");
//     resultElement.textContent = `Quiz Completed! Your score is ${score}/${questions.length}`;
//     resultElement.style.display = "block";

//     // Hide the question and options
//     document.getElementById("question-container").style.display = "none";
//     document.getElementById("next-btn").style.display = "none";
// }

// document.getElementById("next-btn").onclick = () => {
//     currentQuestionIndex++;
//     if (currentQuestionIndex < questions.length) {
//         displayQuestion();
//     } else {
//         showResult();
//     }
// };

// // Initialize the quiz
// displayQuestion();





// //2
// const questions = [
//     {
//         question: "What is the capital of France?",
//         options: ["Berlin", "Madrid", "Paris", "Lisbon"],
//         correctAnswer: 2, // Index of the correct option
//     },
//     {
//         question: "Which planet is known as the Red Planet?",
//         options: ["Earth", "Mars", "Jupiter", "Saturn"],
//         correctAnswer: 1,
//     },
//     {
//         question: "What is the largest mammal in the world?",
//         options: ["Elephant", "Blue Whale", "Giraffe", "Polar Bear"],
//         correctAnswer: 1,
//     },
// ];

// let currentQuestionIndex = 0;
// let score = 0;
// let timer;
// let timeLeft = 30; // 30 seconds per question

// // Display the current question and options
// function displayQuestion() {
//     const questionElement = document.getElementById("question");
//     const optionsContainer = document.getElementById("options");
//     const nextButton = document.getElementById("next-btn");
//     const timerElement = document.getElementById("timer-seconds");

//     // Clear previous options
//     optionsContainer.innerHTML = "";

//     // Display the current question
//     const currentQuestion = questions[currentQuestionIndex];
//     questionElement.textContent = currentQuestion.question;

//     // Display the options
//     currentQuestion.options.forEach((option, index) => {
//         const button = document.createElement("button");
//         button.textContent = option;
//         button.onclick = () => checkAnswer(index, currentQuestion.correctAnswer);
//         optionsContainer.appendChild(button);
//     });

//     // Show the next button
//     nextButton.style.display = "none";

//     // Reset timer
//     timeLeft = 30;
//     timerElement.textContent = timeLeft;
//     clearInterval(timer);
//     timer = setInterval(updateTimer, 1000);
// }

// // Update timer every second
// function updateTimer() {
//     const timerElement = document.getElementById("timer-seconds");
//     timeLeft--;
//     timerElement.textContent = timeLeft;
//     if (timeLeft <= 0) {
//         clearInterval(timer);
//         checkAnswer(-1, -1); // Timeout, no answer selected
//     }
// }

// // Check if the selected answer is correct
// function checkAnswer(selectedIndex, correctIndex) {
//     if (selectedIndex === correctIndex) {
//         score++;
//     }

//     // Show the next button
//     document.getElementById("next-btn").style.display = "block";
// }

// // Show the result of the quiz
// function showResult() {
//     const resultElement = document.getElementById("result");
//     resultElement.textContent = `Quiz Completed! Your score is ${score}/${questions.length}`;
//     resultElement.style.display = "block";

//     // Hide the question and options
//     document.getElementById("question-container").style.display = "none";
//     document.getElementById("next-btn").style.display = "none";

//     // Show the submit button
//     document.getElementById("submit-btn").style.display = "block";
// }

// // Handle the 'Next' button click
// document.getElementById("next-btn").onclick = () => {
//     currentQuestionIndex++;
//     if (currentQuestionIndex < questions.length) {
//         displayQuestion();
//     } else {
//         showResult();
//     }
// };

// // Handle the 'Submit' button click
// document.getElementById('submit-btn').addEventListener('click', () => {
//     const username = prompt("Enter your name:");
//     const score = calculateScore();

//     // Send score to the backend
//     fetch('http://localhost:5000/api/quiz/submit', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ username, score })
//     })
//         .then(response => response.json())
//         .then(data => alert(data.message)) // Display a message from the backend
//         .catch(error => console.error('Error submitting score:', error));
// });

// // Calculate the score based on user's answers
// function calculateScore() {
//     let score = 0;

//     // Loop through all the questions and check if the selected answer is correct
//     questions.forEach((question, index) => {
//         const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
//         if (selectedOption && selectedOption.value === question.options[question.correctAnswer]) {
//             score++;
//         }
//     });

//     return score;
// }


// // Initialize the quiz
// displayQuestion();






//3
let isSubmitted = false; // To track if the quiz has been submitted
let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 30; // 30 seconds per question

const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Lisbon"],
        correctAnswer: 2, // Index of the correct option
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        correctAnswer: 1,
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Polar Bear"],
        correctAnswer: 1,
    },
    {
        question: "What is the chemical symbol for water?",
        options: ["H2O", "O2", "CO2", "NaCl"],
        correctAnswer: 0,
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        options: ["Harper Lee", "Mark Twain", "Ernest Hemingway", "F. Scott Fitzgerald"],
        correctAnswer: 0,
    },
    {
        question: "What is the smallest prime number?",
        options: ["0", "1", "2", "3"],
        correctAnswer: 2,
    },
    {
        question: "Which element has the atomic number 1?",
        options: ["Helium", "Oxygen", "Hydrogen", "Carbon"],
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




// //4-1-25 last code where timer was not correctly functioning
// let isSubmitted = false; // To track if the quiz has been submitted
// let currentQuestionIndex = 0;
// let score = 0;
// let timer;
// let timeLeft = 30; // 30 seconds per question

// const questions = [
//     {
//         question: "What is the capital of France?",
//         options: ["Berlin", "Madrid", "Paris", "Lisbon"],
//         correctAnswer: 2, // Index of the correct option
//     },
//     {
//         question: "Which planet is known as the Red Planet?",
//         options: ["Earth", "Mars", "Jupiter", "Saturn"],
//         correctAnswer: 1,
//     },
//     {
//         question: "What is the largest mammal in the world?",
//         options: ["Elephant", "Blue Whale", "Giraffe", "Polar Bear"],
//         correctAnswer: 1,
//     },
// ];

// // Display the current question and options
// function displayQuestion() {
//     if (isSubmitted) return; // Prevent displaying questions after submission

//     const questionElement = document.getElementById("question");
//     const optionsContainer = document.getElementById("options");
//     const nextButton = document.getElementById("next-btn");
//     const timerElement = document.getElementById("timer-seconds");

//     // Clear previous options
//     optionsContainer.innerHTML = "";

//     // Display the current question
//     const currentQuestion = questions[currentQuestionIndex];
//     questionElement.textContent = currentQuestion.question;

//     // Display the options
//     currentQuestion.options.forEach((option, index) => {
//         const button = document.createElement("button");
//         button.textContent = option;
//         button.onclick = () => checkAnswer(index, currentQuestion.correctAnswer);
//         optionsContainer.appendChild(button);
//     });

//     // Show the next button
//     nextButton.style.display = "none";

//     // Reset timer
//     timeLeft = 30;
//     timerElement.textContent = timeLeft;
//     clearInterval(timer);
//     timer = setInterval(updateTimer, 1000);
// }

// // Update timer every second
// function updateTimer() {
//     const timerElement = document.getElementById("timer-seconds");
//     timeLeft--;
//     timerElement.textContent = timeLeft;
//     if (timeLeft <= 0) {
//         clearInterval(timer);
//         checkAnswer(-1, -1); // Timeout, no answer selected
//     }
// }

// // Check if the selected answer is correct
// function checkAnswer(selectedIndex, correctIndex) {
//     if (selectedIndex === correctIndex) {
//         score++;
//     }

//     // Show the next button
//     document.getElementById("next-btn").style.display = "block";
// }

// //progress bar
// //progress bar
// function progressBar() {
//     const progressBarElement = document.getElementById("progress-bar");
//     const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
//     progressBarElement.style.width = `${progress}%`;
// }

// // Update progress bar in `displayQuestion` and `Next` button handler
// function displayQuestion() {
//     if (isSubmitted) return; // Prevent displaying questions after submission

//     const questionElement = document.getElementById("question");
//     const optionsContainer = document.getElementById("options");
//     const nextButton = document.getElementById("next-btn");
//     const timerElement = document.getElementById("timer-seconds");

//     // Clear previous options
//     optionsContainer.innerHTML = "";

//     // Display the current question
//     const currentQuestion = questions[currentQuestionIndex];
//     questionElement.textContent = currentQuestion.question;

//     // Display the options
//     currentQuestion.options.forEach((option, index) => {
//         const button = document.createElement("button");
//         button.textContent = option;
//         button.onclick = () => checkAnswer(index, currentQuestion.correctAnswer);
//         optionsContainer.appendChild(button);
//     });

//     // Show the next button
//     nextButton.style.display = "none";

//     // Reset timer
//     timeLeft = 30;
//     timerElement.textContent = timeLeft;
//     clearInterval(timer);
//     timer = setInterval(updateTimer, 1000);

//     // Update progress bar
//     progressBar();
// }

// // Handle the 'Next' button click
// document.getElementById("next-btn").onclick = () => {
//     if (isSubmitted) return; // Prevent showing the next question after submission

//     currentQuestionIndex++;
//     if (currentQuestionIndex < questions.length) {
//         displayQuestion();
//     } else {
//         showResult();
//     }

//     // Update progress bar
//     progressBar();
// };

// // Initialize the quiz
// displayQuestion();



// // Show the result of the quiz
// function showResult() {
//     if (isSubmitted) return; // Prevent showing the result multiple times

//     isSubmitted = true; // Mark quiz as submitted
//     const resultElement = document.getElementById("result");
//     resultElement.textContent = `Quiz Completed! Your score is ${score}/${questions.length}`;
//     resultElement.style.display = "block";

//     // Hide the question and options
//     document.getElementById("question-container").style.display = "none";
//     document.getElementById("next-btn").style.display = "none";
//     document.getElementById("next-btn").style.display = "none";

//     // Show the submit button
//     document.getElementById("submit-btn").style.display = "block";
// }

// // Handle the 'Next' button click
// document.getElementById("next-btn").onclick = () => {
//     if (isSubmitted) return; // Prevent showing the next question after submission

//     currentQuestionIndex++;
//     if (currentQuestionIndex < questions.length) {
//         displayQuestion();
//     } else {
//         showResult();
//     }
// };

// // Handle the 'Submit' button click
// document.getElementById('submit-btn').addEventListener('click', () => {
//     if (isSubmitted) return; // Prevent multiple submissions

//     const username = prompt("Enter your name:");
//     const finalScore = calculateScore(); // Get final score

//     // Send score to the backend
//     fetch('http://localhost:5000/api/quiz/submit', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ username, score: finalScore })
//     })
//         .then(response => response.json())
//         .then(data => alert(data.message)) // Display a message from the backend
//         .catch(error => console.error('Error submitting score:', error));

//     isSubmitted = true; // Mark as submitted
// });

// // Calculate the score based on user's answers
// function calculateScore() {
//     let score = 0;

//     // Loop through all the questions and check if the selected answer is correct
//     questions.forEach((question, index) => {
//         const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
//         if (selectedOption && selectedOption.value === question.options[question.correctAnswer]) {
//             score++;
//         }
//     });

//     return score;
// }

// // Initialize the quiz
// displayQuestion();
