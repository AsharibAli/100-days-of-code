// Demonstrates using a try-catch block to handle errors
try {
    // Intentionally cause an error
    throw new Error("Something went wrong");
}
catch (error) {
    console.log(error.message); // Logs the error message
}
// This code tries to execute a block that throws an error, and the catch block handles the error gracefully.
