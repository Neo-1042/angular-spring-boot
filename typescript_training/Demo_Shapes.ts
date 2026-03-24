import { Shape } from './Shape';
import { Circle } from './Circle';
import { Rectangle } from './Rectangle';

// let myShape = new Shape(10, 7); Abstract Class cannot be instantiated
let myCircle = new Circle(3, 4, 9);
let myRectangle = new Rectangle(2, 3, 4, 5);

// Create an ARRAY of shapes
// Empty array that only accepts Shape classes and subclasses:
let theShapes: Shape[] = [];

theShapes.push(myCircle);
theShapes.push(myRectangle);

for (let tmpShape of theShapes) {
    console.log(tmpShape.getInfo());
    console.log("Area = " + tmpShape.calculateArea());
    console.log();
}