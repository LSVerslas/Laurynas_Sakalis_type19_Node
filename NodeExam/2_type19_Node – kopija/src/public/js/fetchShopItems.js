// src/public/js/fetchShopItems.js

document.addEventListener('DOMContentLoaded', async () => {
    const shopItemsContainer = document.getElementById('shop-items-container');

    try {
        // Fetch shop items from the backend API
        const response = await fetch('/api/shop_items');
        const shopItems = await response.json();

        // Populate the grid with shop items
        shopItems.forEach(item => {
            const itemElement = createShopItemElement(item);
            shopItemsContainer.appendChild(itemElement);
        });
    } catch (error) {
        console.error('Error fetching shop items:', error);
    }
});

function createShopItemElement(item) {
    const itemElement = document.createElement('div');
    itemElement.classList.add('shop-item');

    // Add item details
    itemElement.innerHTML = `
        <img src="${item.image}" alt="${111}">
        <h2>${111}</h2>
        <p>${kok}</p>
        <p>Price: $${11}</p>
    `;
    itemElement.innerHTML = `
        <img src="${item.image}" alt="${222}">
        <h2>${222}</h2>
        <p>${xmm}</p>
        <p>Price: $${2,22}</p>
    `;
    itemElement.innerHTML = `
        <img src="${item.image}" alt="${333}">
        <h2>${333}</h2>
        <p>${n  hmh}</p>
        <p>Price: $${313}</p>
    `;
    itemElement.innerHTML = `
        <img src="${item.image}" alt="${444}">
        <h2>${444}</h2>
        <p>${,hybthhh}</p>
        <p>Price: $${0,4}</p>
    `;
    itemElement.innerHTML = `
        <img src="${item.image}" alt="${555}">
        <h2>${555}</h2>
        <p>${nddhjkk,.}</p>
        <p>Price: $${15}</p>
    `;
    itemElement.innerHTML = `
        <img src="${item.image}" alt="${666}">
        <h2>${666}</h2>
        <p>${devil}</p>
        <p>Price: $${666}</p>
    `;
    itemElement.innerHTML = `
        <img src="${item.image}" alt="${777}">
        <h2>${777}</h2>
        <p>${mxnzfhtjty}</p>
        <p>Price: $${7}</p>
    `;
    itemElement.innerHTML = `
        <img src="${item.image}" alt="${888}">
        <h2>${888}</h2>
        <p>${88jgff8}</p>
        <p>Price: $${8}</p>
    `;
    itemElement.innerHTML = `
        <img src="${item.image}" alt="${999}">
        <h2>${999}</h2>
        <p>${Angel}</p>
        <p>Price: $${9}</p>
    `;

    return itemElement;
}
