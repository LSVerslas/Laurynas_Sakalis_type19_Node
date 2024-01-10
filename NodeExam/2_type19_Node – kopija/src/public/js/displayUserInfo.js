// src/public/js/displayUserInfo.js

document.addEventListener('DOMContentLoaded', () => {
    const userInfoDiv = document.getElementById('user-info');

    // Check if the user is authenticated
    const isAuthenticated = localStorage.getItem('user_id') !== null;
    const userRole = localStorage.getItem('user_roles');

    if (isAuthenticated) {
        userInfoDiv.innerHTML = `Welcome, ${userRole === '1' ? 'Admin' : 'User'}!`;

        // Add logic to display different content based on the user's role
        if (userRole === '1') {
            userInfoDiv.innerHTML += '<p>You have admin privileges.</p>';
        } else {
            userInfoDiv.innerHTML += '<p>You have regular user privileges.</p>';
        }
    } else {
        userInfoDiv.innerHTML = 'Please log in to see user information.';
    }
});
