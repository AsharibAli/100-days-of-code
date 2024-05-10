/************************
 * CLASS STATIC MEMBERS *
 ************************/

class ProductStaticMembers {
  // 'private' property
  private static nextId: number = 1;

  constructor(private id: number, private name: string) {}

  static generateNextId(): number {
    return ProductStaticMembers.nextId++;
  }

  getProductInfo(): string {
    return `ID: ${this.id}, Name: ${this.name}`;
  }
}

// Generate unique IDs for products using the static method
const product1static = new ProductStaticMembers(
  ProductStaticMembers.generateNextId(),
  "Widget"
);
const product2static = new ProductStaticMembers(
  ProductStaticMembers.generateNextId(),
  "Gadget"
);

console.log(product1static.getProductInfo()); // ID: 1, Name: Widget
console.log(product2static.getProductInfo()); // ID: 2, Name: Gadget
