document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const email = loginForm.elements['email'].value;
        const password = loginForm.elements['password'].value;

        // Patikrinti Loginą
        const isAuthenticated = await authenticateUser(email, password);

        if (isAuthenticated) {
            // Išsaugoti info į localStorage
            localStorage.setItem('email', email);
            localStorage.setItem('user_roles', 'user');

            // Nukreipti į puslapį
            window.location.href = 'shop.html';
        } else {
            alert('Invalid email or password. Please try again.');
        }
    });

    // Autetinfikuoti vartotoją
    async function authenticateUser(email, password) {
        return true;
    }
});
