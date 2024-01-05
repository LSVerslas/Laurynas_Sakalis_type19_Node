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

document.addEventListener('DOMContentLoaded', () => {
    updateNavigation();
});

function updateNavigation() {
    const userActions = document.getElementById('userActions');
    const isAdmin = localStorage.getItem('userRole') === 'admin';

    if (isLoggedIn()) {
        // Jei prisijungęs, rodyti atsijungimo mygtuką
        userActions.innerHTML = '<button onclick="logout()">Logout</button>';

        // Jei vartotojas yra admin, rodyti nuorodą į add_item.html
        if (isAdmin) {
            userActions.innerHTML += ' | <a href="add_item.html">Add Item</a>';
        }
    } else {
        // Jei neprisijungęs, rodyti prisijungimo ir registracijos mygtukus
        userActions.innerHTML = '<a href="login.html">Login</a> | <a href="register.html">Register</a>';
    }

    // Tik jei vartotojas yra prisijungęs ir admin, rodyti ištrynimo mygtuką
    const deleteButton = document.getElementById('deleteButton');
    if (deleteButton) {
        deleteButton.style.display = isLoggedIn() && isAdmin ? 'block' : 'none';
    }

    // Jei vartotojas yra prisijungęs ir admin, rodyti pasirinkimo įvestį orders.html
    const userSelect = document.getElementById('userSelect');
    if (userSelect) {
        userSelect.style.display = isLoggedIn() && isAdmin ? 'block' : 'none';
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
