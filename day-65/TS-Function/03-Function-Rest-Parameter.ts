/***************************
 * FUNCTION REST PARAMETER *
 ***************************/

// Function with a rest parameter and type annotations
function addAll(...nums: number[]): number {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    result += nums[i];
  }
  return result;
}

// Calling the function with various numeric arguments
console.log(addAll(10, 20, 30, 100, 10.5, +true)); // Output: 170.5
