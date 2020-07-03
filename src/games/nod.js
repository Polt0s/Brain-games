import readlineSync from 'readline-sync';
import userName from '../cli.js';
import getRandomNumber from '../getRandomNumber.js';

const getLargestCommonFactor = (num1, num2) => {
  while (num1 !== num2) {
    if (num1 > num2) {
      num1 = num1 - num2;
    } else {
      num2 = num2 - num1;
    }
  }
  return num1;
}
getLargestCommonFactor();

const runGame = () => {
  console.log('Find the greatest common divisor of given numbers.');
  const getRandomCommonFactor = () => {
    let counter = 0;
    while (counter <= 2) {
      const number = getRandomNumber();
      const number2 = getRandomNumber();
      console.log(`Question: ${number} ${number2}`);
      const askQuestion = readlineSync.question('Your answer: ');
      const calculateNod = getLargestCommonFactor(number, number2);
      if (askQuestion == calculateNod) {
        console.log('Correct!');
        counter += 1;
        if (counter === 3) {
          console.log(`Congratulations, ${userName}!`);
          break;
        }
      } else {
        if (askQuestion != calculateNod) {
          console.log(`${askQuestion} is wrong answer ;(. Correct answer was ${calculateNod}.`);
        }
        console.log(`Let's try again, ${userName}!`);
        counter = 0;
      }
    }
  }
  getRandomCommonFactor();
}
export default runGame;