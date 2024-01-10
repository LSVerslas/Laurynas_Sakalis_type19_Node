// src/public/js/register.js

document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('register-form');

    // Populate user roles select input (assuming available roles are hardcoded)
    const userRolesSelect = registerForm.elements['user_roles'];
    ['admin', 'user', 'guest'].forEach((role) => {
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

        // Simulate API request to check if email is available
        const isEmailAvailable = await checkEmailAvailability(email);

        if (isEmailAvailable) {
            // Simulate API request to register user
            await registerUser(name, email, password, userRoles);

            // Store user information in localStorage
            localStorage.setItem('email', email);
            localStorage.setItem('user_roles', userRoles);

            // Redirect to the shop page
            window.location.href = 'shop.html';
        } else {
            alert('Email is already in use. Please choose a different email.');
        }
    });

    // Simulated API request to check email availability
    async function checkEmailAvailability(email) {
        // Implement your logic to check if email is available
        // Return true if available, false otherwise
        return true; // Replace with actual logic
    }

    // Simulated API request to register user
    async function registerUser(name, email, password, userRoles) {
        // Implement your logic to register the user
        // This could involve sending a request to the backend
        // Return the result of the registration process
    }
});



// src/public/js/register.js

document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('register-form');

    registerForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const name = registerForm.elements['name'].value;
        const email = registerForm.elements['email'].value;
        const password = registerForm.elements['password'].value;
        const repeatPassword = registerForm.elements['repeatPassword'].value;
        const userRoles = registerForm.elements['userRoles'].value;

        if (password !== repeatPassword) {
            alert('Passwords do not match. Please try again.');
            return;
        }

        try {
            // Send registration data to the server
            const response = await fetch('/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password, userRoles }),
            });

            if (!response.ok) {
                throw new Error('Registration failed. Please check your data and try again.');
            }

            // Parse the response JSON
            const data = await response.json();

            // Store user information in localStorage
            localStorage.setItem('user_id', data.user_id);
            localStorage.setItem('email', email);
            localStorage.setItem('user_roles', userRoles);

            // Redirect to the shop page
            window.location.href = 'shop.html';
        } catch (error) {
            // Handle registration error, especially duplicate email
            alert(error.message);
        }
    });
});
