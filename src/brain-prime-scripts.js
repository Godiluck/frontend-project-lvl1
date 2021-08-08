import getRandomInt from './getRandomInt.js';

export const taskDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const question = () => {
  const num = getRandomInt(1, 1000);
  console.log(`Question: ${num}`);
  return num;
};

export const correct = (num) => {
  let counter = 0;
  for (let b = num; b > 0; b -= 1) {
    if (num % b === 0) {
      counter += 1;
    }
  }
  const correctAnswer = counter === 2;
  if (correctAnswer === false) {
    return 'no';
  }
  return 'yes';
};
