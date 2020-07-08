import readlineSync from 'readline-sync';
import userName from '../cli.js';
import getRandomNumber from '../getRandomNumber.js';

const runGame = () => {
  console.log('What is the result of the expression?');

  const getRandomOperator = (sing) => {
    const array = Math.floor(Math.random() * sing.length);
    return sing[array];
  };

  const sing = ['*', '-', '+'];
  getRandomOperator(sing);

  const getRandomExpression = () => {
    const sum = `${getRandomNumber(1, 20)} ${getRandomOperator(sing)} ${getRandomNumber(1, 20)}`;
    return sum;
  };
  getRandomExpression();

  const getAnswerExpression = () => {
    let counter = 0;
    while (counter <= 2) {
      const result = getRandomExpression();
      console.log(`Question: ${result}`);
      const askQuestion = readlineSync.question('Your answer: ');
      const sumOfExpression = eval(result);
      if (Number(askQuestion) === sumOfExpression) {
        console.log('Correct!');
        counter += 1;
        if (counter === 3) {
          console.log(`Congratulations, ${userName}!`);
          break;
        }
      } else {
        console.log(`${askQuestion} is wrong answer ;(. Correct answer was ${sumOfExpression}.`);
        console.log(`Let's try again, ${userName}!`);
        counter = 0;
      }
    }
  };
  getAnswerExpression();
};
export default runGame;
