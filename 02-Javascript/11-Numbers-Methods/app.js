// console.log('hello world');

//functions
//methods


//round
//ceil
//floor
//random
//parseInt
//parseFloat

// const num = 2.8;
// // console.log(Math.round(num));
// console.log(Math.ceil(num));
// console.log(Math.floor(num));









// console.log(Math.ceil(Math.random()*100));
// console.log(Math.ceil(Math.random()*10));


// const str = '20.54534';
// console.log(parseInt(str));
// console.log(parseFloat(str));
// console.log(Number(str));
// console.log(+str);



//user ya to masjid pa click kraiga yaa chand pa click kraiga. Math.random sa ma check krwaonga k agar 1 ayaa iska matlb masjid or user na agar masjid pa click kra wo toss jeeet gaya.. isi tareeqa sa masjid pa user na click kra or math.random naa 2 diya to user toss haar gayaa. Math.random ma agar 1 ayega iska matlb masjid or agar 2 ayega iska matlb chand.


//sabsa pehla 2 btns banaonga.
//function banaonga jo ka dono button ka click pa call hojayega
// math.random mujha return kraiga 1 ya phir 2
//1 matlb masjid 2 matlb chand
// agar math.random = 1 or user click = 1 iska matlb toss jeet gaye
// math.random = 2 userclicked = chand = toss jeet gayaa.
//else user toss haar gaya ha.


// const image = document.querySelector('img');

// function toss(clickedBtn) {
//     console.log('toss', clickedBtn);
//     image.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSafJz4RQlwvKh1m0fek6-rMdxTj1mnr0fYU_-6hxuSLA&s'
//     // if(){
//     //     image.src = ''
//     // }else{

//     // }
// }



// const h2 = document.querySelector('h2');
// const image = document.querySelector('img');

// function toss(btn){
//     // console.log('toss' , btn);
//     const randomNumber = Math.ceil(Math.random()*2);
//     // console.log(randomNumber);

//     if(btn === 'masjid' && randomNumber === 1 || btn === 'chand' && randomNumber === 2){
//         // console.log('toss jeet gaye ho!');
//         h2.innerHTML = 'You won the Toss!'
//     }else{
//         // console.log('toss haar gaye ho!')
//         h2.innerHTML = 'You Loss the Toss!'
//     }

//     if(randomNumber === 1){
//         image.src = 'https://en.numista.com/catalogue/photos/pakistan/424-original.jpg'
//     }else{
//         image.src = 'https://www.foreigncurrencyandcoin.com/wp-content/uploads/2018/12/products-18814.jpg'
//     }
// }























//koi bhi kaam specific time ka baad krwana ho!

// console.log('hello world');

// const second = setTimeout(function (){
//     console.log('hello world')
// } , 2000)

// const seconds = setInterval(function (){
//     console.log('hello world')
// } , 1000);

const seconds = document.querySelector('#sec');
function startWatch (){
    let sec = 0
    setInterval(function(){
        sec += 1
        seconds.innerHTML = sec
    } , 1);

}

function stopInterval(){
    clearInterval(seconds)
    clearTimeout(second)
}













































