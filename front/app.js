// Fetch quiz questions from the backend API
fetch('http://localhost:5000/api/quiz/questions')
    .then(response => response.json())
    .then(data => {
        const questionsList = document.getElementById('questions-list');
        data.forEach((question, index) => {
            const questionElement = document.createElement('div');
            questionElement.innerHTML = `
        <h3>${question.question}</h3>
        <ul>
          ${question.options.map(option => `<li><input type="radio" name="question${index}" value="${option}">${option}</li>`).join('')}
        </ul>
      `;
            questionsList.appendChild(questionElement);
        });
    })
    .catch(error => console.error('Error fetching quiz questions:', error));

// Handle score submission
document.getElementById('submit-btn').addEventListener('click', () => {
    const username = prompt("Enter your name:");
    const score = calculateScore(); // You'll need to implement this function to calculate score based on user answers

    // Send score to the backend
    fetch('http://localhost:5000/api/quiz/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, score })
    })
        .then(response => response.json())
        .then(data => alert(data.message))
        .catch(error => console.error('Error submitting score:', error));
});

// Calculate score (just a placeholder function)
function calculateScore() {
    let score = 0;
    // Implement logic to calculate score based on user's answers
    return score;
}





// // Fetch quiz questions from the backend API
// fetch('http://localhost:5000/api/quiz/questions')
//     .then(response => response.json())
//     .then(data => {
//         // Assuming data is an array of questions
//         questions = data; // Store the fetched questions in the `questions` array
//         displayQuestion(); // Call the function to display the first question
//     })
//     .catch(error => console.error('Error fetching quiz questions:', error));

// // Handle score submission
// document.getElementById('submit-btn').addEventListener('click', () => {
//     const username = prompt("Enter your name:");
//     const score = calculateScore(); // Implement this function to calculate score based on user answers

//     // Send score to the backend
//     fetch('http://localhost:5000/api/quiz/submit', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ username, score })
//     })
//         .then(response => response.json())
//         .then(data => alert(data.message))
//         .catch(error => console.error('Error submitting score:', error));
// });

// // Calculate score (just a placeholder function)
// function calculateScore() {
//     let score = 0;
//     // Implement logic to calculate score based on user's answers
//     return score;
// }
