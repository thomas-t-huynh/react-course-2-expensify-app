const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            name: 'thomas',
            age: 25
        });
        reject('Something went terribly wrong');
    }, 1500);
    
});

console.log('before');

promise.then((data) => {
    console.log('1', data);
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('This is my other promise');
        }, 1500);
    
    });
}).then((returnData) => {
    console.log('does this run?, yes', returnData);
}).catch((error) => {
    console.log('error: ', error);
})

// promise.then((data) => {
//     console.log('1', data);
// }).catch((error) => {
//     console.log('error: ', error);
// })


console.log('after');