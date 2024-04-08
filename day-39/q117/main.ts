// This function evaluates a grade and logs the corresponding remark
function evaluateGrade(grade: string): void {
  switch (grade) {
    case "A":
      console.log("Excellent");
      break;
    case "B":
      console.log("Good");
      break;
    case "C":
      console.log("Fair");
      break;
    case "D":
      console.log("Poor");
      break;
    case "F":
      console.log("Fail");
      break;
    default:
      console.log("Invalid grade");
      break;
  }
}

evaluateGrade("B"); // Outputs: Good
// Uses a switch statement to evaluate the grade and defaults to "Invalid grade" if no match is found.
