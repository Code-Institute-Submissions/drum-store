let addButton = document.getElementById('add-button');
let removeButton = document.getElementById('remove-button');
let itemPrice = document.getElementById('price');
let cart = [];
let itemCounter = -1;

addButton.addEventListener('click', addToCart);
function addToCart(){
    itemCounter ++;
    addButton.innerHTML = 'Added to cart!';
    cart.push(itemPrice.innerHTML);

    console.log(cart);
    console.log(itemCounter);
};

removeButton.addEventListener('click', removeFromCart);
function removeFromCart(){
    if (itemCounter <= -1){
        alert('Your cart is empty');
    }
    else {
    itemCounter --;
    cart.pop([itemCounter]);
    };

    console.log(cart);
    console.log(itemCounter);
}
