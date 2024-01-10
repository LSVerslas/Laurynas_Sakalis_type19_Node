// src/public/js/login.js

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const email = loginForm.elements['email'].value;
        const password = loginForm.elements['password'].value;

        // Simulate API request to validate login credentials
        const isAuthenticated = await authenticateUser(email, password);

        if (isAuthenticated) {
            // Store user information in localStorage
            localStorage.setItem('email', email);
            localStorage.setItem('user_roles', 'user'); // Assuming user role for simplicity

            // Redirect to the shop page
            window.location.href = 'shop.html';
        } else {
            alert('Invalid email or password. Please try again.');
        }
    });

    // Simulated API request to authenticate user
    async function authenticateUser(email, password) {
        // Implement your authentication logic here (e.g., send request to backend)
        // Return true if authentication is successful, false otherwise
        return true; // Replace with actual logic
    }
});



// src/public/js/login.js

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const email = loginForm.elements['email'].value;
        const password = loginForm.elements['password'].value;

        try {
            // Send login credentials to the server
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                throw new Error('Invalid email or password');
            }

            // Parse the response JSON
            const data = await response.json();

            // Store user information in localStorage
            localStorage.setItem('user_id', data.user_id);
            localStorage.setItem('email', email);
            localStorage.setItem('user_roles', data.role); // Adjust as per your API response

            // Redirect to the shop page
            window.location.href = 'shop.html';
        } catch (error) {
            // Handle login error
            alert(error.message);
        }
    });
});
