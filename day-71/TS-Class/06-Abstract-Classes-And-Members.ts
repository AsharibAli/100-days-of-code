/********************************
 * ABSTRACT CLASSES AND MEMBERS *
 ********************************/

abstract class AbstractItem {
  private static nextId: number = 1;

  constructor(public id: number, protected name: string) {}

  static generateNextId(): number {
    return AbstractItem.nextId++;
  }

  abstract getItemInfo(): string;
}

class Item extends AbstractItem {
  constructor(id: number, name: string) {
    super(id, name);
  }

  getItemInfo(): string {
    return `ID: ${this.id}, Name: ${this.name}`;
  }
}

const item1: AbstractItem = new Item(AbstractItem.generateNextId(), "Widget");
const item2: AbstractItem = new Item(AbstractItem.generateNextId(), "Gadget");

console.log(item1.getItemInfo()); // ID: 1, Name: Widget
console.log(item2.getItemInfo()); // ID: 2, Name: Gadget
