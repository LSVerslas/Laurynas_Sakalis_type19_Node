// src/public/js/orders.js

document.addEventListener('DOMContentLoaded', () => {
    // Simulated API request to fetch orders from the backend
    const orders = [
        // Sample order data
        { orderId: 1, userId: 1, shopItemId: 1, quantity: 2, totalPrice: 39.98, status: 'Pending' },
        { orderId: 2, userId: 2, shopItemId: 2, quantity: 1, totalPrice: 29.99, status: 'Shipped' },
        // Add more orders as needed
    ];

    // Display orders dynamically
    const content = document.getElementById('content');
    const ordersTable = document.createElement('table');
    ordersTable.innerHTML = `
        <thead>
            <tr>
                <th>User ID</th>
                <th>Shop Item ID</th>
                <th>Quantity</th>
                <th>Total Price</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            <!-- Order rows will be dynamically added here -->
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

    // Populate user IDs in the filter select input
    const filterUserIdSelect = document.getElementById('filter-user-id');
    orders.forEach((order) => {
        const option = document.createElement('option');
        option.value = order.userId;
        option.text = `User ID ${order.userId}`;
        filterUserIdSelect.add(option);
    });

    // Handle filter change event
    filterUserIdSelect.addEventListener('change', () => {
        const selectedUserId = filterUserIdSelect.value;

        // Filter orders based on the selected user ID and update the display
        const filteredOrders = orders.filter((order) => order.userId === parseInt(selectedUserId));
        updateOrdersDisplay(filteredOrders);
    });

    // Function to update the orders display based on filtered data
    function updateOrdersDisplay(filteredOrders) {
        // Clear existing rows
        while (ordersBody.firstChild) {
            ordersBody.removeChild(ordersBody.firstChild);
        }

        // Add filtered orders to the table
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



// src/public/js/orders.js

document.addEventListener('DOMContentLoaded', () => {
    const ordersTable = document.getElementById('orders-table');
    const userFilterSelect = document.getElementById('userFilter');

    // Fetch users for filtering
    fetch('/api/users')
        .then((response) => response.json())
        .then((users) => {
            // Populate the user filter select input dynamically
            users.forEach((user) => {
                const option = document.createElement('option');
                option.value = user.user_id;
                option.textContent = user.name;
                userFilterSelect.appendChild(option);
            });

            // Listen for user filter changes
            userFilterSelect.addEventListener('change', () => {
                const selectedUserId = userFilterSelect.value;
                fetchOrders(selectedUserId);
            });

            // Fetch all orders initially
            fetchOrders(null);
        })
        .catch((error) => {
            console.error('Error fetching users:', error);
        });

    // Function to fetch and display orders
    function fetchOrders(userId) {
        // Construct the URL based on the selected user filter
        const url = userId ? `/api/orders/user/${userId}` : '/api/orders';

        // Fetch orders from the server
        fetch(url)
            .then((response) => response.json())
            .then((orders) => {
                // Clear existing table rows
                clearTableRows();

                // Display orders dynamically
                orders.forEach((order) => {
                    const row = ordersTable.insertRow();
                    row.innerHTML = `
                        <td>${order.order_id}</td>
                        <td>${order.user_id}</td>
                        <td>${order.shop_item_id}</td>
                        <td>${order.quantity}</td>
                        <td>${order.total_price}</td>
                        <td>${order.status ? 'Completed' : 'Pending'}</td>
                    `;
                });
            })
            .catch((error) => {
                console.error('Error fetching orders:', error);
            });
    }

    // Function to clear table rows
    function clearTableRows() {
        const rowCount = ordersTable.rows.length;
        for (let i = rowCount - 1; i > 0; i--) {
            ordersTable.deleteRow(i);
        }
    }
});
