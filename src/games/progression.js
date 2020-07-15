import getRandomNumber from '../getRandomNumber.js';
import playNewGame from '../cli.js';

const regulations = 'What number is missing in the progression?';

const LENGTH_PROGRESSION = 10;
const MIN_VALUE = 1;
const MAX_VALUE = 5;

const getProgression = (firstElement, step) => {
  const progressionArray = [];
  for (let i = 0; i < LENGTH_PROGRESSION; i += 1) {
    const element = firstElement + step * i;
    progressionArray.push(element);
  }
  return progressionArray;
};


const getGameData = () => {
  const firstElement = getRandomNumber(MIN_VALUE, MAX_VALUE);
  const step = getRandomNumber(MIN_VALUE, MAX_VALUE);
  const progression = getProgression(firstElement, step);
  const hiddenElementNumber = getRandomNumber(0, progression.length - 1);
  const hiddenIndex = progression[hiddenElementNumber];
  progression[hiddenElementNumber] = '..';
  const question = progression.join(' ');
  const answer = String(hiddenIndex);
  return { question, answer };
};

const startProgressionGame = () => {
  playNewGame(getGameData, regulations);
};

export default startProgressionGame;
