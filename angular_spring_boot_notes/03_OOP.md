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