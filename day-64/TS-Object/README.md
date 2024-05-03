## Type Annotations With Objects

Type annotations with objects in TypeScript allow you to specify the types of properties that an object should have.

```tsx
let personExOne: {
  name: string;
  age: number;
  jobTitle?: string;
  address: {
    street: string;
    city: string;
  };
};

personExOne = {
  name: "Alice",
  age: 30,
  jobTitle: "Engineer",
  address: {
    street: "123 Main St",
    city: "Wonderland",
  },
};
```

And there is yet another method

```tsx
// Define an object type with type annotations
let personExTwo: {
  name: string;
  age: number;
  jobTitle?: string;
  address: {
    street: string;
    city: string;
  };
} = {
  name: "Alice",
  age: 30,
  jobTitle: "Engineer",
  address: {
    street: "123 Main St",
    city: "Wonderland",
  },
};
```

we're defining an object named **`personExTwo`** with specific type annotations for its properties:

- **`name`** is a required string property for the person's name.
- **`age`** is a required number property for the person's age.
- **`jobTitle`** is an optional string property for the person's job title, indicated by **`jobTitle?: string`**.
- **`address`** is an object with two required properties: **`street`** (string) and **`city`** (string).

We initialize **`personExTwo`** with specific values for each property. Later in the code, we modify some properties. Finally, we use **`console.log`** to display the property values of **`personExTwo`**.