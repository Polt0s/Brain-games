import getRandomNumber from '../getRandomNumber.js';
import getNewGame from '../cli.js';

const regulations = 'Answer "yes" if the number is even, otherwise answer "no".';

const getEvenNumber = (number) => {
  switch (number) {
    case number % 2 === 0:
      return 'yes';
    default:
      return 'no';
  }
};

const getGameData = () => {
  const askQuestion = getRandomNumber(1, 20);
  const askAnswer = getEvenNumber(askQuestion);
  return { question: askQuestion, answer: askAnswer };
};

const startEvenGame = () => {
  getNewGame(getGameData, regulations);
};

export default startEvenGame;
