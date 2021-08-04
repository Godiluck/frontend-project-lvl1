#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const evenGame = () => {
  for (let i = 0; i <= 2; i += 1) {
    const randomInt = Math.floor(Math.random() * 101);
    console.log(`Question: ${randomInt}`);
    const answer = readlineSync.question('Your answer:');
    if (randomInt % 2 === 0) {
      if (answer === 'yes') {
        console.log('Correct!');
      } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.`);
        console.log(`Let's try again, ${userName}!`);
        break;
      }
    } else if (randomInt % 2 !== 0) {
      if (answer === 'no') {
        console.log('Correct!');
      } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.`);
        console.log(`Let's try again, ${userName}!`);
        break;
      }
    }
    if (i === 2) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

evenGame();
