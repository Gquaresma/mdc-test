class PrimeNumber {
  public isPrime(num:number): boolean {
    if (num < 2) {
      return false;
    }

    for (let i: number = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  public displayN(num:number): void {
    let primes: number[] = [];
    let count = 1;

    for (let i = count; i <= num; i++) {
      count = i;
      if (this.isPrime(i)) {
        primes.push(count);
      }
    }

    console.log("Prime numbers between 1 and 10 are: ", primes.join(", "));
  }
}

export default new PrimeNumber();
