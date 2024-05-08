## Enums

Enums in TypeScript are a way to define a set of named constant values representing discrete options or categories. They provide a convenient means to work with descriptive values in a more readable and expressive way. In essence, enums allow you to create a new data type composed of predefined, related values.

Here's an example of how to define and use an enum in TypeScript:

```tsx
enum Days {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday
}

const today: Days = Days.Wednesday;

console.log(`Today is ${Days[today]}`);

```

In this example:

1. We create an enum called **`Days`** with a list of constant values, starting from 0 by default. Enums allow us to assign meaningful names to these values.
2. We assign the value **`Days.Wednesday`** to the variable **`today`**.
3. We use **`Days[today]`** to retrieve and display the name of the day associated with the value in **`today`**.

Enums make code more readable by providing human-readable names for specific values, and they are commonly used for categories like days of the week or status codes.