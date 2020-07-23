import readlineSync from 'readline-sync';

const COUNT = 3;

const playGame = (getGameData, rules) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rules);
  let counter = 0;
  while (counter < COUNT) {
    const { question, answer } = getGameData();
    console.log(`Question: ${question} `);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${answer}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    counter += 1;
  }
  console.log(`Congratulations, ${userName}!`);
};
export default playGame;
