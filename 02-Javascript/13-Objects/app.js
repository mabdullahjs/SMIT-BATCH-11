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


// const username = document.querySelector('#name');
// const age = document.querySelector('#age');
// const city = document.querySelector('#city');
// const email = document.querySelector('#email');
// function getValue(){
//     const obj = {
//         name: username.value,
//         email: email.value,
//         city: city.value,
//         age: age.value
//     }
//     console.log(obj);
// }
























// const arr = ['Muhammad Abdullah' , 20]


// const obj = {
//     name: 'Muhammad Abdullah',
//     age: 20,
//     isLoggedIn: true,
//     hobbies: ['cricket' , 'swimming' , 'running']
// }


// const nestedObj = {
//     names: {
//         firstPosition: ['abdullah', 'usman', 'haseeb', 'abubakar'],
//         secondPosition: [{
//             names: ['Ali', 'babar']
//         }, {
//             names: [{ names: ['hammad'] }]
//         }]
//     }
// }
// console.log(nestedObj.names.secondPosition[1].names[0].names[0])



































// let nestedData = [
//     {
//         category: "Electronics",
//         subcategories: [
//             {
//                 name: "Smartphones",
//                 products: [
//                     { brand: "Apple", model: "iPhone 13", price: 999 },
//                     { brand: "Samsung", model: "Galaxy S21", price: 799 },
//                     { brand: "Google", model: "Pixel 6", price: 699 }
//                 ]
//             },
//             {
//                 name: "Laptops",
//                 products: [
//                     { brand: "Apple", model: "MacBook Pro", price: 1499 },
//                     { brand: "Dell", model: "XPS 13", price: 1299 },
//                     { brand: "HP", model: "Spectre x360", price: 1199 }
//                 ]
//             }
//         ]
//     },
//     {
//         category: "Clothing",
//         subcategories: [
//             {
//                 name: "Men's",
//                 products: [
//                     { brand: "Nike", item: "T-shirt", price: 25 },
//                     { brand: "Adidas", item: "Joggers", price: 40 }
//                 ]
//             },
//             {
//                 name: "Women's",
//                 products: [
//                     { brand: "Zara", item: "Dress", price: 50 },
//                     { brand: "H&M", item: "Jeans", price: 30 }
//                 ]
//             }
//         ]
//     }
// ];

// console.log(nestedData[0].subcategories[0].products[0].model)































// const users = [
//     {
//         name: "Alice",
//         age: 25,
//         hobbies: ["Reading", "Painting"]
//     },
//     {
//         name: "Bob",
//         age: 30,
//         hobbies: ["Playing guitar", "Cooking"]
//     },
//     {
//         name: "Charlie",
//         age: 22,
//         hobbies: ["Hiking", "Photography"]
//     },
//     {
//         name: "David",
//         age: 28,
//         hobbies: ["Running", "Watching movies"]
//     },
//     {
//         name: "Ella",
//         age: 35,
//         hobbies: ["Traveling", "Knitting"]
//     },
//     {
//         name: "Frank",
//         age: 20,
//         hobbies: ["Gaming", "Drawing"]
//     },
//     {
//         name: "Grace",
//         age: 27,
//         hobbies: ["Singing", "Dancing"]
//     },
//     {
//         name: "Hannah",
//         age: 32,
//         hobbies: ["Cooking", "Yoga"]
//     },
//     {
//         name: "Ian",
//         age: 24,
//         hobbies: ["Playing football", "Reading" ,'a' , 'b' , 'c']
//     },
//     {
//         name: "Jessica",
//         age: 29,
//         hobbies: ["Writing", "Cycling", 'swimming']
//     }
// ];

// console.log(users);

// const div = document.querySelector('#users');

// for (let i = 0; i < users.length; i++) {
//     console.log(users[i]);
//     let hobbiesList = '';
//     for (let j = 0; j < users[i].hobbies.length; j++) {
//         hobbiesList += `<li>${users[i].hobbies[j]}</li>`;
//     }
//     div.innerHTML += `
//     <h1>Name: ${users[i].name}</h1>
//     <h2>Age: ${users[i].age}</h2>
//     <ul>
//     ${hobbiesList}
//     </ul>
//     <hr/>
//     `
// }




// for(let i = 0; i < users.length; i++){
//     let hobbies = ''
//     for(let j = 0; j < users[i].hobbies.length; j++){
//         // console.log(users[i].hobbies[j])
//         hobbies +=`<li>${users[i].hobbies[j]}</li>`
//     }
//     div.innerHTML += `
//     <h1>Name: ${users[i].name}</h1>
//     <h1>Age: ${users[i].age}</h1>
//     <h1>Hobbies</h1>
//     <ul>${hobbies}</ul>
//     <hr/>
//     `
// }

























