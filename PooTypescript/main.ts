import { Animal } from "./animals/animal";
import { Lion } from "./animals/lion";
import { Mammifere } from "./animals/mammifere";
import { Oiseau } from "./animals/oiseau";

const rencensement: Animal[] = [
    new Lion("Simba"),
    new Oiseau("Titi", "canari"),
    new Mammifere("Tigrou")
  ];

  rencensement.forEach(animal => animal.sound());