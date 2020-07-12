import getRandomNumber from '../getRandomNumber.js';
import getNewGame from '../cli.js';

const regulations = 'Find the greatest common divisor of given numbers.';

const getLargestCommonFactor = (num1, num2) => {
  let sum1 = num1;
  let sum2 = num2;
  while (sum1 !== sum2) {
    if (sum1 > sum2) {
      sum1 -= sum2;
    } else {
      sum2 -= sum1;
    }
  }
  return sum1;
};
getLargestCommonFactor();

const getGameData = () => {
  const randomNum1 = getRandomNumber(1, 30);
  const randomNum2 = getRandomNumber(1, 30);
  const askQuestion = `${randomNum1} ${randomNum2}`;
  const askAnswer = String(getLargestCommonFactor(randomNum1, randomNum2));
  return { question: askQuestion, answer: askAnswer };
};

const startNodGame = () => {
  getNewGame(getGameData, regulations);
};

export default startNodGame;
