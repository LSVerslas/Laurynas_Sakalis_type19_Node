// src/public/js/navbar.js

document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('login-btn');
    const registerBtn = document.getElementById('register-btn');
    const logoutBtn = document.getElementById('logout-btn');
    const addItemNav = document.getElementById('nav-add-item');
    const adminDashboardNav = document.getElementById('nav-admin-dashboard');

    // Check if the user is authenticated
    const isAuthenticated = localStorage.getItem('user_id') !== null;
    const isAdmin = localStorage.getItem('user_roles') === 'admin';

    // Display appropriate buttons based on authentication
    if (isAuthenticated) {
        loginBtn.style.display = 'none';
        registerBtn.style.display = 'none';
        logoutBtn.style.display = 'inline-block';

        // Show/hide "Add Item" page based on the admin role
        if (isAdmin) {
            addItemNav.style.display = 'inline-block';
            adminDashboardNav.style.display = 'inline-block';
        } else {
            addItemNav.style.display = 'none';
            adminDashboardNav.style.display = 'none';
        }

    } else {
        loginBtn.style.display = 'inline-block';
        registerBtn.style.display = 'inline-block';
        logoutBtn.style.display = 'none';
        addItemNav.style.display = 'none';
        adminDashboardNav.style.display = 'none';
    }

    // Add event listener for logout button
    logoutBtn.addEventListener('click', () => {
        // Clear user information from localStorage
        localStorage.removeItem('user_id');
        localStorage.removeItem('email');
        localStorage.removeItem('user_roles');

        // Redirect to the login page
        window.location.href = 'login.html';
    });
});
