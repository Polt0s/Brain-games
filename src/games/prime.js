import readlineSync from 'readline-sync';
import userName from '../cli.js';
import getRandomNumber from '../getRandomNumber.js';

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
}

const runGame = () => {
  const getPrimeNumber = () => {
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
    let counter = 0;
    while (counter <= 2) {
      const number = getRandomNumber(1, 20);
      console.log(`Question: ${number}`);
      const askQuestion = readlineSync.question('Your answer: ');
      const answer = getRandomPrimeNumber(number);
      if (askQuestion === answer) {
        console.log('Correct!');
        counter += 1;
        if (counter === 3) {
          console.log(`Congratulations, ${userName}!`);
          break;
        }
      } else {
        console.log(`"${askQuestion}" is wrong answer ;(. Correct answer was "${answer}".`);
        console.log(`Let's try again, ${userName}!`);
        counter = 0;
      }
    }
  }
  getPrimeNumber();
}
export default runGame;
