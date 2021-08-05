#!/usr/bin/env node
import readlineSync from 'readline-sync';
import getRandomInt from '../src/getRandomInt.js';

console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

console.log('What number is missing in the progression?');

const progressionGame = () => {
  for (let i = 0; i <= 2; i += 1) {
    const progression = [];
    let randomInt = getRandomInt(1, 20);
    const lengthOfProg = getRandomInt(5, 12);
    const randomPlus = getRandomInt(2, 7);
    for (; progression.length < lengthOfProg;) {
      progression.push(randomInt);
      randomInt += randomPlus;
    }
    const hiddenElem = getRandomInt(0, lengthOfProg);
    const hiddenSymbol = '..';
    const correctAnswer = String(progression[hiddenElem]);
    progression[hiddenElem] = hiddenSymbol;
    const newArr = progression.join(' ');

    console.log(`Question: ${newArr}`);
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

progressionGame();
