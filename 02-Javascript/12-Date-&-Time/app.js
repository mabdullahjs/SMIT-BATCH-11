// let num = 1.45845435435435;
// console.log(num.toFixed(0));


const hour = document.querySelector('#hour');
const minute = document.querySelector('#minute');
const second = document.querySelector('#second');
const startBtn = document.querySelector('#startBtn');

// minute.style.color = 'lightBlue'

let startInterval;
let seconds = 0;
function startWatch() {
    console.log('watch started');
    startBtn.disabled = true;
    startBtn.style.display = 'none'
    startInterval = setInterval(function () {
        seconds += 1;
        if(seconds > 9){
            second.innerHTML = seconds;
        }else{
            second.innerHTML = '0' +  seconds;
        }
        console.log(seconds)
    }, 1000);
}
function stopWatch() {
    console.log('watch stop')
    startBtn.disabled = false
    clearInterval(startInterval)
}
function resetWatch() {
    console.log('watch reset')
}




// //local and global variable


// // let a = 5; //global variable
// // function hello(){
// //     let b = 10; //local variable
// // }

// // function hello2(){
// //     console.log(a);
// //     console.log(b);
// // }
// // hello2()







// let currentDate = new Date();
// console.log(currentDate.toLocaleTimeString())
// let dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// console.log(currentDate.getDay());
// console.log(dayNames[currentDate.getDay()]);
// console.log(currentDate.getDate());
// console.log(currentDate.getHours());
// console.log(currentDate.getHours());
// console.log(currentDate.getMinutes());
// console.log(currentDate.getSeconds());
// console.log(currentDate.getMilliseconds());
// console.log(currentDate.getTime());





// const birthDate = new Date('November 27, 2003');
// console.log(birthDate.getTime());















// const hyderabadi = new Date('May 26 , 2004').getTime();
// const currentDate = new Date().getTime();
// const remainingMilliseconds = currentDate - hyderabadi;

// console.log(remainingMilliseconds / 1000 / 60 / 60 /24 / 30 / 12);










// let currentDate = new Date("May 26, 2004 07:25:00");
// ;
// // let setYear = currentDate.setMonth(6)
// // console.log(setYear);
// console.log(currentDate);










// const date = document.querySelector('#date');


// function getDateFromInput (){
//     console.log(date.value);
//     const currentDate = new Date(date.value);
//     console.log(currentDate);
// }








// const date = new Date();
// console.log(typeof(date));


// const arr = [];
// arr[5] = 'ten';
// console.log(arr[4]);




// function hello(username){
//     console.log(username)
// }

// console.log(hello('abdullah')); //undefined







// for(let i = 10; i > 0; i--){
//     console.log(i)
// }
















// let a = 10; //global variable

// function hello(){
//     let b = 10 //local variable
//     console.log(a)
// }
// console.log(b); //error
// hello()




















// const city = prompt('enter city name');
// if(city === 'karachi'){
//     console.log('you live in the safest city')
// }else{
//     console.log('bekaar city');
// }




const inputdedauser = prompt('input daa shahbash!')
const date = new Date();
console.log(date);












































