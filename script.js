'use strict';
window.onload = () => {
  const secretNum = Math.trunc(Math.random() * 20) + 1;
  let score = 20;
  const message = document.querySelector('.message');
  const insertedNum = document.querySelector('.guess');
  const playerScore = document.querySelector('.score');

  document.querySelector('.check').addEventListener('click', function () {
    const guessNum = Number(insertedNum.value);

    if (!guessNum) {
      message.textContent = 'No number!!';
    } else if (guessNum === secretNum) {
      message.textContent = 'Correct Number!';
    } else if (guessNum > secretNum) {
      message.textContent = 'Too high!';
      if (score > 1) {
        score--;
        playerScore.textContent = score;
      } else {
        message.textContent = 'You lost the game';
      }
    } else if (guessNum < secretNum) {
      message.textContent = 'Too low!';
      if (score < 1) {
        score--;
        playerScore.textContent = score;
      } else {
        message.textContent = 'You lost the game';
      }
    }
  });
};
