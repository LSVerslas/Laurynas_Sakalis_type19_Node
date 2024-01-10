const { validateUserCredentials, getUserByEmailAndPassword } = require('../services/userService');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const isValidCredentials = await validateUserCredentials(email, password);

        if (isValidCredentials) {
            // Gauti vartotojo info iš duombazės
            const user = await getUserByEmailAndPassword(email, password);

            const token = jwt.sign({ userId: user.user_id, email: user.email }, 'your-secret-key');

            res.status(200).json({ token });

            // Išsaugoti vartotojo info į localStorage
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
