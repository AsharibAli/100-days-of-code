## Tuple

A tuple is a data type in TypeScript that is similar to an array but has a fixed number of elements, and you can specify the types of each element at specific positions within the tuple. Here's an explanation based on the provided code:

```tsx

// Defining a tuple type
let article: readonly [number, string, boolean] = [11, "Title One", true];

// Assigning a new tuple value to the `article` variable
article = [12, "Title Two", false];

// Trying to push a new element into a tuple (will result in an error)
// article.push(100);

console.log(article);

// Destructuring the tuple into individual variables
const [id, title, published] = article;
console.log(id);
console.log(title);
console.log(published);
```

- We define a tuple type for the `article` variable, specifying that it should have three elements with specific types: a number, a string, and a boolean.
- We assign a matching tuple value to `article`.
- We demonstrate that you can reassign a new tuple value that matches the type structure.
- We show that tuples are fixed in size and can't have additional elements added.
- Lastly, we use destructuring to extract and display the individual elements of the `article` tuple.