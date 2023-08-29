
const submitBtn = document.getElementById('submit');
// event listener cannot read properties of null?
submitBtn?.addEventListener("click", function() {

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
    score: 10,
    initials: initials.value,
};


highscores.push(newScore);
console.log({highscores,newScore})
localStorage.setItem('highscores', JSON.stringify(highscores));
//redirect to highscores page and display scores there
window.location.href = "highscores.html";

//JSON.parse(window.localStorage.getItem('highscores'));
//}

});
// use a loop to send all scores to the highscore page by using innerHTML or innerText methods

// connecting the clear button in highscores.html to remove local storage data

const clearHistoryBtn = document.getElementById('clearHistory');
// "event listener cannot clear properties of null, but its defined above?"
clearHistoryBtn?.addEventListener("click", function() {

localStorage.removeItem("highscores");
scoreListEl.innerHTML = ""
});

// start of timer code here

let timeRemaining = document.querySelector(".timer");
const startBtn = document.querySelector("#start");
const startScreenEl = document.querySelector("#start-screen");
//where do I add this test id?
//const questionsEl = document.querySelector("#test");

var time = document.getElementById("time");

startBtn?.addEventListener("click", function() {
    let secondsLeft = 10;
    //sets interval in variable
    var timerInterval = setInterval(function() {
        secondsLeft--;

        timeRemaining.textContent = secondsLeft + " seconds left";

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }
    }, 1000);
   
    function sendMessage() {
        timeRemaining.textContent = "Time is up!"
    }

   // startScreenEl.classList.add("hide")
   // questionsEl.classList.remove("hide")
})

const scoreListEl = document.getElementById('score-list')

function showHighScores () {
    const highscores = JSON.parse(localStorage.getItem('highscores')) || [];

    for (let i = 0; i < highscores.length; i++) {
        const score = highscores[i].score;
        const initials = highscores[i].initials; 
        const liEl = document.createElement('li')
        liEl.textContent = `${initials}: ${score}`
        scoreListEl.appendChild(liEl)
    }

}

showHighScores()