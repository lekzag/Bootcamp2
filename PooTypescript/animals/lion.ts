export class Lion extends Mammifere {
  type = "lion";

  sound(): void {
    console.log(`${this.name} rugit.`);
  }
}