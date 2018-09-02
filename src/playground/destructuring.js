//Object destructuring

// const person = {
//     name: 'Mukesh',
//     age: 30,
//     location: {
//         city: 'Chennai',
//         temp: 32
//     }
// }

// const { city, temp: temperature = 30}  = person.location;

// console.log(`${city} is of temperature ${temperature}`)

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const {name: publisherName = 'Self-Published'} = book.publisher;
// console.log(publisherName);

// Array destructuring

const itemArr = ['coffee (hot)','2','2.5','2.75'];

const [item,,mediumCost,] = itemArr;
console.log(`A medium ${item} costs ${mediumCost}`);