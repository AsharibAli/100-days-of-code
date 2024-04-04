// This function generates a random hexadecimal color code
function getRandomHexColor() {
    var color = "#" +
        Math.floor(Math.random() * 0xffffff)
            .toString(16)
            .padStart(6, "0");
    return color; // Returns the random color code
}
console.log(getRandomHexColor()); // Outputs a random hex color code like #ff3e12
// We generate a random number, convert it to hexadecimal, and ensure it's 6 characters long.
