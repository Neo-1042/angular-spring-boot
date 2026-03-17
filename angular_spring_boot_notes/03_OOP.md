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

# FIX for TS1056 "Accessors are only available when targetting ECMAScript 5 and higher."

```bash
tsc --noEmitOnError --target ES2017 --module commonjs 03_classes.ts
# --target = {ES5, ES2015, ES2020}
node 03_classes.js

# If you want the output in a separate folder:
tsc --noEmitOnError --target ES2017 --module commonjs --strict --outDir dist MyClass.ts

node dist/MyClass.js
```

# `tsconfig.json` Approach

```bash
tsc --init
```

Then set:
```json
{
    "compilerOptions" : {
        "noEmitOnError" : true,
        "target" : "ES2017",
        "module" : "commonjs",
        "strict" : true
    }
}
```

Now, you can simply run:
```bash
tsc MyClass.ts
# tsc --noEmitOnError false MyClass.ts
node MyClass.js
```

If you are still getting error TS1056, simply run with all 
the desired flags:

```bash
tsc --noEmitOnError --target ES2017 --module commonjs --strict --outDir dist MyClass.ts

node dist/MyClass.js
```