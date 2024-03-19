// A mixed bag of items
let mixedArray = [1, "apple", 2, "banana", true, "carrot"];

// Picks out only the words
let stringsArray = mixedArray.filter((item) => typeof item === "string");

// Shows the list of just words
console.log(stringsArray); // Output: ["apple", "banana", "carrot"]
// This line checks each item: if it's a word, it goes into the new list.
