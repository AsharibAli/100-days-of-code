// This function creates a random number between 1 and 10
function generateRandomNumber() {
    return Math.floor(Math.random() * 10) + 1; // Scales up and rounds down
}
// Example: Getting a random number
console.log(generateRandomNumber()); // Shows a random number between 1 and 10
// Each time you call this, you might get a different number. It's all up to chance!
