# Classes in TypeScript

By convention, you would name your file with the same as
the class (e.g. Customer.ts), but this is not compulsory.

File = Customer.ts
```typescript
class Customer {
    // Properties are PUBLIC by default
    // Some TS developers use the leading "_" as a convention
    private _firstName: string;
    private _lastName: string;
    //  Constructors
    constructor(firstName: string, lastName: string) {
        this.firstName = _firstName;
        this.lastName = _lastName;
    }
    // Getters and setters
    public getFirstName(): string {
        return this._firstName;
    }

    public getLastName(): string {
        return this._lastName;
    }

    public setFirstName(firstName: string): void {
        this._firstName = firstName;
    }

    public setLastName(lastName:string): void {
        this._lastName = lastName;
    }

    public toString(): string {
        return this._firstName + " " + this._lastName;
    }
}

let myCustomer = new Customer("Rodrigo", "Hurtado");

myCustomer._firstName = "Neo"; // This actually calls the setter method

console.log("Hello, " + myCustomer.toString());
```

# Accessors Syntax

The concept and implementation of getter and setter methods in
TypeScript is very similar to Java, with one or two key
differences:

```typescript
class Planet {

    // Short cut version
    constructor (private _temperature : number) { }

    // Getter
    get temperature() : number {
        return this._temperature;
    }

    // Setter
    // !! NO RETURN TYPE !! (not even 'void')
    set temperature(temperature : number) {
        this._temperature = temperature;
    }
}
```

# Access Modifiers

| Modifier | Definition | 
| :---:   | :---: |
|`public` | Property is accessible to all classes (Default). | 
|`protected` | Property is only accessible in current class and subclasses. | 
|`private` | Property is only accessible in current class. | 

> Reminder: use this command to compile so that tsc won't
generate a *.js file if the TypeScript has compilation error.
```bash
tsc --noEmitOnError Customer.ts
```

# Constructors. Parameter Properties

Traditional Approach:
```typescript
class Customer {

    private _firstName: string;
    private _lastName: string;

    constructor(theFirst:string, theLast:string) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }
}
```

Short Cut Approach:
```typescript
class Customer {

    // Define the properties and assign automatically.
    constructor(private _firstName:string,
                private _lastName: string){

    }  
}
```

# Inheritance in TypeScript

- Superclass > Subclass extend the parent's properties and
methods.

- Support for abstract classes and overriding.

> TypeScript only supports **single inheritance**

> However, you can implement multiple interfaces.

## Example: Circle, Rectangle implements Shape

File = Shape.ts
```typescript
export class Shape {
    private _x : number;
    private _y : number;

    constructor(x : number, y : number) {
        this._x = x;
        this._y = y;
    }

    get x () : number {
        return this._x;
    }

    set x (x : number) {
        this._x = x;
    }

    get y () : number {
        return this._y;
    }

    set y (y : number) {
        this._y = y;
    }

    getInfo() : string {
        return "x = " + this._x + " , y = " + this._y;
    }
}
```

File = Circle.ts

```typescript
import { Shape } from './Shape';

export class Circle extends Shape {

    // Will inherit Shape's attributes and methods.
    // Plus, it will add:
    private _radius : number;

    // super constructor from Shape
    constructor(x : number, y : number, r : radius) {
        super(x, y);
        this._radius = r;
    }

    get radius() : number {
        return this._radius;
    }

    set radius(radius : number) {
        this._radius = radius;
    }

    // Override (no keyword needed)
    getInfo() : string {
        return super.getInfo() + ", radius = " + this._radius;
    }
}
```

```typescript
import { Shape } from './Shape';

export class Rectangle extends Shape {

    private _width : number;
    private _length : number;

    constructor(x : number, y : number, width : number, length : number) {
        super(x, y);
        this._width = width;
        this._length = length;
    }

    get width() : number {
        return this._width;
    }

    set width(width : number) {
        this._width = width;
    }

    get length() : number {
        return this._length;
    }

    set length(length : number) {
        this._length = length;
    }

    getInfo() : string {
        return super.getInfo() + " width = " + this._width
                + " , length = " + this._length;
    }
}
```


File = Driver.ts (Main app using Shape + Circle + Rectangle)
```typescript
import { Shape } from './Shape';
import { Circle } from './Circle';
import { Rectangle } from './Rectangle';

let myShape = new Shape(10,7);
let myCircle = new Circle(3,4,9);
let myRectanlge = new Rectangle(2,3,4,5);

console.log("My Shape: " + myShape.getInfo());
console.log("My Circle: " + myCircle.getInfo());
console.log("My Rectangle: " + myRectangle.getInfo());

// Create an ARRAY of shapes

// Empty array that only accepts Shape classes and subclasses:
let theShapes : Shape[] = [];

theShapes.push(myShape);
theShapes.push(myCircle);
theShapes.push(myRectangle);

for (let tmpShape of theShapes) {
    console.log(tmpShape.getInfo());
}
```