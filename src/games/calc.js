import getRandomNumber from '../getRandomNumber.js';
import getNewGame from '../cli.js';

const REGULATIONS = 'What is the result of the expression?';
const MIN_VALUE = 1;
const MAX_VALUE = 20;

const operators = ['*', '-', '+'];

const getAnswer = (x, y, operator) => {
  switch (operator) {
    case '+':
      return String(x + y);
    case '-':
      return String(x - y);
    case '*':
      return String(x * y);
    default:
      return null;
  }
};

const getGameData = () => {
  const firstRandomNumber = getRandomNumber(MIN_VALUE, MAX_VALUE);
  const secondRandomNumber = getRandomNumber(MIN_VALUE, MAX_VALUE);
  const randomOperator = operators[getRandomNumber(0, operators.length - 1)];
  const question = `${firstRandomNumber} ${randomOperator} ${secondRandomNumber}`;
  const answer = getAnswer(firstRandomNumber, secondRandomNumber, randomOperator);
  return { question, answer };
};

const startCalcGame = () => {
  getNewGame(getGameData, REGULATIONS);
};

export default startCalcGame;
