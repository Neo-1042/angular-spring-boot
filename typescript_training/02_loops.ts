for (let i = 0; i < 7; i++) {
    console.log(i);
}

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

// Array of strings:

let sports: string[] = ["Golf", "Cricket", "Tennis", "Swimming"];

for (let tmpSport of sports) {
    if (tmpSport == "Cricket") {
        console.log("This is my fav sport!" + tmpSport);
    } else {
        console.log("I don't like this sport: " + tmpSport);
    }
}
