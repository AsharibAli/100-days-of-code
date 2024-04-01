// Defines an array with some words
const words: string[] = ["Hello", "World", "TypeScript", "JavaScript"];
// Uses .map() to create a new array with the length of each word
const lengths: number[] = words.map((word) => word.length);

console.log(lengths); // Outputs: [5, 5, 10, 10]
// Each number in the new array represents the length of the corresponding word in the original array.
