import readlineSync from 'readline-Sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
export default userName;
