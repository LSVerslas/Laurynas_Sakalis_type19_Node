document.addEventListener('DOMContentLoaded', () => {
    // API užklausa gauti prekėm iš backend
    const shopItems = [
        { id: 1, name: 'High-performance laptop', price: 999.99, imageUrl: 'image/1.png'},
        { id: 2, name: 'Glaudės', price: 29.99, imageUrl: 'image/2.png'},
        { id: 3, name: 'Noise-canceling headphones', price: 49.99, imageUrl: 'image/3.png'},
        { id: 4, name: 'JustCola', price: 1.99, imageUrl: 'image/4.png'},
        { id: 5, name: 'Latest smartphone model', price: 666, imageUrl: 'image/5.png'},
    ];

    // Atvaizduoti prekes
    const content = document.getElementById('content');
    const shopItemsContainer = document.createElement('div');
    shopItemsContainer.id = 'shop-items-container';

    shopItems.forEach((item) => {
        const itemCard = document.createElement('div');
        itemCard.className = 'item-card';
        itemCard.innerHTML = `
            <h3>${item.name}</h3>
            <p><img src="${item.imageUrl}"</p>
            <p>Price: $${item.price.toFixed(2)}</p>
            <button class="add-to-cart" data-item-id="${item.id}">Add to Cart</button>
        `;
        shopItemsContainer.appendChild(itemCard);
    });

    content.appendChild(shopItemsContainer);

    // "Add to Cart" mygtukas
    shopItemsContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('add-to-cart')) {
            const itemId = event.target.getAttribute('data-item-id');
            addToCart(itemId);
        }
    });

    // Pridėti prekes
    function addToCart(itemId) {
        console.log(`Item ${itemId} added to the cart.`);
    }
});
