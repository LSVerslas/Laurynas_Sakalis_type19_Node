document.addEventListener('DOMContentLoaded', function () {
    const registerForm = document.getElementById('registerForm');

    registerForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const repeatPassword = document.getElementById('repeatPassword').value;
        const role = document.getElementById('role').value;

        if (password !== repeatPassword) {
            alert('Passwords do not match. Please try again.');
            return;
        }

        fetch('/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password, role }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                window.location.href = 'login.html';
            } else {
                alert(data.error);
            }
        })
        .catch(error => console.error('Error:', error));
    });
});
