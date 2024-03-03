// Syntax Errors:
let name = "Alice;
// Missing closing quotation mark

// Type Errors:
let age: number = "twenty";
// Trying to assign a string to a number variable

// Assignability Errors:
let isStudent: boolean = "yes";
// A string cannot be assigned to a boolean type


// Example of Accessing Undefined Property:
interface Person {
    name: string;
}
let person: Person = { name: "Alice" };
console.log(person.age);
// Property 'age' does not exist on type 'Person'

// Example of Calling Non-Function:
let count: number = 5;
count();
// 'count' is not a function