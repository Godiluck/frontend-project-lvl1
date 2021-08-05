#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

console.log('Find the greatest common divisor of given numbers.');

const gcdGame = () => {
  for (let i = 0; i <= 2; i += 1) {
    const randomInt1 = Math.floor(Math.random() * 101);
    const randomInt2 = Math.floor(Math.random() * 101);
    let divisor;
    const findDivisor = () => {
      if (randomInt1 >= randomInt2) {
        divisor = randomInt2;
      } else {
        divisor = randomInt1;
      }
      for (divisor; divisor > 1;) {
        if (randomInt1 % divisor === 0 && randomInt2 % divisor === 0) {
          break;
        } else {
          divisor -= 1;
        }
      }
      return divisor;
    };

    findDivisor();

    const correctAnswer = String(divisor);

    console.log(`Question: ${randomInt1} ${randomInt2}`);
    const answer = readlineSync.question('Your answer:');
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    } if (i === 2) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

gcdGame();
