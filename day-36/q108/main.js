// This function compares two strings, ignoring case sensitivity
function areStringsEqualIgnoreCase(str1, str2) {
    // Converts both strings to lowercase before comparison
    return str1.toLowerCase() === str2.toLowerCase();
}
console.log(areStringsEqualIgnoreCase("hello", "Hello")); // Outputs: true
console.log(areStringsEqualIgnoreCase("world", "Word")); // Outputs: false
// We make both strings lowercase to ensure the comparison ignores case differences.
