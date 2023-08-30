
// start of timer code here

let timeRemaining = document.querySelector(".timer");
const startBtn = document.querySelector("#start");
const startScreenEl = document.querySelector("#start-screen");
//where do I add this test id?
//const questionsEl = document.querySelector("#test");

var time = document.getElementById("time");

startBtn?.addEventListener("click", function () {
    startTimer();
    displayNextQuestion();

    // startScreenEl.classList.add("hide")
    // questionsEl.classList.remove("hide")
})

function startTimer() {
    let secondsLeft = 100;
    //sets interval in variable
    var timerInterval = setInterval(function () {
        secondsLeft--;

        timeRemaining.textContent = secondsLeft + " seconds left";

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            timeRemaining.textContent = "Time is up!";
        }
    }, 1000);
}

var questionTitle = document.getElementById('question-title');
var questionChoices = document.getElementById('choices');
var currentQuestionIndex = 0;

var myQuestions = [
    {
        question: 'first question',
        answers: {
            a: 'answer 1',
            b: 'answer 2',
            c: 'answer 3'
        },
        correctanswer: 'answer 2'
    },
    {
        question: 'second question',
        answers: {
            a: 'answer 1',
            b: 'answer 2',
            c: 'answer 3'
        },
        correctanswer: 'answer 2'
    },
    {
        question: 'third question',
        answers: {
            a: 'answer 1',
            b: 'answer 2',
            c: 'answer 3'
        },
        correctanswer: 'answer 2'
    },
]

function displayNextQuestion() {
    var currentQuestion = myQuestions[currentQuestionIndex]
    // console.log(currentQuestion.question)
    var currentQuestionText = currentQuestion.question;
    questionTitle.textContent = currentQuestionText;

    var currentQuestionChoices = Object.values(currentQuestion.answers);

    for (let i = 0; i < currentQuestionChoices.length; i++) {
        const choice = currentQuestionChoices[i];// 'answer1, answer2, answer3'
        var listEl = document.createElement("button");//<buttron></button>
        listEl.textContent = choice // <button>answer1</button>
        questionChoices.appendChild(listEl)//<div class="choices"><button>answer1</button></div>
    }
}

//select the 'choices' container and give it an 'onclick' that calls the new 'questionClick' function 
var choicesEl = document.getElementById('choices');
// the line of code below is preventing highscores from showing on highscore page (code lines 107-138), but without it, answers aren't logging when answer button is clicked (code lines 90-105)?
choicesEl.onclick = questionClick;

//to register if the answer the user clicks is correct or not
function questionClick(event) {
    //set the event.target to a variable (the button we clicked)
    var choiceBtn = event.target;
    var numCorrect = 0;
    // check if the textContent of the button matches the correctanswer value
    if (
        choiceBtn.textContent === myQuestions[currentQuestionIndex].correctanswer
    ) {
        console.log('correct');
        numCorrect++;
    } else {
        console.log('wrong');
        secondsLeft = secondsLeft - 15;
    }
}

const submitBtn = document.getElementById('submit');
// event listener cannot read properties of null?
submitBtn?.addEventListener("click", function () {

    var score = document.getElementById("final-score");
    var initials = document.getElementById("initial");
    // console.log(initials);

    // write an if statement here to make sure initials value is not blank
    if (initials.value === "") {
        alert("Please provide initials");
        return;
    }

    var highscores = JSON.parse(localStorage.getItem('highscores')) || [];

    var newScore = {
        score: 10, //how can I set this to numCorrect?
        initials: initials.value,
    };


    highscores.push(newScore);
    console.log({ highscores, newScore })
    localStorage.setItem('highscores', JSON.stringify(highscores));
    //redirect to highscores page and display scores there
    window.location.href = "highscores.html";

    //JSON.parse(window.localStorage.getItem('highscores'));
    //}

});

// connecting the clear button in highscores.html to remove local storage data

const clearHistoryBtn = document.getElementById('clearHistory');
// "event listener cannot clear properties of null, but its defined above?"
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