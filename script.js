'use strict';
window.onload = () => {
  let secretNum = Math.trunc(Math.random() * 20) + 1;
  let score = 20;
  const message = document.querySelector('.message');
  const insertedNum = document.querySelector('.guess');
  const playerScore = document.querySelector('.score');
  const body = document.querySelector('body');
  const displayedNum = document.querySelector('.number');
  let highScore = 0;

  const changeMessage = message => {
    message.textContent = message;
  };

  document.querySelector('.check').addEventListener('click', function () {
    const guessNum = Number(insertedNum.value);
    if (!guessNum) {
      changeMessage('No number!!');
    } else if (guessNum === secretNum) {
      changeMessage('Correct Number!');
      body.style.backgroundColor = '#60b347';
      displayedNum.style.width = '30rem';
      displayedNum.textContent = secretNum;

      if (highScore < score) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
    } else if (guessNum !== secretNum) {
      changeMessage(guessNum > secretNum ? 'Too high!' : 'Too low!');
      if (score > 1) {
        score--;
        playerScore.textContent = score;
      } else {
        message.textContent = 'You lost the game';
        playerScore.textContent = 0;
      }
    }
  });

  document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNum = Math.trunc(Math.random() * 20) + 1;
    insertedNum.value = '';
    playerScore.textContent = score;
    displayedNum.textContent = '?';
    displayedNum.style.width = '15rem';
    changeMessage('Start guessing...');
    body.style.backgroundColor = '#222';
  });
};
