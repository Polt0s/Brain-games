import getRandomNumber from '../getRandomNumber.js';
import getNewGame from '../cli.js';

const REGULATIONS = 'What number is missing in the progression?';

const MIN_VALUE = 1;
const MAX_VALUE = 5;

const getProgression = (firstElement, step, lengthProgression) => {
  const progressionArray = [];
  for (let i = 0; i < lengthProgression; i += 1) {
    const element = firstElement + step * i;
    progressionArray.push(element);
  }
  return progressionArray;
};

const getGameData = () => {
  const firstElement = getRandomNumber(MIN_VALUE, MAX_VALUE);
  const step = getRandomNumber(MIN_VALUE, MAX_VALUE);
  const lengthProgression = 10;
  const progression = getProgression(firstElement, step, lengthProgression);
  const hiddenElement = getRandomNumber(0, progression.length - 1);
  const hiddenIndex = progression[hiddenElement];
  progression[hiddenElement] = '..';
  const question = progression.join(' ');
  const answer = String(hiddenIndex);
  return { question, answer };
};

const startProgressionGame = () => {
  getNewGame(getGameData, REGULATIONS);
};

export default startProgressionGame;
