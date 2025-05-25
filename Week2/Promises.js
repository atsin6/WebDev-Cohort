// class Rectangle {
//   constructor(width, height, color) {
//     this.width = width;
//     this.height = height;
//     this.color = color;
//   }

//   area() {
//     const area = this.width * this.height;
//     return area;
//   }

//   paint() {
//     console.log(`Painting with color ${this.color}`);
//   }
// }

// const rect = new Rectangle(2, 4, "Black");
// const area = rect.area();
// console.log(area);
// rect.paint();

// --------------*** Assignment - 1 --------------***
// Creating Circle class
// class Circle {
//   constructor(radius, color) {
//     this.radius = radius;
//     this.color = color;
//   }

//   area() {
//     return Math.PI * this.radius * this.radius;
//   }
//   paint() {
//     console.log(`Painting with the color ${this.color}`);
//   }
// }

// const Circ = new Circle(2, "Red");
// console.log(`Area ${Circ.area()}`);
// Circ.paint();

// --------------*** Assignment - 2 --------------***
// Creating a base class Shape and extend it with different classes
// class Shape {
//   constructor(color) {
//     this.color = color;
//   }

//   paint() {
//     console.log(`Painting with the color ${this.color}`);
//   }

//   getDescription() {
//     console.log(`A shape with ${this.color} color.`);
//   }

//   area() {
//     console.log("This must be implemented in child classes");
//   }
// }
// class Circle extends Shape {
//   constructor(radius, color) {
//     super(color);
//     this.radius = radius;
//   }

//   area() {
//     return Math.PI * this.radius * this.radius;
//   }
//   getDescription() {
//     console.log(`A Circle with radius ${this.radius} and color ${this.color}.`);
//   }
// }

// const Circ = new Circle(2, "Red");
// console.log(`Area ${Circ.area()}`);
// Circ.paint();
// Circ.getDescription();

// ---------------------------------------------------------------------
// ---------------------------------------------------------------------

// const date = new Date();
// console.log(date.getUTCDate());

// ---------------------------------------------------------------------
// ---------------------------------------------------------------------

// function setTimeoutPromisified(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// function callback() {
//   console.log("3 seconds have passed");
// }

// setTimeoutPromisified(3000).then(callback);

// ----------------------
// function promiseCallback(resolve) {
//   setTimeout(resolve, 3000);
// }

// promiseCallback(function () {
//   console.log("Hilo");
// });

// ---------------------- #Resolve
function random(resolve) {
  // resolve(); // imedieately resolved
  setTimeout(resolve, 2000); // resolved after 2 sec
}

let p = new Promise(random); // suppose to return something eventually

function callback() {
  console.log("promise succeded");
}

p.then(callback);
