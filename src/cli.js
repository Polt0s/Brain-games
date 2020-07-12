import readlineSync from 'readline-sync';

const getNewGame = (newGame, regulations) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(regulations);
  let counter = 0;
  while (counter <= 2) {
    const { question: askQuestion, answer: askAnswer } = newGame();
    console.log(`Question: ${askQuestion} `);
    const getAnswer = readlineSync.question(`Your answer: `);
    if (getAnswer === askAnswer) {
      console.log('Correct!');
      counter += 1;
      if (counter === 3) {
        console.log(`Congratulations, ${userName}!`);
        break;
      }
    } else {
      console.log(`${getAnswer} is wrong answer ;(. Correct answer was ${askAnswer}.`);
      console.log(`Let's try again, ${userName}!`);
      counter = 0;
    }
  }
}
export default getNewGame;
