// OOPS

// syntactic sugar

//object literal
// const obj = {}

// constructor function

// function user(username, age) {
//   this.username = username;
//   this.age = age;
// }

// // const date = new Date();
// // console.log(typeof date);

// const obj = new user("abdullah", 20);
// const obj2 = new user("usman", 17);
// console.log(obj);
// console.log(obj2);

// var plan1 = {
//   name: "Basic",
//   price: 3.99,
//   space: 100,
//   transfer: 1000,
//   pages: 10,
// };
// var plan2 = {
//   name: "Basic",
//   price: 3.99,
//   space: 100,
//   transfer: 1000,
//   pages: 10,
// };

// function plancreation(name, price, space, transfer, pages) {
//   this.name = name;
//   this.price = price;
//   this.space = space;
//   this.transfer = transfer;
//   this.pages = pages;
//   this.greetUser = function (username) {
//     console.log(`hello ${username}`);
//   };
// }

// let plan1 = new plancreation("Basic", 3.99, 100, 1000, 10);
// let plan2 = new plancreation("Professional", 5.99, 500, 2000, 20);
// plan2.greetUser("abdullah");

// console.log(plan1);
// console.log(plan2);

//constructor
//Prototypical

// class User {
//   greetUser() {
//     console.log("abdullah");
//   }
// }

// const newFunc = new User();
// newFunc.greetUser();

// class User {
//   constructor(name, age) {
//     console.log("contructor function");
//     this.name = name;
//     this.age = age;
//   }
//   greetUser() {
//     console.log("abdullah");
//   }
// }

// const newFunc = new User("abdullah", 20);
// // newFunc.greetUser();
// console.log(newFunc);

// class employee {
//   constructor(name, age, salery) {
//     this.name = name;
//     this.age = age;
//     this.salery = salery;
//     console.log("constructor");
//   }

//   info() {
//     console.log(`
//             name = ${this.name}
//             age = ${this.age}
//             salery = ${this.salery}
//             `);
//   }
// }

// class manager extends employee {
//   constructor() {
//     console.log("constructor manager");
//     super();
//   }
//   info() {
//     let extraAllowance = 10000;
//     console.log(`
//             name = ${this.name}
//             age = ${this.age}
//             salery = ${this.salery + extraAllowance}
//             `);
//   }
// }

// // const singlePerson = new employee("abdullah", 21, 20000);
// // singlePerson.info();

// const singlemanager = new manager("abdullah", 21, 20000);
// singlemanager.info();

class employee {
  constructor(name, age, salery) {
    this.name = name;
    this.age = age;
    this.salery = salery;
    console.log("constructor");
  }
  info() {
    console.log(
      `name = ${this.name}
        age = ${this.age}
        salery = ${this.salery}`
    );
  }
}

class manager extends employee {
  constructor() {
    console.log("manager constructor");
    super();
  }
  info() {
    let extra = 10000;
    console.log(
      `name = ${this.name}
            age = ${this.age}
            salery = ${this.salery + extra}`
    );
  }
}

// const singleEmployee = new employee("abdullah", 20, 20000);
// console.log(singleEmployee);
// singleEmployee.info();

const manageEmployee = new manager("usman", 17, 20000);
manageEmployee.info();
