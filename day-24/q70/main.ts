// This function prints numbers from 1 to 5 using a loop
function printNumbersWithLet() {
  for (let i = 1; i <= 5; i++) {
    // Uses let for loop variable i
    console.log(i); // Logs numbers 1 through 5
  }
  // i is not accessible here, outside the loop, because it's defined with let
}

printNumbersWithLet();
// This shows that let limits i to the loop, preventing errors from using i where it's not intended.
