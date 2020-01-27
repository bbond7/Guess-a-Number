var randNum = Math.round((Math.random() * 100) + 1);
var counter= 0;
var img1 = document.createElement("img");
img1.src = "";

function sendData(form) {
    var guessNum = form.inputbox.value;
    form.inputbox.value = "";
    counter += 1;

if (randNum == guessNum) {
    document.getElementById("answer").innerText = "Congrats you won!! It took you " + counter + " guesses." + img1
} else if (randNum > guessNum) {
    document.getElementById("answer").innerText = "Too Low, try again"
} else if (randNum < guessNum) {
    document.getElementById("answer").innerText = "Too high, try again"
} else if (isNaN(guessNum) || guessNum < 1 || guessNum > 100) {
    document.getElementById("answer").innerText = "Not Valid, try again"
}
}

console.log(randNum);