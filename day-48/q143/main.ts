// Creates a Promise that either resolves or rejects based on a condition
const conditionalPromise = new Promise<string>((resolve, reject) => {
  const success = Math.random() > 0.5; // Randomly choose success or failure
  if (success) {
    resolve("Success!");
  } else {
    reject(new Error("Failure"));
  }
});

conditionalPromise
  .then((result) => console.log(result)) // Handles a successful resolution
  .catch((error) => console.log(error.message)); // Handles a rejection
// This code will randomly log either "Success!" or "Failure" based on the outcome of the promise.
