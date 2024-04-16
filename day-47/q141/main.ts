// Example use of the 'await' reserved word in asynchronous JavaScript
async function fetchData() {
  // Assuming fetchSomething returns a Promise
  const data = await fetchSomething();
  console.log(data);
  // The 'await' keyword pauses the execution until the Promise settles, and then resumes with the resolved value.
}

console.log(
  "The 'await' keyword allows asynchronous, promise-based behavior to be written in a cleaner, more linear fashion."
);
// This demonstrates how 'await' improves readability and flow in asynchronous code.
