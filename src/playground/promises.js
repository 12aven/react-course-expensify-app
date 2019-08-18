const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve('This is my resolved data');
        reject('Somthing went wrong!');
    }, 1500);
});

promise.then((data) => {
    console.log('1',data);
}).then(() => {
//additional promise chain here
}).catch((error) => {
    console.log('error:', error)
});
