var randNum = Math.round(Math.random()*99 ) + 1;

function sendData(form) {
    var guessNum = form.inputbox.value;

if (randNum === guessNum) {
    document.getElementById("answer").innerText = "Congrats you Won!!"
} else if (randNum > guessNum) {
    document.getElementById("answer").innerText = "Too Low, try again"
} else if (randNum < guessNum) {
    document.getElementById('answer').innerText = "Too high, try again"
} 

}