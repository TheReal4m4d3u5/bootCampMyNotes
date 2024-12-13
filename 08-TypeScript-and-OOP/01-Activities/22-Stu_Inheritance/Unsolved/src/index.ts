// Define a Shape class
class Shape {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  // Methods to calculate the area and perimeter
  calculateArea(): number {
    return 0;
  }

  calculatePerimeter(): number {
    return 0;
  }

  // Method to display the shape information
  displayInfo(): void {
    console.log(`----------${this.name}----------`);
    console.log(`Area: ${this.calculateArea()}`);
    console.log(`Perimeter: ${this.calculatePerimeter()}`);
    console.log();
  }
}

// TODO: Define a Circle class

class Circle extends Shape {

  private radius: number;
  

  //FIND out how to only use cirlce and not name
  constructor(circle: number, name: string) {
    super(name); // super class runs the contructor fuction of the parent class
    this.radius = circle;
  }

  override calculateArea(): number{
    return Math.PI * Math.pow(this.radius, 2);
  }

  override calculatePerimeter(): number{
    return 2* Math.PI * this.radius;
  }


}

// TODO: Define a Rectangle class

class Rectangle extends Shape {

  constructor() {
    super(name); // super class runs the contructor fuction of the parent class
    this.radius = circle;
  }

  override calculateArea(): number{
    return Math.PI * Math.pow(this.radius, 2);
  }

  override calculatePerimeter(): number{
    return 2* Math.PI * this.radius;
  }

}

// TODO: Define a Triangle class
class Triangle extends Shape {

  constructor() {
    super(name); // super class runs the contructor fuction of the parent class
    this.radius = circle;
  }


  override calculateArea(): number{
    return Math.PI * Math.pow(this.radius, 2);
  }

  override calculatePerimeter(): number{
    return 2* Math.PI * this.radius;
  }


}


// TODO: Call the displayInfo method for the Circle, Rectangle, and Triangle classes

const circle = new Circle(
  2,
  'myCirlce'
);

circle.displayInfo()

const rectangle = new Rectangle(
  22,
  22,
);


const triangle = new Triangle(
  22,
  'myTriangle'
);


rectangle.displayInfo()
triangle.displayInfo()