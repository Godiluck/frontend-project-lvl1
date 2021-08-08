import getRandomInt from './getRandomInt.js';

export const taskDescription = 'What number is missing in the progression?';

export const question = () => {
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
  console.log(`Question ${newArr}`);
  return correctAnswer;
};

export const correct = (correctAnswer) => String(correctAnswer);
