import promptsync from "prompt-sync";
import Calculator from "./classes/Calculator";
import PrimeNumbers from "./classes/primeNumber";
import Word from "./classes/Word";
import Table from "./classes/Table";
import GradeAverage from "./classes/GradeAverage";
import InterestCalculation from "./classes/InterestCalculation";

const prompt = promptsync();

export const simpleCalculator = () => {
  const add = Calculator.calculate(12, "+", 92);
  const subtract = Calculator.calculate(12, "-", 92);
  const divide = Calculator.calculate(1982, "/", 2);
  const mutiply = Calculator.calculate(89, "*", 4);

  console.log("Sum result -> ", add);
  console.log("Subtract result -> ", subtract);
  console.log("Division result -> ", divide);
  console.log("Multiplication result -> ", mutiply);
};

export const primeNumbers = () => {
  const primeNumber1 = PrimeNumbers.isPrime(20);
  const primeNumber2 = PrimeNumbers.isPrime(7);
  console.log("Is prime number -> ", primeNumber1);
  console.log("Is prime number -> ", primeNumber2);

  PrimeNumbers.displayN(10);
};

export const factorial = () => {
  const factorial = parseInt(
    prompt("Enter a number to calculate factorial: "),
    10
  );
  console.log(`Factorial of ${factorial} ->`, Calculator.factorial(factorial));
};

export const palindrome = () => {
  const word = prompt("Enter a word to check if it is palindrome: ");
  console.log(`Is ${word} a palindrome -> `, Word.isPalindrome(word));
};

export const table = () => {
  const table = parseInt(prompt("Enter a number to print table: "), 10);
  new Table(table).display();
};

export const vowelCounter = () => {
  const word = prompt("Enter a word to count vowels: ");
  console.log(`Number of vowels in ${word} -> `, Word.countVowels(word));
};

export const gradeAverage = () => {
  const biologyGrade = parseInt(prompt("Enter biology grade: "), 10);
  const mathGrade = parseInt(prompt("Enter math grade: "), 10);
  const physicsGrade = parseInt(prompt("Enter physics grade: "), 10);

  GradeAverage.addGrade(biologyGrade);
  GradeAverage.addGrade(mathGrade);
  GradeAverage.addGrade(physicsGrade);

  console.log("Average grade -> ", GradeAverage.getAverage().toFixed(2));
};

export const interestCalculation = () => {
  const initialCapital = Number(prompt("Enter initial capital: "));
  const interestRate = Number(prompt("Enter interest rate: "));
  const time = Number(prompt("Enter time in months: "));

  console.log(
    "Compound interest -> ",
    InterestCalculation.compound(initialCapital, interestRate, time).toFixed(2)
  );
  console.log(
    "Simple interest -> ",
    InterestCalculation.simple(initialCapital, interestRate, time).toFixed(2)
  );
};
