// A way to make a flexible list
function createObjectWithDynamicKey(key: string, value: string) {
  let dynamicObject : {[key:string] : string} = {}; // by placing {} we get implicity error we can fix this by put value of string in array which is key and string which is value
  // Setting up a section in the list with a changeable name
  dynamicObject[key] = value;
  return dynamicObject;
}

// Using the flexible list setup for a user's preference
let userPreference = createObjectWithDynamicKey("theme", "dark");

// Showing the user's choice
console.log(userPreference);
