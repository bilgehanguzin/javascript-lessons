const student1 = {
    //key    : value
    firstName: "Bilgehan",
    lastName: "Guzin",
    courses: ["JavaScript Dev", "React", "Node.js"],
    instructor: { firstName: "Orkun", lastName: "Durmaz" },
    age: 28,
    logAllProps() {
        console.log(this);
    },
    //yanlis!!
    "kebab-case": "adana-kebab"
}

//dot notation

// student1.logAllProps();

student1.email = "cilgin_yazilimci_20@gmail.com";
student1.age = 25;


//bracket notation
// console.log(student1["kebab-case"]);

let prop1 = "age";
// console.log(student1[prop1]);

//hasOwnProperty
// console.log(
//     student1.hasOwnProperty("isActive"),
//     student1.hasOwnProperty("age"),
// );

//forin
// for (const key in student1) {
//     console.log(`${key} : ${student1[key]}`);      
// }

//crud limitation
//Object.freeze : read-only
// Object.freeze(student1);

// student1.age = 28; //update
// student1.isDeleted = false; //create
// delete student1["kebab-case"]; //delete
// console.log(student1);

//Object.seal: ready, update
// Object.seal(student1);

// student1.age = 28; //update
// student1.isDeleted = false; //create
// delete student1["kebab-case"]; //delete
// console.log(student1);

//Object.preventExtentions read, update, delete
// Object.preventExtensions(student1);

// student1.age = 28; //update
// student1.isDeleted = false; //create
// delete student1["kebab-case"]; //delete
// console.log(student1);

//Object.keys
// console.log(
//     Object.keys(student1)
// );

//Object.values
// console.log(
//     Object.values(student1)
// );

//Object.entries
console.log(
    Object.entries(student1)
);