/******************************
 * INTERFACE VS. TYPE ALIASES *
 ******************************/

// Declaration Syntax:

// Interface
interface PersonExInterface {
  name: string;
  age: number;
}

// Type
type PersonExType = {
  name: string;
  age: number;
};

// Extending And Implementing:

// Interface
interface AnimalExInterface {
  type: string;
}

interface Dog extends AnimalExInterface {
  bark(): void;
}

class Labrador implements Dog {
  type: string = "dog";
  bark() {
    console.log("Woof!");
  }
}

// Type
type AnimalExType = {
  type: string;
};

type Monkey = AnimalExType & {
  bark(): void;
};

const labrador: Monkey = {
  type: "monkey",
  bark() {
    console.log("Woof!");
  },
};

// Compatibility:
interface Car {
  brand: string;
}

interface Car {
  model: string;
}

const myCar: Car = {
  brand: "Toyota",
  model: "Camry",
};
