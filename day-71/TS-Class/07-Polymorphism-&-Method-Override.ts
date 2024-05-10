/**********************************
 * POLYMORPHISM & METHOD OVERRIDE *
 **********************************/

// Define an abstract class
abstract class AbstractEntity {
  private static nextId: number = 1;
  protected constructor(public id: number, protected name: string) {} // Change 'private' to 'protected'
  static generateNextId(): number {
    return AbstractEntity.nextId++;
  }
  abstract getEntityInfo(): string;
}

// Create a concrete subclass
class Entity extends AbstractEntity {
  constructor(id: number, name: string) {
    super(id, name);
  }
  getEntityInfo(): string {
    return `ID: ${this.id}, Name: ${this.name}`;
  }
}

// Create another concrete subclass
class AnotherEntity extends AbstractEntity {
  constructor(id: number, name: string) {
    super(id, name);
  }
  getEntityInfo(): string {
    return `ID: ${this.id}, Name: ${this.name}, Additional Info: ...`;
  }
}

// Generate unique IDs for entities using the static method
const entity1: AbstractEntity = new Entity(
  AbstractEntity.generateNextId(),
  "Widget"
);
const entity2: AbstractEntity = new AnotherEntity(
  AbstractEntity.generateNextId(),
  "Gadget"
);

// Polymorphism: Call 'getEntityInfo' method on different concrete subclasses
console.log(entity1.getEntityInfo()); // ID: 1, Name: Widget
console.log(entity2.getEntityInfo()); // ID: 2, Name: Gadget, Additional Info: ...
