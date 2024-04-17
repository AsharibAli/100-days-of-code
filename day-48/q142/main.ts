// Creates a Promise that resolves with "Hello, World!" after 2 seconds
const helloPromise = new Promise<string>((resolve) => {
  setTimeout(() => {
    resolve("Hello, World!");
  }, 2000);
});

helloPromise.then((message) => console.log(message));
// After 2 seconds, "Hello, World!" will be logged to the console.
