class Word {
  private vowels: string[] = ["a", "e", "i", "o", "u"];
  private counter: number = 0;

  public countVowels(text: string): number {
    text = text.toLowerCase();

    for (let i = 0; i < text.length; i++) {
      if (this.vowels.includes(text[i])) {
        this.counter++;
      }
    }
    return this.counter;
  }

  public isPalindrome(word: string): boolean {
    word = word.toLowerCase();

    let reverseWord = word.split("").reverse().join("");
    return reverseWord === word;
  }
}

export default new Word();
