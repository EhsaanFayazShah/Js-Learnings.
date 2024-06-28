'use strict';

let score = 20;
let highScore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

const displayMessage = (message) => {
  document.querySelector('.message').textContent = message;
};

//Handling the Reset button.
document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  displayMessage('Start guessing...');
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
});

//to test the number hidden.
// console.log((document.querySelector('.number').textContent = secretNumber));

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  // console.log(guess, typeof guess);
  if (!guess) {
    displayMessage('⛔ No Number!');
  }
  //if user wins
  else if (guess === secretNumber) {
    displayMessage('You are Right You Won');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }

  // if the number is high or Low than secretNumber
  else {
    if (guess !== secretNumber) {
      if (score > 1) {
        displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low!');
        --score;
        document.querySelector('.score').textContent = score;
      } else {
        displayMessage('You Lost the Game');
        document.querySelector('.score').textContent = 0;
        document.querySelector('body').style.backgroundColor = 'red';
      }
    }
  }
});
