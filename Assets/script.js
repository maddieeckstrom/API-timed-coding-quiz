
const submitBtn = document.getElementById('submit');

submitBtn.addEventListener("click", function() {

var score = document.getElementById("final-score");
var initials = document.getElementById("initial");
// console.log(initials);

// write an if statement here to make sure initials value is not blank
if (initials === "") {
    alert("Please provide initials");
    return;
}

var highscores = JSON.parse(localStorage.getItem('highscores')) || [];

var newScore = {
    score: score.value,
    initials: initials.value,
};

score = 10;

highscores.push(newScore);
localStorage.setItem('highscores', JSON.stringify(highscores));
//redirect to highscores page and display scores there
window.location.href = "highscores.html";

//JSON.parse(window.localStorage.getItem('highscores'));
//}

});
// use a loop to send all scores to the highscore page by using innerHTML or innerText methods



// connecting the clear button in highscores.html to remove local storage data

//var clearHistoryButton = document.getElementById("clearHistory")

//clearHistoryButton.addEventListener("click", function(event) {
//event.preventDefault();

//localStorage.clear("highscores", JSON.stringify(highscores));
//renderMessage();

//})

// start of timer code here

let timeRemaining = document.querySelector(".timer");
const startBtn = document.querySelector("#start");
const startScreenEl = document.querySelector("#start-screen");
//where do I add this test id?
const questionsEl = document.querySelector("#test");

// selects element by ID
var time = document.getElementById("time");

startBtn.addEventListener("click", function() {
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
