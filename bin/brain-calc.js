#!/usr/bin/env node
import readlineSync from 'readline-sync';
import userName from '../src/cli.js';
import getRandomNumber from '../src/getRandomNumber.js';

console.log('What is the result of the expression?');

const getRandomOperator = (sing) => {
  const array = Math.floor(Math.random() * sing.length);
  return sing[array];
};

const sing = ['*', '-', '+'];
getRandomOperator(sing);

const getRandomExpression = () => {
  const one = `${getRandomNumber()} ${getRandomOperator(sing)} ${getRandomNumber()}`;
  return one;
};
getRandomExpression();

const getAnswerExpression = () => {
  let counter = 0;
  while (counter <= 2) {
    const result = getRandomExpression();
    console.log(`Question: ${result}`);
    const askQuestion = readlineSync.question('Your answer: ');
    const sumOfExpression = eval(result);
    if (askQuestion == sumOfExpression) {
      console.log('Correct!');
      counter += 1;
      if (counter === 3) {
        console.log(`Congratulations, ${userName}!`);
        break;
      }
    } else {
      if (askQuestion != sumOfExpression) {
        console.log(`${askQuestion} is wrong answer ;(. Correct answer was ${sumOfExpression}.`);
      }
      console.log(`Let's try again, ${userName}!`);
      counter = 0;
    }
  }
};
getAnswerExpression();
