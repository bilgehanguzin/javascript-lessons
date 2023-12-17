//true, false
let isOnStock = false;
let isDeleted = false;

// >, <, >=, <=, !=

// console.log(5 == "5");
// console.log(5 === "5");
// console.log(5 !== "5");

//truthy, falsy
// console.log(Boolean(5));
// console.log(Boolean(-1));
// console.log(Boolean(0));
// console.log(Boolean("0"));
// console.log(Boolean("false"));
// console.log(Boolean(""));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(NaN));

let age = 20;

// if (age) {
//     console.log(age);
// }

let fullName = "abc";

// if (fullName.trim()) {
//     console.log("submit!");
// }

//ternary if
// age ?
//     console.log(age)
//     : null

//logical expressions
// age && console.log(age);
// age || console.log(age);


// const date = new Date();
// console.log(date.getDay());

switch (age) {
    case 20:
    case 19:
    case 18:
    case 17:
    case 16:
        console.log("young adult");
        break;
    case 30:
        console.log("adult");
        break;
    default:
        console.log("not valid age");
        break;
}