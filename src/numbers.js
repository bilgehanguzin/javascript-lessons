//Numbers
let num1 = 3;
let num2 = 5.15;
let num3 = "21";
let num4 = 1;
let num5 = 12.23456;

//typeof
console.log(typeof num3);
console.log(num1 + num3);
console.log(num3 + num1);
console.log(num3 / num1);
console.log("Orkun" / num1);

//increment decrement
const result1 = num1++;
const result2 = ++num1;

//toFixed, toPrecision
// console.log(
//     num5.toFixed(3),
//     num5.toPrecision(3)
// );

//Math.round, Math.ceil, Math.floor
console.log(
    Math.round(25.4),
    Math.ceil(25.1),
    Math.floor(25.9)
);


//min, max
console.log(
    Math.min(15, -2, 982, 1891, 55, 2, -55),
    Math.max(15, -2, 982, 1891, 55, 2, -55)
);

console.log(
    Math.random()
    );