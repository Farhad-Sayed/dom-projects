'use strict';

// let secretNumber = Math.floor(Math.random()* 20);
// console.log(secretNumber);
// let score = 20; 
// let highScore = 0;

// document.querySelector('.check').addEventListener('click', function(){
//     const guess = Number(document.querySelector('.guess').value);
//     console.log(guess);
//     if (!guess) {
//         document.querySelector('.message').textContent = 'Enter your guess!';
//     }
//     else if (guess === secretNumber) {
//         document.querySelector('.message').textContent = 'It\'s Perfect!';
//         document.querySelector('.number').textContent = secretNumber;
//         // highscore logic
//         if(score > highScore) {
//             highScore = score;
//             document.querySelector('.highscore').textContent = highScore;
//         }
//         // changeing styles
//         document.querySelector('body').style.backgroundColor = "#845EC2";
//         document.querySelector('.number').style.width = '30rem';
//     }
//     else if (guess > secretNumber) {
//         if (score > 1) {
//             document.querySelector('.message').textContent = 'Too High!';
//             score--;
//             document.querySelector('.score').textContent = score;
//         }
//         else{
//             document.querySelector('.message').textContent = 'Try Again!';
//             score--;
//             document.querySelector('.score').textContent = score;
//         }
//     }
//     else if (guess < secretNumber) {
//         if (score > 1) {
//             document.querySelector('.message').textContent = 'Too Low!';
//             score--;
//             document.querySelector('.score').textContent = score;
//         }
//         else{
//             document.querySelector('.message').textContent = 'Try Again!';
//             score--;
//             document.querySelector('.score').textContent = score;
//         }
//     }
// });

// // Reset functionality by again button.
// document.querySelector('.again').addEventListener('click', function () {
//     secretNumber = Math.floor(Math.random()* 20);
//     score = 20; 
//     document.querySelector('.guess').value = '';
//     document.querySelector('.score').textContent = score;
//     document.querySelector('.message').textContent = 'Start guessing ...';
//     document.querySelector('.number').textContent = '?';
//     // changeing style
//     document.querySelector('body').style.backgroundColor = "#222";
//     document.querySelector('.number').style.width = '15rem';
// });

// Dry code solution...

let secretNumber = Math.floor(Math.random()* 20);
console.log(secretNumber);
let score = 20; 
let highScore = 0;

let message = message => {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);
    if (!guess) {
        // document.querySelector('.message').textContent = 'Enter your guess!';
        message('Enter your guess!');
    }
    else if (guess === secretNumber) {
        // document.querySelector('.message').textContent = 'It\'s Perfect!';
        message('It\'s Perfect!');
        document.querySelector('.number').textContent = secretNumber;
        // highscore logic
        if(score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
        // changeing styles
        document.querySelector('body').style.backgroundColor = "#845EC2";
        document.querySelector('.number').style.width = '30rem';
    }
    else if (guess !== secretNumber) {
        if (score > 1) {
            // document.querySelector('.message').textContent = guess > secretNumber ? 'Too High!': 'Too Low!';
            message(guess > secretNumber ? 'Too High!': 'Too Low!');
            score--;
            document.querySelector('.score').textContent = score;
        }
        else{
            // document.querySelector('.message').textContent = 'Try Again!';
            message('Try Again!');
            score--;
            document.querySelector('.score').textContent = score;
        }
    }
});

// Reset functionality by again button.
document.querySelector('.again').addEventListener('click', function () {
    secretNumber = Math.floor(Math.random()* 20);
    score = 20; 
    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = score;
    // document.querySelector('.message').textContent = 'Start guessing ...';
    message('Start guessing ...');
    document.querySelector('.number').textContent = '?';
    // changeing style
    document.querySelector('body').style.backgroundColor = "#222";
    document.querySelector('.number').style.width = '15rem';
});
