/********************
 * GENERICS CLASSES *
 ********************/

// Generic Class `User`
class User<T = string> {
  constructor(public value: T) {}

  // Method that takes a message of type `T` and displays it along with the `value` property
  show(msg: T): void {
    console.log(`${msg} - ${this.value}`);
  }
}

// Creating an instance of `User` with a specific type parameter (string)
let userOne = new User<string>("Elzero");
console.log(userOne.value); // Outputs: "Elzero"
userOne.show("Message"); // Outputs: "Message - Elzero"

// Creating an instance of `User` with a type parameter that can be a number or a string
let userTwo = new User<number | string>(100);
console.log(userTwo.value); // Outputs: 100
userTwo.show("Message"); // Outputs: "Message - 100"
