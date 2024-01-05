'use strict'

console.log('Shop page script');

document.addEventListener('DOMContentLoaded', () => {
    loadShopItems();
});

function loadShopItems() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '/api/shop_items', true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onload = function () {
        if (xhr.status === 200) {
            const shopItems = JSON.parse(xhr.responseText);
            displayShopItems(shopItems);
        } else {
            console.error('Failed to load shop items');
        }
    };

    xhr.onerror = function () {
        console.error('Server communication error');
    };

    xhr.send();
}

function displayShopItems(items) {
    const shopGrid = document.getElementById('shopGrid');
    shopGrid.innerHTML = '';

    items.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <img src="${item.image}" alt="${item.name}" style="width:100%">
            <div class="card-container">
                <h4><b>${item.name}</b></h4>
                <p>${item.description}</p>
                <p>Price: $${item.price}</p>
                <button onclick="addToCart(${item.id})">Add to Cart</button>
                <button onclick="deleteItem(${item.id})">Delete Item</button>
            </div>
        `;
        shopGrid.appendChild(card);
    });
}

function addToCart(itemId) {
    // Įvykdyti logiką pridėjimo į krepšelį
    console.log(`Added item with ID ${itemId} to cart`);
}

function deleteItem(itemId) {
    // Įvykdyti logiką parduotuvės prekės ištrynimo
    console.log(`Deleted item with ID ${itemId} from shop`);
}
