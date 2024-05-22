// console.log('hello world!');

const arr = ['apple', 'banaana', 'orange', 'watermelon', 'guava', 'mango'];

// const div = document.querySelector('div');

// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i])
//     div.innerHTML += `
//     <h1>${arr[i]}</h1>
//     `
// }









const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');


let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let regex = /^(?=.*!)[a-zA-Z0-9!]{4,5}$/;
let cnicRegex = /^42\d{11}$/;

form.addEventListener('submit' , (event)=>{
    event.preventDefault()
    // console.log(username.value)
    // console.log(email.value)
    // console.log(password.value)

    // console.log(emailRegex.test(email.value))
    // console.log(regex.test(email.value))
    // console.log(cnicRegex.test(email.value))

    if(cnicRegex.test(email.value)){
        console.log(email.value);
    }
})






















//arrow function

// const hello = function (username){
//     console.log('hello world' , username)
// }

// hello('abdullah');


// IIFE Immediately Invoked Function Expression

// (function hello(){
//     console.log('hello world');
// })()


//Hoisting

// console.log(username);
// var username = 'abdullah';
// console.log(username);
// let username = 'abdullah';

// var username;


//ECMA Script

// arrow function 

// hello()
// const hello = () => {
//     console.log('hello world')
// }



// hello2()

// function hello2(){
//     console.log('hello 2 normal functions')
// }



//this

// const obj = {
//     username: 'abdullah',
//     greetUser: function () {
//         console.log(this.username)
//     },
//     greetUser2: () => {
//         console.log(this.username)
//     }
// }
// obj.greetUser()
// obj.greetUser2()





// const sum = (num1 , num2)=>{
//     console.log(num1 + num2); //30
//     return num1 + num2
// }
// const answer = sum(10 , 20);
// console.log(answer);






















// const greetUser = (username, age) => {
//     console.log(`hello ${username} with age ${age}`)
//     return {
//         username: username,
//         age: age
//     }
// }

// const user = { 
//     hello: greetUser('abdullah', 20),
//     hobbies: ['cricket']
// };
// console.log(user); // undefined








// const user = (username) => {
//     return username
// }
// const user = username => username

// console.log(user('abdullah'));







// const sum = (num1 , num2) => num1 + num2;
// console.log(sum(10 , 29));













































