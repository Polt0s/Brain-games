import readlineSync from 'readline-sync';

const getNewGame = (Game, REGULATIONS) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(REGULATIONS);
  let counter = 0;
  const count = 3;
  while (counter < count) {
    const { question, answer } = Game();
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
export default getNewGame;
