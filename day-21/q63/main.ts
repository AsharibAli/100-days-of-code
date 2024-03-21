// Creating a custom type (type alias) for shapes that could be circles or rectangles
type Shape = {
  kind: "circle" | "rectangle";
  radius?: number; // Only for circles
  width?: number; // Only for rectangles
  height?: number; // Only for rectangles
};

// Describing a circle using our Shape type
let circle: Shape = {
  kind: "circle",
  radius: 5,
};

// Describing a rectangle using our Shape type
let rectangle: Shape = {
  kind: "rectangle",
  width: 10,
  height: 20,
};

// Showing what we described
console.log(circle); // Here's the circle
console.log(rectangle); // And here's the rectangle
// We made a flexible program that can describe different shapes in detail.
