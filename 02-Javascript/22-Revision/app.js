// // Modules
// // Object Methods (keys,values,freez,entries)
// // Destructuring
// // Rest parameter
// // Spread Operator
// // API handeling
// // async await
// // Promises
// // Higher-order function
// // CallBack
// // Array methods
// // Arrow functions
// // Ternary Operator

// // Ternary Operator

// // const numbers = 80;

// // if (numbers > 50) {
// //   console.log("you are passed");
// // } else if (numbers > 40) {
// //   console.log("kaam chalao");
// // } else {
// //   console.log("you are failed");
// // }

// // numbers > 50 ? console.log("you are passed") : console.log("you are failed");

// // numbers > 50
// //   ? console.log("you are passed")
// //   : numbers > 40
// //   ? console.log("kaam chalao")
// //   : console.log("you are failed");

// // Arrow functions

// // console.log(username);
// // var username = "abdullah";

// // console.log(greetUser("abdullah"));

// // function greetUser(username) {
// //   return `hello ${username}`;
// // }

// // const greetUser = (username) => `hello ${username}`;
// // console.log(greetUser("abdullah"));

// // Array methods

// // let fruits = ["Apple", "Banana", "Orange", "Grapes", "Strawberry"];

// // for (let i = 0; i < fruits.length; i++) {
// //   console.log(fruits[i]);
// // }

// const div = document.querySelector("div");

// // fruits.map((item, index) => {
// //   div.innerHTML += `<h1>${item}</h1>`;
// // });

// // const updatedArr = fruits.map((item) => item + "ab");
// // console.log(updatedArr);

// // const products = [
// //   // Electronics
// //   {
// //     name: "Wireless Mouse",
// //     price: 25.99,
// //     category: "Electronics",
// //     brand: "Logitech",
// //   },
// //   {
// //     name: "Smartphone",
// //     price: 699.99,
// //     category: "Electronics",
// //     brand: "Samsung",
// //   },
// //   {
// //     name: "LED Monitor",
// //     price: 129.99,
// //     category: "Electronics",
// //     brand: "Dell",
// //   },
// //   {
// //     name: "Bluetooth Speaker",
// //     price: 45.99,
// //     category: "Electronics",
// //     brand: "JBL",
// //   },
// //   {
// //     name: "Laptop",
// //     price: 999.99,
// //     category: "Electronics",
// //     brand: "Apple",
// //   },

// //   // Footwear
// //   {
// //     name: "Running Shoes",
// //     price: 59.99,
// //     category: "Footwear",
// //     brand: "Nike",
// //   },
// //   {
// //     name: "Sneakers",
// //     price: 75.99,
// //     category: "Footwear",
// //     brand: "Adidas",
// //   },
// //   {
// //     name: "Sandals",
// //     price: 25.99,
// //     category: "Footwear",
// //     brand: "Teva",
// //   },
// //   {
// //     name: "Formal Shoes",
// //     price: 120.0,
// //     category: "Footwear",
// //     brand: "Clarks",
// //   },
// //   {
// //     name: "Boots",
// //     price: 150.0,
// //     category: "Footwear",
// //     brand: "Timberland",
// //   },

// //   // Home Appliances
// //   {
// //     name: "Blender",
// //     price: 34.99,
// //     category: "Home Appliances",
// //     brand: "Oster",
// //   },
// //   {
// //     name: "Microwave Oven",
// //     price: 99.99,
// //     category: "Home Appliances",
// //     brand: "Panasonic",
// //   },
// //   {
// //     name: "Air Conditioner",
// //     price: 299.99,
// //     category: "Home Appliances",
// //     brand: "LG",
// //   },
// //   {
// //     name: "Vacuum Cleaner",
// //     price: 149.99,
// //     category: "Home Appliances",
// //     brand: "Dyson",
// //   },
// //   {
// //     name: "Toaster",
// //     price: 29.99,
// //     category: "Home Appliances",
// //     brand: "Breville",
// //   },

// //   // Stationery
// //   {
// //     name: "Notebook",
// //     price: 3.99,
// //     category: "Stationery",
// //     brand: "Moleskine",
// //   },
// //   {
// //     name: "Pen Set",
// //     price: 12.99,
// //     category: "Stationery",
// //     brand: "Parker",
// //   },
// //   {
// //     name: "Highlighters",
// //     price: 5.99,
// //     category: "Stationery",
// //     brand: "Sharpie",
// //   },
// //   {
// //     name: "Stapler",
// //     price: 7.99,
// //     category: "Stationery",
// //     brand: "Swingline",
// //   },
// //   {
// //     name: "Planner",
// //     price: 14.99,
// //     category: "Stationery",
// //     brand: "Erin Condren",
// //   },

// //   // Furniture
// //   {
// //     name: "Desk Chair",
// //     price: 89.99,
// //     category: "Furniture",
// //     brand: "Ikea",
// //   },
// //   {
// //     name: "Coffee Table",
// //     price: 129.99,
// //     category: "Furniture",
// //     brand: "West Elm",
// //   },
// //   {
// //     name: "Sofa",
// //     price: 499.99,
// //     category: "Furniture",
// //     brand: "Ashley Furniture",
// //   },
// //   {
// //     name: "Bookshelf",
// //     price: 79.99,
// //     category: "Furniture",
// //     brand: "Sauder",
// //   },
// //   {
// //     name: "Dining Table",
// //     price: 399.99,
// //     category: "Furniture",
// //     brand: "Pottery Barn",
// //   },

