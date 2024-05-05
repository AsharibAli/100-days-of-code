/**************
 * TYPE ALIAS *
 **************/

type MyString = string;

let myName: MyString = "Glitcher";

type MyStringOrNumber = string | number;

let myValue: MyStringOrNumber = 10;

// another example
type Employee = {
  name: string;
  age: number;
  email?: string;
};

const alice: Employee = {
  name: "Alice",
  age: 30,
  email: "alice@example.com",
};

const bob: Employee = {
  name: "Bob",
  age: 25,
};

console.log(alice);
console.log(bob);
