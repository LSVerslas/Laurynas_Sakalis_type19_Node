document.addEventListener('DOMContentLoaded', () => {
    // Simuliuoti API užklausą, kad gauti info iš backend
    const orders = [
        
        { orderId: 1, userId: 1, shopItemId: 2, quantity: 2, totalPrice: 59.98, status: 'Pending' },
        { orderId: 2, userId: 2, shopItemId: 1, quantity: 1, totalPrice: 999.99, status: 'Pending' },
        { orderId: 3, userId: 3, shopItemId: 3, quantity: 2, totalPrice: 99.98, status: 'Shipped' },
        { orderId: 4, userId: 4, shopItemId: 5, quantity: 1, totalPrice: 666, status: 'Shipped' },
        { orderId: 5, userId: 5, shopItemId: 4, quantity: 4, totalPrice: 7.96, status: 'Shipped' },
        
    ];


    const content = document.getElementById('content');
    const ordersTable = document.createElement('table');
    ordersTable.innerHTML = `
        <thead>
            <tr>
                <th>Vartotojo ID</th>
                <th>Prekės ID</th>
                <th>Kiekis</th>
                <th>Pilna kaina</th>
                <th>Statusas</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    `;
    content.appendChild(ordersTable);

    const ordersBody = ordersTable.querySelector('tbody');

    orders.forEach((order) => {
        const orderRow = document.createElement('tr');
        orderRow.innerHTML = `
            <td>${order.userId}</td>
            <td>${order.shopItemId}</td>
            <td>${order.quantity}</td>
            <td>${order.totalPrice.toFixed(2)}</td>
            <td>${order.status}</td>
        `;
        ordersBody.appendChild(orderRow);
    });

    // Pasirinkti vartotojo ID
    const filterUserIdSelect = document.getElementById('filter-user-id');
    orders.forEach((order) => {
        const option = document.createElement('option');
        option.value = order.userId;
        option.text = `User ID ${order.userId}`;
        filterUserIdSelect.add(option);
    });

    // Valdyti filtravimą
    filterUserIdSelect.addEventListener('change', () => {
        const selectedUserId = filterUserIdSelect.value;

        // Filtro pasirinkimas
        const filteredOrders = orders.filter((order) => order.userId === parseInt(selectedUserId));
        updateOrdersDisplay(filteredOrders);
    });

    // Parodyti pasirinkimo rezultatus
    function updateOrdersDisplay(filteredOrders) {
        // Išvalyti eilutes
        while (ordersBody.firstChild) {
            ordersBody.removeChild(ordersBody.firstChild);
        }

        // Pridėti išfiltruotus duomenis
        filteredOrders.forEach((order) => {
            const orderRow = document.createElement('tr');
            orderRow.innerHTML = `
                <td>${order.userId}</td>
                <td>${order.shopItemId}</td>
                <td>${order.quantity}</td>
                <td>${order.totalPrice.toFixed(2)}</td>
                <td>${order.status}</td>
            `;
            ordersBody.appendChild(orderRow);
        });
    }
});
