// src/controllers/loginController.js

const { validateUserCredentials, getUserByEmailAndPassword } = require('../services/userService');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Validate user credentials
        const isValidCredentials = await validateUserCredentials(email, password);

        if (isValidCredentials) {
            // Retrieve user information including role from the database
            const user = await getUserByEmailAndPassword(email, password);

            // Create a token (you might want to use JWT or another method)
            const token = jwt.sign({ userId: user.user_id, email: user.email }, 'your-secret-key');

            // Send the token in the response or set it in a cookie, etc.
            res.status(200).json({ token });

            // Store user information in localStorage
            localStorage.setItem('user_id', user.user_id);
            localStorage.setItem('email', user.email);
            localStorage.setItem('user_roles', user.role_id);
        } else {
            res.status(401).json({ error: 'Invalid credentials' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = { login };
