import getRandomNumber from '../getRandomNumber.js';
import getNewGame from '../cli.js';

const regulations = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getRandomPrimeNumber = (number) => {
  if (number < 2) {
    return 'no';
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const getGameData = () => {
  const askQuestion = getRandomNumber(1, 20);
  const askAnswer = getRandomPrimeNumber(askQuestion);
  return { question: askQuestion, answer: askAnswer };
};

const startPrimeGame = () => {
  getNewGame(getGameData, regulations);
};

export default startPrimeGame;
