/***********************************
 * INTERFACE METHOD AND PARAMETERS *
 ***********************************/

// Define an interface 'Person' with a method 'greet'
interface PersonEx2 {
  name: string;
  age: number;
  greet(message: string): void;
}

// Create an object that adheres to the 'Person' interface
const Sarah: PersonEx2 = {
  name: "Sarah",
  age: 30,
  greet(message: string) {
    console.log(`${this.name} says: ${message}`);
  },
};

Sarah.greet("Hello, TypeScript!"); // Output: Alice says: Hello, TypeScript!
