


document.addEventListener('DOMContentLoaded', () => {
    // Simulated API request to fetch shop items from the backend
    const shopItems = [
        // Sample shop items data
        { id: 1, name: 'Item 1', price: 19.99 },
        { id: 2, name: 'Item 2', price: 29.99 },
        // Add more items as needed
    ];

    // Display shop items dynamically
    const content = document.getElementById('content');
    const shopItemsContainer = document.createElement('div');
    shopItemsContainer.id = 'shop-items-container';

    shopItems.forEach((item) => {
        const itemCard = document.createElement('div');
        itemCard.className = 'item-card';
        itemCard.innerHTML = `
            <h3>${item.name}</h3>
            <p>Price: $${item.price.toFixed(2)}</p>
            <button class="add-to-cart" data-item-id="${item.id}">Add to Cart</button>
        `;
        shopItemsContainer.appendChild(itemCard);
    });

    content.appendChild(shopItemsContainer);

    // Handle "Add to Cart" button click
    shopItemsContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('add-to-cart')) {
            const itemId = event.target.getAttribute('data-item-id');
            addToCart(itemId);
        }
    });

    // Simulated function to add an item to the cart
    function addToCart(itemId) {
        // Implement your logic to add the item to the cart
        console.log(`Item ${itemId} added to the cart.`);
    }
});



// src/public/js/shop.js

document.addEventListener('DOMContentLoaded', () => {
    const shopItemsContainer = document.getElementById('shop-items-container');

    // Fetch shop items from the server
    fetch('/api/shop_items')
        .then((response) => response.json())
        .then((shopItems) => {
            // Display shop items dynamically
            shopItems.forEach((item) => {
                const itemCard = createShopItemCard(item);
                shopItemsContainer.appendChild(itemCard);
            });
        })
        .catch((error) => {
            console.error('Error fetching shop items:', error);
        });

    // Function to create a shop item card
    function createShopItemCard(item) {
        const itemCard = document.createElement('div');
        itemCard.className = 'item-card';

        const imageElement = document.createElement('img');
        imageElement.src = item.image;
        imageElement.alt = item.name;

        const nameElement = document.createElement('h3');
        nameElement.textContent = item.name;

        const priceElement = document.createElement('p');
        priceElement.textContent = `Price: $${item.price.toFixed(2)}`;

        const addToCartButton = document.createElement('button');
        addToCartButton.textContent = 'Add to Cart';
        addToCartButton.addEventListener('click', () => addToCart(item.id));

        itemCard.appendChild(imageElement);
        itemCard.appendChild(nameElement);
        itemCard.appendChild(priceElement);
        itemCard.appendChild(addToCartButton);

        // Display delete button only for admins
        if (localStorage.getItem('user_roles') === 'admin') {
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete Item';
            deleteButton.addEventListener('click', () => deleteItem(item.id));
            itemCard.appendChild(deleteButton);
        }

        return itemCard;
    }

    // Simulated function to add an item to the cart
    function addToCart(itemId) {
        // Implement your logic to add the item to the cart
        console.log(`Item ${itemId} added to the cart.`);
    }

    // Simulated function to delete a shop item (visible only to admins)
    function deleteItem(itemId) {
        // Implement your logic to delete the shop item
        console.log(`Item ${itemId} deleted.`);
    }
});
