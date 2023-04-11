export class Oiseau implements Animal {
  constructor(public name: string, public type: string) {}

  sound(): void {
    console.log(`${this.name} chante.`);
  }
}