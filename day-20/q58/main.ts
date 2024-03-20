// This program calculates the average of all scores given
function averageScore(...scores: number[]): number {
  // Adds all scores together and divides by the number of scores
  let total = scores.reduce((sum, score) => sum + score, 0);
  return total / scores.length;
}

// Example: finding the average of four scores
console.log(averageScore(80, 90, 100, 70)); // Shows the average score
// We add up all the scores, then divide by how many there are.
