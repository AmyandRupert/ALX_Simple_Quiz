function checkAnswer() {
    const correctAnswer = "4";
const idValue = document.querySelector('input[name="quiz"]:checked');
const userAnswer = document.getElementById(feedback).value;}
if (userAnswer === correctAnswer) {
    idValue.textContent = "Correct! Well done.";}
else {
    idValue.textContent = "That's incorrect. Try again!";}
const submitanswer = document.getElementById("submit-answer");
submitanswer.addEventListener (click, checkAnswer);