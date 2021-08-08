import readlineSync from 'readline-sync';
import welcome from './welcome.js';

const gameBody = (taskDescription, question, correct) => {
  const userName = welcome();
  console.log(taskDescription);

  for (let i = 0; i <= 2; i += 1) {
    const value = question();
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = correct(value);

    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
    if (i === 2) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default gameBody;
