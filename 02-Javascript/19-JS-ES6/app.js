// Variable Scoping // p
// Closure //p
// lexical scoping //p
// Modules
// Object Methods (keys,values,freez,entries)
// Exponentiation Operator // p
// Optional chaining //p
// Destructuring //p
// Template literals //p
// Destructuring //p
// Default parameters //p
// Rest parameter //p
// Spread Operator //p
// Arrow functions  //p
// Enhanced object literals //p
// Iterators & For..of  //p
// Map  //p
// Array methods  //p
// Higher-order function  //p
// CallBack  //p
// Promises  //p
// Ternary Operator //p

// const user = {
//   username: "abdullah",
//   email: "mabdullah2037@gmail.com",
//   age: 21,
// };

// const { username, email, age } = user;

// console.log(username);

// const fruit = ["apple", "banana", "orange", "mango"];

// const [, , , four] = fruit;
// console.log(four);

//spread operator

// const fruit = ["apple", "banana", "orange", "mango"];
// const arr2 = ["watermelon", ...fruit];
// console.log(arr2);
// const newArr = arr2.concat(fruit);
// console.log(newArr);

//rest operator
// function hello(...username) {
//   console.log(username);
// }
// hello("abdullah", "usman", "ammar", "zain", "hassan");

//ternary operator
const num = 220;
// if (num > 50) {
//   console.log("passed");
// } else {
//   console.log("failed");
// }

// num > 50 ? console.log("passed") : console.log("failed");

// if (num > 70) {
//   console.log("behtreen");
// } else if (num > 50) {
//   console.log("passed");
// } else {
//   console.log("failed");
// }

// num > 70
//   ? console.log("behtreen")
//   : num > 50
//   ? console.log("passed")
//   : console.log("failed");

//default parameter

// function greetUser(username = "abd") {
//   console.log(`hello ${username}`);
// }

// greetUser();

// Enhanced object literals

// let names = "abd";
// let age = 21;

// let user = {
//   names,
//   age,
// };
// console.log(user);

// Variable Scoping

// var username = "abdullah";
// var username = "usman";
// username = "uzair";

// let username2 = "abdullah";
// username2 = "usman";

// const username3 = "abdullah";

// const username;

// let user = "abdullah";
// function username() {
//   let usernames = "usman";
//   console.log(user);
// }
// console.log(usernames);
// username();

// if (true) {
//   const city = "karachi";
// }
// console.log(city);

//lexical scope

// function outerFunc() {
//   let a = 10;
//   function innerFunc() {
//     let b = 20;
//     console.log(a);
//   }

//   function innerFunc2() {
//     console.log(a);
//     console.log(b);
//   }
//   innerFunc();
//   innerFunc2();
// }
// outerFunc();

//closures

// function outerFunc() {
//   function innerFunc() {
//     console.log("hello world!");
//   }
//   return innerFunc;
// }

// // const newFunc = outerFunc();
// // newFunc();
// console.log(outerFunc()());

//Optional chaining

// const user = {
//   username: "abdullah",
//   nestedUser: {
//     fullname: "Muhammad Abdullah",
//     nestedUser2: {
//       lastname: "khan",
//     },
//   },
// };

// console.log(user.nestedUser?.nestedUser?.lastname);
// [{}]

// const nestedObject = {
//   level1: {
//     level2: {
//       level3: {
//         data: "I am deeply nested!",
//       },
//     },
//   },
// };
// console.log(nestedObject?.level1?.level2?.level3?.data);

// Exponentiation Operator

console.log(2 ** 3);

// Precedence
console.log(2 + 3 ** 2); // ** isko zyada precedence milaigi
console.log((2 + 3) ** 2);

// event
// api calling //https://www.youtube.com/watch?v=2EWVUZS6PKE
// filter map //https://youtu.be/jqjHp1PHJu4?si=C-RMR-qZjSOYyQoF
// promises
//async await

// local storage https://www.youtube.com/watch?v=Xf0hPx9VoVs
