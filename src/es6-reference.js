const students = ["Bilgehan", "Mert", "Betul", "Fatih", "Emre", "Buse"];

// //YANLIS!!!!!
// const newStudents = students;

// newStudents.pop();
// newStudents.pop();
// newStudents.pop();

// newStudents.push("Korhan", "Firat");

// console.log(newStudents);
// console.log(students);

//spread
const newStudents = ["Firat", ...students, "Korhan"];

// console.log(students);
// console.log(...students);
// console.log(students[0], students[1], students[2], students[3]);
// console.log(newStudents);

const student1 = {
    firstName: "Bilgehan",
    lastName: "Guzin",
    courses: ["JavaScript Dev", "React", "Node.js"],
    age: 28,
}

// console.log(...student1);
const student2 = { ...student1, firstName: "Betul", lastName: "Keskin", };

// console.log(student2);

// const fullName = "Orkun Durmaz";
// const email = "lorem@ipsum";

// const student3 = {fullName, email};
// console.log(student3);

//rest
const greetEveryone = (person1, person2, person3, ...restOfThePeople) => {
    console.log("Hello \n");
    console.log(person1, person2, person3, restOfThePeople);
}

// greetEveryone("Bilgehan", "Mert", "Betul", "Fatih", "Orkun");


//destructure
// const _student1 = students[0]
// const _student2 = students[1]
// const _student3 = students[2]

// const [_student1, , _student3, ...rest] = students;

const student1FirstName = student1.firstName;
const student1LastName = student1.lastName;

const { firstName: fName, lastName, ...restOfProps } = student1;
// console.log({fName, lastName});
// console.log(restOfProps);

const addStudent = ({fname, lname, age, courses}) => {
    //islemler...
    //islemler...
    //islemler...
    //islemler...
    console.log({fname, lname, age, courses});
}

addStudent(1)

//export
export default mongodbHelper = {
    findValue: function (){

    },
    add: function() {

    }
}