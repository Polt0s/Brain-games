import getRandomNumber from '../getRandomNumber.js';
import getNewGame from '../cli.js';

const regulations = 'What is the result of the expression?';

const getRandomOperator = (sing) => {
  const array = Math.floor(Math.random() * sing.length);
  return sing[array];
};
const sing = ['*', '-', '+'];
getRandomOperator(sing);

const getAnswer = (x, y, operator) => {
  switch (operator) {
    case '+':
      return String(x + y);
    case '-':
      return String(x - y);
    default:
      return String(x * y);
  }
};

const getGameData = () => {
  const randomNum1 = getRandomNumber(1, 10);
  const randomNum2 = getRandomNumber(1, 10);
  const randomOperator = getRandomOperator(sing);
  const askQuestion = `${randomNum1} ${randomOperator} ${randomNum2}`;
  const askAnswer = getAnswer(randomNum1, randomNum2, randomOperator);
  return { question: askQuestion, answer: askAnswer };
};

const startCalcGame = () => {
  getNewGame(getGameData, regulations);
};

export default startCalcGame;