// //   // Fitness
// //   {
// //     name: "Yoga Mat",
// //     price: 19.99,
// //     category: "Fitness",
// //     brand: "Gaiam",
// //   },
// //   {
// //     name: "Dumbbells",
// //     price: 49.99,
// //     category: "Fitness",
// //     brand: "Bowflex",
// //   },
// //   {
// //     name: "Treadmill",
// //     price: 699.99,
// //     category: "Fitness",
// //     brand: "NordicTrack",
// //   },
// //   {
// //     name: "Resistance Bands",
// //     price: 14.99,
// //     category: "Fitness",
// //     brand: "Fit Simplify",
// //   },
// //   {
// //     name: "Exercise Bike",
// //     price: 299.99,
// //     category: "Fitness",
// //     brand: "Peloton",
// //   },

// //   // Kitchen Appliances
// //   {
// //     name: "Coffee Maker",
// //     price: 49.99,
// //     category: "Kitchen Appliances",
// //     brand: "Keurig",
// //   },
// //   {
// //     name: "Air Fryer",
// //     price: 89.99,
// //     category: "Kitchen Appliances",
// //     brand: "Ninja",
// //   },
// //   {
// //     name: "Stand Mixer",
// //     price: 199.99,
// //     category: "Kitchen Appliances",
// //     brand: "KitchenAid",
// //   },
// //   {
// //     name: "Refrigerator",
// //     price: 799.99,
// //     category: "Kitchen Appliances",
// //     brand: "Whirlpool",
// //   },
// //   {
// //     name: "Dishwasher",
// //     price: 399.99,
// //     category: "Kitchen Appliances",
// //     brand: "Bosch",
// //   },
// // ];

// // const filteredProduct = products.filter((item) => {
// //   return item.category === "Electronics";
// // });

// // const num = [1, 2, 3, 4, 5, 65, 76, 87, 5, 68, 56, 53, 23];
// // const filtered = num.filter((item) => item > 50);
// // console.log(filtered);

// //promises

// // settimeout
// // setinterval
// // promises
// // async await

// // const numbers = 20;
// // const result = new Promise((resolve, reject) => {
// //   setTimeout(() => {
// //     numbers > 50 ? resolve("you are passed") : reject("you are failed");
// //   }, 2000);
// // });

// // result
// //   .then((res) => {
// //     console.log(res);
// //   })
// //   .catch((err) => {
// //     console.log(err);
// //   });

// // async function executePromise() {
// //   try {
// //     const data = await result;
// //     console.log(data);
// //   } catch (error) {
// //     console.error(error);
// //   }
// // }
// // executePromise();

// // fetch("https://jsonplaceholder.typicode.com/users")
// //   .then((res) => res.json())
// //   .then((data) => {
// //     console.log(data);
// //   });

// // axios("https://jsonplaceholder.typicode.com/users")
// //   .then((res) => {
// //     console.log(res.data);
// //   })
// //   .catch((err) => {
// //     console.log(err);
// //   });

// // async function getData() {
// //   try {
// //     const res = await axios("https://jsonplaceholder.typicode.com/users");
// //     console.log(res.data);
// //     res.data.map((item) => {
// //       div.innerHTML += `<div style="border: 1px solid black; margin: 20px; padding: 20px; cursor: pointer;" onclick="deleteItem(this)">
// //       <h1>Name: ${item.name}</h1>
// //       <h1>Email: ${item.email}</h1>
// //       <h1>Phone: ${item.phone}</h1>
// //       </div>`;
// //     });
// //   } catch (error) {
// //     console.log(error);
// //   }
// // }
// // getData();

// // function deleteItem(item) {
// //   item.parentNode.removeChild(item);
// // }

// //spread operator

// // const arr = [1, 2, 3, 4, 5, 6];
// // const arr2 = [44, 66, 77, 88];

// // const arr3 = [...arr2, ...arr];
// // console.log(arr3);

// // [
// //   [44, 66, 77, 88],
// //   [1, 2, 3, 4, 5, 6],
// // ];

// // let fruits = ["Apple", "Banana", "Orange", "Grapes", "Strawberry"];

// // const fruits2 = ["chaunsa", "langra", ...fruits];
// // // fruits.push("chaunsa");
// // console.log(fruits2);

// //rest operator

// // function users(...user) {
// //   console.log(user);
// // }

// // users("abdullah", "usman", "ammar", "affan");

// // function users(user = "usman") {
// //   console.log(user);
// // }

// // users();

// // destructuring

// // const obj = {
// //   username: "abdullah",
// //   email: "mabdullah@gmail.com",
// //   age: 22,
// //   hobbies: ["cricket", "swimming"],
// //   isLoggedIn: true,
// // };
// // const { username, email, age } = obj;

// // console.log(username);

// // let fruits = ["Apple", "Banana", "Orange", "Grapes", "Strawberry"];

// // let [, , , , f1] = fruits;
// // console.log(f1);

// // Object Methods (keys,values,freez,entries)

// // please render this object

// const obj = {
//   username: "abdullah",
//   email: "mabdullah@gmail.com",
//   age: 22,
//   hobbies: ["cricket", "swimming"],
//   isLoggedIn: true,
// };

// // Object.freeze(obj);
// // obj.addVal = "abc";
// // delete obj.username;
// // console.log(obj);

// // console.log(Object.keys(obj));
// // console.log(Object.values(obj));
// // console.log(Object.entries(obj));

// // 3 forms fields fullname , email , age


// fsq3qbL9ORBTq2ZaS6TUHxpAQZNDJjTlkT2lBeAynwmhZ8I=

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'fsq3qbL9ORBTq2ZaS6TUHxpAQZNDJjTlkT2lBeAynwmhZ8I='
  }
};

fetch('https://api.foursquare.com/v3/places/search?query=lucky%20one&ll=24.9258787%2C67.089943&radius=10000', options)


  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => console.error(err));