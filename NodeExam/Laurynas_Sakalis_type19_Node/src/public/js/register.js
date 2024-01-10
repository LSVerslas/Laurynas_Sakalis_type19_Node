document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('register-form');

    const userRolesSelect = registerForm.elements['user_roles'];
    ['guest', 'user', 'admin'].forEach((role) => {
        const option = document.createElement('option');
        option.value = role;
        option.text = role.charAt(0).toUpperCase() + role.slice(1);
        userRolesSelect.add(option);
    });

    registerForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const name = registerForm.elements['name'].value;
        const email = registerForm.elements['email'].value;
        const password = registerForm.elements['password'].value;
        const repeatPassword = registerForm.elements['repeatPassword'].value;
        const userRoles = registerForm.elements['user_roles'].value;

        // Patikrinti mailą
        const isEmailAvailable = await checkEmailAvailability(email);

        if (isEmailAvailable) {
            // Užregistruoti vartotoją
            await registerUser(name, email, password, userRoles);

            // Išsaugoti informaciją localStorage
            localStorage.setItem('email', email);
            localStorage.setItem('user_roles', userRoles);

            // Nukreipti į kitą puslapį
            window.location.href = 'shop.html';
        } else {
            alert('Email is already in use. Please choose a different email.');
        }
    });

    // Patikrinti mailo užimtumą
    async function checkEmailAvailability(email) {
        return true;
    }

    async function registerUser(name, email, password, userRoles) {}
    
});