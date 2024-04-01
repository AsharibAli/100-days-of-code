// This function calculates the sum of all numbers in an array
function calculateSum(numbers) {
    return numbers.reduce(function (accumulator, current) { return accumulator + current; }, 0);
}
// Example: Calculating the sum of an array of numbers
var numbers = [1, 2, 3, 4, 5];
console.log(calculateSum(numbers)); // Outputs: 15
// It adds up all the numbers in the array, resulting in a single sum value.
