"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
// In file: Person.ts
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.greet = function () {
        console.log("Hello, my name is ".concat(this.name));
    };
    return Person;
}());
exports.Person = Person;
// Exports the Person class
