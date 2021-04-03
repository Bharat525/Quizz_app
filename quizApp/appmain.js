// HERE WE HAVE VARIABLE
const Qcontainer = document.getElementById('Question-container');
const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionElemnt = document.getElementById("question");
const answerElement = document.getElementById("answer-btn");
// console.log(nextButton)

// console.log(Qcontainer);
let suffledQuestion, currentQuestionIndex;


startButton.addEventListener('click', startQuizz);

// HERE WE HAVE NEXTBUTTON FUNCTION
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    SetnextQuestion()
})


// HERE WE HAVE START GAME FUNCTION
function startQuizz() {
    console.log('hey');
    startButton.classList.add('hide');
    Qcontainer.classList.remove('hide');
    suffledQuestion = questions.sort(() => Math.random()- .5);
    currentQuestionIndex = 0;
    SetnextQuestion()
    console.log(suffledQuestion);
}


// HERE WE HAVE SETNEXTQUESTION FUNCTION
function SetnextQuestion() {
    resetState();
    showQuestion(suffledQuestion[currentQuestionIndex]);
}


// HERE WE HAVE SHOWQUESTION FUNCTION
function showQuestion(question) {
    questionElemnt.innerText = question.question;
    question.answer.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerElement.appendChild(button);
    })
}

// HERE WE HAVE RESETSTATE FUNCTION
function resetState() {
    nextButton.classList.add('hide');
    while (answerElement.firstChild) {
        answerElement.removeChild(answerElement.firstChild);

    }
}


// HERE WE HAVE SELECTANSWER FUNCTION
function selectAnswer(e) {
    const selectButton = e.target;
    // console.log(selectButton);
    const correct = selectButton.dataset.correct;
    setStatusClass(document.body , correct)
    Array.from(answerElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (suffledQuestion.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = "Restart"
        startButton.classList.remove('hide');
    }
}


// HERE WE HAVE SET STATUS CLASS FUNCTION
function setStatusClass(element, correct) {
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong')
    }
}


// HERE WE HAVE CLEAR STATUS CLASS FUNCTION
function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong')

}



// HERE WE HAVE JSON TEXT
const questions = [
    {
        question: "what is 2 + 2",
        answer: [
            { text: '13', correct: false},
            { text: '22', correct: false },
            { text: '4', correct: true },
            { text: '12', correct: false }
        ]
    },
    {
        question: "what is 3 + 2",
        answer: [
            { text: '5', correct: true },
            { text: '22', correct: false },
            { text: '52', correct: false },
            { text: '202', correct: false }
        ]
    },

    {
        question: "what is 400 - 2",
        answer: [
            { text: '10', correct: false },
            { text: '398', correct: true },
            { text: '20', correct: false },
            { text: '391', correct: false }
        ]
    },
    {
        question: "what is 234 - 2",
        answer: [
            { text: '10', correct: false },
            { text: '231', correct: false },
            { text: '120', correct: false },
            { text: '232', correct: true }
        ]
    },
    {
        question: "what is 00 - 2",
        answer: [
            { text: '10', correct: false },
            { text: '0', correct: true },
            { text: '100', correct: false },
            { text: '190', correct: false }
        ]
    },
    {
        question: "what is 100 - 2",
        answer: [
            { text: '110', correct: false },
            { text: '98', correct: true },
            { text: '00', correct: false },
            { text: '10', correct: false }
        ]
    }
]