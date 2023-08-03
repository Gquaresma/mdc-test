class Table {
  private num: number;

  constructor(num: number) {
    this.num = num;
  }

  public display(): void {
    for (let i: number = 1; i <= 10; i++) {
      console.log(`${this.num} * ${i} = ${this.num * i}`);
    }
  }
}

export default Table;
