'use strict'

console.log('Login page script');

function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/api/auth/login', true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onload = function () {
        if (xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            localStorage.setItem('userEmail', response.user.email);
            localStorage.setItem('userRole', response.user.role);
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
        email: email,
        password: password
    };

    xhr.send(JSON.stringify(data));
}