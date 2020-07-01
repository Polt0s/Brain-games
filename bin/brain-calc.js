#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
console.log('What is the result of the expression?');

const getRandomNumber = (arr) => {
  let array = Math.floor(Math.random() * arr.length);
  return arr[array];
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
getRandomNumber(arr);

const getRandomNumber2 = (arr2) => {
  let array2 = Math.floor(Math.random() * arr2.length);
  return arr2[array2];
};

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
getRandomNumber2(arr2);

const getRandomOperator = (sing) => {
  const array = Math.floor(Math.random() * sing.length);
  return sing[array];
};

const sing = ['*', '-', '+'];
getRandomOperator(sing);

const getRandomExpression = () => {
  const one = `${getRandomNumber(arr)} ${getRandomOperator(sing)} ${getRandomNumber2(arr2)}`;
  return one;
};
getRandomExpression();

const getAnswerExpression = () => {
  let counter = 0;
  while (counter <= 2) {
    let result = getRandomExpression();
    console.log(`Question: ${result}`);
    const askQuestion = readlineSync.question('Your answer: ');
    let porox = eval(result);
    if (askQuestion == porox) {
      console.log('Correct!');
      counter += 1;
      if (counter === 3) {
        console.log(`Congratulations, ${userName}!`);
        break;
      }
    } else {
      if (askQuestion != porox) {
        console.log(`${askQuestion} is wrong answer ;(. Correct answer was ${porox}.`);
      }
      console.log(`Let's try again, ${userName}!`);
      counter = 0;
    }
  }
};
getAnswerExpression();
