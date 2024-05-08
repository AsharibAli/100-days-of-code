/*********
 * ENUMS *
 *********/

enum Days {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

const today: Days = Days.Wednesday;

console.log(`Today is ${Days[today]}`);
