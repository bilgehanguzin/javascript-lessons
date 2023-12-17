let fullname = "Mert Aksoy";
// let fullname = 'Mert Aksoy';
// let fullname = `Mert Aksoy`;

// console.log(fullname.length);

// console.log('Lorem "ipsum" dolor');
// console.log(`Lorem "ipsum" ' dolor`);
// console.log(`Lorem\n \`"ipsum" ' dolor`);

//index           01234567890123456789012345678
const sentence = "Bebegim de oldun daha ilk gunden Bebegim daha Bebegim daha Bebegim";

//slice
// console.log(
//     sentence.slice(10, 15),
// );
// console.log(
//     sentence.slice(-6),
// );

//substring
// console.log(
//     sentence.substring(10, 15),
// );
// console.log(
//     sentence.slice(-6),
// );


//substr
// console.log(
//     sentence.substr(10, 500),
// );

//replace, replaceAll
// console.log(
//     sentence.replace("Bebegim", "Bebisim"),
//     "\n",
//     sentence,
//     "\n",
//     sentence.replaceAll("Bebegim", "Askitom")
// );

//indexOf, lastIndexOf
// console.log(
//     sentence.indexOf("daha")
// );

// const firstKeyIndex = sentence.indexOf("daha");

// console.log(
//     sentence.indexOf("daha", sentence.indexOf("daha") + 1)
// );

// console.log(
//     sentence.lastIndexOf("Bebegim", sentence.lastIndexOf("Bebegim") - 1)
// );

//search
// console.log(
//     sentence.search("Bebegim")
// );

//includes
// console.log(
//     sentence.includes(" ")
// );

//toLower, toUpper 
// console.log(
//     sentence.toLowerCase(),
//     sentence.toUpperCase()
// );

//trim
// console.log(
//     "    lorem    ipsum dolor        ".trim()
// );

//Template Literals
const firstName = "Bilgehan";
const lastName = "Guzin";
const course = "JavaScript Dev";
const gradDate = "30-10-2023";

let num1 = 5;
let num2 = 15;

console.log(
    `Ogrencimiz ${firstName} ${lastName}, ${course} dersinden ${gradDate} tarihinde mezun olacaktir.`,
    `\nResult: ${num1 + num2}`
);

//concat
console.log(
    firstName.concat(" ", lastName, " ", course),
    firstName + " " + lastName + " " + course,
    `${firstName} ${lastName} ${course}`
);

//split
console.log(
    sentence.split(" ")
);