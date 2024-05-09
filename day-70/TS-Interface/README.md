## Interface

An interface in TypeScript is a way to define a contract or blueprint for the shape and structure of an object. It specifies the properties, methods, and their types that objects implementing the interface should have. In essence, an interface defines a set of rules that an object must follow to be considered valid according to that interface.

1. **Shape Definition**: Interfaces specify object structure, including property names, types, and optional/required status.
2. **Contract**: Objects or classes adhering to an interface must implement its defined structure and methods.
3. **Type Checking**: TypeScript checks if objects meet the interface's requirements, catching type errors early.
4. **Code Clarity**: Interfaces document expected object properties and enhance code readability, aiding object usage understanding.

Here's a basic example of an interface definition:

```tsx
interface PersonEx1 {
  name: string;
  age: number;
}

const John: PersonEx1 = {
  name: "John",
  age: 30,
};
```

In this example, we define an interface `PersonEx1` with two properties: `name` (a `string`) and `age` (a `number`). We then create an object `alice` that adheres to this interface.

Interfaces are widely used in TypeScript for:

- Defining the structure of data objects.
- Specifying the shape of function parameters and return values.
- Enforcing consistency in class definitions.
- Facilitating code maintainability and collaboration.

---

## **Interface Method And Parameters**

In TypeScript, an interface can define not only the structure of an object but also the signature of functions or methods that objects adhering to the interface should have. This allows you to specify not just the properties but also the methods and their parameters and return types that should be present in objects implementing the interface.

```tsx
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
```

In this example:

