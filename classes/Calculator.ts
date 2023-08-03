class Calculator {
  public calculate(
    number1: number,
    operation: string,
    number2: number
  ): number {
    const operations: {
      [key: string]: (number1: number, number2: number) => number;
    } = {
      "+": () => this.add(number1, number2),
      "-": () => this.subtract(number1, number2),
      "*": () => this.multiply(number1, number2),
      "/": () => this.divide(number1, number2),
    };

    const operationFunction = operations[operation] || (() => 0);
    return operationFunction(number1, number2);
  }

  public factorial(num: number): number {
    if (num === 0 || num === 1) return 1;
    return num * this.factorial(num - 1);
  }

  private add(number1: number, number2: number): number {
    return number1 + number2;
  }

  private subtract(number1: number, number2: number): number {
    return number1 - number2;
  }

  private multiply(number1: number, number2: number): number {
    return number1 * number2;
  }

  private divide(number1: number, number2: number): number {
    return number1 / number2;
  }
}

export default new Calculator();
