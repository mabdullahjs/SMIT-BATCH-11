// console.log('cart items');

const cartItems = JSON.parse(localStorage.getItem('cartItems'));
// console.log(cartItems)

const div = document.querySelector('div');
const totalAmount = document.querySelector('#total-amount');

function renderItems (){
    let total = 0;
    if(cartItems != null && cartItems.length > 0){
        for(let i = 0; i < cartItems.length; i++){
            // console.log(cartItems[i]);
            total += cartItems[i].price * cartItems[i].quantity
            div.innerHTML += `
            <div class="border border-light rounded m-5 p-3">
            <h1>Model: ${cartItems[i].brand + ' ' + cartItems[i].model}</h1>
            <h1>Quantity:
            <button class="btn btn-primary" onclick="addQuantity(${i})">+</button>
            ${cartItems[i].quantity}
            <button class="btn btn-primary" onclick="lessQuantity(${i})">-</button>
            </h1>
            <h1>Price: ${cartItems[i].price * cartItems[i].quantity}</h1>
            <button class="btn btn-danger" onclick="deleteItem(${i})">delete</button>
            </div>

            `
        }
        totalAmount.innerHTML = `Total Amount = ${total}`
    }else{
        console.log('cart item empty ha maalik')
        div.innerHTML = `
        <h3 class="text-center">No Item Found...</h3>
        `
    }
}

renderItems()


function addQuantity(i){
    div.innerHTML = '';
    cartItems[i].quantity += 1
    renderItems()
    console.log(cartItems);
}
function lessQuantity(i){
    div.innerHTML = ''
    if(cartItems[i].quantity <= 1){
        cartItems.splice(i , 1);

    }else{
        cartItems[i].quantity -= 1
    }
    renderItems()

}

function deleteItem(i){
    div.innerHTML = ''
    cartItems.splice(i , 1);
    totalAmount.innerHTML = ''
    renderItems()
}

// localStorage.setItem('kis naam sa krwana ha' , 'value stringify wali');

// localStorage.getItem('kis naam sa save krwaya ha');

// JSON.stringify()
// JSON.parse()