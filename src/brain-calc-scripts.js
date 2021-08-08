import getRandomInt from './getRandomInt.js';

export const taskDescription = 'What is the result of the expression?';

export const question = () => {
  const num1 = getRandomInt(1, 50);
  const num2 = getRandomInt(1, 30);
  const operators = ['+', '-', '*'];
  const randomOperator = operators[Math.floor(Math.random() * 3)];
  const expression = `${num1} ${randomOperator} ${num2}`;
  console.log(`Question ${expression}`);
  return expression;
};

export const correct = (expression) =>
// eslint-disable-next-line no-eval,implicit-arrow-linebreak
  String(eval(expression));
