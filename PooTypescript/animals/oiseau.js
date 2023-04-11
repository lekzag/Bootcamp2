"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Oiseau = void 0;
var Oiseau = /** @class */ (function () {
    function Oiseau(name, type) {
        this.name = name;
        this.type = type;
    }
    Oiseau.prototype.sound = function () {
        console.log("".concat(this.name, " chante."));
    };
    return Oiseau;
}());
exports.Oiseau = Oiseau;
