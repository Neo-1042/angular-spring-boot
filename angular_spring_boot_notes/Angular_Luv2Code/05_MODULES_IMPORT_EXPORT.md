# TypeScript Modules

Real projects always have their components in different
folders. TypeScript supports the concept of modules.

- One module can **export** classes, functions, variables.
- Another module can **import** classes, functions, variables.

Example: Customer.ts will **export**, Driver.ts will **import**

File = Customer.ts
```typescript
export class Customer {
    // ---
}
```

File = Driver.ts
```typescript
import { Customer } from './Customer';
// import { Customer } from '../../Customer'; PATH TRAVERSAL

let myCustomer  = new Customer("Emiliano","Gonce");

console.log(myCustomer.toString());
```