/**************************
 * CLASS TYPE ANNOTATIONS *
 **************************/

class Product {
  // Property type annotations
  id: number;
  name: string;
  price: number;

  constructor(id: number, name: string, price: number) {
    // Constructor parameter type annotations
    this.id = id;
    this.name = name;
    this.price = price;
  }

  // Method type annotations
  getProductInfo(): string {
    return `ID: ${this.id}, Name: ${this.name}, Price: $${this.price}`;
  }
}

// Create an instance of the Product class
const product1 = new Product(1, "Widget", 20.0);

// Access class properties and call a method
console.log(product1.getProductInfo()); // Output: ID: 1, Name: Widget, Price: $20
