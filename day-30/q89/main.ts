// This function rounds a number to two decimal places
function roundToTwoDecimalPlaces(num: number): number {
  return Number(num.toFixed(2)); // Rounds and converts back to number
}

// Example: Rounding π to two decimal places
console.log(roundToTwoDecimalPlaces(3.14159)); // Outputs 3.14
// π is now rounded off, making it simpler to work with.
