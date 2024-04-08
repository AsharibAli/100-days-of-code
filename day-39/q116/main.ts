// This function logs the season based on the month
function logSeason(month: number): void {
  switch (month) {
    case 12:
    case 1:
    case 2:
      console.log("Winter");
      break;
    case 3:
    case 4:
    case 5:
      console.log("Spring");
      break;
    case 6:
    case 7:
    case 8:
      console.log("Summer");
      break;
    case 9:
    case 10:
    case 11:
      console.log("Fall");
      break;
    default:
      console.log("Invalid month");
      break;
  }
}

logSeason(4); // Outputs: Spring
// Multiple cases share the same code block to represent each season.