1. **Interface Declaration**: We define an interface named `PersonEx2` with three members:
    - `name`: A property of type `string`.
    - `age`: A property of type `number`.
    - `greet`: A method that takes a parameter of type `string` and returns `void` (indicating that it doesn't return any value).
2. **Object Creation**: We create an object `alice` that adheres to the `PersonEx2` interface. It has properties `name` and `age`, as well as a `greet` method that takes a message and logs it to the console.
3. **Method Invocation**: We call the `greet` method on the `alice` object, passing in a message. The method uses the object's properties to construct a greeting message and logs it to the console.

---

## ReOpen The Interface And Use Cases

interface reopening in TypeScript is a valuable technique for gradually building and extending interfaces as your project grows, promoting modularity and code organization. It enables you to create versatile, flexible, and consistent object structures.

```tsx
// Homepage Interface Declaration
interface Settings {
  readonly theme: boolean;
  font: string;
}

// Articles Page Interface Reopening
interface Settings {
  sidebar: boolean;
}

// Contact Page Interface Reopening
interface Settings {
  external: boolean;
}

// Create an object 'userSettings' that adheres to the merged 'Settings' interface
let userSettings: Settings = {
  theme: true,
  font: "Open Sans",
  sidebar: false,
  external: true
};
```

1. **Interface Declaration**: We start by defining an initial interface called `Settings` for the Homepage, which includes properties like `theme` and `font`. The `theme` property is read-only.
2. **Interface Reopening - Articles Page**: We reopen the `Settings` interface to add a `sidebar` property specific to the Articles Page. This demonstrates how interfaces can be extended as different parts of the application require additional properties.
3. **Interface Reopening - Contact Page**: The `Settings` interface is reopened again, this time for the Contact Page, where an `external` property is introduced, tailored to that section.
4. **Object Creation**: We create an object named `userSettings` that complies with the merged `Settings` interface, including properties from all the interface declarations: `theme`, `font`, `sidebar`, and `external`. This object represents user settings, incorporating attributes from different parts of a website.

**Use Cases**:

- **Modular Development**: Interface reopening enables modular development, allowing different parts of a project to contribute to interface definitions. Each section focuses on its specific properties, promoting code organization.
- **Progressive Enhancement**: As your application evolves, you can extend interfaces to accommodate new features or settings. This incremental approach ensures backward compatibility and code flexibility.
- **Clear Separation of Concerns**: Interface reopening maintains a clear separation of concerns between different sections or modules of your application while ensuring consistent data structures.

---

## built-in interface

In TypeScript, a built-in interface refers to an interface that is predefined and provided by the TypeScript language or the underlying JavaScript runtime environment. These interfaces define the shape and behavior of objects or values for specific use cases and are used to ensure type safety and compatibility in TypeScript code.

Examples of built-in interfaces in TypeScript include:

1. **HTMLElement Interfaces:** TypeScript provides built-in interfaces for HTML elements, such as `HTMLElement`, `HTMLDivElement`, `HTMLAnchorElement`, etc. These interfaces define the properties and methods available for working with elements in the Document Object Model (DOM).

---

## `HTMLImageElement`

In TypeScript, `HTMLImageElement` is a built-in interface that represents an HTML `<img>` element. This interface extends the `HTMLElement` interface and provides additional properties and methods specifically related to images.

Here are some of the properties and methods you can access when working with an `HTMLImageElement`:

- Properties:
    - `alt`: A string representing the alternate text for the image.
    - `height`: The height of the image in pixels.
    - `src`: The source URL of the image.
    - `width`: The width of the image in pixels.
- Methods:
    - `complete`: A boolean value indicating whether the image has finished loading.
    - `decode(): Promise<void>`: A method that returns a promise and resolves once the image is decoded.
    - `naturalHeight`: The intrinsic height of the image in pixels.
    - `naturalWidth`: The intrinsic width of the image in pixels.

By using the `HTMLImageElement` interface in TypeScript, you can access and manipulate properties and methods related to `<img>` elements in a type-safe manner when working with the Document Object Model (DOM) in web applications. This helps catch potential errors and provides better code assistance in modern code editors.

Example of using `HTMLImageElement` in TypeScript:

```tsx
const imgElement: HTMLImageElement = document.createElement("img");
imgElement.src = "image.jpg";
imgElement.alt = "My Image";

if (imgElement.complete) {
    console.log(`Image dimensions: ${imgElement.naturalWidth}x${imgElement.naturalHeight}`);
} else {
    imgElement.addEventListener("load", () => {
        console.log(`Image dimensions: ${imgElement.naturalWidth}x${imgElement.naturalHeight}`);
    });
}

```

In this example, we create an `HTMLImageElement`, set its properties, and work with some of its methods in a TypeScript context.

---

## **Interface vs. Type Aliases**

In TypeScript, both interfaces and type aliases serve similar purposes: defining custom data structures and types. However, they have some differences in terms of usage and capabilities. Here's a comparison between interfaces and type aliases:

**1. Declaration Syntax:**

- **Interface:** Declared using the `interface` keyword.

```tsx
interface PersonExInterface {
  name: string;
  age: number;
}
```

- **Type Alias:** Declared using the `type` keyword.

```tsx
type PersonExType = {
  name: string;
  age: number;
};interface AnimalExInterface {
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
```

**2. Extending and Implementing:**

- **Interface:** Can be extended by other interfaces using the `extends` keyword and implemented by classes using the `implements` keyword.

```tsx
interface Animal {
  type: string;
}

interface Dog extends Animal {
  bark(): void;
}

class Labrador implements Dog {
  type: "dog";
  bark() {
    console.log("Woof!");
  }
}

```

- **Type Alias:** Cannot be extended or implemented directly. However, you can achieve similar results using intersection types.

```tsx
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
```

**3. Compatibility:**

- **Interface:** Supports declaration merging. When you declare multiple interfaces with the same name, TypeScript will merge them into a single interface.

```tsx
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
```

- **Type Alias:** Does not support declaration merging. If you declare multiple type aliases with the same name, you'll get an error.

**4. Extensibility:**

- **Interface:** Use when you need to define the shape of objects and also when you need to implement them in classes. They are more suitable for defining contracts that classes must adhere to.
- **Type Alias:** Use when you want to create custom types that can be combined using union types, intersection types, or when defining complex types.

**5. Readability and Style:**

- **Interface:** Preferred when defining shapes of objects, especially for public APIs, as they convey the intent clearly. They also work well with code editors' IntelliSense for auto-completion and documentation generation.
- **Type Alias:** Useful for defining unions, intersections, and more complex types. They are often used to give descriptive names to specific combinations of types.

In most cases, the choice between interfaces and type aliases depends on your specific use case and coding style. Both are valuable tools in TypeScript for defining custom types and enhancing code readability and maintainability.