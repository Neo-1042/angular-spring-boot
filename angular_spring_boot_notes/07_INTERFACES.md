# TypeScript Interfaces

- Define an interface with a method **contract**.
- Classes implement the interface accordingly.
- One class can implement **multiple interfaces**.

> TypeScript can also use interfaces tu support
**contracts with properties**.
[http://www.typescriptlang.org/docs/handbook/interfaces.html](http://www.typescriptlang.org/docs/handbook/interfaces.html)

### Interface Example

```typescript
export interface Coach {

    getDailyWorkout() : string;
}
```

All classes that implement the interface must implement
the method: `getDailyWorkout()`:

File = CricketCoach.ts

```typescript
import { Coach } from './Coach';

export class CricketCoach implements Coach {

    getDailyWorkout() : string {
        return "You are training Cricket!";
    }
}
```

File = GolfCoach.ts

```typescript
import { Coach } from './Coach';

export class GolfCoach implements Coach {

    getDailyWorkout() : string {
        return "Hit 100 balls at the golf range!";
    }
}
```

Main App. File = Driver.ts

```typescript
import { Coach } from './Coach';
import { CricketCoach } from './CricketCoach';
import { GolfCoach } from './GolfCoach';

let myCricketCoach = new CricketCoach();
let myGolfCoach = new GolfCoach();

// Declare an array of Coaches:

let myCoaches : Coach[] = [];
myCoaches.push(myCricketCoach);
myCoaches.push(myGolfCoach);

for (let tmpCoach of myCoaches) {
    console.log(tmpCoach.getDailyWorkout());
}
```