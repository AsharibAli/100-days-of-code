// A mixed bag of items
var mixedArray = [1, "apple", 2, "banana", true, "carrot"];
// Picks out only the words
var stringsArray = mixedArray.filter(function (item) { return typeof item === "string"; });
// Shows the list of just words
console.log(stringsArray); // Output: ["apple", "banana", "carrot"]
// This line checks each item: if it's a word, it goes into the new list.
