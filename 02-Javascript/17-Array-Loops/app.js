// console.log('hello world!');

// const arr = ['apple', 'banaana', 'orange', 'watermelon', 'guava', 'mango'];

// const div = document.querySelector('div');

// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i])
//     div.innerHTML += `
//     <h1>${arr[i]}</h1>
//     `
// }









// const form = document.querySelector('#form');
// const username = document.querySelector('#username');
// const email = document.querySelector('#email');
// const password = document.querySelector('#password');


// let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// let regex = /^(?=.*!)[a-zA-Z0-9!]{4,5}$/;
// let cnicRegex = /^42\d{11}$/;

// form.addEventListener('submit' , (event)=>{
//     event.preventDefault()
//     // console.log(username.value)
//     // console.log(email.value)
//     // console.log(password.value)

//     // console.log(emailRegex.test(email.value))
//     // console.log(regex.test(email.value))
//     // console.log(cnicRegex.test(email.value))

//     if(cnicRegex.test(email.value)){
//         console.log(email.value);
//     }
// })






















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












// console.log('hello world!')


// const hello = (username)=>{
//     return `hello ${username}`
// }

// const hello = username => `hello ${username}`

// console.log(hello('abdullah'));



















// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }





//Array Loops

// const arr = ['apple', 'banaana', 'orange', 'watermelon', 'guava', 'mango'];

// const user = {
//     username: 'abdullah',
//     email: 'mabdullah2037@gmail.com',
//     age: 21,
//     hobbies: ['cricket', 'swimming', 'eating']
// }

// console.log(user.username)
// console.log(user['username'])

const div = document.querySelector('div');

// for (const iterator of arr) {
//     console.log(iterator);
//     div.innerHTML += `<h1>${iterator}</h1>`

// }


// for (const key in user) {
//     // console.log(user[key])
//     console.log(`${key} ==> ${user[key]}`);
// }




















//foreach
//map
//filter
//reduce


//callback
//higher order function


//callback function wo function hota ha jo ma kisi bhi function ka as an argument bhejdeta krdeta ho

// wo function jo apna under as an argument aik callback leta ha us function ko higher order function kehta hain!

// arr.forEach(function (item){
//     console.log(item)
// })


// const iteratedItem = arr.forEach((item , index)=>{
//     // console.log(item);
//     // div.innerHTML += `<h1>${item}</h1>`
//     // return item
// })
// console.log(iteratedItem);

// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const iteratedItems = num.map((item, index) => {
//     // console.log(item);
//     // div.innerHTML += `<h1>${item}</h1>`
//     return item + 120
// })

// console.log(iteratedItems);



// const sumOfNum = num.map(item => item + 10);
// const sumOfNum = num.map(item => item > 5);

// console.log('mapped===>', sumOfNum);



// const filtered = num.filter((item) => {
//     return item > 5
// })
// console.log('filtered===>', filtered);



// let filteredArr = []
// for (let i = 0; i < num.length; i++) {
//     // console.log(num[i]);
//     if (num[i] > 5) {
//         // console.log(num[i])
//         filteredArr.push(num[i])
//     }
// }

// console.log(filteredArr);


// let filtered = num.filter(item => item > 5);
// console.log(filtered);
































