#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
const getElementIsArray = (arr) => {
  const array = Math.floor(Math.random() * arr.length);
  return arr[array];
};
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
getElementIsArray(arr);
const getIsAnswer = () => {
  for (let counter = 0; counter <= 2; ) {
    const randomNumberCall = getElementIsArray(arr);
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
