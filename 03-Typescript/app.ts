// TS Compiler P
// Type Annotations
// Type Inference
// Type Aliases
// Union Types
// Interfaces
// Type Aliases vs Interface
// Generics
// Enums
// Tuples
// Type Guards

//-----Type Annotations-----//

// let username:string = 'abdullah';
// username = true //not allowed
// console.log(username);

// let age:number = 20;
// age = 21
// console.log(age);

// let isLoggedIn:boolean = true
// console.log(isLoggedIn);

// let user:string[] = ['abdullah']

// type any

// let username:any = 'abdullah'
// username = 20

// function sum(num1: number, num2: number):number {
//   return num1 + num2;
// }
// console.log(sum(20, 30));

// function greetUser(username: string, age: number){
//   console.log(`hello ${username} with age ${age}`);
// }

// greetUser("abdullah", 20);

//-----Type Inference-----//

// let username = 'abdullah'
// username = 20

// let num = 20
// num = 'age'

// let fruits = ['mango' , 20]

//-----Type Aliases-----//

// type Abd = string

// let user:Abd = 'abdullah'

// type Fruits = (string | number)[]

// let fruits:Fruits = ['abdullah' , 20 , true]

// type User = {
//     username: string;
//     email: string;
//     age: number;
//     isLoggedIn: boolean;
// }

// type User = {
//   username: string;
//   email: string;
//   age: number;
//   isLoggedIn: boolean;
//   lastName?: string;
// };

// const user: User = {
//   username: "abc",
//   email: "abc@gmail.com",
//   age: 20,
//   isLoggedIn: true,
// };

// user.lastName = "khan";

// console.log(user);
