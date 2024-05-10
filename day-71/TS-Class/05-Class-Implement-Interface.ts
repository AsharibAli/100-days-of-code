/*****************************
 * CLASS IMPLEMENT INTERFACE *
 *****************************/

class ProductImplementInterface {
  // 'private' property
  private static nextId: number = 1;

  constructor(private id: number, private name: string) {}

  static generateNextId(): number {
    return ProductImplementInterface.nextId++;
  }

  getProductInfo(): string {
    return `ID: ${this.id}, Name: ${this.name}`;
  }
}

// Generate unique IDs for products using the static method
const product1implement = new ProductImplementInterface(
  ProductImplementInterface.generateNextId(),
  "Widget"
);
const product2implement = new ProductImplementInterface(
  ProductImplementInterface.generateNextId(),
  "Gadget"
);

console.log(product1implement.getProductInfo()); // ID: 1, Name: Widget
console.log(product2implement.getProductInfo()); // ID: 2, Name: Gadget
