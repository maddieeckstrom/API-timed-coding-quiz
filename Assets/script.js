
// start of timer code here

let timeRemaining = document.querySelector(".timer");
const startBtn = document.querySelector("#start");
const startScreenEl = document.querySelector("#start-screen");
const time = document.getElementById("time");
let secondsLeft = 60;

startBtn?.addEventListener("click", function () {
    startTimer();
    displayNextQuestion();

    startScreenEl.classList.add("hide")
})

function startTimer() {
    const questionsEl = document.getElementById("questions-box");
    const resultsBoxEl = document.getElementById("results");
    //sets interval in variable
    var timerInterval = setInterval(function () {
        secondsLeft--;

        timeRemaining.textContent = secondsLeft + " seconds left";

        if (secondsLeft <= 0) {
            clearInterval(timerInterval);
            timeRemaining.textContent = "Time is up!";
            resultsBoxEl.classList.remove("hide");
            questionsEl.classList.add("hide");
        }
    }, 1000);
}

var questionTitle = document.getElementById('question-title');
var questionChoices = document.getElementById('choices');
var currentQuestionIndex = 0;

var myQuestions = [
    {
        question: 'How do you target a specific element within an array index?',
        answers: {
            a: 'dot notation',
            b: 'bracket notation',
            c: 'either'
        },
        correctanswer: 'bracket notation'
    },
    {
        question: 'Which elements are used to test TRUE or FALSE values in variables?',
        answers: {
            a: 'Conditional statements',
            b: 'Trigger readers',
            c: 'Comparison and logical operators'
        },
        correctanswer: 'Comparison and logical operators'
    },
    {
        question: 'Which element is used to store multiple values in a single variable?',
        answers: {
            a: 'Strings',
            b: 'Variables',
            c: 'Arrays'
        },
        correctanswer: 'Arrays'
    },
    {
        question: 'In JavaScript, what is used in conjunction with HTML to react to certain elements?',
        answers: {
            a: 'Events',
            b: 'Boolean',
            c: 'Condition'
        },
        correctanswer: 'Events'
    },
    {
        question: 'What is the element called that is used to describe the set of variables, objects, and functions you explicitly have access to?',
        answers: {
            a: 'Restriction',
            b: 'Scope',
            c: 'Range'
        },
        correctanswer: 'Scope'
    },
    {
        question: 'Which of these answers would you use for a variable that could be reassigned',
        answers: {
            a: 'var',
            b: 'const',
            c: 'let'
        },
        correctanswer: 'let'
    },
    {
        question: 'If "x" == 2, would could "x" be?',
        answers: {
            a: '20',
            b: '-2',
            c: 'none of the above'
        },
        correctanswer: '-2'
    },
    {
        question: 'What is DOM?',
        answers: {
            a: 'Document Of Modal',
            b: 'Document Of Maker',
            c: 'Document Object Model'
        },
        correctanswer: 'Document Object Model'
    },

]

function displayNextQuestion() {
    var currentQuestion = myQuestions[currentQuestionIndex]
    // console.log(currentQuestion.question)
    var currentQuestionText = currentQuestion.question;
    questionTitle.textContent = currentQuestionText;
    questionChoices.innerHTML = "";

    var currentQuestionChoices = Object.values(currentQuestion.answers);

    for (let i = 0; i < currentQuestionChoices.length; i++) {
        const choice = currentQuestionChoices[i];// 'answer1, answer2, answer3'
        var listEl = document.createElement("button");//<buttron></button>
        listEl.textContent = choice // <button>answer1</button>

        listEl.onclick = questionScore;

        questionChoices.appendChild(listEl)//<div class="choices"><button>answer1</button></div>
    }
}
   
let numCorrect = 0;

function questionScore(event) {
    let choiceBtn = event.target;

    if (
        choiceBtn.textContent === myQuestions[currentQuestionIndex].correctanswer
    ) {
        console.log('correct');
        numCorrect++;
    } else {
        console.log('wrong');
        secondsLeft = secondsLeft - 15;
    }

    currentQuestionIndex++;
    displayNextQuestion();
}

const submitBtn = document.getElementById('submit');
submitBtn?.addEventListener("click", function () {

    var score = document.getElementById("final-score");
    var initials = document.getElementById("initial");
    // console.log(initials);

    if (initials.value === "") {
        alert("Please provide initials");
        return;
    }

    var highscores = JSON.parse(localStorage.getItem('highscores')) || [];

    var newScore = {
        score: numCorrect,
        initials: initials.value,
    };


    highscores.push(newScore);
    console.log({ highscores, newScore })
    localStorage.setItem('highscores', JSON.stringify(highscores));
    //redirect to highscores page and display scores there
    window.location.href = "highscores.html";

});

// connecting the clear button in highscores.html to remove local storage data
const clearHistoryBtn = document.getElementById('clearHistory');
clearHistoryBtn?.addEventListener("click", function () {

    localStorage.removeItem("highscores");
    scoreListEl.innerHTML = ""
});

const scoreListEl = document.getElementById('score-list')

function showHighScores() {
    const highscores = JSON.parse(localStorage.getItem('highscores')) || [];
    
    for (let i = 0; i < highscores.length; i++) {
        const score = highscores[i].score;
        const initials = highscores[i].initials;
        const liEl = document.createElement('li')
        liEl.textContent = `${initials}: ${score}`
        scoreListEl?.appendChild(liEl)
    }

}

showHighScores()