# TypeScript's Basic Data Types

| Data Type | Description  |  
| :---: | :--- |
| `boolean` | true/false values |  
| `number`  |  Integer and floating point numbers |  
| `string`  | Text data. Single or double quotes are allowed |  
| `any` | Supports "any" datatype assignment  |  
| *Others* ... | Check the official documentation |

# Defining Variables (let)

```typescript
// let <variable_name>: <type> = <initial_value>;
let foo: boolean = true;
let grade: number = 88.6;
let firstName: string = "Cob";
let email: string = 'email.com';

email = 'myemail@email.com'; // OK
grade = "A"; // COMPILATION ERROR
```

\* To prevent scoping, capturing and shadowing issues,
do NOT use `var`.

# Type: any (Bad practice)

```typescript
let myData: any = 50.0;

myData = false;
myData = 'Eric';
myData = 10;
// Allowed, but sloppy.

// You may use 'any' for generics (future topic)
console.log("myData is of type 'any' = " + myData);
```

# Template Strings (${var})

Useful for long strings with a lot of concatenation:

```typescript
let firstName: string = "John";
let lastName: string = "Constantine";

console.log(`Hello, ${firstName} ${lastName}.`);
```