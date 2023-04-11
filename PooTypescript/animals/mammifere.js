"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mammifere = void 0;
var Mammifere = /** @class */ (function () {
    function Mammifere(name) {
        this.name = name;
    }
    Mammifere.prototype.sound = function () {
        console.log("".concat(this.name, " fait du bruit."));
    };
    return Mammifere;
}());
exports.Mammifere = Mammifere;
