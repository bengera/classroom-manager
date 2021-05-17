'use strict';

const counterScore = document.getElementById("score-a")
const buttonIncrement = document.getElementById("increment-a")
const buttonDecrement = document.getElementById("decrement-a")
const buttonReset = document.getElementById("reset-a")

buttonIncrement.addEventListener('click', countUp)
buttonDecrement.addEventListener('click', countDown)
buttonReset.addEventListener('click', reset)

let score = 0;


// document.querySelectorAll('.btnUp').forEach(btnUp => {
//     btnUp.addEventListener('click', () => {
//         console.log('count 1');
//         score++;
//         counterScore.innerText = score;
//     })
// })

// document.querySelectorAll('.btnDown').forEach(btnDown => {
//     btnDown.addEventListener('click', () => {
//         console.log('count -1');
//         score--;
//         counterScore.innerText = score;
//     })
// })

// document.querySelectorAll('.btnReset').forEach(btnReset => {
//     btnReset.addEventListener('click', () => {
//         console.log('reset');
//         init();
//     })
// })

const init = function () {
    score = 0;
    counterScore.textContent = 0;

}

init();

function countUp() {
    console.log('count 1');
    score++;
    counterScore.innerText = score;


}

function countDown() {
    console.log('count -1');
    score--;
    counterScore.innerText = score;
}

function reset() {
    console.log('reset');
    init();
}



