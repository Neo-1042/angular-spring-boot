import { Shape } from './Shape';

export class Circle extends Shape {

    // Will inherit Shape's attributes and methods.
    // Plus, it will add:
    private _radius: number;

    // super constructor from Shape
    constructor(x: number, y: number, r: number) {
        super(x, y);
        this._radius = r;
    }

    get radius(): number {
        return this._radius;
    }

    set radius(radius: number) {
        this._radius = radius;
    }

    // Override (no keyword needed)
    getInfo(): string {
        return super.getInfo() + ", radius = " + this._radius;
    }

    calculateArea() : number {
        return Math.PI * Math.pow(this._radius, 2);
    }
}