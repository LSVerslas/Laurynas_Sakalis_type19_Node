document.addEventListener('DOMContentLoaded', () => {
    // Patikrinti teises
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

            // API užklausa, pridėti prekei
            await addShopItem(name, price, description, image, itemTypeId);

            // Nukreipti į puslapį
            window.location.href = 'shop.html';
        });

        // API užklausa, pridėti prekei
        async function addShopItem(name, price, description, image, itemTypeId) {}
    } else {
        alert('Unauthorized access. Only admins are allowed to access this page.');
        // Išmesti į kitą puslapį, neturint teisių
        window.location.href = 'login.html';
    }
});


