# Abstract Class

Abstract classes cannot be instantiated; they represent
the abstraction of a concept that is yet to be implemented.

Abstract classes can have abstract methods, which must be
implemented by **concrete subclasses**.

Example = Shape.ts
```typescript
export abstract class Shape {
    // Previous code ...
    abstract calculateArea() : number;
}
```

File = Rectangle.ts

```typescript
import { Shape } from './Shape';

export class Rectangle extends Shape {
    // Previous code ...

    calculateArea() : number {
        return this._width * this._length;
    }
}
```

File = Circle.ts

```typescript
import { Shape } from './Shape';

export class Circle extends Shape {
    // Previous code ...

    calculateArea() : number {
        return Math.PI * Math.pow(this._radius, 2);
    }
}
```

File = Demo_Abstract_Classes.ts

```typescript
import { Shape } from './Shape';
import { Circle } from './Circle';
import { Rectangle } from './Rectangle';

let myCircle = new Circle(3, 4, 9);
let myRectangle = new Rectangle(2, 3, 4, 5);

let theShapes: Shape[] = [];

theShapes.push(myCircle);
theShapes.push(myRectangle);

for (let tmpShape of theShapes) {
    console.log(tmpShape.getInfo());
    console.log("Area = " + tmpShape.calculateArea());
    console.log();
}
```