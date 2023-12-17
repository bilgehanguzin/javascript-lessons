const fakeAsyncFunc = () => {
    console.log(1);
    console.log(2);
    setTimeout(() => console.log(3), 1500)
    console.log(4);
    console.log(5);
}

// fakeAsyncFunc();

//XHR
// const request = new XMLHttpRequest();

// // console.log(request);
// request.addEventListener("readystatechange", () => {
//     if(request.readyState === 4 && request.status === 200) {
//         const data = JSON.parse(request.responseText);
//         console.log(data);
//     }
//     else if(request.readyState === 4) {
//         console.log("Could not fetch the data");
//     }
// });

// request.open("GET", "https://jsonplaceholder.typicode.com/users/dasda");
// request.send();

// const getRequest = (url, callback) => {
//     const request = new XMLHttpRequest();

//     // console.log(request);
//     request.addEventListener("readystatechange", () => {
//         if (request.readyState === 4 && request.status === 200) {
//             const data = JSON.parse(request.responseText);
//             callback(data, null)
//         }
//         else if (request.readyState === 4) {
//             callback(null, `${request.status} - Could not fetch the data!`)
//         }
//     });

//     request.open("GET", url);
//     request.send();
// }

const jsonplaceholderURL = "https://jsonplaceholder.typicode.com";

//callback hell
// getRequest(
//     `${jsonplaceholderURL}/todos/1`,
//     (data, err) => {
//         if (err) {
//             console.log(err);
//         }
//         else {
//             getRequest(
//                 `${jsonplaceholderURL}/todos/2`,
//                 (data, err) => {
//                     if (err) {
//                         console.log(err);
//                     }
//                     else {
//                         getRequest(
//                             `${jsonplaceholderURL}/todos/3`,
//                             (data, err) => {
//                                 if (err) {
//                                     console.log(err);
//                                 }
//                                 else {
//                                     getRequest(
//                                         `${jsonplaceholderURL}/todos/4`,
//                                         (data, err) => {
//                                             if (err) {
//                                                 console.log(err);
//                                             }
//                                             else {
//                                                 console.log(data);
//                                             }
//                                         }
//                                     )
//                                 }
//                             }
//                         )
//                     }
//                 }
//             )
//         }
//     }
// )


const getRequest = (url) => {
    return (new Promise(
        (resolve, reject) => {
            const request = new XMLHttpRequest();

            request.addEventListener("readystatechange", () => {
                if (request.readyState === 4 && request.status === 200) {
                    const data = JSON.parse(request.responseText);
                    resolve(data)
                }
                else if (request.readyState === 4) {
                    reject(`${request.status} - Could not fetch the data!`)
                }
            });

            request.open("GET", url);
            request.send();
        })
    )
};

// console.log(1);
// console.log(2);
// getRequest(`${jsonplaceholderURL}/todos/1`)
//     .then(response => console.log(response))
// console.log(3);
// console.log(4);

//yine callback hell
// getRequest(`${jsonplaceholderURL}/todos/1`)
//     .then(response => {
//         return getRequest(`${jsonplaceholderURL}/todos/1`)
//             .then(response => {
//                 return getRequest(`${jsonplaceholderURL}/todos/1`)
//                     .then(response => {
//                         return getRequest(`${jsonplaceholderURL}/todos/1`)
//                             .then(response => console.log(response))
//                     })
//             })
//     })

// getRequest(`${jsonplaceholderURL}/todos/1`)
//     .then(response =>{
//         console.log(response);
//         return getRequest(`${jsonplaceholderURL}/todos/2`);
//     })
//     .then(response =>{
//         console.log(response);
//         return getRequest(`${jsonplaceholderURL}/todos/3`);
//     })
//     .then(response =>{
//         console.log(response);
//         return getRequest(`${jsonplaceholderURL}/todos/4`);
//     })
//     .then(response =>{
//         console.log(response);
//     })
//     .catch(err => console.log(err))
//     .finally(() => console.log("Finally!"));


//fetch
// fetch(`${jsonplaceholderURL}/todos/1`)
//     .then(response => {
//         console.log(response);
//         return response.json();
//     })
//     .then(data => console.log(data))

const getTodoByIdAwait = async (todoID) => {
    console.log("inner 1");
    console.log("inner 2");
    const response = await fetch(`${jsonplaceholderURL}/todos/${todoID}`);
    const data = await response.json();
    console.log("await data:", data);
    console.log("inner 3");
    console.log("inner 4");
    return data;
}

// console.log("outer 1");
// console.log("outer 2");
// fetch(`${jsonplaceholderURL}/todos/10`)
//     .then(response => response.json())
//     .then(data => console.log("then data:", data));
// getTodoByIdAwait(12);
// console.log("outer 3");
// console.log("outer 4");

//try catch
const getAllTodos = async() => {
    try {
        const response = await fetch(`${jsonplaceholderURL}/todosasdas`);
        const data = await response.json();
        //islemler...
        //islemler...
        //islemler...
        //islemler... 
        return data;
    } catch (error) {
        console.log(error.message);
    }
    finally{
        console.log("finally");
    }
}

getAllTodos();