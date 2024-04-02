// Calculates how many days are left until New Year's Day
function daysUntilNewYear(): number {
  const today = new Date();
  const newYear = new Date(today.getFullYear() + 1, 0, 1); // January 1st of next year
  const diff = newYear.getTime() - today.getTime(); // Difference in milliseconds
  const days = Math.ceil(diff / (1000 * 60 * 60 * 24)); // Converts to days
  return days;
}

console.log(daysUntilNewYear() + " days until New Year.");
// Tells us how many days there are until the next New Year's Day.
