'use strict'

console.log('Register page script');

function register() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const repeatPassword = document.getElementById('repeatPassword').value;
    const role = document.getElementById('role').value;

    // Patikriname, ar slaptazodziai sutampa
    if (password !== repeatPassword) {
        alert('Slaptažodžiai nesutampa');
        return;
    }

    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/api/auth/register', true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onload = function () {
        if (xhr.status === 201) {
            alert('Registracija sėkminga. Prisijunkite!');
            window.location.href = 'login.html';
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
        email: email,
        password: password,
        role: role
    };

    xhr.send(JSON.stringify(data));
}