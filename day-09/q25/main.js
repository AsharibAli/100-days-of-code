// Version that passes:
var alien_color = "green";
if (alien_color == "green") {
    console.log("You just earned 5 points!");
}
// Version that fails (no output):
alien_color = "red";
if (alien_color == "green") {
    // No output because the condition is false
}
