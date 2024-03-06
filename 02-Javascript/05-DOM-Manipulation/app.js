// console.log('hello world');

// function greetUser (user , user2){
//     console.log('hello ' + user + user2);
//     return 'hello ' + user
// }

// var username = greetUser('abdullah');
// console.log('username ===>' , username)


















// var head = document.querySelector('.head');
// head.innerHTML = 'changed through js';












// var head = document.querySelector('.head');
// function greetUser() {
//     console.log(head.innerHTML)
//     if(head.innerHTML === 'Hello world'){
//         head.innerHTML = 'changed through js';
//     }else{
//         head.innerHTML = 'Hello world';
//     }
// }



// var input = document.querySelector('.input');

// function getInputValue() {
//     console.log(input.value)
//     input.value = ''
// }









//Template literals
//backtick

// var firstName = 'abdullah';
// var lastName = 'khan';
// var age = 20;

// // console.log('my name is ' + firstName + ' ' + lastName + ' and my age is ' + age);

// console.log(`my name is ${firstName} ${lastName} and my age is ${age}`)




// 4 form field banaingi. 4 subjects ka number user daiga. total marks 400. button ka click paa uska obtained marks, percentage and grade.

















// var head = document.querySelector('#head');
// head.innerHTML = "change through js"
// console.log(head.innerHTML);



// var list = document.querySelector('#list');
// list.innerHTML = '<li>Home</li>'


// function changeList() {
//     list.innerHTML = `<li>Javascript</li>
//     <li>Python</li>
//     <li>PHP</li>`
// }






// var input = document.querySelector('#input');
// console.log(input.value);

// function getValue (){
//     input.value = ''
//     console.log(input.value);
// }


var chemMarks = document.querySelector('#chem-marks')
var phyMarks = document.querySelector('#phy-marks')
var mathMarks = document.querySelector('#math-marks')
var comMarks = document.querySelector('#com-marks')
var studentTotal = document.querySelector('#total-marks')
var percentage = document.querySelector('#percentage')
var grade = document.querySelector('#grade')


function calculatePercentage() {
    console.log(chemMarks.value);
    console.log(phyMarks.value);
    console.log(mathMarks.value);
    console.log(comMarks.value);

    var totalMarks = 400;
    var obtainedMarks = +chemMarks.value + +phyMarks.value + +mathMarks.value + +comMarks.value;
    console.log('obtained marks ===>', obtainedMarks);
    studentTotal.innerHTML = obtainedMarks;

    var studentPercentage = obtainedMarks / totalMarks * 100;
    percentage.innerHTML = studentPercentage;


    if(studentPercentage > 80){
        grade.innerHTML = 'A+'
    }else if(studentPercentage > 70){
        grade.innerHTML = 'A'
    } else if(studentPercentage > 60){
        grade.innerHTML = 'B'
    }else{
        grade.innerHTML = 'FAIL'
    }
}
















