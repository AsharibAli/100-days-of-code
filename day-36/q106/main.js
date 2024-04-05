// This function checks if a year is a leap year
function isLeapYear(year) {
    // Checks the conditions for a leap year
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
console.log(isLeapYear(2020)); // Outputs: true
console.log(isLeapYear(1900)); // Outputs: false
// By using comparison operators, we can easily determine if a year is a leap year or not.
