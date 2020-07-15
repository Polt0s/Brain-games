import getRandomNumber from '../getRandomNumber.js';
import playNewGame from '../cli.js';

const regulations = 'Answer "yes" if the number is even, otherwise answer "no".';
const MIN_VALUE = 1;
const MAX_VALUE = 30;

const checkTheNumberForEven = (number) => {
  switch (true) {
    case number % 2 === 0:
      return 'yes';
    default:
      return 'no';
  }
};

const getGameData = () => {
  const question = getRandomNumber(MIN_VALUE, MAX_VALUE);
  const answer = checkTheNumberForEven(askQuestion);
  return { question, answer };
};

const startEvenGame = () => {
  playNewGame(getGameData, regulations);
};

export default startEvenGame;
