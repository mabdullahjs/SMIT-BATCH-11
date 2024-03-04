// console.log('hello world');

// alert()
// prompt()


// console.log('hello world');
// console.log('hello world');
// console.log('hello world');
// console.log('hello world');
// console.log('hello world');










// function greetUser (){   
// console.log('hello world');
// console.log('hello world');
// console.log('hello world');
// console.log('hello world');
// }

// greetUser()
// greetUser()







// function greetUser(){
//     console.log('hello world');
//     console.log('hello world');
//     console.log('hello world');
// }
// greetUser()
// greetUser()











//undefined
//null

// var username ;
// console.log(username)










// function greetUser(username , lastname , age){
//     console.log('hello ' + username + lastname + age);
// }

// greetUser('abdullah' , 'khan' , 20)




















// function sum(num1 , num2){
//     console.log('sum of two number ===>' , num1 + num2)
// }
// sum(19 , 20)

























// var lastname = 'khan'

// function greetUser (){
//     var username = 'abdullah'
//     console.log(username + lastname);
// }

// console.log(username)
// console.log(lastname)

// greetUser()



























// function showString(){
//     console.log('hello world')
//     return 'abdullah'
// }
// // showString()
// var myFunc = showString()
// console.log(myFunc);






// function percentageCal (marks1 , marks2 , marks3 , marks4){
//     var totalMarks = 400;
//     var obtainedMarks = marks1 + marks2 + marks3 + marks4
//     return obtainedMarks / totalMarks * 100

// }

// var usmanPercentage = percentageCal(10 , 50 , 90 ,60);

// console.log(usmanPercentage);



























// var head = document.querySelector('.head');
// console.log(head.innerHTML);
// head.innerHTML = 'changed through js'
// console.log(head.innerHTML);





























var head = document.querySelector('.head');
var paragraph = document.querySelector("#para");
console.log(paragraph.innerHTML)

function changeText(){

    if(paragraph.innerHTML === 'changed through js' && head.innerHTML === 'changed through js'){
        paragraph.innerHTML = 'lorem ipsum';
        head.innerHTML = 'hello world'
    }else{
        paragraph.innerHTML = 'changed through js'
        head.innerHTML = 'changed through js'
    }
}











