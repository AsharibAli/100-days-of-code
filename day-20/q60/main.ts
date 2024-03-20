// This profile sets itself up and can share info about the user
let userProfile = (function () {
  // The user's details are kept inside
  let name = "John";
  let age = 30;

  // This part shares the user's details
  return {
    displayInfo: function () {
      console.log(`Name: ${name}, Age: ${age}`);
    },
  };
})();

// Asking the profile to tell us about the user
userProfile.displayInfo(); // It says the user's name and age
// We made a self-setup profile that can talk about the user.
