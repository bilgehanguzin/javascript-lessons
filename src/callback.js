const showError = (errMsg, callbackFunction) => {
    //islemler...
    //islemler...
    //islemler...
    //islemler...
    callbackFunction(errMsg);
}

// showError("Lorem ipsum!", console.log);
// showError("Lorem ipsum!", console.error);
// showError("Lorem ipsum!", alert);
// showError(
//     "Lorem ipsum!",
//     (msg) => {
//         //islemler...
//         //islemler...
//         //islemler...
//         //islemler...
//         console.log(msg);
//     }
// );

const logMsg = (msg) => {
    //islemler...
    //islemler...
    //islemler...
    //islemler...
    console.log(msg);
}

// showError("Error", logMsg);


const students = ["Bilgehan", "Fatih", "Mert", "Betul"];

// for (let index = 0; index < students.length; index++) {
//     console.log(students[index]);
// }

const customForEach = (array, callbackFunction) => {
    for (let index = 0; index < array.length; index++) {
        callbackFunction(array[index], index)
    }
}

customForEach(
    students,
    (student, index) => console.log(`${index + 1} - ${student}`)
)

const customMap = (array, callbackFunction) => {
    const resultArr = [];
    for (let index = 0; index < array.length; index++) {
        resultArr.push(callbackFunction(array[index], index, array));
    }
    return resultArr; 
}
