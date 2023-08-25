
// connecting the save button on index.html to save data on highscores.html below
var finalScore = document.getElementById("final-score");
var initials = document.getElementById("initial");

submitButton.addEventListener("click", function(event) {
event.preventDefault();

var highscoreData = {
    finalScore: finalScore.value,
    initials: initials.value,
};

localStorage.setItem("highscoreData", JSON.stringify(highscoreData));
renderMessage();

});

// use localStorage.getItem to access the stored data up above.. but how do I access it in highscores.html?


// connecting the clear button in highscores.html to remove local storage data

clearHistoryButton.addEventListener("click", function(event) {
event.preventDefault();

localStorage.removeItem("highscoreData", JSON.stringify(highscoreData));
renderMessage("No Current Highscores");

})