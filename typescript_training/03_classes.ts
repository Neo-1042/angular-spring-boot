// By convention, you would name this file "Customer.ts".
// However, you can name it however you want.

/*
Customer class
    firstName : string
    lastName  : string

    Constructor
    Getter/setters
    ** FIX for TS1056 "Accessors are only available when targetting ECMAScript 5 and higher."

    tsc --noEmitOnError --target ES2017 --module commonjs 03_classes.ts
    # --target = {ES5, ES2015, ES2020}
    node 03_classes.js
*/

class Customer {
    // Properties are PUBLIC by default
    private _firstName: string;
    private _lastName: string;
    //  Constructors
    constructor(firstName: string, lastName: string) {
        this._firstName = firstName;
        this._lastName = lastName;
    }
    // Getters and setters (public by default)
    get firstName(): string {
        return this._firstName;
    }

    get lastName(): string {
        return this._lastName;
    }

    set firstName(newFirstName: string) {
        this._firstName = newFirstName;
    }

    set lastName(newLastName:string) {
        this._lastName = newLastName;
    }

    toString(): string {
        return this._firstName + " " + this._lastName;
    }
}

let myCustomer = new Customer("Rodrigo", "Hurtado");

myCustomer.firstName = "Neo"; // Calls the setter

console.log("Hello, " + myCustomer.toString());