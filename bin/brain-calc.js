#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

console.log('What is the result of the expression?');

const calcGame = () => {
  for (let i = 0; i <= 2; i += 1) {
    const randomInt1 = Math.floor(Math.random() * 51);
    const randomInt2 = Math.floor(Math.random() * 31);
    const operators = ['+', '-', '*'];
    const randomOperator = operators[Math.floor(Math.random() * 3)];
    const randomExpression = `${randomInt1} ${randomOperator} ${randomInt2}`;
    // eslint-disable-next-line no-eval
    const correctAnswer = String(eval(randomExpression));

    console.log(`Question: ${randomExpression}`);
    const answer = readlineSync.question('Your answer: ');
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

calcGame();
