# TypeScript Loops

In TypeScript, loops work in a very similar way as in other PLs.

```typescript
// Looping over arrays
let reviews: number[] = [0,5.1,3.4,92];

for (let i=0; i < reviews.length; i++) {
    console.log(reviews[i]);
}

// Computing an average
let total: number = 0;
for (let i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total = total + reviews[i];
}

let average: number = total / reviews.length;
console.log('Average = ' + average);
```

# Simplified For Loop `for(let x of X)`

```typescript
for (let tmpSport of sportsOne) {
    console.log(tmpSport);
}
```

# Conditionals + Loops

```typescript
let sports: string[] = ["Golf", "Cricket", "Tennis", "Swimming"];

for (let tmpSport of sports) {
    if (tmpSport == "Cricket") {
        console.log("This is my fav sport!" + tmpSport);
    } else {
        console.log("I don't like this sport: " + tmpSport);
    }
}
```

# Growable Arrays: `push()`

> Arrays in TypeScript are always growable/dynamic
(RRHG:these are not REAL arrays. They are more like linked
lists.)

```typescript
let sports2: string[] = ["Baseball", "Soccer", "Horse Riding"];

sports2.push("Chess");
```