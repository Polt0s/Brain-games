import getRandomNumber from '../getRandomNumber.js';
import getNewGame from '../cli.js';

const regulations = 'What number is missing in the progression?';

const getProgression = (firstElement, step, hiddenElement) => {
  const Array = [];
  for (let i = 0; i < 10; i += 1) {
    const element = firstElement + step * i;
    if (i === hiddenElement) {
      Array.push('..');
    } else {
      Array.push(element);
    }
  }
  return Array.join(' ');
};

const getGameData = () => {
  const oneElement = getRandomNumber(1, 5);
  const stepElement = getRandomNumber(1, 5);
  const hiddenElementNumber = getRandomNumber(1, 5);
  const askQuestion = getProgression(oneElement, stepElement, hiddenElementNumber);
  const askAnswer = String(oneElement + stepElement * hiddenElementNumber);
  return { question: askQuestion, answer: askAnswer };
};

const startProgressionGame = () => {
  getNewGame(getGameData, regulations);
};

export default startProgressionGame;
