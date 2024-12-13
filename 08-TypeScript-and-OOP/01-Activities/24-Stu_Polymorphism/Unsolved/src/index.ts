// Define a base interface for shapes
interface Shape {
  calculateArea: () => number;
  calculatePerimeter: () => number;
}

// TODO: Define a Circle class
class Circle implements Shape {
  private radius: number;


  constructor(radius: number) {
  this.radius = radius;
  }

  calculateArea(): number {
    return 3;
  }

  calculatePerimeter(): number {
    return 4;
  }
}


// TODO: Define a Rectangle class
class Rectangle implements Shape {
  private name: string;
  private numEmployees: number;

  constructor(name: string, numEmployees: number) {
    this.name = name;
    this.numEmployees = numEmployees;
  }

  calculateArea(): number {
    return 3;
  }

  calculatePerimeter(): number {
    return 4;
  }
}

// TODO: Define a Triangle class

class Triangle implements Shape {
  private name: string;
  private numEmployees: number;

  constructor(name: string, numEmployees: number) {
    this.name = name;
    this.numEmployees = numEmployees;
  }

  calculateArea(): number {
    return 3;
  }

  calculatePerimeter(): number {
    return 4;
  }
}



// Calculates the total area of an array of shapes
function calculateTotalArea(shapes: Shape[]): number {
  let totalArea = 0;
  for (const shape of shapes) {
    totalArea += shape.calculateArea();
  }
  return totalArea;
}

// Calculates the total perimeter of an array of shapes
function calculateTotalPerimeter(shapes: Shape[]): number {
  let totalPerimeter = 0;
  for (const shape of shapes) {
    totalPerimeter += shape.calculatePerimeter();
  }
  return totalPerimeter;
}

// TODO: Create instances of the Circle, Rectangle, and Triangle classes
const circle = new Circle(2);
const rectangle = new Rectangle(2, 3);
const triangle = new Triangle(2, 3, 4, 5);


// TODO: Create an array to hold all of the shapes (Circle, Rectangle, and Triangle)

const myArray: Shape[] = [circle, rectangle, triangle];     

// TODO: Display the total area of all shapes

calculateTotalArea(myArray);

// TODO: Display the total perimeter of all shapes
calculateTotalPerimeter(myArray);