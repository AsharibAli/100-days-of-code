// Demonstrates 'this' behavior change in a nested function
const myObject = {
  property: "Value",
  outerMethod: function () {
    console.log(this.property); // Works as expected, logs "Value"

    const innerMethod = () => {
      console.log(this.property); // Still accesses myObject's 'property' due to arrow function capturing 'this' from outer scope
    };

    innerMethod();
  },
};

myObject.outerMethod();
// This example shows that using an arrow function for the inner method preserves the 'this' context from the outer method.
