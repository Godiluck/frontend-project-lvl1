import getRandomInt from './getRandomInt.js';

export const taskDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

export const question = () => {
  const num = getRandomInt(1, 100);
  console.log(`Question: ${num}`);
  return num;
};

export const correct = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};
