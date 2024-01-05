document.addEventListener('DOMContentLoaded', function () {
    fetch('/api/shop_items')
        .then(response => response.json())
        .then(data => {
            const shopItemsContainer = document.getElementById('shopItems');

            data.forEach(item => {
                const itemCard = document.createElement('div');
                itemCard.classList.add('item-card');

                const itemName = document.createElement('h2');
                itemName.textContent = item.name;

                // Add other item details to the card

                itemCard.appendChild(itemName);
                // Add other item details to the card

                shopItemsContainer.appendChild(itemCard);
            });
        })
        .catch(error => console.error('Error:', error));
});

function addToCart() {
    // Implement functionality to add item to cart
}

function deleteItem() {
    // Implement functionality to delete item
}

document.addEventListener('DOMContentLoaded', function () {
    // ... Puslapio įkėlimo logika ...

    const addItemButton = document.getElementById('addItemButton');
    const deleteItemButton = document.getElementById('deleteItemButton');

    const userRole = localStorage.getItem('userRole');

    if (userRole === 'admin') {
        addItemButton.style.display = 'block';
        deleteItemButton.style.display = 'block';
    }
});

function addToCart() {
    // Implement functionality to add item to cart
}

function deleteItem() {
    // Implement functionality to delete item
}