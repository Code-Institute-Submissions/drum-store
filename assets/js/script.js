let snareOne = document.getElementById('snare1');

snareOne.addEventListener('click', popUp);
function popUp(){
    window.location.href = 'items/snare1.html';
}

let addButton = document.getElementById('add-button');
addButton.addEventListener('click', addToCart);

function addToCart(){
        alert('Click the restart button to try again');
};