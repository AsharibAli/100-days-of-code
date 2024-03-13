function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("Making a ".concat(size, " t-shirt with the message \"").concat(message, "\" printed on it."));
}
make_shirt(); // Default large and message
make_shirt("medium"); // Default message, medium size
make_shirt("small", "Dive into Coding"); // Custom message, small size
