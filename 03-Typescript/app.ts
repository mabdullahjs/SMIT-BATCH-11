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
// type casting

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

// let username = 'abdullah'
// username = 20

// let fruits:string[] = []

// function hello (username:string , age:number){
//     console.log('hello');
//     return {}
// }

// type User = string;
// let username: User = "abd";

// type Obj = {
//   username: string;
//   age: number;
//   email: string;
//   lastname?: string
// };

// const obj: Obj = {
//   username: "abd",
//   age: 20,
//   email: 'abc@gmail.com'
// };

// obj.lastname = 'khan'

//-----Union Type-----//

// type User = string | number;

// let username: User = 1;

// type Fruits = (string | number | boolean)[]

// let fruits:Fruits = ['mango' , 'orange' , 20 , true]

//-----Interfaces-----//

// interface Obj  {
//   username: string;
//   age: number;
//   email: string;
//   lastname?: string;
// };

// const obj: Obj = {
//   username: "abd",
//   age: 20,
//   email: 'abc@gmail.com'
// };

//-----Interfaces vs Type Aliases-----//

// type User = {
//     username: string;
//     age: number;
// }

// type User = {     //wrong syntax
//     lastname: string
// }

// interface User {
//   username: string;
//   age: number;
// }

// interface User {
//   lastname: string;
// }

// const user: User = {
//   username: "abc",
//   age: 20,
//   lastname: "khan",
// };

// interface Fruit {
//   fruitName: string;
//   price: number;
//   state: string;
// }

// interface Mango extends Fruit {
//   type: string;
// }

// let fruit: Fruit = {
//   fruitName: "cherry",
//   price: 1000,
//   state: "KPK",
// };

// let mango: Mango = {
//   fruitName: "mango",
//   price: 3000,
//   state: "sindh",
//   type: "sindhri",
// };

// type Fruit = {
//   fruitName: string;
//   price: number;
//   state: string;
// };

// type Mango = Fruit & {
//   type: string;
// };

// let fruit: Fruit = {
//   fruitName: "cherry",
//   price: 1000,
//   state: "KPK",
// };

// let mango: Mango = {
//   fruitName: "mango",
//   price: 3000,
//   state: "sindh",
//   type: "sindhri",
// };

//-----Enums-----//

// enum CardinalDirections {
//   North,
//   East,
//   South,
//   West,
// }
// let currentDirection = CardinalDirections.North;
// console.log(currentDirection);

// enum User {
//   admin = "admin",
//   user = "user",
// }

// console.log(User.admin);

// enum StatusCodes {
//   NotFound = 404,
//   Success = 200,
//   Accepted = 202,
//   BadRequest = 400,
// }

// StatusCodes.NotFound;

//-----Generics-----//

// function identity<T>(arg: T): T {
//   return arg;
// }

// console.log(identity('abd'));

// function identity(arg: any): any {
//   return [arg];
// }

// console.log(identity("abd"));

// Tuples

// let ourTuple: [number, boolean, string];

// ourTuple = [12, true, "sn"];

// type fruit = [string, number];

// let fruits: fruit = ["mango", 200];

// Type Guards

// function hello(str: string | number) {
//   if (typeof str === "string") {
//     console.log(str.toLowerCase());
//   }
// }
// hello("BFSDJFBHDFB");
// hello(324324);
