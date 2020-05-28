console.log(10);                                    // 10
console.log(5 + 3 + 4);                             // 12
console.log(9 - 1);                                 // 8
console.log(6 / 2);                                 // 3
console.log((2 * 4) + (4 - 6));                     // 6
const a = 3;                                        // a = 3
const b = a + 1;                                    // b = 4
console.log(a + b + (a * b));                       // 19
console.log(a === b);                               // false

if ((b > a) && (b < (a * b))) {                     // 4
    console.log(b);
} else {
    console.log(a);
}

if (a === 4) console.log(6);                        // 16
else if (b === 4) console.log(6 + 7 + a);
else console.log(25);

console.log(2 + (b > a ? b : a));                   // 6

if (a > b) console.log(a * (a + 1));                //16
else if (a < b) console.log(b * (a + 1));
else console.log(-1 * (a + 1));