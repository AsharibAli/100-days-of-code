// This function filters an array, keeping only numbers greater than 10
function filterGreaterThanTen(numbers) {
    return numbers.filter(function (number) { return number > 10; });
}
// Example: Filtering an array of numbers
var numbers = [5, 10, 15, 20, 25];
console.log(filterGreaterThanTen(numbers)); // Outputs: [15, 20, 25]
// The new array contains only the numbers that are greater than 10.
