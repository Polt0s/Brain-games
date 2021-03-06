import getRandomNumber from '../getRandomNumber.js';
import playGame from '../cli.js';

const RULES = 'What number is missing in the progression?';
const MIN_VALUE = 1;
const MAX_VALUE = 5;
const MIN_PROGRESSION_START_VALUE = 1;
const MAX_PROGRESSION_START_VALUE = 5;
const LENGTH_PROGRESSION = 10;

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
  const step = getRandomNumber(MIN_PROGRESSION_START_VALUE, MAX_PROGRESSION_START_VALUE);
  const progression = getProgression(firstElement, step, LENGTH_PROGRESSION);
  const hiddenIndex = getRandomNumber(0, progression.length - 1);
  const hiddenElement = progression[hiddenIndex];
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');
  const answer = String(hiddenElement);
  return { question, answer };
};

const startProgressionGame = () => {
  playGame(getGameData, RULES);
};

export default startProgressionGame;
