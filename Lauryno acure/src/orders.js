'use strict'

console.log('Orders page script');

document.addEventListener('DOMContentLoaded', () => {
    loadOrders();
});

function loadOrders() {
    const userSelect = document.getElementById('userSelect');
    const selectedUserId = userSelect.value;

    const xhr = new XMLHttpRequest();
    xhr.open('GET', `/api/orders${selectedUserId !== 'all' ? `/user/${selectedUserId}` : ''}`, true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onload = function () {
        if (xhr.status === 200) {
            const orders = JSON.parse(xhr.responseText);
            displayOrders(orders);
        } else {
            console.error('Failed to load orders');
        }
    };

    xhr.onerror = function () {
        console.error('Server communication error');
    };

    xhr.send();
}

function displayOrders(orders) {
    const ordersBody = document.getElementById('ordersBody');
    ordersBody.innerHTML = '';

    orders.forEach(order => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${order.id}</td>
            <td>${order.user_name}</td>
            <td>${order.item_name}</td>
            <td>${order.quantity}</td>
            <td>${order.total_price}</td>
            <td>${order.status}</td>
        `;
        ordersBody.appendChild(row);
    });
}

