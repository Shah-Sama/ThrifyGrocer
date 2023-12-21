// Your JavaScript code goes here

// Example: Add item to basket
function addToBasket(itemId, itemName, itemPrice) {
    // Logic to add item to the basket
}

// Example: Remove item from basket
function removeFromBasket(itemId) {
    // Logic to remove item from the basket
}

// Example: Checkout
function checkout() {
    // Logic to process the checkout
}

document.getElementById('menu-button').addEventListener('click', function() {
    var nav = document.getElementById('nav');
    if (nav.style.display === 'block') {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'block';
    }
});
