// 1. String
var name = "John Doe";
console.log(name);
// 2. Number
var age = 30;
console.log(age);
// 3. Boolean
var isStudent = true;
console.log(isStudent);
// 4. Undefined
var job;
console.log(job);
// 5. Null
var car;
console.log(car);
// Additional Data Types in TypeScript
// 1. Tuple
var person = ["John Doe", 30]; // Name, Age
console.log(person);
// 2. Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log(c);
// 3. Any
var uncertain = 4;
uncertain = "Maybe a string instead?";
console.log(uncertain);
// 4. Void
function warnUser() {
    console.log("This is a warning message");
}
console.log(warnUser());
// 5. Never
function error(message) {
    throw new Error(message);
}
console.log(error("An error occurred"));
// 6. Union
var multipleTypes;
multipleTypes = 20; // OK
multipleTypes = "Twenty"; // Also OK
console.log(multipleTypes);
