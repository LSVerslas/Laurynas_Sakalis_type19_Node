// src/controllers/usersController.js
// Assume you have access to the User model for interacting with the database

// After validating credentials
const user = await getUserByEmailAndPassword(email, password);

if (user) {
    // Store user information in localStorage
    localStorage.setItem('user_id', user.user_id);
    localStorage.setItem('email', user.email);
    localStorage.setItem('user_roles', user.role_id);

    // Redirect to the appropriate page
    if (user.role_id === 1) {
        // Admin is logging in
        window.location.href = 'admin_dashboard.html';
    } else {
        // Regular user is logging in
        window.location.href = 'user_dashboard.html';
    }
} else {
    // Handle invalid credentials
}

// User registration controller
const registerUser = (req, res) => {
    const { name, email, password, role_id } = req.body;

    // Validate input
    if (!name || !email || !password || !role_id) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    // Check if the email is already registered
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        return res.status(400).json({ error: 'Email is already registered.' });
    }

    // Create a new user object (replace this with database insertion)
    const newUser = {
        user_id: users.length + 1,
        name,
        email,
        password, // In a real application, you should hash the password
        role_id,
    };

    // Save the user object (replace this with database insertion)
    users.push(newUser);

    res.status(201).json({ message: 'User registered successfully.' });
};

// User login controller
const loginUser = (req, res) => {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required.' });
    }

    // Check if the user exists (replace this with database query)
    const user = users.find(user => user.email === email && user.password === password);

    if (!user) {
        return res.status(401).json({ error: 'Invalid email or password.' });
    }

    // In a real application, you might generate a token for authentication

    res.status(200).json({ message: 'Login successful.', user });
};

module.exports = {
    registerUser,
    loginUser,
};
