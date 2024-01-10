// src/public/js/goToLoginPage.js

document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('login-button');

    // Add event listener for the login button
    loginButton.addEventListener('click', () => {
        // Redirect to the login page
        window.location.href = 'login.html';
    });
});
