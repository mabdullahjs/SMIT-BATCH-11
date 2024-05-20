// console.log('hello world!');

// function hello(){
//     console.log('hello world');
// }

//onclick
//onchange
//onmouseover
//onmouseout
//onsubmit

// const btn = document.querySelector('#btn');

// btn.addEventListener('click' , hello);

// btn.addEventListener('click' , function(){
//     console.log('hello world!')
// })



// btn.addEventListener('click' , function (){
//     console.log('hello world!')
// })






















// bubbling
// capturing

// const ul = document.querySelector('#ul');
// const about = document.querySelector('#about');

// ul.addEventListener('click', function () {
//     console.log('ul clicked')
// }, false)

// about.addEventListener('click', function (event) {
//     event.stopPropagation();
//     console.log('about clicked')
// } , false)

































// const ul = document.querySelector('.images');
// const image3 = document.querySelector('#image-3');
// const link = document.querySelector('#link-1');

// ul.addEventListener('click', function (event) {
//     // console.log('ul clicked');
//     console.log(event.target.tagName);
//     if(event.target.tagName === 'A'){
//         event.target.innerHTML = 'abc'
//         // console.log(event.target.innerHTML);
//     } 
//     console.log(event.target.parentNode.tagName)
//     if(event.target.parentNode.tagName === 'LI'){
//         event.target.parentNode.remove()
//     }


//     // 2 method

//     // let removeItem = event.target.parentNode; //li
//     // removeItem.parentNode.removeChild(removeItem)
// })

// image3.addEventListener('click', function () {
//     console.log('image clicked!');
// })


// link.addEventListener('click', function (event) {
//     event.preventDefault();
// })









//onchange

// const input = document.querySelector('#input');
// input.addEventListener('change' , function(){
//     console.log('onchange event')
// })


//onmouseover
// const input = document.querySelector('#input');
// input.addEventListener('mouseover' , function(){
//     console.log('mouseover')
// })


// //onmouseout
// input.addEventListener('mouseout' , function(){
//     console.log('mouseout')
// })


// const image = document.querySelector('#image');

// image.addEventListener('mouseover' , function(){
//     image.src = 'https://cdn.mos.cms.futurecdn.net/HaPnm6P7TZhPQGGUxtDjAg-320-80.jpg'
// })

// image.addEventListener('mouseout' , function(){
//     image.src = 'https://i.pinimg.com/originals/e0/fd/25/e0fd25f9127a9a109a0648c83ee61643.png'
// })



//onsubmit

// const username = document.querySelector('#username')
// const email = document.querySelector('#email')
// const password = document.querySelector('#password')
// const form = document.querySelector('#form')

// form.addEventListener('submit' , function(event){
//     event.preventDefault()
//     console.log(username.value)
//     console.log(email.value)
//     console.log(password.value)
// })




//login and register form banana haa or unki values console ma print hojaye

// bulb on and off wala project banana haa

//add event listner ki acha tareeqa sa practice krni haa. bubbling and capturing.

// let a = 10;
// a = 'abdullah'
































