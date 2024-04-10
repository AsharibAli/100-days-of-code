// This for loop counts from 1 to 10 but skips 5
for (var i = 1; i <= 10; i++) {
    if (i === 5) {
        continue; // Skips the rest of the loop for i = 5
    }
    console.log(i); // Logs numbers 1-4 and 6-10
}
// It demonstrates how to use 'continue' to skip a specific iteration.
