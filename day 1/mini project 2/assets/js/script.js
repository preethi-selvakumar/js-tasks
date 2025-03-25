// 1️. Store Quiz Details
const question1 = {
    question: "What is the capital of India?",
    options: ["Delhi", "Mumbai", "Kolkata", "Chennai"],
    correctAnswer: "Delhi"
};

const question2 = {
    question: "What is 5 + 3?",
    options: ["5", "8", "10", "15"],
    correctAnswer: "8"
};

// 2. Validate User Answer:
let userAnswer1 = "Delhi"; 
let userAnswer2 = "10"; 

const isCorrect1 = userAnswer1 === question1.correctAnswer; 
const isCorrect2 = userAnswer2 === question2.correctAnswer; 

// 3️. Display Quiz Results:
console.log("Q1: " + question1.question);
console.log("Options: " + question1.options[0] + ", " + question1.options[1] + ", " + question1.options[2] + ", " + question1.options[3]);
console.log("Your Answer: " + userAnswer1);
console.log("Correct Answer: " + question1.correctAnswer);
console.log("Correct? " + isCorrect1);
console.log("--------------------------------");

console.log("Q2: " + question2.question);
console.log("Options: " + question2.options[0] + ", " + question2.options[1] + ", " + question2.options[2] + ", " + question2.options[3]);
console.log("Your Answer: " + userAnswer2);
console.log("Correct Answer: " + question2.correctAnswer);
console.log("Correct? " + isCorrect2);
console.log("--------------------------------");

// 4️. Multiple Questions - Calculate Total Score
const totalScore = isCorrect1 + isCorrect2;

console.log("Your Final Score: " + totalScore + "/2");
