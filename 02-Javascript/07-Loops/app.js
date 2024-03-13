// console.log('hello world')


//forLoop
//while loop
//do while loop



// for(let i = 1; i <= 10; i++){
//     console.log('hello world' , i);


//     // i++
// }
// console.log('loop ka bahar');
















// const userInput = +prompt('enter table number')
// const times = +prompt('How many time do you want?')

// for (let i = 1; i <= times; i++) {
//     console.log(`${userInput} * ${i} = ${userInput*i}`);
// }




























//infinite loop
// for (let i = 1; i > 0; i++) {
//     console.log(i);
// }


















// for (let i = 1; i <= 10; i++) {
//     console.log('outer Loop ===> ' , i);
//     for(let j = 1; j <= 5; j++){
//         console.log('inner Loop===>' , j);
//     }
// }

























// for (let i = 1; i <= 100; i++) {
//     // console.log(i);
//     for (let j = 1; j <= 10; j++) {
//         console.log(`${i} * ${j} = ${i*j}`);
//     }
// }






















let fruits = ['apple' , 'banana' , 'orange' , 'watermelon' , 'grapes'];

console.log(fruits);
const ul = document.querySelector('ul');
for (let i = 0; i < fruits.length; i++) {
    // console.log(fruits[i]);
    ul.innerHTML += `<li>${fruits[i]}</li>`
}










