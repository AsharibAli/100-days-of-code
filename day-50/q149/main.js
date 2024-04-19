console.log("Start");
setTimeout(function () {
    console.log("Callback executed"); // This gets queued to be executed by the event loop
}, 0);
console.log("End");
// Although the timeout is 0, "Callback executed" is logged after "End" due to the event loop.
