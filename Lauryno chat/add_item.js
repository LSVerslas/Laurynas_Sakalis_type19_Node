document.addEventListener('DOMContentLoaded', function () {
    const addItemForm = document.getElementById('addItemForm');

    addItemForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const price = document.getElementById('price').value;
        const description = document.getElementById('description').value;
        const image = document.getElementById('image').value;
        const itemType = document.getElementById('itemType').value;

        fetch('/api/shop_items', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, price, description, image, item_type_id: itemType }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                window.location.href = 'shop.html';
            } else {
                alert(data.error);
            }
        })
        .catch(error => console.error('Error:', error));
    });
});