const products = [
    {
        name: "Laptop",
        price: 999.99,
        description: "Powerful laptop for all your computing needs."
    },
    {
        name: "Headphones",
        price: 79.99,
        description: "High-quality headphones for immersive audio experience."
    },
    {
        name: "Smartphone",
        price: 699.99,
        description: "Advanced smartphone with cutting-edge features."
    },
    {
        name: "Tablet",
        price: 449.99,
        description: "Portable tablet for entertainment and productivity."
    },
    {
        name: "Smartwatch",
        price: 249.99,
        description: "Stay connected and track your fitness with this smartwatch."
    },
    {
        name: "Gaming Console",
        price: 399.99,
        description: "Experience the thrill of gaming with this powerful console."
    },
    {
        name: "Camera",
        price: 599.99,
        description: "Capture life's moments with stunning clarity and detail."
    },
    {
        name: "Wireless Speaker",
        price: 129.99,
        description: "Enjoy your favorite music wirelessly with this speaker."
    },
    {
        name: "External Hard Drive",
        price: 129.99,
        description: "Expand your storage and backup your files with ease."
    },
    {
        name: "Wireless Mouse",
        price: 29.99,
        description: "Navigate your computer with precision and comfort."
    },
    {
        name: "Printer",
        price: 199.99,
        description: "Print documents and photos with exceptional quality."
    },
    {
        name: "Desk Lamp",
        price: 49.99,
        description: "Illuminate your workspace with adjustable brightness."
    },
    {
        name: "Fitness Tracker",
        price: 79.99,
        description: "Monitor your health and track your workouts."
    },
    {
        name: "Bluetooth Earbuds",
        price: 99.99,
        description: "Wireless earbuds for on-the-go audio enjoyment."
    },
    {
        name: "Portable Charger",
        price: 39.99,
        description: "Charge your devices anywhere, anytime."
    },
    {
        name: "USB Flash Drive",
        price: 19.99,
        description: "Store and transfer your files conveniently."
    },
    {
        name: "Monitor",
        price: 299.99,
        description: "Upgrade your display for enhanced productivity."
    },
    {
        name: "Keyboard",
        price: 49.99,
        description: "Type comfortably with this reliable keyboard."
    },
    {
        name: "Computer Mousepad",
        price: 9.99,
        description: "Enhance your mouse precision with this smooth pad."
    },
    {
        name: "Graphic Tablet",
        price: 199.99,
        description: "Express your creativity with this digital drawing tablet."
    },
    {
        name: "Wireless Router",
        price: 79.99,
        description: "Fast and reliable internet connection for your home network."
    }
];

console.log(products);
const div = document.querySelector('#products');

for (let i = 0; i < products.length; i++) {
    console.log(products[i])
    div.innerHTML += `
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${products[i].name}</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">${products[i].price}</h6>
    <p class="card-text">${products[i].description}</p>
    <a href="#" class="card-link">Add To Cart</a>
  </div>
</div>
    `

}




// const user = {
//     username: 'Muhammad Abdullah',
//     email: 'mabdullah@gmail.com',
//     age: 20,
//     isLoggedIn: true,
//     hobbies: ['cricket', 'swimming', 'gym'],
//     isAllowed: function () {
//         console.log(user.age)
//         // if (user.age >= 18) {
//         //     // console.log('user allowed')
//         //     console.log(this)
//         // } else {
//         //     console.log('maalik shaart hojaa!')
//         // }
//     }
// }

// user.username = 'usman';
// delete user.age;
// user.abc = 'abc'
// console.log(user)

// user.isAllowed()

// console.log(this);
// window.location = ''


// const age = 16;

// function changeLocation(element) {
//     console.log(element.innerHTML)
//     element.innerHTML = 'CHANGED'
//     // if(age >= 18){
//     //     console.log('about pa jaskta ho');
//     //     window.location = 'about.html';
//     // }else{
//     //     console.log('nahi jaskta');
//     // }
// }




































// let plan1 = {
//     name: "Basic",
//     price: 3.99,
//     space: 100,
//     transfer: 1000,
//     pages: 10
// };

// function createPlan(name, price, space, transfer, pages) {
//     this.name = name;
//     this.price = price;
//     this.space = space;
//     this.transfer = transfer;
//     this.pages = pages

// }

// const newPlan = new createPlan('basic' , 200 , 40 , 1000 , 10);
// console.log(newPlan)

// const names = document.querySelector('#name');
// const transfer = document.querySelector('#transfer');
// const space = document.querySelector('#space');
// const price = document.querySelector('#price');
// const page = document.querySelector('#page');

// function createPlans() {
//     const obj = {
//         name:names.value,
//         price: price.value,
//         space: space.value,
//         transfer: transfer.value,
//         pages: page.value
//     }
//     // const newObj = new createPlan(names.value, price.value, space.value, transfer.value, page.value)
//     console.log(obj)
// }



























