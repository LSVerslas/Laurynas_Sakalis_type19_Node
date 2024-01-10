const user = await getUserByEmailAndPassword(email, password);

if (user) {
    // Išsaugoti informaciją į localStorage
    localStorage.setItem('user_id', user.user_id);
    localStorage.setItem('email', user.email);
    localStorage.setItem('user_roles', user.role_id);

    // Nukreipti į puslapį
    if (user.role_id === 3) {
        // Admin prisijungė
        window.location.href = 'admin_dashboard.html';
    } else {
        // Paprastas vartotojas prisijungė
        window.location.href = 'user_dashboard.html';
    }
} else {
    res.status(401).json({ error: 'Invalid credentials.' });
}

// Registracijos valdytojas
const registerUser = (req, res) => {
    const { name, email, password, role_id } = req.body;

    if (!name || !email || !password || !role_id) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    // Patikrina mailą
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        return res.status(400).json({ error: 'Email is already registered.' });
    }

    // Sukurti vartotoją
    const newUser = {
        user_id: users.length + 1,
        name,
        email,
        password,
        role_id,
    };

    // Išsaugoti vartotoją
    users.push(newUser);

    res.status(201).json({ message: 'User registered successfully.' });
};

// Vartotojo loginas
const loginUser = (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required.' });
    }

    // Ar egzistuoja vartotojas
    const user = users.find(user => user.email === email && user.password === password);

    if (!user) {
        return res.status(401).json({ error: 'Invalid email or password.' });
    }

    res.status(200).json({ message: 'Login successful.', user });
};

module.exports = {
    registerUser,
    loginUser,
};
