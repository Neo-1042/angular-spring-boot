import { Shape } from './Shape';
import { Circle } from './Circle';
import { Rectangle } from './Rectangle';

let myShape = new Shape(10, 7);
let myCircle = new Circle(3, 4, 9);
let myRectangle = new Rectangle(2, 3, 4, 5);

console.log("My Shape: " + myShape.getInfo());
console.log("My Circle: " + myCircle.getInfo());
console.log("My Rectangle: " + myRectangle.getInfo());

// Create an ARRAY of shapes

// Empty array that only accepts Shape classes and subclasses:
let theShapes: Shape[] = [];

theShapes.push(myShape);
theShapes.push(myCircle);
theShapes.push(myRectangle);

for (let tmpShape of theShapes) {
    console.log(tmpShape.getInfo());
}