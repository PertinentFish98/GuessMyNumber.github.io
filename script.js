'use strict';

let secretnumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;
let i = 0;
let j = 0;
let sum = 0;
let avg = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.number').textContent = '?';

document.querySelector('.check').addEventListener('click', function () {
  let highscore = Number(document.querySelector('.highscore').textContent);
  const guess = Number(document.querySelector('.guess').value);
  j++;
  //When there is no input
  if (!guess) {
    displayMessage('😣 No number!');
    //When the input is out of boundary
  } else if (guess > 20 || guess < 0) {
    displayMessage('👎 Impossible number');
    //When the player wins
  } else if (guess === secretnumber) {
    displayMessage('🎇 Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretnumber;
    if (score > highscore) {
      document.querySelector('.highscore').textContent = score;
    }
    document.querySelector('.lastscore').textContent = score;
    i++;
    sum += score;
    avg = (sum / i).toFixed(2);
    //When the guess is not correct
  } else if (guess !== secretnumber) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      displayMessage(guess > secretnumber ? '😥 Too high!' : '😯 Too low!');
    } else {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.lastscore').textContent = score - 1;
      displayMessage('🧨 You lost the game!');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  if (j !== 0) {
    secretnumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = '10';
    document.querySelector('.guess').value = '';
  } else {
    displayMessage('Choose a number at least 1 time to begin!');
  }
  document.querySelector('.avgscore').textContent = avg;
  score = 10;
});
