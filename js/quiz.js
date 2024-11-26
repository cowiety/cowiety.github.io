const quizData = [
    {
        question: "Which Irish goddess is associated with the sun, fertility, and creativity?",
        options: ["Brigid", "Morrigan", "Ériu", "Aine"],
        answer: "Brigid"
    },
    {
        question: "What is the name of the mythological Irish hero known for his strength and bravery?",
        options: ["Cú Chulainn", "Fionn mac Cumhaill", "Cuchulainn", "Lugh"],
        answer: "Cú Chulainn"
    },
    {
        question: "Which Irish mythological figure is known for his wisdom and magical abilities?",
        options: ["Manannán mac Lir", "Balor", "Nuada", "Dagda"],
        answer: "Manannán mac Lir"
    },
    {
        question: "What is the name of the legendary Irish king who is said to have banished the snakes from Ireland?",
        options: ["St. Patrick", "Brian Boru", "Niall of the Nine Hostages", "Conchobar mac Nessa"],
        answer: "St. Patrick"
    },
    {
        question: "Which Irish mythological creature is known for its shape-shifting abilities and can transform into a mare or a beautiful woman?",
        options: ["Banshee", "Púca", "Leanan sídhe", "Selkie"],
        answer: "Púca"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const nextButton = document.getElementById('next-button');
const resultElement = document.getElementById('result');
const resultNameElement = document.getElementById('result-name');
const resultDescriptionElement = document.getElementById('result-description');

function loadQuestion() {
    if (currentQuestionIndex < quizData.length) {
        const currentQuestion = quizData[currentQuestionIndex];
        questionElement.textContent = currentQuestion.question;
        optionsElement.innerHTML = '';

        currentQuestion.options.forEach(option => {
            const button = document.createElement('button');
            button.className = 'btn btn-secondary mb-2 w-100';
            button.textContent = option;
            button.onclick = function() {
                checkAnswer(option);
            };
            optionsElement.appendChild(button);
        });

        nextButton.style.display = 'none';
    } else {
        showResult();
    }
}

function checkAnswer(userAnswer) {
    const correctAnswer = quizData[currentQuestionIndex].answer;
    if (userAnswer === correctAnswer) {
        score++;
    }
    currentQuestionIndex++;
    nextButton.style.display = 'block';
}

function nextQuestion() {
    loadQuestion();
}

function showResult() {
    let resultName;
    let resultDescription;

    switch (score) {
        case 5:
            resultName = "Cú Chulainn";
            resultDescription = "You are a hero of unimaginable strength and bravery, just like Cú Chulainn. You face challenges head-on and are always ready to protect those you care about.";
            break;
        case 4:
            resultName = "Brigid";
            resultDescription = "You are as creative and nurturing as the goddess Brigid. Your artistic talents and warm personality make you a beacon of light to those around you.";
            break;
        case 3:
            resultName = "Manannán mac Lir";
            resultDescription = "You possess the wisdom and magical abilities of Manannán mac Lir. Your insights and resourcefulness guide you through life's challenges with grace and charm.";
            break;
        case 2:
            resultName = "St. Patrick";
            resultName = "You are as wise and benevolent as St. Patrick. Your kindness and determination inspire others to follow in your footsteps and make a positive impact on the world.";
            break;
        default:
            resultName = "Púca";
            resultDescription = "You are as mysterious and versatile as the Púca. Your ability to adapt and transform makes you a fascinating and intriguing individual.";
    }

    resultNameElement.textContent = resultName;
    resultDescriptionElement.textContent = resultDescription;
    document.getElementById('quiz-container').style.display = 'none';
    resultElement.style.display = 'block';
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('quiz-container').style.display = 'block';
    resultElement.style.display = 'none';
    loadQuestion();
}

loadQuestion();
