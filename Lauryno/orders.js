document.addEventListener('DOMContentLoaded', function () {
    fetch('/api/orders')
        .then(response => response.json())
        .then(data => {
            const ordersTable = document.getElementById('ordersTable');

            data.forEach(order => {
                const row = ordersTable.insertRow();
                row.insertCell(0).textContent = order.id;
                // Add other order details to the row
            });
        })
        .catch(error => console.error('Error:', error));

    const userSelect = document.getElementById('userSelect');

    fetch('/api/user_roles')
        .then(response => response.json())
        .then(data => {
            data.forEach(role => {
                const option = document.createElement('option');
                option.value = role.id;
                option.textContent = role.name;
                userSelect.appendChild(option);
            });
        })
        .catch(error => console.error('Error:', error));

    userSelect.addEventListener('change', function () {
        // Implement functionality to filter orders by selected user
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // ... Puslapio įkėlimo logika ...

    const userRole = localStorage.getItem('userRole');
    const userSelect = document.getElementById('userSelect');

    if (userRole === 'admin') {
        userSelect.style.display = 'block';
    }

    userSelect.addEventListener('change', function () {
        // Implement functionality to filter orders by selected user
    });
});
