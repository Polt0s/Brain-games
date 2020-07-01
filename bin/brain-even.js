#!/usr/bin/env node
import readlineSync from 'readline-sync';
import userName from '../src/cli.js';
import getRandomNumber from '../src/getRandomNumber.js';

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const getIsAnswer = () => {
  let counter = 0;
  while (counter <= 2) {
    const randomNumberCall = getRandomNumber();
    console.log(`Question: ${randomNumberCall}`);
    const askQuestion = readlineSync.question('Your answer: ');
    if ((askQuestion === 'yes' && randomNumberCall % 2 === 0) || (askQuestion === 'no' && randomNumberCall % 2 !== 0)) {
      console.log('Correct!');
      counter += 1;
      if (counter === 3) {
        console.log(`Congratulations, ${userName}!`);
        break;
      }
    } else {
      if (askQuestion === 'yes') {
        console.log('"yes" is wrong answer ;(. Correct answer was "no".');
      } else {
        console.log('"no" is wrong answer ;(. Correct answer was "yes".');
      }
      console.log(`Let's try again, ${userName}!`);
      counter = 0;
    }
  }
};
getIsAnswer();
