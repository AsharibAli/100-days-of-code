/********************************
 * TYPE ANNOTATIONS WITH ARRAYS *
 ********************************/

// Annotating an array of strings
let fruits: string[] = ["apple", "banana", "cherry"];

// Using a loop to process each element in the array
for (let i = 0; i < fruits.length; i++) {
  console.log(`Fruit: ${fruits[i].toUpperCase()}`);
}