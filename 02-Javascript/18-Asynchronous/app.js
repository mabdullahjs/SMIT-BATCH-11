// console.log('hello world!')
// console.log('hello world2')
// console.log('hello world3') undei //
// hello()

// function hello(){
//     console.log('hello 4')
// }
// console.log('hello 5')

// let data = undefined;data leka daaa

//synchronous
//asynchronous

// console.log('hello world 1'); s
// console.log('hello world 2'); s
// console.log('hello world 3'); s
// setTimeout(()=>{
//     console.log('hello world 4'); as
// } , 0)
// console.log('hello world 5'); s

// asynchronous

//settimeout
//setInterval
//promises
//async await
//axios
//fetch

//API

// Application programming interface

//const data = 'data mangwalo..'
//console.log(data);
//settimeout(data)

//promises ===> jab data ajaye to console krwadena

//fetch().then().catch()
// const bankBalance = 200000
// const shaadi = new Promise((resolve , reject)=>{
//     if(bankBalance > 100000){
//         console.log('shaadi mubarak');
//         resolve()
//     }else{
//         console.log('nalla bheto');
//         reject()
//     }
// })

// shaadi
// .then(()=>{
//     console.log('succesfull')
// })
// .catch(()=>{
//     console.log('rejected');
// })

// const marks = 60

// const result = new Promise((resolve , reject)=>{
//     setTimeout(()=>{
//         if(marks > 80){
//             // console.log('you are passed');
//             resolve('you are passed')
//         }else{
//             // console.log('you are failed');
//             reject('you are failed')
//         }
//     } , 1000)

// })
// result
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })

// function shaadiScnz (bankBalance){
//     return new Promise((resolve , reject)=>{
//         setTimeout(()=>{
//             if(bankBalance > 100000){
//                 console.log('shaadi Mubarak...');
//                 resolve('shaadi Mubarak...')
//             }else{
//                 console.log('ammi na zehr kahlia...');
//                 reject('!shaadi Mubarak...')
//             }
//         } , 1000)
//     })
// }

// shaadiScnz(200000)
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })

//fetch
//axios

// fetch(`https://jsonplaceholder.typicode.com/users`)
// .then((res)=>{
//     return res.json()
// }).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

// const div = document.querySelector('div');

// axios('https://fakestoreapi.com/products')
// .then((res)=>{
//     console.log(res.data)
//     res.data.map((item)=>{
//         div.innerHTML += `
//         <h1>Title: ${item.title}</h1>
//         <img width="300" src="${item.image}" alt="product-image"/>
//         <h1>Price: ${item.price}</h1>
//         <hr/>
//         `
//     })
// }).catch((err)=>{
//     console.log(err);
// })

// .then().catch()
// async await

// try{
//     // alert('hello world');
// }catch(err){
//     console.error(err);
// }

// console.log('console after alert');

// async function getData() {
//   const res = await axios("https://fakestoreapi.com/products");
//   console.log(res.data);
// }
// getData();

// axios("https://fakestoreapi.com/products")
//   .then((res) => {
//     console.log(res.data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

async function getData() {
  try {
    const res = await axios("https://fakestoreapi.com/products");
    console.log(res.data);
  } catch (error) {
    console.error(error);
  }
}

getData();

// try {
//   aler("hello world");
// } catch (error) {
//   console.error(error);
// }
// console.log("console after alert");
