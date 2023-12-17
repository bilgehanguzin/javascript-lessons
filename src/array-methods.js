const students = [
    {
        firstName: "Bilgehan",
        lastName: "Guzin",
        courses: ["JavaScript Dev", "React", "Node.js"],
        instructor: [{ firstName: "Orkun", lastName: "Durmaz" },],
        age: 28,
        isDeleted: true,
        isActive: true,
    },
    {
        firstName: "Mert",
        lastName: "Aksoy",
        courses: ["JavaScript Dev", "React Native"],
        instructor: [{ firstName: "Korhan", lastName: "Kosece" },],
        age: 29,
        isDeleted: false,
        isActive: true,
    },
    {
        firstName: "Betul",
        lastName: "Keskin",
        courses: ["JavaScript Dev", ".Net Core", "C#"],
        instructor: [{ firstName: "Ridvan", lastName: "Aksoy" },],
        age: 27,
        isDeleted: false,
        isActive: true,
    },
    {
        firstName: "Fatih",
        lastName: "Yigiter",
        courses: ["Python Dev", "Django", "SQL"],
        instructor: [{ firstName: "Orkun", lastName: "Durmaz" },],
        age: 27,
        isDeleted: false,
        isActive: true,
    },
    {
        firstName: "Hicran",
        lastName: "Ertugral",
        courses: ["JavaScript Dev", "Node.js", "React Native"],
        instructor: [{ firstName: "Orkun", lastName: "Durmaz" },],
        age: 37,
        isDeleted: false,
        isActive: true,
    },
]

//forEach
// students.forEach(
//     (student, index, arr) => {
//         //islemler...
//         //islemler...
//         //islemler...
//         //islemler...
//         //islemler...
//         console.log(student, index);
//         console.log(arr);
//     }
// )

//map
// console.log(
//     students.map(student => student.age)
// );

// console.log(
//     students.map(student => `${student.firstName} ${student.lastName}`)
// );

const numbers = [12, -5, 123, 35, 9893, 0, -344, -65, -1, 464, 7];

//filter
// console.log(
//     numbers.filter(num => {
//         if (num > 0) {
//             return true;
//         }
//         else {
//             return false;
//         }
//     })
// );

// console.log(
//     numbers.filter(num => {
//         if (num > 0) {
//             return true;
//         }
//     })
// );
// console.log(
//     numbers.filter(num => num > 0)
// );

// console.log(
//     students.filter((student, index) => !(index % 2))
// );


//some
// console.log(
//     numbers.some(num => num > 100)
// );

// console.log(
//     students.some(student => student.isDeleted)
// );

//every
// console.log(
//     numbers.every(num => num > 100)
// );

//find, findLast
// console.log(
//     students.find(student => student.courses.includes("JavaScript Dev"))
// );
// console.log(
//     students.findLast(student => student.courses.includes("JavaScript Dev"))
// );

//findIndex
// console.log(
//     students.findIndex(student => student.courses.includes("JavaScript Dev"))
// );

//flat
// console.log(
//     [1, 2, 3, [11, 22, 33, [111, 222, 333]]].flat(2)
// );

//split, join
// console.log(
//     "Bilgehan".split("").join(""),
//     "Bil-ge-han".split("-").join(""),
// );

//const numbers = [12, -5, 123, 35, 9893, 0, -344, -65, -1, 464, 7];

//sort
//a: ilk eleman
//b: ikinci eleman
// a > b => +1   ||   a === b => 0   ||   a < b => -1

// numbers.sort((firstNumber, secondNumber) => {
//     const result = firstNumber - secondNumber;
//     if (result > 0) {
//         return +1
//     }
//     else if (result < 0) {
//         return -1
//     }
//     else if (result === 0) {
//         return 0
//     }
// });

// numbers.sort((firstNumber,secondNumber) => firstNumber - secondNumber)

// console.log(numbers);


const nums = [1, 2, 3, 4, 5];
//reduce

const sumAllNums = (total, currentNum) => {
    console.log(`total: ${total} currentNum: ${currentNum} newTotal: ${currentNum + total}`);
    return total + currentNum
};

const initialValue = 10;

console.log(
    nums.reduce(
        sumAllNums,
        initialValue
    )
);