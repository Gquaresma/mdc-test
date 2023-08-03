import promptsync from "prompt-sync";
import {
  simpleCalculator,
  primeNumbers,
  factorial,
  palindrome,
  table,
  vowelCounter,
  gradeAverage,
  interestCalculation,
} from "./Exercise";

const prompt = promptsync();
let option = parseInt(prompt("Press Enter to start\n"), 10);

while (option !== 9) {
  console.log("---------------------------- Menu ----------------------------");
  console.log("1. Simple Calculator");
  console.log("2. Prime Numbers");
  console.log("3. Factorial");
  console.log("4. Palindrome");
  console.log("5. Table");
  console.log("6. Vowel Counter");
  console.log("7. Grade Average");
  console.log("8. Interest Calculation");
  console.log("9. Exit");
  console.log("--------------------------------------------------------------");

  option = parseInt(prompt("Enter an option: "), 10);

  switch (option) {
    case 1:
      simpleCalculator();
      break;

    case 2:
      primeNumbers();
      break;

    case 3:
      factorial();
      break;

    case 4:
      palindrome();
      break;
    case 5:
      table();

      break;
    case 6:
      vowelCounter();
      break;

    case 7:
      gradeAverage();
      break;

    case 8:
      interestCalculation();
      break;

    default:
      break;
  }
}
