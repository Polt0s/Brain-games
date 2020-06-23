console.log("Welcome to the Brain Games!");
import readlineSync from "readline-sync";
const userName = readlineSync.question("May I have your name? ");
console.log("Hello, " + userName + "!");
export default userName;
