// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('I got the user')
//         // resolve({user: 'ed'});
//         reject(new Error('Error Message'))
//     }, 2000);
// });

// promise.then(user => {
//     console.log(user)
// })
// .catch(error => {
//     console.log(error)
// });

////////////////////////////////////////////
//A promise gives back an object of a 'successful' asynchronous operation or the failed
// asynchronis opertaiton.

// We can CREATE promises using a basic instructor that passes in resolve & reject as parameters


///////////////////////////////// PROMISE ALL

// const yt = new Promise(resolve => {
//     setTimeout(() => {
//         console.log('get stuff from youtube')
//         resolve({videos: [1,2,3,4,5]})
//     }, 2000);
// });

// const fb = new Promise(resolve => {
//     setTimeout(() => {
//         console.log('getting fb user')
//         resolve({user: "Name"})
//     }, 3000);
// });

// Promise.all([yt, fb]).then(result => {
//     console.log(result)
// });

///// promise.all allows us to wait until all promises are fufilled 



// async function getData() {
//     const response = await axios('https://restcountries.com/v2/all')
//     const data = await response.json()
//     return data
// }
// console.log(getData)

// getData().then(data => console.log(data)).catch(err => {
//     console.log(err.message)
// })