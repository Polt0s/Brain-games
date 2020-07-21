import getRandomNumber from '../getRandomNumber.js';
import getNewGame from '../cli.js';

const REGULATIONS = 'Answer "yes" if the number is even, otherwise answer "no".';
const MIN_VALUE = 1;
const MAX_VALUE = 30;

const isEven = (number) => number % 2 === 0;

const getGameData = () => {
  const question = getRandomNumber(MIN_VALUE, MAX_VALUE);
  const answer = ((isEven(question)) ? 'yes' : 'no');
  return { question, answer };
};

const startEvenGame = () => {
  getNewGame(getGameData, REGULATIONS);
};

export default startEvenGame;
