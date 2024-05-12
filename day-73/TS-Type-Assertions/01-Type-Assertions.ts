/*******************
 * TYPE ASSERTIONS *
 *******************/

let data: any = "1000";

// Type assertion to treat "data" as a string
console.log((data as string).repeat(3));
