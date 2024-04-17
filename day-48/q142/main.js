// Creates a Promise that resolves with "Hello, World!" after 2 seconds
var helloPromise = new Promise(function (resolve) {
    setTimeout(function () {
        resolve("Hello, World!");
    }, 2000);
});
helloPromise.then(function (message) { return console.log(message); });
// After 2 seconds, "Hello, World!" will be logged to the console.
