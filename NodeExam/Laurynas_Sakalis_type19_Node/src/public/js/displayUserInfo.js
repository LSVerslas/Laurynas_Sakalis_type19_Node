document.addEventListener('DOMContentLoaded', () => {
    const userInfoDiv = document.getElementById('user-info');

    // Patikrinti vartotoją
    const isAuthenticated = localStorage.getItem('user_id') !== null;
    const userRole = localStorage.getItem('user_roles');

    if (isAuthenticated) {
        userInfoDiv.innerHTML = `Welcome, ${userRole === '3' ? 'Admin' : 'User'}!`;

        // Rodyti info prisijungus, pagal teises
        if (userRole === '3') {
            userInfoDiv.innerHTML += '<p>You have admin privileges.</p>';
        } else {
            userInfoDiv.innerHTML += '<p>You have regular user privileges.</p>';
        }
    } else {
        userInfoDiv.innerHTML = 'Please log in to see user information.';
    }
});
