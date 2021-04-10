var questions = [
    "How do you like me?",
    "What are you doing?"
];

var question = questions[Math.floor(Math.random() * Math.floor(questions.length))];

document.querySelector(".question").append(question);