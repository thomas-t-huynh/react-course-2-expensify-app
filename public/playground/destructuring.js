// const person = {
//     name: 'Thomas',
//     age: 25,
//     location: {
//         city: 'Riverside',
//         temp: 75
//     }
// };

// const  { name: firstName = 'Anonymous' , age } = person;

// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;

// if(city && temperature) {
//     console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//     title: 'Rash',
//     author: 'Pete Hautman',
//     publisher: {
//         //name: 'Schoolastic'
//     }
// };

// const { name: publisherName = 'self-published' } = book.publisher;

// console.log(publisherName);

//Array Destructuring

const address = ['4435 El Camino Real', 'Irvine', 'CA', '92602'];

const [ , city , state = 'New Jersey' ] = address;


console.log(`You are in ${city} ${state}.`)

const item = ['Coffee (hot)' , '$2.00', '$2.50', '$2.75'];

const [ beverage = 'Coffee (iced)' , ,  medium ] = item;

console.log(`A medium ${beverage} costs ${medium}`);