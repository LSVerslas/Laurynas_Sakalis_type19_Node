document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('login-btn');
    const registerBtn = document.getElementById('register-btn');
    const logoutBtn = document.getElementById('logout-btn');
    const addItemNav = document.getElementById('nav-add-item');
    const adminDashboardNav = document.getElementById('nav-admin-dashboard');

    // Patikrinti vartotoją
    const isAuthenticated = localStorage.getItem('user_id') !== null;
    const isAdmin = localStorage.getItem('user_roles') === 'admin';

    // Parodyti galimybes pagal teises
    if (isAuthenticated) {
        loginBtn.style.display = 'none';
        registerBtn.style.display = 'none';
        logoutBtn.style.display = 'inline-block';

        // Spręsti dėl "Add Item" puslapio, pagal leidimus
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

    logoutBtn.addEventListener('click', () => {
        // Išvalyti informaciją iš localStorage
        localStorage.removeItem('user_id');
        localStorage.removeItem('email');
        localStorage.removeItem('user_roles');

        // Nukreipti į puslapį
        window.location.href = 'login.html';
    });
});
