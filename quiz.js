const quizForm = document.querySelector(".quiz-form");
const submitButton = document.querySelector("#submit-answer-btn");
const output = document.querySelector("#output");

const correctAnswers = ["90°", "right angled", "one right angle","a + b + c","no","45°"]

function calculateScore() {
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);
    // console.log(formResults);

    for (let value of formResults.values()) {
        if (value === correctAnswers[index]) {
            score = score + 1;
        }
        index = index + 1;
    }
    output.innerText = "your score is: " + score;
}

submitButton.addEventListener("click", calculateScore);