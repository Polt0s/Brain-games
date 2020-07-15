import getRandomNumber from '../getRandomNumber.js';
import playNewGame from '../cli.js';

const regulations = 'What is the result of the expression?';
const MIN_VALUE = 1;
const MAX_VALUE = 20;

const getRandomOperator = (isOperator) => {
  const array = Math.floor(Math.random() * isOperator.length);
  return isOperator[array];
};
const isOperator = ['*', '-', '+'];

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
  const firstRandomNumber = getRandomNumber(MIN_VALUE, MAX_VALUE);
  const secondRandomNumber = getRandomNumber(MIN_VALUE, MAX_VALUE);
  const randomOperator = getRandomOperator(isOperator);
  const question = `${firstRandomNumber} ${randomOperator} ${secondRandomNumber}`;
  const answer = getAnswer(firstRandomNumber, secondRandomNumber, randomOperator);
  return { question, answer };
};

const startCalcGame = () => {
  playNewGame(getGameData, regulations);
};

export default startCalcGame;