const products = [
    // Electronics
    {
        name: "Wireless Mouse",
        price: 25.99,
        category: "Electronics",
        brand: "Logitech"
    },
    {
        name: "Smartphone",
        price: 699.99,
        category: "Electronics",
        brand: "Samsung"
    },
    {
        name: "LED Monitor",
        price: 129.99,
        category: "Electronics",
        brand: "Dell"
    },
    {
        name: "Bluetooth Speaker",
        price: 45.99,
        category: "Electronics",
        brand: "JBL"
    },
    {
        name: "Laptop",
        price: 999.99,
        category: "Electronics",
        brand: "Apple"
    },

    // Footwear
    {
        name: "Running Shoes",
        price: 59.99,
        category: "Footwear",
        brand: "Nike"
    },
    {
        name: "Sneakers",
        price: 75.99,
        category: "Footwear",
        brand: "Adidas"
    },
    {
        name: "Sandals",
        price: 25.99,
        category: "Footwear",
        brand: "Teva"
    },
    {
        name: "Formal Shoes",
        price: 120.00,
        category: "Footwear",
        brand: "Clarks"
    },
    {
        name: "Boots",
        price: 150.00,
        category: "Footwear",
        brand: "Timberland"
    },

    // Home Appliances
    {
        name: "Blender",
        price: 34.99,
        category: "Home Appliances",
        brand: "Oster"
    },
    {
        name: "Microwave Oven",
        price: 99.99,
        category: "Home Appliances",
        brand: "Panasonic"
    },
    {
        name: "Air Conditioner",
        price: 299.99,
        category: "Home Appliances",
        brand: "LG"
    },
    {
        name: "Vacuum Cleaner",
        price: 149.99,
        category: "Home Appliances",
        brand: "Dyson"
    },
    {
        name: "Toaster",
        price: 29.99,
        category: "Home Appliances",
        brand: "Breville"
    },

    // Stationery
    {
        name: "Notebook",
        price: 3.99,
        category: "Stationery",
        brand: "Moleskine"
    },
    {
        name: "Pen Set",
        price: 12.99,
        category: "Stationery",
        brand: "Parker"
    },
    {
        name: "Highlighters",
        price: 5.99,
        category: "Stationery",
        brand: "Sharpie"
    },
    {
        name: "Stapler",
        price: 7.99,
        category: "Stationery",
        brand: "Swingline"
    },
    {
        name: "Planner",
        price: 14.99,
        category: "Stationery",
        brand: "Erin Condren"
    },

    // Furniture
    {
        name: "Desk Chair",
        price: 89.99,
        category: "Furniture",
        brand: "Ikea"
    },
    {
        name: "Coffee Table",
        price: 129.99,
        category: "Furniture",
        brand: "West Elm"
    },
    {
        name: "Sofa",
        price: 499.99,
        category: "Furniture",
        brand: "Ashley Furniture"
    },
    {
        name: "Bookshelf",
        price: 79.99,
        category: "Furniture",
        brand: "Sauder"
    },
    {
        name: "Dining Table",
        price: 399.99,
        category: "Furniture",
        brand: "Pottery Barn"
    },

    // Fitness
    {
        name: "Yoga Mat",
        price: 19.99,
        category: "Fitness",
        brand: "Gaiam"
    },
    {
        name: "Dumbbells",
        price: 49.99,
        category: "Fitness",
        brand: "Bowflex"
    },
    {
        name: "Treadmill",
        price: 699.99,
        category: "Fitness",
        brand: "NordicTrack"
    },
    {
        name: "Resistance Bands",
        price: 14.99,
        category: "Fitness",
        brand: "Fit Simplify"
    },
    {
        name: "Exercise Bike",
        price: 299.99,
        category: "Fitness",
        brand: "Peloton"
    },

    // Kitchen Appliances
    {
        name: "Coffee Maker",
        price: 49.99,
        category: "Kitchen Appliances",
        brand: "Keurig"
    },
    {
        name: "Air Fryer",
        price: 89.99,
        category: "Kitchen Appliances",
        brand: "Ninja"
    },
    {
        name: "Stand Mixer",
        price: 199.99,
        category: "Kitchen Appliances",
        brand: "KitchenAid"
    },
    {
        name: "Refrigerator",
        price: 799.99,
        category: "Kitchen Appliances",
        brand: "Whirlpool"
    },
    {
        name: "Dishwasher",
        price: 399.99,
        category: "Kitchen Appliances",
        brand: "Bosch"
    }
];

// console.log(products);

// const electronics = products.filter(item => {
//     return item.category === 'Electronics' && item.price > 100
// }).filter((item)=>{
//     return item.price < 200
// })














// const electronics = products.filter(item => item.category === 'Electronics').filter(item => item.price > 100).filter(item => item.price < 200)

// console.log(electronics);








//callback function
// higher order function

// products.map(function (item){
//     console.log(item)
// })


//reduce

// const num = [1, 2, 3, 4, 5 , 5 ,5];
// const shallowCopy = num.slice(3);
// console.log(shallowCopy);

// const sum = num.reduce((accumulator , initialvalue)=>{
//     return  accumulator + initialvalue
// } , 0)

// console.log(sum);






































