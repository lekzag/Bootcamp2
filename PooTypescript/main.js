"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lion_1 = require("./animals/lion");
var mammifere_1 = require("./animals/mammifere");
var oiseau_1 = require("./animals/oiseau");
var rencensement = [
    new lion_1.Lion("Simba"),
    new oiseau_1.Oiseau("Titi", "canari"),
    new mammifere_1.Mammifere("Tigrou")
];
rencensement.forEach(function (animal) { return animal.sound(); });
