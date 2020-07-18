import getRandomNumber from '../getRandomNumber.js';
import playNewGame from '../cli.js';

const regulations = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const MIN_VALUE = 1;
const MAX_VALUE = 25;

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getGameData = () => {
  const question = getRandomNumber(MIN_VALUE, MAX_VALUE);
  const answer = isPrime(question) ? 'yes' : 'no';
  return { question, answer };
};

const startPrimeGame = () => {
  playNewGame(getGameData, regulations);
};

export default startPrimeGame;
