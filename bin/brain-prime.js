#!/usr/bin/env node
import readlineSync from 'readline-sync';
import getRandomInt from '../src/getRandomInt.js';

console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

for (let i = 0; i <= 2; i += 1) {
  const num = getRandomInt(1, 1000);
  console.log(`Question: ${num}`);
  const answer = readlineSync.question('Your answer: ');
  const isPrime = () => {
    let counter = 0;
    for (let b = num; b > 0; b -= 1) {
      if (num % b === 0) {
        counter += 1;
      }
    }
    return String(counter === 2);
  };
  let correctAnswer;
  if (isPrime() === 'true') {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
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
