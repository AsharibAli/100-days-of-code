let laptop = {
  make: "Dell",
  model: "New Elite Series",
  year: 2024,
  describe: function () {
    console.log(`This laptop is a ${this.year} ${this.make} ${this.model}.`);
  },
};
laptop.describe();
