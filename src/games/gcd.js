import getRandomNumber from '../getRandomNumber.js';
import playNewGame from '../cli.js';

const regulations = 'Find the greatest common divisor of given numbers.';
const MIN_VALUE = 1;
const MAX_VALUE = 30;

const getLargestCommonFactor = (x, y) => {
  if (y === 0) {
    return x;
  }
  return getLargestCommonFactor(y, x % y);
};

const getGameData = () => {
  const firstRandomNumber = getRandomNumber(MIN_VALUE, MAX_VALUE);
  const secondRandomNumber = getRandomNumber(MIN_VALUE, MAX_VALUE);
  const question = `${firstRandomNumber} ${secondRandomNumber}`;
  const answer = String(getLargestCommonFactor(firstRandomNumber, secondRandomNumber));
  return { question, answer };
};

const startGcdGame = () => {
  playNewGame(getGameData, regulations);
};

export default startGcdGame;
