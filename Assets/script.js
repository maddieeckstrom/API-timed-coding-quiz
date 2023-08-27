
var submitBtn = document.getElementById("submit");

submitBtn.addEventListener("click", function(event) {
    event.preventDefault();

let score = document.getElementById("final-score");
let initials = document.getElementById("initial");

// write an if statement here to make sure initials value is not blank
//how do I make it so it only alerts on a blank response?
if (initials !== '') {
    alert("You must provide initials")
    return
}

let highscores = JSON.parse(window.localStorage.getItem('highscores')) || [];

let newScore = {
    score: score.value,
    initials: initials.value,
};

highscores.push(newScore);
window.localStorage.setItem('highscores', JSON.stringify(highscores));

JSON.parse(window.localStorage.getItem('highscores'));

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

letTimeRemaining = document.querySelector(".timer");
const startBtn = document.querySelector("#start");
const startScreenEl = document.querySelector("#start-screen");
//where do I add this test id?
const questionsEl = docoument.querySelector("#test");

// selects element by ID
let time = document.getElementById("time");

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

    startScreenEl.classList.add("hide")
    questionsEl.classList.remove("hide")
})
