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

export class Customer {
    //  New Constructor (Parameter Properties)
    constructor(private _firstName: string
                ,private _lastName: string) { }

    // Getters and setters (public by default)
    get firstName(): string {
        return this._firstName;
    }

    get lastName(): string {
        return this._lastName;
    }

    // Note that setters have NO RETURN TYPE
    // Not even void
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

myCustomer.firstName = "Mr."; // Calls the setter
myCustomer.lastName = "Robot";

console.log("Hello, " + myCustomer.toString());