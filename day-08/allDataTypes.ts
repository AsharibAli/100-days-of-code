// 1. String
let name: string = "John Doe";
console.log(name);

// 2. Number
let age: number = 30;
console.log(age);

// 3. Boolean
let isStudent: boolean = true;
console.log(isStudent);

// 4. Undefined
let job: undefined;
console.log(job);

// 5. Null
let car: null;
console.log(car);

// Additional Data Types in TypeScript
// 1. Tuple
let person: [string, number] = ["John Doe", 30]; // Name, Age
console.log(person);

// 2. Enum
enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Green;
console.log(c);

// 3. Any
let uncertain: any = 4;
uncertain = "Maybe a string instead?";
console.log(uncertain);

// 4. Void
function warnUser(): void {
    console.log("This is a warning message");
}
console.log(warnUser());

// 5. Never
function error(message: string): never {
    throw new Error(message);
}
console.log(error("An error occurred"));

// 6. Union
let multipleTypes: number | string;
multipleTypes = 20; // OK
multipleTypes = "Twenty"; // Also OK
console.log(multipleTypes);