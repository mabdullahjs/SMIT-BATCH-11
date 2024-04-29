// console.log('hello world!');

















// []
// const arr = ['apple' , , , , , 'banana'];
// arr[4] = 'orange'
// console.log(arr[5]);
// console.log(arr);


//collection of key and property is called object

// const obj = {
//     username: 'abdullah',
//     email: 'mabdullah2037@gmail.com',
//     age: 20,
//     isLoggedIn: false
// }

// console.log(obj);
// obj.username = 'usman';
// obj.firstname = 'khan'
// obj.age = 10 
// delete obj.email;
// console.log(obj);

// console.log(obj);
// console.log(obj.username);
// console.log(obj.age);
// console.log(obj['age']);



























// const greet = function (){
//     console.log('hello world');
//     return 'return func'
// }

// // greet()
// console.log(greet());










// const user = {
//     name: 'abdullah',
//     age: 20,
//     email:'mabdullah@gmail.com',
//     isLoggedIn: true,
//     greetUser: function (){
//         console.log('hello world!' , this.age);
//         return 'return hello world'
//     },
//     hobbies: ['cricket' , 'cooking' , 'eating' , 'swimming']
// }

// console.log(user.email);
// console.log(user.greetUser());
// console.log(user.hobbies[1]);

















//obj banana haa name,email,age,greetuser uska baad firstname and lastname baad ma add krna haa or name delete krna ha. greet user ka function jab bhi call hoo to wo return kraa hello '${name}'


// const user = {
//     name:'abdullah',
//     email:'mabdullah@gmail.com',
//     age:20,
//     greetUser: function (){
//         return `hello ${this.firstname}`
//     }
// }

// delete user.name
// user.firstname = 'Muhammad';
// user.lastname = 'abdullah'
// console.log(user.greetUser());
// console.log(user);

























// 4 formfields banaingi name , email , age, city jaisa hi user submit pa click kraiga mera pass console ma aik object ajayega jiska undar values form wali hongi











// [{} , {} , {} , {}]


const username = document.querySelector('#name');
const age = document.querySelector('#age');
const city = document.querySelector('#city');
const email = document.querySelector('#email');
function getValue(){
    const obj = {
        name: username.value,
        email: email.value,
        city: city.value,
        age: age.value
    }
    console.log(obj);
}










