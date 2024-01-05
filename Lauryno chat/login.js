document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        fetch('/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                localStorage.setItem('userEmail', email);
                localStorage.setItem('userRole', data.role);
                window.location.href = 'shop.html';
            } else {
                alert('Invalid email or password. Please try again.');
            }
        })
        .catch(error => console.error('Error:', error));
    });
});
