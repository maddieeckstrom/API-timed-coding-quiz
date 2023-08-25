
var submitButton = document.getElementById("submit");

submitButton.addEventListener("click", function(event) {
    event.preventDefault();

let score = document.getElementById("final-score");
let initials = document.getElementById("initial");

// write an if statement here to make sure initials value is not blank
if (initials == '') {
    alert("You must provide initials")
    return
}

let highscores = JSON.parse(window.localStorage.getItem('highscores')) || [];

let newScore = {
    finalScore: finalScore.value,
    initials: initials.value,
};

highscores.push(newScore);
window.localStorage.setItem('highscores', JSON.stringify(highscores));

JSON.parse(window.localStorage.getItem('highscores'));

});


// connecting the clear button in highscores.html to remove local storage data

clearHistoryButton.addEventListener("click", function(event) {
event.preventDefault();

localStorage.removeItem("highscoreData", JSON.stringify(highscoreData));
renderMessage("No Current Highscores");

})