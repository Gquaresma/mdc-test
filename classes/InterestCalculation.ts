class InterestCalculation {
  public compound(
    initialCapital: number,
    interestRate: number,
    time: number
  ): number {
    interestRate = interestRate / 100;

    return initialCapital * Math.pow(1 + interestRate, time);
  }

  public simple(
    initialCapital: number,
    interestRate: number,
    time: number
  ): number {
    interestRate = interestRate / 100;

    return initialCapital * (1 + interestRate * time);
  }
}

export default new InterestCalculation();
