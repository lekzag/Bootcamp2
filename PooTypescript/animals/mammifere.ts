export abstract class Mammifere implements Animal {
    constructor(public name: string) {}
  
    abstract type: string;
  
    sound(): void {
      console.log(`${this.name} fait du bruit.`);
    }
  }
  