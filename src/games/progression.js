import readlineSync from 'readline-sync';
import userName from '../cli.js';
import getRandomNumber from '../getRandomNumber.js';

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

const runGame = () => {
  console.log('What number is missing in the progression?');
  const getRanmdomProgression = () => {
    let counter = 0;
    while (counter <= 2) {
      const oneElement = getRandomNumber(1, 5);
      const stepElement = getRandomNumber(1, 5);
      const hiddenElementNum = getRandomNumber(1, 5);
      const randomProgression = getProgression(oneElement, stepElement, hiddenElementNum);
      const answer = oneElement + stepElement * hiddenElementNum;
      console.log(`Question: ${randomProgression}`);
      const askQuestion = readlineSync.question('Your answer: ');
      if (askQuestion == answer) {
        console.log('Correct!');
        counter += 1;
        if (counter === 3) {
          console.log(`Congratulations, ${userName}!`);
          break;
        }
      } else {
        console.log(`${askQuestion} is wrong answer ;(. Correct answer was ${answer}.`);
        console.log(`Let's try again, ${userName}!`);
        counter = 0;
      }
    }
  };
  getRanmdomProgression();
};
export default runGame;
