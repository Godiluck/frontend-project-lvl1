import getRandomInt from './getRandomInt.js';

export const taskDescription = 'Find the greatest common divisor of given numbers.';

export const question = () => {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);
  console.log(`Question ${num1} ${num2}`);
  return [num1, num2];
};

export const correct = (numbers) => {
  const num1 = numbers[0];
  const num2 = numbers[1];
  let divisor;
  if (num1 >= num2) {
    divisor = num2;
  } else {
    divisor = num1;
  }
  for (divisor; divisor > 1;) {
    if (num1 % divisor === 0 && num2 % divisor === 0) {
      break;
    } else {
      divisor -= 1;
    }
  }
  return String(divisor);
};
