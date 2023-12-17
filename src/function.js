//hoisting
greet();
//function decl.
function greet() {
    console.log("Hello World");
}


//function expression
const greetFuncExpression = function () {
    console.log("Hello World");
}
greetFuncExpression();

//arrow function
const greetArrowFunc = () => {
    console.log("Hello World");
}

greetArrowFunc();

// const calculateSquare = (number) => {
//     return number * number;
// }

//implicit return
const calculateSquare = number => number * number;

