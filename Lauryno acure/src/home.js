'use strict'

document.addEventListener('DOMContentLoaded', () => {
    updateNavigation();
});

function updateNavigation() {
    const userActions = document.getElementById('userActions');

    if (isLoggedIn()) {
        // Jei prisijungęs, rodyti atsijungimo mygtuką
        userActions.innerHTML = '<button onclick="logout()">Logout</button>';
    } else {
        // Jei neprisijungęs, rodyti prisijungimo ir registracijos mygtukus
        userActions.innerHTML = '<a href="login.html">Login</a> | <a href="register.html">Register</a>';
    }
}

function isLoggedIn() {
    // Patikriname, ar vartotojas prisijungęs (galite pasinaudoti localStorage ar kita būsena)
    return localStorage.getItem('loggedIn') === 'true';
}

function logout() {
    // Atsijungimo logika (galite ištrinti localStorage ar kita būseną)
    localStorage.removeItem('loggedIn');
    updateNavigation();
}

document.addEventListener('DOMContentLoaded', () => {
    updateNavigation();
});

function updateNavigation() {
    const userActions = document.getElementById('userActions');

    if (isLoggedIn()) {
        // Jei prisijungęs, rodyti atsijungimo mygtuką
        userActions.innerHTML = '<button onclick="logout()">Logout</button>';
    } else {
        // Jei neprisijungęs, rodyti prisijungimo ir registracijos mygtukus
        userActions.innerHTML = '<a href="login.html">Login</a> | <a href="register.html">Register</a>';
    }
}

function isLoggedIn() {
    // Patikriname, ar vartotojas prisijungęs (galite pasinaudoti localStorage ar kita būsena)
    return localStorage.getItem('loggedIn') === 'true';
}

function logout() {
    // Atsijungimo logika (ištriname vartotojo informaciją iš localStorage ir nukreipiame į login.html)
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userRole');
    
    window.location.href = 'login.html';
}

