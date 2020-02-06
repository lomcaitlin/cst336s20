var randomNumber = Math.floor(Math.random() * 99) + 1;
var guesses = document.querySelector('#guesses');
var lastResult = document.querySelector('#lastResult');
var lowOrHigh = document.querySelector('#lowOrHigh');

var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField');
var wins = document.querySelector('#wins');
var losses = document.querySelector('#losses');

var winsCount = 0;
var lossesCount = 0;
var guessCount = 1;
var resetButton = document.querySelector('#reset');
resetButton.style.display = 'none';
guessField.focus();

function checkGuess() {
    var userGuess = Number(guessField.value);
    if (isNaN(userGuess)) {
        lastResult.innerHTML = "Error: Not a number.";
        lastResult.style.backgroundColor = 'red';
        lowOrHigh.innerHTML ='';
        guessField.value = '';
        guessField.focus();
    }
    else if (userGuess > 99) {
        lastResult.innerHTML = "Error: Number is higher than 99.";
        lastResult.style.backgroundColor = 'red';
        lowOrHigh.innerHTML= '';
        guessField.value = '';
        guessField.focus();
    }
    else {
        if (guessCount === 1) {
            // $("#guesses").show();
            guesses.innerHTML = 'Previous guesses: ';
        }
        guesses.innerHTML += userGuess + ' ';
        
        if (userGuess === randomNumber) {
            lastResult.innerHTML = 'Congradulations! You got it right!';
            lastResult.style.backgroundColor = 'green';
            lowOrHigh.innerHTML = '';
            winsCount += 1;
            wins.innerHTML = "Wins: " + winsCount;
            setGameOver();
        }
        else if (guessCount === 7) {
            lastResult.innerHTML = 'Sorry, you lost!';
            lossesCount += 1;
            losses.innerHTML = "Losses: " + lossesCount;
            setGameOver();
        }
        else {
            // $("#lastResult").show();
            lastResult.innerHTML = 'Wrong!';
            lastResult.style.backgroundColor = 'red';
            if (userGuess < randomNumber) {
                // $("#lowOrHigh").show();
                lowOrHigh.innerHTML = 'Last guess was too low!';
            } else if (userGuess > randomNumber) {
                // $("#lowOrHigh").show();
                lowOrHigh.innerHTML = 'Last guess was too high!';
            }
        }
        guessCount++;
        guessField.value = '';
        guessField.focus();
    }
}

guessSubmit.addEventListener('click', checkGuess);
// $(".guessSubmit").click(checkGuess);

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton.style.display = 'inline';
    resetButton.addEventListener('click', resetGame);
    // $("#reset").click(resetGame);
}

function resetGame() {
    guessCount = 1;

    var resetParas = document.querySelectorAll('.resultParas p');
    for (var i = 0; i < resetParas.length; i++) {
        resetParas[i].textContent = '';
    }
    // $(".resultParas p").hide();

    resetButton.style.display = 'none';

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();

    lastResult.style.backgroundColor = 'white';

    randomNumber = Math.floor(Math.random() *99) + 1;
}