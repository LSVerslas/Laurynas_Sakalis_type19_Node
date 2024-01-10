// src/public/js/add_item.js

document.addEventListener('DOMContentLoaded', () => {
    // Your existing JavaScript code

    // Check if the user is an admin
    const userRole = localStorage.getItem('role_id');

    if (userRole === 'admin') {
        // Show the admin-specific content
        document.getElementById('admin-content').style.display = 'block';
    }
});

// src/public/js/add_item.js

document.addEventListener('DOMContentLoaded', () => {
    // Check if the user is an admin
    const isAdmin = localStorage.getItem('user_roles') === 'admin';

    if (isAdmin) {
        const adminContent = document.getElementById('admin-content');
        adminContent.style.display = 'block';

        const addItemForm = document.getElementById('add-item-form');

        addItemForm.addEventListener('submit', async (event) => {
            event.preventDefault();

            const name = addItemForm.elements['name'].value;
            const price = addItemForm.elements['price'].value;
            const description = addItemForm.elements['description'].value;
            const image = addItemForm.elements['image'].value;
            const itemTypeId = addItemForm.elements['item_type_id'].value;

            // Simulate API request to add a new shop item
            await addShopItem(name, price, description, image, itemTypeId);

            // Redirect to the shop page
            window.location.href = 'shop.html';
        });

        // Simulated API request to add a new shop item
        async function addShopItem(name, price, description, image, itemTypeId) {
            // Implement your logic to add a new shop item
            // This could involve sending a request to the backend
        }
    } else {
        alert('Unauthorized access. Only admins are allowed to access this page.');
        // Redirect to the login page or another appropriate page
        window.location.href = 'login.html';
    }
});



// src/public/js/add_item.js

document.addEventListener('DOMContentLoaded', () => {
    const addItemForm = document.getElementById('add-item-form');

    addItemForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const name = addItemForm.elements['name'].value;
        const price = addItemForm.elements['price'].value;
        const description = addItemForm.elements['description'].value;
        const image = addItemForm.elements['image'].value;
        const itemType = addItemForm.elements['itemType'].value;

        try {
            // Send item data to the server
            const response = await fetch('/api/shop_items', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, price, description, image, item_type_id: itemType }),
            });

            if (!response.ok) {
                throw new Error('Failed to add item. Please check your data and try again.');
            }

            // Redirect to the shop page on successful item addition
            window.location.href = 'shop.html';
        } catch (error) {
            // Handle item addition error
            alert(error.message);
        }
    });
});
