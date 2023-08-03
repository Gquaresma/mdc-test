class GradeAverage {
  private grades: number[] = [];

  constructor() {
    this.grades = [];
  }

  public addGrade(grade: number): void {
    if (grade < 0) {
      throw new Error("Grades cannot be negative");
    }
    this.grades.push(grade);
  }

  public getAverage(): number {
    return (
      this.grades.reduce((sum, grade) => sum + grade, 0) / this.grades.length
    );
  }
}

export default new GradeAverage();
