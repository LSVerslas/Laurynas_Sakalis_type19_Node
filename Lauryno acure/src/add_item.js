'use strict'

console.log('Add Item page script');

function addItem() {
    const name = document.getElementById('name').value;
    const price = parseFloat(document.getElementById('price').value);
    const description = document.getElementById('description').value;
    const image = document.getElementById('image').value;
    const item_type_id = parseInt(document.getElementById('item_type_id').value);

    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/api/shop_items', true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onload = function () {
        if (xhr.status === 201) {
            alert('Prekė pridėta sėkmingai');
            window.location.href = 'shop.html';
        } else {
            const errorResponse = JSON.parse(xhr.responseText);
            alert(`Error: ${errorResponse.error}`);
        }
    };

    xhr.onerror = function () {
        alert('Server communication error');
    };

    const data = {
        name: name,
        price: price,
        description: description,
        image: image,
        item_type_id: item_type_id
    };

    xhr.send(JSON.stringify(data));
}
